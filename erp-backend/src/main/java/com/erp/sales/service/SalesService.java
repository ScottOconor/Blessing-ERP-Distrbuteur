package com.erp.sales.service;

import com.erp.accounting.dto.PartnerDTO;
import com.erp.accounting.entity.*;
import com.erp.accounting.repository.*;
import com.erp.accounting.service.AccountingService;
import com.erp.accounting.service.FiscalLockGuard;
import com.erp.audit.service.AuditService;
import com.erp.common.ConsigneCodes;
import com.erp.common.service.TenantGuard;
import com.erp.sync.service.SyncEventPublisher;
import com.erp.sync.entity.SyncEventType;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.common.repository.EnlevementClientRepository;
import com.erp.common.repository.EnlevementRepository;
import com.erp.common.repository.PrecompteRepository;
import com.erp.sales.repository.PrixClientArticleRepository;
import com.erp.sales.repository.RistourneRepository;
import com.erp.sales.repository.SalesInvoiceReconciliationRepository;
import com.erp.sales.dto.*;
import com.erp.sales.entity.*;
import com.erp.sales.repository.*;
import com.erp.stock.entity.Product;
import com.erp.stock.entity.StockLocation;
import com.erp.stock.entity.StockMove;
import com.erp.stock.entity.StockPicking;
import com.erp.stock.entity.StockQuant;
import com.erp.stock.repository.ProductCategoryRepository;
import com.erp.stock.repository.ProductRepository;
import com.erp.stock.entity.StockPickingType;
import com.erp.stock.entity.Warehouse;
import com.erp.stock.repository.StockLocationRepository;
import com.erp.stock.repository.StockMoveRepository;
import com.erp.stock.repository.StockPickingRepository;
import com.erp.stock.repository.StockPickingTypeRepository;
import com.erp.stock.repository.StockQuantRepository;
import com.erp.stock.repository.WarehouseRepository;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.io.OutputStream;
import java.io.UncheckedIOException;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;
import java.util.LinkedHashMap;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class SalesService {

    private final com.erp.stock.service.ProductValuationService productValuationService;
    private final SalesOrderRepository orderRepo;
    private final SalesInvoiceRepository invoiceRepo;
    private final InvoicePaymentRepository paymentRepo;
    private final ObjectMapper objectMapper;

    private final PartnerRepository partnerRepo;
    private final AccountJournalRepository journalRepo;
    private final AccountAccountRepository accountRepo;
    private final AccountMoveRepository moveRepo;
    private final AccountMoveLineRepository moveLineRepo;
    private final CompanyRepository companyRepo;
    private final ProductRepository stockProductRepo;
    private final StockQuantRepository stockQuantRepo;
    private final StockLocationRepository stockLocationRepo;
    private final StockPickingRepository stockPickingRepo;
    private final StockMoveRepository stockMoveRepo;
    private final StockPickingTypeRepository pickingTypeRepo;
    private final PrecompteRepository precompteRepo;
    private final EnlevementRepository enlevementRepo;
    private final EnlevementClientRepository enlevementClientRepo;
    private final RistourneRepository ristourneRepo;
    private final ProductCategoryRepository categoryRepo;
    private final WarehouseRepository warehouseRepo;
    private final AccountingService accountingService;
    private final SalesInvoiceReconciliationRepository reconciliationRepo;
    private final SyncEventPublisher syncEventPublisher;
    private final PrixClientArticleRepository prixClientArticleRepo;
    private final AuditService auditService;
    private final FiscalLockGuard fiscalLockGuard;
    private final TenantGuard tenantGuard;

    private static final BigDecimal ZERO = BigDecimal.ZERO;
    private static final String DEFAULT_REVENUE_ACCOUNT    = "701100";
    private static final String RABAIS_ACCOUNT             = "701901";
    private static final String DEFAULT_RECEIVABLE_ACCOUNT = "411100";
    private static final String TVA_ACCOUNT                = "443100";
    private static final String ENLEVEMENT_ACCOUNT         = "701500";
    private static final String ENLEVEMENT_TVA_ACCOUNT     = "443200";
    private static final String PSA_ACCOUNT                = "441200";
    private static final String CONSIGNE_ACCOUNT           = "419400";
    private static final String RISTOURNE_CREDIT_ACCOUNT   = "419800";
    private static final String RISTOURNE_CREDIT_GUINNESS  = "419801";
    private static final BigDecimal RISTOURNE_7019_FIXE    = new BigDecimal("201.00");
    private static final BigDecimal GUINNESS_TAXE_LIGNE    = new BigDecimal("300.00");
    private static final BigDecimal TVA_RATE               = new BigDecimal("0.1925");

    private static final java.util.Set<String> CATEGORIES_RISTOURNE_BRASSERIE = java.util.Set.of(
        "bieres 24", "bieres 12", "alcools mixtes 12", "alcools mixtes 24"
    );
    private static final java.util.Set<String> CATEGORIES_RISTOURNE_GUINNESS = java.util.Set.of(
        "bouteille guinness", "autre bierre guinness",
        "famille guinness bouteille 12",
        "famille guinness bouteille de 15",
        "famille guinness bouteille de 24"
    );

    private boolean isCategorieGuinness(String name) {
        if (name == null) return false;
        String norm = normalizeCategorie(name);
        return norm.contains("guinness") || CATEGORIES_RISTOURNE_GUINNESS.contains(norm);
    }

    // ===================== BONS DE COMMANDE =====================

    @Transactional(readOnly = true)
    public List<SalesOrderDTO> getAllOrders(Long companyId) {
        List<SalesOrder> orders = orderRepo.findByCompanyIdOrderByDateDescNameDesc(companyId);
        Map<Long, SalesInvoice> invoiceByOrderId = batchedByIds(
                orders.stream().map(SalesOrder::getId).collect(Collectors.toList()),
                invoiceRepo::findBySalesOrderIdIn
            ).stream()
            .filter(i -> i.getSalesOrder() != null)
            .collect(Collectors.toMap(i -> i.getSalesOrder().getId(), i -> i, (a, b) -> a));
        Map<Long, String> warehouseNameCache = new HashMap<>();
        return orders.stream()
                .map(o -> toOrderDTO(o, invoiceByOrderId, warehouseNameCache))
                .collect(Collectors.toList());
    }

    /** PostgreSQL refuse toute requête préparée au-delà de 65 535 paramètres (SQLSTATE 08P01) —
     *  un `IN (:orderIds)` passé tel quel explose si un client à gros volume a accumulé plus de
     *  65 535 commandes (même classe de bug que AccountingService#batchedByLineIds, cf. incident
     *  du 2026-09-16 sur les écritures comptables). On découpe en lots largement sous la limite. */
    private static final int SQL_IN_BATCH_SIZE = 10_000;

    private static <T> List<T> batchedByIds(List<Long> ids, java.util.function.Function<List<Long>, List<T>> fetcher) {
        if (ids.size() <= SQL_IN_BATCH_SIZE) return fetcher.apply(ids);
        List<T> result = new ArrayList<>();
        for (int i = 0; i < ids.size(); i += SQL_IN_BATCH_SIZE) {
            result.addAll(fetcher.apply(ids.subList(i, Math.min(i + SQL_IN_BATCH_SIZE, ids.size()))));
        }
        return result;
    }

    /**
     * Version streaming de getAllOrders : écrit le JSON directement dans le flux de la réponse
     * HTTP au fil de la lecture en base, sans jamais charger la liste complète des commandes en
     * mémoire — voir streamInvoices ci-dessus pour le contexte (OutOfMemoryError sur un très gros
     * volume). Pas de préchargement de facture/entrepôt par lot ici (nécessiterait de connaître
     * tous les IDs de commandes à l'avance, donc de matérialiser la liste) : toOrderDTO(order) fait
     * un lookup par commande, un compromis délibéré requêtes-contre-mémoire pour ce cas streamé.
     */
    @Transactional(readOnly = true)
    public void streamOrders(Long companyId, OutputStream responseOut) throws IOException {
        try (JsonGenerator gen = objectMapper.getFactory().createGenerator(responseOut);
             Stream<SalesOrder> stream = orderRepo.streamByCompanyId(companyId)) {
            gen.writeStartArray();
            stream.forEach(o -> {
                SalesOrderDTO dto = toOrderDTO(o);
                try {
                    objectMapper.writeValue(gen, dto);
                } catch (IOException e) {
                    throw new UncheckedIOException(e);
                }
            });
            gen.writeEndArray();
        } catch (UncheckedIOException e) {
            throw e.getCause();
        }
    }

    @Transactional(readOnly = true)
    public SalesOrderDTO getOrderById(Long id) {
        SalesOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Bon de commande introuvable: " + id));
        tenantGuard.check(order.getCompany() != null ? order.getCompany().getId() : null);
        return toOrderDTO(order);
    }

    public SalesOrderDTO createOrder(SalesOrderRequest req) {
        Company company = companyRepo.findById(req.getCompanyId())
                .orElseThrow(() -> new EntityNotFoundException("Société introuvable"));
        Partner partner = partnerRepo.findById(req.getPartnerId())
                .orElseThrow(() -> new EntityNotFoundException("Client introuvable"));
        AccountJournal journal = journalRepo.findById(req.getJournalId())
                .orElseThrow(() -> new EntityNotFoundException("Journal introuvable"));

        String name = generateOrderName(company.getId(), req.getDate() != null ? req.getDate() : LocalDate.now());

        SalesOrder order = SalesOrder.builder()
                .name(name)
                .date(req.getDate() != null ? req.getDate() : LocalDate.now())
                .dateEcheance(req.getDateEcheance())
                .state("draft")
                .notes(req.getNotes())
                .partner(partner)
                .journal(journal)
                .company(company)
                .warehouseId(req.getWarehouseId())
                .build();

        buildOrderLines(order, req.getLines());
        computeOrderTotals(order);

        SalesOrder saved = orderRepo.save(order);
        auditService.log("SALE_ORDER", saved.getId(), saved.getName(),
                "CREATED", "Bon de commande créé",
                AuditService.details(java.util.Map.of("client", partner.getName())),
                company.getId());
        return toOrderDTO(saved);
    }

    public SalesOrderDTO updateOrder(Long id, SalesOrderRequest req) {
        SalesOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Bon de commande introuvable: " + id));
        tenantGuard.check(order.getCompany() != null ? order.getCompany().getId() : null);

        if (!"draft".equals(order.getState())) {
            throw new IllegalStateException("Seuls les bons en brouillon peuvent être modifiés");
        }

        Partner partner = partnerRepo.findById(req.getPartnerId())
                .orElseThrow(() -> new EntityNotFoundException("Client introuvable"));
        AccountJournal journal = journalRepo.findById(req.getJournalId())
                .orElseThrow(() -> new EntityNotFoundException("Journal introuvable"));

        order.setDate(req.getDate() != null ? req.getDate() : order.getDate());
        order.setDateEcheance(req.getDateEcheance());
        order.setNotes(req.getNotes());
        order.setPartner(partner);
        order.setJournal(journal);
        if (req.getWarehouseId() != null) order.setWarehouseId(req.getWarehouseId());

        order.getLines().clear();
        buildOrderLines(order, req.getLines());
        computeOrderTotals(order);

        return toOrderDTO(orderRepo.save(order));
    }

    /**
     * Confirme le bon de commande et crée automatiquement la facture.
     */
    public SalesOrderDTO confirmOrder(Long id) {
        SalesOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Bon de commande introuvable: " + id));
        tenantGuard.check(order.getCompany() != null ? order.getCompany().getId() : null);

        if (!"draft".equals(order.getState()) && !"confirmed".equals(order.getState())) {
            throw new IllegalStateException("Ce bon ne peut pas être confirmé");
        }

        order.setState("confirmed");
        orderRepo.save(order);

        // Vérifier le stock disponible avant de facturer
        validateStockAvailability(order);

        // Réserver le stock (incrementer reservedQuantity)
        reserveStockForOrder(order);

        // Créer la facture depuis le bon
        createInvoiceFromOrder(order);

        order.setState("invoiced");
        SalesOrder invoiced = orderRepo.save(order);
        SalesOrderDTO result = toOrderDTO(invoiced);
        syncEventPublisher.publish(SyncEventType.SALE_ORDER_CONFIRMED, String.valueOf(id), result);
        auditService.log("SALE_ORDER", invoiced.getId(), invoiced.getName(),
                "CONFIRMED", "Bon confirmé et facturé", invoiced.getCompany().getId());
        return result;
    }

    public SalesOrderDTO cancelOrder(Long id) {
        SalesOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Bon de commande introuvable: " + id));
        tenantGuard.check(order.getCompany() != null ? order.getCompany().getId() : null);

        if ("invoiced".equals(order.getState())) {
            throw new IllegalStateException("Un bon déjà facturé ne peut pas être annulé");
        }
        order.setState("cancelled");
        // Libérer les réservations de stock si le bon était confirmé
        if (order.getLines() != null) {
            releaseStockReservation(order);
        }
        SalesOrder cancelled = orderRepo.save(order);
        SalesOrderDTO result = toOrderDTO(cancelled);
        // Réutilise SALE_ORDER_CONFIRMED (upsert par id côté Hub, l'état "cancelled" du payload
        // suffit à mettre à jour le document) — il n'existe pas de SALE_ORDER_CANCELLED dédié, et
        // sans republish le Hub garde le bon figé à "confirmed" pour toujours.
        syncEventPublisher.publish(SyncEventType.SALE_ORDER_CONFIRMED, String.valueOf(id), result);
        auditService.log("SALE_ORDER", cancelled.getId(), cancelled.getName(),
                "CANCELLED", "Bon annulé", cancelled.getCompany().getId());
        return result;
    }

    // ===================== FACTURES =====================

    @Transactional(readOnly = true)
    public List<SalesInvoiceDTO> getAllInvoices(Long companyId) {
        return mapInvoicesBatched(invoiceRepo.findByCompanyIdAndTypeOrderByDateDescNameDesc(companyId, "invoice"));
    }

    // ===================== AVOIRS =====================

    @Transactional(readOnly = true)
    public List<SalesInvoiceDTO> getAllAvoirs(Long companyId) {
        return mapInvoicesBatched(invoiceRepo.findByCompanyIdAndTypeOrderByDateDescNameDesc(companyId, "credit_note"));
    }

    /** Précharge catégories/entrepôts/soldes-partenaires une seule fois pour toute la liste — évite
     *  le N+1 par facture (computePartnerBalance + sumAvailableCredits tournaient une fois PAR
     *  FACTURE, y compris pour des factures répétées du même partenaire — sur un écran "Factures"
     *  de plusieurs milliers de lignes, ça faisait des milliers de requêtes d'agrégation évitables). */
    private List<SalesInvoiceDTO> mapInvoicesBatched(List<SalesInvoice> invoices) {
        Long companyId = invoices.stream()
                .map(i -> i.getCompany() != null ? i.getCompany().getId() : null)
                .filter(java.util.Objects::nonNull).findFirst().orElse(null);
        Map<Long, String> catNames = companyId != null
                ? categoryRepo.findByCompanyIdOrderByNameAsc(companyId).stream()
                    .collect(Collectors.toMap(c -> c.getId(), c -> c.getName(), (a, b) -> a))
                : Map.of();
        Map<Long, String> warehouseNameCache = new HashMap<>();
        Map<Long, java.math.BigDecimal[]> partnerBalanceCache = new HashMap<>();
        return invoices.stream()
                .map(inv -> buildInvoiceDTO(inv, List.of(), catNames, warehouseNameCache, partnerBalanceCache))
                .collect(Collectors.toList());
    }

    /**
     * Version streaming de getAllInvoices/getAllAvoirs : écrit le JSON directement dans le flux de
     * la réponse HTTP au fil de l'eau, sans jamais charger la liste complète des factures (entités
     * + DTO) en mémoire. Avec une base ayant un très gros volume de factures, mapInvoicesBatched
     * faisait planter la JVM en OutOfMemoryError (toute la liste + tous les DTO retenus en mémoire
     * simultanément avant sérialisation). Catégories/entrepôts restent préchargés d'un coup (bornés
     * par le nombre de catégories/entrepôts de la société, pas par le nombre de factures).
     */
    @Transactional(readOnly = true)
    public void streamInvoices(Long companyId, String type, OutputStream responseOut) throws IOException {
        Map<Long, String> catNames = categoryRepo.findByCompanyIdOrderByNameAsc(companyId).stream()
                .collect(Collectors.toMap(c -> c.getId(), c -> c.getName(), (a, b) -> a));
        Map<Long, String> warehouseNameCache = warehouseRepo.findByCompanyIdOrderByNameAsc(companyId).stream()
                .collect(Collectors.toMap(Warehouse::getId, Warehouse::getName, (a, b) -> a, HashMap::new));
        Map<Long, java.math.BigDecimal[]> partnerBalanceCache = new HashMap<>();

        try (JsonGenerator gen = objectMapper.getFactory().createGenerator(responseOut);
             Stream<SalesInvoice> stream = invoiceRepo.streamByCompanyIdAndType(companyId, type)) {
            gen.writeStartArray();
            stream.forEach(inv -> {
                SalesInvoiceDTO dto = buildInvoiceDTO(inv, List.of(), catNames, warehouseNameCache, partnerBalanceCache);
                try {
                    objectMapper.writeValue(gen, dto);
                } catch (IOException e) {
                    throw new UncheckedIOException(e);
                }
            });
            gen.writeEndArray();
        } catch (UncheckedIOException e) {
            throw e.getCause();
        }
    }

    /**
     * Crée un avoir à partir d'une facture validée (copie les lignes en inversant le sens).
     */
    public SalesInvoiceDTO createAvoirFromInvoice(Long invoiceId, com.erp.sales.dto.AvoirRequest req) {
        SalesInvoice original = invoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + invoiceId));
        tenantGuard.check(original.getCompany() != null ? original.getCompany().getId() : null);

        if (!"posted".equals(original.getState()) && !"paid".equals(original.getState())
                && !"partiellement_extournee".equals(original.getState())) {
            throw new IllegalStateException("Seules les factures validées peuvent faire l'objet d'un avoir");
        }
        if (!"invoice".equals(original.getType())) {
            throw new IllegalStateException("Impossible de créer un avoir sur un avoir");
        }

        // Si la facture est payée, annuler tous les paiements actifs avant de créer l'avoir
        if ("paid".equals(original.getState())) {
            List<InvoicePayment> activePayments = paymentRepo.findByInvoiceIdOrderByDateDesc(original.getId())
                    .stream()
                    .filter(p -> !"reversed".equals(p.getState()))
                    .collect(Collectors.toList());
            for (InvoicePayment payment : activePayments) {
                reversePayment(payment.getId());
            }
            // Recharger la facture : l'état est maintenant "posted" après annulation des paiements
            original = invoiceRepo.findById(invoiceId)
                    .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + invoiceId));
            tenantGuard.check(original.getCompany() != null ? original.getCompany().getId() : null);
        }

        boolean isPartiel = req != null && "partiel".equals(req.getAvoirType())
                && req.getLines() != null && !req.getLines().isEmpty();

        LocalDate avoirDate = original.getDate();
        String avoirName = generateAvoirName(original.getCompany().getId(), avoirDate);

        SalesInvoice avoir = SalesInvoice.builder()
                .name(avoirName)
                .date(avoirDate)
                .state("draft")
                .type("credit_note")
                .originalInvoice(original)
                .notes("Avoir " + (isPartiel ? "partiel" : "intégral") + " sur " + original.getName())
                .partner(original.getPartner())
                .journal(original.getJournal())
                .company(original.getCompany())
                // Conserver l'entrepôt source pour que le stock retourne au bon endroit
                .warehouseId(original.getWarehouseId())
                .montantPaye(ZERO)
                .build();

        List<SalesInvoiceLine> avoirLines;

        // Taux précompte du client (utilisé pour recalculer prixUnitaireTTC dans l'avoir partiel)
        Long avoirPartnerId  = original.getPartner()  != null ? original.getPartner().getId()  : null;
        Long avoirCompanyId  = original.getCompany()  != null ? original.getCompany().getId()  : null;
        BigDecimal avoirTauxPrecompte = (avoirPartnerId != null && avoirCompanyId != null)
                ? getPartnerSalePrecompteTaux(avoirPartnerId, avoirCompanyId) : ZERO;

        if (isPartiel) {
            // Avoir partiel : seulement les lignes/quantités demandées
            Map<Long, BigDecimal> qtyMap = req.getLines().stream()
                    .filter(l -> l.getLineId() != null && l.getQuantite() != null)
                    .collect(Collectors.toMap(
                            com.erp.sales.dto.AvoirRequest.LineItem::getLineId,
                            com.erp.sales.dto.AvoirRequest.LineItem::getQuantite,
                            (a, b) -> a));

            avoirLines = original.getLines().stream()
                    .filter(ol -> qtyMap.containsKey(ol.getId()))
                    .map(ol -> {
                        BigDecimal qty = qtyMap.get(ol.getId())
                                .min(ol.getQuantity() != null ? ol.getQuantity() : ZERO)
                                .max(ZERO);
                        if (qty.compareTo(ZERO) == 0) return null;

                        BigDecimal pu = ol.getPrixUnitaire() != null ? ol.getPrixUnitaire() : ZERO;
                        BigDecimal remise = ol.getTauxRemise() != null ? ol.getTauxRemise() : ZERO;
                        BigDecimal tva = ol.getTauxTVA() != null ? ol.getTauxTVA() : ZERO;
                        BigDecimal brut = qty.multiply(pu);
                        BigDecimal ht = brut.subtract(brut.multiply(remise).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP));
                        BigDecimal montantTVA = ht.multiply(tva).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
                        BigDecimal ttc = ht.add(montantTVA);
                        // Prix TTC = HT × (1 + TVA% + Précompte%)
                        BigDecimal pcRateAvPartiel = ol.isConsigne() ? ZERO : avoirTauxPrecompte;
                        BigDecimal prixUnitaireTTC = pu
                                .multiply(BigDecimal.ONE
                                        .add(tva.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP))
                                        .add(pcRateAvPartiel.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP)))
                                .setScale(0, RoundingMode.HALF_UP);

                        // Frais d'enlèvement proportionnels à la quantité retournée
                        BigDecimal fraisEnlev = ZERO;
                        if (ol.getFraisEnlevement() != null && ol.getQuantity() != null
                                && ol.getQuantity().compareTo(ZERO) > 0) {
                            BigDecimal tauxEnlev = ol.getFraisEnlevement().divide(ol.getQuantity(), 6, RoundingMode.HALF_UP);
                            fraisEnlev = tauxEnlev.multiply(qty).setScale(2, RoundingMode.HALF_UP);
                        }

                        // Précompte proportionnel
                        BigDecimal precompte = ZERO;
                        if (ol.getPrecompte() != null && ol.getQuantity() != null
                                && ol.getQuantity().compareTo(ZERO) > 0) {
                            BigDecimal tauxPc = ol.getPrecompte().divide(ol.getQuantity(), 6, RoundingMode.HALF_UP);
                            precompte = tauxPc.multiply(qty).setScale(2, RoundingMode.HALF_UP);
                        }

                        BigDecimal rabaisUnit = ol.getRabaisUnitaire() != null ? ol.getRabaisUnitaire() : ZERO;
                        BigDecimal rabaisHT = qty.multiply(rabaisUnit).setScale(2, RoundingMode.HALF_UP);

                        return SalesInvoiceLine.builder()
                                .invoice(avoir)
                                .productId(ol.getProductId())
                                .productCode(ol.getProductCode())
                                .description(ol.getDescription())
                                .quantity(qty)
                                .prixUnitaire(pu)
                                .prixUnitaireTTC(prixUnitaireTTC)
                                .tauxRemise(remise)
                                .tauxTVA(tva)
                                .accountCode(ol.getAccountCode())
                                .categoryId(ol.getCategoryId())
                                .montantHT(ht)
                                .montantTVA(montantTVA)
                                .montantTTC(ttc)
                                .fraisEnlevement(fraisEnlev)
                                .precompte(precompte)
                                .consigne(ol.isConsigne())
                                .guinessTaxe(ol.getGuinessTaxe() != null ? ol.getGuinessTaxe() : ZERO)
                                .rabaisUnitaire(rabaisUnit)
                                .totalRabaisLigne(rabaisHT)
                                .totalRabaisLigneTTC(computeRabaisTTC(rabaisHT, tva, pcRateAvPartiel))
                                .build();
                    })
                    .filter(java.util.Objects::nonNull)
                    .collect(Collectors.toList());

            if (avoirLines.isEmpty()) {
                throw new IllegalArgumentException("Aucune ligne valide pour l'avoir partiel");
            }
        } else {
            // Avoir intégral : copie toutes les lignes
            avoirLines = original.getLines().stream()
                    .map(ol -> SalesInvoiceLine.builder()
                            .invoice(avoir)
                            .productId(ol.getProductId())
                            .productCode(ol.getProductCode())
                            .description(ol.getDescription())
                            .quantity(ol.getQuantity())
                            .prixUnitaire(ol.getPrixUnitaire())
                            .prixUnitaireTTC(ol.getPrixUnitaireTTC())
                            .tauxRemise(ol.getTauxRemise())
                            .tauxTVA(ol.getTauxTVA())
                            .accountCode(ol.getAccountCode())
                            .categoryId(ol.getCategoryId())
                            .montantHT(ol.getMontantHT())
                            .montantTVA(ol.getMontantTVA())
                            .montantTTC(ol.getMontantTTC())
                            .precompte(ol.getPrecompte())
                            .fraisEnlevement(ol.getFraisEnlevement())
                            .consigne(ol.isConsigne())
                            .guinessTaxe(ol.getGuinessTaxe())
                            .rabaisUnitaire(ol.getRabaisUnitaire())
                            .totalRabaisLigne(ol.getTotalRabaisLigne())
                            .totalRabaisLigneTTC(ol.getTotalRabaisLigneTTC())
                            .build())
                    .collect(Collectors.toList());
        }

        avoir.setLines(avoirLines);
        computeInvoiceTotals(avoir);

        SalesInvoice savedAvoir = invoiceRepo.save(avoir);

        // Avoir intégral → la facture est entièrement annulée
        // Avoir partiel  → la facture passe en partiellement_extournee (toujours visible en stats)
        original.setState(isPartiel ? "partiellement_extournee" : "extournee");
        invoiceRepo.save(original);
        republishInvoiceSync(original);

        auditService.log("SALE_INVOICE", original.getId(), original.getName(),
                "AVOIR_CREATED", "Avoir " + (isPartiel ? "partiel" : "intégral") + " créé → " + savedAvoir.getName(), original.getCompany().getId());
        auditService.log("SALE_INVOICE", savedAvoir.getId(), savedAvoir.getName(),
                "CREATED", "Avoir créé (facture origine : " + original.getName() + ")",
                savedAvoir.getCompany() != null ? savedAvoir.getCompany().getId() : original.getCompany().getId());

        return toInvoiceDTOWithPayments(savedAvoir);
    }

    /**
     * Crée un avoir manuel (non lié à une facture).
     */
    public SalesInvoiceDTO createAvoirManuel(SalesInvoiceRequest req) {
        req = req.toBuilder().type("credit_note").build();
        return createInvoice(req);
    }

    @Transactional(readOnly = true)
    public SalesInvoiceDTO getInvoiceById(Long id) {
        SalesInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);
        return toInvoiceDTOWithPayments(invoice);
    }

    public SalesInvoiceDTO createInvoice(SalesInvoiceRequest req) {
        Company company = companyRepo.findById(req.getCompanyId())
                .orElseThrow(() -> new EntityNotFoundException("Société introuvable"));
        Partner partner = partnerRepo.findById(req.getPartnerId())
                .orElseThrow(() -> new EntityNotFoundException("Client introuvable"));
        AccountJournal journal = journalRepo.findById(req.getJournalId())
                .orElseThrow(() -> new EntityNotFoundException("Journal introuvable"));

        String type = (req.getType() != null && !req.getType().isBlank()) ? req.getType() : "invoice";
        LocalDate invoiceDate = req.getDate() != null ? req.getDate() : LocalDate.now();
        String name = "credit_note".equals(type)
                ? generateAvoirName(company.getId(), invoiceDate)
                : generateInvoiceName(company.getId(), invoiceDate);

        // Facture d'origine (pour avoirs manuels)
        SalesInvoice originalInvoice = (req.getOriginalInvoiceId() != null)
                ? invoiceRepo.findById(req.getOriginalInvoiceId()).orElse(null)
                : null;

        SalesInvoice invoice = SalesInvoice.builder()
                .name(name)
                .date(invoiceDate)
                .dateEcheance(req.getDateEcheance())
                .state("draft")
                .type(type)
                .originalInvoice(originalInvoice)
                .notes(req.getNotes())
                .partner(partner)
                .journal(journal)
                .company(company)
                .warehouseId(req.getWarehouseId())
                .montantPaye(ZERO)
                .build();

        buildInvoiceLines(invoice, req.getLines());
        computeInvoiceTotals(invoice);

        SalesInvoice saved = invoiceRepo.save(invoice);
        auditService.log("SALE_INVOICE", saved.getId(), saved.getName(),
                "CREATED", "Facture créée", saved.getCompany().getId());
        return toInvoiceDTOWithPayments(saved);
    }

    public SalesInvoiceDTO updateInvoice(Long id, SalesInvoiceRequest req) {
        SalesInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);

        if (!"draft".equals(invoice.getState())) {
            throw new IllegalStateException("Seules les factures en brouillon peuvent être modifiées");
        }

        Partner partner = partnerRepo.findById(req.getPartnerId())
                .orElseThrow(() -> new EntityNotFoundException("Client introuvable"));
        AccountJournal journal = journalRepo.findById(req.getJournalId())
                .orElseThrow(() -> new EntityNotFoundException("Journal introuvable"));

        invoice.setDate(req.getDate() != null ? req.getDate() : invoice.getDate());
        invoice.setDateEcheance(req.getDateEcheance());
        invoice.setNotes(req.getNotes());
        invoice.setPartner(partner);
        invoice.setJournal(journal);
        if (req.getWarehouseId() != null) invoice.setWarehouseId(req.getWarehouseId());

        invoice.getLines().clear();
        buildInvoiceLines(invoice, req.getLines());
        computeInvoiceTotals(invoice);

        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
    }

    /**
     * Valide une facture ou un avoir et génère l'écriture comptable OHADA.
     *
     * Facture (invoice):
     *   Dr 411100 (client)       = Net à payer (TTC + consignes)
     *   Cr 701100 (produits HT)  = Σ HT lignes non-consigne
     *   Cr 441200 (PSA)          = Total précompte
     *   Cr 443100 (TVA)          = Total TVA
     *   Cr 701500 (enlèvement HT)= Total frais d'enlèvement HT
     *   Cr 443200 (TVA enlèv.)   = TVA sur frais d'enlèvement
     *   Cr/Dr 419400 (emballages)= Signe selon quantité consigne
     *
     * Avoir (credit_note) — écritures inversées.
     */
    public SalesInvoiceDTO postInvoice(Long id) {
        SalesInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);

        if (!"draft".equals(invoice.getState())) {
            throw new IllegalStateException("Seules les documents en brouillon peuvent être validés");
        }

        boolean isAvoir = "credit_note".equals(invoice.getType());

        // Validation des champs obligatoires
        List<String> missing = new ArrayList<>();
        if (invoice.getPartner() == null) missing.add("Client");
        if (invoice.getJournal() == null) missing.add("Journal");
        if (invoice.getDate() == null) missing.add("Date");
        if (!isAvoir && invoice.getWarehouseId() == null) missing.add("Entrepôt");
        if (invoice.getLines() == null || invoice.getLines().isEmpty()) missing.add("Lignes de facturation");
        if (!missing.isEmpty()) {
            throw new IllegalArgumentException("Champs obligatoires manquants : " + String.join(", ", missing));
        }

        // Vérifier le stock disponible de chaque article avant de valider la facture
        // (bloque la validation plutôt que de laisser createStockMovementsOnInvoicePost
        // plafonner silencieusement la quantité à 0 en cas de stock insuffisant).
        validateStockAvailabilityForInvoice(invoice, isAvoir);

        Long companyId = invoice.getCompany().getId();
        LocalDate date = invoice.getDate();
        fiscalLockGuard.assertPeriodOpen(invoice.getCompany(), date);

        // ---- Trouver les comptes ----
        String receivableCode = (invoice.getPartner().getReceivableAccountCode() != null
                && !invoice.getPartner().getReceivableAccountCode().isBlank())
                ? invoice.getPartner().getReceivableAccountCode()
                : DEFAULT_RECEIVABLE_ACCOUNT;

        AccountAccount receivableAccount = accountRepo.findFirstByCodeAndCompanyId(receivableCode, companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("4111", companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("411",  companyId))
                .orElseThrow(() -> new EntityNotFoundException("Compte client introuvable (411100/4111/411) : " + receivableCode));

        AccountAccount tvaAccount = accountRepo.findFirstByCodeAndCompanyId(TVA_ACCOUNT, companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("4431", companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("443",  companyId))
                .orElse(null);

        String docRef = isAvoir ? "Avoir " : "Facture ";
        String libelle411 = isAvoir
                ? "Avoir " + invoice.getName() + " - " + invoice.getPartner().getName()
                : "Facture " + invoice.getName() + " - " + invoice.getPartner().getName();

        // ---- Construire l'écriture ----
        AccountMove move = AccountMove.builder()
                .name(invoice.getName())
                .date(date)
                .ref(docRef + invoice.getName())
                .state("draft")
                .journal(invoice.getJournal())
                .company(invoice.getCompany())
                .partner(invoice.getPartner())
                .build();

        List<AccountMoveLine> moveLines = new ArrayList<>();

        // Comptes résolus une seule fois
        AccountAccount revenueAccount = accountRepo.findFirstByCodeAndCompanyId(DEFAULT_REVENUE_ACCOUNT, companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("7011", companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("701",  companyId))
                .orElseThrow(() -> new EntityNotFoundException("Compte de produit introuvable (701100/7011/701)"));

        AccountAccount consigneAccount = accountRepo.findFirstByCodeAndCompanyId(CONSIGNE_ACCOUNT, companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("4194", companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("419",  companyId))
                .orElse(null);

        // Lignes produits 701100 (non-consigne) et emballages 419400 (consigne, signe selon quantité)
        // HT arrondi au franc pour la comptabilisation (FCFA n'a pas de centimes) — l'affichage facture
        // (invoice.getTotalHT(), etc.) garde sa précision au centime, seule l'écriture est arrondie ici.
        for (SalesInvoiceLine line : invoice.getLines()) {
            if (line.isConsigne()) {
                BigDecimal ttcLine = line.getMontantTTC() != null ? line.getMontantTTC() : ZERO;
                if (ttcLine.compareTo(ZERO) != 0 && consigneAccount != null) {
                    boolean positif = ttcLine.compareTo(ZERO) > 0;
                    BigDecimal absAmt = ttcLine.abs();
                    // Consigne positive : Cr 419400 (facture) / Dr 419400 (avoir)
                    // Déconsigne négative : Dr 419400 (facture) / Cr 419400 (avoir)
                    moveLines.add(AccountMoveLine.builder()
                            .move(move).account(consigneAccount).partner(invoice.getPartner())
                            .name(line.getDescription()).date(date)
                            .debit(isAvoir ? (positif ? absAmt : ZERO) : (positif ? ZERO : absAmt))
                            .credit(isAvoir ? (positif ? ZERO : absAmt) : (positif ? absAmt : ZERO))
                            .journal(invoice.getJournal()).company(invoice.getCompany())
                            .build());
                }
            } else {
                BigDecimal ht = (line.getMontantHT() != null ? line.getMontantHT() : ZERO)
                        .setScale(0, RoundingMode.HALF_UP);
                if (ht.compareTo(ZERO) != 0) {
                    String accCode = (line.getAccountCode() != null && !line.getAccountCode().isBlank())
                            ? line.getAccountCode() : DEFAULT_REVENUE_ACCOUNT;
                    AccountAccount acc = accCode.equals(DEFAULT_REVENUE_ACCOUNT) ? revenueAccount
                            : accountRepo.findFirstByCodeAndCompanyId(accCode, companyId).orElse(revenueAccount);
                    moveLines.add(AccountMoveLine.builder()
                            .move(move).account(acc).partner(invoice.getPartner())
                            .name(line.getDescription()).date(date)
                            .debit(isAvoir ? ht : ZERO)
                            .credit(isAvoir ? ZERO : ht)
                            .journal(invoice.getJournal()).company(invoice.getCompany())
                            .build());
                }
            }
        }

        // Ligne PSA 441200 : crédit pour facture, débit pour avoir
        BigDecimal totalPrecompte = (invoice.getTotalPrecompte() != null ? invoice.getTotalPrecompte() : ZERO)
                .setScale(0, RoundingMode.HALF_UP);
        if (totalPrecompte.compareTo(ZERO) != 0) {
            AccountAccount psaAccount = accountRepo.findFirstByCodeAndCompanyId(PSA_ACCOUNT, companyId)
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("4412", companyId))
                    .orElse(null);
            if (psaAccount != null) {
                moveLines.add(AccountMoveLine.builder()
                        .move(move).account(psaAccount).partner(invoice.getPartner())
                        .name("PSA - " + invoice.getName()).date(date)
                        .debit(isAvoir ? totalPrecompte : ZERO)
                        .credit(isAvoir ? ZERO : totalPrecompte)
                        .journal(invoice.getJournal()).company(invoice.getCompany())
                        .build());
            }
        }

        // Ligne TVA collectée 443100 : crédit pour facture, débit pour avoir
        BigDecimal totalTVA = (invoice.getTotalTVA() != null ? invoice.getTotalTVA() : ZERO)
                .setScale(0, RoundingMode.HALF_UP);
        if (totalTVA.compareTo(ZERO) != 0 && tvaAccount != null) {
            moveLines.add(AccountMoveLine.builder()
                    .move(move).account(tvaAccount).partner(invoice.getPartner())
                    .name((isAvoir ? "TVA avoir " : "TVA collectée - ") + invoice.getName()).date(date)
                    .debit(isAvoir ? totalTVA : ZERO)
                    .credit(isAvoir ? ZERO : totalTVA)
                    .journal(invoice.getJournal()).company(invoice.getCompany())
                    .build());
        }

        // Taxe Guinness 419801 : crédit pour facture, débit pour avoir
        BigDecimal totalGuinessTaxe = (invoice.getTotalGuinessTaxe() != null ? invoice.getTotalGuinessTaxe() : ZERO)
                .setScale(0, RoundingMode.HALF_UP);
        if (totalGuinessTaxe.compareTo(ZERO) > 0) {
            AccountAccount acct419801 = accountRepo.findFirstByCodeAndCompanyId(RISTOURNE_CREDIT_GUINNESS, companyId)
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("419801", companyId))
                    .orElse(null);
            if (acct419801 != null) {
                moveLines.add(AccountMoveLine.builder()
                        .move(move).account(acct419801).partner(invoice.getPartner())
                        .name("Ristourne Guinness - " + invoice.getName()).date(date)
                        .debit(isAvoir ? totalGuinessTaxe : ZERO)
                        .credit(isAvoir ? ZERO : totalGuinessTaxe)
                        .journal(invoice.getJournal()).company(invoice.getCompany())
                        .build());
            } else {
                log.warn("[GUINNESS TAXE] Compte 419801 introuvable pour société {} — ligne non générée", companyId);
            }
        }

        // Ligne rabais accordés 701901 : débit pour facture, crédit pour avoir.
        // Le net client est diminué du rabais TTC, donc l'écriture utilise aussi le TTC.
        BigDecimal totalRabaisTTC = (invoice.getTotalRabaisTTC() != null ? invoice.getTotalRabaisTTC() : ZERO)
                .setScale(0, RoundingMode.HALF_UP);
        if (totalRabaisTTC.compareTo(ZERO) > 0) {
            AccountAccount rabaisAccount = findOrCreateAccount(
                    RABAIS_ACCOUNT, "Rabais, remises, ristournes accordées sur articles",
                    "expense", companyId, invoice.getJournal(), invoice.getCompany());
            if (rabaisAccount != null) {
                moveLines.add(AccountMoveLine.builder()
                        .move(move).account(rabaisAccount).partner(invoice.getPartner())
                        .name("Rabais accordés - " + invoice.getName()).date(date)
                        .debit(isAvoir ? ZERO : totalRabaisTTC)
                        .credit(isAvoir ? totalRabaisTTC : ZERO)
                        .journal(invoice.getJournal()).company(invoice.getCompany())
                        .build());
            }
        }

        // Ligne frais d'enlèvement 701500 (montant HT) + TVA 443200
        BigDecimal totalEnlevementHT = (invoice.getFraisEnlevementHT() != null ? invoice.getFraisEnlevementHT() : ZERO)
                .setScale(0, RoundingMode.HALF_UP);
        if (totalEnlevementHT.compareTo(ZERO) != 0) {
            AccountAccount enlAccount = accountRepo.findFirstByCodeAndCompanyId(ENLEVEMENT_ACCOUNT, companyId)
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("7015", companyId))
                    .orElse(null);
            if (enlAccount != null) {
                moveLines.add(AccountMoveLine.builder()
                        .move(move).account(enlAccount).partner(invoice.getPartner())
                        .name("Frais d'enlèvement - " + invoice.getName()).date(date)
                        .debit(isAvoir ? totalEnlevementHT : ZERO)
                        .credit(isAvoir ? ZERO : totalEnlevementHT)
                        .journal(invoice.getJournal()).company(invoice.getCompany())
                        .build());
            }
        }

        BigDecimal totalEnlevementTVA = (invoice.getFraisEnlevementTVA() != null ? invoice.getFraisEnlevementTVA() : ZERO)
                .setScale(0, RoundingMode.HALF_UP);
        if (totalEnlevementTVA.compareTo(ZERO) != 0) {
            AccountAccount enlTvaAccount = accountRepo.findFirstByCodeAndCompanyId(ENLEVEMENT_TVA_ACCOUNT, companyId)
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("4432", companyId))
                    .orElse(null);
            if (enlTvaAccount != null) {
                moveLines.add(AccountMoveLine.builder()
                        .move(move).account(enlTvaAccount).partner(invoice.getPartner())
                        .name("TVA frais d'enlèvement - " + invoice.getName()).date(date)
                        .debit(isAvoir ? totalEnlevementTVA : ZERO)
                        .credit(isAvoir ? ZERO : totalEnlevementTVA)
                        .journal(invoice.getJournal()).company(invoice.getCompany())
                        .build());
            }
        }

        // Ligne client 411100 : construite en dernier, à partir de la somme exacte des lignes déjà
        // arrondies ci-dessus — garantit un débit = crédit exact, sans ligne d'écart ni ajustement post-hoc.
        BigDecimal sumDebitOther = moveLines.stream().map(AccountMoveLine::getDebit).reduce(ZERO, BigDecimal::add);
        BigDecimal sumCreditOther = moveLines.stream().map(AccountMoveLine::getCredit).reduce(ZERO, BigDecimal::add);
        BigDecimal debit411 = (isAvoir ? sumDebitOther.subtract(sumCreditOther) : sumCreditOther.subtract(sumDebitOther))
                .setScale(0, RoundingMode.HALF_UP);

        moveLines.add(0, AccountMoveLine.builder()
                .move(move).account(receivableAccount).partner(invoice.getPartner())
                .name(libelle411).date(date)
                .debit(isAvoir ? ZERO : debit411)
                .credit(isAvoir ? debit411 : ZERO)
                .journal(invoice.getJournal()).company(invoice.getCompany())
                .build());

        // Aligne le net à payer affiché/dû sur ce qui est réellement comptabilisé
        invoice.setNetAPayer(debit411);

        move.setLines(moveLines);
        AccountMove savedMove = moveRepo.save(move);
        moveRepo.updateState(savedMove.getId(), "posted");
        syncEventPublisher.publish(SyncEventType.ACCOUNT_MOVE_FROM_SALE, String.valueOf(savedMove.getId()),
                buildMoveSyncPayload(savedMove, "Écriture facture vente"));

        // Lier l'écriture au document
        invoice.setAccountMove(savedMove);
        invoice.setState("posted");
        // Avoir généré par une extourne (createAvoirFromInvoice, originalInvoice renseigné) : il ne
        // règle qu'une facture déjà annulée, il ne doit donc jamais rester en "crédit en circulation"
        // imputable — soldé automatiquement dès sa validation, quel que soit le statut de paiement
        // de la facture d'origine. Un avoir manuel/ristourne (originalInvoice=null) reste, lui, un
        // vrai crédit disponible à imputer manuellement (cf. sumAvailableCredits/applyCreditToInvoice).
        boolean isExtourneAvoir = isAvoir && invoice.getOriginalInvoice() != null;
        if (isExtourneAvoir) {
            invoice.setMontantPaye(invoice.getNetAPayer().abs());
            invoice.setMontantDu(ZERO);
            invoice.setState("paid");
        } else {
            invoice.setMontantPaye(ZERO);
            // Pour les avoirs, montantDu = crédit disponible (valeur absolue du netAPayer négatif)
            invoice.setMontantDu(isAvoir ? invoice.getNetAPayer().abs() : invoice.getNetAPayer());
        }
        invoice.setConfirmedBy(auditService.getCurrentUsername());
        invoice.setConfirmedAt(java.time.LocalDateTime.now());

        invoiceRepo.save(invoice);

        // Créer les mouvements de stock physiques
        createStockMovementsOnInvoicePost(invoice, isAvoir);

        // Libérer les réservations du bon source (le stock est maintenant sorti physiquement)
        if (!isAvoir && invoice.getSalesOrder() != null && invoice.getSalesOrder().getLines() != null) {
            releaseStockReservation(invoice.getSalesOrder());
        }

        // Écriture ristourne : positive pour factures, inversée pour avoirs
        generateRistourneEcriture(invoice, companyId, isAvoir);

        SalesInvoiceDTO result = toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
        syncEventPublisher.publish(SyncEventType.SALE_INVOICE_POSTED, String.valueOf(id), result);
        auditService.log("SALE_INVOICE", id, invoice.getName(),
                "CONFIRMED", "Facture validée", invoice.getCompany().getId());
        return result;
    }

    /**
     * Annule une facture client (brouillon, validée ou payée).
     * Pour les factures validées/payées, cela ne crée PAS d'écriture inverse.
     * Utiliser reverseInvoiceEntries() pour extourner les écritures comptables.
     */
    public SalesInvoiceDTO setInvoiceWarehouse(Long invoiceId, Long warehouseId) {
        SalesInvoice invoice = invoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + invoiceId));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);
        if (!"draft".equals(invoice.getState())) {
            throw new IllegalStateException("L'entrepôt ne peut être modifié que sur un document en brouillon");
        }
        invoice.setWarehouseId(warehouseId);
        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
    }

    public SalesInvoiceDTO cancelInvoice(Long id) {
        SalesInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);

        if ("cancelled".equals(invoice.getState())) {
            throw new IllegalStateException("Cette facture est déjà annulée");
        }

        // Une facture de vente VALIDÉE/PAYÉE ne peut plus être annulée directement : la seule
        // façon de l'annuler comptablement est de créer un avoir dessus (bouton « Créer un avoir »).
        // Un brouillon (jamais posté, aucun impact stock/comptable) reste annulable normalement.
        if (!"credit_note".equals(invoice.getType())
                && ("posted".equals(invoice.getState()) || "paid".equals(invoice.getState()))) {
            throw new IllegalStateException(
                "Une facture validée ne peut plus être annulée directement. " +
                "Créez un avoir sur cette facture pour l'annuler comptablement.");
        }

        // Bloquer l'annulation si des paiements actifs existent — ils doivent être inversés d'abord
        long activePayments = paymentRepo.findByInvoiceIdOrderByDateDesc(invoice.getId()).stream()
                .filter(p -> "posted".equals(p.getState()))
                .count();
        if (activePayments > 0) {
            throw new IllegalStateException(
                "Impossible d'annuler : " + activePayments + " paiement(s) actif(s) sur cette facture. " +
                "Veuillez d'abord inverser tous les paiements avant d'annuler.");
        }

        // Annulation d'un avoir validé : restituer le stock retourné (l'avoir avait
        // réintégré la marchandise en stock ; l'annulation la ressort) et remettre la
        // facture d'origine en état "validé".
        if ("credit_note".equals(invoice.getType())
                && ("posted".equals(invoice.getState()) || "paid".equals(invoice.getState()))) {
            reverseSalesAvoirStock(invoice);
            restoreOriginalInvoiceAfterAvoirCancel(invoice);
        }

        // Annuler une facture brouillon issue d'un bon DOIT libérer le stock réservé,
        // SANS avoir à annuler le bon. On recharge le bon (avec ses lignes) pour garantir la
        // libération même si invoice.getSalesOrder() est un proxy lazy aux lignes non chargées.
        if ("draft".equals(invoice.getState()) && invoice.getSalesOrder() != null) {
            SalesOrder order = orderRepo.findById(invoice.getSalesOrder().getId())
                    .orElse(invoice.getSalesOrder());
            releaseStockReservation(order);
            // Le bon reste un bon confirmé (jamais annulé) et redevient re-facturable
            if ("invoiced".equals(order.getState())) {
                order.setState("confirmed");
                orderRepo.save(order);
            }
        }

        invoice.setState("cancelled");
        invoice.setCancelledBy(auditService.getCurrentUsername());
        invoice.setCancelledAt(java.time.LocalDateTime.now());
        SalesInvoiceDTO cancelled = toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
        syncEventPublisher.publish(SyncEventType.SALE_INVOICE_CANCELLED, String.valueOf(id), cancelled);
        auditService.log("SALE_INVOICE", id, invoice.getName(),
                "CANCELLED", "Facture annulée", invoice.getCompany().getId());
        return cancelled;
    }

    /**
     * Extourne les écritures comptables d'une facture client annulée (et de ses paiements).
     * À appeler manuellement après cancelInvoice().
     */
    public SalesInvoiceDTO reverseInvoiceEntries(Long id) {
        SalesInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);

        if (!"cancelled".equals(invoice.getState())) {
            throw new IllegalStateException("La facture doit être annulée avant d'inverser les écritures");
        }

        // L'extourne doit être datée à la date de la facture (même période comptable que
        // l'opération qu'elle annule), pas à la date du jour où l'utilisateur clique.
        LocalDate reversalDate = invoice.getDate() != null ? invoice.getDate() : LocalDate.now();
        fiscalLockGuard.assertPeriodOpen(invoice.getCompany(), reversalDate);

        // 1. Extourner l'écriture de la facture
        if (invoice.getAccountMove() != null && "posted".equals(invoice.getAccountMove().getState())) {
            createReversalMove(invoice.getAccountMove(), reversalDate);
        }

        // 1bis. Extourner l'écriture de variation de stock des avoirs (STK/<nom>),
        // non liée à invoice.accountMove mais générée lors de la validation.
        if ("credit_note".equals(invoice.getType())) {
            moveRepo.findFirstByNameAndCompanyId("STK/" + invoice.getName(), invoice.getCompany().getId())
                    .filter(m -> "posted".equals(m.getState()))
                    .ifPresent(m -> createReversalMove(m, reversalDate));
        }

        // 2. Extourner les écritures de chaque paiement
        for (InvoicePayment payment : invoice.getPayments()) {
            if (payment.getAccountMove() != null && "posted".equals(payment.getAccountMove().getState())) {
                createReversalMove(payment.getAccountMove(), reversalDate);
                payment.setState("cancelled");
                paymentRepo.save(payment);
            }
        }

        invoice.setMontantPaye(ZERO);
        invoice.setMontantDu(ZERO);

        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
    }

    /** Crée et valide une écriture extourne (débit↔crédit inversés). */
    private AccountMove createReversalMove(AccountMove original, LocalDate date) {
        AccountMove reversal = AccountMove.builder()
                .name("EXT-" + original.getName())
                .date(date)
                .ref("Extourne de " + original.getName())
                .state("draft")
                .journal(original.getJournal())
                .company(original.getCompany())
                .partner(original.getPartner())
                .build();

        List<AccountMoveLine> reversalLines = new ArrayList<>();
        for (AccountMoveLine l : moveLineRepo.findByMoveId(original.getId())) {
            reversalLines.add(AccountMoveLine.builder()
                    .move(reversal)
                    .account(l.getAccount())
                    .partner(l.getPartner())
                    .name("Extourne - " + (l.getName() != null ? l.getName() : ""))
                    .date(date)
                    .debit(l.getCredit() != null ? l.getCredit() : ZERO)
                    .credit(l.getDebit() != null ? l.getDebit() : ZERO)
                    .journal(original.getJournal())
                    .company(original.getCompany())
                    .build());
        }
        reversal.setLines(reversalLines);
        AccountMove saved = moveRepo.save(reversal);
        moveRepo.updateState(saved.getId(), "posted");

        return saved;
    }

    /**
     * Restitue le stock d'un avoir client annulé : l'avoir avait réintégré la marchandise
     * retournée dans l'entrepôt (quant +absQty par ligne) lors de sa validation ; l'annulation
     * ressort cette marchandise (quant -absQty) et trace un picking sortant "ANN/VTE".
     */
    private void reverseSalesAvoirStock(SalesInvoice avoir) {
        Long companyId = avoir.getCompany().getId();

        List<StockLocation> internalLocs = stockLocationRepo.findByUsage(companyId, "internal");
        List<StockLocation> customerLocs = stockLocationRepo.findByUsage(companyId, "customer");
        if (internalLocs.isEmpty()) {
            log.warn("Aucun emplacement interne — restitution stock avoir {} ignorée", avoir.getName());
            return;
        }

        StockLocation internalLoc = resolveSalesInternalLocation(companyId, avoir.getWarehouseId(), internalLocs);
        final StockLocation internalLocation = internalLoc;
        StockLocation customerLoc = customerLocs.isEmpty() ? internalLocs.get(0) : customerLocs.get(0);

        // Mêmes produits physiques que ceux mouvementés lors de la validation de l'avoir
        record LineProduct(SalesInvoiceLine line, com.erp.stock.entity.Product product) {}
        List<LineProduct> productLines = new ArrayList<>();
        for (SalesInvoiceLine l : avoir.getLines()) {
            com.erp.stock.entity.Product p = null;
            if (l.getProductId() != null) {
                p = stockProductRepo.findById(l.getProductId()).orElse(null);
            }
            if (p == null && l.getProductCode() != null && !l.getProductCode().isBlank()) {
                p = stockProductRepo.findFirstByDefaultCodeAndCompanyId(l.getProductCode(), companyId).orElse(null);
            }
            if (p == null) continue;
            boolean isConsigneProd = l.isConsigne() || ConsigneCodes.isConsigne(l.getProductCode(), companyId);
            if ("service".equals(p.getType()) && !isConsigneProd) continue;
            productLines.add(new LineProduct(l, p));
        }
        if (productLines.isEmpty()) {
            log.warn("Aucun produit physique — restitution stock avoir {} ignorée", avoir.getName());
            return;
        }

        // Type de picking sortant (préférer celui de l'entrepôt de l'avoir)
        List<StockPickingType> outTypes = pickingTypeRepo.findByCompanyIdAndCodeOrderByNameAsc(companyId, "outgoing");
        final Long avWhId = avoir.getWarehouseId();
        Long pickingTypeId = outTypes.isEmpty() ? 1L : outTypes.stream()
                .filter(pt -> avWhId != null && avWhId.equals(pt.getWarehouseId()))
                .map(StockPickingType::getId).findFirst()
                .orElse(outTypes.get(0).getId());

        Integer seq = stockPickingRepo.findMaxSeq(companyId, "ANN/VTE");
        String pickingName = "ANN/VTE/" + String.format("%05d", (seq == null ? 0 : seq) + 1);

        StockPicking picking = StockPicking.builder()
                .name(pickingName)
                .pickingTypeId(pickingTypeId)
                .pickingTypeCode("outgoing")
                .locationId(internalLoc.getId())
                .locationDestId(customerLoc.getId())
                .partnerId(avoir.getPartner().getId())
                .partnerName(avoir.getPartner().getName())
                .state("done")
                .origin(avoir.getName())
                .notes("Annulation avoir " + avoir.getName())
                .companyId(companyId)
                .scheduledDate(avoir.getDate())
                .dateDone((avoir.getDate() != null ? avoir.getDate() : LocalDate.now()).atTime(LocalTime.now()))
                .build();

        List<StockMove> moves = new ArrayList<>();
        for (LineProduct lp : productLines) {
            var product = lp.product();
            BigDecimal qty = lp.line().getQuantity() != null ? lp.line().getQuantity() : BigDecimal.ONE;
            BigDecimal absQty = qty.abs();

            // Ligne positive à la validation de l'avoir = entrée en stock ; ici on la ressort.
            // Ligne négative (sens inverse) = sortie à la validation ; ici on la restitue en entrée.
            boolean qtyNegative = qty.compareTo(ZERO) < 0;
            Long moveSrcId  = qtyNegative ? customerLoc.getId() : internalLoc.getId();
            Long moveDestId = qtyNegative ? internalLoc.getId() : customerLoc.getId();

            moves.add(StockMove.builder()
                    .picking(picking)
                    .productId(product.getId())
                    .productCode(product.getDefaultCode())
                    .productName(product.getName())
                    .qtyDemanded(absQty)
                    .qtyDone(absQty)
                    .priceUnit(lp.line().getPrixUnitaire() != null ? lp.line().getPrixUnitaire() : ZERO)
                    .locationId(moveSrcId)
                    .locationDestId(moveDestId)
                    .state("done")
                    .companyId(companyId)
                    .build());

            StockQuant quant = stockQuantRepo
                    .findFirstByProductIdAndLocationIdAndCompanyId(product.getId(), internalLocation.getId(), companyId)
                    .orElseGet(() -> StockQuant.builder()
                            .productId(product.getId()).locationId(internalLocation.getId())
                            .companyId(companyId).quantity(ZERO).reservedQuantity(ZERO).build());
            if (qtyNegative) {
                quant.setQuantity(quant.getQuantity().add(absQty));
            } else {
                BigDecimal newQty = quant.getQuantity().subtract(absQty);
                quant.setQuantity(newQty.compareTo(ZERO) < 0 ? ZERO : newQty);
            }
            stockQuantRepo.save(quant);
        }

        picking.setMoves(moves);
        stockPickingRepo.save(picking);
        syncEventPublisher.publish(SyncEventType.STOCK_PICKING_FROM_SALE, String.valueOf(picking.getId()),
                buildPickingSyncPayload(picking, "Annulation avoir vente " + avoir.getName()));
        log.info("Stock restitué (annulation avoir vente) : {} ({} lignes) pour {}", pickingName, moves.size(), avoir.getName());
    }

    /**
     * Restitue le stock d'une facture de vente validée/payée annulée : la validation avait sorti
     * la marchandise du stock interne (quant -absQty par ligne). L'annulation inverse ce mouvement
     * (quant +absQty, sauf déconsigne qui est ré-inversée) et trace un picking entrant "ANN/VTE".
     */
    private void reverseSalesInvoiceStock(SalesInvoice invoice) {
        Long companyId = invoice.getCompany().getId();

        List<StockLocation> internalLocs = stockLocationRepo.findByUsage(companyId, "internal");
        List<StockLocation> customerLocs = stockLocationRepo.findByUsage(companyId, "customer");
        if (internalLocs.isEmpty()) {
            log.warn("Aucun emplacement interne — restitution stock facture {} ignorée", invoice.getName());
            return;
        }

        StockLocation internalLoc = resolveSalesInternalLocation(companyId, invoice.getWarehouseId(), internalLocs);
        final StockLocation internalLocation = internalLoc;
        StockLocation customerLoc = customerLocs.isEmpty() ? internalLocs.get(0) : customerLocs.get(0);

        // Mêmes produits physiques que ceux mouvementés lors de la validation de la facture
        record LineProduct(SalesInvoiceLine line, com.erp.stock.entity.Product product) {}
        List<LineProduct> productLines = new ArrayList<>();
        for (SalesInvoiceLine l : invoice.getLines()) {
            com.erp.stock.entity.Product p = null;
            if (l.getProductId() != null) {
                p = stockProductRepo.findById(l.getProductId()).orElse(null);
            }
            if (p == null && l.getProductCode() != null && !l.getProductCode().isBlank()) {
                p = stockProductRepo.findFirstByDefaultCodeAndCompanyId(l.getProductCode(), companyId).orElse(null);
            }
            if (p == null) continue;
            boolean isConsigneProd = l.isConsigne() || ConsigneCodes.isConsigne(l.getProductCode(), companyId);
            if ("service".equals(p.getType()) && !isConsigneProd) continue;
            productLines.add(new LineProduct(l, p));
        }
        if (productLines.isEmpty()) {
            log.warn("Aucun produit physique — restitution stock facture {} ignorée", invoice.getName());
            return;
        }

        // Type de picking entrant (préférer celui de l'entrepôt de la facture)
        List<StockPickingType> inTypes = pickingTypeRepo.findByCompanyIdAndCodeOrderByNameAsc(companyId, "incoming");
        final Long invWhId = invoice.getWarehouseId();
        Long pickingTypeId = inTypes.isEmpty() ? 1L : inTypes.stream()
                .filter(pt -> invWhId != null && invWhId.equals(pt.getWarehouseId()))
                .map(StockPickingType::getId).findFirst()
                .orElse(inTypes.get(0).getId());

        Integer seq = stockPickingRepo.findMaxSeq(companyId, "ANN/VTE");
        String pickingName = "ANN/VTE/" + String.format("%05d", (seq == null ? 0 : seq) + 1);

        StockPicking picking = StockPicking.builder()
                .name(pickingName)
                .pickingTypeId(pickingTypeId)
                .pickingTypeCode("incoming")
                .locationId(customerLoc.getId())
                .locationDestId(internalLoc.getId())
                .partnerId(invoice.getPartner().getId())
                .partnerName(invoice.getPartner().getName())
                .state("done")
                .origin(invoice.getName())
                .notes("Annulation facture " + invoice.getName())
                .companyId(companyId)
                .scheduledDate(invoice.getDate())
                .dateDone((invoice.getDate() != null ? invoice.getDate() : LocalDate.now()).atTime(LocalTime.now()))
                .build();

        List<StockMove> moves = new ArrayList<>();
        for (LineProduct lp : productLines) {
            var product = lp.product();
            BigDecimal qty = lp.line().getQuantity() != null ? lp.line().getQuantity() : BigDecimal.ONE;
            BigDecimal absQty = qty.abs();

            // Ligne négative à la validation (retour, quel que soit l'article) = entrée en stock ;
            // ici on la ressort. Ligne positive (vente normale) = sortie à la validation ; ici on
            // la restitue en entrée.
            boolean qtyNegative = qty.compareTo(ZERO) < 0;
            Long moveSrcId  = qtyNegative ? internalLoc.getId() : customerLoc.getId();
            Long moveDestId = qtyNegative ? customerLoc.getId() : internalLoc.getId();

            moves.add(StockMove.builder()
                    .picking(picking)
                    .productId(product.getId())
                    .productCode(product.getDefaultCode())
                    .productName(product.getName())
                    .qtyDemanded(absQty)
                    .qtyDone(absQty)
                    .priceUnit(lp.line().getPrixUnitaire() != null ? lp.line().getPrixUnitaire() : ZERO)
                    .locationId(moveSrcId)
                    .locationDestId(moveDestId)
                    .state("done")
                    .companyId(companyId)
                    .build());

            StockQuant quant = stockQuantRepo
                    .findFirstByProductIdAndLocationIdAndCompanyId(product.getId(), internalLocation.getId(), companyId)
                    .orElseGet(() -> StockQuant.builder()
                            .productId(product.getId()).locationId(internalLocation.getId())
                            .companyId(companyId).quantity(ZERO).reservedQuantity(ZERO).build());
            if (qtyNegative) {
                BigDecimal newQty = quant.getQuantity().subtract(absQty);
                quant.setQuantity(newQty.compareTo(ZERO) < 0 ? ZERO : newQty);
            } else {
                quant.setQuantity(quant.getQuantity().add(absQty));
            }
            stockQuantRepo.save(quant);
        }

        picking.setMoves(moves);
        stockPickingRepo.save(picking);
        syncEventPublisher.publish(SyncEventType.STOCK_PICKING_FROM_SALE, String.valueOf(picking.getId()),
                buildPickingSyncPayload(picking, "Annulation facture vente " + invoice.getName()));
        log.info("Stock restitué (annulation facture vente) : {} ({} lignes) pour {}", pickingName, moves.size(), invoice.getName());
    }

    /**
     * Remet la facture d'origine d'un avoir annulé en état "validé" lorsque l'avoir était
     * intégral (la facture avait basculé en "extournee"). Les avoirs partiels laissent la
     * facture d'origine inchangée (plusieurs avoirs partiels possibles).
     */
    private void restoreOriginalInvoiceAfterAvoirCancel(SalesInvoice avoir) {
        if (avoir.getOriginalInvoice() == null) return;
        SalesInvoice original = invoiceRepo.findById(avoir.getOriginalInvoice().getId()).orElse(null);
        if (original == null) return;
        if ("extournee".equals(original.getState())) {
            original.setState("posted");
            invoiceRepo.save(original);
            republishInvoiceSync(original);
            auditService.log("SALE_INVOICE", original.getId(), original.getName(),
                    "AVOIR_CANCELLED", "Avoir " + avoir.getName() + " annulé — facture réactivée",
                    original.getCompany().getId());
        }
    }

    // ===================== PAIEMENTS =====================

    /**
     * Enregistre un paiement et génère l'écriture comptable.
     * Facture normale : Dr 521/571 (trésorerie) = montant / Cr 411x (client) = montant.
     * Avoir (credit_note) : sens inversé — Dr 411x (client) / Cr 521/571 (trésorerie), puisque
     * l'avoir a déjà crédité le compte client à sa validation ; "enregistrer un paiement" sur un
     * avoir signifie ici rembourser en espèces/banque le crédit encore disponible.
     */
    public InvoicePaymentDTO createPayment(InvoicePaymentRequest req) {
        SalesInvoice invoice = invoiceRepo.findById(req.getInvoiceId())
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable"));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);

        // "partiellement_extournee" (avoir partiel émis) doit rester payable pour le solde restant
        // dû — sans cet état, une facture partiellement extournée devenait impossible à solder
        // (bug : le pendant achats l'autorise déjà, voir PurchaseService.createPayment).
        if (!"posted".equals(invoice.getState()) && !"paid".equals(invoice.getState())
                && !"partiellement_extournee".equals(invoice.getState())) {
            throw new IllegalStateException("La facture doit être validée avant d'enregistrer un paiement");
        }

        boolean isAvoir = "credit_note".equals(invoice.getType());

        AccountJournal journal = journalRepo.findById(req.getJournalId())
                .orElseThrow(() -> new EntityNotFoundException("Journal introuvable"));

        if (!"cash".equals(journal.getType()) && !"bank".equals(journal.getType())) {
            throw new IllegalArgumentException(
                "Le journal \"" + journal.getName() + "\" n'est pas un journal de caisse ou de banque. " +
                "Veuillez sélectionner le journal Caisse (CAI) ou Banque (BNQ).");
        }

        Company company = invoice.getCompany();
        LocalDate date = req.getDate() != null ? req.getDate() : LocalDate.now();
        fiscalLockGuard.assertPeriodOpen(company, date);
        BigDecimal amount = req.getAmount();

        if (isAvoir) {
            BigDecimal montantDu = invoice.getMontantDu() != null ? invoice.getMontantDu() : ZERO;
            if (amount.compareTo(ZERO) <= 0 || amount.compareTo(montantDu) > 0) {
                throw new IllegalArgumentException(
                    "Montant invalide — doit être > 0 et ≤ " + montantDu + " FCFA (crédit disponible)");
            }
        }

        // Compte trésorerie (débit) : utiliser le compte défini sur le journal, c'est lui qui fait foi.
        // Fallback uniquement si le journal n'a pas de compte configuré.
        AccountAccount treasuryAccount = journal.getDefaultDebitAccount();
        if (treasuryAccount == null) {
            if ("cash".equals(journal.getType())) {
                treasuryAccount = accountRepo.findFirstByCodeAndCompanyId("571", company.getId())
                        .or(() -> accountRepo.findFirstByCodeAndCompanyId("572", company.getId()))
                        .orElseThrow(() -> new EntityNotFoundException("Compte de caisse introuvable (571) — configurez le compte sur le journal"));
            } else {
                treasuryAccount = accountRepo.findFirstByCodeAndCompanyId("521", company.getId())
                        .or(() -> accountRepo.findFirstByCodeAndCompanyId("522", company.getId()))
                        .orElseThrow(() -> new EntityNotFoundException("Compte bancaire introuvable (521) — configurez le compte sur le journal"));
            }
        }

        // Compte client (crédit)
        String receivableCode = (invoice.getPartner().getReceivableAccountCode() != null
                && !invoice.getPartner().getReceivableAccountCode().isBlank())
                ? invoice.getPartner().getReceivableAccountCode()
                : DEFAULT_RECEIVABLE_ACCOUNT;

        AccountAccount receivableAccount = accountRepo.findFirstByCodeAndCompanyId(receivableCode, company.getId())
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("4111", company.getId()))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("411",  company.getId()))
                .orElseThrow(() -> new EntityNotFoundException("Compte client introuvable (411100/4111/411) : " + receivableCode));

        // ---- Créer l'écriture de paiement ----
        String paymentName = generatePaymentName(company.getId(), date);

        String moveLabel = (isAvoir ? "Remboursement " : "Paiement ") + invoice.getName();
        AccountMove move = AccountMove.builder()
                .name(paymentName)
                .date(date)
                .ref(moveLabel)
                .state("posted")
                .journal(journal)
                .company(company)
                .partner(invoice.getPartner())
                .build();

        // Facture normale : Dr trésorerie / Cr client. Avoir : sens inversé (Dr client / Cr trésorerie).
        AccountAccount debitAccount = isAvoir ? receivableAccount : treasuryAccount;
        AccountAccount creditAccount = isAvoir ? treasuryAccount : receivableAccount;

        List<AccountMoveLine> lines = List.of(
                AccountMoveLine.builder()
                        .move(move)
                        .account(debitAccount)
                        .partner(invoice.getPartner())
                        .name(moveLabel)
                        .date(date)
                        .debit(amount)
                        .credit(ZERO)
                        .journal(journal)
                        .company(company)
                        .build(),
                AccountMoveLine.builder()
                        .move(move)
                        .account(creditAccount)
                        .partner(invoice.getPartner())
                        .name(moveLabel)
                        .date(date)
                        .debit(ZERO)
                        .credit(amount)
                        .journal(journal)
                        .company(company)
                        .build()
        );
        move.setLines(new ArrayList<>(lines));
        AccountMove savedMove = moveRepo.save(move);
        syncEventPublisher.publish(SyncEventType.ACCOUNT_MOVE_FROM_SALE_PAYMENT, String.valueOf(savedMove.getId()),
                buildMoveSyncPayload(savedMove, "Paiement client"));

        // ---- Enregistrer le paiement ----
        InvoicePayment payment = InvoicePayment.builder()
                .name(paymentName)
                .date(date)
                .amount(amount)
                .memo(req.getMemo())
                .state("posted")
                .invoice(invoice)
                .journal(journal)
                .company(company)
                .accountMove(savedMove)
                .build();

        paymentRepo.save(payment);
        accountingService.updateDailyBalance(journal.getId(), company.getId(), date);

        // ---- Mettre à jour les totaux de la facture ----
        if (isAvoir) {
            // Le crédit disponible (montantDu) diminue directement du montant remboursé — même
            // logique que applyCreditToInvoice, car netAPayer est négatif pour un avoir et ne peut
            // pas servir de base au calcul générique (netAPayer - totalPaye) utilisé ci-dessous.
            BigDecimal montantDu = (invoice.getMontantDu() != null ? invoice.getMontantDu() : ZERO)
                    .subtract(amount).setScale(2, RoundingMode.HALF_UP);
            invoice.setMontantPaye((invoice.getMontantPaye() != null ? invoice.getMontantPaye() : ZERO).add(amount));
            invoice.setMontantDu(montantDu.max(ZERO));
            if (montantDu.compareTo(ZERO) <= 0) {
                invoice.setState("paid");
            }
        } else {
            BigDecimal totalPaye = paymentRepo.sumPostedPaymentsByInvoice(invoice.getId());
            invoice.setMontantPaye(totalPaye);
            BigDecimal du = (invoice.getNetAPayer() != null ? invoice.getNetAPayer() : ZERO).subtract(totalPaye);
            invoice.setMontantDu(du.max(ZERO));

            if (du.compareTo(ZERO) <= 0) {
                invoice.setState("paid");
            }
        }
        invoiceRepo.save(invoice);
        // La facture (montantPaye/montantDu/state) vient de changer — SALE_PAYMENT_CREATED ne
        // notifie le Hub que du paiement lui-même, jamais de l'état mis à jour de la facture.
        // Sans ce republish, une facture qui passe "confirmed" -> "paid" reste figée "confirmed"
        // côté Hub pour toujours (le Hub ne consomme aucun événement de paiement pour ses propres
        // documents facture).
        syncEventPublisher.publish(SyncEventType.SALE_INVOICE_POSTED, String.valueOf(invoice.getId()),
                toInvoiceDTOWithPayments(invoice));

        InvoicePaymentDTO paymentResult = toPaymentDTO(payment);
        syncEventPublisher.publish(SyncEventType.SALE_PAYMENT_CREATED, String.valueOf(payment.getId()), paymentResult);
        auditService.log("SALE_INVOICE", invoice.getId(), invoice.getName(),
                isAvoir ? "REFUND_ADDED" : "PAYMENT_ADDED",
                AuditService.details(java.util.Map.of("montant", payment.getAmount(), "reference", payment.getName() != null ? payment.getName() : "")),
                invoice.getCompany().getId());
        return paymentResult;
    }

    /**
     * Liste détaillée des avoirs clients disponibles ("crédits en circulation") — un par avoir,
     * avec son solde restant — pour permettre à l'utilisateur de choisir lequel imputer,
     * plutôt qu'un seul total agrégé (cf. sumAvailableCredits utilisé pour l'affichage global).
     */
    @Transactional(readOnly = true)
    public List<com.erp.sales.dto.AvailableCreditDTO> getAvailableCredits(Long partnerId, Long companyId) {
        return invoiceRepo.findAvailableCreditNotes(partnerId, companyId).stream()
                .map(c -> com.erp.sales.dto.AvailableCreditDTO.builder()
                        .id(c.getId()).name(c.getName()).date(c.getDate())
                        .montantTotal(c.getNetAPayer() != null ? c.getNetAPayer().abs() : ZERO)
                        .montantDu(c.getMontantDu() != null ? c.getMontantDu() : ZERO)
                        .notes(c.getNotes())
                        .originalInvoiceId(c.getOriginalInvoice() != null ? c.getOriginalInvoice().getId() : null)
                        .originalInvoiceName(c.getOriginalInvoice() != null ? c.getOriginalInvoice().getName() : null)
                        .build())
                .collect(Collectors.toList());
    }

    /**
     * Utilise les avoirs disponibles du client pour compenser partiellement ou totalement une facture.
     * Aucune écriture comptable n'est créée (les avoirs ont déjà Cr 411100 lors de leur validation).
     */
    @Transactional
    public SalesInvoiceDTO applyCreditToInvoice(Long invoiceId, java.math.BigDecimal amount, Long companyId) {
        return applyCreditToInvoice(invoiceId, amount, companyId, null);
    }

    /**
     * @param creditNoteId si renseigné, impute exclusivement sur cet avoir précis (choix explicite
     *                     de l'utilisateur) au lieu de la sélection FIFO automatique.
     */
    @Transactional
    public SalesInvoiceDTO applyCreditToInvoice(Long invoiceId, java.math.BigDecimal amount, Long companyId,
                                                 Long creditNoteId) {
        SalesInvoice invoice = invoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable"));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);
        if (!"posted".equals(invoice.getState())) {
            throw new IllegalStateException("Seules les factures validées acceptent une compensation");
        }
        if (!companyId.equals(invoice.getCompany().getId())) {
            throw new IllegalArgumentException("Société incohérente");
        }
        Long partnerId = invoice.getPartner().getId();
        java.math.BigDecimal montantDu = invoice.getMontantDu() != null ? invoice.getMontantDu() : ZERO;

        if (amount.compareTo(ZERO) <= 0 || amount.compareTo(montantDu) > 0) {
            throw new IllegalArgumentException(
                "Montant invalide — doit être > 0 et ≤ " + montantDu + " FCFA (reste dû)");
        }

        List<SalesInvoice> credits = invoiceRepo.findAvailableCreditNotes(partnerId, companyId);
        if (creditNoteId != null) {
            // Choix explicite de l'utilisateur : n'imputer que sur cet avoir précis
            SalesInvoice chosen = credits.stream()
                    .filter(c -> c.getId().equals(creditNoteId))
                    .findFirst()
                    .orElseThrow(() -> new IllegalArgumentException(
                            "Avoir introuvable ou déjà soldé pour ce client"));
            credits = List.of(chosen);
        }
        java.math.BigDecimal totalAvailable = credits.stream()
                .map(c -> c.getMontantDu() != null ? c.getMontantDu() : ZERO)
                .reduce(ZERO, java.math.BigDecimal::add);

        if (amount.compareTo(totalAvailable) > 0) {
            throw new IllegalArgumentException(
                "Crédit disponible insuffisant — disponible : " + totalAvailable + " FCFA");
        }

        java.math.BigDecimal remaining = amount;
        for (SalesInvoice credit : credits) {
            if (remaining.compareTo(ZERO) <= 0) break;
            java.math.BigDecimal creditDu = credit.getMontantDu() != null ? credit.getMontantDu() : ZERO;
            java.math.BigDecimal toApply = remaining.min(creditDu);

            // Réduire le montant disponible de l'avoir
            credit.setMontantPaye((credit.getMontantPaye() != null ? credit.getMontantPaye() : ZERO).add(toApply));
            credit.setMontantDu(creditDu.subtract(toApply).setScale(2, RoundingMode.HALF_UP));
            if (credit.getMontantDu().compareTo(ZERO) == 0) credit.setState("paid");
            invoiceRepo.save(credit);
            syncEventPublisher.publish(SyncEventType.SALE_INVOICE_POSTED, String.valueOf(credit.getId()),
                    toInvoiceDTOWithPayments(credit));

            // Enregistrer la compensation comme paiement sur la facture (traçabilité)
            String pmtName = generatePaymentName(invoice.getCompany().getId(), LocalDate.now());
            paymentRepo.save(InvoicePayment.builder()
                    .name(pmtName).date(LocalDate.now()).amount(toApply)
                    .memo("Crédit " + credit.getName())
                    .state("posted")
                    .invoice(invoice)
                    .company(invoice.getCompany())
                    .creditNoteId(credit.getId())
                    .build());

            remaining = remaining.subtract(toApply);
        }

        // Recalculer la facture à partir du total de tous ses paiements
        java.math.BigDecimal totalPaye = paymentRepo.sumPostedPaymentsByInvoice(invoice.getId());
        invoice.setMontantPaye(totalPaye);
        java.math.BigDecimal newDu = (invoice.getNetAPayer() != null ? invoice.getNetAPayer() : ZERO)
                .subtract(totalPaye).max(ZERO);
        invoice.setMontantDu(newDu);
        if (newDu.compareTo(ZERO) == 0) invoice.setState("paid");

        SalesInvoiceDTO creditResult = toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
        syncEventPublisher.publish(SyncEventType.SALE_INVOICE_POSTED, String.valueOf(invoice.getId()), creditResult);
        auditService.log("SALE_INVOICE", invoice.getId(), invoice.getName(),
                "CREDIT_APPLIED", "Avoir compensé",
                AuditService.details(Map.of("montant", amount + " FCFA")),
                invoice.getCompany().getId());
        return creditResult;
    }

    /** Retourne le solde net et le crédit disponible d'un partenaire. */
    @Transactional(readOnly = true)
    public Map<String, java.math.BigDecimal> getPartnerBalanceInfo(Long partnerId, Long companyId) {
        java.math.BigDecimal balance = moveLineRepo.computePartnerBalance(partnerId, companyId);
        java.math.BigDecimal credit  = invoiceRepo.sumAvailableCredits(partnerId, companyId);
        return Map.of("balance", balance, "credit", credit);
    }

    @Transactional(readOnly = true)
    public List<InvoicePaymentDTO> getPaymentsByInvoice(Long invoiceId) {
        return paymentRepo.findByInvoiceIdOrderByDateDesc(invoiceId)
                .stream().map(this::toPaymentDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<InvoicePaymentDTO> getAllPayments(Long companyId) {
        return paymentRepo.findByCompanyIdOrderByDateDesc(companyId)
                .stream().map(this::toPaymentDTO).collect(Collectors.toList());
    }

    public InvoicePaymentDTO reversePayment(Long paymentId) {
        InvoicePayment payment = paymentRepo.findById(paymentId)
                .orElseThrow(() -> new EntityNotFoundException("Paiement introuvable"));
        tenantGuard.check(payment.getCompany() != null ? payment.getCompany().getId() : null);

        if ("reversed".equals(payment.getState())) {
            throw new IllegalStateException("Ce paiement a déjà été annulé");
        }

        AccountMove originalMove = payment.getAccountMove();
        Company company = payment.getCompany();
        AccountJournal journal = payment.getJournal();
        LocalDate date = LocalDate.now();
        fiscalLockGuard.assertPeriodOpen(company, payment.getDate() != null ? payment.getDate() : date);

        if (originalMove != null && journal != null) {
            // Créer l'écriture comptable inverse (débit↔crédit)
            AccountMove reverseMove = AccountMove.builder()
                    .name(payment.getName() + "-ANNUL")
                    .date(date)
                    .ref("Annulation " + payment.getName())
                    .state("posted")
                    .journal(journal)
                    .company(company)
                    .partner(payment.getInvoice().getPartner())
                    .build();

            List<AccountMoveLine> reverseLines = originalMove.getLines().stream()
                    .map(l -> AccountMoveLine.builder()
                            .move(reverseMove)
                            .account(l.getAccount())
                            .partner(l.getPartner())
                            .name("Annulation - " + payment.getName())
                            .date(date)
                            .debit(l.getCredit())
                            .credit(l.getDebit())
                            .journal(journal)
                            .company(company)
                            .build())
                    .collect(Collectors.toList());
            reverseMove.setLines(new ArrayList<>(reverseLines));
            AccountMove savedReverseMove = moveRepo.save(reverseMove);
            syncEventPublisher.publish(SyncEventType.ACCOUNT_MOVE_FROM_SALE_PAYMENT, String.valueOf(savedReverseMove.getId()),
                    buildMoveSyncPayload(savedReverseMove, "Extourne paiement client"));
            accountingService.updateDailyBalance(journal.getId(), company.getId(), date);
        } else if (payment.getCreditNoteId() != null) {
            // Paiement de compensation (applyCreditToInvoice) : aucune écriture comptable à extourner,
            // mais le montant consommé sur l'avoir doit être restitué sous peine de perte silencieuse du crédit.
            SalesInvoice creditNote = invoiceRepo.findById(payment.getCreditNoteId()).orElse(null);
            if (creditNote != null) {
                BigDecimal restored = payment.getAmount() != null ? payment.getAmount() : ZERO;
                BigDecimal newCreditPaye = (creditNote.getMontantPaye() != null ? creditNote.getMontantPaye() : ZERO)
                        .subtract(restored).max(ZERO);
                creditNote.setMontantPaye(newCreditPaye);
                BigDecimal creditNetAPayer = creditNote.getNetAPayer() != null ? creditNote.getNetAPayer() : ZERO;
                creditNote.setMontantDu(creditNetAPayer.subtract(newCreditPaye).max(ZERO));
                if (creditNote.getMontantDu().compareTo(ZERO) > 0 && "paid".equals(creditNote.getState())) {
                    creditNote.setState("posted");
                }
                invoiceRepo.save(creditNote);
                syncEventPublisher.publish(SyncEventType.SALE_INVOICE_POSTED, String.valueOf(creditNote.getId()),
                        toInvoiceDTOWithPayments(creditNote));
            }
        }

        payment.setState("reversed");
        paymentRepo.save(payment);

        SalesInvoice invoice = payment.getInvoice();
        BigDecimal totalPaye = paymentRepo.sumPostedPaymentsByInvoice(invoice.getId());
        invoice.setMontantPaye(totalPaye);
        BigDecimal du = (invoice.getNetAPayer() != null ? invoice.getNetAPayer() : ZERO).subtract(totalPaye);
        invoice.setMontantDu(du.max(ZERO));
        if (du.compareTo(ZERO) > 0 && "paid".equals(invoice.getState())) {
            invoice.setState("posted");
        }
        invoiceRepo.save(invoice);
        syncEventPublisher.publish(SyncEventType.SALE_INVOICE_POSTED, String.valueOf(invoice.getId()),
                toInvoiceDTOWithPayments(invoice));

        InvoicePaymentDTO reversedPayment = toPaymentDTO(payment);
        syncEventPublisher.publish(SyncEventType.SALE_PAYMENT_REVERSED, String.valueOf(payment.getId()), reversedPayment);
        if (payment.getInvoice() != null) {
            auditService.log("SALE_INVOICE", payment.getInvoice().getId(), payment.getInvoice().getName(),
                    "PAYMENT_REVERSED", "Règlement annulé",
                    AuditService.details(Map.of("règlement", payment.getName(), "montant", payment.getAmount() + " FCFA")),
                    company.getId());
        }
        return reversedPayment;
    }

    // ===================== CLIENTS =====================

    @Transactional(readOnly = true)
    public List<PartnerDTO> getClients(Long companyId) {
        return partnerRepo.findByCompanyIdAndActiveTrue(companyId).stream()
                .filter(p -> "customer".equals(p.getType()) || "both".equals(p.getType()))
                .map(this::toPartnerDTO)
                .collect(Collectors.toList());
    }

    public PartnerDTO createClient(PartnerDTO dto) {
        Company company = companyRepo.findById(dto.getCompanyId())
                .orElseThrow(() -> new EntityNotFoundException("Société introuvable"));

        Partner partner = Partner.builder()
                .ref(dto.getRef())
                .name(dto.getName())
                .type(dto.getType() != null ? dto.getType() : "customer")
                .phone(dto.getPhone())
                .email(dto.getEmail())
                .address(dto.getAddress())
                .tauxRistourne(dto.getTauxRistourne())
                .tauxPrecompte(dto.getTauxPrecompte())
                .creditLimit(dto.getCreditLimit())
                .receivableAccountCode(dto.getReceivableAccountCode())
                .exemptTaxeGuinness(dto.isExemptTaxeGuinness())
                .company(company)
                .build();

        return toPartnerDTO(partnerRepo.save(partner));
    }

    public PartnerDTO updateClient(Long id, PartnerDTO dto) {
        Partner partner = partnerRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Client introuvable: " + id));
        tenantGuard.check(partner.getCompany() != null ? partner.getCompany().getId() : null);

        partner.setRef(dto.getRef());
        partner.setName(dto.getName());
        partner.setType(dto.getType());
        partner.setPhone(dto.getPhone());
        partner.setEmail(dto.getEmail());
        partner.setAddress(dto.getAddress());
        partner.setTauxRistourne(dto.getTauxRistourne());
        partner.setTauxPrecompte(dto.getTauxPrecompte());
        partner.setCreditLimit(dto.getCreditLimit());
        partner.setReceivableAccountCode(dto.getReceivableAccountCode());
        partner.setExemptTaxeGuinness(dto.isExemptTaxeGuinness());

        return toPartnerDTO(partnerRepo.save(partner));
    }

    public void deleteClient(Long id) {
        Partner partner = partnerRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Client introuvable: " + id));
        tenantGuard.check(partner.getCompany() != null ? partner.getCompany().getId() : null);
        partner.setActive(false);
        partnerRepo.save(partner);
    }

    // ===================== MÉTHODES PRIVÉES =====================

    private void createInvoiceFromOrder(SalesOrder order) {
        String invoiceName = generateInvoiceName(order.getCompany().getId(), order.getDate());
        Long partnerId = order.getPartner() != null ? order.getPartner().getId() : null;
        Long companyId = order.getCompany() != null ? order.getCompany().getId() : null;

        // Taux précompte du client (Partner.tauxPrecompte ou table precomptes)
        BigDecimal tauxPrecompte = (partnerId != null && companyId != null)
                ? getPartnerSalePrecompteTaux(partnerId, companyId)
                : ZERO;

        SalesInvoice invoice = SalesInvoice.builder()
                .name(invoiceName)
                .date(order.getDate())
                .dateEcheance(order.getDateEcheance())
                .state("draft")
                .type("invoice")
                .notes(order.getNotes())
                .partner(order.getPartner())
                .journal(order.getJournal())
                .company(order.getCompany())
                .salesOrder(order)
                .warehouseId(order.getWarehouseId())
                .montantPaye(ZERO)
                .build();

        List<SalesInvoiceLine> invoiceLines = new java.util.ArrayList<>();
        for (SalesOrderLine ol : order.getLines()) {
            // Ignorer les lignes sans produit (lignes vides ajoutées dans le formulaire)
            if (ol.getProductId() == null && (ol.getProductCode() == null || ol.getProductCode().isBlank())) {
                continue;
            }
            boolean isConsigne = ConsigneCodes.isConsigne(ol.getProductCode(), companyId);
            BigDecimal ht = ol.getMontantHT() != null ? ol.getMontantHT() : ZERO;
            BigDecimal pc = ZERO;
            if (!isConsigne && tauxPrecompte.compareTo(ZERO) > 0) {
                pc = ht.multiply(tauxPrecompte).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
            }

            // Frais d'enlèvement via un LineRequest temporaire
            SalesInvoiceLine tempLine = SalesInvoiceLine.builder()
                    .productCode(ol.getProductCode())
                    .consigne(isConsigne)
                    .categoryId(ol.getCategoryId())
                    .quantity(ol.getQuantity())
                    .build();
            BigDecimal enl = computeFraisEnlevement(null, tempLine, partnerId, companyId);

            BigDecimal tva = ol.getTauxTVA() != null ? ol.getTauxTVA() : ZERO;
            BigDecimal enlTVA = enl.multiply(tva).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
            // Prix TTC unitaire = HT × (1 + TVA% + Précompte%), arrondi à l'entier
            BigDecimal pcRateFromOrder = isConsigne ? ZERO : tauxPrecompte;
            BigDecimal puttc = (ol.getPrixUnitaire() != null ? ol.getPrixUnitaire() : ZERO)
                    .multiply(BigDecimal.ONE
                            .add(tva.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP))
                            .add(pcRateFromOrder.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP)))
                    .setScale(0, RoundingMode.HALF_UP);

            // Taxe Guinness : +300 par unité sur le prixUnitaireTTC
            BigDecimal guinessTaxe = ZERO;
            Long catId = resolveCategoryId(ol.getCategoryId(), ol.getProductCode(), companyId);
            if (!isConsigne && catId != null) {
                boolean estGuinness = categoryRepo.findById(catId)
                        .map(c -> isCategorieGuinness(c.getName()))
                        .orElse(false);
                boolean exempt = order.getPartner() != null && order.getPartner().isExemptTaxeGuinness();
                if (estGuinness && !exempt) {
                    puttc = puttc.add(GUINNESS_TAXE_LIGNE);  // +300 sur le prix unitaire TTC
                    BigDecimal qty = ol.getQuantity() != null ? ol.getQuantity() : BigDecimal.ONE;
                    guinessTaxe = GUINNESS_TAXE_LIGNE.multiply(qty).setScale(2, RoundingMode.HALF_UP);
                }
            }
            // montantTTC = qty × prixUnitaireTTC (entier)
            BigDecimal qtyLine    = ol.getQuantity() != null ? ol.getQuantity() : ZERO;
            BigDecimal montantTTC = qtyLine.multiply(puttc).setScale(0, RoundingMode.HALF_UP);

            BigDecimal rabaisUnit = ol.getRabaisUnitaire() != null ? ol.getRabaisUnitaire() : ZERO;
            BigDecimal totalRabaisHT = qtyLine.multiply(rabaisUnit).setScale(2, RoundingMode.HALF_UP);
            invoiceLines.add(SalesInvoiceLine.builder()
                    .invoice(invoice)
                    .productId(ol.getProductId())
                    .productCode(ol.getProductCode())
                    .description(ol.getDescription())
                    .quantity(ol.getQuantity())
                    .prixUnitaire(ol.getPrixUnitaire())
                    .tauxRemise(ol.getTauxRemise())
                    .tauxTVA(tva)
                    .accountCode(ol.getAccountCode())
                    .categoryId(catId)
                    .consigne(isConsigne)
                    .montantHT(ht)
                    .montantTVA(ol.getMontantTVA() != null ? ol.getMontantTVA() : ZERO)
                    .montantTTC(montantTTC)
                    .precompte(pc)
                    .fraisEnlevement(enl)
                    .fraisEnlevementTVA(enlTVA)
                    .prixUnitaireTTC(puttc)
                    .guinessTaxe(guinessTaxe)
                    .rabaisUnitaire(rabaisUnit)
                    .totalRabaisLigne(totalRabaisHT)
                    .totalRabaisLigneTTC(computeRabaisTTC(totalRabaisHT, tva, pcRateFromOrder))
                    .build());
        }

        invoice.setLines(invoiceLines);
        computeInvoiceTotals(invoice);
        invoiceRepo.save(invoice);
    }

    private void validateStockAvailability(SalesOrder order) {
        Long companyId = order.getCompany().getId();

        // Déterminer l'emplacement de l'entrepôt sélectionné sur le bon (ou premier interne si non défini)
        Long warehouseLocId = null;
        String warehouseName = "stock global";
        if (order.getWarehouseId() != null) {
            warehouseLocId = warehouseRepo.findById(order.getWarehouseId())
                    .map(Warehouse::getStockLocationId).orElse(null);
            String whName = warehouseRepo.findById(order.getWarehouseId())
                    .map(Warehouse::getName).orElse(null);
            if (whName != null) warehouseName = whName;
        }

        for (SalesOrderLine line : order.getLines()) {
            if (line.getProductId() == null) continue;
            var productOpt = stockProductRepo.findById(line.getProductId());
            if (productOpt.isEmpty()) continue;
            var product = productOpt.get();
            if ("service".equals(product.getType())) continue;

            BigDecimal totalQty;
            BigDecimal reserved;
            if (warehouseLocId != null) {
                // Vérifier uniquement dans l'entrepôt sélectionné
                StockQuant q = stockQuantRepo
                        .findFirstByProductIdAndLocationIdAndCompanyId(line.getProductId(), warehouseLocId, companyId)
                        .orElse(null);
                totalQty = q != null ? q.getQuantity() : ZERO;
                reserved = q != null ? q.getReservedQuantity() : ZERO;
            } else {
                // Pas d'entrepôt spécifié : vérification globale
                totalQty = stockQuantRepo.findByProductIdAndCompanyId(line.getProductId(), companyId)
                        .stream().map(StockQuant::getQuantity).reduce(ZERO, BigDecimal::add);
                reserved = stockQuantRepo.findByProductIdAndCompanyId(line.getProductId(), companyId)
                        .stream().map(StockQuant::getReservedQuantity).reduce(ZERO, BigDecimal::add);
            }
            BigDecimal available = totalQty.subtract(reserved).max(ZERO);
            if (line.getQuantity() != null && line.getQuantity().compareTo(available) > 0) {
                String demande = line.getQuantity().setScale(0, RoundingMode.HALF_UP).toPlainString();
                String msg;
                if (totalQty.compareTo(ZERO) == 0) {
                    msg = "\"" + product.getName() + "\" n'est pas en stock dans " + warehouseName +
                          " (0 unité disponible, " + demande + " demandé(s))";
                } else if (reserved.compareTo(ZERO) > 0) {
                    msg = "Stock insuffisant pour \"" + product.getName() + "\" dans " + warehouseName +
                          " : " + totalQty.setScale(0, RoundingMode.HALF_UP) + " en stock, " +
                          reserved.setScale(0, RoundingMode.HALF_UP) + " réservé(s) par d'autres commandes" +
                          " → " + available.setScale(0, RoundingMode.HALF_UP) + " disponible(s), " +
                          demande + " demandé(s)";
                } else {
                    msg = "Stock insuffisant pour \"" + product.getName() + "\" dans " + warehouseName +
                          " : " + totalQty.setScale(0, RoundingMode.HALF_UP) + " en stock, " +
                          demande + " demandé(s)";
                }
                throw new IllegalStateException(msg);
            }
        }
    }

    /**
     * Vérifie le stock physique disponible pour chaque article d'une facture avant sa validation.
     * Contrairement à validateStockAvailability (au moment du bon), on compare ici à la quantité
     * physique brute (StockQuant.quantity) et non à quantity-reserved : la réservation de CETTE
     * commande a déjà été faite à la confirmation, la re-soustraire redonnerait un faux négatif.
     * Les avoirs réintègrent du stock (pas de sortie) et les lignes négatives (retours/déconsignes)
     * sont ignorées.
     */
    private void validateStockAvailabilityForInvoice(SalesInvoice invoice, boolean isAvoir) {
        if (isAvoir) return;
        Long companyId = invoice.getCompany().getId();

        Long warehouseLocId = null;
        String warehouseName = "stock global";
        if (invoice.getWarehouseId() != null) {
            warehouseLocId = warehouseRepo.findById(invoice.getWarehouseId())
                    .map(Warehouse::getStockLocationId).orElse(null);
            String whName = warehouseRepo.findById(invoice.getWarehouseId())
                    .map(Warehouse::getName).orElse(null);
            if (whName != null) warehouseName = whName;
        }

        for (SalesInvoiceLine line : invoice.getLines()) {
            BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : ZERO;
            if (qty.compareTo(ZERO) <= 0) continue; // retour client / déconsigne : entrée en stock, pas de sortie

            Product product = null;
            if (line.getProductId() != null) {
                product = stockProductRepo.findById(line.getProductId()).orElse(null);
            }
            if (product == null && line.getProductCode() != null && !line.getProductCode().isBlank()) {
                product = stockProductRepo.findFirstByDefaultCodeAndCompanyId(line.getProductCode(), companyId).orElse(null);
            }
            if (product == null) continue;
            boolean isConsigneProd = line.isConsigne() || ConsigneCodes.isConsigne(line.getProductCode(), companyId);
            if ("service".equals(product.getType()) && !isConsigneProd) continue;

            BigDecimal available;
            if (warehouseLocId != null) {
                available = stockQuantRepo.findFirstByProductIdAndLocationIdAndCompanyId(product.getId(), warehouseLocId, companyId)
                        .map(StockQuant::getQuantity).orElse(ZERO);
            } else {
                available = stockQuantRepo.findByProductIdAndCompanyId(product.getId(), companyId)
                        .stream().map(StockQuant::getQuantity).reduce(ZERO, BigDecimal::add);
            }
            if (qty.compareTo(available) > 0) {
                String demande = qty.setScale(0, RoundingMode.HALF_UP).toPlainString();
                String msg = "Stock insuffisant pour \"" + product.getName() + "\" dans " + warehouseName +
                        " : " + available.setScale(0, RoundingMode.HALF_UP) + " disponible(s), " +
                        demande + " demandé(s)";
                throw new IllegalStateException(msg);
            }
        }
    }

    /**
     * Réserve le stock pour un bon de commande confirmé :
     * incrémente reservedQuantity dans StockQuant pour chaque ligne produit.
     */
    private void reserveStockForOrder(SalesOrder order) {
        Long companyId = order.getCompany().getId();

        // Réserver dans l'entrepôt sélectionné sur le bon, ou le premier interne en fallback
        Long internalLocId = null;
        if (order.getWarehouseId() != null) {
            internalLocId = warehouseRepo.findById(order.getWarehouseId())
                    .map(Warehouse::getStockLocationId).orElse(null);
        }
        if (internalLocId == null) {
            List<StockLocation> internalLocs = stockLocationRepo.findByUsage(companyId, "internal");
            if (internalLocs.isEmpty()) {
                log.warn("Aucun emplacement interne trouvé pour la société {}. Réservation ignorée.", companyId);
                return;
            }
            internalLocId = internalLocs.get(0).getId();
        }
        final Long locId = internalLocId;

        for (SalesOrderLine line : order.getLines()) {
            if (line.getQuantity() == null) continue;
            java.util.Optional<Product> productOpt = java.util.Optional.empty();
            if (line.getProductId() != null) {
                productOpt = stockProductRepo.findById(line.getProductId());
            } else if (line.getProductCode() != null) {
                productOpt = stockProductRepo.findFirstByDefaultCodeAndCompanyId(line.getProductCode(), companyId);
            } else {
                continue;
            }
            if (productOpt.isEmpty()) continue;
            // Les consignes/emballages sont typés "service" mais restent des articles physiques :
            // il faut les réserver comme les articles (même règle que les mouvements de stock).
            boolean isConsigneProd = line.isConsigne() || ConsigneCodes.isConsigne(line.getProductCode(), companyId);
            if ("service".equals(productOpt.get().getType()) && !isConsigneProd) continue;
            Long productId = productOpt.get().getId();

            StockQuant quant = stockQuantRepo
                    .findFirstByProductIdAndLocationIdAndCompanyId(productId, locId, companyId)
                    .orElse(null);
            if (quant != null) {
                quant.setReservedQuantity(quant.getReservedQuantity().add(line.getQuantity()));
                stockQuantRepo.save(quant);
            }
        }
    }

    /**
     * Libère les réservations de stock d'un bon (inverse de reserveStockForOrder).
     * Appelé lors d'une annulation ou d'une validation de facture.
     */
    private void releaseStockReservation(SalesOrder order) {
        Long companyId = order.getCompany().getId();

        Long internalLocId = null;
        if (order.getWarehouseId() != null) {
            internalLocId = warehouseRepo.findById(order.getWarehouseId())
                    .map(Warehouse::getStockLocationId).orElse(null);
        }
        if (internalLocId == null) {
            List<StockLocation> internalLocs = stockLocationRepo.findByUsage(companyId, "internal");
            if (internalLocs.isEmpty()) return;
            internalLocId = internalLocs.get(0).getId();
        }
        final Long locId = internalLocId;

        for (SalesOrderLine line : order.getLines()) {
            if (line.getQuantity() == null) continue;
            Long productId = null;
            if (line.getProductId() != null) {
                productId = line.getProductId();
            } else if (line.getProductCode() != null) {
                productId = stockProductRepo.findFirstByDefaultCodeAndCompanyId(line.getProductCode(), companyId)
                        .map(p -> p.getId()).orElse(null);
            }
            if (productId == null) continue;

            stockQuantRepo.findFirstByProductIdAndLocationIdAndCompanyId(productId, locId, companyId)
                    .ifPresent(quant -> {
                        BigDecimal released = quant.getReservedQuantity().subtract(line.getQuantity()).max(ZERO);
                        quant.setReservedQuantity(released);
                        stockQuantRepo.save(quant);
                    });
        }
    }

    /**
     * Restaure le stock des factures annulées + remet à zéro toutes les reservedQuantity puis
     * les recalcule depuis les bons "confirmed" réels. Corrige les blocages suite à des annulations
     * sans libération (y compris celles annulées avant que cancelInvoice ne restitue le stock).
     */
    @Transactional
    public int recalculateReservations(Long companyId) {
        // 0. Restituer physiquement le stock des factures de vente ANNULÉES dont la marchandise
        //    est sortie (picking de livraison LIV/VTE existant) mais jamais revenue (aucun picking
        //    de retour ANN/VTE). Idempotent : reverseSalesInvoiceStock crée un ANN/VTE marqueur,
        //    donc un 2e passage détecte le retour déjà présent et n'ajoute rien.
        int stockRestored = 0;
        List<SalesInvoice> cancelledInvoices =
                invoiceRepo.findByCompanyIdAndStateOrderByDateDescNameDesc(companyId, "cancelled");
        for (SalesInvoice inv : cancelledInvoices) {
            if ("credit_note".equals(inv.getType())) continue; // les avoirs ont leur propre logique
            List<StockPicking> pickings = stockPickingRepo.findByCompanyIdAndOrigin(companyId, inv.getName());
            boolean delivered = pickings.stream().anyMatch(p -> "outgoing".equals(p.getPickingTypeCode()));
            boolean returned  = pickings.stream().anyMatch(p -> "incoming".equals(p.getPickingTypeCode()));
            if (delivered && !returned) {
                reverseSalesInvoiceStock(inv);
                stockRestored++;
                log.info("Stock restitué (facture annulée non rendue) : {}", inv.getName());
            }
        }

        // 1. Remettre toutes les réservations à zéro pour cette société
        List<com.erp.stock.entity.StockQuant> allQuants = stockQuantRepo.findAllByCompanyId(companyId);
        for (com.erp.stock.entity.StockQuant q : allQuants) {
            q.setReservedQuantity(BigDecimal.ZERO);
        }
        stockQuantRepo.saveAll(allQuants);

        // 2. Débloquer les bons "invoiced" dont la seule facture est annulée
        //    → ils repassent en "confirmed" pour pouvoir être re-facturés
        List<SalesOrder> invoicedOrders = orderRepo.findByCompanyIdAndStateOrderByDateDescNameDesc(companyId, "invoiced");
        for (SalesOrder order : invoicedOrders) {
            invoiceRepo.findFirstBySalesOrderId(order.getId()).ifPresent(inv -> {
                if ("cancelled".equals(inv.getState())) {
                    order.setState("confirmed");
                    orderRepo.save(order);
                    log.info("Bon {} remis en confirmed (facture {} annulée)", order.getName(), inv.getName());
                }
            });
        }

        // 3. Recalculer depuis les bons vraiment confirmés (non annulés, non facturés)
        List<SalesOrder> confirmedOrders = orderRepo.findByCompanyIdAndStateOrderByDateDescNameDesc(companyId, "confirmed");
        for (SalesOrder order : confirmedOrders) {
            reserveStockForOrder(order);
        }
        log.info("recalculateReservations société {} : {} quant(s), {} facture(s) annulée(s) restaurée(s)",
                companyId, allQuants.size(), stockRestored);
        return stockRestored;
    }

    /**
     * Remet à zéro TOUTES les réservations de stock de la société, sans recalcul derrière.
     * Contrairement à recalculateReservations(), ne re-réserve rien depuis les bons "confirmed" —
     * à utiliser quand des réservations restent bloquées durablement (bons ou factures qui ne
     * peuvent plus être annulés) et que le recalcul intelligent ne suffit pas à les débloquer.
     */
    @Transactional
    public int releaseAllReservations(Long companyId) {
        List<com.erp.stock.entity.StockQuant> reserved = stockQuantRepo.findAllByCompanyId(companyId).stream()
                .filter(q -> q.getReservedQuantity() != null && q.getReservedQuantity().compareTo(ZERO) != 0)
                .collect(java.util.stream.Collectors.toList());
        for (com.erp.stock.entity.StockQuant q : reserved) {
            q.setReservedQuantity(ZERO);
        }
        stockQuantRepo.saveAll(reserved);
        log.info("releaseAllReservations société {} : {} quant(s) remis à zéro", companyId, reserved.size());
        return reserved.size();
    }

    /**
     * Crée un StockPicking + StockMoves + met à jour StockQuant lors de la validation d'une facture.
     *
     * Facture (vente) : sortie stock interne → emplacement client virtuel
     * Avoir (crédit)  : retour stock emplacement client virtuel → interne
     */
    /**
     * Génère l'écriture comptable de ristourne lors de la validation d'une facture vente.
     *
     * Catégories éligibles : BIERES 24, BIERES 12, Alcools mixtes 12, Alcools mixtes 24.
     * Pour le total HT ristourne des lignes éligibles :
     *   Débit  7019    : 201 FCFA (fixe)
     *   Débit  7015    : HT - 201
     *   Débit  4412    : tauxPrecompte% × HT
     *   Débit  4431    : 19,25% × HT
     *   Crédit 419800  : somme des débits = TTC ristourne
     *
     * Si aucune ristourne n'est configurée pour le client, la méthode est sans effet.
     */
    private void generateRistourneEcriture(SalesInvoice invoice, Long companyId, boolean isAvoir) {
        Long partnerId = invoice.getPartner().getId();
        log.info("[RISTOURNE] Facture {} - client {} - société {}", invoice.getName(), partnerId, companyId);

        List<Ristourne> toutesRistournes = ristourneRepo.findByPartnerIdAndCompanyIdAndActiveTrue(partnerId, companyId);
        if (toutesRistournes.isEmpty()) {
            log.info("[RISTOURNE] Aucune ristourne configurée pour ce client");
            return;
        }

        // Séparer en groupes par catégorie
        List<Ristourne> brasserie = new ArrayList<>();
        List<Ristourne> autres    = new ArrayList<>();
        List<Ristourne> guinness  = new ArrayList<>();
        for (Ristourne r : toutesRistournes) {
            if (r.getCategory().getName() == null) continue;
            String norm = normalizeCategorie(r.getCategory().getName());
            if (CATEGORIES_RISTOURNE_BRASSERIE.contains(norm))       brasserie.add(r);
            else if (isCategorieGuinness(r.getCategory().getName()))  guinness.add(r);
            else                                                       autres.add(r);
        }

        Partner partner = invoice.getPartner();
        BigDecimal tauxPc = partner.getTauxPrecompte() != null
                ? partner.getTauxPrecompte()
                : precompteRepo.findByPartnerIdAndTypePrecompteAndCompanyIdAndActiveTrue(partnerId, "sale", companyId)
                        .map(com.erp.common.entity.Precompte::getTauxPrecompte).orElse(ZERO);
        BigDecimal pcRate = tauxPc.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP);

        // ── Groupe BRASSERIE : 7019 = qty×201/article, 7015 = reste HT ──
        BigDecimal total7019Brasserie = ZERO;
        BigDecimal totalHtBrasserie   = ZERO;
        for (Ristourne r : brasserie) {
            BigDecimal qty = getQtyFromInvoice(r.getCategory().getId(), invoice, companyId);
            log.info("[RISTOURNE] Brasserie '{}' qty={} montantFixe={}", r.getCategory().getName(), qty, r.getMontantFixe());
            if (qty.compareTo(ZERO) > 0) {
                BigDecimal htLine = qty.multiply(r.getMontantFixe());
                totalHtBrasserie   = totalHtBrasserie.add(htLine);
                total7019Brasserie = total7019Brasserie.add(
                        qty.multiply(RISTOURNE_7019_FIXE).min(htLine));
            }
        }

        // ── Groupe AUTRES : HT complet → 7019 ──
        BigDecimal totalHtAutres = ZERO;
        for (Ristourne r : autres) {
            BigDecimal qty = getQtyFromInvoice(r.getCategory().getId(), invoice, companyId);
            log.info("[RISTOURNE] Autres '{}' qty={} montantFixe={}", r.getCategory().getName(), qty, r.getMontantFixe());
            if (qty.compareTo(ZERO) > 0) {
                totalHtAutres = totalHtAutres.add(qty.multiply(r.getMontantFixe()));
            }
        }

        // ── Groupe GUINNESS : HT complet → 7019 (Cr 419801) ──
        BigDecimal totalHtGuinness = ZERO;
        for (Ristourne r : guinness) {
            BigDecimal qty = getQtyFromInvoice(r.getCategory().getId(), invoice, companyId);
            log.info("[RISTOURNE] Guinness '{}' qty={} montantFixe={}", r.getCategory().getName(), qty, r.getMontantFixe());
            if (qty.compareTo(ZERO) > 0) {
                totalHtGuinness = totalHtGuinness.add(qty.multiply(r.getMontantFixe()));
            }
        }

        log.info("[RISTOURNE] HT brasserie={} (7019={}) HT autres={} HT guinness={}",
                totalHtBrasserie, total7019Brasserie, totalHtAutres, totalHtGuinness);

        if (totalHtBrasserie.compareTo(ZERO) <= 0 && totalHtAutres.compareTo(ZERO) <= 0
                && totalHtGuinness.compareTo(ZERO) <= 0) {
            log.info("[RISTOURNE] Aucune quantité trouvée sur la facture pour les catégories éligibles");
            return;
        }

        // Résolution des comptes
        AccountAccount acct7019 = accountRepo.findFirstByCodeAndCompanyId("701900", companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("7019", companyId)).orElse(null);
        AccountAccount acct7015 = accountRepo.findFirstByCodeAndCompanyId("701500", companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId(ENLEVEMENT_ACCOUNT, companyId)).orElse(null);
        AccountAccount acct4412 = accountRepo.findFirstByCodeAndCompanyId("441200", companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId(PSA_ACCOUNT, companyId)).orElse(null);
        AccountAccount acct4431 = accountRepo.findFirstByCodeAndCompanyId("443100", companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId(TVA_ACCOUNT, companyId)).orElse(null);
        AccountAccount acct4198 = accountRepo.findFirstByCodeAndCompanyId(RISTOURNE_CREDIT_ACCOUNT, companyId)
                .orElse(null);
        AccountAccount acct419801 = accountRepo.findFirstByCodeAndCompanyId(RISTOURNE_CREDIT_GUINNESS, companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("419801", companyId))
                .orElse(null);

        boolean needBrasserieAutres = totalHtBrasserie.compareTo(ZERO) > 0 || totalHtAutres.compareTo(ZERO) > 0;
        boolean needGuinness        = totalHtGuinness.compareTo(ZERO) > 0;

        if (needBrasserieAutres && (acct7019 == null || acct4431 == null || acct4198 == null)) {
            log.warn("[RISTOURNE] Écriture brasserie/autres non générée pour {} : comptes manquants (701900/443100/419800)", invoice.getName());
        }
        if (needGuinness && (acct7019 == null || acct4431 == null || acct419801 == null)) {
            log.warn("[RISTOURNE] Écriture Guinness non générée pour {} : comptes manquants (701900/443100/419801)", invoice.getName());
        }
        if ((!needBrasserieAutres || acct7019 == null || acct4431 == null || acct4198 == null)
                && (!needGuinness || acct7019 == null || acct4431 == null || acct419801 == null)) {
            return;
        }

        AccountJournal journal = invoice.getJournal();
        LocalDate date = invoice.getDate();
        String prefix  = isAvoir ? "Annul. ristourne " : "Ristourne ";
        String labelBr  = prefix + "brasserie " + invoice.getName();
        String labelAut = prefix + invoice.getName();

        int year = date.getYear();
        Integer maxSeq = moveRepo.findMaxSequenceByJournalAndYear(journal.getId(), year);
        String moveName = String.format("%s-%d-%05d", journal.getCode().toUpperCase(), year,
                (maxSeq != null ? maxSeq : 0) + 1);

        AccountMove move = AccountMove.builder()
                .name(moveName).date(date)
                .ref("Ristourne " + invoice.getName())
                .state("posted").journal(journal)
                .company(invoice.getCompany()).partner(partner)
                .build();

        List<AccountMoveLine> lines = new ArrayList<>();
        BigDecimal totalDebitsBrassAutres = ZERO;
        BigDecimal totalDebitsGuinness    = ZERO;

        // Pour les avoirs, les débits deviennent crédits et vice-versa
        // dr(x) = isAvoir ? ristourneLine(0, x) : ristourneLine(x, 0)
        // cr(x) = isAvoir ? ristourneLine(x, 0) : ristourneLine(0, x)

        // ── Brasserie : 7019 (qty×201) + 7015 (reste HT) ──
        if (needBrasserieAutres && acct7019 != null && acct4431 != null && acct4198 != null
                && totalHtBrasserie.compareTo(ZERO) > 0) {
            BigDecimal d7019br = total7019Brasserie.setScale(2, RoundingMode.HALF_UP);
            BigDecimal d7015br = totalHtBrasserie.subtract(total7019Brasserie).setScale(2, RoundingMode.HALF_UP);
            lines.add(ristourneLine(move, acct7019, partner, labelBr, date, isAvoir ? ZERO : d7019br, isAvoir ? d7019br : ZERO, journal, invoice.getCompany()));
            totalDebitsBrassAutres = totalDebitsBrassAutres.add(d7019br);
            if (d7015br.compareTo(ZERO) > 0 && acct7015 != null) {
                lines.add(ristourneLine(move, acct7015, partner, labelBr, date, isAvoir ? ZERO : d7015br, isAvoir ? d7015br : ZERO, journal, invoice.getCompany()));
                totalDebitsBrassAutres = totalDebitsBrassAutres.add(d7015br);
            }
        }

        // ── Autres : HT complet dans 7019 ──
        if (needBrasserieAutres && acct7019 != null && acct4431 != null && acct4198 != null
                && totalHtAutres.compareTo(ZERO) > 0) {
            BigDecimal d7019aut = totalHtAutres.setScale(2, RoundingMode.HALF_UP);
            lines.add(ristourneLine(move, acct7019, partner, labelAut, date, isAvoir ? ZERO : d7019aut, isAvoir ? d7019aut : ZERO, journal, invoice.getCompany()));
            totalDebitsBrassAutres = totalDebitsBrassAutres.add(d7019aut);
        }

        // ── Précompte + TVA sur HT brasserie/autres ──
        if (needBrasserieAutres && acct7019 != null && acct4431 != null && acct4198 != null) {
            BigDecimal htBrAut = totalHtBrasserie.add(totalHtAutres);
            BigDecimal debitPcBrAut = htBrAut.multiply(pcRate).setScale(2, RoundingMode.HALF_UP);
            if (acct4412 != null && debitPcBrAut.compareTo(ZERO) > 0) {
                lines.add(ristourneLine(move, acct4412, partner, labelAut, date, isAvoir ? ZERO : debitPcBrAut, isAvoir ? debitPcBrAut : ZERO, journal, invoice.getCompany()));
                totalDebitsBrassAutres = totalDebitsBrassAutres.add(debitPcBrAut);
            }
            BigDecimal debitTVABrAut = htBrAut.multiply(TVA_RATE).setScale(2, RoundingMode.HALF_UP);
            if (debitTVABrAut.compareTo(ZERO) > 0) {
                lines.add(ristourneLine(move, acct4431, partner, labelAut, date, isAvoir ? ZERO : debitTVABrAut, isAvoir ? debitTVABrAut : ZERO, journal, invoice.getCompany()));
                totalDebitsBrassAutres = totalDebitsBrassAutres.add(debitTVABrAut);
            }
        }

        // ── Guinness : HT complet → 7019, précompte → 4412, TVA → 4431, contrepartie → 419801 ──
        if (needGuinness && acct7019 != null && acct4431 != null && acct419801 != null) {
            String labelGu = prefix + "Guinness " + invoice.getName();
            BigDecimal d7019gu = totalHtGuinness.setScale(2, RoundingMode.HALF_UP);
            lines.add(ristourneLine(move, acct7019, partner, labelGu, date, isAvoir ? ZERO : d7019gu, isAvoir ? d7019gu : ZERO, journal, invoice.getCompany()));
            totalDebitsGuinness = totalDebitsGuinness.add(d7019gu);

            BigDecimal debitPcGu = totalHtGuinness.multiply(pcRate).setScale(2, RoundingMode.HALF_UP);
            if (acct4412 != null && debitPcGu.compareTo(ZERO) > 0) {
                lines.add(ristourneLine(move, acct4412, partner, labelGu, date, isAvoir ? ZERO : debitPcGu, isAvoir ? debitPcGu : ZERO, journal, invoice.getCompany()));
                totalDebitsGuinness = totalDebitsGuinness.add(debitPcGu);
            }
            BigDecimal debitTVAGu = totalHtGuinness.multiply(TVA_RATE).setScale(2, RoundingMode.HALF_UP);
            lines.add(ristourneLine(move, acct4431, partner, labelGu, date, isAvoir ? ZERO : debitTVAGu, isAvoir ? debitTVAGu : ZERO, journal, invoice.getCompany()));
            totalDebitsGuinness = totalDebitsGuinness.add(debitTVAGu);
        }

        // ── Contrepartie : 419800 pour brasserie/autres, 419801 pour Guinness ──
        // Pour avoirs : la contrepartie s'inverse aussi (débit au lieu de crédit)
        if (totalDebitsBrassAutres.compareTo(ZERO) > 0 && acct4198 != null) {
            lines.add(ristourneLine(move, acct4198, partner, labelAut, date,
                    isAvoir ? totalDebitsBrassAutres.setScale(2, RoundingMode.HALF_UP) : ZERO,
                    isAvoir ? ZERO : totalDebitsBrassAutres.setScale(2, RoundingMode.HALF_UP),
                    journal, invoice.getCompany()));
        }
        if (totalDebitsGuinness.compareTo(ZERO) > 0 && acct419801 != null) {
            lines.add(ristourneLine(move, acct419801, partner, prefix + "Guinness " + invoice.getName(), date,
                    isAvoir ? totalDebitsGuinness.setScale(2, RoundingMode.HALF_UP) : ZERO,
                    isAvoir ? ZERO : totalDebitsGuinness.setScale(2, RoundingMode.HALF_UP),
                    journal, invoice.getCompany()));
        }

        BigDecimal totalDebits = totalDebitsBrassAutres.add(totalDebitsGuinness);
        if (lines.isEmpty() || totalDebits.compareTo(ZERO) == 0) {
            log.info("[RISTOURNE] Aucune ligne générée pour {}", invoice.getName());
            return;
        }

        move.setLines(lines);
        AccountMove savedRistourne = moveRepo.save(move);
        syncEventPublisher.publish(SyncEventType.ACCOUNT_MOVE_RISTOURNE, String.valueOf(savedRistourne.getId()),
                buildMoveSyncPayload(savedRistourne, "Ristourne — " + invoice.getName()));
        log.info("[RISTOURNE] Écriture {} générée — HT brasserie/autres={} HT guinness={} | total débits={}",
                moveName, totalHtBrasserie.add(totalHtAutres), totalHtGuinness, totalDebits);
    }

    private BigDecimal getQtyFromInvoice(Long catId, SalesInvoice invoice, Long companyId) {
        return invoice.getLines().stream()
                .filter(l -> !l.isConsigne())
                .filter(l -> catId.equals(resolveLineCategoryId(l, companyId)))
                .map(l -> l.getQuantity() != null ? l.getQuantity() : ZERO)
                .reduce(ZERO, BigDecimal::add);
    }

    private Long resolveLineCategoryId(SalesInvoiceLine line, Long companyId) {
        if (line.getCategoryId() != null) return line.getCategoryId();
        if (line.getProductCode() != null && !line.getProductCode().isBlank()) {
            return stockProductRepo.findFirstByDefaultCodeAndCompanyId(line.getProductCode(), companyId)
                    .map(Product::getCategoryId).orElse(null);
        }
        return null;
    }

    private AccountMoveLine ristourneLine(AccountMove move, AccountAccount account, Partner partner,
                                          String name, LocalDate date,
                                          BigDecimal debit, BigDecimal credit,
                                          AccountJournal journal, Company company) {
        return AccountMoveLine.builder()
                .move(move).account(account).partner(partner)
                .name(name).date(date)
                .debit(debit).credit(credit)
                .journal(journal).company(company)
                .build();
    }

    /** Supprime les accents et met en minuscules pour comparaison insensible à la casse et aux accents. */
    private String normalizeCategorie(String name) {
        String nfd = java.text.Normalizer.normalize(name, java.text.Normalizer.Form.NFD);
        return nfd.replaceAll("\\p{InCombiningDiacriticalMarks}+", "").toLowerCase();
    }

    /**
     * Résout l'emplacement de stock interne à mouvementer pour une facture/avoir de vente.
     * L'entrepôt explicitement choisi sur le document fait foi ; à défaut, on résout le magasin
     * principal (entrepôt configuré avec un {@code depotAchatWarehouseId}, sinon l'entrepôt par
     * défaut de la société — même logique que {@code PurchaseService.resolvePurchaseWarehouse}),
     * plutôt que de prendre arbitrairement le premier emplacement interne trouvé. Sans ce
     * correctif, une vente sans entrepôt explicite peut décrémenter un emplacement différent de
     * celui où les achats/réceptions incrémentent le stock (typiquement le Dépôt Achat au lieu du
     * Magasin Principal) — le stock "disponible" du Magasin Principal ne baisse alors jamais
     * malgré les ventes, quel que soit le produit.
     */
    private StockLocation resolveSalesInternalLocation(Long companyId, Long explicitWarehouseId, List<StockLocation> internalLocs) {
        Long whLocId = explicitWarehouseId != null
                ? warehouseRepo.findById(explicitWarehouseId).map(Warehouse::getStockLocationId).orElse(null)
                : null;
        if (whLocId == null) {
            List<Warehouse> allWarehouses = warehouseRepo.findByCompanyIdAndActiveTrue(companyId);
            Warehouse mainWarehouse = allWarehouses.stream()
                    .filter(w -> w.getDepotAchatWarehouseId() != null)
                    .findFirst()
                    .orElseGet(() -> warehouseRepo.findFirstByCompanyIdAndIsDefaultTrue(companyId).orElse(null));
            if (mainWarehouse != null) whLocId = mainWarehouse.getStockLocationId();
        }
        if (whLocId == null) return internalLocs.get(0);
        final Long targetLocId = whLocId;
        return internalLocs.stream()
                .filter(l -> l.getId().equals(targetLocId)).findFirst()
                .orElse(stockLocationRepo.findById(targetLocId).orElse(internalLocs.get(0)));
    }

    private void createStockMovementsOnInvoicePost(SalesInvoice invoice, boolean isAvoir) {
        Long companyId = invoice.getCompany().getId();

        // Trouver les emplacements
        List<StockLocation> internalLocs = stockLocationRepo.findByUsage(companyId, "internal");
        List<StockLocation> customerLocs = stockLocationRepo.findByUsage(companyId, "customer");

        if (internalLocs.isEmpty()) {
            log.warn("Aucun emplacement interne trouvé pour la société {}. Mouvements de stock ignorés.", companyId);
            return;
        }

        // Utiliser l'emplacement de l'entrepôt sélectionné si disponible, sinon le magasin principal
        StockLocation internalLoc = resolveSalesInternalLocation(companyId, invoice.getWarehouseId(), internalLocs);
        StockLocation customerLoc = customerLocs.isEmpty() ? internalLocs.get(0) : customerLocs.get(0);

        // Source et destination selon le type de document
        Long srcLocId = isAvoir ? customerLoc.getId() : internalLoc.getId();
        Long destLocId = isAvoir ? internalLoc.getId() : customerLoc.getId();
        String pickingCode = isAvoir ? "incoming" : "outgoing";

        // Trouver le type de picking (livraison ou réception) — préférer celui de l'entrepôt sélectionné
        List<StockPickingType> pickingTypes = pickingTypeRepo.findByCompanyIdAndCodeOrderByNameAsc(companyId, pickingCode);
        final Long invoiceWhId = invoice.getWarehouseId();
        Long pickingTypeId = pickingTypes.isEmpty() ? 1L : pickingTypes.stream()
                .filter(pt -> invoiceWhId != null && invoiceWhId.equals(pt.getWarehouseId()))
                .map(StockPickingType::getId)
                .findFirst()
                .orElse(pickingTypes.get(0).getId());

        // Construire les lignes de mouvement — tous les produits physiques (hors service),
        // y compris les emballages/consignes même s'ils sont typés "service" dans le catalogue.
        record LineProduct(SalesInvoiceLine line, com.erp.stock.entity.Product product) {}
        List<LineProduct> productLines = new java.util.ArrayList<>();
        for (SalesInvoiceLine l : invoice.getLines()) {
            com.erp.stock.entity.Product p = null;
            if (l.getProductId() != null) {
                p = stockProductRepo.findById(l.getProductId()).orElse(null);
            }
            if (p == null && l.getProductCode() != null && !l.getProductCode().isBlank()) {
                p = stockProductRepo.findFirstByDefaultCodeAndCompanyId(l.getProductCode(), companyId).orElse(null);
            }
            if (p == null) continue;
            boolean isConsigneProd = l.isConsigne() || ConsigneCodes.isConsigne(l.getProductCode(), companyId);
            if ("service".equals(p.getType()) && !isConsigneProd) continue;
            productLines.add(new LineProduct(l, p));
        }

        if (productLines.isEmpty()) {
            log.warn("Aucun produit physique trouvé pour les mouvements de stock de la facture {}", invoice.getName());
            return;
        }

        // Générer la référence du picking
        String prefix = isAvoir ? "RET/VTE" : "LIV/VTE";
        Integer seq = stockPickingRepo.findMaxSeq(companyId, prefix);
        String pickingName = prefix + "/" + String.format("%05d", (seq == null ? 0 : seq) + 1);

        StockPicking picking = StockPicking.builder()
                .name(pickingName)
                .pickingTypeId(pickingTypeId)
                .pickingTypeCode(pickingCode)
                .locationId(srcLocId)
                .locationDestId(destLocId)
                .partnerId(invoice.getPartner().getId())
                .partnerName(invoice.getPartner().getName())
                .state("done")
                .origin(invoice.getName())
                .companyId(companyId)
                .scheduledDate(invoice.getDate())
                .dateDone(invoice.getDate().atTime(LocalTime.now()))
                .build();

        List<StockMove> moves = new ArrayList<>();
        for (LineProduct lp : productLines) {
            SalesInvoiceLine line = lp.line();
            var product = lp.product();

            BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : BigDecimal.ONE;
            BigDecimal priceUnit = line.getPrixUnitaire() != null ? line.getPrixUnitaire() : ZERO;

            // Vente normale (hors avoir) : ligne positive fait SORTIR le stock (vente), ligne
            // négative fait ENTRER (retour du client — vaut pour tout article, pas seulement les
            // emballages consignés : la déconsigne n'est qu'un cas particulier de cette règle).
            // Avoir client : une ligne positive fait ENTRER le stock (retour normal du client),
            // une ligne négative le fait SORTIR (inverse — annule/réduit un retour déjà comptabilisé).
            boolean qtyNegative = qty.compareTo(ZERO) < 0;
            boolean reversed = qtyNegative;
            boolean goesIn   = isAvoir ? !qtyNegative : qtyNegative;
            BigDecimal absQty  = qty.abs();
            Long moveSrcId  = reversed ? destLocId : srcLocId;
            Long moveDestId = reversed ? srcLocId  : destLocId;

            StockMove move = StockMove.builder()
                    .picking(picking)
                    .productId(product.getId())
                    .productCode(product.getDefaultCode())
                    .productName(product.getName())
                    .qtyDemanded(absQty)
                    .qtyDone(absQty)
                    .priceUnit(priceUnit)
                    .locationId(moveSrcId)
                    .locationDestId(moveDestId)
                    .state("done")
                    .companyId(companyId)
                    .build();
            moves.add(move);

            // Mettre à jour StockQuant sur l'emplacement interne
            StockQuant quant = stockQuantRepo
                    .findFirstByProductIdAndLocationIdAndCompanyId(product.getId(), internalLoc.getId(), companyId)
                    .orElse(null);

            if (goesIn) {
                // Retour / déconsigne : ajouter l'emballage au stock interne
                if (quant == null) {
                    quant = StockQuant.builder()
                            .productId(product.getId())
                            .locationId(internalLoc.getId())
                            .companyId(companyId)
                            .quantity(absQty)
                            .reservedQuantity(ZERO)
                            .build();
                } else {
                    quant.setQuantity(quant.getQuantity().add(absQty));
                }
            } else {
                // Vente : déduire du stock interne et libérer la réservation
                if (quant == null) {
                    quant = StockQuant.builder()
                            .productId(product.getId())
                            .locationId(internalLoc.getId())
                            .companyId(companyId)
                            .quantity(ZERO)
                            .reservedQuantity(ZERO)
                            .build();
                    log.warn("Vente {} : produit {} absent de l'entrepôt {} (quant créé à 0)",
                            invoice.getName(), product.getName(), internalLoc.getName());
                } else {
                    BigDecimal newQty = quant.getQuantity().subtract(absQty);
                    quant.setQuantity(newQty.compareTo(ZERO) < 0 ? ZERO : newQty);
                    BigDecimal newReserved = quant.getReservedQuantity().subtract(absQty);
                    quant.setReservedQuantity(newReserved.compareTo(ZERO) < 0 ? ZERO : newReserved);
                }
            }
            stockQuantRepo.save(quant);
        }

        picking.setMoves(moves);
        stockPickingRepo.save(picking);
        syncEventPublisher.publish(SyncEventType.STOCK_PICKING_FROM_SALE, String.valueOf(picking.getId()),
                buildPickingSyncPayload(picking, "Livraison facture vente " + invoice.getName()));
        log.info("Mouvement de stock créé : {} ({} lignes) pour facture {}", pickingName, moves.size(), invoice.getName());

        // Créer les écritures comptables de variation de stock
        createStockValuationEntries(invoice, isAvoir, productLines.stream()
                .map(lp -> new java.util.AbstractMap.SimpleEntry<>(lp.line(), lp.product()))
                .collect(java.util.stream.Collectors.toList()));
    }

    /**
     * Génère la pièce comptable de variation de stock (6031 / 31) pour chaque produit physique.
     * Vente : Dr 6031 / Cr 31  (coût de sortie de stock)
     * Avoir : Dr 31   / Cr 6031 (entrée de retour en stock)
     */
    private void createStockValuationEntries(SalesInvoice invoice, boolean isAvoir,
            List<java.util.Map.Entry<SalesInvoiceLine, com.erp.stock.entity.Product>> productLines) {
        Long companyId = invoice.getCompany().getId();

        // Journal OD (opérations diverses / général)
        AccountJournal stockJournal = journalRepo.findByCompanyIdAndActiveTrue(companyId).stream()
                .filter(j -> "general".equals(j.getType()) || "misc".equals(j.getType()))
                .findFirst()
                .orElse(invoice.getJournal());

        if (stockJournal == null) {
            log.warn("Aucun journal OD trouvé — écritures de stock ignorées pour {}", invoice.getName());
            return;
        }

        // Comptes 603100 (variation stocks marchandises) et 311000 (stocks marchandises)
        AccountAccount varStockAccount = accountRepo.findFirstByCodeAndCompanyId("603100", companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("6031", companyId)).orElse(null);
        AccountAccount stockAccount    = accountRepo.findFirstByCodeAndCompanyId("311000", companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("311",  companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("31",   companyId)).orElse(null);

        if (varStockAccount == null || stockAccount == null) {
            log.warn("Comptes 603100 ou 311000 introuvables — écritures de stock ignorées pour {}", invoice.getName());
            return;
        }

        List<AccountMoveLine> moveLines = new ArrayList<>();
        BigDecimal totalCost = ZERO;

        for (java.util.Map.Entry<SalesInvoiceLine, com.erp.stock.entity.Product> entry : productLines) {
            SalesInvoiceLine line = entry.getKey();
            com.erp.stock.entity.Product product = entry.getValue();

            if (ConsigneCodes.isConsigne(product.getDefaultCode(), companyId)) continue;

            BigDecimal cost = productValuationService.getWarehouseCmup(product.getId(), invoice.getWarehouseId(), product);
            if (cost.compareTo(ZERO) == 0) continue;

            BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : BigDecimal.ONE;
            boolean qtyNegative = qty.compareTo(ZERO) < 0;
            BigDecimal amount = cost.multiply(qty.abs()).setScale(2, RoundingMode.HALF_UP);
            if (amount.compareTo(ZERO) == 0) continue;

            totalCost = totalCost.add(amount);

            String libelle = (line.getDescription() != null && !line.getDescription().isBlank())
                    ? line.getDescription()
                    : (product.getDefaultCode() != null ? product.getDefaultCode() : product.getName());
            // Vente avec ligne positive (ou avoir avec ligne négative, càd sortie) : Dr 6031 / Cr 31.
            // Vente avec ligne négative (retour) ou avoir avec ligne positive (retour normal) :
            // Dr 31 / Cr 6031 (inversé).
            boolean outDirection = isAvoir ? qtyNegative : !qtyNegative;
            moveLines.add(AccountMoveLine.builder()
                    .account(varStockAccount).name("Var.Stock - " + libelle)
                    .date(invoice.getDate())
                    .debit(outDirection ? amount : ZERO).credit(outDirection ? ZERO : amount)
                    .journal(stockJournal).company(invoice.getCompany())
                    .partner(invoice.getPartner())
                    .build());
            moveLines.add(AccountMoveLine.builder()
                    .account(stockAccount).name("Var.Stock - " + libelle)
                    .date(invoice.getDate())
                    .debit(outDirection ? ZERO : amount).credit(outDirection ? amount : ZERO)
                    .journal(stockJournal).company(invoice.getCompany())
                    .partner(invoice.getPartner())
                    .build());
        }

        if (moveLines.isEmpty()) {
            log.info("Aucune ligne de coût standard — pas d'écriture de stock pour {}", invoice.getName());
            return;
        }

        AccountMove stockMove = AccountMove.builder()
                .name("STK/" + invoice.getName())
                .date(invoice.getDate())
                .ref("Variation stock - " + invoice.getName())
                .state("posted")
                .journal(stockJournal)
                .company(invoice.getCompany())
                .partner(invoice.getPartner())
                .build();
        for (AccountMoveLine l : moveLines) l.setMove(stockMove);
        stockMove.setLines(moveLines);
        AccountMove savedStockMove = moveRepo.save(stockMove);
        syncEventPublisher.publish(SyncEventType.ACCOUNT_MOVE_STOCK_VALUATION, String.valueOf(savedStockMove.getId()),
                buildMoveSyncPayload(savedStockMove, "Variation de stock — vente " + invoice.getName()));
        log.info("Écriture de variation de stock STK/{} créée (coût total: {})", invoice.getName(), totalCost);
    }

    private void buildOrderLines(SalesOrder order, List<SalesOrderRequest.LineRequest> lineRequests) {
        if (lineRequests == null) return;
        Long companyId = order.getCompany() != null ? order.getCompany().getId() : null;
        for (SalesOrderRequest.LineRequest req : lineRequests) {
            BigDecimal qty = req.getQuantity() != null ? req.getQuantity() : BigDecimal.ONE;
            BigDecimal rabaisUnit = req.getRabaisUnitaire() != null ? req.getRabaisUnitaire() : ZERO;

            // Respecter le flag exemptTva du produit — priorité sur ce que le frontend envoie
            BigDecimal resolvedTauxTVA = req.getTauxTVA() != null ? req.getTauxTVA() : ZERO;
            resolvedTauxTVA = resolveExemptTva(resolvedTauxTVA, req.getProductId(), req.getProductCode(), companyId);

            SalesOrderLine line = SalesOrderLine.builder()
                    .order(order)
                    .productId(req.getProductId())
                    .productCode(req.getProductCode())
                    .description(req.getDescription())
                    .quantity(qty)
                    .prixUnitaire(req.getPrixUnitaire() != null ? req.getPrixUnitaire() : ZERO)
                    .tauxRemise(req.getTauxRemise() != null ? req.getTauxRemise() : ZERO)
                    .tauxTVA(resolvedTauxTVA)
                    .accountCode(req.getAccountCode())
                    .categoryId(req.getCategoryId())
                    .consigne(ConsigneCodes.isConsigne(req.getProductCode(), companyId))
                    .rabaisUnitaire(rabaisUnit)
                    .totalRabaisLigne(qty.multiply(rabaisUnit).setScale(2, RoundingMode.HALF_UP))
                    .build();
            computeLineTotals(line);
            order.getLines().add(line);
        }
    }

    /** Retourne ZERO si le produit (par id ou code) est exempté de TVA, sinon retourne tauxTVA tel quel. */
    private BigDecimal resolveExemptTva(BigDecimal tauxTVA, Long productId, String productCode, Long companyId) {
        Product prod = null;
        if (productId != null) {
            prod = stockProductRepo.findById(productId).orElse(null);
        } else if (productCode != null && !productCode.isBlank() && companyId != null) {
            prod = stockProductRepo.findFirstByDefaultCodeAndCompanyId(productCode, companyId).orElse(null);
        }
        return (prod != null && Boolean.TRUE.equals(prod.getExemptTva())) ? ZERO : tauxTVA;
    }

    private void buildInvoiceLines(SalesInvoice invoice, List<SalesInvoiceRequest.LineRequest> lineRequests) {
        if (lineRequests == null) return;
        Long partnerId = invoice.getPartner() != null ? invoice.getPartner().getId() : null;
        Long companyId = invoice.getCompany() != null ? invoice.getCompany().getId() : null;

        // Resolve precompte rate: Partner.tauxPrecompte first, then Precompte table
        BigDecimal tauxPrecompte = (partnerId != null && companyId != null)
                ? getPartnerSalePrecompteTaux(partnerId, companyId)
                : ZERO;

        for (SalesInvoiceRequest.LineRequest req : lineRequests) {
            // Résoudre le productId depuis le code si non fourni
            Long resolvedProductId = req.getProductId() != null ? req.getProductId()
                    : (req.getProductCode() != null && companyId != null
                        ? stockProductRepo.findFirstByDefaultCodeAndCompanyId(req.getProductCode(), companyId)
                              .map(com.erp.stock.entity.Product::getId).orElse(null)
                        : null);

            // Respecter le flag exemptTva du produit
            BigDecimal resolvedTauxTVA = req.getTauxTVA() != null ? req.getTauxTVA() : ZERO;
            resolvedTauxTVA = resolveExemptTva(resolvedTauxTVA, resolvedProductId, req.getProductCode(), companyId);

            SalesInvoiceLine line = SalesInvoiceLine.builder()
                    .invoice(invoice)
                    .productId(resolvedProductId)
                    .productCode(req.getProductCode())
                    .description(req.getDescription())
                    .quantity(req.getQuantity() != null ? req.getQuantity() : BigDecimal.ONE)
                    .prixUnitaire(req.getPrixUnitaire() != null ? req.getPrixUnitaire() : ZERO)
                    .tauxRemise(req.getTauxRemise() != null ? req.getTauxRemise() : ZERO)
                    .tauxTVA(resolvedTauxTVA)
                    .accountCode(req.getAccountCode())
                    .consigne(ConsigneCodes.isConsigne(req.getProductCode(), companyId))
                    .categoryId(resolveCategoryId(req.getCategoryId(), req.getProductCode(), companyId))
                    .build();
            computeInvoiceLineTotals(line);

            // Précompte (only on non-consigne lines, jamais sur les avoirs de règlement ristourne/remise)
            boolean excludePrecompteLine = req.isExcludePrecompte();
            if (!ConsigneCodes.isConsigne(line.getProductCode(), companyId) && !excludePrecompteLine
                    && tauxPrecompte.compareTo(ZERO) > 0) {
                BigDecimal pc = line.getMontantHT()
                        .multiply(tauxPrecompte)
                        .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
                line.setPrecompte(pc);
            } else {
                line.setPrecompte(ZERO);
            }

            // Frais d'enlèvement HT (only on non-consigne lines with a category), TVA calculée dessus
            BigDecimal tva = line.getTauxTVA() != null ? line.getTauxTVA() : ZERO;
            BigDecimal fraisEnlevHT = computeFraisEnlevement(req, line, partnerId, companyId);
            line.setFraisEnlevement(fraisEnlevHT);
            line.setFraisEnlevementTVA(fraisEnlevHT
                    .multiply(tva)
                    .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP));

            // Prix TTC unitaire = HT × (1 + TVA% + Précompte%), arrondi à l'entier
            BigDecimal pcRateForLine = (line.isConsigne() || excludePrecompteLine) ? ZERO : tauxPrecompte;
            BigDecimal puttc = line.getPrixUnitaire()
                    .multiply(BigDecimal.ONE
                            .add(tva.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP))
                            .add(pcRateForLine.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP)))
                    .setScale(0, RoundingMode.HALF_UP);

            // Taxe Guinness : +300 par unité sur le prixUnitaireTTC (sauf client exempté)
            BigDecimal guinessTaxeLigne = ZERO;
            BigDecimal qtyForTtc = line.getQuantity() != null ? line.getQuantity() : BigDecimal.ONE;
            if (!line.isConsigne() && line.getCategoryId() != null) {
                boolean estGuinness = categoryRepo.findById(line.getCategoryId())
                        .map(c -> isCategorieGuinness(c.getName()))
                        .orElse(false);
                boolean exempt = invoice.getPartner() != null && invoice.getPartner().isExemptTaxeGuinness();
                if (estGuinness && !exempt) {
                    puttc = puttc.add(GUINNESS_TAXE_LIGNE);  // +300 sur le prix unitaire TTC
                    guinessTaxeLigne = GUINNESS_TAXE_LIGNE.multiply(qtyForTtc).setScale(2, RoundingMode.HALF_UP);
                }
            }
            line.setPrixUnitaireTTC(puttc);
            line.setGuinessTaxe(guinessTaxeLigne);
            // montantTTC = qty × prixUnitaireTTC (entier)
            line.setMontantTTC(qtyForTtc.multiply(puttc).setScale(0, RoundingMode.HALF_UP));

            // Rabais client
            BigDecimal rabaisUnitaire = req.getRabaisUnitaire() != null ? req.getRabaisUnitaire() : ZERO;
            BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : ZERO;
            BigDecimal totalRabaisHT = qty.multiply(rabaisUnitaire).setScale(2, RoundingMode.HALF_UP);
            line.setRabaisUnitaire(rabaisUnitaire);
            line.setTotalRabaisLigne(totalRabaisHT);
            line.setTotalRabaisLigneTTC(computeRabaisTTC(totalRabaisHT, tva, pcRateForLine));

            invoice.getLines().add(line);
        }
    }

    private BigDecimal computeRabaisTTC(BigDecimal rabaisHT, BigDecimal tauxTVA, BigDecimal tauxPrecompte) {
        BigDecimal ht = rabaisHT != null ? rabaisHT : ZERO;
        BigDecimal tva = tauxTVA != null ? tauxTVA : ZERO;
        BigDecimal precompte = tauxPrecompte != null ? tauxPrecompte : ZERO;
        return ht.multiply(BigDecimal.ONE
                        .add(tva.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP))
                        .add(precompte.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP)))
                .setScale(0, RoundingMode.HALF_UP);
    }

    private BigDecimal computeRabaisUnitaireTTC(SalesInvoiceLine l) {
        BigDecimal ttcLigne = l.getTotalRabaisLigneTTC() != null ? l.getTotalRabaisLigneTTC() : ZERO;
        if (ttcLigne.compareTo(ZERO) == 0) return ZERO;
        BigDecimal qty = l.getQuantity() != null ? l.getQuantity().abs() : ZERO;
        if (qty.compareTo(ZERO) == 0) return ZERO;
        return ttcLigne.divide(qty, 0, RoundingMode.HALF_UP);
    }

    private Long resolveCategoryId(Long categoryId, String productCode, Long companyId) {
        if (categoryId != null) return categoryId;
        if (productCode != null && !productCode.isBlank() && companyId != null) {
            return stockProductRepo.findFirstByDefaultCodeAndCompanyId(productCode, companyId)
                    .map(com.erp.stock.entity.Product::getCategoryId)
                    .orElse(null);
        }
        return null;
    }

    /**
     * Calcule les frais d'enlèvement HT d'une ligne selon la logique Odoo :
     * - Si un tarif client spécifique existe → il REMPLACE le tarif de base (pas d'addition)
     * - Sinon → tarif de base (montantFixe) pour la catégorie
     * - montantFixe est HT par unité ; la TVA est calculée séparément lors de la facturation
     */
    private BigDecimal computeFraisEnlevement(SalesInvoiceRequest.LineRequest req,
                                               SalesInvoiceLine line,
                                               Long partnerId, Long companyId) {
        if (ConsigneCodes.isConsigne(line.getProductCode(), companyId) || companyId == null) return ZERO;

        Long catId = line.getCategoryId();
        if (catId == null && req != null) {
            catId = resolveCategoryId(req.getCategoryId(), req.getProductCode(), companyId);
        }
        if (catId == null && line.getProductCode() != null && !line.getProductCode().isBlank()) {
            catId = resolveCategoryId(null, line.getProductCode(), companyId);
        }
        if (catId == null) return ZERO;

        BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : BigDecimal.ONE;

        // Tarif client spécifique : remplace le tarif de base (logique Odoo get_montant_enlevement)
        if (partnerId != null) {
            var clientRate = enlevementClientRepo
                    .findByEnlevement_CategoryIdAndEnlevement_CompanyIdAndPartnerId(catId, companyId, partnerId);
            if (clientRate.isPresent() && clientRate.get().getMontant() != null) {
                return clientRate.get().getMontant().multiply(qty).setScale(2, RoundingMode.HALF_UP);
            }
        }

        // Tarif de base pour la catégorie
        return enlevementRepo.findByCategoryIdAndCompanyIdAndActiveTrue(catId, companyId)
                .map(e -> (e.getMontantFixe() != null ? e.getMontantFixe() : ZERO)
                        .multiply(qty).setScale(2, RoundingMode.HALF_UP))
                .orElse(ZERO);
    }

    private void computeLineTotals(SalesOrderLine line) {
        BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : BigDecimal.ONE;
        BigDecimal pu = line.getPrixUnitaire() != null ? line.getPrixUnitaire() : ZERO;
        BigDecimal remise = line.getTauxRemise() != null ? line.getTauxRemise() : ZERO;
        BigDecimal tva = line.getTauxTVA() != null ? line.getTauxTVA() : ZERO;

        BigDecimal brut = qty.multiply(pu);
        BigDecimal remiseMontant = brut.multiply(remise).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
        BigDecimal ht = brut.subtract(remiseMontant).setScale(2, RoundingMode.HALF_UP);
        BigDecimal montantTVA = ht.multiply(tva).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);

        line.setMontantHT(ht);
        line.setMontantTVA(montantTVA);
        line.setMontantTTC(ht.add(montantTVA));
    }

    private void computeInvoiceLineTotals(SalesInvoiceLine line) {
        BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : BigDecimal.ONE;
        BigDecimal pu = line.getPrixUnitaire() != null ? line.getPrixUnitaire() : ZERO;
        BigDecimal remise = line.getTauxRemise() != null ? line.getTauxRemise() : ZERO;
        BigDecimal tva = line.getTauxTVA() != null ? line.getTauxTVA() : ZERO;

        BigDecimal brut = qty.multiply(pu);
        BigDecimal remiseMontant = brut.multiply(remise).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
        BigDecimal ht = brut.subtract(remiseMontant).setScale(2, RoundingMode.HALF_UP);
        BigDecimal montantTVA = ht.multiply(tva).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);

        line.setMontantHT(ht);
        line.setMontantTVA(montantTVA);
        line.setMontantTTC(ht.add(montantTVA));
    }

    private void computeOrderTotals(SalesOrder order) {
        BigDecimal totalHT = ZERO, totalTVA = ZERO, totalTTC = ZERO, totalRemise = ZERO;
        for (SalesOrderLine line : order.getLines()) {
            BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : BigDecimal.ONE;
            BigDecimal pu = line.getPrixUnitaire() != null ? line.getPrixUnitaire() : ZERO;
            BigDecimal remise = line.getTauxRemise() != null ? line.getTauxRemise() : ZERO;

            totalHT = totalHT.add(line.getMontantHT() != null ? line.getMontantHT() : ZERO);
            totalTVA = totalTVA.add(line.getMontantTVA() != null ? line.getMontantTVA() : ZERO);
            totalTTC = totalTTC.add(line.getMontantTTC() != null ? line.getMontantTTC() : ZERO);
            totalRemise = totalRemise.add(qty.multiply(pu).multiply(remise)
                    .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP));
        }
        order.setTotalHT(totalHT);
        order.setTotalTVA(totalTVA);
        order.setTotalTTC(totalTTC);
        order.setTotalRemise(totalRemise);
    }

    private void computeInvoiceTotals(SalesInvoice invoice) {
        Long companyId = invoice.getCompany() != null ? invoice.getCompany().getId() : null;
        // Accumulation sur lignes NON-consigne uniquement pour HT/TVA/PSA/enlèvement
        BigDecimal totalHT = ZERO, totalTVA = ZERO, totalPrecompte = ZERO, totalEnlevement = ZERO;
        BigDecimal totalEnlevementHT = ZERO, totalEnlevementTVA = ZERO;
        BigDecimal totalGuinessTaxe = ZERO, totalRabais = ZERO, totalRabaisTTC = ZERO;
        // Consignes : montant TTC des lignes consigne positives et négatives
        BigDecimal consigneMontant = ZERO, deconsigneMontant = ZERO;

        for (SalesInvoiceLine line : invoice.getLines()) {
            BigDecimal ht   = line.getMontantHT()  != null ? line.getMontantHT()  : ZERO;
            BigDecimal tva  = line.getMontantTVA() != null ? line.getMontantTVA() : ZERO;
            BigDecimal ttc  = line.getMontantTTC() != null ? line.getMontantTTC() : ZERO;
            BigDecimal pc   = line.getPrecompte()  != null ? line.getPrecompte()  : ZERO;
            BigDecimal enlHT = line.getFraisEnlevement() != null ? line.getFraisEnlevement() : ZERO;
            BigDecimal enlTVA = line.getFraisEnlevementTVA() != null ? line.getFraisEnlevementTVA() : ZERO;
            BigDecimal gTx  = line.getGuinessTaxe() != null ? line.getGuinessTaxe() : ZERO;
            BigDecimal qty  = line.getQuantity()   != null ? line.getQuantity()   : ZERO;
            BigDecimal tauxTVA = line.getTauxTVA() != null ? line.getTauxTVA()    : ZERO;
            BigDecimal rabais = line.getTotalRabaisLigne() != null ? line.getTotalRabaisLigne() : ZERO;
            BigDecimal rabaisTTC = line.getTotalRabaisLigneTTC() != null
                    ? line.getTotalRabaisLigneTTC()
                    : computeRabaisTTC(rabais, tauxTVA, ht.compareTo(ZERO) != 0
                            ? pc.multiply(BigDecimal.valueOf(100)).divide(ht, 6, RoundingMode.HALF_UP)
                            : ZERO);

            if (ConsigneCodes.isConsigne(line.getProductCode(), companyId)) {
                if (qty.compareTo(ZERO) >= 0) {
                    consigneMontant = consigneMontant.add(ttc);
                } else {
                    deconsigneMontant = deconsigneMontant.add(ttc.abs());
                }
            } else {
                totalHT           = totalHT.add(ht);
                totalTVA          = totalTVA.add(tva);
                totalPrecompte    = totalPrecompte.add(pc);
                totalEnlevementHT  = totalEnlevementHT.add(enlHT);
                totalEnlevementTVA = totalEnlevementTVA.add(enlTVA);
                totalEnlevement   = totalEnlevement.add(enlHT).add(enlTVA);
                totalGuinessTaxe  = totalGuinessTaxe.add(gTx);
                totalRabais       = totalRabais.add(rabais);
                totalRabaisTTC    = totalRabaisTTC.add(rabaisTTC);
            }
        }

        // Liquide Nu = HT + TVA + PSA  (base de calcul ristourne)
        BigDecimal totalLiquideNu = totalHT.add(totalTVA).add(totalPrecompte).setScale(2, RoundingMode.HALF_UP);
        // Total TTC = Liquide Nu + Frais enlèvement + Taxe Guinness (au prix standard)
        BigDecimal totalTTC = totalLiquideNu.add(totalEnlevement).add(totalGuinessTaxe).setScale(0, RoundingMode.HALF_UP);
        // Net à payer = Total TTC + Consigne − Déconsigne − Rabais TTC accordés
        BigDecimal netAPayer = totalTTC.add(consigneMontant).subtract(deconsigneMontant)
                .subtract(totalRabaisTTC).setScale(0, RoundingMode.HALF_UP);

        // Ristourne calculée sur la base du liquide nu, conservée mais NON déduite
        BigDecimal totalRistourne = ZERO;
        if (invoice.getPartner() != null && invoice.getCompany() != null) {
            totalRistourne = computeInvoiceRistourne(invoice, totalLiquideNu);
        }

        invoice.setTotalHT(totalHT);
        invoice.setTotalTVA(totalTVA);
        invoice.setTotalPrecompte(totalPrecompte);
        invoice.setFraisEnlevementTTC(totalEnlevement);
        invoice.setFraisEnlevementHT(totalEnlevementHT);
        invoice.setFraisEnlevementTVA(totalEnlevementTVA);
        invoice.setTotalGuinessTaxe(totalGuinessTaxe);
        invoice.setTotalRabais(totalRabais);
        invoice.setTotalRabaisTTC(totalRabaisTTC);
        invoice.setTotalLiquideNu(totalLiquideNu);
        invoice.setTotalTTC(totalTTC);
        invoice.setTotalRistourne(totalRistourne);
        invoice.setNetAPayer(netAPayer);
        boolean isAvoirDoc = "credit_note".equals(invoice.getType());
        invoice.setMontantDu(isAvoirDoc ? netAPayer.abs() : netAPayer);
    }

    private BigDecimal computeInvoiceRistourne(SalesInvoice invoice, BigDecimal totalLiquideNu) {
        if (invoice.getPartner() == null || invoice.getCompany() == null) return ZERO;
        Long partnerId = invoice.getPartner().getId();
        Long companyId = invoice.getCompany().getId();
        BigDecimal tauxPrecompte = getPartnerSalePrecompteTaux(partnerId, companyId);
        return ristourneRepo.findByPartnerIdAndCompanyIdAndActiveTrue(partnerId, companyId)
                .stream()
                .map(r -> {
                    Long catId = r.getCategory().getId();
                    BigDecimal totalQty = invoice.getLines().stream()
                            .filter(l -> !ConsigneCodes.isConsigne(l.getProductCode(), companyId) && catId.equals(l.getCategoryId()))
                            .map(l -> l.getQuantity() != null ? l.getQuantity() : ZERO)
                            .reduce(ZERO, BigDecimal::add);
                    if (totalQty.compareTo(ZERO) == 0) return ZERO;
                    BigDecimal montantTTC = computeRistourneTTCUnit(r.getMontantFixe(), r.getTypeRistourne(), tauxPrecompte);
                    return totalQty.multiply(montantTTC).setScale(2, RoundingMode.HALF_UP);
                })
                .reduce(ZERO, BigDecimal::add);
    }

    private static final BigDecimal TAUX_TVA = BigDecimal.valueOf(0.1925);

    private BigDecimal computeRistourneTTCUnit(BigDecimal montantHT, String type, BigDecimal tauxPrecompte) {
        if ("brasserie".equals(type)) {
            // Odoo: montant_fixe × (1 + taux_precompte + 0.1925)
            BigDecimal pcRate = tauxPrecompte.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP);
            BigDecimal coeff = BigDecimal.ONE.add(pcRate).add(TAUX_TVA);
            return montantHT.multiply(coeff).setScale(2, RoundingMode.HALF_UP);
        } else if ("guinness".equals(type)) {
            // guinness: pas de précompte mais TVA s'applique
            return montantHT.multiply(BigDecimal.ONE.add(TAUX_TVA)).setScale(2, RoundingMode.HALF_UP);
        }
        return montantHT.multiply(BigDecimal.ONE.add(TAUX_TVA)).setScale(2, RoundingMode.HALF_UP);
    }

    private BigDecimal getPartnerSalePrecompteTaux(Long partnerId, Long companyId) {
        com.erp.accounting.entity.Partner p = partnerRepo.findById(partnerId).orElse(null);
        if (p != null && p.getTauxPrecompte() != null) return p.getTauxPrecompte();
        return precompteRepo.findByPartnerIdAndTypePrecompteAndCompanyIdAndActiveTrue(partnerId, "sale", companyId)
                .map(com.erp.common.entity.Precompte::getTauxPrecompte).orElse(ZERO);
    }

    /**
     * Rapport global des ristournes calculées sur les factures d'une période.
     * Retourne des pseudo-RistournePaiementDTO construits à partir du détail
     * de chaque facture (typeRistourne × catégorie).
     */
    @Transactional(readOnly = true)
    public List<RistournePaiementDTO> getRapportRistournesFromInvoices(
            LocalDate dateFrom, LocalDate dateTo, Long companyId) {

        List<SalesInvoice> invoices = invoiceRepo.findPostedByCompanyAndDateRange(companyId, dateFrom, dateTo);
        List<RistournePaiementDTO> result = new ArrayList<>();

        for (SalesInvoice invoice : invoices) {
            List<SalesInvoiceDTO.RistourneDetailDTO> details = buildRistourneDetails(invoice);
            if (details.isEmpty()) continue;

            Map<String, List<SalesInvoiceDTO.RistourneDetailDTO>> byType = new LinkedHashMap<>();
            for (SalesInvoiceDTO.RistourneDetailDTO d : details) {
                String type = d.getTypeRistourne() != null ? d.getTypeRistourne() : "brut";
                byType.computeIfAbsent(type, k -> new ArrayList<>()).add(d);
            }

            for (Map.Entry<String, List<SalesInvoiceDTO.RistourneDetailDTO>> e : byType.entrySet()) {
                List<RistournePaiementDTO.LineDTO> lines = e.getValue().stream()
                    .map(d -> RistournePaiementDTO.LineDTO.builder()
                        .categoryName(d.getCategoryName())
                        .quantite(d.getQuantite())
                        .montantUnitaire(d.getMontantUnitaire())
                        .montantTotal(d.getMontantTotal())
                        .montantTTC(d.getMontantTotal())
                        .build())
                    .collect(Collectors.toList());

                BigDecimal total = lines.stream()
                    .map(l -> l.getMontantTTC() != null ? l.getMontantTTC() : ZERO)
                    .reduce(ZERO, BigDecimal::add);

                // Lignes par article individuel (un produit = une ligne)
                List<RistournePaiementDTO.ArticleLineDTO> articleLines =
                    buildArticleLines(invoice, e.getKey(), companyId);

                result.add(RistournePaiementDTO.builder()
                    .partnerId(invoice.getPartner().getId())
                    .partnerName(invoice.getPartner().getName())
                    .date(invoice.getDate())
                    .invoiceId(invoice.getId())
                    .invoiceName(invoice.getName())
                    .typeRistourne(e.getKey())
                    .totalAmount(total)
                    .companyId(companyId)
                    .state("posted")
                    .lines(lines)
                    .articleLines(articleLines)
                    .build());
            }
        }
        return result;
    }

    private List<SalesInvoiceDTO.RistourneDetailDTO> buildRistourneDetails(SalesInvoice invoice) {
        if (invoice.getPartner() == null || invoice.getCompany() == null) return List.of();
        Long partnerId = invoice.getPartner().getId();
        Long companyId = invoice.getCompany().getId();
        boolean isAvoir = "credit_note".equals(invoice.getType());
        BigDecimal sign = isAvoir ? BigDecimal.ONE.negate() : BigDecimal.ONE;
        BigDecimal tauxPrecompte = getPartnerSalePrecompteTaux(partnerId, companyId);
        return ristourneRepo.findByPartnerIdAndCompanyIdAndActiveTrue(partnerId, companyId)
                .stream()
                .map(r -> {
                    Long catId = r.getCategory().getId();
                    BigDecimal totalQty = invoice.getLines().stream()
                            .filter(l -> !ConsigneCodes.isConsigne(l.getProductCode(), companyId) && catId.equals(resolveCategoryId(l.getCategoryId(), l.getProductCode(), companyId)))
                            .map(l -> l.getQuantity() != null ? l.getQuantity() : ZERO)
                            .reduce(ZERO, BigDecimal::add);
                    if (totalQty.compareTo(ZERO) == 0) return null;
                    BigDecimal montantUnit = computeRistourneTTCUnit(r.getMontantFixe(), r.getTypeRistourne(), tauxPrecompte);
                    // Pour les avoirs : quantité et total négatifs pour indiquer l'annulation
                    return SalesInvoiceDTO.RistourneDetailDTO.builder()
                            .categoryName(r.getCategory().getName())
                            .quantite(totalQty.multiply(sign))
                            .montantUnitaire(montantUnit)
                            .montantTotal(totalQty.multiply(montantUnit).setScale(2, RoundingMode.HALF_UP).multiply(sign))
                            .typeRistourne(r.getTypeRistourne())
                            .build();
                })
                .filter(java.util.Objects::nonNull)
                .collect(Collectors.toList());
    }

    /** Retourne une ligne par produit individuel vendu avec sa ristourne. */
    private List<RistournePaiementDTO.ArticleLineDTO> buildArticleLines(
            SalesInvoice invoice, String typeRistourne, Long companyId) {

        if (invoice.getPartner() == null || invoice.getCompany() == null) return List.of();
        Long partnerId = invoice.getPartner().getId();
        boolean isAvoir = "credit_note".equals(invoice.getType());
        BigDecimal sign = isAvoir ? BigDecimal.ONE.negate() : BigDecimal.ONE;
        BigDecimal tauxPrecompte = getPartnerSalePrecompteTaux(partnerId, companyId);

        List<Ristourne> ristournes = ristourneRepo
                .findByPartnerIdAndCompanyIdAndActiveTrue(partnerId, companyId)
                .stream()
                .filter(r -> typeRistourne.equals(r.getTypeRistourne()))
                .collect(Collectors.toList());

        List<RistournePaiementDTO.ArticleLineDTO> result = new ArrayList<>();
        for (SalesInvoiceLine invLine : invoice.getLines()) {
            if (ConsigneCodes.isConsigne(invLine.getProductCode(), companyId)) continue;
            BigDecimal qty = invLine.getQuantity() != null ? invLine.getQuantity() : ZERO;
            if (qty.compareTo(ZERO) == 0) continue;
            Long catId = resolveCategoryId(invLine.getCategoryId(), invLine.getProductCode(), companyId);
            ristournes.stream()
                .filter(r -> r.getCategory().getId().equals(catId))
                .findFirst()
                .ifPresent(r -> {
                    BigDecimal montantUnit = computeRistourneTTCUnit(r.getMontantFixe(), r.getTypeRistourne(), tauxPrecompte);
                    BigDecimal montant = qty.multiply(montantUnit).setScale(2, RoundingMode.HALF_UP).multiply(sign);
                    result.add(RistournePaiementDTO.ArticleLineDTO.builder()
                        .productCode(invLine.getProductCode())
                        .productName(invLine.getDescription())
                        .categoryName(r.getCategory().getName())
                        .quantite(qty.multiply(sign))
                        .montantUnitaire(montantUnit)
                        .montantTotal(montant)
                        .build());
                });
        }
        return result;
    }

    // ===================== SÉQUENCES =====================

    private String generateOrderName(Long companyId, LocalDate date) {
        // Verrou pessimiste sur la société : sérialise ce générateur jusqu'au commit de la
        // transaction appelante, pour que deux requêtes concurrentes ne lisent jamais le même max
        // avant qu'aucune n'ait écrit (cf. AccountJournalRepository.findByIdForUpdate / CompanyRepository.findByIdForUpdate).
        companyRepo.findByIdForUpdate(companyId);
        int year = date.getYear();
        Integer max = orderRepo.findMaxSequenceByCompanyAndYear(companyId, year);
        int next = (max != null ? max : 0) + 1;
        return String.format("BC-%d-%05d", year, next);
    }

    private String generateInvoiceName(Long companyId, LocalDate date) {
        companyRepo.findByIdForUpdate(companyId);
        int year = date.getYear();
        Integer max = invoiceRepo.findMaxSequenceByCompanyTypeAndYear(companyId, "invoice", year);
        int next = (max != null ? max : 0) + 1;
        return String.format("FAC-%d-%05d", year, next);
    }

    private String generateAvoirName(Long companyId, LocalDate date) {
        companyRepo.findByIdForUpdate(companyId);
        int year = date.getYear();
        Integer max = invoiceRepo.findMaxSequenceByCompanyTypeAndYear(companyId, "credit_note", year);
        int next = (max != null ? max : 0) + 1;
        return String.format("AV-%d-%05d", year, next);
    }

    private String generatePaymentName(Long companyId, LocalDate date) {
        companyRepo.findByIdForUpdate(companyId);
        int year = date.getYear();
        Integer max = paymentRepo.findMaxSequenceByCompanyAndYear(companyId, year);
        int next = (max != null ? max : 0) + 1;
        return String.format("PAY-%d-%05d", year, next);
    }

    // ===================== MAPPING =====================

    private SalesOrderDTO toOrderDTO(SalesOrder order) {
        return toOrderDTO(order, null, null);
    }

    /**
     * Variante liste : invoiceByOrderId/warehouseNameCache préchargés une seule fois pour toute
     * la liste (getAllOrders) au lieu d'un findFirstBySalesOrderId + findById(warehouse) par bon.
     * Passer null partout reproduit exactement le comportement d'origine (bon unique).
     */
    private SalesOrderDTO toOrderDTO(SalesOrder order, Map<Long, SalesInvoice> invoiceByOrderId,
            Map<Long, String> warehouseNameCache) {
        SalesInvoice invoice = invoiceByOrderId != null
                ? invoiceByOrderId.get(order.getId())
                : invoiceRepo.findFirstBySalesOrderId(order.getId()).orElse(null);

        List<SalesOrderDTO.LineDTO> lines = order.getLines().stream()
                .map(l -> SalesOrderDTO.LineDTO.builder()
                        .id(l.getId()).productId(l.getProductId()).productCode(l.getProductCode()).description(l.getDescription())
                        .quantity(l.getQuantity()).prixUnitaire(l.getPrixUnitaire())
                        .tauxRemise(l.getTauxRemise()).tauxTVA(l.getTauxTVA()).accountCode(l.getAccountCode())
                        .montantHT(l.getMontantHT()).montantTVA(l.getMontantTVA()).montantTTC(l.getMontantTTC())
                        .rabaisUnitaire(l.getRabaisUnitaire())
                        .totalRabaisLigne(l.getTotalRabaisLigne())
                        .build())
                .collect(Collectors.toList());

        String warehouseName = null;
        if (order.getWarehouseId() != null) {
            warehouseName = warehouseNameCache != null
                    ? warehouseNameCache.computeIfAbsent(order.getWarehouseId(),
                        id -> warehouseRepo.findById(id).map(com.erp.stock.entity.Warehouse::getName).orElse(null))
                    : warehouseRepo.findById(order.getWarehouseId()).map(com.erp.stock.entity.Warehouse::getName).orElse(null);
        }

        return SalesOrderDTO.builder()
                .id(order.getId()).name(order.getName())
                .date(order.getDate()).dateEcheance(order.getDateEcheance())
                .state(order.getState()).notes(order.getNotes())
                .partnerId(order.getPartner() != null ? order.getPartner().getId() : null)
                .partnerName(order.getPartner() != null ? order.getPartner().getName() : null)
                .journalId(order.getJournal() != null ? order.getJournal().getId() : null)
                .journalName(order.getJournal() != null ? order.getJournal().getName() : null)
                .companyId(order.getCompany() != null ? order.getCompany().getId() : null)
                .warehouseId(order.getWarehouseId())
                .warehouseName(warehouseName)
                .totalHT(order.getTotalHT()).totalTVA(order.getTotalTVA())
                .totalTTC(order.getTotalTTC()).totalRemise(order.getTotalRemise())
                .totalPrecompte(invoice != null ? invoice.getTotalPrecompte() : null)
                .fraisEnlevementTTC(invoice != null ? invoice.getFraisEnlevementTTC() : null)
                .totalRabais(invoice != null ? invoice.getTotalRabais() : null)
                .totalRabaisTTC(invoice != null ? invoice.getTotalRabaisTTC() : null)
                .netAPayer(invoice != null ? invoice.getNetAPayer() : null)
                .lines(lines).createdAt(order.getCreatedAt()).createdBy(order.getCreatedBy())
                .invoiceId(invoice != null ? invoice.getId() : null)
                .invoiceName(invoice != null ? invoice.getName() : null)
                .eleaderReference(order.getEleaderReference())
                .build();
    }

    private SalesInvoiceDTO toInvoiceDTO(SalesInvoice invoice) {
        return buildInvoiceDTO(invoice, List.of(), null, null, null);
    }

    private SalesInvoiceDTO toInvoiceDTOWithPayments(SalesInvoice invoice) {
        List<InvoicePaymentDTO> payments = paymentRepo.findByInvoiceIdOrderByDateDesc(invoice.getId())
                .stream().map(this::toPaymentDTO).collect(Collectors.toList());
        return buildInvoiceDTO(invoice, payments, null, null, null);
    }

    /** Republie l'état courant de la facture (état, montant payé/dû) vers le Hub après toute
     *  opération qui le modifie sans passer par postInvoice (paiement, extourne, lettrage,
     *  compensation d'avoir, création d'avoir sur la facture d'origine) — sinon le Hub garde un
     *  état figé à sa dernière publication (ex: "posted") alors que la facture est devenue "paid"
     *  ou "extournee" côté spoke, et le snapshot horaire ne la rattrape jamais non plus puisqu'il
     *  ne recharge que les factures encore dans un état précis. */
    private void republishInvoiceSync(SalesInvoice invoice) {
        syncEventPublisher.publish(SyncEventType.SALE_INVOICE_POSTED, String.valueOf(invoice.getId()),
                toInvoiceDTOWithPayments(invoice));
    }

    /**
     * Variante liste : catNamesPreloaded/warehouseNameCache préchargés une seule fois pour toute
     * la liste (getAllInvoices/getAllAvoirs) au lieu d'un findById(warehouse) et d'un rechargement
     * de toutes les catégories à chaque facture. Passer null partout reproduit exactement le
     * comportement d'origine (facture unique).
     */
    private SalesInvoiceDTO buildInvoiceDTO(SalesInvoice invoice, List<InvoicePaymentDTO> payments,
            Map<Long, String> catNamesPreloaded, Map<Long, String> warehouseNameCache,
            Map<Long, java.math.BigDecimal[]> partnerBalanceCache) {
        Long companyId = invoice.getCompany() != null ? invoice.getCompany().getId() : null;

        // Résoudre le nom de l'entrepôt
        String warehouseName = null;
        if (invoice.getWarehouseId() != null) {
            warehouseName = warehouseNameCache != null
                    ? warehouseNameCache.computeIfAbsent(invoice.getWarehouseId(),
                        id -> warehouseRepo.findById(id).map(com.erp.stock.entity.Warehouse::getName).orElse(null))
                    : warehouseRepo.findById(invoice.getWarehouseId()).map(com.erp.stock.entity.Warehouse::getName).orElse(null);
        }

        // Calculer le solde du partenaire — mis en cache par partenaire (et non par facture) quand
        // un cache est fourni : sur une liste de factures, plusieurs lignes partagent souvent le
        // même partenaire, et ces deux agrégats coûteux n'ont besoin d'être calculés qu'une fois
        // par partenaire distinct plutôt qu'une fois par facture.
        java.math.BigDecimal partnerBalance = java.math.BigDecimal.ZERO;
        java.math.BigDecimal partnerCreditDisponible = java.math.BigDecimal.ZERO;
        if (invoice.getPartner() != null && companyId != null) {
            Long partnerId = invoice.getPartner().getId();
            if (partnerBalanceCache != null) {
                java.math.BigDecimal[] cached = partnerBalanceCache.computeIfAbsent(partnerId, pid -> new java.math.BigDecimal[]{
                        moveLineRepo.computePartnerBalance(pid, companyId),
                        invoiceRepo.sumAvailableCredits(pid, companyId)
                });
                partnerBalance = cached[0];
                partnerCreditDisponible = cached[1];
            } else {
                partnerBalance = moveLineRepo.computePartnerBalance(partnerId, companyId);
                partnerCreditDisponible = invoiceRepo.sumAvailableCredits(partnerId, companyId);
            }
        }

        Map<Long, String> catNames = catNamesPreloaded != null ? catNamesPreloaded
                : (companyId != null
                    ? categoryRepo.findByCompanyIdOrderByNameAsc(companyId).stream()
                        .collect(Collectors.toMap(c -> c.getId(), c -> c.getName(), (a, b) -> a))
                    : Map.of());

        Set<Long> productIds = invoice.getLines().stream()
                .map(com.erp.sales.entity.SalesInvoiceLine::getProductId)
                .filter(java.util.Objects::nonNull)
                .collect(Collectors.toSet());
        Map<Long, String> uomNames = productIds.isEmpty() ? Map.of()
                : stockProductRepo.findAllById(productIds).stream()
                    .filter(p -> p.getUomName() != null)
                    .collect(Collectors.toMap(com.erp.stock.entity.Product::getId, com.erp.stock.entity.Product::getUomName, (a, b) -> a));

        List<SalesInvoiceDTO.LineDTO> lines = invoice.getLines().stream()
                .map(l -> SalesInvoiceDTO.LineDTO.builder()
                        .id(l.getId()).productId(l.getProductId()).productCode(l.getProductCode()).description(l.getDescription())
                        .quantity(l.getQuantity()).prixUnitaire(l.getPrixUnitaire())
                        .tauxRemise(l.getTauxRemise()).tauxTVA(l.getTauxTVA()).accountCode(l.getAccountCode())
                        .categoryId(l.getCategoryId())
                        .montantHT(l.getMontantHT()).montantTVA(l.getMontantTVA()).montantTTC(l.getMontantTTC())
                        .precompte(l.getPrecompte()).fraisEnlevement(l.getFraisEnlevement())
                        .fraisEnlevementTVA(l.getFraisEnlevementTVA())
                        .prixUnitaireTTC(l.getPrixUnitaireTTC()).consigne(ConsigneCodes.isConsigne(l.getProductCode(), companyId))
                        .categoryName(l.getCategoryId() != null ? catNames.get(l.getCategoryId()) : null)
                        .uomName(l.getProductId() != null ? uomNames.get(l.getProductId()) : null)
                        .guinessTaxe(l.getGuinessTaxe())
                        .rabaisUnitaire(l.getRabaisUnitaire())
                        .rabaisUnitaireTTC(computeRabaisUnitaireTTC(l))
                        .totalRabaisLigne(l.getTotalRabaisLigne())
                        .totalRabaisLigneTTC(l.getTotalRabaisLigneTTC())
                        .build())
                .collect(Collectors.toList());

        return SalesInvoiceDTO.builder()
                .id(invoice.getId()).name(invoice.getName())
                .date(invoice.getDate()).dateEcheance(invoice.getDateEcheance())
                .state(invoice.getState())
                .type(invoice.getType() != null ? invoice.getType() : "invoice")
                .notes(invoice.getNotes())
                .partnerId(invoice.getPartner() != null ? invoice.getPartner().getId() : null)
                .partnerName(invoice.getPartner() != null ? invoice.getPartner().getName() : null)
                .journalId(invoice.getJournal() != null ? invoice.getJournal().getId() : null)
                .journalName(invoice.getJournal() != null ? invoice.getJournal().getName() : null)
                .companyId(invoice.getCompany() != null ? invoice.getCompany().getId() : null)
                .originalInvoiceId(invoice.getOriginalInvoice() != null ? invoice.getOriginalInvoice().getId() : null)
                .originalInvoiceName(invoice.getOriginalInvoice() != null ? invoice.getOriginalInvoice().getName() : null)
                .salesOrderId(invoice.getSalesOrder() != null ? invoice.getSalesOrder().getId() : null)
                .salesOrderName(invoice.getSalesOrder() != null ? invoice.getSalesOrder().getName() : null)
                .accountMoveId(invoice.getAccountMove() != null ? invoice.getAccountMove().getId() : null)
                .accountMoveName(invoice.getAccountMove() != null ? invoice.getAccountMove().getName() : null)
                .warehouseId(invoice.getWarehouseId())
                .warehouseName(warehouseName)
                .partnerBalance(partnerBalance)
                .partnerCreditDisponible(partnerCreditDisponible)
                .totalHT(invoice.getTotalHT()).totalTVA(invoice.getTotalTVA()).totalTTC(invoice.getTotalTTC())
                .montantPaye(invoice.getMontantPaye()).montantDu(invoice.getMontantDu())
                .totalRistourne(invoice.getTotalRistourne())
                .fraisEnlevementTTC(invoice.getFraisEnlevementTTC())
                .fraisEnlevementHT(invoice.getFraisEnlevementHT())
                .fraisEnlevementTVA(invoice.getFraisEnlevementTVA())
                .totalPrecompte(invoice.getTotalPrecompte())
                .totalLiquideNu(invoice.getTotalLiquideNu())
                .netAPayer(invoice.getNetAPayer())
                .totalGuinessTaxe(invoice.getTotalGuinessTaxe())
                .totalRabais(invoice.getTotalRabais())
                .totalRabaisTTC(invoice.getTotalRabaisTTC())
                .lines(lines)
                .ristourneDetails(buildRistourneDetails(invoice))
                .payments(payments).createdAt(invoice.getCreatedAt())
                .createdBy(invoice.getCreatedBy())
                .updatedBy(invoice.getUpdatedBy())
                .updatedAt(invoice.getUpdatedAt())
                .build();
    }

    private InvoicePaymentDTO toPaymentDTO(InvoicePayment p) {
        String creditNoteName = null;
        if (p.getCreditNoteId() != null) {
            creditNoteName = invoiceRepo.findById(p.getCreditNoteId())
                    .map(SalesInvoice::getName).orElse(null);
        }
        return InvoicePaymentDTO.builder()
                .id(p.getId()).name(p.getName()).date(p.getDate())
                .amount(p.getAmount()).memo(p.getMemo()).state(p.getState())
                .invoiceId(p.getInvoice() != null ? p.getInvoice().getId() : null)
                .invoiceName(p.getInvoice() != null ? p.getInvoice().getName() : null)
                .journalId(p.getJournal() != null ? p.getJournal().getId() : null)
                .journalName(p.getJournal() != null ? p.getJournal().getName() : null)
                .companyId(p.getCompany() != null ? p.getCompany().getId() : null)
                .accountMoveId(p.getAccountMove() != null ? p.getAccountMove().getId() : null)
                .accountMoveName(p.getAccountMove() != null ? p.getAccountMove().getName() : null)
                .creditNoteId(p.getCreditNoteId())
                .creditNoteName(creditNoteName)
                .createdAt(p.getCreatedAt())
                .build();
    }

    private PartnerDTO toPartnerDTO(Partner p) {
        return PartnerDTO.builder()
                .id(p.getId()).ref(p.getRef()).name(p.getName()).type(p.getType())
                .phone(p.getPhone()).email(p.getEmail()).address(p.getAddress())
                .companyId(p.getCompany() != null ? p.getCompany().getId() : null)
                .tauxRistourne(p.getTauxRistourne()).tauxPrecompte(p.getTauxPrecompte())
                .creditLimit(p.getCreditLimit()).receivableAccountCode(p.getReceivableAccountCode())
                .exemptTaxeGuinness(p.isExemptTaxeGuinness())
                .build();
    }

    // ===================== LETTRAGE FACTURES VENTES =====================

    @Transactional(readOnly = true)
    public List<AvailableMoveDTO> getAvailableMovesForSalesReconciliation(Long invoiceId, Long companyId) {
        SalesInvoice invoice = invoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + invoiceId));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);
        if (invoice.getPartner() == null) return List.of();

        Long partnerId = invoice.getPartner().getId();
        List<AccountMoveLine> clientLines = moveLineRepo.findPostedReceivableCreditLinesForPartner(partnerId, companyId);

        // Exclure les AccountMoves déjà utilisés comme paiements directs d'autres factures
        // (un paiement de facture n'est pas un versement libre du client)
        java.util.Set<Long> usedByDirectPayments = paymentRepo.findAccountMoveIdsByPartner(partnerId);

        List<AvailableMoveDTO> result = new ArrayList<>();
        for (AccountMoveLine line : clientLines) {
            AccountMove move = line.getMove();
            // Ignorer si cette écriture est le paiement d'une facture
            if (usedByDirectPayments.contains(move.getId())) continue;
            BigDecimal montantTotal = line.getCredit();
            BigDecimal montantLettre = reconciliationRepo.sumReconciledByMove(move.getId());
            BigDecimal disponible = montantTotal.subtract(montantLettre);
            if (disponible.compareTo(BigDecimal.ZERO) > 0) {
                result.add(AvailableMoveDTO.builder()
                        .moveId(move.getId())
                        .moveName(move.getName())
                        .moveDate(move.getDate())
                        .moveRef(move.getRef())
                        .journalName(move.getJournal() != null ? move.getJournal().getName() : null)
                        .montantTotal(montantTotal)
                        .montantLettre(montantLettre)
                        .montantDisponible(disponible)
                        .build());
            }
        }
        return result;
    }

    @Transactional(readOnly = true)
    public List<SalesInvoiceReconciliationDTO> getSalesReconciliations(Long invoiceId) {
        return reconciliationRepo.findByInvoiceIdOrderByDateDesc(invoiceId)
                .stream().map(this::toReconciliationDTO).collect(Collectors.toList());
    }

    public SalesInvoiceReconciliationDTO reconcileSalesInvoice(Long invoiceId, ReconcileRequest req) {
        SalesInvoice invoice = invoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + invoiceId));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);
        if (!"posted".equals(invoice.getState()) && !"paid".equals(invoice.getState())
                && !"partiellement_extournee".equals(invoice.getState())) {
            throw new IllegalStateException("La facture doit être validée pour être lettrée");
        }
        BigDecimal montantDu = invoice.getMontantDu() != null ? invoice.getMontantDu() : ZERO;
        if (req.getAmount().compareTo(ZERO) <= 0)
            throw new IllegalArgumentException("Le montant de lettrage doit être positif");
        if (req.getAmount().compareTo(montantDu) > 0)
            throw new IllegalArgumentException("Le montant dépasse le montant dû (" + montantDu + ")");

        AccountMove move = moveRepo.findById(req.getAccountMoveId())
                .orElseThrow(() -> new EntityNotFoundException("Écriture introuvable: " + req.getAccountMoveId()));
        // Le move réconcilié agit comme preuve de paiement pour CETTE facture : accepter un move
        // d'une autre société permettrait de solder frauduleusement une facture avec l'écriture
        // d'un tiers — l'appartenance compte ici, contrairement à un simple attach de référence.
        tenantGuard.check(move.getCompany() != null ? move.getCompany().getId() : null);
        if (!"posted".equals(move.getState()))
            throw new IllegalStateException("L'écriture doit être validée");

        BigDecimal deja = reconciliationRepo.sumReconciledByMove(move.getId());
        BigDecimal totalLigneClient = moveLineRepo.sumReceivableCreditForPartnerAndMove(
                invoice.getPartner().getId(), move.getId());
        BigDecimal disponible = totalLigneClient.subtract(deja);
        if (req.getAmount().compareTo(disponible) > 0)
            throw new IllegalArgumentException("Le montant dépasse le disponible sur ce versement (" + disponible + ")");

        SalesInvoiceReconciliation rec = SalesInvoiceReconciliation.builder()
                .invoice(invoice)
                .accountMove(move)
                .amount(req.getAmount())
                .date(req.getDate() != null ? req.getDate() : LocalDate.now())
                .build();
        reconciliationRepo.save(rec);

        BigDecimal newPaye = (invoice.getMontantPaye() != null ? invoice.getMontantPaye() : ZERO).add(req.getAmount());
        BigDecimal newDu = montantDu.subtract(req.getAmount());
        invoice.setMontantPaye(newPaye);
        invoice.setMontantDu(newDu);
        if (newDu.compareTo(ZERO) <= 0) invoice.setState("paid");
        invoiceRepo.save(invoice);
        syncEventPublisher.publish(SyncEventType.SALE_INVOICE_POSTED, String.valueOf(invoice.getId()),
                toInvoiceDTOWithPayments(invoice));

        auditService.log("SALE_INVOICE", invoice.getId(), invoice.getName(),
                "RECONCILED", "Lettrage appliqué",
                AuditService.details(Map.of("écriture", move.getName(), "montant", req.getAmount() + " FCFA")),
                invoice.getCompany().getId());

        return toReconciliationDTO(rec);
    }

    public void unreconcileSalesInvoice(Long reconciliationId) {
        SalesInvoiceReconciliation rec = reconciliationRepo.findById(reconciliationId)
                .orElseThrow(() -> new EntityNotFoundException("Lettrage introuvable: " + reconciliationId));
        SalesInvoice invoice = rec.getInvoice();
        tenantGuard.check(invoice != null && invoice.getCompany() != null ? invoice.getCompany().getId() : null);

        BigDecimal newPaye = (invoice.getMontantPaye() != null ? invoice.getMontantPaye() : ZERO).subtract(rec.getAmount());
        BigDecimal newDu = (invoice.getMontantDu() != null ? invoice.getMontantDu() : ZERO).add(rec.getAmount());
        invoice.setMontantPaye(newPaye.max(ZERO));
        invoice.setMontantDu(newDu);
        if ("paid".equals(invoice.getState())) invoice.setState("posted");
        invoiceRepo.save(invoice);
        syncEventPublisher.publish(SyncEventType.SALE_INVOICE_POSTED, String.valueOf(invoice.getId()),
                toInvoiceDTOWithPayments(invoice));
        reconciliationRepo.delete(rec);

        auditService.log("SALE_INVOICE", invoice.getId(), invoice.getName(),
                "UNRECONCILED", "Délettrage",
                AuditService.details(Map.of("montant", rec.getAmount() + " FCFA")),
                invoice.getCompany().getId());
    }

    private SalesInvoiceReconciliationDTO toReconciliationDTO(SalesInvoiceReconciliation r) {
        AccountMove move = r.getAccountMove();
        return SalesInvoiceReconciliationDTO.builder()
                .id(r.getId())
                .invoiceId(r.getInvoice() != null ? r.getInvoice().getId() : null)
                .invoiceName(r.getInvoice() != null ? r.getInvoice().getName() : null)
                .accountMoveId(move != null ? move.getId() : null)
                .accountMoveName(move != null ? move.getName() : null)
                .accountMoveRef(move != null ? move.getRef() : null)
                .accountMoveDate(move != null ? move.getDate() : null)
                .journalName(move != null && move.getJournal() != null ? move.getJournal().getName() : null)
                .amount(r.getAmount())
                .date(r.getDate())
                .createdBy(r.getCreatedBy())
                .createdAt(r.getCreatedAt())
                .build();
    }

    // ── Helpers sync payload ──────────────────────────────────────────────

    private Map<String, Object> buildMoveSyncPayload(com.erp.accounting.entity.AccountMove m, String context) {
        Map<String, Object> p = new LinkedHashMap<>();
        p.put("id",      m.getId());
        p.put("nom",     m.getName());
        p.put("ref",     m.getRef());
        p.put("date",    m.getDate() != null ? m.getDate().toString() : null);
        p.put("etat",    "posted");
        p.put("context", context);
        p.put("journal", m.getJournal() != null ? m.getJournal().getName() : null);
        p.put("tiers",   m.getPartner() != null ? m.getPartner().getName() : null);
        if (m.getLines() != null && !m.getLines().isEmpty()) {
            BigDecimal td = m.getLines().stream().map(l -> l.getDebit()  != null ? l.getDebit()  : ZERO).reduce(ZERO, BigDecimal::add);
            BigDecimal tc = m.getLines().stream().map(l -> l.getCredit() != null ? l.getCredit() : ZERO).reduce(ZERO, BigDecimal::add);
            p.put("totalDebit",  td);
            p.put("totalCredit", tc);
            p.put("lignes", m.getLines().stream().map(l -> {
                Map<String, Object> lp = new LinkedHashMap<>();
                lp.put("compte",  l.getAccount() != null ? l.getAccount().getCode() : "");
                lp.put("libelle", l.getName());
                lp.put("debit",   l.getDebit()  != null ? l.getDebit()  : ZERO);
                lp.put("credit",  l.getCredit() != null ? l.getCredit() : ZERO);
                return lp;
            }).collect(Collectors.toList()));
        }
        return p;
    }

    private Map<String, Object> buildPickingSyncPayload(com.erp.stock.entity.StockPicking picking, String context) {
        Map<String, Object> p = new LinkedHashMap<>();
        p.put("id",      picking.getId());
        p.put("nom",     picking.getName());
        p.put("context", context);
        p.put("etat",    picking.getState());
        p.put("tiers",   picking.getPartnerName());
        if (picking.getMoves() != null) {
            p.put("mouvements", picking.getMoves().stream().map(mv -> {
                Map<String, Object> lm = new LinkedHashMap<>();
                lm.put("produit",  mv.getProductName());
                lm.put("code",     mv.getProductCode());
                lm.put("quantite", mv.getQtyDone() != null ? mv.getQtyDone() : mv.getQtyDemanded());
                return lm;
            }).collect(Collectors.toList()));
        }
        return p;
    }

    private AccountAccount findOrCreateAccount(String code, String name, String type, Long companyId,
                                               AccountJournal journal, Company company) {
        return accountRepo.findFirstByCodeAndCompanyId(code, companyId)
                .orElseGet(() -> accountRepo.save(AccountAccount.builder()
                        .code(code).name(name).accountType(type)
                        .internalType("other").deprecated(false).reconcile(false)
                        .company(company).build()));
    }

    // ============================================================
    // PRIX CLIENT PAR ARTICLE
    // ============================================================

    public List<PrixClientArticleDTO> getPrixClientByClient(Long clientId, Long companyId) {
        return prixClientArticleRepo.findByClientIdAndCompanyIdOrderByProductId(clientId, companyId)
                .stream().map(this::toPrixClientDTO).collect(Collectors.toList());
    }

    public PrixClientArticleDTO getPrixClientForProduct(Long productId, Long clientId, Long companyId) {
        return prixClientArticleRepo.findByProductIdAndClientIdAndCompanyId(productId, clientId, companyId)
                .map(this::toPrixClientDTO).orElse(null);
    }

    @Transactional
    public PrixClientArticleDTO savePrixClient(PrixClientArticleDTO dto) {
        // companyId vient du corps de la requête (client) — ne jamais lui faire confiance pour
        // choisir SOUS QUELLE société le prix client est créé/modifié.
        Long companyId = com.erp.auth.SecurityUtils.currentCompanyId();
        PrixClientArticle entity = prixClientArticleRepo
                .findByProductIdAndClientIdAndCompanyId(dto.getProductId(), dto.getClientId(), companyId)
                .orElseGet(() -> PrixClientArticle.builder()
                        .productId(dto.getProductId())
                        .clientId(dto.getClientId())
                        .companyId(companyId)
                        .build());
        entity.setPrixClient(dto.getPrixClient());
        return toPrixClientDTO(prixClientArticleRepo.save(entity));
    }

    @Transactional
    public void deletePrixClient(Long id) {
        prixClientArticleRepo.deleteById(id);
    }

    private PrixClientArticleDTO toPrixClientDTO(PrixClientArticle e) {
        var product = stockProductRepo.findById(e.getProductId()).orElse(null);
        var client  = partnerRepo.findById(e.getClientId()).orElse(null);
        BigDecimal salePriceStandard = product != null && product.getSalePrice() != null
                ? product.getSalePrice() : ZERO;
        BigDecimal rabaisUnitaire = salePriceStandard.subtract(e.getPrixClient()).max(ZERO);
        return PrixClientArticleDTO.builder()
                .id(e.getId())
                .productId(e.getProductId())
                .productCode(product != null ? product.getDefaultCode() : null)
                .productName(product != null ? product.getName() : null)
                .salePriceStandard(salePriceStandard)
                .clientId(e.getClientId())
                .clientName(client != null ? client.getName() : null)
                .prixClient(e.getPrixClient())
                .rabaisUnitaire(rabaisUnitaire)
                .companyId(e.getCompanyId())
                .build();
    }
}

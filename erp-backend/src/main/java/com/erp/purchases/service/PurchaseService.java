package com.erp.purchases.service;

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
import com.erp.common.repository.PrecompteRepository;
import com.erp.purchases.dto.*;
import com.erp.purchases.entity.*;
import com.erp.purchases.repository.*;
import com.erp.stock.entity.Product;
import com.erp.stock.entity.StockMove;
import com.erp.stock.entity.StockPicking;
import com.erp.stock.entity.StockPickingType;
import com.erp.stock.entity.Warehouse;
import com.erp.stock.entity.StockLocation;
import com.erp.stock.entity.StockQuant;
import com.erp.stock.repository.ProductCategoryRepository;
import com.erp.stock.repository.ProductRepository;
import com.erp.stock.repository.StockLocationRepository;
import com.erp.stock.repository.StockPickingRepository;
import com.erp.stock.repository.StockPickingTypeRepository;
import com.erp.stock.repository.StockQuantRepository;
import com.erp.stock.repository.WarehouseRepository;
import com.erp.stock.service.StockService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.io.OutputStream;
import java.io.UncheckedIOException;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import com.erp.purchases.dto.PrixFournisseurArticleDTO;
import com.erp.purchases.entity.PrixFournisseurArticle;
import com.erp.purchases.repository.PrixFournisseurArticleRepository;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class PurchaseService {

    private static final BigDecimal ZERO = BigDecimal.ZERO;
    private static final String DEFAULT_EXPENSE_ACCOUNT   = "601100";
    private static final String DEFAULT_PAYABLE_ACCOUNT   = "401100";
    private static final String TVA_DEDUCTIBLE_ACCOUNT    = "445200";
    private static final String PSA_PURCHASE_ACCOUNT      = "442100";
    private static final String CONSIGNE_PURCHASE_ACCOUNT = "409400";

    private final com.erp.stock.service.ProductValuationService productValuationService;
    private final PurchaseOrderRepository orderRepo;
    private final PurchaseInvoiceRepository invoiceRepo;
    private final ObjectMapper objectMapper;
    private final PurchaseInvoicePaymentRepository paymentRepo;

    private final PartnerRepository partnerRepo;
    private final AccountJournalRepository journalRepo;
    private final AccountAccountRepository accountRepo;
    private final AccountMoveRepository moveRepo;
    private final AccountMoveLineRepository moveLineRepo;
    private final CompanyRepository companyRepo;
    private final ProductRepository productRepo;
    private final StockPickingRepository pickingRepo;
    private final StockPickingTypeRepository pickingTypeRepo;
    private final StockQuantRepository stockQuantRepo;
    private final StockLocationRepository stockLocationRepo;
    private final StockService stockService;
    private final PrecompteRepository precompteRepo;
    private final com.erp.purchases.repository.RemiseRepository remiseRepo;
    private final ProductCategoryRepository categoryRepo;
    private final WarehouseRepository warehouseRepo;
    private final AccountingService accountingService;
    private final PurchaseInvoiceReconciliationRepository reconciliationRepo;
    private final SyncEventPublisher syncEventPublisher;
    private final AuditService auditService;
    private final FiscalLockGuard fiscalLockGuard;
    private final PrixFournisseurArticleRepository prixFournisseurArticleRepo;
    private final TenantGuard tenantGuard;

    // ===================== COMMANDES D'ACHAT =====================

    @Transactional(readOnly = true)
    public List<PurchaseOrderDTO> getAllOrders(Long companyId) {
        List<PurchaseOrder> orders = orderRepo.findByCompanyIdOrderByCreatedAtDesc(companyId);
        Map<Long, StockPicking> pickingById = batchedByIds(
                new ArrayList<>(orders.stream().map(PurchaseOrder::getPickingId).filter(Objects::nonNull).collect(Collectors.toSet())),
                pickingRepo::findAllById
            ).stream().collect(Collectors.toMap(StockPicking::getId, p -> p));
        Map<Long, PurchaseInvoice> invoiceById = batchedByIds(
                new ArrayList<>(orders.stream().map(PurchaseOrder::getInvoiceId).filter(Objects::nonNull).collect(Collectors.toSet())),
                invoiceRepo::findAllById
            ).stream().collect(Collectors.toMap(PurchaseInvoice::getId, i -> i));
        Map<String, String> receptionWhCache = new HashMap<>();
        return orders.stream()
                .map(o -> toOrderDTO(o, pickingById, invoiceById, receptionWhCache))
                .collect(Collectors.toList());
    }

    /** PostgreSQL refuse toute requête préparée au-delà de 65 535 paramètres (SQLSTATE 08P01) —
     *  un `IN (:ids)` passé tel quel explose si un client à gros volume a accumulé plus de 65 535
     *  commandes (même classe de bug que AccountingService#batchedByLineIds, cf. incident du
     *  2026-09-16 sur les écritures comptables). On découpe en lots largement sous la limite. */
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
     * Version streaming de getAllOrders — voir streamInvoices ci-dessous pour le contexte complet
     * (OutOfMemoryError sur un très gros volume). Pas de préchargement picking/facture par lot ici
     * (nécessiterait de connaître tous les IDs de commandes à l'avance) : toOrderDTO(order) fait un
     * lookup par commande, un compromis délibéré requêtes-contre-mémoire pour ce cas streamé.
     */
    @Transactional(readOnly = true)
    public void streamOrders(Long companyId, OutputStream responseOut) throws IOException {
        try (JsonGenerator gen = objectMapper.getFactory().createGenerator(responseOut);
             Stream<PurchaseOrder> stream = orderRepo.streamByCompanyId(companyId)) {
            gen.writeStartArray();
            stream.forEach(o -> {
                PurchaseOrderDTO dto = toOrderDTO(o);
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
    public PurchaseOrderDTO getOrderById(Long id) {
        PurchaseOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Commande introuvable: " + id));
        tenantGuard.check(order.getCompany() != null ? order.getCompany().getId() : null);
        return toOrderDTO(order);
    }

    public PurchaseOrderDTO createOrder(PurchaseOrderRequest req) {
        Company company = companyRepo.findById(req.getCompanyId())
                .orElseThrow(() -> new EntityNotFoundException("Société introuvable"));
        Partner partner = partnerRepo.findById(req.getPartnerId())
                .orElseThrow(() -> new EntityNotFoundException("Fournisseur introuvable"));

        String name = generateOrderName(company.getId(), req.getDate() != null ? req.getDate() : LocalDate.now());

        PurchaseOrder order = PurchaseOrder.builder()
                .name(name)
                .date(req.getDate() != null ? req.getDate() : LocalDate.now())
                .dateExpected(req.getDateExpected())
                .state("draft")
                .notes(req.getNotes())
                .partner(partner)
                .company(company)
                .build();

        buildOrderLines(order, req.getLines());
        computeOrderTotals(order);

        PurchaseOrder saved = orderRepo.save(order);
        auditService.log("PURCHASE_ORDER", saved.getId(), saved.getName(),
                "CREATED", "Commande achat créée",
                AuditService.details(java.util.Map.of("fournisseur", partner.getName())),
                saved.getCompany().getId());
        return toOrderDTO(saved);
    }

    public PurchaseOrderDTO updateOrder(Long id, PurchaseOrderRequest req) {
        PurchaseOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Commande introuvable: " + id));
        tenantGuard.check(order.getCompany() != null ? order.getCompany().getId() : null);

        if (!"draft".equals(order.getState())) {
            throw new IllegalStateException("Seules les commandes en brouillon peuvent être modifiées");
        }

        Partner partner = partnerRepo.findById(req.getPartnerId())
                .orElseThrow(() -> new EntityNotFoundException("Fournisseur introuvable"));

        order.setDate(req.getDate() != null ? req.getDate() : order.getDate());
        order.setDateExpected(req.getDateExpected());
        order.setNotes(req.getNotes());
        order.setPartner(partner);

        order.getLines().clear();
        buildOrderLines(order, req.getLines());
        computeOrderTotals(order);

        return toOrderDTO(orderRepo.save(order));
    }

    /**
     * Confirme la commande et crée directement la facture fournisseur en brouillon.
     * (Le bon de réception est créé lors de la validation de la facture.)
     */
    public PurchaseOrderDTO confirmOrder(Long id) {
        PurchaseOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Commande introuvable: " + id));
        tenantGuard.check(order.getCompany() != null ? order.getCompany().getId() : null);

        if (!"draft".equals(order.getState())) {
            throw new IllegalStateException("Cette commande ne peut pas être confirmée");
        }

        // Créer directement la facture fournisseur en brouillon
        PurchaseInvoice invoice = createInvoiceFromOrder(order);
        order.setInvoiceId(invoice.getId());

        order.setState("confirmed");
        PurchaseOrder confirmed = orderRepo.save(order);
        auditService.log("PURCHASE_ORDER", confirmed.getId(), confirmed.getName(),
                "CONFIRMED", "Commande confirmée", confirmed.getCompany().getId());
        return toOrderDTO(confirmed);
    }

    /**
     * Valide la réception : met à jour le stock et le CMUP.
     * La facture reste en brouillon jusqu'à validation manuelle.
     */
    public PurchaseOrderDTO receivePicking(Long id) {
        PurchaseOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Commande introuvable: " + id));
        tenantGuard.check(order.getCompany() != null ? order.getCompany().getId() : null);

        if (!"confirmed".equals(order.getState())) {
            throw new IllegalStateException("La commande doit être confirmée avant réception");
        }
        if (order.getPickingId() == null) {
            throw new IllegalStateException("Aucun bon de réception associé");
        }

        stockService.validatePicking(order.getPickingId());

        order.setState("received");
        PurchaseOrder savedOrder = orderRepo.save(order);
        auditService.log("PURCHASE_ORDER", savedOrder.getId(), savedOrder.getName(),
                "RECEIVED", "Marchandises réceptionnées", savedOrder.getCompany().getId());
        PurchaseOrderDTO received = toOrderDTO(savedOrder);
        syncEventPublisher.publish(SyncEventType.PURCHASE_ORDER_RECEIVED, String.valueOf(id), received);
        return received;
    }

    public PurchaseOrderDTO cancelOrder(Long id) {
        PurchaseOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Commande introuvable: " + id));
        tenantGuard.check(order.getCompany() != null ? order.getCompany().getId() : null);

        if ("received".equals(order.getState())) {
            throw new IllegalStateException("Impossible d'annuler une commande déjà réceptionnée");
        }

        if (order.getPickingId() != null) {
            try { stockService.cancelPicking(order.getPickingId()); } catch (Exception ignored) {}
        }

        if (order.getInvoiceId() != null) {
            invoiceRepo.findById(order.getInvoiceId()).ifPresent(inv -> {
                if ("draft".equals(inv.getState())) {
                    inv.setState("cancelled");
                    invoiceRepo.save(inv);
                }
            });
        }

        order.setState("cancelled");
        PurchaseOrder cancelledOrder = orderRepo.save(order);
        PurchaseOrderDTO result = toOrderDTO(cancelledOrder);
        // Réutilise PURCHASE_ORDER_RECEIVED (upsert par id côté Hub, l'état "cancelled" du
        // payload suffit à mettre à jour le document) — sans republish le Hub garde la commande
        // figée à son dernier état connu pour toujours.
        syncEventPublisher.publish(SyncEventType.PURCHASE_ORDER_RECEIVED, String.valueOf(id), result);
        auditService.log("PURCHASE_ORDER", cancelledOrder.getId(), cancelledOrder.getName(),
                "CANCELLED", "Commande annulée", cancelledOrder.getCompany().getId());
        return result;
    }

    // ===================== FACTURES FOURNISSEURS =====================

    @Transactional(readOnly = true)
    public List<PurchaseInvoiceDTO> getAllInvoices(Long companyId) {
        return mapInvoicesBatched(invoiceRepo.findByCompanyIdAndTypeOrderByDateDescNameDesc(companyId, "invoice"));
    }

    /** Précharge catégories/pickings une seule fois pour toute la liste — évite le N+1 par facture. */
    private List<PurchaseInvoiceDTO> mapInvoicesBatched(List<PurchaseInvoice> invoices) {
        Long companyId = invoices.stream()
                .map(i -> i.getCompany() != null ? i.getCompany().getId() : null)
                .filter(Objects::nonNull).findFirst().orElse(null);
        Map<Long, String> catNames = companyId != null
                ? categoryRepo.findByCompanyIdOrderByNameAsc(companyId).stream()
                    .collect(Collectors.toMap(c -> c.getId(), c -> c.getName(), (a, b) -> a))
                : Map.of();
        Set<Long> pickingIds = invoices.stream().map(PurchaseInvoice::getPickingId)
                .filter(Objects::nonNull).collect(Collectors.toSet());
        Map<Long, StockPicking> pickingById = pickingRepo.findAllById(pickingIds).stream()
                .collect(Collectors.toMap(StockPicking::getId, p -> p));
        Map<Long, String> warehouseNameCache = new HashMap<>();
        Map<String, String> receptionWhCache = new HashMap<>();
        Map<Long, BigDecimal[]> partnerBalanceCache = new HashMap<>();
        return invoices.stream()
                .map(inv -> toInvoiceDTOWithPayments(inv, catNames, pickingById, warehouseNameCache, receptionWhCache, partnerBalanceCache))
                .collect(Collectors.toList());
    }

    /**
     * Version streaming de getAllInvoices/getAllAvoirs : écrit le JSON directement dans le flux de
     * la réponse HTTP au fil de la lecture en base, sans jamais charger la liste complète des
     * factures (entités + DTO) en mémoire — avec un très gros volume de factures, mapInvoicesBatched
     * faisait planter la JVM en OutOfMemoryError. Catégories préchargées d'un coup (bornées par le
     * nombre de catégories de la société) ; picking/entrepôt mémoïsés au fil de l'eau via des Map
     * vides (mêmes fonctions de cache que mapInvoicesBatched, juste remplies progressivement au lieu
     * d'être préchargées par lot — impossible de connaître tous les IDs de picking à l'avance sans
     * matérialiser la liste complète).
     */
    @Transactional(readOnly = true)
    public void streamInvoices(Long companyId, String type, OutputStream responseOut) throws IOException {
        Map<Long, String> catNames = categoryRepo.findByCompanyIdOrderByNameAsc(companyId).stream()
                .collect(Collectors.toMap(c -> c.getId(), c -> c.getName(), (a, b) -> a));
        Map<Long, String> warehouseNameCache = new HashMap<>();
        Map<String, String> receptionWhCache = new HashMap<>();
        Map<Long, BigDecimal[]> partnerBalanceCache = new HashMap<>();

        try (JsonGenerator gen = objectMapper.getFactory().createGenerator(responseOut);
             Stream<PurchaseInvoice> stream = invoiceRepo.streamByCompanyIdAndType(companyId, type)) {
            gen.writeStartArray();
            stream.forEach(inv -> {
                PurchaseInvoiceDTO dto = toInvoiceDTOWithPayments(inv, catNames, null, warehouseNameCache, receptionWhCache, partnerBalanceCache);
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
    public PurchaseInvoiceDTO getInvoiceById(Long id) {
        PurchaseInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);
        return toInvoiceDTOWithPayments(invoice);
    }

    public PurchaseInvoiceDTO createInvoice(PurchaseInvoiceRequest req) {
        Company company = companyRepo.findById(req.getCompanyId())
                .orElseThrow(() -> new EntityNotFoundException("Société introuvable"));
        Partner partner = partnerRepo.findById(req.getPartnerId())
                .orElseThrow(() -> new EntityNotFoundException("Fournisseur introuvable"));
        AccountJournal journal = journalRepo.findById(req.getJournalId())
                .orElseThrow(() -> new EntityNotFoundException("Journal introuvable"));

        String type = (req.getType() != null && !req.getType().isBlank()) ? req.getType() : "invoice";
        LocalDate invoiceDate = req.getDate() != null ? req.getDate() : LocalDate.now();
        String name = "credit_note".equals(type)
                ? generateAvoirName(company.getId(), invoiceDate)
                : generateInvoiceName(company.getId(), invoiceDate);

        PurchaseInvoice originalInvoice = (req.getOriginalInvoiceId() != null)
                ? invoiceRepo.findById(req.getOriginalInvoiceId()).orElse(null)
                : null;

        PurchaseInvoice invoice = PurchaseInvoice.builder()
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

        PurchaseInvoice saved = invoiceRepo.save(invoice);
        auditService.log("PURCHASE_INVOICE", saved.getId(), saved.getName(),
                "CREATED", "Facture achat créée", saved.getCompany().getId());
        return toInvoiceDTOWithPayments(saved);
    }

    public PurchaseInvoiceDTO updateInvoice(Long id, PurchaseInvoiceRequest req) {
        PurchaseInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);

        if (!"draft".equals(invoice.getState())) {
            throw new IllegalStateException("Seules les factures en brouillon peuvent être modifiées");
        }

        Partner partner = partnerRepo.findById(req.getPartnerId())
                .orElseThrow(() -> new EntityNotFoundException("Fournisseur introuvable"));
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
     * Valide une facture ou un avoir fournisseur et génère l'écriture comptable OHADA.
     *
     * Facture fournisseur (invoice) :
     *   Dr 601100 (produits HT)  = Σ HT lignes non-consigne
     *   Dr 442100 (PSA)          = Total précompte
     *   Dr 445200 (TVA)          = Total TVA déductible
     *   Dr/Cr 409400 (emballages)= Signe selon quantité consigne
     *   Cr 401100 (Fournisseur)  = Net à payer (TTC + consignes)
     *
     * Avoir fournisseur (credit_note) — écritures inversées.
     */
    public PurchaseInvoiceDTO postInvoice(Long id) {
        PurchaseInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);

        if (!"draft".equals(invoice.getState())) {
            throw new IllegalStateException("Seules les documents en brouillon peuvent être validés");
        }

        boolean isAvoir = "credit_note".equals(invoice.getType());

        // Validation des champs obligatoires
        List<String> missing = new ArrayList<>();
        if (invoice.getPartner() == null) missing.add("Fournisseur");
        if (invoice.getJournal() == null) missing.add("Journal");
        if (invoice.getDate() == null) missing.add("Date");
        if (invoice.getLines() == null || invoice.getLines().isEmpty()) missing.add("Lignes de facturation");
        if (!missing.isEmpty()) {
            throw new IllegalArgumentException("Champs obligatoires manquants : " + String.join(", ", missing));
        }

        // Un avoir fournisseur déstocke (retour physique) : bloquer si le stock est insuffisant
        // plutôt que de laisser le quant se plafonner silencieusement à 0.
        if (isAvoir) {
            validateAvoirStockAvailability(invoice);
        }

        Long companyId = invoice.getCompany().getId();
        LocalDate date = invoice.getDate();
        fiscalLockGuard.assertPeriodOpen(invoice.getCompany(), date);

        // Compte fournisseur
        AccountAccount payableAccount = accountRepo.findFirstByCodeAndCompanyId(DEFAULT_PAYABLE_ACCOUNT, companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("4011", companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("401",  companyId))
                .orElseThrow(() -> new EntityNotFoundException("Compte fournisseur introuvable (401100/4011/401)"));

        // Compte TVA déductible
        AccountAccount tvaAccount = accountRepo.findFirstByCodeAndCompanyId(TVA_DEDUCTIBLE_ACCOUNT, companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("4452", companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("445",  companyId))
                .orElse(null);

        String libelle401 = isAvoir
                ? "Avoir fournisseur " + invoice.getName() + " - " + invoice.getPartner().getName()
                : "Facture fournisseur " + invoice.getName() + " - " + invoice.getPartner().getName();

        // Construire l'écriture
        AccountMove move = AccountMove.builder()
                .name(invoice.getName())
                .date(date)
                .ref((isAvoir ? "Avoir fournisseur " : "Facture fournisseur ") + invoice.getName())
                .state("draft")
                .journal(invoice.getJournal())
                .company(invoice.getCompany())
                .partner(invoice.getPartner())
                .build();

        List<AccountMoveLine> moveLines = new ArrayList<>();

        // Comptes résolus une seule fois
        AccountAccount expenseAccount = accountRepo.findFirstByCodeAndCompanyId(DEFAULT_EXPENSE_ACCOUNT, companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("6011", companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("601",  companyId))
                .orElseThrow(() -> new EntityNotFoundException("Compte de charge introuvable (601100/6011/601)"));

        AccountAccount consigneAccount = accountRepo.findFirstByCodeAndCompanyId(CONSIGNE_PURCHASE_ACCOUNT, companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("4094", companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("409",  companyId))
                .orElse(null);

        // Lignes charges 601100 (non-consigne) et emballages 409400 (consigne, signe selon quantité)
        // 601100 est posté au prix CATALOGUE (= montantHT, le prix de l'article n'étant pas réduit
        // par le tarif fournisseur) ; le rabais obtenu est isolé en 601901, au TTC, après la boucle.
        AccountAccount rabaisAccount = findOrCreatePurchaseAccount("601901",
                "Rabais, Remises et Ristournes obtenus des fournisseurs", companyId, invoice.getCompany());
        for (PurchaseInvoiceLine line : invoice.getLines()) {
            if (line.isConsigne()) {
                BigDecimal ttcLine = line.getMontantTTC() != null ? line.getMontantTTC() : ZERO;
                if (ttcLine.compareTo(ZERO) != 0 && consigneAccount != null) {
                    boolean positif = ttcLine.compareTo(ZERO) > 0;
                    BigDecimal absAmt = ttcLine.abs();
                    moveLines.add(AccountMoveLine.builder()
                            .move(move).account(consigneAccount).partner(invoice.getPartner())
                            .name(line.getDescription()).date(date)
                            .debit(isAvoir ? (positif ? ZERO : absAmt) : (positif ? absAmt : ZERO))
                            .credit(isAvoir ? (positif ? absAmt : ZERO) : (positif ? ZERO : absAmt))
                            .journal(invoice.getJournal()).company(invoice.getCompany())
                            .build());
                }
            } else {
                BigDecimal htCatalogue = (line.getMontantHT() != null ? line.getMontantHT() : ZERO)
                        .setScale(0, RoundingMode.HALF_UP);
                if (htCatalogue.compareTo(ZERO) != 0) {
                    String accCode = (line.getAccountCode() != null && !line.getAccountCode().isBlank())
                            ? line.getAccountCode() : DEFAULT_EXPENSE_ACCOUNT;
                    AccountAccount acc = accCode.equals(DEFAULT_EXPENSE_ACCOUNT) ? expenseAccount
                            : accountRepo.findFirstByCodeAndCompanyId(accCode, companyId).orElse(expenseAccount);
                    // 601100 au prix catalogue (= montantHT)
                    moveLines.add(AccountMoveLine.builder()
                            .move(move).account(acc).partner(invoice.getPartner())
                            .name(line.getDescription()).date(date)
                            .debit(isAvoir ? ZERO : htCatalogue)
                            .credit(isAvoir ? htCatalogue : ZERO)
                            .journal(invoice.getJournal()).company(invoice.getCompany())
                            .build());
                }
            }
        }

        // 601901 — RRR obtenus des fournisseurs, posté une seule fois au TTC.
        // Le net (401) est diminué du rabais TTC, donc l'écriture utilise aussi le TTC pour équilibrer.
        BigDecimal totalRabaisTTC = (invoice.getTotalRabaisTTC() != null ? invoice.getTotalRabaisTTC() : ZERO)
                .setScale(0, RoundingMode.HALF_UP);
        if (totalRabaisTTC.compareTo(ZERO) > 0 && rabaisAccount != null) {
            moveLines.add(AccountMoveLine.builder()
                    .move(move).account(rabaisAccount).partner(invoice.getPartner())
                    .name("Rabais obtenus - " + invoice.getName()).date(date)
                    .debit(isAvoir ? totalRabaisTTC : ZERO)
                    .credit(isAvoir ? ZERO : totalRabaisTTC)
                    .journal(invoice.getJournal()).company(invoice.getCompany())
                    .build());
        }

        // Ligne PSA 442100 : débit pour facture, crédit pour avoir
        BigDecimal totalPrecompte = (invoice.getTotalPrecompte() != null ? invoice.getTotalPrecompte() : ZERO)
                .setScale(0, RoundingMode.HALF_UP);
        if (totalPrecompte.compareTo(ZERO) != 0) {
            AccountAccount psaAccount = accountRepo.findFirstByCodeAndCompanyId(PSA_PURCHASE_ACCOUNT, companyId)
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("4421", companyId))
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("442",  companyId))
                    .orElse(null);
            if (psaAccount != null) {
                moveLines.add(AccountMoveLine.builder()
                        .move(move).account(psaAccount).partner(invoice.getPartner())
                        .name("PSA - " + invoice.getName()).date(date)
                        .debit(isAvoir ? ZERO : totalPrecompte)
                        .credit(isAvoir ? totalPrecompte : ZERO)
                        .journal(invoice.getJournal()).company(invoice.getCompany())
                        .build());
            }
        }

        // Ligne TVA déductible 445200 : débit pour facture, crédit pour avoir
        BigDecimal totalTVA = (invoice.getTotalTVA() != null ? invoice.getTotalTVA() : ZERO)
                .setScale(0, RoundingMode.HALF_UP);
        if (totalTVA.compareTo(ZERO) != 0 && tvaAccount != null) {
            moveLines.add(AccountMoveLine.builder()
                    .move(move).account(tvaAccount).partner(invoice.getPartner())
                    .name((isAvoir ? "TVA avoir fournisseur " : "TVA déductible - ") + invoice.getName()).date(date)
                    .debit(isAvoir ? ZERO : totalTVA)
                    .credit(isAvoir ? totalTVA : ZERO)
                    .journal(invoice.getJournal()).company(invoice.getCompany())
                    .build());
        }

        // Ligne fournisseur 401100 : construite en dernier, à partir de la somme exacte des lignes
        // déjà arrondies ci-dessus — garantit débit = crédit exact, sans ligne d'écart.
        BigDecimal sumDebitOther = moveLines.stream().map(AccountMoveLine::getDebit).reduce(ZERO, BigDecimal::add);
        BigDecimal sumCreditOther = moveLines.stream().map(AccountMoveLine::getCredit).reduce(ZERO, BigDecimal::add);
        BigDecimal netAPayer = (isAvoir ? sumCreditOther.subtract(sumDebitOther) : sumDebitOther.subtract(sumCreditOther))
                .setScale(0, RoundingMode.HALF_UP);

        moveLines.add(0, AccountMoveLine.builder()
                .move(move).account(payableAccount).partner(invoice.getPartner())
                .name(libelle401).date(date)
                .debit(isAvoir ? netAPayer : ZERO)
                .credit(isAvoir ? ZERO : netAPayer)
                .journal(invoice.getJournal()).company(invoice.getCompany())
                .build());

        invoice.setNetAPayer(netAPayer);

        move.setLines(moveLines);
        AccountMove savedMove = moveRepo.save(move);
        moveRepo.updateState(savedMove.getId(), "posted");
        syncEventPublisher.publish(SyncEventType.ACCOUNT_MOVE_FROM_PURCHASE, String.valueOf(savedMove.getId()),
                buildMoveSyncPayload(savedMove, "Écriture facture achat"));

        invoice.setAccountMove(savedMove);
        invoice.setState("posted");
        // Avoir généré par une extourne (originalInvoice renseigné) : ne règle qu'une facture déjà
        // annulée, donc soldé automatiquement dès sa validation pour ne pas rester en "crédit en
        // circulation" — un avoir manuel (originalInvoice=null) reste un vrai crédit à imputer.
        boolean isExtourneAvoir = isAvoir && invoice.getOriginalInvoice() != null;
        if (isExtourneAvoir) {
            invoice.setMontantPaye(invoice.getNetAPayer());
            invoice.setMontantDu(ZERO);
            invoice.setState("paid");
        } else {
            invoice.setMontantPaye(ZERO);
            invoice.setMontantDu(invoice.getNetAPayer());
        }
        invoice.setConfirmedBy(auditService.getCurrentUsername());
        invoice.setConfirmedAt(java.time.LocalDateTime.now());
        invoiceRepo.save(invoice);

        if (isAvoir) {
            // Avoir fournisseur : retourner le stock du Dépôt Achat vers le fournisseur
            createDepotAchatReturnPicking(invoice);
        } else {
            // Facture normale : entrée en stock vers le Dépôt Achat
            createDepotAchatPicking(invoice);
        }

        // Écriture comptable de variation de stock (Dr 31 / Cr 6031)
        createPurchaseStockValuationEntries(invoice, isAvoir);

        PurchaseInvoiceDTO posted = toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
        syncEventPublisher.publish(SyncEventType.PURCHASE_INVOICE_POSTED, String.valueOf(id), posted);
        auditService.log("PURCHASE_INVOICE", id, invoice.getName(),
                "CONFIRMED", "Facture achat validée", invoice.getCompany().getId());
        return posted;
    }

    /**
     * Génère la pièce comptable de variation de stock (6031 / 31) pour chaque produit physique d'achat.
     * Facture achat : Dr 31 (stocks) / Cr 6031 (variation de stocks)  — entrée en stock
     * Avoir achat   : Dr 6031 (variation de stocks) / Cr 31 (stocks)  — sortie retour fournisseur
     */
    private void createPurchaseStockValuationEntries(PurchaseInvoice invoice, boolean isAvoir) {
        Long companyId = invoice.getCompany().getId();

        // Journal OD (opérations diverses / général)
        AccountJournal stockJournal = journalRepo.findByCompanyIdAndActiveTrue(companyId).stream()
                .filter(j -> "general".equals(j.getType()) || "misc".equals(j.getType()))
                .findFirst()
                .orElse(invoice.getJournal());

        if (stockJournal == null) return;

        // Comptes 603100 (variation stocks marchandises) et 311000 (stocks marchandises)
        AccountAccount varStockAccount = accountRepo.findFirstByCodeAndCompanyId("603100", companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("6031", companyId)).orElse(null);
        AccountAccount stockAccount    = accountRepo.findFirstByCodeAndCompanyId("311000", companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("311",  companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("31",   companyId)).orElse(null);

        if (varStockAccount == null || stockAccount == null) {
            return;
        }

        List<AccountMoveLine> moveLines = new ArrayList<>();

        for (PurchaseInvoiceLine line : invoice.getLines()) {
            if (ConsigneCodes.isConsigne(line.getProductCode(), companyId)) continue;

            // Utiliser le prix unitaire de la ligne comme coût d'entrée
            BigDecimal cost = line.getPrixUnitaire() != null ? line.getPrixUnitaire() : ZERO;
            if (cost.compareTo(ZERO) == 0) {
                // Fallback : chercher le standard price du produit
                Product p = resolveProduct(line.getProductId(), line.getProductCode(), companyId).orElse(null);
                if (p != null) cost = productValuationService.getWarehouseCmup(p.getId(), invoice.getWarehouseId(), p);
            }
            if (cost.compareTo(ZERO) == 0) continue;

            BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : BigDecimal.ONE;
            boolean qtyNegative = qty.compareTo(ZERO) < 0;
            BigDecimal amount = cost.multiply(qty.abs()).setScale(2, RoundingMode.HALF_UP);
            if (amount.compareTo(ZERO) == 0) continue;

            // Achat avec ligne positive : Dr 31 (augmente stock) / Cr 6031.
            // Achat avec ligne négative (déconsigne / retour immédiat au fournisseur) : Dr 6031 / Cr 31.
            // Avoir avec ligne positive (retour normal vers fournisseur) : Dr 6031 / Cr 31 (inversé).
            // Avoir avec ligne négative (sens inverse — entre) : Dr 31 / Cr 6031, comme un achat.
            boolean stockIncreases = isAvoir ? qtyNegative : !qtyNegative;
            moveLines.add(AccountMoveLine.builder()
                    .account(stockAccount).name("Stock - " + line.getDescription())
                    .date(invoice.getDate())
                    .debit(stockIncreases ? amount : ZERO).credit(stockIncreases ? ZERO : amount)
                    .journal(stockJournal).company(invoice.getCompany())
                    .build());
            moveLines.add(AccountMoveLine.builder()
                    .account(varStockAccount).name("Stock - " + line.getDescription())
                    .date(invoice.getDate())
                    .debit(stockIncreases ? ZERO : amount).credit(stockIncreases ? amount : ZERO)
                    .journal(stockJournal).company(invoice.getCompany())
                    .build());
        }

        if (moveLines.isEmpty()) return;

        AccountMove stockMove = AccountMove.builder()
                .name("STK/" + invoice.getName())
                .date(invoice.getDate())
                .ref("Variation stock achat - " + invoice.getName())
                .state("posted")
                .journal(stockJournal)
                .company(invoice.getCompany())
                .partner(invoice.getPartner())
                .build();
        for (AccountMoveLine l : moveLines) l.setMove(stockMove);
        stockMove.setLines(moveLines);
        AccountMove savedStockMove = moveRepo.save(stockMove);
        syncEventPublisher.publish(SyncEventType.ACCOUNT_MOVE_STOCK_VALUATION, String.valueOf(savedStockMove.getId()),
                buildMoveSyncPayload(savedStockMove, "Variation de stock — achat " + invoice.getName()));
    }

    /**
     * Crée un bon de réception (StockPicking incoming) lors de la validation d'une facture
     * fournisseur. Le picking est en état "confirmed" (marchandise en attente de réception
     * physique). Les quants sont mis à jour uniquement lors de la validation du BL.
     *
     * Par défaut (aucun entrepôt choisi sur la facture) : réception vers le Dépôt Achat (zone de
     * transit), transférée ensuite au magasin principal via un BL séparé — comportement historique
     * inchangé.
     *
     * Si un entrepôt est explicitement choisi sur la facture ({@code invoice.getWarehouseId()}) :
     * réception DIRECTE dans le stock de CET entrepôt, sans passer par le Dépôt Achat/magasin
     * principal — l'entrepôt choisi a la même valeur de vérité que n'importe quel autre.
     */
    private void createDepotAchatPicking(PurchaseInvoice invoice) {
        // Ne créer qu'une seule fois — si le picking existe déjà, on ne recrée pas
        if (invoice.getPickingId() != null) return;

        Long companyId = invoice.getCompany().getId();

        List<StockPickingType> incomingTypes = pickingTypeRepo
                .findByCompanyIdAndCodeOrderByNameAsc(companyId, "incoming");
        if (incomingTypes.isEmpty()) return; // pas de type configuré, on ignore silencieusement

        // Le type "incoming" doit correspondre à l'entrepôt réellement ciblé par la facture — une
        // société multi-entrepôts a un type "Réceptions" par entrepôt (même nom "Réceptions" pour
        // chacun), donc prendre le premier par ordre alphabétique au hasard route systématiquement
        // la réception vers le mauvais entrepôt dès qu'il y en a plusieurs.
        Warehouse mainWarehouse = resolvePurchaseWarehouse(companyId, invoice.getWarehouseId());
        StockPickingType pt = incomingTypes.stream()
                .filter(t -> mainWarehouse != null && mainWarehouse.getId().equals(t.getWarehouseId()))
                .findFirst()
                .orElseGet(() -> {
                    log.warn("Facture achat {} : aucun type de réception trouvé pour l'entrepôt {} — repli sur {}",
                            invoice.getName(), mainWarehouse != null ? mainWarehouse.getId() : null,
                            incomingTypes.get(0).getId());
                    return incomingTypes.get(0);
                });

        StockPicking picking = StockPicking.builder()
                .name(generatePickingName(pt, companyId))
                .pickingTypeId(pt.getId())
                .pickingTypeCode("incoming")
                .locationId(pt.getDefaultLocationSrcId())
                .locationDestId(pt.getDefaultLocationDestId())
                .partnerId(invoice.getPartner() != null ? invoice.getPartner().getId() : null)
                .partnerName(invoice.getPartner() != null ? invoice.getPartner().getName() : null)
                .state("confirmed")
                .scheduledDate(invoice.getDate())
                .origin(invoice.getName())
                .notes("Entrée Dépôt Achat - " + invoice.getName())
                .companyId(companyId)
                .build();

        // Déconsigne sur facture d'achat normale (qty < 0) : l'emballage repart immédiatement du
        // magasin principal vers le fournisseur, sans passer par le circuit Dépôt Achat → réception —
        // traité séparément par createDeconsigneReturnPicking (voir plus bas).
        List<PurchaseInvoiceLine> negativeLines = new ArrayList<>();

        for (PurchaseInvoiceLine line : invoice.getLines()) {
            BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : ZERO;
            if (qty.compareTo(ZERO) < 0) { negativeLines.add(line); continue; }

            Product product = resolveProduct(line.getProductId(), line.getProductCode(), companyId).orElse(null);
            if (product == null) {
                log.warn("Facture achat {} : ligne '{}' (productId={}, productCode={}) non rapprochée à un article — "
                                + "le stock n'a PAS été mis à jour pour cette ligne alors que l'écriture comptable l'a été.",
                        invoice.getName(), line.getDescription(), line.getProductId(), line.getProductCode());
                continue;
            }

            StockMove move = StockMove.builder()
                    .picking(picking)
                    .productId(product.getId())
                    .productCode(product.getDefaultCode())
                    .productName(product.getName())
                    .uomName(product.getUomName())
                    .qtyDemanded(qty)
                    .qtyDone(ZERO)
                    .priceUnit(line.getPrixUnitaire() != null ? line.getPrixUnitaire()
                            : resolveMovementCmup(product.getId(), pt.getDefaultLocationSrcId(), pt.getDefaultLocationDestId(), product))
                    .locationId(pt.getDefaultLocationSrcId())
                    .locationDestId(pt.getDefaultLocationDestId())
                    .state("confirmed")
                    .companyId(companyId)
                    .build();
            picking.getMoves().add(move);
        }

        if (!picking.getMoves().isEmpty()) {
            StockPicking saved = pickingRepo.save(picking);
            invoice.setPickingId(saved.getId());
            syncEventPublisher.publish(SyncEventType.STOCK_PICKING_FROM_PURCHASE, String.valueOf(saved.getId()),
                    buildPickingSyncPayload(picking, "Réception achat " + invoice.getName()));
        }

        createDeconsigneReturnPicking(invoice, negativeLines);
    }

    /**
     * Retour immédiat vers le fournisseur pour les lignes négatives (déconsigne) d'une facture
     * d'achat NORMALE (hors avoir) : contrairement aux lignes positives qui suivent le circuit
     * Fournisseur → Dépôt Achat → Magasin principal (réception différée via bordereau), une ligne
     * négative représente un emballage déjà en stock qui repart directement du Magasin principal
     * vers le fournisseur — mouvement immédiat, sans étape de réception à confirmer.
     */
    private void createDeconsigneReturnPicking(PurchaseInvoice invoice, List<PurchaseInvoiceLine> negativeLines) {
        if (negativeLines.isEmpty()) return;
        Long companyId = invoice.getCompany().getId();

        // Même entrepôt que celui utilisé pour la réception (createDepotAchatPicking) — l'entrepôt
        // explicite de la facture fait foi, sinon repli sur l'entrepôt principal de la société.
        Warehouse mainWarehouse = resolvePurchaseWarehouse(companyId, invoice.getWarehouseId());
        if (mainWarehouse == null) return;

        Long srcLocId = mainWarehouse.getStockLocationId();
        if (srcLocId == null) return;

        List<StockLocation> supplierLocs = stockLocationRepo.findByUsage(companyId, "supplier");
        List<StockLocation> internalLocs = stockLocationRepo.findByUsage(companyId, "internal");
        if (internalLocs.isEmpty()) return;
        StockLocation supplierLoc = supplierLocs.isEmpty() ? internalLocs.get(0) : supplierLocs.get(0);

        List<StockPickingType> outgoingTypes = pickingTypeRepo
                .findByWarehouseIdOrderByNameAsc(mainWarehouse.getId()).stream()
                .filter(pt -> "outgoing".equals(pt.getCode()))
                .collect(Collectors.toList());
        if (outgoingTypes.isEmpty()) {
            outgoingTypes = pickingTypeRepo.findByCompanyIdAndCodeOrderByNameAsc(companyId, "outgoing");
        }
        if (outgoingTypes.isEmpty()) return;
        Long outgoingPickingTypeId = outgoingTypes.get(0).getId();

        Integer seq = pickingRepo.findMaxSeq(companyId, "RET/ACH");
        String pickingName = "RET/ACH/" + String.format("%05d", (seq == null ? 0 : seq) + 1);

        StockPicking picking = StockPicking.builder()
                .name(pickingName)
                .pickingTypeId(outgoingPickingTypeId)
                .pickingTypeCode("outgoing")
                .locationId(srcLocId)
                .locationDestId(supplierLoc.getId())
                .partnerId(invoice.getPartner() != null ? invoice.getPartner().getId() : null)
                .partnerName(invoice.getPartner() != null ? invoice.getPartner().getName() : null)
                .state("done")
                .scheduledDate(invoice.getDate())
                .dateDone((invoice.getDate() != null ? invoice.getDate() : LocalDate.now()).atTime(java.time.LocalTime.now()))
                .origin(invoice.getName())
                .notes("Retour déconsigne fournisseur - " + invoice.getName())
                .companyId(companyId)
                .build();

        for (PurchaseInvoiceLine line : negativeLines) {
            Product product = resolveProduct(line.getProductId(), line.getProductCode(), companyId).orElse(null);
            if (product == null) {
                log.warn("Facture achat {} : ligne déconsigne '{}' (productId={}, productCode={}) non rapprochée à un article.",
                        invoice.getName(), line.getDescription(), line.getProductId(), line.getProductCode());
                continue;
            }
            if ("service".equals(product.getType())) continue;

            BigDecimal absQty = line.getQuantity() != null ? line.getQuantity().abs() : ZERO;
            if (absQty.compareTo(ZERO) == 0) continue;

            StockMove move = StockMove.builder()
                    .picking(picking)
                    .productId(product.getId())
                    .productCode(product.getDefaultCode())
                    .productName(product.getName())
                    .uomName(product.getUomName())
                    .qtyDemanded(absQty)
                    .qtyDone(absQty)
                    .priceUnit(line.getPrixUnitaire() != null ? line.getPrixUnitaire()
                            : resolveMovementCmup(product.getId(), srcLocId, supplierLoc.getId(), product))
                    .locationId(srcLocId)
                    .locationDestId(supplierLoc.getId())
                    .state("done")
                    .companyId(companyId)
                    .build();
            picking.getMoves().add(move);

            // Décrémenter le quant du magasin principal
            stockQuantRepo.findFirstByProductIdAndLocationIdAndCompanyId(product.getId(), srcLocId, companyId)
                    .ifPresent(q -> {
                        BigDecimal newQty = q.getQuantity().subtract(absQty);
                        q.setQuantity(newQty.compareTo(ZERO) < 0 ? ZERO : newQty);
                        stockQuantRepo.save(q);
                    });
        }

        if (!picking.getMoves().isEmpty()) {
            pickingRepo.save(picking);
            syncEventPublisher.publish(SyncEventType.STOCK_PICKING_FROM_PURCHASE, String.valueOf(picking.getId()),
                    buildPickingSyncPayload(picking, "Retour déconsigne achat " + invoice.getName()));
        }
    }

    /**
     * Résout l'entrepôt opérationnel à utiliser pour une facture/avoir fournisseur (réception,
     * retour de stock…) : l'entrepôt explicitement choisi sur le document
     * ({@code explicitWarehouseId}, via {@code warehouseId}/{@link #setInvoiceWarehouse}) fait foi
     * s'il est renseigné ; à défaut, on retombe sur le magasin principal (celui configuré avec un
     * {@code depotAchatWarehouseId}, sinon l'entrepôt par défaut de la société). Utilisé aussi bien
     * pour les factures normales que pour les avoirs — un document sans entrepôt explicite ne doit
     * jamais mouvementer l'entrepôt d'un autre document au hasard.
     */
    /**
     * Nom de l'entrepôt qui recevra physiquement la marchandise pour une facture/commande d'achat —
     * le Dépôt Achat configuré sur l'entrepôt résolu ({@link #resolvePurchaseWarehouse}), ou
     * l'entrepôt lui-même si aucun Dépôt Achat n'est configuré (réception directe). Purement
     * informatif, affiché sur la facture/commande pour que l'utilisateur vérifie avant validation
     * que la réception ira au bon endroit (cf. bug DJ/Stock au lieu de DA/Stock).
     */
    private String resolveReceptionWarehouseName(Long companyId, Long explicitWarehouseId) {
        Warehouse mainWarehouse = resolvePurchaseWarehouse(companyId, explicitWarehouseId);
        if (mainWarehouse == null) return null;
        if (mainWarehouse.getDepotAchatWarehouseId() != null) {
            return warehouseRepo.findById(mainWarehouse.getDepotAchatWarehouseId())
                    .map(Warehouse::getName).orElse(mainWarehouse.getName());
        }
        return mainWarehouse.getName();
    }

    private Warehouse resolvePurchaseWarehouse(Long companyId, Long explicitWarehouseId) {
        if (explicitWarehouseId != null) {
            return warehouseRepo.findById(explicitWarehouseId).orElse(null);
        }
        List<Warehouse> allWarehouses = warehouseRepo.findByCompanyIdAndActiveTrue(companyId);
        return allWarehouses.stream()
                .filter(w -> w.getDepotAchatWarehouseId() != null)
                .findFirst()
                .orElseGet(() -> warehouseRepo.findFirstByCompanyIdAndIsDefaultTrue(companyId)
                        .orElse(allWarehouses.isEmpty() ? null : allWarehouses.get(0)));
    }

    /**
     * Emplacement de stock réellement mouvementé par le retour/la restitution d'un avoir
     * fournisseur : normalement celui de {@code mainWarehouse} (magasin principal), SAUF si la
     * facture d'origine n'a pas encore eu son bordereau de réception validé — dans ce cas la
     * marchandise n'a jamais quitté le Dépôt Achat, et décrémenter/réintégrer le magasin
     * principal reviendrait à mouvementer un emplacement qui n'a physiquement rien reçu (le quant
     * du magasin plafonne silencieusement à 0 pendant que le Dépôt Achat garde un stock fantôme).
     * Ne s'applique que lorsque {@code mainWarehouse} a un Dépôt Achat configuré (le cas normal
     * du magasin principal) — un entrepôt explicitement choisi par l'utilisateur sans lien Dépôt
     * Achat n'est pas concerné.
     */
    private Long resolveAvoirSourceLocationId(PurchaseInvoice avoir, Warehouse mainWarehouse) {
        PurchaseInvoice original = avoir.getOriginalInvoice();
        if (original != null && original.getPickingId() != null && mainWarehouse.getDepotAchatWarehouseId() != null) {
            boolean receptionDone = pickingRepo.findById(original.getPickingId())
                    .map(p -> "done".equals(p.getState())).orElse(true);
            if (!receptionDone) {
                return warehouseRepo.findById(mainWarehouse.getDepotAchatWarehouseId())
                        .map(Warehouse::getStockLocationId).orElse(mainWarehouse.getStockLocationId());
            }
        }
        return mainWarehouse.getStockLocationId();
    }

    /**
     * Vérifie, avant tout mouvement, que le magasin a bien assez de stock pour chaque ligne de
     * l'avoir dont la quantité (positive = retour physique vers le fournisseur) va être déstockée.
     * Sans ce contrôle, createDepotAchatReturnPicking déstockait silencieusement (quant plafonné à
     * 0, voire ignoré s'il n'existe pas) au lieu de bloquer — le mouvement se comptabilisait quand
     * même comme "done" sans que le stock ait réellement bougé.
     */
    private void validateAvoirStockAvailability(PurchaseInvoice avoir) {
        Long companyId = avoir.getCompany().getId();
        Warehouse mainWarehouse = resolvePurchaseWarehouse(companyId, avoir.getWarehouseId());
        if (mainWarehouse == null) return;
        Long srcLocId = resolveAvoirSourceLocationId(avoir, mainWarehouse);
        if (srcLocId == null) return;

        for (PurchaseInvoiceLine line : avoir.getLines()) {
            BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : ZERO;
            if (qty.compareTo(ZERO) <= 0) continue; // négatif/nul : pas de sortie de stock

            Product product = resolveProduct(line.getProductId(), line.getProductCode(), companyId).orElse(null);
            if (product == null || "service".equals(product.getType())) continue;

            BigDecimal available = stockQuantRepo
                    .findFirstByProductIdAndLocationIdAndCompanyId(product.getId(), srcLocId, companyId)
                    .map(StockQuant::getQuantity)
                    .orElse(ZERO);
            if (qty.compareTo(available) > 0) {
                String demande = qty.setScale(0, RoundingMode.HALF_UP).toPlainString();
                String msg = available.compareTo(ZERO) == 0
                        ? "\"" + product.getName() + "\" n'est pas en stock dans " + mainWarehouse.getName() +
                          " (0 unité disponible, " + demande + " à retourner au fournisseur)"
                        : "Stock insuffisant pour \"" + product.getName() + "\" dans " + mainWarehouse.getName() +
                          " : " + available.setScale(0, RoundingMode.HALF_UP) + " en stock, " +
                          demande + " à retourner au fournisseur";
                throw new IllegalStateException(msg);
            }
        }
    }

    /**
     * Retour de stock pour avoir fournisseur : produits quittent l'entrepôt vers le fournisseur.
     * Entrepôt = celui explicitement choisi sur l'avoir, sinon le magasin principal par défaut
     * (stock pris APRÈS que le BL a transféré la marchandise du dépôt achat vers ce magasin).
     */
    private void createDepotAchatReturnPicking(PurchaseInvoice avoir) {
        Long companyId = avoir.getCompany().getId();

        // Entrepôt explicitement choisi sur l'avoir en priorité (cf. setInvoiceWarehouse) ; à
        // défaut, magasin principal = même logique que validateBordereau (depotAchatWarehouseId).
        Warehouse mainWarehouse = resolvePurchaseWarehouse(companyId, avoir.getWarehouseId());
        if (mainWarehouse == null) return;

        // Emplacement source = stock du magasin (où le stock arrive après validation BL), ou le
        // Dépôt Achat si cette validation n'a pas encore eu lieu — voir resolveAvoirSourceLocationId.
        Long srcLocId = resolveAvoirSourceLocationId(avoir, mainWarehouse);
        if (srcLocId == null) return;

        // Emplacement fournisseur (destination du retour)
        List<StockLocation> supplierLocs = stockLocationRepo.findByUsage(companyId, "supplier");
        List<StockLocation> internalLocs = stockLocationRepo.findByUsage(companyId, "internal");
        if (internalLocs.isEmpty()) return;
        StockLocation supplierLoc = supplierLocs.isEmpty() ? internalLocs.get(0) : supplierLocs.get(0);

        // Type picking "outgoing" du magasin principal
        List<StockPickingType> outgoingTypes = pickingTypeRepo
                .findByWarehouseIdOrderByNameAsc(mainWarehouse.getId()).stream()
                .filter(pt -> "outgoing".equals(pt.getCode()))
                .collect(Collectors.toList());
        if (outgoingTypes.isEmpty()) {
            outgoingTypes = pickingTypeRepo.findByCompanyIdAndCodeOrderByNameAsc(companyId, "outgoing");
        }
        if (outgoingTypes.isEmpty()) return;
        Long outgoingPickingTypeId = outgoingTypes.get(0).getId();

        Integer seq = pickingRepo.findMaxSeq(companyId, "RET/ACH");
        String pickingName = "RET/ACH/" + String.format("%05d", (seq == null ? 0 : seq) + 1);

        StockPicking picking = StockPicking.builder()
                .name(pickingName)
                .pickingTypeId(outgoingPickingTypeId)
                .pickingTypeCode("outgoing")
                .locationId(srcLocId)
                .locationDestId(supplierLoc.getId())
                .partnerId(avoir.getPartner() != null ? avoir.getPartner().getId() : null)
                .partnerName(avoir.getPartner() != null ? avoir.getPartner().getName() : null)
                .state("done")
                .scheduledDate(avoir.getDate())
                // dateDone obligatoire : tous les rapports/mouvements de stock filtrent sur
                // picking.dateDone ; sans elle le retour est invisible (cf. fixNullPickingDateDone).
                // Heure SYSTÈME (et pas minuit) pour que la fiche de stock mouvement affiche la vraie
                // heure — aligné sur les ventes (invoice.getDate().atTime(LocalTime.now())).
                .dateDone((avoir.getDate() != null ? avoir.getDate() : LocalDate.now()).atTime(java.time.LocalTime.now()))
                .origin(avoir.getName())
                .notes("Retour fournisseur - " + avoir.getName())
                .companyId(companyId)
                .build();

        for (PurchaseInvoiceLine line : avoir.getLines()) {
            // Les emballages consignés sont des articles physiques : ils sont reçus à la facture
            // (la réception ne les exclut pas) → ils doivent aussi être mouvementés au retour avoir.
            Product product = resolveProduct(line.getProductId(), line.getProductCode(), companyId).orElse(null);
            if (product == null) {
                log.warn("Avoir achat {} : ligne '{}' (productId={}, productCode={}) non rapprochée à un article.",
                        avoir.getName(), line.getDescription(), line.getProductId(), line.getProductCode());
                continue;
            }
            if ("service".equals(product.getType())) continue;

            BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : ZERO;
            if (qty.compareTo(ZERO) == 0) continue;

            // Avoir fournisseur : ligne positive = retour physique vers le fournisseur (sort du
            // magasin principal) ; ligne négative = sens inverse (entre — annule/réduit un retour).
            boolean qtyNegative = qty.compareTo(ZERO) < 0;
            BigDecimal absQty = qty.abs();
            Long moveSrcId  = qtyNegative ? supplierLoc.getId() : srcLocId;
            Long moveDestId = qtyNegative ? srcLocId : supplierLoc.getId();

            StockMove move = StockMove.builder()
                    .picking(picking)
                    .productId(product.getId())
                    .productCode(product.getDefaultCode())
                    .productName(product.getName())
                    .uomName(product.getUomName())
                    .qtyDemanded(absQty)
                    .qtyDone(absQty)
                    .priceUnit(line.getPrixUnitaire() != null ? line.getPrixUnitaire()
                            : resolveMovementCmup(product.getId(), moveSrcId, moveDestId, product))
                    .locationId(moveSrcId)
                    .locationDestId(moveDestId)
                    .state("done")
                    .companyId(companyId)
                    .build();
            picking.getMoves().add(move);

            // Mettre à jour le quant du magasin principal
            if (qtyNegative) {
                StockQuant q = stockQuantRepo.findFirstByProductIdAndLocationIdAndCompanyId(product.getId(), srcLocId, companyId)
                        .orElse(null);
                if (q == null) {
                    q = StockQuant.builder()
                            .productId(product.getId())
                            .locationId(srcLocId)
                            .companyId(companyId)
                            .quantity(absQty)
                            .reservedQuantity(ZERO)
                            .build();
                } else {
                    q.setQuantity(q.getQuantity().add(absQty));
                }
                stockQuantRepo.save(q);
            } else {
                stockQuantRepo.findFirstByProductIdAndLocationIdAndCompanyId(product.getId(), srcLocId, companyId)
                        .ifPresent(q -> {
                            BigDecimal newQty = q.getQuantity().subtract(absQty);
                            q.setQuantity(newQty.compareTo(ZERO) < 0 ? ZERO : newQty);
                            stockQuantRepo.save(q);
                        });
            }
        }

        if (!picking.getMoves().isEmpty()) {
            pickingRepo.save(picking);
            syncEventPublisher.publish(SyncEventType.STOCK_PICKING_FROM_PURCHASE, String.valueOf(picking.getId()),
                    buildPickingSyncPayload(picking, "Retour stock avoir achat " + avoir.getName()));
        }
    }

    /**
     * Restitue le stock d'un avoir fournisseur annulé : l'avoir avait sorti la marchandise
     * du magasin principal vers le fournisseur (quant -qty via createDepotAchatReturnPicking) ;
     * l'annulation la réintègre (quant +qty) et trace une réception "ANN/ACH".
     */
    private void reversePurchaseAvoirStock(PurchaseInvoice avoir) {
        Long companyId = avoir.getCompany().getId();

        // Doit résoudre le même emplacement que createDepotAchatReturnPicking (celui d'où le stock
        // est réellement sorti) pour réintégrer la marchandise au bon endroit — y compris le cas
        // Dépôt Achat si le bordereau de réception n'avait pas été validé au moment du retour.
        Warehouse mainWarehouse = resolvePurchaseWarehouse(companyId, avoir.getWarehouseId());
        if (mainWarehouse == null) return;

        Long destLocId = resolveAvoirSourceLocationId(avoir, mainWarehouse);
        if (destLocId == null) return;

        List<StockLocation> supplierLocs = stockLocationRepo.findByUsage(companyId, "supplier");
        List<StockLocation> internalLocs = stockLocationRepo.findByUsage(companyId, "internal");
        if (internalLocs.isEmpty()) return;
        StockLocation supplierLoc = supplierLocs.isEmpty() ? internalLocs.get(0) : supplierLocs.get(0);

        // Type picking "incoming" du magasin principal
        List<StockPickingType> incomingTypes = pickingTypeRepo
                .findByWarehouseIdOrderByNameAsc(mainWarehouse.getId()).stream()
                .filter(pt -> "incoming".equals(pt.getCode()))
                .collect(Collectors.toList());
        if (incomingTypes.isEmpty()) {
            incomingTypes = pickingTypeRepo.findByCompanyIdAndCodeOrderByNameAsc(companyId, "incoming");
        }
        if (incomingTypes.isEmpty()) return;
        Long incomingPickingTypeId = incomingTypes.get(0).getId();

        Integer seq = pickingRepo.findMaxSeq(companyId, "ANN/ACH");
        String pickingName = "ANN/ACH/" + String.format("%05d", (seq == null ? 0 : seq) + 1);

        StockPicking picking = StockPicking.builder()
                .name(pickingName)
                .pickingTypeId(incomingPickingTypeId)
                .pickingTypeCode("incoming")
                .locationId(supplierLoc.getId())
                .locationDestId(destLocId)
                .partnerId(avoir.getPartner() != null ? avoir.getPartner().getId() : null)
                .partnerName(avoir.getPartner() != null ? avoir.getPartner().getName() : null)
                .state("done")
                .scheduledDate(avoir.getDate())
                .dateDone((avoir.getDate() != null ? avoir.getDate() : LocalDate.now()).atTime(java.time.LocalTime.now()))
                .origin(avoir.getName())
                .notes("Annulation avoir fournisseur - " + avoir.getName())
                .companyId(companyId)
                .build();

        for (PurchaseInvoiceLine line : avoir.getLines()) {
            Product product = resolveProduct(line.getProductId(), line.getProductCode(), companyId).orElse(null);
            if (product == null || "service".equals(product.getType())) continue;

            BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : ZERO;
            if (qty.compareTo(ZERO) <= 0) continue;

            StockMove move = StockMove.builder()
                    .picking(picking)
                    .productId(product.getId())
                    .productCode(product.getDefaultCode())
                    .productName(product.getName())
                    .uomName(product.getUomName())
                    .qtyDemanded(qty)
                    .qtyDone(qty)
                    .priceUnit(line.getPrixUnitaire() != null ? line.getPrixUnitaire()
                            : resolveMovementCmup(product.getId(), supplierLoc.getId(), destLocId, product))
                    .locationId(supplierLoc.getId())
                    .locationDestId(destLocId)
                    .state("done")
                    .companyId(companyId)
                    .build();
            picking.getMoves().add(move);

            // Réintégrer au quant du magasin principal
            StockQuant quant = stockQuantRepo
                    .findFirstByProductIdAndLocationIdAndCompanyId(product.getId(), destLocId, companyId)
                    .orElseGet(() -> StockQuant.builder()
                            .productId(product.getId()).locationId(destLocId)
                            .companyId(companyId).quantity(ZERO).reservedQuantity(ZERO).build());
            quant.setQuantity(quant.getQuantity().add(qty));
            stockQuantRepo.save(quant);
        }

        if (!picking.getMoves().isEmpty()) {
            pickingRepo.save(picking);
            syncEventPublisher.publish(SyncEventType.STOCK_PICKING_FROM_PURCHASE, String.valueOf(picking.getId()),
                    buildPickingSyncPayload(picking, "Annulation avoir achat " + avoir.getName()));
            log.info("Stock restitué (annulation avoir achat) : {} pour {}", pickingName, avoir.getName());
        }
    }

    /**
     * Annule une facture fournisseur (brouillon, validée ou payée).
     * Pour les factures validées/payées, cela ne crée PAS d'écriture inverse.
     * Utiliser reverseInvoiceEntries() pour extourner les écritures comptables.
     */
    public PurchaseInvoiceDTO setInvoiceWarehouse(Long invoiceId, Long warehouseId) {
        PurchaseInvoice invoice = invoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + invoiceId));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);
        if (!"draft".equals(invoice.getState())) {
            throw new IllegalStateException("L'entrepôt ne peut être modifié que sur un document en brouillon");
        }
        invoice.setWarehouseId(warehouseId);
        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
    }

    public PurchaseInvoiceDTO cancelInvoice(Long id) {
        PurchaseInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);

        if ("cancelled".equals(invoice.getState())) {
            throw new IllegalStateException("Cette facture est déjà annulée");
        }

        // Une facture d'achat VALIDÉE/PAYÉE ne peut plus être annulée directement : la seule
        // façon de l'annuler comptablement est de créer un avoir dessus. Un brouillon (jamais
        // posté, aucun impact stock/comptable) reste annulable normalement.
        if (!"credit_note".equals(invoice.getType())
                && ("posted".equals(invoice.getState()) || "paid".equals(invoice.getState()))) {
            throw new IllegalStateException(
                "Une facture validée ne peut plus être annulée directement. " +
                "Créez un avoir sur cette facture pour l'annuler comptablement.");
        }

        // Annuler le picking Fournisseur→Dépôt Achat si la facture avait été postée
        // mais que le bordereau de réception n'a pas encore été validé (picking pas "done")
        if (invoice.getPickingId() != null) {
            pickingRepo.findById(invoice.getPickingId()).ifPresent(picking -> {
                if (!"done".equals(picking.getState()) && !"cancelled".equals(picking.getState())) {
                    try {
                        stockService.cancelPicking(invoice.getPickingId());
                    } catch (Exception e) {
                        log.warn("Impossible d'annuler le picking {} de la facture {}: {}",
                                invoice.getPickingId(), id, e.getMessage());
                    }
                }
            });
        }

        // Annulation d'un avoir fournisseur validé : restituer le stock. L'avoir avait sorti
        // la marchandise du magasin (retour fournisseur, quant -qty) ; l'annulation la réintègre.
        if ("credit_note".equals(invoice.getType())
                && ("posted".equals(invoice.getState()) || "paid".equals(invoice.getState()))) {
            reversePurchaseAvoirStock(invoice);
            restoreOriginalInvoiceAfterAvoirCancel(invoice);
        }

        invoice.setState("cancelled");
        invoice.setCancelledBy(auditService.getCurrentUsername());
        invoice.setCancelledAt(java.time.LocalDateTime.now());
        PurchaseInvoiceDTO cancelled = toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
        syncEventPublisher.publish(SyncEventType.PURCHASE_INVOICE_CANCELLED, String.valueOf(id), cancelled);
        auditService.log("PURCHASE_INVOICE", id, invoice.getName(),
                "CANCELLED", "Facture achat annulée", invoice.getCompany().getId());
        return cancelled;
    }

    /**
     * Extourne les écritures comptables d'une facture annulée (et de ses paiements).
     * À appeler manuellement après cancelInvoice().
     */
    public PurchaseInvoiceDTO reverseInvoiceEntries(Long id) {
        PurchaseInvoice invoice = invoiceRepo.findById(id)
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
        for (PurchaseInvoicePayment payment : invoice.getPayments()) {
            if (payment.getAccountMove() != null && "posted".equals(payment.getAccountMove().getState())) {
                createReversalMove(payment.getAccountMove(), reversalDate);
                // "reversed" (pas "cancelled") : même convention que reversePayment(), utilisée par
                // le frontend pour afficher le badge "Annulé" sur la ligne de paiement.
                payment.setState("reversed");
                paymentRepo.save(payment);
            }
        }

        // Remettre le montant dû et payé à zéro
        invoice.setMontantPaye(ZERO);
        invoice.setMontantDu(ZERO);
        invoice.setEntriesReversedAt(java.time.LocalDateTime.now());

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

    // ===================== AVOIRS FOURNISSEURS =====================

    @Transactional(readOnly = true)
    public List<PurchaseInvoiceDTO> getAllAvoirs(Long companyId) {
        return mapInvoicesBatched(invoiceRepo.findByCompanyIdAndTypeOrderByDateDescNameDesc(companyId, "credit_note"));
    }

    /**
     * Crée un avoir fournisseur à partir d'une facture validée.
     * avoirType = "integral" (ou req null) → toutes les lignes copiées intégralement.
     * avoirType = "partiel" → seules les lignes/quantités demandées dans req.getLines().
     */
    public PurchaseInvoiceDTO createAvoirFromInvoice(Long invoiceId, PurchaseAvoirRequest req) {
        PurchaseInvoice original = invoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + invoiceId));
        tenantGuard.check(original.getCompany() != null ? original.getCompany().getId() : null);

        if (!"posted".equals(original.getState()) && !"paid".equals(original.getState())
                && !"partiellement_extournee".equals(original.getState())) {
            throw new IllegalStateException("Seules les factures validées peuvent faire l'objet d'un avoir");
        }
        if (!"invoice".equals(original.getType())) {
            throw new IllegalStateException("Impossible de créer un avoir sur un avoir");
        }

        boolean isPartiel = req != null && "partiel".equals(req.getAvoirType())
                && req.getLines() != null && !req.getLines().isEmpty();

        // L'avoir reprend la date de la facture d'origine (pas la date du jour) : le retour de
        // stock et l'écriture comptable qui en découlent à la validation doivent être datés à la
        // même période comptable que l'opération d'achat qu'ils annulent.
        LocalDate avoirDate = original.getDate() != null ? original.getDate() : LocalDate.now();
        fiscalLockGuard.assertPeriodOpen(original.getCompany(), avoirDate);
        String avoirName = generateAvoirName(original.getCompany().getId(), avoirDate);

        PurchaseInvoice avoir = PurchaseInvoice.builder()
                .name(avoirName)
                .date(avoirDate)
                .state("draft")
                .type("credit_note")
                .originalInvoice(original)
                .notes("Avoir " + (isPartiel ? "partiel" : "fournisseur") + " sur " + original.getName())
                .partner(original.getPartner())
                .journal(original.getJournal())
                .company(original.getCompany())
                .warehouseId(original.getWarehouseId())
                .montantPaye(ZERO)
                .build();

        List<PurchaseInvoiceLine> avoirLines;

        if (isPartiel) {
            // Avoir partiel : seulement les lignes/quantités demandées
            Map<Long, BigDecimal> qtyMap = req.getLines().stream()
                    .filter(l -> l.getLineId() != null && l.getQuantite() != null)
                    .collect(Collectors.toMap(
                            PurchaseAvoirRequest.LineItem::getLineId,
                            PurchaseAvoirRequest.LineItem::getQuantite,
                            (a, b) -> a));

            avoirLines = original.getLines().stream()
                    .filter(ol -> qtyMap.containsKey(ol.getId()))
                    .map(ol -> {
                        BigDecimal qty = qtyMap.get(ol.getId())
                                .min(ol.getQuantity() != null ? ol.getQuantity() : ZERO)
                                .max(ZERO);
                        if (qty.compareTo(ZERO) == 0) return null;

                        BigDecimal pu  = ol.getPrixUnitaire() != null ? ol.getPrixUnitaire() : ZERO;
                        BigDecimal tva = ol.getTauxTVA() != null ? ol.getTauxTVA() : ZERO;
                        BigDecimal montantHT  = qty.multiply(pu).setScale(2, RoundingMode.HALF_UP);
                        BigDecimal montantTVA = montantHT.multiply(tva).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);

                        // Précompte proportionnel à la quantité retournée (même taux effectif que
                        // la ligne d'origine, plutôt que de re-résoudre le taux courant du partenaire).
                        BigDecimal precompte = ZERO;
                        if (ol.getPrecompte() != null && ol.getQuantity() != null
                                && ol.getQuantity().compareTo(ZERO) > 0) {
                            BigDecimal tauxPc = ol.getPrecompte().divide(ol.getQuantity(), 6, RoundingMode.HALF_UP);
                            precompte = tauxPc.multiply(qty).setScale(2, RoundingMode.HALF_UP);
                        }

                        BigDecimal montantTTC = montantHT.add(montantTVA).add(precompte);

                        BigDecimal rabaisUnit = ol.getRabaisUnitaire() != null ? ol.getRabaisUnitaire() : ZERO;
                        BigDecimal totalRabaisLigne = qty.multiply(rabaisUnit).setScale(2, RoundingMode.HALF_UP);

                        return PurchaseInvoiceLine.builder()
                                .invoice(avoir)
                                .productId(ol.getProductId())
                                .productCode(ol.getProductCode())
                                .description(ol.getDescription())
                                .quantity(qty)
                                .prixUnitaire(pu)
                                .prixUnitaireTTC(ol.getPrixUnitaireTTC())
                                .tauxTVA(tva)
                                .accountCode(ol.getAccountCode())
                                .montantHT(montantHT)
                                .montantTVA(montantTVA)
                                .montantTTC(montantTTC)
                                .precompte(precompte)
                                .consigne(ol.isConsigne())
                                .categoryId(ol.getCategoryId())
                                .rabaisUnitaire(rabaisUnit)
                                .totalRabaisLigne(totalRabaisLigne)
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
                    .map(ol -> PurchaseInvoiceLine.builder()
                            .invoice(avoir)
                            .productId(ol.getProductId())
                            .productCode(ol.getProductCode())
                            .description(ol.getDescription())
                            .quantity(ol.getQuantity())
                            .prixUnitaire(ol.getPrixUnitaire())
                            .prixUnitaireTTC(ol.getPrixUnitaireTTC())
                            .tauxTVA(ol.getTauxTVA())
                            .accountCode(ol.getAccountCode())
                            .montantHT(ol.getMontantHT())
                            .montantTVA(ol.getMontantTVA())
                            .montantTTC(ol.getMontantTTC())
                            .precompte(ol.getPrecompte())
                            .consigne(ol.isConsigne())
                            .categoryId(ol.getCategoryId())
                            .rabaisUnitaire(ol.getRabaisUnitaire())
                            .totalRabaisLigne(ol.getTotalRabaisLigne())
                            .build())
                    .collect(Collectors.toList());
        }

        avoir.setLines(avoirLines);
        computeInvoiceTotals(avoir);

        PurchaseInvoice savedAvoir = invoiceRepo.save(avoir);

        // Avoir intégral → la facture est entièrement annulée
        // Avoir partiel  → la facture passe en partiellement_extournee (toujours visible en stats)
        original.setState(isPartiel ? "partiellement_extournee" : "extournee");
        invoiceRepo.save(original);
        republishInvoiceSync(original);

        auditService.log("PURCHASE_INVOICE", original.getId(), original.getName(),
                "AVOIR_CREATED", "Avoir " + (isPartiel ? "partiel" : "intégral") + " créé → " + savedAvoir.getName(),
                AuditService.details(java.util.Map.of("avoir", savedAvoir.getName())),
                original.getCompany().getId());
        return toInvoiceDTOWithPayments(savedAvoir);
    }

    /**
     * Remet la facture d'origine d'un avoir annulé en état "validé" lorsque l'avoir était
     * intégral (la facture avait basculé en "extournee"). Les avoirs partiels laissent la
     * facture d'origine inchangée (plusieurs avoirs partiels possibles).
     */
    private void restoreOriginalInvoiceAfterAvoirCancel(PurchaseInvoice avoir) {
        if (avoir.getOriginalInvoice() == null) return;
        PurchaseInvoice original = invoiceRepo.findById(avoir.getOriginalInvoice().getId()).orElse(null);
        if (original == null) return;
        if ("extournee".equals(original.getState())) {
            original.setState("posted");
            invoiceRepo.save(original);
            republishInvoiceSync(original);
            auditService.log("PURCHASE_INVOICE", original.getId(), original.getName(),
                    "AVOIR_CANCELLED", "Avoir " + avoir.getName() + " annulé — facture réactivée",
                    original.getCompany().getId());
        }
    }

    /**
     * Crée un avoir fournisseur manuel (non lié à une facture).
     */
    public PurchaseInvoiceDTO createAvoirManuel(PurchaseInvoiceRequest req) {
        req = req.toBuilder().type("credit_note").build();
        return createInvoice(req);
    }

    // ===================== PAIEMENTS FOURNISSEURS =====================

    /**
     * Enregistre un paiement fournisseur et génère l'écriture comptable.
     * Facture normale : Dr 401x (fournisseur) / Cr 521/571 (trésorerie) — nous payons le fournisseur.
     * Avoir fournisseur (credit_note) : sens inversé — Dr 521/571 (trésorerie) / Cr 401x
     * (fournisseur), puisque l'avoir a déjà débité le compte fournisseur à sa validation ;
     * "enregistrer un paiement" sur un avoir signifie ici encaisser le remboursement du fournisseur.
     */
    public PurchaseInvoiceDTO.PaymentDTO createPayment(PurchaseInvoicePaymentRequest req) {
        PurchaseInvoice invoice = invoiceRepo.findById(req.getInvoiceId())
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable"));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);

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
                    "Montant invalide — doit être > 0 et ≤ " + montantDu + " FCFA (reste dû)");
            }
        }

        // Compte trésorerie (crédit) : utiliser le compte défini sur le journal, c'est lui qui fait foi.
        // Fallback uniquement si le journal n'a pas de compte configuré.
        AccountAccount treasuryAccount = journal.getDefaultCreditAccount();
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

        // Compte fournisseur (débit)
        AccountAccount payableAccount = accountRepo.findFirstByCodeAndCompanyId(DEFAULT_PAYABLE_ACCOUNT, company.getId())
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("4011", company.getId()))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("401",  company.getId()))
                .orElseThrow(() -> new EntityNotFoundException("Compte fournisseur introuvable (401100/4011/401)"));

        String paymentName = generatePaymentName(company.getId(), date);
        String moveLabel = (isAvoir ? "Remboursement fournisseur " : "Paiement fournisseur ") + invoice.getName();

        AccountMove move = AccountMove.builder()
                .name(paymentName)
                .date(date)
                .ref(moveLabel)
                .state("posted")
                .journal(journal)
                .company(company)
                .partner(invoice.getPartner())
                .build();

        // Facture normale : Dr fournisseur / Cr trésorerie (nous payons). Avoir : sens inversé
        // (Dr trésorerie / Cr fournisseur), le fournisseur nous rembourse.
        AccountAccount debitAccount = isAvoir ? treasuryAccount : payableAccount;
        AccountAccount creditAccount = isAvoir ? payableAccount : treasuryAccount;

        List<AccountMoveLine> lines = List.of(
                AccountMoveLine.builder()
                        .move(move).account(debitAccount).partner(invoice.getPartner())
                        .name(moveLabel).date(date)
                        .debit(amount).credit(ZERO)
                        .journal(journal).company(company)
                        .build(),
                AccountMoveLine.builder()
                        .move(move).account(creditAccount).partner(invoice.getPartner())
                        .name(moveLabel).date(date)
                        .debit(ZERO).credit(amount)
                        .journal(journal).company(company)
                        .build()
        );
        move.setLines(new ArrayList<>(lines));
        AccountMove savedMove = moveRepo.save(move);
        syncEventPublisher.publish(SyncEventType.ACCOUNT_MOVE_FROM_PURCHASE_PAYMENT, String.valueOf(savedMove.getId()),
                buildMoveSyncPayload(savedMove, "Paiement fournisseur"));

        PurchaseInvoicePayment payment = PurchaseInvoicePayment.builder()
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

        // Mise à jour des totaux de la facture
        BigDecimal totalPaye = paymentRepo.sumPostedPaymentsByInvoice(invoice.getId());
        invoice.setMontantPaye(totalPaye);
        BigDecimal du = (invoice.getNetAPayer() != null ? invoice.getNetAPayer() : ZERO).subtract(totalPaye);
        invoice.setMontantDu(du.max(ZERO));

        if (du.compareTo(ZERO) <= 0) {
            invoice.setState("paid");
        }
        invoiceRepo.save(invoice);
        // Cf. SalesService : PURCHASE_PAYMENT_CREATED ne notifie que le paiement, jamais l'état
        // mis à jour de la facture — sans ce republish elle reste figée à son ancien état côté Hub.
        syncEventPublisher.publish(SyncEventType.PURCHASE_INVOICE_POSTED, String.valueOf(invoice.getId()),
                toInvoiceDTOWithPayments(invoice));

        PurchaseInvoiceDTO.PaymentDTO paymentResult = toPaymentDTO(payment);
        auditService.log("PURCHASE_INVOICE", invoice.getId(), invoice.getName(),
                isAvoir ? "REFUND_ADDED" : "PAYMENT_ADDED",
                isAvoir ? "Remboursement enregistré" : "Paiement enregistré",
                AuditService.details(java.util.Map.of("montant", amount.toPlainString(), "journal", journal.getName())),
                company.getId());
        syncEventPublisher.publish(SyncEventType.PURCHASE_PAYMENT_CREATED, String.valueOf(payment.getId()), paymentResult);
        return paymentResult;
    }

    @Transactional(readOnly = true)
    public List<PurchaseInvoiceDTO.PaymentDTO> getPaymentsByInvoice(Long invoiceId) {
        return paymentRepo.findByInvoiceId(invoiceId)
                .stream().map(this::toPaymentDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<PurchaseInvoiceDTO.PaymentDTO> getAllPayments(Long companyId) {
        return paymentRepo.findByCompanyIdOrderByDateDescNameDesc(companyId)
                .stream().map(this::toPaymentDTO).collect(Collectors.toList());
    }

    /**
     * Utilise les avoirs disponibles du fournisseur pour compenser partiellement ou totalement une
     * facture d'achat. Aucune écriture comptable n'est créée (les avoirs ont déjà Dr 401100 lors de
     * leur validation) — seul le rapprochement montantDu/montantPaye est mis à jour.
     */
    @Transactional
    public PurchaseInvoiceDTO applyCreditToInvoice(Long invoiceId, BigDecimal amount, Long companyId) {
        PurchaseInvoice invoice = invoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable"));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);
        if (!"posted".equals(invoice.getState())) {
            throw new IllegalStateException("Seules les factures validées acceptent une compensation");
        }
        if (!companyId.equals(invoice.getCompany().getId())) {
            throw new IllegalArgumentException("Société incohérente");
        }
        Long partnerId = invoice.getPartner().getId();
        BigDecimal montantDu = invoice.getMontantDu() != null ? invoice.getMontantDu() : ZERO;

        if (amount.compareTo(ZERO) <= 0 || amount.compareTo(montantDu) > 0) {
            throw new IllegalArgumentException(
                "Montant invalide — doit être > 0 et ≤ " + montantDu + " FCFA (reste dû)");
        }

        List<PurchaseInvoice> credits = invoiceRepo.findAvailableCreditNotes(partnerId, companyId);
        BigDecimal totalAvailable = credits.stream()
                .map(c -> c.getMontantDu() != null ? c.getMontantDu() : ZERO)
                .reduce(ZERO, BigDecimal::add);

        if (amount.compareTo(totalAvailable) > 0) {
            throw new IllegalArgumentException(
                "Crédit disponible insuffisant — disponible : " + totalAvailable + " FCFA");
        }

        BigDecimal remaining = amount;
        for (PurchaseInvoice credit : credits) {
            if (remaining.compareTo(ZERO) <= 0) break;
            BigDecimal creditDu = credit.getMontantDu() != null ? credit.getMontantDu() : ZERO;
            BigDecimal toApply = remaining.min(creditDu);

            // Réduire le montant disponible de l'avoir
            credit.setMontantPaye((credit.getMontantPaye() != null ? credit.getMontantPaye() : ZERO).add(toApply));
            credit.setMontantDu(creditDu.subtract(toApply).setScale(2, RoundingMode.HALF_UP));
            if (credit.getMontantDu().compareTo(ZERO) == 0) credit.setState("paid");
            invoiceRepo.save(credit);
            republishInvoiceSync(credit);

            // Enregistrer la compensation comme paiement sur la facture (traçabilité)
            String pmtName = generatePaymentName(invoice.getCompany().getId(), LocalDate.now());
            paymentRepo.save(PurchaseInvoicePayment.builder()
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
        BigDecimal totalPaye = paymentRepo.sumPostedPaymentsByInvoice(invoice.getId());
        invoice.setMontantPaye(totalPaye);
        BigDecimal newDu = (invoice.getNetAPayer() != null ? invoice.getNetAPayer() : ZERO)
                .subtract(totalPaye).max(ZERO);
        invoice.setMontantDu(newDu);
        if (newDu.compareTo(ZERO) == 0) invoice.setState("paid");

        PurchaseInvoiceDTO creditResult = toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
        republishInvoiceSync(invoice);
        auditService.log("PURCHASE_INVOICE", invoice.getId(), invoice.getName(),
                "CREDIT_APPLIED", "Avoir compensé",
                AuditService.details(Map.of("montant", amount + " FCFA")),
                invoice.getCompany().getId());
        return creditResult;
    }

    // ===================== HELPERS INTERNES =====================

    private PurchaseInvoice createInvoiceFromOrder(PurchaseOrder order) {
        Long companyId = order.getCompany().getId();
        LocalDate date = order.getDate() != null ? order.getDate() : LocalDate.now();

        // Chercher un journal de type "purchase", sinon le premier disponible
        AccountJournal journal = journalRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream()
                .filter(j -> "purchase".equals(j.getType()))
                .findFirst()
                .orElseGet(() -> journalRepo.findByCompanyIdAndActiveTrue(companyId)
                        .stream().findFirst()
                        .orElseThrow(() -> new IllegalStateException("Aucun journal actif trouvé pour la société")));

        String name = generateInvoiceName(companyId, date);

        PurchaseInvoice invoice = PurchaseInvoice.builder()
                .name(name)
                .date(date)
                .dateEcheance(order.getDateExpected())
                .state("draft")
                .type("invoice")
                .notes(order.getNotes())
                .partner(order.getPartner())
                .journal(journal)
                .company(order.getCompany())
                .purchaseOrder(order)
                .warehouseId(order.getWarehouseId())
                .montantPaye(ZERO)
                .build();

        Long partnerId = order.getPartner() != null ? order.getPartner().getId() : null;
        BigDecimal tauxPrecompte = (partnerId != null)
                ? getPartnerPurchasePrecompteTaux(partnerId, companyId)
                : ZERO;

        for (PurchaseOrderLine ol : order.getLines()) {
            boolean isConsigne = ConsigneCodes.isConsigne(ol.getProductCode(), companyId);
            BigDecimal qty = ol.getQuantity() != null ? ol.getQuantity() : ZERO;
            BigDecimal pu  = ol.getPrixUnitaire() != null ? ol.getPrixUnitaire() : ZERO;
            BigDecimal tva = ol.getTauxTVA() != null ? ol.getTauxTVA() : ZERO;

            // Apply preferential supplier price if configured
            BigDecimal rabaisUnitaire = ZERO;
            if (!isConsigne && partnerId != null && (ol.getProductId() != null || ol.getProductCode() != null)) {
                Product prod = resolveProduct(ol.getProductId(), ol.getProductCode(), companyId).orElse(null);
                if (prod != null) {
                    Optional<PrixFournisseurArticle> pfOpt = prixFournisseurArticleRepo
                            .findByProductIdAndFournisseurIdAndCompanyId(prod.getId(), partnerId, companyId);
                    if (pfOpt.isPresent()) {
                        BigDecimal prixFourni = pfOpt.get().getPrixFournisseur();
                        BigDecimal catalogue = purchaseCataloguePrice(prod);
                        // Le prix reste le catalogue (jamais le tarif) ; le tarif sort en rabais, plafonné ≥ 0
                        if (catalogue.compareTo(ZERO) > 0) pu = catalogue;
                        rabaisUnitaire = pu.subtract(prixFourni).max(ZERO);
                    }
                }
            }

            BigDecimal ht   = qty.multiply(pu).setScale(2, RoundingMode.HALF_UP);
            BigDecimal lTVA = ht.multiply(tva).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
            BigDecimal pc   = ZERO;
            if (!isConsigne && tauxPrecompte.compareTo(ZERO) > 0) {
                pc = ht.multiply(tauxPrecompte).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
            }
            BigDecimal lTTC = ht.add(lTVA).add(pc);
            BigDecimal totalRabaisLigne = !isConsigne ? qty.multiply(rabaisUnitaire).setScale(2, RoundingMode.HALF_UP) : ZERO;

            BigDecimal pcUnitRate = isConsigne ? ZERO : tauxPrecompte.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP);
            BigDecimal puttc = pu
                    .multiply(BigDecimal.ONE
                            .add(tva.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP))
                            .add(pcUnitRate))
                    .setScale(4, RoundingMode.HALF_UP);

            PurchaseInvoiceLine line = PurchaseInvoiceLine.builder()
                    .invoice(invoice)
                    .productId(ol.getProductId())
                    .productCode(ol.getProductCode())
                    .description(ol.getDescription())
                    .quantity(qty)
                    .prixUnitaire(pu)
                    .tauxTVA(tva)
                    .accountCode(ol.getAccountCode())
                    .categoryId(ol.getCategoryId())
                    .consigne(isConsigne)
                    .montantHT(ht)
                    .montantTVA(lTVA)
                    .montantTTC(lTTC)
                    .precompte(pc)
                    .prixUnitaireTTC(puttc)
                    .rabaisUnitaire(rabaisUnitaire)
                    .totalRabaisLigne(totalRabaisLigne)
                    .build();
            invoice.getLines().add(line);
        }

        computeInvoiceTotals(invoice);
        return invoiceRepo.save(invoice);
    }

    private void buildInvoiceLines(PurchaseInvoice invoice, List<PurchaseInvoiceRequest.LineRequest> reqs) {
        if (reqs == null) return;
        Long partnerId = invoice.getPartner() != null ? invoice.getPartner().getId() : null;
        Long companyId = invoice.getCompany() != null ? invoice.getCompany().getId() : null;

        // Resolve precompte rate: Partner.tauxPrecompte first, then Precompte table
        BigDecimal tauxPrecompte = (partnerId != null && companyId != null)
                ? getPartnerPurchasePrecompteTaux(partnerId, companyId)
                : ZERO;

        for (PurchaseInvoiceRequest.LineRequest req : reqs) {
            boolean isConsigne = ConsigneCodes.isConsigne(req.getProductCode(), companyId);
            BigDecimal qty = req.getQuantity() != null ? req.getQuantity() : ZERO;
            // Le prix net (article) envoyé par le client fait foi pour le calcul du Net HT — jamais écrasé.
            BigDecimal pu  = req.getPrixUnitaire() != null ? req.getPrixUnitaire() : ZERO;
            BigDecimal tva = req.getTauxTVA() != null ? req.getTauxTVA() : ZERO;
            // Respecter le flag exemptTvaAchat du produit
            tva = resolveExemptTvaAchat(tva, req.getProductId(), req.getProductCode(), companyId);

            // Rabais unitaire : utiliser celui déjà résolu côté client ; sinon le déduire
            // du prix préférentiel fournisseur (sans jamais modifier pu).
            BigDecimal rabaisUnitaire = req.getRabaisUnitaire() != null ? req.getRabaisUnitaire().max(ZERO) : ZERO;
            if (!isConsigne && req.getRabaisUnitaire() == null && partnerId != null && companyId != null
                    && (req.getProductId() != null || req.getProductCode() != null)) {
                Product prod = resolveProduct(req.getProductId(), req.getProductCode(), companyId).orElse(null);
                if (prod != null) {
                    Optional<PrixFournisseurArticle> pfOpt = prixFournisseurArticleRepo
                            .findByProductIdAndFournisseurIdAndCompanyId(prod.getId(), partnerId, companyId);
                    if (pfOpt.isPresent()) {
                        BigDecimal catalogue = purchaseCataloguePrice(prod);
                        BigDecimal base = catalogue.compareTo(ZERO) > 0 ? catalogue : pu;
                        // rabais = catalogue − tarif, jamais négatif
                        rabaisUnitaire = base.subtract(pfOpt.get().getPrixFournisseur()).max(ZERO);
                    }
                }
            }

            BigDecimal montantHT  = qty.multiply(pu).setScale(2, RoundingMode.HALF_UP);
            BigDecimal montantTVA = montantHT.multiply(tva).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);

            BigDecimal precompte = ZERO;
            if (!isConsigne && tauxPrecompte.compareTo(ZERO) > 0) {
                precompte = montantHT.multiply(tauxPrecompte)
                        .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
            }

            BigDecimal montantTTC = montantHT.add(montantTVA).add(precompte);

            BigDecimal pcUnitRate = isConsigne ? ZERO : tauxPrecompte.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP);
            BigDecimal puttc = pu.multiply(BigDecimal.ONE
                    .add(tva.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP))
                    .add(pcUnitRate))
                    .setScale(4, RoundingMode.HALF_UP);

            BigDecimal totalRabaisLigne = !isConsigne ? qty.multiply(rabaisUnitaire).setScale(2, RoundingMode.HALF_UP) : ZERO;

            invoice.getLines().add(PurchaseInvoiceLine.builder()
                    .invoice(invoice)
                    .productId(req.getProductId())
                    .productCode(req.getProductCode())
                    .description(req.getDescription())
                    .quantity(qty)
                    .prixUnitaire(pu)
                    .tauxTVA(tva)
                    .accountCode(req.getAccountCode())
                    .montantHT(montantHT)
                    .montantTVA(montantTVA)
                    .montantTTC(montantTTC)
                    .precompte(precompte)
                    .prixUnitaireTTC(puttc)
                    .consigne(isConsigne)
                    .categoryId(resolveCategoryId(req.getCategoryId(), req.getProductCode(), companyId))
                    .rabaisUnitaire(rabaisUnitaire)
                    .totalRabaisLigne(totalRabaisLigne)
                    .build());
        }
    }

    private void computeInvoiceTotals(PurchaseInvoice invoice) {
        Long companyId = invoice.getCompany() != null ? invoice.getCompany().getId() : null;
        // Accumulation sur lignes NON-consigne uniquement pour HT/TVA/PSA
        // Convention (alignée sur les ventes) : prixUnitaire/montantHT = prix CATALOGUE (normal).
        // Le tarif fournisseur n'affecte PAS le prix de l'article : il est isolé en rabais,
        // puis le rabais TTC est déduit du net à payer.
        BigDecimal totalHT = ZERO, totalTVA = ZERO, totalPrecompte = ZERO, totalRabaisHT = ZERO, totalRabaisTTC = ZERO;
        // Consignes : montant TTC positif / négatif
        BigDecimal consigneMontant = ZERO, deconsigneMontant = ZERO;

        for (PurchaseInvoiceLine l : invoice.getLines()) {
            BigDecimal lHT  = l.getMontantHT()  != null ? l.getMontantHT()  : ZERO;
            BigDecimal lTVA = l.getMontantTVA() != null ? l.getMontantTVA() : ZERO;
            BigDecimal lTTC = l.getMontantTTC() != null ? l.getMontantTTC() : ZERO;
            BigDecimal lPC  = l.getPrecompte()  != null ? l.getPrecompte()  : ZERO;
            BigDecimal qty  = l.getQuantity()   != null ? l.getQuantity()   : ZERO;
            BigDecimal lRabais = l.getTotalRabaisLigne() != null ? l.getTotalRabaisLigne() : ZERO;

            if (ConsigneCodes.isConsigne(l.getProductCode(), companyId)) {
                if (qty.compareTo(ZERO) >= 0) {
                    consigneMontant = consigneMontant.add(lTTC);
                } else {
                    deconsigneMontant = deconsigneMontant.add(lTTC.abs());
                }
            } else {
                totalHT        = totalHT.add(lHT);
                totalTVA       = totalTVA.add(lTVA);
                totalPrecompte = totalPrecompte.add(lPC);
                totalRabaisHT  = totalRabaisHT.add(lRabais);
                totalRabaisTTC = totalRabaisTTC.add(rabaisLigneTTC(l));
            }
        }
        totalRabaisTTC = totalRabaisTTC.setScale(2, RoundingMode.HALF_UP);

        // Liquide Nu = HT + TVA + PSA
        BigDecimal totalLiquideNu = totalHT.add(totalTVA).add(totalPrecompte).setScale(2, RoundingMode.HALF_UP);
        // Total TTC = Liquide Nu (pas de frais d'enlèvement à l'achat)
        BigDecimal totalTTC = totalLiquideNu.setScale(0, RoundingMode.HALF_UP);
        // Net à payer = Total TTC + Consigne − Déconsigne − Rabais TTC obtenus
        BigDecimal netAPayer = totalTTC.add(consigneMontant).subtract(deconsigneMontant)
                .subtract(totalRabaisTTC).setScale(0, RoundingMode.HALF_UP);

        // Remise calculée et conservée mais NON déduite de la facture
        BigDecimal totalRemise = computeInvoiceRemise(invoice);

        invoice.setTotalHT(totalHT);
        invoice.setTotalTVA(totalTVA);
        invoice.setTotalPrecompte(totalPrecompte);
        invoice.setTotalLiquideNu(totalLiquideNu);
        invoice.setTotalTTC(totalTTC);
        invoice.setTotalRemise(totalRemise);
        invoice.setTotalRabaisHT(totalRabaisHT);
        invoice.setTotalRabaisTTC(totalRabaisTTC);
        invoice.setNetAPayer(netAPayer);
        if (invoice.getMontantDu() == null) {
            invoice.setMontantDu(netAPayer);
        }
    }

    /** Rabais TTC d'une ligne = rabais HT × (1 + TVA% + précompte%). Le taux de précompte
     *  est déduit de la ligne (precompte / montantHT) pour rester cohérent avec le net. */
    private BigDecimal rabaisLigneTTC(PurchaseInvoiceLine l) {
        BigDecimal rabaisHT = l.getTotalRabaisLigne() != null ? l.getTotalRabaisLigne() : ZERO;
        if (rabaisHT.compareTo(ZERO) == 0) return ZERO;
        BigDecimal ht  = l.getMontantHT() != null ? l.getMontantHT() : ZERO;
        BigDecimal pc  = l.getPrecompte() != null ? l.getPrecompte() : ZERO;
        BigDecimal tva = l.getTauxTVA()   != null ? l.getTauxTVA()   : ZERO;
        BigDecimal pcRate = ht.compareTo(ZERO) != 0
                ? pc.multiply(BigDecimal.valueOf(100)).divide(ht, 6, RoundingMode.HALF_UP) : ZERO;
        BigDecimal factor = BigDecimal.ONE
                .add(tva.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP))
                .add(pcRate.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP));
        return rabaisHT.multiply(factor).setScale(2, RoundingMode.HALF_UP);
    }

    /** Prix catalogue d'achat = coût standard de l'article (standard_price). C'est ce prix
     *  qui reste le prix de l'article ; le tarif fournisseur n'en sort que le rabais. Référence
     *  catalogue globale (pas liée à un entrepôt), contrairement au CMUP de valorisation. */
    private BigDecimal purchaseCataloguePrice(com.erp.stock.entity.Product prod) {
        return prod.getStandardPrice() != null ? prod.getStandardPrice() : ZERO;
    }

    /** CMUP de repli pour un mouvement de stock, tenté d'abord sur l'entrepôt de destination
     *  (cas normal : réception), puis sur l'entrepôt source si la destination n'en a pas
     *  (emplacement externe fournisseur — cas d'un retour/déconsigne). */
    private BigDecimal resolveMovementCmup(Long productId, Long srcLocId, Long destLocId, Product product) {
        Long whId = productValuationService.resolveWarehouseId(destLocId);
        if (whId == null) whId = productValuationService.resolveWarehouseId(srcLocId);
        return productValuationService.getWarehouseCmup(productId, whId, product);
    }

    private BigDecimal computeInvoiceRemise(PurchaseInvoice invoice) {
        if (invoice.getPartner() == null || invoice.getCompany() == null) return ZERO;
        Long partnerId = invoice.getPartner().getId();
        Long companyId = invoice.getCompany().getId();
        BigDecimal tauxPrecompte = getPartnerPurchasePrecompteTaux(partnerId, companyId);
        return remiseRepo.findByPartnerIdAndCompanyIdAndActiveTrue(partnerId, companyId)
                .stream()
                .map(r -> {
                    if (r.getMontantFixe() == null) return ZERO;
                    Long catId = r.getCategory().getId();
                    BigDecimal totalQty = invoice.getLines().stream()
                            .filter(l -> !ConsigneCodes.isConsigne(l.getProductCode(), companyId) && !l.isConsigne()
                                    && catId.equals(resolveCategoryId(l.getCategoryId(), l.getProductCode(), companyId)))
                            .map(l -> l.getQuantity() != null ? l.getQuantity() : ZERO)
                            .reduce(ZERO, BigDecimal::add);
                    if (totalQty.compareTo(ZERO) == 0) return ZERO;
                    BigDecimal montantTTC = computeRemiseTTCUnit(r.getMontantFixe(), r.getTypeRemise(), tauxPrecompte);
                    return totalQty.multiply(montantTTC).setScale(2, RoundingMode.HALF_UP);
                })
                .reduce(ZERO, BigDecimal::add);
    }

    /**
     * Remise TTC par unité :
     * - brasserie : montantFixe × (1 + tauxPrecompte/100)
     * - guinness  : montantFixe (pas de précompte)
     */
    private static final BigDecimal TAUX_TVA = BigDecimal.valueOf(0.1925);

    private BigDecimal computeRemiseTTCUnit(BigDecimal montantFixe, String type, BigDecimal tauxPrecompte) {
        if (montantFixe == null) return ZERO;
        if ("brasserie".equals(type)) {
            // Odoo: montant_fixe × (1 + taux_precompte + 0.1925)
            BigDecimal pcRate = tauxPrecompte.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP);
            BigDecimal coeff = BigDecimal.ONE.add(pcRate).add(TAUX_TVA);
            return montantFixe.multiply(coeff).setScale(2, RoundingMode.HALF_UP);
        } else {
            // guinness : pas de précompte ni TVA ajoutée
            return montantFixe.setScale(2, RoundingMode.HALF_UP);
        }
    }

    private Long resolveCategoryId(Long categoryId, String productCode, Long companyId) {
        if (categoryId != null) return categoryId;
        if (productCode != null && !productCode.isBlank() && companyId != null) {
            return productRepo.findFirstByDefaultCodeAndCompanyId(productCode, companyId)
                    .map(com.erp.stock.entity.Product::getCategoryId)
                    .orElse(null);
        }
        return null;
    }

    public BigDecimal getPartnerPurchasePrecompteTaux(Long partnerId, Long companyId) {
        com.erp.accounting.entity.Partner p = partnerRepo.findById(partnerId).orElse(null);
        if (p != null && p.getTauxPrecompte() != null) return p.getTauxPrecompte();
        return precompteRepo.findByPartnerIdAndTypePrecompteAndCompanyIdAndActiveTrue(partnerId, "purchase", companyId)
                .map(com.erp.common.entity.Precompte::getTauxPrecompte).orElse(ZERO);
    }

    private List<PurchaseInvoiceDTO.RemiseDetailDTO> buildRemiseDetails(PurchaseInvoice invoice) {
        if (invoice.getPartner() == null || invoice.getCompany() == null) return java.util.List.of();
        Long partnerId = invoice.getPartner().getId();
        Long companyId = invoice.getCompany().getId();
        BigDecimal tauxPrecompte = getPartnerPurchasePrecompteTaux(partnerId, companyId);
        return remiseRepo.findByPartnerIdAndCompanyIdAndActiveTrue(partnerId, companyId)
                .stream()
                .map(r -> {
                    if (r.getMontantFixe() == null) return null;
                    Long catId = r.getCategory().getId();
                    BigDecimal totalQty = invoice.getLines().stream()
                            .filter(l -> !ConsigneCodes.isConsigne(l.getProductCode(), companyId) && !l.isConsigne()
                                    && catId.equals(resolveCategoryId(l.getCategoryId(), l.getProductCode(), companyId)))
                            .map(l -> l.getQuantity() != null ? l.getQuantity() : ZERO)
                            .reduce(ZERO, BigDecimal::add);
                    if (totalQty.compareTo(ZERO) == 0) return null;
                    BigDecimal montantUnit = computeRemiseTTCUnit(r.getMontantFixe(), r.getTypeRemise(), tauxPrecompte);
                    return PurchaseInvoiceDTO.RemiseDetailDTO.builder()
                            .categoryName(r.getCategory().getName())
                            .quantite(totalQty)
                            .montantUnitaire(montantUnit)
                            .montantTotal(totalQty.multiply(montantUnit).setScale(2, RoundingMode.HALF_UP))
                            .typeRemise(r.getTypeRemise())
                            .build();
                })
                .filter(java.util.Objects::nonNull)
                .collect(Collectors.toList());
    }

    // ===================== DTO MAPPING =====================

    private PurchaseOrderDTO toOrderDTO(PurchaseOrder order) {
        return toOrderDTO(order, null, null, null);
    }

    /**
     * Variante liste : pickingById/invoiceById/receptionWhCache préchargés une seule fois pour
     * toute la liste (getAllOrders) au lieu d'un findById par commande. Passer null partout
     * reproduit exactement le comportement d'origine (appel sur une commande unique).
     */
    private PurchaseOrderDTO toOrderDTO(PurchaseOrder order, Map<Long, StockPicking> pickingById,
            Map<Long, PurchaseInvoice> invoiceById, Map<String, String> receptionWhCache) {
        String pickingName  = null;
        String pickingState = null;
        if (order.getPickingId() != null) {
            StockPicking picking = pickingById != null
                    ? pickingById.get(order.getPickingId())
                    : pickingRepo.findById(order.getPickingId()).orElse(null);
            if (picking != null) {
                pickingName  = picking.getName();
                pickingState = picking.getState();
            }
        }

        String invoiceName  = null;
        String invoiceState = null;
        if (order.getInvoiceId() != null) {
            PurchaseInvoice inv = invoiceById != null
                    ? invoiceById.get(order.getInvoiceId())
                    : invoiceRepo.findById(order.getInvoiceId()).orElse(null);
            if (inv != null) {
                invoiceName  = inv.getName();
                invoiceState = inv.getState();
            }
        }

        List<PurchaseOrderDTO.LineDTO> lineDTOs = order.getLines().stream()
                .map(l -> PurchaseOrderDTO.LineDTO.builder()
                        .id(l.getId())
                        .productId(l.getProductId())
                        .productCode(l.getProductCode())
                        .description(l.getDescription())
                        .quantity(l.getQuantity())
                        .prixUnitaire(l.getPrixUnitaire())
                        .tauxTVA(l.getTauxTVA())
                        .accountCode(l.getAccountCode())
                        .montantHT(l.getMontantHT())
                        .montantTVA(l.getMontantTVA())
                        .montantTTC(l.getMontantTTC())
                        .build())
                .collect(Collectors.toList());

        Long orderCompanyId = order.getCompany() != null ? order.getCompany().getId() : null;

        return PurchaseOrderDTO.builder()
                .id(order.getId())
                .name(order.getName())
                .date(order.getDate())
                .dateExpected(order.getDateExpected())
                .state(order.getState())
                .notes(order.getNotes())
                .partnerId(order.getPartner() != null ? order.getPartner().getId() : null)
                .partnerName(order.getPartner() != null ? order.getPartner().getName() : null)
                .companyId(order.getCompany() != null ? order.getCompany().getId() : null)
                .lines(lineDTOs)
                .totalHT(order.getTotalHT())
                .totalTVA(order.getTotalTVA())
                .totalTTC(order.getTotalTTC())
                .pickingId(order.getPickingId())
                .pickingName(pickingName)
                .pickingState(pickingState)
                .invoiceId(order.getInvoiceId())
                .invoiceName(invoiceName)
                .invoiceState(invoiceState)
                .receptionWarehouseName(receptionWhCache != null
                        ? receptionWhCache.computeIfAbsent(orderCompanyId + ":" + order.getWarehouseId(),
                            k -> resolveReceptionWarehouseName(orderCompanyId, order.getWarehouseId()))
                        : resolveReceptionWarehouseName(orderCompanyId, order.getWarehouseId()))
                .createdAt(order.getCreatedAt())
                .build();
    }

    /**
     * "full" : les écritures principales de la facture ont été extournées (via
     * reverseInvoiceEntries(), qui extourne dans la foulée tous les paiements restants).
     * "partial" : aucune extourne globale n'a eu lieu, mais au moins un paiement a été extourné
     * individuellement (reversePayment()) sans que les autres/l'écriture principale le soient.
     * "none" : rien n'a été extourné.
     */
    private String computeReversalStatus(PurchaseInvoice invoice) {
        if (invoice.getEntriesReversedAt() != null) return "full";
        boolean anyPaymentReversed = invoice.getPayments().stream()
                .anyMatch(p -> "reversed".equals(p.getState()));
        return anyPaymentReversed ? "partial" : "none";
    }

    /** Republie l'état courant de la facture (état, montant payé/dû) vers le Hub après toute
     *  opération qui le modifie sans passer par postInvoice (création/annulation d'avoir,
     *  compensation d'avoir) — sinon le Hub garde un état figé à sa dernière publication. */
    private void republishInvoiceSync(PurchaseInvoice invoice) {
        syncEventPublisher.publish(SyncEventType.PURCHASE_INVOICE_POSTED, String.valueOf(invoice.getId()),
                toInvoiceDTOWithPayments(invoice));
    }

    private PurchaseInvoiceDTO toInvoiceDTOWithPayments(PurchaseInvoice invoice) {
        return toInvoiceDTOWithPayments(invoice, null, null, null, null, null);
    }

    /**
     * Variante liste : catNamesPreloaded/pickingById/warehouseNameCache/receptionWhCache sont
     * construits une seule fois pour toute la liste (getAllInvoices/getAllAvoirs) au lieu d'un
     * findById ou d'un rechargement de toutes les catégories à chaque facture — même résultat,
     * juste sans requêtes répétées. Passer null partout reproduit exactement le comportement
     * d'origine (utilisé par les appels sur une facture unique).
     */
    private PurchaseInvoiceDTO toInvoiceDTOWithPayments(PurchaseInvoice invoice, Map<Long, String> catNamesPreloaded,
            Map<Long, StockPicking> pickingById, Map<Long, String> warehouseNameCache, Map<String, String> receptionWhCache) {
        return toInvoiceDTOWithPayments(invoice, catNamesPreloaded, pickingById, warehouseNameCache, receptionWhCache, null);
    }

    private PurchaseInvoiceDTO toInvoiceDTOWithPayments(PurchaseInvoice invoice, Map<Long, String> catNamesPreloaded,
            Map<Long, StockPicking> pickingById, Map<Long, String> warehouseNameCache, Map<String, String> receptionWhCache,
            Map<Long, BigDecimal[]> partnerBalanceCache) {
        Long companyId = invoice.getCompany() != null ? invoice.getCompany().getId() : null;

        // Résoudre le nom de l'entrepôt
        String warehouseName = null;
        if (invoice.getWarehouseId() != null) {
            warehouseName = warehouseNameCache != null
                    ? warehouseNameCache.computeIfAbsent(invoice.getWarehouseId(),
                        id -> warehouseRepo.findById(id).map(Warehouse::getName).orElse(null))
                    : warehouseRepo.findById(invoice.getWarehouseId()).map(Warehouse::getName).orElse(null);
        }

        // Solde du partenaire — mis en cache par partenaire (pas par facture) quand un cache est
        // fourni : sur une liste de factures, plusieurs lignes partagent souvent le même fournisseur,
        // et ces deux agrégats coûteux n'ont besoin d'être calculés qu'une fois par partenaire
        // distinct plutôt qu'une fois par facture (cf. SalesService.buildInvoiceDTO, même correctif).
        BigDecimal partnerBalance = BigDecimal.ZERO;
        BigDecimal partnerCreditDisponible = BigDecimal.ZERO;
        if (invoice.getPartner() != null && companyId != null) {
            Long partnerId = invoice.getPartner().getId();
            if (partnerBalanceCache != null) {
                BigDecimal[] cached = partnerBalanceCache.computeIfAbsent(partnerId, pid -> new BigDecimal[]{
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

        List<PurchaseInvoiceDTO.LineDTO> lineDTOs = invoice.getLines().stream()
                .map(l -> PurchaseInvoiceDTO.LineDTO.builder()
                        .id(l.getId())
                        .productId(l.getProductId())
                        .productCode(l.getProductCode())
                        .description(l.getDescription())
                        .quantity(l.getQuantity())
                        .prixUnitaire(l.getPrixUnitaire())
                        .tauxTVA(l.getTauxTVA())
                        .accountCode(l.getAccountCode())
                        .categoryId(l.getCategoryId())
                        .montantHT(l.getMontantHT())
                        .montantTVA(l.getMontantTVA())
                        .montantTTC(l.getMontantTTC())
                        .precompte(l.getPrecompte())
                        .prixUnitaireTTC(l.getPrixUnitaireTTC())
                        .consigne(ConsigneCodes.isConsigne(l.getProductCode(), companyId))
                        .categoryName(l.getCategoryId() != null ? catNames.get(l.getCategoryId()) : null)
                        .rabaisUnitaire(l.getRabaisUnitaire())
                        .totalRabaisLigne(l.getTotalRabaisLigne())
                        .build())
                .collect(Collectors.toList());

        List<PurchaseInvoiceDTO.PaymentDTO> paymentDTOs = invoice.getPayments().stream()
                .map(this::toPaymentDTO)
                .collect(Collectors.toList());

        return PurchaseInvoiceDTO.builder()
                .id(invoice.getId())
                .name(invoice.getName())
                .date(invoice.getDate())
                .dateEcheance(invoice.getDateEcheance())
                .state(invoice.getState())
                .type(invoice.getType())
                .notes(invoice.getNotes())
                .partnerId(invoice.getPartner() != null ? invoice.getPartner().getId() : null)
                .partnerName(invoice.getPartner() != null ? invoice.getPartner().getName() : null)
                .journalId(invoice.getJournal() != null ? invoice.getJournal().getId() : null)
                .journalName(invoice.getJournal() != null ? invoice.getJournal().getName() : null)
                .companyId(invoice.getCompany() != null ? invoice.getCompany().getId() : null)
                .originalInvoiceId(invoice.getOriginalInvoice() != null ? invoice.getOriginalInvoice().getId() : null)
                .originalInvoiceName(invoice.getOriginalInvoice() != null ? invoice.getOriginalInvoice().getName() : null)
                .purchaseOrderId(invoice.getPurchaseOrder() != null ? invoice.getPurchaseOrder().getId() : null)
                .purchaseOrderName(invoice.getPurchaseOrder() != null ? invoice.getPurchaseOrder().getName() : null)
                .accountMoveId(invoice.getAccountMove() != null ? invoice.getAccountMove().getId() : null)
                .accountMoveName(invoice.getAccountMove() != null ? invoice.getAccountMove().getName() : null)
                .reversalStatus(computeReversalStatus(invoice))
                .entriesReversedAt(invoice.getEntriesReversedAt())
                .pickingId(invoice.getPickingId())
                .pickingState(invoice.getPickingId() != null
                        ? (pickingById != null
                            ? Optional.ofNullable(pickingById.get(invoice.getPickingId())).map(StockPicking::getState).orElse(null)
                            : pickingRepo.findById(invoice.getPickingId()).map(p -> p.getState()).orElse(null))
                        : null)
                .warehouseId(invoice.getWarehouseId())
                .warehouseName(warehouseName)
                .receptionWarehouseName(receptionWhCache != null
                        ? receptionWhCache.computeIfAbsent(companyId + ":" + invoice.getWarehouseId(),
                            k -> resolveReceptionWarehouseName(companyId, invoice.getWarehouseId()))
                        : resolveReceptionWarehouseName(companyId, invoice.getWarehouseId()))
                .partnerBalance(partnerBalance)
                .totalHT(invoice.getTotalHT())
                .totalTVA(invoice.getTotalTVA())
                .totalTTC(invoice.getTotalTTC())
                .montantPaye(invoice.getMontantPaye())
                .montantDu(invoice.getMontantDu())
                .totalRemise(invoice.getTotalRemise())
                .totalPrecompte(invoice.getTotalPrecompte())
                .totalLiquideNu(invoice.getTotalLiquideNu())
                .netAPayer(invoice.getNetAPayer())
                .totalRabaisHT(invoice.getTotalRabaisHT())
                .lines(lineDTOs)
                .remiseDetails(buildRemiseDetails(invoice))
                .payments(paymentDTOs)
                .createdAt(invoice.getCreatedAt())
                .createdBy(invoice.getCreatedBy())
                .updatedBy(invoice.getUpdatedBy())
                .updatedAt(invoice.getUpdatedAt())
                .build();
    }

    private PurchaseInvoiceDTO.PaymentDTO toPaymentDTO(PurchaseInvoicePayment p) {
        return PurchaseInvoiceDTO.PaymentDTO.builder()
                .id(p.getId())
                .name(p.getName())
                .date(p.getDate())
                .amount(p.getAmount())
                .memo(p.getMemo())
                .state(p.getState())
                .journalId(p.getJournal() != null ? p.getJournal().getId() : null)
                .journalName(p.getJournal() != null ? p.getJournal().getName() : null)
                .invoiceId(p.getInvoice() != null ? p.getInvoice().getId() : null)
                .invoiceName(p.getInvoice() != null ? p.getInvoice().getName() : null)
                .partnerId(p.getInvoice() != null && p.getInvoice().getPartner() != null ? p.getInvoice().getPartner().getId() : null)
                .partnerName(p.getInvoice() != null && p.getInvoice().getPartner() != null ? p.getInvoice().getPartner().getName() : null)
                .build();
    }

    public PurchaseInvoiceDTO.PaymentDTO reversePayment(Long paymentId) {
        PurchaseInvoicePayment payment = paymentRepo.findById(paymentId)
                .orElseThrow(() -> new EntityNotFoundException("Paiement introuvable"));
        tenantGuard.check(payment.getCompany() != null ? payment.getCompany().getId() : null);

        if ("reversed".equals(payment.getState())) {
            throw new IllegalStateException("Ce paiement a déjà été annulé");
        }

        AccountMove originalMove = payment.getAccountMove();
        if (originalMove == null && payment.getCreditNoteId() == null) {
            throw new IllegalStateException("Aucune écriture comptable liée à ce paiement");
        }

        Company company = payment.getCompany();
        AccountJournal journal = payment.getJournal();
        LocalDate date = LocalDate.now();
        fiscalLockGuard.assertPeriodOpen(company, payment.getDate() != null ? payment.getDate() : date);
        BigDecimal amount = payment.getAmount();

        if (originalMove != null) {
            String reverseName = payment.getName() + "-ANNUL";

            // Écriture inverse : lignes inversées (débit↔crédit)
            AccountMove reverseMove = AccountMove.builder()
                    .name(reverseName)
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
                    .collect(java.util.stream.Collectors.toList());
            reverseMove.setLines(new ArrayList<>(reverseLines));
            AccountMove savedReverseMove = moveRepo.save(reverseMove);
            syncEventPublisher.publish(SyncEventType.ACCOUNT_MOVE_FROM_PURCHASE_PAYMENT, String.valueOf(savedReverseMove.getId()),
                    buildMoveSyncPayload(savedReverseMove, "Extourne paiement fournisseur"));
            accountingService.updateDailyBalance(journal.getId(), company.getId(), date);
        } else {
            // Paiement de compensation (applyCreditToInvoice) : aucune écriture comptable à extourner,
            // mais le montant consommé sur l'avoir doit être restitué sous peine de perte silencieuse du crédit.
            PurchaseInvoice creditNote = invoiceRepo.findById(payment.getCreditNoteId()).orElse(null);
            if (creditNote != null) {
                BigDecimal restored = amount != null ? amount : ZERO;
                BigDecimal newCreditPaye = (creditNote.getMontantPaye() != null ? creditNote.getMontantPaye() : ZERO)
                        .subtract(restored).max(ZERO);
                creditNote.setMontantPaye(newCreditPaye);
                BigDecimal creditNetAPayer = creditNote.getNetAPayer() != null ? creditNote.getNetAPayer() : ZERO;
                creditNote.setMontantDu(creditNetAPayer.subtract(newCreditPaye).max(ZERO));
                if (creditNote.getMontantDu().compareTo(ZERO) > 0 && "paid".equals(creditNote.getState())) {
                    creditNote.setState("posted");
                }
                invoiceRepo.save(creditNote);
                republishInvoiceSync(creditNote);
            }
        }

        payment.setState("reversed");
        paymentRepo.save(payment);

        // Recalculer les totaux de la facture
        PurchaseInvoice invoice = payment.getInvoice();
        BigDecimal totalPaye = paymentRepo.sumPostedPaymentsByInvoice(invoice.getId());
        invoice.setMontantPaye(totalPaye);
        BigDecimal du = (invoice.getNetAPayer() != null ? invoice.getNetAPayer() : ZERO).subtract(totalPaye);
        invoice.setMontantDu(du.max(ZERO));
        if (du.compareTo(ZERO) > 0 && "paid".equals(invoice.getState())) {
            invoice.setState("posted");
        }
        invoiceRepo.save(invoice);
        syncEventPublisher.publish(SyncEventType.PURCHASE_INVOICE_POSTED, String.valueOf(invoice.getId()),
                toInvoiceDTOWithPayments(invoice));

        PurchaseInvoiceDTO.PaymentDTO reversedPayment = toPaymentDTO(payment);
        auditService.log("PURCHASE_INVOICE", invoice.getId(), invoice.getName(),
                "PAYMENT_REVERSED", "Paiement annulé",
                AuditService.details(java.util.Map.of("montant", amount.toPlainString())),
                company.getId());
        syncEventPublisher.publish(SyncEventType.PURCHASE_PAYMENT_REVERSED, String.valueOf(payment.getId()), reversedPayment);
        return reversedPayment;
    }

    // ===================== GENERATORS =====================

    /** Retourne ZERO si le produit (par id ou code) est exempté de TVA à l'achat, sinon retourne tauxTVA tel quel. */
    private BigDecimal resolveExemptTvaAchat(BigDecimal tauxTVA, Long productId, String productCode, Long companyId) {
        Product prod = resolveProduct(productId, productCode, companyId).orElse(null);
        return (prod != null && Boolean.TRUE.equals(prod.getExemptTvaAchat())) ? ZERO : tauxTVA;
    }

    /**
     * Rapproche une ligne de facture/commande d'achat à son produit, par id en priorité (fiable même
     * si l'article n'a pas de référence interne renseignée), avec repli sur le code (référence
     * interne) pour les enregistrements historiques qui n'ont pas encore de productId.
     *
     * Avant l'ajout de productId sur PurchaseInvoiceLine, ce rapprochement se faisait uniquement par
     * productCode : un article sans référence interne (fréquent pour les articles vendus en vrac —
     * kg, L, sac…) faisait échouer silencieusement la réception de stock à la validation de la
     * facture, alors que l'écriture comptable de variation de stock se postait normalement.
     */
    private Optional<Product> resolveProduct(Long productId, String productCode, Long companyId) {
        if (productId != null) {
            Optional<Product> byId = productRepo.findById(productId);
            if (byId.isPresent()) return byId;
        }
        if (productCode != null && !productCode.isBlank() && companyId != null) {
            return productRepo.findFirstByDefaultCodeAndCompanyId(productCode, companyId);
        }
        return Optional.empty();
    }

    private void buildOrderLines(PurchaseOrder order, List<PurchaseOrderRequest.LineRequest> reqs) {
        if (reqs == null) return;
        Long companyId = order.getCompany() != null ? order.getCompany().getId() : null;
        for (PurchaseOrderRequest.LineRequest req : reqs) {
            BigDecimal qty = req.getQuantity() != null ? req.getQuantity() : ZERO;
            BigDecimal pu  = req.getPrixUnitaire() != null ? req.getPrixUnitaire() : ZERO;
            BigDecimal tva = req.getTauxTVA() != null ? req.getTauxTVA() : ZERO;
            // Respecter le flag exemptTvaAchat du produit — priorité sur ce que le frontend envoie
            tva = resolveExemptTvaAchat(tva, req.getProductId(), req.getProductCode(), companyId);

            BigDecimal montantHT  = qty.multiply(pu).setScale(2, RoundingMode.HALF_UP);
            BigDecimal montantTVA = montantHT.multiply(tva).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
            BigDecimal montantTTC = montantHT.add(montantTVA);

            String productCode = req.getProductCode();
            if (productCode == null && req.getProductId() != null) {
                productCode = productRepo.findById(req.getProductId()).map(Product::getDefaultCode).orElse(null);
            }

            PurchaseOrderLine line = PurchaseOrderLine.builder()
                    .order(order)
                    .productId(req.getProductId())
                    .productCode(productCode)
                    .description(req.getDescription())
                    .quantity(qty)
                    .prixUnitaire(pu)
                    .categoryId(req.getCategoryId())
                    .consigne(ConsigneCodes.isConsigne(productCode, companyId))
                    .tauxTVA(tva)
                    .accountCode(req.getAccountCode())
                    .montantHT(montantHT)
                    .montantTVA(montantTVA)
                    .montantTTC(montantTTC)
                    .build();
            order.getLines().add(line);
        }
    }

    private void computeOrderTotals(PurchaseOrder order) {
        BigDecimal ht  = order.getLines().stream()
                .map(l -> l.getMontantHT() != null ? l.getMontantHT() : ZERO)
                .reduce(ZERO, BigDecimal::add);
        BigDecimal tva = order.getLines().stream()
                .map(l -> l.getMontantTVA() != null ? l.getMontantTVA() : ZERO)
                .reduce(ZERO, BigDecimal::add);
        order.setTotalHT(ht);
        order.setTotalTVA(tva);
        order.setTotalTTC(ht.add(tva));
    }

    private String generateOrderName(Long companyId, LocalDate date) {
        // cf. SalesService : verrou pessimiste sur la société, sérialise ce générateur jusqu'au
        // commit de la transaction appelante pour éviter que deux requêtes concurrentes lisent le
        // même max avant qu'aucune n'ait écrit.
        companyRepo.findByIdForUpdate(companyId);
        int year = date.getYear();
        Integer max = orderRepo.findMaxSequenceByCompanyAndYear(companyId, year);
        int next = (max != null ? max : 0) + 1;
        return String.format("AC-%d-%05d", year, next);
    }

    private String generateInvoiceName(Long companyId, LocalDate date) {
        companyRepo.findByIdForUpdate(companyId);
        int year = date.getYear();
        Integer max = invoiceRepo.findMaxSequenceByCompanyTypeAndYear(companyId, "invoice", year);
        int next = (max != null ? max : 0) + 1;
        return String.format("FAF-%d-%05d", year, next);
    }

    private String generateAvoirName(Long companyId, LocalDate date) {
        companyRepo.findByIdForUpdate(companyId);
        int year = date.getYear();
        Integer max = invoiceRepo.findMaxSequenceByCompanyTypeAndYear(companyId, "credit_note", year);
        int next = (max != null ? max : 0) + 1;
        return String.format("AVF-%d-%05d", year, next);
    }

    private String generatePaymentName(Long companyId, LocalDate date) {
        companyRepo.findByIdForUpdate(companyId);
        int year = date.getYear();
        Integer max = paymentRepo.findMaxSequenceByCompanyAndYear(companyId, year);
        int next = (max != null ? max : 0) + 1;
        return String.format("PAY-F-%d-%05d", year, next);
    }

    private String generatePickingName(StockPickingType pt, Long companyId) {
        companyRepo.findByIdForUpdate(companyId);
        String prefix = pt.getSequencePrefix() != null ? pt.getSequencePrefix() : "WH/IN/";
        long count = pickingRepo.countByPickingTypeId(pt.getId());
        return String.format("%s%05d", prefix, count + 1);
    }

    // ===================== LETTRAGE FACTURES ACHATS =====================

    @Transactional(readOnly = true)
    public List<PurchaseAvailableMoveDTO> getAvailableMovesForPurchaseReconciliation(Long invoiceId, Long companyId) {
        PurchaseInvoice invoice = invoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new jakarta.persistence.EntityNotFoundException("Facture achat introuvable: " + invoiceId));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);
        if (invoice.getPartner() == null) return List.of();

        Long partnerId = invoice.getPartner().getId();
        List<com.erp.accounting.entity.AccountMoveLine> supplierLines =
                moveLineRepo.findPostedPayableDebitLinesForPartner(partnerId, companyId);

        // Exclure les AccountMoves déjà utilisés comme paiements directs d'autres factures
        java.util.Set<Long> usedByDirectPayments = paymentRepo.findAccountMoveIdsByPartner(partnerId);

        List<PurchaseAvailableMoveDTO> result = new ArrayList<>();
        for (com.erp.accounting.entity.AccountMoveLine line : supplierLines) {
            com.erp.accounting.entity.AccountMove move = line.getMove();
            if (usedByDirectPayments.contains(move.getId())) continue;
            BigDecimal montantTotal = line.getDebit();
            BigDecimal montantLettre = reconciliationRepo.sumReconciledByMove(move.getId());
            BigDecimal disponible = montantTotal.subtract(montantLettre);
            if (disponible.compareTo(BigDecimal.ZERO) > 0) {
                result.add(PurchaseAvailableMoveDTO.builder()
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
    public List<PurchaseInvoiceReconciliationDTO> getPurchaseReconciliations(Long invoiceId) {
        return reconciliationRepo.findByInvoiceIdOrderByDateDesc(invoiceId)
                .stream().map(this::toReconciliationDTO).collect(Collectors.toList());
    }

    public PurchaseInvoiceReconciliationDTO reconcilePurchaseInvoice(Long invoiceId, PurchaseReconcileRequest req) {
        PurchaseInvoice invoice = invoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new jakarta.persistence.EntityNotFoundException("Facture achat introuvable: " + invoiceId));
        tenantGuard.check(invoice.getCompany() != null ? invoice.getCompany().getId() : null);
        if (!"posted".equals(invoice.getState()) && !"paid".equals(invoice.getState())
                && !"partiellement_extournee".equals(invoice.getState()))
            throw new IllegalStateException("La facture doit être validée pour être lettrée");
        BigDecimal montantDu = invoice.getMontantDu() != null ? invoice.getMontantDu() : BigDecimal.ZERO;
        if (req.getAmount().compareTo(BigDecimal.ZERO) <= 0)
            throw new IllegalArgumentException("Le montant de lettrage doit être positif");
        if (req.getAmount().compareTo(montantDu) > 0)
            throw new IllegalArgumentException("Le montant dépasse le montant dû (" + montantDu + ")");

        com.erp.accounting.entity.AccountMove move = moveRepo.findById(req.getAccountMoveId())
                .orElseThrow(() -> new jakarta.persistence.EntityNotFoundException("Écriture introuvable: " + req.getAccountMoveId()));
        // Le move réconcilié agit comme preuve de règlement pour CETTE facture : accepter un move
        // d'une autre société permettrait de solder frauduleusement une facture avec l'écriture
        // d'un tiers — l'appartenance compte ici, contrairement à un simple attach de référence.
        tenantGuard.check(move.getCompany() != null ? move.getCompany().getId() : null);
        if (!"posted".equals(move.getState()))
            throw new IllegalStateException("L'écriture doit être validée");

        BigDecimal deja = reconciliationRepo.sumReconciledByMove(move.getId());
        BigDecimal totalLigneFournisseur = moveLineRepo.sumPayableDebitForPartnerAndMove(
                invoice.getPartner().getId(), move.getId());
        BigDecimal disponible = totalLigneFournisseur.subtract(deja);
        if (req.getAmount().compareTo(disponible) > 0)
            throw new IllegalArgumentException("Le montant dépasse le disponible sur ce paiement (" + disponible + ")");

        PurchaseInvoiceReconciliation rec = PurchaseInvoiceReconciliation.builder()
                .invoice(invoice)
                .accountMove(move)
                .amount(req.getAmount())
                .date(req.getDate() != null ? req.getDate() : LocalDate.now())
                .build();
        reconciliationRepo.save(rec);

        BigDecimal newPaye = (invoice.getMontantPaye() != null ? invoice.getMontantPaye() : BigDecimal.ZERO).add(req.getAmount());
        BigDecimal newDu = montantDu.subtract(req.getAmount());
        invoice.setMontantPaye(newPaye);
        invoice.setMontantDu(newDu);
        if (newDu.compareTo(BigDecimal.ZERO) <= 0) invoice.setState("paid");
        invoiceRepo.save(invoice);
        syncEventPublisher.publish(SyncEventType.PURCHASE_INVOICE_POSTED, String.valueOf(invoice.getId()),
                toInvoiceDTOWithPayments(invoice));

        auditService.log("PURCHASE_INVOICE", invoice.getId(), invoice.getName(),
                "RECONCILED", "Lettrage enregistré",
                AuditService.details(java.util.Map.of("montant", req.getAmount().toPlainString(), "pièce", move.getName())),
                invoice.getCompany().getId());
        return toReconciliationDTO(rec);
    }

    public void unreconcilePurchaseInvoice(Long reconciliationId) {
        PurchaseInvoiceReconciliation rec = reconciliationRepo.findById(reconciliationId)
                .orElseThrow(() -> new jakarta.persistence.EntityNotFoundException("Lettrage introuvable: " + reconciliationId));
        PurchaseInvoice invoice = rec.getInvoice();
        tenantGuard.check(invoice != null && invoice.getCompany() != null ? invoice.getCompany().getId() : null);

        BigDecimal newPaye = (invoice.getMontantPaye() != null ? invoice.getMontantPaye() : BigDecimal.ZERO).subtract(rec.getAmount());
        BigDecimal newDu = (invoice.getMontantDu() != null ? invoice.getMontantDu() : BigDecimal.ZERO).add(rec.getAmount());
        invoice.setMontantPaye(newPaye.max(BigDecimal.ZERO));
        invoice.setMontantDu(newDu);
        if ("paid".equals(invoice.getState())) invoice.setState("posted");
        invoiceRepo.save(invoice);
        syncEventPublisher.publish(SyncEventType.PURCHASE_INVOICE_POSTED, String.valueOf(invoice.getId()),
                toInvoiceDTOWithPayments(invoice));
        reconciliationRepo.delete(rec);
        auditService.log("PURCHASE_INVOICE", invoice.getId(), invoice.getName(),
                "UNRECONCILED", "Lettrage supprimé",
                AuditService.details(java.util.Map.of("montant", rec.getAmount().toPlainString())),
                invoice.getCompany().getId());
    }

    private PurchaseInvoiceReconciliationDTO toReconciliationDTO(PurchaseInvoiceReconciliation r) {
        com.erp.accounting.entity.AccountMove move = r.getAccountMove();
        return PurchaseInvoiceReconciliationDTO.builder()
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

    private Map<String, Object> buildMoveSyncPayload(AccountMove m, String context) {
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

    private AccountAccount findOrCreatePurchaseAccount(String code, String name, Long companyId, Company company) {
        return accountRepo.findFirstByCodeAndCompanyId(code, companyId)
                .orElseGet(() -> accountRepo.save(AccountAccount.builder()
                        .code(code).name(name).accountType("expense")
                        .internalType("other").deprecated(false).reconcile(false)
                        .company(company).build()));
    }

    // ===================== PRIX PRÉFÉRENTIELS FOURNISSEURS =====================

    public List<PrixFournisseurArticleDTO> getPrixFournisseurByFournisseur(Long fournisseurId, Long companyId) {
        return prixFournisseurArticleRepo
                .findByFournisseurIdAndCompanyIdOrderByProductId(fournisseurId, companyId)
                .stream().map(this::toPrixFournisseurDTO).collect(Collectors.toList());
    }

    public PrixFournisseurArticleDTO getPrixFournisseurForProduct(Long productId, Long fournisseurId, Long companyId) {
        return prixFournisseurArticleRepo
                .findByProductIdAndFournisseurIdAndCompanyId(productId, fournisseurId, companyId)
                .map(this::toPrixFournisseurDTO)
                .orElse(null);
    }

    public List<PrixFournisseurArticleDTO> getPrixFournisseurByProduct(Long productId, Long companyId) {
        return prixFournisseurArticleRepo
                .findByProductIdAndCompanyId(productId, companyId)
                .stream().map(this::toPrixFournisseurDTO).collect(Collectors.toList());
    }

    public PrixFournisseurArticleDTO savePrixFournisseur(PrixFournisseurArticleDTO dto) {
        // companyId vient du corps de la requête (client) — ne jamais lui faire confiance pour
        // choisir SOUS QUELLE société le prix fournisseur est créé/modifié.
        Long companyId = com.erp.auth.SecurityUtils.currentCompanyId();
        PrixFournisseurArticle entity = prixFournisseurArticleRepo
                .findByProductIdAndFournisseurIdAndCompanyId(dto.getProductId(), dto.getFournisseurId(), companyId)
                .orElseGet(() -> PrixFournisseurArticle.builder()
                        .productId(dto.getProductId())
                        .fournisseurId(dto.getFournisseurId())
                        .companyId(companyId)
                        .build());
        entity.setPrixFournisseur(dto.getPrixFournisseur());
        return toPrixFournisseurDTO(prixFournisseurArticleRepo.save(entity));
    }

    public void deletePrixFournisseur(Long id) {
        prixFournisseurArticleRepo.deleteById(id);
    }

    private PrixFournisseurArticleDTO toPrixFournisseurDTO(PrixFournisseurArticle e) {
        com.erp.stock.entity.Product product = productRepo.findById(e.getProductId()).orElse(null);
        com.erp.accounting.entity.Partner partner = partnerRepo.findById(e.getFournisseurId()).orElse(null);
        BigDecimal standardPrice = product != null && product.getStandardPrice() != null
                ? product.getStandardPrice() : ZERO;
        BigDecimal ecart = e.getPrixFournisseur().subtract(standardPrice);
        return PrixFournisseurArticleDTO.builder()
                .id(e.getId())
                .productId(e.getProductId())
                .productCode(product != null ? product.getDefaultCode() : null)
                .productName(product != null ? product.getName() : null)
                .standardPrice(standardPrice)
                .fournisseurId(e.getFournisseurId())
                .fournisseurName(partner != null ? partner.getName() : null)
                .prixFournisseur(e.getPrixFournisseur())
                .ecartUnitaire(ecart)
                .companyId(e.getCompanyId())
                .build();
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
}

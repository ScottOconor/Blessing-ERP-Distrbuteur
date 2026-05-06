package com.erp.sales.service;

import com.erp.accounting.dto.PartnerDTO;
import com.erp.accounting.entity.*;
import com.erp.accounting.repository.*;
import com.erp.common.ConsigneCodes;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.common.repository.EnlevementClientRepository;
import com.erp.common.repository.EnlevementRepository;
import com.erp.common.repository.PrecompteRepository;
import com.erp.sales.repository.RistourneRepository;
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
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class SalesService {

    private final SalesOrderRepository orderRepo;
    private final SalesInvoiceRepository invoiceRepo;
    private final InvoicePaymentRepository paymentRepo;

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

    private static final BigDecimal ZERO = BigDecimal.ZERO;
    private static final String DEFAULT_REVENUE_ACCOUNT    = "7011";
    private static final String DEFAULT_RECEIVABLE_ACCOUNT = "4111";
    private static final String TVA_ACCOUNT                = "4431";
    private static final String ENLEVEMENT_ACCOUNT         = "7015";
    private static final String PSA_ACCOUNT                = "4412";
    private static final String CONSIGNE_ACCOUNT           = "4194";
    private static final String RISTOURNE_CREDIT_ACCOUNT   = "419800";
    private static final BigDecimal RISTOURNE_7019_FIXE    = new BigDecimal("201.00");
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

    // ===================== BONS DE COMMANDE =====================

    @Transactional(readOnly = true)
    public List<SalesOrderDTO> getAllOrders(Long companyId) {
        return orderRepo.findByCompanyIdOrderByDateDescNameDesc(companyId)
                .stream().map(this::toOrderDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public SalesOrderDTO getOrderById(Long id) {
        SalesOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Bon de commande introuvable: " + id));
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

        return toOrderDTO(orderRepo.save(order));
    }

    public SalesOrderDTO updateOrder(Long id, SalesOrderRequest req) {
        SalesOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Bon de commande introuvable: " + id));

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
        return toOrderDTO(orderRepo.save(order));
    }

    public SalesOrderDTO cancelOrder(Long id) {
        SalesOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Bon de commande introuvable: " + id));

        if ("invoiced".equals(order.getState())) {
            throw new IllegalStateException("Un bon déjà facturé ne peut pas être annulé");
        }
        order.setState("cancelled");
        return toOrderDTO(orderRepo.save(order));
    }

    // ===================== FACTURES =====================

    @Transactional(readOnly = true)
    public List<SalesInvoiceDTO> getAllInvoices(Long companyId) {
        return invoiceRepo.findByCompanyIdAndTypeOrderByDateDescNameDesc(companyId, "invoice")
                .stream().map(this::toInvoiceDTO).collect(Collectors.toList());
    }

    // ===================== AVOIRS =====================

    @Transactional(readOnly = true)
    public List<SalesInvoiceDTO> getAllAvoirs(Long companyId) {
        return invoiceRepo.findByCompanyIdAndTypeOrderByDateDescNameDesc(companyId, "credit_note")
                .stream().map(this::toInvoiceDTO).collect(Collectors.toList());
    }

    /**
     * Crée un avoir à partir d'une facture validée (copie les lignes en inversant le sens).
     */
    public SalesInvoiceDTO createAvoirFromInvoice(Long invoiceId) {
        SalesInvoice original = invoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + invoiceId));

        if (!"posted".equals(original.getState()) && !"paid".equals(original.getState())) {
            throw new IllegalStateException("Seules les factures validées peuvent faire l'objet d'un avoir");
        }
        if (!"invoice".equals(original.getType())) {
            throw new IllegalStateException("Impossible de créer un avoir sur un avoir");
        }

        LocalDate today = LocalDate.now();
        String avoirName = generateAvoirName(original.getCompany().getId(), today);

        SalesInvoice avoir = SalesInvoice.builder()
                .name(avoirName)
                .date(today)
                .state("draft")
                .type("credit_note")
                .originalInvoice(original)
                .notes("Avoir sur " + original.getName())
                .partner(original.getPartner())
                .journal(original.getJournal())
                .company(original.getCompany())
                .montantPaye(ZERO)
                .build();

        List<SalesInvoiceLine> avoirLines = original.getLines().stream()
                .map(ol -> SalesInvoiceLine.builder()
                        .invoice(avoir)
                        .productCode(ol.getProductCode())
                        .description(ol.getDescription())
                        .quantity(ol.getQuantity())
                        .prixUnitaire(ol.getPrixUnitaire())
                        .tauxRemise(ol.getTauxRemise())
                        .tauxTVA(ol.getTauxTVA())
                        .accountCode(ol.getAccountCode())
                        .montantHT(ol.getMontantHT())
                        .montantTVA(ol.getMontantTVA())
                        .montantTTC(ol.getMontantTTC())
                        .build())
                .collect(Collectors.toList());

        avoir.setLines(avoirLines);
        computeInvoiceTotals(avoir);

        return toInvoiceDTOWithPayments(invoiceRepo.save(avoir));
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

        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
    }

    public SalesInvoiceDTO updateInvoice(Long id, SalesInvoiceRequest req) {
        SalesInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));

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
     *   Cr 701500 (enlèvement)   = Total frais d'enlèvement
     *   Cr/Dr 419400 (emballages)= Signe selon quantité consigne
     *
     * Avoir (credit_note) — écritures inversées.
     */
    public SalesInvoiceDTO postInvoice(Long id) {
        SalesInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));

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
        Long companyId = invoice.getCompany().getId();
        LocalDate date = invoice.getDate();

        // ---- Trouver les comptes ----
        String receivableCode = (invoice.getPartner().getReceivableAccountCode() != null
                && !invoice.getPartner().getReceivableAccountCode().isBlank())
                ? invoice.getPartner().getReceivableAccountCode()
                : DEFAULT_RECEIVABLE_ACCOUNT;

        AccountAccount receivableAccount = accountRepo.findFirstByCodeAndCompanyId(receivableCode, companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("4111", companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("411",  companyId))
                .orElseThrow(() -> new EntityNotFoundException("Compte client introuvable : " + receivableCode));

        AccountAccount tvaAccount = accountRepo.findFirstByCodeAndCompanyId(TVA_ACCOUNT, companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("443100", companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("4431",   companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("443",    companyId))
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

        // 411100 : débit = net à payer (TTC + consignes net)
        BigDecimal debit411 = invoice.getNetAPayer() != null ? invoice.getNetAPayer() : ZERO;

        List<AccountMoveLine> moveLines = new ArrayList<>();

        // Ligne client 411100 : débit pour facture, crédit pour avoir
        moveLines.add(AccountMoveLine.builder()
                .move(move).account(receivableAccount).partner(invoice.getPartner())
                .name(libelle411).date(date)
                .debit(isAvoir ? ZERO : debit411)
                .credit(isAvoir ? debit411 : ZERO)
                .journal(invoice.getJournal()).company(invoice.getCompany())
                .build());

        // Comptes résolus une seule fois
        AccountAccount revenueAccount = accountRepo.findFirstByCodeAndCompanyId(DEFAULT_REVENUE_ACCOUNT, companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("701100", companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("701",    companyId))
                .orElseThrow(() -> new EntityNotFoundException("Compte de produit introuvable (7011/701)"));

        AccountAccount consigneAccount = accountRepo.findFirstByCodeAndCompanyId(CONSIGNE_ACCOUNT, companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("4194",  companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("419400", companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("419",   companyId))
                .orElse(null);

        // Lignes produits 701100 (non-consigne) et emballages 419400 (consigne, signe selon quantité)
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
                BigDecimal ht = line.getMontantHT() != null ? line.getMontantHT() : ZERO;
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
        BigDecimal totalPrecompte = invoice.getTotalPrecompte() != null ? invoice.getTotalPrecompte() : ZERO;
        if (totalPrecompte.compareTo(ZERO) != 0) {
            AccountAccount psaAccount = accountRepo.findFirstByCodeAndCompanyId(PSA_ACCOUNT, companyId)
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("4412",  companyId))
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("441200", companyId))
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
        BigDecimal totalTVA = invoice.getTotalTVA() != null ? invoice.getTotalTVA() : ZERO;
        if (totalTVA.compareTo(ZERO) != 0 && tvaAccount != null) {
            moveLines.add(AccountMoveLine.builder()
                    .move(move).account(tvaAccount).partner(invoice.getPartner())
                    .name((isAvoir ? "TVA avoir " : "TVA collectée - ") + invoice.getName()).date(date)
                    .debit(isAvoir ? totalTVA : ZERO)
                    .credit(isAvoir ? ZERO : totalTVA)
                    .journal(invoice.getJournal()).company(invoice.getCompany())
                    .build());
        }

        // Ligne frais d'enlèvement 701500 (total = base + surplus client)
        BigDecimal totalEnlevement = invoice.getFraisEnlevementTTC() != null ? invoice.getFraisEnlevementTTC() : ZERO;
        if (totalEnlevement.compareTo(ZERO) != 0) {
            AccountAccount enlAccount = accountRepo.findFirstByCodeAndCompanyId(ENLEVEMENT_ACCOUNT, companyId)
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("7015",  companyId))
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("701500", companyId))
                    .orElse(null);
            if (enlAccount != null) {
                moveLines.add(AccountMoveLine.builder()
                        .move(move).account(enlAccount).partner(invoice.getPartner())
                        .name("Frais d'enlèvement - " + invoice.getName()).date(date)
                        .debit(isAvoir ? totalEnlevement : ZERO)
                        .credit(isAvoir ? ZERO : totalEnlevement)
                        .journal(invoice.getJournal()).company(invoice.getCompany())
                        .build());
            }
        }

        move.setLines(moveLines);
        AccountMove savedMove = moveRepo.save(move);
        moveRepo.updateState(savedMove.getId(), "posted");

        // Lier l'écriture au document
        invoice.setAccountMove(savedMove);
        invoice.setState("posted");
        invoice.setMontantPaye(ZERO);
        invoice.setMontantDu(invoice.getNetAPayer());

        invoiceRepo.save(invoice);

        // Créer les mouvements de stock physiques
        createStockMovementsOnInvoicePost(invoice, isAvoir);

        // Écriture ristourne brasserie (BIERES 24/12, Alcools mixtes 12/24) — factures seulement
        if (!isAvoir) {
            generateRistourneEcriture(invoice, companyId);
        }

        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
    }

    /**
     * Annule une facture client (brouillon, validée ou payée).
     * Pour les factures validées/payées, cela ne crée PAS d'écriture inverse.
     * Utiliser reverseInvoiceEntries() pour extourner les écritures comptables.
     */
    public SalesInvoiceDTO setInvoiceWarehouse(Long invoiceId, Long warehouseId) {
        SalesInvoice invoice = invoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + invoiceId));
        if (!"draft".equals(invoice.getState())) {
            throw new IllegalStateException("L'entrepôt ne peut être modifié que sur un document en brouillon");
        }
        invoice.setWarehouseId(warehouseId);
        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
    }

    public SalesInvoiceDTO cancelInvoice(Long id) {
        SalesInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));

        if ("cancelled".equals(invoice.getState())) {
            throw new IllegalStateException("Cette facture est déjà annulée");
        }

        invoice.setState("cancelled");
        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
    }

    /**
     * Extourne les écritures comptables d'une facture client annulée (et de ses paiements).
     * À appeler manuellement après cancelInvoice().
     */
    public SalesInvoiceDTO reverseInvoiceEntries(Long id) {
        SalesInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));

        if (!"cancelled".equals(invoice.getState())) {
            throw new IllegalStateException("La facture doit être annulée avant d'inverser les écritures");
        }

        LocalDate today = LocalDate.now();

        // 1. Extourner l'écriture de la facture
        if (invoice.getAccountMove() != null && "posted".equals(invoice.getAccountMove().getState())) {
            createReversalMove(invoice.getAccountMove(), today);
        }

        // 2. Extourner les écritures de chaque paiement
        for (InvoicePayment payment : invoice.getPayments()) {
            if (payment.getAccountMove() != null && "posted".equals(payment.getAccountMove().getState())) {
                createReversalMove(payment.getAccountMove(), today);
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

    // ===================== PAIEMENTS =====================

    /**
     * Enregistre un paiement et génère l'écriture comptable :
     * Dr 521/571 (trésorerie) = montant
     * Cr 411x   (client)     = montant
     */
    public InvoicePaymentDTO createPayment(InvoicePaymentRequest req) {
        SalesInvoice invoice = invoiceRepo.findById(req.getInvoiceId())
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable"));

        if (!"posted".equals(invoice.getState()) && !"paid".equals(invoice.getState())) {
            throw new IllegalStateException("La facture doit être validée avant d'enregistrer un paiement");
        }

        AccountJournal journal = journalRepo.findById(req.getJournalId())
                .orElseThrow(() -> new EntityNotFoundException("Journal introuvable"));

        Company company = invoice.getCompany();
        LocalDate date = req.getDate() != null ? req.getDate() : LocalDate.now();
        BigDecimal amount = req.getAmount();

        // Compte trésorerie (débit) = compte par défaut du journal
        AccountAccount treasuryAccount = journal.getDefaultDebitAccount();
        if (treasuryAccount == null) {
            // Fallback: chercher un compte 521 ou 571
            treasuryAccount = accountRepo.findFirstByCodeAndCompanyId("521", company.getId())
                    .or(() -> accountRepo.findFirstByCodeAndCompanyId("571", company.getId()))
                    .orElseThrow(() -> new EntityNotFoundException("Compte de trésorerie introuvable (521/571)"));
        }

        // Compte client (crédit)
        String receivableCode = (invoice.getPartner().getReceivableAccountCode() != null
                && !invoice.getPartner().getReceivableAccountCode().isBlank())
                ? invoice.getPartner().getReceivableAccountCode()
                : DEFAULT_RECEIVABLE_ACCOUNT;

        AccountAccount receivableAccount = accountRepo.findFirstByCodeAndCompanyId(receivableCode, company.getId())
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("4111", company.getId()))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId("411",  company.getId()))
                .orElseThrow(() -> new EntityNotFoundException("Compte client introuvable : " + receivableCode));

        // ---- Créer l'écriture de paiement ----
        String paymentName = generatePaymentName(company.getId(), date);

        AccountMove move = AccountMove.builder()
                .name(paymentName)
                .date(date)
                .ref("Paiement " + invoice.getName())
                .state("posted")
                .journal(journal)
                .company(company)
                .partner(invoice.getPartner())
                .build();

        List<AccountMoveLine> lines = List.of(
                AccountMoveLine.builder()
                        .move(move)
                        .account(treasuryAccount)
                        .partner(invoice.getPartner())
                        .name("Paiement - " + invoice.getName())
                        .date(date)
                        .debit(amount)
                        .credit(ZERO)
                        .journal(journal)
                        .company(company)
                        .build(),
                AccountMoveLine.builder()
                        .move(move)
                        .account(receivableAccount)
                        .partner(invoice.getPartner())
                        .name("Paiement - " + invoice.getName())
                        .date(date)
                        .debit(ZERO)
                        .credit(amount)
                        .journal(journal)
                        .company(company)
                        .build()
        );
        move.setLines(new ArrayList<>(lines));
        AccountMove savedMove = moveRepo.save(move);

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

        // ---- Mettre à jour les totaux de la facture ----
        BigDecimal totalPaye = paymentRepo.sumPostedPaymentsByInvoice(invoice.getId());
        invoice.setMontantPaye(totalPaye);
        BigDecimal du = (invoice.getNetAPayer() != null ? invoice.getNetAPayer() : ZERO).subtract(totalPaye);
        invoice.setMontantDu(du.max(ZERO));

        if (du.compareTo(ZERO) <= 0) {
            invoice.setState("paid");
        }
        invoiceRepo.save(invoice);

        return toPaymentDTO(payment);
    }

    /**
     * Utilise les avoirs disponibles du client pour compenser partiellement ou totalement une facture.
     * Aucune écriture comptable n'est créée (les avoirs ont déjà Cr 411100 lors de leur validation).
     */
    @Transactional
    public SalesInvoiceDTO applyCreditToInvoice(Long invoiceId, java.math.BigDecimal amount, Long companyId) {
        SalesInvoice invoice = invoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable"));
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

        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
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
                .company(company)
                .build();

        return toPartnerDTO(partnerRepo.save(partner));
    }

    public PartnerDTO updateClient(Long id, PartnerDTO dto) {
        Partner partner = partnerRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Client introuvable: " + id));

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

        return toPartnerDTO(partnerRepo.save(partner));
    }

    public void deleteClient(Long id) {
        Partner partner = partnerRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Client introuvable: " + id));
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
            boolean isConsigne = ConsigneCodes.isConsigne(ol.getProductCode());
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
            BigDecimal puttc = (ol.getPrixUnitaire() != null ? ol.getPrixUnitaire() : ZERO)
                    .multiply(BigDecimal.ONE.add(tva.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP)))
                    .setScale(4, RoundingMode.HALF_UP);

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
                    .categoryId(ol.getCategoryId())
                    .consigne(isConsigne)
                    .montantHT(ht)
                    .montantTVA(ol.getMontantTVA() != null ? ol.getMontantTVA() : ZERO)
                    .montantTTC(ol.getMontantTTC() != null ? ol.getMontantTTC() : ZERO)
                    .precompte(pc)
                    .fraisEnlevement(enl)
                    .prixUnitaireTTC(puttc)
                    .build());
        }

        invoice.setLines(invoiceLines);
        computeInvoiceTotals(invoice);
        invoiceRepo.save(invoice);
    }

    private void validateStockAvailability(SalesOrder order) {
        Long companyId = order.getCompany().getId();
        for (SalesOrderLine line : order.getLines()) {
            if (line.getProductId() == null) continue;
            var productOpt = stockProductRepo.findById(line.getProductId());
            if (productOpt.isEmpty()) continue;
            var product = productOpt.get();
            if ("service".equals(product.getType())) continue;
            BigDecimal totalQty = stockQuantRepo.findByProductIdAndCompanyId(line.getProductId(), companyId)
                    .stream().map(StockQuant::getQuantity).reduce(ZERO, BigDecimal::add);
            BigDecimal reserved = stockQuantRepo.findByProductIdAndCompanyId(line.getProductId(), companyId)
                    .stream().map(StockQuant::getReservedQuantity).reduce(ZERO, BigDecimal::add);
            BigDecimal available = totalQty.subtract(reserved);
            if (line.getQuantity() != null && line.getQuantity().compareTo(available) > 0) {
                throw new IllegalStateException(
                    "Stock insuffisant pour \"" + product.getName() + "\": " +
                    available.setScale(0, RoundingMode.HALF_UP) + " disponible(s) (dont " +
                    reserved.setScale(0, RoundingMode.HALF_UP) + " réservé(s)), " +
                    line.getQuantity().setScale(0, RoundingMode.HALF_UP) + " demandé(s)");
            }
        }
    }

    /**
     * Réserve le stock pour un bon de commande confirmé :
     * incrémente reservedQuantity dans StockQuant pour chaque ligne produit.
     */
    private void reserveStockForOrder(SalesOrder order) {
        Long companyId = order.getCompany().getId();
        List<StockLocation> internalLocs = stockLocationRepo.findByUsage(companyId, "internal");
        if (internalLocs.isEmpty()) {
            log.warn("Aucun emplacement interne trouvé pour la société {}. Réservation ignorée.", companyId);
            return;
        }
        Long internalLocId = internalLocs.get(0).getId();

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
            if (productOpt.isEmpty() || "service".equals(productOpt.get().getType())) continue;
            Long productId = productOpt.get().getId();

            StockQuant quant = stockQuantRepo
                    .findFirstByProductIdAndLocationIdAndCompanyId(productId, internalLocId, companyId)
                    .orElse(null);
            if (quant != null) {
                quant.setReservedQuantity(quant.getReservedQuantity().add(line.getQuantity()));
                stockQuantRepo.save(quant);
            }
        }
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
    private void generateRistourneEcriture(SalesInvoice invoice, Long companyId) {
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
        for (Ristourne r : toutesRistournes) {
            if (r.getCategory().getName() == null) continue;
            String norm = normalizeCategorie(r.getCategory().getName());
            if (CATEGORIES_RISTOURNE_BRASSERIE.contains(norm))  brasserie.add(r);
            else if (!CATEGORIES_RISTOURNE_GUINNESS.contains(norm)) autres.add(r);
            // Guinness → ignoré pour l'instant
        }

        Partner partner = invoice.getPartner();
        BigDecimal tauxPc = partner.getTauxPrecompte() != null
                ? partner.getTauxPrecompte()
                : precompteRepo.findByPartnerIdAndTypePrecompteAndCompanyId(partnerId, "sale", companyId)
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

        log.info("[RISTOURNE] HT brasserie={} (7019={}) HT autres={}", totalHtBrasserie, total7019Brasserie, totalHtAutres);

        if (totalHtBrasserie.compareTo(ZERO) <= 0 && totalHtAutres.compareTo(ZERO) <= 0) {
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

        if (acct7019 == null || acct4431 == null || acct4198 == null) {
            log.warn("[RISTOURNE] Écriture non générée pour {} : comptes manquants (701900/443100/419800)", invoice.getName());
            return;
        }

        AccountJournal journal = invoice.getJournal();
        LocalDate date = invoice.getDate();
        String labelBr  = "Ristourne brasserie " + invoice.getName();
        String labelAut = "Ristourne " + invoice.getName();

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
        BigDecimal totalDebits = ZERO;

        // ── Brasserie : 7019 (qty×201) + 7015 (reste HT) ──
        if (totalHtBrasserie.compareTo(ZERO) > 0) {
            BigDecimal d7019br = total7019Brasserie.setScale(2, RoundingMode.HALF_UP);
            BigDecimal d7015br = totalHtBrasserie.subtract(total7019Brasserie).setScale(2, RoundingMode.HALF_UP);
            lines.add(ristourneLine(move, acct7019, partner, labelBr, date, d7019br, ZERO, journal, invoice.getCompany()));
            totalDebits = totalDebits.add(d7019br);
            if (d7015br.compareTo(ZERO) > 0 && acct7015 != null) {
                lines.add(ristourneLine(move, acct7015, partner, labelBr, date, d7015br, ZERO, journal, invoice.getCompany()));
                totalDebits = totalDebits.add(d7015br);
            }
        }

        // ── Autres : HT complet dans 7019 ──
        if (totalHtAutres.compareTo(ZERO) > 0) {
            BigDecimal d7019aut = totalHtAutres.setScale(2, RoundingMode.HALF_UP);
            lines.add(ristourneLine(move, acct7019, partner, labelAut, date, d7019aut, ZERO, journal, invoice.getCompany()));
            totalDebits = totalDebits.add(d7019aut);
        }

        // ── Précompte sur HT total ──
        BigDecimal totalHT = totalHtBrasserie.add(totalHtAutres);
        BigDecimal debitPrecompte = totalHT.multiply(pcRate).setScale(2, RoundingMode.HALF_UP);
        if (acct4412 != null && debitPrecompte.compareTo(ZERO) > 0) {
            lines.add(ristourneLine(move, acct4412, partner, labelAut, date, debitPrecompte, ZERO, journal, invoice.getCompany()));
            totalDebits = totalDebits.add(debitPrecompte);
        }

        // ── TVA sur HT total ──
        BigDecimal debitTVA = totalHT.multiply(TVA_RATE).setScale(2, RoundingMode.HALF_UP);
        lines.add(ristourneLine(move, acct4431, partner, labelAut, date, debitTVA, ZERO, journal, invoice.getCompany()));
        totalDebits = totalDebits.add(debitTVA);

        // ── Crédit 419800 = somme de tous les débits ──
        lines.add(ristourneLine(move, acct4198, partner, labelAut, date, ZERO,
                totalDebits.setScale(2, RoundingMode.HALF_UP), journal, invoice.getCompany()));

        move.setLines(lines);
        moveRepo.save(move);
        log.info("[RISTOURNE] Écriture {} générée — HT total={} | crédit={}", moveName, totalHT, totalDebits);
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

    private void createStockMovementsOnInvoicePost(SalesInvoice invoice, boolean isAvoir) {
        Long companyId = invoice.getCompany().getId();

        // Trouver les emplacements
        List<StockLocation> internalLocs = stockLocationRepo.findByUsage(companyId, "internal");
        List<StockLocation> customerLocs = stockLocationRepo.findByUsage(companyId, "customer");

        if (internalLocs.isEmpty()) {
            log.warn("Aucun emplacement interne trouvé pour la société {}. Mouvements de stock ignorés.", companyId);
            return;
        }

        // Utiliser l'emplacement de l'entrepôt sélectionné si disponible
        StockLocation internalLoc = internalLocs.get(0);
        if (invoice.getWarehouseId() != null) {
            Long whLocId = warehouseRepo.findById(invoice.getWarehouseId())
                    .map(Warehouse::getStockLocationId).orElse(null);
            if (whLocId != null) {
                internalLoc = internalLocs.stream()
                        .filter(l -> l.getId().equals(whLocId)).findFirst()
                        .orElse(stockLocationRepo.findById(whLocId).orElse(internalLocs.get(0)));
            }
        }
        StockLocation customerLoc = customerLocs.isEmpty() ? internalLocs.get(0) : customerLocs.get(0);

        // Source et destination selon le type de document
        Long srcLocId = isAvoir ? customerLoc.getId() : internalLoc.getId();
        Long destLocId = isAvoir ? internalLoc.getId() : customerLoc.getId();
        String pickingCode = isAvoir ? "incoming" : "outgoing";

        // Trouver le type de picking (livraison ou réception)
        List<StockPickingType> pickingTypes = pickingTypeRepo.findByCompanyIdAndCodeOrderByNameAsc(companyId, pickingCode);
        Long pickingTypeId = pickingTypes.isEmpty() ? 1L : pickingTypes.get(0).getId();

        // Construire les lignes de mouvement — tous les produits physiques (hors service)
        // Résolution prioritaire par productId, sinon par productCode
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
            if (p == null || "service".equals(p.getType())) continue;
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
                .build();

        List<StockMove> moves = new ArrayList<>();
        for (LineProduct lp : productLines) {
            SalesInvoiceLine line = lp.line();
            var product = lp.product();

            BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : BigDecimal.ONE;
            BigDecimal priceUnit = line.getPrixUnitaire() != null ? line.getPrixUnitaire() : ZERO;

            StockMove move = StockMove.builder()
                    .picking(picking)
                    .productId(product.getId())
                    .productCode(product.getDefaultCode())
                    .productName(product.getName())
                    .qtyDemanded(qty)
                    .qtyDone(qty)
                    .priceUnit(priceUnit)
                    .locationId(srcLocId)
                    .locationDestId(destLocId)
                    .state("done")
                    .companyId(companyId)
                    .build();
            moves.add(move);

            // Mettre à jour StockQuant sur l'emplacement interne
            StockQuant quant = stockQuantRepo
                    .findFirstByProductIdAndLocationIdAndCompanyId(product.getId(), internalLoc.getId(), companyId)
                    .orElse(null);

            if (isAvoir) {
                // Retour : ajouter au stock interne
                if (quant == null) {
                    quant = StockQuant.builder()
                            .productId(product.getId())
                            .locationId(internalLoc.getId())
                            .companyId(companyId)
                            .quantity(qty)
                            .reservedQuantity(ZERO)
                            .build();
                } else {
                    quant.setQuantity(quant.getQuantity().add(qty));
                }
            } else {
                // Vente : déduire du stock interne et libérer la réservation
                if (quant != null) {
                    BigDecimal newQty = quant.getQuantity().subtract(qty);
                    quant.setQuantity(newQty.compareTo(ZERO) < 0 ? ZERO : newQty);
                    BigDecimal newReserved = quant.getReservedQuantity().subtract(qty);
                    quant.setReservedQuantity(newReserved.compareTo(ZERO) < 0 ? ZERO : newReserved);
                }
            }
            if (quant != null) stockQuantRepo.save(quant);
        }

        picking.setMoves(moves);
        stockPickingRepo.save(picking);
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

        // Comptes 6031 (variation stocks marchandises) et 31 (stocks marchandises)
        // Pas de fallback non-déterministe — ensureEssentialAccounts() garantit leur existence
        AccountAccount varStockAccount = accountRepo.findFirstByCodeAndCompanyId("6031", companyId).orElse(null);
        AccountAccount stockAccount    = accountRepo.findFirstByCodeAndCompanyId("31",   companyId).orElse(null);

        if (varStockAccount == null || stockAccount == null) {
            log.warn("Comptes 6031 ou 31 introuvables — écritures de stock ignorées pour {}", invoice.getName());
            return;
        }

        List<AccountMoveLine> moveLines = new ArrayList<>();
        BigDecimal totalCost = ZERO;

        for (java.util.Map.Entry<SalesInvoiceLine, com.erp.stock.entity.Product> entry : productLines) {
            SalesInvoiceLine line = entry.getKey();
            com.erp.stock.entity.Product product = entry.getValue();

            if (ConsigneCodes.isConsigne(product.getDefaultCode())) continue;

            BigDecimal cost = product.getStandardPrice() != null ? product.getStandardPrice() : ZERO;
            if (cost.compareTo(ZERO) == 0) continue;

            BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : BigDecimal.ONE;
            BigDecimal amount = cost.multiply(qty).setScale(2, RoundingMode.HALF_UP);
            if (amount.compareTo(ZERO) == 0) continue;

            totalCost = totalCost.add(amount);

            String libelle = (line.getDescription() != null && !line.getDescription().isBlank())
                    ? line.getDescription()
                    : (product.getDefaultCode() != null ? product.getDefaultCode() : product.getName());
            // Dr 6031 / Cr 31 pour vente — inversé pour avoir
            moveLines.add(AccountMoveLine.builder()
                    .account(varStockAccount).name("Var.Stock - " + libelle)
                    .date(invoice.getDate())
                    .debit(isAvoir ? ZERO : amount).credit(isAvoir ? amount : ZERO)
                    .journal(stockJournal).company(invoice.getCompany())
                    .partner(invoice.getPartner())
                    .build());
            moveLines.add(AccountMoveLine.builder()
                    .account(stockAccount).name("Var.Stock - " + libelle)
                    .date(invoice.getDate())
                    .debit(isAvoir ? amount : ZERO).credit(isAvoir ? ZERO : amount)
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
        moveRepo.save(stockMove);
        log.info("Écriture de variation de stock STK/{} créée (coût total: {})", invoice.getName(), totalCost);
    }

    private void buildOrderLines(SalesOrder order, List<SalesOrderRequest.LineRequest> lineRequests) {
        if (lineRequests == null) return;
        for (SalesOrderRequest.LineRequest req : lineRequests) {
            SalesOrderLine line = SalesOrderLine.builder()
                    .order(order)
                    .productId(req.getProductId())
                    .productCode(req.getProductCode())
                    .description(req.getDescription())
                    .quantity(req.getQuantity() != null ? req.getQuantity() : BigDecimal.ONE)
                    .prixUnitaire(req.getPrixUnitaire() != null ? req.getPrixUnitaire() : ZERO)
                    .tauxRemise(req.getTauxRemise() != null ? req.getTauxRemise() : ZERO)
                    .tauxTVA(req.getTauxTVA() != null ? req.getTauxTVA() : ZERO)
                    .accountCode(req.getAccountCode())
                    .categoryId(req.getCategoryId())
                    .consigne(ConsigneCodes.isConsigne(req.getProductCode()))
                    .build();
            computeLineTotals(line);
            order.getLines().add(line);
        }
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
            SalesInvoiceLine line = SalesInvoiceLine.builder()
                    .invoice(invoice)
                    .productId(resolvedProductId)
                    .productCode(req.getProductCode())
                    .description(req.getDescription())
                    .quantity(req.getQuantity() != null ? req.getQuantity() : BigDecimal.ONE)
                    .prixUnitaire(req.getPrixUnitaire() != null ? req.getPrixUnitaire() : ZERO)
                    .tauxRemise(req.getTauxRemise() != null ? req.getTauxRemise() : ZERO)
                    .tauxTVA(req.getTauxTVA() != null ? req.getTauxTVA() : ZERO)
                    .accountCode(req.getAccountCode())
                    .consigne(ConsigneCodes.isConsigne(req.getProductCode()))
                    .categoryId(resolveCategoryId(req.getCategoryId(), req.getProductCode(), companyId))
                    .build();
            computeInvoiceLineTotals(line);

            // Précompte (only on non-consigne lines)
            if (!ConsigneCodes.isConsigne(line.getProductCode()) && tauxPrecompte.compareTo(ZERO) > 0) {
                BigDecimal pc = line.getMontantHT()
                        .multiply(tauxPrecompte)
                        .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
                line.setPrecompte(pc);
            } else {
                line.setPrecompte(ZERO);
            }

            // Frais d'enlèvement (only on non-consigne lines with a category)
            line.setFraisEnlevement(computeFraisEnlevement(req, line, partnerId, companyId));

            // Prix unitaire TTC
            BigDecimal tva = line.getTauxTVA() != null ? line.getTauxTVA() : ZERO;
            BigDecimal puttc = line.getPrixUnitaire()
                    .multiply(BigDecimal.ONE.add(tva.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP)))
                    .setScale(4, RoundingMode.HALF_UP);
            line.setPrixUnitaireTTC(puttc);

            invoice.getLines().add(line);
        }
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

    private BigDecimal computeFraisEnlevement(SalesInvoiceRequest.LineRequest req,
                                               SalesInvoiceLine line,
                                               Long partnerId, Long companyId) {
        if (ConsigneCodes.isConsigne(line.getProductCode()) || companyId == null) return ZERO;

        // Priorité 1 : categoryId déjà résolu sur la ligne
        Long catId = line.getCategoryId();
        // Priorité 2 : categoryId du request
        if (catId == null && req != null) {
            catId = resolveCategoryId(req.getCategoryId(), req.getProductCode(), companyId);
        }
        // Priorité 3 : fallback par productCode de la ligne
        if (catId == null && line.getProductCode() != null && !line.getProductCode().isBlank()) {
            catId = resolveCategoryId(null, line.getProductCode(), companyId);
        }
        if (catId == null) return ZERO;

        BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : BigDecimal.ONE;

        // Montant de base pour cette catégorie (uniquement enlevements actifs)
        BigDecimal base = enlevementRepo.findByCategoryIdAndCompanyIdAndActiveTrue(catId, companyId)
                .map(e -> {
                    BigDecimal montant = e.getMontantFixe() != null ? e.getMontantFixe() : ZERO;
                    return montant.multiply(qty).setScale(2, RoundingMode.HALF_UP);
                })
                .orElse(ZERO);

        // Surplus client : s'ajoute au montant fixe de base
        if (partnerId != null) {
            var clientRate = enlevementClientRepo
                    .findByEnlevement_CategoryIdAndPartnerId(catId, partnerId);
            if (clientRate.isPresent() && clientRate.get().getMontant() != null) {
                BigDecimal surplus = clientRate.get().getMontant()
                        .multiply(qty).setScale(2, RoundingMode.HALF_UP);
                return base.add(surplus);
            }
        }
        return base;
    }

    /**
     * Calcule uniquement la part supplément client des frais d'enlèvement d'une ligne.
     * Retourne zéro si pas de supplément pour ce client/catégorie.
     */
    private BigDecimal computeEnlevementSupplement(Long categoryId, Long partnerId, BigDecimal qty) {
        if (categoryId == null || partnerId == null) return ZERO;
        return enlevementClientRepo
                .findByEnlevement_CategoryIdAndPartnerId(categoryId, partnerId)
                .map(ec -> ec.getMontant().multiply(qty).setScale(2, RoundingMode.HALF_UP))
                .orElse(ZERO);
    }

    /**
     * Retourne le compte comptable du supplément pour ce client/catégorie (ou null si pas de supplément).
     */
    private String getEnlevementSupplementAccount(Long categoryId, Long partnerId) {
        if (categoryId == null || partnerId == null) return null;
        return enlevementClientRepo
                .findByEnlevement_CategoryIdAndPartnerId(categoryId, partnerId)
                .map(ec -> ec.getSupplementAccountCode())
                .orElse(null);
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
        // Accumulation sur lignes NON-consigne uniquement pour HT/TVA/PSA/enlèvement
        BigDecimal totalHT = ZERO, totalTVA = ZERO, totalPrecompte = ZERO, totalEnlevement = ZERO;
        // Consignes : montant TTC des lignes consigne positives et négatives
        BigDecimal consigneMontant = ZERO, deconsigneMontant = ZERO;

        for (SalesInvoiceLine line : invoice.getLines()) {
            BigDecimal ht  = line.getMontantHT()  != null ? line.getMontantHT()  : ZERO;
            BigDecimal tva = line.getMontantTVA() != null ? line.getMontantTVA() : ZERO;
            BigDecimal ttc = line.getMontantTTC() != null ? line.getMontantTTC() : ZERO;
            BigDecimal pc  = line.getPrecompte()  != null ? line.getPrecompte()  : ZERO;
            BigDecimal enl = line.getFraisEnlevement() != null ? line.getFraisEnlevement() : ZERO;
            BigDecimal qty = line.getQuantity()   != null ? line.getQuantity()   : ZERO;

            if (ConsigneCodes.isConsigne(line.getProductCode())) {
                if (qty.compareTo(ZERO) >= 0) {
                    consigneMontant = consigneMontant.add(ttc);
                } else {
                    deconsigneMontant = deconsigneMontant.add(ttc.abs());
                }
            } else {
                totalHT         = totalHT.add(ht);
                totalTVA        = totalTVA.add(tva);
                totalPrecompte  = totalPrecompte.add(pc);
                totalEnlevement = totalEnlevement.add(enl);
            }
        }

        // Liquide Nu = HT + TVA + PSA  (base de calcul ristourne)
        BigDecimal totalLiquideNu = totalHT.add(totalTVA).add(totalPrecompte).setScale(2, RoundingMode.HALF_UP);
        // Total TTC = Liquide Nu + Frais enlèvement  (sans consigne)
        BigDecimal totalTTC = totalLiquideNu.add(totalEnlevement).setScale(0, RoundingMode.HALF_UP);
        // Net à payer = Total TTC + Consigne − Déconsigne
        BigDecimal netAPayer = totalTTC.add(consigneMontant).subtract(deconsigneMontant).setScale(0, RoundingMode.HALF_UP);

        // Ristourne calculée sur la base du liquide nu, conservée mais NON déduite
        BigDecimal totalRistourne = ZERO;
        if (invoice.getPartner() != null && invoice.getCompany() != null) {
            totalRistourne = computeInvoiceRistourne(invoice, totalLiquideNu);
        }

        invoice.setTotalHT(totalHT);
        invoice.setTotalTVA(totalTVA);
        invoice.setTotalPrecompte(totalPrecompte);
        invoice.setFraisEnlevementTTC(totalEnlevement);
        invoice.setTotalLiquideNu(totalLiquideNu);
        invoice.setTotalTTC(totalTTC);
        invoice.setTotalRistourne(totalRistourne);
        invoice.setNetAPayer(netAPayer);
        invoice.setMontantDu(netAPayer);  // montant dû initial = net à payer
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
                            .filter(l -> !ConsigneCodes.isConsigne(l.getProductCode()) && catId.equals(l.getCategoryId()))
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
        return precompteRepo.findByPartnerIdAndTypePrecompteAndCompanyId(partnerId, "sale", companyId)
                .map(com.erp.common.entity.Precompte::getTauxPrecompte).orElse(ZERO);
    }

    private List<SalesInvoiceDTO.RistourneDetailDTO> buildRistourneDetails(SalesInvoice invoice) {
        if (invoice.getPartner() == null || invoice.getCompany() == null) return List.of();
        Long partnerId = invoice.getPartner().getId();
        Long companyId = invoice.getCompany().getId();
        BigDecimal tauxPrecompte = getPartnerSalePrecompteTaux(partnerId, companyId);
        return ristourneRepo.findByPartnerIdAndCompanyIdAndActiveTrue(partnerId, companyId)
                .stream()
                .map(r -> {
                    Long catId = r.getCategory().getId();
                    BigDecimal totalQty = invoice.getLines().stream()
                            .filter(l -> !ConsigneCodes.isConsigne(l.getProductCode()) && catId.equals(resolveCategoryId(l.getCategoryId(), l.getProductCode(), companyId)))
                            .map(l -> l.getQuantity() != null ? l.getQuantity() : ZERO)
                            .reduce(ZERO, BigDecimal::add);
                    if (totalQty.compareTo(ZERO) == 0) return null;
                    BigDecimal montantUnit = computeRistourneTTCUnit(r.getMontantFixe(), r.getTypeRistourne(), tauxPrecompte);
                    return SalesInvoiceDTO.RistourneDetailDTO.builder()
                            .categoryName(r.getCategory().getName())
                            .quantite(totalQty)
                            .montantUnitaire(montantUnit)
                            .montantTotal(totalQty.multiply(montantUnit).setScale(2, RoundingMode.HALF_UP))
                            .typeRistourne(r.getTypeRistourne())
                            .build();
                })
                .filter(java.util.Objects::nonNull)
                .collect(Collectors.toList());
    }

    // ===================== SÉQUENCES =====================

    private String generateOrderName(Long companyId, LocalDate date) {
        int year = date.getYear();
        Integer max = orderRepo.findMaxSequenceByCompanyAndYear(companyId, year);
        int next = (max != null ? max : 0) + 1;
        return String.format("BC-%d-%05d", year, next);
    }

    private String generateInvoiceName(Long companyId, LocalDate date) {
        int year = date.getYear();
        Integer max = invoiceRepo.findMaxSequenceByCompanyTypeAndYear(companyId, "invoice", year);
        int next = (max != null ? max : 0) + 1;
        return String.format("FAC-%d-%05d", year, next);
    }

    private String generateAvoirName(Long companyId, LocalDate date) {
        int year = date.getYear();
        Integer max = invoiceRepo.findMaxSequenceByCompanyTypeAndYear(companyId, "credit_note", year);
        int next = (max != null ? max : 0) + 1;
        return String.format("AV-%d-%05d", year, next);
    }

    private String generatePaymentName(Long companyId, LocalDate date) {
        int year = date.getYear();
        Integer max = paymentRepo.findMaxSequenceByCompanyAndYear(companyId, year);
        int next = (max != null ? max : 0) + 1;
        return String.format("PAY-%d-%05d", year, next);
    }

    // ===================== MAPPING =====================

    private SalesOrderDTO toOrderDTO(SalesOrder order) {
        SalesInvoice invoice = invoiceRepo.findFirstBySalesOrderId(order.getId()).orElse(null);

        List<SalesOrderDTO.LineDTO> lines = order.getLines().stream()
                .map(l -> SalesOrderDTO.LineDTO.builder()
                        .id(l.getId()).productId(l.getProductId()).productCode(l.getProductCode()).description(l.getDescription())
                        .quantity(l.getQuantity()).prixUnitaire(l.getPrixUnitaire())
                        .tauxRemise(l.getTauxRemise()).tauxTVA(l.getTauxTVA()).accountCode(l.getAccountCode())
                        .montantHT(l.getMontantHT()).montantTVA(l.getMontantTVA()).montantTTC(l.getMontantTTC())
                        .build())
                .collect(Collectors.toList());

        String warehouseName = null;
        if (order.getWarehouseId() != null) {
            warehouseName = warehouseRepo.findById(order.getWarehouseId())
                    .map(com.erp.stock.entity.Warehouse::getName).orElse(null);
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
                .lines(lines).createdAt(order.getCreatedAt())
                .invoiceId(invoice != null ? invoice.getId() : null)
                .invoiceName(invoice != null ? invoice.getName() : null)
                .build();
    }

    private SalesInvoiceDTO toInvoiceDTO(SalesInvoice invoice) {
        return buildInvoiceDTO(invoice, List.of());
    }

    private SalesInvoiceDTO toInvoiceDTOWithPayments(SalesInvoice invoice) {
        List<InvoicePaymentDTO> payments = paymentRepo.findByInvoiceIdOrderByDateDesc(invoice.getId())
                .stream().map(this::toPaymentDTO).collect(Collectors.toList());
        return buildInvoiceDTO(invoice, payments);
    }

    private SalesInvoiceDTO buildInvoiceDTO(SalesInvoice invoice, List<InvoicePaymentDTO> payments) {
        Long companyId = invoice.getCompany() != null ? invoice.getCompany().getId() : null;

        // Résoudre le nom de l'entrepôt
        String warehouseName = null;
        if (invoice.getWarehouseId() != null) {
            warehouseName = warehouseRepo.findById(invoice.getWarehouseId())
                    .map(com.erp.stock.entity.Warehouse::getName).orElse(null);
        }

        // Calculer le solde du partenaire
        java.math.BigDecimal partnerBalance = java.math.BigDecimal.ZERO;
        java.math.BigDecimal partnerCreditDisponible = java.math.BigDecimal.ZERO;
        if (invoice.getPartner() != null && companyId != null) {
            partnerBalance = moveLineRepo.computePartnerBalance(invoice.getPartner().getId(), companyId);
            partnerCreditDisponible = invoiceRepo.sumAvailableCredits(invoice.getPartner().getId(), companyId);
        }

        Map<Long, String> catNames = companyId != null
                ? categoryRepo.findByCompanyIdOrderByNameAsc(companyId).stream()
                    .collect(Collectors.toMap(c -> c.getId(), c -> c.getName(), (a, b) -> a))
                : Map.of();

        List<SalesInvoiceDTO.LineDTO> lines = invoice.getLines().stream()
                .map(l -> SalesInvoiceDTO.LineDTO.builder()
                        .id(l.getId()).productId(l.getProductId()).productCode(l.getProductCode()).description(l.getDescription())
                        .quantity(l.getQuantity()).prixUnitaire(l.getPrixUnitaire())
                        .tauxRemise(l.getTauxRemise()).tauxTVA(l.getTauxTVA()).accountCode(l.getAccountCode())
                        .categoryId(l.getCategoryId())
                        .montantHT(l.getMontantHT()).montantTVA(l.getMontantTVA()).montantTTC(l.getMontantTTC())
                        .precompte(l.getPrecompte()).fraisEnlevement(l.getFraisEnlevement())
                        .prixUnitaireTTC(l.getPrixUnitaireTTC()).consigne(ConsigneCodes.isConsigne(l.getProductCode()))
                        .categoryName(l.getCategoryId() != null ? catNames.get(l.getCategoryId()) : null)
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
                .totalPrecompte(invoice.getTotalPrecompte())
                .totalLiquideNu(invoice.getTotalLiquideNu())
                .netAPayer(invoice.getNetAPayer())
                .lines(lines)
                .ristourneDetails(buildRistourneDetails(invoice))
                .payments(payments).createdAt(invoice.getCreatedAt())
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
                .build();
    }
}

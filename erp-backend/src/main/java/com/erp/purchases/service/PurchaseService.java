package com.erp.purchases.service;

import com.erp.accounting.entity.*;
import com.erp.accounting.repository.*;
import com.erp.common.ConsigneCodes;
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
import com.erp.stock.repository.ProductCategoryRepository;
import com.erp.stock.repository.ProductRepository;
import com.erp.stock.repository.StockPickingRepository;
import com.erp.stock.repository.StockPickingTypeRepository;
import com.erp.stock.service.StockService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
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
@Transactional
public class PurchaseService {

    private static final BigDecimal ZERO = BigDecimal.ZERO;
    private static final String DEFAULT_EXPENSE_ACCOUNT = "601000";
    private static final String DEFAULT_PAYABLE_ACCOUNT  = "4011";
    private static final String TVA_DEDUCTIBLE_ACCOUNT   = "4456";

    private final PurchaseOrderRepository orderRepo;
    private final PurchaseInvoiceRepository invoiceRepo;
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
    private final StockService stockService;
    private final PrecompteRepository precompteRepo;
    private final com.erp.purchases.repository.RemiseRepository remiseRepo;
    private final ProductCategoryRepository categoryRepo;

    // ===================== COMMANDES D'ACHAT =====================

    @Transactional(readOnly = true)
    public List<PurchaseOrderDTO> getAllOrders(Long companyId) {
        return orderRepo.findByCompanyIdOrderByCreatedAtDesc(companyId)
                .stream().map(this::toOrderDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public PurchaseOrderDTO getOrderById(Long id) {
        PurchaseOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Commande introuvable: " + id));
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

        return toOrderDTO(orderRepo.save(order));
    }

    public PurchaseOrderDTO updateOrder(Long id, PurchaseOrderRequest req) {
        PurchaseOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Commande introuvable: " + id));

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

        if (!"draft".equals(order.getState())) {
            throw new IllegalStateException("Cette commande ne peut pas être confirmée");
        }

        // Créer directement la facture fournisseur en brouillon
        PurchaseInvoice invoice = createInvoiceFromOrder(order);
        order.setInvoiceId(invoice.getId());

        order.setState("confirmed");
        return toOrderDTO(orderRepo.save(order));
    }

    /**
     * Valide la réception : met à jour le stock et le CMUP.
     * La facture reste en brouillon jusqu'à validation manuelle.
     */
    public PurchaseOrderDTO receivePicking(Long id) {
        PurchaseOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Commande introuvable: " + id));

        if (!"confirmed".equals(order.getState())) {
            throw new IllegalStateException("La commande doit être confirmée avant réception");
        }
        if (order.getPickingId() == null) {
            throw new IllegalStateException("Aucun bon de réception associé");
        }

        stockService.validatePicking(order.getPickingId());

        order.setState("received");
        return toOrderDTO(orderRepo.save(order));
    }

    public PurchaseOrderDTO cancelOrder(Long id) {
        PurchaseOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Commande introuvable: " + id));

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
        return toOrderDTO(orderRepo.save(order));
    }

    // ===================== FACTURES FOURNISSEURS =====================

    @Transactional(readOnly = true)
    public List<PurchaseInvoiceDTO> getAllInvoices(Long companyId) {
        return invoiceRepo.findByCompanyIdAndTypeOrderByDateDescNameDesc(companyId, "invoice")
                .stream().map(this::toInvoiceDTOWithPayments).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public PurchaseInvoiceDTO getInvoiceById(Long id) {
        PurchaseInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));
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
                .montantPaye(ZERO)
                .build();

        buildInvoiceLines(invoice, req.getLines());
        computeInvoiceTotals(invoice);

        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
    }

    public PurchaseInvoiceDTO updateInvoice(Long id, PurchaseInvoiceRequest req) {
        PurchaseInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));

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

        invoice.getLines().clear();
        buildInvoiceLines(invoice, req.getLines());
        computeInvoiceTotals(invoice);

        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
    }

    /**
     * Valide une facture ou un avoir fournisseur et génère l'écriture comptable OHADA.
     *
     * Facture fournisseur (invoice) :
     *   Dr 601xxx (Charges)         = HT par ligne
     *   Dr 4456   (TVA déductible)  = TVA totale
     *   Cr 401x   (Fournisseur)     = TTC
     *
     * Avoir fournisseur (credit_note) — écritures inversées :
     *   Cr 601xxx (Charges)         = HT par ligne
     *   Cr 4456   (TVA déductible)  = TVA totale
     *   Dr 401x   (Fournisseur)     = TTC
     */
    public PurchaseInvoiceDTO postInvoice(Long id) {
        PurchaseInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));

        if (!"draft".equals(invoice.getState())) {
            throw new IllegalStateException("Seules les documents en brouillon peuvent être validés");
        }

        boolean isAvoir = "credit_note".equals(invoice.getType());
        Long companyId = invoice.getCompany().getId();
        LocalDate date = invoice.getDate();

        // Compte fournisseur 401x
        AccountAccount payableAccount = accountRepo.findFirstByCodeAndCompanyId(DEFAULT_PAYABLE_ACCOUNT, companyId)
                .orElseGet(() -> accountRepo.findByCodeStartingWithAndCompanyId("401", companyId)
                        .stream().findFirst()
                        .orElseThrow(() -> new EntityNotFoundException("Compte fournisseur 401x introuvable")));

        // Compte TVA déductible 4456
        AccountAccount tvaAccount = accountRepo.findFirstByCodeAndCompanyId(TVA_DEDUCTIBLE_ACCOUNT, companyId)
                .orElseGet(() -> accountRepo.findByCodeStartingWithAndCompanyId("445", companyId)
                        .stream().findFirst().orElse(null));

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
        BigDecimal ttc = invoice.getTotalTTC() != null ? invoice.getTotalTTC() : ZERO;

        // Ligne fournisseur 401x : crédit pour facture, débit pour avoir
        moveLines.add(AccountMoveLine.builder()
                .move(move).account(payableAccount).partner(invoice.getPartner())
                .name(libelle401).date(date)
                .debit(isAvoir ? ttc : ZERO)
                .credit(isAvoir ? ZERO : ttc)
                .journal(invoice.getJournal()).company(invoice.getCompany())
                .build());

        // Lignes charges 601xxx : débit pour facture, crédit pour avoir
        for (PurchaseInvoiceLine line : invoice.getLines()) {
            String accCode = (line.getAccountCode() != null && !line.getAccountCode().isBlank())
                    ? line.getAccountCode() : DEFAULT_EXPENSE_ACCOUNT;

            AccountAccount expenseAccount = accountRepo.findFirstByCodeAndCompanyId(accCode, companyId)
                    .orElseGet(() -> accountRepo.findByCodeStartingWithAndCompanyId("601", companyId)
                            .stream().findFirst()
                            .orElseGet(() -> accountRepo.findByCodeStartingWithAndCompanyId("60", companyId)
                                    .stream().findFirst()
                                    .orElseThrow(() -> new EntityNotFoundException("Compte de charge 60x introuvable"))));

            BigDecimal ht = line.getMontantHT() != null ? line.getMontantHT() : ZERO;
            if (ht.compareTo(ZERO) != 0) {
                moveLines.add(AccountMoveLine.builder()
                        .move(move).account(expenseAccount).partner(invoice.getPartner())
                        .name(line.getDescription()).date(date)
                        .debit(isAvoir ? ZERO : ht)
                        .credit(isAvoir ? ht : ZERO)
                        .journal(invoice.getJournal()).company(invoice.getCompany())
                        .build());
            }
        }

        // Ligne TVA 4456 : débit pour facture, crédit pour avoir
        BigDecimal totalTVA = invoice.getTotalTVA() != null ? invoice.getTotalTVA() : ZERO;
        if (totalTVA.compareTo(ZERO) != 0 && tvaAccount != null) {
            String libelleTVA = (isAvoir ? "TVA avoir fournisseur " : "TVA déductible - ") + invoice.getName();
            moveLines.add(AccountMoveLine.builder()
                    .move(move).account(tvaAccount).partner(invoice.getPartner())
                    .name(libelleTVA).date(date)
                    .debit(isAvoir ? ZERO : totalTVA)
                    .credit(isAvoir ? totalTVA : ZERO)
                    .journal(invoice.getJournal()).company(invoice.getCompany())
                    .build());
        }

        move.setLines(moveLines);
        AccountMove savedMove = moveRepo.save(move);
        savedMove.setState("posted");
        moveRepo.save(savedMove);

        invoice.setAccountMove(savedMove);
        invoice.setState("posted");
        invoice.setMontantPaye(ZERO);
        invoice.setMontantDu(invoice.getNetAPayer());
        invoiceRepo.save(invoice);

        // Créer l'entrée en stock vers le Dépôt Achat (picking incoming en attente de réception)
        createDepotAchatPicking(invoice);

        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
    }

    /**
     * Crée un bon de réception (StockPicking incoming) vers le Dépôt Achat
     * lors de la validation d'une facture fournisseur.
     * Ce picking représente la marchandise en transit jusqu'à la réception physique.
     */
    private void createDepotAchatPicking(PurchaseInvoice invoice) {
        // Ne créer qu'une seule fois — si le picking existe déjà, on ne recrée pas
        if (invoice.getPickingId() != null) return;

        Long companyId = invoice.getCompany().getId();

        List<StockPickingType> incomingTypes = pickingTypeRepo
                .findByCompanyIdAndCodeOrderByNameAsc(companyId, "incoming");
        if (incomingTypes.isEmpty()) return; // pas de type configuré, on ignore silencieusement

        StockPickingType pt = incomingTypes.get(0);

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

        for (PurchaseInvoiceLine line : invoice.getLines()) {
            if (line.getProductCode() == null || line.getProductCode().isBlank()) continue;
            Product product = productRepo.findFirstByDefaultCodeAndCompanyId(line.getProductCode(), companyId)
                    .orElse(null);
            if (product == null) continue;

            StockMove move = StockMove.builder()
                    .picking(picking)
                    .productId(product.getId())
                    .productCode(product.getDefaultCode())
                    .productName(product.getName())
                    .uomName(product.getUomName())
                    .qtyDemanded(line.getQuantity() != null ? line.getQuantity() : ZERO)
                    .qtyDone(ZERO)
                    .priceUnit(line.getPrixUnitaire() != null ? line.getPrixUnitaire() : product.getStandardPrice())
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
        }
    }

    /**
     * Annule une facture fournisseur (brouillon, validée ou payée).
     * Pour les factures validées/payées, cela ne crée PAS d'écriture inverse.
     * Utiliser reverseInvoiceEntries() pour extourner les écritures comptables.
     */
    public PurchaseInvoiceDTO cancelInvoice(Long id) {
        PurchaseInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));

        if ("cancelled".equals(invoice.getState())) {
            throw new IllegalStateException("Cette facture est déjà annulée");
        }

        invoice.setState("cancelled");
        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
    }

    /**
     * Extourne les écritures comptables d'une facture annulée (et de ses paiements).
     * À appeler manuellement après cancelInvoice().
     */
    public PurchaseInvoiceDTO reverseInvoiceEntries(Long id) {
        PurchaseInvoice invoice = invoiceRepo.findById(id)
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
        for (PurchaseInvoicePayment payment : invoice.getPayments()) {
            if (payment.getAccountMove() != null && "posted".equals(payment.getAccountMove().getState())) {
                createReversalMove(payment.getAccountMove(), today);
                payment.setState("cancelled");
                paymentRepo.save(payment);
            }
        }

        // Remettre le montant dû et payé à zéro
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
        saved.setState("posted");
        moveRepo.save(saved);

        // L'écriture originale n'est pas modifiée

        return saved;
    }

    // ===================== AVOIRS FOURNISSEURS =====================

    @Transactional(readOnly = true)
    public List<PurchaseInvoiceDTO> getAllAvoirs(Long companyId) {
        return invoiceRepo.findByCompanyIdAndTypeOrderByDateDescNameDesc(companyId, "credit_note")
                .stream().map(this::toInvoiceDTOWithPayments).collect(Collectors.toList());
    }

    /**
     * Crée un avoir fournisseur à partir d'une facture validée.
     */
    public PurchaseInvoiceDTO createAvoirFromInvoice(Long invoiceId) {
        PurchaseInvoice original = invoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + invoiceId));

        if (!"posted".equals(original.getState()) && !"paid".equals(original.getState())) {
            throw new IllegalStateException("Seules les factures validées peuvent faire l'objet d'un avoir");
        }
        if (!"invoice".equals(original.getType())) {
            throw new IllegalStateException("Impossible de créer un avoir sur un avoir");
        }

        LocalDate today = LocalDate.now();
        String avoirName = generateAvoirName(original.getCompany().getId(), today);

        PurchaseInvoice avoir = PurchaseInvoice.builder()
                .name(avoirName)
                .date(today)
                .state("draft")
                .type("credit_note")
                .originalInvoice(original)
                .notes("Avoir fournisseur sur " + original.getName())
                .partner(original.getPartner())
                .journal(original.getJournal())
                .company(original.getCompany())
                .montantPaye(ZERO)
                .build();

        List<PurchaseInvoiceLine> avoirLines = original.getLines().stream()
                .map(ol -> PurchaseInvoiceLine.builder()
                        .invoice(avoir)
                        .productCode(ol.getProductCode())
                        .description(ol.getDescription())
                        .quantity(ol.getQuantity())
                        .prixUnitaire(ol.getPrixUnitaire())
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
     * Crée un avoir fournisseur manuel (non lié à une facture).
     */
    public PurchaseInvoiceDTO createAvoirManuel(PurchaseInvoiceRequest req) {
        req = req.toBuilder().type("credit_note").build();
        return createInvoice(req);
    }

    // ===================== PAIEMENTS FOURNISSEURS =====================

    /**
     * Enregistre un paiement fournisseur et génère l'écriture comptable :
     * Dr 401x   (fournisseur) = montant
     * Cr 521/571 (trésorerie) = montant
     */
    public PurchaseInvoiceDTO.PaymentDTO createPayment(PurchaseInvoicePaymentRequest req) {
        PurchaseInvoice invoice = invoiceRepo.findById(req.getInvoiceId())
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable"));

        if (!"posted".equals(invoice.getState()) && !"paid".equals(invoice.getState())) {
            throw new IllegalStateException("La facture doit être validée avant d'enregistrer un paiement");
        }

        AccountJournal journal = journalRepo.findById(req.getJournalId())
                .orElseThrow(() -> new EntityNotFoundException("Journal introuvable"));

        Company company = invoice.getCompany();
        LocalDate date = req.getDate() != null ? req.getDate() : LocalDate.now();
        BigDecimal amount = req.getAmount();

        // Compte trésorerie (crédit) = compte par défaut du journal
        AccountAccount treasuryAccount = journal.getDefaultCreditAccount();
        if (treasuryAccount == null) {
            treasuryAccount = accountRepo.findByCodeStartingWithAndCompanyId("521", company.getId())
                    .stream().findFirst()
                    .orElseGet(() -> accountRepo.findByCodeStartingWithAndCompanyId("571", company.getId())
                            .stream().findFirst()
                            .orElseThrow(() -> new EntityNotFoundException("Compte de trésorerie introuvable")));
        }

        // Compte fournisseur 401x (débit)
        AccountAccount payableAccount = accountRepo.findFirstByCodeAndCompanyId(DEFAULT_PAYABLE_ACCOUNT, company.getId())
                .orElseGet(() -> accountRepo.findByCodeStartingWithAndCompanyId("401", company.getId())
                        .stream().findFirst()
                        .orElseThrow(() -> new EntityNotFoundException("Compte fournisseur 401x introuvable")));

        String paymentName = generatePaymentName(company.getId(), date);

        AccountMove move = AccountMove.builder()
                .name(paymentName)
                .date(date)
                .ref("Paiement fournisseur " + invoice.getName())
                .state("posted")
                .journal(journal)
                .company(company)
                .partner(invoice.getPartner())
                .build();

        List<AccountMoveLine> lines = List.of(
                AccountMoveLine.builder()
                        .move(move).account(payableAccount).partner(invoice.getPartner())
                        .name("Paiement - " + invoice.getName()).date(date)
                        .debit(amount).credit(ZERO)
                        .journal(journal).company(company)
                        .build(),
                AccountMoveLine.builder()
                        .move(move).account(treasuryAccount).partner(invoice.getPartner())
                        .name("Paiement - " + invoice.getName()).date(date)
                        .debit(ZERO).credit(amount)
                        .journal(journal).company(company)
                        .build()
        );
        move.setLines(new ArrayList<>(lines));
        AccountMove savedMove = moveRepo.save(move);

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

        // Mise à jour des totaux de la facture
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
                .montantPaye(ZERO)
                .build();

        Long partnerId = order.getPartner() != null ? order.getPartner().getId() : null;
        BigDecimal tauxPrecompte = (partnerId != null)
                ? getPartnerPurchasePrecompteTaux(partnerId, companyId)
                : ZERO;

        for (PurchaseOrderLine ol : order.getLines()) {
            BigDecimal ht = ol.getMontantHT() != null ? ol.getMontantHT() : ZERO;
            boolean isConsigne = ConsigneCodes.isConsigne(ol.getProductCode());
            BigDecimal pc = ZERO;
            if (!isConsigne && tauxPrecompte.compareTo(ZERO) > 0) {
                pc = ht.multiply(tauxPrecompte).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
            }
            BigDecimal tva = ol.getTauxTVA() != null ? ol.getTauxTVA() : ZERO;
            BigDecimal puttc = (ol.getPrixUnitaire() != null ? ol.getPrixUnitaire() : ZERO)
                    .multiply(BigDecimal.ONE.add(tva.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP)))
                    .setScale(4, RoundingMode.HALF_UP);

            PurchaseInvoiceLine line = PurchaseInvoiceLine.builder()
                    .invoice(invoice)
                    .productCode(ol.getProductCode())
                    .description(ol.getDescription())
                    .quantity(ol.getQuantity())
                    .prixUnitaire(ol.getPrixUnitaire())
                    .tauxTVA(tva)
                    .accountCode(ol.getAccountCode())
                    .categoryId(ol.getCategoryId())
                    .consigne(isConsigne)
                    .montantHT(ht)
                    .montantTVA(ol.getMontantTVA() != null ? ol.getMontantTVA() : ZERO)
                    .montantTTC(ol.getMontantTTC() != null ? ol.getMontantTTC() : ZERO)
                    .precompte(pc)
                    .prixUnitaireTTC(puttc)
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
            boolean isConsigne = ConsigneCodes.isConsigne(req.getProductCode());
            BigDecimal qty = req.getQuantity() != null ? req.getQuantity() : ZERO;
            BigDecimal pu  = req.getPrixUnitaire() != null ? req.getPrixUnitaire() : ZERO;
            BigDecimal tva = req.getTauxTVA() != null ? req.getTauxTVA() : ZERO;

            BigDecimal montantHT  = qty.multiply(pu).setScale(2, RoundingMode.HALF_UP);
            BigDecimal montantTVA = montantHT.multiply(tva).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
            BigDecimal montantTTC = montantHT.add(montantTVA);

            BigDecimal precompte = ZERO;
            if (!isConsigne && tauxPrecompte.compareTo(ZERO) > 0) {
                precompte = montantHT.multiply(tauxPrecompte)
                        .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
            }

            BigDecimal puttc = pu.multiply(BigDecimal.ONE.add(tva.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP)))
                    .setScale(4, RoundingMode.HALF_UP);

            invoice.getLines().add(PurchaseInvoiceLine.builder()
                    .invoice(invoice)
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
                    .build());
        }
    }

    private void computeInvoiceTotals(PurchaseInvoice invoice) {
        // Accumulation sur lignes NON-consigne uniquement pour HT/TVA/PSA
        BigDecimal totalHT = ZERO, totalTVA = ZERO, totalPrecompte = ZERO;
        // Consignes : montant TTC positif / négatif
        BigDecimal consigneMontant = ZERO, deconsigneMontant = ZERO;

        for (PurchaseInvoiceLine l : invoice.getLines()) {
            BigDecimal lHT  = l.getMontantHT()  != null ? l.getMontantHT()  : ZERO;
            BigDecimal lTVA = l.getMontantTVA() != null ? l.getMontantTVA() : ZERO;
            BigDecimal lTTC = l.getMontantTTC() != null ? l.getMontantTTC() : ZERO;
            BigDecimal lPC  = l.getPrecompte()  != null ? l.getPrecompte()  : ZERO;
            BigDecimal qty  = l.getQuantity()   != null ? l.getQuantity()   : ZERO;

            if (ConsigneCodes.isConsigne(l.getProductCode())) {
                if (qty.compareTo(ZERO) >= 0) {
                    consigneMontant = consigneMontant.add(lTTC);
                } else {
                    deconsigneMontant = deconsigneMontant.add(lTTC.abs());
                }
            } else {
                totalHT        = totalHT.add(lHT);
                totalTVA       = totalTVA.add(lTVA);
                totalPrecompte = totalPrecompte.add(lPC);
            }
        }

        // Liquide Nu = HT + TVA + PSA
        BigDecimal totalLiquideNu = totalHT.add(totalTVA).add(totalPrecompte).setScale(2, RoundingMode.HALF_UP);
        // Total TTC = Liquide Nu (pas de frais d'enlèvement à l'achat)
        BigDecimal totalTTC = totalLiquideNu.setScale(0, RoundingMode.HALF_UP);
        // Net à payer = Total TTC + Consigne − Déconsigne
        BigDecimal netAPayer = totalTTC.add(consigneMontant).subtract(deconsigneMontant).setScale(0, RoundingMode.HALF_UP);

        // Remise calculée et conservée mais NON déduite de la facture
        BigDecimal totalRemise = computeInvoiceRemise(invoice);

        invoice.setTotalHT(totalHT);
        invoice.setTotalTVA(totalTVA);
        invoice.setTotalPrecompte(totalPrecompte);
        invoice.setTotalLiquideNu(totalLiquideNu);
        invoice.setTotalTTC(totalTTC);
        invoice.setTotalRemise(totalRemise);
        invoice.setNetAPayer(netAPayer);
        if (invoice.getMontantDu() == null) {
            invoice.setMontantDu(netAPayer);  // montant dû initial = net à payer
        }
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
                            .filter(l -> !ConsigneCodes.isConsigne(l.getProductCode()) && !l.isConsigne()
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
    private BigDecimal computeRemiseTTCUnit(BigDecimal montantFixe, String type, BigDecimal tauxPrecompte) {
        if (montantFixe == null) return ZERO;
        if ("brasserie".equals(type)) {
            BigDecimal coeff = BigDecimal.ONE.add(tauxPrecompte.divide(BigDecimal.valueOf(100), 6, RoundingMode.HALF_UP));
            return montantFixe.multiply(coeff).setScale(2, RoundingMode.HALF_UP);
        } else {
            // guinness et autres : pas de précompte ajouté
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

    private BigDecimal getPartnerPurchasePrecompteTaux(Long partnerId, Long companyId) {
        com.erp.accounting.entity.Partner p = partnerRepo.findById(partnerId).orElse(null);
        if (p != null && p.getTauxPrecompte() != null) return p.getTauxPrecompte();
        return precompteRepo.findByPartnerIdAndTypePrecompteAndCompanyId(partnerId, "purchase", companyId)
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
                            .filter(l -> !ConsigneCodes.isConsigne(l.getProductCode()) && !l.isConsigne()
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
        String pickingName  = null;
        String pickingState = null;
        if (order.getPickingId() != null) {
            var picking = pickingRepo.findById(order.getPickingId()).orElse(null);
            if (picking != null) {
                pickingName  = picking.getName();
                pickingState = picking.getState();
            }
        }

        String invoiceName  = null;
        String invoiceState = null;
        if (order.getInvoiceId() != null) {
            var inv = invoiceRepo.findById(order.getInvoiceId()).orElse(null);
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
                .createdAt(order.getCreatedAt())
                .build();
    }

    private PurchaseInvoiceDTO toInvoiceDTOWithPayments(PurchaseInvoice invoice) {
        Long companyId = invoice.getCompany() != null ? invoice.getCompany().getId() : null;
        Map<Long, String> catNames = companyId != null
                ? categoryRepo.findByCompanyIdOrderByNameAsc(companyId).stream()
                    .collect(Collectors.toMap(c -> c.getId(), c -> c.getName(), (a, b) -> a))
                : Map.of();

        List<PurchaseInvoiceDTO.LineDTO> lineDTOs = invoice.getLines().stream()
                .map(l -> PurchaseInvoiceDTO.LineDTO.builder()
                        .id(l.getId())
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
                        .consigne(ConsigneCodes.isConsigne(l.getProductCode()))
                        .categoryName(l.getCategoryId() != null ? catNames.get(l.getCategoryId()) : null)
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
                .pickingId(invoice.getPickingId())
                .pickingState(invoice.getPickingId() != null
                        ? pickingRepo.findById(invoice.getPickingId()).map(p -> p.getState()).orElse(null)
                        : null)
                .totalHT(invoice.getTotalHT())
                .totalTVA(invoice.getTotalTVA())
                .totalTTC(invoice.getTotalTTC())
                .montantPaye(invoice.getMontantPaye())
                .montantDu(invoice.getMontantDu())
                .totalRemise(invoice.getTotalRemise())
                .totalPrecompte(invoice.getTotalPrecompte())
                .totalLiquideNu(invoice.getTotalLiquideNu())
                .netAPayer(invoice.getNetAPayer())
                .lines(lineDTOs)
                .remiseDetails(buildRemiseDetails(invoice))
                .payments(paymentDTOs)
                .createdAt(invoice.getCreatedAt())
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
                .build();
    }

    // ===================== GENERATORS =====================

    private void buildOrderLines(PurchaseOrder order, List<PurchaseOrderRequest.LineRequest> reqs) {
        if (reqs == null) return;
        for (PurchaseOrderRequest.LineRequest req : reqs) {
            BigDecimal qty = req.getQuantity() != null ? req.getQuantity() : ZERO;
            BigDecimal pu  = req.getPrixUnitaire() != null ? req.getPrixUnitaire() : ZERO;
            BigDecimal tva = req.getTauxTVA() != null ? req.getTauxTVA() : ZERO;

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
                    .consigne(ConsigneCodes.isConsigne(productCode))
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
        int year = date.getYear();
        Integer max = orderRepo.findMaxSequenceByCompanyAndYear(companyId, year);
        int next = (max != null ? max : 0) + 1;
        return String.format("AC-%d-%05d", year, next);
    }

    private String generateInvoiceName(Long companyId, LocalDate date) {
        int year = date.getYear();
        Integer max = invoiceRepo.findMaxSequenceByCompanyTypeAndYear(companyId, "invoice", year);
        int next = (max != null ? max : 0) + 1;
        return String.format("FAF-%d-%05d", year, next);
    }

    private String generateAvoirName(Long companyId, LocalDate date) {
        int year = date.getYear();
        Integer max = invoiceRepo.findMaxSequenceByCompanyTypeAndYear(companyId, "credit_note", year);
        int next = (max != null ? max : 0) + 1;
        return String.format("AVF-%d-%05d", year, next);
    }

    private String generatePaymentName(Long companyId, LocalDate date) {
        int year = date.getYear();
        Integer max = paymentRepo.findMaxSequenceByCompanyAndYear(companyId, year);
        int next = (max != null ? max : 0) + 1;
        return String.format("PAY-F-%d-%05d", year, next);
    }

    private String generatePickingName(StockPickingType pt, Long companyId) {
        String prefix = pt.getSequencePrefix() != null ? pt.getSequencePrefix() : "WH/IN/";
        long count = pickingRepo.countByPickingTypeId(pt.getId());
        return String.format("%s%05d", prefix, count + 1);
    }
}

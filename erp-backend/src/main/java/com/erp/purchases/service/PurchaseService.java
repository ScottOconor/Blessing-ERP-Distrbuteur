package com.erp.purchases.service;

import com.erp.accounting.entity.*;
import com.erp.accounting.repository.*;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.purchases.dto.*;
import com.erp.purchases.entity.*;
import com.erp.purchases.repository.*;
import com.erp.stock.entity.Product;
import com.erp.stock.entity.StockMove;
import com.erp.stock.entity.StockPicking;
import com.erp.stock.entity.StockPickingType;
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
     * Confirme la commande :
     *  1. Génère le bon de réception (StockPicking incoming)
     *  2. Génère la facture fournisseur (PurchaseInvoice) en brouillon
     */
    public PurchaseOrderDTO confirmOrder(Long id) {
        PurchaseOrder order = orderRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Commande introuvable: " + id));

        if (!"draft".equals(order.getState())) {
            throw new IllegalStateException("Cette commande ne peut pas être confirmée");
        }

        Long companyId = order.getCompany().getId();

        // --- 1. Bon de réception ---
        List<StockPickingType> incomingTypes = pickingTypeRepo
                .findByCompanyIdAndCodeOrderByNameAsc(companyId, "incoming");
        if (incomingTypes.isEmpty()) {
            throw new IllegalStateException("Aucun type d'opération 'Réception' configuré. Créez un entrepôt d'abord.");
        }
        StockPickingType pt = incomingTypes.get(0);

        StockPicking picking = StockPicking.builder()
                .name(generatePickingName(pt, companyId))
                .pickingTypeId(pt.getId())
                .pickingTypeCode("incoming")
                .locationId(pt.getDefaultLocationSrcId())
                .locationDestId(pt.getDefaultLocationDestId())
                .partnerId(order.getPartner().getId())
                .partnerName(order.getPartner().getName())
                .state("draft")
                .scheduledDate(order.getDateExpected() != null ? order.getDateExpected() : order.getDate())
                .origin(order.getName())
                .notes(order.getNotes())
                .companyId(companyId)
                .build();

        for (PurchaseOrderLine line : order.getLines()) {
            if (line.getProductId() == null) continue;
            Product product = productRepo.findById(line.getProductId()).orElse(null);
            if (product == null) continue;

            StockMove move = StockMove.builder()
                    .picking(picking)
                    .productId(product.getId())
                    .productCode(product.getDefaultCode())
                    .productName(product.getName())
                    .uomName(product.getUomName())
                    .qtyDemanded(line.getQuantity())
                    .qtyDone(line.getQuantity())
                    .priceUnit(line.getPrixUnitaire() != null ? line.getPrixUnitaire() : product.getStandardPrice())
                    .locationId(pt.getDefaultLocationSrcId())
                    .locationDestId(pt.getDefaultLocationDestId())
                    .state("draft")
                    .companyId(companyId)
                    .build();
            picking.getMoves().add(move);
        }

        if (picking.getMoves().isEmpty()) {
            throw new IllegalStateException(
                "Aucun article du catalogue sélectionné. Utilisez l'autocomplete pour choisir les articles du stock avant de confirmer.");
        }

        StockPicking savedPicking = pickingRepo.save(picking);
        order.setPickingId(savedPicking.getId());

        // --- 2. Facture fournisseur en brouillon ---
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
        AccountAccount payableAccount = accountRepo.findByCodeAndCompanyId(DEFAULT_PAYABLE_ACCOUNT, companyId)
                .orElseGet(() -> accountRepo.findByCodeStartingWithAndCompanyId("401", companyId)
                        .stream().findFirst()
                        .orElseThrow(() -> new EntityNotFoundException("Compte fournisseur 401x introuvable")));

        // Compte TVA déductible 4456
        AccountAccount tvaAccount = accountRepo.findByCodeAndCompanyId(TVA_DEDUCTIBLE_ACCOUNT, companyId)
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

            AccountAccount expenseAccount = accountRepo.findByCodeAndCompanyId(accCode, companyId)
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
        invoice.setMontantDu(invoice.getTotalTTC());

        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
    }

    public PurchaseInvoiceDTO cancelInvoice(Long id) {
        PurchaseInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));

        if (!"draft".equals(invoice.getState())) {
            throw new IllegalStateException("Seules les factures en brouillon peuvent être annulées");
        }
        invoice.setState("cancelled");
        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
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
        AccountAccount payableAccount = accountRepo.findByCodeAndCompanyId(DEFAULT_PAYABLE_ACCOUNT, company.getId())
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
        BigDecimal du = (invoice.getTotalTTC() != null ? invoice.getTotalTTC() : ZERO).subtract(totalPaye);
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

        for (PurchaseOrderLine ol : order.getLines()) {
            PurchaseInvoiceLine line = PurchaseInvoiceLine.builder()
                    .invoice(invoice)
                    .productCode(ol.getProductCode())
                    .description(ol.getDescription())
                    .quantity(ol.getQuantity())
                    .prixUnitaire(ol.getPrixUnitaire())
                    .tauxTVA(ol.getTauxTVA())
                    .accountCode(ol.getAccountCode())
                    .montantHT(ol.getMontantHT())
                    .montantTVA(ol.getMontantTVA())
                    .montantTTC(ol.getMontantTTC())
                    .build();
            invoice.getLines().add(line);
        }

        computeInvoiceTotals(invoice);
        return invoiceRepo.save(invoice);
    }

    private void buildInvoiceLines(PurchaseInvoice invoice, List<PurchaseInvoiceRequest.LineRequest> reqs) {
        if (reqs == null) return;
        for (PurchaseInvoiceRequest.LineRequest req : reqs) {
            BigDecimal qty = req.getQuantity() != null ? req.getQuantity() : ZERO;
            BigDecimal pu  = req.getPrixUnitaire() != null ? req.getPrixUnitaire() : ZERO;
            BigDecimal tva = req.getTauxTVA() != null ? req.getTauxTVA() : ZERO;

            BigDecimal montantHT  = qty.multiply(pu).setScale(2, RoundingMode.HALF_UP);
            BigDecimal montantTVA = montantHT.multiply(tva).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
            BigDecimal montantTTC = montantHT.add(montantTVA);

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
                    .build());
        }
    }

    private void computeInvoiceTotals(PurchaseInvoice invoice) {
        BigDecimal ht  = invoice.getLines().stream()
                .map(l -> l.getMontantHT() != null ? l.getMontantHT() : ZERO)
                .reduce(ZERO, BigDecimal::add);
        BigDecimal tva = invoice.getLines().stream()
                .map(l -> l.getMontantTVA() != null ? l.getMontantTVA() : ZERO)
                .reduce(ZERO, BigDecimal::add);
        invoice.setTotalHT(ht);
        invoice.setTotalTVA(tva);
        invoice.setTotalTTC(ht.add(tva));
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
        List<PurchaseInvoiceDTO.LineDTO> lineDTOs = invoice.getLines().stream()
                .map(l -> PurchaseInvoiceDTO.LineDTO.builder()
                        .id(l.getId())
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
                .totalHT(invoice.getTotalHT())
                .totalTVA(invoice.getTotalTVA())
                .totalTTC(invoice.getTotalTTC())
                .montantPaye(invoice.getMontantPaye())
                .montantDu(invoice.getMontantDu())
                .lines(lineDTOs)
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

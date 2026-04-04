package com.erp.sales.service;

import com.erp.accounting.dto.PartnerDTO;
import com.erp.accounting.entity.*;
import com.erp.accounting.repository.*;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.sales.dto.*;
import com.erp.sales.entity.*;
import com.erp.sales.repository.*;
import com.erp.stock.entity.Product;
import com.erp.stock.entity.StockLocation;
import com.erp.stock.entity.StockMove;
import com.erp.stock.entity.StockPicking;
import com.erp.stock.entity.StockQuant;
import com.erp.stock.repository.ProductRepository;
import com.erp.stock.entity.StockPickingType;
import com.erp.stock.repository.StockLocationRepository;
import com.erp.stock.repository.StockMoveRepository;
import com.erp.stock.repository.StockPickingRepository;
import com.erp.stock.repository.StockPickingTypeRepository;
import com.erp.stock.repository.StockQuantRepository;
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

    private static final BigDecimal ZERO = BigDecimal.ZERO;
    private static final String DEFAULT_REVENUE_ACCOUNT = "706100";
    private static final String DEFAULT_RECEIVABLE_ACCOUNT = "4111";
    private static final String TVA_ACCOUNT = "4431";

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

        invoice.getLines().clear();
        buildInvoiceLines(invoice, req.getLines());
        computeInvoiceTotals(invoice);

        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
    }

    /**
     * Valide une facture ou un avoir et génère l'écriture comptable OHADA.
     *
     * Facture (invoice):
     *   Dr 411x (client)  = Total TTC
     *   Cr 70x (produits) = Total HT par ligne
     *   Cr 4431 (TVA)     = Total TVA
     *
     * Avoir (credit_note) — écritures inversées :
     *   Cr 411x (client)  = Total TTC
     *   Dr 70x (produits) = Total HT par ligne
     *   Dr 4431 (TVA)     = Total TVA
     */
    public SalesInvoiceDTO postInvoice(Long id) {
        SalesInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));

        if (!"draft".equals(invoice.getState())) {
            throw new IllegalStateException("Seules les documents en brouillon peuvent être validés");
        }

        boolean isAvoir = "credit_note".equals(invoice.getType());
        Long companyId = invoice.getCompany().getId();
        LocalDate date = invoice.getDate();

        // ---- Trouver les comptes ----
        String receivableCode = (invoice.getPartner().getReceivableAccountCode() != null
                && !invoice.getPartner().getReceivableAccountCode().isBlank())
                ? invoice.getPartner().getReceivableAccountCode()
                : DEFAULT_RECEIVABLE_ACCOUNT;

        AccountAccount receivableAccount = accountRepo.findByCodeAndCompanyId(receivableCode, companyId)
                .orElseGet(() -> accountRepo.findByCodeStartingWithAndCompanyId("411", companyId)
                        .stream().findFirst()
                        .orElseThrow(() -> new EntityNotFoundException("Compte client 411x introuvable")));

        AccountAccount tvaAccount = accountRepo.findByCodeAndCompanyId(TVA_ACCOUNT, companyId)
                .orElseGet(() -> accountRepo.findByCodeStartingWithAndCompanyId("443", companyId)
                        .stream().findFirst().orElse(null));

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
        BigDecimal ttc = invoice.getTotalTTC() != null ? invoice.getTotalTTC() : ZERO;

        // Ligne client 411x : débit pour facture, crédit pour avoir
        moveLines.add(AccountMoveLine.builder()
                .move(move).account(receivableAccount).partner(invoice.getPartner())
                .name(libelle411).date(date)
                .debit(isAvoir ? ZERO : ttc)
                .credit(isAvoir ? ttc : ZERO)
                .journal(invoice.getJournal()).company(invoice.getCompany())
                .build());

        // Lignes produit 70x : crédit pour facture, débit pour avoir
        for (SalesInvoiceLine line : invoice.getLines()) {
            String accCode = (line.getAccountCode() != null && !line.getAccountCode().isBlank())
                    ? line.getAccountCode() : DEFAULT_REVENUE_ACCOUNT;

            AccountAccount revenueAccount = accountRepo.findByCodeAndCompanyId(accCode, companyId)
                    .orElseGet(() -> accountRepo.findByCodeStartingWithAndCompanyId("706", companyId)
                            .stream().findFirst()
                            .orElseGet(() -> accountRepo.findByCodeStartingWithAndCompanyId("70", companyId)
                                    .stream().findFirst()
                                    .orElseThrow(() -> new EntityNotFoundException("Compte de produit 70x introuvable"))));

            BigDecimal ht = line.getMontantHT() != null ? line.getMontantHT() : ZERO;
            if (ht.compareTo(ZERO) != 0) {
                moveLines.add(AccountMoveLine.builder()
                        .move(move).account(revenueAccount).partner(invoice.getPartner())
                        .name(line.getDescription()).date(date)
                        .debit(isAvoir ? ht : ZERO)
                        .credit(isAvoir ? ZERO : ht)
                        .journal(invoice.getJournal()).company(invoice.getCompany())
                        .build());
            }
        }

        // Ligne TVA 4431 : crédit pour facture, débit pour avoir
        BigDecimal totalTVA = invoice.getTotalTVA() != null ? invoice.getTotalTVA() : ZERO;
        if (totalTVA.compareTo(ZERO) != 0 && tvaAccount != null) {
            String libelleTVA = (isAvoir ? "TVA avoir " : "TVA collectée - ") + invoice.getName();
            moveLines.add(AccountMoveLine.builder()
                    .move(move).account(tvaAccount).partner(invoice.getPartner())
                    .name(libelleTVA).date(date)
                    .debit(isAvoir ? totalTVA : ZERO)
                    .credit(isAvoir ? ZERO : totalTVA)
                    .journal(invoice.getJournal()).company(invoice.getCompany())
                    .build());
        }

        move.setLines(moveLines);
        AccountMove savedMove = moveRepo.save(move);
        savedMove.setState("posted");
        moveRepo.save(savedMove);

        // Lier l'écriture au document
        invoice.setAccountMove(savedMove);
        invoice.setState("posted");
        invoice.setMontantPaye(ZERO);
        invoice.setMontantDu(invoice.getTotalTTC());

        invoiceRepo.save(invoice);

        // Créer les mouvements de stock physiques
        createStockMovementsOnInvoicePost(invoice, isAvoir);

        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
    }

    public SalesInvoiceDTO cancelInvoice(Long id) {
        SalesInvoice invoice = invoiceRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Facture introuvable: " + id));

        if (!"draft".equals(invoice.getState())) {
            throw new IllegalStateException("Seules les factures en brouillon peuvent être annulées");
        }
        invoice.setState("cancelled");
        return toInvoiceDTOWithPayments(invoiceRepo.save(invoice));
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
            treasuryAccount = accountRepo.findByCodeStartingWithAndCompanyId("521", company.getId())
                    .stream().findFirst()
                    .orElseGet(() -> accountRepo.findByCodeStartingWithAndCompanyId("571", company.getId())
                            .stream().findFirst()
                            .orElseThrow(() -> new EntityNotFoundException("Compte de trésorerie introuvable")));
        }

        // Compte client (crédit)
        String receivableCode = (invoice.getPartner().getReceivableAccountCode() != null
                && !invoice.getPartner().getReceivableAccountCode().isBlank())
                ? invoice.getPartner().getReceivableAccountCode()
                : DEFAULT_RECEIVABLE_ACCOUNT;

        AccountAccount receivableAccount = accountRepo.findByCodeAndCompanyId(receivableCode, company.getId())
                .orElseGet(() -> accountRepo.findByCodeStartingWithAndCompanyId("411", company.getId())
                        .stream().findFirst()
                        .orElseThrow(() -> new EntityNotFoundException("Compte client 411x introuvable")));

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
        BigDecimal du = (invoice.getTotalTTC() != null ? invoice.getTotalTTC() : ZERO).subtract(totalPaye);
        invoice.setMontantDu(du.max(ZERO));

        if (du.compareTo(ZERO) <= 0) {
            invoice.setState("paid");
        }
        invoiceRepo.save(invoice);

        return toPaymentDTO(payment);
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
        return partnerRepo.findByCompanyId(companyId).stream()
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

    // ===================== MÉTHODES PRIVÉES =====================

    private void createInvoiceFromOrder(SalesOrder order) {
        String invoiceName = generateInvoiceName(order.getCompany().getId(), order.getDate());

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
                .totalHT(order.getTotalHT())
                .totalTVA(order.getTotalTVA())
                .totalTTC(order.getTotalTTC())
                .montantPaye(ZERO)
                .montantDu(order.getTotalTTC())
                .build();

        List<SalesInvoiceLine> invoiceLines = order.getLines().stream()
                .map(ol -> SalesInvoiceLine.builder()
                        .invoice(invoice)
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

        invoice.setLines(invoiceLines);
        invoiceRepo.save(invoice);
    }

    private void validateStockAvailability(SalesOrder order) {
        Long companyId = order.getCompany().getId();
        for (SalesOrderLine line : order.getLines()) {
            if (line.getProductId() == null) continue;
            var productOpt = stockProductRepo.findById(line.getProductId());
            if (productOpt.isEmpty()) continue;
            var product = productOpt.get();
            if (!"product".equals(product.getType())) continue;
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
                productOpt = stockProductRepo.findByDefaultCodeAndCompanyId(line.getProductCode(), companyId);
            } else {
                continue;
            }
            if (productOpt.isEmpty() || !"product".equals(productOpt.get().getType())) continue;
            Long productId = productOpt.get().getId();

            StockQuant quant = stockQuantRepo
                    .findByProductIdAndLocationIdAndCompanyId(productId, internalLocId, companyId)
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
    private void createStockMovementsOnInvoicePost(SalesInvoice invoice, boolean isAvoir) {
        Long companyId = invoice.getCompany().getId();

        // Trouver les emplacements
        List<StockLocation> internalLocs = stockLocationRepo.findByUsage(companyId, "internal");
        List<StockLocation> customerLocs = stockLocationRepo.findByUsage(companyId, "customer");

        if (internalLocs.isEmpty()) {
            log.warn("Aucun emplacement interne trouvé pour la société {}. Mouvements de stock ignorés.", companyId);
            return;
        }

        StockLocation internalLoc = internalLocs.get(0);
        StockLocation customerLoc = customerLocs.isEmpty() ? internalLocs.get(0) : customerLocs.get(0);

        // Source et destination selon le type de document
        Long srcLocId = isAvoir ? customerLoc.getId() : internalLoc.getId();
        Long destLocId = isAvoir ? internalLoc.getId() : customerLoc.getId();
        String pickingCode = isAvoir ? "incoming" : "outgoing";

        // Trouver le type de picking (livraison ou réception)
        List<StockPickingType> pickingTypes = pickingTypeRepo.findByCompanyIdAndCodeOrderByNameAsc(companyId, pickingCode);
        Long pickingTypeId = pickingTypes.isEmpty() ? 1L : pickingTypes.get(0).getId();

        // Construire les lignes de mouvement pour les articles stockables
        // (SalesInvoiceLine n'a pas de productId, on résout via productCode)
        List<SalesInvoiceLine> productLines = invoice.getLines().stream()
                .filter(l -> l.getProductCode() != null && !l.getProductCode().isBlank())
                .filter(l -> {
                    var p = stockProductRepo.findByDefaultCodeAndCompanyId(l.getProductCode(), companyId).orElse(null);
                    return p != null && "product".equals(p.getType());
                })
                .collect(Collectors.toList());

        if (productLines.isEmpty()) return;

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
        for (SalesInvoiceLine line : productLines) {
            var product = stockProductRepo.findByDefaultCodeAndCompanyId(line.getProductCode(), companyId).orElse(null);
            if (product == null) continue;

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
                    .findByProductIdAndLocationIdAndCompanyId(product.getId(), internalLoc.getId(), companyId)
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
                    .build();
            computeLineTotals(line);
            order.getLines().add(line);
        }
    }

    private void buildInvoiceLines(SalesInvoice invoice, List<SalesInvoiceRequest.LineRequest> lineRequests) {
        if (lineRequests == null) return;
        for (SalesInvoiceRequest.LineRequest req : lineRequests) {
            SalesInvoiceLine line = SalesInvoiceLine.builder()
                    .invoice(invoice)
                    .productCode(req.getProductCode())
                    .description(req.getDescription())
                    .quantity(req.getQuantity() != null ? req.getQuantity() : BigDecimal.ONE)
                    .prixUnitaire(req.getPrixUnitaire() != null ? req.getPrixUnitaire() : ZERO)
                    .tauxRemise(req.getTauxRemise() != null ? req.getTauxRemise() : ZERO)
                    .tauxTVA(req.getTauxTVA() != null ? req.getTauxTVA() : ZERO)
                    .accountCode(req.getAccountCode())
                    .build();
            computeInvoiceLineTotals(line);
            invoice.getLines().add(line);
        }
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
        BigDecimal totalHT = ZERO, totalTVA = ZERO, totalTTC = ZERO;
        for (SalesInvoiceLine line : invoice.getLines()) {
            totalHT = totalHT.add(line.getMontantHT() != null ? line.getMontantHT() : ZERO);
            totalTVA = totalTVA.add(line.getMontantTVA() != null ? line.getMontantTVA() : ZERO);
            totalTTC = totalTTC.add(line.getMontantTTC() != null ? line.getMontantTTC() : ZERO);
        }
        invoice.setTotalHT(totalHT);
        invoice.setTotalTVA(totalTVA);
        invoice.setTotalTTC(totalTTC);
        invoice.setMontantDu(totalTTC);
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
        SalesInvoice invoice = invoiceRepo.findBySalesOrderId(order.getId()).orElse(null);

        List<SalesOrderDTO.LineDTO> lines = order.getLines().stream()
                .map(l -> SalesOrderDTO.LineDTO.builder()
                        .id(l.getId()).productId(l.getProductId()).productCode(l.getProductCode()).description(l.getDescription())
                        .quantity(l.getQuantity()).prixUnitaire(l.getPrixUnitaire())
                        .tauxRemise(l.getTauxRemise()).tauxTVA(l.getTauxTVA()).accountCode(l.getAccountCode())
                        .montantHT(l.getMontantHT()).montantTVA(l.getMontantTVA()).montantTTC(l.getMontantTTC())
                        .build())
                .collect(Collectors.toList());

        return SalesOrderDTO.builder()
                .id(order.getId()).name(order.getName())
                .date(order.getDate()).dateEcheance(order.getDateEcheance())
                .state(order.getState()).notes(order.getNotes())
                .partnerId(order.getPartner() != null ? order.getPartner().getId() : null)
                .partnerName(order.getPartner() != null ? order.getPartner().getName() : null)
                .journalId(order.getJournal() != null ? order.getJournal().getId() : null)
                .journalName(order.getJournal() != null ? order.getJournal().getName() : null)
                .companyId(order.getCompany() != null ? order.getCompany().getId() : null)
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
        List<SalesInvoiceDTO.LineDTO> lines = invoice.getLines().stream()
                .map(l -> SalesInvoiceDTO.LineDTO.builder()
                        .id(l.getId()).productCode(l.getProductCode()).description(l.getDescription())
                        .quantity(l.getQuantity()).prixUnitaire(l.getPrixUnitaire())
                        .tauxRemise(l.getTauxRemise()).tauxTVA(l.getTauxTVA()).accountCode(l.getAccountCode())
                        .montantHT(l.getMontantHT()).montantTVA(l.getMontantTVA()).montantTTC(l.getMontantTTC())
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
                .totalHT(invoice.getTotalHT()).totalTVA(invoice.getTotalTVA()).totalTTC(invoice.getTotalTTC())
                .montantPaye(invoice.getMontantPaye()).montantDu(invoice.getMontantDu())
                .lines(lines).payments(payments).createdAt(invoice.getCreatedAt())
                .build();
    }

    private InvoicePaymentDTO toPaymentDTO(InvoicePayment p) {
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

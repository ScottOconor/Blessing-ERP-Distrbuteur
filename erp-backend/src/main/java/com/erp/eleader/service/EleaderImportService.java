package com.erp.eleader.service;

import com.erp.accounting.entity.AccountJournal;
import com.erp.accounting.entity.Partner;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.accounting.repository.PartnerRepository;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.eleader.dto.EleaderImportLogDTO;
import com.erp.eleader.dto.EleaderImportResultDTO;
import com.erp.eleader.entity.EleaderConfig;
import com.erp.eleader.entity.EleaderImportLog;
import com.erp.eleader.repository.EleaderConfigRepository;
import com.erp.eleader.repository.EleaderImportLogRepository;
import com.erp.eleader.service.EleaderPdfParserService.ParsedEleaderInvoice;
import com.erp.eleader.service.EleaderPdfParserService.ParsedLine;
import com.erp.sales.entity.SalesOrder;
import com.erp.sales.entity.SalesOrderLine;
import com.erp.sales.repository.SalesOrderRepository;
import com.erp.sales.service.SalesService;
import com.erp.stock.entity.Product;
import com.erp.stock.repository.ProductRepository;
import com.erp.sync.service.SyncEventPublisher;
import com.erp.sync.entity.SyncEventType;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class EleaderImportService {

    private final EleaderPdfParserService     parserService;
    private final EleaderConfigService        configService;
    private final EleaderConfigRepository     configRepo;
    private final EleaderImportLogRepository  logRepo;
    private final SalesOrderRepository        orderRepo;
    private final SalesService                salesService;
    private final PartnerRepository           partnerRepo;
    private final ProductRepository           productRepo;
    private final AccountJournalRepository    journalRepo;
    private final CompanyRepository           companyRepo;
    private final SyncEventPublisher          syncEventPublisher;

    // ─────────────────────────────────────────────────────────────────────────
    //  Import principal
    // ─────────────────────────────────────────────────────────────────────────

    public EleaderImportResultDTO importPdf(MultipartFile file, String invoiceModel, Long companyId) {
        EleaderImportLog importLog = EleaderImportLog.builder()
                .filename(file.getOriginalFilename())
                .invoiceModel(invoiceModel)
                .status("parsing")
                .reference(generateReference(companyId))
                .company(companyRepo.findById(companyId)
                        .orElseThrow(() -> new EntityNotFoundException("Société introuvable")))
                .build();
        importLog = logRepo.save(importLog);

        try {
            // 1. Extraire le texte du PDF
            String text = parserService.extractText(file);
            importLog.setRawText(text);

            // 2. Détecter le modèle si non fourni
            if (invoiceModel == null || invoiceModel.isBlank()) {
                invoiceModel = parserService.detectModel(text);
            }
            importLog.setInvoiceModel(invoiceModel);

            // 3. Parser
            ParsedEleaderInvoice parsed = parserService.parse(text, invoiceModel);

            if (parsed.invoiceNumber == null || parsed.invoiceNumber.isBlank()) {
                return fail(importLog, "Numéro de facture eLeader introuvable dans le PDF.");
            }
            importLog.setEleaderReference(parsed.invoiceNumber);

            // 4. Vérifier doublon — bloquer uniquement si le BC existe encore et n'est pas annulé
            List<EleaderImportLog> existingLogs = logRepo.findByEleaderReferenceAndCompanyIdOrderByImportDateDesc(parsed.invoiceNumber, companyId);
            Optional<EleaderImportLog> activeSuccessLog = existingLogs.stream()
                    .filter(l -> "success".equals(l.getStatus()))
                    .filter(l -> l.getSalesOrder() != null)
                    .filter(l -> orderRepo.existsById(l.getSalesOrder().getId()))
                    .filter(l -> {
                        String state = orderRepo.findById(l.getSalesOrder().getId())
                                .map(SalesOrder::getState).orElse("cancelled");
                        return !"cancelled".equals(state);
                    })
                    .findFirst();
            if (activeSuccessLog.isPresent()) {
                return fail(importLog, "La facture eLeader " + parsed.invoiceNumber + " a déjà été importée (BC: "
                        + activeSuccessLog.get().getSalesOrder().getName() + "). Annulez le bon de commande pour ré-importer.");
            }

            if (parsed.clientName == null && parsed.clientCode == null) {
                return fail(importLog, "Aucun client trouvé dans le PDF.");
            }
            importLog.setClientName(parsed.clientName);

            // 5. Trouver le client
            Partner partner = findPartner(parsed.clientName, parsed.clientCode, companyId);
            if (partner == null) {
                return fail(importLog, "Client introuvable : \"" + parsed.clientName + "\" (code: " + parsed.clientCode
                        + "). Vérifiez que le client existe dans l'ERP.");
            }

            // 6. Récupérer la configuration eLeader
            importLog.setStatus("creating");
            EleaderConfig config = configRepo.findByCompanyId(companyId).orElse(null);

            // 7. Journal : utiliser le premier journal de vente actif disponible
            AccountJournal journal = resolveJournal(config, companyId);

            // 8. Construire les lignes du bon de commande
            Company company = companyRepo.findById(companyId)
                    .orElseThrow(() -> new EntityNotFoundException("Société introuvable"));

            List<String> skippedCodes = new ArrayList<>();
            List<SalesOrderLine> lines = buildOrderLines(parsed, config, companyId, skippedCodes);
            if (lines.isEmpty()) {
                return fail(importLog, "Aucune ligne produit trouvée dans le PDF.");
            }

            // 9. Créer le bon de commande
            SalesOrder order = createSalesOrder(parsed, partner, journal, company, lines);
            importLog.setSalesOrder(order);

            // 10. Auto-confirmation si activée
            String warning = null;
            if (config != null && config.isAutoConfirm()) {
                try {
                    salesService.confirmOrder(order.getId());
                } catch (Exception e) {
                    warning = "Confirmation automatique échouée : " + e.getMessage() + ". Le bon de commande reste en brouillon.";
                    log.warn("Auto-confirm eLeader order {} failed: {}", order.getName(), e.getMessage());
                }
            }
            // Produits/emballages du PDF non reconnus dans l'ERP : la commande a été créée avec ce
            // qui a pu être résolu, mais silencieusement AMPUTÉE des lignes ignorées si on ne le
            // signale pas — même risque que le bug de parsing de pourcentage déjà corrigé pour
            // l'import Excel des précomptes (import partiel réussi sans que personne ne le sache).
            if (!skippedCodes.isEmpty()) {
                String skippedMsg = "Code(s) produit non reconnu(s), ligne(s) ignorée(s) : " + String.join(", ", skippedCodes);
                warning = warning == null ? skippedMsg : warning + " — " + skippedMsg;
            }

            importLog.setStatus("success");
            importLog.setMessage("Bon de commande créé : " + order.getName());
            logRepo.save(importLog);

            EleaderImportResultDTO result = EleaderImportResultDTO.builder()
                    .success(true)
                    .message("Import réussi. Bon de commande créé : " + order.getName())
                    .eleaderReference(parsed.invoiceNumber)
                    .clientName(partner.getName())
                    .salesOrderId(order.getId())
                    .salesOrderName(order.getName())
                    .importLogId(importLog.getId())
                    .warning(warning)
                    .build();
            syncEventPublisher.publish(SyncEventType.ELEADER_IMPORT_DONE,
                    String.valueOf(order.getId()), result);
            return result;

        } catch (Exception e) {
            log.error("Erreur import eLeader PDF '{}': {}", file.getOriginalFilename(), e.getMessage(), e);
            return fail(importLog, "Erreur inattendue : " + e.getMessage());
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    //  Recherche client par nom
    // ─────────────────────────────────────────────────────────────────────────

    private Partner findPartner(String clientName, String clientCode, Long companyId) {
        // 1. Recherche exacte par code client
        if (clientCode != null && !clientCode.isBlank()) {
            Optional<Partner> byRef = partnerRepo.findFirstByRefAndCompanyId(clientCode, companyId);
            if (byRef.isPresent()) return byRef.get();
        }

        if (clientName == null || clientName.isBlank()) return null;

        // 2. Recherche exacte par nom (insensible à la casse)
        Optional<Partner> exact = partnerRepo.findByNameIgnoreCaseAndCompanyId(clientName.trim(), companyId);
        if (exact.isPresent()) return exact.get();

        // 3. Recherche partielle (le nom PDF peut être tronqué ou différent)
        List<Partner> partial = partnerRepo.findByNameContainingIgnoreCaseAndCompanyId(clientName.trim(), companyId);
        if (!partial.isEmpty()) return partial.get(0);

        // 4. Recherche inversée : le nom ERP contient-il le nom PDF ?
        String nameLower = clientName.trim().toLowerCase();
        List<Partner> all = partnerRepo.findByCompanyIdAndActiveTrue(companyId);
        for (Partner p : all) {
            if (p.getName() != null && p.getName().toLowerCase().contains(nameLower)) {
                return p;
            }
            if (p.getName() != null && nameLower.contains(p.getName().toLowerCase())) {
                return p;
            }
        }
        return null;
    }

    // ─────────────────────────────────────────────────────────────────────────
    //  Construction des lignes
    // ─────────────────────────────────────────────────────────────────────────

    private List<SalesOrderLine> buildOrderLines(ParsedEleaderInvoice parsed, EleaderConfig config, Long companyId,
            List<String> skippedCodes) {
        List<SalesOrderLine> lines = new ArrayList<>();

        // Produits principaux
        for (ParsedLine pl : parsed.productLines) {
            Product product = productRepo.findFirstByDefaultCodeAndCompanyId(pl.productCode, companyId).orElse(null);
            if (product == null) {
                log.warn("Produit eLeader inconnu: {} — ligne ignorée", pl.productCode);
                skippedCodes.add(pl.productCode);
                continue;
            }
            lines.add(buildLine(null, product, pl.quantity, companyId, false));
        }

        // Consignations (emballages reçus, qty +)
        for (ParsedLine pl : parsed.consignmentLines) {
            String erpCode = configService.resolveErpCode(config, pl.productCode, parsed.invoiceModel);
            Product product = productRepo.findFirstByDefaultCodeAndCompanyId(erpCode, companyId)
                    .or(() -> productRepo.findFirstByDefaultCodeAndCompanyId(pl.productCode, companyId))
                    .orElse(null);
            if (product == null) {
                log.warn("Produit emballage eLeader inconnu: {} → {} — ligne ignorée", pl.productCode, erpCode);
                skippedCodes.add(pl.productCode);
                continue;
            }
            lines.add(buildLine(null, product, pl.quantity, companyId, true));
        }

        // Déconsignations (retours d'emballages, qty -)
        for (ParsedLine pl : parsed.deconsignmentLines) {
            String erpCode = configService.resolveErpCode(config, pl.productCode, parsed.invoiceModel);
            Product product = productRepo.findFirstByDefaultCodeAndCompanyId(erpCode, companyId)
                    .or(() -> productRepo.findFirstByDefaultCodeAndCompanyId(pl.productCode, companyId))
                    .orElse(null);
            if (product == null) {
                log.warn("Produit déconsigne eLeader inconnu: {} → {} — ligne ignorée", pl.productCode, erpCode);
                skippedCodes.add(pl.productCode);
                continue;
            }
            // Quantité négative pour la déconsignation
            lines.add(buildLine(null, product, pl.quantity.negate(), companyId, true));
        }

        return lines;
    }

    private SalesOrderLine buildLine(SalesOrder order, Product product, BigDecimal qty, Long companyId, boolean isConsigne) {
        BigDecimal price = product.getSalePrice() != null ? product.getSalePrice() : BigDecimal.ZERO;
        BigDecimal tauxTVA = isConsigne ? BigDecimal.ZERO : new BigDecimal("19.25");
        BigDecimal absQty = qty.abs();
        boolean negative = qty.compareTo(BigDecimal.ZERO) < 0;

        BigDecimal ht = price.multiply(absQty).setScale(2, RoundingMode.HALF_UP);
        if (negative) ht = ht.negate();

        BigDecimal tva = isConsigne ? BigDecimal.ZERO
                : ht.multiply(tauxTVA).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
        BigDecimal ttc = ht.add(tva);

        return SalesOrderLine.builder()
                .order(order)
                .productId(product.getId())
                .productCode(product.getDefaultCode())
                .description(product.getName())
                .quantity(qty)
                .prixUnitaire(price)
                .tauxRemise(BigDecimal.ZERO)
                .tauxTVA(tauxTVA)
                .accountCode("7011")
                .categoryId(product.getCategoryId())
                .consigne(isConsigne)
                .montantHT(ht)
                .montantTVA(tva)
                .montantTTC(ttc)
                .build();
    }

    // ─────────────────────────────────────────────────────────────────────────
    //  Création du bon de commande
    // ─────────────────────────────────────────────────────────────────────────

    private SalesOrder createSalesOrder(ParsedEleaderInvoice parsed, Partner partner,
                                        AccountJournal journal, Company company,
                                        List<SalesOrderLine> lines) {
        LocalDate date = parsed.invoiceDate != null ? parsed.invoiceDate : LocalDate.now();
        String name = generateOrderName(company.getId(), date);

        SalesOrder order = SalesOrder.builder()
                .name(name)
                .date(date)
                .state("draft")
                .notes("Import eLeader — Facture : " + parsed.invoiceNumber)
                .partner(partner)
                .journal(journal)
                .company(company)
                .eleaderReference(parsed.invoiceNumber)
                .build();

        // Attacher les lignes à l'order
        lines.forEach(l -> l.setOrder(order));
        order.setLines(lines);

        computeTotals(order);
        return orderRepo.save(order);
    }

    private void computeTotals(SalesOrder order) {
        BigDecimal ht = BigDecimal.ZERO, tva = BigDecimal.ZERO, ttc = BigDecimal.ZERO;
        for (SalesOrderLine l : order.getLines()) {
            ht  = ht.add(l.getMontantHT()  != null ? l.getMontantHT()  : BigDecimal.ZERO);
            tva = tva.add(l.getMontantTVA() != null ? l.getMontantTVA() : BigDecimal.ZERO);
            ttc = ttc.add(l.getMontantTTC() != null ? l.getMontantTTC() : BigDecimal.ZERO);
        }
        order.setTotalHT(ht);
        order.setTotalTVA(tva);
        order.setTotalTTC(ttc);
        order.setTotalRemise(BigDecimal.ZERO);
    }

    // ─────────────────────────────────────────────────────────────────────────
    //  Journaux
    // ─────────────────────────────────────────────────────────────────────────

    private AccountJournal resolveJournal(EleaderConfig config, Long companyId) {
        if (config != null && config.getJournal() != null) {
            return config.getJournal();
        }
        // Fallback : chercher un journal de vente actif
        return journalRepo.findByCompanyIdAndActiveTrue(companyId).stream()
                .filter(j -> "sale".equalsIgnoreCase(j.getType()))
                .findFirst()
                .orElse(null);
    }

    // ─────────────────────────────────────────────────────────────────────────
    //  Lecture des logs
    // ─────────────────────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<EleaderImportLogDTO> getLogs(Long companyId) {
        return logRepo.findByCompanyIdOrderByImportDateDesc(companyId)
                .stream().map(this::toLogDTO).collect(Collectors.toList());
    }

    // ─────────────────────────────────────────────────────────────────────────
    //  Helpers
    // ─────────────────────────────────────────────────────────────────────────

    private EleaderImportResultDTO fail(EleaderImportLog log, String message) {
        log.setStatus("error");
        log.setMessage(message);
        logRepo.save(log);
        return EleaderImportResultDTO.builder()
                .success(false)
                .message(message)
                .importLogId(log.getId())
                .build();
    }

    private String generateReference(Long companyId) {
        long count = logRepo.countByCompanyId(companyId) + 1;
        return String.format("ELIMP/%05d", count);
    }

    private String generateOrderName(Long companyId, LocalDate date) {
        int year = date.getYear();
        Integer max = orderRepo.findMaxSequenceByCompanyAndYear(companyId, year);
        int next = (max != null ? max : 0) + 1;
        return String.format("BC-%d-%05d", year, next);
    }

    private EleaderImportLogDTO toLogDTO(EleaderImportLog l) {
        return EleaderImportLogDTO.builder()
                .id(l.getId())
                .reference(l.getReference())
                .filename(l.getFilename())
                .status(l.getStatus())
                .invoiceModel(l.getInvoiceModel())
                .eleaderReference(l.getEleaderReference())
                .clientName(l.getClientName())
                .rawText(l.getRawText())
                .message(l.getMessage())
                .salesOrderId(l.getSalesOrder() != null ? l.getSalesOrder().getId() : null)
                .salesOrderName(l.getSalesOrder() != null ? l.getSalesOrder().getName() : null)
                .importDate(l.getImportDate())
                .build();
    }
}

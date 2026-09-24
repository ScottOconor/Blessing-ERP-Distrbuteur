package com.erp.common.service;

import com.erp.accounting.entity.Partner;
import com.erp.accounting.repository.PartnerRepository;
import com.erp.common.dto.EnlevementDTO;
import com.erp.common.dto.EnlevementRapportDTO;
import com.erp.common.dto.FraisEnlevementSummaryDTO;
import com.erp.common.entity.Enlevement;
import com.erp.common.entity.EnlevementClient;
import com.erp.common.repository.EnlevementClientRepository;
import com.erp.common.repository.EnlevementRepository;
import com.erp.purchases.entity.PurchaseInvoice;
import com.erp.purchases.entity.PurchaseInvoiceLine;
import com.erp.purchases.repository.PurchaseInvoiceRepository;
import com.erp.sales.repository.SalesInvoiceRepository;
import com.erp.stock.entity.ProductCategory;
import com.erp.stock.repository.ProductCategoryRepository;
import com.erp.sync.service.SyncEventPublisher;
import com.erp.sync.entity.SyncEventType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class EnlevementService {

    private final EnlevementRepository enlevementRepo;
    private final EnlevementClientRepository enlevementClientRepo;
    private final ProductCategoryRepository categoryRepo;
    private final PartnerRepository partnerRepo;
    private final PurchaseInvoiceRepository purchaseInvoiceRepo;
    private final SalesInvoiceRepository salesInvoiceRepo;
    private final SyncEventPublisher syncEventPublisher;
    private final TenantGuard tenantGuard;

    @Transactional(readOnly = true)
    public List<EnlevementDTO> getAll(Long companyId) {
        return enlevementRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    public EnlevementDTO save(EnlevementDTO dto) {
        // companyId vient du corps de la requête (client) — ne jamais lui faire confiance pour
        // choisir SOUS QUELLE société la config est créée/modifiée (cf. generateFacture dans
        // RistourneService/RemiseService, même bug corrigé). Seul le companyId du JWT fait foi.
        Long companyId = com.erp.auth.SecurityUtils.currentCompanyId();

        ProductCategory cat = categoryRepo.findById(dto.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("Catégorie introuvable"));
        tenantGuard.check(cat.getCompanyId());

        Enlevement entity = enlevementRepo.findByCategoryIdAndCompanyId(dto.getCategoryId(), companyId)
                .orElse(Enlevement.builder().build());
        entity.setCategory(cat);
        entity.setMontantFixe(dto.getMontantFixe());
        entity.setCoutEnlevement(dto.getCoutEnlevement());
        entity.setCompanyId(companyId);
        entity.setActive(true);
        Enlevement saved = enlevementRepo.save(entity);

        // Sync client tariffs
        if (dto.getClients() != null) {
            List<Long> newPartnerIds = dto.getClients().stream()
                    .map(EnlevementDTO.EnlevementClientDTO::getPartnerId).collect(Collectors.toList());
            enlevementClientRepo.findByEnlevementId(saved.getId())
                    .stream()
                    .filter(ec -> !newPartnerIds.contains(ec.getPartner().getId()))
                    .forEach(enlevementClientRepo::delete);

            for (EnlevementDTO.EnlevementClientDTO clientDto : dto.getClients()) {
                Partner partner = partnerRepo.findById(clientDto.getPartnerId())
                        .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));
                EnlevementClient ec = enlevementClientRepo
                        .findByEnlevementIdAndPartnerId(saved.getId(), clientDto.getPartnerId())
                        .orElse(EnlevementClient.builder().build());
                ec.setEnlevement(saved);
                ec.setPartner(partner);
                ec.setMontant(clientDto.getMontant());
                ec.setSupplementAccountCode(clientDto.getSupplementAccountCode());
                enlevementClientRepo.save(ec);
            }
        }
        EnlevementDTO result = toDTO(saved);
        syncEventPublisher.publish(SyncEventType.ENLEVEMENT_SAVED, String.valueOf(saved.getId()), result);
        return result;
    }

    public void delete(Long id) {
        Enlevement e = enlevementRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Enlèvement introuvable"));
        tenantGuard.check(e.getCompanyId());
        e.setActive(false);
        enlevementRepo.save(e);
    }

    /**
     * Import bulk d'enlèvements depuis Excel.
     */
    public List<EnlevementDTO> importEnlevements(List<EnlevementImportRow> rows, Long companyId) {
        List<EnlevementDTO> result = new ArrayList<>();
        for (EnlevementImportRow row : rows) {
            try {
                java.util.Optional<ProductCategory> catOpt =
                        categoryRepo.findByNameIgnoreCaseAndCompanyId(row.getCategoryName(), companyId);
                if (catOpt.isEmpty()) continue;

                EnlevementDTO dto = EnlevementDTO.builder()
                        .categoryId(catOpt.get().getId())
                        .montantFixe(row.getMontantFixe() != null ? row.getMontantFixe() : BigDecimal.ZERO)
                        .coutEnlevement(row.getCoutEnlevement() != null ? row.getCoutEnlevement() : BigDecimal.ZERO)
                        .companyId(companyId)
                        .build();
                result.add(save(dto));
            } catch (Exception ignored) {}
        }
        return result;
    }

    // ── Rapport des coûts d'enlèvement sur une période ───────────────────────

    @Transactional(readOnly = true)
    public List<EnlevementRapportDTO> getRapport(Long companyId, LocalDate dateFrom, LocalDate dateTo) {
        List<PurchaseInvoice> invoices = purchaseInvoiceRepo
                .findPostedByCompanyAndDateRange(companyId, dateFrom, dateTo)
                .stream()
                .filter(i -> "invoice".equals(i.getType()))
                .collect(Collectors.toList());

        Map<Long, Enlevement> enlevByCategory = buildEnlevByCategory(companyId);
        if (enlevByCategory.isEmpty()) return Collections.emptyList();

        // partnerId → categoryName → [qty, rate]
        Map<Long, String> partnerNames = new LinkedHashMap<>();
        Map<Long, Map<String, BigDecimal[]>> data = new LinkedHashMap<>();
        // partnerId → list of article lines
        Map<Long, List<EnlevementRapportDTO.ArticleLine>> articleData = new LinkedHashMap<>();

        for (PurchaseInvoice inv : invoices) {
            Long pid = inv.getPartner().getId();
            partnerNames.putIfAbsent(pid, inv.getPartner().getName());
            accumulateCostLines(inv.getLines(), enlevByCategory,
                    data.computeIfAbsent(pid, k -> new LinkedHashMap<>()));
            // Lignes par article individuel
            for (PurchaseInvoiceLine line : inv.getLines()) {
                if (line.isConsigne() || line.getCategoryId() == null) continue;
                Enlevement enlev = enlevByCategory.get(line.getCategoryId());
                if (enlev == null) continue;
                BigDecimal rate = enlev.getCoutEnlevement() != null
                        ? enlev.getCoutEnlevement() : BigDecimal.ZERO;
                if (rate.compareTo(BigDecimal.ZERO) <= 0) continue;
                BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : BigDecimal.ZERO;
                if (qty.compareTo(BigDecimal.ZERO) <= 0) continue;
                articleData.computeIfAbsent(pid, k -> new java.util.ArrayList<>())
                        .add(EnlevementRapportDTO.ArticleLine.builder()
                                .productCode(line.getProductCode())
                                .productName(line.getDescription())
                                .categoryName(enlev.getCategory().getName())
                                .quantite(qty)
                                .montantUnitaire(rate)
                                .montantTotal(qty.multiply(rate).setScale(2, java.math.RoundingMode.HALF_UP))
                                .build());
            }
        }

        return buildResult(partnerNames, data, articleData);
    }

    // ── Coûts d'enlèvement pour une facture précise (vue informatif) ─────────

    @Transactional(readOnly = true)
    public List<EnlevementRapportDTO.Line> getInvoiceCosts(Long invoiceId) {
        PurchaseInvoice inv = purchaseInvoiceRepo.findById(invoiceId)
                .orElseThrow(() -> new IllegalArgumentException("Facture introuvable"));
        tenantGuard.check(inv.getCompany() != null ? inv.getCompany().getId() : null);

        Map<Long, Enlevement> enlevByCategory = buildEnlevByCategory(inv.getCompany().getId());
        if (enlevByCategory.isEmpty()) return Collections.emptyList();

        Map<String, BigDecimal[]> catMap = new LinkedHashMap<>();
        accumulateCostLines(inv.getLines(), enlevByCategory, catMap);

        return catMap.entrySet().stream()
                .map(e -> EnlevementRapportDTO.Line.builder()
                        .categoryName(e.getKey())
                        .quantite(e.getValue()[0])
                        .montantUnitaire(e.getValue()[1])
                        .montantTotal(e.getValue()[0].multiply(e.getValue()[1]))
                        .build())
                .filter(l -> l.getMontantTotal().compareTo(BigDecimal.ZERO) > 0)
                .collect(Collectors.toList());
    }

    // ── Résumé collecté/coût pour le dashboard (jamais via les écritures comptables) ──
    //
    // Collecté = ce qui est réellement facturé au client à la vente. SalesInvoice.fraisEnlevementTTC
    // est déjà calculé et stocké ligne par ligne au moment de la facturation (computeFraisEnlevement
    // dans SalesService, même tarif Enlevement/EnlevementClient, "logique Odoo") — on le lit
    // directement, on ne le recalcule pas nous-mêmes depuis les achats.
    //
    // Coût = charge interne. Il n'existe aucune écriture/champ direct pour ça à l'achat (pas de
    // colonne équivalente sur PurchaseInvoice/PurchaseInvoiceLine) — obligé de le dériver de la
    // quantité achetée × Enlevement.coutEnlevement, catégorie par catégorie.
    @Transactional(readOnly = true)
    public FraisEnlevementSummaryDTO getFraisEnlevementSummary(Long companyId, LocalDate dateFrom, LocalDate dateTo) {
        BigDecimal collecteRaw = salesInvoiceRepo.sumFraisEnlevementsVentesForPeriod(companyId, dateFrom, dateTo);
        BigDecimal collecte = collecteRaw != null ? collecteRaw : BigDecimal.ZERO;

        // PurchaseInvoiceLine.quantity est TOUJOURS stocké en valeur faciale POSITIVE, avoir compris
        // (cf. PurchaseService.createAvoirFromInvoice qui clamp explicitement qty >= 0) — il n'y a pas
        // de signe négatif dans la donnée brute. C'est nous qui devons inverser la contribution d'un
        // avoir selon inv.getType(), sinon un retour fournisseur s'ajoute au lieu de se soustraire.
        List<PurchaseInvoice> invoices = purchaseInvoiceRepo
                .findPostedByCompanyAndDateRange(companyId, dateFrom, dateTo);

        Map<Long, Enlevement> enlevByCategory = buildEnlevByCategory(companyId);
        BigDecimal cout = BigDecimal.ZERO;

        for (PurchaseInvoice inv : invoices) {
            BigDecimal sign = "credit_note".equals(inv.getType()) ? BigDecimal.valueOf(-1) : BigDecimal.ONE;
            for (PurchaseInvoiceLine line : inv.getLines()) {
                if (line.isConsigne() || line.getCategoryId() == null) continue;
                Enlevement enlev = enlevByCategory.get(line.getCategoryId());
                if (enlev == null) continue;
                BigDecimal rawQty = line.getQuantity() != null ? line.getQuantity() : BigDecimal.ZERO;
                if (rawQty.compareTo(BigDecimal.ZERO) == 0) continue;
                BigDecimal qty = rawQty.multiply(sign);
                BigDecimal coutRate = enlev.getCoutEnlevement() != null ? enlev.getCoutEnlevement() : BigDecimal.ZERO;
                cout = cout.add(qty.multiply(coutRate));
            }
        }

        collecte = collecte.setScale(2, java.math.RoundingMode.HALF_UP);
        cout = cout.setScale(2, java.math.RoundingMode.HALF_UP);
        return FraisEnlevementSummaryDTO.builder()
                .dateFrom(dateFrom).dateTo(dateTo)
                .collecte(collecte).cout(cout)
                .net(collecte.subtract(cout))
                .build();
    }

    // ── helpers ───────────────────────────────────────────────────────────────

    private Map<Long, Enlevement> buildEnlevByCategory(Long companyId) {
        return enlevementRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream()
                .collect(Collectors.toMap(e -> e.getCategory().getId(), e -> e));
    }

    private void accumulateCostLines(List<PurchaseInvoiceLine> lines,
                                  Map<Long, Enlevement> enlevByCategory,
                                  Map<String, BigDecimal[]> catMap) {
        for (PurchaseInvoiceLine line : lines) {
            if (line.isConsigne() || line.getCategoryId() == null) continue;
            Enlevement enlev = enlevByCategory.get(line.getCategoryId());
            if (enlev == null) continue;

            BigDecimal rate = enlev.getCoutEnlevement() != null
                    ? enlev.getCoutEnlevement() : BigDecimal.ZERO;
            if (rate.compareTo(BigDecimal.ZERO) <= 0) continue;

            String catName = enlev.getCategory().getName();
            BigDecimal qty = line.getQuantity() != null ? line.getQuantity() : BigDecimal.ZERO;

            if (!catMap.containsKey(catName)) {
                catMap.put(catName, new BigDecimal[]{BigDecimal.ZERO, rate});
            }
            catMap.get(catName)[0] = catMap.get(catName)[0].add(qty);
        }
    }

    private List<EnlevementRapportDTO> buildResult(Map<Long, String> partnerNames,
                                                    Map<Long, Map<String, BigDecimal[]>> data,
                                                    Map<Long, List<EnlevementRapportDTO.ArticleLine>> articleData) {
        return data.entrySet().stream().map(e -> {
            Long pid = e.getKey();
            List<EnlevementRapportDTO.Line> lines = e.getValue().entrySet().stream()
                    .map(le -> EnlevementRapportDTO.Line.builder()
                            .categoryName(le.getKey())
                            .quantite(le.getValue()[0])
                            .montantUnitaire(le.getValue()[1])
                            .montantTotal(le.getValue()[0].multiply(le.getValue()[1]))
                            .build())
                    .collect(Collectors.toList());
            BigDecimal total = lines.stream()
                    .map(EnlevementRapportDTO.Line::getMontantTotal)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
            return EnlevementRapportDTO.builder()
                    .partnerId(pid)
                    .partnerName(partnerNames.get(pid))
                    .lines(lines)
                    .articleLines(articleData.getOrDefault(pid, java.util.Collections.emptyList()))
                    .totalAmount(total)
                    .build();
        }).collect(Collectors.toList());
    }

    // ── inner class import ────────────────────────────────────────────────────

    @lombok.Data
    public static class EnlevementImportRow {
        private String categoryName;
        private BigDecimal montantFixe;
        private BigDecimal coutEnlevement;
        private Boolean active;
    }

    private EnlevementDTO toDTO(Enlevement e) {
        List<EnlevementDTO.EnlevementClientDTO> clients = enlevementClientRepo
                .findByEnlevementId(e.getId())
                .stream()
                .map(ec -> EnlevementDTO.EnlevementClientDTO.builder()
                        .id(ec.getId())
                        .partnerId(ec.getPartner().getId())
                        .partnerName(ec.getPartner().getName())
                        .montant(ec.getMontant())
                        .supplementAccountCode(ec.getSupplementAccountCode())
                        .build())
                .collect(Collectors.toList());
        return EnlevementDTO.builder()
                .id(e.getId())
                .categoryId(e.getCategory().getId())
                .categoryName(e.getCategory().getName())
                .montantFixe(e.getMontantFixe())
                .coutEnlevement(e.getCoutEnlevement())
                .companyId(e.getCompanyId())
                .active(e.isActive())
                .clients(clients)
                .build();
    }
}

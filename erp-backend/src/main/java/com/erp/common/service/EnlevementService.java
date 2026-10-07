package com.erp.common.service;

import com.erp.accounting.entity.Partner;
import com.erp.accounting.repository.AccountMoveLineRepository;
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
    private final AccountMoveLineRepository moveLineRepo;
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

    // ── Résumé collecté/coût pour le dashboard ──
    //
    // Collecté = solde du compte 701500 (crédit des frais HT à la facturation − débit des
    // ristournes Brasserie/Guinness), écritures validées uniquement — comme le CA lu sur 701100.
    //
    // Coût = exactement le total du Rapport des enlèvements (factures fournisseur validées,
    // quantité × Enlevement.coutEnlevement) pour que le dashboard et le rapport affichent la même valeur.
    @Transactional(readOnly = true)
    public FraisEnlevementSummaryDTO getFraisEnlevementSummary(Long companyId, LocalDate dateFrom, LocalDate dateTo) {
        BigDecimal collecteRaw = moveLineRepo.soldeCompteEnlevement(companyId, dateFrom, dateTo);
        BigDecimal collecte = collecteRaw != null ? collecteRaw : BigDecimal.ZERO;

        BigDecimal cout = getRapport(companyId, dateFrom, dateTo).stream()
                .map(EnlevementRapportDTO::getTotalAmount)
                .filter(Objects::nonNull)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

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

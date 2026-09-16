package com.erp.purchases.service;

import com.erp.purchases.dto.*;
import com.erp.purchases.entity.PurchaseInvoiceLine;
import com.erp.purchases.repository.PurchaseInvoiceLineRepository;
import com.erp.stock.repository.ProductCategoryRepository;
import com.erp.stock.repository.ProductRepository;
import com.erp.stock.repository.WarehouseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PurchaseStatsService {

    private final PurchaseInvoiceLineRepository lineRepo;
    private final ProductRepository productRepo;
    private final ProductCategoryRepository categoryRepo;
    private final WarehouseRepository warehouseRepo;
    private final com.erp.common.service.TenantGuard tenantGuard;
    private static final BigDecimal ZERO    = BigDecimal.ZERO;
    private static final BigDecimal NEG_ONE = BigDecimal.ONE.negate();

    public PurchaseStatsResponse getStats(PurchaseStatsRequest req) {
        // req.getCompanyId() vient du client — même correctif que côté ventes.
        tenantGuard.check(req.getCompanyId());
        String groupBy = req.getGroupBy() != null ? req.getGroupBy() : "fournisseur";
        Long companyId = req.getCompanyId();

        String productCode = null;
        if (req.getProductId() != null) {
            productCode = productRepo.findById(req.getProductId())
                .map(p -> p.getDefaultCode())
                .orElse(null);
        }

        boolean hasFilters = req.getPartnerId() != null
                || req.getCategoryId() != null
                || req.getProductId() != null
                || req.getWarehouseId() != null
                || (req.getCreatedBy() != null && !req.getCreatedBy().isBlank());

        String createdByParam = (req.getCreatedBy() != null && !req.getCreatedBy().isBlank())
                ? req.getCreatedBy() : null;

        List<PurchaseInvoiceLine> invoiceLines;
        List<PurchaseInvoiceLine> avoirLines;

        if (hasFilters) {
            invoiceLines = lineRepo.findStatsLinesFiltered(
                companyId, req.getDateFrom(), req.getDateTo(),
                req.getPartnerId(), req.getCategoryId(), productCode,
                createdByParam, req.getWarehouseId()
            );
            avoirLines = lineRepo.findAllAvoirLinesFiltered(
                companyId, req.getDateFrom(), req.getDateTo(),
                req.getPartnerId(), req.getCategoryId(), productCode,
                createdByParam, req.getWarehouseId()
            );
        } else {
            invoiceLines = lineRepo.findStatsLines(companyId, req.getDateFrom(), req.getDateTo());
            avoirLines   = lineRepo.findAllAvoirLines(companyId, req.getDateFrom(), req.getDateTo());
        }

        // Pré-charger noms de catégories et entrepôts (factures + avoirs)
        Map<Long, String> catNames = new HashMap<>();
        Map<Long, String> warehouseNames = new HashMap<>();
        for (PurchaseInvoiceLine l : invoiceLines) {
            if (l.getCategoryId() != null) catNames.put(l.getCategoryId(), null);
            if (l.getInvoice().getWarehouseId() != null) warehouseNames.put(l.getInvoice().getWarehouseId(), null);
        }
        for (PurchaseInvoiceLine l : avoirLines) {
            if (l.getCategoryId() != null) catNames.put(l.getCategoryId(), null);
            if (l.getInvoice().getWarehouseId() != null) warehouseNames.put(l.getInvoice().getWarehouseId(), null);
        }
        catNames.keySet().forEach(cid -> categoryRepo.findById(cid)
            .ifPresent(c -> catNames.put(cid, c.getName())));
        warehouseNames.keySet().forEach(wid -> warehouseRepo.findById(wid)
            .ifPresent(w -> warehouseNames.put(wid, w.getName())));

        // ── Accumulation séparée factures / avoirs ───────────────────────────────
        // amounts[gk][pk] = [qty, montantHT, montantTTC, remise]
        Map<String, Map<String, BigDecimal[]>> invoiceAmounts = new LinkedHashMap<>();
        Map<String, Map<String, BigDecimal[]>> avoirAmounts   = new LinkedHashMap<>();
        // meta[gk][pk] = [productCode, description]
        Map<String, Map<String, String[]>> invoiceMeta = new LinkedHashMap<>();
        Map<String, Map<String, String[]>> avoirMeta   = new LinkedHashMap<>();
        // groupMeta[gk] = [supplierRef, agent]
        Map<String, String[]> groupMeta = new LinkedHashMap<>();

        for (PurchaseInvoiceLine l : invoiceLines) {
            accumulateLine(l, BigDecimal.ONE, groupBy, catNames, warehouseNames,
                invoiceAmounts, invoiceMeta, groupMeta);
        }
        for (PurchaseInvoiceLine l : avoirLines) {
            accumulateLine(l, NEG_ONE, groupBy, catNames, warehouseNames,
                avoirAmounts, avoirMeta, groupMeta);
        }

        // ── Construction de la réponse ───────────────────────────────────────────
        List<PurchaseStatsSupplier> suppliers = new ArrayList<>();

        BigDecimal grandAchatsQty = ZERO, grandAchatsHT = ZERO, grandAchatsTTC = ZERO, grandAchatsRemise = ZERO;
        BigDecimal grandAvoirsQty = ZERO, grandAvoirsHT = ZERO, grandAvoirsTTC = ZERO;
        BigDecimal grandQty = ZERO, grandHT = ZERO, grandTTC = ZERO, grandRemise = ZERO;

        Set<String> allGroupKeys = new LinkedHashSet<>();
        allGroupKeys.addAll(invoiceAmounts.keySet());
        allGroupKeys.addAll(avoirAmounts.keySet());

        for (String gk : allGroupKeys.stream().sorted().collect(Collectors.toList())) {

            String[] gm = groupMeta.getOrDefault(gk, new String[]{"", ""});
            String supplierRef = gm[0];
            String agent       = gm[1];

            List<PurchaseStatsLine> statsLines = new ArrayList<>();

            BigDecimal groupAchatsQty = ZERO, groupAchatsHT = ZERO, groupAchatsTTC = ZERO, groupAchatsRemise = ZERO;
            BigDecimal groupAvoirsQty = ZERO, groupAvoirsHT = ZERO, groupAvoirsTTC = ZERO;

            // ── Lignes de factures ────────────────────────────────────────────
            Map<String, BigDecimal[]> invAmounts = invoiceAmounts.getOrDefault(gk, Collections.emptyMap());
            Map<String, String[]>     invMeta    = invoiceMeta.getOrDefault(gk, Collections.emptyMap());

            for (Map.Entry<String, BigDecimal[]> pEntry : invAmounts.entrySet().stream()
                    .sorted(Comparator.comparing(e -> {
                        String[] pm = invMeta.get(e.getKey());
                        return pm != null && pm[1] != null ? pm[1] : e.getKey();
                    }))
                    .collect(Collectors.toList())) {

                String pk = pEntry.getKey();
                BigDecimal[] vals = pEntry.getValue();
                BigDecimal qty        = vals[0].setScale(2, RoundingMode.HALF_UP);
                BigDecimal montantHT  = vals[1].setScale(2, RoundingMode.HALF_UP);
                BigDecimal montantTTC = vals[2].setScale(2, RoundingMode.HALF_UP);
                BigDecimal remise     = vals[3].setScale(2, RoundingMode.HALF_UP);

                BigDecimal prixAchat = qty.compareTo(ZERO) != 0
                    ? montantHT.divide(qty, 4, RoundingMode.HALF_UP) : ZERO;

                String[] pm = invMeta.get(pk);
                String productCodeMeta = pm != null ? pm[0] : null;
                String description     = pm != null ? pm[1] : pk;

                statsLines.add(PurchaseStatsLine.builder()
                    .productCode(productCodeMeta)
                    .productName(description)
                    .qty(qty)
                    .prixAchat(prixAchat.setScale(2, RoundingMode.HALF_UP))
                    .montantHT(montantHT)
                    .montantTTC(montantTTC)
                    .remise(remise)
                    .isAvoir(false)
                    .build());

                groupAchatsQty    = groupAchatsQty.add(qty);
                groupAchatsHT     = groupAchatsHT.add(montantHT);
                groupAchatsTTC    = groupAchatsTTC.add(montantTTC);
                groupAchatsRemise = groupAchatsRemise.add(remise);
            }

            // ── Lignes d'avoirs (quantités et montants négatifs) ──────────────
            Map<String, BigDecimal[]> avAmounts = avoirAmounts.getOrDefault(gk, Collections.emptyMap());
            Map<String, String[]>     avMeta    = avoirMeta.getOrDefault(gk, Collections.emptyMap());

            for (Map.Entry<String, BigDecimal[]> pEntry : avAmounts.entrySet().stream()
                    .sorted(Comparator.comparing(e -> {
                        String[] pm = avMeta.get(e.getKey());
                        return pm != null && pm[1] != null ? pm[1] : e.getKey();
                    }))
                    .collect(Collectors.toList())) {

                String pk = pEntry.getKey();
                BigDecimal[] vals = pEntry.getValue();
                BigDecimal qty        = vals[0].setScale(2, RoundingMode.HALF_UP);
                BigDecimal montantHT  = vals[1].setScale(2, RoundingMode.HALF_UP);
                BigDecimal montantTTC = vals[2].setScale(2, RoundingMode.HALF_UP);
                BigDecimal remise     = vals[3].setScale(2, RoundingMode.HALF_UP);

                BigDecimal prixAchat = qty.compareTo(ZERO) != 0
                    ? montantHT.divide(qty, 4, RoundingMode.HALF_UP) : ZERO;

                String[] pm = avMeta.get(pk);
                String productCodeMeta = pm != null ? pm[0] : null;
                String description     = pm != null ? pm[1] : pk;

                statsLines.add(PurchaseStatsLine.builder()
                    .productCode(productCodeMeta)
                    .productName(description)
                    .qty(qty)
                    .prixAchat(prixAchat.setScale(2, RoundingMode.HALF_UP))
                    .montantHT(montantHT)
                    .montantTTC(montantTTC)
                    .remise(remise)
                    .isAvoir(true)
                    .build());

                groupAvoirsQty  = groupAvoirsQty.add(qty);
                groupAvoirsHT   = groupAvoirsHT.add(montantHT);
                groupAvoirsTTC  = groupAvoirsTTC.add(montantTTC);
            }

            BigDecimal groupQty    = groupAchatsQty.add(groupAvoirsQty);
            BigDecimal groupHT     = groupAchatsHT.add(groupAvoirsHT);
            BigDecimal groupTTC    = groupAchatsTTC.add(groupAvoirsTTC);
            BigDecimal groupRemise = groupAchatsRemise;

            suppliers.add(PurchaseStatsSupplier.builder()
                .supplierName(gk)
                .supplierRef(supplierRef)
                .agent(agent)
                .lines(statsLines)
                .totalAchatsQty(groupAchatsQty.setScale(2, RoundingMode.HALF_UP))
                .totalAchatsHT(groupAchatsHT.setScale(2, RoundingMode.HALF_UP))
                .totalAchatsTTC(groupAchatsTTC.setScale(2, RoundingMode.HALF_UP))
                .totalAchatsRemise(groupAchatsRemise.setScale(2, RoundingMode.HALF_UP))
                .totalAvoirsQty(groupAvoirsQty.setScale(2, RoundingMode.HALF_UP))
                .totalAvoirsHT(groupAvoirsHT.setScale(2, RoundingMode.HALF_UP))
                .totalAvoirsTTC(groupAvoirsTTC.setScale(2, RoundingMode.HALF_UP))
                .totalQty(groupQty.setScale(2, RoundingMode.HALF_UP))
                .totalHT(groupHT.setScale(2, RoundingMode.HALF_UP))
                .totalTTC(groupTTC.setScale(2, RoundingMode.HALF_UP))
                .totalRemise(groupRemise.setScale(2, RoundingMode.HALF_UP))
                .build());

            grandAchatsQty    = grandAchatsQty.add(groupAchatsQty);
            grandAchatsHT     = grandAchatsHT.add(groupAchatsHT);
            grandAchatsTTC    = grandAchatsTTC.add(groupAchatsTTC);
            grandAchatsRemise = grandAchatsRemise.add(groupAchatsRemise);
            grandAvoirsQty    = grandAvoirsQty.add(groupAvoirsQty);
            grandAvoirsHT     = grandAvoirsHT.add(groupAvoirsHT);
            grandAvoirsTTC    = grandAvoirsTTC.add(groupAvoirsTTC);
            grandQty          = grandQty.add(groupQty);
            grandHT           = grandHT.add(groupHT);
            grandTTC          = grandTTC.add(groupTTC);
            grandRemise       = grandRemise.add(groupRemise);
        }

        int nbInvoices = (int) invoiceLines.stream()
            .map(l -> l.getInvoice().getId())
            .distinct().count();
        int nbAvoirs = (int) avoirLines.stream()
            .map(l -> l.getInvoice().getId())
            .distinct().count();

        return PurchaseStatsResponse.builder()
            .dateFrom(req.getDateFrom())
            .dateTo(req.getDateTo())
            .groupBy(groupBy)
            .suppliers(suppliers)
            .grandAchatsQty(grandAchatsQty.setScale(2, RoundingMode.HALF_UP))
            .grandAchatsHT(grandAchatsHT.setScale(2, RoundingMode.HALF_UP))
            .grandAchatsTTC(grandAchatsTTC.setScale(2, RoundingMode.HALF_UP))
            .grandAchatsRemise(grandAchatsRemise.setScale(2, RoundingMode.HALF_UP))
            .grandAvoirsQty(grandAvoirsQty.setScale(2, RoundingMode.HALF_UP))
            .grandAvoirsHT(grandAvoirsHT.setScale(2, RoundingMode.HALF_UP))
            .grandAvoirsTTC(grandAvoirsTTC.setScale(2, RoundingMode.HALF_UP))
            .grandTotalQty(grandQty.setScale(2, RoundingMode.HALF_UP))
            .grandTotalHT(grandHT.setScale(2, RoundingMode.HALF_UP))
            .grandTotalTTC(grandTTC.setScale(2, RoundingMode.HALF_UP))
            .grandTotalRemise(grandRemise.setScale(2, RoundingMode.HALF_UP))
            .totalInvoices(nbInvoices)
            .totalAvoirs(nbAvoirs)
            .build();
    }

    private void accumulateLine(
            PurchaseInvoiceLine l, BigDecimal sign,
            String groupBy, Map<Long, String> catNames, Map<Long, String> warehouseNames,
            Map<String, Map<String, BigDecimal[]>> amounts,
            Map<String, Map<String, String[]>> meta,
            Map<String, String[]> groupMeta) {

        String gk = resolveGroupKey(l, groupBy, catNames, warehouseNames);
        String pk = (l.getProductCode() != null && !l.getProductCode().isBlank())
            ? l.getProductCode() : (l.getDescription() != null ? l.getDescription() : "?");

        BigDecimal qty        = (l.getQuantity()   != null ? l.getQuantity()   : ZERO).multiply(sign);
        BigDecimal montantHT  = (l.getMontantHT()  != null ? l.getMontantHT()  : ZERO).multiply(sign);
        BigDecimal montantTTC = (l.getMontantTTC() != null ? l.getMontantTTC() : ZERO).multiply(sign);
        BigDecimal remise     = (l.getTotalRabaisLigne() != null ? l.getTotalRabaisLigne() : ZERO).multiply(sign);

        amounts.computeIfAbsent(gk, k -> new LinkedHashMap<>())
            .merge(pk, new BigDecimal[]{qty, montantHT, montantTTC, remise},
                (a, b) -> new BigDecimal[]{
                    a[0].add(b[0]), a[1].add(b[1]), a[2].add(b[2]), a[3].add(b[3])
                });

        meta.computeIfAbsent(gk, k -> new LinkedHashMap<>())
            .computeIfAbsent(pk, k -> new String[]{
                l.getProductCode(),
                l.getDescription()
            });

        if (!groupMeta.containsKey(gk)) {
            String supplierRef = "fournisseur".equals(groupBy) && l.getInvoice().getPartner() != null
                ? l.getInvoice().getPartner().getRef() : null;
            String agent = l.getInvoice().getCreatedBy();
            groupMeta.put(gk, new String[]{supplierRef, agent});
        }
    }

    private String resolveGroupKey(PurchaseInvoiceLine line, String groupBy,
                                   Map<Long, String> catNames, Map<Long, String> warehouseNames) {
        switch (groupBy) {
            case "category":
                Long catId = line.getCategoryId();
                return catId != null ? catNames.getOrDefault(catId, "Sans catégorie") : "Sans catégorie";
            case "product":
                return (line.getProductCode() != null && !line.getProductCode().isBlank())
                    ? line.getProductCode() : (line.getDescription() != null ? line.getDescription() : "?");
            case "agent":
                return line.getInvoice().getCreatedBy() != null
                    ? line.getInvoice().getCreatedBy() : "Inconnu";
            case "warehouse":
                Long wid = line.getInvoice().getWarehouseId();
                return wid != null ? warehouseNames.getOrDefault(wid, "Entrepôt #" + wid) : "Sans entrepôt";
            default: // "fournisseur"
                return line.getInvoice().getPartner() != null
                    ? line.getInvoice().getPartner().getName() : "Inconnu";
        }
    }
}

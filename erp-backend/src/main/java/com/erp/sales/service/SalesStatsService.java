package com.erp.sales.service;

import com.erp.sales.dto.*;
import com.erp.sales.entity.SalesInvoiceLine;
import com.erp.sales.repository.SalesInvoiceLineRepository;
import com.erp.stock.entity.Product;
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
public class SalesStatsService {

    private final SalesInvoiceLineRepository lineRepo;
    private final ProductRepository productRepo;
    private final ProductCategoryRepository categoryRepo;
    private final WarehouseRepository warehouseRepo;
    private final com.erp.stock.service.ProductValuationService productValuationService;
    private final com.erp.common.service.TenantGuard tenantGuard;
    private static final BigDecimal ZERO    = BigDecimal.ZERO;
    private static final BigDecimal NEG_ONE = BigDecimal.ONE.negate();

    public SalesStatsResponse getStats(SalesStatsRequest req) {
        // req.getCompanyId() vient du client — sans ce contrôle, n'importe quel utilisateur
        // authentifié pouvait lire le CA/marge d'une autre société en changeant ce champ.
        tenantGuard.check(req.getCompanyId());
        String groupBy = req.getGroupBy() != null ? req.getGroupBy() : "client";
        Long companyId = req.getCompanyId();

        boolean hasFilters = req.getPartnerId() != null
                || req.getCategoryId() != null
                || req.getProductId() != null
                || req.getWarehouseId() != null
                || (req.getCreatedBy() != null && !req.getCreatedBy().isBlank());

        String createdByParam = (req.getCreatedBy() != null && !req.getCreatedBy().isBlank())
                ? req.getCreatedBy() : null;

        List<SalesInvoiceLine> invoiceLines;
        List<SalesInvoiceLine> avoirLines;

        if (hasFilters) {
            invoiceLines = lineRepo.findStatsLinesFiltered(
                companyId, req.getDateFrom(), req.getDateTo(),
                req.getPartnerId(), req.getCategoryId(), req.getProductId(),
                createdByParam, req.getWarehouseId()
            );
            avoirLines = lineRepo.findAllAvoirLinesFiltered(
                companyId, req.getDateFrom(), req.getDateTo(),
                req.getPartnerId(), req.getCategoryId(), req.getProductId(),
                createdByParam, req.getWarehouseId()
            );
        } else {
            invoiceLines = lineRepo.findStatsLines(companyId, req.getDateFrom(), req.getDateTo());
            avoirLines   = lineRepo.findAllAvoirLines(companyId, req.getDateFrom(), req.getDateTo());
        }

        // Pré-charger les coûts par productId
        Set<Long> allProductIds = new HashSet<>();
        for (SalesInvoiceLine l : invoiceLines) if (l.getProductId() != null) allProductIds.add(l.getProductId());
        for (SalesInvoiceLine l : avoirLines)   if (l.getProductId() != null) allProductIds.add(l.getProductId());

        // CMUP par entrepôt : quand la requête est filtrée sur un entrepôt précis, le coût de
        // revient reflète CET entrepôt. Sans filtre (plusieurs entrepôts agrégés), le coût
        // "produit" global reste une approximation raisonnable — la marge par ligne ne peut de
        // toute façon pas être ventilée par entrepôt sans restructurer tout le pipeline
        // d'agrégation (regroupé par gk = client/vendeur/etc., pas par entrepôt).
        Map<Long, BigDecimal> costByProductId = new HashMap<>();
        if (!allProductIds.isEmpty()) {
            productRepo.findAllById(allProductIds)
                .forEach(p -> costByProductId.put(p.getId(),
                    req.getWarehouseId() != null
                        ? productValuationService.getWarehouseCmup(p.getId(), req.getWarehouseId(), p)
                        : (p.getStandardPrice() != null ? p.getStandardPrice() : ZERO)));
        }

        // Pré-charger noms de catégories et entrepôts (factures + avoirs)
        Map<Long, String> catNames = new HashMap<>();
        Map<Long, String> warehouseNames = new HashMap<>();
        for (SalesInvoiceLine l : invoiceLines) {
            if (l.getCategoryId() != null) catNames.put(l.getCategoryId(), null);
            if (l.getInvoice().getWarehouseId() != null) warehouseNames.put(l.getInvoice().getWarehouseId(), null);
        }
        for (SalesInvoiceLine l : avoirLines) {
            if (l.getCategoryId() != null) catNames.put(l.getCategoryId(), null);
            if (l.getInvoice().getWarehouseId() != null) warehouseNames.put(l.getInvoice().getWarehouseId(), null);
        }
        catNames.keySet().forEach(cid -> categoryRepo.findById(cid)
            .ifPresent(c -> catNames.put(cid, c.getName())));
        warehouseNames.keySet().forEach(wid -> warehouseRepo.findById(wid)
            .ifPresent(w -> warehouseNames.put(wid, w.getName())));

        // ── Accumulation séparée factures / avoirs ───────────────────────────────
        // amounts[gk][pk] = [qty, caHT, caTTC, remise]
        Map<String, Map<String, BigDecimal[]>> invoiceAmounts = new LinkedHashMap<>();
        Map<String, Map<String, BigDecimal[]>> avoirAmounts   = new LinkedHashMap<>();
        // meta[gk][pk] = [productCode, description, productId]
        Map<String, Map<String, String[]>> invoiceMeta = new LinkedHashMap<>();
        Map<String, Map<String, String[]>> avoirMeta   = new LinkedHashMap<>();
        // groupMeta[gk] = [clientRef, vendeur]
        Map<String, String[]> groupMeta = new LinkedHashMap<>();

        for (SalesInvoiceLine l : invoiceLines) {
            accumulateLine(l, BigDecimal.ONE, groupBy, catNames, warehouseNames, companyId,
                invoiceAmounts, invoiceMeta, groupMeta);
        }
        for (SalesInvoiceLine l : avoirLines) {
            accumulateLine(l, NEG_ONE, groupBy, catNames, warehouseNames, companyId,
                avoirAmounts, avoirMeta, groupMeta);
        }

        // ── Construction de la réponse ───────────────────────────────────────────
        List<SalesStatsClient> clients = new ArrayList<>();

        BigDecimal grandVentesQty = ZERO, grandVentesHT = ZERO, grandVentesTTC = ZERO;
        BigDecimal grandVentesRemise = ZERO, grandVentesCout = ZERO, grandVentesMargeHT = ZERO;
        BigDecimal grandAvoirsQty = ZERO, grandAvoirsHT = ZERO, grandAvoirsTTC = ZERO;
        BigDecimal grandQty = ZERO, grandHT = ZERO, grandTTC = ZERO;
        BigDecimal grandRemise = ZERO, grandCout = ZERO, grandMarge = ZERO;

        Set<String> allGroupKeys = new LinkedHashSet<>();
        allGroupKeys.addAll(invoiceAmounts.keySet());
        allGroupKeys.addAll(avoirAmounts.keySet());

        for (String gk : allGroupKeys.stream().sorted().collect(Collectors.toList())) {

            String[] gm = groupMeta.getOrDefault(gk, new String[]{"", ""});
            String clientRef = gm[0];
            String vendeur   = gm[1];

            List<SalesStatsLine> statsLines = new ArrayList<>();

            BigDecimal groupVentesQty = ZERO, groupVentesHT = ZERO, groupVentesTTC = ZERO;
            BigDecimal groupVentesRemise = ZERO, groupVentesCout = ZERO, groupVentesMargeHT = ZERO;
            BigDecimal groupAvoirsQty = ZERO, groupAvoirsHT = ZERO, groupAvoirsTTC = ZERO;
            BigDecimal groupAvoirsCout = ZERO;

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
                BigDecimal qty    = vals[0].setScale(2, RoundingMode.HALF_UP);
                BigDecimal caHT   = vals[1].setScale(2, RoundingMode.HALF_UP);
                BigDecimal caTTC  = vals[2].setScale(2, RoundingMode.HALF_UP);
                BigDecimal remise = vals[3].setScale(2, RoundingMode.HALF_UP);

                BigDecimal prixVente = qty.compareTo(ZERO) != 0
                    ? caHT.divide(qty, 4, RoundingMode.HALF_UP) : ZERO;

                String[] pm = invMeta.get(pk);
                String productCode = pm != null ? pm[0] : null;
                String description = pm != null ? pm[1] : pk;
                Long   productId   = (pm != null && pm[2] != null) ? Long.parseLong(pm[2]) : null;

                BigDecimal prixRevient = productId != null
                    ? costByProductId.getOrDefault(productId, ZERO) : ZERO;
                BigDecimal cout    = prixRevient.multiply(qty).setScale(2, RoundingMode.HALF_UP);
                BigDecimal margeHT = caHT.subtract(cout).setScale(2, RoundingMode.HALF_UP);
                BigDecimal tauxMarge = caHT.compareTo(ZERO) != 0
                    ? margeHT.divide(caHT, 4, RoundingMode.HALF_UP)
                        .multiply(BigDecimal.valueOf(100)).setScale(2, RoundingMode.HALF_UP)
                    : ZERO;

                statsLines.add(SalesStatsLine.builder()
                    .productCode(productCode)
                    .productName(description)
                    .qty(qty)
                    .prixVente(prixVente.setScale(2, RoundingMode.HALF_UP))
                    .caHT(caHT)
                    .cout(cout)
                    .prixRevient(prixRevient.setScale(2, RoundingMode.HALF_UP))
                    .margeHT(margeHT)
                    .tauxMarge(tauxMarge)
                    .caTTC(caTTC)
                    .remise(remise)
                    .isAvoir(false)
                    .build());

                groupVentesQty    = groupVentesQty.add(qty);
                groupVentesHT     = groupVentesHT.add(caHT);
                groupVentesTTC    = groupVentesTTC.add(caTTC);
                groupVentesRemise = groupVentesRemise.add(remise);
                groupVentesCout   = groupVentesCout.add(cout);
                groupVentesMargeHT = groupVentesMargeHT.add(margeHT);
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
                BigDecimal qty    = vals[0].setScale(2, RoundingMode.HALF_UP);
                BigDecimal caHT   = vals[1].setScale(2, RoundingMode.HALF_UP);
                BigDecimal caTTC  = vals[2].setScale(2, RoundingMode.HALF_UP);
                BigDecimal remise = vals[3].setScale(2, RoundingMode.HALF_UP);

                BigDecimal prixVente = qty.compareTo(ZERO) != 0
                    ? caHT.divide(qty, 4, RoundingMode.HALF_UP) : ZERO;

                String[] pm = avMeta.get(pk);
                String productCode = pm != null ? pm[0] : null;
                String description = pm != null ? pm[1] : pk;
                Long   productId   = (pm != null && pm[2] != null) ? Long.parseLong(pm[2]) : null;

                BigDecimal prixRevient = productId != null
                    ? costByProductId.getOrDefault(productId, ZERO) : ZERO;
                BigDecimal cout    = prixRevient.multiply(qty).setScale(2, RoundingMode.HALF_UP);
                BigDecimal margeHT = caHT.subtract(cout).setScale(2, RoundingMode.HALF_UP);
                BigDecimal tauxMarge = caHT.compareTo(ZERO) != 0
                    ? margeHT.divide(caHT, 4, RoundingMode.HALF_UP)
                        .multiply(BigDecimal.valueOf(100)).setScale(2, RoundingMode.HALF_UP)
                    : ZERO;

                statsLines.add(SalesStatsLine.builder()
                    .productCode(productCode)
                    .productName(description)
                    .qty(qty)
                    .prixVente(prixVente.setScale(2, RoundingMode.HALF_UP))
                    .caHT(caHT)
                    .cout(cout)
                    .prixRevient(prixRevient.setScale(2, RoundingMode.HALF_UP))
                    .margeHT(margeHT)
                    .tauxMarge(tauxMarge)
                    .caTTC(caTTC)
                    .remise(remise)
                    .isAvoir(true)
                    .build());

                groupAvoirsQty  = groupAvoirsQty.add(qty);
                groupAvoirsHT   = groupAvoirsHT.add(caHT);
                groupAvoirsTTC  = groupAvoirsTTC.add(caTTC);
                groupAvoirsCout = groupAvoirsCout.add(cout);
            }

            BigDecimal groupQty    = groupVentesQty.add(groupAvoirsQty);
            BigDecimal groupHT     = groupVentesHT.add(groupAvoirsHT);
            BigDecimal groupTTC    = groupVentesTTC.add(groupAvoirsTTC);
            BigDecimal groupRemise = groupVentesRemise;
            BigDecimal groupCout   = groupVentesCout.add(groupAvoirsCout);
            BigDecimal groupMarge  = groupHT.subtract(groupCout);

            clients.add(SalesStatsClient.builder()
                .clientName(gk)
                .clientRef(clientRef)
                .vendeur(vendeur)
                .lines(statsLines)
                .totalVentesQty(groupVentesQty.setScale(2, RoundingMode.HALF_UP))
                .totalVentesHT(groupVentesHT.setScale(2, RoundingMode.HALF_UP))
                .totalVentesTTC(groupVentesTTC.setScale(2, RoundingMode.HALF_UP))
                .totalVentesRemise(groupVentesRemise.setScale(2, RoundingMode.HALF_UP))
                .totalVentesCout(groupVentesCout.setScale(2, RoundingMode.HALF_UP))
                .totalVentesMargeHT(groupVentesMargeHT.setScale(2, RoundingMode.HALF_UP))
                .totalAvoirsQty(groupAvoirsQty.setScale(2, RoundingMode.HALF_UP))
                .totalAvoirsHT(groupAvoirsHT.setScale(2, RoundingMode.HALF_UP))
                .totalAvoirsTTC(groupAvoirsTTC.setScale(2, RoundingMode.HALF_UP))
                .totalQty(groupQty.setScale(2, RoundingMode.HALF_UP))
                .totalHT(groupHT.setScale(2, RoundingMode.HALF_UP))
                .totalTTC(groupTTC.setScale(2, RoundingMode.HALF_UP))
                .totalRemise(groupRemise.setScale(2, RoundingMode.HALF_UP))
                .totalCout(groupCout.setScale(2, RoundingMode.HALF_UP))
                .totalMargeHT(groupMarge.setScale(2, RoundingMode.HALF_UP))
                .build());

            grandVentesQty      = grandVentesQty.add(groupVentesQty);
            grandVentesHT       = grandVentesHT.add(groupVentesHT);
            grandVentesTTC      = grandVentesTTC.add(groupVentesTTC);
            grandVentesRemise   = grandVentesRemise.add(groupVentesRemise);
            grandVentesCout     = grandVentesCout.add(groupVentesCout);
            grandVentesMargeHT  = grandVentesMargeHT.add(groupVentesMargeHT);
            grandAvoirsQty      = grandAvoirsQty.add(groupAvoirsQty);
            grandAvoirsHT       = grandAvoirsHT.add(groupAvoirsHT);
            grandAvoirsTTC      = grandAvoirsTTC.add(groupAvoirsTTC);
            grandQty            = grandQty.add(groupQty);
            grandHT             = grandHT.add(groupHT);
            grandTTC            = grandTTC.add(groupTTC);
            grandRemise         = grandRemise.add(groupRemise);
            grandCout           = grandCout.add(groupCout);
            grandMarge          = grandMarge.add(groupMarge);
        }

        int nbInvoices = (int) invoiceLines.stream()
            .map(l -> l.getInvoice().getId())
            .distinct().count();
        int nbAvoirs = (int) avoirLines.stream()
            .map(l -> l.getInvoice().getId())
            .distinct().count();

        return SalesStatsResponse.builder()
            .dateFrom(req.getDateFrom())
            .dateTo(req.getDateTo())
            .groupBy(groupBy)
            .clients(clients)
            .grandVentesQty(grandVentesQty.setScale(2, RoundingMode.HALF_UP))
            .grandVentesHT(grandVentesHT.setScale(2, RoundingMode.HALF_UP))
            .grandVentesTTC(grandVentesTTC.setScale(2, RoundingMode.HALF_UP))
            .grandVentesRemise(grandVentesRemise.setScale(2, RoundingMode.HALF_UP))
            .grandVentesCout(grandVentesCout.setScale(2, RoundingMode.HALF_UP))
            .grandVentesMargeHT(grandVentesMargeHT.setScale(2, RoundingMode.HALF_UP))
            .grandAvoirsQty(grandAvoirsQty.setScale(2, RoundingMode.HALF_UP))
            .grandAvoirsHT(grandAvoirsHT.setScale(2, RoundingMode.HALF_UP))
            .grandAvoirsTTC(grandAvoirsTTC.setScale(2, RoundingMode.HALF_UP))
            .grandTotalQty(grandQty.setScale(2, RoundingMode.HALF_UP))
            .grandTotalHT(grandHT.setScale(2, RoundingMode.HALF_UP))
            .grandTotalTTC(grandTTC.setScale(2, RoundingMode.HALF_UP))
            .grandTotalRemise(grandRemise.setScale(2, RoundingMode.HALF_UP))
            .grandTotalCout(grandCout.setScale(2, RoundingMode.HALF_UP))
            .grandTotalMargeHT(grandMarge.setScale(2, RoundingMode.HALF_UP))
            .totalInvoices(nbInvoices)
            .totalAvoirs(nbAvoirs)
            .build();
    }

    private void accumulateLine(
            SalesInvoiceLine l, BigDecimal sign,
            String groupBy, Map<Long, String> catNames, Map<Long, String> warehouseNames,
            Long companyId,
            Map<String, Map<String, BigDecimal[]>> amounts,
            Map<String, Map<String, String[]>> meta,
            Map<String, String[]> groupMeta) {

        String gk = resolveGroupKey(l, groupBy, catNames, warehouseNames, companyId);
        String pk = (l.getProductCode() != null && !l.getProductCode().isBlank())
            ? l.getProductCode() : (l.getDescription() != null ? l.getDescription() : "?");

        BigDecimal qty    = (l.getQuantity()   != null ? l.getQuantity()   : ZERO).multiply(sign);
        BigDecimal caHT   = (l.getMontantHT()  != null ? l.getMontantHT()  : ZERO).multiply(sign);
        BigDecimal caTTC  = (l.getMontantTTC() != null ? l.getMontantTTC() : ZERO).multiply(sign);
        BigDecimal remise;
        if (l.getMontantHT() != null && l.getTauxRemise() != null
                && l.getTauxRemise().compareTo(ZERO) > 0) {
            remise = l.getMontantHT()
                .multiply(l.getTauxRemise())
                .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP)
                .multiply(sign);
        } else {
            remise = ZERO;
        }

        amounts.computeIfAbsent(gk, k -> new LinkedHashMap<>())
            .merge(pk, new BigDecimal[]{qty, caHT, caTTC, remise},
                (a, b) -> new BigDecimal[]{
                    a[0].add(b[0]), a[1].add(b[1]), a[2].add(b[2]), a[3].add(b[3])
                });

        meta.computeIfAbsent(gk, k -> new LinkedHashMap<>())
            .computeIfAbsent(pk, k -> new String[]{
                l.getProductCode(),
                l.getDescription(),
                l.getProductId() != null ? l.getProductId().toString() : null
            });

        if (!groupMeta.containsKey(gk)) {
            String clientRef = "client".equals(groupBy) && l.getInvoice().getPartner() != null
                ? l.getInvoice().getPartner().getRef() : null;
            String vendeur = l.getInvoice().getCreatedBy();
            groupMeta.put(gk, new String[]{clientRef, vendeur});
        }
    }

    private String resolveGroupKey(SalesInvoiceLine line, String groupBy,
                                   Map<Long, String> catNames, Map<Long, String> warehouseNames,
                                   Long companyId) {
        switch (groupBy) {
            case "category":
                Long catId = line.getCategoryId();
                return catId != null ? catNames.getOrDefault(catId, "Sans catégorie") : "Sans catégorie";
            case "product":
                return (line.getProductCode() != null && !line.getProductCode().isBlank())
                    ? line.getProductCode() : (line.getDescription() != null ? line.getDescription() : "?");
            case "vendeur":
                return line.getInvoice().getCreatedBy() != null
                    ? line.getInvoice().getCreatedBy() : "Inconnu";
            case "warehouse":
                Long wid = line.getInvoice().getWarehouseId();
                return wid != null ? warehouseNames.getOrDefault(wid, "Entrepôt #" + wid) : "Sans entrepôt";
            default: // "client"
                return line.getInvoice().getPartner() != null
                    ? line.getInvoice().getPartner().getName() : "Inconnu";
        }
    }
}

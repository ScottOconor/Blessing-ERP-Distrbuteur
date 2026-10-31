package com.erp.sales.service;

import com.erp.sales.dto.*;
import com.erp.sales.entity.SalesInvoiceLine;
import com.erp.sales.repository.SalesInvoiceLineRepository;
import com.erp.stock.entity.Product;
import com.erp.stock.repository.ProductCategoryRepository;
import com.erp.stock.repository.ProductRepository;
import com.erp.stock.repository.WarehouseRepository;
import com.erp.stock.service.ProductValuationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalTime;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SalesStatsService {

    private final SalesInvoiceLineRepository lineRepo;
    private final com.erp.sales.repository.SalesInvoiceRepository invoiceRepo;
    private final com.erp.sales.repository.InvoicePaymentRepository paymentRepo;
    private final ProductRepository productRepo;
    private final ProductCategoryRepository categoryRepo;
    private final WarehouseRepository warehouseRepo;
    private final ProductValuationService productValuationService;
    private static final BigDecimal ZERO    = BigDecimal.ZERO;
    private static final BigDecimal NEG_ONE = BigDecimal.ONE.negate();

    public SalesStatsResponse getStats(SalesStatsRequest req) {
        // req.getCompanyId() vient du client — sans ce contrôle, n'importe quel utilisateur
        // authentifié pouvait lire le CA/marge d'une autre société en changeant ce champ.
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

        // Coût de revient de chaque ligne = CMUP de l'entrepôt de la facture EN VIGUEUR À LA DATE de
        // la facture (historique des prix), pas le CMUP d'aujourd'hui : une vente de janvier garde sa
        // marge de janvier même si le coût a bougé depuis. Facture sans entrepôt → prix de revient
        // global de l'article à cette date.
        Map<Long, List<SalesInvoiceLine>> linesByWarehouse = new HashMap<>();
        for (SalesInvoiceLine l : invoiceLines) linesByWarehouse.computeIfAbsent(l.getInvoice().getWarehouseId(), k -> new ArrayList<>()).add(l);
        for (SalesInvoiceLine l : avoirLines)   linesByWarehouse.computeIfAbsent(l.getInvoice().getWarehouseId(), k -> new ArrayList<>()).add(l);
        Map<Long, ProductValuationService.CostTimeline> costsByWarehouse = new HashMap<>();
        linesByWarehouse.forEach((whId, lines) -> costsByWarehouse.put(whId, productValuationService.loadCostTimeline(whId,
                lines.stream().map(SalesInvoiceLine::getProductId).filter(Objects::nonNull).collect(Collectors.toSet()))));
        Function<SalesInvoiceLine, BigDecimal> unitCostOf = l -> {
            if (l.getProductId() == null || l.getInvoice().getDate() == null) return ZERO;
            return costsByWarehouse.get(l.getInvoice().getWarehouseId())
                .costAt(l.getProductId(), l.getInvoice().getDate().atTime(LocalTime.MAX));
        };

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
        // amounts[gk][pk] = [qty, caHT, caTTC, remise, cout]
        Map<String, Map<String, BigDecimal[]>> invoiceAmounts = new LinkedHashMap<>();
        Map<String, Map<String, BigDecimal[]>> avoirAmounts   = new LinkedHashMap<>();
        // meta[gk][pk] = [productCode, description, productId]
        Map<String, Map<String, String[]>> invoiceMeta = new LinkedHashMap<>();
        Map<String, Map<String, String[]>> avoirMeta   = new LinkedHashMap<>();
        // groupMeta[gk] = [clientRef, vendeur]
        Map<String, String[]> groupMeta = new LinkedHashMap<>();

        for (SalesInvoiceLine l : invoiceLines) {
            accumulateLine(l, BigDecimal.ONE, groupBy, catNames, warehouseNames, companyId, unitCostOf,
                invoiceAmounts, invoiceMeta, groupMeta);
        }
        for (SalesInvoiceLine l : avoirLines) {
            accumulateLine(l, NEG_ONE, groupBy, catNames, warehouseNames, companyId, unitCostOf,
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

                BigDecimal cout    = vals[4].setScale(2, RoundingMode.HALF_UP);
                BigDecimal prixRevient = qty.compareTo(ZERO) != 0
                    ? cout.divide(qty, 4, RoundingMode.HALF_UP) : ZERO;
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

                BigDecimal cout    = vals[4].setScale(2, RoundingMode.HALF_UP);
                BigDecimal prixRevient = qty.compareTo(ZERO) != 0
                    ? cout.divide(qty, 4, RoundingMode.HALF_UP) : ZERO;
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
            Long companyId, Function<SalesInvoiceLine, BigDecimal> unitCostOf,
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

        BigDecimal cout = qty.multiply(unitCostOf.apply(l));

        amounts.computeIfAbsent(gk, k -> new LinkedHashMap<>())
            .merge(pk, new BigDecimal[]{qty, caHT, caTTC, remise, cout},
                (a, b) -> new BigDecimal[]{
                    a[0].add(b[0]), a[1].add(b[1]), a[2].add(b[2]), a[3].add(b[3]), a[4].add(b[4])
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

    // ══════════════════════════════════════════════════════════════════════════
    // Rapport des ventes : une ligne par facture (client, réf. facture, réf. bon,
    // HT, TTC, colis, casiers, PET) + total général.
    // ══════════════════════════════════════════════════════════════════════════

    public RapportVentesResponse getRapportVentes(RapportVentesRequest req) {
        Long companyId = req.getCompanyId();

        List<com.erp.sales.entity.SalesInvoice> invoices = invoiceRepo.findForRapportVentes(
            companyId, req.getDateFrom(), req.getDateTo(), req.isIncludeAvoirs(),
            req.getWarehouseId(), req.getPartnerId(), req.getSellerId());

        // Lignes chargées par paquets (limite de paramètres du IN côté PostgreSQL)
        List<Long> invoiceIds = invoices.stream().map(com.erp.sales.entity.SalesInvoice::getId).toList();
        Map<Long, List<SalesInvoiceLine>> linesByInvoice = new HashMap<>();
        Map<Long, BigDecimal> encaisseByInvoice = new HashMap<>();
        for (int from = 0; from < invoiceIds.size(); from += 1000) {
            List<Long> chunk = invoiceIds.subList(from, Math.min(from + 1000, invoiceIds.size()));
            for (Object[] r : paymentRepo.sumCashPaymentsByInvoiceIds(chunk)) {
                encaisseByInvoice.put((Long) r[0], (BigDecimal) r[1]);
            }
            for (SalesInvoiceLine l : lineRepo.findByInvoiceIds(chunk)) {
                linesByInvoice.computeIfAbsent(l.getInvoice().getId(), k -> new ArrayList<>()).add(l);
            }
        }

        // Catalogue de la société : unité (casier) et catégorie (PET / emballage) par article
        Map<Long, Product> productsById = new HashMap<>();
        Map<String, Product> productsByCode = new HashMap<>();
        for (Product p : productRepo.findByCompanyIdOrderByNameAsc(companyId)) {
            productsById.put(p.getId(), p);
            if (p.getDefaultCode() != null) productsByCode.putIfAbsent(p.getDefaultCode().trim().toUpperCase(), p);
        }
        Map<Long, String> catNames = new HashMap<>();
        categoryRepo.findAll().forEach(c -> catNames.put(c.getId(), c.getName()));
        Map<Long, String> warehouseNames = new HashMap<>();
        invoices.stream().map(com.erp.sales.entity.SalesInvoice::getWarehouseId).filter(Objects::nonNull).distinct()
            .forEach(wid -> warehouseRepo.findById(wid).ifPresent(w -> warehouseNames.put(wid, w.getName())));

        List<RapportVentesLine> lines = new ArrayList<>();
        BigDecimal gHT = ZERO, gTTC = ZERO, gColis = ZERO, gCasiers = ZERO, gPET = ZERO;
        BigDecimal gConsigne = ZERO, gDeconsigne = ZERO, gEncaisse = ZERO;
        int nbFactures = 0, nbAvoirs = 0;

        for (com.erp.sales.entity.SalesInvoice inv : invoices) {
            boolean avoir = "credit_note".equals(inv.getType());
            BigDecimal sign = avoir ? NEG_ONE : BigDecimal.ONE;
            if (avoir) nbAvoirs++; else nbFactures++;

            BigDecimal colis = ZERO, casiers = ZERO, pet = ZERO, consigne = ZERO, deconsigne = ZERO;
            for (SalesInvoiceLine l : linesByInvoice.getOrDefault(inv.getId(), Collections.emptyList())) {
                Product p = l.getProductId() != null ? productsById.get(l.getProductId()) : null;
                if (p == null && l.getProductCode() != null) p = productsByCode.get(l.getProductCode().trim().toUpperCase());

                // Emballage testé avant le filtre article/service : les consignes sont souvent
                // typées « service » au catalogue, voire sans article lié.
                Long catId = l.getCategoryId() != null ? l.getCategoryId() : (p != null ? p.getCategoryId() : null);
                String cat = catId != null ? catNames.getOrDefault(catId, "") : "";
                if (isEmballage(l, cat, companyId)) {
                    // Quantité positive = emballage consigné chez le client, négative = déconsigne
                    BigDecimal q = l.getQuantity() != null ? l.getQuantity() : ZERO;
                    if (q.signum() > 0) consigne = consigne.add(q.multiply(sign));
                    else deconsigne = deconsigne.add(q.negate().multiply(sign));
                    continue;
                }
                if (p == null || "service".equals(p.getType())) continue;

                BigDecimal qty = (l.getQuantity() != null ? l.getQuantity() : ZERO).abs().multiply(sign);
                colis = colis.add(qty);
                if (isPet(cat)) {
                    pet = pet.add(qty);
                } else if (p.getUomName() != null && p.getUomName().trim().toUpperCase().startsWith("CASIER")) {
                    casiers = casiers.add(qty);
                }
            }

            BigDecimal ht  = (inv.getTotalHT()  != null ? inv.getTotalHT()  : ZERO).abs().multiply(sign);
            BigDecimal ttc = (inv.getTotalTTC() != null ? inv.getTotalTTC() : ZERO).abs().multiply(sign);
            // Sur un avoir, un paiement est un remboursement au client : décaissement, donc négatif
            BigDecimal encaisse = encaisseByInvoice.getOrDefault(inv.getId(), ZERO).abs().multiply(sign);

            lines.add(RapportVentesLine.builder()
                .invoiceId(inv.getId())
                .date(inv.getDate())
                .clientName(inv.getPartner() != null ? inv.getPartner().getName() : "Inconnu")
                .clientRef(inv.getPartner() != null ? inv.getPartner().getRef() : null)
                .invoiceRef(inv.getName())
                .bonRef(inv.getSalesOrder() != null ? inv.getSalesOrder().getName() : null)
                .originalInvoiceRef(inv.getOriginalInvoice() != null ? inv.getOriginalInvoice().getName() : null)
                .warehouseName(inv.getWarehouseId() != null ? warehouseNames.get(inv.getWarehouseId()) : null)
                .avoir(avoir)
                .totalHT(ht.setScale(2, RoundingMode.HALF_UP))
                .totalTTC(ttc.setScale(2, RoundingMode.HALF_UP))
                .montantEncaisse(encaisse.setScale(2, RoundingMode.HALF_UP))
                .qteConsigne(consigne.setScale(2, RoundingMode.HALF_UP))
                .qteDeconsigne(deconsigne.setScale(2, RoundingMode.HALF_UP))
                .totalColis(colis.setScale(2, RoundingMode.HALF_UP))
                .totalCasiers(casiers.setScale(2, RoundingMode.HALF_UP))
                .totalPET(pet.setScale(2, RoundingMode.HALF_UP))
                .build());

            gHT = gHT.add(ht); gTTC = gTTC.add(ttc);
            gColis = gColis.add(colis); gCasiers = gCasiers.add(casiers); gPET = gPET.add(pet);
            gConsigne = gConsigne.add(consigne); gDeconsigne = gDeconsigne.add(deconsigne);
            gEncaisse = gEncaisse.add(encaisse);
        }

        return RapportVentesResponse.builder()
            .dateFrom(req.getDateFrom())
            .dateTo(req.getDateTo())
            .lines(lines)
            .nbFactures(nbFactures)
            .nbAvoirs(nbAvoirs)
            .totalHT(gHT.setScale(2, RoundingMode.HALF_UP))
            .totalTTC(gTTC.setScale(2, RoundingMode.HALF_UP))
            .montantEncaisse(gEncaisse.setScale(2, RoundingMode.HALF_UP))
            .qteConsigne(gConsigne.setScale(2, RoundingMode.HALF_UP))
            .qteDeconsigne(gDeconsigne.setScale(2, RoundingMode.HALF_UP))
            .totalColis(gColis.setScale(2, RoundingMode.HALF_UP))
            .totalCasiers(gCasiers.setScale(2, RoundingMode.HALF_UP))
            .totalPET(gPET.setScale(2, RoundingMode.HALF_UP))
            .build();
    }

    /**
     * Emballage / consigne, exclu des colis : ligne consignée, code consigne, catégorie
     * « Emballages », ou bouteille vide vendue à l'unité (catégories « BOUTEILLE SABC »,
     * « AUTRE BOUTEILLE »… — mais pas « FAMILLE GUINNESS BOUTEILLE 12 », vendue en casier).
     */
    private boolean isEmballage(SalesInvoiceLine l, String category, Long companyId) {
        if (l.isConsigne() || com.erp.common.ConsigneCodes.isConsigne(l.getProductCode(), companyId)) return true;
        String cat = category.toUpperCase();
        if (cat.contains("EMBALLAGE")) return true;
        return cat.startsWith("BOUTEILLE") || cat.startsWith("AUTRE BOUTEILLE");
    }

    /** Produits PET : catégories « PET Grand model », « PET petit model »… */
    private boolean isPet(String category) {
        return category.toUpperCase().matches("(^|.*[^A-Z])PET([^A-Z].*|$)");
    }
}

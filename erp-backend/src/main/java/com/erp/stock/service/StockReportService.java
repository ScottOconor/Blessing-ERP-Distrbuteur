package com.erp.stock.service;

import com.erp.stock.dto.*;
import com.erp.stock.entity.*;
import com.erp.stock.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class StockReportService {

    private final WarehouseRepository warehouseRepo;
    private final StockLocationRepository locationRepo;
    private final StockMoveRepository moveRepo;
    private final ProductRepository productRepo;
    private final ProductValuationService productValuationService;
    private final com.erp.stock.repository.ProductWarehouseValuationRepository warehouseValuationRepo;

    private static final BigDecimal ZERO = BigDecimal.ZERO;
    private static final DateTimeFormatter DT_FMT = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");

    // =========================================================================
    // RAPPORT ANALYTIQUE  (résumé par entrepôt)
    // =========================================================================

    public List<StockReportWarehouseDTO> getAnalyticalReport(
            Long companyId,
            List<Long> warehouseIds,
            LocalDate dateFrom,
            LocalDate dateTo,
            Long productId,
            Long categoryId) {

        LocalDateTime dtFrom = dateFrom.atStartOfDay();
        LocalDateTime dtTo   = dateTo.atTime(23, 59, 59);

        List<StockReportWarehouseDTO> result = new ArrayList<>();

        for (Long warehouseId : warehouseIds) {
            Warehouse warehouse = warehouseRepo.findById(warehouseId).orElse(null);
            if (warehouse == null) continue;

            List<Long> locIds = getInternalLocationIds(warehouseId);
            if (locIds.isEmpty()) continue;

            List<Long> productIds = resolveProductIds(companyId, locIds, dtTo, productId, categoryId);
            if (productIds.isEmpty()) continue;

            // Préchargement par lot : l'ancienne version faisait 4 requêtes d'agrégation +
            // 1 lookup produit + 1 lookup CMUP PAR PRODUIT (5-6 requêtes × produits × entrepôts,
            // des centaines pour un rapport multi-entrepôts). Un seul aller-retour DB par lot ici.
            Map<Long, Product> productById = productRepo.findAllById(productIds).stream()
                    .collect(Collectors.toMap(Product::getId, p -> p));
            Map<Long, BigDecimal> initInByProduct  = toBigDecimalMap(moveRepo.sumIncomingBeforeBatch(productIds, locIds, dtFrom));
            Map<Long, BigDecimal> initOutByProduct = toBigDecimalMap(moveRepo.sumOutgoingBeforeBatch(productIds, locIds, dtFrom));
            Map<Long, BigDecimal> inQtyByProduct   = toBigDecimalMap(moveRepo.sumInQtyBetweenBatch(productIds, locIds, dtFrom, dtTo));
            Map<Long, BigDecimal> outQtyByProduct  = toBigDecimalMap(moveRepo.sumOutQtyBetweenBatch(productIds, locIds, dtFrom, dtTo));
            Map<Long, BigDecimal> cmupByProduct = warehouseValuationRepo.findByWarehouseIdAndCompanyId(warehouseId, companyId)
                    .stream().collect(Collectors.toMap(ProductWarehouseValuation::getProductId,
                            v -> nvl(v.getStandardPrice())));

            List<StockReportLineDTO> lines = new ArrayList<>();
            BigDecimal totInitQty = ZERO, totInQty = ZERO, totOutQty = ZERO;
            BigDecimal totInitVal = ZERO, totInVal  = ZERO, totOutVal  = ZERO;

            for (Long pid : productIds) {
                Product product = productById.get(pid);
                if (product == null) continue;

                BigDecimal initIn  = initInByProduct.getOrDefault(pid, ZERO);
                BigDecimal initOut = initOutByProduct.getOrDefault(pid, ZERO);
                BigDecimal initQty = initIn.subtract(initOut);

                BigDecimal inQty  = inQtyByProduct.getOrDefault(pid, ZERO);
                BigDecimal outQty = outQtyByProduct.getOrDefault(pid, ZERO);
                BigDecimal finalQty = initQty.add(inQty).subtract(outQty);

                if (initQty.compareTo(ZERO) == 0 && inQty.compareTo(ZERO) == 0 && outQty.compareTo(ZERO) == 0)
                    continue;

                BigDecimal cost = cmupByProduct.containsKey(pid) ? cmupByProduct.get(pid) : nvl(product.getStandardPrice());
                BigDecimal initVal  = round(initQty.multiply(cost));
                BigDecimal inVal    = round(inQty.multiply(cost));
                BigDecimal outVal   = round(outQty.multiply(cost));
                BigDecimal finalVal = round(finalQty.multiply(cost));

                StockReportLineDTO line = new StockReportLineDTO();
                line.setProductId(pid);
                line.setProductCode(product.getDefaultCode());
                line.setProductName(product.getName());
                line.setUomName(product.getUomName());
                line.setInitialQty(initQty);
                line.setInQty(inQty);
                line.setOutQty(outQty.negate());
                line.setFinalQty(finalQty);
                line.setUnitCost(cost);
                line.setInitialValue(initVal);
                line.setInValue(inVal);
                line.setOutValue(outVal.negate());
                line.setFinalValue(finalVal);
                lines.add(line);

                totInitQty = totInitQty.add(initQty);
                totInQty   = totInQty.add(inQty);
                totOutQty  = totOutQty.add(outQty);
                totInitVal = totInitVal.add(initVal);
                totInVal   = totInVal.add(inVal);
                totOutVal  = totOutVal.add(outVal);
            }

            lines.sort(Comparator.comparing(l ->
                (l.getProductCode() != null ? l.getProductCode() : "") + l.getProductName()));

            if (!lines.isEmpty()) {
                StockReportWarehouseDTO dto = new StockReportWarehouseDTO();
                dto.setWarehouseName(warehouse.getName());
                dto.setLines(lines);
                dto.setTotalInitialQty(totInitQty);
                dto.setTotalInQty(totInQty);
                dto.setTotalOutQty(totOutQty.negate());
                dto.setTotalFinalQty(totInitQty.add(totInQty).subtract(totOutQty));
                dto.setTotalInitialValue(totInitVal);
                dto.setTotalInValue(totInVal);
                dto.setTotalOutValue(totOutVal.negate());
                dto.setTotalFinalValue(totInitVal.add(totInVal).subtract(totOutVal));
                result.add(dto);
            }
        }
        return result;
    }

    // =========================================================================
    // FICHE DÉTAILLÉE  (mouvement par mouvement, solde progressif)
    // =========================================================================

    public List<StockDetailedProductDTO> getDetailedReport(
            Long companyId,
            List<Long> warehouseIds,
            LocalDate dateFrom,
            LocalDate dateTo,
            Long productId,
            Long categoryId) {

        LocalDateTime dtFrom = dateFrom.atStartOfDay();
        LocalDateTime dtTo   = dateTo.atTime(23, 59, 59);

        // Collecter toutes les locations internes des entrepôts demandés
        Map<Long, String> locIdToWarehouseName = new LinkedHashMap<>();
        Map<Long, Long> locIdToWarehouseId = new HashMap<>();
        for (Long warehouseId : warehouseIds) {
            Warehouse wh = warehouseRepo.findById(warehouseId).orElse(null);
            if (wh == null) continue;
            List<StockLocation> locs = locationRepo.findByWarehouseIdOrderByNameAsc(warehouseId)
                    .stream().filter(l -> "internal".equals(l.getUsage())).collect(Collectors.toList());
            for (StockLocation loc : locs) {
                locIdToWarehouseName.put(loc.getId(), wh.getName() + " / " + loc.getName());
                locIdToWarehouseId.put(loc.getId(), warehouseId);
            }
        }
        if (locIdToWarehouseName.isEmpty()) return Collections.emptyList();

        List<Long> allLocIds = new ArrayList<>(locIdToWarehouseName.keySet());
        List<Long> productIds = resolveProductIds(companyId, allLocIds, dtTo, productId, categoryId);

        List<StockDetailedProductDTO> result = new ArrayList<>();

        for (Long pid : productIds) {
            Product product = productRepo.findById(pid).orElse(null);
            if (product == null) continue;

            List<StockDetailedLocationDTO> locationSections = new ArrayList<>();

            for (Map.Entry<Long, String> entry : locIdToWarehouseName.entrySet()) {
                Long locId = entry.getKey();
                String locName = entry.getValue();
                Long locWarehouseId = locIdToWarehouseId.get(locId);
                BigDecimal cost = nvl(productValuationService.getWarehouseCmup(pid, locWarehouseId, product));

                BigDecimal initIn  = moveRepo.sumIncomingBeforeLoc(pid, locId, dtFrom);
                BigDecimal initOut = moveRepo.sumOutgoingBeforeLoc(pid, locId, dtFrom);
                BigDecimal initQty = initIn.subtract(initOut);

                List<StockMove> moves = moveRepo.findDetailedMovements(pid, locId, dtFrom, dtTo);
                if (initQty.compareTo(ZERO) == 0 && moves.isEmpty()) continue;

                BigDecimal runQty = initQty;
                BigDecimal runVal = round(initQty.multiply(cost));
                List<StockDetailedMoveDTO> moveDTOs = new ArrayList<>();

                for (StockMove m : moves) {
                    boolean isIn  = locId.equals(m.getLocationDestId());
                    boolean isOut = locId.equals(m.getLocationId());
                    if (isIn && isOut) continue; // mouvement interne à la même location

                    BigDecimal qtyIn  = isIn  ? m.getQtyDone() : ZERO;
                    BigDecimal qtyOut = isOut ? m.getQtyDone() : ZERO;
                    BigDecimal delta  = isIn  ? m.getQtyDone() : m.getQtyDone().negate();
                    runQty = runQty.add(delta);
                    runVal = runVal.add(round(delta.multiply(cost)));

                    StockDetailedMoveDTO md = new StockDetailedMoveDTO();
                    md.setDate(m.getPicking().getDateDone() != null
                            ? m.getPicking().getDateDone().format(DT_FMT) : "");
                    // L'origine référence le document métier reconnu par l'utilisateur (le transfert
                    // d'origine pour une réception inter-dépôts, le bon de réception d'achat pour le
                    // transfert Dépôt Achat → Magasin) — à privilégier sur le nom auto-généré du picking
                    // technique (REC-INT/xxxx, INT/xxxx) qui l'a effectivement appliqué au stock.
                    md.setRef(m.getPicking().getOrigin() != null ? m.getPicking().getOrigin()
                            : (m.getPicking().getName() != null ? m.getPicking().getName() : ""));
                    md.setPartner(m.getPicking().getPartnerName() != null ? m.getPicking().getPartnerName() : "");
                    md.setQtyIn(qtyIn.compareTo(ZERO) > 0 ? qtyIn : null);
                    md.setQtyOut(qtyOut.compareTo(ZERO) > 0 ? qtyOut : null);
                    md.setQtyBalance(runQty);
                    md.setValueBalance(runVal);
                    moveDTOs.add(md);
                }

                StockDetailedLocationDTO locDTO = new StockDetailedLocationDTO();
                locDTO.setLocationName(locName);
                locDTO.setInitialQty(initQty);
                locDTO.setInitialValue(round(initQty.multiply(cost)));
                locDTO.setMovements(moveDTOs);
                locDTO.setFinalQty(runQty);
                locDTO.setFinalValue(runVal);
                locationSections.add(locDTO);
            }

            if (!locationSections.isEmpty()) {
                StockDetailedProductDTO dto = new StockDetailedProductDTO();
                dto.setProductCode(product.getDefaultCode());
                dto.setProductName(product.getName());
                // Coût "d'en-tête" au niveau produit — chaque section d'entrepôt ci-dessous porte
                // déjà sa propre valorisation par CMUP d'entrepôt (locDTO.initialValue/finalValue) ;
                // ce champ résumé reste une référence globale, pas rattachée à un entrepôt précis.
                dto.setUnitCost(nvl(product.getStandardPrice()));
                dto.setLocations(locationSections);
                result.add(dto);
            }
        }

        result.sort(Comparator.comparing(p ->
            (p.getProductCode() != null ? p.getProductCode() : "") + p.getProductName()));
        return result;
    }

    // =========================================================================
    // Helpers
    // =========================================================================

    private List<Long> getInternalLocationIds(Long warehouseId) {
        return locationRepo.findByWarehouseIdOrderByNameAsc(warehouseId)
                .stream()
                .filter(l -> "internal".equals(l.getUsage()))
                .map(StockLocation::getId)
                .collect(Collectors.toList());
    }

    private List<Long> resolveProductIds(Long companyId, List<Long> locIds, LocalDateTime dtTo,
                                          Long productId, Long categoryId) {
        if (productId != null) return List.of(productId);

        // Produits ayant eu un mouvement dans ces locations
        List<Long> fromMoves = moveRepo.findDistinctProductIds(locIds, dtTo);

        if (categoryId != null) {
            // Filtrer par catégorie
            Set<Long> catProducts = productRepo.findByCompanyIdAndCategoryId(companyId, categoryId).stream()
                    .map(Product::getId)
                    .collect(Collectors.toSet());
            return fromMoves.stream().filter(catProducts::contains).collect(Collectors.toList());
        }
        return fromMoves;
    }

    private Map<Long, BigDecimal> toBigDecimalMap(List<Object[]> rows) {
        Map<Long, BigDecimal> map = new HashMap<>();
        for (Object[] row : rows) map.put((Long) row[0], (BigDecimal) row[1]);
        return map;
    }

    private BigDecimal nvl(BigDecimal v) {
        return v != null ? v : ZERO;
    }

    private BigDecimal round(BigDecimal v) {
        return v.setScale(0, RoundingMode.HALF_UP);
    }
}

package com.erp.stock.service;

import com.erp.audit.service.AuditService;
import com.erp.sales.entity.SalesInvoice;
import com.erp.sales.entity.SalesInvoiceLine;
import com.erp.sales.repository.SalesInvoiceLineRepository;
import com.erp.stock.entity.*;
import com.erp.stock.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;
import java.util.stream.Collectors;

/**
 * TEMPORAIRE — reprise unique de l'historique, à retirer une fois exécutée sur les installations
 * (avec son écran config/reconciliation, ses deux routes de StockController et son entrée de menu).
 *
 * Remet les données passées aux règles actuelles : CMUP de chaque entrepôt recalculé en rejouant
 * les achats dans l'ordre, CMUP et prix d'achat figés sur les lignes de vente qui ne les ont pas,
 * valeur des stocks établie au prix d'achat. Aucune écriture comptable ni facture n'est modifiée.
 * Rejouable : une ligne de vente déjà figée n'est jamais retouchée.
 */
@Service
@RequiredArgsConstructor
public class PurchaseReconciliationService {

    private static final BigDecimal ZERO = BigDecimal.ZERO;

    private final StockMoveRepository moveRepo;
    private final StockLocationRepository locationRepo;
    private final ProductRepository productRepo;
    private final WarehouseRepository warehouseRepo;
    private final ProductWarehouseValuationRepository warehouseValuationRepo;
    private final ProductPriceHistoryRepository priceHistoryRepo;
    private final SalesInvoiceLineRepository salesLineRepo;
    private final ProductValuationService productValuationService;
    private final StockLedgerService stockLedger;
    private final AuditService auditService;

    public record CmupChange(Long productId, String productCode, String productName, Long warehouseId,
                             String warehouseName, BigDecimal oldCmup, BigDecimal newCmup) {}

    public record Preview(int purchasesReplayed, int cmupChanges, List<CmupChange> changes,
                          int salesLinesToFreeze, int stocksToInitialize, int stocksWithoutPrice) {}

    public record Result(int purchasesReplayed, int cmupUpdated, int salesLinesFrozen,
                         int stocksInitialized, int stocksWithoutPrice) {}

    private record Replay(List<ProductPriceHistory> rows, Map<String, BigDecimal> cmups, int purchases) {}

    @Transactional(readOnly = true)
    public Preview preview(Long companyId) {
        Replay replay = replay(companyId);
        List<CmupChange> changes = changes(companyId, replay);
        List<StockLedgerService.InitLine> init = stockLedger.previewInitialization(companyId);
        return new Preview(replay.purchases(), changes.size(), changes,
                salesLineRepo.findWithoutFrozenCost(companyId).size(),
                (int) init.stream().filter(StockLedgerService.InitLine::canInitialize).count(),
                (int) init.stream().filter(l -> !l.canInitialize()).count());
    }

    @Transactional
    public Result apply(Long companyId) {
        Replay replay = replay(companyId);
        int updated = changes(companyId, replay).size();

        priceHistoryRepo.deleteCmupHistory(companyId);
        priceHistoryRepo.saveAll(replay.rows());
        Map<String, ProductWarehouseValuation> current = warehouseValuationRepo.findByCompanyId(companyId).stream()
                .collect(Collectors.toMap(v -> v.getProductId() + ":" + v.getWarehouseId(), v -> v, (a, b) -> a));
        replay.cmups().forEach((key, cmup) -> {
            String[] ids = key.split(":");
            ProductWarehouseValuation v = current.get(key);
            if (v == null) {
                v = ProductWarehouseValuation.builder().productId(Long.valueOf(ids[0]))
                        .warehouseId(Long.valueOf(ids[1])).companyId(companyId).build();
            }
            v.setStandardPrice(cmup);
            warehouseValuationRepo.save(v);
        });

        int frozen = freezeSales(companyId);
        StockLedgerService.InitResult init = stockLedger.initialize(companyId);
        auditService.log("STOCK_VALUATION", companyId, "Reprise des achats", "RECONCILED",
                replay.purchases() + " achat(s) rejoué(s), " + updated + " CMUP modifié(s), "
                        + frozen + " ligne(s) de vente figée(s), " + init.initialized() + " stock(s) initialisé(s)",
                companyId);
        return new Result(replay.purchases(), updated, frozen, init.initialized(), init.skipped());
    }

    /** Rejoue les mouvements : seul un achat (ou une entrée reçue d'une agence, ou un transfert)
     *  fait évoluer le CMUP ; un retour client, un inventaire ou une annulation ne changent que la
     *  quantité. Une première quantité sans achat antérieur prend le prix d'achat de la fiche. */
    private Replay replay(Long companyId) {
        List<StockMove> moves = moveRepo.findAllDoneChronological(companyId);
        Map<Long, StockLocation> locations = locationRepo.findAll().stream()
                .collect(Collectors.toMap(StockLocation::getId, l -> l));
        Set<Long> productIds = moves.stream().map(StockMove::getProductId).collect(Collectors.toSet());
        ProductValuationService.CostTimeline fiche = productValuationService.loadCostTimeline(null, productIds);
        Map<Long, Product> products = productRepo.findAllById(productIds).stream()
                .collect(Collectors.toMap(Product::getId, p -> p));
        String user = auditService.getCurrentUsername();

        Map<String, BigDecimal> qty = new HashMap<>();
        Map<String, BigDecimal> cmups = new HashMap<>();
        List<ProductPriceHistory> rows = new ArrayList<>();
        int purchases = 0;

        for (StockMove m : moves) {
            BigDecimal q = m.getQtyDone();
            if (q == null || q.compareTo(ZERO) <= 0) continue;
            StockLocation src = locations.get(m.getLocationId());
            StockLocation dest = locations.get(m.getLocationDestId());
            Long srcWh = internalWarehouse(src);
            Long destWh = internalWarehouse(dest);
            if (srcWh != null && srcWh.equals(destWh)) continue;

            if (srcWh != null) {
                String k = m.getProductId() + ":" + srcWh;
                qty.put(k, qty.getOrDefault(k, ZERO).subtract(q).max(ZERO));
            }
            if (destWh == null) continue;

            String k = m.getProductId() + ":" + destWh;
            BigDecimal qtyBefore = qty.getOrDefault(k, ZERO);
            BigDecimal oldCmup = cmups.get(k);
            StockPicking picking = m.getPicking();
            LocalDateTime date = picking.getDateDone();
            BigDecimal purchasePrice = m.getPurchasePrice() != null ? m.getPurchasePrice()
                    : purchasePriceAt(fiche, products.get(m.getProductId()), m.getProductId(), date);

            BigDecimal entryPrice = entryPrice(m, picking, src, srcWh, purchasePrice);
            if (entryPrice == null && oldCmup == null) entryPrice = purchasePrice; // quantité initiale
            if (entryPrice != null && entryPrice.compareTo(ZERO) > 0) {
                BigDecimal base = oldCmup != null ? oldCmup : ZERO;
                BigDecimal newCmup = ProductValuationService.computeCmup(base, oldCmup != null ? qtyBefore : ZERO, q, entryPrice);
                cmups.put(k, newCmup);
                if (isPurchase(picking, src)) purchases++;
                rows.add(ProductPriceHistory.builder()
                        .productId(m.getProductId()).warehouseId(destWh).companyId(companyId)
                        .priceType(ProductPriceHistory.TYPE_CMUP)
                        .oldPrice(base).newPrice(newCmup)
                        .qtyBefore(qtyBefore).qtyIn(q).priceIn(entryPrice)
                        .effectiveDate(date)
                        .source(ProductPriceHistory.SOURCE_RECONSTRUCTION)
                        .reference(picking.getName())
                        .createdBy(user)
                        .build());
            }
            qty.put(k, qtyBefore.add(q));
        }
        return new Replay(rows, cmups, purchases);
    }

    /** Prix qui nourrit le CMUP pour cette entrée ; null si elle ne le fait pas évoluer. */
    private static BigDecimal entryPrice(StockMove m, StockPicking picking, StockLocation src, Long srcWh,
                                         BigDecimal purchasePrice) {
        if (isPurchase(picking, src)) return m.getPriceUnit();
        if (srcWh == null) return null;
        String notes = picking.getNotes() != null ? picking.getNotes() : "";
        // Dépôt Achat → magasin / avaries : suite de la réception, au prix facturé.
        if (notes.startsWith("Transfert réception") || notes.startsWith("Transfert avaries")) return m.getPriceUnit();
        return purchasePrice;
    }

    private static boolean isPurchase(StockPicking picking, StockLocation src) {
        String name = picking.getName() != null ? picking.getName() : "";
        if (name.startsWith("ADJ/") || name.startsWith("ANN/ACH")) return false;
        return "inter_company".equals(picking.getPickingTypeCode())
                || (src != null && "supplier".equals(src.getUsage()));
    }

    private static Long internalWarehouse(StockLocation l) {
        return l != null && "internal".equals(l.getUsage()) ? l.getWarehouseId() : null;
    }

    private static BigDecimal purchasePriceAt(ProductValuationService.CostTimeline fiche, Product product,
                                              Long productId, LocalDateTime at) {
        BigDecimal p = at != null ? fiche.purchasePriceAt(productId, at) : null;
        return p != null ? p : StockLedgerService.purchasePriceOf(product);
    }

    private List<CmupChange> changes(Long companyId, Replay replay) {
        Map<String, BigDecimal> current = warehouseValuationRepo.findByCompanyId(companyId).stream()
                .collect(Collectors.toMap(v -> v.getProductId() + ":" + v.getWarehouseId(),
                        ProductWarehouseValuation::getStandardPrice, (a, b) -> a));
        Map<Long, Product> products = productRepo.findAllById(replay.cmups().keySet().stream()
                .map(k -> Long.valueOf(k.split(":")[0])).collect(Collectors.toSet())).stream()
                .collect(Collectors.toMap(Product::getId, p -> p));
        Map<Long, String> warehouses = warehouseRepo.findByCompanyIdOrderByNameAsc(companyId).stream()
                .collect(Collectors.toMap(Warehouse::getId, Warehouse::getName));
        List<CmupChange> changes = new ArrayList<>();
        replay.cmups().forEach((key, cmup) -> {
            String[] ids = key.split(":");
            Long productId = Long.valueOf(ids[0]), warehouseId = Long.valueOf(ids[1]);
            Product p = products.get(productId);
            BigDecimal old = current.get(key);
            if (old == null) old = StockLedgerService.purchasePriceOf(p);
            if (old.compareTo(cmup) == 0) return;
            changes.add(new CmupChange(productId, p != null ? p.getDefaultCode() : null, p != null ? p.getName() : "?",
                    warehouseId, warehouses.get(warehouseId), old, cmup));
        });
        changes.sort(Comparator.comparing(CmupChange::productName).thenComparing(CmupChange::warehouseId));
        return changes;
    }

    /** Fige le CMUP en vigueur au moment de la sortie de stock de la vente (son heure compte : un
     *  achat reçu plus tard le même jour ne la concerne pas). Un avoir reprend sa facture d'origine ;
     *  sans sortie retrouvée, fin de journée de la facture. */
    private int freezeSales(Long companyId) {
        List<SalesInvoiceLine> lines = salesLineRepo.findWithoutFrozenCost(companyId);
        Long mainWarehouseId = mainWarehouse(companyId);
        Map<String, LocalDateTime> saleDates = new HashMap<>();
        for (StockMove m : moveRepo.findAllDoneChronological(companyId)) {
            StockPicking p = m.getPicking();
            if (p.getName() != null && p.getName().startsWith("LIV/VTE") && p.getOrigin() != null) {
                saleDates.putIfAbsent(p.getOrigin(), p.getDateDone());
            }
        }
        Map<Long, List<SalesInvoiceLine>> byWarehouse = lines.stream().collect(Collectors.groupingBy(
                l -> l.getInvoice().getWarehouseId() != null ? l.getInvoice().getWarehouseId() : mainWarehouseId == null ? 0L : mainWarehouseId));
        Map<Long, Product> products = productRepo.findAllById(lines.stream().map(SalesInvoiceLine::getProductId)
                .collect(Collectors.toSet())).stream().collect(Collectors.toMap(Product::getId, p -> p));
        byWarehouse.forEach((warehouseId, group) -> {
            ProductValuationService.CostTimeline costs = productValuationService.loadCostTimeline(warehouseId,
                    group.stream().map(SalesInvoiceLine::getProductId).collect(Collectors.toSet()));
            for (SalesInvoiceLine line : group) {
                SalesInvoice invoice = line.getInvoice();
                SalesInvoice dated = invoice.getOriginalInvoice() != null ? invoice.getOriginalInvoice() : invoice;
                LocalDateTime at = saleDates.getOrDefault(dated.getName(), dated.getDate().atTime(LocalTime.MAX));
                Product product = products.get(line.getProductId());
                BigDecimal purchasePrice = purchasePriceAt(costs, product, line.getProductId(), at);
                BigDecimal cmup = costs.costAt(line.getProductId(), at);
                // Vente antérieure à tout achat connu : pas de CMUP, le prix d'achat en tient lieu.
                line.setCmupApplique(cmup.compareTo(ZERO) > 0 ? cmup : purchasePrice);
                if (line.getPrixAchatApplique() == null) line.setPrixAchatApplique(purchasePrice);
            }
        });
        salesLineRepo.saveAll(lines);
        return lines.size();
    }

    private Long mainWarehouse(Long companyId) {
        List<Warehouse> warehouses = warehouseRepo.findByCompanyIdAndActiveTrue(companyId);
        return warehouses.stream().filter(w -> w.getDepotAchatWarehouseId() != null).findFirst()
                .or(() -> warehouses.stream().filter(w -> Boolean.TRUE.equals(w.getIsDefault())).findFirst())
                .or(() -> warehouses.stream().findFirst())
                .map(Warehouse::getId).orElse(null);
    }
}

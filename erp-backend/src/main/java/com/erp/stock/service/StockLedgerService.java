package com.erp.stock.service;

import com.erp.audit.service.AuditService;
import com.erp.stock.entity.*;
import com.erp.stock.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Valorisation opérationnelle du stock AU PRIX D'ACHAT de la fiche article (Product.standardPrice).
 *
 * Deux mécanismes coexistent et ne se remplacent jamais :
 *  - cette valeur, tenue par entrepôt dans ProductWarehouseValuation.stockValue : somme des
 *    mouvements validés, chacun figé au prix d'achat en vigueur à sa validation. Un changement
 *    ultérieur du prix de la fiche ne réévalue donc pas le stock déjà entré ;
 *  - le CMUP ({@link ProductValuationService}), nourri par le prix facturé (StockMove.priceUnit) et
 *    utilisé pour le coût des ventes et les marges. Il n'est ici que relu pour la traçabilité.
 *
 * Toujours appeler après la mise à jour des quants : la quantité de l'entrepôt après opération en
 * est lue. Un stock retombé à zéro repart de zéro, sans valeur résiduelle.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class StockLedgerService {

    private static final BigDecimal ZERO = BigDecimal.ZERO;

    private final StockValuationEntryRepository entryRepo;
    private final ProductWarehouseValuationRepository warehouseValuationRepo;
    private final ProductPriceHistoryRepository priceHistoryRepo;
    private final ProductRepository productRepo;
    private final StockQuantRepository quantRepo;
    private final StockLocationRepository locationRepo;
    private final StockMoveRepository moveRepo;
    private final AuditService auditService;

    /** Réceptions et transferts encore ouverts au déploiement : affichés au prix de la fiche. */
    @EventListener(ApplicationReadyEvent.class)
    @Transactional
    public void backfillOpenMovesPurchasePrice() {
        int n = moveRepo.backfillOpenMovesPurchasePrice();
        if (n > 0) log.info("Valorisation : prix d'achat renseigné sur {} mouvement(s) non validé(s)", n);
    }

    // =========================================================================
    // Écritures
    // =========================================================================

    /** Comptabilise les mouvements validés d'un picking : sortie de l'entrepôt source, entrée dans la destination. */
    @Transactional
    public void postPicking(StockPicking picking) {
        for (StockMove move : picking.getMoves()) {
            BigDecimal qty = move.getQtyDone();
            if (qty == null || qty.compareTo(ZERO) <= 0 || !"done".equals(move.getState())) continue;
            Long src = internalWarehouse(move.getLocationId());
            Long dest = internalWarehouse(move.getLocationDestId());
            if (src != null && src.equals(dest)) continue; // interne à un entrepôt : ni quantité ni valeur ne bougent
            if (src != null) postOut(picking, move, src, qty);
            if (dest != null) postIn(picking, move, dest, qty);
        }
    }

    /** Sortie d'un entrepôt, pour les flux en deux temps (transfert, expédition) qui déstockent avant « done ». */
    @Transactional
    public void postOut(StockPicking picking, StockMove move, Long warehouseId, BigDecimal qty) {
        if (warehouseId != null) record(picking, move, warehouseId, StockValuationEntry.DIRECTION_OUT, qty, -1);
    }

    @Transactional
    public void postIn(StockPicking picking, StockMove move, Long warehouseId, BigDecimal qty) {
        if (warehouseId != null) record(picking, move, warehouseId, StockValuationEntry.DIRECTION_IN, qty, 1);
    }

    /** Reliquat de transfert renvoyé à la source, au prix auquel il en était sorti. */
    @Transactional
    public void postReturn(StockPicking picking, StockMove move, Long warehouseId, BigDecimal qty) {
        if (warehouseId != null) record(picking, move, warehouseId, StockValuationEntry.DIRECTION_RETURN, qty, 1);
    }

    /** Annulation d'une sortie déjà comptée : restitue la valeur. Sans sortie comptée (mouvement
     *  antérieur à ce journal), il n'y a rien à restituer. */
    @Transactional
    public void postCancelOut(StockPicking picking, StockMove move, BigDecimal qty) {
        Long warehouseId = internalWarehouse(move.getLocationId());
        if (warehouseId == null || move.getId() == null) return;
        if (!entryRepo.existsByMoveIdAndWarehouseIdAndDirection(move.getId(), warehouseId, StockValuationEntry.DIRECTION_OUT)) return;
        record(picking, move, warehouseId, StockValuationEntry.DIRECTION_CANCEL, qty, 1);
    }

    /** Résout l'entrepôt d'un emplacement interne ; null pour un emplacement virtuel ou de transit. */
    public Long internalWarehouse(Long locationId) {
        if (locationId == null) return null;
        return locationRepo.findById(locationId)
                .filter(l -> "internal".equals(l.getUsage()))
                .map(StockLocation::getWarehouseId).orElse(null);
    }

    /** Prix d'achat de référence de la fiche article. */
    public static BigDecimal purchasePriceOf(Product product) {
        return product != null && product.getStandardPrice() != null ? product.getStandardPrice() : ZERO;
    }

    private void record(StockPicking picking, StockMove move, Long warehouseId, String direction, BigDecimal qty, int sign) {
        if (qty == null || qty.compareTo(ZERO) <= 0) return;
        if (move.getId() != null && entryRepo.existsByMoveIdAndWarehouseIdAndDirection(move.getId(), warehouseId, direction)) return;

        Long productId = move.getProductId();
        Product product = productRepo.findById(productId).orElse(null);
        BigDecimal price = move.getPurchasePrice() != null ? move.getPurchasePrice() : purchasePriceOf(product);
        move.setPurchasePrice(price);
        BigDecimal moveValue = qty.multiply(price);
        if (StockValuationEntry.DIRECTION_IN.equals(direction) || StockValuationEntry.DIRECTION_OUT.equals(direction)) {
            move.setPurchaseValue(moveValue);
        }

        ProductWarehouseValuation v = warehouseValuationRepo.findByProductIdAndWarehouseId(productId, warehouseId)
                .orElseGet(() -> ProductWarehouseValuation.builder()
                        .productId(productId).warehouseId(warehouseId).companyId(move.getCompanyId())
                        .standardPrice(purchasePriceOf(product)).build());

        BigDecimal qtyAfter = nvl(quantRepo.sumQuantityForProductInWarehouse(productId, warehouseId));
        BigDecimal signedQty = sign > 0 ? qty : qty.negate();
        BigDecimal signedValue = sign > 0 ? moveValue : moveValue.negate();
        BigDecimal qtyBefore = qtyAfter.subtract(signedQty);

        // Stock antérieur sans valeur connue : reste « non initialisé » jusqu'à la procédure contrôlée.
        // Sans stock antérieur, le cycle démarre de zéro.
        BigDecimal valueBefore = v.getStockValue() != null ? v.getStockValue()
                : qtyBefore.compareTo(ZERO) <= 0 ? ZERO : null;
        BigDecimal valueAfter = null;
        if (valueBefore != null) {
            valueAfter = qtyAfter.compareTo(ZERO) <= 0 ? ZERO : valueBefore.add(signedValue).max(ZERO);
        }
        v.setStockValue(valueAfter);
        warehouseValuationRepo.save(v);

        BigDecimal cmupAfter = v.getStandardPrice();
        BigDecimal cmupBefore = cmupAfter;
        if (StockValuationEntry.DIRECTION_IN.equals(direction) && picking.getName() != null) {
            cmupBefore = priceHistoryRepo.findFirstByProductIdAndWarehouseIdAndPriceTypeOrderByIdDesc(
                            productId, warehouseId, ProductPriceHistory.TYPE_CMUP)
                    .filter(h -> h.getReference() != null && h.getReference().startsWith(picking.getName()))
                    .map(ProductPriceHistory::getOldPrice).orElse(cmupAfter);
        }

        entryRepo.save(StockValuationEntry.builder()
                .companyId(move.getCompanyId()).productId(productId).warehouseId(warehouseId)
                .moveId(move.getId()).direction(direction).moveType(moveType(picking))
                .reference(picking.getName())
                .quantity(signedQty).purchasePrice(price).moveValue(signedValue)
                .cmupBefore(cmupBefore).cmupAfter(cmupAfter)
                .qtyBefore(qtyBefore).qtyAfter(qtyAfter)
                .stockValueBefore(valueBefore).stockValueAfter(valueAfter)
                .createdBy(auditService.getCurrentUsername())
                .validatedAt(picking.getDateDone() != null ? picking.getDateDone() : LocalDateTime.now())
                .build());
    }

    private static String moveType(StockPicking p) {
        String name = p.getName() != null ? p.getName() : "";
        if (name.startsWith("ADJ/")) return "AJUSTEMENT";
        if (name.startsWith("CASSE/")) return "CASSE";
        if (name.startsWith("RET/VTE")) return "RETOUR_CLIENT";
        if (name.startsWith("LIV/VTE")) return "VENTE";
        if (name.startsWith("RET/ACH")) return "RETOUR_FOURNISSEUR";
        String code = p.getPickingTypeCode() != null ? p.getPickingTypeCode() : "";
        return switch (code) {
            case "incoming" -> "RECEPTION";
            case "internal" -> "TRANSFERT";
            case "inter_company" -> "INTER_AGENCES";
            default -> "SORTIE";
        };
    }

    // =========================================================================
    // Initialisation contrôlée d'un stock sans valeur connue
    // =========================================================================

    /** Une quantité en stock dont la valeur n'a jamais été établie. canInitialize = false si la
     *  fiche n'a pas de prix d'achat : aucune valeur n'est alors proposée. */
    public record InitLine(Long productId, String productCode, String productName, Long warehouseId,
                           BigDecimal quantity, BigDecimal purchasePrice, BigDecimal proposedValue,
                           BigDecimal cmup, boolean canInitialize) {}

    public record InitResult(int initialized, int skipped) {}

    @Transactional(readOnly = true)
    public List<InitLine> previewInitialization(Long companyId) {
        Map<String, BigDecimal> qtyByKey = quantityByProductWarehouse(companyId);
        Map<String, ProductWarehouseValuation> rows = warehouseValuationRepo.findByCompanyId(companyId).stream()
                .collect(Collectors.toMap(v -> key(v.getProductId(), v.getWarehouseId()), v -> v, (a, b) -> a));
        List<InitLine> lines = new ArrayList<>();
        Map<Long, Product> products = productRepo.findAllById(qtyByKey.keySet().stream()
                .map(k -> Long.valueOf(k.split(":")[0])).collect(Collectors.toSet())).stream()
                .collect(Collectors.toMap(Product::getId, p -> p));
        qtyByKey.forEach((k, qty) -> {
            ProductWarehouseValuation v = rows.get(k);
            if (qty.compareTo(ZERO) <= 0 || (v != null && v.getStockValue() != null)) return;
            String[] parts = k.split(":");
            Product p = products.get(Long.valueOf(parts[0]));
            if (p == null) return;
            BigDecimal price = purchasePriceOf(p);
            boolean priced = price.compareTo(ZERO) > 0;
            lines.add(new InitLine(p.getId(), p.getDefaultCode(), p.getName(), Long.valueOf(parts[1]), qty, price,
                    priced ? qty.multiply(price) : null,
                    v != null ? v.getStandardPrice() : price, priced));
        });
        lines.sort(Comparator.comparing(InitLine::productName).thenComparing(InitLine::warehouseId));
        return lines;
    }

    /** Fixe la valeur des stocks sans valeur connue à quantité × prix d'achat de la fiche. Le CMUP
     *  déjà établi n'est pas touché. Chaque initialisation est tracée ; les articles sans prix
     *  d'achat sont laissés de côté plutôt que valorisés à une valeur inventée. */
    @Transactional
    public InitResult initialize(Long companyId) {
        int done = 0, skipped = 0;
        LocalDateTime now = LocalDateTime.now();
        String user = auditService.getCurrentUsername();
        for (InitLine line : previewInitialization(companyId)) {
            if (!line.canInitialize()) { skipped++; continue; }
            ProductWarehouseValuation v = warehouseValuationRepo
                    .findByProductIdAndWarehouseId(line.productId(), line.warehouseId())
                    .orElseGet(() -> ProductWarehouseValuation.builder()
                            .productId(line.productId()).warehouseId(line.warehouseId()).companyId(companyId)
                            .standardPrice(line.purchasePrice()).build());
            v.setStockValue(line.proposedValue());
            warehouseValuationRepo.save(v);
            entryRepo.save(StockValuationEntry.builder()
                    .companyId(companyId).productId(line.productId()).warehouseId(line.warehouseId())
                    .direction(StockValuationEntry.DIRECTION_INIT).moveType("INITIALISATION")
                    .reference("Initialisation de la valeur du stock")
                    .quantity(line.quantity()).purchasePrice(line.purchasePrice()).moveValue(line.proposedValue())
                    .cmupBefore(v.getStandardPrice()).cmupAfter(v.getStandardPrice())
                    .qtyBefore(line.quantity()).qtyAfter(line.quantity())
                    .stockValueAfter(line.proposedValue())
                    .createdBy(user).validatedAt(now)
                    .build());
            done++;
        }
        auditService.log("STOCK_VALUATION", companyId, "Initialisation valeur stock", "INITIALIZED",
                done + " valeur(s) initialisée(s) au prix d'achat, " + skipped + " article(s) sans prix d'achat ignoré(s)",
                companyId);
        return new InitResult(done, skipped);
    }

    // =========================================================================
    // Lecture
    // =========================================================================

    /** Valeurs de stock d'une société, pour répartir la valeur d'un entrepôt entre ses quants. */
    public static class ValueView {
        private final Map<String, BigDecimal> values;
        private final Map<String, BigDecimal> qtyByKey;
        private final Map<Long, Long> warehouseByInternalLocation;

        ValueView(Map<String, BigDecimal> values, Map<String, BigDecimal> qtyByKey, Map<Long, Long> warehouseByInternalLocation) {
            this.values = values;
            this.qtyByKey = qtyByKey;
            this.warehouseByInternalLocation = warehouseByInternalLocation;
        }

        /** Part de la valeur de l'entrepôt portée par ce quant, au prorata des quantités. Tant que la
         *  valeur n'est pas établie (ou hors entrepôt, transit), estimation au prix d'achat de la fiche —
         *  jamais au CMUP. */
        public BigDecimal valueOf(StockQuant q, BigDecimal purchasePrice) {
            BigDecimal price = purchasePrice != null ? purchasePrice : ZERO;
            Long warehouseId = warehouseByInternalLocation.get(q.getLocationId());
            if (warehouseId == null) return q.getQuantity().multiply(price);
            String k = key(q.getProductId(), warehouseId);
            BigDecimal value = values.get(k);
            BigDecimal total = qtyByKey.get(k);
            if (value == null || total == null || total.compareTo(ZERO) <= 0) return q.getQuantity().multiply(price);
            return value.multiply(q.getQuantity()).divide(total, 4, RoundingMode.HALF_UP);
        }

        /** Faux tant que ce quant n'est connu qu'en estimation. */
        public boolean isEstablished(StockQuant q) {
            Long warehouseId = warehouseByInternalLocation.get(q.getLocationId());
            return warehouseId == null || values.containsKey(key(q.getProductId(), warehouseId));
        }
    }

    @Transactional(readOnly = true)
    public ValueView loadValues(Long companyId) {
        Map<String, BigDecimal> values = new HashMap<>();
        for (ProductWarehouseValuation v : warehouseValuationRepo.findByCompanyId(companyId)) {
            if (v.getStockValue() != null) values.put(key(v.getProductId(), v.getWarehouseId()), v.getStockValue());
        }
        return new ValueView(values, quantityByProductWarehouse(companyId), internalLocations(companyId));
    }

    /** Valeur totale du stock d'une société, au prix d'achat. */
    @Transactional(readOnly = true)
    public BigDecimal totalStockValue(Long companyId) {
        ValueView view = loadValues(companyId);
        List<StockQuant> quants = quantRepo.findAllWithStock(companyId);
        Map<Long, Product> products = productRepo.findAllById(quants.stream().map(StockQuant::getProductId)
                .collect(Collectors.toSet())).stream().collect(Collectors.toMap(Product::getId, p -> p));
        return quants.stream()
                .map(q -> view.valueOf(q, purchasePriceOf(products.get(q.getProductId()))))
                .reduce(ZERO, BigDecimal::add).setScale(2, RoundingMode.HALF_UP);
    }

    /** CMUP par article pour un entrepôt : les articles sans ligne en sont absents. */
    @Transactional(readOnly = true)
    public Map<Long, BigDecimal> cmupByProduct(Long companyId, Long warehouseId) {
        if (warehouseId == null) return Map.of();
        return warehouseValuationRepo.findByWarehouseIdAndCompanyId(warehouseId, companyId).stream()
                .collect(Collectors.toMap(ProductWarehouseValuation::getProductId,
                        ProductWarehouseValuation::getStandardPrice, (a, b) -> a));
    }

    /** Valeur au prix d'achat par article pour un entrepôt : les valeurs non établies en sont absentes. */
    @Transactional(readOnly = true)
    public Map<Long, BigDecimal> stockValuesByProduct(Long companyId, Long warehouseId) {
        if (warehouseId == null) return Map.of();
        Map<Long, BigDecimal> values = new HashMap<>();
        for (ProductWarehouseValuation v : warehouseValuationRepo.findByWarehouseIdAndCompanyId(warehouseId, companyId)) {
            if (v.getStockValue() != null) values.put(v.getProductId(), v.getStockValue());
        }
        return values;
    }

    /** Détail d'un article par entrepôt, pour la fiche article. */
    public record WarehouseValuationLine(Long warehouseId, BigDecimal quantity, BigDecimal cmup,
                                         BigDecimal stockValue, boolean valueEstablished) {}

    @Transactional(readOnly = true)
    public List<WarehouseValuationLine> warehouseLines(Product product) {
        Long companyId = product.getCompanyId();
        Map<String, BigDecimal> qtyByKey = quantityByProductWarehouse(companyId);
        Map<Long, ProductWarehouseValuation> rows = warehouseValuationRepo
                .findByProductIdAndCompanyId(product.getId(), companyId).stream()
                .collect(Collectors.toMap(ProductWarehouseValuation::getWarehouseId, v -> v, (a, b) -> a));
        Set<Long> warehouseIds = new TreeSet<>(rows.keySet());
        String prefix = product.getId() + ":";
        qtyByKey.keySet().stream().filter(k -> k.startsWith(prefix))
                .forEach(k -> warehouseIds.add(Long.valueOf(k.substring(prefix.length()))));
        List<WarehouseValuationLine> lines = new ArrayList<>();
        for (Long wid : warehouseIds) {
            BigDecimal qty = qtyByKey.getOrDefault(key(product.getId(), wid), ZERO);
            ProductWarehouseValuation v = rows.get(wid);
            boolean established = v != null && v.getStockValue() != null;
            lines.add(new WarehouseValuationLine(wid, qty,
                    v != null ? v.getStandardPrice() : purchasePriceOf(product),
                    established ? v.getStockValue() : qty.multiply(purchasePriceOf(product)), established));
        }
        return lines;
    }

    @Transactional(readOnly = true)
    public List<StockValuationEntry> history(Long companyId, Long productId, int limit) {
        PageRequest page = PageRequest.of(0, limit);
        return productId != null
                ? entryRepo.findByProductIdAndCompanyIdOrderByValidatedAtDescIdDesc(productId, companyId, page)
                : entryRepo.findByCompanyIdOrderByValidatedAtDescIdDesc(companyId, page);
    }

    private Map<Long, Long> internalLocations(Long companyId) {
        return locationRepo.findInternalAndTransit(companyId).stream()
                .filter(l -> "internal".equals(l.getUsage()) && l.getWarehouseId() != null)
                .collect(Collectors.toMap(StockLocation::getId, StockLocation::getWarehouseId));
    }

    private Map<String, BigDecimal> quantityByProductWarehouse(Long companyId) {
        Map<Long, Long> locations = internalLocations(companyId);
        Map<String, BigDecimal> qty = new HashMap<>();
        for (StockQuant q : quantRepo.findAllWithStock(companyId)) {
            Long warehouseId = locations.get(q.getLocationId());
            if (warehouseId != null) qty.merge(key(q.getProductId(), warehouseId), q.getQuantity(), BigDecimal::add);
        }
        return qty;
    }

    private static String key(Long productId, Long warehouseId) {
        return productId + ":" + warehouseId;
    }

    private static BigDecimal nvl(BigDecimal v) {
        return v != null ? v : ZERO;
    }
}

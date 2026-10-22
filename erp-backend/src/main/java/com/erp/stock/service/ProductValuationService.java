package com.erp.stock.service;

import com.erp.audit.service.AuditService;
import com.erp.stock.entity.Product;
import com.erp.stock.entity.ProductPriceHistory;
import com.erp.stock.entity.ProductWarehouseValuation;
import com.erp.stock.entity.StockLocation;
import com.erp.stock.entity.StockMove;
import com.erp.stock.repository.ProductPriceHistoryRepository;
import com.erp.stock.repository.ProductRepository;
import com.erp.stock.repository.ProductWarehouseValuationRepository;
import com.erp.stock.repository.StockLocationRepository;
import com.erp.stock.repository.StockMoveRepository;
import com.erp.stock.repository.StockQuantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

/**
 * CMUP (coût moyen unitaire pondéré) PAR ENTREPÔT, remplace Product.standardPrice (global,
 * gardé uniquement comme prix de repli tant qu'aucune ligne n'existe encore pour un couple
 * (produit, entrepôt) — produit neuf ou entrepôt jamais approvisionné, évite un backfill de
 * données au déploiement de ce mécanisme).
 *
 * Chaque changement de prix est aussi tracé dans ProductPriceHistory, daté à la date effective
 * du mouvement, pour que les rapports d'une période passée soient valorisés aux prix de cette
 * période (cf. {@link CostTimeline}).
 */
@Service
@RequiredArgsConstructor
public class ProductValuationService {

    private static final BigDecimal ZERO = BigDecimal.ZERO;

    private final ProductWarehouseValuationRepository warehouseValuationRepo;
    private final StockLocationRepository locationRepo;
    private final ProductPriceHistoryRepository priceHistoryRepo;
    private final ProductRepository productRepo;
    private final StockMoveRepository moveRepo;
    private final StockQuantRepository quantRepo;
    private final AuditService auditService;

    /** Résout l'entrepôt propriétaire d'un emplacement (ou null si non trouvé). */
    public Long resolveWarehouseId(Long locationId) {
        if (locationId == null) return null;
        return locationRepo.findById(locationId).map(StockLocation::getWarehouseId).orElse(null);
    }

    /** CMUP courant d'un produit dans un entrepôt donné, avec repli sur Product.standardPrice. */
    @Transactional(readOnly = true)
    public BigDecimal getWarehouseCmup(Long productId, Long warehouseId, Product fallback) {
        if (warehouseId != null) {
            var v = warehouseValuationRepo.findByProductIdAndWarehouseId(productId, warehouseId);
            if (v.isPresent()) return v.get().getStandardPrice() != null ? v.get().getStandardPrice() : ZERO;
        }
        return fallback != null && fallback.getStandardPrice() != null ? fallback.getStandardPrice() : ZERO;
    }

    /** Recalcule et sauvegarde le CMUP d'un produit dans UN ENTREPÔT après une entrée de stock —
     *  moyenne pondérée : (valeur actuelle + valeur entrante) / (quantité actuelle + quantité entrante).
     *  La quantité actuelle est celle de TOUT l'entrepôt (tous ses emplacements internes), lue avant
     *  que l'entrée ne soit ajoutée au quant : à appeler avant d'incrémenter le stock de destination.
     *  effectiveDate = date effective du mouvement (antidatage compris), reportée dans l'historique. */
    @Transactional
    public BigDecimal recalcWarehouseCmup(Long productId, Long warehouseId, Long companyId,
                                           BigDecimal incomingQty, BigDecimal incomingPrice,
                                           LocalDateTime effectiveDate, String reference) {
        BigDecimal currentQty = nvl(quantRepo.sumQuantityForProductInWarehouse(productId, warehouseId)).max(ZERO);
        ProductWarehouseValuation v = warehouseValuationRepo.findByProductIdAndWarehouseId(productId, warehouseId)
                .orElseGet(() -> ProductWarehouseValuation.builder()
                        .productId(productId).warehouseId(warehouseId).companyId(companyId)
                        .standardPrice(ZERO).build());
        BigDecimal oldCmup = v.getStandardPrice() != null ? v.getStandardPrice() : ZERO;
        BigDecimal pu = incomingPrice != null ? incomingPrice : oldCmup;
        BigDecimal newCmup = computeCmup(oldCmup, currentQty, incomingQty, pu);
        v.setStandardPrice(newCmup);
        warehouseValuationRepo.save(v);
        priceHistoryRepo.save(ProductPriceHistory.builder()
                .productId(productId).warehouseId(warehouseId).companyId(companyId)
                .priceType(ProductPriceHistory.TYPE_CMUP)
                .oldPrice(oldCmup).newPrice(newCmup)
                .qtyBefore(currentQty).qtyIn(incomingQty).priceIn(pu)
                .effectiveDate(effectiveDate != null ? effectiveDate : LocalDateTime.now())
                .source(ProductPriceHistory.SOURCE_ENTREE)
                .reference(reference)
                .createdBy(auditService.getCurrentUsername())
                .build());
        return newCmup;
    }

    private static BigDecimal nvl(BigDecimal v) {
        return v != null ? v : ZERO;
    }

    private static BigDecimal computeCmup(BigDecimal oldCmup, BigDecimal currentQty, BigDecimal incomingQty, BigDecimal pu) {
        BigDecimal newQty = currentQty.add(incomingQty);
        if (newQty.compareTo(ZERO) <= 0) return oldCmup;
        return currentQty.multiply(oldCmup).add(incomingQty.multiply(pu)).divide(newQty, 4, RoundingMode.HALF_UP);
    }

    /** Trace un changement de prix global de la fiche article (STANDARD / SALE). Ne fait rien si inchangé. */
    @Transactional
    public void logGlobalPriceChange(Product product, String priceType, BigDecimal oldPrice, BigDecimal newPrice) {
        if (newPrice == null) return;
        if (oldPrice != null && oldPrice.compareTo(newPrice) == 0) return;
        priceHistoryRepo.save(ProductPriceHistory.builder()
                .productId(product.getId()).companyId(product.getCompanyId())
                .priceType(priceType)
                .oldPrice(oldPrice).newPrice(newPrice)
                .effectiveDate(LocalDateTime.now())
                .source(ProductPriceHistory.SOURCE_MANUEL)
                .createdBy(auditService.getCurrentUsername())
                .build());
    }

    @Transactional(readOnly = true)
    public List<ProductPriceHistory> getHistory(Long productId, Long companyId) {
        return priceHistoryRepo.findByProductIdAndCompanyIdOrderByEffectiveDateDescIdDesc(productId, companyId);
    }

    // =========================================================================
    // Coût à une date donnée
    // =========================================================================

    /** Charge en une fois l'historique de coût d'un entrepôt pour un lot d'articles. */
    @Transactional(readOnly = true)
    public CostTimeline loadCostTimeline(Long warehouseId, Collection<Long> productIds) {
        if (productIds.isEmpty()) return new CostTimeline(Map.of(), Map.of(), Map.of());
        List<Long> pids = new ArrayList<>(productIds);
        Map<Long, List<ProductPriceHistory>> cmup = warehouseId == null ? Map.of()
                : priceHistoryRepo.findCmupTimeline(warehouseId, pids).stream()
                    .collect(Collectors.groupingBy(ProductPriceHistory::getProductId));
        Map<Long, List<ProductPriceHistory>> standard = priceHistoryRepo
                .findGlobalTimeline(ProductPriceHistory.TYPE_STANDARD, pids).stream()
                .collect(Collectors.groupingBy(ProductPriceHistory::getProductId));
        Map<Long, BigDecimal> current = new HashMap<>();
        for (Product p : productRepo.findAllById(pids)) current.put(p.getId(), getWarehouseCmup(p.getId(), warehouseId, p));
        return new CostTimeline(cmup, standard, current);
    }

    /**
     * Coût unitaire d'un article dans un entrepôt à n'importe quelle date : le CMUP en vigueur
     * à cette date d'après l'historique, sinon le prix de revient global (STANDARD) en vigueur à
     * cette date, sinon le coût courant (article sans aucun historique).
     */
    public static class CostTimeline {
        private final Map<Long, List<ProductPriceHistory>> cmup;
        private final Map<Long, List<ProductPriceHistory>> standard;
        private final Map<Long, BigDecimal> current;

        CostTimeline(Map<Long, List<ProductPriceHistory>> cmup, Map<Long, List<ProductPriceHistory>> standard,
                     Map<Long, BigDecimal> current) {
            this.cmup = cmup;
            this.standard = standard;
            this.current = current;
        }

        /** Coût en vigueur à la date `at` incluse (changements datés exactement de `at` compris). */
        public BigDecimal costAt(Long productId, LocalDateTime at) {
            return resolve(productId, at, true);
        }

        /** Coût en vigueur juste avant `at` (pour une valeur d'ouverture de période). */
        public BigDecimal costBefore(Long productId, LocalDateTime at) {
            return resolve(productId, at, false);
        }

        private BigDecimal resolve(Long productId, LocalDateTime at, boolean inclusive) {
            BigDecimal p = priceAt(cmup.get(productId), at, inclusive);
            if (p == null) p = priceAt(standard.get(productId), at, inclusive);
            if (p == null) p = current.get(productId);
            return p != null ? p : ZERO;
        }

        /** newPrice de la dernière ligne en vigueur ; avant la première ligne : son oldPrice. */
        private static BigDecimal priceAt(List<ProductPriceHistory> rows, LocalDateTime at, boolean inclusive) {
            if (rows == null || rows.isEmpty()) return null;
            ProductPriceHistory last = null;
            for (ProductPriceHistory h : rows) {
                boolean inEffect = inclusive ? !h.getEffectiveDate().isAfter(at) : h.getEffectiveDate().isBefore(at);
                if (!inEffect) break;
                last = h;
            }
            if (last != null) return last.getNewPrice();
            return rows.get(0).getOldPrice();
        }
    }

    // =========================================================================
    // Reconstruction de l'historique CMUP
    // =========================================================================

    /**
     * Reconstruit tout l'historique CMUP d'une société en rejouant ses mouvements de stock dans
     * l'ordre chronologique, depuis le premier. Mêmes règles que le calcul en direct : une entrée
     * dans un entrepôt depuis l'extérieur de cet entrepôt recalcule son CMUP, pondéré par la quantité
     * présente dans tout l'entrepôt. Le CMUP courant (ProductWarehouseValuation, utilisé par
     * les écritures comptables déjà passées) n'est PAS modifié : s'il diffère du CMUP rejoué, une
     * ligne ALIGNEMENT datée d'aujourd'hui recale l'historique sur lui.
     * Les prix STANDARD / SALE ne peuvent pas être reconstruits (les anciennes valeurs n'ont jamais
     * été conservées) et ne sont pas touchés.
     */
    @Transactional
    public RebuildResult rebuildCmupHistory(Long companyId) {
        priceHistoryRepo.deleteCmupHistory(companyId);

        Map<Long, StockLocation> internalLocs = locationRepo.findAll().stream()
                .filter(l -> "internal".equals(l.getUsage()) && l.getWarehouseId() != null)
                .collect(Collectors.toMap(StockLocation::getId, l -> l));

        Map<String, BigDecimal> qtyByWh = new HashMap<>();    // "productId:warehouseId"
        Map<String, BigDecimal> cmupByWh = new HashMap<>();   // "productId:warehouseId"
        List<ProductPriceHistory> rows = new ArrayList<>();
        String user = auditService.getCurrentUsername();

        for (StockMove m : moveRepo.findAllDoneChronological(companyId)) {
            BigDecimal q = m.getQtyDone();
            if (q == null || q.compareTo(ZERO) <= 0) continue;
            StockLocation src = internalLocs.get(m.getLocationId());
            StockLocation dest = internalLocs.get(m.getLocationDestId());

            // Mouvement interne à un même entrepôt : ni la quantité ni le CMUP de l'entrepôt ne bougent
            if (src != null && dest != null && src.getWarehouseId().equals(dest.getWarehouseId())) continue;

            if (src != null) {
                String k = m.getProductId() + ":" + src.getWarehouseId();
                qtyByWh.put(k, qtyByWh.getOrDefault(k, ZERO).subtract(q).max(ZERO));
            }
            if (dest != null) {
                String kWh = m.getProductId() + ":" + dest.getWarehouseId();
                BigDecimal qtyBefore = qtyByWh.getOrDefault(kWh, ZERO);
                BigDecimal oldCmup = cmupByWh.getOrDefault(kWh, ZERO);
                BigDecimal pu = m.getPriceUnit() != null && m.getPriceUnit().compareTo(ZERO) > 0
                        ? m.getPriceUnit() : oldCmup;
                BigDecimal newCmup = computeCmup(oldCmup, qtyBefore, q, pu);
                cmupByWh.put(kWh, newCmup);
                rows.add(ProductPriceHistory.builder()
                        .productId(m.getProductId()).warehouseId(dest.getWarehouseId()).companyId(companyId)
                        .priceType(ProductPriceHistory.TYPE_CMUP)
                        .oldPrice(oldCmup).newPrice(newCmup)
                        .qtyBefore(qtyBefore).qtyIn(q).priceIn(pu)
                        .effectiveDate(m.getPicking().getDateDone())
                        .source(ProductPriceHistory.SOURCE_RECONSTRUCTION)
                        .reference(m.getPicking().getName())
                        .createdBy(user)
                        .build());
                qtyByWh.put(kWh, qtyBefore.add(q));
            }
        }

        // Recalage sur le CMUP courant
        int aligned = 0;
        LocalDateTime now = LocalDateTime.now();
        for (ProductWarehouseValuation v : warehouseValuationRepo.findByCompanyId(companyId)) {
            String kWh = v.getProductId() + ":" + v.getWarehouseId();
            BigDecimal replayed = cmupByWh.getOrDefault(kWh, ZERO);
            BigDecimal live = v.getStandardPrice() != null ? v.getStandardPrice() : ZERO;
            if (replayed.subtract(live).abs().compareTo(new BigDecimal("0.01")) <= 0) continue;
            aligned++;
            rows.add(ProductPriceHistory.builder()
                    .productId(v.getProductId()).warehouseId(v.getWarehouseId()).companyId(companyId)
                    .priceType(ProductPriceHistory.TYPE_CMUP)
                    .oldPrice(replayed).newPrice(live)
                    .effectiveDate(now)
                    .source(ProductPriceHistory.SOURCE_ALIGNEMENT)
                    .createdBy(user)
                    .build());
        }

        priceHistoryRepo.saveAll(rows);
        return new RebuildResult(rows.size() - aligned, aligned);
    }

    /** entries = lignes CMUP rejouées ; aligned = couples (article, entrepôt) recalés sur le CMUP courant. */
    public record RebuildResult(int entries, int aligned) {}
}

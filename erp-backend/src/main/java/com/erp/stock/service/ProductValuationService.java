package com.erp.stock.service;

import com.erp.stock.entity.Product;
import com.erp.stock.entity.ProductWarehouseValuation;
import com.erp.stock.entity.StockLocation;
import com.erp.stock.repository.ProductWarehouseValuationRepository;
import com.erp.stock.repository.StockLocationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;

/**
 * CMUP (coût moyen unitaire pondéré) PAR ENTREPÔT, remplace Product.standardPrice (global,
 * gardé uniquement comme prix de repli tant qu'aucune ligne n'existe encore pour un couple
 * (produit, entrepôt) — produit neuf ou entrepôt jamais approvisionné, évite un backfill de
 * données au déploiement de ce mécanisme).
 */
@Service
@RequiredArgsConstructor
public class ProductValuationService {

    private static final BigDecimal ZERO = BigDecimal.ZERO;

    private final ProductWarehouseValuationRepository warehouseValuationRepo;
    private final StockLocationRepository locationRepo;

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
     *  currentQty est la quantité déjà présente à l'emplacement de destination avant l'entrée. */
    @Transactional
    public BigDecimal recalcWarehouseCmup(Long productId, Long warehouseId, Long companyId,
                                           BigDecimal currentQty, BigDecimal incomingQty, BigDecimal incomingPrice) {
        ProductWarehouseValuation v = warehouseValuationRepo.findByProductIdAndWarehouseId(productId, warehouseId)
                .orElseGet(() -> ProductWarehouseValuation.builder()
                        .productId(productId).warehouseId(warehouseId).companyId(companyId)
                        .standardPrice(ZERO).build());
        BigDecimal curVal = currentQty.multiply(v.getStandardPrice() != null ? v.getStandardPrice() : ZERO);
        BigDecimal pu = incomingPrice != null ? incomingPrice : (v.getStandardPrice() != null ? v.getStandardPrice() : ZERO);
        BigDecimal newQty = currentQty.add(incomingQty);
        if (newQty.compareTo(ZERO) > 0) {
            BigDecimal newCmup = curVal.add(incomingQty.multiply(pu)).divide(newQty, 4, RoundingMode.HALF_UP);
            v.setStandardPrice(newCmup);
        }
        warehouseValuationRepo.save(v);
        return v.getStandardPrice();
    }
}

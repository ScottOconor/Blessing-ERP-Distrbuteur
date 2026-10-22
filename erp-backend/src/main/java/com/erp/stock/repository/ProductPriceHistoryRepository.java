package com.erp.stock.repository;

import com.erp.stock.entity.ProductPriceHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductPriceHistoryRepository extends JpaRepository<ProductPriceHistory, Long> {

    /** Historique CMUP d'un entrepôt pour plusieurs articles, chronologique (rapports par lot). */
    @Query("SELECT h FROM ProductPriceHistory h WHERE h.priceType = 'CMUP' AND h.warehouseId = :whId " +
           "AND h.productId IN :pids ORDER BY h.effectiveDate ASC, h.id ASC")
    List<ProductPriceHistory> findCmupTimeline(@Param("whId") Long warehouseId, @Param("pids") List<Long> productIds);

    /** Historique d'un type de prix global (STANDARD / SALE) pour plusieurs articles, chronologique. */
    @Query("SELECT h FROM ProductPriceHistory h WHERE h.priceType = :type AND h.warehouseId IS NULL " +
           "AND h.productId IN :pids ORDER BY h.effectiveDate ASC, h.id ASC")
    List<ProductPriceHistory> findGlobalTimeline(@Param("type") String priceType, @Param("pids") List<Long> productIds);

    /** Historique complet d'un article (fiche article), plus récent d'abord. */
    List<ProductPriceHistory> findByProductIdAndCompanyIdOrderByEffectiveDateDescIdDesc(Long productId, Long companyId);

    @Modifying
    @Query("DELETE FROM ProductPriceHistory h WHERE h.companyId = :cid AND h.priceType = 'CMUP'")
    int deleteCmupHistory(@Param("cid") Long companyId);
}

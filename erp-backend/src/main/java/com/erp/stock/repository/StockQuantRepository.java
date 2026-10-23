package com.erp.stock.repository;

import com.erp.stock.entity.StockQuant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface StockQuantRepository extends JpaRepository<StockQuant, Long> {

    Optional<StockQuant> findFirstByProductIdAndLocationIdAndCompanyId(Long productId, Long locationId, Long companyId);

    List<StockQuant> findByLocationIdAndCompanyId(Long locationId, Long companyId);

    List<StockQuant> findByProductIdAndCompanyId(Long productId, Long companyId);

    @Query("SELECT q FROM StockQuant q WHERE q.companyId = :cid AND q.quantity > 0")
    List<StockQuant> findAllWithStock(@Param("cid") Long companyId);

    /** Quantité en stock par article dans un seul entrepôt (emplacements internes uniquement) → [productId, qty]. */
    @Query("SELECT q.productId, COALESCE(SUM(q.quantity), 0) FROM StockQuant q, StockLocation l " +
           "WHERE l.id = q.locationId AND q.companyId = :cid AND l.warehouseId = :wid AND l.usage = 'internal' " +
           "GROUP BY q.productId")
    List<Object[]> sumQuantityByProductForWarehouse(@Param("cid") Long companyId, @Param("wid") Long warehouseId);

    /** Quantité totale d'un article dans un entrepôt (tous ses emplacements internes) — base de pondération du CMUP. */
    @Query("SELECT COALESCE(SUM(q.quantity), 0) FROM StockQuant q, StockLocation l " +
           "WHERE l.id = q.locationId AND q.productId = :pid AND l.warehouseId = :wid AND l.usage = 'internal'")
    java.math.BigDecimal sumQuantityForProductInWarehouse(@Param("pid") Long productId, @Param("wid") Long warehouseId);

    /** Articles stockables actifs dont le stock dans le magasin principal (emplacements internes) est
     *  < seuil. Seuls les articles ayant déjà eu au moins un mouvement validé dans ce magasin sont
     *  retenus : un article toujours resté à 0 n'est pas une alerte → [productId, code, name, qty]. */
    @Query(value = "SELECT p.id, p.default_code, p.name, COALESCE(SUM(q.quantity), 0) AS qty " +
           "FROM products p " +
           "LEFT JOIN stock_quants q ON q.product_id = p.id AND q.company_id = p.company_id " +
           "  AND q.location_id IN (SELECT l.id FROM stock_locations l WHERE l.warehouse_id = :wid AND l.usage = 'internal') " +
           "WHERE p.company_id = :cid AND p.active = true AND p.type = 'product' " +
           "  AND EXISTS (SELECT 1 FROM stock_moves m JOIN stock_locations ml " +
           "    ON ml.id = m.location_dest_id OR ml.id = m.location_id " +
           "    WHERE m.product_id = p.id AND m.company_id = p.company_id AND m.state = 'done' " +
           "      AND ml.warehouse_id = :wid AND ml.usage = 'internal') " +
           "GROUP BY p.id, p.default_code, p.name " +
           "HAVING COALESCE(SUM(q.quantity), 0) < :threshold " +
           "ORDER BY qty ASC, p.name ASC", nativeQuery = true)
    List<Object[]> findLowStockProducts(@Param("cid") Long companyId, @Param("wid") Long warehouseId,
                                        @Param("threshold") java.math.BigDecimal threshold);

    @Query("SELECT q FROM StockQuant q WHERE q.companyId = :cid")
    List<StockQuant> findAllByCompanyId(@Param("cid") Long companyId);

    @Query(value = "SELECT COALESCE(SUM(q.quantity * p.standard_price), 0) FROM stock_quants q JOIN products p ON p.id = q.product_id WHERE q.company_id = :cid AND q.quantity > 0", nativeQuery = true)
    java.math.BigDecimal computeTotalStockValue(@Param("cid") Long companyId);
}

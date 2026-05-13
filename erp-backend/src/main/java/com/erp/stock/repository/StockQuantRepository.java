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

    @Query("SELECT q FROM StockQuant q WHERE q.companyId = :cid")
    List<StockQuant> findAllByCompanyId(@Param("cid") Long companyId);

    @Query(value = "SELECT COALESCE(SUM(q.quantity * p.standard_price), 0) FROM stock_quants q JOIN products p ON p.id = q.product_id WHERE q.company_id = :cid AND q.quantity > 0", nativeQuery = true)
    java.math.BigDecimal computeTotalStockValue(@Param("cid") Long companyId);
}

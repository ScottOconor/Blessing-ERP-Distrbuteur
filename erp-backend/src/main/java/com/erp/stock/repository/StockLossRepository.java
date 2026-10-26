package com.erp.stock.repository;

import com.erp.stock.entity.StockLoss;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface StockLossRepository extends JpaRepository<StockLoss, Long> {
    List<StockLoss> findByCompanyIdOrderByDateDesc(Long companyId);
    List<StockLoss> findByCompanyIdAndDateBetweenOrderByDateAsc(Long companyId, LocalDate from, LocalDate to);
    long countByCompanyId(Long companyId);

    /** Plus grand numéro attribué (CASSE/00042 -> 42), 0 si aucun. */
    @Query(value = "SELECT COALESCE(MAX(CAST(SUBSTRING(name FROM '^CASSE/([0-9]+)$') AS BIGINT)), 0) " +
                   "FROM stock_losses WHERE company_id = :cid", nativeQuery = true)
    long findMaxNameSequence(@Param("cid") Long companyId);
}

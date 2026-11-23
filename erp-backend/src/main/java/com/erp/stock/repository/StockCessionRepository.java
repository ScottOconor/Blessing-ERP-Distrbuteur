package com.erp.stock.repository;

import com.erp.stock.entity.StockCession;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface StockCessionRepository extends JpaRepository<StockCession, Long> {
    List<StockCession> findByCompanyIdOrderByDateDesc(Long companyId);
    List<StockCession> findByCompanyIdAndDateBetweenOrderByDateAsc(Long companyId, LocalDate from, LocalDate to);
    long countByCompanyId(Long companyId);
}

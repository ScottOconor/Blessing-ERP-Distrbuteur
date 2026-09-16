package com.erp.stock.repository;

import com.erp.stock.entity.StockLoss;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface StockLossRepository extends JpaRepository<StockLoss, Long> {
    List<StockLoss> findByCompanyIdOrderByDateDesc(Long companyId);
    List<StockLoss> findByCompanyIdAndDateBetweenOrderByDateAsc(Long companyId, LocalDate from, LocalDate to);
    long countByCompanyId(Long companyId);
}

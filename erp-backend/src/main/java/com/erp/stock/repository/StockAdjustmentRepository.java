package com.erp.stock.repository;

import com.erp.stock.entity.StockAdjustment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StockAdjustmentRepository extends JpaRepository<StockAdjustment, Long> {
    List<StockAdjustment> findByCompanyIdOrderByCreatedAtDesc(Long companyId);
    List<StockAdjustment> findByProductIdAndCompanyIdOrderByCreatedAtDesc(Long productId, Long companyId);
}

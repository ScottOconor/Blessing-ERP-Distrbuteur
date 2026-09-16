package com.erp.stock.repository;

import com.erp.stock.entity.ProductWarehouseValuation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductWarehouseValuationRepository extends JpaRepository<ProductWarehouseValuation, Long> {

    Optional<ProductWarehouseValuation> findByProductIdAndWarehouseId(Long productId, Long warehouseId);

    List<ProductWarehouseValuation> findByProductIdAndCompanyId(Long productId, Long companyId);

    List<ProductWarehouseValuation> findByWarehouseIdAndCompanyId(Long warehouseId, Long companyId);
}

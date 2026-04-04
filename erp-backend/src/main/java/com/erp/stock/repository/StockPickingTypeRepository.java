package com.erp.stock.repository;

import com.erp.stock.entity.StockPickingType;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface StockPickingTypeRepository extends JpaRepository<StockPickingType, Long> {
    List<StockPickingType> findByCompanyIdOrderByNameAsc(Long companyId);
    List<StockPickingType> findByWarehouseIdOrderByNameAsc(Long warehouseId);
    List<StockPickingType> findByCompanyIdAndCodeOrderByNameAsc(Long companyId, String code);
}

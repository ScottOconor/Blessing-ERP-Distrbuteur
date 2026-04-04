package com.erp.stock.repository;

import com.erp.stock.entity.StockLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StockLocationRepository extends JpaRepository<StockLocation, Long> {
    List<StockLocation> findByCompanyIdAndActiveOrderByNameAsc(Long companyId, boolean active);
    List<StockLocation> findByWarehouseIdOrderByNameAsc(Long warehouseId);
    List<StockLocation> findByParentIdOrderByNameAsc(Long parentId);

    @Query("SELECT l FROM StockLocation l WHERE (l.companyId = :cid OR l.companyId IS NULL) AND l.active = true AND l.usage = :usage ORDER BY l.name")
    List<StockLocation> findByUsage(@Param("cid") Long companyId, @Param("usage") String usage);

    @Query("SELECT l FROM StockLocation l WHERE (l.companyId = :cid OR l.companyId IS NULL) AND l.active = true AND l.usage IN ('internal','transit') ORDER BY l.name")
    List<StockLocation> findInternalAndTransit(@Param("cid") Long companyId);

    @Query("SELECT l FROM StockLocation l WHERE (l.companyId = :cid OR l.companyId IS NULL) AND l.active = true ORDER BY l.name")
    List<StockLocation> findAllForCompany(@Param("cid") Long companyId);
}

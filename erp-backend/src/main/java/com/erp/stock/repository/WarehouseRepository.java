package com.erp.stock.repository;

import com.erp.stock.entity.Warehouse;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface WarehouseRepository extends JpaRepository<Warehouse, Long> {
    List<Warehouse> findByCompanyIdAndActiveOrderByNameAsc(Long companyId, boolean active);
    List<Warehouse> findByCompanyIdOrderByNameAsc(Long companyId);
    boolean existsByCodeAndCompanyId(String code, Long companyId);

    default List<Warehouse> findByCompanyIdAndActiveTrue(Long companyId) {
        return findByCompanyIdAndActiveOrderByNameAsc(companyId, true);
    }
}

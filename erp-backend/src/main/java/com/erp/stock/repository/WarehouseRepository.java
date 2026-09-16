package com.erp.stock.repository;

import com.erp.stock.entity.Warehouse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;
import java.util.Optional;

public interface WarehouseRepository extends JpaRepository<Warehouse, Long> {
    List<Warehouse> findByCompanyIdAndActiveOrderByNameAsc(Long companyId, boolean active);
    List<Warehouse> findByCompanyIdOrderByNameAsc(Long companyId);
    boolean existsByCodeAndCompanyId(String code, Long companyId);
    Optional<Warehouse> findFirstByCodeAndCompanyId(String code, Long companyId);
    Optional<Warehouse> findFirstByCompanyIdAndIsDefaultTrue(Long companyId);

    @Modifying
    @Query("UPDATE Warehouse w SET w.isDefault = false WHERE w.companyId = :companyId")
    void clearDefaultForCompany(@Param("companyId") Long companyId);

    default List<Warehouse> findByCompanyIdAndActiveTrue(Long companyId) {
        return findByCompanyIdAndActiveOrderByNameAsc(companyId, true);
    }
}

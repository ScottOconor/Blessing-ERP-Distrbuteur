package com.erp.stock.repository;

import com.erp.stock.entity.StockPicking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StockPickingRepository extends JpaRepository<StockPicking, Long> {

    List<StockPicking> findByCompanyIdOrderByCreatedAtDesc(Long companyId);

    @Query("SELECT p FROM StockPicking p WHERE p.companyId = :cid AND p.pickingTypeCode = :code ORDER BY p.createdAt DESC")
    List<StockPicking> findByCompanyAndType(@Param("cid") Long companyId, @Param("code") String code);

    @Query("SELECT p FROM StockPicking p WHERE p.companyId = :cid AND p.pickingTypeCode = :code AND p.state = :state ORDER BY p.createdAt DESC")
    List<StockPicking> findByCompanyTypeAndState(@Param("cid") Long companyId, @Param("code") String code, @Param("state") String state);

    @Query(value = "SELECT COUNT(*) FROM stock_pickings WHERE company_id = :cid AND name LIKE CONCAT(:prefix, '/%')", nativeQuery = true)
    Integer findMaxSeq(@Param("cid") Long companyId, @Param("prefix") String prefix);

    long countByPickingTypeId(Long pickingTypeId);
}

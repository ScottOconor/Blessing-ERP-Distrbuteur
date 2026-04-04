package com.erp.purchases.repository;

import com.erp.purchases.entity.PurchaseOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Long> {

    List<PurchaseOrder> findByCompanyIdOrderByCreatedAtDesc(Long companyId);

    @Query("SELECT COALESCE(MAX(CAST(SUBSTRING(p.name, 9) AS int)), 0) FROM PurchaseOrder p WHERE p.company.id = :cid AND p.name LIKE CONCAT('AC-', :year, '-%')")
    Integer findMaxSequenceByCompanyAndYear(@Param("cid") Long companyId, @Param("year") int year);
}

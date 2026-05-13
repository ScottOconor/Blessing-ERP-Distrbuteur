package com.erp.sales.repository;

import com.erp.sales.entity.SalesOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SalesOrderRepository extends JpaRepository<SalesOrder, Long> {

    List<SalesOrder> findByCompanyIdOrderByDateDescNameDesc(Long companyId);

    List<SalesOrder> findByCompanyIdAndStateOrderByDateDescNameDesc(Long companyId, String state);

    List<SalesOrder> findByCompanyIdAndPartnerIdOrderByDateDesc(Long companyId, Long partnerId);

    @Query("SELECT COALESCE(MAX(CAST(SUBSTRING(o.name, LENGTH(o.name) - 4) AS int)), 0) " +
           "FROM SalesOrder o WHERE o.company.id = :companyId AND YEAR(o.date) = :year")
    Integer findMaxSequenceByCompanyAndYear(@Param("companyId") Long companyId, @Param("year") int year);

    @Query("SELECT COALESCE(MAX(CAST(SUBSTRING(o.name, LENGTH(o.name) - 4) AS int)), 0) " +
           "FROM SalesOrder o WHERE o.company.id = :companyId AND YEAR(o.date) = :year AND o.name LIKE 'EL-%'")
    Integer findMaxEleaderSequenceByCompanyAndYear(@Param("companyId") Long companyId, @Param("year") int year);
}

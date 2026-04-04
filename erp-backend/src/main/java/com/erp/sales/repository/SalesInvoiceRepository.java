package com.erp.sales.repository;

import com.erp.sales.entity.SalesInvoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SalesInvoiceRepository extends JpaRepository<SalesInvoice, Long> {

    List<SalesInvoice> findByCompanyIdOrderByDateDescNameDesc(Long companyId);

    List<SalesInvoice> findByCompanyIdAndStateOrderByDateDescNameDesc(Long companyId, String state);

    List<SalesInvoice> findByCompanyIdAndPartnerIdOrderByDateDesc(Long companyId, Long partnerId);

    Optional<SalesInvoice> findBySalesOrderId(Long orderId);

    List<SalesInvoice> findByCompanyIdAndTypeOrderByDateDescNameDesc(Long companyId, String type);

    List<SalesInvoice> findByOriginalInvoiceId(Long originalInvoiceId);

    @Query("SELECT COALESCE(MAX(CAST(SUBSTRING(i.name, LENGTH(i.name) - 4) AS int)), 0) " +
           "FROM SalesInvoice i WHERE i.company.id = :companyId AND i.type = :type AND YEAR(i.date) = :year")
    Integer findMaxSequenceByCompanyTypeAndYear(@Param("companyId") Long companyId,
                                                @Param("type") String type,
                                                @Param("year") int year);

    @Query("SELECT COALESCE(MAX(CAST(SUBSTRING(i.name, LENGTH(i.name) - 4) AS int)), 0) " +
           "FROM SalesInvoice i WHERE i.company.id = :companyId AND YEAR(i.date) = :year")
    Integer findMaxSequenceByCompanyAndYear(@Param("companyId") Long companyId, @Param("year") int year);
}

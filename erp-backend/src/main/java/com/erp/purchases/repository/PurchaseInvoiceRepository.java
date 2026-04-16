package com.erp.purchases.repository;

import com.erp.purchases.entity.PurchaseInvoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PurchaseInvoiceRepository extends JpaRepository<PurchaseInvoice, Long> {

    List<PurchaseInvoice> findByCompanyIdOrderByDateDescNameDesc(Long companyId);

    List<PurchaseInvoice> findByCompanyIdAndTypeOrderByDateDescNameDesc(Long companyId, String type);

    List<PurchaseInvoice> findByCompanyIdAndStateOrderByDateDescNameDesc(Long companyId, String state);

    Optional<PurchaseInvoice> findFirstByPurchaseOrderId(Long orderId);

    List<PurchaseInvoice> findByOriginalInvoiceId(Long originalInvoiceId);

    @Query("SELECT COALESCE(MAX(CAST(SUBSTRING(i.name, LENGTH(i.name) - 4) AS int)), 0) " +
           "FROM PurchaseInvoice i WHERE i.company.id = :companyId AND i.type = :type AND YEAR(i.date) = :year")
    Integer findMaxSequenceByCompanyTypeAndYear(@Param("companyId") Long companyId,
                                                @Param("type") String type,
                                                @Param("year") int year);
}

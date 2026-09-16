package com.erp.purchases.repository;

import com.erp.purchases.entity.PurchaseInvoicePayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

@Repository
public interface PurchaseInvoicePaymentRepository extends JpaRepository<PurchaseInvoicePayment, Long> {

    List<PurchaseInvoicePayment> findByInvoiceId(Long invoiceId);

    List<PurchaseInvoicePayment> findByCompanyIdOrderByDateDescNameDesc(Long companyId);

    @Query("SELECT COALESCE(SUM(p.amount), 0) FROM PurchaseInvoicePayment p WHERE p.invoice.id = :invoiceId AND p.state = 'posted'")
    BigDecimal sumPostedPaymentsByInvoice(@Param("invoiceId") Long invoiceId);

    @Query("SELECT COALESCE(MAX(CAST(SUBSTRING(p.name, LENGTH(p.name) - 4) AS int)), 0) " +
           "FROM PurchaseInvoicePayment p WHERE p.company.id = :companyId AND YEAR(p.date) = :year")
    Integer findMaxSequenceByCompanyAndYear(@Param("companyId") Long companyId, @Param("year") int year);

    @Query("SELECT p.accountMove.id FROM PurchaseInvoicePayment p WHERE p.invoice.partner.id = :partnerId AND p.accountMove IS NOT NULL")
    Set<Long> findAccountMoveIdsByPartner(@Param("partnerId") Long partnerId);
}

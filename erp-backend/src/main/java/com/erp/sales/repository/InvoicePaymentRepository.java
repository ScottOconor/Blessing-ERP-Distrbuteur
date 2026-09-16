package com.erp.sales.repository;

import com.erp.sales.entity.InvoicePayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

@Repository
public interface InvoicePaymentRepository extends JpaRepository<InvoicePayment, Long> {

    List<InvoicePayment> findByInvoiceIdOrderByDateDesc(Long invoiceId);

    List<InvoicePayment> findByCompanyIdOrderByDateDesc(Long companyId);

    @Query("SELECT COALESCE(SUM(p.amount), 0) FROM InvoicePayment p " +
           "WHERE p.invoice.id = :invoiceId AND p.state = 'posted'")
    BigDecimal sumPostedPaymentsByInvoice(@Param("invoiceId") Long invoiceId);

    @Query("SELECT COALESCE(MAX(CAST(SUBSTRING(p.name, LENGTH(p.name) - 4) AS int)), 0) " +
           "FROM InvoicePayment p WHERE p.company.id = :companyId AND YEAR(p.date) = :year")
    Integer findMaxSequenceByCompanyAndYear(@Param("companyId") Long companyId, @Param("year") int year);

    /** IDs des AccountMove utilisés comme paiements directs pour un partenaire client */
    @Query("SELECT p.accountMove.id FROM InvoicePayment p " +
           "WHERE p.invoice.partner.id = :partnerId AND p.accountMove IS NOT NULL")
    Set<Long> findAccountMoveIdsByPartner(@Param("partnerId") Long partnerId);
}

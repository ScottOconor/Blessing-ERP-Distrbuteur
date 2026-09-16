package com.erp.sales.repository;

import com.erp.sales.entity.SalesInvoiceReconciliation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface SalesInvoiceReconciliationRepository extends JpaRepository<SalesInvoiceReconciliation, Long> {

    List<SalesInvoiceReconciliation> findByInvoiceIdOrderByDateDesc(Long invoiceId);

    List<SalesInvoiceReconciliation> findByAccountMoveId(Long accountMoveId);

    @Query("SELECT COALESCE(SUM(r.amount), 0) FROM SalesInvoiceReconciliation r WHERE r.accountMove.id = :moveId")
    BigDecimal sumReconciledByMove(@Param("moveId") Long moveId);

    @Query("SELECT COALESCE(SUM(r.amount), 0) FROM SalesInvoiceReconciliation r WHERE r.accountMove.id = :moveId AND r.invoice.id = :invoiceId")
    BigDecimal sumReconciledByMoveAndInvoice(@Param("moveId") Long moveId, @Param("invoiceId") Long invoiceId);
}

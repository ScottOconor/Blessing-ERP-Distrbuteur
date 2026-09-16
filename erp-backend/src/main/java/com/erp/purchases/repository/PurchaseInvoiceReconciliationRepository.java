package com.erp.purchases.repository;

import com.erp.purchases.entity.PurchaseInvoiceReconciliation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface PurchaseInvoiceReconciliationRepository extends JpaRepository<PurchaseInvoiceReconciliation, Long> {

    @Query("SELECT r FROM PurchaseInvoiceReconciliation r WHERE r.invoice.id = :invoiceId ORDER BY r.date DESC")
    List<PurchaseInvoiceReconciliation> findByInvoiceIdOrderByDateDesc(@Param("invoiceId") Long invoiceId);

    List<PurchaseInvoiceReconciliation> findByAccountMoveId(Long accountMoveId);

    @Query("SELECT COALESCE(SUM(r.amount), 0) FROM PurchaseInvoiceReconciliation r WHERE r.accountMove.id = :moveId")
    BigDecimal sumReconciledByMove(@Param("moveId") Long moveId);

    @Query("SELECT COALESCE(SUM(r.amount), 0) FROM PurchaseInvoiceReconciliation r WHERE r.accountMove.id = :moveId AND r.invoice.id = :invoiceId")
    BigDecimal sumReconciledByMoveAndInvoice(@Param("moveId") Long moveId, @Param("invoiceId") Long invoiceId);
}

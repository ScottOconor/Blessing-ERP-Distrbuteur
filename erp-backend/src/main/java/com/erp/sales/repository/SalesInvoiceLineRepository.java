package com.erp.sales.repository;

import com.erp.sales.entity.SalesInvoiceLine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface SalesInvoiceLineRepository extends JpaRepository<SalesInvoiceLine, Long> {

    /**
     * Fetch all invoice lines for posted/paid sales invoices in the given period.
     * Loads partner via JOIN FETCH to avoid N+1 queries.
     */
    @Query("""
        SELECT l FROM SalesInvoiceLine l
        JOIN FETCH l.invoice i
        JOIN FETCH i.partner p
        WHERE i.company.id = :companyId
          AND i.date >= :dateFrom
          AND i.date <= :dateTo
          AND i.state IN ('posted', 'paid')
          AND i.type = 'invoice'
        ORDER BY p.name, l.description
        """)
    List<SalesInvoiceLine> findStatsLines(
        @Param("companyId") Long companyId,
        @Param("dateFrom") LocalDate dateFrom,
        @Param("dateTo") LocalDate dateTo
    );
}

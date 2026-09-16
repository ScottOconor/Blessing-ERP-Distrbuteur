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

    @Query("""
        SELECT l FROM SalesInvoiceLine l
        JOIN FETCH l.invoice i
        JOIN FETCH i.partner p
        WHERE i.company.id = :companyId
          AND i.date >= :dateFrom
          AND i.date <= :dateTo
          AND i.state IN ('posted', 'paid', 'partiellement_extournee', 'extournee')
          AND i.type = 'invoice'
          AND l.consigne = false
        ORDER BY p.name, l.description
        """)
    List<SalesInvoiceLine> findStatsLines(
        @Param("companyId") Long companyId,
        @Param("dateFrom") LocalDate dateFrom,
        @Param("dateTo") LocalDate dateTo
    );

    @Query("""
        SELECT l FROM SalesInvoiceLine l
        JOIN FETCH l.invoice i
        JOIN FETCH i.partner p
        WHERE i.company.id = :companyId
          AND i.date >= :dateFrom
          AND i.date <= :dateTo
          AND i.state IN ('posted', 'paid', 'partiellement_extournee', 'extournee')
          AND i.type = 'invoice'
          AND l.consigne = false
          AND (:partnerId IS NULL OR p.id = :partnerId)
          AND (:categoryId IS NULL OR l.categoryId = :categoryId)
          AND (:productId IS NULL OR l.productId = :productId)
          AND (:createdBy IS NULL OR i.createdBy = :createdBy)
          AND (:warehouseId IS NULL OR i.warehouseId = :warehouseId)
        ORDER BY p.name, l.description
        """)
    List<SalesInvoiceLine> findStatsLinesFiltered(
        @Param("companyId") Long companyId,
        @Param("dateFrom") LocalDate dateFrom,
        @Param("dateTo") LocalDate dateTo,
        @Param("partnerId") Long partnerId,
        @Param("categoryId") Long categoryId,
        @Param("productId") Long productId,
        @Param("createdBy") String createdBy,
        @Param("warehouseId") Long warehouseId
    );

    /**
     * Toutes les lignes d'avoirs validés (postés ou payés), qu'ils soient liés
     * à une facture ou manuels. Ils seront comptés en négatif dans les stats.
     */
    /**
     * Avoirs filtrés par la date de la facture d'origine (si liée), sinon par leur propre date.
     * Ainsi un avoir apparaît dans la même période que la facture qu'il corrige.
     */
    @Query("""
        SELECT l FROM SalesInvoiceLine l
        JOIN FETCH l.invoice i
        JOIN FETCH i.partner p
        WHERE i.company.id = :companyId
          AND COALESCE(i.originalInvoice.date, i.date) >= :dateFrom
          AND COALESCE(i.originalInvoice.date, i.date) <= :dateTo
          AND i.type = 'credit_note'
          AND i.state IN ('posted', 'paid')
          AND l.consigne = false
        ORDER BY p.name, l.description
        """)
    List<SalesInvoiceLine> findAllAvoirLines(
        @Param("companyId") Long companyId,
        @Param("dateFrom") LocalDate dateFrom,
        @Param("dateTo") LocalDate dateTo
    );

    @Query("""
        SELECT l FROM SalesInvoiceLine l
        JOIN FETCH l.invoice i
        JOIN FETCH i.partner p
        WHERE i.company.id = :companyId
          AND COALESCE(i.originalInvoice.date, i.date) >= :dateFrom
          AND COALESCE(i.originalInvoice.date, i.date) <= :dateTo
          AND i.type = 'credit_note'
          AND i.state IN ('posted', 'paid')
          AND l.consigne = false
          AND (:partnerId IS NULL OR p.id = :partnerId)
          AND (:categoryId IS NULL OR l.categoryId = :categoryId)
          AND (:productId IS NULL OR l.productId = :productId)
          AND (:createdBy IS NULL OR i.createdBy = :createdBy)
          AND (:warehouseId IS NULL OR i.warehouseId = :warehouseId)
        ORDER BY p.name, l.description
        """)
    List<SalesInvoiceLine> findAllAvoirLinesFiltered(
        @Param("companyId") Long companyId,
        @Param("dateFrom") LocalDate dateFrom,
        @Param("dateTo") LocalDate dateTo,
        @Param("partnerId") Long partnerId,
        @Param("categoryId") Long categoryId,
        @Param("productId") Long productId,
        @Param("createdBy") String createdBy,
        @Param("warehouseId") Long warehouseId
    );
}

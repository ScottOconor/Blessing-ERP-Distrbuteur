package com.erp.sales.repository;

import com.erp.sales.entity.SalesInvoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface SalesInvoiceRepository extends JpaRepository<SalesInvoice, Long> {

    List<SalesInvoice> findByCompanyIdOrderByDateDescNameDesc(Long companyId);

    List<SalesInvoice> findByCompanyIdAndStateOrderByDateDescNameDesc(Long companyId, String state);

    List<SalesInvoice> findByCompanyIdAndPartnerIdOrderByDateDesc(Long companyId, Long partnerId);

    Optional<SalesInvoice> findFirstBySalesOrderId(Long orderId);

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

    @Query("SELECT i FROM SalesInvoice i WHERE i.company.id = :companyId AND i.type = 'invoice' " +
           "AND i.state IN ('posted','paid') AND i.date BETWEEN :start AND :end ORDER BY i.date DESC")
    List<SalesInvoice> findPostedByCompanyAndDateRange(@Param("companyId") Long companyId,
                                                       @Param("start") LocalDate start,
                                                       @Param("end") LocalDate end);

    /** Avoirs (credit_note) validés ayant encore un montant disponible, du plus ancien au plus récent */
    @Query("SELECT i FROM SalesInvoice i WHERE i.partner.id = :partnerId AND i.company.id = :companyId " +
           "AND i.type = 'credit_note' AND i.state = 'posted' AND i.montantDu > 0 ORDER BY i.date ASC, i.id ASC")
    List<SalesInvoice> findAvailableCreditNotes(@Param("partnerId") Long partnerId,
                                                @Param("companyId") Long companyId);

    /** Somme totale des crédits (avoirs) disponibles pour un partenaire */
    @Query("SELECT COALESCE(SUM(i.montantDu), 0) FROM SalesInvoice i " +
           "WHERE i.partner.id = :partnerId AND i.company.id = :companyId " +
           "AND i.type = 'credit_note' AND i.state = 'posted' AND i.montantDu > 0")
    java.math.BigDecimal sumAvailableCredits(@Param("partnerId") Long partnerId,
                                             @Param("companyId") Long companyId);

    // ======= GROUP DASHBOARD STATS =======

    @Query("SELECT i.company.id, COUNT(i), COALESCE(SUM(i.totalTTC), 0) " +
           "FROM SalesInvoice i WHERE i.company.id IN :companyIds " +
           "AND i.state IN ('posted','paid') AND i.type = 'invoice' AND i.date = :today " +
           "GROUP BY i.company.id")
    List<Object[]> todayStatsByCompanies(@Param("companyIds") List<Long> companyIds,
                                         @Param("today") LocalDate today);

    @Query("SELECT i.company.id, COALESCE(SUM(i.montantDu), 0) " +
           "FROM SalesInvoice i WHERE i.company.id IN :companyIds " +
           "AND i.state = 'posted' AND i.type = 'invoice' " +
           "GROUP BY i.company.id")
    List<Object[]> totalDueByCompanies(@Param("companyIds") List<Long> companyIds);

    @Query("SELECT i.company.id, COALESCE(SUM(i.totalTTC), 0), COUNT(i) " +
           "FROM SalesInvoice i WHERE i.company.id IN :companyIds " +
           "AND i.state IN ('posted','paid') AND i.type = 'invoice' " +
           "AND YEAR(i.date) = :year AND MONTH(i.date) = :month " +
           "GROUP BY i.company.id")
    List<Object[]> monthStatsByCompanies(@Param("companyIds") List<Long> companyIds,
                                          @Param("year") int year,
                                          @Param("month") int month);
}

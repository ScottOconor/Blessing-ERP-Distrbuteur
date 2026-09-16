package com.erp.sales.repository;

import com.erp.sales.entity.RistournePaiement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

public interface RistournePaiementRepository extends JpaRepository<RistournePaiement, Long> {

    List<RistournePaiement> findByCompanyIdOrderByCreatedAtDesc(Long companyId);

    List<RistournePaiement> findByPartnerIdAndCompanyId(Long partnerId, Long companyId);

    List<RistournePaiement> findByCompanyIdAndTypeRistourneOrderByCreatedAtDesc(Long companyId, String typeRistourne);

    boolean existsByInvoice_IdAndTypeRistourne(Long invoiceId, String typeRistourne);

    // ── Snapshot queries ─────────────────────────────────────────────────

    // "Générées" = toutes les ristournes créées (draft/confirmed/done), à l'exclusion des
    // annulées — le dashboard doit refléter tout ce qui a été généré, pas seulement ce qui
    // est confirmé (cf. même correctif sur RemisePaiementRepository).
    @Query("SELECT COALESCE(SUM(r.totalAmount), 0) FROM RistournePaiement r " +
           "WHERE r.companyId = :cid AND r.state <> 'cancelled'")
    BigDecimal sumTotalByCompany(@Param("cid") Long companyId);

    @Query("SELECT COALESCE(SUM(r.totalAmount), 0) FROM RistournePaiement r " +
           "WHERE r.companyId = :cid AND r.state <> 'cancelled' " +
           "AND r.date BETWEEN :from AND :to")
    BigDecimal sumByPeriod(@Param("cid") Long companyId,
                           @Param("from") LocalDate from,
                           @Param("to")   LocalDate to);

    @Query("SELECT COALESCE(SUM(r.totalAmount), 0) FROM RistournePaiement r " +
           "WHERE r.companyId = :cid AND r.state = :state")
    BigDecimal sumByState(@Param("cid") Long companyId, @Param("state") String state);

    @Query("SELECT COALESCE(SUM(r.totalAmount), 0) FROM RistournePaiement r " +
           "WHERE r.companyId = :cid AND r.state = :state " +
           "AND r.date BETWEEN :from AND :to")
    BigDecimal sumByStateAndPeriod(@Param("cid") Long companyId,
                                   @Param("state") String state,
                                   @Param("from") LocalDate from,
                                   @Param("to")   LocalDate to);

    @Query("SELECT COALESCE(SUM(r.totalAmount), 0) FROM RistournePaiement r " +
           "WHERE r.companyId = :cid AND r.state IN :states")
    BigDecimal sumByStates(@Param("cid") Long companyId, @Param("states") List<String> states);

    @Query("SELECT COALESCE(SUM(r.totalAmount), 0) FROM RistournePaiement r " +
           "WHERE r.companyId = :cid AND r.state IN :states " +
           "AND r.date BETWEEN :from AND :to")
    BigDecimal sumByStatesAndPeriod(@Param("cid") Long companyId,
                                    @Param("states") List<String> states,
                                    @Param("from") LocalDate from,
                                    @Param("to")   LocalDate to);

    long countByCompanyIdAndStateIn(Long companyId, List<String> states);

    // "Payé aujourd'hui" — indépendant du trimestre d'origine du règlement, c'est bien
    // "tout ce qui a été effectivement payé ce jour-là", quelle que soit la période couverte.
    @Query("SELECT COALESCE(SUM(r.totalAmount), 0) FROM RistournePaiement r " +
           "WHERE r.companyId = :cid AND r.state = 'done' AND r.datePaiement = :date")
    BigDecimal sumByDatePaiement(@Param("cid") Long companyId, @Param("date") LocalDate date);
}

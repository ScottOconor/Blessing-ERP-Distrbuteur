package com.erp.purchases.repository;

import com.erp.purchases.entity.RemisePaiement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

public interface RemisePaiementRepository extends JpaRepository<RemisePaiement, Long> {

    List<RemisePaiement> findByCompanyIdOrderByCreatedAtDesc(Long companyId);

    /** Version bornée en SQL — voir SalesInvoiceRepository.findByCompanyIdAndStateNotSince pour le
     *  contexte complet (même correctif OOM snapshot, incidents Blessing de septembre 2026). */
    @Query("SELECT r FROM RemisePaiement r WHERE r.companyId = :companyId " +
           "AND (r.date IS NULL OR r.date >= :since) ORDER BY r.createdAt DESC")
    List<RemisePaiement> findByCompanyIdSince(@Param("companyId") Long companyId,
                                               @Param("since") LocalDate since);

    /** Snapshot incrémental — voir SalesInvoiceRepository.findByCompanyIdAndStateNotModifiedSince
     *  pour le contexte complet. */
    @Query("SELECT r FROM RemisePaiement r WHERE r.companyId = :companyId " +
           "AND r.updatedAt >= :modifiedSince ORDER BY r.createdAt DESC")
    List<RemisePaiement> findByCompanyIdModifiedSince(@Param("companyId") Long companyId,
                                                       @Param("modifiedSince") java.time.LocalDateTime modifiedSince);

    List<RemisePaiement> findByPartnerIdAndCompanyId(Long partnerId, Long companyId);

    boolean existsByInvoiceIdAndTypeRemise(Long invoiceId, String typeRemise);

    // ── Snapshot queries ─────────────────────────────────────────────────

    // "Générées" = toutes les remises créées (draft/confirmed/done), à l'exclusion des annulées —
    // le dashboard doit refléter tout ce qui a été généré, pas seulement ce qui est confirmé.
    @Query("SELECT COALESCE(SUM(r.totalAmount), 0) FROM RemisePaiement r " +
           "WHERE r.companyId = :cid AND r.state <> 'cancelled'")
    BigDecimal sumTotalByCompany(@Param("cid") Long companyId);

    @Query("SELECT COALESCE(SUM(r.totalAmount), 0) FROM RemisePaiement r " +
           "WHERE r.companyId = :cid AND r.state <> 'cancelled' " +
           "AND r.date BETWEEN :from AND :to")
    BigDecimal sumByPeriod(@Param("cid") Long companyId,
                           @Param("from") LocalDate from,
                           @Param("to")   LocalDate to);

    @Query("SELECT COALESCE(SUM(r.totalAmount), 0) FROM RemisePaiement r " +
           "WHERE r.companyId = :cid AND r.state IN :states")
    BigDecimal sumByStates(@Param("cid") Long companyId, @Param("states") List<String> states);

    @Query("SELECT COALESCE(SUM(r.totalAmount), 0) FROM RemisePaiement r " +
           "WHERE r.companyId = :cid AND r.state IN :states " +
           "AND r.date BETWEEN :from AND :to")
    BigDecimal sumByStatesAndPeriod(@Param("cid") Long companyId,
                                    @Param("states") List<String> states,
                                    @Param("from") LocalDate from,
                                    @Param("to")   LocalDate to);

    long countByCompanyIdAndStateIn(Long companyId, List<String> states);

    // "Payé aujourd'hui" — indépendant du trimestre d'origine du règlement, c'est bien
    // "tout ce qui a été effectivement payé ce jour-là", quelle que soit la période couverte.
    @Query("SELECT COALESCE(SUM(r.totalAmount), 0) FROM RemisePaiement r " +
           "WHERE r.companyId = :cid AND r.state = 'done' AND r.datePaiement = :date")
    BigDecimal sumByDatePaiement(@Param("cid") Long companyId, @Param("date") LocalDate date);
}

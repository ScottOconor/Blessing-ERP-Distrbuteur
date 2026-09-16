package com.erp.accounting.repository;

import com.erp.accounting.entity.AnalyticLine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface AnalyticLineRepository extends JpaRepository<AnalyticLine, Long> {

    List<AnalyticLine> findByCompanyIdOrderByDateDesc(Long companyId);

    /** Tous les comptes — paramètres de date toujours non-null (substituer avec bornes extrêmes si besoin) */
    @Query("""
        SELECT l FROM AnalyticLine l
        JOIN FETCH l.analyticAccount a
        LEFT JOIN FETCH a.parent
        LEFT JOIN FETCH l.generalAccount
        WHERE l.company.id = :companyId
          AND l.date >= :from
          AND l.date <= :to
        ORDER BY l.date DESC
    """)
    List<AnalyticLine> findByCompanyAndPeriod(
        @Param("companyId") Long companyId,
        @Param("from") LocalDate from,
        @Param("to") LocalDate to
    );

    /** Avec filtre de compte analytique */
    @Query("""
        SELECT l FROM AnalyticLine l
        JOIN FETCH l.analyticAccount a
        LEFT JOIN FETCH a.parent
        LEFT JOIN FETCH l.generalAccount
        WHERE l.company.id = :companyId
          AND l.analyticAccount.id = :analyticAccountId
          AND l.date >= :from
          AND l.date <= :to
        ORDER BY l.date DESC
    """)
    List<AnalyticLine> findByCompanyAccountAndPeriod(
        @Param("companyId") Long companyId,
        @Param("analyticAccountId") Long analyticAccountId,
        @Param("from") LocalDate from,
        @Param("to") LocalDate to
    );

    /** Substitue les dates nulles par des bornes extrêmes pour éviter le problème de typage PostgreSQL */
    default List<AnalyticLine> findByFilters(Long companyId, Long analyticAccountId, LocalDate from, LocalDate to) {
        LocalDate effectiveFrom = (from != null) ? from : LocalDate.of(1900, 1, 1);
        LocalDate effectiveTo   = (to   != null) ? to   : LocalDate.of(2099, 12, 31);
        if (analyticAccountId != null) {
            return findByCompanyAccountAndPeriod(companyId, analyticAccountId, effectiveFrom, effectiveTo);
        }
        return findByCompanyAndPeriod(companyId, effectiveFrom, effectiveTo);
    }

    @Query("""
        SELECT l FROM AnalyticLine l
        WHERE l.analyticAccount.id = :analyticAccountId
          AND (:from IS NULL OR l.date >= :from)
          AND (:to IS NULL OR l.date <= :to)
    """)
    List<AnalyticLine> findByAnalyticAccount(
        @Param("analyticAccountId") Long analyticAccountId,
        @Param("from") LocalDate from,
        @Param("to") LocalDate to
    );

    /** Chargement en masse pour l'affichage de listes d'écritures (cf. AccountingService#getJournalEntries)
     *  — évite une requête par ligne d'écriture. */
    @Query("SELECT l FROM AnalyticLine l JOIN FETCH l.analyticAccount WHERE l.moveLine.id IN :moveLineIds")
    List<AnalyticLine> findByMoveLineIdIn(@Param("moveLineIds") List<Long> moveLineIds);

    @Modifying(clearAutomatically = true, flushAutomatically = true)
    @Query("DELETE FROM AnalyticLine l WHERE l.moveLine.id = :moveLineId")
    void deleteByMoveLineId(@Param("moveLineId") Long moveLineId);

    @Modifying(clearAutomatically = true, flushAutomatically = true)
    @Query("DELETE FROM AnalyticLine l WHERE l.moveLine.move.id = :moveId")
    void deleteByMoveId(@Param("moveId") Long moveId);
}

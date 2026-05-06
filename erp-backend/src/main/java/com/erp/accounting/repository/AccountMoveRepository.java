package com.erp.accounting.repository;

import com.erp.accounting.entity.AccountMove;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface AccountMoveRepository extends JpaRepository<AccountMove, Long> {

    List<AccountMove> findByJournalIdAndDateBetween(Long journalId, LocalDate from, LocalDate to);

    List<AccountMove> findByCompanyIdAndStateOrderByDateDescNameDesc(Long companyId, String state);

    List<AccountMove> findByCompanyIdOrderByDateDescNameDesc(Long companyId);

    List<AccountMove> findByCompanyIdAndJournalIdOrderByDateDescNameDesc(Long companyId, Long journalId);

    @Query("SELECT m FROM AccountMove m WHERE m.company.id = :companyId " +
           "AND (:journalId IS NULL OR m.journal.id = :journalId) " +
           "AND (:from IS NULL OR m.date >= :from) " +
           "AND (:to IS NULL OR m.date <= :to) " +
           "ORDER BY m.date DESC, m.name DESC")
    List<AccountMove> findByFilters(@Param("companyId") Long companyId,
                                    @Param("journalId") Long journalId,
                                    @Param("from") LocalDate from,
                                    @Param("to") LocalDate to);

    /**
     * Toutes les écritures validées ayant au moins une ligne avec compte analytique
     * (pour le recalcul des lignes analytiques)
     */
    @Query("""
        SELECT DISTINCT m FROM AccountMove m
        JOIN m.lines l
        WHERE m.company.id = :companyId
          AND m.state = 'posted'
          AND l.analyticAccount IS NOT NULL
    """)
    List<AccountMove> findPostedWithAnalytic(@Param("companyId") Long companyId);

    @Modifying
    @Query("UPDATE AccountMove m SET m.state = :state WHERE m.id = :id")
    void updateState(@Param("id") Long id, @Param("state") String state);

    @Query("SELECT COALESCE(MAX(CAST(SUBSTRING(m.name, LENGTH(m.name) - 4) AS int)), 0) " +
           "FROM AccountMove m WHERE m.journal.id = :journalId " +
           "AND YEAR(m.date) = :year")
    Integer findMaxSequenceByJournalAndYear(@Param("journalId") Long journalId, @Param("year") int year);
}

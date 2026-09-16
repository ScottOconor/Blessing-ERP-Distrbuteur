package com.erp.accounting.repository;

import com.erp.accounting.entity.AccountMove;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface AccountMoveRepository extends JpaRepository<AccountMove, Long>,
        JpaSpecificationExecutor<AccountMove> {

    List<AccountMove> findByJournalIdAndDateBetween(Long journalId, LocalDate from, LocalDate to);

    /** Retrouve une écriture par son nom exact (ex : "STK/AV-2024-00001") pour extourne. */
    Optional<AccountMove> findFirstByNameAndCompanyId(String name, Long companyId);

    List<AccountMove> findByCompanyIdAndStateOrderByDateDescNameDesc(Long companyId, String state);

    List<AccountMove> findByCompanyIdOrderByDateDescNameDesc(Long companyId);

    List<AccountMove> findByCompanyIdAndJournalIdOrderByDateDescNameDesc(Long companyId, Long journalId);

    /** Écritures d'un état donné (typiquement "draft") datées dans un intervalle — utilisé
     *  par la clôture d'exercice pour bloquer tant que des écritures non validées subsistent. */
    List<AccountMove> findByCompanyIdAndStateAndDateBetweenOrderByDateAscNameAsc(
            Long companyId, String state, LocalDate from, LocalDate to);

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

    @Query(value = "SELECT COALESCE(MAX(CAST(SUBSTRING(name, CHARACTER_LENGTH(name)-4) AS INTEGER)), 0) " +
                   "FROM account_moves " +
                   "WHERE journal_id = :journalId AND EXTRACT(YEAR FROM date) = :year " +
                   "AND name ~ '[0-9]{5}$'",
           nativeQuery = true)
    Integer findMaxSequenceByJournalAndYear(@Param("journalId") Long journalId, @Param("year") int year);
}

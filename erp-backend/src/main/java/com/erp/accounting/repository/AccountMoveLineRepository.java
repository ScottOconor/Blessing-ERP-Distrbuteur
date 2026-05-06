package com.erp.accounting.repository;

import com.erp.accounting.entity.AccountMoveLine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface AccountMoveLineRepository extends JpaRepository<AccountMoveLine, Long> {

    List<AccountMoveLine> findByMoveId(Long moveId);

    /**
     * Charge les lignes d'un move avec leurs données analytiques (eager pour postEntry)
     */
    @Query("""
        SELECT DISTINCT l FROM AccountMoveLine l
        LEFT JOIN FETCH l.analyticAccount
        LEFT JOIN FETCH l.analyticDistributions d
        LEFT JOIN FETCH d.analyticAccount
        LEFT JOIN FETCH l.account
        LEFT JOIN FETCH l.company
        WHERE l.move.id = :moveId
    """)
    List<AccountMoveLine> findByMoveIdWithAnalytic(@Param("moveId") Long moveId);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.account.id = :accountId " +
           "AND l.date BETWEEN :from AND :to " +
           "AND l.move.state = :state")
    List<AccountMoveLine> findByAccountIdAndDateBetweenAndMoveState(
            @Param("accountId") Long accountId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to,
            @Param("state") String state);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date BETWEEN :from AND :to " +
           "AND l.move.state = 'posted' " +
           "ORDER BY l.account.code, l.date, l.move.name")
    List<AccountMoveLine> findPostedByCompanyAndDateRange(
            @Param("companyId") Long companyId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date < :date " +
           "AND l.move.state = 'posted' " +
           "ORDER BY l.account.code, l.date")
    List<AccountMoveLine> findPostedBeforeDate(
            @Param("companyId") Long companyId,
            @Param("date") LocalDate date);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date BETWEEN :from AND :to " +
           "AND l.move.state = 'posted' " +
           "AND (:journalIds IS NULL OR l.journal.id IN :journalIds) " +
           "ORDER BY l.account.code, l.date")
    List<AccountMoveLine> findPostedByCompanyAndDateRangeAndJournals(
            @Param("companyId") Long companyId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to,
            @Param("journalIds") List<Long> journalIds);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date < :date " +
           "AND l.move.state = 'posted' " +
           "AND (:journalIds IS NULL OR l.journal.id IN :journalIds) " +
           "ORDER BY l.account.code, l.date")
    List<AccountMoveLine> findPostedBeforeDateAndJournals(
            @Param("companyId") Long companyId,
            @Param("date") LocalDate date,
            @Param("journalIds") List<Long> journalIds);

    @Query("SELECT COALESCE(SUM(l.debit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.id = :accountId AND l.move.state = 'posted'")
    BigDecimal sumDebitByAccount(@Param("accountId") Long accountId);

    @Query("SELECT COALESCE(SUM(l.credit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.id = :accountId AND l.move.state = 'posted'")
    BigDecimal sumCreditByAccount(@Param("accountId") Long accountId);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date BETWEEN :from AND :to " +
           "AND l.move.state = 'posted' " +
           "AND l.account.internalType IN ('receivable', 'payable') " +
           "ORDER BY l.partner.name, l.account.code, l.date")
    List<AccountMoveLine> findTiersLinesInPeriod(
            @Param("companyId") Long companyId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date < :date " +
           "AND l.move.state = 'posted' " +
           "AND l.account.internalType IN ('receivable', 'payable') " +
           "ORDER BY l.partner.name, l.account.code, l.date")
    List<AccountMoveLine> findTiersLinesBeforeDate(
            @Param("companyId") Long companyId,
            @Param("date") LocalDate date);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND (:accountIds IS NULL OR l.account.id IN :accountIds) " +
           "AND l.date BETWEEN :from AND :to " +
           "AND l.move.state = 'posted' " +
           "ORDER BY l.account.code, l.date, l.move.name")
    List<AccountMoveLine> findForGrandLivre(
            @Param("companyId") Long companyId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to,
            @Param("accountIds") List<Long> accountIds);

    /** Toutes les lignes postées d'un journal pour une date précise (pour solde journalier) */
    @Query("SELECT l FROM AccountMoveLine l WHERE l.journal.id = :journalId AND l.date = :date AND l.move.state = 'posted'")
    List<AccountMoveLine> findPostedLinesByJournalAndDate(
            @Param("journalId") Long journalId,
            @Param("date") LocalDate date);

    /**
     * Solde courant d'un partenaire : SUM(débit - crédit) sur tous les comptes
     * clients (receivable) et fournisseurs (payable) des écritures validées.
     * Positif = le partenaire nous doit ; négatif = on lui doit.
     */
    @Query("SELECT COALESCE(SUM(l.debit - l.credit), 0) FROM AccountMoveLine l " +
           "WHERE l.partner.id = :partnerId " +
           "AND l.company.id = :companyId " +
           "AND l.move.state = 'posted' " +
           "AND l.account.internalType IN ('receivable', 'payable')")
    BigDecimal computePartnerBalance(@Param("partnerId") Long partnerId,
                                     @Param("companyId") Long companyId);
}

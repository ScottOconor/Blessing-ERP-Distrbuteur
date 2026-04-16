package com.erp.accounting.repository;

import com.erp.accounting.entity.JournalDailyBalance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface JournalDailyBalanceRepository extends JpaRepository<JournalDailyBalance, Long> {

    Optional<JournalDailyBalance> findByJournalIdAndDate(Long journalId, LocalDate date);

    List<JournalDailyBalance> findByJournalIdOrderByDateDesc(Long journalId);

    List<JournalDailyBalance> findByCompanyIdAndDateOrderByJournalIdAsc(Long companyId, LocalDate date);

    /** Dernier solde enregistré pour un journal (pour calculer le solde d'ouverture du prochain jour) */
    @Query("SELECT b FROM JournalDailyBalance b WHERE b.journalId = :journalId AND b.date < :date ORDER BY b.date DESC")
    List<JournalDailyBalance> findLatestBeforeDate(@Param("journalId") Long journalId, @Param("date") LocalDate date);
}

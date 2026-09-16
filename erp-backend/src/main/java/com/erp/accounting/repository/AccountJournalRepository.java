package com.erp.accounting.repository;

import com.erp.accounting.entity.AccountJournal;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AccountJournalRepository extends JpaRepository<AccountJournal, Long> {

    List<AccountJournal> findByCompanyIdAndActiveTrue(Long companyId);

    List<AccountJournal> findByCompanyId(Long companyId);

    java.util.Optional<AccountJournal> findFirstByCodeAndCompanyId(String code, Long companyId);
    /** @deprecated Utiliser findFirstByCodeAndCompanyId */
    @Deprecated java.util.Optional<AccountJournal> findByCodeAndCompanyId(String code, Long companyId);

    /** Verrou pessimiste (SELECT ... FOR UPDATE) sur le journal — sérialise les créations
     *  d'écritures concurrentes sur ce journal le temps de générer un numéro de pièce unique
     *  (generateMoveNumber), évitant deux pièces avec le même nom sous forte concurrence. */
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT j FROM AccountJournal j WHERE j.id = :id")
    Optional<AccountJournal> findByIdForUpdate(@Param("id") Long id);
}

package com.erp.accounting.repository;

import com.erp.accounting.entity.AccountJournal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountJournalRepository extends JpaRepository<AccountJournal, Long> {

    List<AccountJournal> findByCompanyIdAndActiveTrue(Long companyId);

    List<AccountJournal> findByCompanyId(Long companyId);

    java.util.Optional<AccountJournal> findByCodeAndCompanyId(String code, Long companyId);
}

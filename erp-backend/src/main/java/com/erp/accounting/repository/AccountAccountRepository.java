package com.erp.accounting.repository;

import com.erp.accounting.entity.AccountAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AccountAccountRepository extends JpaRepository<AccountAccount, Long> {

    List<AccountAccount> findByCompanyIdAndDeprecatedFalseOrderByCode(Long companyId);

    List<AccountAccount> findByCompanyIdOrderByCode(Long companyId);

    List<AccountAccount> findByCodeStartingWithAndCompanyId(String prefix, Long companyId);

    List<AccountAccount> findByCompanyId(Long companyId);

    /** Retourne le premier compte correspondant (résistant aux doublons en base). */
    Optional<AccountAccount> findFirstByCodeAndCompanyId(String code, Long companyId);

    /** @deprecated Utiliser findFirstByCodeAndCompanyId pour éviter NonUniqueResultException */
    @Deprecated
    Optional<AccountAccount> findByCodeAndCompanyId(String code, Long companyId);

    long countByCompanyId(Long companyId);

    Optional<AccountAccount> findFirstByInternalTypeAndCompanyIdOrderByCode(String internalType, Long companyId);

    List<AccountAccount> findByInternalTypeAndCompanyIdOrderByCode(String internalType, Long companyId);

    @Modifying
    @Query("DELETE FROM AccountAccount a WHERE a.company.id = :companyId")
    void deleteByCompanyId(@Param("companyId") Long companyId);
}

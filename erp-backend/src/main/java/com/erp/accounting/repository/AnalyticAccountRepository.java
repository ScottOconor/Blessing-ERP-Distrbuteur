package com.erp.accounting.repository;

import com.erp.accounting.entity.AnalyticAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnalyticAccountRepository extends JpaRepository<AnalyticAccount, Long> {

    List<AnalyticAccount> findByCompanyIdAndActiveTrueOrderByCode(Long companyId);

    @Query("SELECT a FROM AnalyticAccount a WHERE a.company.id = :companyId AND a.parent IS NULL AND a.active = true ORDER BY a.code")
    List<AnalyticAccount> findRootsByCompanyId(@Param("companyId") Long companyId);

    @Query("SELECT a FROM AnalyticAccount a WHERE a.company.id = :companyId AND a.parent.id = :parentId AND a.active = true ORDER BY a.code")
    List<AnalyticAccount> findByParentId(@Param("companyId") Long companyId, @Param("parentId") Long parentId);

    boolean existsByCodeAndCompanyId(String code, Long companyId);

    java.util.Optional<AnalyticAccount> findByCodeAndCompanyId(String code, Long companyId);
}

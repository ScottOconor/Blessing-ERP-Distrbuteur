package com.erp.hr.repository;

import com.erp.hr.entity.SalaryRuleCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SalaryRuleCategoryRepository extends JpaRepository<SalaryRuleCategory, Long> {
    List<SalaryRuleCategory> findByCompanyIdOrderBySequenceAsc(Long companyId);
    long countByCompanyId(Long companyId);
}

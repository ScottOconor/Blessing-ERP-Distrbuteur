package com.erp.hr.repository;

import com.erp.hr.entity.SalaryRule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SalaryRuleRepository extends JpaRepository<SalaryRule, Long> {
    List<SalaryRule> findByCompanyIdOrderBySequenceAscIdAsc(Long companyId);
    List<SalaryRule> findByCompanyIdAndActiveTrueOrderBySequenceAscIdAsc(Long companyId);
    long countByCompanyId(Long companyId);
}

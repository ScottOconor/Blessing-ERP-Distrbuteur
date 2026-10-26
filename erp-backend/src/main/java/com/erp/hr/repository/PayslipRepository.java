package com.erp.hr.repository;

import com.erp.hr.entity.Payslip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PayslipRepository extends JpaRepository<Payslip, Long> {
    List<Payslip> findByCompanyIdOrderByPeriodToDescIdDesc(Long companyId);
    List<Payslip> findByRunId(Long runId);
    long countByCompanyId(Long companyId);

    /** Plus grand numéro de bulletin attribué (BULL-2026-00042 -> 42), toutes années confondues, 0 si aucun. */
    @Query(value = "SELECT COALESCE(MAX(CAST(SUBSTRING(name FROM '^BULL-[0-9]{4}-([0-9]+)$') AS BIGINT)), 0) " +
                   "FROM hr_payslips WHERE company_id = :cid", nativeQuery = true)
    long findMaxNameSequence(@Param("cid") Long companyId);

}

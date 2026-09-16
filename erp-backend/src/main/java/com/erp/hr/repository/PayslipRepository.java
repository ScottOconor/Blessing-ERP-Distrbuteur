package com.erp.hr.repository;

import com.erp.hr.entity.Payslip;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PayslipRepository extends JpaRepository<Payslip, Long> {
    List<Payslip> findByCompanyIdOrderByPeriodToDescIdDesc(Long companyId);
    List<Payslip> findByRunId(Long runId);
    List<Payslip> findByEmployeeIdOrderByPeriodToDesc(Long employeeId);
    long countByCompanyId(Long companyId);
}

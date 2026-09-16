package com.erp.hr.repository;

import com.erp.hr.entity.PayslipRun;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PayslipRunRepository extends JpaRepository<PayslipRun, Long> {
    List<PayslipRun> findByCompanyIdOrderByDateEndDescIdDesc(Long companyId);
}

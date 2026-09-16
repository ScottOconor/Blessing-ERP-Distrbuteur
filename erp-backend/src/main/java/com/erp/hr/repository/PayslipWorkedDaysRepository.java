package com.erp.hr.repository;

import com.erp.hr.entity.PayslipWorkedDays;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface PayslipWorkedDaysRepository extends JpaRepository<PayslipWorkedDays, Long> {
    List<PayslipWorkedDays> findByPayslipId(Long payslipId);

    @Transactional
    void deleteByPayslipId(Long payslipId);
}

package com.erp.hr.repository;

import com.erp.hr.entity.PayslipInput;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface PayslipInputRepository extends JpaRepository<PayslipInput, Long> {
    List<PayslipInput> findByPayslipId(Long payslipId);

    @Transactional
    void deleteByPayslipId(Long payslipId);
}

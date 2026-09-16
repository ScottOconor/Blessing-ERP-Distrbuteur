package com.erp.hr.repository;

import com.erp.hr.entity.PayslipLine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface PayslipLineRepository extends JpaRepository<PayslipLine, Long> {
    List<PayslipLine> findByPayslipIdOrderBySequenceAscIdAsc(Long payslipId);

    @Transactional
    void deleteByPayslipId(Long payslipId);
}

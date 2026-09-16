package com.erp.hr.repository;

import com.erp.hr.entity.PayslipInputType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PayslipInputTypeRepository extends JpaRepository<PayslipInputType, Long> {
    List<PayslipInputType> findByCompanyIdOrderByNameAsc(Long companyId);
}

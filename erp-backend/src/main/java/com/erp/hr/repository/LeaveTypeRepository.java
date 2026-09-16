package com.erp.hr.repository;

import com.erp.hr.entity.LeaveType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LeaveTypeRepository extends JpaRepository<LeaveType, Long> {
    List<LeaveType> findByCompanyIdOrderByNameAsc(Long companyId);
    long countByCompanyId(Long companyId);
}

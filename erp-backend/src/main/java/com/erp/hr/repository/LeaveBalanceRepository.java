package com.erp.hr.repository;

import com.erp.hr.entity.LeaveBalance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LeaveBalanceRepository extends JpaRepository<LeaveBalance, Long> {
    List<LeaveBalance> findByCompanyIdAndEmployeeIdAndYear(Long companyId, Long employeeId, int year);
    Optional<LeaveBalance> findByCompanyIdAndEmployeeIdAndLeaveTypeIdAndYear(Long companyId, Long employeeId, Long leaveTypeId, int year);
}

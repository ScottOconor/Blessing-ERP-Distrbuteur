package com.erp.hr.repository;

import com.erp.hr.entity.EmployeeContract;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EmployeeContractRepository extends JpaRepository<EmployeeContract, Long> {
    List<EmployeeContract> findByCompanyIdOrderByDateStartDesc(Long companyId);
    List<EmployeeContract> findByEmployeeIdOrderByDateStartDesc(Long employeeId);
    Optional<EmployeeContract> findFirstByEmployeeIdAndStateOrderByDateStartDesc(Long employeeId, String state);
}

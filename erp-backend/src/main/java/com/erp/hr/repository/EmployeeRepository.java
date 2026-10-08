package com.erp.hr.repository;

import com.erp.hr.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    List<Employee> findByCompanyIdOrderByLastNameAscFirstNameAsc(Long companyId);
    List<Employee> findByCompanyIdAndStatusOrderByLastNameAsc(Long companyId, String status);
    long countByCompanyId(Long companyId);
}

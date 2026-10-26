package com.erp.hr.repository;

import com.erp.hr.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    List<Employee> findByCompanyIdOrderByLastNameAscFirstNameAsc(Long companyId);
    List<Employee> findByCompanyIdAndStatusOrderByLastNameAsc(Long companyId, String status);
    long countByCompanyId(Long companyId);

    /** Plus grand numéro de matricule généré (EMP-0042 -> 42), 0 si aucun. */
    @Query(value = "SELECT COALESCE(MAX(CAST(SUBSTRING(matricule FROM '^EMP-([0-9]+)$') AS BIGINT)), 0) " +
                   "FROM hr_employees WHERE company_id = :cid", nativeQuery = true)
    long findMaxMatriculeSequence(@Param("cid") Long companyId);
}

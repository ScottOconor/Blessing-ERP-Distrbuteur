package com.erp.hr.repository;

import com.erp.hr.entity.WorkedDaysType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WorkedDaysTypeRepository extends JpaRepository<WorkedDaysType, Long> {
    List<WorkedDaysType> findByCompanyIdOrderByNameAsc(Long companyId);
}

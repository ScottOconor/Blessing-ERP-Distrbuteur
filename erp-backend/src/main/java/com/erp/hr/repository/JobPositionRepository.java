package com.erp.hr.repository;

import com.erp.hr.entity.JobPosition;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobPositionRepository extends JpaRepository<JobPosition, Long> {
    List<JobPosition> findByCompanyIdOrderByNameAsc(Long companyId);
}

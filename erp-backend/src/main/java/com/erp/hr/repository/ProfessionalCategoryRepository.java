package com.erp.hr.repository;

import com.erp.hr.entity.ProfessionalCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProfessionalCategoryRepository extends JpaRepository<ProfessionalCategory, Long> {
    List<ProfessionalCategory> findByCompanyIdOrderBySequenceAscNameAsc(Long companyId);
}

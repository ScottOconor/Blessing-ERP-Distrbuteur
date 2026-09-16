package com.erp.hr.repository;

import com.erp.hr.entity.Echelon;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EchelonRepository extends JpaRepository<Echelon, Long> {
    List<Echelon> findByCompanyIdOrderBySequenceAscNameAsc(Long companyId);
    List<Echelon> findByCompanyIdAndProfessionalCategoryIdOrderBySequenceAscNameAsc(Long companyId, Long professionalCategoryId);
}

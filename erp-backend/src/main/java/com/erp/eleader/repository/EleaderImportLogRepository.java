package com.erp.eleader.repository;

import com.erp.eleader.entity.EleaderImportLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EleaderImportLogRepository extends JpaRepository<EleaderImportLog, Long> {
    List<EleaderImportLog> findByCompanyIdOrderByImportDateDesc(Long companyId);
    List<EleaderImportLog> findByEleaderReferenceAndCompanyIdOrderByImportDateDesc(String eleaderReference, Long companyId);
    long countByCompanyId(Long companyId);
}

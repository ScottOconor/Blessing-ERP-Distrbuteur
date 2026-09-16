package com.erp.caisse.repository;

import com.erp.caisse.entity.CaisseOperation;
import com.erp.caisse.entity.OperationType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface CaisseOperationRepository extends JpaRepository<CaisseOperation, Long> {
    List<CaisseOperation> findByCaisseIdAndCompanyIdOrderByDateDescCreatedAtDesc(Long caisseId, Long companyId);
    List<CaisseOperation> findByCaisseIdAndTypeAndCompanyIdOrderByDateDesc(Long caisseId, OperationType type, Long companyId);
    List<CaisseOperation> findByCaisseIdAndDateAndCompanyId(Long caisseId, LocalDate date, Long companyId);
    List<CaisseOperation> findByCompanyIdOrderByDateDescCreatedAtDesc(Long companyId);
    List<CaisseOperation> findByCompanyIdAndTypeOrderByDateDesc(Long companyId, OperationType type);
}

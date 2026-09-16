package com.erp.caisse.repository;

import com.erp.caisse.entity.Caisse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CaisseRepository extends JpaRepository<Caisse, Long> {
    List<Caisse> findByCompanyIdAndActiveTrue(Long companyId);
    List<Caisse> findByCompanyId(Long companyId);
    boolean existsByCodeAndCompanyId(String code, Long companyId);
}

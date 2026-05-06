package com.erp.config.repository;

import com.erp.config.entity.CompanyGroup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CompanyGroupRepository extends JpaRepository<CompanyGroup, Long> {
    boolean existsByCode(String code);
    Optional<CompanyGroup> findByCode(String code);
}

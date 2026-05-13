package com.erp.eleader.repository;

import com.erp.eleader.entity.EleaderConfig;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EleaderConfigRepository extends JpaRepository<EleaderConfig, Long> {
    Optional<EleaderConfig> findByCompanyId(Long companyId);
}

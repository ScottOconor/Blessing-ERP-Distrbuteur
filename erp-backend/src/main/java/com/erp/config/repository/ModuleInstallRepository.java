package com.erp.config.repository;

import com.erp.config.entity.ModuleInstall;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ModuleInstallRepository extends JpaRepository<ModuleInstall, Long> {
    List<ModuleInstall> findByCompanyId(Long companyId);
    Optional<ModuleInstall> findByCompanyIdAndModuleCode(Long companyId, String moduleCode);
}

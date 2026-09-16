package com.erp.config.repository;

import com.erp.config.entity.AppSettings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppSettingsRepository extends JpaRepository<AppSettings, String> {}

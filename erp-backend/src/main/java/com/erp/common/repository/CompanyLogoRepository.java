package com.erp.common.repository;

import com.erp.common.entity.CompanyLogo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyLogoRepository extends JpaRepository<CompanyLogo, Long> {
}

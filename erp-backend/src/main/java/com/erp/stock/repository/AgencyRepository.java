package com.erp.stock.repository;

import com.erp.stock.entity.Agency;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AgencyRepository extends JpaRepository<Agency, Long> {
    List<Agency> findByCompanyIdAndActiveOrderByNameAsc(Long companyId, boolean active);
    List<Agency> findByCompanyIdOrderByNameAsc(Long companyId);
}

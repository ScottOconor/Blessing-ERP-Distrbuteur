package com.erp.config.repository;

import com.erp.config.entity.RemoteAgency;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RemoteAgencyRepository extends JpaRepository<RemoteAgency, Long> {
    List<RemoteAgency>   findByActiveTrueOrderByNameAsc();
    Optional<RemoteAgency> findByCode(String code);
    boolean              existsByCode(String code);
    boolean              existsByCodeAndIdNot(String code, Long id);
}

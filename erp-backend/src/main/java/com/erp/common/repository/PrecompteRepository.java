package com.erp.common.repository;

import com.erp.common.entity.Precompte;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PrecompteRepository extends JpaRepository<Precompte, Long> {

    List<Precompte> findByCompanyIdAndActiveTrue(Long companyId);

    Optional<Precompte> findByPartnerIdAndTypePrecompteAndCompanyId(
            Long partnerId, String typePrecompte, Long companyId);

    List<Precompte> findByPartnerIdAndCompanyId(Long partnerId, Long companyId);
}

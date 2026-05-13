package com.erp.common.repository;

import com.erp.common.entity.Precompte;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PrecompteRepository extends JpaRepository<Precompte, Long> {

    List<Precompte> findByCompanyIdAndActiveTrue(Long companyId);

    List<Precompte> findByCompanyId(Long companyId);

    @org.springframework.data.jpa.repository.Query(
            "SELECT p FROM Precompte p JOIN FETCH p.partner WHERE p.partner.id IN :partnerIds")
    List<Precompte> findByPartnerIdIn(
            @org.springframework.data.repository.query.Param("partnerIds") java.util.Collection<Long> partnerIds);

    Optional<Precompte> findByPartnerIdAndTypePrecompteAndCompanyId(
            Long partnerId, String typePrecompte, Long companyId);

    List<Precompte> findByPartnerIdAndCompanyId(Long partnerId, Long companyId);
}

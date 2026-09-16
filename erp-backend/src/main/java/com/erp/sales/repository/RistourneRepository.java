package com.erp.sales.repository;

import com.erp.sales.entity.Ristourne;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RistourneRepository extends JpaRepository<Ristourne, Long> {

    List<Ristourne> findByPartnerIdAndCompanyIdAndActiveTrue(Long partnerId, Long companyId);

    List<Ristourne> findByCompanyIdAndActiveTrue(Long companyId);

    List<Ristourne> findByCompanyId(Long companyId);

    Optional<Ristourne> findByPartnerIdAndCategoryIdAndCompanyId(
            Long partnerId, Long categoryId, Long companyId);
}

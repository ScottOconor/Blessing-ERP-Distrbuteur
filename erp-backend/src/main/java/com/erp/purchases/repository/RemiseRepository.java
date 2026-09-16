package com.erp.purchases.repository;

import com.erp.purchases.entity.Remise;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RemiseRepository extends JpaRepository<Remise, Long> {

    List<Remise> findByPartnerIdAndCompanyIdAndActiveTrue(Long partnerId, Long companyId);

    List<Remise> findByPartnerIdAndCompanyIdAndActiveTrueAndTypeRemise(Long partnerId, Long companyId, String typeRemise);

    List<Remise> findByCompanyIdAndActiveTrue(Long companyId);

    Optional<Remise> findByPartnerIdAndCategoryIdAndCompanyId(
            Long partnerId, Long categoryId, Long companyId);
}

package com.erp.common.repository;

import com.erp.common.entity.Enlevement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EnlevementRepository extends JpaRepository<Enlevement, Long> {

    List<Enlevement> findByCompanyIdAndActiveTrue(Long companyId);

    /** Pour l'upsert dans EnlevementService.save() — trouve aussi les inactifs */
    Optional<Enlevement> findByCategoryIdAndCompanyId(Long categoryId, Long companyId);

    /** Pour le calcul des frais — uniquement les enregistrements actifs */
    Optional<Enlevement> findByCategoryIdAndCompanyIdAndActiveTrue(Long categoryId, Long companyId);
}

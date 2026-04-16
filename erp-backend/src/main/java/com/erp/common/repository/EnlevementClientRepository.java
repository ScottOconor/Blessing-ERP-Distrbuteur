package com.erp.common.repository;

import com.erp.common.entity.EnlevementClient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EnlevementClientRepository extends JpaRepository<EnlevementClient, Long> {

    List<EnlevementClient> findByEnlevementId(Long enlevementId);

    Optional<EnlevementClient> findByEnlevementIdAndPartnerId(Long enlevementId, Long partnerId);

    /** Trouve le tarif spécifique pour un client sur une catégorie donnée */
    Optional<EnlevementClient> findByEnlevement_CategoryIdAndPartnerId(Long categoryId, Long partnerId);
}

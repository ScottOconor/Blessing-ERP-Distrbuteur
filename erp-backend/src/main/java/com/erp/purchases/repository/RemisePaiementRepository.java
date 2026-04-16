package com.erp.purchases.repository;

import com.erp.purchases.entity.RemisePaiement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RemisePaiementRepository extends JpaRepository<RemisePaiement, Long> {

    List<RemisePaiement> findByCompanyIdOrderByCreatedAtDesc(Long companyId);

    List<RemisePaiement> findByPartnerIdAndCompanyId(Long partnerId, Long companyId);
}

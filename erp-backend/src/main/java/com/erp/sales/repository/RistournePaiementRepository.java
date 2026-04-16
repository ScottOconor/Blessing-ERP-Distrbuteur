package com.erp.sales.repository;

import com.erp.sales.entity.RistournePaiement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RistournePaiementRepository extends JpaRepository<RistournePaiement, Long> {

    List<RistournePaiement> findByCompanyIdOrderByCreatedAtDesc(Long companyId);

    List<RistournePaiement> findByPartnerIdAndCompanyId(Long partnerId, Long companyId);
}

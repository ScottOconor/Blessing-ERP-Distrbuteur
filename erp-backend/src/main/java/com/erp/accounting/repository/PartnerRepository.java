package com.erp.accounting.repository;

import com.erp.accounting.entity.Partner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PartnerRepository extends JpaRepository<Partner, Long> {

    List<Partner> findByCompanyId(Long companyId);

    List<Partner> findByCompanyIdAndType(Long companyId, String type);

    java.util.Optional<Partner> findByRefAndCompanyId(String ref, Long companyId);

    java.util.Optional<Partner> findByNameAndCompanyId(String name, Long companyId);
}

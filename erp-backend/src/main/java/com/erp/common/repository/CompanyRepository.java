package com.erp.common.repository;

import com.erp.common.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
    List<Company> findByGroupId(Long groupId);
    List<Company> findByGroupIdAndActiveTrue(Long groupId);
}

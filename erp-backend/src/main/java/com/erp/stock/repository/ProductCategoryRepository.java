package com.erp.stock.repository;

import com.erp.stock.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
    List<ProductCategory> findByCompanyIdOrderByNameAsc(Long companyId);
    java.util.Optional<ProductCategory> findByNameIgnoreCaseAndCompanyId(String name, Long companyId);
}

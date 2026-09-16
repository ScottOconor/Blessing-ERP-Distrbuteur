package com.erp.stock.repository;

import com.erp.stock.entity.UnitOfMeasure;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UnitOfMeasureRepository extends JpaRepository<UnitOfMeasure, Long> {
    List<UnitOfMeasure> findByCompanyIdOrderByNameAsc(Long companyId);
    java.util.Optional<UnitOfMeasure> findByNameIgnoreCaseAndCompanyId(String name, Long companyId);
}

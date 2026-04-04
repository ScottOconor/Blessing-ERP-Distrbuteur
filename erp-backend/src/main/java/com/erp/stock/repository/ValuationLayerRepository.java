package com.erp.stock.repository;

import com.erp.stock.entity.ValuationLayer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ValuationLayerRepository extends JpaRepository<ValuationLayer, Long> {
    List<ValuationLayer> findByProductIdAndCompanyIdOrderByCreatedAtDesc(Long productId, Long companyId);
    List<ValuationLayer> findByCompanyIdOrderByCreatedAtDesc(Long companyId);

    @Query("SELECT v FROM ValuationLayer v WHERE v.companyId = :cid ORDER BY v.createdAt DESC")
    List<ValuationLayer> findRecentByCompany(@Param("cid") Long companyId,
        org.springframework.data.domain.Pageable pageable);
}

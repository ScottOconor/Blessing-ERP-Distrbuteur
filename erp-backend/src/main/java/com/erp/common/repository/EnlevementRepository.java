package com.erp.common.repository;

import com.erp.common.entity.Enlevement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public interface EnlevementRepository extends JpaRepository<Enlevement, Long> {

    List<Enlevement> findByCompanyIdAndActiveTrue(Long companyId);

    Optional<Enlevement> findByCategoryIdAndCompanyId(Long categoryId, Long companyId);

    Optional<Enlevement> findByCategoryIdAndCompanyIdAndActiveTrue(Long categoryId, Long companyId);

    // ── Snapshot queries ─────────────────────────────────────────────────

    @Query("SELECT COALESCE(SUM(e.coutEnlevement), 0) FROM Enlevement e " +
           "WHERE e.companyId = :cid AND e.active = true AND e.coutEnlevement IS NOT NULL")
    BigDecimal sumFraisEnlevements(@Param("cid") Long companyId);

    long countByCompanyIdAndActiveTrue(Long companyId);
}

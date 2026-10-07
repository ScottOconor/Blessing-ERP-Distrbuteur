package com.erp.declaration.repository;

import com.erp.declaration.entity.DeclarationBatch;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DeclarationBatchRepository extends JpaRepository<DeclarationBatch, Long> {
    List<DeclarationBatch> findByCompanyIdOrderByCreatedAtDesc(Long companyId, Pageable pageable);

    boolean existsByCompanyIdAndStatus(Long companyId, String status);

    /** Générations restées « en cours » après un arrêt du serveur : elles ne reprendront pas. */
    @Modifying
    @Query("UPDATE DeclarationBatch b SET b.status = 'FAILED', b.errorMessage = :message WHERE b.status = 'RUNNING'")
    int markRunningAsFailed(@Param("message") String message);
}

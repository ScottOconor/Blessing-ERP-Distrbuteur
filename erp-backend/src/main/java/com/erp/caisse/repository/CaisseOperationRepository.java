package com.erp.caisse.repository;

import com.erp.caisse.entity.CaisseOperation;
import com.erp.caisse.entity.OperationType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface CaisseOperationRepository extends JpaRepository<CaisseOperation, Long> {
    List<CaisseOperation> findByCaisseIdAndCompanyIdOrderByDateDescCreatedAtDesc(Long caisseId, Long companyId);
    List<CaisseOperation> findByCaisseIdAndTypeAndCompanyIdOrderByDateDesc(Long caisseId, OperationType type, Long companyId);
    List<CaisseOperation> findByCaisseIdAndDateAndCompanyId(Long caisseId, LocalDate date, Long companyId);
    List<CaisseOperation> findByCompanyIdOrderByDateDescCreatedAtDesc(Long companyId);
    List<CaisseOperation> findByCompanyIdAndTypeOrderByDateDesc(Long companyId, OperationType type);

    /** Snapshot Hub complet : opérations datées depuis {@code since} (fenêtre bornée en SQL). */
    List<CaisseOperation> findByCompanyIdAndDateGreaterThanEqual(Long companyId, LocalDate since);

    /** Snapshot Hub incrémental : opérations créées ou modifiées depuis le snapshot précédent. */
    @org.springframework.data.jpa.repository.Query("SELECT o FROM CaisseOperation o WHERE o.companyId = :cid " +
           "AND (o.createdAt >= :since OR o.updatedAt >= :since)")
    List<CaisseOperation> findByCompanyIdModifiedSince(@org.springframework.data.repository.query.Param("cid") Long companyId,
                                                       @org.springframework.data.repository.query.Param("since") java.time.LocalDateTime since);
}

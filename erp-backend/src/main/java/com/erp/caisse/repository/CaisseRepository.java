package com.erp.caisse.repository;

import com.erp.caisse.entity.Caisse;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CaisseRepository extends JpaRepository<Caisse, Long> {
    List<Caisse> findByCompanyIdAndActiveTrue(Long companyId);
    List<Caisse> findByCompanyId(Long companyId);
    boolean existsByCodeAndCompanyId(String code, Long companyId);
    Optional<Caisse> findFirstByJournalIdAndCompanyId(Long journalId, Long companyId);

    /** Verrou pessimiste : empêche deux clôtures concurrentes de la même caisse de passer toutes
     *  les deux le contrôle "session déjà existante aujourd'hui" avant que l'une ne committe
     *  (cf. CaisseService.cloturerCaisse) — la seconde requête attend, puis relit un état déjà
     *  CLOTUREE / une session déjà créée et échoue proprement au lieu de dupliquer la clôture. */
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT c FROM Caisse c WHERE c.id = :id")
    Optional<Caisse> findByIdForUpdate(@org.springframework.data.repository.query.Param("id") Long id);
}

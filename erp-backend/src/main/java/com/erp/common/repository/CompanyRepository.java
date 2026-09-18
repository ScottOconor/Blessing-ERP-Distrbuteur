package com.erp.common.repository;

import com.erp.common.entity.Company;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
    List<Company> findByActiveTrue();

    /** Verrou pessimiste sur la société — sérialise les générateurs de numéros de pièce
     *  (bons de commande, factures, avoirs, paiements, transferts stock, matricules...) qui lisent
     *  un MAX(séquence) puis l'incrémentent, pour qu'aucune transaction concurrente ne puisse lire
     *  ce max avant qu'une autre n'ait déjà écrit — sinon même numéro généré deux fois. Cf.
     *  AccountJournalRepository.findByIdForUpdate, même principe appliqué au niveau société plutôt
     *  que journal pour les générateurs qui n'ont pas de notion de journal. */
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT c FROM Company c WHERE c.id = :id")
    Optional<Company> findByIdForUpdate(@Param("id") Long id);

    /** Snapshot incrémental (SnapshotService) : appelée depuis buildAndPublish(), qui tourne dans
     *  une transaction @Transactional(readOnly = true) — REQUIRES_NEW est nécessaire ici pour que
     *  cet UPDATE s'exécute dans sa propre transaction en écriture, sinon Hibernate/le driver JDBC
     *  refuse toute écriture sur une connexion marquée lecture seule. */
    @Modifying
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    @Query("UPDATE Company c SET c.lastSnapshotSentAt = :sentAt WHERE c.id = :id")
    void updateLastSnapshotSentAt(@Param("id") Long id, @Param("sentAt") LocalDateTime sentAt);
}

package com.erp.caisse.repository;

import com.erp.caisse.entity.CaisseSession;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface CaisseSessionRepository extends JpaRepository<CaisseSession, Long> {
    List<CaisseSession> findByCaisseIdOrderByDateSessionDesc(Long caisseId);
    Optional<CaisseSession> findByCaisseIdAndDateSession(Long caisseId, LocalDate dateSession);
    boolean existsByCaisseIdAndDateSession(Long caisseId, LocalDate dateSession);
    Optional<CaisseSession> findByCaisseIdAndDateSessionAndStatus(Long caisseId, LocalDate dateSession, String status);
    List<CaisseSession> findByCaisseIdInAndDateSessionBetweenOrderByDateSessionDesc(
        List<Long> caisseIds, LocalDate dateFrom, LocalDate dateTo);
}

package com.erp.caisse.repository;

import com.erp.caisse.entity.CaisseSessionCount;
import com.erp.caisse.entity.CountMoment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CaisseSessionCountRepository extends JpaRepository<CaisseSessionCount, Long> {
    List<CaisseSessionCount> findByCaisseSessionIdAndMoment(Long caisseSessionId, CountMoment moment);
    List<CaisseSessionCount> findByCaisseSessionId(Long caisseSessionId);
    void deleteByCaisseSessionIdAndMoment(Long caisseSessionId, CountMoment moment);
}

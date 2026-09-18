package com.erp.accounting.repository;

import com.erp.accounting.entity.AnalyticDistributionItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnalyticDistributionItemRepository extends JpaRepository<AnalyticDistributionItem, Long> {

    @Query("SELECT d FROM AnalyticDistributionItem d JOIN FETCH d.analyticAccount WHERE d.moveLine.id = :moveLineId")
    List<AnalyticDistributionItem> findByMoveLineId(@Param("moveLineId") Long moveLineId);

    /** Chargement en masse pour l'affichage de listes d'écritures (cf. AccountingService#getJournalEntries)
     *  — évite une requête par ligne d'écriture. */
    @Query("SELECT d FROM AnalyticDistributionItem d JOIN FETCH d.analyticAccount WHERE d.moveLine.id IN :moveLineIds")
    List<AnalyticDistributionItem> findByMoveLineIdIn(@Param("moveLineIds") List<Long> moveLineIds);

    /** Version native utilisant un tableau PostgreSQL (évite d'expanser des milliers de paramètres). */
    @Query(value = "SELECT adi.* FROM analytic_distribution_items adi WHERE adi.move_line_id = ANY(:moveLineIds)", nativeQuery = true)
    List<AnalyticDistributionItem> findByMoveLineIdInArray(@Param("moveLineIds") Long[] moveLineIds);
}

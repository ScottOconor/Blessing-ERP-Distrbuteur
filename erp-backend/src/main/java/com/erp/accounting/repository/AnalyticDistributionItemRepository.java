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
}

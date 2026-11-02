package com.erp.stock.repository;

import com.erp.stock.entity.StockValuationEntry;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

@Repository
public interface StockValuationEntryRepository extends JpaRepository<StockValuationEntry, Long> {

    boolean existsByMoveIdAndWarehouseIdAndDirection(Long moveId, Long warehouseId, String direction);

    List<StockValuationEntry> findByProductIdAndCompanyIdOrderByValidatedAtDescIdDesc(Long productId, Long companyId, Pageable page);

    List<StockValuationEntry> findByCompanyIdOrderByValidatedAtDescIdDesc(Long companyId, Pageable page);

    /** Dernière écriture antérieure à une date, par article, pour un entrepôt : valeur d'ouverture d'une période. */
    @Query("SELECT e FROM StockValuationEntry e WHERE e.id IN (" +
           "SELECT MAX(x.id) FROM StockValuationEntry x WHERE x.warehouseId = :wid " +
           "AND x.productId IN :pids AND x.validatedAt < :dt GROUP BY x.productId)")
    List<StockValuationEntry> findLastBefore(@Param("wid") Long warehouseId,
                                             @Param("pids") Collection<Long> productIds,
                                             @Param("dt") LocalDateTime before);
}

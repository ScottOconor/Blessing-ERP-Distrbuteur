package com.erp.stock.repository;

import com.erp.stock.entity.StockMove;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface StockMoveRepository extends JpaRepository<StockMove, Long> {

    @Query("SELECT m FROM StockMove m WHERE m.picking.id = :pickingId")
    List<StockMove> findByPickingId(@Param("pickingId") Long pickingId);

    @Query("SELECT m FROM StockMove m WHERE m.productId = :productId AND m.companyId = :cid AND m.state = 'done'")
    List<StockMove> findDoneByProduct(@Param("productId") Long productId, @Param("cid") Long companyId);

    @Query("SELECT m FROM StockMove m WHERE m.companyId = :cid AND m.state = 'done' ORDER BY m.id DESC")
    List<StockMove> findAllDoneByCompany(@Param("cid") Long companyId,
        org.springframework.data.domain.Pageable pageable);

    @Query("SELECT m FROM StockMove m WHERE m.companyId = :cid AND m.state = 'done' " +
           "AND m.picking.dateDone >= :dateFrom AND m.picking.dateDone <= :dateTo " +
           "ORDER BY m.picking.dateDone DESC, m.id DESC")
    List<StockMove> findDoneByCompanyBetween(
        @Param("cid") Long companyId,
        @Param("dateFrom") LocalDateTime dateFrom,
        @Param("dateTo") LocalDateTime dateTo,
        org.springframework.data.domain.Pageable pageable);

    @Query("SELECT m FROM StockMove m WHERE m.companyId = :cid AND m.state = 'done' " +
           "AND m.picking.dateDone >= :dateFrom " +
           "ORDER BY m.picking.dateDone DESC, m.id DESC")
    List<StockMove> findDoneByCompanyFrom(
        @Param("cid") Long companyId,
        @Param("dateFrom") LocalDateTime dateFrom,
        org.springframework.data.domain.Pageable pageable);

    @Query("SELECT m FROM StockMove m WHERE m.companyId = :cid AND m.state = 'done' " +
           "AND m.picking.dateDone <= :dateTo " +
           "ORDER BY m.picking.dateDone DESC, m.id DESC")
    List<StockMove> findDoneByCompanyTo(
        @Param("cid") Long companyId,
        @Param("dateTo") LocalDateTime dateTo,
        org.springframework.data.domain.Pageable pageable);
}

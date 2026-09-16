package com.erp.stock.repository;

import com.erp.stock.entity.StockMove;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public interface StockMoveRepository extends JpaRepository<StockMove, Long> {

    /**
     * Corrige les réceptions historiques (facture d'achat) dont le mouvement "incoming" pointait
     * directement vers le magasin principal au lieu du Dépôt Achat, alors qu'un transfert interne
     * (Dépôt Achat → magasin principal) référençant cette même réception existe et déplace la même
     * quantité vers la même destination finale : la marchandise était comptée deux fois dans les
     * rapports de stock (une fois via le mouvement direct, une fois via le transfert). Repointe le
     * mouvement "incoming" vers le Dépôt Achat (source du transfert), ce qui supprime le doublon
     * sans toucher au quant réel (déjà correct, seul l'historique des mouvements était faux).
     * Idempotent : ne modifie que les mouvements encore mal routés.
     */
    @Modifying
    @Query(value = """
        UPDATE stock_moves m_in
        SET location_dest_id = m_tr.location_id
        FROM stock_pickings p_in, stock_moves m_tr, stock_pickings p_tr
        WHERE p_in.id = m_in.picking_id
          AND p_tr.id = m_tr.picking_id
          AND p_in.picking_type_code = 'incoming'
          AND p_tr.picking_type_code = 'internal'
          AND p_tr.origin = p_in.name
          AND m_tr.product_id = m_in.product_id
          AND m_tr.qty_done = m_in.qty_done
          AND m_in.location_dest_id = m_tr.location_dest_id
          AND m_in.location_dest_id <> m_tr.location_id
          AND m_in.state = 'done'
          AND m_tr.state = 'done'
        """, nativeQuery = true)
    int fixDuplicateReceptionDestinations();

    /** Nombre de mouvements "done" déjà existants pour un produit/quantité dans une fenêtre de
     *  temps donnée — utilisé pour détecter si un ajustement historique a bien son mouvement de
     *  stock (créé à quelques secondes près au moment de l'ajustement). */
    @Query("SELECT COUNT(m) FROM StockMove m WHERE m.productId = :productId AND m.qtyDone = :qty " +
           "AND m.state = 'done' AND m.picking.dateDone BETWEEN :from AND :to")
    long countMovesForAdjustment(@Param("productId") Long productId, @Param("qty") BigDecimal qty,
                                  @Param("from") LocalDateTime from, @Param("to") LocalDateTime to);

    @Query("SELECT m FROM StockMove m WHERE m.picking.id = :pickingId")
    List<StockMove> findByPickingId(@Param("pickingId") Long pickingId);

    @Query("SELECT m FROM StockMove m WHERE m.productId = :productId AND m.companyId = :cid AND m.state = 'done'")
    List<StockMove> findDoneByProduct(@Param("productId") Long productId, @Param("cid") Long companyId);

    @Query("SELECT m FROM StockMove m WHERE m.companyId = :cid AND m.state = 'done' ORDER BY m.id DESC")
    List<StockMove> findAllDoneByCompany(@Param("cid") Long companyId,
        org.springframework.data.domain.Pageable pageable);

    /**
     * Mouvements "done" + mouvements sortants de transferts encore en transit (state='confirmed'
     * sur un picking 'pending_reception' : la source a déjà été déstockée mais la réception n'est
     * pas encore confirmée côté destinataire). Utilisé uniquement pour la réconciliation quant/
     * ledger (pas pour l'affichage de la fiche de stock, qui doit rester filtrée sur 'done' —
     * le mouvement de réception associé, seul visible dans la fiche, portera la même quantité une
     * fois "done"). Exclut volontairement les mouvements 'confirmed' de transferts déjà 'done'
     * (relique jamais promue, cf. {@link com.erp.stock.service.StockService#confirmTransferReception}).
     */
    @Query("SELECT m FROM StockMove m WHERE m.companyId = :cid AND " +
           "(m.state = 'done' OR (m.state = 'confirmed' AND m.picking.state = 'pending_reception')) " +
           "ORDER BY m.id DESC")
    List<StockMove> findDoneOrInTransitByCompany(@Param("cid") Long companyId,
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

    // ─── Rapport de stock ───────────────────────────────────────────────────────

    /** Produits distincts ayant eu un mouvement dans ces emplacements jusqu'à dateTo */
    @Query("SELECT DISTINCT m.productId FROM StockMove m WHERE m.state = 'done' " +
           "AND m.picking.dateDone <= :dateTo " +
           "AND (m.locationDestId IN :locIds OR m.locationId IN :locIds)")
    List<Long> findDistinctProductIds(@Param("locIds") List<Long> locIds, @Param("dateTo") LocalDateTime dateTo);

    /** Entrées avant une date : dest dans locIds, src hors locIds */
    @Query("SELECT COALESCE(SUM(m.qtyDone), 0) FROM StockMove m WHERE m.productId = :pid " +
           "AND m.state = 'done' AND m.picking.dateDone < :before " +
           "AND m.locationDestId IN :locIds AND m.locationId NOT IN :locIds")
    BigDecimal sumIncomingBefore(@Param("pid") Long productId, @Param("locIds") List<Long> locIds, @Param("before") LocalDateTime before);

    /** Sorties avant une date : src dans locIds, dest hors locIds */
    @Query("SELECT COALESCE(SUM(m.qtyDone), 0) FROM StockMove m WHERE m.productId = :pid " +
           "AND m.state = 'done' AND m.picking.dateDone < :before " +
           "AND m.locationId IN :locIds AND m.locationDestId NOT IN :locIds")
    BigDecimal sumOutgoingBefore(@Param("pid") Long productId, @Param("locIds") List<Long> locIds, @Param("before") LocalDateTime before);

    /** Entrées sur la période */
    @Query("SELECT COALESCE(SUM(m.qtyDone), 0) FROM StockMove m WHERE m.productId = :pid " +
           "AND m.state = 'done' AND m.picking.dateDone >= :df AND m.picking.dateDone <= :dt " +
           "AND m.locationDestId IN :locIds AND m.locationId NOT IN :locIds")
    BigDecimal sumInQtyBetween(@Param("pid") Long productId, @Param("locIds") List<Long> locIds, @Param("df") LocalDateTime dateFrom, @Param("dt") LocalDateTime dateTo);

    /** Sorties sur la période */
    @Query("SELECT COALESCE(SUM(m.qtyDone), 0) FROM StockMove m WHERE m.productId = :pid " +
           "AND m.state = 'done' AND m.picking.dateDone >= :df AND m.picking.dateDone <= :dt " +
           "AND m.locationId IN :locIds AND m.locationDestId NOT IN :locIds")
    BigDecimal sumOutQtyBetween(@Param("pid") Long productId, @Param("locIds") List<Long> locIds, @Param("df") LocalDateTime dateFrom, @Param("dt") LocalDateTime dateTo);

    /** Tous les mouvements affectant une location précise sur la période (pour fiche détaillée) */
    @Query("SELECT m FROM StockMove m JOIN FETCH m.picking WHERE m.productId = :pid " +
           "AND m.state = 'done' AND m.picking.dateDone >= :df AND m.picking.dateDone <= :dt " +
           "AND (m.locationDestId = :locId OR m.locationId = :locId) " +
           "ORDER BY m.picking.dateDone ASC, m.id ASC")
    List<StockMove> findDetailedMovements(@Param("pid") Long productId, @Param("locId") Long locationId, @Param("df") LocalDateTime dateFrom, @Param("dt") LocalDateTime dateTo);

    /** Entrées avant une date pour UNE location précise */
    @Query("SELECT COALESCE(SUM(m.qtyDone), 0) FROM StockMove m WHERE m.productId = :pid " +
           "AND m.state = 'done' AND m.picking.dateDone < :before AND m.locationDestId = :locId")
    BigDecimal sumIncomingBeforeLoc(@Param("pid") Long productId, @Param("locId") Long locationId, @Param("before") LocalDateTime before);

    /** Sorties avant une date pour UNE location précise */
    @Query("SELECT COALESCE(SUM(m.qtyDone), 0) FROM StockMove m WHERE m.productId = :pid " +
           "AND m.state = 'done' AND m.picking.dateDone < :before AND m.locationId = :locId")
    BigDecimal sumOutgoingBeforeLoc(@Param("pid") Long productId, @Param("locId") Long locationId, @Param("before") LocalDateTime before);

    // ─── Versions "batch" (un seul aller-retour DB pour tous les produits) ─────
    // utilisées par StockReportService.getAnalyticalReport, qui bouclait auparavant sur
    // sumIncomingBefore/sumOutgoingBefore/sumInQtyBetween/sumOutQtyBetween PRODUIT PAR PRODUIT
    // (4 requêtes par produit par entrepôt — des centaines pour un rapport multi-entrepôts).

    /** Entrées avant une date, pour plusieurs produits à la fois : dest dans locIds, src hors locIds */
    @Query("SELECT m.productId, COALESCE(SUM(m.qtyDone), 0) FROM StockMove m WHERE m.productId IN :pids " +
           "AND m.state = 'done' AND m.picking.dateDone < :before " +
           "AND m.locationDestId IN :locIds AND m.locationId NOT IN :locIds GROUP BY m.productId")
    List<Object[]> sumIncomingBeforeBatch(@Param("pids") List<Long> productIds, @Param("locIds") List<Long> locIds, @Param("before") LocalDateTime before);

    /** Sorties avant une date, pour plusieurs produits à la fois : src dans locIds, dest hors locIds */
    @Query("SELECT m.productId, COALESCE(SUM(m.qtyDone), 0) FROM StockMove m WHERE m.productId IN :pids " +
           "AND m.state = 'done' AND m.picking.dateDone < :before " +
           "AND m.locationId IN :locIds AND m.locationDestId NOT IN :locIds GROUP BY m.productId")
    List<Object[]> sumOutgoingBeforeBatch(@Param("pids") List<Long> productIds, @Param("locIds") List<Long> locIds, @Param("before") LocalDateTime before);

    /** Entrées sur la période, pour plusieurs produits à la fois */
    @Query("SELECT m.productId, COALESCE(SUM(m.qtyDone), 0) FROM StockMove m WHERE m.productId IN :pids " +
           "AND m.state = 'done' AND m.picking.dateDone >= :df AND m.picking.dateDone <= :dt " +
           "AND m.locationDestId IN :locIds AND m.locationId NOT IN :locIds GROUP BY m.productId")
    List<Object[]> sumInQtyBetweenBatch(@Param("pids") List<Long> productIds, @Param("locIds") List<Long> locIds, @Param("df") LocalDateTime dateFrom, @Param("dt") LocalDateTime dateTo);

    /** Sorties sur la période, pour plusieurs produits à la fois */
    @Query("SELECT m.productId, COALESCE(SUM(m.qtyDone), 0) FROM StockMove m WHERE m.productId IN :pids " +
           "AND m.state = 'done' AND m.picking.dateDone >= :df AND m.picking.dateDone <= :dt " +
           "AND m.locationId IN :locIds AND m.locationDestId NOT IN :locIds GROUP BY m.productId")
    List<Object[]> sumOutQtyBetweenBatch(@Param("pids") List<Long> productIds, @Param("locIds") List<Long> locIds, @Param("df") LocalDateTime dateFrom, @Param("dt") LocalDateTime dateTo);
}

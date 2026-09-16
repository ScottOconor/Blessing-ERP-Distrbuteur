package com.erp.stock.repository;

import com.erp.stock.entity.StockPicking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface StockPickingRepository extends JpaRepository<StockPicking, Long> {

    List<StockPicking> findByCompanyIdOrderByCreatedAtDesc(Long companyId);

    /** Pickings d'une société pour une origine (nom du document source) donnée. */
    List<StockPicking> findByCompanyIdAndOrigin(Long companyId, String origin);

    @Query("SELECT p FROM StockPicking p WHERE p.companyId = :cid AND p.pickingTypeCode = :code ORDER BY p.createdAt DESC")
    List<StockPicking> findByCompanyAndType(@Param("cid") Long companyId, @Param("code") String code);

    @Query("SELECT p FROM StockPicking p WHERE p.companyId = :cid AND p.pickingTypeCode = :code AND p.state = :state ORDER BY p.createdAt DESC")
    List<StockPicking> findByCompanyTypeAndState(@Param("cid") Long companyId, @Param("code") String code, @Param("state") String state);

    @Query(value = "SELECT COUNT(*) FROM stock_pickings WHERE company_id = :cid AND name LIKE CONCAT(:prefix, '/%')", nativeQuery = true)
    Integer findMaxSeq(@Param("cid") Long companyId, @Param("prefix") String prefix);

    long countByPickingTypeId(Long pickingTypeId);

    /** Alias pour getPendingReceptions */
    default List<StockPicking> findByCompanyIdAndPickingTypeCodeAndState(Long companyId, String code, String state) {
        return findByCompanyTypeAndState(companyId, code, state);
    }

    @Query("SELECT p FROM StockPicking p WHERE p.companyId = :cid AND p.pickingTypeCode = 'inter_company' ORDER BY p.createdAt DESC")
    List<StockPicking> findInterCompanyByCompany(@Param("cid") Long companyId);

    @Query("SELECT COUNT(p) FROM StockPicking p WHERE p.companyId = :cid AND p.pickingTypeCode = 'inter_company'")
    Integer countInterCompanyByCompany(@Param("cid") Long companyId);

    /** Réceptions en attente pour les transferts inter-dépôts (côté destinataire) */
    @Query("SELECT p FROM StockPicking p WHERE p.companyId = :cid AND p.transferReception = true AND p.state = 'pending_reception' ORDER BY p.createdAt DESC")
    List<StockPicking> findPendingTransferReceptions(@Param("cid") Long companyId);

    /** Toutes les réceptions de transfert (historique) */
    @Query("SELECT p FROM StockPicking p WHERE p.companyId = :cid AND p.transferReception = true ORDER BY p.createdAt DESC")
    List<StockPicking> findAllTransferReceptions(@Param("cid") Long companyId);

    /** Trouve une expédition inter-agences (côté émetteur) par son nom de référence */
    @Query("SELECT p FROM StockPicking p WHERE p.name = :name AND p.pickingTypeCode = 'inter_company' AND (p.transferReception IS NULL OR p.transferReception = false)")
    Optional<StockPicking> findExpeditionByName(@Param("name") String name);

    /** Trouve une réception inter-agences (côté destinataire) par la référence de l'expédition source */
    @Query("SELECT p FROM StockPicking p WHERE p.origin = :origin AND p.transferReception = true ORDER BY p.createdAt DESC")
    List<StockPicking> findReceptionsByExpeditionRef(@Param("origin") String origin);

    /**
     * Migration one-shot : comble les date_done null sur les pickings déjà validés
     * (outgoing/incoming/internal) en utilisant created_at comme fallback.
     * Tous les rapports de stock filtrent sur dateDone — un null les rend invisibles.
     */
    @Modifying
    @Query("UPDATE StockPicking p SET p.dateDone = p.createdAt WHERE p.state = 'done' AND p.dateDone IS NULL AND p.createdAt IS NOT NULL")
    int fixNullDateDone();
}

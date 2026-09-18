package com.erp.purchases.repository;

import com.erp.purchases.entity.PurchaseInvoice;
import org.hibernate.jpa.HibernateHints;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import jakarta.persistence.QueryHint;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@Repository
public interface PurchaseInvoiceRepository extends JpaRepository<PurchaseInvoice, Long> {

    List<PurchaseInvoice> findByCompanyIdOrderByDateDescNameDesc(Long companyId);

    List<PurchaseInvoice> findByCompanyIdAndTypeOrderByDateDescNameDesc(Long companyId, String type);

    /** Version streaming — évite l'OutOfMemoryError sur une liste de factures trop volumineuse
     *  (voir SalesInvoiceRepository.streamByCompanyIdAndType pour le contexte complet). */
    @QueryHints(@QueryHint(name = HibernateHints.HINT_FETCH_SIZE, value = "50"))
    @Query("SELECT i FROM PurchaseInvoice i WHERE i.company.id = :companyId AND i.type = :type " +
           "ORDER BY i.date DESC, i.name DESC")
    Stream<PurchaseInvoice> streamByCompanyIdAndType(@Param("companyId") Long companyId, @Param("type") String type);

    List<PurchaseInvoice> findByCompanyIdAndStateOrderByDateDescNameDesc(Long companyId, String state);

    /** Toutes les factures "actives" (tout sauf brouillon — jamais synchronisé de toute façon)
     *  pour le snapshot horaire : contrairement à un filtre state='posted', celui-ci n'exclut
     *  silencieusement aucun état (paid, extournee, partiellement_extournee, cancelled...) du
     *  filet de sécurité de réconciliation avec le Hub. */
    List<PurchaseInvoice> findByCompanyIdAndStateNotOrderByDateDescNameDesc(Long companyId, String excludedState);

    /** Version bornée en SQL — voir SalesInvoiceRepository.findByCompanyIdAndStateNotSince pour le
     *  contexte complet (même correctif OOM snapshot, incidents Blessing de septembre 2026). */
    @Query("SELECT i FROM PurchaseInvoice i WHERE i.company.id = :companyId AND i.state <> :excludedState " +
           "AND (i.date IS NULL OR i.date >= :since) ORDER BY i.date DESC, i.name DESC")
    List<PurchaseInvoice> findByCompanyIdAndStateNotSince(@Param("companyId") Long companyId,
                                                           @Param("excludedState") String excludedState,
                                                           @Param("since") LocalDate since);

    /** Snapshot incrémental — voir SalesInvoiceRepository.findByCompanyIdAndStateNotModifiedSince
     *  pour le contexte complet. */
    @Query("SELECT i FROM PurchaseInvoice i WHERE i.company.id = :companyId AND i.state <> :excludedState " +
           "AND i.updatedAt >= :modifiedSince ORDER BY i.date DESC, i.name DESC")
    List<PurchaseInvoice> findByCompanyIdAndStateNotModifiedSince(@Param("companyId") Long companyId,
                                                                   @Param("excludedState") String excludedState,
                                                                   @Param("modifiedSince") java.time.LocalDateTime modifiedSince);

    Optional<PurchaseInvoice> findFirstByPurchaseOrderId(Long orderId);

    List<PurchaseInvoice> findByOriginalInvoiceId(Long originalInvoiceId);

    @Query("SELECT i FROM PurchaseInvoice i WHERE i.company.id = :companyId AND i.state IN ('posted','paid','partiellement_extournee') AND i.date >= :dateStart AND i.date <= :dateEnd ORDER BY i.date ASC")
    List<PurchaseInvoice> findPostedByCompanyAndDateRange(@Param("companyId") Long companyId,
                                                          @Param("dateStart") LocalDate dateStart,
                                                          @Param("dateEnd") LocalDate dateEnd);

    @Query("SELECT i FROM PurchaseInvoice i WHERE i.company.id = :companyId AND i.type = 'invoice' AND i.date >= :dateStart AND i.date <= :dateEnd ORDER BY i.date ASC")
    List<PurchaseInvoice> findByCompanyAndDateRange(@Param("companyId") Long companyId,
                                                    @Param("dateStart") LocalDate dateStart,
                                                    @Param("dateEnd") LocalDate dateEnd);

    /** Avoirs (credit_note) sur la période — même filtre que le pendant ventes
     *  (SalesInvoiceRepository.findAvoirsByCompanyAndDateRange), pour que la génération
     *  automatique de remises par période prenne en compte les retours fournisseurs. */
    @Query("SELECT i FROM PurchaseInvoice i WHERE i.company.id = :companyId AND i.type = 'credit_note' " +
           "AND i.state = 'paid' AND i.date BETWEEN :dateStart AND :dateEnd ORDER BY i.date DESC")
    List<PurchaseInvoice> findAvoirsByCompanyAndDateRange(@Param("companyId") Long companyId,
                                                          @Param("dateStart") LocalDate dateStart,
                                                          @Param("dateEnd") LocalDate dateEnd);

    @Query("SELECT COALESCE(MAX(CAST(SUBSTRING(i.name, LENGTH(i.name) - 4) AS int)), 0) " +
           "FROM PurchaseInvoice i WHERE i.company.id = :companyId AND i.type = :type AND YEAR(i.date) = :year")
    Integer findMaxSequenceByCompanyTypeAndYear(@Param("companyId") Long companyId,
                                                @Param("type") String type,
                                                @Param("year") int year);

    // ── Snapshot queries ─────────────────────────────────────────────────

    @Query("SELECT COALESCE(SUM(i.totalTTC), 0) FROM PurchaseInvoice i " +
           "WHERE i.company.id = :cid AND i.state IN ('posted','paid','partiellement_extournee') AND i.type = 'invoice'")
    java.math.BigDecimal sumAchatsTotal(@Param("cid") Long companyId);

    @Query("SELECT COALESCE(SUM(i.totalTTC), 0) FROM PurchaseInvoice i " +
           "WHERE i.company.id = :cid AND i.state IN ('posted','paid','partiellement_extournee') AND i.type = 'invoice' " +
           "AND YEAR(i.date) = :year AND MONTH(i.date) = :month")
    java.math.BigDecimal sumAchatsMois(@Param("cid") Long companyId, @Param("year") int year, @Param("month") int month);

    @Query("SELECT COUNT(i) FROM PurchaseInvoice i " +
           "WHERE i.company.id = :cid AND i.state IN ('posted','paid','partiellement_extournee') AND i.type = 'invoice'")
    long countFacturesAchats(@Param("cid") Long companyId);

    @Query("SELECT i.partner.id, i.partner.name, SUM(i.montantDu) " +
           "FROM PurchaseInvoice i " +
           "WHERE i.company.id = :cid AND i.state IN ('posted','partiellement_extournee') AND i.type = 'invoice' AND i.montantDu > 0 " +
           "GROUP BY i.partner.id, i.partner.name " +
           "ORDER BY SUM(i.montantDu) DESC")
    List<Object[]> dettesParTiers(@Param("cid") Long companyId);

    /** "Dettes Jour/Mois" du dashboard : voir SalesInvoiceRepository.sumMontantDuClientsPeriode
     *  (même logique, côté achats). */
    @Query("SELECT COALESCE(SUM(i.montantDu), 0) FROM PurchaseInvoice i " +
           "WHERE i.company.id = :cid AND i.state IN ('posted','partiellement_extournee') AND i.type = 'invoice' " +
           "AND i.montantDu > 0 AND i.date BETWEEN :from AND :to")
    java.math.BigDecimal sumMontantDuFournisseursPeriode(@Param("cid") Long companyId,
                                                         @Param("from") LocalDate from,
                                                         @Param("to") LocalDate to);

    /** Avoirs (credit_note) validés ayant encore un montant disponible, du plus ancien au plus récent */
    @Query("SELECT i FROM PurchaseInvoice i WHERE i.partner.id = :partnerId AND i.company.id = :companyId " +
           "AND i.type = 'credit_note' AND i.state = 'posted' AND i.montantDu > 0 ORDER BY i.date ASC, i.id ASC")
    List<PurchaseInvoice> findAvailableCreditNotes(@Param("partnerId") Long partnerId,
                                                   @Param("companyId") Long companyId);

    /** Somme totale des crédits (avoirs) disponibles pour un fournisseur */
    @Query("SELECT COALESCE(SUM(i.montantDu), 0) FROM PurchaseInvoice i " +
           "WHERE i.partner.id = :partnerId AND i.company.id = :companyId " +
           "AND i.type = 'credit_note' AND i.state = 'posted' AND i.montantDu > 0")
    java.math.BigDecimal sumAvailableCredits(@Param("partnerId") Long partnerId,
                                             @Param("companyId") Long companyId);
}

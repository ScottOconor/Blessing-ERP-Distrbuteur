package com.erp.sales.repository;

import com.erp.sales.entity.SalesInvoice;
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
public interface SalesInvoiceRepository extends JpaRepository<SalesInvoice, Long> {

    List<SalesInvoice> findByCompanyIdOrderByDateDescNameDesc(Long companyId);

    /** Version streaming de findByCompanyIdAndTypeOrderByDateDescNameDesc — lit les factures ligne
     *  par ligne depuis un curseur serveur PostgreSQL au lieu de charger toute la liste en mémoire
     *  d'un coup (une base avec un très gros volume de factures faisait planter la JVM en
     *  OutOfMemoryError sur ce seul endpoint). Doit être consommé et fermé à l'intérieur d'une
     *  transaction (readOnly) ouverte par l'appelant — le curseur PostgreSQL sous-jacent n'existe
     *  que le temps de la transaction. */
    @QueryHints(@QueryHint(name = HibernateHints.HINT_FETCH_SIZE, value = "50"))
    @Query("SELECT i FROM SalesInvoice i WHERE i.company.id = :companyId AND i.type = :type " +
           "ORDER BY i.date DESC, i.name DESC")
    Stream<SalesInvoice> streamByCompanyIdAndType(@Param("companyId") Long companyId, @Param("type") String type);

    List<SalesInvoice> findByCompanyIdAndStateOrderByDateDescNameDesc(Long companyId, String state);

    /** Toutes les factures "actives" (tout sauf brouillon — jamais synchronisé de toute façon)
     *  pour le snapshot horaire : contrairement à un filtre state='posted', celui-ci n'exclut
     *  silencieusement aucun état (paid, extournee, partiellement_extournee, cancelled...) du
     *  filet de sécurité de réconciliation avec le Hub. */
    List<SalesInvoice> findByCompanyIdAndStateNotOrderByDateDescNameDesc(Long companyId, String excludedState);

    List<SalesInvoice> findByCompanyIdAndPartnerIdOrderByDateDesc(Long companyId, Long partnerId);

    Optional<SalesInvoice> findFirstBySalesOrderId(Long orderId);

    /** Version liste de findFirstBySalesOrderId — une seule requête pour toute une liste de bons
     *  de commande au lieu d'un findFirstBySalesOrderId par bon. */
    List<SalesInvoice> findBySalesOrderIdIn(List<Long> salesOrderIds);

    List<SalesInvoice> findByCompanyIdAndTypeOrderByDateDescNameDesc(Long companyId, String type);

    List<SalesInvoice> findByOriginalInvoiceId(Long originalInvoiceId);

    @Query("SELECT COALESCE(MAX(CAST(SUBSTRING(i.name, LENGTH(i.name) - 4) AS int)), 0) " +
           "FROM SalesInvoice i WHERE i.company.id = :companyId AND i.type = :type AND YEAR(i.date) = :year")
    Integer findMaxSequenceByCompanyTypeAndYear(@Param("companyId") Long companyId,
                                                @Param("type") String type,
                                                @Param("year") int year);

    @Query("SELECT COALESCE(MAX(CAST(SUBSTRING(i.name, LENGTH(i.name) - 4) AS int)), 0) " +
           "FROM SalesInvoice i WHERE i.company.id = :companyId AND YEAR(i.date) = :year")
    Integer findMaxSequenceByCompanyAndYear(@Param("companyId") Long companyId, @Param("year") int year);

    @Query("SELECT i FROM SalesInvoice i WHERE i.company.id = :companyId AND i.type = 'invoice' " +
           "AND i.state IN ('posted','paid') AND i.date BETWEEN :start AND :end ORDER BY i.date DESC")
    List<SalesInvoice> findPostedByCompanyAndDateRange(@Param("companyId") Long companyId,
                                                       @Param("start") LocalDate start,
                                                       @Param("end") LocalDate end);

    @Query("SELECT i FROM SalesInvoice i WHERE i.company.id = :companyId AND i.type = 'credit_note' " +
           "AND i.state = 'paid' AND i.date BETWEEN :start AND :end ORDER BY i.date DESC")
    List<SalesInvoice> findAvoirsByCompanyAndDateRange(@Param("companyId") Long companyId,
                                                       @Param("start") LocalDate start,
                                                       @Param("end") LocalDate end);

    /** Avoirs (credit_note) validés ayant encore un montant disponible, du plus ancien au plus récent */
    @Query("SELECT i FROM SalesInvoice i WHERE i.partner.id = :partnerId AND i.company.id = :companyId " +
           "AND i.type = 'credit_note' AND i.state = 'posted' AND i.montantDu > 0 ORDER BY i.date ASC, i.id ASC")
    List<SalesInvoice> findAvailableCreditNotes(@Param("partnerId") Long partnerId,
                                                @Param("companyId") Long companyId);

    /** Somme totale des crédits (avoirs) disponibles pour un partenaire */
    @Query("SELECT COALESCE(SUM(i.montantDu), 0) FROM SalesInvoice i " +
           "WHERE i.partner.id = :partnerId AND i.company.id = :companyId " +
           "AND i.type = 'credit_note' AND i.state = 'posted' AND i.montantDu > 0")
    java.math.BigDecimal sumAvailableCredits(@Param("partnerId") Long partnerId,
                                             @Param("companyId") Long companyId);

    // ── Snapshot queries ─────────────────────────────────────────────────

    @Query("SELECT COALESCE(SUM(i.totalTTC), 0) FROM SalesInvoice i " +
           "WHERE i.company.id = :cid AND i.state IN ('posted','paid') AND i.type = 'invoice'")
    java.math.BigDecimal sumCaVentesTotal(@Param("cid") Long companyId);

    @Query("SELECT COALESCE(SUM(i.totalTTC), 0) FROM SalesInvoice i " +
           "WHERE i.company.id = :cid AND i.state IN ('posted','paid') AND i.type = 'invoice' " +
           "AND YEAR(i.date) = :year AND MONTH(i.date) = :month")
    java.math.BigDecimal sumCaVentesMois(@Param("cid") Long companyId, @Param("year") int year, @Param("month") int month);

    @Query("SELECT COUNT(i) FROM SalesInvoice i " +
           "WHERE i.company.id = :cid AND i.state IN ('posted','paid') AND i.type = 'invoice'")
    long countFacturesVentes(@Param("cid") Long companyId);

    @Query("SELECT COUNT(i) FROM SalesInvoice i " +
           "WHERE i.company.id = :cid AND i.state IN ('posted','paid') AND i.type = 'invoice' AND i.date = :date")
    long countFacturesVentesByDate(@Param("cid") Long companyId, @Param("date") LocalDate date);

    @Query("SELECT COUNT(i) FROM SalesInvoice i " +
           "WHERE i.company.id = :cid AND i.state IN ('posted','paid') AND i.type = 'invoice' " +
           "AND YEAR(i.date) = :year AND MONTH(i.date) = :month")
    long countFacturesVentesByMonth(@Param("cid") Long companyId, @Param("year") int year, @Param("month") int month);

    // Factures ET avoirs : fraisEnlevementTTC est stocké en valeur faciale POSITIVE même sur un
    // avoir (cf. SalesStatsService qui doit explicitement multiplier par -1 les lignes d'avoir —
    // le signe négatif n'est jamais dans la donnée brute), donc on l'inverse nous-mêmes ici selon
    // le type pour que l'avoir réduise bien le total au lieu de s'y ajouter.
    @Query("SELECT COALESCE(SUM(CASE WHEN i.type = 'credit_note' THEN -i.fraisEnlevementTTC ELSE i.fraisEnlevementTTC END), 0) " +
           "FROM SalesInvoice i " +
           "WHERE i.company.id = :cid AND i.state IN ('posted','paid') AND i.type IN ('invoice','credit_note')")
    java.math.BigDecimal sumFraisEnlevementsVentes(@Param("cid") Long companyId);

    // Même calcul que sumFraisEnlevementsVentes, borné à une période — pour le dashboard
    // (année en cours, mois en cours, trimestre en cours).
    @Query("SELECT COALESCE(SUM(CASE WHEN i.type = 'credit_note' THEN -i.fraisEnlevementTTC ELSE i.fraisEnlevementTTC END), 0) " +
           "FROM SalesInvoice i " +
           "WHERE i.company.id = :cid AND i.state IN ('posted','paid') AND i.type IN ('invoice','credit_note') " +
           "AND i.date >= :dateFrom AND i.date <= :dateTo")
    java.math.BigDecimal sumFraisEnlevementsVentesForPeriod(@Param("cid") Long companyId,
                                                             @Param("dateFrom") LocalDate dateFrom,
                                                             @Param("dateTo") LocalDate dateTo);

    @Query("SELECT i.partner.id, i.partner.name, SUM(i.montantDu) " +
           "FROM SalesInvoice i " +
           "WHERE i.company.id = :cid AND i.state = 'posted' AND i.type = 'invoice' AND i.montantDu > 0 " +
           "GROUP BY i.partner.id, i.partner.name " +
           "ORDER BY SUM(i.montantDu) DESC")
    List<Object[]> creancesParTiers(@Param("cid") Long companyId);

    /** "Créances Jour/Mois" du dashboard : montant dû des factures dont la DATE DE FACTURE tombe
     *  dans la période — même logique que "CA du mois" (somme bornée par les factures de la
     *  période), volontairement PAS le calcul par tiers/GL utilisé pour le total (creancesParTiers)
     *  qui, lui, raisonne en mouvements de compte sur la période et peut dépasser le total global
     *  affiché à côté (deux populations de tiers différentes selon la fenêtre). */
    @Query("SELECT COALESCE(SUM(i.montantDu), 0) FROM SalesInvoice i " +
           "WHERE i.company.id = :cid AND i.state = 'posted' AND i.type = 'invoice' " +
           "AND i.montantDu > 0 AND i.date BETWEEN :from AND :to")
    java.math.BigDecimal sumMontantDuClientsPeriode(@Param("cid") Long companyId,
                                                    @Param("from") LocalDate from,
                                                    @Param("to") LocalDate to);
}

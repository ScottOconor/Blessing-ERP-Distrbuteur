package com.erp.accounting.repository;

import com.erp.accounting.entity.AccountMoveLine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface AccountMoveLineRepository extends JpaRepository<AccountMoveLine, Long> {

    List<AccountMoveLine> findByMoveId(Long moveId);

    /** Vrai si ce compte porte au moins une écriture validée datée jusqu'à :date incluse —
     *  utilisé pour bloquer le renumérotage (changement de code) d'un compte déjà mouvementé
     *  sur une période clôturée. */
    @Query("SELECT CASE WHEN COUNT(l) > 0 THEN true ELSE false END FROM AccountMoveLine l " +
           "WHERE l.account.id = :accountId AND l.move.state = 'posted' AND l.date <= :date")
    boolean existsPostedByAccountIdUpToDate(@Param("accountId") Long accountId, @Param("date") LocalDate date);

    /**
     * Charge les lignes d'un move avec leurs données analytiques (eager pour postEntry)
     */
    @Query("""
        SELECT DISTINCT l FROM AccountMoveLine l
        LEFT JOIN FETCH l.analyticAccount
        LEFT JOIN FETCH l.analyticDistributions d
        LEFT JOIN FETCH d.analyticAccount
        LEFT JOIN FETCH l.account
        LEFT JOIN FETCH l.company
        WHERE l.move.id = :moveId
    """)
    List<AccountMoveLine> findByMoveIdWithAnalytic(@Param("moveId") Long moveId);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.account.id = :accountId " +
           "AND l.date BETWEEN :from AND :to " +
           "AND l.move.state = :state")
    List<AccountMoveLine> findByAccountIdAndDateBetweenAndMoveState(
            @Param("accountId") Long accountId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to,
            @Param("state") String state);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date BETWEEN :from AND :to " +
           "AND l.move.state = 'posted' " +
           "ORDER BY l.account.code, l.date, l.move.name")
    List<AccountMoveLine> findPostedByCompanyAndDateRange(
            @Param("companyId") Long companyId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to);

@Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date < :date " +
           "AND l.move.state = 'posted' " +
           "ORDER BY l.account.code, l.date")
    List<AccountMoveLine> findPostedBeforeDate(
            @Param("companyId") Long companyId,
            @Param("date") LocalDate date);

    /**
     * Toutes les lignes postées jusqu'à une date INCLUSIVE (date <= :date).
     * Utilisé pour le bilan OHADA : soldes cumulés jusqu'à date_to.
     */
    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date <= :date " +
           "AND l.move.state = 'posted' " +
           "ORDER BY l.account.code, l.date")
    List<AccountMoveLine> findPostedUpToDate(
            @Param("companyId") Long companyId,
            @Param("date") LocalDate date);

    /**
     * Toutes les lignes jusqu'à une date INCLUSIVE, en incluant éventuellement les écritures
     * non validées (draft) si includeUnposted est vrai. Utilisé pour le bilan OHADA.
     */
    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date <= :date " +
           "AND (:includeUnposted = true OR l.move.state = 'posted') " +
           "ORDER BY l.account.code, l.date")
    List<AccountMoveLine> findAllUpToDateOptionalUnposted(
            @Param("companyId") Long companyId,
            @Param("date") LocalDate date,
            @Param("includeUnposted") boolean includeUnposted);

    /**
     * Lignes sur une plage de dates, en incluant éventuellement les écritures non
     * validées (draft) si includeUnposted est vrai. Utilisé pour borner le calcul
     * du résultat de l'exercice (comptes 6/7/8) au bilan OHADA — ces comptes de
     * gestion ne doivent PAS être cumulés depuis l'origine comme les comptes de
     * bilan, seulement sur l'exercice en cours.
     */
    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date BETWEEN :from AND :to " +
           "AND (:includeUnposted = true OR l.move.state = 'posted') " +
           "ORDER BY l.account.code, l.date")
    List<AccountMoveLine> findAllByDateRangeOptionalUnposted(
            @Param("companyId") Long companyId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to,
            @Param("includeUnposted") boolean includeUnposted);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date BETWEEN :from AND :to " +
           "AND l.move.state = 'posted' " +
           "AND (:journalIds IS NULL OR l.journal.id IN :journalIds) " +
           "ORDER BY l.account.code, l.date")
    List<AccountMoveLine> findPostedByCompanyAndDateRangeAndJournals(
            @Param("companyId") Long companyId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to,
            @Param("journalIds") List<Long> journalIds);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date < :date " +
           "AND l.move.state = 'posted' " +
           "AND (:journalIds IS NULL OR l.journal.id IN :journalIds) " +
           "ORDER BY l.account.code, l.date")
    List<AccountMoveLine> findPostedBeforeDateAndJournals(
            @Param("companyId") Long companyId,
            @Param("date") LocalDate date,
            @Param("journalIds") List<Long> journalIds);

    @Query("SELECT COALESCE(SUM(l.debit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.id = :accountId AND l.move.state = 'posted'")
    BigDecimal sumDebitByAccount(@Param("accountId") Long accountId);

    @Query("SELECT COALESCE(SUM(l.credit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.id = :accountId AND l.move.state = 'posted'")
    BigDecimal sumCreditByAccount(@Param("accountId") Long accountId);

    /** Même chose mais en excluant un move précis — utilisé pour calculer le solde AVANT une pièce existante */
    @Query("SELECT COALESCE(SUM(l.debit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.id = :accountId AND l.move.state = 'posted' AND l.move.id <> :excludeMoveId")
    BigDecimal sumDebitByAccountExcludingMove(@Param("accountId") Long accountId, @Param("excludeMoveId") Long excludeMoveId);

    @Query("SELECT COALESCE(SUM(l.credit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.id = :accountId AND l.move.state = 'posted' AND l.move.id <> :excludeMoveId")
    BigDecimal sumCreditByAccountExcludingMove(@Param("accountId") Long accountId, @Param("excludeMoveId") Long excludeMoveId);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date BETWEEN :from AND :to " +
           "AND l.move.state = 'posted' " +
           "AND l.account.internalType IN ('receivable', 'payable') " +
           "ORDER BY l.partner.name, l.account.code, l.date")
    List<AccountMoveLine> findTiersLinesInPeriod(
            @Param("companyId") Long companyId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date < :date " +
           "AND l.move.state = 'posted' " +
           "AND l.account.internalType IN ('receivable', 'payable') " +
           "ORDER BY l.partner.name, l.account.code, l.date")
    List<AccountMoveLine> findTiersLinesBeforeDate(
            @Param("companyId") Long companyId,
            @Param("date") LocalDate date);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND (:accountIds IS NULL OR l.account.id IN :accountIds) " +
           "AND l.date BETWEEN :from AND :to " +
           "AND l.move.state = 'posted' " +
           "ORDER BY l.account.code, l.date, l.move.name")
    List<AccountMoveLine> findForGrandLivre(
            @Param("companyId") Long companyId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to,
            @Param("accountIds") List<Long> accountIds);

    /** Toutes les lignes postées d'un journal pour une date précise (pour solde journalier) */
    @Query("SELECT l FROM AccountMoveLine l WHERE l.journal.id = :journalId AND l.date = :date AND l.move.state = 'posted'")
    List<AccountMoveLine> findPostedLinesByJournalAndDate(
            @Param("journalId") Long journalId,
            @Param("date") LocalDate date);

    /**
     * Lignes de trésorerie d'un journal pour une date : uniquement les comptes
     * dont internalType = 'liquidity' (571, 521...). Utilisé pour le solde journalier.
     */
    @Query("SELECT l FROM AccountMoveLine l WHERE l.journal.id = :journalId AND l.date = :date AND l.move.state = 'posted' AND l.account.internalType = 'liquidity'")
    List<AccountMoveLine> findTreasuryLinesByJournalAndDate(
            @Param("journalId") Long journalId,
            @Param("date") LocalDate date);

    /** Toutes les lignes de trésorerie (internalType='liquidity') d'un journal, triées par date ASC */
    @Query("SELECT l FROM AccountMoveLine l WHERE l.journal.id = :journalId AND l.move.state = 'posted' AND l.account.internalType = 'liquidity' ORDER BY l.date ASC")
    List<AccountMoveLine> findAllTreasuryLinesByJournal(@Param("journalId") Long journalId);

    /** Lignes de trésorerie d'un journal entre deux dates (cashbook) */
    @Query("SELECT l FROM AccountMoveLine l WHERE l.journal.id = :journalId AND l.date BETWEEN :from AND :to AND l.move.state = 'posted' AND l.account.internalType = 'liquidity' ORDER BY l.date, l.move.name, l.id")
    List<AccountMoveLine> findCashbookLines(@Param("journalId") Long journalId, @Param("from") LocalDate from, @Param("to") LocalDate to);

    /**
     * Solde cumulatif de trésorerie d'un journal AVANT une date donnée.
     * SUM(débit - crédit) sur les comptes liquidity — sert d'openingBalance fiable,
     * indépendant des enregistrements JournalDailyBalance potentiellement corrompus.
     */
    @Query("SELECT COALESCE(SUM(l.debit - l.credit), 0) FROM AccountMoveLine l " +
           "WHERE l.journal.id = :journalId AND l.date < :date " +
           "AND l.move.state = 'posted' AND l.account.internalType = 'liquidity'")
    BigDecimal sumTreasuryBalanceBeforeDate(
            @Param("journalId") Long journalId,
            @Param("date") LocalDate date);

    // ── Variantes par ID de compte (robustes si internalType mal configuré) ──

    @Query("SELECT l FROM AccountMoveLine l WHERE l.journal.id = :journalId AND l.account.id = :accountId AND l.date = :date AND l.move.state = 'posted'")
    List<AccountMoveLine> findLinesByJournalAccountAndDate(
            @Param("journalId") Long journalId,
            @Param("accountId") Long accountId,
            @Param("date") LocalDate date);

    @Query("SELECT l FROM AccountMoveLine l WHERE l.journal.id = :journalId AND l.account.id = :accountId AND l.move.state = 'posted' ORDER BY l.date ASC")
    List<AccountMoveLine> findAllLinesByJournalAndAccount(
            @Param("journalId") Long journalId,
            @Param("accountId") Long accountId);

    @Query("SELECT COALESCE(SUM(l.debit - l.credit), 0) FROM AccountMoveLine l " +
           "WHERE l.journal.id = :journalId AND l.account.id = :accountId AND l.date < :date AND l.move.state = 'posted'")
    BigDecimal sumBalanceByJournalAndAccountBeforeDate(
            @Param("journalId") Long journalId,
            @Param("accountId") Long accountId,
            @Param("date") LocalDate date);

    /** Lignes d'un journal sur le compte réellement lié (defaultDebitAccount/defaultCreditAccount) entre deux dates (cashbook) */
    @Query("SELECT l FROM AccountMoveLine l WHERE l.journal.id = :journalId AND l.account.id = :accountId " +
           "AND l.date BETWEEN :from AND :to AND l.move.state = 'posted' ORDER BY l.date, l.move.name, l.id")
    List<AccountMoveLine> findLinesByJournalAccountAndDateBetween(
            @Param("journalId") Long journalId,
            @Param("accountId") Long accountId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to);

    /**
     * Variantes filtrées UNIQUEMENT par compte (sans condition de journal) — indispensable pour un
     * transfert entre deux caisses : toute la pièce (les deux lignes, débit et crédit) est classée
     * sous le journal de la caisse qui a saisi l'opération, donc la ligne touchant le compte de
     * l'AUTRE caisse n'apparaît jamais si on filtre aussi par journal. Le compte de liquidité étant
     * dédié à une caisse donnée, le filtrer seul (avec la société) suffit à isoler ses mouvements.
     */
    @Query("SELECT l FROM AccountMoveLine l WHERE l.account.id = :accountId AND l.account.company.id = :companyId " +
           "AND l.date BETWEEN :from AND :to AND l.move.state = 'posted' ORDER BY l.date, l.move.name, l.id")
    List<AccountMoveLine> findLinesByAccountAndDateBetween(
            @Param("accountId") Long accountId,
            @Param("companyId") Long companyId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to);

    @Query("SELECT COALESCE(SUM(l.debit - l.credit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.id = :accountId AND l.account.company.id = :companyId " +
           "AND l.date < :date AND l.move.state = 'posted'")
    BigDecimal sumBalanceByAccountBeforeDate(
            @Param("accountId") Long accountId,
            @Param("companyId") Long companyId,
            @Param("date") LocalDate date);

    /**
     * Solde courant d'un partenaire : SUM(débit - crédit) sur tous les comptes
     * clients (receivable) et fournisseurs (payable) des écritures validées.
     * Positif = le partenaire nous doit ; négatif = on lui doit.
     */
    @Query("SELECT COALESCE(SUM(l.debit - l.credit), 0) FROM AccountMoveLine l " +
           "WHERE l.partner.id = :partnerId " +
           "AND l.company.id = :companyId " +
           "AND l.move.state = 'posted' " +
           "AND l.account.internalType IN ('receivable', 'payable')")
    BigDecimal computePartnerBalance(@Param("partnerId") Long partnerId,
                                     @Param("companyId") Long companyId);

    // ── Lettrage / Rapprochement ──

    @Query("""
        SELECT l FROM AccountMoveLine l
        WHERE l.partner.id = :partnerId
        AND l.company.id = :companyId
        AND l.move.state = 'posted'
        AND l.account.internalType = 'receivable'
        AND l.credit > 0
        AND l.move.journal.type IN ('bank', 'cash')
        ORDER BY l.move.date DESC, l.move.name DESC
    """)
    List<AccountMoveLine> findPostedReceivableCreditLinesForPartner(
            @Param("partnerId") Long partnerId,
            @Param("companyId") Long companyId);

    @Query("""
        SELECT l FROM AccountMoveLine l
        WHERE l.partner.id = :partnerId
        AND l.company.id = :companyId
        AND l.move.state = 'posted'
        AND l.account.internalType = 'payable'
        AND l.debit > 0
        AND l.move.journal.type IN ('bank', 'cash')
        ORDER BY l.move.date DESC, l.move.name DESC
    """)
    List<AccountMoveLine> findPostedPayableDebitLinesForPartner(
            @Param("partnerId") Long partnerId,
            @Param("companyId") Long companyId);

    @Query("SELECT COALESCE(SUM(l.credit), 0) FROM AccountMoveLine l " +
           "WHERE l.partner.id = :partnerId AND l.move.id = :moveId " +
           "AND l.account.internalType = 'receivable'")
    BigDecimal sumReceivableCreditForPartnerAndMove(
            @Param("partnerId") Long partnerId,
            @Param("moveId") Long moveId);

    @Query("SELECT COALESCE(SUM(l.debit), 0) FROM AccountMoveLine l " +
           "WHERE l.partner.id = :partnerId AND l.move.id = :moveId " +
           "AND l.account.internalType = 'payable'")
    BigDecimal sumPayableDebitForPartnerAndMove(
            @Param("partnerId") Long partnerId,
            @Param("moveId") Long moveId);

    // ── Snapshot queries ─────────────────────────────────────────────────

    /** Solde créditeur net comptes 701* sur une période → CA comptable */
    @Query("SELECT COALESCE(SUM(l.credit) - SUM(l.debit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.code LIKE '701%' AND l.company.id = :cid " +
           "AND l.move.state = 'posted' AND l.date BETWEEN :from AND :to")
    BigDecimal soldeComptes701(@Param("cid") Long companyId,
                               @Param("from") LocalDate from,
                               @Param("to") LocalDate to);

    /** Débit et crédit des comptes 57* groupés par code+libellé (pour état des caisses : 571, 572...) */
    @Query("SELECT l.account.code, l.account.name, " +
           "COALESCE(SUM(l.debit), 0), COALESCE(SUM(l.credit), 0) " +
           "FROM AccountMoveLine l " +
           "WHERE l.account.code LIKE '57%' AND l.company.id = :cid " +
           "AND l.move.state = 'posted' AND l.date BETWEEN :from AND :to " +
           "GROUP BY l.account.code, l.account.name")
    List<Object[]> soldesCaissesPeriode(@Param("cid") Long companyId,
                                        @Param("from") LocalDate from,
                                        @Param("to") LocalDate to);

    /** Solde initial 57* avant la période (somme depuis le début jusqu'à la veille de :from) */
    @Query("SELECT l.account.code, " +
           "COALESCE(SUM(l.debit), 0), COALESCE(SUM(l.credit), 0) " +
           "FROM AccountMoveLine l " +
           "WHERE l.account.code LIKE '57%' AND l.company.id = :cid " +
           "AND l.move.state = 'posted' AND l.date < :from " +
           "GROUP BY l.account.code")
    List<Object[]> soldesInitiauxCaisses(@Param("cid") Long companyId,
                                         @Param("from") LocalDate from);

    /** Créances: solde débiteur net comptes 411* (clients impayés) */
    @Query("SELECT COALESCE(SUM(l.debit) - SUM(l.credit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.code LIKE '411%' AND l.company.id = :cid " +
           "AND l.move.state = 'posted'")
    BigDecimal soldeCreances(@Param("cid") Long companyId);

    /** Créances sur le mois courant */
    @Query("SELECT COALESCE(SUM(l.debit) - SUM(l.credit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.code LIKE '411%' AND l.company.id = :cid " +
           "AND l.move.state = 'posted' AND l.date BETWEEN :from AND :to")
    BigDecimal soldeCreancesPeriode(@Param("cid") Long companyId,
                                    @Param("from") LocalDate from,
                                    @Param("to") LocalDate to);

    /** Dettes: solde créditeur net comptes 401* (fournisseurs impayés) */
    @Query("SELECT COALESCE(SUM(l.credit) - SUM(l.debit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.code LIKE '401%' AND l.company.id = :cid " +
           "AND l.move.state = 'posted'")
    BigDecimal soldeDettes(@Param("cid") Long companyId);

    /** Mouvement du jour sur les dettes (comptes 401*) */
    @Query("SELECT COALESCE(SUM(l.credit) - SUM(l.debit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.code LIKE '401%' AND l.company.id = :cid " +
           "AND l.move.state = 'posted' AND l.date = :date")
    BigDecimal soldeDettesJour(@Param("cid") Long companyId, @Param("date") LocalDate date);

    /** CA du jour (comptes 701*) */
    @Query("SELECT COALESCE(SUM(l.credit) - SUM(l.debit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.code LIKE '701%' AND l.company.id = :cid " +
           "AND l.move.state = 'posted' AND l.date = :date")
    BigDecimal soldeComptes701Jour(@Param("cid") Long companyId, @Param("date") LocalDate date);

    /** Créances par tiers : solde net débiteur (on nous doit) — clients ET fournisseurs */
    @Query("SELECT l.partner.id, l.partner.name, SUM(l.debit), SUM(l.credit) " +
           "FROM AccountMoveLine l " +
           "WHERE l.company.id = :cid AND l.move.state = 'posted' " +
           "AND l.account.internalType IN ('receivable', 'payable') AND l.partner IS NOT NULL " +
           "GROUP BY l.partner.id, l.partner.name " +
           "HAVING SUM(l.debit) > SUM(l.credit) " +
           "ORDER BY (SUM(l.debit) - SUM(l.credit)) DESC")
    List<Object[]> creancesParTiers(@Param("cid") Long companyId);

    /** Dettes par tiers : solde net créditeur (on leur doit) — clients ET fournisseurs */
    @Query("SELECT l.partner.id, l.partner.name, SUM(l.debit), SUM(l.credit) " +
           "FROM AccountMoveLine l " +
           "WHERE l.company.id = :cid AND l.move.state = 'posted' " +
           "AND l.account.internalType IN ('receivable', 'payable') AND l.partner IS NOT NULL " +
           "GROUP BY l.partner.id, l.partner.name " +
           "HAVING SUM(l.credit) > SUM(l.debit) " +
           "ORDER BY (SUM(l.credit) - SUM(l.debit)) DESC")
    List<Object[]> dettesParTiers(@Param("cid") Long companyId);

    /** Même logique que creancesParTiers/dettesParTiers, restreinte à une période — pour le
     *  snapshot envoyé au Hub (dashboard), qui utilisait jusqu'ici un calcul différent (solde
     *  brut 411/401 non ventilé par tiers, ou somme de montantDu sur les factures) au lieu de
     *  reprendre celui déjà utilisé par l'écran "Suivi Tiers" que l'utilisateur vérifie en local.
     *  Ventiler par tiers avant de sommer (au lieu d'un solde net global) garantit un total
     *  jamais négatif : un partenaire en crédit (avance, trop-perçu) est exclu des créances et
     *  compté dans les dettes, plutôt que de faire baisser le total créances en dessous de zéro. */
    @Query("SELECT l.partner.id, l.partner.name, SUM(l.debit), SUM(l.credit) " +
           "FROM AccountMoveLine l " +
           "WHERE l.company.id = :cid AND l.move.state = 'posted' " +
           "AND l.account.internalType IN ('receivable', 'payable') AND l.partner IS NOT NULL " +
           "AND l.date BETWEEN :from AND :to " +
           "GROUP BY l.partner.id, l.partner.name " +
           "HAVING SUM(l.debit) > SUM(l.credit)")
    List<Object[]> creancesParTiersPeriode(@Param("cid") Long companyId,
                                           @Param("from") LocalDate from, @Param("to") LocalDate to);

    @Query("SELECT l.partner.id, l.partner.name, SUM(l.debit), SUM(l.credit) " +
           "FROM AccountMoveLine l " +
           "WHERE l.company.id = :cid AND l.move.state = 'posted' " +
           "AND l.account.internalType IN ('receivable', 'payable') AND l.partner IS NOT NULL " +
           "AND l.date BETWEEN :from AND :to " +
           "GROUP BY l.partner.id, l.partner.name " +
           "HAVING SUM(l.credit) > SUM(l.debit)")
    List<Object[]> dettesParTiersPeriode(@Param("cid") Long companyId,
                                         @Param("from") LocalDate from, @Param("to") LocalDate to);
}

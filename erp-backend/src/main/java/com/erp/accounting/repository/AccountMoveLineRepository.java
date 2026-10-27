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
        WHERE l.move.id = :moveId
    """)
    List<AccountMoveLine> findByMoveIdWithAnalytic(@Param("moveId") Long moveId);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date BETWEEN :from AND :to " +
           "AND l.move.state = 'posted' " +
           "ORDER BY l.account.code, l.date, l.move.name")
    List<AccountMoveLine> findPostedByCompanyAndDateRange(
            @Param("companyId") Long companyId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to);

    /** Ligne comptable réduite aux champs envoyés au Hub dans le snapshot. */
    interface SnapshotLine {
        Long getId();
        LocalDate getDate();
        String getMoveRef();
        String getAccountCode();
        String getAccountName();
        String getPartnerName();
        String getLibelle();
        String getJournalCode();
        BigDecimal getDebit();
        BigDecimal getCredit();
    }

    /** Mêmes lignes et même ordre que findPostedByCompanyAndDateRange, sans charger d'entités : le
     *  snapshot horaire chargeait toutes les lignes des 60 derniers jours avec leurs écriture,
     *  compte, tiers et journal (OutOfMemoryError mesurée avec 1 Go à ~180 000 lignes). */
    @Query("SELECT l.id AS id, l.date AS date, m.name AS moveRef, a.code AS accountCode, a.name AS accountName, " +
           "p.name AS partnerName, l.name AS libelle, j.code AS journalCode, l.debit AS debit, l.credit AS credit " +
           "FROM AccountMoveLine l JOIN l.move m LEFT JOIN l.account a LEFT JOIN l.partner p LEFT JOIN l.journal j " +
           "WHERE l.company.id = :companyId AND l.date BETWEEN :from AND :to AND m.state = 'posted' " +
           "ORDER BY a.code, l.date, m.name")
    List<SnapshotLine> findSnapshotLines(@Param("companyId") Long companyId,
                                         @Param("from") LocalDate from,
                                         @Param("to") LocalDate to);

    // ── Totaux par compte calculés en base (balances, bilan, compte de résultat, grand livre) ──
    // Chaque ligne : [id du compte, code du compte, somme des débits, somme des crédits], par code
    // croissant. Mêmes lignes que les requêtes find* correspondantes (écritures validées, ligne
    // rattachée à un compte), sans charger une seule ligne en mémoire.

    @Query("SELECT a.id, a.code, COALESCE(SUM(l.debit), 0), COALESCE(SUM(l.credit), 0) " +
           "FROM AccountMoveLine l JOIN l.account a JOIN l.move m " +
           "WHERE l.company.id = :companyId AND l.date BETWEEN :from AND :to AND m.state = 'posted' " +
           "GROUP BY a.id, a.code ORDER BY a.code, a.id")
    List<Object[]> sumPostedByAccountInPeriod(@Param("companyId") Long companyId,
                                              @Param("from") LocalDate from,
                                              @Param("to") LocalDate to);

    @Query("SELECT a.id, a.code, COALESCE(SUM(l.debit), 0), COALESCE(SUM(l.credit), 0) " +
           "FROM AccountMoveLine l JOIN l.account a JOIN l.move m " +
           "WHERE l.company.id = :companyId AND l.date BETWEEN :from AND :to AND m.state = 'posted' " +
           "AND l.journal.id IN :journalIds " +
           "GROUP BY a.id, a.code ORDER BY a.code, a.id")
    List<Object[]> sumPostedByAccountInPeriodAndJournals(@Param("companyId") Long companyId,
                                                         @Param("from") LocalDate from,
                                                         @Param("to") LocalDate to,
                                                         @Param("journalIds") List<Long> journalIds);

    @Query("SELECT a.id, a.code, COALESCE(SUM(l.debit), 0), COALESCE(SUM(l.credit), 0) " +
           "FROM AccountMoveLine l JOIN l.account a JOIN l.move m " +
           "WHERE l.company.id = :companyId AND l.date < :date AND m.state = 'posted' " +
           "GROUP BY a.id, a.code ORDER BY a.code, a.id")
    List<Object[]> sumPostedByAccountBefore(@Param("companyId") Long companyId,
                                            @Param("date") LocalDate date);

    @Query("SELECT a.id, a.code, COALESCE(SUM(l.debit), 0), COALESCE(SUM(l.credit), 0) " +
           "FROM AccountMoveLine l JOIN l.account a JOIN l.move m " +
           "WHERE l.company.id = :companyId AND l.date < :date AND m.state = 'posted' " +
           "AND l.journal.id IN :journalIds " +
           "GROUP BY a.id, a.code ORDER BY a.code, a.id")
    List<Object[]> sumPostedByAccountBeforeAndJournals(@Param("companyId") Long companyId,
                                                       @Param("date") LocalDate date,
                                                       @Param("journalIds") List<Long> journalIds);

    /** Totaux par compte jusqu'à une date INCLUSIVE, écritures non validées comprises si demandé
     *  (bilan OHADA). */
    @Query("SELECT a.id, a.code, COALESCE(SUM(l.debit), 0), COALESCE(SUM(l.credit), 0) " +
           "FROM AccountMoveLine l JOIN l.account a JOIN l.move m " +
           "WHERE l.company.id = :companyId AND l.date <= :date " +
           "AND (:includeUnposted = true OR m.state = 'posted') " +
           "GROUP BY a.id, a.code ORDER BY a.code, a.id")
    List<Object[]> sumByAccountUpToDate(@Param("companyId") Long companyId,
                                        @Param("date") LocalDate date,
                                        @Param("includeUnposted") boolean includeUnposted);

    /** Totaux par compte sur une période, écritures non validées comprises si demandé (résultat
     *  de l'exercice au bilan OHADA). */
    @Query("SELECT a.id, a.code, COALESCE(SUM(l.debit), 0), COALESCE(SUM(l.credit), 0) " +
           "FROM AccountMoveLine l JOIN l.account a JOIN l.move m " +
           "WHERE l.company.id = :companyId AND l.date BETWEEN :from AND :to " +
           "AND (:includeUnposted = true OR m.state = 'posted') " +
           "GROUP BY a.id, a.code ORDER BY a.code, a.id")
    List<Object[]> sumByAccountInPeriod(@Param("companyId") Long companyId,
                                        @Param("from") LocalDate from,
                                        @Param("to") LocalDate to,
                                        @Param("includeUnposted") boolean includeUnposted);

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
           "ORDER BY l.partner.name, l.account.code, l.date, l.id")
    List<AccountMoveLine> findTiersLinesInPeriod(
            @Param("companyId") Long companyId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to);

    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND l.date < :date " +
           "AND l.move.state = 'posted' " +
           "AND l.account.internalType IN ('receivable', 'payable') " +
           "ORDER BY l.partner.name, l.account.code, l.date, l.id")
    List<AccountMoveLine> findTiersLinesBeforeDate(
            @Param("companyId") Long companyId,
            @Param("date") LocalDate date);

    /** Déréférence account, move, journal et partner (Grand Livre). Tri complété par l.id : sans lui,
     *  les lignes d'une même pièce changeaient de place d'une impression à l'autre, et le solde
     *  progressif affiché sur chaque ligne avec (même chose pour les requêtes des tiers ci-dessus). */
    @Query("SELECT l FROM AccountMoveLine l " +
           "WHERE l.company.id = :companyId " +
           "AND (:accountIds IS NULL OR l.account.id IN :accountIds) " +
           "AND l.date BETWEEN :from AND :to " +
           "AND l.move.state = 'posted' " +
           "ORDER BY l.account.code, l.date, l.move.name, l.id")
    List<AccountMoveLine> findForGrandLivre(
            @Param("companyId") Long companyId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to,
            @Param("accountIds") List<Long> accountIds);

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

    /** Solde du seul compte client (receivable) d'un partenaire : positif = il nous doit,
     *  négatif = on lui doit. Contrairement à computePartnerBalance, n'inclut pas le payable. */
    @Query("SELECT COALESCE(SUM(l.debit - l.credit), 0) FROM AccountMoveLine l " +
           "WHERE l.partner.id = :partnerId " +
           "AND l.company.id = :companyId " +
           "AND l.move.state = 'posted' " +
           "AND l.account.internalType = 'receivable'")
    BigDecimal computePartnerReceivableBalance(@Param("partnerId") Long partnerId,
                                               @Param("companyId") Long companyId);

    /** Total des versements libres d'un client (même périmètre que findPostedReceivableCreditLinesForPartner,
     *  hors écritures servant de paiement direct d'une facture) — ce sont eux qui alimentent le lettrage. */
    @Query("""
        SELECT COALESCE(SUM(l.credit), 0) FROM AccountMoveLine l
        WHERE l.partner.id = :partnerId
        AND l.company.id = :companyId
        AND l.move.state = 'posted'
        AND l.account.internalType = 'receivable'
        AND l.credit > 0
        AND l.move.journal.type IN ('bank', 'cash')
        AND l.move.id NOT IN (SELECT p.accountMove.id FROM InvoicePayment p
                              WHERE p.invoice.partner.id = :partnerId AND p.accountMove IS NOT NULL)
    """)
    BigDecimal sumFreeReceivableVersementsForPartner(@Param("partnerId") Long partnerId,
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
           "WHERE l.account.code IN ('701100', '443100', '441200') AND l.company.id = :cid " +
           "AND l.move.state = 'posted' AND l.date BETWEEN :from AND :to")
    BigDecimal soldeComptesCA(@Param("cid") Long companyId,
                               @Param("from") LocalDate from,
                               @Param("to") LocalDate to);

    /** CA HT : solde créditeur net du seul compte 701100. */
    @Query("SELECT COALESCE(SUM(l.credit) - SUM(l.debit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.code = '701100' AND l.company.id = :cid " +
           "AND l.move.state = 'posted' AND l.date BETWEEN :from AND :to")
    BigDecimal soldeCompteCAHT(@Param("cid") Long companyId,
                                @Param("from") LocalDate from,
                                @Param("to") LocalDate to);

    /** Frais d'enlèvement : solde créditeur net du compte 701500 (crédit à la vente − débit des ristournes). */
    @Query("SELECT COALESCE(SUM(l.credit) - SUM(l.debit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.code IN ('701500', '7015') AND l.company.id = :cid " +
           "AND l.move.state = 'posted' AND l.date BETWEEN :from AND :to")
    BigDecimal soldeCompteEnlevement(@Param("cid") Long companyId,
                                     @Param("from") LocalDate from,
                                     @Param("to") LocalDate to);

    /** CA HT du jour : solde créditeur net du seul compte 701100. */
    @Query("SELECT COALESCE(SUM(l.credit) - SUM(l.debit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.code = '701100' AND l.company.id = :cid " +
           "AND l.move.state = 'posted' AND l.date = :date")
    BigDecimal soldeCompteCAHTJour(@Param("cid") Long companyId, @Param("date") LocalDate date);

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

    /** CA du jour (comptes 701*) */
    @Query("SELECT COALESCE(SUM(l.credit) - SUM(l.debit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.code IN ('701100', '443100', '441200') AND l.company.id = :cid " +
           "AND l.move.state = 'posted' AND l.date = :date")
    BigDecimal soldeComptesCAJour(@Param("cid") Long companyId, @Param("date") LocalDate date);

    /** Achats : solde débiteur net des comptes 601100 (marchandises) + 445200 (TVA déductible) + 442100 (PSA achats). */
    @Query("SELECT COALESCE(SUM(l.debit) - SUM(l.credit), 0) FROM AccountMoveLine l " +
           "WHERE l.account.code IN ('601100', '445200', '442100') AND l.company.id = :cid " +
           "AND l.move.state = 'posted' AND l.date BETWEEN :from AND :to")
    BigDecimal soldeComptesAchats(@Param("cid") Long companyId,
                                  @Param("from") LocalDate from,
                                  @Param("to") LocalDate to);

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

    /** Solde des seuls comptes fournisseurs (internalType 'payable' : 4011, 401100…) par tiers,
     *  pour la carte Dettes du Hub (Boissons du Cameroun / Guinness). */
    @Query("SELECT l.partner.id, l.partner.name, SUM(l.debit), SUM(l.credit) " +
           "FROM AccountMoveLine l " +
           "WHERE l.company.id = :cid AND l.move.state = 'posted' " +
           "AND l.account.internalType = 'payable' AND l.partner IS NOT NULL " +
           "GROUP BY l.partner.id, l.partner.name")
    List<Object[]> soldesComptesFournisseursParTiers(@Param("cid") Long companyId);

}

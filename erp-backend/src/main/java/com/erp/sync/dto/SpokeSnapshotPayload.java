package com.erp.sync.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

/**
 * Snapshot complet de l'état du spoke — envoyé toutes les heures vers le Hub.
 * Reproduit les données nécessaires au dashboard centralisation_distributeurs.
 */
@Data @Builder
public class SpokeSnapshotPayload {

    String        spokeId;
    String        spokeName;
    LocalDateTime snapshotAt;

    // ── CA (Chiffre d'Affaires) ────────────────────────────────────────────
    /** Solde créditeur net comptes 701* depuis le 1er janvier */
    BigDecimal caComptesTotal;
    /** Idem mais uniquement les mouvements du mois courant */
    BigDecimal caComptesMoisCourant;
    /** CA calculé depuis les factures ventes postées (total) */
    BigDecimal caVentesTotal;
    /** CA factures ventes du jour */
    BigDecimal caVentesJour;
    /** CA factures ventes d'hier */
    BigDecimal caVentesHier;
    /** CA factures ventes du mois courant */
    BigDecimal caVentesMoisCourant;
    /** CA factures ventes du mois précédent */
    BigDecimal caVentesMoisDernier;
    /** Évolution CA jour vs hier (%) */
    BigDecimal evolutionCaJour;
    /** Évolution CA mois vs mois dernier (%) */
    BigDecimal evolutionCaMois;

    // ── Achats ────────────────────────────────────────────────────────────
    BigDecimal achatsTotal;
    BigDecimal achatsMoisCourant;
    long       countFacturesAchats;

    // ── Créances (factures clients impayées) ──────────────────────────────
    BigDecimal creancesTotal;
    BigDecimal creancesJour;
    BigDecimal creancesMois;

    // ── Dettes (factures fournisseurs impayées) ───────────────────────────
    BigDecimal dettesTotal;
    BigDecimal dettesJour;
    BigDecimal dettesMois;

    // ── Ristournes (RemisePaiement typeRemise='brasserie') ────────────────
    BigDecimal ristournesTotalTotal;
    BigDecimal ristournesTotalMois;
    BigDecimal ristournesTotalAnnee;
    BigDecimal ristournesPayeesTotal;
    BigDecimal ristournesPayeesMois;
    BigDecimal ristournesPayeesAnnee;
    BigDecimal ristournesNonPayeesTotal;
    BigDecimal ristournesNonPayeesMois;
    BigDecimal ristournesNonPayeesAnnee;
    long       countRistournes;

    // Ristournes — 2 catégories dashboard : collecte (trimestre en cours) / paiement (trimestre passé)
    BigDecimal ristournesCollecteMoisCourant;
    BigDecimal ristournesCollecteMoisPasse;
    BigDecimal ristournesCollecteJournee;
    BigDecimal ristournesCollecteTrimestre;
    BigDecimal ristournesPaiementTotal;
    BigDecimal ristournesPaiementPaye;
    BigDecimal ristournesPaiementResteAPayer;
    BigDecimal ristournesPaiementJournalier; // payé aujourd'hui, indépendamment du trimestre d'origine

    // ── Remises (RemisePaiement autres typeRemise) ────────────────────────
    BigDecimal remisesTotalTotal;
    BigDecimal remisesTotalMois;
    BigDecimal remisesTotalAnnee;
    BigDecimal remisesPayeesTotal;
    BigDecimal remisesPayeesMois;
    BigDecimal remisesPayeesAnnee;
    BigDecimal remisesNonPayeesTotal;
    BigDecimal remisesNonPayeesMois;
    BigDecimal remisesNonPayeesAnnee;
    long       countRemises;

    // Remises — mêmes 2 catégories que les ristournes
    BigDecimal remisesCollecteMoisCourant;
    BigDecimal remisesCollecteMoisPasse;
    BigDecimal remisesCollecteJournee;
    BigDecimal remisesCollecteTrimestre;
    BigDecimal remisesPaiementTotal;
    BigDecimal remisesPaiementPaye;
    BigDecimal remisesPaiementResteAPayer;
    BigDecimal remisesPaiementJournalier;

    // ── Frais d'enlèvements ───────────────────────────────────────────────
    BigDecimal fraisEnlevementsTotal;       // Coûts d'enlèvements (charge interne, achats)
    BigDecimal fraisEnlevementsMois;
    BigDecimal fraisEnlevementsVentesTotal; // Frais d'enlèvements facturés aux clients (ventes)
    BigDecimal fraisEnlevementsVentesMois;
    long       countEnlevements;

    // Frais d'enlèvements — collecté/coût pondérés par quantité, calcul unique et cohérent
    // (modèle Enlevement uniquement — jamais calculé depuis les écritures comptables), sur 2
    // fenêtres : depuis le 1er janvier (+ mois en cours) et trimestre en cours.
    BigDecimal fraisEnlevementsAnneeCollecte;
    BigDecimal fraisEnlevementsAnneeCout;
    BigDecimal fraisEnlevementsAnneeNet;
    BigDecimal fraisEnlevementsMoisCollecte;
    BigDecimal fraisEnlevementsMoisCout;
    BigDecimal fraisEnlevementsTrimestreCollecte;
    BigDecimal fraisEnlevementsTrimestreCout;
    BigDecimal fraisEnlevementsTrimestreNet;

    // ── Caisses (comptes 571*) — vue comptable ────────────────────────────
    BigDecimal caissesTotalSolde;    // Solde net total toutes caisses
    BigDecimal caissesTotalEntrees;  // Total débit période
    BigDecimal caissesTotalSorties;  // Total crédit période
    List<CaisseItem> caisses;        // Détail par compte 57x

    // ── Caisses (entités réelles) — vue métier ────────────────────────────
    /** Soldes par caisse métier (nom, code, journal, solde actuel) */
    List<CaisseSnapshot> caissesActuelles;

    // ── Stock ─────────────────────────────────────────────────────────────
    BigDecimal valeurStockProduits;   // Produits (hors emballages)
    BigDecimal valeurStockEmballages; // Emballages (codes CB24M, CB12M, etc.)
    BigDecimal valeurStockTotal;      // Total
    long       totalReferences;
    List<StockItem> topStock;

    // ── Marges brutes (calculées depuis stats ventes) ─────────────────────
    BigDecimal margeVentesTotal;   // Marge brute HT depuis le 1er janvier
    BigDecimal margeVentesJour;    // Marge brute HT du jour
    BigDecimal margeVentesMois;    // Marge brute HT mois courant
    BigDecimal totalCoutVentes;    // Coût total ventes (prix de revient × qté) YTD

    // ── Statistiques ──────────────────────────────────────────────────────
    long nbFacturesJour;
    long nbFacturesMois;
    long nbClients;
    long nbSpokes;     // nb de sociétés dans ce spoke (multi-company)

    // ── Référentiels (synchronisés toutes les heures avec le snapshot) ────
    /** Tous les tiers actifs (clients + fournisseurs) */
    List<PartnerItem> partners;
    /** Tous les articles actifs avec quantité en stock */
    List<ProductItem> products;
    /** Plan comptable complet (comptes non dépréciés) */
    List<AccountItem> accounts;
    /** Tous les paiements de ristournes */
    List<RistournePaiementItem> ristournePaiements;
    /** Tous les paiements de remises fournisseurs */
    List<RemisePaiementItem> remisePaiements;
    /** Factures de vente (postées, 2 dernières années — sans limite sur un snapshot forcé) */
    List<SaleInvoiceItem> saleInvoices;
    /** Ventes du jour ventilées par entrepôt — pour le dashboard hub (distributeurs) */
    List<WarehouseDailySalesItem> ventesJourParEntrepot;
    /** Factures d'achat (postées, 2 dernières années — sans limite sur un snapshot forcé) */
    List<PurchaseInvoiceItem> purchaseInvoices;
    /** Lignes comptables (année en cours) — pour balance/grand livre */
    List<AccountMoveLineItem> accountMoveLines;
    /** Bons de commande vente (tout sauf brouillon) — aucun autre canal de rattrapage n'existe
     *  pour eux : contrairement aux factures, ils ne remontent qu'une fois via SALE_ORDER_CONFIRMED,
     *  jamais republiés si cet événement échoue. */
    List<SaleOrderItem> salesOrders;
    /** Bons de commande achat (tout sauf brouillon) — idem, seul filet de sécurité pour
     *  PURCHASE_ORDER_RECEIVED. */
    List<PurchaseOrderItem> purchaseOrders;

    // ── Inner classes ─────────────────────────────────────────────────────

    @Data @Builder
    public static class CaisseItem {
        String     accountCode;
        String     accountName;
        BigDecimal periodDebit;    // Entrées (mouvements débit sur la période)
        BigDecimal periodCredit;   // Sorties (mouvements crédit sur la période)
        BigDecimal initialBalance; // Solde avant période
        BigDecimal finalBalance;   // Solde net final (initial + débit - crédit)
    }

    /** Vue métier : une entité Caisse avec son solde calculé en temps réel */
    @Data @Builder
    public static class CaisseSnapshot {
        Long       caisseId;
        String     caisseName;
        String     caisseCode;
        String     journalName;
        String     responsableName;
        String     status;           // OUVERTE / CLOTUREE
        BigDecimal soldeActuel;      // Solde courant calculé par compte principal du journal
        LocalDateTime snapshotAt;
    }

    @Data @Builder
    public static class StockItem {
        String     productCode;
        String     productName;
        String     category;       // "PRODUIT" ou "EMBALLAGE"
        BigDecimal quantity;
        BigDecimal standardPrice;
        BigDecimal valeurStock;
    }

    @Data @Builder
    public static class PartnerItem {
        Long   id;
        String ref;
        String name;
        String type;        // customer / supplier / both
        String phone;
        String email;
        java.math.BigDecimal tauxRistourne;
        java.math.BigDecimal tauxPrecompte;
    }

    @Data @Builder
    public static class ProductItem {
        Long       id;
        String     code;
        String     name;
        String     uomName;
        BigDecimal standardPrice;
        BigDecimal salePrice;
        String     type;
        BigDecimal quantiteEnStock;
        BigDecimal valeurStock;
    }

    @Data @Builder
    public static class AccountItem {
        Long   id;
        String code;
        String name;
        String accountType;  // asset / liability / equity / income / expense / other
        String internalType; // receivable / payable / liquidity / other
    }

    @Data @Builder
    public static class RistournePaiementItem {
        Long       id;
        String     name;
        String     partnerName;
        String     typeRistourne;
        BigDecimal totalAmount;
        java.time.LocalDate date;
        String     state;
    }

    @Data @Builder
    public static class RemisePaiementItem {
        Long       id;
        String     name;
        String     partnerName;
        String     typeRemise;
        BigDecimal totalAmount;
        java.time.LocalDate date;
        String     state;
    }

    @Data @Builder
    public static class SaleInvoiceItem {
        Long       id;
        String     name;
        java.time.LocalDate date;
        String     state;
        String     type;          // "invoice" ou "credit_note"
        String     partnerName;
        BigDecimal totalHT;
        BigDecimal totalTTC;
        BigDecimal montantPaye;
        BigDecimal montantDu;
        BigDecimal totalRistourne;
        BigDecimal fraisEnlevementTTC;
        BigDecimal netAPayer;
        String     journalName;
        String     warehouseName;
        String     salesOrderName;
    }

    @Data @Builder
    public static class WarehouseSaleLine {
        String     productCode;
        String     productName;
        BigDecimal qty;
        BigDecimal montantHT;
    }

    @Data @Builder
    public static class WarehouseDailySalesItem {
        String     warehouseName;
        BigDecimal qty;
        BigDecimal montantHT;
        BigDecimal montantTTC;
        List<WarehouseSaleLine> lines;
    }

    @Data @Builder
    public static class PurchaseInvoiceItem {
        Long       id;
        String     name;
        java.time.LocalDate date;
        String     state;
        String     type;          // "invoice" ou "credit_note"
        String     partnerName;
        BigDecimal totalHT;
        BigDecimal totalTTC;
        BigDecimal montantPaye;
        BigDecimal montantDu;
        String     journalName;
        String     purchaseOrderName;
    }

    @Data @Builder
    public static class SaleOrderItem {
        Long       id;
        String     name;
        java.time.LocalDate date;
        String     state;
        String     partnerName;
        BigDecimal totalTTC;
    }

    @Data @Builder
    public static class PurchaseOrderItem {
        Long       id;
        String     name;
        java.time.LocalDate date;
        String     state;
        String     partnerName;
        BigDecimal totalTTC;
    }

    @Data @Builder
    public static class AccountMoveLineItem {
        Long       id;
        java.time.LocalDate date;
        String     moveRef;       // nom de l'écriture (JV-001, etc.)
        String     accountCode;
        String     accountName;
        String     partnerName;
        String     libelle;       // label de la ligne
        String     journalCode;
        BigDecimal debit;
        BigDecimal credit;
    }
}

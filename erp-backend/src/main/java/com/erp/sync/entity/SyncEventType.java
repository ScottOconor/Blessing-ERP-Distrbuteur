package com.erp.sync.entity;

public enum SyncEventType {

    // ── Opérations de premier niveau (déclenchées explicitement) ──────────
    SALE_INVOICE_POSTED,
    SALE_INVOICE_CANCELLED,
    SALE_PAYMENT_CREATED,
    SALE_PAYMENT_REVERSED,

    PURCHASE_INVOICE_POSTED,
    PURCHASE_INVOICE_CANCELLED,
    PURCHASE_PAYMENT_CREATED,
    PURCHASE_PAYMENT_REVERSED,

    ACCOUNT_MOVE_POSTED,
    ACCOUNT_MOVE_CANCELLED,
    ACCOUNT_MOVE_REVERSED,

    STOCK_MOVE_DONE,

    // ── Opérations générées automatiquement (cross-module) ────────────────
    /** Écriture comptable de facturation client (Dr 411 / Cr 701/TVA) */
    ACCOUNT_MOVE_FROM_SALE,

    /** Écriture comptable de paiement client */
    ACCOUNT_MOVE_FROM_SALE_PAYMENT,

    /** Écriture de ristourne (Dr 419800 / Cr 7019) */
    ACCOUNT_MOVE_RISTOURNE,

    /** Bon de livraison généré lors d'une facture vente */
    STOCK_PICKING_FROM_SALE,

    /** Écriture comptable de facturation fournisseur (Dr 601 / Cr 401) */
    ACCOUNT_MOVE_FROM_PURCHASE,

    /** Écriture comptable de paiement fournisseur */
    ACCOUNT_MOVE_FROM_PURCHASE_PAYMENT,

    /** Bon de réception ou retour généré lors d'une facture achat */
    STOCK_PICKING_FROM_PURCHASE,

    /** Écriture de variation de stock (Dr 6031 / Cr 311 ou inverse) */
    ACCOUNT_MOVE_STOCK_VALUATION,

    // ── Stock ─────────────────────────────────────────────────────────────
    /** Transfert de stock validé (livraison, transfert interne) */
    STOCK_PICKING_VALIDATED,
    /** Bordereau de réception validé */
    STOCK_BORDEREAU_VALIDATED,
    /** Sortie de stock pour casse/avarie (Trous & Casses) */
    STOCK_LOSS_CREATED,

    // ── Achats ────────────────────────────────────────────────────────────
    /** Bon de commande achat réceptionné */
    PURCHASE_ORDER_RECEIVED,

    // ── Commercial / eLeader ──────────────────────────────────────────────
    /** Enlèvement enregistré */
    ENLEVEMENT_SAVED,
    /** Import PDF eLeader réussi */
    ELEADER_IMPORT_DONE,

    // ── Caisses ───────────────────────────────────────────────────────────
    /** Entrée de caisse enregistrée */
    CAISSE_OPERATION_ENTREE,
    /** Sortie de caisse enregistrée */
    CAISSE_OPERATION_SORTIE,
    /** Clôture journalière de caisse */
    CAISSE_CLOTURE,

    /** Snapshot complet de l'état du spoke (envoyé toutes les heures) */
    FULL_SNAPSHOT,

    // ── Référentiels (synchronisés dans le FULL_SNAPSHOT + événements unitaires) ──
    /** Paiement de ristourne validé (confirmé → done) */
    RISTOURNE_PAIEMENT_POSTED,
    /** Paiement de ristourne annulé */
    RISTOURNE_PAIEMENT_CANCELLED,
    /** Paiement de remise fournisseur validé */
    REMISE_PAIEMENT_POSTED,
    /** Paiement de remise fournisseur annulé */
    REMISE_PAIEMENT_CANCELLED,
    /** Commande vente confirmée */
    SALE_ORDER_CONFIRMED,
    /** Tiers (client ou fournisseur) créé ou modifié */
    PARTNER_UPSERT,
    /** Article créé ou modifié */
    PRODUCT_UPSERT,
    /** Compte du plan comptable créé ou modifié */
    ACCOUNT_UPSERT
}

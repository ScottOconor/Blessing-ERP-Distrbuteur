package com.erp.config.permission;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.util.AntPathMatcher;

import java.util.List;

@Service
public class PermissionService {

    private static final AntPathMatcher MATCHER = new AntPathMatcher();

    private static final List<PermissionRule> RULES = List.of(
        // ── VENTES ────────────────────────────────────────────────────────
        // SalesStatsController n'expose que du POST (stats-ventes/etat-commercial/rapport-consolide).
        new PermissionRule("POST",   "/api/sales/stats/**",          "VENTES","COMMANDES","VIEW"),
        new PermissionRule("GET",    "/api/sales/orders",            "VENTES","COMMANDES","VIEW"),
        new PermissionRule("GET",    "/api/sales/orders/**",         "VENTES","COMMANDES","VIEW"),
        new PermissionRule("POST",   "/api/sales/orders",            "VENTES","COMMANDES","CREATE"),
        new PermissionRule("PUT",    "/api/sales/orders/**",         "VENTES","COMMANDES","EDIT"),
        new PermissionRule("POST",   "/api/sales/orders/**",         "VENTES","COMMANDES","EDIT"),
        new PermissionRule("DELETE", "/api/sales/orders/**",         "VENTES","COMMANDES","DELETE"),
        new PermissionRule("GET",    "/api/sales/invoices",          "VENTES","FACTURES","VIEW"),
        new PermissionRule("GET",    "/api/sales/invoices/**",       "VENTES","FACTURES","VIEW"),
        new PermissionRule("POST",   "/api/sales/invoices",          "VENTES","FACTURES","CREATE"),
        // Annulation d'une facture : droit dédié CANCEL (règle spécifique AVANT la règle
        // générique ci-dessous). Sans ce droit, l'utilisateur doit passer par l'extourne.
        new PermissionRule("POST",   "/api/sales/invoices/*/cancel", "VENTES","FACTURES","CANCEL"),
        new PermissionRule("PUT",    "/api/sales/invoices/**",       "VENTES","FACTURES","EDIT"),
        new PermissionRule("PATCH",  "/api/sales/invoices/**",       "VENTES","FACTURES","EDIT"),
        new PermissionRule("POST",   "/api/sales/invoices/**",       "VENTES","FACTURES","EDIT"),
        new PermissionRule("GET",    "/api/sales/avoirs",            "VENTES","AVOIRS","VIEW"),
        new PermissionRule("GET",    "/api/sales/avoirs/**",         "VENTES","AVOIRS","VIEW"),
        new PermissionRule("POST",   "/api/sales/avoirs",            "VENTES","AVOIRS","CREATE"),
        new PermissionRule("GET",    "/api/sales/partners/**",       "VENTES","CLIENTS","VIEW"),
        new PermissionRule("GET",    "/api/sales/client-prices",     "VENTES","CLIENTS","VIEW"),
        new PermissionRule("GET",    "/api/sales/client-prices/**",  "VENTES","CLIENTS","VIEW"),
        new PermissionRule("POST",   "/api/sales/client-prices",     "VENTES","CLIENTS","EDIT"),
        new PermissionRule("DELETE", "/api/sales/client-prices/**",  "VENTES","CLIENTS","DELETE"),
        new PermissionRule("GET",    "/api/sales/clients",           "VENTES","CLIENTS","VIEW"),
        new PermissionRule("GET",    "/api/sales/clients/**",        "VENTES","CLIENTS","VIEW"),
        new PermissionRule("POST",   "/api/sales/clients",           "VENTES","CLIENTS","CREATE"),
        new PermissionRule("PUT",    "/api/sales/clients/**",        "VENTES","CLIENTS","EDIT"),
        new PermissionRule("DELETE", "/api/sales/clients/**",        "VENTES","CLIENTS","DELETE"),
        new PermissionRule("GET",    "/api/sales/sellers",           "VENTES","VENDEURS","VIEW"),
        new PermissionRule("GET",    "/api/sales/sellers/**",        "VENTES","VENDEURS","VIEW"),
        new PermissionRule("POST",   "/api/sales/sellers",           "VENTES","VENDEURS","CREATE"),
        new PermissionRule("PUT",    "/api/sales/sellers/**",        "VENTES","VENDEURS","EDIT"),
        new PermissionRule("DELETE", "/api/sales/sellers/**",        "VENTES","VENDEURS","DELETE"),
        new PermissionRule("GET",    "/api/sales/payments",          "VENTES","PAIEMENTS","VIEW"),
        new PermissionRule("GET",    "/api/sales/payments/**",       "VENTES","PAIEMENTS","VIEW"),
        new PermissionRule("POST",   "/api/sales/payments",          "VENTES","PAIEMENTS","CREATE"),
        new PermissionRule("DELETE", "/api/sales/payments/**",       "VENTES","PAIEMENTS","DELETE"),
        // DELETE /invoices/reconciliations/{id} — oubliée de la couverture initiale.
        new PermissionRule("DELETE", "/api/sales/invoices/**",       "VENTES","FACTURES","DELETE"),
        // Maintenance stock (bouton « Libérer le stock ») : mute le stock globalement →
        // réservé aux droits d'édition des mouvements de stock (les privilégiés bypassent).
        new PermissionRule("POST",   "/api/sales/fix-reservations",  "STOCK","MOUVEMENTS","EDIT"),
        new PermissionRule("POST",   "/api/sales/release-all-reservations", "STOCK","MOUVEMENTS","EDIT"),

        // ── ACHATS ────────────────────────────────────────────────────────
        new PermissionRule("POST",   "/api/purchases/stats/**",      "ACHATS","COMMANDES","VIEW"),
        new PermissionRule("GET",    "/api/purchases/suppliers/**",  "ACHATS","COMMANDES","VIEW"),
        new PermissionRule("POST",   "/api/purchases/suppliers/**",  "ACHATS","COMMANDES","EDIT"),
        new PermissionRule("DELETE", "/api/purchases/suppliers/**",  "ACHATS","COMMANDES","EDIT"),
        new PermissionRule("GET",    "/api/purchases/orders",        "ACHATS","COMMANDES","VIEW"),
        new PermissionRule("GET",    "/api/purchases/orders/**",     "ACHATS","COMMANDES","VIEW"),
        new PermissionRule("POST",   "/api/purchases/orders",        "ACHATS","COMMANDES","CREATE"),
        new PermissionRule("PUT",    "/api/purchases/orders/**",     "ACHATS","COMMANDES","EDIT"),
        new PermissionRule("POST",   "/api/purchases/orders/**",     "ACHATS","COMMANDES","EDIT"),
        new PermissionRule("DELETE", "/api/purchases/orders/**",     "ACHATS","COMMANDES","DELETE"),
        new PermissionRule("GET",    "/api/purchases/invoices",      "ACHATS","FACTURES","VIEW"),
        new PermissionRule("GET",    "/api/purchases/invoices/**",   "ACHATS","FACTURES","VIEW"),
        new PermissionRule("POST",   "/api/purchases/invoices",      "ACHATS","FACTURES","CREATE"),
        // Annulation d'une facture d'achat : droit dédié CANCEL (avant la règle générique).
        new PermissionRule("POST",   "/api/purchases/invoices/*/cancel", "ACHATS","FACTURES","CANCEL"),
        new PermissionRule("PUT",    "/api/purchases/invoices/**",   "ACHATS","FACTURES","EDIT"),
        new PermissionRule("PATCH",  "/api/purchases/invoices/**",   "ACHATS","FACTURES","EDIT"),
        new PermissionRule("POST",   "/api/purchases/invoices/**",   "ACHATS","FACTURES","EDIT"),
        new PermissionRule("GET",    "/api/purchases/avoirs",        "ACHATS","AVOIRS","VIEW"),
        new PermissionRule("GET",    "/api/purchases/avoirs/**",     "ACHATS","AVOIRS","VIEW"),
        new PermissionRule("POST",   "/api/purchases/avoirs",        "ACHATS","AVOIRS","CREATE"),
        new PermissionRule("GET",    "/api/purchases/payments",      "ACHATS","PAIEMENTS","VIEW"),
        new PermissionRule("GET",    "/api/purchases/payments/**",   "ACHATS","PAIEMENTS","VIEW"),
        new PermissionRule("POST",   "/api/purchases/payments",      "ACHATS","PAIEMENTS","CREATE"),
        new PermissionRule("DELETE", "/api/purchases/payments/**",   "ACHATS","PAIEMENTS","DELETE"),
        // DELETE /invoices/reconciliations/{id} — même bug que côté sales.
        new PermissionRule("DELETE", "/api/purchases/invoices/**",   "ACHATS","FACTURES","DELETE"),

        // ── STOCK ─────────────────────────────────────────────────────────
        new PermissionRule("GET",    "/api/stock/products",          "STOCK","PRODUITS","VIEW"),
        new PermissionRule("GET",    "/api/stock/products/**",       "STOCK","PRODUITS","VIEW"),
        new PermissionRule("POST",   "/api/stock/products",          "STOCK","PRODUITS","CREATE"),
        new PermissionRule("POST",   "/api/stock/products/**",       "STOCK","PRODUITS","EDIT"),
        new PermissionRule("PUT",    "/api/stock/products/**",       "STOCK","PRODUITS","EDIT"),
        new PermissionRule("DELETE", "/api/stock/products/**",       "STOCK","PRODUITS","DELETE"),
        new PermissionRule("GET",    "/api/stock/categories",        "STOCK","PRODUITS","VIEW"),
        new PermissionRule("GET",    "/api/stock/categories/**",     "STOCK","PRODUITS","VIEW"),
        new PermissionRule("POST",   "/api/stock/categories",        "STOCK","PRODUITS","CREATE"),
        new PermissionRule("PUT",    "/api/stock/categories/**",     "STOCK","PRODUITS","EDIT"),
        new PermissionRule("DELETE", "/api/stock/categories/**",     "STOCK","PRODUITS","DELETE"),
        // Unités de mesure : rattachées au catalogue (absentes jusqu'ici → refus systématique
        // en fail-closed, qui bloquait tout l'écran Articles, chargé d'un bloc avec elles)
        new PermissionRule("GET",    "/api/stock/units-of-measure",    "STOCK","PRODUITS","VIEW"),
        new PermissionRule("POST",   "/api/stock/units-of-measure",    "STOCK","PRODUITS","CREATE"),
        new PermissionRule("PUT",    "/api/stock/units-of-measure/**", "STOCK","PRODUITS","EDIT"),
        new PermissionRule("DELETE", "/api/stock/units-of-measure/**", "STOCK","PRODUITS","DELETE"),
        new PermissionRule("GET",    "/api/stock/dashboard",         "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("GET",    "/api/stock/picking-types",     "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("GET",    "/api/stock/warehouses",        "STOCK","PRODUITS|MOUVEMENTS|INVENTAIRE","VIEW"),
        new PermissionRule("GET",    "/api/stock/warehouses/**",     "STOCK","PRODUITS|MOUVEMENTS|INVENTAIRE","VIEW"),
        new PermissionRule("POST",   "/api/stock/warehouses",        "STOCK","MOUVEMENTS","EDIT"),
        new PermissionRule("PUT",    "/api/stock/warehouses/**",     "STOCK","MOUVEMENTS","EDIT"),
        new PermissionRule("DELETE", "/api/stock/warehouses/**",     "STOCK","MOUVEMENTS","EDIT"),
        new PermissionRule("POST",   "/api/stock/warehouses/**",     "STOCK","MOUVEMENTS","EDIT"),
        new PermissionRule("GET",    "/api/stock/agencies",          "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("POST",   "/api/stock/agencies",          "STOCK","MOUVEMENTS","EDIT"),
        new PermissionRule("PUT",    "/api/stock/agencies/**",       "STOCK","MOUVEMENTS","EDIT"),
        new PermissionRule("GET",    "/api/stock/locations",         "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("POST",   "/api/stock/locations",         "STOCK","MOUVEMENTS","EDIT"),
        new PermissionRule("PUT",    "/api/stock/locations/**",      "STOCK","MOUVEMENTS","EDIT"),
        new PermissionRule("DELETE", "/api/stock/locations/**",      "STOCK","MOUVEMENTS","EDIT"),
        new PermissionRule("GET",    "/api/stock/quants",            "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("GET",    "/api/stock/pickings",          "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("GET",    "/api/stock/pickings/**",       "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("POST",   "/api/stock/pickings",          "STOCK","MOUVEMENTS","CREATE"),
        new PermissionRule("PUT",    "/api/stock/pickings/**",       "STOCK","MOUVEMENTS","EDIT"),
        new PermissionRule("POST",   "/api/stock/pickings/**",       "STOCK","MOUVEMENTS","EDIT"),
        new PermissionRule("GET",    "/api/stock/movements",         "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("GET",    "/api/stock/movements/**",      "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("GET",    "/api/stock/receptions",        "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("GET",    "/api/stock/receptions/**",     "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("POST",   "/api/stock/receptions/**",     "STOCK","MOUVEMENTS","EDIT"),
        new PermissionRule("GET",    "/api/stock/livraisons",        "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("GET",    "/api/stock/transferts",        "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("GET",    "/api/stock/transferts/**",     "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("POST",   "/api/stock/transferts/**",     "STOCK","MOUVEMENTS","EDIT"),
        new PermissionRule("GET",    "/api/stock/inter-company/**",  "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("POST",   "/api/stock/inter-company/**",  "STOCK","MOUVEMENTS","EDIT"),
        new PermissionRule("PUT",    "/api/stock/inter-company/**",  "STOCK","MOUVEMENTS","EDIT"),
        new PermissionRule("GET",    "/api/stock/report",            "STOCK","INVENTAIRE","VIEW"),
        new PermissionRule("GET",    "/api/stock/report/**",         "STOCK","INVENTAIRE","VIEW"),
        new PermissionRule("GET",    "/api/stock/valuation",         "STOCK","INVENTAIRE","VIEW"),
        new PermissionRule("GET",    "/api/stock/adjustments",       "STOCK","INVENTAIRE","VIEW"),
        new PermissionRule("GET",    "/api/stock/adjustments/**",    "STOCK","INVENTAIRE","VIEW"),
        new PermissionRule("POST",   "/api/stock/adjustments",       "STOCK","INVENTAIRE","CREATE"),
        new PermissionRule("POST",   "/api/stock/adjustments/**",    "STOCK","INVENTAIRE","CREATE"),
        new PermissionRule("GET",    "/api/stock/casses",            "STOCK","CASSES","VIEW"),
        new PermissionRule("GET",    "/api/stock/casses/**",         "STOCK","CASSES","VIEW"),
        new PermissionRule("POST",   "/api/stock/casses",            "STOCK","CASSES","CREATE"),

        // ── COMPTABILITE ──────────────────────────────────────────────────
        new PermissionRule("GET",    "/api/accounting/accounts",     "COMPTABILITE","ECRITURES","VIEW"),
        new PermissionRule("GET",    "/api/accounting/accounts/**",  "COMPTABILITE","ECRITURES","VIEW"),
        new PermissionRule("POST",   "/api/accounting/accounts",     "COMPTABILITE","ECRITURES","CREATE"),
        new PermissionRule("PUT",    "/api/accounting/accounts/**",  "COMPTABILITE","ECRITURES","EDIT"),
        new PermissionRule("PATCH",  "/api/accounting/accounts/**",  "COMPTABILITE","ECRITURES","EDIT"),
        new PermissionRule("DELETE", "/api/accounting/accounts/**",  "COMPTABILITE","ECRITURES","DELETE"),
        new PermissionRule("GET",    "/api/accounting/service-accounts",    "COMPTABILITE","ECRITURES","VIEW"),
        new PermissionRule("PUT",    "/api/accounting/service-accounts/**", "COMPTABILITE","ECRITURES","EDIT"),
        new PermissionRule("GET",    "/api/accounting/journals",     "COMPTABILITE","JOURNAUX","VIEW"),
        new PermissionRule("GET",    "/api/accounting/journals/**",  "COMPTABILITE","JOURNAUX","VIEW"),
        new PermissionRule("POST",   "/api/accounting/journals",     "COMPTABILITE","JOURNAUX","CREATE"),
        new PermissionRule("PUT",    "/api/accounting/journals/**",  "COMPTABILITE","JOURNAUX","EDIT"),
        new PermissionRule("DELETE", "/api/accounting/journals/**",  "COMPTABILITE","JOURNAUX","DELETE"),
        new PermissionRule("POST",   "/api/accounting/journals/**",  "COMPTABILITE","JOURNAUX","EDIT"),
        new PermissionRule("GET",    "/api/accounting/moves",        "COMPTABILITE","ECRITURES","VIEW"),
        new PermissionRule("GET",    "/api/accounting/moves/**",     "COMPTABILITE","ECRITURES","VIEW"),
        new PermissionRule("POST",   "/api/accounting/moves",        "COMPTABILITE","ECRITURES","CREATE"),
        new PermissionRule("PUT",    "/api/accounting/moves/**",     "COMPTABILITE","ECRITURES","EDIT"),
        new PermissionRule("POST",   "/api/accounting/moves/**",     "COMPTABILITE","ECRITURES","EDIT"),
        new PermissionRule("GET",    "/api/accounting/partners",     "COMPTABILITE","ECRITURES","VIEW"),
        new PermissionRule("GET",    "/api/accounting/partners/**",  "COMPTABILITE","ECRITURES","VIEW"),
        new PermissionRule("POST",   "/api/accounting/partners",     "COMPTABILITE","ECRITURES","CREATE"),
        new PermissionRule("PUT",    "/api/accounting/partners/**",  "COMPTABILITE","ECRITURES","EDIT"),
        new PermissionRule("DELETE", "/api/accounting/partners/**",  "COMPTABILITE","ECRITURES","DELETE"),
        new PermissionRule("GET",    "/api/reports/**",              "COMPTABILITE","RAPPORTS","VIEW"),
        new PermissionRule("POST",   "/api/reports/**",              "COMPTABILITE","RAPPORTS","VIEW"),
        // ImportController est monté sur /api/import (pas /api/accounting/import). Les POST créent
        // des comptes/journaux/tiers/entrepôts en masse — CREATE, pas VIEW (corrigé : une règle en
        // VIEW aurait laissé n'importe quel lecteur seul importer des données comptables).
        new PermissionRule("GET",    "/api/import/**",               "COMPTABILITE","RAPPORTS","VIEW"),
        new PermissionRule("POST",   "/api/import/**",               "COMPTABILITE","RAPPORTS","CREATE"),
        // AnalyticController est monté sur /api/analytic (pas /api/accounting/analytic). Le POST
        // crée un compte analytique / relance un recalcul — CREATE, pas VIEW (même correctif).
        new PermissionRule("GET",    "/api/analytic/**",             "COMPTABILITE","RAPPORTS","VIEW"),
        new PermissionRule("POST",   "/api/analytic/**",             "COMPTABILITE","RAPPORTS","CREATE"),
        new PermissionRule("PUT",    "/api/analytic/**",             "COMPTABILITE","RAPPORTS","EDIT"),
        new PermissionRule("DELETE", "/api/analytic/**",             "COMPTABILITE","RAPPORTS","DELETE"),
        // Clôture d'exercice — opération sensible, réservée à l'édition des écritures.
        new PermissionRule("POST",   "/api/accounting/fiscal-closure/preview", "COMPTABILITE","ECRITURES","VIEW"),
        new PermissionRule("POST",   "/api/accounting/fiscal-closure/execute", "COMPTABILITE","ECRITURES","EDIT"),

        // ── CAISSE ────────────────────────────────────────────────────────
        // Ressources : CAISSES (paramétrage), SESSIONS (ouverture/clôture/comptage),
        // OPERATIONS (entrées/sorties), COUPURES, RAPPORTS. "A|B" = l'un des droits suffit.
        // Règles spécifiques d'abord : la première règle qui correspond s'applique.
        new PermissionRule("GET",    "/api/caisses/denominations",   "CAISSE","SESSIONS|COUPURES","VIEW"),
        new PermissionRule("POST",   "/api/caisses/denominations",   "CAISSE","COUPURES","CREATE"),
        new PermissionRule("POST",   "/api/caisses/denominations/**","CAISSE","COUPURES","CREATE"),
        new PermissionRule("PUT",    "/api/caisses/denominations/**","CAISSE","COUPURES","EDIT"),
        new PermissionRule("DELETE", "/api/caisses/denominations/**","CAISSE","COUPURES","DELETE"),
        new PermissionRule("GET",    "/api/caisses/operations",      "CAISSE","OPERATIONS","VIEW"),
        new PermissionRule("GET",    "/api/caisses/*/operations",    "CAISSE","OPERATIONS","VIEW"),
        new PermissionRule("POST",   "/api/caisses/operations",      "CAISSE","OPERATIONS","CREATE"),
        new PermissionRule("POST",   "/api/caisses/*/ouvrir",        "CAISSE","SESSIONS","CREATE"),
        new PermissionRule("PUT",    "/api/caisses/*/cloturer",      "CAISSE","SESSIONS","EDIT"),
        new PermissionRule("POST",   "/api/caisses/*/rouvrir",       "CAISSE","SESSIONS","EDIT"),
        new PermissionRule("GET",    "/api/caisses/*/sessions",      "CAISSE","SESSIONS","VIEW"),
        new PermissionRule("GET",    "/api/caisses/sessions/**",     "CAISSE","SESSIONS|RAPPORTS","VIEW"),
        new PermissionRule("GET",    "/api/caisses/rapport-consolide","CAISSE","RAPPORTS","VIEW"),
        new PermissionRule("GET",    "/api/caisses/*/brouillard",    "CAISSE","RAPPORTS","VIEW"),
        new PermissionRule("GET",    "/api/caisses/*/brouillard/pdf","CAISSE","RAPPORTS","VIEW"),
        new PermissionRule("GET",    "/api/caisses",                 "CAISSE","CAISSES|SESSIONS|OPERATIONS|RAPPORTS","VIEW"),
        new PermissionRule("GET",    "/api/caisses/**",              "CAISSE","CAISSES|SESSIONS|OPERATIONS|RAPPORTS","VIEW"),
        new PermissionRule("POST",   "/api/caisses",                 "CAISSE","CAISSES","CREATE"),
        new PermissionRule("PUT",    "/api/caisses/**",              "CAISSE","CAISSES","EDIT"),
        new PermissionRule("DELETE", "/api/caisses/**",              "CAISSE","CAISSES","DELETE"),
        new PermissionRule("POST",   "/api/caisses/**",              "CAISSE","CAISSES","EDIT"),

        // ── RISTOURNES (sous VENTES) ──────────────────────────────────────
        new PermissionRule("GET",    "/api/ristournes",                "VENTES","RISTOURNES","VIEW"),
        new PermissionRule("GET",    "/api/ristournes/**",             "VENTES","RISTOURNES","VIEW"),
        new PermissionRule("POST",   "/api/ristournes",                "VENTES","RISTOURNES","CREATE"),
        new PermissionRule("DELETE", "/api/ristournes/**",             "VENTES","RISTOURNES","DELETE"),
        new PermissionRule("POST",   "/api/ristournes/**",             "VENTES","RISTOURNES","EDIT"),

        // ── REMISES (sous ACHATS) ─────────────────────────────────────────
        new PermissionRule("GET",    "/api/remises",                   "ACHATS","REMISES","VIEW"),
        new PermissionRule("GET",    "/api/remises/**",                "ACHATS","REMISES","VIEW"),
        new PermissionRule("POST",   "/api/remises",                   "ACHATS","REMISES","CREATE"),
        new PermissionRule("DELETE", "/api/remises/**",                "ACHATS","REMISES","DELETE"),
        new PermissionRule("POST",   "/api/remises/**",                "ACHATS","REMISES","EDIT"),

        // ── ENLEVEMENTS (sous ACHATS) ─────────────────────────────────────
        new PermissionRule("GET",    "/api/enlevements",               "ACHATS","ENLEVEMENTS","VIEW"),
        new PermissionRule("GET",    "/api/enlevements/**",            "ACHATS","ENLEVEMENTS","VIEW"),
        new PermissionRule("POST",   "/api/enlevements",               "ACHATS","ENLEVEMENTS","CREATE"),
        new PermissionRule("DELETE", "/api/enlevements/**",            "ACHATS","ENLEVEMENTS","DELETE"),
        new PermissionRule("POST",   "/api/enlevements/**",            "ACHATS","ENLEVEMENTS","EDIT"),

        // ── PRECOMPTES (sous VENTES) ──────────────────────────────────────
        new PermissionRule("GET",    "/api/precomptes",                "VENTES","PRECOMPTES","VIEW"),
        new PermissionRule("GET",    "/api/precomptes/**",             "VENTES","PRECOMPTES","VIEW"),
        new PermissionRule("POST",   "/api/precomptes",                "VENTES","PRECOMPTES","CREATE"),
        new PermissionRule("DELETE", "/api/precomptes/**",             "VENTES","PRECOMPTES","DELETE"),
        new PermissionRule("POST",   "/api/precomptes/**",             "VENTES","PRECOMPTES","EDIT"),

        // ── HELPDESK ──────────────────────────────────────────────────────
        new PermissionRule("GET",    "/api/helpdesk/stats",          "HELPDESK","TICKETS","VIEW"),
        new PermissionRule("GET",    "/api/helpdesk/tickets",        "HELPDESK","TICKETS","VIEW"),
        new PermissionRule("GET",    "/api/helpdesk/tickets/**",     "HELPDESK","TICKETS","VIEW"),
        new PermissionRule("POST",   "/api/helpdesk/tickets",        "HELPDESK","TICKETS","CREATE"),
        new PermissionRule("PUT",    "/api/helpdesk/tickets/**",     "HELPDESK","TICKETS","EDIT"),
        new PermissionRule("POST",   "/api/helpdesk/tickets/**",     "HELPDESK","TICKETS","EDIT"),

        // ── RH / PAIE ─────────────────────────────────────────────────────
        // Employés
        new PermissionRule("GET",    "/api/hr/employees",            "RH","EMPLOYES","VIEW"),
        new PermissionRule("GET",    "/api/hr/employees/**",         "RH","EMPLOYES","VIEW"),
        new PermissionRule("POST",   "/api/hr/employees",            "RH","EMPLOYES","CREATE"),
        new PermissionRule("PUT",    "/api/hr/employees/**",         "RH","EMPLOYES","EDIT"),
        new PermissionRule("DELETE", "/api/hr/employees/**",         "RH","EMPLOYES","DELETE"),
        // Départements & postes (organisation) — rattachés à EMPLOYES
        new PermissionRule("GET",    "/api/hr/departments",          "RH","EMPLOYES","VIEW"),
        new PermissionRule("POST",   "/api/hr/departments",          "RH","EMPLOYES","EDIT"),
        new PermissionRule("DELETE", "/api/hr/departments/**",       "RH","EMPLOYES","EDIT"),
        new PermissionRule("GET",    "/api/hr/jobs",                 "RH","EMPLOYES","VIEW"),
        new PermissionRule("POST",   "/api/hr/jobs",                 "RH","EMPLOYES","EDIT"),
        new PermissionRule("DELETE", "/api/hr/jobs/**",              "RH","EMPLOYES","EDIT"),
        new PermissionRule("GET",    "/api/hr/professional-categories",     "RH","EMPLOYES","VIEW"),
        new PermissionRule("POST",   "/api/hr/professional-categories",     "RH","EMPLOYES","EDIT"),
        new PermissionRule("PUT",    "/api/hr/professional-categories/**",  "RH","EMPLOYES","EDIT"),
        new PermissionRule("DELETE", "/api/hr/professional-categories/**",  "RH","EMPLOYES","EDIT"),
        new PermissionRule("GET",    "/api/hr/echelons",             "RH","EMPLOYES","VIEW"),
        new PermissionRule("POST",   "/api/hr/echelons",             "RH","EMPLOYES","EDIT"),
        new PermissionRule("PUT",    "/api/hr/echelons/**",          "RH","EMPLOYES","EDIT"),
        new PermissionRule("DELETE", "/api/hr/echelons/**",          "RH","EMPLOYES","EDIT"),
        // Contrats
        new PermissionRule("GET",    "/api/hr/contracts",            "RH","CONTRATS","VIEW"),
        new PermissionRule("GET",    "/api/hr/contracts/**",         "RH","CONTRATS","VIEW"),
        new PermissionRule("POST",   "/api/hr/contracts",            "RH","CONTRATS","CREATE"),
        new PermissionRule("POST",   "/api/hr/contracts/**",         "RH","CONTRATS","EDIT"),
        new PermissionRule("PUT",    "/api/hr/contracts/**",         "RH","CONTRATS","EDIT"),
        new PermissionRule("DELETE", "/api/hr/contracts/**",         "RH","CONTRATS","DELETE"),
        // Configuration paie (règles salariales)
        new PermissionRule("GET",    "/api/hr/salary-rules",         "RH","CONFIG_PAIE","VIEW"),
        new PermissionRule("GET",    "/api/hr/salary-rule-categories","RH","CONFIG_PAIE","VIEW"),
        new PermissionRule("POST",   "/api/hr/salary-rules",         "RH","CONFIG_PAIE","EDIT"),
        new PermissionRule("PUT",    "/api/hr/salary-rules/**",      "RH","CONFIG_PAIE","EDIT"),
        new PermissionRule("DELETE", "/api/hr/salary-rules/**",      "RH","CONFIG_PAIE","EDIT"),
        new PermissionRule("GET",    "/api/hr/worked-days-types",    "RH","CONFIG_PAIE","VIEW"),
        new PermissionRule("POST",   "/api/hr/worked-days-types",    "RH","CONFIG_PAIE","EDIT"),
        new PermissionRule("PUT",    "/api/hr/worked-days-types/**", "RH","CONFIG_PAIE","EDIT"),
        new PermissionRule("DELETE", "/api/hr/worked-days-types/**", "RH","CONFIG_PAIE","EDIT"),
        new PermissionRule("GET",    "/api/hr/input-types",          "RH","CONFIG_PAIE","VIEW"),
        new PermissionRule("POST",   "/api/hr/input-types",          "RH","CONFIG_PAIE","EDIT"),
        new PermissionRule("PUT",    "/api/hr/input-types/**",       "RH","CONFIG_PAIE","EDIT"),
        new PermissionRule("DELETE", "/api/hr/input-types/**",       "RH","CONFIG_PAIE","EDIT"),
        // Bulletins & lots de paie
        new PermissionRule("GET",    "/api/hr/payroll/**",           "RH","BULLETINS","VIEW"),
        new PermissionRule("POST",   "/api/hr/payroll/payslips/*/validate", "RH","BULLETINS","VALIDATE"),
        new PermissionRule("POST",   "/api/hr/payroll/runs/*/validate",     "RH","BULLETINS","VALIDATE"),
        // Annuler un bulletin (potentiellement déjà validé) exige le même droit que valider —
        // avant la règle générique ci-dessous, sinon un simple droit de création de brouillon
        // suffirait aussi à annuler un bulletin validé.
        new PermissionRule("POST",   "/api/hr/payroll/payslips/*/cancel",   "RH","BULLETINS","VALIDATE"),
        new PermissionRule("POST",   "/api/hr/payroll/**",           "RH","BULLETINS","CREATE"),
        // Congés
        new PermissionRule("GET",    "/api/hr/leave-types",          "RH","CONGES","VIEW"),
        new PermissionRule("POST",   "/api/hr/leave-types",          "RH","CONGES","EDIT"),
        new PermissionRule("PUT",    "/api/hr/leave-types/**",       "RH","CONGES","EDIT"),
        new PermissionRule("DELETE", "/api/hr/leave-types/**",       "RH","CONGES","EDIT"),
        new PermissionRule("GET",    "/api/hr/leave-declarations",   "RH","CONGES","VIEW"),
        new PermissionRule("POST",   "/api/hr/leave-declarations",   "RH","CONGES","CREATE"),
        new PermissionRule("DELETE", "/api/hr/leave-declarations/**","RH","CONGES","DELETE"),
        new PermissionRule("GET",    "/api/hr/leave-balances",       "RH","CONGES","VIEW"),
        new PermissionRule("POST",   "/api/hr/leave-balances/**",    "RH","CONGES","EDIT"),

        // ── CONFIG ────────────────────────────────────────────────────────
        new PermissionRule("GET",    "/api/config/users",            "CONFIG","UTILISATEURS","VIEW"),
        new PermissionRule("GET",    "/api/config/users/**",         "CONFIG","UTILISATEURS","VIEW"),
        new PermissionRule("POST",   "/api/config/users",            "CONFIG","UTILISATEURS","CREATE"),
        new PermissionRule("PUT",    "/api/config/users/**",         "CONFIG","UTILISATEURS","EDIT"),
        new PermissionRule("POST",   "/api/config/users/**",         "CONFIG","UTILISATEURS","EDIT"),
        new PermissionRule("GET",    "/api/config/roles",            "CONFIG","ROLES","VIEW"),
        new PermissionRule("GET",    "/api/config/roles/**",         "CONFIG","ROLES","VIEW"),
        new PermissionRule("POST",   "/api/config/roles",            "CONFIG","ROLES","CREATE"),
        new PermissionRule("PUT",    "/api/config/roles/**",         "CONFIG","ROLES","EDIT"),
        new PermissionRule("DELETE", "/api/config/roles/**",         "CONFIG","ROLES","DELETE"),
        new PermissionRule("GET",    "/api/config/companies",        "CONFIG","ENTREPRISES","VIEW"),
        new PermissionRule("GET",    "/api/config/companies/**",     "CONFIG","ENTREPRISES","VIEW"),
        new PermissionRule("POST",   "/api/config/companies",        "CONFIG","ENTREPRISES","CREATE"),
        new PermissionRule("PUT",    "/api/config/companies/**",     "CONFIG","ENTREPRISES","EDIT"),
        new PermissionRule("POST",   "/api/config/companies/**",     "CONFIG","ENTREPRISES","EDIT"),
        // Clé API inter-agences, URL du Hub et agences distantes — droit AGENCES dédié.
        new PermissionRule("GET",    "/api/config/inter-agency-key", "CONFIG","AGENCES","VIEW"),
        new PermissionRule("POST",   "/api/config/inter-agency-key/**", "CONFIG","AGENCES","EDIT"),
        new PermissionRule("GET",    "/api/config/hub-url",          "CONFIG","AGENCES","VIEW"),
        new PermissionRule("PUT",    "/api/config/hub-url",          "CONFIG","AGENCES","EDIT"),
        new PermissionRule("GET",    "/api/config/remote-agencies/**",   "CONFIG","AGENCES","VIEW"),
        new PermissionRule("POST",   "/api/config/remote-agencies/**",   "CONFIG","AGENCES","EDIT"),
        new PermissionRule("PUT",    "/api/config/remote-agencies/**",   "CONFIG","AGENCES","EDIT"),
        new PermissionRule("DELETE", "/api/config/remote-agencies/**",   "CONFIG","AGENCES","DELETE"),
        // GET /api/config/modules (lecture de l'état d'installation, écran d'accueil + garde de
        // route) est géré à part par PermissionFilter.EXACT_SELF_SERVICE_BYPASS — tout utilisateur
        // authentifié y a accès sans règle ici, depuis le passage de PermissionFilter en
        // fail-closed (l'absence de règle bloquerait sinon tous les non-privilégiés). Seule la
        // bascule (installer/désinstaller) reste restreinte par une vraie permission.
        new PermissionRule("PUT",    "/api/config/modules/**",       "CONFIG","MODULES","EDIT"),
        new PermissionRule("GET",    "/api/audit/**",                "CONFIG","AUDIT","VIEW"),

        // ── ELEADER (import factures PDF → commandes de vente, sous VENTES) ─
        new PermissionRule("GET",    "/api/eleader/**",              "VENTES","COMMANDES","VIEW"),
        new PermissionRule("PUT",    "/api/eleader/**",               "VENTES","COMMANDES","EDIT"),
        new PermissionRule("POST",   "/api/eleader/config/**",       "VENTES","COMMANDES","EDIT"),
        new PermissionRule("DELETE", "/api/eleader/**",               "VENTES","COMMANDES","EDIT"),
        new PermissionRule("POST",   "/api/eleader/extract-text",    "VENTES","COMMANDES","CREATE"),
        new PermissionRule("POST",   "/api/eleader/import",          "VENTES","COMMANDES","CREATE"),
        // confirm/cancel sont déjà protégés en défense en profondeur par @PreAuthorize
        // directement sur EleaderController (contournement de permission déjà identifié) —
        // cette règle générique reste nécessaire pour que PermissionFilter (fail-closed) ne
        // bloque pas la requête avant même d'atteindre le contrôleur.
        new PermissionRule("POST",   "/api/eleader/orders/**",       "VENTES","COMMANDES","EDIT"),

        // ── SYNC (SyncStatusController — tableau de bord admin Hub/RabbitMQ) ─
        // /api/sync/helpdesk/** (hub-status, hub-comment) reste hors de PermissionFilter
        // (bypass dédié, authentifié par X-Api-Key — voir InterAgencyApiKeyFilter), ces règles ne
        // s'appliquent donc qu'au reste de /api/sync/** (SyncStatusController).
        new PermissionRule("GET",    "/api/sync/**",                 "CONFIG","AUDIT","VIEW"),
        new PermissionRule("POST",   "/api/sync/**",                 "CONFIG","AUDIT","EDIT"),
        new PermissionRule("DELETE", "/api/sync/**",                 "CONFIG","AUDIT","EDIT")
    );

    public PermissionRule findRule(String method, String uri) {
        for (PermissionRule rule : RULES) {
            if (rule.method().equalsIgnoreCase(method) && MATCHER.match(rule.pattern(), uri)) {
                return rule;
            }
        }
        return null;
    }

    public boolean isPrivileged(Authentication auth) {
        return auth.getAuthorities().stream().anyMatch(a ->
                a.getAuthority().equals("ROLE_SUPER_ADMIN") ||
                a.getAuthority().equals("ROLE_ADMIN"));
    }

    public boolean hasPermission(Authentication auth, PermissionRule rule) {
        List<String> required = new java.util.ArrayList<>();
        for (String res : rule.resource().split("\\|")) {
            required.add("PERM_" + rule.module() + "_" + res + "_" + rule.action());
        }
        return hasAny(auth, required);
    }

    private static boolean hasAny(Authentication auth, List<String> authorities) {
        return !authorities.isEmpty() && auth.getAuthorities().stream()
                .anyMatch(a -> authorities.contains(a.getAuthority()));
    }

    /**
     * Les modules Caisse et Configuration sont indépendants : leurs écrans réutilisent des
     * endpoints d'autres modules (ventes, stock, journaux, caisses...), mais quand la requête vient
     * de leur écran (en-tête X-Erp-Context: CAISSE ou CONFIG), les droits du module lui-même
     * suffisent — un caissier n'a besoin d'aucun droit Ventes ou Comptabilité.
     */
    public boolean hasContextEquivalent(Authentication auth, PermissionRule rule, String uri, String context) {
        if (context == null) return false;
        String ctx = context.toUpperCase();
        if (isReferenceRead(rule, uri, ctx) && hasAnyModuleView(auth, ctx)) return true;
        return switch (context.toUpperCase()) {
            case "CAISSE" -> hasAny(auth, caisseEquivalents(rule, uri));
            case "CONFIG" -> hasAny(auth, configEquivalents(rule));
            case "VENTES" -> hasAny(auth, catalogueEquivalents(rule, uri, "VENTES"));
            case "ACHATS" -> hasAny(auth, catalogueEquivalents(rule, uri, "ACHATS"));
            default       -> false;
        };
    }

    /** Modules dont les écrans envoient leur contexte (X-Erp-Context). */
    private static final java.util.Set<String> SCREEN_MODULES = java.util.Set.of(
            "VENTES", "ACHATS", "STOCK", "COMPTABILITE", "CAISSE", "CONFIG", "RH", "HELPDESK");

    /**
     * Listes de référence lues par les écrans de plusieurs modules (articles, catégories, unités,
     * entrepôts, emplacements, stocks, comptes, journaux, partenaires, clients, vendeurs,
     * fournisseurs, précomptes, tarifs d'enlèvement). Lecture seule. Les agences distantes n'en
     * font pas partie (leur liste expose les clés API inter-agences).
     */
    private static boolean isReferenceRead(PermissionRule rule, String uri, String context) {
        if (!"VIEW".equals(rule.action())) return false;
        // Fiches client / fournisseur : leurs ristournes / remises, dans leur propre module
        if ("VENTES".equals(context) && uri.startsWith("/api/ristournes/partner/")) return true;
        if ("ACHATS".equals(context) && uri.startsWith("/api/remises/partner/")) return true;
        return uri.equals("/api/stock/products") || uri.startsWith("/api/stock/products/")
                || uri.equals("/api/stock/categories")
                || uri.equals("/api/stock/units-of-measure")
                || uri.equals("/api/stock/warehouses") || uri.startsWith("/api/stock/warehouses/")
                || uri.equals("/api/stock/locations")
                || uri.equals("/api/stock/picking-types")
                || uri.equals("/api/stock/quants")
                || uri.equals("/api/accounting/accounts") || uri.startsWith("/api/accounting/accounts/")
                || uri.equals("/api/accounting/journals") || uri.startsWith("/api/accounting/journals/")
                || uri.equals("/api/accounting/partners") || uri.startsWith("/api/accounting/partners/")
                || uri.equals("/api/sales/clients") || uri.equals("/api/sales/sellers")
                || uri.startsWith("/api/purchases/suppliers/")
                || uri.equals("/api/precomptes") || uri.equals("/api/enlevements");
    }

    /**
     * Un utilisateur qui consulte au moins un écran d'un module (n'importe quel droit VIEW de ce
     * module) peut lire, depuis ce module, les listes de référence dont ses écrans ont besoin —
     * sans quoi un écran autorisé se bloque ou affiche « Accès refusé » parce qu'une de ses listes
     * dépend d'un autre droit (ex. Ajustements → articles et emplacements).
     */
    private static boolean hasAnyModuleView(Authentication auth, String module) {
        if (!SCREEN_MODULES.contains(module)) return false;
        String prefix = "PERM_" + module + "_";
        return auth.getAuthorities().stream().map(a -> a.getAuthority())
                .anyMatch(a -> a.startsWith(prefix) && a.endsWith("_VIEW"));
    }

    private static List<String> caisseEquivalents(PermissionRule rule, String uri) {
        if (!"VIEW".equals(rule.action())) return List.of();
        return switch (rule.module() + "_" + rule.resource()) {
            // comptes et tiers pour saisir une entrée/sortie
            case "COMPTABILITE_ECRITURES" -> List.of("PERM_CAISSE_OPERATIONS_VIEW", "PERM_CAISSE_OPERATIONS_CREATE");
            // journal et vendeur rattachés à une caisse
            case "COMPTABILITE_JOURNAUX", "VENTES_VENDEURS" -> List.of("PERM_CAISSE_CAISSES_VIEW");
            case "COMPTABILITE_RAPPORTS" -> uri.startsWith("/api/reports/suivi-tiers")
                    ? List.of("PERM_CAISSE_RAPPORTS_VIEW") : List.of();
            default -> List.of();
        };
    }
    /**
     * Écrans Ventes / Achats (bons, factures, clients, fournisseurs) : ils lisent des données
     * d'autres modules (catalogue, entrepôts, journaux, partenaires, tarifs/coûts d'enlèvement).
     * Ces lectures sont accordées avec les droits Commandes/Factures du module lui-même, pour
     * qu'un vendeur sans droit Stock ou Comptabilité ne reçoive pas de 403 (« Accès refusé »)
     * alors que son opération aboutit. Le droit STOCK.PRODUITS peut ainsi être retiré à un rôle
     * pour lui masquer le module Stock sans l'empêcher de saisir ses bons. Création/modification
     * d'un partenaire (client/fournisseur depuis un bon) suivent CREATE/EDIT ; jamais DELETE.
     */
    private static List<String> catalogueEquivalents(PermissionRule rule, String uri, String module) {
        String action = rule.action();
        boolean partners = uri.equals("/api/accounting/partners") || uri.startsWith("/api/accounting/partners/");
        if ("VIEW".equals(action)) {
            boolean lecture = uri.equals("/api/stock/products") || uri.startsWith("/api/stock/products/")
                    || uri.equals("/api/stock/categories")
                    || uri.equals("/api/stock/warehouses") || uri.startsWith("/api/stock/warehouses/")
                    || uri.equals("/api/accounting/journals")
                    || partners
                    // tarifs d'enlèvement (prix TTC des bons) et coûts d'une facture d'achat
                    || uri.equals("/api/enlevements") || uri.startsWith("/api/enlevements/invoice/")
                    // listes de saisie d'un bon de vente : clients, solde, prix client, vendeurs
                    || ("VENTES".equals(module) && (uri.equals("/api/sales/clients")
                        || uri.startsWith("/api/sales/partners/") || uri.startsWith("/api/sales/client-prices")
                        || uri.equals("/api/sales/sellers")));
            if (!lecture) return List.of();
            return List.of("PERM_" + module + "_COMMANDES_VIEW", "PERM_" + module + "_FACTURES_VIEW");
        }
        boolean clientDepuisBon = "VENTES".equals(module) && uri.equals("/api/sales/clients") && "CREATE".equals(action);
        if ((partners || clientDepuisBon) && ("CREATE".equals(action) || "EDIT".equals(action))) {
            return List.of("PERM_" + module + "_COMMANDES_" + action, "PERM_" + module + "_FACTURES_" + action);
        }
        return List.of();
    }

    private static List<String> configEquivalents(PermissionRule rule) {
        if (!"VIEW".equals(rule.action())) return List.of();
        return switch (rule.module()) {
            // Fiche utilisateur : liste des rôles et caisses à rattacher
            case "CAISSE" -> List.of("PERM_CONFIG_UTILISATEURS_VIEW");
            case "CONFIG" -> "ROLES".equals(rule.resource()) ? List.of("PERM_CONFIG_UTILISATEURS_VIEW") : List.of();
            // Exportation : lecture des données de tous les modules
            case "VENTES", "ACHATS", "STOCK", "COMPTABILITE" -> List.of("PERM_CONFIG_EXPORT_VIEW");
            default -> List.of();
        };
    }
}

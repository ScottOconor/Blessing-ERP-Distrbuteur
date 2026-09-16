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
        new PermissionRule("GET",    "/api/stock/dashboard",         "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("GET",    "/api/stock/picking-types",     "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("GET",    "/api/stock/warehouses",        "STOCK","MOUVEMENTS","VIEW"),
        new PermissionRule("GET",    "/api/stock/warehouses/**",     "STOCK","MOUVEMENTS","VIEW"),
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
        new PermissionRule("GET",    "/api/caisses",                 "CAISSE","CAISSES","VIEW"),
        new PermissionRule("GET",    "/api/caisses/**",              "CAISSE","CAISSES","VIEW"),
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
        // Clé API inter-agences et URL du Hub — infrastructure sensible, même resource ENTREPRISES.
        new PermissionRule("GET",    "/api/config/inter-agency-key", "CONFIG","ENTREPRISES","VIEW"),
        new PermissionRule("POST",   "/api/config/inter-agency-key/**", "CONFIG","ENTREPRISES","EDIT"),
        new PermissionRule("GET",    "/api/config/hub-url",          "CONFIG","ENTREPRISES","VIEW"),
        new PermissionRule("PUT",    "/api/config/hub-url",          "CONFIG","ENTREPRISES","EDIT"),
        new PermissionRule("GET",    "/api/config/remote-agencies/**",   "CONFIG","ENTREPRISES","VIEW"),
        new PermissionRule("POST",   "/api/config/remote-agencies/**",   "CONFIG","ENTREPRISES","EDIT"),
        new PermissionRule("PUT",    "/api/config/remote-agencies/**",   "CONFIG","ENTREPRISES","EDIT"),
        new PermissionRule("DELETE", "/api/config/remote-agencies/**",   "CONFIG","ENTREPRISES","EDIT"),
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
        String required = "PERM_" + rule.module() + "_" + rule.resource() + "_" + rule.action();
        return auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals(required));
    }
}

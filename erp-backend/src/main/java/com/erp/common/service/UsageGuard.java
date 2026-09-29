package com.erp.common.service;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

/**
 * Bloque la suppression (physique ou logique) d'une donnée de référence déjà utilisée par des
 * opérations : compte avec écritures, catégorie avec articles, entrepôt avec mouvements...
 * Supprimer/désactiver ces données casserait l'historique ou laisserait des références orphelines.
 * Chaque méthode lève une IllegalStateException (→ HTTP 400 avec le message) si c'est le cas.
 */
@Component
@RequiredArgsConstructor
public class UsageGuard {

    private final JdbcTemplate jdbc;

    public void assertAccountUnused(Long accountId) {
        block(exists("SELECT 1 FROM account_move_lines WHERE account_id = ?", accountId),
                "Impossible de supprimer ce compte : il contient des écritures comptables.");
    }

    public void assertJournalUnused(Long journalId) {
        block(exists("SELECT 1 FROM account_moves WHERE journal_id = ?", journalId)
                        || exists("SELECT 1 FROM account_move_lines WHERE journal_id = ?", journalId),
                "Impossible de supprimer ce journal : il contient des écritures comptables.");
        block(exists("SELECT 1 FROM caisses WHERE journal_id = ? AND active = true", journalId),
                "Impossible de supprimer ce journal : il est rattaché à une caisse active.");
    }

    public void assertAnalyticAccountUnused(Long analyticAccountId) {
        block(exists("SELECT 1 FROM analytic_lines WHERE analytic_account_id = ?", analyticAccountId)
                        || exists("SELECT 1 FROM account_move_lines WHERE analytic_account_id = ?", analyticAccountId),
                "Impossible de supprimer ce compte analytique : il est utilisé dans des écritures.");
        block(exists("SELECT 1 FROM analytic_accounts WHERE parent_id = ? AND active = true", analyticAccountId),
                "Impossible de supprimer ce compte analytique : il a des sous-comptes actifs.");
    }

    public void assertCategoryUnused(Long categoryId) {
        block(exists("SELECT 1 FROM products WHERE category_id = ?", categoryId),
                "Impossible de supprimer cette catégorie : des articles y sont rattachés.");
        block(exists("SELECT 1 FROM product_categories WHERE parent_id = ?", categoryId),
                "Impossible de supprimer cette catégorie : elle a des sous-catégories.");
        block(exists("SELECT 1 FROM ristournes WHERE category_id = ? AND active = true", categoryId)
                        || exists("SELECT 1 FROM remises WHERE category_id = ? AND active = true", categoryId)
                        || exists("SELECT 1 FROM enlevements WHERE category_id = ? AND active = true", categoryId),
                "Impossible de supprimer cette catégorie : elle est utilisée par des ristournes, remises ou frais d'enlèvement.");
    }

    public void assertUnitOfMeasureUnused(Long uomId) {
        block(exists("SELECT 1 FROM products WHERE unit_of_measure_id = ?", uomId),
                "Impossible de supprimer cette unité de mesure : des articles l'utilisent.");
    }

    public void assertWarehouseUnused(Long warehouseId) {
        String locs = "SELECT id FROM stock_locations WHERE warehouse_id = ?";
        block(exists("SELECT 1 FROM stock_moves WHERE location_id IN (" + locs + ") OR location_dest_id IN (" + locs + ")",
                        warehouseId, warehouseId),
                "Impossible de supprimer cet entrepôt : il a des mouvements de stock.");
        block(exists("SELECT 1 FROM stock_quants WHERE quantity <> 0 AND location_id IN (" + locs + ")", warehouseId),
                "Impossible de supprimer cet entrepôt : il contient encore du stock.");
    }

    public void assertLocationUnused(Long locationId) {
        block(exists("SELECT 1 FROM stock_moves WHERE location_id = ? OR location_dest_id = ?", locationId, locationId),
                "Impossible de supprimer cet emplacement : il a des mouvements de stock.");
        block(exists("SELECT 1 FROM stock_quants WHERE location_id = ? AND quantity <> 0", locationId),
                "Impossible de supprimer cet emplacement : il contient encore du stock.");
        block(exists("SELECT 1 FROM stock_locations WHERE parent_id = ? AND active = true", locationId),
                "Impossible de supprimer cet emplacement : il a des sous-emplacements actifs.");
    }

    public void assertSellerUnused(Long sellerId) {
        block(exists("SELECT 1 FROM sales_orders WHERE seller_id = ?", sellerId)
                        || exists("SELECT 1 FROM sales_invoices WHERE seller_id = ?", sellerId),
                "Impossible de supprimer ce vendeur : il est rattaché à des commandes ou factures.");
    }

    public void assertCaisseUnused(Long caisseId) {
        block(exists("SELECT 1 FROM caisse_operations WHERE caisse_id = ?", caisseId)
                        || exists("SELECT 1 FROM caisse_sessions WHERE caisse_id = ?", caisseId),
                "Impossible de supprimer cette caisse : elle a déjà des opérations ou des sessions.");
    }

    private boolean exists(String sql, Object... args) {
        return Boolean.TRUE.equals(jdbc.queryForObject("SELECT EXISTS (" + sql + ")", Boolean.class, args));
    }

    private static void block(boolean used, String message) {
        if (used) throw new IllegalStateException(message);
    }
}

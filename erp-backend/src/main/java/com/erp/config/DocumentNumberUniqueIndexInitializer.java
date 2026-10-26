package com.erp.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Garantit en base l'unicité des numéros de pièces (factures, avoirs, paiements, commandes,
 * bons de stock, écritures numérotées par journal, matricules, bulletins, tickets).
 * DocumentNumberLock empêche l'attribution d'un même numéro par deux transactions simultanées ;
 * ces index en sont le filet de sécurité : un doublon est refusé (HTTP 409) au lieu d'être
 * enregistré.
 *
 * Même principe que ProductCodeUniqueIndexInitializer : si la base contient déjà des doublons
 * (données antérieures), l'index n'est pas créé et les doublons sont signalés dans le journal,
 * pour être renumérotés ; l'index est créé au premier démarrage qui suit leur correction.
 */
@Component
@Order(1)
@RequiredArgsConstructor
@Slf4j
public class DocumentNumberUniqueIndexInitializer implements ApplicationRunner {

    /** index, table, colonnes, condition (null = aucune). */
    record Spec(String index, String table, String columns, String where) {}

    static final List<Spec> SPECS = List.of(
            new Spec("ux_sales_orders_number",        "sales_orders",              "company_id, name",       "name IS NOT NULL"),
            new Spec("ux_sales_invoices_number",      "sales_invoices",            "company_id, type, name", "name IS NOT NULL"),
            new Spec("ux_invoice_payments_number",    "invoice_payments",          "company_id, name",       "name IS NOT NULL"),
            new Spec("ux_purchase_orders_number",     "purchase_orders",           "company_id, name",       "name IS NOT NULL"),
            new Spec("ux_purchase_invoices_number",   "purchase_invoices",         "company_id, type, name", "name IS NOT NULL"),
            new Spec("ux_purchase_inv_payments_number", "purchase_invoice_payments", "company_id, name",     "name IS NOT NULL"),
            new Spec("ux_stock_pickings_number",      "stock_pickings",            "company_id, name",       "name IS NOT NULL"),
            // Seules les écritures numérotées par journal (VNT-2026-00001...) : d'autres pièces
            // portent un libellé (« Paiement FAC-... ») qui n'a pas vocation à être unique.
            new Spec("ux_account_moves_number",       "account_moves",             "company_id, name",
                    "name ~ '^[A-Z0-9]+-[0-9]{4}-[0-9]+$'"),
            new Spec("ux_hr_employees_matricule",     "hr_employees",              "company_id, matricule",  "matricule IS NOT NULL"),
            new Spec("ux_hr_payslips_number",         "hr_payslips",               "company_id, name",       "name IS NOT NULL"),
            new Spec("ux_helpdesk_tickets_number",    "helpdesk_tickets",          "company_id, ticket_number", "ticket_number IS NOT NULL")
    );

    private final JdbcTemplate jdbc;

    @Override
    public void run(ApplicationArguments args) {
        for (Spec spec : SPECS) {
            try {
                ensureIndex(spec);
            } catch (Exception e) {
                log.warn("[NUMÉROTATION] Index {} non vérifié : {}", spec.index(), e.getMessage());
            }
        }
    }

    private void ensureIndex(Spec spec) {
        Integer tableExists = jdbc.queryForObject(
                "SELECT COUNT(*) FROM pg_tables WHERE schemaname = 'public' AND tablename = ?", Integer.class, spec.table());
        if (tableExists == null || tableExists == 0) return;
        Integer existing = jdbc.queryForObject(
                "SELECT COUNT(*) FROM pg_indexes WHERE tablename = ? AND indexname = ?", Integer.class, spec.table(), spec.index());
        if (existing != null && existing > 0) return;

        String where = spec.where() != null ? " WHERE " + spec.where() : "";
        List<String> duplicates = jdbc.queryForList(
                "SELECT CONCAT_WS(' / ', " + spec.columns() + ") || ' (' || COUNT(*) || ' fois)' FROM " + spec.table() + where +
                " GROUP BY " + spec.columns() + " HAVING COUNT(*) > 1 ORDER BY 1 LIMIT 20", String.class);
        if (!duplicates.isEmpty()) {
            log.warn("[NUMÉROTATION] {} : numéros en double {} — index d'unicité {} non créé tant qu'ils ne sont pas renumérotés.",
                    spec.table(), duplicates, spec.index());
            return;
        }
        jdbc.execute("CREATE UNIQUE INDEX IF NOT EXISTS " + spec.index() + " ON " + spec.table() + " (" + spec.columns() + ")" + where);
        log.info("[NUMÉROTATION] Index d'unicité {} créé.", spec.index());
    }
}

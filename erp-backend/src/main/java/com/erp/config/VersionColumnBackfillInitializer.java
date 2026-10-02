package com.erp.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

/**
 * ddl-auto=update ajoute les nouvelles colonnes "version" (@Version) sans DEFAULT : les lignes
 * déjà présentes en base restent à NULL. Hibernate traite ensuite tout UPDATE sur une de ces
 * lignes comme un verrou optimiste à incrémenter, et {@code Versioning.increment} plante avec un
 * NullPointerException ("current" is null) faute de valeur de départ. Backfill idempotent à 0.
 *
 * Même problème pour caisse_sessions.ouverture_controlee (boolean primitif côté entité) : les
 * sessions antérieures à la colonne restent à NULL et font planter le rapport consolidé de caisse
 * ("Null value was assigned to a property ... of primitive type").
 */
@Component
@Order(0)
@RequiredArgsConstructor
@Slf4j
public class VersionColumnBackfillInitializer implements ApplicationRunner {

    private static final String[] TABLES = {
            "sales_invoices",
            "sales_orders",
            "account_moves",
            "purchase_orders",
            "purchase_invoices",
            "stock_pickings",
            "stock_quants",
            "product_warehouse_valuations"
    };

    private final JdbcTemplate jdbc;

    @Override
    @Transactional
    public void run(ApplicationArguments args) {
        for (String table : TABLES) {
            int updated = jdbc.update("UPDATE " + table + " SET version = 0 WHERE version IS NULL");
            if (updated > 0) {
                log.info("Backfill version=0 sur {} ({} ligne(s))", table, updated);
            }
        }
        int sessions = jdbc.update("UPDATE caisse_sessions SET ouverture_controlee = false WHERE ouverture_controlee IS NULL");
        if (sessions > 0) {
            log.info("Backfill ouverture_controlee=false sur caisse_sessions ({} ligne(s))", sessions);
        }
    }
}

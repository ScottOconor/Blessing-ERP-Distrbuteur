package com.erp.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.Map;

/**
 * Crée l'index manquant de chaque clé étrangère (à une colonne). Ni PostgreSQL ni Hibernate ne les
 * créent : la base n'en avait aucun (55 clés étrangères non indexées), si bien que lire les lignes
 * d'une facture ou les écritures d'un client parcourait toute la table — une fois par facture
 * dans les listes, d'où un temps qui croît avec le carré du volume (liste des factures : 2 s pour
 * 572 factures).
 *
 * CREATE INDEX CONCURRENTLY : les écritures ne sont pas bloquées si des utilisateurs travaillent
 * déjà pendant la création (ce runner s'exécute une fois le serveur démarré). Un index laissé
 * invalide par une création interrompue est supprimé puis recréé.
 */
@Component
@Order(2)
@RequiredArgsConstructor
@Slf4j
public class ForeignKeyIndexInitializer implements ApplicationRunner {

    private static final String UNINDEXED_FOREIGN_KEYS = """
            SELECT c.conrelid::regclass::text AS tbl, a.attname AS col
            FROM pg_constraint c
            JOIN pg_attribute a ON a.attrelid = c.conrelid AND a.attnum = c.conkey[1]
            JOIN pg_namespace n ON n.oid = c.connamespace
            WHERE c.contype = 'f' AND n.nspname = 'public' AND array_length(c.conkey, 1) = 1
              AND NOT EXISTS (SELECT 1 FROM pg_index i
                              WHERE i.indrelid = c.conrelid AND i.indkey[0] = c.conkey[1] AND i.indisvalid)
            ORDER BY 1, 2""";

    private final JdbcTemplate jdbc;

    @Override
    public void run(ApplicationArguments args) {
        int created = 0;
        for (Map<String, Object> fk : jdbc.queryForList(UNINDEXED_FOREIGN_KEYS)) {
            String table = (String) fk.get("tbl");
            String column = (String) fk.get("col");
            String index = indexName(table, column);
            try {
                jdbc.execute("DROP INDEX CONCURRENTLY IF EXISTS \"" + index + "\""); // reste invalide éventuel
                jdbc.execute("CREATE INDEX CONCURRENTLY IF NOT EXISTS \"" + index + "\" ON \"" + table
                        + "\" (\"" + column + "\")");
                created++;
            } catch (Exception e) {
                log.warn("[INDEX] Création de {} sur {}({}) impossible : {}", index, table, column, e.getMessage());
            }
        }
        if (created > 0) log.info("[INDEX] {} index de clé étrangère créé(s).", created);
    }

    /** idx_fk_<table>_<colonne>, limité à 63 caractères (longueur maximale d'un identifiant PostgreSQL). */
    static String indexName(String table, String column) {
        String name = "idx_fk_" + table + "_" + column;
        return name.length() <= 63 ? name : name.substring(0, 54) + "_" + Integer.toHexString(name.hashCode());
    }
}

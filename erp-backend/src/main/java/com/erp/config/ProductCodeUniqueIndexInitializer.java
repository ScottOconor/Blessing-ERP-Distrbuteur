package com.erp.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

/**
 * Garantit en base qu'une référence article (default_code) est unique par société, sans tenir
 * compte de la casse ni des espaces. StockService le vérifie déjà, mais seul un index unique
 * protège contre deux créations simultanées.
 *
 * Si la base contient déjà des doublons (données antérieures), l'index ne peut pas être créé :
 * on les liste dans le log pour qu'ils soient corrigés (renommer/fusionner), sans bloquer le
 * démarrage. L'index sera créé au démarrage suivant une fois les doublons résolus.
 */
@Component
@Order(1)
@RequiredArgsConstructor
@Slf4j
public class ProductCodeUniqueIndexInitializer implements ApplicationRunner {

    private static final String INDEX = "ux_products_company_default_code";

    private final JdbcTemplate jdbc;

    @Override
    public void run(ApplicationArguments args) {
        List<Map<String, Object>> duplicates = jdbc.queryForList(
                "SELECT company_id, LOWER(TRIM(default_code)) AS code, COUNT(*) AS nb, STRING_AGG(id::text, ', ') AS ids " +
                "FROM products WHERE default_code IS NOT NULL AND TRIM(default_code) <> '' " +
                "GROUP BY company_id, LOWER(TRIM(default_code)) HAVING COUNT(*) > 1");
        if (!duplicates.isEmpty()) {
            duplicates.forEach(d -> log.warn(
                    "[ARTICLES] Référence en double (société {}) : '{}' portée par {} articles (ids {}) — à corriger",
                    d.get("company_id"), d.get("code"), d.get("nb"), d.get("ids")));
            log.warn("[ARTICLES] Index d'unicité {} non créé tant que ces doublons existent.", INDEX);
            return;
        }
        try {
            jdbc.execute("CREATE UNIQUE INDEX IF NOT EXISTS " + INDEX +
                    " ON products (company_id, LOWER(TRIM(default_code)))" +
                    " WHERE default_code IS NOT NULL AND TRIM(default_code) <> ''");
        } catch (Exception e) {
            log.warn("[ARTICLES] Création de l'index {} impossible : {}", INDEX, e.getMessage());
        }
    }
}

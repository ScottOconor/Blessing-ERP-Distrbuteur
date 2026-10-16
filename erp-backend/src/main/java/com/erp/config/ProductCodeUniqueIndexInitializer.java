package com.erp.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Garantit en base qu'une référence article (default_code) est unique par société, sans tenir
 * compte de la casse ni des espaces. StockService le vérifie déjà, mais seul un index unique
 * protège contre deux créations simultanées.
 *
 * Si la base contient déjà des doublons (données antérieures), l'index ne peut pas être créé :
 * ils sont signalés dans l'écran Articles (GET /api/stock/products/duplicate-codes) pour être
 * corrigés, et l'index est créé dès que le dernier est résolu (après chaque modification ou
 * suppression d'article), sans attendre un redémarrage.
 */
@Component
@Order(1)
@RequiredArgsConstructor
@Slf4j
public class ProductCodeUniqueIndexInitializer implements ApplicationRunner {

    private static final String INDEX = "ux_products_company_default_code";

    private final JdbcTemplate jdbc;

    /** Index déjà en place : plus aucun contrôle nécessaire jusqu'au prochain démarrage. */
    private volatile boolean indexPresent;

    @Override
    public void run(ApplicationArguments args) {
        if (!ensureIndex()) {
            findDuplicates(null).forEach(d -> log.warn(
                    "[ARTICLES] Référence en double (société {}) : '{}' portée par les articles {} — à corriger",
                    d.get("companyId"), d.get("code"), d.get("products")));
            log.warn("[ARTICLES] Index d'unicité {} non créé tant que ces doublons existent.", INDEX);
        }
    }

    /** Crée l'index si aucun doublon ne l'en empêche. Renvoie true si l'index est en place. */
    public synchronized boolean ensureIndex() {
        if (indexPresent) return true;
        Integer existing = jdbc.queryForObject(
                "SELECT COUNT(*) FROM pg_indexes WHERE tablename = 'products' AND indexname = ?", Integer.class, INDEX);
        if (existing != null && existing > 0) return indexPresent = true;
        if (!findDuplicates(null).isEmpty()) return false;
        try {
            jdbc.execute("CREATE UNIQUE INDEX IF NOT EXISTS " + INDEX +
                    " ON products (company_id, LOWER(TRIM(default_code)))" +
                    " WHERE default_code IS NOT NULL AND TRIM(default_code) <> ''");
            log.info("[ARTICLES] Index d'unicité {} créé : les références articles sont désormais uniques.", INDEX);
            return indexPresent = true;
        } catch (Exception e) {
            log.warn("[ARTICLES] Création de l'index {} impossible : {}", INDEX, e.getMessage());
            return false;
        }
    }

    /**
     * Références portées par plusieurs articles d'une même société (toutes sociétés si companyId
     * est null) : une entrée par référence, avec les articles concernés.
     */
    public List<Map<String, Object>> findDuplicates(Long companyId) {
        String sql = "SELECT p.company_id, LOWER(TRIM(p.default_code)) AS norm, p.id, p.default_code, p.name, p.active " +
                "FROM products p JOIN (" +
                "  SELECT company_id, LOWER(TRIM(default_code)) AS norm FROM products " +
                "  WHERE default_code IS NOT NULL AND TRIM(default_code) <> ''" +
                (companyId != null ? " AND company_id = ?" : "") +
                "  GROUP BY company_id, LOWER(TRIM(default_code)) HAVING COUNT(*) > 1" +
                ") d ON d.company_id = p.company_id AND d.norm = LOWER(TRIM(p.default_code)) " +
                "ORDER BY p.company_id, norm, p.id";
        List<Map<String, Object>> rows = companyId != null ? jdbc.queryForList(sql, companyId) : jdbc.queryForList(sql);
        Map<String, Map<String, Object>> byCode = new LinkedHashMap<>();
        for (Map<String, Object> r : rows) {
            Map<String, Object> group = byCode.computeIfAbsent(r.get("company_id") + "|" + r.get("norm"), k -> {
                Map<String, Object> g = new LinkedHashMap<>();
                g.put("companyId", r.get("company_id"));
                g.put("code", r.get("default_code"));
                g.put("products", new ArrayList<Map<String, Object>>());
                return g;
            });
            Map<String, Object> product = new LinkedHashMap<>();
            product.put("id", r.get("id"));
            product.put("defaultCode", r.get("default_code"));
            product.put("name", r.get("name"));
            product.put("active", r.get("active"));
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> products = (List<Map<String, Object>>) group.get("products");
            products.add(product);
        }
        return new ArrayList<>(byCode.values());
    }
}

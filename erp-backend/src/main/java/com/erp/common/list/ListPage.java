package com.erp.common.list;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

/** Une page d'une liste : totalElements et totals portent sur TOUTES les lignes filtrées. */
public record ListPage<T>(List<T> content, long totalElements, int page, int size, Map<String, BigDecimal> totals) {

    /** Groupe d'une liste regroupée : la clé, renvoyée en filtre (groupKey), en liste les lignes. */
    public record Group(String key, String label, long count, Map<String, BigDecimal> totals) {}
}

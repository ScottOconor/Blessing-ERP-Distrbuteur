package com.erp.common.list;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Description d'une liste paginée côté serveur (voir ListQueryService) : entité JPQL, jointures et
 * expressions des champs filtrables, regroupables et totalisables. Toutes les expressions sont des
 * constantes du code, jamais des valeurs reçues du client (qui passent toujours en paramètres liés).
 */
public final class ListDefinition {

    final String entity;
    final String joins;
    final String company;
    String date;
    String state;
    String journal;
    String journalName;
    String warehouse;
    String pointVente;
    String partnerId;
    String partnerName;
    String orderBy = "e.id DESC";
    final List<String> search = new ArrayList<>();
    final Map<String, String> sums = new LinkedHashMap<>();
    final List<String> conditions = new ArrayList<>();
    final Map<String, Object> conditionParams = new LinkedHashMap<>();
    /** Regroupements propres à la liste : clé → [expression de l'identifiant, expression du libellé, type de l'identifiant]. */
    final Map<String, Object[]> customGroups = new LinkedHashMap<>();
    /** Filtres d'égalité supplémentaires : nom du paramètre → [expression, type]. */
    final Map<String, Object[]> extraFilters = new LinkedHashMap<>();

    /** @param entity nom JPQL de l'entité (alias e) ; joins : « LEFT JOIN e.partner p … » ; company : expression de l'id société */
    public ListDefinition(String entity, String joins, String company) {
        this.entity = entity;
        this.joins = joins == null ? "" : " " + joins;
        this.company = company;
    }

    public ListDefinition date(String expr) { this.date = expr; return this; }
    public ListDefinition state(String expr) { this.state = expr; return this; }
    public ListDefinition journal(String idExpr, String nameExpr) { this.journal = idExpr; this.journalName = nameExpr; return this; }
    public ListDefinition warehouse(String expr) { this.warehouse = expr; return this; }
    public ListDefinition pointVente(String expr) { this.pointVente = expr; return this; }
    public ListDefinition partner(String idExpr, String nameExpr) { this.partnerId = idExpr; this.partnerName = nameExpr; return this; }
    public ListDefinition orderBy(String expr) { this.orderBy = expr; return this; }
    public ListDefinition search(String... exprs) { this.search.addAll(List.of(exprs)); return this; }
    public ListDefinition sum(String key, String expr) { this.sums.put(key, expr); return this; }

    /** Regroupement propre à la liste (ex. « destination » : emplacement de destination d'un bon). */
    public ListDefinition group(String key, String idExpr, String labelExpr, Class<?> idType) {
        customGroups.put(key, new Object[]{idExpr, labelExpr, idType});
        return this;
    }

    /** Condition fixe toujours appliquée (ex. « e.type = :fType »), avec ses paramètres. */
    public ListDefinition where(String condition, Object... nameValuePairs) {
        conditions.add(condition);
        for (int i = 0; i + 1 < nameValuePairs.length; i += 2) conditionParams.put((String) nameValuePairs[i], nameValuePairs[i + 1]);
        return this;
    }

    /** Filtre d'égalité optionnel, activé par le paramètre de requête du même nom (Long, String ou Boolean). */
    public ListDefinition filter(String param, String expr, Class<?> type) {
        extraFilters.put(param, new Object[]{expr, type});
        return this;
    }
}

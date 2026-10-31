package com.erp.common.list;

import com.erp.stock.repository.WarehouseRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * Listes paginées côté serveur, communes à tous les écrans : filtres (statut, période, journal,
 * entrepôt, point de vente, tiers, recherche texte, filtres propres à la liste), tri stable, totaux
 * et regroupements (mois, tiers, statut, entrepôt, journal) calculés en SQL ; seule la page demandée
 * est chargée puis convertie par le service du module.
 *
 * Paramètres de requête reconnus : page, size (1 à 500), state, dateFrom, dateTo, journalId,
 * warehouseId, pointVenteId, partnerId, search, groupBy + groupKey, et les filtres déclarés par
 * ListDefinition.filter. Les autres sont ignorés.
 */
@Service
@RequiredArgsConstructor
public class ListQueryService {

    public static final int MAX_PAGE_SIZE = 500;
    public static final int DEFAULT_PAGE_SIZE = 50;
    /** Clé du groupe « sans date » / « sans tiers » / « sans entrepôt »… */
    public static final String NONE = "none";
    private static final Set<String> PARTNER_GROUPS = Set.of("partenaire", "client", "fournisseur", "tiers");

    private final EntityManager em;
    private final WarehouseRepository warehouseRepo;

    /**
     * Page de la liste : identifiants de la page (tri de la définition, complété par l'id), chargés
     * par loader puis convertis par mapper, avec le nombre total et les totaux des lignes filtrées.
     */
    @Transactional(readOnly = true)
    public <E, T> ListPage<T> page(ListDefinition d, Map<String, String> params,
                                   Function<List<Long>, List<E>> loader, Function<List<E>, List<T>> mapper) {
        int page = intParam(params, "page", 0);
        int size = intParam(params, "size", DEFAULT_PAGE_SIZE);
        if (page < 0) throw new IllegalArgumentException("page doit être positif ou nul");
        if (size < 1 || size > MAX_PAGE_SIZE) throw new IllegalArgumentException("size doit être compris entre 1 et " + MAX_PAGE_SIZE);
        Where w = where(d, params, true);

        StringBuilder agg = new StringBuilder("SELECT COUNT(e)");
        d.sums.values().forEach(expr -> agg.append(", COALESCE(SUM(").append(expr).append("), 0)"));
        Object single = w.bind(em.createQuery(agg + " FROM " + d.entity + " e" + d.joins + w.jpql)).getSingleResult();
        Object[] row = single instanceof Object[] a ? a : new Object[]{single};
        Map<String, BigDecimal> totals = new LinkedHashMap<>();
        int i = 1;
        for (String key : d.sums.keySet()) totals.put(key, toDecimal(row[i++]));

        @SuppressWarnings("unchecked")
        List<Long> ids = (List<Long>) w.bind(em.createQuery("SELECT e.id FROM " + d.entity + " e" + d.joins + w.jpql
                        + " ORDER BY " + d.orderBy + (d.orderBy.contains("e.id") ? "" : ", e.id DESC")))
                .setFirstResult((int) Math.min((long) page * size, Integer.MAX_VALUE)).setMaxResults(size).getResultList();
        List<T> content = List.of();
        if (!ids.isEmpty()) {
            List<E> loaded = loader.apply(ids);
            content = mapper.apply(inOrder(ids, loaded));
        }
        return new ListPage<>(content, ((Number) row[0]).longValue(), page, size, totals);
    }

    /** Groupes des lignes filtrées (groupBy : mois, partenaire/client/fournisseur/tiers, statut, entrepot, journal). */
    @Transactional(readOnly = true)
    public List<ListPage.Group> groups(ListDefinition d, Map<String, String> params) {
        String groupBy = normalizeGroup(d, params.get("groupBy"));
        String[] g = groupExpressions(d, groupBy);
        Where w = where(d, params, false);
        StringBuilder q = new StringBuilder("SELECT ").append(g[0]).append(", ").append(g[1]).append(", COUNT(e)");
        d.sums.values().forEach(expr -> q.append(", COALESCE(SUM(").append(expr).append("), 0)"));
        q.append(" FROM ").append(d.entity).append(" e").append(d.joins).append(w.jpql).append(" GROUP BY ").append(g[2]);
        @SuppressWarnings("unchecked")
        List<Object[]> rows = w.bind(em.createQuery(q.toString())).getResultList();

        Map<Long, String> warehouseNames = new HashMap<>();
        if ("entrepot".equals(groupBy)) {
            warehouseRepo.findAllById(rows.stream().map(r -> (Long) r[0]).filter(Objects::nonNull).toList())
                    .forEach(wh -> warehouseNames.put(wh.getId(), wh.getName()));
        }
        List<ListPage.Group> groups = new ArrayList<>();
        for (Object[] r : rows) {
            boolean none = r[0] == null;
            String key, label;
            switch (groupBy) {
                case "mois" -> {
                    key = none ? NONE : String.format("%04d-%02d", ((Number) r[0]).intValue(), ((Number) r[1]).intValue());
                    label = none ? "(Sans date)" : key;
                }
                case "statut" -> { key = none ? NONE : String.valueOf(r[0]); label = key; }
                case "entrepot" -> {
                    key = none ? NONE : String.valueOf(r[0]);
                    label = none ? "(Sans entrepôt)" : warehouseNames.getOrDefault((Long) r[0], "(Entrepôt " + r[0] + ")");
                }
                case "journal" -> { key = none ? NONE : String.valueOf(r[0]); label = none ? "(Sans journal)" : String.valueOf(r[1]); }
                case "partenaire" -> { key = none ? NONE : String.valueOf(r[0]); label = none ? "(Sans tiers)" : String.valueOf(r[1]); }
                default -> { key = none ? NONE : String.valueOf(r[0]); label = none ? "(Non renseigné)" : String.valueOf(r[1]); }
            }
            Map<String, BigDecimal> totals = new LinkedHashMap<>();
            int i = 3;
            for (String k : d.sums.keySet()) totals.put(k, toDecimal(r[i++]));
            groups.add(new ListPage.Group(key, label, ((Number) r[2]).longValue(), totals));
        }
        return groups;
    }

    /** Chargement en un appel des entités d'une page (fetch : jointures FETCH éventuelles). */
    public <E> List<E> loadByIds(Class<E> type, String fetch, List<Long> ids) {
        return em.createQuery("SELECT DISTINCT e FROM " + type.getSimpleName() + " e" + (fetch == null ? "" : " " + fetch)
                + " WHERE e.id IN :ids", type).setParameter("ids", ids).getResultList();
    }

    // ── Construction de la clause WHERE ──────────────────────────────────────────────────────────

    private Where where(ListDefinition d, Map<String, String> p, boolean withGroup) {
        Long companyId = longParam(p, "companyId");
        if (companyId == null) throw new IllegalArgumentException("companyId est obligatoire");

        Where w = new Where();
        w.and(d.company + " = :companyId", "companyId", companyId);
        for (String c : d.conditions) w.and(c);
        w.params.putAll(d.conditionParams);

        String state = p.get("state");
        if (d.state != null && state != null && !state.isBlank() && !"all".equals(state)) w.and(d.state + " = :state", "state", state);
        if (d.date != null) {
            LocalDate from = dateParam(p, "dateFrom"), to = dateParam(p, "dateTo");
            if (from != null) w.and(d.date + " >= :dateFrom", "dateFrom", from);
            if (to != null) w.and(d.date + " <= :dateTo", "dateTo", to);
        }
        optionalId(w, d.journal, p, "journalId");
        optionalId(w, d.warehouse, p, "warehouseId");
        optionalId(w, d.pointVente, p, "pointVenteId");
        optionalId(w, d.partnerId, p, "partnerId");

        String search = p.get("search");
        if (!d.search.isEmpty() && search != null && !search.isBlank()) {
            String cond = d.search.stream().map(expr -> "LOWER(COALESCE(" + expr + ", '')) LIKE :search")
                    .collect(Collectors.joining(" OR ", "(", ")"));
            w.and(cond, "search", "%" + search.trim().toLowerCase(Locale.ROOT) + "%");
        }
        for (Map.Entry<String, Object[]> f : d.extraFilters.entrySet()) {
            String raw = p.get(f.getKey());
            if (raw == null || raw.isBlank()) continue;
            Object value = convert(f.getKey(), raw, (Class<?>) f.getValue()[1]);
            w.and(f.getValue()[0] + " = :x_" + f.getKey(), "x_" + f.getKey(), value);
        }

        String groupBy = p.get("groupBy");
        if (withGroup && groupBy != null && !groupBy.isBlank()) {
            String g = normalizeGroup(d, groupBy);
            String key = p.get("groupKey");
            if (key == null) throw new IllegalArgumentException("groupKey est obligatoire avec groupBy");
            boolean none = NONE.equals(key);
            try {
                switch (g) {
                    case "mois" -> {
                        if (none) { w.and(d.date + " IS NULL"); break; }
                        YearMonth ym = YearMonth.parse(key);
                        w.and(d.date + " >= :gFrom", "gFrom", ym.atDay(1));
                        w.and(d.date + " <= :gTo", "gTo", ym.atEndOfMonth());
                    }
                    case "statut" -> { if (none) w.and(d.state + " IS NULL"); else w.and(d.state + " = :gKey", "gKey", key); }
                    case "entrepot" -> { if (none) w.and(d.warehouse + " IS NULL"); else w.and(d.warehouse + " = :gKey", "gKey", Long.valueOf(key)); }
                    case "journal" -> { if (none) w.and(d.journal + " IS NULL"); else w.and(d.journal + " = :gKey", "gKey", Long.valueOf(key)); }
                    case "partenaire" -> { if (none) w.and(d.partnerId + " IS NULL"); else w.and(d.partnerId + " = :gKey", "gKey", partnerKey(d, key)); }
                    default -> {
                        Object[] c = d.customGroups.get(g);
                        if (none) w.and(c[0] + " IS NULL");
                        else w.and(c[0] + " = :gKey", "gKey", convert("groupKey", key, (Class<?>) c[2]));
                    }
                }
            } catch (NumberFormatException | DateTimeParseException e) {
                throw new IllegalArgumentException("groupKey invalide : " + key);
            }
        }
        return w;
    }

    /** Regroupement par tiers : par identifiant, ou par nom quand la liste n'a que le nom (bons de stock). */
    private static Object partnerKey(ListDefinition d, String key) {
        return d.partnerId.equals(d.partnerName) ? key : Long.valueOf(key);
    }

    private static String[] groupExpressions(ListDefinition d, String g) {
        String[] out = switch (g) {
            case "mois" -> d.date == null ? null
                    : new String[]{"YEAR(" + d.date + ")", "MONTH(" + d.date + ")", "YEAR(" + d.date + "), MONTH(" + d.date + ")"};
            case "statut" -> d.state == null ? null : new String[]{d.state, d.state, d.state};
            case "entrepot" -> d.warehouse == null ? null : new String[]{d.warehouse, d.warehouse, d.warehouse};
            case "journal" -> d.journal == null ? null : new String[]{d.journal, "MIN(" + d.journalName + ")", d.journal};
            case "partenaire" -> d.partnerId == null ? null
                    : new String[]{d.partnerId, d.partnerName, d.partnerId.equals(d.partnerName) ? d.partnerId : d.partnerId + ", " + d.partnerName};
            default -> {
                Object[] c = d.customGroups.get(g);
                yield c == null ? null : new String[]{(String) c[0], "MIN(" + c[1] + ")", (String) c[0]};
            }
        };
        if (out == null) throw new IllegalArgumentException("Regroupement non disponible pour cette liste : " + g);
        return out;
    }

    private static String normalizeGroup(ListDefinition d, String groupBy) {
        if (groupBy == null || groupBy.isBlank()) throw new IllegalArgumentException("groupBy est obligatoire");
        String g = groupBy.trim().toLowerCase(Locale.ROOT);
        if (d.customGroups.containsKey(g)) return g;
        if (PARTNER_GROUPS.contains(g)) return "partenaire";
        if (Set.of("mois", "statut", "entrepot", "journal").contains(g)) return g;
        throw new IllegalArgumentException("Regroupement inconnu : " + groupBy);
    }

    private static void optionalId(Where w, String expr, Map<String, String> p, String name) {
        Long v = longParam(p, name);
        if (expr != null && v != null && v > 0) w.and(expr + " = :" + name, name, v);
    }

    private static Object convert(String name, String raw, Class<?> type) {
        try {
            if (type == Long.class) return Long.valueOf(raw.trim());
            if (type == Boolean.class) return Boolean.valueOf(raw.trim());
            if (type.isEnum()) {
                @SuppressWarnings({"unchecked", "rawtypes"})
                Object e = Enum.valueOf((Class<Enum>) type, raw.trim());
                return e;
            }
            return raw;
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Valeur invalide pour « " + name + " »");
        }
    }

    private static Long longParam(Map<String, String> p, String name) {
        String v = p.get(name);
        if (v == null || v.isBlank()) return null;
        try { return Long.valueOf(v.trim()); }
        catch (NumberFormatException e) { throw new IllegalArgumentException("Valeur invalide pour « " + name + " »"); }
    }

    private static int intParam(Map<String, String> p, String name, int def) {
        Long v = longParam(p, name);
        return v == null ? def : (int) Math.max(Integer.MIN_VALUE, Math.min(Integer.MAX_VALUE, v));
    }

    private static LocalDate dateParam(Map<String, String> p, String name) {
        String v = p.get(name);
        if (v == null || v.isBlank()) return null;
        try { return LocalDate.parse(v.trim()); }
        catch (DateTimeParseException e) { throw new IllegalArgumentException("Date invalide pour « " + name + " » (AAAA-MM-JJ)"); }
    }

    private static BigDecimal toDecimal(Object v) {
        if (v == null) return BigDecimal.ZERO;
        if (v instanceof BigDecimal b) return b;
        return new BigDecimal(v.toString());
    }

    private static <E> List<E> inOrder(List<Long> ids, List<E> loaded) {
        Map<Object, E> byId = new HashMap<>();
        for (E e : loaded) byId.put(idOf(e), e);
        return ids.stream().map(byId::get).filter(Objects::nonNull).toList();
    }

    /** Identifiant d'une entité chargée (toutes les entités de liste exposent getId()). */
    private static Object idOf(Object entity) {
        try { return entity.getClass().getMethod("getId").invoke(entity); }
        catch (ReflectiveOperationException e) { throw new IllegalStateException("Entité sans getId() : " + entity.getClass(), e); }
    }

    /** Clause WHERE faite de fragments fixes : les valeurs passent toujours en paramètres liés. */
    private static final class Where {
        private final StringBuilder sb = new StringBuilder();
        final Map<String, Object> params = new HashMap<>();
        String jpql = "";

        void and(String cond) {
            sb.append(sb.isEmpty() ? " WHERE " : " AND ").append('(').append(cond).append(')');
            jpql = sb.toString();
        }

        void and(String cond, String name, Object value) {
            and(cond);
            params.put(name, value);
        }

        Query bind(Query q) {
            params.forEach((k, v) -> { if (q.getParameters().stream().anyMatch(x -> k.equals(x.getName()))) q.setParameter(k, v); });
            return q;
        }
    }
}

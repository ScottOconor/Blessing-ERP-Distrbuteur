package com.erp.sales.service;

import com.erp.sales.dto.InvoiceListDTO;
import com.erp.sales.dto.SalesInvoiceDTO;
import com.erp.sales.entity.SalesInvoice;
import com.erp.stock.repository.WarehouseRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.persistence.TypedQuery;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * Liste des factures paginée côté serveur : filtres, tri, totaux et regroupements calculés en SQL,
 * seule la page demandée est convertie en DTO. L'ancienne liste complète (/invoices, en flux)
 * reste inchangée pour ses autres consommateurs (paiements, vente rapide, exports).
 *
 * Tri stable (date, numéro, id décroissants) : des pages successives ne se recouvrent pas et
 * n'omettent aucune facture tant que les données ne changent pas entre deux appels.
 */
@Service
@RequiredArgsConstructor
public class SalesInvoiceListService {

    public static final int MAX_PAGE_SIZE = 500;
    /** Clé du groupe « sans date » / « sans client » / « sans entrepôt ». */
    public static final String NONE = "none";
    private static final Set<String> TYPES = Set.of("invoice", "credit_note");
    private static final Set<String> GROUPS = Set.of("mois", "client", "statut", "entrepot");
    private static final String SUMS = "COUNT(i), COALESCE(SUM(i.totalHT),0), COALESCE(SUM(i.totalTTC),0), "
            + "COALESCE(SUM(i.montantPaye),0), COALESCE(SUM(i.montantDu),0)";

    private final EntityManager em;
    private final SalesService salesService;
    private final WarehouseRepository warehouseRepo;
    private final com.erp.common.service.TenantGuard tenantGuard;

    public record Filter(Long companyId, String type, Long pointVenteId, String state, LocalDate dateFrom,
                         LocalDate dateTo, Long journalId, String groupBy, String groupKey) {}

    @Transactional(readOnly = true)
    public InvoiceListDTO.Page page(Filter f, int page, int size) {
        if (page < 0) throw new IllegalArgumentException("page doit être positif ou nul");
        if (size < 1 || size > MAX_PAGE_SIZE) throw new IllegalArgumentException("size doit être compris entre 1 et " + MAX_PAGE_SIZE);
        Where w = where(f, true);

        Object[] agg = (Object[]) w.bind(em.createQuery("SELECT " + SUMS + " FROM SalesInvoice i" + w.jpql)).getSingleResult();
        List<Long> ids = w.bind(em.createQuery("SELECT i.id FROM SalesInvoice i" + w.jpql
                        + " ORDER BY i.date DESC NULLS LAST, i.name DESC NULLS LAST, i.id DESC", Long.class))
                .setFirstResult((int) Math.min((long) page * size, Integer.MAX_VALUE)).setMaxResults(size).getResultList();

        List<SalesInvoiceDTO> content = List.of();
        if (!ids.isEmpty()) {
            Map<Long, SalesInvoice> byId = em.createQuery("SELECT i FROM SalesInvoice i LEFT JOIN FETCH i.partner "
                            + "LEFT JOIN FETCH i.journal WHERE i.id IN :ids", SalesInvoice.class)
                    .setParameter("ids", ids).getResultList().stream()
                    .collect(Collectors.toMap(SalesInvoice::getId, Function.identity()));
            content = salesService.toListDTOs(f.companyId(), ids.stream().map(byId::get).toList());
        }
        return new InvoiceListDTO.Page(content, (Long) agg[0], page, size,
                new InvoiceListDTO.Totals((BigDecimal) agg[1], (BigDecimal) agg[2], (BigDecimal) agg[3], (BigDecimal) agg[4]),
                journals(f));
    }

    /** Groupes des factures filtrées, avec effectif et totaux ; libellés du mois et du statut mis en forme par l'écran. */
    @Transactional(readOnly = true)
    public List<InvoiceListDTO.Group> groups(Filter f) {
        if (f.groupBy() == null || !GROUPS.contains(f.groupBy())) throw new IllegalArgumentException("Regroupement inconnu : " + f.groupBy());
        Where w = where(new Filter(f.companyId(), f.type(), f.pointVenteId(), f.state(), f.dateFrom(), f.dateTo(),
                f.journalId(), null, null), false);
        String q = switch (f.groupBy()) {
            case "mois" -> "SELECT YEAR(i.date), MONTH(i.date), " + SUMS + " FROM SalesInvoice i" + w.jpql + " GROUP BY YEAR(i.date), MONTH(i.date)";
            case "client" -> "SELECT p.id, p.name, " + SUMS + " FROM SalesInvoice i LEFT JOIN i.partner p" + w.jpql + " GROUP BY p.id, p.name";
            case "statut" -> "SELECT i.state, i.state, " + SUMS + " FROM SalesInvoice i" + w.jpql + " GROUP BY i.state";
            default -> "SELECT i.warehouseId, i.warehouseId, " + SUMS + " FROM SalesInvoice i" + w.jpql + " GROUP BY i.warehouseId";
        };
        List<Object[]> rows = w.bind(em.createQuery(q, Object[].class)).getResultList();

        Map<Long, String> warehouseNames = new HashMap<>();
        if ("entrepot".equals(f.groupBy())) {
            warehouseRepo.findAllById(rows.stream().map(r -> (Long) r[0]).filter(Objects::nonNull).toList())
                    .forEach(wh -> warehouseNames.put(wh.getId(), wh.getName()));
        }
        List<InvoiceListDTO.Group> groups = new ArrayList<>();
        for (Object[] r : rows) {
            boolean none = r[0] == null;
            String key, label;
            switch (f.groupBy()) {
                case "mois" -> {
                    key = none ? NONE : String.format("%04d-%02d", ((Number) r[0]).intValue(), ((Number) r[1]).intValue());
                    label = none ? "(Sans date)" : key;
                }
                case "client" -> {
                    key = none ? NONE : String.valueOf(r[0]);
                    label = none ? "(Sans client)" : String.valueOf(r[1]);
                }
                case "statut" -> {
                    key = none ? NONE : (String) r[0];
                    label = key;
                }
                default -> {
                    key = none ? NONE : String.valueOf(r[0]);
                    label = none ? "(Sans entrepôt)" : warehouseNames.getOrDefault((Long) r[0], "(Entrepôt " + r[0] + ")");
                }
            }
            groups.add(new InvoiceListDTO.Group(key, label, (Long) r[2], (BigDecimal) r[3], (BigDecimal) r[4],
                    (BigDecimal) r[5], (BigDecimal) r[6]));
        }
        return groups;
    }

    /** Journaux présents dans le périmètre (société, type, point de vente), indépendamment des autres filtres. */
    private List<InvoiceListDTO.JournalRef> journals(Filter f) {
        Where w = where(new Filter(f.companyId(), f.type(), f.pointVenteId(), null, null, null, null, null, null), false);
        return w.bind(em.createQuery("SELECT DISTINCT j.id, j.name FROM SalesInvoice i JOIN i.journal j" + w.jpql, Object[].class))
                .getResultList().stream()
                .map(r -> new InvoiceListDTO.JournalRef((Long) r[0], r[1] != null ? (String) r[1] : String.valueOf(r[0])))
                .sorted((a, b) -> a.name().compareToIgnoreCase(b.name()))
                .toList();
    }

    private Where where(Filter f, boolean withGroup) {
        if (f.companyId() == null) throw new IllegalArgumentException("companyId est obligatoire");
        tenantGuard.check(f.companyId());
        String type = f.type() == null || f.type().isBlank() ? "invoice" : f.type();
        if (!TYPES.contains(type)) throw new IllegalArgumentException("Type inconnu : " + type);

        Where w = new Where();
        w.and("i.company.id = :companyId", "companyId", f.companyId());
        w.and("i.type = :type", "type", type);
        if (f.state() != null && !f.state().isBlank() && !"all".equals(f.state())) w.and("i.state = :state", "state", f.state());
        if (f.dateFrom() != null) w.and("i.date >= :dateFrom", "dateFrom", f.dateFrom());
        if (f.dateTo() != null) w.and("i.date <= :dateTo", "dateTo", f.dateTo());
        if (f.journalId() != null && f.journalId() > 0) w.and("i.journal.id = :journalId", "journalId", f.journalId());

        if (withGroup && f.groupBy() != null && !f.groupBy().isBlank()) {
            if (!GROUPS.contains(f.groupBy())) throw new IllegalArgumentException("Regroupement inconnu : " + f.groupBy());
            String k = f.groupKey();
            if (k == null) throw new IllegalArgumentException("groupKey est obligatoire avec groupBy");
            boolean none = NONE.equals(k);
            try {
                switch (f.groupBy()) {
                    case "mois" -> {
                        if (none) {
                            w.and("i.date IS NULL");
                        } else {
                            YearMonth ym = YearMonth.parse(k);
                            w.and("i.date >= :gFrom", "gFrom", ym.atDay(1));
                            w.and("i.date <= :gTo", "gTo", ym.atEndOfMonth());
                        }
                    }
                    case "client" -> { if (none) w.and("i.partner IS NULL"); else w.and("i.partner.id = :gPartner", "gPartner", Long.valueOf(k)); }
                    case "statut" -> { if (none) w.and("i.state IS NULL"); else w.and("i.state = :gState", "gState", k); }
                    default -> { if (none) w.and("i.warehouseId IS NULL"); else w.and("i.warehouseId = :gWh", "gWh", Long.valueOf(k)); }
                }
            } catch (NumberFormatException | DateTimeParseException e) {
                throw new IllegalArgumentException("groupKey invalide : " + k);
            }
        }
        return w;
    }

    /** Clause WHERE faite de fragments fixes : les valeurs passent toujours en paramètres liés. */
    private static final class Where {
        private final StringBuilder sb = new StringBuilder();
        private final Map<String, Object> params = new HashMap<>();
        String jpql = "";

        void and(String cond) {
            sb.append(sb.isEmpty() ? " WHERE " : " AND ").append(cond);
            jpql = sb.toString();
        }

        void and(String cond, String name, Object value) {
            and(cond);
            params.put(name, value);
        }

        <T> TypedQuery<T> bind(TypedQuery<T> q) {
            params.forEach(q::setParameter);
            return q;
        }

        Query bind(Query q) {
            params.forEach(q::setParameter);
            return q;
        }
    }
}

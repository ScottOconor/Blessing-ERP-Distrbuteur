package com.erp.sales.dto;

import java.math.BigDecimal;
import java.util.List;

/** Réponses de la liste paginée des factures (SalesInvoiceListService). */
public final class InvoiceListDTO {

    private InvoiceListDTO() {}

    /** Une page, avec le nombre total et les totaux de TOUTES les factures filtrées (pas seulement de la page). */
    public record Page(List<SalesInvoiceDTO> content, long totalElements, int page, int size,
                       Totals totals, List<JournalRef> journals) {}

    public record Totals(BigDecimal ht, BigDecimal ttc, BigDecimal paye, BigDecimal du) {}

    public record JournalRef(Long id, String name) {}

    /** Groupe (mois, client, statut, entrepôt) : clé à renvoyer en filtre pour en lister les factures. */
    public record Group(String key, String label, long count, BigDecimal totalHT, BigDecimal totalTTC,
                        BigDecimal paye, BigDecimal du) {}
}

package com.erp.declaration.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

/**
 * Plan de génération calculé par l'aperçu : factures prévues (client, entrepôt, date, lignes).
 * Le même plan est renvoyé tel quel pour la génération, afin que les factures créées soient
 * exactement celles affichées dans l'aperçu.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InvoiceGenerationPlan {
    private Long companyId;
    private String notes;
    /** Paramètres d'origine, conservés dans l'historique des générations */
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private BigDecimal minAmount;
    private BigDecimal maxAmount;
    private BigDecimal requestedTotal;
    private BigDecimal plannedTotal;
    @Builder.Default
    private List<PlannedInvoice> invoices = new ArrayList<>();
    @Builder.Default
    private List<String> warnings = new ArrayList<>();

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PlannedInvoice {
        private LocalDate date;
        private Long partnerId;
        private String partnerName;
        private Long warehouseId;
        private String warehouseName;
        private BigDecimal totalHT;
        private BigDecimal totalTVA;
        private BigDecimal netAPayer;
        @Builder.Default
        private List<PlannedLine> lines = new ArrayList<>();
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PlannedLine {
        private Long productId;
        private String productCode;
        private String productName;
        private BigDecimal quantity;
        private BigDecimal prixUnitaire;
        private BigDecimal tauxTVA;
        private BigDecimal montantTTC;
    }
}

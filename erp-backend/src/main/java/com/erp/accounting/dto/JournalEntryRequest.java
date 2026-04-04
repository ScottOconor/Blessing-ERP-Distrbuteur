package com.erp.accounting.dto;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JournalEntryRequest {

    @NotNull
    private Long journalId;

    @NotNull
    private LocalDate date;

    private String ref;

    private Long partnerId;

    @NotNull
    private Long companyId;

    @NotNull
    private List<LineRequest> lines;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class LineRequest {
        @NotNull
        private Long accountId;
        private Long partnerId;
        private String name;
        @NotNull
        private BigDecimal debit;
        @NotNull
        private BigDecimal credit;
        /** Compte analytique principal */
        private Long analyticAccountId;
        /** Ventilation analytique détaillée (optionnel) */
        private List<AnalyticDistribution> analyticDistributions;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class AnalyticDistribution {
        private Long analyticAccountId;
        private BigDecimal amount;
    }
}

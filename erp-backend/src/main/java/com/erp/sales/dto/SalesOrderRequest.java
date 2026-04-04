package com.erp.sales.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SalesOrderRequest {

    private Long partnerId;
    private Long journalId;
    private LocalDate date;
    private LocalDate dateEcheance;
    private String notes;
    private Long companyId;
    private List<LineRequest> lines;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class LineRequest {
        private Long productId;
        private String productCode;
        private String description;
        private BigDecimal quantity;
        private BigDecimal prixUnitaire;
        private BigDecimal tauxRemise;    // % remise, défaut 0
        private BigDecimal tauxTVA;       // % TVA, ex: 19.25
        private String accountCode;       // compte de produit, ex: "706100"
    }
}

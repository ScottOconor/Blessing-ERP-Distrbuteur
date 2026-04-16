package com.erp.purchases.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data @NoArgsConstructor @AllArgsConstructor
public class PurchaseOrderRequest {
    private LocalDate date;
    private LocalDate dateExpected;
    private Long partnerId;
    private String notes;
    private Long companyId;
    private List<LineRequest> lines;

    @Data @NoArgsConstructor @AllArgsConstructor
    public static class LineRequest {
        private Long productId;
        private String productCode;
        private String description;
        private BigDecimal quantity;
        private BigDecimal prixUnitaire;
        private BigDecimal tauxTVA;
        private String accountCode;
        private Long categoryId;   // catégorie produit (remise, précompte)
        private boolean consigne;  // exclut PSA/remise
    }
}

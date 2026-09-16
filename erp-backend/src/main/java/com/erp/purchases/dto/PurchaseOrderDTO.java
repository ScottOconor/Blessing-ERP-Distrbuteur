package com.erp.purchases.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PurchaseOrderDTO {
    private Long id;
    private String name;
    private LocalDate date;
    private LocalDate dateExpected;
    private String state;
    private String notes;
    private Long partnerId;
    private String partnerName;
    private Long companyId;
    private List<LineDTO> lines;
    private BigDecimal totalHT;
    private BigDecimal totalTVA;
    private BigDecimal totalTTC;
    private Long pickingId;
    private String pickingName;
    private String pickingState;
    private Long invoiceId;
    private String invoiceName;
    private String invoiceState;
    /** Nom de l'entrepôt qui recevra physiquement la marchandise (Dépôt Achat résolu) — informatif */
    private String receptionWarehouseName;
    private LocalDateTime createdAt;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class LineDTO {
        private Long id;
        private Long productId;
        private String productCode;
        private String description;
        private BigDecimal quantity;
        private BigDecimal prixUnitaire;
        private BigDecimal tauxTVA;
        private String accountCode;
        private BigDecimal montantHT;
        private BigDecimal montantTVA;
        private BigDecimal montantTTC;
    }
}

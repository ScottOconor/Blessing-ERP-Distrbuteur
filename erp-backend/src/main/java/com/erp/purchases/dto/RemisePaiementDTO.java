package com.erp.purchases.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class RemisePaiementDTO {
    private Long id;
    private String name;
    private Long partnerId;
    private String partnerName;
    private LocalDate date;
    private String state;
    private BigDecimal totalAmount;
    private Long invoiceId;
    private String invoiceName;
    /** Facture remise générée (FA-xxx) */
    private Long generatedInvoiceId;
    private String generatedInvoiceName;
    private Long companyId;
    private String notes;
    private LocalDateTime createdAt;
    private List<LineDTO> lines;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class LineDTO {
        private Long id;
        private Long categoryId;
        private String categoryName;
        private BigDecimal quantite;
        private BigDecimal montantUnitaire;
        private BigDecimal montantTotal;
    }
}

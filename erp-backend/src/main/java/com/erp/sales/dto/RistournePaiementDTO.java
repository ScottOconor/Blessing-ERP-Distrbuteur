package com.erp.sales.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class RistournePaiementDTO {
    private Long id;
    private String name;
    private Long partnerId;
    private String partnerName;
    private LocalDate date;
    private String state;
    private BigDecimal totalAmount;
    private Long invoiceId;
    private String invoiceName;
    /** Facture ristourne générée (FV-xxx) */
    private Long generatedInvoiceId;
    private String generatedInvoiceName;
    /** Écriture comptable générée */
    private Long accountMoveId;
    private String accountMoveName;
    private Long companyId;
    private String notes;
    private String typeRistourne;
    private LocalDateTime createdAt;
    /** Lignes par catégorie (agrégé) */
    private List<LineDTO> lines;
    /** Lignes par article individuel */
    private List<ArticleLineDTO> articleLines;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class LineDTO {
        private Long id;
        private Long categoryId;
        private String categoryName;
        private BigDecimal quantite;
        private BigDecimal montantUnitaire;
        private BigDecimal montantTotal;
        private BigDecimal montantTTC;
    }

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class ArticleLineDTO {
        private String productCode;
        private String productName;
        private String categoryName;
        private BigDecimal quantite;
        private BigDecimal montantUnitaire;
        private BigDecimal montantTotal;
    }
}

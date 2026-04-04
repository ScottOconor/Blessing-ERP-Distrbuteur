package com.erp.sales.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SalesInvoiceDTO {

    private Long id;
    private String name;
    private LocalDate date;
    private LocalDate dateEcheance;
    private String state;
    private String notes;

    private Long partnerId;
    private String partnerName;
    private Long journalId;
    private String journalName;
    private Long companyId;

    /** invoice / credit_note */
    private String type;
    private Long originalInvoiceId;
    private String originalInvoiceName;

    private Long salesOrderId;
    private String salesOrderName;
    private Long accountMoveId;
    private String accountMoveName;

    private BigDecimal totalHT;
    private BigDecimal totalTVA;
    private BigDecimal totalTTC;
    private BigDecimal montantPaye;
    private BigDecimal montantDu;

    private List<LineDTO> lines;
    private List<InvoicePaymentDTO> payments;
    private LocalDateTime createdAt;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class LineDTO {
        private Long id;
        private String productCode;
        private String description;
        private BigDecimal quantity;
        private BigDecimal prixUnitaire;
        private BigDecimal tauxRemise;
        private BigDecimal tauxTVA;
        private String accountCode;
        private BigDecimal montantHT;
        private BigDecimal montantTVA;
        private BigDecimal montantTTC;
    }
}

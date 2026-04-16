package com.erp.purchases.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseInvoiceDTO {

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

    private Long purchaseOrderId;
    private String purchaseOrderName;
    private Long accountMoveId;
    private String accountMoveName;

    /** Bon de réception Dépôt Achat */
    private Long pickingId;
    private String pickingState;

    private BigDecimal totalHT;
    private BigDecimal totalTVA;
    private BigDecimal totalTTC;
    private BigDecimal montantPaye;
    private BigDecimal montantDu;

    /** Remise fournisseur TTC (informatif, non déduit de la facture) */
    private BigDecimal totalRemise;
    /** Précompte total */
    private BigDecimal totalPrecompte;
    /** Total liquide nu */
    private BigDecimal totalLiquideNu;
    /** Net à payer = TTC - précompte */
    private BigDecimal netAPayer;

    private List<LineDTO> lines;
    private List<RemiseDetailDTO> remiseDetails;
    private List<PaymentDTO> payments;
    private LocalDateTime createdAt;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class RemiseDetailDTO {
        private String categoryName;
        private BigDecimal quantite;
        private BigDecimal montantUnitaire;
        private BigDecimal montantTotal;
        private String typeRemise;
    }

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
        private BigDecimal tauxTVA;
        private String accountCode;
        private Long categoryId;
        private BigDecimal montantHT;
        private BigDecimal montantTVA;
        private BigDecimal montantTTC;
        private BigDecimal precompte;
        private BigDecimal prixUnitaireTTC;
        private boolean consigne;
        private String categoryName;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PaymentDTO {
        private Long id;
        private String name;
        private LocalDate date;
        private BigDecimal amount;
        private String memo;
        private String state;
        private Long journalId;
        private String journalName;
    }
}

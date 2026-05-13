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
    private Long warehouseId;
    private String warehouseName;
    /** Solde courant du partenaire : positif = il nous doit, négatif = on lui doit */
    private java.math.BigDecimal partnerBalance;
    /** Total des avoirs non encore compensés disponibles pour ce client */
    private java.math.BigDecimal partnerCreditDisponible;

    private BigDecimal totalHT;
    private BigDecimal totalTVA;
    private BigDecimal totalTTC;
    private BigDecimal montantPaye;
    private BigDecimal montantDu;

    /** Ristourne TTC déduite */
    private BigDecimal totalRistourne;
    /** Frais d'enlèvement TTC */
    private BigDecimal fraisEnlevementTTC;
    /** Précompte total (retenue source) */
    private BigDecimal totalPrecompte;
    /** Total liquide nu = base de calcul ristourne */
    private BigDecimal totalLiquideNu;
    /** Net à payer = TTC - ristourne + enlèvement */
    private BigDecimal netAPayer;
    /** Total taxe Guinness (300 par ligne catégorie Guinness) */
    private BigDecimal totalGuinessTaxe;

    private List<LineDTO> lines;
    private List<RistourneDetailDTO> ristourneDetails;
    private List<InvoicePaymentDTO> payments;
    private LocalDateTime createdAt;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class RistourneDetailDTO {
        private String categoryName;
        private BigDecimal quantite;
        private BigDecimal montantUnitaire;
        private BigDecimal montantTotal;
        private String typeRistourne;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class LineDTO {
        private Long id;
        private Long productId;
        private String productCode;
        private String description;
        private BigDecimal quantity;
        private BigDecimal prixUnitaire;
        private BigDecimal tauxRemise;
        private BigDecimal tauxTVA;
        private String accountCode;
        private Long categoryId;
        private BigDecimal montantHT;
        private BigDecimal montantTVA;
        private BigDecimal montantTTC;
        private BigDecimal precompte;
        private BigDecimal fraisEnlevement;
        private BigDecimal prixUnitaireTTC;
        private boolean consigne;
        private String categoryName;
        private BigDecimal guinessTaxe;
    }
}

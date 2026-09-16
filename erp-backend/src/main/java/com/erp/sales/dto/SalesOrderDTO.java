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
public class SalesOrderDTO {

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
    private Long warehouseId;
    private String warehouseName;

    private BigDecimal totalHT;
    private BigDecimal totalTVA;
    private BigDecimal totalTTC;
    private BigDecimal totalRemise;

    // Remplis depuis la facture liée quand le bon est confirmé
    private BigDecimal totalPrecompte;
    private BigDecimal fraisEnlevementTTC;
    private BigDecimal totalRabais;
    private BigDecimal totalRabaisTTC;
    private BigDecimal netAPayer;

    private List<LineDTO> lines;
    private LocalDateTime createdAt;
    private String createdBy;

    // Facture liée (si confirmé)
    private Long invoiceId;
    private String invoiceName;

    /** Référence eLeader si ce bon a été importé via le module eLeader */
    private String eleaderReference;

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
        private BigDecimal montantHT;
        private BigDecimal montantTVA;
        private BigDecimal montantTTC;
        private BigDecimal rabaisUnitaire;
        private BigDecimal totalRabaisLigne;
        private BigDecimal totalRabaisLigneTTC;
    }
}

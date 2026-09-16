package com.erp.purchases.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseInvoiceRequest {

    /** invoice (défaut) / credit_note */
    private String type;
    private Long originalInvoiceId;

    private Long partnerId;
    private Long journalId;
    private LocalDate date;
    private LocalDate dateEcheance;
    private String notes;
    private Long companyId;
    private Long warehouseId;
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
        /** Rabais unitaire HT déjà résolu côté client (prix catalogue - prix net) */
        private BigDecimal rabaisUnitaire;
        private BigDecimal tauxTVA;
        private String accountCode;
        /** Catégorie produit (pour calcul précompte) */
        private Long categoryId;
        /** Produit consigne : exclut du précompte */
        private boolean consigne;
    }
}

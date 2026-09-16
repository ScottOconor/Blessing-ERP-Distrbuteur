package com.erp.sales.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class SalesInvoiceRequest {

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
        private BigDecimal tauxRemise;
        private BigDecimal tauxTVA;
        private String accountCode;
        /** Catégorie du produit (pour calcul frais d'enlèvement) */
        private Long categoryId;
        /** Produit consigne : exclut du précompte, ristourne, enlèvement */
        private boolean consigne;
        /** Rabais unitaire accordé à ce client (= salePrice - prixClient). 0 si aucun tarif client. */
        private BigDecimal rabaisUnitaire;
        /** Ligne de règlement de ristourne/remise (avoir) : ne doit jamais générer de PSA (précompte) */
        private boolean excludePrecompte;
    }
}

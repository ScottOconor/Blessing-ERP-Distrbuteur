package com.erp.purchases.dto;

import lombok.*;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PrixFournisseurArticleDTO {

    private Long id;

    private Long productId;
    private String productCode;
    private String productName;
    /** Prix d'achat standard du produit (standardPrice) */
    private BigDecimal standardPrice;

    private Long fournisseurId;
    private String fournisseurName;

    /** Prix négocié avec ce fournisseur */
    private BigDecimal prixFournisseur;

    /** Écart = prixFournisseur - standardPrice (négatif = réduction, positif = surcoût) */
    private BigDecimal ecartUnitaire;

    private Long companyId;
}

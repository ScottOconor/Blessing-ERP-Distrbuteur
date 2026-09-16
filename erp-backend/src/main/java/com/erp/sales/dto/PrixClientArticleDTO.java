package com.erp.sales.dto;

import lombok.*;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PrixClientArticleDTO {

    private Long id;

    private Long productId;
    private String productCode;
    private String productName;
    /** Prix de vente standard du produit */
    private BigDecimal salePriceStandard;

    private Long clientId;
    private String clientName;

    /** Prix configuré pour ce client */
    private BigDecimal prixClient;

    /** Rabais unitaire calculé = salePriceStandard - prixClient */
    private BigDecimal rabaisUnitaire;

    private Long companyId;
}

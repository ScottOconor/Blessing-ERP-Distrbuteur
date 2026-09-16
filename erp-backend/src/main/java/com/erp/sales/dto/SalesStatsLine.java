package com.erp.sales.dto;

import lombok.*;
import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SalesStatsLine {
    private String productCode;
    private String productName;
    private BigDecimal qty;
    private BigDecimal prixVente;    // prix de vente moyen HT
    private BigDecimal caHT;         // CA HT = qty × prixVente
    private BigDecimal cout;         // Coût total = prixRevient × qty
    private BigDecimal prixRevient;  // coût unitaire (standardPrice)
    private BigDecimal margeHT;      // Marge = caHT - cout
    private BigDecimal tauxMarge;    // Marge / caHT × 100
    private BigDecimal caTTC;        // CA TTC
    private BigDecimal remise;
    private boolean isAvoir;         // true = ligne d'avoir (quantités et montants négatifs)
}

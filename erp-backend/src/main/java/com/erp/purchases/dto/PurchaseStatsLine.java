package com.erp.purchases.dto;

import lombok.*;
import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseStatsLine {
    private String productCode;
    private String productName;
    private BigDecimal qty;
    private BigDecimal prixAchat;   // prix d'achat moyen HT
    private BigDecimal montantHT;   // = qty × prixAchat
    private BigDecimal montantTTC;
    private BigDecimal remise;
    private boolean isAvoir;        // true = ligne d'avoir (quantités et montants négatifs)
}

package com.erp.purchases.dto;

import lombok.*;
import java.math.BigDecimal;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseStatsSupplier {
    private String supplierName;   // label du groupe (fournisseur, catégorie, produit, agent ou entrepôt)
    private String supplierRef;
    private String agent;
    private List<PurchaseStatsLine> lines;

    // Sous-totaux factures (positifs)
    private BigDecimal totalAchatsQty;
    private BigDecimal totalAchatsHT;
    private BigDecimal totalAchatsTTC;
    private BigDecimal totalAchatsRemise;

    // Sous-totaux avoirs (négatifs)
    private BigDecimal totalAvoirsQty;
    private BigDecimal totalAvoirsHT;
    private BigDecimal totalAvoirsTTC;

    // Nets = factures + avoirs
    private BigDecimal totalQty;
    private BigDecimal totalHT;
    private BigDecimal totalTTC;
    private BigDecimal totalRemise;
}

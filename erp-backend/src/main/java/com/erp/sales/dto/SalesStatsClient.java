package com.erp.sales.dto;

import lombok.*;
import java.math.BigDecimal;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SalesStatsClient {
    private String clientName;   // label du groupe (client, catégorie, produit ou vendeur)
    private String clientRef;
    private String vendeur;
    private List<SalesStatsLine> lines;

    // Sous-totaux factures (positifs)
    private BigDecimal totalVentesQty;
    private BigDecimal totalVentesHT;
    private BigDecimal totalVentesTTC;
    private BigDecimal totalVentesRemise;
    private BigDecimal totalVentesCout;
    private BigDecimal totalVentesMargeHT;

    // Sous-totaux avoirs (négatifs)
    private BigDecimal totalAvoirsQty;
    private BigDecimal totalAvoirsHT;
    private BigDecimal totalAvoirsTTC;

    // Nets = factures + avoirs
    private BigDecimal totalQty;
    private BigDecimal totalHT;
    private BigDecimal totalTTC;
    private BigDecimal totalRemise;
    private BigDecimal totalCout;
    private BigDecimal totalMargeHT;
}

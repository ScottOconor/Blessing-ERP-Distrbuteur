package com.erp.sales.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SalesStatsResponse {
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private String groupBy;
    private List<SalesStatsClient> clients;

    // Totaux factures (positifs)
    private BigDecimal grandVentesQty;
    private BigDecimal grandVentesHT;
    private BigDecimal grandVentesTTC;
    private BigDecimal grandVentesRemise;
    private BigDecimal grandVentesCout;
    private BigDecimal grandVentesMargeHT;

    // Totaux avoirs (négatifs)
    private BigDecimal grandAvoirsQty;
    private BigDecimal grandAvoirsHT;
    private BigDecimal grandAvoirsTTC;

    // Nets = factures + avoirs
    private BigDecimal grandTotalQty;
    private BigDecimal grandTotalHT;
    private BigDecimal grandTotalTTC;
    private BigDecimal grandTotalRemise;
    private BigDecimal grandTotalCout;
    private BigDecimal grandTotalMargeHT;

    private int totalInvoices;
    private int totalAvoirs;
}

package com.erp.purchases.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseStatsResponse {
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private String groupBy;
    private List<PurchaseStatsSupplier> suppliers;

    // Totaux factures (positifs)
    private BigDecimal grandAchatsQty;
    private BigDecimal grandAchatsHT;
    private BigDecimal grandAchatsTTC;
    private BigDecimal grandAchatsRemise;

    // Totaux avoirs (négatifs)
    private BigDecimal grandAvoirsQty;
    private BigDecimal grandAvoirsHT;
    private BigDecimal grandAvoirsTTC;

    // Nets = factures + avoirs
    private BigDecimal grandTotalQty;
    private BigDecimal grandTotalHT;
    private BigDecimal grandTotalTTC;
    private BigDecimal grandTotalRemise;

    private int totalInvoices;
    private int totalAvoirs;
}

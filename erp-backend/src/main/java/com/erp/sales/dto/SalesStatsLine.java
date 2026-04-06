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
    private BigDecimal prixMoyen;
    private BigDecimal montantHT;
    private BigDecimal montantTTC;
    private BigDecimal remise;
}

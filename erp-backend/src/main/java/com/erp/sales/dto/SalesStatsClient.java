package com.erp.sales.dto;

import lombok.*;
import java.math.BigDecimal;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SalesStatsClient {
    private String clientName;
    private String clientRef;
    private List<SalesStatsLine> lines;
    private BigDecimal totalQty;
    private BigDecimal totalHT;
    private BigDecimal totalTTC;
    private BigDecimal totalRemise;
}

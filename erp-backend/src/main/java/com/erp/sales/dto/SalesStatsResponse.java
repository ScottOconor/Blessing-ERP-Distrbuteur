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
    private List<SalesStatsClient> clients;
    private BigDecimal grandTotalQty;
    private BigDecimal grandTotalHT;
    private BigDecimal grandTotalTTC;
    private BigDecimal grandTotalRemise;
    private int totalInvoices;
}

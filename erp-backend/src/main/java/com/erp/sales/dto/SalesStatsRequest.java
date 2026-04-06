package com.erp.sales.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class SalesStatsRequest {
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private Long companyId;
}

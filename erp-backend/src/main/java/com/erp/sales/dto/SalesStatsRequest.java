package com.erp.sales.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class SalesStatsRequest {
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private Long companyId;

    // Filtres optionnels
    private Long partnerId;
    private Long categoryId;
    private Long productId;
    private String createdBy;
    private Long warehouseId;

    // Dimension de regroupement : "client" | "category" | "product" | "vendeur" | "warehouse"
    private String groupBy = "client";
}

package com.erp.purchases.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class PurchaseStatsRequest {
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private Long companyId;

    // Filtres optionnels
    private Long partnerId;
    private Long categoryId;
    private Long productId;
    private String createdBy;
    private Long warehouseId;

    // Dimension de regroupement : "fournisseur" | "category" | "product" | "agent" | "warehouse"
    private String groupBy = "fournisseur";
}

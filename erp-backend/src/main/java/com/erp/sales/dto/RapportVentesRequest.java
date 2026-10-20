package com.erp.sales.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class RapportVentesRequest {
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private Long companyId;

    // Filtres optionnels
    private Long warehouseId;
    private Long partnerId;
    private Long sellerId;

    /** Inclure les avoirs validés (montants et quantités en négatif). */
    private boolean includeAvoirs = true;
}

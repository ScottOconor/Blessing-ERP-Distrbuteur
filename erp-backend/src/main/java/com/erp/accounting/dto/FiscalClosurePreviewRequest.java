package com.erp.accounting.dto;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class FiscalClosurePreviewRequest {
    @NotNull
    private Long companyId;
    @NotNull
    private LocalDate dateFrom;
    @NotNull
    private LocalDate dateTo;
}

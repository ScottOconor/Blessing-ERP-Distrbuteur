package com.erp.accounting.dto;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class FiscalClosureExecuteRequest {
    @NotNull
    private Long companyId;
    @NotNull
    private LocalDate dateFrom;
    @NotNull
    private LocalDate dateTo;
    /** Compte crédité du résultat si la période est bénéficiaire. */
    @NotNull
    private Long resultAccountBeneficeId;
    /** Compte débité du résultat si la période est déficitaire. */
    @NotNull
    private Long resultAccountPerteId;
}

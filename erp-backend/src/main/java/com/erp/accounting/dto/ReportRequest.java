package com.erp.accounting.dto;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReportRequest {

    @NotNull
    private LocalDate dateFrom;

    @NotNull
    private LocalDate dateTo;

    @NotNull
    private Long companyId;

    private List<Long> journalIds;

    /**
     * displayAccount: all / posted / not_zero
     */
    private String displayAccount;

    /**
     * resultSelection: customer / supplier / customer_supplier
     */
    private String resultSelection;

    private List<Long> partnerIds;

    private List<Long> accountIds;
}

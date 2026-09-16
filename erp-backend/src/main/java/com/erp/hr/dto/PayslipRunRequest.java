package com.erp.hr.dto;

import lombok.*;

import java.time.LocalDate;
import java.util.List;

/** Requête de génération d'un lot de bulletins pour une période. */
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PayslipRunRequest {
    private Long companyId;
    private String name;
    private LocalDate dateStart;
    private LocalDate dateEnd;
    private Long journalId;
    /** Employés ciblés ; vide = tous les employés actifs avec contrat en cours. */
    private List<Long> employeeIds;
}

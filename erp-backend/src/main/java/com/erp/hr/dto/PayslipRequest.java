package com.erp.hr.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

/** Requête de création/calcul d'un bulletin de paie. */
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PayslipRequest {
    private Long companyId;
    private Long employeeId;
    private Long contractId;      // optionnel : sinon contrat actif de l'employé
    private Long runId;           // optionnel : rattachement à un lot
    private LocalDate periodFrom;
    private LocalDate periodTo;
    private Long journalId;
    private List<InputDTO> inputs;
    private List<WorkedDaysDTO> workedDays;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class InputDTO {
        private String code;
        private String name;
        private BigDecimal amount;
    }

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class WorkedDaysDTO {
        private String code;
        private String name;
        private BigDecimal numberOfDays;
    }
}

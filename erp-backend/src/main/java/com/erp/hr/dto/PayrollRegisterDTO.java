package com.erp.hr.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

/**
 * Livre de paie d'un lot : tableau croisé employés × catégories salariales, avec totaux généraux.
 * Sert de base à la déclaration CNPS mensuelle (DIPE).
 */
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PayrollRegisterDTO {
    private String runName;
    private LocalDate dateStart;
    private LocalDate dateEnd;
    /** Codes de catégorie ordonnés (ex. BASIC, ALW, GROSS, DED, NET, COMP). */
    private List<String> categoryCodes;
    private List<String> categoryNames;
    private List<RowDTO> rows;
    /** Total général par code de catégorie. */
    private Map<String, BigDecimal> totals;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class RowDTO {
        private Long employeeId;
        private String matricule;
        private String employeeName;
        /** Total par code de catégorie pour cet employé. */
        private Map<String, BigDecimal> amounts;
    }
}

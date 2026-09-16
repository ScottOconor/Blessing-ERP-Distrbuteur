package com.erp.hr.dto;

import com.erp.hr.entity.Payslip;
import com.erp.hr.entity.PayslipInput;
import com.erp.hr.entity.PayslipLine;
import com.erp.hr.entity.PayslipWorkedDays;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

/** Bulletin de paie composé (bulletin + lignes + éléments variables + jours) pour l'affichage détaillé. */
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PayslipDTO {
    private Payslip payslip;
    private List<PayslipLine> lines;
    private List<PayslipInput> inputs;
    private List<PayslipWorkedDays> workedDays;
    // Infos d'affichage
    private String departmentName;
    private String jobName;
    private LocalDate hireDate;
    private String professionalCategoryName;
    private String echelonName;
    private List<LeaveBalanceSummary> leaveBalances;
}

package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/** Nombre de jours saisi sur un bulletin pour un type donné (jours travaillés, absence…). */
@Entity
@Table(name = "hr_payslip_worked_days")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PayslipWorkedDays {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long payslipId;

    /** Code référencé par une règle (SalaryRule.quantityWorkedDaysCode). */
    @Column(nullable = false)
    private String code;

    private String name;

    @Builder.Default
    private BigDecimal numberOfDays = BigDecimal.ZERO;

    @Column(nullable = false)
    private Long companyId;
}

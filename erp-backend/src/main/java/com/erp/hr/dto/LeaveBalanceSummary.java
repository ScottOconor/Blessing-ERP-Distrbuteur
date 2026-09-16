package com.erp.hr.dto;

import lombok.*;

import java.math.BigDecimal;

/** Compteur de congés d'un employé pour un type de congé sur une année donnée (Dû/Pris/Reste). */
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class LeaveBalanceSummary {
    private Long leaveTypeId;
    private String code;
    private String name;
    private int year;
    /** Solde reporté de l'année précédente. */
    private BigDecimal carryOver;
    /** Acquis sur l'année (mois échus × acquisition mensuelle). */
    private BigDecimal accrued;
    /** Pris sur l'année. */
    private BigDecimal taken;
    /** carryOver + accrued − taken. */
    private BigDecimal remaining;
}

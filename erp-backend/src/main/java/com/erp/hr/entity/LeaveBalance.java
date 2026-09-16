package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/**
 * Report de solde (« N-1 ») d'un employé pour un type de congé sur une année civile donnée — saisi
 * une fois par le RH en début d'année. Le reste des compteurs (acquis N, pris N) se calcule à la
 * volée à partir de {@link LeaveType#getMonthlyAccrualDays()} et des {@link LeaveDeclaration}.
 */
@Entity
@Table(name = "hr_leave_balances",
       uniqueConstraints = @UniqueConstraint(name = "uk_leave_balance_company_employee_type_year",
               columnNames = {"company_id", "employee_id", "leave_type_id", "year"}))
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class LeaveBalance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long employeeId;

    @Column(nullable = false)
    private Long leaveTypeId;

    @Column(nullable = false)
    private int year;

    /** Solde reporté de l'année précédente (« Reste N-1 »). */
    @Builder.Default
    private BigDecimal carryOver = BigDecimal.ZERO;

    @Column(nullable = false)
    private Long companyId;
}

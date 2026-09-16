package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * Déclaration d'une période de congé d'un employé, saisie directement par le RH/admin — il n'y a
 * pas de workflow de demande/validation par l'employé : la déclaration est effective dès sa création
 * et vient en déduction du solde ({@link LeaveType}) dès qu'elle chevauche la période concernée.
 */
@Entity
@Table(name = "hr_leave_declarations")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class LeaveDeclaration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long employeeId;

    @Column(nullable = false)
    private Long leaveTypeId;

    @Column(nullable = false)
    private LocalDate dateFrom;

    @Column(nullable = false)
    private LocalDate dateEnd;

    @Column(nullable = false)
    private BigDecimal numberOfDays;

    private String notes;

    @Column(nullable = false)
    private Long companyId;

    @CreationTimestamp
    private LocalDateTime createdAt;
}

package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/**
 * Type de congé (catalogue configurable par société) — ex. « Congés Payés », « RTT »,
 * « Repos Compensateur ». Porte la règle d'acquisition mensuelle utilisée pour calculer le
 * compteur (Dû/Pris/Reste) affiché sur le bulletin.
 */
@Entity
@Table(name = "hr_leave_types",
       uniqueConstraints = @UniqueConstraint(name = "uk_leave_type_company_code", columnNames = {"company_id", "code"}))
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class LeaveType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String code;

    /** Congé payé (n'affecte pas le salaire) ou non. Purement informatif — l'effet réel sur la paie
     *  passe par {@link #workedDaysTypeCode}, s'il est renseigné. */
    @Builder.Default
    private boolean paid = true;

    /** Jours acquis par mois de présence — ex. 1.5 pour les congés payés camerounais. */
    @Builder.Default
    private BigDecimal monthlyAccrualDays = BigDecimal.ZERO;

    /** Code d'un {@link WorkedDaysType} existant : si renseigné, les jours déclarés dans ce type de
     *  congé sont injectés automatiquement dans les jours saisis du bulletin sous ce code, pour être
     *  repris par une règle salariale via {@link SalaryRule#getQuantityWorkedDaysCode()} (ex. retenue
     *  d'un congé sans solde). Facultatif : un congé payé n'a en général pas besoin de ce lien. */
    private String workedDaysTypeCode;

    @Builder.Default
    private boolean active = true;

    @Column(nullable = false)
    private Long companyId;
}

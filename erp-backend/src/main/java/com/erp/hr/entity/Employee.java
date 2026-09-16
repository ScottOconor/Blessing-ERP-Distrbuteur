package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

/** Employé (dossier RH). */
@Entity
@Table(name = "hr_employees")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Matricule interne (unique par société). */
    private String matricule;

    @Column(nullable = false)
    private String lastName;

    private String firstName;

    /** M / F */
    private String gender;

    private LocalDate birthDate;
    private String birthPlace;
    private String nationality;

    /** Carte nationale d'identité. */
    private String cni;

    /** Situation de famille : CELIBATAIRE, MARIE, DIVORCE, VEUF. */
    private String maritalStatus;

    @Builder.Default
    private int childrenCount = 0;

    // Contact
    private String phone;
    private String email;
    private String address;

    // Affectation
    private Long departmentId;
    private Long jobId;
    /** Responsable hiérarchique (employé). */
    private Long managerId;

    private LocalDate hireDate;
    private LocalDate departureDate;

    // Sécurité sociale / fiscal (Cameroun)
    /** Numéro d'assuré CNPS. */
    private String cnpsNumber;
    /** Niveau d'imposition (Numéro Identifiant Unique) si applicable. */
    private String niu;

    // Coordonnées bancaires (virement de la paie)
    private String bankName;
    private String bankAccount;
    /** ESPECES / VIREMENT / MOBILE_MONEY */
    @Builder.Default
    private String paymentMode = "VIREMENT";

    /** ACTIF / SUSPENDU / SORTI */
    @Builder.Default
    private String status = "ACTIF";

    @Builder.Default
    private boolean active = true;

    @Column(nullable = false)
    private Long companyId;

    @CreationTimestamp
    private LocalDateTime createdAt;
}

package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

/** Contrat de travail d'un employé. Porte le salaire de base et les indemnités mensuelles. */
@Entity
@Table(name = "hr_contracts")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class EmployeeContract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long employeeId;

    private String reference;

    /** CDI, CDD, STAGE, INTERIM. */
    @Builder.Default
    private String type = "CDI";

    private LocalDate dateStart;
    private LocalDate dateEnd;

    /** Salaire de base mensuel (wage). */
    @Builder.Default
    private BigDecimal wage = BigDecimal.ZERO;

    // Indemnités mensuelles
    @Builder.Default private BigDecimal primeTransport = BigDecimal.ZERO;
    @Builder.Default private BigDecimal primeLogement = BigDecimal.ZERO;
    @Builder.Default private BigDecimal primeRepresentation = BigDecimal.ZERO;
    @Builder.Default private BigDecimal primeFonction = BigDecimal.ZERO;
    @Builder.Default private BigDecimal primeAnciennete = BigDecimal.ZERO;
    @Builder.Default private BigDecimal autresPrimes = BigDecimal.ZERO;

    /** Catégorie de la grille salariale (code {@link ProfessionalCategory}). */
    private String professionalCategory;

    /** Échelon de la grille salariale, rattaché à la catégorie ci-dessus ({@link Echelon#getId()}). */
    private Long echelonId;

    /** DRAFT (brouillon), RUNNING (en cours), CLOSED (terminé), CANCELLED. */
    @Builder.Default
    private String state = "DRAFT";

    private String notes;

    @Column(nullable = false)
    private Long companyId;

    @CreationTimestamp
    private LocalDateTime createdAt;
}

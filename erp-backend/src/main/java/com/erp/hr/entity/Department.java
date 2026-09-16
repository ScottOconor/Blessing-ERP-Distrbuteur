package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

/** Département / service de l'entreprise. */
@Entity
@Table(name = "hr_departments")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String code;

    /** Département parent (hiérarchie). */
    private Long parentId;

    /** Responsable (employé) du département. */
    private Long managerId;

    @Builder.Default
    private boolean active = true;

    @Column(nullable = false)
    private Long companyId;

    @CreationTimestamp
    private LocalDateTime createdAt;
}

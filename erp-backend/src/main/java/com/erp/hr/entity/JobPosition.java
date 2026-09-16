package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

/** Poste / fonction occupé(e) par un employé. */
@Entity
@Table(name = "hr_jobs")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class JobPosition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private Long departmentId;

    /** Catégorie professionnelle (grille salariale) — ex. « Cadre », « Employé », « 6A ». */
    private String category;

    private String description;

    @Builder.Default
    private boolean active = true;

    @Column(nullable = false)
    private Long companyId;

    @CreationTimestamp
    private LocalDateTime createdAt;
}

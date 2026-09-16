package com.erp.caisse.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "caisses")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Caisse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(unique = true)
    private String code;

    @Column(name = "journal_id", nullable = false)
    private Long journalId;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private CaisseStatus status = CaisseStatus.OUVERTE;

    private String responsableName;

    @Builder.Default
    private boolean active = true;

    private LocalDate lastSessionDate;
}

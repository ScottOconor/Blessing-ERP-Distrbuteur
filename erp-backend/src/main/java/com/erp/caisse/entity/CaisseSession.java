package com.erp.caisse.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "caisse_sessions")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CaisseSession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "caisse_id", nullable = false)
    private Long caisseId;

    @Column(name = "journal_id", nullable = false)
    private Long journalId;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @Column(name = "date_session", nullable = false)
    private LocalDate dateSession;

    @Column(nullable = false)
    @Builder.Default
    private String status = "CLOTUREE";

    @Column(name = "solde_debut", precision = 17, scale = 2)
    @Builder.Default
    private BigDecimal soldeDebut = BigDecimal.ZERO;

    @Column(name = "solde_fin", precision = 17, scale = 2)
    @Builder.Default
    private BigDecimal soldeFin = BigDecimal.ZERO;

    @Column(name = "total_entrees", precision = 17, scale = 2)
    @Builder.Default
    private BigDecimal totalEntrees = BigDecimal.ZERO;

    @Column(name = "total_sorties", precision = 17, scale = 2)
    @Builder.Default
    private BigDecimal totalSorties = BigDecimal.ZERO;

    @Column(name = "date_cloture")
    private LocalDateTime dateCloture;

    @Column(name = "created_by")
    private String createdBy;
}

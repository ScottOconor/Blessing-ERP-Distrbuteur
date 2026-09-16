package com.erp.caisse.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "caisse_operations", indexes = {
    // Couvre findByCaisseIdAndCompanyId... / findByCaisseIdAndTypeAndCompanyId... /
    // findByCaisseIdAndDateAndCompanyId (caisse_id en tête, company_id/type/date filtrés en plus
    // par Hibernate après le scan d'index) — l'écran "solde de caisse" filtre en revanche par
    // compte uniquement (cf. commentaire CaisseService sur les transferts inter-caisse), donc
    // caisse_id reste le prédicat le plus sélectif ici.
    @Index(name = "idx_caisse_operations_caisse_company", columnList = "caisse_id,company_id"),
    // Couvre findByCompanyIdOrderByDateDescCreatedAtDesc / findByCompanyIdAndTypeOrderByDateDesc.
    @Index(name = "idx_caisse_operations_company", columnList = "company_id")
})
@EntityListeners(AuditingEntityListener.class)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CaisseOperation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "caisse_id", nullable = false)
    private Long caisseId;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @Column(nullable = false)
    private LocalDate date;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private OperationType type;

    @Column(nullable = false, precision = 17, scale = 2)
    private BigDecimal montant;

    private String libelle;

    private String reference;

    @Column(name = "tiers_name")
    private String tiersName;

    @Column(name = "compte_contrepartie_id")
    private Long compteContrepartieId;

    @Column(name = "journal_move_id")
    private Long journalMoveId;

    @Column(name = "created_by")
    private String createdBy;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedBy
    @Column(name = "updated_by")
    private String updatedBy;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}

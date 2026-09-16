package com.erp.accounting.entity;

import com.erp.common.entity.Company;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "account_moves", indexes = {
    @Index(name = "idx_account_moves_company_date", columnList = "company_id, date"),
    @Index(name = "idx_account_moves_journal_id",   columnList = "journal_id")
})
@EntityListeners(AuditingEntityListener.class)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountMove {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Verrou optimiste — empêche une double extourne (deux reverseEntry concurrents
     *  passant tous les deux le contrôle getReversalId()==null avant l'écriture). */
    @Version
    private Long version;

    /**
     * Numéro de pièce (ex: VNT-2024-00001)
     */
    private String name;

    private LocalDate date;

    private String ref;

    /**
     * State: draft / posted / cancel
     */
    private String state;

    /**
     * ID de l'écriture extourne générée depuis cette écriture.
     * Non null = cette écriture a déjà été extournée, ne peut plus l'être.
     */
    @Column(name = "reversal_id")
    private Long reversalId;

    /**
     * Vrai si cette écriture est elle-même une extourne.
     * Une extourne ne peut pas être extournée à son tour.
     */
    @Column(name = "is_reversal")
    @Builder.Default
    private boolean isReversal = false;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "journal_id")
    private AccountJournal journal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partner_id")
    private Partner partner;

    @OneToMany(mappedBy = "move", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<AccountMoveLine> lines = new ArrayList<>();

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @CreatedBy
    @Column(name = "created_by", updatable = false)
    private String createdBy;

    @LastModifiedBy
    @Column(name = "updated_by")
    private String updatedBy;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // ── Traçabilité des actions métier ─────────────────────────────────────
    @Column(name = "posted_by")
    private String postedBy;

    @Column(name = "posted_at")
    private LocalDateTime postedAt;

    @Column(name = "cancelled_by")
    private String cancelledBy;

    @Column(name = "cancelled_at")
    private LocalDateTime cancelledAt;

    @Column(name = "reversed_by")
    private String reversedBy;

    @Column(name = "reversed_at")
    private LocalDateTime reversedAt;

    @Column(name = "reset_to_draft_by")
    private String resetToDraftBy;

    @Column(name = "reset_to_draft_at")
    private LocalDateTime resetToDraftAt;

    /** Snapshot JSON des lignes au moment de la remise en brouillon (avant modification). */
    @Column(name = "lines_snapshot", columnDefinition = "TEXT")
    private String linesSnapshot;
}

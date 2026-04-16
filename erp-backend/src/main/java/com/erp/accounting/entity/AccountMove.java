package com.erp.accounting.entity;

import com.erp.common.entity.Company;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "account_moves")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountMove {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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
    private LocalDateTime createdAt;
}

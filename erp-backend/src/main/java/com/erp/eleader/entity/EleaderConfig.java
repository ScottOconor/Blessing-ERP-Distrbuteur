package com.erp.eleader.entity;

import com.erp.accounting.entity.AccountJournal;
import com.erp.common.entity.Company;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "eleader_config")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EleaderConfig {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

    /** Journal comptable utilisé pour les factures eLeader — OBLIGATOIRE */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "journal_id")
    private AccountJournal journal;

    /** Code produit PSA (précompte) dans l'ERP */
    @Builder.Default
    @Column(name = "psa_product_code")
    private String psaProductCode = "PRC01";

    /** Code produit frais d'enlèvement dans l'ERP */
    @Builder.Default
    @Column(name = "frais_enlevement_code")
    private String fraisEnlevementCode = "ELV01";

    /** Valider automatiquement les bons de commande importés */
    @Builder.Default
    @Column(name = "auto_confirm")
    private boolean autoConfirm = false;

    @OneToMany(mappedBy = "config", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<EleaderEmballageMapping> emballageMappings = new ArrayList<>();
}

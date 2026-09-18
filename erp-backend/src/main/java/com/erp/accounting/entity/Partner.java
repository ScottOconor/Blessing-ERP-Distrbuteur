package com.erp.accounting.entity;

import com.erp.common.entity.Company;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "partners", indexes = {
    // Clients/fournisseurs référencés par chaque facture, commande, ristourne, remise — les
    // listings (findByCompanyIdAndActiveTrue, ...AndType...) filtraient sans aucun index sur
    // cette table jusqu'ici.
    @Index(name = "idx_partners_company_active", columnList = "company_id, active"),
    @Index(name = "idx_partners_company_type",   columnList = "company_id, type")
})
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Partner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String ref;

    @Column(nullable = false)
    private String name;

    /**
     * Type: customer / supplier / both
     */
    private String type;

    private String phone;
    private String email;
    private String address;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;

    // ===== Paramètres commerciaux (ventes) =====
    private java.math.BigDecimal tauxRistourne;      // taux de remise global %
    private java.math.BigDecimal tauxPrecompte;      // taux de précompte %
    private java.math.BigDecimal creditLimit;        // plafond de crédit
    private String receivableAccountCode;            // compte client (ex: 4111)

    @Builder.Default
    @ColumnDefault("true")
    private boolean active = true;

    @Builder.Default
    @ColumnDefault("false")
    @Column(name = "exempt_taxe_guinness")
    private boolean exemptTaxeGuinness = false;

    /** Alimente le snapshot incrémental (SnapshotService) : ne renvoyer au Hub que les
     *  clients/fournisseurs modifiés depuis le dernier envoi, au lieu de la liste entière à
     *  chaque passage horaire. */
    @UpdateTimestamp
    private java.time.LocalDateTime updatedAt;
}

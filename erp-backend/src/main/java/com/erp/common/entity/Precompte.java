package com.erp.common.entity;

import com.erp.accounting.entity.Partner;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/**
 * Taux de précompte associé à un partenaire (client ou fournisseur).
 * Un seul précompte actif par partenaire.
 */
@Entity
@Table(name = "precomptes",
       uniqueConstraints = @UniqueConstraint(columnNames = {"partner_id", "type_precompte"}))
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Precompte {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partner_id", nullable = false)
    private Partner partner;

    /**
     * sale = précompte sur ventes, purchase = précompte sur achats
     */
    @Column(name = "type_precompte", nullable = false)
    private String typePrecompte;  // "sale" | "purchase"

    /**
     * Taux en pourcentage : 1 / 2 / 2.5 / 5 / 10
     */
    @Column(name = "taux_precompte", precision = 5, scale = 2, nullable = false)
    private BigDecimal tauxPrecompte;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @Builder.Default
    private boolean active = true;
}

package com.erp.caisse.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
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

    /** Vendeur responsable de cette caisse (facultatif, comme le concept de vendeur lui-même). */
    @Column(name = "seller_id")
    private Long sellerId;

    @Builder.Default
    private boolean active = true;

    private LocalDate lastSessionDate;

    /** Seuil d'écart de caisse toléré (FCFA). Null = pas de seuil, aucune alerte. */
    @Column(name = "seuil_ecart", precision = 17, scale = 2)
    private BigDecimal seuilEcart;
}

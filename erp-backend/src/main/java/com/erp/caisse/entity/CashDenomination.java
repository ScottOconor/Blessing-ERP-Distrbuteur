package com.erp.caisse.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/** Coupure (billet ou pièce) utilisée pour le comptage physique d'une caisse à l'ouverture/clôture. */
@Entity
@Table(name = "cash_denominations")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CashDenomination {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @Column(nullable = false)
    private String label;

    @Column(nullable = false, precision = 17, scale = 2)
    private BigDecimal valeur;

    @Builder.Default
    private boolean active = true;
}

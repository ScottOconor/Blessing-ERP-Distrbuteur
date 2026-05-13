package com.erp.common.entity;

import com.erp.accounting.entity.Partner;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/**
 * Tarif d'enlèvement spécifique pour un client sur une catégorie donnée.
 * Ce montant REMPLACE le montant fixe global pour ce client (logique identique à Odoo).
 */
@Entity
@Table(name = "enlevement_clients",
       uniqueConstraints = @UniqueConstraint(columnNames = {"enlevement_id", "partner_id"}))
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class EnlevementClient {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "enlevement_id", nullable = false)
    private Enlevement enlevement;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partner_id", nullable = false)
    private Partner partner;

    /** Tarif TTC par unité pour ce client — remplace montantFixe de l'Enlevement de base */
    @Column(name = "montant", precision = 20, scale = 2, nullable = false)
    private BigDecimal montant;

    /** Compte comptable pour le montant supplémentaire (distinct du compte principal) */
    @Column(name = "supplement_account_code")
    private String supplementAccountCode;
}

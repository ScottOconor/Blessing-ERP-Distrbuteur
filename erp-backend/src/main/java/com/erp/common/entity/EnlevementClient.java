package com.erp.common.entity;

import com.erp.accounting.entity.Partner;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/**
 * Tarif d'enlèvement spécifique pour un client sur une catégorie donnée.
 * Surcharge le montant global de l'Enlevement pour ce client.
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

    /** Montant supplémentaire pour ce client (s'ajoute au montant fixe global) */
    @Column(name = "montant", precision = 20, scale = 2, nullable = false)
    private BigDecimal montant;

    /** Compte comptable pour le montant supplémentaire (distinct du compte principal) */
    @Column(name = "supplement_account_code")
    private String supplementAccountCode;
}

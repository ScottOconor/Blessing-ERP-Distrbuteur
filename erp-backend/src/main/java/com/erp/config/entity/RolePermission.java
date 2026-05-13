package com.erp.config.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "role_permissions",
       uniqueConstraints = @UniqueConstraint(
           name = "uk_role_module_resource_action",
           columnNames = {"role_id", "module", "resource", "action"}))
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class RolePermission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;

    /** VENTES | ACHATS | STOCK | COMPTABILITE | CONFIG */
    @Column(nullable = false)
    private String module;

    /**
     * Sous-ressource du module : BONS_COMMANDE, FACTURES, CLIENTS, AVOIRS, RISTOURNES,
     * FOURNISSEURS, PRODUITS, MOUVEMENTS, INVENTAIRE, JOURNAUX, ECRITURES, RAPPORTS,
     * GROUPES, ENTREPRISES, UTILISATEURS, ROLES.
     * Nullable temporairement pour la migration Hibernate (update mode).
     */
    @Column(nullable = true)
    private String resource;

    /** VIEW | CREATE | EDIT | DELETE | IMPORT | EXPORT */
    @Column(nullable = false)
    private String action;
}

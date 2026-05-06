package com.erp.config.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "role_permissions",
       uniqueConstraints = @UniqueConstraint(columnNames = {"role_id", "module", "action"}))
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

    /** VIEW | CREATE | EDIT | DELETE | IMPORT | EXPORT */
    @Column(nullable = false)
    private String action;
}

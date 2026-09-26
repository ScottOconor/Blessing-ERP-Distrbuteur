package com.erp.auth.entity;

import com.erp.common.entity.Company;
import com.erp.config.entity.Role;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    private String fullName;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id", nullable = true)
    private Role role;

    /** Société à laquelle cet utilisateur est rattaché. Nul uniquement pour le
     *  compte superadmin bootstrap créé avant qu'aucune société n'existe — les
     *  rôles privilégiés (SUPER_ADMIN/ADMIN) sont de toute façon exemptés du
     *  contrôle d'isolation par société (voir TenantGuard). */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "company_id", nullable = true)
    private Company company;

    @Builder.Default
    @Column(nullable = false, columnDefinition = "boolean not null default true")
    private boolean active = true;

    @Builder.Default
    @Column(nullable = false, columnDefinition = "boolean not null default false")
    private boolean mustChangePassword = false;

    /** Caisse à laquelle l'utilisateur est rattaché (optionnel). */
    @Column(name = "caisse_id")
    private Long caisseId;
}

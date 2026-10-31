package com.erp.auth.entity;

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
    @ToString.Exclude // jamais dans les journaux (toString affiché en DEBUG)
    private String password;

    private String fullName;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id", nullable = true)
    private Role role;

    @Builder.Default
    @Column(nullable = false, columnDefinition = "boolean not null default true")
    private boolean active = true;

    @Builder.Default
    @Column(nullable = false, columnDefinition = "boolean not null default false")
    private boolean mustChangePassword = false;

    /**
     * Dernier changement de mot de passe (par l'utilisateur ou un administrateur). Les jetons
     * émis avant cette date sont refusés (JwtService.isTokenValid) : avant, un jeton volé restait
     * valable jusqu'à 24 h même après un changement de mot de passe. Null = jamais changé.
     */
    private java.time.LocalDateTime credentialsChangedAt;

    /** Caisse à laquelle l'utilisateur est rattaché (optionnel). */
    @Column(name = "caisse_id")
    private Long caisseId;
}

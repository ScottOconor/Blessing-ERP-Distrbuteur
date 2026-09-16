package com.erp.config.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "roles")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Code technique : SUPER_ADMIN, ADMIN, AUDITEUR, CONTROLEUR, ou null pour rôles custom */
    @Column(unique = true)
    private String code;

    @Column(nullable = false)
    private String label;

    /** true = rôle système seedé, non modifiable, non supprimable */
    @Builder.Default
    private boolean isSystem = false;

    @Builder.Default
    private boolean active = true;
}

package com.erp.auth.entity;

import com.erp.common.entity.Company;
import com.erp.config.entity.CompanyGroup;
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

    /** Prénom Nom affiché */
    private String fullName;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id", nullable = true)
    private Role role;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id")
    private CompanyGroup group;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;

    @Builder.Default
    @Column(nullable = false, columnDefinition = "boolean not null default true")
    private boolean active = true;

    @Builder.Default
    @Column(nullable = false, columnDefinition = "boolean not null default false")
    private boolean mustChangePassword = false;
}

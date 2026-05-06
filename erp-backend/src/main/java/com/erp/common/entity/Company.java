package com.erp.common.entity;

import com.erp.config.entity.CompanyGroup;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "companies")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String sigle;
    private String rccm;
    private String nif;
    private String adresse;
    private String telephone;
    private String email;
    private String logoUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id")
    private CompanyGroup group;

    @Builder.Default
    @Column(nullable = false, columnDefinition = "boolean not null default true")
    private boolean active = true;
}

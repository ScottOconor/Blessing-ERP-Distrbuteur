package com.erp.common.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "companies")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
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
}

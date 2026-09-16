package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "product_categories")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class ProductCategory {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String code;

    /** Compte stock OHADA (ex: 311000) */
    private String stockAccountCode;

    /** Compte variation de stock entrée (ex: 6031) */
    private String stockInAccountCode;

    @Column(name = "parent_id")
    private Long parentId;

    @Column(name = "company_id", nullable = false)
    private Long companyId;
}

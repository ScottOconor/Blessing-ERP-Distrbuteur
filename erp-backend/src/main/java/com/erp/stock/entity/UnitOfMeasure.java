package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "units_of_measure")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class UnitOfMeasure {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String code;

    @Column(name = "company_id", nullable = false)
    private Long companyId;
}

package com.erp.config.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "company_groups")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class CompanyGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(unique = true)
    private String code;

    private String description;

    @Builder.Default
    private boolean active = true;

    @CreationTimestamp
    private LocalDateTime createdAt;
}

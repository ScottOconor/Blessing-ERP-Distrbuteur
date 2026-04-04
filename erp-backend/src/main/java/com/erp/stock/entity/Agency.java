package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "agencies")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Agency {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String code;

    private String address;

    @Column(name = "contact_person")
    private String contactPerson;

    private String phone;
    private String email;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @Builder.Default
    private boolean active = true;

    @CreationTimestamp
    private LocalDateTime createdAt;
}

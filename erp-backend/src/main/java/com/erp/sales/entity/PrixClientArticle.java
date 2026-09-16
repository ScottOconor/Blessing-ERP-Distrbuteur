package com.erp.sales.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "prix_client_article",
       uniqueConstraints = @UniqueConstraint(columnNames = {"product_id", "client_id", "company_id"}))
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PrixClientArticle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "client_id", nullable = false)
    private Long clientId;

    /** Prix configuré pour ce client (ex: 200 au lieu de 250 standard) */
    @Column(name = "prix_client", nullable = false, precision = 20, scale = 2)
    private BigDecimal prixClient;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}

package com.erp.purchases.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "prix_fournisseur_article",
       uniqueConstraints = @UniqueConstraint(columnNames = {"product_id", "fournisseur_id", "company_id"}))
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PrixFournisseurArticle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "fournisseur_id", nullable = false)
    private Long fournisseurId;

    /** Prix d'achat négocié avec ce fournisseur pour cet article */
    @Column(name = "prix_fournisseur", nullable = false, precision = 20, scale = 2)
    private BigDecimal prixFournisseur;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}

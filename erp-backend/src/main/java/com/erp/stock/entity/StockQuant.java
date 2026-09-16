package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "stock_quants", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"product_id", "location_id", "company_id"})
}, indexes = {
    // findByLocationIdAndCompanyId filtre sur (location_id, company_id) — la contrainte unique
    // ci-dessus a product_id en tête, donc inutilisable en préfixe gauche pour cette requête ;
    // sans index dédié c'était un scan complet de stock_quants à chaque écran "stock par
    // emplacement".
    @Index(name = "idx_stock_quants_location_company", columnList = "location_id,company_id"),
    // findAllByCompanyId / findAllWithStock filtrent sur company_id seul, 3ᵉ colonne de la
    // contrainte unique donc également inutilisable en préfixe gauche.
    @Index(name = "idx_stock_quants_company", columnList = "company_id")
})
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockQuant {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Verrou optimiste — deux mouvements concurrents sur le même quant (lu puis modifié en
     *  mémoire, comme applyStockMovement) ne doivent pas se perdre l'un l'autre silencieusement. */
    @Version
    private Long version;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "location_id", nullable = false)
    private Long locationId;

    /** Quantité disponible (stock réel) */
    @Column(precision = 20, scale = 4, nullable = false)
    @Builder.Default
    private BigDecimal quantity = BigDecimal.ZERO;

    /** Quantité réservée pour des picking en cours */
    @Column(precision = 20, scale = 4, nullable = false)
    @Builder.Default
    private BigDecimal reservedQuantity = BigDecimal.ZERO;

    @Column(name = "company_id", nullable = false)
    private Long companyId;
}

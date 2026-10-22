package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Historique des prix d'un article — une ligne par changement, jamais modifiée ensuite.
 * Permet de valoriser un rapport sur une période passée avec les prix de CETTE période
 * (ex. stock 2025 au CMUP de 2025) au lieu du prix courant de la fiche article.
 *
 * priceType :
 *  - CMUP     : coût moyen pondéré d'un entrepôt (warehouseId renseigné), recalculé à chaque entrée
 *  - STANDARD : Product.standardPrice (prix de revient global, repli quand aucun CMUP d'entrepôt)
 *  - SALE     : Product.salePrice (prix de vente catalogue)
 *
 * Le prix en vigueur à une date D est le newPrice de la dernière ligne dont effectiveDate <= D.
 */
@Entity
@Table(name = "product_price_history", indexes = {
    @Index(name = "idx_price_history_lookup", columnList = "product_id, price_type, warehouse_id, effective_date"),
    @Index(name = "idx_price_history_company", columnList = "company_id, price_type")
})
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class ProductPriceHistory {

    public static final String TYPE_CMUP = "CMUP";
    public static final String TYPE_STANDARD = "STANDARD";
    public static final String TYPE_SALE = "SALE";

    /** Entrée de stock enregistrée en direct */
    public static final String SOURCE_ENTREE = "ENTREE";
    /** Modification manuelle de la fiche article */
    public static final String SOURCE_MANUEL = "MANUEL";
    /** Reconstruction à partir des mouvements de stock passés */
    public static final String SOURCE_RECONSTRUCTION = "RECONSTRUCTION";
    /** Écart entre le CMUP reconstruit et le CMUP courant, recalé sur ce dernier */
    public static final String SOURCE_ALIGNEMENT = "ALIGNEMENT";

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    /** Null pour STANDARD / SALE (prix globaux de l'article). */
    @Column(name = "warehouse_id")
    private Long warehouseId;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @Column(name = "price_type", nullable = false, length = 20)
    private String priceType;

    @Column(precision = 20, scale = 4)
    private BigDecimal oldPrice;

    @Column(precision = 20, scale = 4, nullable = false)
    private BigDecimal newPrice;

    /** CMUP : quantité en stock avant l'entrée. */
    @Column(precision = 20, scale = 4)
    private BigDecimal qtyBefore;

    /** CMUP : quantité entrée. */
    @Column(precision = 20, scale = 4)
    private BigDecimal qtyIn;

    /** CMUP : prix unitaire de l'entrée. */
    @Column(precision = 20, scale = 4)
    private BigDecimal priceIn;

    /** Date à laquelle le prix prend effet (date effective du mouvement, antidatage compris). */
    @Column(name = "effective_date", nullable = false)
    private LocalDateTime effectiveDate;

    @Column(nullable = false, length = 20)
    private String source;

    /** Document à l'origine du changement (bon de réception, transfert...). */
    private String reference;

    private String createdBy;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;
}

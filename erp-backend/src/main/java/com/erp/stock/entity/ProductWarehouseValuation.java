package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/**
 * CMUP (coût moyen unitaire pondéré) d'un produit, valorisé PAR ENTREPÔT plutôt que globalement.
 * Remplace progressivement Product.standardPrice comme source de vérité pour tout calcul de
 * valorisation dépendant d'un entrepôt précis (écritures 603x/311, coût de sortie, rapports de
 * valorisation) — Product.standardPrice reste un simple prix de repli tant qu'aucune ligne n'existe
 * encore ici pour un (produit, entrepôt) donné (produit neuf, entrepôt jamais approvisionné).
 */
@Entity
@Table(name = "product_warehouse_valuations", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"product_id", "warehouse_id"})
})
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class ProductWarehouseValuation {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Verrou optimiste — plusieurs mouvements peuvent recalculer ce CMUP concurremment. */
    @Version
    private Long version;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "warehouse_id", nullable = false)
    private Long warehouseId;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    /** CMUP courant de ce produit dans cet entrepôt. */
    @Column(precision = 20, scale = 4, nullable = false)
    @Builder.Default
    private BigDecimal standardPrice = BigDecimal.ZERO;
}

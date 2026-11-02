package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Journal de valorisation opérationnelle du stock, AU PRIX D'ACHAT, par (article, entrepôt).
 * Chaque ligne fige ce qu'un mouvement validé a fait à la valeur du stock : prix d'achat retenu,
 * valeur, quantités et valeurs avant/après, ainsi que le CMUP avant/après à titre d'information —
 * le CMUP n'entre jamais dans le calcul de la valeur (cf. {@link com.erp.stock.service.StockLedgerService}).
 *
 * La contrainte unique (move_id, warehouse_id, direction) garantit qu'un mouvement ne pèse qu'une
 * fois sur la valeur d'un entrepôt, même rejoué. move_id est nul pour une initialisation (INIT).
 */
@Entity
@Table(name = "stock_valuation_entries", uniqueConstraints = {
    @UniqueConstraint(name = "uq_valuation_entry_move", columnNames = {"move_id", "warehouse_id", "direction"})
}, indexes = {
    @Index(name = "idx_valuation_entries_product_wh", columnList = "product_id, warehouse_id, validated_at"),
    @Index(name = "idx_valuation_entries_company", columnList = "company_id, validated_at")
})
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockValuationEntry {

    public static final String DIRECTION_IN = "IN";
    public static final String DIRECTION_OUT = "OUT";
    /** Reliquat d'un transfert renvoyé à la source. */
    public static final String DIRECTION_RETURN = "RETURN";
    /** Annulation d'une sortie déjà comptée : restitue la valeur à la source. */
    public static final String DIRECTION_CANCEL = "CANCEL";
    /** Initialisation contrôlée de la valeur d'un stock existant. */
    public static final String DIRECTION_INIT = "INIT";

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "warehouse_id", nullable = false)
    private Long warehouseId;

    @Column(name = "move_id")
    private Long moveId;

    @Column(nullable = false, length = 10)
    private String direction;

    /** RECEPTION, VENTE, RETOUR_CLIENT, RETOUR_FOURNISSEUR, TRANSFERT, AJUSTEMENT, CASSE, SORTIE, INTER_AGENCES, INITIALISATION */
    @Column(name = "move_type", nullable = false, length = 30)
    private String moveType;

    private String reference;

    @Column(precision = 20, scale = 4, nullable = false)
    private BigDecimal quantity;

    @Column(name = "purchase_price", precision = 20, scale = 4, nullable = false)
    private BigDecimal purchasePrice;

    /** Quantité × prix d'achat, signée (négative pour une sortie). */
    @Column(name = "move_value", precision = 24, scale = 4, nullable = false)
    private BigDecimal moveValue;

    @Column(name = "cmup_before", precision = 20, scale = 4)
    private BigDecimal cmupBefore;

    @Column(name = "cmup_after", precision = 20, scale = 4)
    private BigDecimal cmupAfter;

    @Column(name = "qty_before", precision = 20, scale = 4)
    private BigDecimal qtyBefore;

    @Column(name = "qty_after", precision = 20, scale = 4)
    private BigDecimal qtyAfter;

    /** Nuls tant que la valeur d'un stock antérieur n'a pas été initialisée. */
    @Column(name = "stock_value_before", precision = 24, scale = 4)
    private BigDecimal stockValueBefore;

    @Column(name = "stock_value_after", precision = 24, scale = 4)
    private BigDecimal stockValueAfter;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "validated_at", nullable = false)
    private LocalDateTime validatedAt;

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;
}

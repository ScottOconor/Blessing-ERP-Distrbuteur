package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "stock_moves", indexes = {
    // findAllDoneByCompany / findDoneOrInTransitByCompany / findDoneByCompanyBetween-From-To —
    // toutes filtrent sur (company_id, state='done') puis trient par id ; sans cet index, chacune
    // scannait la table entière (des dizaines de milliers de lignes dans une agence active).
    @Index(name = "idx_stock_moves_company_state", columnList = "company_id,state"),
    // findDoneByProduct / countMovesForAdjustment / sumIncomingBefore / sumOutgoingBefore /
    // sumInQtyBetween / sumOutQtyBetween — filtrent toutes sur (product_id, state='done').
    @Index(name = "idx_stock_moves_product_state", columnList = "product_id,state"),
    // findByPickingId + le JOIN FETCH m.picking utilisé par findDetailedMovements — Hibernate
    // crée la contrainte de clé étrangère sur picking_id mais Postgres n'indexe pas
    // automatiquement les colonnes de FK.
    @Index(name = "idx_stock_moves_picking", columnList = "picking_id")
})
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockMove {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "picking_id")
    private StockPicking picking;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    private String productCode;
    private String productName;
    private String uomName;

    /** Quantité demandée */
    @Column(precision = 20, scale = 4, nullable = false)
    private BigDecimal qtyDemanded;

    /** Quantité effectivement traitée (saisie lors de la validation) */
    @Column(precision = 20, scale = 4)
    @Builder.Default
    private BigDecimal qtyDone = BigDecimal.ZERO;

    /** Prix unitaire pour valorisation */
    @Column(precision = 20, scale = 4)
    @Builder.Default
    private BigDecimal priceUnit = BigDecimal.ZERO;

    @Column(name = "location_id", nullable = false)
    private Long locationId;

    @Column(name = "location_dest_id", nullable = false)
    private Long locationDestId;

    /** draft / done / cancelled */
    @Builder.Default
    private String state = "draft";

    @Column(name = "company_id", nullable = false)
    private Long companyId;
}

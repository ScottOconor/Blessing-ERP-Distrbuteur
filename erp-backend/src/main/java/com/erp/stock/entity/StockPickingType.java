package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "stock_picking_types")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockPickingType {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    /**
     * incoming (réception) / outgoing (livraison) / internal (transfert)
     */
    @Column(nullable = false)
    private String code;

    @Column(name = "warehouse_id")
    private Long warehouseId;

    @Column(name = "default_location_src_id")
    private Long defaultLocationSrcId;

    @Column(name = "default_location_dest_id")
    private Long defaultLocationDestId;

    /** Préfixe de séquence: ex WH1/IN */
    private String sequencePrefix;

    @Column(name = "company_id", nullable = false)
    private Long companyId;
}

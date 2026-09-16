package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "stock_locations")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockLocation {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(name = "parent_id")
    private Long parentId;

    /**
     * supplier / view / internal / customer / inventory / transit
     */
    @Column(nullable = false)
    private String usage;

    @Column(name = "warehouse_id")
    private Long warehouseId;

    @Column(name = "company_id")
    private Long companyId;

    @Builder.Default
    private boolean active = true;
}

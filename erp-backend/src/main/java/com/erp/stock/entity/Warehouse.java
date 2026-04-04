package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "warehouses")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Warehouse {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    /** Code court, ex: WH1 */
    @Column(nullable = false, length = 10)
    private String code;

    /** ID de l'emplacement stock principal (interne) */
    @Column(name = "stock_location_id")
    private Long stockLocationId;

    /** Journal comptable stock OHADA */
    @Column(name = "stock_journal_id")
    private Long stockJournalId;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @Builder.Default
    private boolean active = true;
}

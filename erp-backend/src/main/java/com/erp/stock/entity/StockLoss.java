package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Trous &amp; Casses : sortie de stock pour marchandises avariées/cassées, sans facturation.
 * Génère une écriture unique Dr 659300 (charge) / Cr 6031 (variation de stocks).
 */
@Entity
@Table(name = "stock_losses")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockLoss {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Référence auto-générée, ex: CASSE/00001 */
    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private LocalDate date;

    @Column(name = "warehouse_id", nullable = false)
    private Long warehouseId;

    /** Client/tiers destinataire — traçabilité uniquement, aucune facturation générée */
    @Column(name = "partner_id")
    private Long partnerId;

    private String notes;

    /** Valeur totale de la perte (Σ quantité × CMUP), postée sur l'écriture 659300/6031 */
    @Column(name = "total_value", precision = 20, scale = 2)
    private BigDecimal totalValue;

    @Column(name = "account_move_id")
    private Long accountMoveId;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @Builder.Default
    @OneToMany(mappedBy = "stockLoss", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<StockLossLine> lines = new ArrayList<>();

    private String createdBy;

    @CreationTimestamp
    private LocalDateTime createdAt;
}

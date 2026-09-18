package com.erp.purchases.entity;

import com.erp.accounting.entity.Partner;
import com.erp.common.entity.Company;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "purchase_orders", indexes = {
    @Index(name = "idx_purchase_orders_company_created", columnList = "company_id, created_at")
})
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Numéro auto : AC-2024-00001 */
    private String name;

    private LocalDate date;
    private LocalDate dateExpected;

    /** draft / confirmed / received / cancelled */
    @Builder.Default
    private String state = "draft";

    /** Verrou optimiste — empêche une double confirmation concurrente
     *  (deux requêtes passant toutes les deux le contrôle state=="draft" avant l'écriture). */
    @Version
    private Long version;

    private String notes;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partner_id")
    private Partner partner;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<PurchaseOrderLine> lines = new ArrayList<>();

    @Column(precision = 20, scale = 2)
    private BigDecimal totalHT;

    @Column(precision = 20, scale = 2)
    private BigDecimal totalTVA;

    @Column(precision = 20, scale = 2)
    private BigDecimal totalTTC;

    /** Entrepôt sélectionné sur la commande (propagé à la facture) */
    @Column(name = "warehouse_id")
    private Long warehouseId;

    /** ID du picking de réception généré lors de la confirmation */
    @Column(name = "picking_id")
    private Long pickingId;

    /** ID de la facture fournisseur générée lors de la confirmation */
    @Column(name = "invoice_id")
    private Long invoiceId;

    @CreationTimestamp
    private LocalDateTime createdAt;

    /** Alimente le snapshot incrémental (SnapshotService) : ne renvoyer au Hub que les commandes
     *  modifiées depuis le dernier envoi, au lieu de la fenêtre entière à chaque passage horaire. */
    @UpdateTimestamp
    private LocalDateTime updatedAt;
}

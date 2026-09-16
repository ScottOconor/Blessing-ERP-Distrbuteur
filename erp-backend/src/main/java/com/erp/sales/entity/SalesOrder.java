package com.erp.sales.entity;

import com.erp.accounting.entity.AccountJournal;
import com.erp.accounting.entity.Partner;
import com.erp.common.entity.Company;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "sales_orders", indexes = {
    @Index(name = "idx_sales_orders_company_date", columnList = "company_id, date")
})
@EntityListeners(AuditingEntityListener.class)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SalesOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Numéro : BC-2024-00001 */
    private String name;

    private LocalDate date;
    private LocalDate dateEcheance;

    /** draft / confirmed / invoiced / cancelled */
    private String state;

    /** Verrou optimiste — empêche une double confirmation/facturation concurrente
     *  (deux requêtes passant toutes les deux le contrôle state=="draft" avant l'écriture). */
    @Version
    private Long version;

    private String notes;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partner_id")
    private Partner partner;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "journal_id")
    private AccountJournal journal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<SalesOrderLine> lines = new ArrayList<>();

    @Column(precision = 20, scale = 2)
    private BigDecimal totalHT;

    @Column(precision = 20, scale = 2)
    private BigDecimal totalTVA;

    @Column(precision = 20, scale = 2)
    private BigDecimal totalTTC;

    @Column(precision = 20, scale = 2)
    private BigDecimal totalRemise;

    @Column(name = "warehouse_id")
    private Long warehouseId;

    /** Référence de la facture eLeader d'origine (si importé via le module eLeader) */
    @Column(name = "eleader_reference")
    private String eleaderReference;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @CreatedBy
    @Column(name = "created_by", updatable = false)
    private String createdBy;
}

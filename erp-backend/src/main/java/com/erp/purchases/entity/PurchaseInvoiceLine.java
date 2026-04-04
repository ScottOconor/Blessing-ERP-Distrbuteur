package com.erp.purchases.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "purchase_invoice_lines")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseInvoiceLine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invoice_id")
    private PurchaseInvoice invoice;

    private String productCode;

    @Column(nullable = false)
    private String description;

    @Column(precision = 20, scale = 4)
    private BigDecimal quantity;

    @Column(precision = 20, scale = 4)
    private BigDecimal prixUnitaire;

    /** Taux de TVA en % (ex: 19.25) */
    @Column(precision = 10, scale = 4)
    private BigDecimal tauxTVA;

    /** Compte de charge (ex: 601000) */
    private String accountCode;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantHT;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantTVA;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantTTC;
}

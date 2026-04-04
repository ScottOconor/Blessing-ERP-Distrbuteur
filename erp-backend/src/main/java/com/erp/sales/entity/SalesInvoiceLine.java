package com.erp.sales.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "sales_invoice_lines")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SalesInvoiceLine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invoice_id")
    private SalesInvoice invoice;

    private String productCode;

    @Column(nullable = false)
    private String description;

    @Column(precision = 20, scale = 4)
    private BigDecimal quantity;

    @Column(precision = 20, scale = 2)
    private BigDecimal prixUnitaire;

    @Column(precision = 10, scale = 4)
    private BigDecimal tauxRemise;

    @Column(precision = 10, scale = 4)
    private BigDecimal tauxTVA;

    /** Compte de produit (ex: 706100) */
    private String accountCode;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantHT;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantTVA;

    @Column(precision = 20, scale = 2)
    private BigDecimal montantTTC;
}

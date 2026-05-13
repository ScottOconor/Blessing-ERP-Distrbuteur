package com.erp.eleader.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "eleader_emballage_mappings",
       uniqueConstraints = @UniqueConstraint(columnNames = {"config_id", "eleader_code", "invoice_model"}))
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EleaderEmballageMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "config_id", nullable = false)
    private EleaderConfig config;

    /** Code eLeader tel qu'il apparaît dans le PDF (ex: VCBB65, VRACC12, 354111) */
    @Column(name = "eleader_code", nullable = false)
    private String eleaderCode;

    /** Code produit ERP correspondant (ex: CB12, CB24, CBG12) */
    @Column(name = "erp_product_code", nullable = false)
    private String erpProductCode;

    /** Modèle de facture : BRASSERIES, GUINNESS ou ALL */
    @Builder.Default
    @Column(name = "invoice_model", nullable = false)
    private String invoiceModel = "ALL";
}

package com.erp.accounting.entity;

import com.erp.common.entity.Company;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "partners")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Partner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String ref;

    @Column(nullable = false)
    private String name;

    /**
     * Type: customer / supplier / both
     */
    private String type;

    private String phone;
    private String email;
    private String address;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;

    // ===== Paramètres commerciaux (ventes) =====
    private java.math.BigDecimal tauxRistourne;      // taux de remise global %
    private java.math.BigDecimal tauxPrecompte;      // taux de précompte %
    private java.math.BigDecimal creditLimit;        // plafond de crédit
    private String receivableAccountCode;            // compte client (ex: 4111)
}

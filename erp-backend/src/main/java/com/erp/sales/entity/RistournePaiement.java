package com.erp.sales.entity;

import com.erp.accounting.entity.AccountMove;
import com.erp.accounting.entity.Partner;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Règlement d'une ristourne : regroupe les lignes de ristourne à payer à un client.
 */
@Entity
@Table(name = "ristourne_paiements", indexes = {
    // sumByPeriod/sumByStatesAndPeriod (dashboard + snapshot horaire) filtrent par
    // (company_id, state, date) en continu — aucun index sur cette table jusqu'ici.
    @Index(name = "idx_ristourne_paiements_company_state_date", columnList = "company_id, state, date"),
    @Index(name = "idx_ristourne_paiements_partner",            columnList = "partner_id, company_id")
})
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class RistournePaiement {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Référence : RST-2024-00001 */
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partner_id", nullable = false)
    private Partner partner;

    private LocalDate date;

    /** Date effective du passage à l'état "done" (facture de ristourne générée) */
    @Column(name = "date_paiement")
    private LocalDate datePaiement;

    /** draft / confirmed / done / cancelled */
    @Builder.Default
    private String state = "draft";

    @Column(name = "total_amount", precision = 20, scale = 2)
    private BigDecimal totalAmount;

    /** Facture de ristourne générée (avoir client) */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invoice_id")
    private SalesInvoice invoice;

    /** Écriture comptable associée */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_move_id")
    private AccountMove accountMove;

    /** ID de la facture de ristourne générée (FV-xxx) */
    @Column(name = "generated_invoice_id")
    private Long generatedInvoiceId;

    /** Nom de la facture de ristourne générée */
    @Column(name = "generated_invoice_name")
    private String generatedInvoiceName;

    @OneToMany(mappedBy = "paiement", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<RistournePaiementLine> lines = new ArrayList<>();

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    private String notes;

    /** Type de ristourne : brasserie | guinness */
    @Column(name = "type_ristourne")
    private String typeRistourne;

    @CreationTimestamp
    private LocalDateTime createdAt;
}

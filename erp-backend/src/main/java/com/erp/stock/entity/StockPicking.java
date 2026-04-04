package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "stock_pickings")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockPicking {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Référence auto-générée : WH1/IN/00001 */
    private String name;

    @Column(name = "picking_type_id", nullable = false)
    private Long pickingTypeId;

    /** incoming / outgoing / internal (copié du type) */
    private String pickingTypeCode;

    @Column(name = "location_id", nullable = false)
    private Long locationId;

    @Column(name = "location_dest_id", nullable = false)
    private Long locationDestId;

    /** Fournisseur / Client / Tiers */
    @Column(name = "partner_id")
    private Long partnerId;

    private String partnerName;

    /**
     * draft / confirmed / done / cancelled
     */
    @Column(nullable = false)
    @Builder.Default
    private String state = "draft";

    private LocalDate scheduledDate;
    private LocalDateTime dateDone;

    /** Document d'origine (BC, FAC, etc.) */
    private String origin;
    private String notes;

    /** Écriture comptable générée lors de la validation */
    @Column(name = "account_move_id")
    private Long accountMoveId;

    /** Agence destinataire (pour les expéditions inter-agences) */
    @Column(name = "agency_id")
    private Long agencyId;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @OneToMany(mappedBy = "picking", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<StockMove> moves = new ArrayList<>();

    @CreationTimestamp
    private LocalDateTime createdAt;
}

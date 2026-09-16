package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "stock_pickings", indexes = {
    // Un bon de mouvement par réception/livraison/transfert/ajustement — table à très fort volume
    // sans aucun index jusqu'ici, alors que les écrans Réceptions/Livraisons/Transferts filtrent
    // tous par company_id (+ type/état) au quotidien.
    @Index(name = "idx_stock_pickings_company_type_state", columnList = "company_id, picking_type_code, state"),
    @Index(name = "idx_stock_pickings_company_created",    columnList = "company_id, created_at"),
    @Index(name = "idx_stock_pickings_origin",             columnList = "origin")
})
@EntityListeners(AuditingEntityListener.class)
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

    /** Verrou optimiste — empêche une double validation concurrente d'un même bon
     *  (deux requêtes passant toutes les deux le contrôle d'état avant d'appliquer le mouvement). */
    @Version
    private Long version;

    private LocalDate scheduledDate;
    private LocalDateTime dateDone;

    /** Document d'origine (BC, FAC, etc.) */
    private String origin;
    private String notes;

    /** Écriture comptable générée lors de la validation */
    @Column(name = "account_move_id")
    private Long accountMoveId;

    /** Agence destinataire (pour les expéditions inter-agences intra-société) */
    @Column(name = "agency_id")
    private Long agencyId;

    /** Agence distante destinataire (pour les expéditions inter-agences via API) */
    @Column(name = "remote_agency_id")
    private Long remoteAgencyId;

    /** Picking lié : pour les transferts inter-dépôts, lie l'émission à la réception en attente */
    @Column(name = "linked_picking_id")
    private Long linkedPickingId;

    /** Vrai si ce picking est la réception générée lors d'un transfert inter-dépôt */
    @Column(name = "is_transfer_reception")
    @Builder.Default
    private Boolean transferReception = false;

    /** Getter booléen : retourne false si la colonne est NULL (anciens enregistrements) */
    public boolean isTransferReception() {
        return Boolean.TRUE.equals(transferReception);
    }

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @OneToMany(mappedBy = "picking", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<StockMove> moves = new ArrayList<>();

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @CreatedBy
    @Column(name = "created_by", updatable = false)
    private String createdBy;

    @LastModifiedBy
    @Column(name = "updated_by")
    private String updatedBy;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // ── Traçabilité des actions métier ─────────────────────────────────────
    @Column(name = "validated_by")
    private String validatedBy;

    @Column(name = "validated_at")
    private LocalDateTime validatedAt;

    @Column(name = "cancelled_by")
    private String cancelledBy;

    @Column(name = "cancelled_at")
    private LocalDateTime cancelledAt;
}

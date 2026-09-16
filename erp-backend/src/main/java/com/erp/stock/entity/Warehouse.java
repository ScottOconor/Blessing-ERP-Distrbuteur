package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "warehouses")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Warehouse {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    /** Code court, ex: WH1 */
    @Column(nullable = false, length = 10)
    private String code;

    /** ID de l'emplacement stock principal (interne) */
    @Column(name = "stock_location_id")
    private Long stockLocationId;

    /** Journal comptable stock OHADA */
    @Column(name = "stock_journal_id")
    private Long stockJournalId;

    /** Journal de vente pré-chargé sur les bons de commande issus de cet entrepôt */
    @Column(name = "sales_journal_id")
    private Long salesJournalId;

    /** Journal de caisse/banque pré-chargé sur les paiements des factures de cet entrepôt */
    @Column(name = "cash_journal_id")
    private Long cashJournalId;

    /**
     * ID de l'entrepôt "Dépôt Achat" — entrepôt séparé représentant la zone de transit
     * pour les marchandises en attente de réception physique.
     * Les pickings incoming créés à la validation des factures fournisseurs arrivent ici.
     */
    @Column(name = "depot_achat_warehouse_id")
    private Long depotAchatWarehouseId;

    /**
     * ID de l'entrepôt "Avaries" — entrepôt séparé qui reçoit les quantités
     * commandées mais non reçues (reliquats) lors de la réception bordereau.
     */
    @Column(name = "avar_warehouse_id")
    private Long avarWarehouseId;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    /** Nom du responsable de l'entrepôt */
    @Column(name = "responsable_name")
    private String responsableName;

    @Builder.Default
    private boolean active = true;

    /** Magasin par défaut de la société — utilisé pour les sorties d'avoirs fournisseurs */
    @Column(name = "is_default")
    private Boolean isDefault;
}

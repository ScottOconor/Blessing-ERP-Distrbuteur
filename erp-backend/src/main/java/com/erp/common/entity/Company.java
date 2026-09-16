package com.erp.common.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "companies")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String sigle;
    private String rccm;
    private String nif;
    private String adresse;
    private String telephone;
    private String email;
    private String logoUrl;

    @Column(columnDefinition = "bytea")
    private byte[] logoData;

    private String logoContentType;

    /** Nom affiché dans le titre du navigateur et l'en-tête de l'app */
    private String appName;

    /** Logo favicon et en-tête app */
    @Column(name = "app_logo_data", columnDefinition = "bytea")
    private byte[] appLogoData;

    @Column(name = "app_logo_content_type")
    private String appLogoContentType;

    @Builder.Default
    @Column(nullable = false, columnDefinition = "boolean not null default true")
    private boolean active = true;

    /** Mois de début de l'exercice fiscal (1 = janvier ... 12 = décembre). Utilisé
     *  pour borner le calcul du résultat net dans le bilan OHADA à l'exercice en
     *  cours plutôt qu'à tout l'historique. */
    @Builder.Default
    @Column(name = "fiscal_year_start_month", nullable = false, columnDefinition = "integer not null default 1")
    private Integer fiscalYearStartMonth = 1;

    /** Date jusqu'à laquelle (incluse) les écritures sont verrouillées : plus
     *  aucune création/modification/validation/extourne n'est possible pour une
     *  écriture datée à cette date ou avant. Positionnée uniquement par la
     *  clôture d'exercice (FiscalClosureService) — jamais éditée directement. */
    @Column(name = "lock_date")
    private LocalDate lockDate;

    /** Marque la fin d'un passage complet de StockService#reconcileMovementLedgerWithQuants pour
     *  cette société — cette migration recale l'historique des mouvements (Fiche de stock) sur le
     *  quant réel après un bug de valorisation aujourd'hui corrigé (voir applyStockMovement) et n'a
     *  donc plus rien à corriger une fois le premier passage propre effectué. Sans ce marqueur, le
     *  job rechargeait TOUT l'historique des mouvements + tous les quants de la société à CHAQUE
     *  démarrage, pour toujours, un coût qui ne fait que croître avec l'ancienneté de l'agence. */
    @Column(name = "stock_ledger_reconciled_at")
    private LocalDateTime stockLedgerReconciledAt;
}

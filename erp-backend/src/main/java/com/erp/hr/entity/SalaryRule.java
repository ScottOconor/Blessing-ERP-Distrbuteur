package com.erp.hr.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/**
 * Règle salariale (ligne de calcul d'un bulletin). Évaluée par ordre de séquence.
 *
 * Le montant est déterminé par {@code computeType} :
 *  - FIX        : montant fixe {@code amountFix}
 *  - PERCENTAGE : {@code amountPercentage}% de la base {@code baseCode} (code de règle ou de catégorie)
 *  - INPUT      : somme des éléments variables du bulletin portant ce {@code code}
 *  - BUILTIN    : formule légale camerounaise intégrée, identifiée par {@code builtinCode}
 *                 (BASIC, GROSS, NET, CNPS_EMP, CFC_EMP, RAV, IRPP, CAC, CNPS_PAT, CFC_PAT, FNE_PAT,
 *                  CONTRACT_FIELD via {@code baseCode} = nom du champ du contrat).
 */
@Entity
@Table(name = "hr_salary_rules",
       uniqueConstraints = @UniqueConstraint(name = "uk_salary_rule_company_code", columnNames = {"company_id", "code"}))
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class SalaryRule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    /** Code unique (par société) utilisé dans les formules — ex. BASIC, GROSS, CNPS_EMP. */
    @Column(nullable = false)
    private String code;

    @Builder.Default
    private int sequence = 10;

    /** Code de la catégorie ({@link SalaryRuleCategory#getCode()}). */
    @Column(nullable = false)
    private String categoryCode;

    /** FIX, PERCENTAGE, INPUT, BUILTIN. */
    @Builder.Default
    private String computeType = "FIX";

    @Builder.Default
    private BigDecimal amountFix = BigDecimal.ZERO;

    @Builder.Default
    private BigDecimal amountPercentage = BigDecimal.ZERO;

    /** Base de calcul pour PERCENTAGE, ou nom du champ contrat pour BUILTIN=CONTRACT_FIELD. */
    private String baseCode;

    /** Identifiant de la formule légale intégrée (voir doc classe). */
    private String builtinCode;

    /** Plafond de base de calcul (ex. plafond CNPS) — utilisé par les formules BUILTIN qui en ont
     *  besoin (CNPS_EMP, CNPS_PAT, PVID_PAT, AF_PAT, ATMP_PAT). Éditable depuis Configuration paie ;
     *  laissé vide, la formule retombe sur le plafond légal par défaut (voir PayrollEngine). */
    private BigDecimal ceilingAmount;

    /** Barème par tranches pour les formules BUILTIN=IRPP/RAV, format "plafond:taux_ou_montant,...".
     *  Pour IRPP : "plafondRNI:tauxPct,..." (taux en %). Pour RAV : "plafondBrut:montantMensuel,...".
     *  La dernière tranche s'applique au-delà de son propre plafond. Éditable depuis Configuration
     *  paie ; laissé vide, la formule retombe sur le barème légal par défaut (voir PayrollEngine).
     *  Pour IRPP, {@code amountFix} sert de seuil d'imposition (RNI en-dessous duquel : 0 FCFA). */
    @Column(columnDefinition = "TEXT")
    private String bracketsConfig;

    /** true = retenue (montant soustrait au net) ; s'applique aux règles FIX/PERCENTAGE/INPUT. */
    @Builder.Default
    private boolean deduction = false;

    /** N'apparaît sur le bulletin que si le montant est non nul quand true. */
    @Builder.Default
    private boolean hideIfZero = true;

    /**
     * Si renseigné (code d'un {@link WorkedDaysType}), le montant calculé (FIX/PERCENTAGE/
     * INPUT/BUILTIN) est traité comme un taux UNITAIRE et multiplié par le nombre de jours saisi
     * sur le bulletin pour ce code (ex. taux journalier × jours d'absence). Laissé vide, la règle
     * s'applique telle quelle (quantité = 1), comportement inchangé.
     */
    private String quantityWorkedDaysCode;

    // Comptabilité : comptes OHADA (codes) mouvementés à la validation du bulletin.
    private String accountDebitCode;
    private String accountCreditCode;

    @Builder.Default
    private boolean active = true;

    @Column(nullable = false)
    private Long companyId;
}

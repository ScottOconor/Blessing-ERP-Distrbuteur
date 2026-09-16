package com.erp.config.entity;

import jakarta.persistence.*;
import lombok.*;

/**
 * État d'installation d'un module métier (Ventes, Achats, Stock, Comptabilité, Caisse, RH,
 * Helpdesk) pour une société. Absence de ligne = installé par défaut (comportement historique) ;
 * une ligne n'existe que lorsqu'un administrateur a explicitement changé l'état.
 */
@Entity
@Table(name = "module_installs",
       uniqueConstraints = @UniqueConstraint(name = "uk_module_install_company_code", columnNames = {"company_id", "module_code"}))
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class ModuleInstall {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Code module — ex. VENTES, ACHATS, STOCK, COMPTABILITE, CAISSE, RH, HELPDESK. */
    @Column(name = "module_code", nullable = false)
    private String moduleCode;

    @Builder.Default
    private boolean installed = true;

    @Column(nullable = false)
    private Long companyId;
}

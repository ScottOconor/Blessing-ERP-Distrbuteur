package com.erp.common.entity;

import jakarta.persistence.*;
import lombok.*;

/**
 * Images de la société (logo des documents, logo de l'application), mappées sur la même table
 * que {@link Company} mais dans une entité à part : elles ne sont lues que par les routes qui les
 * servent ou les remplacent, jamais à chaque chargement de Company. Jamais créée ni supprimée
 * directement — la ligne appartient à Company, cette entité ne fait que lire/écrire ses colonnes.
 */
@Entity
@Table(name = "companies")
@Getter @Setter @NoArgsConstructor
public class CompanyLogo {

    // Même génération que l'entité principale : sur une base neuve, Hibernate peut créer la
    // colonne id depuis CETTE entité — sans IDENTITY, l'insertion de la ligne principale échoue.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "logo_data", columnDefinition = "bytea")
    private byte[] logoData;

    @Column(name = "app_logo_data", columnDefinition = "bytea")
    private byte[] appLogoData;
}

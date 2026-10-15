package com.erp.stock.entity;

import jakarta.persistence.*;
import lombok.*;

/**
 * Photo d'un article, mappée sur la même table que {@link Product} mais dans une entité à part :
 * lue uniquement par les routes photo, jamais à chaque chargement de Product. Jamais créée ni
 * supprimée directement — la ligne appartient à Product.
 */
@Entity
@Table(name = "products")
@Getter @Setter @NoArgsConstructor
public class ProductPhotoData {

    // Même génération que l'entité principale : sur une base neuve, Hibernate peut créer la
    // colonne id depuis CETTE entité — sans IDENTITY, l'insertion de la ligne principale échoue.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "photo_data", columnDefinition = "bytea")
    private byte[] photoData;
}

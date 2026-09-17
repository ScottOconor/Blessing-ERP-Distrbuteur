package com.erp.caisse.entity;

import jakarta.persistence.*;
import lombok.*;

/** Une ligne de comptage physique (quantité d'une coupure donnée) saisie à l'ouverture ou à la
 *  clôture d'une {@link CaisseSession}. */
@Entity
@Table(name = "caisse_session_counts")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CaisseSessionCount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "caisse_session_id", nullable = false)
    private Long caisseSessionId;

    @Column(name = "denomination_id", nullable = false)
    private Long denominationId;

    @Column(nullable = false)
    private Integer quantite;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CountMoment moment;
}

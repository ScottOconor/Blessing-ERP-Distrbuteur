package com.erp.purchases.entity;

import com.erp.stock.entity.ProductCategory;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

/**
 * Ligne de règlement remise fournisseur.
 */
@Entity
@Table(name = "remise_paiement_lines")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class RemisePaiementLine {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "paiement_id", nullable = false)
    private RemisePaiement paiement;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategory category;

    /** Quantité totale achetée sur la période */
    @Column(precision = 20, scale = 4)
    private BigDecimal quantite;

    /** Montant unitaire de remise (HT) */
    @Column(name = "montant_unitaire", precision = 20, scale = 2)
    private BigDecimal montantUnitaire;

    /** Montant total TTC (avec précompte et TVA selon type_remise) — historiquement le seul champ
     *  de montant de cette ligne, contrairement à RistournePaiementLine qui sépare montantTotal
     *  (HT) et montantTTC. Conservé tel quel pour ne rien changer au comportement existant
     *  (generateFacture et le reste du module lisent ce champ en s'attendant au TTC). */
    @Column(name = "montant_total", precision = 20, scale = 2)
    private BigDecimal montantTotal;

    /** Même valeur que montantTotal ci-dessus — ajouté uniquement pour donner à cette entité le
     *  même nom de champ que RistournePaiementLine.montantTTC, pour tout code générique qui
     *  s'attendrait à trouver un "montantTTC" sur une ligne de règlement des deux modules. */
    @Column(name = "montant_ttc", precision = 20, scale = 2)
    private BigDecimal montantTTC;
}

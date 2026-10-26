package com.erp.common.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.support.TransactionTemplate;

/**
 * Exécute une initialisation de données par défaut (départements, règles de paie...) dans sa
 * PROPRE transaction. Deux premières requêtes simultanées peuvent toutes deux lancer
 * l'initialisation ; la perdante viole une contrainte d'unicité. Avalée dans la transaction de
 * l'appelant, cette erreur laissait la session Hibernate inutilisable et la requête échouait quand
 * même (HTTP 500 « don't flush the Session after an exception occurs », constaté à la première
 * ouverture du module RH). Isolée ici, seule l'initialisation perdante est annulée : l'appelant
 * relit ensuite les données insérées par la gagnante.
 */
@Component
@Slf4j
public class SeedTransaction {

    private final TransactionTemplate requiresNew;

    public SeedTransaction(PlatformTransactionManager transactionManager) {
        this.requiresNew = new TransactionTemplate(transactionManager);
        this.requiresNew.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRES_NEW);
    }

    public void run(String what, Runnable seeding) {
        try {
            requiresNew.executeWithoutResult(status -> seeding.run());
        } catch (DataIntegrityViolationException e) {
            log.debug("Initialisation « {} » déjà faite par une requête concurrente — ignoré.", what);
        }
    }
}

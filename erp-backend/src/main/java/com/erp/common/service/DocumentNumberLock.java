package com.erp.common.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.support.TransactionSynchronizationManager;

/**
 * Sérialise l'attribution des numéros de pièces (factures, paiements, écritures, bons...).
 * Les numéros sont calculés « plus grand existant + 1 » : sans verrou, deux transactions
 * simultanées lisaient le même maximum et produisaient le même numéro.
 *
 * Verrou consultatif PostgreSQL de TRANSACTION, un par séquence : pris avant la lecture du
 * maximum, il n'est relâché qu'à la validation de la transaction qui insère la pièce ; la
 * transaction suivante attend, puis voit le nouveau maximum. Les autres séquences ne sont pas
 * bloquées. À appeler dans la transaction qui enregistre la pièce.
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class DocumentNumberLock {

    private final JdbcTemplate jdbc;

    public void lock(String sequence) {
        if (!TransactionSynchronizationManager.isActualTransactionActive()) {
            // Hors transaction, le verrou serait relâché immédiatement : on le signale sans bloquer.
            log.warn("Numérotation '{}' hors transaction : attribution non protégée contre les doublons", sequence);
            return;
        }
        jdbc.query("SELECT pg_advisory_xact_lock(hashtext(?))", rs -> null, "kira.numero." + sequence);
    }
}

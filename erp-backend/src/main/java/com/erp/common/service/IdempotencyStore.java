package com.erp.common.service;

import com.erp.common.entity.IdempotencyRecord;
import com.erp.common.repository.IdempotencyRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

/** Écritures de IdempotencyService, chacune dans sa propre transaction : l'enregistrement de la clé
 *  doit être visible des autres requêtes avant, et indépendamment, de l'opération métier. */
@Component
@RequiredArgsConstructor
public class IdempotencyStore {

    private final IdempotencyRecordRepository repo;
    private final JdbcTemplate jdbc;

    /** Réserve la clé ; false si elle est déjà enregistrée (INSERT atomique : save() de Spring Data
     *  ferait une mise à jour, l'identifiant étant fourni, au lieu de détecter la clé existante). */
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public boolean reserve(String key, String scope, String hash) {
        return jdbc.update("INSERT INTO idempotency_records (idem_key, scope, request_hash, status, created_at) "
                + "VALUES (?, ?, ?, 'IN_PROGRESS', ?) ON CONFLICT (idem_key) DO NOTHING",
                key, scope, hash, LocalDateTime.now()) == 1;
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW, readOnly = true)
    public Optional<IdempotencyRecord> find(String key) {
        return repo.findById(key);
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void complete(String key, int httpStatus, String body) {
        repo.findById(key).ifPresent(r -> {
            r.setStatus(IdempotencyRecord.Status.DONE);
            r.setHttpStatus(httpStatus);
            r.setResponseBody(body);
        });
    }

    /** Échec de l'opération : la clé est libérée, une nouvelle tentative sera traitée normalement. */
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void release(String key) {
        repo.deleteById(key);
    }

    @Scheduled(fixedDelayString = "${idempotency.purge-interval-ms:86400000}", initialDelay = 120_000)
    @Transactional
    public void purge() {
        repo.deleteOlderThan(LocalDateTime.now().minusDays(7));
    }
}

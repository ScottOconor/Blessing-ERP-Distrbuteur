package com.erp.common.service;

import com.erp.common.entity.IdempotencyRecord;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HexFormat;
import java.util.Map;
import java.util.Optional;
import java.util.function.Supplier;
import java.util.regex.Pattern;

/**
 * Rend rejouable sans effet une demande d'opération financière (paiement, opération de caisse).
 * Sans cela, une demande renvoyée après un délai réseau dépassé — alors que le serveur l'avait
 * déjà traitée — créait un second paiement : rien ne la distinguait d'un second paiement partiel.
 *
 * Le client joint un en-tête Idempotency-Key (identifiant aléatoire créé à l'ouverture du
 * formulaire). Première demande : traitée, réponse mémorisée. Même clé ensuite : la réponse
 * mémorisée est renvoyée, sans nouvelle opération. Même clé pour un contenu différent : refus.
 * Sans en-tête : comportement inchangé.
 */
@Service
@RequiredArgsConstructor
public class IdempotencyService {

    public static final String HEADER = "Idempotency-Key";
    private static final Pattern KEY_FORMAT = Pattern.compile("^[A-Za-z0-9_-]{8,100}$");

    private final IdempotencyStore store;
    private final ObjectMapper objectMapper;

    public <T> ResponseEntity<?> execute(String key, String operation, Object request, Supplier<T> action) {
        if (key == null || key.isBlank()) return ResponseEntity.ok(action.get());
        if (!KEY_FORMAT.matcher(key).matches()) {
            return error(HttpStatus.BAD_REQUEST, "En-tête " + HEADER + " invalide");
        }
        String scope = operation + " par " + SecurityContextHolder.getContext().getAuthentication().getName();
        String hash = sha256(scope + "\n" + toJson(request));

        if (!store.reserve(key, scope, hash)) {
            return replay(store.find(key), scope, hash);
        }

        T result;
        try {
            result = action.get();
        } catch (RuntimeException e) {
            store.release(key);
            throw e;
        }
        store.complete(key, HttpStatus.OK.value(), toJson(result));
        return ResponseEntity.ok(result);
    }

    private ResponseEntity<?> replay(Optional<IdempotencyRecord> found, String scope, String hash) {
        if (found.isEmpty()) {
            // Clé libérée entre-temps (échec de la première demande) : à renvoyer.
            return error(HttpStatus.CONFLICT, "Demande précédente en échec : veuillez la renvoyer");
        }
        IdempotencyRecord record = found.get();
        if (!record.getScope().equals(scope) || !record.getRequestHash().equals(hash)) {
            return error(HttpStatus.UNPROCESSABLE_ENTITY,
                    "Cette clé " + HEADER + " a déjà servi pour une autre demande");
        }
        if (record.getStatus() == IdempotencyRecord.Status.IN_PROGRESS) {
            return error(HttpStatus.CONFLICT, "Une demande identique est déjà en cours de traitement");
        }
        return ResponseEntity.status(record.getHttpStatus())
                .contentType(MediaType.APPLICATION_JSON)
                .header("Idempotent-Replayed", "true")
                .body(record.getResponseBody());
    }

    private static ResponseEntity<Map<String, String>> error(HttpStatus status, String message) {
        return ResponseEntity.status(status).body(Map.of("message", message));
    }

    private String toJson(Object value) {
        try {
            return objectMapper.writeValueAsString(value);
        } catch (JsonProcessingException e) {
            throw new IllegalStateException("Sérialisation impossible", e);
        }
    }

    private static String sha256(String s) {
        try {
            return HexFormat.of().formatHex(MessageDigest.getInstance("SHA-256").digest(s.getBytes(StandardCharsets.UTF_8)));
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException(e);
        }
    }
}

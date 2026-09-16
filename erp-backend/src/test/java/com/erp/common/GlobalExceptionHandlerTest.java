package com.erp.common;

import ch.qos.logback.classic.Logger;
import ch.qos.logback.classic.spi.ILoggingEvent;
import ch.qos.logback.core.read.ListAppender;
import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.slf4j.LoggerFactory;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Correctifs de cette session : les messages d'exception internes (SQL, chemins, noms de
 * classes) ne doivent plus fuiter au client (handleGeneric), et un conflit de verrou optimiste
 * (deux modifications concurrentes sur la même entité versionnée — AccountMove, StockQuant)
 * doit remonter en 409 avec un message clair plutôt qu'un 500 générique.
 */
class GlobalExceptionHandlerTest {

    private final GlobalExceptionHandler handler = new GlobalExceptionHandler();

    private ListAppender<ILoggingEvent> logAppender;
    private Logger handlerLogger;
    private boolean originalAdditive;

    @BeforeEach
    void attachLogCapture() {
        handlerLogger = (Logger) LoggerFactory.getLogger(GlobalExceptionHandler.class);
        logAppender = new ListAppender<>();
        logAppender.start();
        handlerLogger.addAppender(logAppender);
        // Empêche la propagation vers l'appender console (root logger) : ces tests déclenchent
        // volontairement des erreurs pour vérifier la redaction, la ListAppender ci-dessus suffit
        // à faire les assertions — sans ça, chaque run affichait une fausse alerte "ERROR ...
        // password=..." dans la sortie de build alors que le secret est déjà masqué à ce stade.
        originalAdditive = handlerLogger.isAdditive();
        handlerLogger.setAdditive(false);
    }

    @AfterEach
    void detachLogCapture() {
        handlerLogger.detachAppender(logAppender);
        handlerLogger.setAdditive(originalAdditive);
    }

    @Test
    void optimisticLockConflictReturns409WithAUserFriendlyMessage() {
        ResponseEntity<?> response = handler.handleOptimisticLock(
                new OptimisticLockingFailureException("Row was updated or deleted by another transaction"));

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CONFLICT);
        assertThat(response.getBody().toString()).doesNotContain("transaction");
    }

    @Test
    void genericExceptionNeverLeaksTheRawExceptionMessage() {
        ResponseEntity<?> response = handler.handleGeneric(
                new RuntimeException("password=hunter2 at jdbc:postgresql://internal-host:5432/db"));

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.INTERNAL_SERVER_ERROR);
        assertThat(response.getBody().toString())
                .doesNotContain("hunter2")
                .doesNotContain("internal-host")
                .doesNotContain("jdbc");
    }

    @Test
    void genericExceptionAlsoNeverLeaksTheSecretIntoTheServerLogs() {
        handler.handleGeneric(
                new RuntimeException("password=hunter2 at jdbc:postgresql://internal-host:5432/db"));

        String loggedOutput = logAppender.list.stream()
                .map(ILoggingEvent::getFormattedMessage)
                .reduce("", String::concat)
                + logAppender.list.stream()
                .flatMap(e -> java.util.Arrays.stream(e.getThrowableProxy() == null ? new String[0]
                        : new String[]{e.getThrowableProxy().getMessage()}))
                .reduce("", String::concat);

        assertThat(loggedOutput).doesNotContain("hunter2");
    }

    @Test
    void entityNotFoundReturns404WithItsOwnMessage() {
        ResponseEntity<?> response = handler.handleNotFound(new EntityNotFoundException("Ressource introuvable"));

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
        assertThat(response.getBody().toString()).contains("Ressource introuvable");
    }
}

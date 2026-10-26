package com.erp.common;

import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.ConstraintViolationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MissingRequestHeaderException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.method.annotation.HandlerMethodValidationException;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.support.MissingServletRequestPartException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<Map<String, String>> handleNotFound(EntityNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("message", ex.getMessage()));
    }

    @ExceptionHandler(IllegalStateException.class)
    public ResponseEntity<Map<String, String>> handleIllegalState(IllegalStateException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(Map.of("message", ex.getMessage()));
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, String>> handleIllegalArgument(IllegalArgumentException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(Map.of("message", ex.getMessage()));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidation(MethodArgumentNotValidException ex) {
        Map<String, String> fieldErrors = new LinkedHashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(fe ->
                fieldErrors.put(fe.getField(), fe.getDefaultMessage()));
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(Map.of("message", "Champs invalides", "errors", fieldErrors));
    }

    @ExceptionHandler(OptimisticLockingFailureException.class)
    public ResponseEntity<Map<String, String>> handleOptimisticLock(OptimisticLockingFailureException ex) {
        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body(Map.of("message", "Cet élément a été modifié entre-temps par une autre action. Veuillez recharger et réessayer."));
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<Map<String, String>> handleDataIntegrityViolation(DataIntegrityViolationException ex) {
        log.warn("Conflit d'intégrité : {}", ex.getMostSpecificCause().getMessage());
        // Contrainte unique/FK violée — le plus souvent deux requêtes concurrentes créant la même
        // ligne (ex : même quant produit/emplacement, même numéro de pièce) — 409 propre plutôt
        // qu'un 500 générique qui masquerait qu'il suffit de recharger et réessayer.
        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body(Map.of("message", "Conflit avec une action concurrente. Veuillez recharger et réessayer."));
    }

    @ExceptionHandler(NoResourceFoundException.class)
    public ResponseEntity<Void> handleNoResource(NoResourceFoundException ex) {
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler({BadCredentialsException.class, AuthenticationException.class})
    public ResponseEntity<Map<String, String>> handleAuthError(Exception ex) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(Map.of("message", "Identifiants incorrects"));
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<Map<String, String>> handleAccessDenied(AccessDeniedException ex) {
        return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body(Map.of("message", ex.getMessage() != null ? ex.getMessage() : "Accès refusé"));
    }

    // ── Requêtes invalides : 4xx explicite au lieu d'une erreur 500 (« Erreur interne du serveur »)
    //    qui ne disait rien au client et faisait croire à une panne. Messages sans détail interne.

    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ResponseEntity<Map<String, String>> handleMissingParameter(MissingServletRequestParameterException ex) {
        return badRequest("Paramètre obligatoire manquant : " + ex.getParameterName());
    }

    @ExceptionHandler({MissingServletRequestPartException.class, MissingRequestHeaderException.class})
    public ResponseEntity<Map<String, String>> handleMissingPart(Exception ex) {
        String name = ex instanceof MissingServletRequestPartException part ? part.getRequestPartName()
                : ((MissingRequestHeaderException) ex).getHeaderName();
        return badRequest("Élément obligatoire manquant dans la requête : " + name);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<Map<String, String>> handleTypeMismatch(MethodArgumentTypeMismatchException ex) {
        return badRequest("Valeur invalide pour « " + ex.getName() + " »");
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<Map<String, String>> handleUnreadable(HttpMessageNotReadableException ex) {
        return badRequest("Données de la requête illisibles (format JSON invalide ou valeur de type incorrect)");
    }

    @ExceptionHandler({HandlerMethodValidationException.class, ConstraintViolationException.class})
    public ResponseEntity<Map<String, String>> handleInvalidParameters(Exception ex) {
        return badRequest("Paramètres invalides");
    }

    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<Map<String, String>> handleMethodNotSupported(HttpRequestMethodNotSupportedException ex) {
        return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED)
                .body(Map.of("message", "Méthode " + ex.getMethod() + " non prise en charge pour cette adresse"));
    }

    @ExceptionHandler(HttpMediaTypeNotSupportedException.class)
    public ResponseEntity<Map<String, String>> handleMediaType(HttpMediaTypeNotSupportedException ex) {
        return ResponseEntity.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
                .body(Map.of("message", "Format de contenu non pris en charge"));
    }

    @ExceptionHandler(MaxUploadSizeExceededException.class)
    public ResponseEntity<Map<String, String>> handleTooLarge(MaxUploadSizeExceededException ex) {
        return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE)
                .body(Map.of("message", "Fichier trop volumineux"));
    }

    private static ResponseEntity<Map<String, String>> badRequest(String message) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", message));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, String>> handleGeneric(Exception ex) {
        // Le détail (SQL, chemins, noms de classes) reste dans les logs serveur uniquement —
        // ne jamais le renvoyer au client (fuite de schéma/infrastructure). Les secrets éventuels
        // (mot de passe dans une URL JDBC, token…) sont en plus masqués avant d'écrire dans les
        // logs, car SLF4J imprime le message brut de l'exception (et de sa cause) dans la stack
        // trace même si on ne passe que le message formaté en paramètre.
        log.error("Erreur non gérée :", sanitize(ex));
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("message", "Une erreur interne est survenue"));
    }

    private static final Pattern SECRET_PATTERN =
            Pattern.compile("(?i)(password|pwd|secret|token|api[_-]?key)\\s*[=:]\\s*\\S+");

    private static String redact(String message) {
        if (message == null) return null;
        return SECRET_PATTERN.matcher(message).replaceAll("$1=***");
    }

    /** Rejoue la même stack trace (et la même chaîne de causes) mais avec les messages assainis. */
    private static Throwable sanitize(Throwable ex) {
        if (ex == null) return null;
        Throwable clean = new Throwable(ex.getClass().getName() + ": " + redact(ex.getMessage()), sanitize(ex.getCause()));
        clean.setStackTrace(ex.getStackTrace());
        return clean;
    }
}

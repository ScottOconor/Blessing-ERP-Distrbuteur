package com.erp.common.service;

import com.erp.common.entity.IdempotencyRecord;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

/** Une même demande de paiement renvoyée sous la même clé ne produit qu'une seule opération. */
class IdempotencyServiceTest {

    private static final String KEY = "0123456789abcdef0123456789abcdef";
    private final IdempotencyStore store = mock(IdempotencyStore.class);
    private final IdempotencyService service = new IdempotencyService(store, new ObjectMapper());
    private final AtomicInteger executions = new AtomicInteger();
    private final Map<String, Object> request = Map.of("invoiceId", 1, "amount", 300);

    @BeforeEach
    void connecte() {
        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken("caissier1", null, List.of()));
    }

    @AfterEach
    void deconnecte() {
        SecurityContextHolder.clearContext();
    }

    private Object pay() {
        executions.incrementAndGet();
        return Map.of("name", "PAY-2026-00001");
    }

    /** Enregistrement tel que le stocke la première exécution de la même demande. */
    private IdempotencyRecord recordOfSameRequest(IdempotencyRecord.Status status) {
        when(store.reserve(eq(KEY), anyString(), anyString())).thenReturn(true);
        service.execute(KEY, "POST /api/sales/payments", request, this::pay);
        var scope = org.mockito.ArgumentCaptor.forClass(String.class);
        var hash = org.mockito.ArgumentCaptor.forClass(String.class);
        verify(store).reserve(eq(KEY), scope.capture(), hash.capture());
        executions.set(0);
        return IdempotencyRecord.builder().key(KEY).scope(scope.getValue()).requestHash(hash.getValue())
                .status(status).httpStatus(200).responseBody("{\"name\":\"PAY-2026-00001\"}")
                .createdAt(LocalDateTime.now()).build();
    }

    @Test
    void premiereDemandeTraiteeEtMemorisee() {
        when(store.reserve(eq(KEY), anyString(), anyString())).thenReturn(true);
        var response = service.execute(KEY, "POST /api/sales/payments", request, this::pay);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(executions).hasValue(1);
        verify(store).complete(eq(KEY), eq(200), contains("PAY-2026-00001"));
    }

    @Test
    void renvoiDeLaMemeDemandeRejoueSansNouvelleOperation() {
        IdempotencyRecord done = recordOfSameRequest(IdempotencyRecord.Status.DONE);
        when(store.reserve(eq(KEY), anyString(), anyString())).thenReturn(false);
        when(store.find(KEY)).thenReturn(Optional.of(done));

        var response = service.execute(KEY, "POST /api/sales/payments", request, this::pay);

        assertThat(executions).hasValue(0);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isEqualTo("{\"name\":\"PAY-2026-00001\"}");
        assertThat(response.getHeaders().getFirst("Idempotent-Replayed")).isEqualTo("true");
    }

    @Test
    void cleReutiliseePourUneAutreDemandeRefusee() {
        IdempotencyRecord done = recordOfSameRequest(IdempotencyRecord.Status.DONE);
        when(store.reserve(eq(KEY), anyString(), anyString())).thenReturn(false);
        when(store.find(KEY)).thenReturn(Optional.of(done));

        var response = service.execute(KEY, "POST /api/sales/payments", Map.of("invoiceId", 1, "amount", 999), this::pay);

        assertThat(executions).hasValue(0);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @Test
    void demandeIdentiqueEncoreEnCoursSignalee() {
        IdempotencyRecord inProgress = recordOfSameRequest(IdempotencyRecord.Status.IN_PROGRESS);
        when(store.reserve(eq(KEY), anyString(), anyString())).thenReturn(false);
        when(store.find(KEY)).thenReturn(Optional.of(inProgress));

        var response = service.execute(KEY, "POST /api/sales/payments", request, this::pay);

        assertThat(executions).hasValue(0);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CONFLICT);
    }

    @Test
    void echecLibereLaClePourUneNouvelleTentative() {
        when(store.reserve(eq(KEY), anyString(), anyString())).thenReturn(true);

        assertThatThrownBy(() -> service.execute(KEY, "POST /api/sales/payments", request,
                () -> { throw new IllegalArgumentException("Montant invalide"); }))
                .isInstanceOf(IllegalArgumentException.class);
        verify(store).release(KEY);
        verify(store, never()).complete(anyString(), anyInt(), any());
    }

    @Test
    void sansCleComportementInchange() {
        service.execute(null, "POST /api/sales/payments", request, this::pay);
        service.execute(null, "POST /api/sales/payments", request, this::pay);

        assertThat(executions).hasValue(2);
        verifyNoInteractions(store);
    }
}

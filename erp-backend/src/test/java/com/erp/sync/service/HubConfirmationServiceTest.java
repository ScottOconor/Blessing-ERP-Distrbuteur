package com.erp.sync.service;

import com.erp.config.service.InterAgencyKeyService;
import com.erp.sync.entity.OutboxEvent;
import com.erp.sync.entity.OutboxStatus;
import com.erp.sync.repository.OutboxEventRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.client.ExpectedCount;
import org.springframework.test.web.client.MockRestServiceServer;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.*;
import static org.springframework.test.web.client.response.MockRestResponseCreators.*;

/**
 * Confirmation par le Hub : seul un événement confirmé devient CONFIRMED (donc purgeable), un refus
 * le passe en FAILED, un événement inconnu du Hub depuis longtemps est renvoyé ; toute réponse
 * absente, perdue ou refusée laisse l'état inchangé.
 */
class HubConfirmationServiceTest {

    private static final String URL = "https://hub.test/api/hub/sync/confirmations";

    private final OutboxEventRepository repo = mock(OutboxEventRepository.class);
    private final InterAgencyKeyService keys = mock(InterAgencyKeyService.class);
    private HubConfirmationService service;
    private MockRestServiceServer hub;
    private final LocalDateTime now = LocalDateTime.now();

    @BeforeEach
    void setUp() {
        service = new HubConfirmationService(repo, keys);
        ReflectionTestUtils.setField(service, "confirmationUrl", URL);
        ReflectionTestUtils.setField(service, "batchSize", 500);
        ReflectionTestUtils.setField(service, "resendAfterMinutes", 30L);
        ReflectionTestUtils.setField(service, "spokeId", "NDEMEFO_01");
        hub = MockRestServiceServer.bindTo((RestTemplate) ReflectionTestUtils.getField(service, "http")).build();
        when(keys.getOrCreateKey()).thenReturn("cle-installation");
    }

    private static OutboxEvent sent(long id, LocalDateTime lastAttempt) {
        OutboxEvent e = new OutboxEvent();
        e.setId(id);
        e.setStatus(OutboxStatus.SENT);
        e.setLastAttemptAt(lastAttempt);
        return e;
    }

    private void awaiting(OutboxEvent... events) {
        when(repo.findByStatusAndEventTypeNotInAndLastAttemptAtBeforeOrderByIdAsc(eq(OutboxStatus.SENT),
                eq(HubConfirmationService.NOT_CONFIRMED_TYPES), any(), any())).thenReturn(List.of(events));
    }

    @Test
    void reponseDuHubAppliqueeEvenementParEvenement() {
        OutboxEvent traite = sent(1, now.minusMinutes(5));
        OutboxEvent refuse = sent(2, now.minusMinutes(5));
        OutboxEvent inconnuRecent = sent(3, now.minusMinutes(5));
        OutboxEvent inconnuAncien = sent(4, now.minusMinutes(60));
        OutboxEvent ignore = sent(5, now.minusMinutes(5));
        awaiting(traite, refuse, inconnuRecent, inconnuAncien, ignore);
        hub.expect(requestTo(URL)).andExpect(method(HttpMethod.POST))
                .andExpect(header("X-Spoke-Id", "NDEMEFO_01")).andExpect(header("X-Api-Key", "cle-installation"))
                .andExpect(jsonPath("$.outboxIds.length()").value(5))
                .andRespond(withSuccess("""
                        {"processed":[1,1],"rejected":[{"outboxId":2,"code":"INVALID_PAYLOAD","reason":"payload invalide"}],"ignored":[5],"unknown":[3,4]}""",
                        MediaType.APPLICATION_JSON));

        service.confirm();

        hub.verify();
        assertThat(traite.getStatus()).isEqualTo(OutboxStatus.CONFIRMED);
        assertThat(refuse.getStatus()).isEqualTo(OutboxStatus.FAILED);
        assertThat(refuse.getErrorMessage()).contains("[INVALID_PAYLOAD]").contains("payload invalide");
        assertThat(refuse.getAutoRequeueCount()).isEqualTo(SyncDispatcherScheduler.MAX_AUTO_REQUEUES);
        assertThat(inconnuRecent.getStatus()).isEqualTo(OutboxStatus.SENT);
        assertThat(inconnuAncien.getStatus()).isEqualTo(OutboxStatus.PENDING);
        assertThat(ignore.getStatus()).isEqualTo(OutboxStatus.FAILED);
        assertThat(ignore.getAutoRequeueCount()).isEqualTo(SyncDispatcherScheduler.MAX_AUTO_REQUEUES);
    }

    @Test
    void evenementAbsentDeLaReponseJamaisRenvoye() {
        OutboxEvent absent = sent(7, now.minusMinutes(60));
        awaiting(absent);
        hub.expect(requestTo(URL)).andRespond(withSuccess("{\"processed\":[],\"rejected\":[],\"unknown\":[]}",
                MediaType.APPLICATION_JSON));

        service.confirm();

        hub.verify();
        assertThat(absent.getStatus()).isEqualTo(OutboxStatus.SENT);
    }

    @Test
    void hubSansLeContratFonctionnementInchange() {
        OutboxEvent e = sent(1, now.minusMinutes(60));
        awaiting(e);
        hub.expect(requestTo(URL)).andRespond(withStatus(HttpStatus.NOT_FOUND));

        service.confirm();
        service.confirm(); // plus aucun appel ensuite

        hub.verify();
        assertThat(e.getStatus()).isEqualTo(OutboxStatus.SENT);
        assertThat(service.isActive()).isFalse();
        verify(repo, never()).saveAll(any());
    }

    @Test
    void reponsePerdueOuErreurDuHubSansChangement() {
        OutboxEvent e = sent(1, now.minusMinutes(60));
        awaiting(e);
        hub.expect(requestTo(URL)).andRespond(withServerError());
        hub.expect(requestTo(URL)).andRespond(withStatus(HttpStatus.UNAUTHORIZED));
        hub.expect(requestTo(URL)).andRespond(request -> { throw new java.net.SocketTimeoutException("délai dépassé"); });

        service.confirm();
        service.confirm();
        service.confirm();

        hub.verify();
        assertThat(e.getStatus()).isEqualTo(OutboxStatus.SENT);
        assertThat(service.isActive()).isTrue();
        verify(repo, never()).saveAll(any());
    }

    @Test
    void desactiveSansUrlOuSansIdentifiantDInstallation() {
        awaiting(sent(1, now.minusMinutes(60)));
        hub.expect(ExpectedCount.never(), requestTo(URL));

        ReflectionTestUtils.setField(service, "confirmationUrl", "");
        service.confirm();
        assertThat(service.isActive()).isFalse();

        ReflectionTestUtils.setField(service, "confirmationUrl", URL);
        ReflectionTestUtils.setField(service, "spokeId", "CHANGEME");
        service.confirm();

        hub.verify();
    }
}

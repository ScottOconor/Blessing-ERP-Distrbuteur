package com.erp.sync.service;

import com.erp.config.entity.AppSettings;
import com.erp.config.repository.AppSettingsRepository;
import com.erp.sync.entity.SyncEventType;
import com.erp.sync.repository.OutboxEventRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

/** Interrupteur de synchronisation : réglage en base prioritaire, rien dans l'outbox quand il est coupé. */
class RemoteSyncGuardTest {

    /** Garde activé, pour les tests des services de synchronisation. */
    static RemoteSyncGuard enabledGuard() {
        RemoteSyncGuard guard = mock(RemoteSyncGuard.class);
        when(guard.isEnabled()).thenReturn(true);
        return guard;
    }

    private RemoteSyncGuard guard(AppSettingsRepository repo, boolean propertyDefault) {
        RemoteSyncGuard guard = new RemoteSyncGuard(repo);
        ReflectionTestUtils.setField(guard, "defaultEnabled", propertyDefault);
        guard.init();
        return guard;
    }

    @Test
    void sansReglageEnBase_laProprieteDecide() {
        AppSettingsRepository repo = mock(AppSettingsRepository.class);
        when(repo.findById(RemoteSyncGuard.SETTING_KEY)).thenReturn(Optional.empty());
        assertTrue(guard(repo, true).isEnabled());
        assertFalse(guard(repo, false).isEnabled());
    }

    @Test
    void reglageEnBase_prioritaireSurLaPropriete() {
        AppSettingsRepository repo = mock(AppSettingsRepository.class);
        when(repo.findById(RemoteSyncGuard.SETTING_KEY))
                .thenReturn(Optional.of(AppSettings.builder().key(RemoteSyncGuard.SETTING_KEY).value("false").build()));
        assertFalse(guard(repo, true).isEnabled());
    }

    @Test
    void reglageIllisible_rienNeSort() {
        AppSettingsRepository repo = mock(AppSettingsRepository.class);
        when(repo.findById(any())).thenThrow(new RuntimeException("base indisponible"));
        assertFalse(guard(repo, true).isEnabled());
    }

    @Test
    void basculeSansRedemarrage_etPersistee() {
        AppSettingsRepository repo = mock(AppSettingsRepository.class);
        when(repo.findById(any())).thenReturn(Optional.empty());
        RemoteSyncGuard guard = guard(repo, true);

        guard.setEnabled(false, "admin");
        assertFalse(guard.isEnabled());
        assertThrows(IllegalStateException.class, guard::requireEnabled);
        verify(repo).save(argThat(s -> RemoteSyncGuard.SETTING_KEY.equals(s.getKey()) && "false".equals(s.getValue())));

        guard.setEnabled(true, "admin");
        assertTrue(guard.isEnabled());
        assertDoesNotThrow(guard::requireEnabled);
    }

    @Test
    void desactive_aucunEvenementEcritDansLOutbox() {
        OutboxEventRepository outbox = mock(OutboxEventRepository.class);
        RemoteSyncGuard guard = mock(RemoteSyncGuard.class);
        when(guard.isEnabled()).thenReturn(false);
        SyncEventPublisher publisher = new SyncEventPublisher(outbox, new ObjectMapper(), mock(EntityManager.class), guard);

        publisher.publish(SyncEventType.SALE_INVOICE_POSTED, "FAC-1", java.util.Map.of("montant", 1000));

        verifyNoInteractions(outbox);
    }
}

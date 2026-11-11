package com.erp.sync.service;

import com.erp.config.entity.AppSettings;
import com.erp.config.repository.AppSettingsRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Interrupteur unique de tout échange sortant de l'installation : Hub (outbox, enregistrement,
 * heartbeat, snapshot, confirmation, helpdesk) et autres agences (expéditions inter-agences).
 *
 * Usage type : installation isolée servant à former des utilisateurs, dont les saisies ne doivent
 * jamais sortir. Désactivé, rien n'est écrit dans l'outbox : ce qui est saisi pendant la coupure ne
 * partira jamais en événement, même après réactivation. Les événements déjà en attente avant la
 * coupure restent en attente et repartent à la réactivation.
 *
 * Attention : le snapshot reflète l'état complet de la base. À la réactivation, le prochain snapshot
 * transmet donc aussi les documents saisis pendant la coupure (totaux, soldes, factures récentes).
 *
 * Valeur stockée en base (app_settings.sync_enabled), modifiable depuis l'écran de synchronisation
 * sans redémarrage ; sync.enabled (application.properties) ne sert que de valeur initiale.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class RemoteSyncGuard {

    static final String SETTING_KEY = "sync_enabled";

    public static final String DISABLED_MESSAGE =
            "Synchronisation désactivée : aucun échange avec le Hub ni avec les autres agences.";

    private final AppSettingsRepository settingsRepo;

    @Value("${sync.enabled:true}")
    private boolean defaultEnabled;

    private volatile boolean enabled;

    @PostConstruct
    void init() {
        try {
            enabled = settingsRepo.findById(SETTING_KEY)
                    .map(s -> Boolean.parseBoolean(s.getValue()))
                    .orElse(defaultEnabled);
        } catch (Exception e) {
            // État illisible : on ne sait pas si l'envoi est autorisé, donc rien ne sort.
            enabled = false;
            log.error("Synchronisation désactivée : réglage illisible ({})", e.getMessage(), e);
            return;
        }
        if (!enabled) log.warn("SYNCHRONISATION DÉSACTIVÉE : aucune donnée n'est envoyée au Hub ni aux autres agences.");
    }

    /** true si l'installation peut échanger avec le Hub et les autres agences. */
    public boolean isEnabled() {
        return enabled;
    }

    @Transactional
    public void setEnabled(boolean value, String username) {
        settingsRepo.save(AppSettings.builder().key(SETTING_KEY).value(String.valueOf(value)).build());
        enabled = value;
        if (value) log.warn("Synchronisation RÉACTIVÉE par {}", username);
        else       log.warn("Synchronisation DÉSACTIVÉE par {} : plus aucun envoi au Hub ni aux autres agences", username);
    }

    /** Pour les actions explicites d'un utilisateur (expédition, envoi forcé) : refus avec un message clair. */
    public void requireEnabled() {
        if (!enabled) throw new IllegalStateException(DISABLED_MESSAGE);
    }
}

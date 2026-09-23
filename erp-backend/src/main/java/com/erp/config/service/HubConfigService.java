package com.erp.config.service;

import com.erp.config.entity.AppSettings;
import com.erp.config.repository.AppSettingsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Adresse du Hub (IP ou nom de domaine), éditable depuis l'écran de configuration de
 * l'application — pas un fichier à modifier à la main. Utilisée pour le helpdesk. Le
 * spoke est toujours l'initiateur de ces appels (jamais le Hub vers le spoke) : aucune adresse publique/port-forwarding n'est
 * requise côté spoke pour que cela fonctionne, même derrière un NAT/box.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class HubConfigService {

    private static final String SETTING_KEY = "hub_url";

    @Value("${hub.health.url:http://localhost:8090}")
    private String defaultHubUrl;

    private final AppSettingsRepository repo;

    /** Cache en mémoire — évite de requêter la DB à chaque appel réseau vers le Hub. */
    private volatile String cachedUrl = null;

    /** Retourne l'URL configurée (ou la valeur par défaut si jamais renseignée en base). */
    @Transactional
    public String getHubUrl() {
        if (cachedUrl != null) return cachedUrl;
        cachedUrl = repo.findById(SETTING_KEY).map(AppSettings::getValue).orElse(defaultHubUrl);
        return cachedUrl;
    }

    /** Met à jour l'URL du Hub, appelée depuis l'écran de configuration. */
    @Transactional
    public void setHubUrl(String url) {
        repo.save(AppSettings.builder().key(SETTING_KEY).value(url).build());
        cachedUrl = url;
        log.info("URL du Hub mise à jour par un administrateur : {}", url);
    }
}

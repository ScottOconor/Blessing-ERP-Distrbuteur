package com.erp.config.service;

import com.erp.config.entity.AppSettings;
import com.erp.config.repository.AppSettingsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.SecureRandom;
import java.util.HexFormat;

@Service
@RequiredArgsConstructor
@Slf4j
public class InterAgencyKeyService {

    private static final String SETTING_KEY = "inter_agency_api_key";

    @Value("${sync.spoke.id:SPOKE_001}")
    private String spokeId;

    /** Retourne le code unique de ce spoke (utilisé comme identifiant dans les notifications sortantes). */
    public String getSpokeCode() { return spokeId; }

    private final AppSettingsRepository repo;

    /** Cache en mémoire — évite de requêter la DB à chaque requête HTTP */
    private volatile String cachedKey = null;

    /** Retourne la clé active (génère et stocke si absente). */
    @Transactional
    public String getOrCreateKey() {
        if (cachedKey != null) return cachedKey;
        cachedKey = repo.findById(SETTING_KEY)
                .map(AppSettings::getValue)
                .orElseGet(() -> {
                    String generated = generateKey();
                    repo.save(AppSettings.builder().key(SETTING_KEY).value(generated).build());
                    log.info("Clé inter-agences générée et stockée en base");
                    return generated;
                });
        return cachedKey;
    }

    /** Régénère une nouvelle clé, l'enregistre et invalide le cache. */
    @Transactional
    public String regenerate() {
        String newKey = generateKey();
        repo.save(AppSettings.builder().key(SETTING_KEY).value(newKey).build());
        cachedKey = newKey;
        log.info("Clé inter-agences régénérée par un administrateur");
        return newKey;
    }

    /** Valide la clé fournie par un appelant distant. */
    public boolean isValid(String providedKey) {
        String current = getOrCreateKey();
        return current != null && current.equals(providedKey);
    }

    private String generateKey() {
        byte[] bytes = new byte[32];
        new SecureRandom().nextBytes(bytes);
        return HexFormat.of().formatHex(bytes);
    }
}

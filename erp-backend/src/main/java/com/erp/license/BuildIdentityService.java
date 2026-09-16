package com.erp.license;

import jakarta.annotation.PostConstruct;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;

/**
 * Identifiant unique de ce build du JAR, généré une fois à la compilation (cf. pom.xml,
 * build-helper-maven-plugin) — jamais au runtime, jamais éditable via application.properties.
 * Envoyé au Hub à chaque demande d'activation : permet de détecter qu'un même JAR copié sur une
 * autre machine tente de s'activer ailleurs (cf. HubLicenseService côté Hub).
 */
@Service
@Slf4j
public class BuildIdentityService {

    @Getter
    private String buildId;

    @PostConstruct
    public void load() {
        try (InputStream in = new ClassPathResource("license/build-id.txt").getInputStream()) {
            buildId = new String(in.readAllBytes(), StandardCharsets.UTF_8).trim();
        } catch (Exception e) {
            log.warn("Impossible de lire l'identifiant de build (license/build-id.txt) : {}", e.getMessage());
            buildId = null;
        }
    }
}

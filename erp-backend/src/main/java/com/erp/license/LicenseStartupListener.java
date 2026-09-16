package com.erp.license;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * Vérification de licence au démarrage + recheck périodique. L'application ne doit jamais refuser
 * de démarrer : ceci ne fait que peupler l'état en cache de LicenseService, lu ensuite par
 * LicenseEnforcementFilter/LicenseController.
 *
 * Désactivé automatiquement en développement (cf. LicenseService.isLicenseEnabled()) : on n'appelle
 * même pas le Hub, inutile de générer des tentatives réseau/logs pour une contrainte ignorée.
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class LicenseStartupListener {

    private final LicenseService licenseService;

    @EventListener(ApplicationReadyEvent.class)
    public void onReady() {
        if (!licenseService.isLicenseEnabled()) {
            log.info("Licensing désactivé — exécution hors JAR empaqueté (mode développement).");
            return;
        }
        licenseService.refreshFromHub();
        log.info("Licensing : état au démarrage = {}", licenseService.getStatus());
    }

    @Scheduled(fixedDelayString = "${license.recheck.interval-ms:1800000}",
               initialDelayString = "${license.recheck.initial-delay-ms:60000}")
    public void recheck() {
        if (!licenseService.isLicenseEnabled()) return;
        LicenseStatus before = licenseService.getStatus();
        licenseService.refreshFromHub();
        LicenseStatus after = licenseService.getStatus();
        if (before != after) {
            log.info("Licensing : changement d'état {} -> {}", before, after);
        }
    }
}

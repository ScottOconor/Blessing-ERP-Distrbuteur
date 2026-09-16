package com.erp.sync.service;

import com.erp.sync.repository.OutboxEventRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

/**
 * Publie un snapshot complet de l'état du spoke vers le Hub toutes les heures — mais seulement
 * s'il s'est passé quelque chose depuis le précédent envoi. Chaque opération métier publie déjà
 * son propre événement fin (facture, paiement, mouvement...) au fil de l'eau ; le snapshot ne
 * sert que de filet de sécurité de réconciliation, pas de canal principal — le renvoyer intégral
 * toutes les heures même sans la moindre activité (nuit, week-end...) surcharge le Hub pour rien
 * et force un recalcul du dashboard hub à chaque fois. Configurable via sync.snapshot.interval-ms
 * (défaut : 3 600 000 ms = 1h).
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class SnapshotScheduler {

    private final SnapshotService snapshotService;
    private final OutboxEventRepository outboxEventRepo;

    /** null tant qu'aucun snapshot n'a encore été envoyé depuis le démarrage : le tout premier
     *  passage envoie donc toujours un snapshot complet, qu'il y ait eu de l'activité ou non
     *  (snapshot d'initialisation attendu à la première connexion au Hub). */
    private volatile LocalDateTime lastSnapshotAt;

    @Scheduled(fixedDelayString = "${sync.snapshot.interval-ms:3600000}",
               initialDelayString = "${sync.snapshot.initial-delay-ms:60000}")
    public void run() {
        LocalDateTime now = LocalDateTime.now();
        if (lastSnapshotAt != null && outboxEventRepo.countByCreatedAtAfter(lastSnapshotAt) == 0) {
            log.debug("Snapshot horaire ignoré : aucune activité depuis {}", lastSnapshotAt);
            return;
        }
        log.info("Snapshot horaire démarré…");
        try {
            snapshotService.buildAndPublish();
            lastSnapshotAt = now;
            log.info("Snapshot horaire terminé.");
        } catch (Exception e) {
            // buildAndPublish() encapsule déjà les erreurs par société ; ce catch ne couvre que
            // ce qui peut échouer avant la boucle (ex: companyRepo.findAll()). Sans lui,
            // l'exception remontait non catchée au handler par défaut de @Scheduled — le prochain
            // passage se déclenchait quand même (fixedDelay) mais avec seulement la stacktrace
            // générique du framework. lastSnapshotAt n'est délibérément PAS mis à jour ici : si
            // aucune nouvelle activité ne survient avant le prochain passage, le garde-fou
            // "aucune activité depuis lastSnapshotAt" ne doit pas faire sauter la retentative.
            log.error("Snapshot horaire échoué : {}", e.getMessage(), e);
        }
    }
}

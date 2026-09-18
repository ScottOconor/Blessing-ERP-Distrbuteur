package com.erp.sync;

import com.rabbitmq.client.AMQP;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitAdmin;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.TimeoutException;

/**
 * Avant que RabbitAdmin ne déclare erp.sync.events (avec DLX), vérifie que la queue — si elle
 * existe déjà sur ce broker — a bien les mêmes arguments. Sinon RabbitMQ refuse la déclaration
 * (PRECONDITION_FAILED) et empêche toute publication vers le Hub tant que la connexion AMQP ne
 * s'est pas rétablie sans redéclarer la queue (cf. RabbitMQConfig côté hub-backend, même
 * correctif : incident Blessing du 27/08, puis récurrences observées le 16/09).
 *
 * Supprime et recrée la queue même si elle contient des messages non consommés. Avant ce
 * correctif, la réparation était refusée tant que messageCount > 0 pour ne pas perdre d'events —
 * mais tant que la queue reste mal formée, RIEN n'est jamais consommé (le mismatch bloque la
 * déclaration à chaque démarrage), donc elle ne redevient jamais vide : blocage définitif
 * observé en prod (cf. erp.log.txt Blessing du 2026-09-17 — PRECONDITION_FAILED des dizaines de
 * fois par jour, aucune réparation jamais tentée). Les events perdus ici (créations/paiements/
 * mouvements individuels en attente) sont rattrapés par le snapshot horaire/"Forcer envoi", qui
 * renvoie l'état complet de chaque société à chaque passage — un filet de reconciliation déjà
 * conçu pour ce cas, donc purger la queue est un compromis acceptable face au blocage permanent.
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class SyncQueueReconciler implements ApplicationRunner {

    private final ConnectionFactory connectionFactory;
    private final RabbitAdmin rabbitAdmin;

    @Override
    public void run(ApplicationArguments args) {
        try {
            reconcileSyncQueue();
        } catch (Exception e) {
            // Ne doit jamais empêcher le démarrage du spoke : au pire on retombe sur le
            // comportement actuel (RabbitAdmin échouera avec le même PRECONDITION_FAILED qu'avant
            // ce correctif, et CachingConnectionFactory continuera de réessayer périodiquement).
            log.error("Échec de la réconciliation de la queue {} — le démarrage continue quand même", RabbitMQConfig.QUEUE, e);
        }

        try {
            rabbitAdmin.initialize();
        } catch (Exception e) {
            log.error("RabbitMQ n'est pas dans un état exploitable pour {} : l'application démarre mais la synchro Hub reste inactive tant que la queue n'est pas réparée manuellement sur le broker.",
                    RabbitMQConfig.QUEUE, e);
        }
    }

    private void reconcileSyncQueue() throws IOException, TimeoutException {
        Map<String, Object> expectedArgs = Map.of(
                "x-dead-letter-exchange", RabbitMQConfig.DLX,
                "x-dead-letter-routing-key", RabbitMQConfig.QUEUE
        );

        try (Connection connection = connectionFactory.createConnection().getDelegate()) {
            try (Channel probe = connection.createChannel()) {
                probe.queueDeclarePassive(RabbitMQConfig.QUEUE);
            } catch (IOException notFound) {
                log.debug("Queue {} inexistante sur ce broker — sera créée normalement par RabbitAdmin.", RabbitMQConfig.QUEUE);
                return;
            }

            try (Channel check = connection.createChannel()) {
                check.queueDeclare(RabbitMQConfig.QUEUE, true, false, false, expectedArgs);
                log.debug("Queue {} déjà conforme (arguments DLX corrects).", RabbitMQConfig.QUEUE);
                return;
            } catch (IOException mismatch) {
                log.warn("Queue {} existe avec des arguments différents de ceux attendus — tentative de réparation.",
                        RabbitMQConfig.QUEUE);
            }

            try (Channel repair = connection.createChannel()) {
                AMQP.Queue.DeclareOk info = repair.queueDeclarePassive(RabbitMQConfig.QUEUE);
                if (info.getMessageCount() > 0) {
                    log.warn("Queue {} supprimée avec {} message(s) non consommé(s) encore en attente — "
                                    + "perte acceptée (voir javadoc de cette classe) : le snapshot horaire/"
                                    + "\"Forcer envoi\" renverra l'état complet et rattrapera ces events.",
                            RabbitMQConfig.QUEUE, info.getMessageCount());
                } else {
                    log.warn("Queue {} vide supprimée — sera recréée avec les arguments DLX corrects par RabbitAdmin.", RabbitMQConfig.QUEUE);
                }
                repair.queueDelete(RabbitMQConfig.QUEUE);
            }
        }
    }
}

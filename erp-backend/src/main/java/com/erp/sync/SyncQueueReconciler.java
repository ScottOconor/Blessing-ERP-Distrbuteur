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
 * Ne supprime la queue existante que si elle est vide (messageCount == 0) : sinon on risquerait
 * de perdre des events non consommés côté Hub, ce qui est strictement pire que l'échec actuel.
 * Dans ce cas on laisse RabbitAdmin échouer normalement plus loin, avec un log explicite.
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
                    log.error("ARRÊT DE LA RÉPARATION : la queue {} contient {} message(s) non consommé(s) et ses arguments ne correspondent pas — "
                                    + "suppression automatique refusée pour ne pas perdre de données. Intervention manuelle requise.",
                            RabbitMQConfig.QUEUE, info.getMessageCount());
                    return;
                }
                repair.queueDelete(RabbitMQConfig.QUEUE);
                log.warn("Queue {} vide supprimée — sera recréée avec les arguments DLX corrects par RabbitAdmin.", RabbitMQConfig.QUEUE);
            }
        }
    }
}

package com.erp.sync;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.amqp.core.MessagePostProcessor;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.postprocessor.GZipPostProcessor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    public static final String EXCHANGE    = "erp.sync.exchange";
    public static final String QUEUE       = "erp.sync.events";
    public static final String ROUTING_KEY = "erp.sync.#";
    public static final String DLX         = EXCHANGE + ".dlx";

    // Aucune déclaration ici (exchange, file, binding) : la file erp.sync.events appartient au Hub,
    // qui seul la déclare (RabbitMQConfig côté hub-backend) et est partagée par TOUS les spokes.
    // Avant (audit C2/E8), chaque spoke la redéclarait et son SyncQueueReconciler pouvait la
    // SUPPRIMER au démarrage — messages en attente de toutes les entreprises compris. Avec un
    // compte RabbitMQ par installation, limité à l'écriture sur erp.sync.exchange, le spoke n'en
    // aurait de toute façon plus le droit. Le spoke ne fait que publier ; un message publié avant
    // la toute première déclaration par le Hub revient non routable (mandatory) et reste en attente
    // dans l'outbox jusqu'au prochain essai. Le durcissement de la file (arguments DLX, réparation
    // d'un éventuel PRECONDITION_FAILED) est de la responsabilité du Hub, seul propriétaire.

    @Bean Jackson2JsonMessageConverter messageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    // Compresse chaque message sortant (en-tête content-encoding: gzip) — le hub le décompresse
    // automatiquement côté réception (DelegatingDecompressingPostProcessor, RabbitMQConfig côté
    // hub-backend). Sans ce post-processor, un FULL_SNAPSHOT un peu volumineux (société avec
    // beaucoup d'historique comptable) dépasse la limite de taille de message du broker (16 Mo)
    // et échoue indéfiniment à chaque tentative puisque la taille ne change jamais entre deux
    // retries. Le JSON compresse typiquement 5-8x, ce qui passe largement sous la limite.
    @Bean RabbitTemplate rabbitTemplate(ConnectionFactory cf, Jackson2JsonMessageConverter mc,
                                        @Value("${spring.rabbitmq.username:}") String rabbitUser,
                                        @Value("${sync.spoke.id:}") String spokeId) {
        RabbitTemplate tpl = new RabbitTemplate(cf);
        tpl.setMessageConverter(mc);
        tpl.setBeforePublishPostProcessors(new GZipPostProcessor(), proveIdentity(rabbitUser, spokeId));
        // mandatory + publisher confirms (spring.rabbitmq.publisher-confirm-type/returns) : un rejet
        // broker (taille max dépassée, message non routable...) n'est connu qu'après l'écriture du
        // message sur le socket ; SyncDispatcherScheduler.dispatch() attend cette confirmation avant
        // de marquer un événement SENT (cf. incident Blessing "Forcer envoi" du 2026-09-17).
        tpl.setMandatory(true);
        return tpl;
    }

    /**
     * Preuve d'identité exigée par le Hub (SpokeIdentityVerifier) : la propriété user_id, que
     * RabbitMQ refuse si elle diffère du compte authentifié, doit être égale au spokeId. Elle n'est
     * posée que si le compte RabbitMQ de l'installation porte ce nom : avec un compte partagé, le
     * Hub refuserait le message comme usurpé ; il reste alors accepté « non vérifié » (mode
     * transitoire du Hub) et un avertissement est journalisé au démarrage (SyncDispatcherScheduler).
     */
    static MessagePostProcessor proveIdentity(String rabbitUser, String spokeId) {
        boolean provable = rabbitUser != null && !rabbitUser.isBlank() && rabbitUser.equals(spokeId);
        return message -> {
            if (provable) message.getMessageProperties().setUserId(rabbitUser);
            return message;
        };
    }
}

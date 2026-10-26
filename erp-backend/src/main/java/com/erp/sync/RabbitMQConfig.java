package com.erp.sync;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.amqp.core.MessagePostProcessor;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitAdmin;
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

    @Bean TopicExchange syncExchange() {
        return ExchangeBuilder.topicExchange(EXCHANGE).durable(true).build();
    }

    // Les arguments doivent correspondre exactement à la déclaration du hub (RabbitMQConfig
    // côté hub-backend) — sinon RabbitMQ rejette la connexion avec PRECONDITION_FAILED dès
    // qu'un spoke tente de déclarer la même queue avec des arguments différents.
    @Bean Queue syncQueue() {
        return QueueBuilder.durable(QUEUE)
                .withArgument("x-dead-letter-exchange", DLX)
                .withArgument("x-dead-letter-routing-key", QUEUE)
                .build();
    }

    @Bean Binding syncBinding(Queue syncQueue, TopicExchange syncExchange) {
        return BindingBuilder.bind(syncQueue).to(syncExchange).with(ROUTING_KEY);
    }

    // autoStartup=false : la déclaration automatique (sur ContextRefreshedEvent) est désactivée
    // pour laisser SyncQueueReconciler vérifier/réparer la queue AVANT que RabbitAdmin ne tente
    // de la déclarer avec les arguments DLX — sinon, si la queue existe déjà sur ce broker avec
    // des arguments différents (déclarée par un autre client, ou avant l'ajout du DLX), RabbitMQ
    // refuse la déclaration (PRECONDITION_FAILED) et bloque toute synchro (cf. RabbitMQConfig
    // côté hub-backend, même correctif, incident Blessing du 27/08 puis récurrences du 16/09).
    @Bean
    RabbitAdmin rabbitAdmin(ConnectionFactory cf) {
        RabbitAdmin admin = new RabbitAdmin(cf);
        admin.setAutoStartup(false);
        return admin;
    }

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

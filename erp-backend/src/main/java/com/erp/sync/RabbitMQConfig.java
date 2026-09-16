package com.erp.sync;

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

    // Compresse le corps de CHAQUE message publié (gzip) — un snapshot complet peut dépasser
    // la taille max de message acceptée par le broker (ex: 16 Mo sur certains hébergements) une
    // fois sérialisé en JSON. Le JSON se compresse très bien (répétitif), et le hub décompresse
    // automatiquement via DelegatingDecompressingPostProcessor (cf. RabbitMQConfig côté hub) sur
    // la seule foi de l'en-tête content-encoding : aucun impact sur REGISTER/HEARTBEAT/événements
    // classiques, qui restent lisibles tels quels.
    @Bean RabbitTemplate rabbitTemplate(ConnectionFactory cf, Jackson2JsonMessageConverter mc) {
        RabbitTemplate tpl = new RabbitTemplate(cf);
        tpl.setMessageConverter(mc);
        tpl.setBeforePublishPostProcessors(new GZipPostProcessor());
        return tpl;
    }
}

package com.erp.sync;

import org.junit.jupiter.api.Test;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageProperties;

import static org.assertj.core.api.Assertions.assertThat;

/** user_id (preuve d'identité vérifiée par RabbitMQ puis par le Hub) posé seulement s'il est prouvable. */
class RabbitMQConfigIdentityTest {

    private static String userIdAfter(String rabbitUser, String spokeId) {
        Message m = new Message(new byte[0], new MessageProperties());
        return RabbitMQConfig.proveIdentity(rabbitUser, spokeId).postProcessMessage(m).getMessageProperties().getUserId();
    }

    @Test
    void compteRabbitNommeCommeLInstallation() {
        assertThat(userIdAfter("BLESSING-01", "BLESSING-01")).isEqualTo("BLESSING-01");
    }

    @Test
    void comptePartageOuNonRenseigneSansUserId() {
        assertThat(userIdAfter("kira", "BLESSING-01")).isNull();
        assertThat(userIdAfter("", "")).isNull();
        assertThat(userIdAfter(null, "BLESSING-01")).isNull();
    }
}

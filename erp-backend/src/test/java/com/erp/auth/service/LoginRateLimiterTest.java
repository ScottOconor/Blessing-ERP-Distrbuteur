package com.erp.auth.service;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Les échecs d'un poste freinent ce poste, sans bloquer le même compte utilisé ailleurs ;
 * l'essai d'un mot de passe sur de nombreux comptes depuis une adresse est freiné ; la mémoire
 * suivie reste bornée.
 */
class LoginRateLimiterTest {

    private static LoginRateLimiter limiter(int perAccount, int perIp, int maxEntries) {
        return new LoginRateLimiter(perAccount, perIp, 15, maxEntries);
    }

    @Test
    void echecsDepuisUnPosteNeBloquentPasLeCompteAilleurs() {
        LoginRateLimiter l = limiter(5, 30, 1000);
        for (int i = 0; i < 5; i++) l.recordFailure("caissier1", "10.0.0.66");

        assertThat(l.isBlocked("caissier1", "10.0.0.66")).isTrue();
        assertThat(l.remainingWindowMinutes("caissier1", "10.0.0.66")).isBetween(1L, 15L);
        assertThat(l.isBlocked("caissier1", "10.0.0.12")).isFalse();
    }

    @Test
    void succesRemetLeCompteurDuPosteAZero() {
        LoginRateLimiter l = limiter(5, 30, 1000);
        for (int i = 0; i < 4; i++) l.recordFailure("Caissier1 ", "10.0.0.12");
        l.recordSuccess("caissier1", "10.0.0.12");
        l.recordFailure("caissier1", "10.0.0.12");

        assertThat(l.isBlocked("caissier1", "10.0.0.12")).isFalse();
    }

    @Test
    void essaisSurDeNombreuxComptesDepuisUneAdresseFreines() {
        LoginRateLimiter l = limiter(5, 30, 1000);
        for (int i = 0; i < 30; i++) l.recordFailure("compte" + i, "10.0.0.66");

        assertThat(l.isBlocked("compte-jamais-essaye", "10.0.0.66")).isTrue();
        assertThat(l.isBlocked("compte-jamais-essaye", "10.0.0.12")).isFalse();
    }

    @Test
    void compteurParIpDesactivable() {
        LoginRateLimiter l = limiter(5, 0, 1000);
        for (int i = 0; i < 100; i++) l.recordFailure("compte" + i, "10.0.0.1");

        assertThat(l.isBlocked("autre", "10.0.0.1")).isFalse();
    }

    @Test
    void memoireBornee() {
        LoginRateLimiter l = limiter(5, 0, 50);
        for (int i = 0; i < 10_000; i++) l.recordFailure("inconnu" + i, "10.0.0.1");

        assertThat(l.trackedEntries()).isLessThanOrEqualTo(50);
    }
}

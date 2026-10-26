package com.erp.auth.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * Limiteur de tentatives de connexion en mémoire (sans dépendance externe type Bucket4j).
 *
 * Deux compteurs d'échecs sur une fenêtre glissante :
 *  - par couple (compte, adresse IP) : freine la recherche du mot de passe d'un compte depuis un
 *    poste, sans permettre à un tiers de bloquer ce compte depuis un AUTRE poste (avant, la clé
 *    était le seul nom d'utilisateur : quelques essais suffisaient à bloquer n'importe qui) ;
 *  - par adresse IP : freine l'essai d'un même mot de passe sur tous les comptes.
 * Une connexion réussie remet à zéro le compteur (compte, IP).
 *
 * Derrière un reverse proxy, toutes les requêtes peuvent sembler venir de la même adresse :
 * configurer server.forward-headers-strategy=native (le proxy doit fournir X-Forwarded-For),
 * ou désactiver le compteur par IP (security.login.max-failures-per-ip=0).
 *
 * Les entrées expirées sont purgées périodiquement et le nombre d'entrées est plafonné, pour
 * qu'une avalanche de noms d'utilisateurs inventés ne fasse pas grossir la mémoire sans limite.
 * Pas de partage entre plusieurs instances ni de persistance (une installation = une instance).
 */
@Component
public class LoginRateLimiter {

    private final int  maxPerAccountAndIp;
    private final int  maxPerIp;
    private final long windowMs;
    private final int  maxEntries;

    private static final class Entry {
        final AtomicInteger attempts = new AtomicInteger(0);
        volatile long windowStart = System.currentTimeMillis();
    }

    private final Map<String, Entry> attemptsByKey = new ConcurrentHashMap<>();

    public LoginRateLimiter(
            @Value("${security.login.max-failures-per-account:5}") int maxPerAccountAndIp,
            @Value("${security.login.max-failures-per-ip:30}") int maxPerIp,
            @Value("${security.login.window-minutes:15}") long windowMinutes,
            @Value("${security.login.max-tracked-entries:100000}") int maxEntries) {
        this.maxPerAccountAndIp = maxPerAccountAndIp;
        this.maxPerIp = maxPerIp;
        this.windowMs = windowMinutes * 60_000L;
        this.maxEntries = maxEntries;
    }

    /** true si la connexion doit être rejetée sans même tenter l'authentification. */
    public boolean isBlocked(String username, String ip) {
        return reached(accountKey(username, ip), maxPerAccountAndIp)
                || (maxPerIp > 0 && reached(ipKey(ip), maxPerIp));
    }

    /** À appeler après un échec d'authentification. */
    public void recordFailure(String username, String ip) {
        increment(accountKey(username, ip));
        if (maxPerIp > 0) increment(ipKey(ip));
    }

    /** À appeler après une authentification réussie. Le compteur par IP n'est pas remis à zéro :
     *  un compte valide ne doit pas servir à « blanchir » une série d'essais sur d'autres comptes. */
    public void recordSuccess(String username, String ip) {
        attemptsByKey.remove(accountKey(username, ip));
    }

    /** Minutes restantes avant la fin du (des) blocage(s) en cours (arrondi supérieur). */
    public long remainingWindowMinutes(String username, String ip) {
        long remainingMs = 0;
        if (reached(accountKey(username, ip), maxPerAccountAndIp)) remainingMs = remainingMs(accountKey(username, ip));
        if (maxPerIp > 0 && reached(ipKey(ip), maxPerIp)) remainingMs = Math.max(remainingMs, remainingMs(ipKey(ip)));
        return remainingMs <= 0 ? 0 : (remainingMs + 59_999L) / 60_000L;
    }

    @Scheduled(fixedDelayString = "${security.login.purge-interval-ms:60000}")
    public void purgeExpired() {
        long now = System.currentTimeMillis();
        attemptsByKey.entrySet().removeIf(e -> now - e.getValue().windowStart > windowMs);
    }

    int trackedEntries() {
        return attemptsByKey.size();
    }

    private boolean reached(String key, int max) {
        Entry entry = attemptsByKey.get(key);
        if (entry == null) return false;
        if (System.currentTimeMillis() - entry.windowStart > windowMs) return false;
        return entry.attempts.get() >= max;
    }

    private void increment(String key) {
        if (attemptsByKey.size() >= maxEntries && !attemptsByKey.containsKey(key)) {
            purgeExpired();
            // Plafond toujours atteint : on ne suit plus de nouvelle clé (le compteur par IP,
            // déjà présent pour une source active, continue lui de s'appliquer).
            if (attemptsByKey.size() >= maxEntries) return;
        }
        long now = System.currentTimeMillis();
        Entry entry = attemptsByKey.computeIfAbsent(key, k -> new Entry());
        synchronized (entry) {
            if (now - entry.windowStart > windowMs) {
                entry.windowStart = now;
                entry.attempts.set(0);
            }
            entry.attempts.incrementAndGet();
        }
    }

    private long remainingMs(String key) {
        Entry entry = attemptsByKey.get(key);
        return entry == null ? 0 : windowMs - (System.currentTimeMillis() - entry.windowStart);
    }

    private static String accountKey(String username, String ip) {
        return "u:" + (username == null ? "" : username.toLowerCase().trim()) + "|" + ip;
    }

    private static String ipKey(String ip) {
        return "ip:" + ip;
    }
}

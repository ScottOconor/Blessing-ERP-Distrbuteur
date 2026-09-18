package com.erp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.system.ApplicationHome;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.security.core.context.SecurityContextHolder;

@SpringBootApplication
@EnableScheduling
public class ErpApplication {

    public static void main(String[] args) {
        // MODE_INHERITABLETHREADLOCAL (recommandation officielle Spring Security pour le traitement
        // async) : sans ça, les endpoints en StreamingResponseBody (ex. GET /api/sales/invoices,
        // voir SalesService#streamInvoices) écrivent leur flux sur un thread neuf soumis par
        // SimpleAsyncTaskExecutor, qui démarre avec un SecurityContext vide — le dispatch ASYNC
        // final relance alors le filtre d'autorisation Spring Security, qui voit un utilisateur
        // anonyme et lève AccessDeniedException alors que la réponse est déjà entièrement envoyée
        // au client (log "Unable to handle the Spring Security Exception because the response is
        // already committed", constaté ~180 fois/jour en prod, cf. erp.log.txt du 2026-09-17). Le
        // mode INHERITABLETHREADLOCAL propage le SecurityContext du thread de requête vers les
        // threads qu'il crée, donc le nouveau thread de streaming hérite bien de l'authentification
        // déjà validée lors du dispatch REQUEST initial.
        SecurityContextHolder.setStrategyName(SecurityContextHolder.MODE_INHERITABLETHREADLOCAL);
        // Positionne le fichier de log au même endroit que le JAR en cours d'exécution, quel que
        // soit le répertoire de travail depuis lequel il est lancé (cf. logging.file.name dans
        // application.properties, qui référence ${LOG_PATH}) — un seul fichier consolidé, plus
        // besoin que le script de déploiement redirige lui-même la sortie console vers des
        // fichiers séparés. ApplicationHome gère correctement le cas des JAR Spring Boot
        // repackagés (JarLauncher/nested jars), contrairement à un calcul manuel via
        // getProtectionDomain().getCodeSource().
        System.setProperty("LOG_PATH", new ApplicationHome(ErpApplication.class).getDir().getAbsolutePath());
        SpringApplication.run(ErpApplication.class, args);
    }
}

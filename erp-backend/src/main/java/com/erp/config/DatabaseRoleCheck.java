package com.erp.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

/**
 * Signale au démarrage un compte PostgreSQL superutilisateur : l'application n'a besoin que d'être
 * propriétaire de sa base. Avec un superutilisateur, toute faille permettant d'exécuter du SQL
 * (ou une restauration de sauvegarde malveillante) donne accès aux fichiers et commandes du serveur
 * de base de données. N'empêche pas le démarrage : le changement de compte est une opération
 * d'exploitation (voir config/application.properties.example).
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class DatabaseRoleCheck implements ApplicationRunner {

    private final JdbcTemplate jdbc;

    @Override
    public void run(ApplicationArguments args) {
        try {
            Boolean superuser = jdbc.queryForObject(
                    "SELECT rolsuper FROM pg_roles WHERE rolname = current_user", Boolean.class);
            if (Boolean.TRUE.equals(superuser)) {
                log.warn("Le compte PostgreSQL de l'application est SUPERUTILISATEUR : utilisez un compte "
                        + "simple propriétaire de la base (voir config/application.properties.example).");
            }
        } catch (Exception e) {
            log.debug("Vérification du rôle PostgreSQL impossible : {}", e.getMessage());
        }
    }
}

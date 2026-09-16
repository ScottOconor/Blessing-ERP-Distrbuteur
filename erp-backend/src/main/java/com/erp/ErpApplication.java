package com.erp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.system.ApplicationHome;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class ErpApplication {

    public static void main(String[] args) {
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

package com.erp.license;

import lombok.Getter;
import org.springframework.stereotype.Component;

/**
 * Détecte si l'application tourne depuis un JAR empaqueté (client réel, "java -jar ...")
 * ou depuis des classes compilées à la volée (IDE, "mvn spring-boot:run" — développement).
 * Sert de valeur par défaut au licensing : jamais exigé en dev, toujours exigé une fois empaqueté,
 * sans qu'aucune variable ne soit à positionner manuellement dans le cas courant.
 */
@Component
public class RuntimePackaging {

    @Getter
    private final boolean runningFromJar;

    public RuntimePackaging() {
        this.runningFromJar = detect();
    }

    private static boolean detect() {
        try {
            var location = RuntimePackaging.class.getProtectionDomain().getCodeSource().getLocation();
            return location != null && location.toString().contains(".jar");
        } catch (Exception e) {
            return true; // détection impossible : on suppose empaqueté (repli prudent, licensing actif)
        }
    }
}

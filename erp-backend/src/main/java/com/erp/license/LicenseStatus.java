package com.erp.license;

public enum LicenseStatus {
    /** Aucun fichier de licence local, aucune demande en cours */
    NOT_ACTIVATED,
    /** Demande d'activation envoyée, en attente de validation admin côté Hub */
    PENDING,
    /** Licence valide, application pleinement fonctionnelle */
    ACTIVE,
    /** Licence expirée ou révoquée par le Hub — lecture seule, données existantes consultables */
    EXPIRED_READONLY,
    /** Empreinte machine ne correspond plus (≥2 composants différents, ou tolérance dépassée) */
    BLOCKED_FINGERPRINT_MISMATCH,
    /** Fichier de licence présent mais invalide (signature incorrecte, corrompu, illisible) */
    INVALID
}

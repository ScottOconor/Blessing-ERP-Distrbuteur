package com.erp.sync.entity;

/**
 * PENDING : à envoyer. SENT : accepté et routé par le broker (pas encore la preuve d'un traitement
 * par le Hub). CONFIRMED : traitement durable confirmé par le Hub (HubConfirmationService, mode
 * facultatif). FAILED : échecs répétés ou refus du Hub.
 */
public enum OutboxStatus {
    PENDING, SENT, CONFIRMED, FAILED
}

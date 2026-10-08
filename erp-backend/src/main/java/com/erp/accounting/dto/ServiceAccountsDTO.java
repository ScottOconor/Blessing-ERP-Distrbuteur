package com.erp.accounting.dto;

import lombok.*;

import java.util.List;

/** Paramétrage comptable des ventes de services : compte par défaut de la société et compte
 *  propre à chaque service (vide = compte par défaut). */
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class ServiceAccountsDTO {
    /** Compte par défaut paramétré (null = 706100) */
    private String defaultAccountCode;
    /** Compte réellement utilisé quand un service n'a pas de compte propre */
    private String effectiveDefaultAccountCode;
    private List<Item> services;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class Item {
        private Long productId;
        private String defaultCode;
        private String name;
        /** Compte propre au service (null = compte par défaut) */
        private String incomeAccountCode;
        /** Compte qui sera mouvementé à la validation d'une facture */
        private String effectiveAccountCode;
    }
}

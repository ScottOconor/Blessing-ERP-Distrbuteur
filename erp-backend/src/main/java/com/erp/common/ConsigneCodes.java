package com.erp.common;

import java.util.Set;

/**
 * Liste des codes produits de consigne/emballage — identique au module Odoo blessing_consulting.
 * Un produit est une consigne si et seulement si son default_code est dans cette liste.
 */
public final class ConsigneCodes {

    public static final Set<String> CODES = Set.of(
        "CB12", "CB24", "CB12M", "CB24M",
        "CV12", "CV24",
        "CBG12", "CBG15", "CBG24",
        "VIP12", "VIP24", "VCP12", "VCP24",
        "VIPG12", "VIPG15", "VIPG24",
        "CVG12", "CVG15", "CVG24",
        "EGUI12", "EGUI15", "EGUI24",
        "PP", "PB", "TT", "BPM", "BGM",
        "CAIMET", "CONS001", "INPN33",
        "EMB1", "EMB2", "EMB3", "EMB4", "EMB5",
        "CAISMB", "PALT-V", "PALTPL",
        "PRC01", "ELV01"
    );

    private ConsigneCodes() {}

    /** Retourne true si le code produit correspond à un article de consigne/emballage. */
    public static boolean isConsigne(String productCode) {
        if (productCode == null || productCode.isBlank()) return false;
        return CODES.contains(productCode.trim().toUpperCase());
    }
}

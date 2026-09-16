package com.erp.common;

import java.util.Collection;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Registre des codes produits traités comme consigne/emballage, scopé par entreprise (companyId).
 * Chaque entreprise a son propre jeu de codes supplémentaires (issus de sa config eLeader),
 * rechargeable à chaud via refresh(companyId, ...) après sauvegarde de la configuration eLeader.
 */
public final class ConsigneCodes {

    /** Codes de base — toujours présents pour toute entreprise, jamais supprimés. */
    private static final Set<String> BASE = Set.of(
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
        "CAISMB", "PALT-V", "PALTPL"
    );

    // Thread-safe — per-company set, readable without lock, replaced atomically on refresh
    // for the given company only (other companies' entries untouched).
    private static final ConcurrentHashMap<Long, Set<String>> CODES_BY_COMPANY = new ConcurrentHashMap<>();

    private ConsigneCodes() {}

    public static boolean isConsigne(String productCode, Long companyId) {
        if (productCode == null || productCode.isBlank()) return false;
        Set<String> codes = companyId == null ? null : CODES_BY_COMPANY.get(companyId);
        if (codes == null) codes = BASE;
        return codes.contains(productCode.trim().toUpperCase());
    }

    /**
     * Rechargement à chaud pour une entreprise donnée : BASE + codes supplémentaires
     * issus de la config eLeader de cette entreprise. Appelé au démarrage
     * (ApplicationReadyEvent) et après chaque sauvegarde de config, pour la companyId concernée.
     * Le swap est atomique et n'affecte que l'entrée de cette entreprise dans la map.
     */
    public static void refresh(Long companyId, Collection<String> extraCodes) {
        if (companyId == null) return;
        Set<String> next = ConcurrentHashMap.newKeySet();
        next.addAll(BASE);
        if (extraCodes != null) {
            for (String c : extraCodes) {
                if (c != null && !c.isBlank()) {
                    next.add(c.trim().toUpperCase());
                }
            }
        }
        CODES_BY_COMPANY.put(companyId, next); // atomic per-company swap
    }

    /** Retourne une copie immuable du set actif pour une entreprise (pour affichage/debug). */
    public static Set<String> snapshot(Long companyId) {
        Set<String> codes = companyId == null ? null : CODES_BY_COMPANY.get(companyId);
        return Set.copyOf(codes == null ? BASE : codes);
    }
}

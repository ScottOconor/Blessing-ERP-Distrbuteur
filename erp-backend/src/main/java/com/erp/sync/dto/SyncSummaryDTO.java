package com.erp.sync.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.Map;

@Getter
@Builder
public class SyncSummaryDTO {
    long total;
    long pending;
    long sent;
    /** Traitement confirmé par le Hub (mode de confirmation actif). */
    long confirmed;
    long failed;
    Map<String, ModuleStats> byModule;

    @Getter
    @Builder
    public static class ModuleStats {
        long pending;
        long sent;
        long confirmed;
        long failed;
    }
}

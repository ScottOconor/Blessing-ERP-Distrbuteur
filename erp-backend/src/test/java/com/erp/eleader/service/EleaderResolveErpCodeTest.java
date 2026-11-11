package com.erp.eleader.service;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

/** Déconsignation des factures 50cl (VCBV50) ignorée faute de mapping — factures DV-C5C52028/05583 et 05584. */
class EleaderResolveErpCodeTest {

    private final EleaderConfigService service = new EleaderConfigService(null, null, null, null);

    @Test
    void casierVcbv50ResoluSansConfig() {
        assertThat(service.resolveErpCode(null, "VCBV50", "BRASSERIES")).isEqualTo("CB12");
    }

    @Test
    void casierInconnuDeduitDeLaContenance() {
        assertThat(service.resolveErpCode(null, "VCXX65", "BRASSERIES")).isEqualTo("CB12");
        assertThat(service.resolveErpCode(null, "VCXX33", "BRASSERIES")).isEqualTo("CB24");
    }

    @Test
    void codeHorsCasierInchange() {
        assertThat(service.resolveErpCode(null, "BFT50C", "BRASSERIES")).isEqualTo("BFT50C");
        assertThat(service.resolveErpCode(null, "VCXX65", "GUINNESS")).isEqualTo("VCXX65");
    }
}

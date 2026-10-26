package com.erp.config;

import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockHttpServletRequest;

import static org.assertj.core.api.Assertions.assertThat;

/** Une requête de l'interface (même nom d'hôte, même derrière un proxy) n'est pas inter-origines ;
 *  un autre site, si. */
class SecurityConfigCorsTest {

    private static MockHttpServletRequest request(String origin, String host, String forwardedHost) {
        MockHttpServletRequest r = new MockHttpServletRequest("POST", "/api/sales/invoices");
        if (origin != null) r.addHeader("Origin", origin);
        if (host != null) r.addHeader("Host", host);
        if (forwardedHost != null) r.addHeader("X-Forwarded-Host", forwardedHost);
        return r;
    }

    @Test
    void memeSiteMalgrePortSchemaOuProxy() {
        assertThat(SecurityConfig.isSameHost(request(null, "erp.local:8085", null))).isTrue();
        assertThat(SecurityConfig.isSameHost(request("http://erp.local:8085", "erp.local:8085", null))).isTrue();
        // reverse proxy HTTPS : le navigateur annonce https://erp.client.cm, Tomcat voit localhost:8085
        assertThat(SecurityConfig.isSameHost(request("https://erp.client.cm", "localhost:8085", "erp.client.cm"))).isTrue();
        assertThat(SecurityConfig.isSameHost(request("https://erp.client.cm", "erp.client.cm", null))).isTrue();
        // dev : proxy d'Angular (changeOrigin)
        assertThat(SecurityConfig.isSameHost(request("http://localhost:4200", "localhost:8085", null))).isTrue();
        assertThat(SecurityConfig.isSameHost(request("http://[::1]:4200", "[::1]:8085", null))).isTrue();
    }

    @Test
    void autreSiteTraiteCommeInterOrigines() {
        assertThat(SecurityConfig.isSameHost(request("https://site-tiers.example", "erp.client.cm", null))).isFalse();
        assertThat(SecurityConfig.isSameHost(request("https://erp.client.cm.site-tiers.example", "erp.client.cm", null))).isFalse();
        assertThat(SecurityConfig.isSameHost(request("null", "erp.client.cm", null))).isFalse();
        assertThat(SecurityConfig.isSameHost(request("https://site-tiers.example", null, null))).isFalse();
    }
}

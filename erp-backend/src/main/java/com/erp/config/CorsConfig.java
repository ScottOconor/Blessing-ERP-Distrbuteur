package com.erp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.AsyncSupportConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Configuration Spring MVC complémentaire. Le CORS est défini uniquement dans
 * SecurityConfig.corsConfigurationSource() (une seconde règle « * » ici le contournait).
 */
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Bean
    public RestTemplate restTemplate() { return new RestTemplate(); }

    /**
     * Les listes en StreamingResponseBody (factures ventes/achats, ajustements de stock) dépassaient
     * le délai async par défaut de Tomcat (30 s) sur les grosses bases : AsyncRequestTimeoutException
     * côté client, qui recharge, pendant que le thread de streaming garde sa connexion JDBC — ce qui
     * a contribué à vider le pool le 2026-10-02.
     */
    @Override
    public void configureAsyncSupport(@NonNull AsyncSupportConfigurer configurer) {
        configurer.setDefaultTimeout(5 * 60 * 1000L);
    }
}

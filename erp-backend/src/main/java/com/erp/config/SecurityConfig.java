package com.erp.config;

import com.erp.auth.filter.JwtAuthFilter;
import com.erp.auth.service.UserDetailsServiceImpl;
import com.erp.config.permission.PermissionFilter;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.DispatcherType;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthFilter              jwtAuthFilter;
    private final UserDetailsServiceImpl     userDetailsService;
    private final InterAgencyApiKeyFilter    interAgencyApiKeyFilter;
    private final PermissionFilter           permissionFilter;
    private final ObjectMapper               objectMapper;

    @Value("${cors.allowed-origins:}")
    private List<String>                     allowedOrigins;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .authorizeHttpRequests(auth -> auth
                // Le dispatch ASYNC final (fin d'un StreamingResponseBody, ex. GET /api/purchases/orders)
                // rejoue AuthorizationFilter sur un thread Tomcat du pool dont le SecurityContext est
                // vide (JwtAuthFilter, OncePerRequestFilter, ne rejoue pas sur ASYNC) : utilisateur
                // anonyme -> AccessDeniedException alors que la réponse est déjà entièrement envoyée
                // ("Unable to handle the Spring Security Exception because the response is already
                // committed", constaté en continu, cf. erp.log.txt du 2026-09-19). Ces dispatchs ne
                // surviennent qu'après un dispatch REQUEST initial déjà autorisé : les laisser passer
                // n'ouvre aucune route non authentifiée.
                .dispatcherTypeMatchers(DispatcherType.ASYNC, DispatcherType.ERROR).permitAll()
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/health").permitAll()
                // Uniquement GET : ces deux routes servent le logo AVANT connexion (écran de login).
                // Un matcher sans méthode aurait aussi ouvert le POST (upload) sans authentification —
                // n'importe qui aurait pu écraser le logo d'une société. L'upload reste donc protégé
                // par défaut (authentifié + CONFIG.ENTREPRISES.EDIT, voir PermissionService).
                .requestMatchers(org.springframework.http.HttpMethod.GET, "/api/config/companies/*/logo").permitAll()
                .requestMatchers(org.springframework.http.HttpMethod.GET, "/api/config/companies/*/app-logo").permitAll()
                // GET /api/config/companies/{id} : AppBrandingService.apply() (frontend) l'appelle dès
                // ngOnInit, donc nécessairement AVANT connexion, pour le nom/titre/favicon de l'écran de
                // login — contrairement à ce qu'affirmait ce commentaire avant l'incident qui a révélé
                // le problème, cet appel existe bien hors session authentifiée. Route publique, mais
                // ConfigService.getCompany ne renvoie le détail sensible (RCCM/NIF/adresse/tél/email)
                // qu'à un appelant réellement authentifié (voir ConfigService.isRealAuthentication) —
                // un visiteur anonyme ne reçoit que le sous-ensemble branding (nom/appName/logo).
                .requestMatchers(org.springframework.http.HttpMethod.GET, "/api/config/companies/*").permitAll()
                // Photo d'article : servie via une simple balise <img>, qui n'envoie jamais le jeton
                // JWT (contrairement aux appels HttpClient d'Angular) — sans cette exception, le
                // navigateur reçoit un 401 et la photo ne s'affiche jamais dans le formulaire article.
                // Seule la lecture (GET) est publique ; upload/suppression restent authentifiés comme
                // le reste de l'API.
                .requestMatchers(org.springframework.http.HttpMethod.GET, "/api/stock/products/*/photo").permitAll()
                .requestMatchers("/api/inter-agency/**").permitAll()
                // Seul le canal Hub→spoke helpdesk (hub-status/hub-comment) est public au niveau
                // Spring Security — protégé en amont par InterAgencyApiKeyFilter (X-Api-Key).
                // Le reste de /api/sync/** (SyncStatusController, tableau de bord admin) exige
                // désormais une authentification + permission (CONFIG.AUDIT), voir PermissionService.
                .requestMatchers("/api/sync/helpdesk/**").permitAll()
                .requestMatchers("/*.js", "/*.css", "/*.ico", "/*.png", "/*.svg").permitAll()
                .requestMatchers("/", "/index.html").permitAll()
                .requestMatchers("/api/**").authenticated()
                .anyRequest().permitAll()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            // Sans entry point explicite, Spring Security n'a aucune stratégie enregistrée pour les
            // requêtes /api/** non authentifiées (JWT absent, expiré, ou signature invalide après un
            // changement de secret) et retombe sur AccessDeniedHandlerImpl (403) au lieu d'un 401 —
            // or le frontend ne déclenche la déconnexion + redirection vers /login QUE sur 401
            // (httpErrorInterceptor). Un token invalide obtenait donc un 403 muet, jamais nettoyé du
            // localStorage, et tout ce qui l'utilisait en arrière-plan (rafraîchissement du dashboard...)
            // le renvoyait indéfiniment en boucle serrée — observé en prod
            // (erp.log.txt du 2026-09-18 : des dizaines de "JWT signature does not match" par seconde,
            // en continu, jamais interrompues faute de déconnexion côté client).
            .exceptionHandling(ex -> ex.authenticationEntryPoint(jsonAuthenticationEntryPoint()))
            .authenticationProvider(authenticationProvider())
            .addFilterBefore(interAgencyApiKeyFilter, UsernamePasswordAuthenticationFilter.class)
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .addFilterAfter(permissionFilter, JwtAuthFilter.class);

        return http.build();
    }

    /** Renvoie 401 (pas 403) pour toute requête /api/** sans authentification valide — voir le
     *  commentaire sur .exceptionHandling() ci-dessus pour l'incident que ça corrige. */
    @Bean
    public AuthenticationEntryPoint jsonAuthenticationEntryPoint() {
        return (request, response, authException) -> {
            response.setStatus(jakarta.servlet.http.HttpServletResponse.SC_UNAUTHORIZED);
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            response.setCharacterEncoding("UTF-8");
            objectMapper.writeValue(response.getWriter(), Map.of("error", "Authentification requise"));
        };
    }

    /**
     * L'interface est servie par ce même serveur (et, en dev, via le proxy d'Angular) : elle n'a
     * besoin d'aucune autorisation inter-origines. Seules les origines listées dans
     * cors.allowed-origins (vide par défaut) peuvent appeler l'API depuis un autre site ;
     * auparavant toutes les origines (« * ») étaient acceptées.
     *
     * Une requête dont l'en-tête Origin désigne le même nom d'hôte que la requête n'est pas traitée
     * comme inter-origines, quels que soient port et schéma : derrière un reverse proxy HTTPS,
     * Spring voit http://localhost:8085 alors que le navigateur annonce https://erp.client — sans
     * cette règle, tous les POST de l'application seraient refusés.
     */
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(allowedOrigins.stream().map(String::trim).filter(o -> !o.isEmpty()).toList());
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setExposedHeaders(List.of("Authorization"));
        configuration.setAllowCredentials(false);
        configuration.setMaxAge(3600L);

        return request -> isSameHost(request) ? null : configuration;
    }

    static boolean isSameHost(jakarta.servlet.http.HttpServletRequest request) {
        String origin = request.getHeader(HttpHeaders.ORIGIN);
        if (origin == null) return true;
        try {
            String originHost = java.net.URI.create(origin).getHost();
            String forwardedHost = request.getHeader("X-Forwarded-Host");
            String host = forwardedHost != null ? forwardedHost.split(",")[0].trim() : request.getHeader(HttpHeaders.HOST);
            if (originHost == null || host == null) return false;
            String hostName = host.startsWith("[") ? host.substring(0, host.indexOf(']') + 1) : host.split(":")[0];
            return originHost.equalsIgnoreCase(hostName);
        } catch (IllegalArgumentException e) {
            return false;
        }
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

package com.erp.config;

import com.erp.auth.filter.JwtAuthFilter;
import com.erp.auth.service.UserDetailsServiceImpl;
import com.erp.config.permission.PermissionFilter;
import com.erp.license.LicenseEnforcementFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
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
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthFilter              jwtAuthFilter;
    private final UserDetailsServiceImpl     userDetailsService;
    private final InterAgencyApiKeyFilter    interAgencyApiKeyFilter;
    private final PermissionFilter           permissionFilter;
    private final LicenseEnforcementFilter   licenseEnforcementFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .authorizeHttpRequests(auth -> auth
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
                .requestMatchers("/api/inter-agency/**").permitAll()
                // Seul le canal Hub→spoke helpdesk (hub-status/hub-comment) est public au niveau
                // Spring Security — protégé en amont par InterAgencyApiKeyFilter (X-Api-Key).
                // Le reste de /api/sync/** (SyncStatusController, tableau de bord admin) exige
                // désormais une authentification + permission (CONFIG.AUDIT), voir PermissionService.
                .requestMatchers("/api/sync/helpdesk/**").permitAll()
                .requestMatchers("/api/license/**").permitAll()
                .requestMatchers("/actuator/**").permitAll()
                .requestMatchers("/*.js", "/*.css", "/*.ico", "/*.png", "/*.svg").permitAll()
                .requestMatchers("/", "/index.html").permitAll()
                .requestMatchers("/api/**").authenticated()
                .anyRequest().permitAll()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .authenticationProvider(authenticationProvider())
            .addFilterBefore(interAgencyApiKeyFilter, UsernamePasswordAuthenticationFilter.class)
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .addFilterAfter(permissionFilter, JwtAuthFilter.class)
            .addFilterAfter(licenseEnforcementFilter, PermissionFilter.class);

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        // Le SPA Angular est servi par cette même application (resources/static, même origine), MAIS
        // chaque installation on-prem tourne sur SON PROPRE domaine/IP (une par distributeur, cf.
        // sync.spoke.public-url / IP publique auto-détectée dans SyncDispatcherScheduler) — une liste
        // figée d'origines (auparavant une seule, le domaine de prod historique) casse TOUTE requête
        // d'écriture (POST/PUT/PATCH/DELETE) sur CHAQUE AUTRE installation cliente, puisque le
        // navigateur envoie un header Origin même pour ce qu'il considère "same-origin" et le filtre
        // CORS de Spring Security le compare à cette liste avant même l'authentification. Incident
        // vécu deux fois le même soir : d'abord avec ng serve (localhost:4200), qui n'aurait été
        // qu'un problème de dev — mais le même bug frappe silencieusement tout client en production
        // dont l'URL n'est pas exactement le domaine historique.
        // setAllowedOriginPatterns("*") plutôt qu'une liste explicite : sûr ici car allowCredentials
        // est à false (l'authentification passe par un header Authorization Bearer explicite, jamais
        // par un cookie envoyé automatiquement par le navigateur) — Spring interdit d'ailleurs
        // allowedOrigins("*") avec credentials=true précisément pour éviter le scénario dangereux que
        // ce mode évite déjà : un site tiers ne peut pas voler le JWT (stocké côté client, jamais
        // exposé par CORS) juste parce que sa requête cross-origin reçoit une réponse.
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOriginPatterns(List.of("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setExposedHeaders(List.of("Authorization"));
        configuration.setAllowCredentials(false);
        configuration.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
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

package com.erp.config.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

/**
 * Agence distante configurée pour les opérations inter-agences (transferts, consultations).
 * L'accès se fait via l'API REST de l'agence distante (host:port + apiKey).
 */
@Entity
@Table(name = "remote_agencies")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class RemoteAgency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Nom affiché de l'agence distante */
    @Column(nullable = false)
    private String name;

    /** Code court unique */
    @Column(unique = true, nullable = false, length = 20)
    private String code;

    /** Adresse IP ou hostname de l'agence */
    @Column(nullable = false)
    private String host;

    /** Port d'écoute de l'API Spring Boot distante */
    @Column(nullable = false)
    private Integer port;

    /** Clé d'API pour l'authentification inter-agences */
    @Column(name = "api_key")
    private String apiKey;

    /** Ville / localisation */
    private String location;

    /** Personne de contact */
    private String contactPerson;

    private String phone;
    private String email;

    /** Notes / description */
    private String notes;

    @Builder.Default
    @Column(nullable = false)
    private boolean active = true;

    @CreationTimestamp
    private LocalDateTime createdAt;

    /** URL de base calculée : http://host:port */
    @Transient
    public String getBaseUrl() {
        return "http://" + (host != null ? host.trim() : host) + ":" + port;
    }
}

package com.erp.auth.service;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.time.LocalDateTime;
import java.util.Collection;

/** Utilisateur Spring Security portant la date du dernier changement de mot de passe, pour que
 *  JwtService refuse les jetons émis avant (voir User.credentialsChangedAt). */
public class KiraUserDetails extends User {

    private final LocalDateTime credentialsChangedAt;

    public KiraUserDetails(String username, String password, boolean enabled,
                           Collection<? extends GrantedAuthority> authorities, LocalDateTime credentialsChangedAt) {
        super(username, password, enabled, true, true, true, authorities);
        this.credentialsChangedAt = credentialsChangedAt;
    }

    public LocalDateTime getCredentialsChangedAt() {
        return credentialsChangedAt;
    }
}

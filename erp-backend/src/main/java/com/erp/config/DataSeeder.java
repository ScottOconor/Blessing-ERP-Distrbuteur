package com.erp.config;

import com.erp.auth.entity.User;
import com.erp.auth.repository.UserRepository;
import com.erp.config.entity.CompanyGroup;
import com.erp.config.entity.Role;
import com.erp.config.repository.CompanyGroupRepository;
import com.erp.config.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataSeeder implements ApplicationRunner {

    private final RoleRepository roleRepository;
    private final CompanyGroupRepository groupRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // Codes des rôles système
    public static final String SUPER_ADMIN    = "SUPER_ADMIN";
    public static final String ADMIN          = "ADMIN";
    public static final String SUPER_AUDITEUR = "SUPER_AUDITEUR";
    public static final String AUDITEUR       = "AUDITEUR";
    public static final String CONTROLEUR     = "CONTROLEUR";

    @Override
    @Transactional
    public void run(ApplicationArguments args) {
        cleanLegacyUsers();
        seedRoles();
        seedDefaultGroupAndSuperAdmin();
    }

    /** Supprime les utilisateurs sans rôle créés par l'ancien initialiseur */
    private void cleanLegacyUsers() {
        userRepository.findAll().stream()
                .filter(u -> u.getRole() == null)
                .forEach(u -> {
                    userRepository.delete(u);
                    log.info("Ancien utilisateur sans rôle supprimé : {}", u.getUsername());
                });
    }

    private void seedRoles() {
        seedRole(SUPER_ADMIN,    "Super Administrateur");
        seedRole(ADMIN,          "Administrateur");
        seedRole(SUPER_AUDITEUR, "Super Auditeur");
        seedRole(AUDITEUR,       "Auditeur");
        seedRole(CONTROLEUR,     "Contrôleur");
        log.info("Rôles système vérifiés/seedés");
    }

    private void seedRole(String code, String label) {
        if (!roleRepository.existsByCode(code)) {
            roleRepository.save(Role.builder()
                    .code(code)
                    .label(label)
                    .isSystem(true)
                    .active(true)
                    .build());
            log.info("Rôle créé : {}", code);
        }
    }

    private void seedDefaultGroupAndSuperAdmin() {
        // Groupe par défaut pour les super admins (équipe dev)
        CompanyGroup devGroup = groupRepository.findByCode("DEV_GROUP").orElseGet(() -> {
            CompanyGroup g = groupRepository.save(CompanyGroup.builder()
                    .name("Groupe Administration Système")
                    .code("DEV_GROUP")
                    .description("Groupe interne équipe de développement")
                    .active(true)
                    .build());
            log.info("Groupe dev créé : {}", g.getName());
            return g;
        });

        // Super admin initial
        if (!userRepository.existsByUsername("superadmin")) {
            Role superAdminRole = roleRepository.findByCode(SUPER_ADMIN)
                    .orElseThrow(() -> new IllegalStateException("Rôle SUPER_ADMIN introuvable"));

            userRepository.save(User.builder()
                    .username("superadmin")
                    .email("admin@erp-system.com")
                    .fullName("Super Administrateur")
                    .password(passwordEncoder.encode("Admin@2024!"))
                    .role(superAdminRole)
                    .group(devGroup)
                    .active(true)
                    .mustChangePassword(true)
                    .build());
            log.info("Compte superadmin créé (mot de passe temporaire : Admin@2024!)");
        }
    }
}

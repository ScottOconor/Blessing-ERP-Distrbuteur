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
import org.springframework.core.annotation.Order;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Order(1)
@RequiredArgsConstructor
@Slf4j
public class DataSeeder implements ApplicationRunner {

    private final RoleRepository roleRepository;
    private final CompanyGroupRepository groupRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JdbcTemplate jdbc;

    // Codes des rôles système
    public static final String SUPER_ADMIN    = "SUPER_ADMIN";
    public static final String ADMIN          = "ADMIN";
    public static final String SUPER_AUDITEUR = "SUPER_AUDITEUR";
    public static final String AUDITEUR       = "AUDITEUR";
    public static final String CONTROLEUR     = "CONTROLEUR";

    @Override
    @Transactional
    public void run(ApplicationArguments args) {
        migrateRolePermissionsSchema();
        cleanLegacyUsers();
        seedRoles();
        seedDefaultGroupAndSuperAdmin();
    }

    /**
     * Migration idempotente de la table role_permissions :
     * - Supprime l'ancienne contrainte unique (role_id, module, action)
     * - Remplace les resource NULL par 'ALL' (données existantes)
     * Hibernate ajoute la nouvelle colonne resource et la contrainte (role_id, module, resource, action).
     */
    private void migrateRolePermissionsSchema() {
        jdbc.execute("""
            DO $$
            DECLARE v_cname text;
            BEGIN
                FOR v_cname IN
                    SELECT DISTINCT tc.constraint_name
                    FROM information_schema.table_constraints tc
                    WHERE tc.table_name   = 'role_permissions'
                      AND tc.constraint_type = 'UNIQUE'
                      AND tc.constraint_name NOT IN (
                          SELECT constraint_name
                          FROM information_schema.key_column_usage
                          WHERE table_name = 'role_permissions'
                            AND column_name = 'resource'
                      )
                      AND tc.constraint_name IN (
                          SELECT constraint_name
                          FROM information_schema.key_column_usage
                          WHERE table_name = 'role_permissions'
                            AND column_name = 'module'
                      )
                LOOP
                    EXECUTE format('ALTER TABLE role_permissions DROP CONSTRAINT IF EXISTS %I', v_cname);
                    RAISE NOTICE 'Dropped legacy constraint: %', v_cname;
                END LOOP;

                IF EXISTS (
                    SELECT 1 FROM information_schema.columns
                    WHERE table_name = 'role_permissions' AND column_name = 'resource'
                ) THEN
                    UPDATE role_permissions SET resource = 'ALL' WHERE resource IS NULL;
                END IF;
            END $$
            """);
        log.info("Migration role_permissions schema OK");
    }

    /** Supprime les utilisateurs sans rôle créés par l'ancien initialiseur */
    private void cleanLegacyUsers() {
        // Guard : skip if the table doesn't exist yet (fresh install)
        Boolean exists = jdbc.queryForObject(
            "SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'users')",
            Boolean.class);
        if (!Boolean.TRUE.equals(exists)) return;

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

    /** Crée les rôles personnalisés par défaut pour un groupe si aucun n'existe encore. */
    public static void seedDefaultCustomRolesForGroup(RoleRepository roleRepository, CompanyGroup group) {
        if (roleRepository.existsByGroupAndIsSystemFalse(group)) return;
        for (String label : new String[]{"Responsable", "Commercial", "Comptable", "Opérateur"}) {
            roleRepository.save(Role.builder()
                    .label(label).isSystem(false).group(group).active(true).build());
        }
    }

    private void seedDefaultCustomRoles(CompanyGroup group) {
        boolean created = !roleRepository.existsByGroupAndIsSystemFalse(group);
        seedDefaultCustomRolesForGroup(roleRepository, group);
        if (created) log.info("Rôles personnalisés par défaut créés pour le groupe : {}", group.getName());
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

        seedDefaultCustomRoles(devGroup);

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

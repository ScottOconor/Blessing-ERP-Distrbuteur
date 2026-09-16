package com.erp.config;

import com.erp.auth.entity.User;
import com.erp.auth.repository.UserRepository;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.config.entity.Role;
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

    private final RoleRepository    roleRepository;
    private final UserRepository    userRepository;
    private final CompanyRepository companyRepository;
    private final PasswordEncoder   passwordEncoder;
    private final JdbcTemplate      jdbc;

    public static final String SUPER_ADMIN = "SUPER_ADMIN";
    public static final String ADMIN       = "ADMIN";

    @Override
    @Transactional
    public void run(ApplicationArguments args) {
        migrateRolePermissionsSchema();
        seedRoles();
        seedSuperAdmin();
        assignDefaultCompanyToOrphanUsers();
    }

    /** Déploiement mono-société : TOUT utilisateur (y compris SUPER_ADMIN/ADMIN) doit être
     *  rattaché à l'unique société de l'instance. Une version antérieure excluait les comptes
     *  privilégiés de ce rattachement (l'idée étant qu'ils contournent déjà TenantGuard, donc pas
     *  besoin de société) — en pratique ça laissait ces comptes avec un companyId NULL dans le
     *  JWT/la réponse de login, ce qui casse tout code qui lit SecurityUtils.currentCompanyId()
     *  directement (hors TenantGuard) pour déterminer sous quelle société agir, et le frontend qui
     *  s'attend à un companyId exploitable après connexion. Incident vécu en clientèle : un
     *  compte SUPER_ADMIN avec companyId NULL semblait "bloqué"/accès refusé après connexion.
     *  Tourne à CHAQUE démarrage (pas seulement à l'installation) : se corrige tout seul si ce
     *  cas se reproduit un jour (nouvel admin créé sans société, restauration de sauvegarde...),
     *  sans intervention manuelle sur la base. Sans effet tant qu'aucune société n'existe encore
     *  (première installation avant création de la société via l'IHM). */
    private void assignDefaultCompanyToOrphanUsers() {
        Company defaultCompany = companyRepository.findAll().stream()
                .min(java.util.Comparator.comparing(Company::getId))
                .orElse(null);
        if (defaultCompany == null) return;

        userRepository.findAll().stream()
                .filter(u -> u.getCompany() == null)
                .forEach(u -> {
                    u.setCompany(defaultCompany);
                    userRepository.save(u);
                    log.info("Utilisateur {} rattaché à la société {}", u.getUsername(), defaultCompany.getId());
                });
    }

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

    private void cleanLegacyUsers() {
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
        seedRole(SUPER_ADMIN, "Super Administrateur");
        seedRole(ADMIN,       "Administrateur");
        log.info("Rôles système vérifiés/seedés");
    }

    private void seedRole(String code, String label) {
        if (!roleRepository.existsByCode(code)) {
            roleRepository.save(Role.builder()
                    .code(code).label(label).isSystem(true).active(true).build());
            log.info("Rôle créé : {}", code);
        }
    }

    private void seedSuperAdmin() {
        if (!userRepository.existsByUsername("superadmin")) {
            Role superAdminRole = roleRepository.findByCode(SUPER_ADMIN)
                    .orElseThrow(() -> new IllegalStateException("Rôle SUPER_ADMIN introuvable"));

            userRepository.save(User.builder()
                    .username("superadmin")
                    .email("admin@erp-system.com")
                    .fullName("Super Administrateur")
                    .password(passwordEncoder.encode("Admin@2024!"))
                    .role(superAdminRole)
                    .active(true)
                    .mustChangePassword(true)
                    .build());
            log.info("Compte superadmin créé (mot de passe temporaire : Admin@2024!)");
        }
    }
}

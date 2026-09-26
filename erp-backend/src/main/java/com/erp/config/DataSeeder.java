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
        migrateCaissePermissions();
        migrateAgencesPermissions();
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

    /**
     * Le module Caisse est désormais découpé en CAISSES (paramétrage), SESSIONS,
     * OPERATIONS, COUPURES et RAPPORTS : chaque rôle ayant CAISSE/CAISSES garde les mêmes actions
     * sur les nouvelles ressources. Migration unique.
     */
    private void migrateCaissePermissions() {
        Boolean tableExists = jdbc.queryForObject(
            "SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'role_permissions')",
            Boolean.class);
        if (!Boolean.TRUE.equals(tableExists)) return;
        Integer existing = jdbc.queryForObject("""
            SELECT COUNT(*) FROM role_permissions
            WHERE module = 'CAISSE' AND resource IN ('SESSIONS','OPERATIONS','COUPURES','RAPPORTS')
            """, Integer.class);
        if (existing != null && existing > 0) return;
        int inserted = jdbc.update("""
            INSERT INTO role_permissions (role_id, module, resource, action)
            SELECT p.role_id, 'CAISSE', r.res, p.action
            FROM role_permissions p
            CROSS JOIN (VALUES ('SESSIONS'), ('OPERATIONS'), ('COUPURES'), ('RAPPORTS')) AS r(res)
            WHERE p.module = 'CAISSE' AND p.resource = 'CAISSES'
            ON CONFLICT DO NOTHING
            """);
        if (inserted > 0) log.info("Migration droits Caisse : {} droit(s) SESSIONS/OPERATIONS/COUPURES/RAPPORTS ajouté(s)", inserted);
    }

    /**
     * Les agences distantes, la clé inter-agences et l'URL du Hub ont désormais leur propre droit
     * CONFIG/AGENCES (auparavant sous ENTREPRISES) : chaque rôle ayant CONFIG/ENTREPRISES garde
     * les mêmes actions sur AGENCES. Migration unique.
     */
    private void migrateAgencesPermissions() {
        Boolean tableExists = jdbc.queryForObject(
            "SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'role_permissions')",
            Boolean.class);
        if (!Boolean.TRUE.equals(tableExists)) return;
        Integer existing = jdbc.queryForObject(
            "SELECT COUNT(*) FROM role_permissions WHERE module = 'CONFIG' AND resource = 'AGENCES'",
            Integer.class);
        if (existing != null && existing > 0) return;
        int inserted = jdbc.update("""
            INSERT INTO role_permissions (role_id, module, resource, action)
            SELECT p.role_id, 'CONFIG', 'AGENCES', p.action
            FROM role_permissions p
            WHERE p.module = 'CONFIG' AND p.resource = 'ENTREPRISES'
            ON CONFLICT DO NOTHING
            """);
        if (inserted > 0) log.info("Migration droits Configuration : {} droit(s) AGENCES ajouté(s)", inserted);
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

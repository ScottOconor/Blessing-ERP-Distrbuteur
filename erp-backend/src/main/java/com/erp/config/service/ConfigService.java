package com.erp.config.service;

import com.erp.accounting.init.OhadaDataInitializer;
import com.erp.auth.SecurityUtils;
import com.erp.auth.entity.User;
import com.erp.auth.repository.UserRepository;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.common.service.TenantGuard;
import com.erp.config.dto.*;
import com.erp.config.entity.Role;
import com.erp.config.entity.RolePermission;
import com.erp.config.repository.RolePermissionRepository;
import com.erp.config.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ConfigService {

    private final CompanyRepository         companyRepository;
    private final RoleRepository            roleRepository;
    private final RolePermissionRepository  permissionRepository;
    private final UserRepository            userRepository;
    private final com.erp.caisse.repository.CaisseRepository caisseRepository;
    private final PasswordEncoder           passwordEncoder;
    private final OhadaDataInitializer      companyInitializer;
    private final TenantGuard               tenantGuard;
    private final com.erp.audit.service.AuditService auditService;

    // ── Entreprises ───────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<CompanyDTO> getAllCompanies() {
        return companyRepository.findAll().stream().map(this::toCompanyDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    /** Consommé à la fois par l'écran admin "Société" (authentifié, détail complet) et par le
     *  chargement du branding avant connexion (AppBrandingService.apply(), appelé dès ngOnInit,
     *  donc nécessairement non authentifié) — la route est permitAll côté SecurityConfig, mais on
     *  ne renvoie le détail sensible (RCCM/NIF/adresse/tél/email) qu'à un appelant réellement
     *  authentifié, jamais au principal "anonymous" que Spring Security attache par défaut. */
    public CompanyDTO getCompany(Long id) {
        Company c = companyRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Entreprise introuvable"));
        if (!isRealAuthentication()) {
            return toPublicBrandingDTO(c);
        }
        tenantGuard.check(c.getId());
        return toCompanyDTO(c);
    }

    private boolean isRealAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth != null && auth.isAuthenticated() && !(auth instanceof AnonymousAuthenticationToken);
    }

    /** Sous-ensemble public : uniquement ce que l'écran de connexion affiche avant authentification
     *  (nom, appName pour le titre/favicon, indicateur de logo) — jamais RCCM/NIF/adresse/tél/email. */
    private CompanyDTO toPublicBrandingDTO(Company c) {
        return CompanyDTO.builder()
                .id(c.getId()).name(c.getName()).sigle(c.getSigle())
                .logoContentType(c.getLogoContentType())
                .appName(c.getAppName()).hasAppLogo(c.getAppLogoData() != null && c.getAppLogoData().length > 0)
                .active(c.isActive())
                .build();
    }

    @Transactional
    public CompanyDTO createCompany(CompanyDTO dto) {
        Company c = companyRepository.save(Company.builder()
                .name(dto.getName()).sigle(dto.getSigle()).rccm(dto.getRccm())
                .nif(dto.getNif()).adresse(dto.getAdresse()).telephone(dto.getTelephone())
                .email(dto.getEmail()).logoUrl(dto.getLogoUrl()).active(true)
                .fiscalYearStartMonth(normalizeFiscalYearStartMonth(dto.getFiscalYearStartMonth())).build());
        companyInitializer.initializeCompany(c);
        return toCompanyDTO(c);
    }

    @Transactional
    public CompanyDTO updateCompany(Long id, CompanyDTO dto) {
        Company c = companyRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Entreprise introuvable"));
        tenantGuard.check(c.getId());
        c.setName(dto.getName()); c.setSigle(dto.getSigle()); c.setRccm(dto.getRccm());
        c.setNif(dto.getNif()); c.setAdresse(dto.getAdresse()); c.setTelephone(dto.getTelephone());
        c.setEmail(dto.getEmail()); c.setLogoUrl(dto.getLogoUrl()); c.setActive(dto.isActive());
        c.setFiscalYearStartMonth(normalizeFiscalYearStartMonth(dto.getFiscalYearStartMonth()));
        if (dto.getAppName() != null && !dto.getAppName().isBlank()) c.setAppName(dto.getAppName().trim());
        return toCompanyDTO(companyRepository.save(c));
    }

    /** Janvier par défaut ; borne à [1,12] pour éviter une valeur invalide en base. */
    private Integer normalizeFiscalYearStartMonth(Integer month) {
        if (month == null || month < 1 || month > 12) return 1;
        return month;
    }

    // ── Rôles ─────────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<RoleDTO> getAllRoles() {
        return roleRepository.findByActiveTrue().stream().map(this::toRoleDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<RoleDTO> getSystemRoles() {
        return roleRepository.findByIsSystemTrue().stream().map(this::toRoleDTO).collect(Collectors.toList());
    }

    @Transactional
    public RoleDTO createRole(RoleDTO dto) {
        Role role = roleRepository.save(Role.builder()
                .label(dto.getLabel()).isSystem(false).active(true).build());
        if (dto.getPermissions() != null) savePermissions(role, dto.getPermissions());
        auditService.log("ROLE", role.getId(), role.getLabel(),
                "CREATED", "Rôle créé", SecurityUtils.currentCompanyId());
        return toRoleDTO(role);
    }

    @Transactional
    public RoleDTO updateRole(Long roleId, RoleDTO dto) {
        Role role = roleRepository.findById(roleId)
                .orElseThrow(() -> new IllegalArgumentException("Rôle introuvable"));
        if (role.isSystem()) throw new IllegalArgumentException("Impossible de modifier un rôle système");
        role.setLabel(dto.getLabel()); role.setActive(dto.isActive());
        roleRepository.save(role);
        if (dto.getPermissions() != null) {
            permissionRepository.deleteByRole(role);
            savePermissions(role, dto.getPermissions());
            auditService.log("ROLE", role.getId(), role.getLabel(),
                    "PERMISSIONS_CHANGED", "Permissions du rôle modifiées", SecurityUtils.currentCompanyId());
        }
        return toRoleDTO(role);
    }

    @Transactional
    public void deleteRole(Long roleId) {
        Role role = roleRepository.findById(roleId)
                .orElseThrow(() -> new IllegalArgumentException("Rôle introuvable"));
        if (role.isSystem()) throw new IllegalArgumentException("Impossible de supprimer un rôle système");
        permissionRepository.deleteByRole(role);
        roleRepository.delete(role);
        auditService.log("ROLE", roleId, role.getLabel(),
                "DELETED", "Rôle supprimé", SecurityUtils.currentCompanyId());
    }

    // ── Utilisateurs ──────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<UserDTO> getAllUsers() {
        return userRepository.findByActiveTrue().stream().map(this::toUserDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public UserDTO getUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Utilisateur introuvable"));
        tenantGuard.check(user.getCompany() != null ? user.getCompany().getId() : null);
        return toUserDTO(user);
    }

    @Transactional
    public UserDTO createUser(CreateUserRequest req) {
        // Pas de @NotBlank sur CreateUserRequest.password : ce DTO est aussi réutilisé par
        // updateUser, où un mot de passe null/blanc signifie explicitement "ne pas changer" —
        // la validation de non-vacuité ne s'applique donc qu'à la création, ici.
        if (req.getPassword() == null || req.getPassword().isBlank())
            throw new IllegalArgumentException("Le mot de passe est obligatoire");
        if (userRepository.existsByUsername(req.getUsername()))
            throw new IllegalArgumentException("Nom d'utilisateur déjà utilisé");
        if (req.getEmail() != null && userRepository.existsByEmail(req.getEmail()))
            throw new IllegalArgumentException("Email déjà utilisé");

        Role role = req.getRoleId() != null
                ? roleRepository.findById(req.getRoleId()).orElseThrow(() -> new IllegalArgumentException("Rôle introuvable"))
                : null;

        Long currentCompanyId = SecurityUtils.currentCompanyId();
        Company company = currentCompanyId != null ? companyRepository.findById(currentCompanyId).orElse(null) : null;

        User user = User.builder()
                .username(req.getUsername()).email(req.getEmail())
                .fullName(req.getFullName())
                .password(passwordEncoder.encode(req.getPassword()))
                .role(role).company(company).active(true).mustChangePassword(true)
                .caisseId(requireCaisse(req.getCaisseId())).build();
        return toUserDTO(userRepository.save(user));
    }

    @Transactional
    public UserDTO updateUser(Long id, CreateUserRequest req) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Utilisateur introuvable"));
        tenantGuard.check(user.getCompany() != null ? user.getCompany().getId() : null);
        if (req.getFullName() != null) user.setFullName(req.getFullName());
        if (req.getEmail()    != null) user.setEmail(req.getEmail());
        if (req.getPassword() != null && !req.getPassword().isBlank())
            user.setPassword(passwordEncoder.encode(req.getPassword()));
        if (req.getRoleId() != null)
            user.setRole(roleRepository.findById(req.getRoleId())
                    .orElseThrow(() -> new IllegalArgumentException("Rôle introuvable")));
        user.setCaisseId(requireCaisse(req.getCaisseId()));
        return toUserDTO(userRepository.save(user));
    }

    /** Vérifie que la caisse choisie existe (null = aucune caisse). */
    private Long requireCaisse(Long caisseId) {
        if (caisseId != null && !caisseRepository.existsById(caisseId))
            throw new IllegalArgumentException("Caisse introuvable");
        return caisseId;
    }

    @Transactional
    public void toggleUserActive(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Utilisateur introuvable"));
        tenantGuard.check(user.getCompany() != null ? user.getCompany().getId() : null);
        user.setActive(!user.isActive());
        userRepository.save(user);
        auditService.log("USER", id, user.getUsername(),
                user.isActive() ? "ACTIVATED" : "DEACTIVATED",
                user.isActive() ? "Utilisateur activé" : "Utilisateur désactivé",
                user.getCompany() != null ? user.getCompany().getId() : null);
    }

    // ── Logo ──────────────────────────────────────────────────────────────

    @Transactional
    public void uploadLogo(Long id, byte[] data, String contentType) {
        Company c = companyRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Entreprise introuvable"));
        tenantGuard.check(c.getId());
        c.setLogoData(data);
        c.setLogoContentType(contentType);
        companyRepository.save(c);
    }

    @Transactional
    public void uploadAppLogo(Long id, byte[] data, String contentType) {
        Company c = companyRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Entreprise introuvable"));
        tenantGuard.check(c.getId());
        c.setAppLogoData(data);
        c.setAppLogoContentType(contentType);
        companyRepository.save(c);
    }

    // GET .../logo et .../app-logo restent volontairement SANS tenantGuard.check : ce sont les
    // deux seules routes /api/config/companies/** consultées avant connexion (écran de login,
    // permitAll dans SecurityConfig) — il n'y a alors aucun SecurityContext authentifié, donc
    // SecurityUtils.currentCompanyId() lèverait une IllegalStateException et casserait l'écran de
    // login pour tout le monde. Seul le détail complet (GET simple /companies/{id}, RCCM/NIF/etc.)
    // exige une authentification ; le logo binaire seul n'est pas une donnée sensible.

    @Transactional(readOnly = true)
    public ResponseEntity<byte[]> getLogoResponse(Long id) {
        Company c = companyRepository.findById(id).orElse(null);
        if (c == null || c.getLogoData() == null || c.getLogoData().length == 0)
            return ResponseEntity.notFound().build();
        String ct = c.getLogoContentType() != null ? c.getLogoContentType() : MediaType.IMAGE_PNG_VALUE;
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, ct)
                .header(HttpHeaders.CACHE_CONTROL, "max-age=86400")
                .body(c.getLogoData());
    }

    @Transactional(readOnly = true)
    public ResponseEntity<byte[]> getAppLogoResponse(Long id) {
        Company c = companyRepository.findById(id).orElse(null);
        if (c == null || c.getAppLogoData() == null || c.getAppLogoData().length == 0)
            return ResponseEntity.notFound().build();
        String ct = c.getAppLogoContentType() != null ? c.getAppLogoContentType() : MediaType.IMAGE_PNG_VALUE;
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, ct)
                .header(HttpHeaders.CACHE_CONTROL, "no-cache")
                .body(c.getAppLogoData());
    }

    // ── Mappers ───────────────────────────────────────────────────────────

    private CompanyDTO toCompanyDTO(Company c) {
        return CompanyDTO.builder()
                .id(c.getId()).name(c.getName()).sigle(c.getSigle())
                .rccm(c.getRccm()).nif(c.getNif()).adresse(c.getAdresse())
                .telephone(c.getTelephone()).email(c.getEmail()).logoUrl(c.getLogoUrl())
                .logoData(c.getLogoData()).logoContentType(c.getLogoContentType())
                .appName(c.getAppName()).hasAppLogo(c.getAppLogoData() != null && c.getAppLogoData().length > 0)
                .active(c.isActive()).fiscalYearStartMonth(c.getFiscalYearStartMonth())
                .lockDate(c.getLockDate()).build();
    }

    private RoleDTO toRoleDTO(Role r) {
        List<RoleDTO.PermissionDTO> perms = permissionRepository.findByRole(r).stream()
                .map(p -> RoleDTO.PermissionDTO.builder()
                        .module(p.getModule()).resource(p.getResource()).action(p.getAction()).build())
                .collect(Collectors.toList());
        return RoleDTO.builder()
                .id(r.getId()).code(r.getCode()).label(r.getLabel())
                .isSystem(r.isSystem()).active(r.isActive())
                .permissions(perms).build();
    }

    private UserDTO toUserDTO(User u) {
        return UserDTO.builder()
                .id(u.getId()).username(u.getUsername()).email(u.getEmail())
                .fullName(u.getFullName()).active(u.isActive())
                .mustChangePassword(u.isMustChangePassword())
                .roleId(u.getRole()   != null ? u.getRole().getId()    : null)
                .roleCode(u.getRole() != null ? u.getRole().getCode()  : null)
                .roleLabel(u.getRole()!= null ? u.getRole().getLabel() : null)
                .caisseId(u.getCaisseId())
                .caisseName(u.getCaisseId() != null
                        ? caisseRepository.findById(u.getCaisseId()).map(c -> c.getName()).orElse(null)
                        : null)
                .build();
    }

    private void savePermissions(Role role, List<RoleDTO.PermissionDTO> perms) {
        Set<String> seen = new HashSet<>();
        List<RolePermission> entities = perms.stream()
                .filter(p -> p.getModule() != null && p.getResource() != null && p.getAction() != null)
                .filter(p -> seen.add(p.getModule() + "|" + p.getResource() + "|" + p.getAction()))
                .map(p -> RolePermission.builder()
                        .role(role).module(p.getModule()).resource(p.getResource()).action(p.getAction()).build())
                .collect(Collectors.toList());
        permissionRepository.saveAll(entities);
    }
}

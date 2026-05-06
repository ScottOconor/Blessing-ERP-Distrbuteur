package com.erp.config.service;

import com.erp.auth.entity.User;
import com.erp.auth.repository.UserRepository;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.config.DataSeeder;
import com.erp.config.dto.*;
import com.erp.config.entity.CompanyGroup;
import com.erp.config.entity.Role;
import com.erp.config.entity.RolePermission;
import com.erp.config.repository.CompanyGroupRepository;
import com.erp.config.repository.RolePermissionRepository;
import com.erp.config.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ConfigService {

    private static final Set<String> SYSTEM_ROLE_CODES = Set.of(
            DataSeeder.SUPER_ADMIN, DataSeeder.ADMIN,
            DataSeeder.SUPER_AUDITEUR, DataSeeder.AUDITEUR, DataSeeder.CONTROLEUR);

    private final CompanyGroupRepository groupRepository;
    private final CompanyRepository companyRepository;
    private final RoleRepository roleRepository;
    private final RolePermissionRepository permissionRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // ======================== GROUPES ========================

    public List<CompanyGroupDTO> getAllGroups() {
        return groupRepository.findAll().stream().map(this::toGroupDTO).collect(Collectors.toList());
    }

    public CompanyGroupDTO getGroup(Long id) {
        return toGroupDTO(groupRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Groupe introuvable")));
    }

    @Transactional
    public CompanyGroupDTO createGroup(CompanyGroupDTO dto) {
        if (groupRepository.existsByCode(dto.getCode()))
            throw new IllegalArgumentException("Code groupe déjà utilisé : " + dto.getCode());
        CompanyGroup g = groupRepository.save(CompanyGroup.builder()
                .name(dto.getName()).code(dto.getCode())
                .description(dto.getDescription()).active(true).build());
        return toGroupDTO(g);
    }

    @Transactional
    public CompanyGroupDTO updateGroup(Long id, CompanyGroupDTO dto) {
        CompanyGroup g = groupRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Groupe introuvable"));
        g.setName(dto.getName());
        g.setDescription(dto.getDescription());
        g.setActive(dto.isActive());
        return toGroupDTO(groupRepository.save(g));
    }

    // ======================== COMPANIES ========================

    public List<CompanyDTO> getCompaniesByGroup(Long groupId) {
        return companyRepository.findByGroupId(groupId).stream()
                .map(this::toCompanyDTO).collect(Collectors.toList());
    }

    public List<CompanyDTO> getAllCompanies() {
        return companyRepository.findAll().stream().map(this::toCompanyDTO).collect(Collectors.toList());
    }

    @Transactional
    public CompanyDTO createCompany(CompanyDTO dto) {
        CompanyGroup group = groupRepository.findById(dto.getGroupId())
                .orElseThrow(() -> new IllegalArgumentException("Groupe introuvable"));
        Company c = companyRepository.save(Company.builder()
                .name(dto.getName()).sigle(dto.getSigle()).rccm(dto.getRccm())
                .nif(dto.getNif()).adresse(dto.getAdresse()).telephone(dto.getTelephone())
                .email(dto.getEmail()).logoUrl(dto.getLogoUrl())
                .group(group).active(true).build());
        return toCompanyDTO(c);
    }

    @Transactional
    public CompanyDTO updateCompany(Long id, CompanyDTO dto) {
        Company c = companyRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Entreprise introuvable"));
        c.setName(dto.getName()); c.setSigle(dto.getSigle()); c.setRccm(dto.getRccm());
        c.setNif(dto.getNif()); c.setAdresse(dto.getAdresse()); c.setTelephone(dto.getTelephone());
        c.setEmail(dto.getEmail()); c.setLogoUrl(dto.getLogoUrl()); c.setActive(dto.isActive());
        if (dto.getGroupId() != null) {
            c.setGroup(groupRepository.findById(dto.getGroupId())
                    .orElseThrow(() -> new IllegalArgumentException("Groupe introuvable")));
        }
        return toCompanyDTO(companyRepository.save(c));
    }

    // ======================== ROLES ========================

    public List<RoleDTO> getSystemRoles() {
        return roleRepository.findByIsSystemTrue().stream().map(this::toRoleDTO).collect(Collectors.toList());
    }

    public List<RoleDTO> getRolesForGroup(Long groupId) {
        CompanyGroup group = groupRepository.findById(groupId)
                .orElseThrow(() -> new IllegalArgumentException("Groupe introuvable"));
        return roleRepository.findByGroupOrIsSystemTrue(group).stream()
                .map(this::toRoleDTO).collect(Collectors.toList());
    }

    @Transactional
    public RoleDTO createCustomRole(Long groupId, RoleDTO dto) {
        CompanyGroup group = groupRepository.findById(groupId)
                .orElseThrow(() -> new IllegalArgumentException("Groupe introuvable"));
        Role role = roleRepository.save(Role.builder()
                .label(dto.getLabel()).isSystem(false).group(group).active(true).build());
        if (dto.getPermissions() != null) {
            savePermissions(role, dto.getPermissions());
        }
        return toRoleDTO(role);
    }

    @Transactional
    public RoleDTO updateCustomRole(Long roleId, RoleDTO dto) {
        Role role = roleRepository.findById(roleId)
                .orElseThrow(() -> new IllegalArgumentException("Rôle introuvable"));
        if (role.isSystem()) throw new IllegalArgumentException("Impossible de modifier un rôle système");
        role.setLabel(dto.getLabel()); role.setActive(dto.isActive());
        roleRepository.save(role);
        if (dto.getPermissions() != null) {
            permissionRepository.deleteByRole(role);
            savePermissions(role, dto.getPermissions());
        }
        return toRoleDTO(role);
    }

    @Transactional
    public void deleteCustomRole(Long roleId) {
        Role role = roleRepository.findById(roleId)
                .orElseThrow(() -> new IllegalArgumentException("Rôle introuvable"));
        if (role.isSystem()) throw new IllegalArgumentException("Impossible de supprimer un rôle système");
        permissionRepository.deleteByRole(role);
        roleRepository.delete(role);
    }

    private void savePermissions(Role role, List<RoleDTO.PermissionDTO> perms) {
        List<RolePermission> entities = perms.stream().map(p -> RolePermission.builder()
                .role(role).module(p.getModule()).action(p.getAction()).build())
                .collect(Collectors.toList());
        permissionRepository.saveAll(entities);
    }

    // ======================== UTILISATEURS ========================

    public List<UserDTO> getUsersByGroup(Long groupId) {
        return userRepository.findAllByGroupId(groupId).stream()
                .map(this::toUserDTO).collect(Collectors.toList());
    }

    public List<UserDTO> getUsersByCompany(Long companyId) {
        return userRepository.findAllByCompanyId(companyId).stream()
                .map(this::toUserDTO).collect(Collectors.toList());
    }

    @Transactional
    public UserDTO createUser(CreateUserRequest req) {
        if (userRepository.existsByUsername(req.getUsername()))
            throw new IllegalArgumentException("Nom d'utilisateur déjà utilisé");
        if (req.getEmail() != null && userRepository.existsByEmail(req.getEmail()))
            throw new IllegalArgumentException("Email déjà utilisé");

        Role role = roleRepository.findById(req.getRoleId())
                .orElseThrow(() -> new IllegalArgumentException("Rôle introuvable"));

        User.UserBuilder ub = User.builder()
                .username(req.getUsername()).email(req.getEmail())
                .fullName(req.getFullName())
                .password(passwordEncoder.encode(req.getPassword()))
                .role(role).active(true).mustChangePassword(true);

        if (SYSTEM_ROLE_CODES.contains(role.getCode())) {
            CompanyGroup group = groupRepository.findById(req.getGroupId())
                    .orElseThrow(() -> new IllegalArgumentException("Groupe introuvable"));
            ub.group(group);
        } else {
            Company company = companyRepository.findById(req.getCompanyId())
                    .orElseThrow(() -> new IllegalArgumentException("Entreprise introuvable"));
            ub.company(company);
        }

        return toUserDTO(userRepository.save(ub.build()));
    }

    @Transactional
    public UserDTO updateUser(Long id, CreateUserRequest req) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Utilisateur introuvable"));
        if (req.getFullName() != null) user.setFullName(req.getFullName());
        if (req.getEmail() != null) user.setEmail(req.getEmail());
        if (req.getPassword() != null && !req.getPassword().isBlank())
            user.setPassword(passwordEncoder.encode(req.getPassword()));
        if (req.getRoleId() != null) {
            Role role = roleRepository.findById(req.getRoleId())
                    .orElseThrow(() -> new IllegalArgumentException("Rôle introuvable"));
            user.setRole(role);
        }
        return toUserDTO(userRepository.save(user));
    }

    @Transactional
    public void toggleUserActive(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Utilisateur introuvable"));
        user.setActive(!user.isActive());
        userRepository.save(user);
    }

    // ======================== MAPPERS ========================

    private CompanyGroupDTO toGroupDTO(CompanyGroup g) {
        List<CompanyDTO> companies = companyRepository.findByGroupId(g.getId()).stream()
                .map(this::toCompanyDTO).collect(Collectors.toList());
        return CompanyGroupDTO.builder()
                .id(g.getId()).name(g.getName()).code(g.getCode())
                .description(g.getDescription()).active(g.isActive())
                .companies(companies).build();
    }

    private CompanyDTO toCompanyDTO(Company c) {
        return CompanyDTO.builder()
                .id(c.getId()).name(c.getName()).sigle(c.getSigle())
                .rccm(c.getRccm()).nif(c.getNif()).adresse(c.getAdresse())
                .telephone(c.getTelephone()).email(c.getEmail()).logoUrl(c.getLogoUrl())
                .groupId(c.getGroup() != null ? c.getGroup().getId() : null)
                .groupName(c.getGroup() != null ? c.getGroup().getName() : null)
                .active(c.isActive()).build();
    }

    private RoleDTO toRoleDTO(Role r) {
        List<RoleDTO.PermissionDTO> perms = permissionRepository.findByRole(r).stream()
                .map(p -> RoleDTO.PermissionDTO.builder()
                        .module(p.getModule()).action(p.getAction()).build())
                .collect(Collectors.toList());
        return RoleDTO.builder()
                .id(r.getId()).code(r.getCode()).label(r.getLabel())
                .isSystem(r.isSystem()).active(r.isActive())
                .groupId(r.getGroup() != null ? r.getGroup().getId() : null)
                .permissions(perms).build();
    }

    private UserDTO toUserDTO(User u) {
        return UserDTO.builder()
                .id(u.getId()).username(u.getUsername()).email(u.getEmail())
                .fullName(u.getFullName()).active(u.isActive())
                .mustChangePassword(u.isMustChangePassword())
                .roleId(u.getRole() != null ? u.getRole().getId() : null)
                .roleCode(u.getRole() != null ? u.getRole().getCode() : null)
                .roleLabel(u.getRole() != null ? u.getRole().getLabel() : null)
                .groupId(u.getGroup() != null ? u.getGroup().getId() : null)
                .groupName(u.getGroup() != null ? u.getGroup().getName() : null)
                .companyId(u.getCompany() != null ? u.getCompany().getId() : null)
                .companyName(u.getCompany() != null ? u.getCompany().getName() : null)
                .build();
    }
}

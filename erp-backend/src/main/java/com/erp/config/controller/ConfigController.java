package com.erp.config.controller;

import com.erp.config.dto.*;
import com.erp.config.service.ConfigService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/config")
@RequiredArgsConstructor
public class ConfigController {

    private final ConfigService configService;

    // ======= GROUPES =======

    @GetMapping("/groups")
    public ResponseEntity<List<CompanyGroupDTO>> getGroups() {
        return ResponseEntity.ok(configService.getAllGroups());
    }

    @GetMapping("/groups/{id}")
    public ResponseEntity<CompanyGroupDTO> getGroup(@PathVariable Long id) {
        return ResponseEntity.ok(configService.getGroup(id));
    }

    @PostMapping("/groups")
    public ResponseEntity<CompanyGroupDTO> createGroup(@RequestBody CompanyGroupDTO dto) {
        return ResponseEntity.ok(configService.createGroup(dto));
    }

    @PutMapping("/groups/{id}")
    public ResponseEntity<CompanyGroupDTO> updateGroup(@PathVariable Long id, @RequestBody CompanyGroupDTO dto) {
        return ResponseEntity.ok(configService.updateGroup(id, dto));
    }

    // ======= COMPANIES =======

    @GetMapping("/companies")
    public ResponseEntity<List<CompanyDTO>> getAllCompanies() {
        return ResponseEntity.ok(configService.getAllCompanies());
    }

    @GetMapping("/groups/{groupId}/companies")
    public ResponseEntity<List<CompanyDTO>> getCompaniesByGroup(@PathVariable Long groupId) {
        return ResponseEntity.ok(configService.getCompaniesByGroup(groupId));
    }

    @PostMapping("/companies")
    public ResponseEntity<CompanyDTO> createCompany(@RequestBody CompanyDTO dto) {
        return ResponseEntity.ok(configService.createCompany(dto));
    }

    @PutMapping("/companies/{id}")
    public ResponseEntity<CompanyDTO> updateCompany(@PathVariable Long id, @RequestBody CompanyDTO dto) {
        return ResponseEntity.ok(configService.updateCompany(id, dto));
    }

    // ======= ROLES =======

    @GetMapping("/roles/system")
    public ResponseEntity<List<RoleDTO>> getSystemRoles() {
        return ResponseEntity.ok(configService.getSystemRoles());
    }

    @GetMapping("/groups/{groupId}/roles")
    public ResponseEntity<List<RoleDTO>> getRolesForGroup(@PathVariable Long groupId) {
        return ResponseEntity.ok(configService.getRolesForGroup(groupId));
    }

    @PostMapping("/groups/{groupId}/roles")
    public ResponseEntity<RoleDTO> createCustomRole(@PathVariable Long groupId, @RequestBody RoleDTO dto) {
        return ResponseEntity.ok(configService.createCustomRole(groupId, dto));
    }

    @PutMapping("/roles/{roleId}")
    public ResponseEntity<RoleDTO> updateCustomRole(@PathVariable Long roleId, @RequestBody RoleDTO dto) {
        return ResponseEntity.ok(configService.updateCustomRole(roleId, dto));
    }

    @DeleteMapping("/roles/{roleId}")
    public ResponseEntity<Void> deleteCustomRole(@PathVariable Long roleId) {
        configService.deleteCustomRole(roleId);
        return ResponseEntity.noContent().build();
    }

    // ======= UTILISATEURS =======

    @GetMapping("/groups/{groupId}/users")
    public ResponseEntity<List<UserDTO>> getUsersByGroup(@PathVariable Long groupId) {
        return ResponseEntity.ok(configService.getUsersByGroup(groupId));
    }

    @GetMapping("/companies/{companyId}/users")
    public ResponseEntity<List<UserDTO>> getUsersByCompany(@PathVariable Long companyId) {
        return ResponseEntity.ok(configService.getUsersByCompany(companyId));
    }

    @PostMapping("/users")
    public ResponseEntity<UserDTO> createUser(@RequestBody CreateUserRequest req) {
        return ResponseEntity.ok(configService.createUser(req));
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody CreateUserRequest req) {
        return ResponseEntity.ok(configService.updateUser(id, req));
    }

    @PostMapping("/users/{id}/toggle-active")
    public ResponseEntity<Void> toggleUserActive(@PathVariable Long id) {
        configService.toggleUserActive(id);
        return ResponseEntity.ok().build();
    }
}

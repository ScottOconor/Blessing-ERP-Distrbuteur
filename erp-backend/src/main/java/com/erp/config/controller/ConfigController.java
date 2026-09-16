package com.erp.config.controller;

import com.erp.config.dto.*;
import com.erp.config.service.ConfigService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/config")
@RequiredArgsConstructor
public class ConfigController {

    private final ConfigService configService;

    // ======= ENTREPRISES =======

    @GetMapping("/companies")
    public ResponseEntity<List<CompanyDTO>> getAllCompanies() {
        return ResponseEntity.ok(configService.getAllCompanies());
    }

    @GetMapping("/companies/{id}")
    public ResponseEntity<CompanyDTO> getCompany(@PathVariable Long id) {
        return ResponseEntity.ok(configService.getCompany(id));
    }

    @PostMapping("/companies")
    public ResponseEntity<CompanyDTO> createCompany(@RequestBody CompanyDTO dto) {
        return ResponseEntity.ok(configService.createCompany(dto));
    }

    @PutMapping("/companies/{id}")
    public ResponseEntity<CompanyDTO> updateCompany(@PathVariable Long id, @RequestBody CompanyDTO dto) {
        return ResponseEntity.ok(configService.updateCompany(id, dto));
    }

    @PostMapping("/companies/{id}/logo")
    public ResponseEntity<Void> uploadLogo(@PathVariable Long id,
                                           @RequestParam("file") MultipartFile file) throws IOException {
        configService.uploadLogo(id, file.getBytes(), file.getContentType());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/companies/{id}/logo")
    public ResponseEntity<byte[]> getLogo(@PathVariable Long id) {
        return configService.getLogoResponse(id);
    }

    @PostMapping("/companies/{id}/app-logo")
    public ResponseEntity<Void> uploadAppLogo(@PathVariable Long id,
                                              @RequestParam("file") MultipartFile file) throws IOException {
        configService.uploadAppLogo(id, file.getBytes(), file.getContentType());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/companies/{id}/app-logo")
    public ResponseEntity<byte[]> getAppLogo(@PathVariable Long id) {
        return configService.getAppLogoResponse(id);
    }

    // ======= ROLES =======

    @GetMapping("/roles")
    public ResponseEntity<List<RoleDTO>> getAllRoles() {
        return ResponseEntity.ok(configService.getAllRoles());
    }

    @GetMapping("/roles/system")
    public ResponseEntity<List<RoleDTO>> getSystemRoles() {
        return ResponseEntity.ok(configService.getSystemRoles());
    }

    @PostMapping("/roles")
    public ResponseEntity<RoleDTO> createRole(@RequestBody RoleDTO dto) {
        return ResponseEntity.ok(configService.createRole(dto));
    }

    @PutMapping("/roles/{roleId}")
    public ResponseEntity<RoleDTO> updateRole(@PathVariable Long roleId, @RequestBody RoleDTO dto) {
        return ResponseEntity.ok(configService.updateRole(roleId, dto));
    }

    @DeleteMapping("/roles/{roleId}")
    public ResponseEntity<Void> deleteRole(@PathVariable Long roleId) {
        configService.deleteRole(roleId);
        return ResponseEntity.noContent().build();
    }

    // ======= UTILISATEURS =======

    @GetMapping("/users")
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        return ResponseEntity.ok(configService.getAllUsers());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserDTO> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(configService.getUser(id));
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

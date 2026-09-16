package com.erp.config.controller;

import com.erp.config.service.BackupService;
import com.erp.config.service.ConfigExportService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Map;

@RestController
@RequestMapping("/api/backup")
@RequiredArgsConstructor
@Slf4j
public class BackupController {

    private final BackupService       backupService;
    private final ConfigExportService configExportService;

    /**
     * Télécharge une sauvegarde ZIP de la base de données.
     * Réservé aux administrateurs.
     */
    @GetMapping("/download")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<byte[]> downloadBackup() {
        try {
            byte[] zip = backupService.createBackupZip();
            String filename = "blessing-backup-" +
                    LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss")) + ".zip";
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .contentLength(zip.length)
                    .body(zip);
        } catch (Exception e) {
            log.error("Erreur lors de la création de la sauvegarde", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * Restaure la base de données depuis un fichier ZIP de sauvegarde.
     * Réservé aux administrateurs.
     */
    @PostMapping("/restore")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<Map<String, String>> restoreBackup(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Aucun fichier fourni"));
        }
        if (!file.getOriginalFilename().toLowerCase().endsWith(".zip")) {
            return ResponseEntity.badRequest().body(Map.of("error", "Le fichier doit être un ZIP"));
        }
        try {
            String message = backupService.restoreFromZip(file.getBytes());
            return ResponseEntity.ok(Map.of("message", message));
        } catch (IllegalArgumentException e) {
            log.warn("Fichier de restauration invalide : {}", e.getMessage());
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        } catch (Exception e) {
            log.error("Erreur lors de la restauration", e);
            return ResponseEntity.internalServerError()
                    .body(Map.of("error", "Erreur de restauration : " + e.getMessage()));
        }
    }

    // ----------------------------------------------------------------
    // CONFIG BACKUP (clients, tarifs, ristournes, enlèvements, produits…)
    // ----------------------------------------------------------------

    @GetMapping("/config/download")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<byte[]> downloadConfigBackup(@RequestParam("companyId") Long companyId) {
        try {
            byte[] zip = configExportService.exportConfigZip(companyId);
            String filename = "blessing-config-" +
                    LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss")) + ".zip";
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .contentLength(zip.length)
                    .body(zip);
        } catch (Exception e) {
            log.error("Erreur lors de l'export de configuration", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("/config/restore")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<Map<String, String>> restoreConfigBackup(
            @RequestParam("file") MultipartFile file,
            @RequestParam("companyId") Long companyId) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Aucun fichier fourni"));
        }
        if (!file.getOriginalFilename().toLowerCase().endsWith(".zip")) {
            return ResponseEntity.badRequest().body(Map.of("error", "Le fichier doit être un ZIP"));
        }
        try {
            ConfigExportService.ImportResult result =
                    configExportService.importConfigZip(file.getBytes(), companyId);
            return ResponseEntity.ok(Map.of("message",
                    "Configuration restaurée avec succès. " + result.summary()));
        } catch (IllegalArgumentException e) {
            log.warn("Fichier de config invalide : {}", e.getMessage());
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        } catch (Exception e) {
            log.error("Erreur lors de la restauration de configuration", e);
            return ResponseEntity.internalServerError()
                    .body(Map.of("error", "Erreur : " + e.getMessage()));
        }
    }
}

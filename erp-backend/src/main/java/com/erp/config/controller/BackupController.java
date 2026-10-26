package com.erp.config.controller;

import com.erp.audit.service.AuditService;
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
    private final AuditService        auditService;

    /** Les sauvegardes contiennent toute la base (empreintes de mots de passe comprises) : chaque
     *  téléchargement et chaque restauration, réussie ou non, est tracé dans le journal d'audit. */
    private void audit(String action, String label, String details) {
        // entityId 0 : opération sur toute la base, sans enregistrement métier associé
        auditService.log("SAUVEGARDE", 0L, label, action, label, details, null);
    }

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
            audit("DOWNLOAD", "Téléchargement de la sauvegarde complète", filename);
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
     * Réservé au SUPER_ADMIN : la restauration remplace toute la base (utilisateurs compris).
     */
    @PostMapping("/restore")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public ResponseEntity<Map<String, String>> restoreBackup(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Aucun fichier fourni"));
        }
        if (!file.getOriginalFilename().toLowerCase().endsWith(".zip")) {
            return ResponseEntity.badRequest().body(Map.of("error", "Le fichier doit être un ZIP"));
        }
        try {
            String message = backupService.restoreFromZip(file.getInputStream());
            audit("RESTORE", "Restauration complète de la base", file.getOriginalFilename());
            return ResponseEntity.ok(Map.of("message", message));
        } catch (IllegalArgumentException e) {
            log.warn("Fichier de restauration invalide : {}", e.getMessage());
            audit("RESTORE_REFUSED", "Restauration refusée", file.getOriginalFilename() + " : " + e.getMessage());
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        } catch (IllegalStateException e) {
            audit("RESTORE_FAILED", "Restauration échouée (annulée)", file.getOriginalFilename() + " : " + e.getMessage());
            return ResponseEntity.unprocessableEntity().body(Map.of("error", e.getMessage()));
        } catch (Exception e) {
            audit("RESTORE_FAILED", "Restauration échouée", file.getOriginalFilename() + " : " + e.getMessage());
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
            audit("CONFIG_DOWNLOAD", "Téléchargement de la sauvegarde du paramétrage", null);
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
            audit("CONFIG_RESTORE", "Restauration du paramétrage", file.getOriginalFilename());
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

package com.erp.config.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.zip.*;

@Service
@Slf4j
public class BackupService {

    @Value("${spring.datasource.url}")
    private String datasourceUrl;

    @Value("${spring.datasource.username}")
    private String dbUsername;

    @Value("${spring.datasource.password}")
    private String dbPassword;

    @Value("${sync.spoke.name:Blessing ERP Distributeurs}")
    private String spokeName;

    @Value("${sync.spoke.id:SPOKE}")
    private String spokeId;

    private static final String APP_NAME = "Blessing ERP Distributeurs";

    // ──────────────────────────────────────────────────
    // BACKUP
    // ──────────────────────────────────────────────────

    public byte[] createBackupZip() throws Exception {
        DbConn conn = parseJdbcUrl(datasourceUrl);

        log.info("Démarrage de la sauvegarde pg_dump pour la base {}", conn.dbName);
        byte[] sqlDump = runPgDump(conn);
        log.info("pg_dump terminé — {} octets", sqlDump.length);

        String manifest = buildManifest(conn.dbName);
        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss"));
        String zipEntryBase = "blessing-backup-" + timestamp;

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        try (ZipOutputStream zos = new ZipOutputStream(baos)) {
            // manifest.json
            ZipEntry manifestEntry = new ZipEntry(zipEntryBase + "/manifest.json");
            zos.putNextEntry(manifestEntry);
            zos.write(manifest.getBytes(StandardCharsets.UTF_8));
            zos.closeEntry();

            // database.sql
            ZipEntry sqlEntry = new ZipEntry(zipEntryBase + "/database.sql");
            zos.putNextEntry(sqlEntry);
            zos.write(sqlDump);
            zos.closeEntry();
        }
        return baos.toByteArray();
    }

    private byte[] runPgDump(DbConn conn) throws Exception {
        ProcessBuilder pb = new ProcessBuilder(
            "pg_dump",
            "-h", conn.host,
            "-p", String.valueOf(conn.port),
            "-U", dbUsername,
            "--clean",
            "--if-exists",
            "--no-owner",
            "--no-privileges",
            "--no-comments",
            "-F", "p",        // plain SQL
            conn.dbName
        );
        pb.environment().put("PGPASSWORD", dbPassword);
        pb.redirectErrorStream(false);

        Process process = pb.start();

        // Lire stdout (le dump SQL)
        byte[] output = process.getInputStream().readAllBytes();

        // Lire stderr pour log
        String stderr = new String(process.getErrorStream().readAllBytes(), StandardCharsets.UTF_8);
        int exitCode = process.waitFor();

        if (exitCode != 0) {
            log.error("pg_dump échoué (code {}): {}", exitCode, stderr);
            throw new IllegalStateException("Échec de pg_dump (code " + exitCode + "): " + stderr.trim());
        }
        if (!stderr.isBlank()) {
            log.warn("pg_dump warnings: {}", stderr.trim());
        }
        if (output.length == 0) {
            throw new IllegalStateException("pg_dump n'a produit aucune sortie — vérifiez que pg_dump est installé");
        }
        return output;
    }

    private String buildManifest(String dbName) {
        String ts = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
        return "{\n" +
               "  \"appName\": \"" + APP_NAME + "\",\n" +
               "  \"spokeName\": \"" + escapeJson(spokeName) + "\",\n" +
               "  \"spokeId\": \"" + escapeJson(spokeId) + "\",\n" +
               "  \"dbName\": \"" + escapeJson(dbName) + "\",\n" +
               "  \"backupDate\": \"" + ts + "\",\n" +
               "  \"version\": \"1.0\"\n" +
               "}\n";
    }

    // ──────────────────────────────────────────────────
    // RESTORE
    // ──────────────────────────────────────────────────

    public String restoreFromZip(byte[] zipBytes) throws Exception {
        byte[] sqlDump = null;
        String manifestJson = null;
        String sqlFilename = null;

        try (ZipInputStream zis = new ZipInputStream(new ByteArrayInputStream(zipBytes))) {
            ZipEntry entry;
            while ((entry = zis.getNextEntry()) != null) {
                String name = entry.getName();
                if (name.endsWith("/manifest.json")) {
                    manifestJson = new String(zis.readAllBytes(), StandardCharsets.UTF_8);
                } else if (name.endsWith("/database.sql")) {
                    sqlDump = zis.readAllBytes();
                    sqlFilename = name;
                }
                zis.closeEntry();
            }
        }

        if (sqlDump == null) {
            throw new IllegalArgumentException("ZIP invalide : fichier database.sql introuvable");
        }
        if (manifestJson == null) {
            throw new IllegalArgumentException("ZIP invalide : manifest.json introuvable");
        }

        // Validation basique du manifest (accepte aussi les anciennes sauvegardes K.I.R.A)
        if (!manifestJson.contains("\"" + APP_NAME + "\"") && !manifestJson.contains("\"K.I.R.A Distributeurs\"")) {
            throw new IllegalArgumentException("Ce fichier ZIP n'est pas une sauvegarde " + APP_NAME + " valide");
        }

        DbConn conn = parseJdbcUrl(datasourceUrl);
        log.info("Démarrage de la restauration depuis {} vers la base {}", sqlFilename, conn.dbName);

        // Écrire le SQL dans un fichier temporaire (psql le lit via stdin)
        File tmpSql = File.createTempFile("blessing-restore-", ".sql");
        try {
            try (FileOutputStream fos = new FileOutputStream(tmpSql)) {
                fos.write(sqlDump);
            }
            runPsqlRestore(conn, tmpSql);
        } finally {
            tmpSql.delete();
        }

        log.info("Restauration terminée pour la base {}", conn.dbName);
        return "Restauration réussie — rechargez la page pour continuer";
    }

    private void runPsqlRestore(DbConn conn, File sqlFile) throws Exception {
        ProcessBuilder pb = new ProcessBuilder(
            "psql",
            "-h", conn.host,
            "-p", String.valueOf(conn.port),
            "-U", dbUsername,
            "-d", conn.dbName,
            "-f", sqlFile.getAbsolutePath(),
            "--single-transaction",
            "-v", "ON_ERROR_STOP=0"   // continuer même si une table n'existe pas encore
        );
        pb.environment().put("PGPASSWORD", dbPassword);
        pb.redirectErrorStream(false);

        Process process = pb.start();
        process.getInputStream().transferTo(OutputStream.nullOutputStream());
        String stderr = new String(process.getErrorStream().readAllBytes(), StandardCharsets.UTF_8);
        int exitCode = process.waitFor();

        if (exitCode != 0) {
            log.error("psql restauration échouée (code {}): {}", exitCode, stderr);
            throw new IllegalStateException("Échec de la restauration (code " + exitCode + "): " + stderr.trim());
        }
        if (!stderr.isBlank()) {
            log.info("psql output: {}", stderr.trim());
        }
    }

    // ──────────────────────────────────────────────────
    // UTILITAIRES
    // ──────────────────────────────────────────────────

    private static class DbConn {
        String host;
        int port;
        String dbName;
    }

    private DbConn parseJdbcUrl(String url) {
        // Format : jdbc:postgresql://host:port/dbname[?params]
        DbConn c = new DbConn();
        try {
            String stripped = url.replaceFirst("^jdbc:postgresql://", "");
            String[] hostAndRest = stripped.split("/", 2);
            String[] hostPort = hostAndRest[0].split(":");
            c.host = hostPort[0];
            c.port = hostPort.length > 1 ? Integer.parseInt(hostPort[1]) : 5432;
            String dbPart = hostAndRest.length > 1 ? hostAndRest[1] : "";
            c.dbName = dbPart.split("\\?")[0].trim();
        } catch (Exception e) {
            log.warn("Impossible de parser l'URL JDBC '{}', utilisation des valeurs par défaut", url);
            c.host = "localhost";
            c.port = 5432;
            c.dbName = "erp_base";
        }
        return c;
    }

    private static String escapeJson(String s) {
        if (s == null) return "";
        return s.replace("\\", "\\\\").replace("\"", "\\\"");
    }
}

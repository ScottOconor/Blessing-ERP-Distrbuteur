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

    /** Plafond du SQL décompressé : protège le disque d'un ZIP piégé (quelques Mo qui en donnent des Go). */
    @Value("${backup.restore.max-sql-bytes:4294967296}")
    private long maxSqlBytes;

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

    /**
     * Le ZIP est lu en flux : le SQL est copié dans un fichier temporaire (jamais entièrement en
     * mémoire), contrôlé par SqlDumpValidator, puis exécuté par psql dans une transaction unique.
     * Toute erreur annule la restauration entière et est remontée telle quelle : la base reste
     * dans son état d'avant, et l'utilisateur ne voit plus « Restauration réussie » à tort.
     */
    public String restoreFromZip(InputStream zipStream) throws Exception {
        String manifestJson = null;
        String sqlFilename = null;
        File tmpSql = File.createTempFile("blessing-restore-", ".sql");
        try {
            try (ZipInputStream zis = new ZipInputStream(zipStream)) {
                ZipEntry entry;
                while ((entry = zis.getNextEntry()) != null) {
                    String name = entry.getName();
                    if (name.endsWith("/manifest.json")) {
                        manifestJson = new String(zis.readNBytes(64 * 1024), StandardCharsets.UTF_8);
                    } else if (name.endsWith("/database.sql")) {
                        copyWithLimit(zis, tmpSql);
                        sqlFilename = name;
                    }
                    zis.closeEntry();
                }
            }

            if (sqlFilename == null) {
                throw new IllegalArgumentException("ZIP invalide : fichier database.sql introuvable");
            }
            if (manifestJson == null) {
                throw new IllegalArgumentException("ZIP invalide : manifest.json introuvable");
            }
            // Accepte aussi les anciennes sauvegardes K.I.R.A Distributeurs
            if (!manifestJson.contains("\"" + APP_NAME + "\"") && !manifestJson.contains("\"K.I.R.A Distributeurs\"")) {
                throw new IllegalArgumentException("Ce fichier ZIP n'est pas une sauvegarde " + APP_NAME + " valide");
            }
            try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(new FileInputStream(tmpSql), StandardCharsets.UTF_8))) {
                SqlDumpValidator.validate(reader);
            }

            DbConn conn = parseJdbcUrl(datasourceUrl);
            log.info("Démarrage de la restauration depuis {} vers la base {}", sqlFilename, conn.dbName);
            runPsqlRestore(conn, tmpSql);
            log.info("Restauration terminée pour la base {}", conn.dbName);
        } finally {
            tmpSql.delete();
        }

        return "Restauration réussie — rechargez la page pour continuer";
    }

    private void copyWithLimit(InputStream in, File target) throws IOException {
        try (OutputStream out = new BufferedOutputStream(new FileOutputStream(target))) {
            byte[] buf = new byte[64 * 1024];
            long total = 0;
            int n;
            while ((n = in.read(buf)) > 0) {
                total += n;
                if (total > maxSqlBytes) {
                    throw new IllegalArgumentException("Sauvegarde trop volumineuse une fois décompressée (> "
                            + (maxSqlBytes / (1024 * 1024)) + " Mo)");
                }
                out.write(buf, 0, n);
            }
        }
    }

    private void runPsqlRestore(DbConn conn, File sqlFile) throws Exception {
        ProcessBuilder pb = new ProcessBuilder(
            "psql",
            "-X",                       // ignore tout ~/.psqlrc du compte serveur
            "-h", conn.host,
            "-p", String.valueOf(conn.port),
            "-U", dbUsername,
            "-d", conn.dbName,
            "-f", sqlFile.getAbsolutePath(),
            "--single-transaction",
            // Arrêt à la première erreur : avec --single-transaction, psql annule alors tout et
            // sort en erreur. Avec ON_ERROR_STOP=0, la transaction était annulée en silence
            // (toutes les instructions suivantes échouaient) mais psql sortait avec le code 0.
            "-v", "ON_ERROR_STOP=1"
        );
        pb.environment().put("PGPASSWORD", dbPassword);
        // La sortie standard (une ligne par instruction) est inutile : la jeter évite aussi tout
        // blocage de psql sur un tampon plein pendant qu'on lit stderr.
        pb.redirectOutput(ProcessBuilder.Redirect.DISCARD);

        Process process = pb.start();
        String stderr = new String(process.getErrorStream().readAllBytes(), StandardCharsets.UTF_8);
        int exitCode = process.waitFor();

        if (exitCode != 0) {
            log.error("psql restauration échouée (code {}): {}", exitCode, stderr);
            String firstError = stderr.lines().filter(l -> l.contains("ERROR") || l.contains("ERREUR"))
                    .findFirst().orElse(stderr.trim());
            throw new IllegalStateException("Restauration annulée, la base n'a pas été modifiée : " + firstError);
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

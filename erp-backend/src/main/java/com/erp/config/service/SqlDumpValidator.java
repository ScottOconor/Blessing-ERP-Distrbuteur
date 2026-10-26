package com.erp.config.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.List;
import java.util.regex.Pattern;

/**
 * Vérifie, avant de le passer à psql, qu'un fichier de restauration ne contient QUE ce que
 * pg_dump produit pour la base de l'ERP (tables, séquences, index, données COPY ... FROM stdin,
 * objets volumineux). La restauration exécute ce fichier avec les droits de l'utilisateur de la
 * base : sans ce contrôle, un ZIP fabriqué à la main pouvait lancer des commandes système
 * (méta-commande psql \!, COPY ... TO PROGRAM) ou lire des fichiers du serveur.
 *
 * Liste blanche volontairement stricte : une instruction inconnue fait refuser la restauration
 * (message indiquant la ligne), plutôt que d'être exécutée.
 */
public final class SqlDumpValidator {

    private SqlDumpValidator() {}

    /** Débuts d'instructions émises par pg_dump pour le schéma de l'ERP. */
    private static final List<Pattern> ALLOWED_STATEMENTS = List.of(
            Pattern.compile("^SET\\s"),
            Pattern.compile("^SELECT pg_catalog\\.(set_config|setval|lo_create|lo_open|lowrite|lo_close)\\("),
            // --clean sur une base contenant des objets volumineux (pièces jointes)
            Pattern.compile("^SELECT pg_catalog\\.lo_unlink\\(oid\\) FROM pg_catalog\\.pg_largeobject_metadata WHERE oid = '';$"),
            Pattern.compile("^CREATE (TABLE|SEQUENCE|INDEX|UNIQUE INDEX|VIEW)\\s"),
            Pattern.compile("^ALTER (TABLE|SEQUENCE|INDEX)\\s"),
            Pattern.compile("^DROP (TABLE|SEQUENCE|INDEX|VIEW)\\s"),
            Pattern.compile("^(BEGIN|COMMIT);$")
    );

    private static final Pattern COPY_FROM_STDIN =
            Pattern.compile("^COPY [\\w.\"]+ \\([^;]*\\) FROM stdin;$");

    /** Méta-commandes psql émises par pg_dump (versions récentes) — aucune autre n'est admise. */
    private static final Pattern META_COMMAND = Pattern.compile("^\\\\(restrict|unrestrict) [A-Za-z0-9]+$");

    /** Fonctions ou mots-clés donnant accès au système de fichiers / aux processus du serveur. */
    private static final Pattern FORBIDDEN = Pattern.compile(
            "(?i)\\b(PROGRAM|ALTER\\s+SYSTEM|lo_import|lo_export|pg_read_file|pg_read_binary_file"
            + "|pg_ls_dir|pg_stat_file|dblink\\w*|pg_execute_server_program)\\b");

    private static final Pattern STRING_LITERAL = Pattern.compile("'(?:[^']|'')*'");
    private static final Pattern DOLLAR_QUOTE = Pattern.compile("\\$[A-Za-z_]*\\$");

    /** Lève IllegalArgumentException (→ 400) à la première instruction non autorisée. */
    public static void validate(BufferedReader reader) throws IOException {
        String line;
        long lineNo = 0;
        boolean inCopyData = false;
        StringBuilder statement = new StringBuilder();
        long statementStart = 0;

        while ((line = reader.readLine()) != null) {
            lineNo++;
            if (inCopyData) {
                if (line.equals("\\.")) inCopyData = false;
                continue;
            }
            if (statement.length() == 0) {
                if (line.isBlank() || line.startsWith("--")) continue;
                if (line.startsWith("\\")) {
                    if (!META_COMMAND.matcher(line).matches()) reject(lineNo, line);
                    continue;
                }
                if (line.startsWith("COPY ")) {
                    if (!COPY_FROM_STDIN.matcher(line).matches()) reject(lineNo, line);
                    inCopyData = true;
                    continue;
                }
                statementStart = lineNo;
            }
            statement.append(line).append('\n');
            if (line.endsWith(";")) {
                checkStatement(statement.toString(), statementStart);
                statement.setLength(0);
            }
        }
        if (inCopyData) {
            throw new IllegalArgumentException("Sauvegarde tronquée : bloc de données COPY non terminé");
        }
        if (statement.length() > 0) checkStatement(statement.toString(), statementStart);
    }

    private static void checkStatement(String statement, long lineNo) {
        String trimmed = statement.strip();
        // Les littéraux (valeurs par défaut, données d'objets volumineux) ne sont pas du code :
        // on les retire avant de chercher un point-virgule intermédiaire ou un mot interdit.
        String code = STRING_LITERAL.matcher(trimmed).replaceAll("''");
        boolean allowed = ALLOWED_STATEMENTS.stream().anyMatch(p -> p.matcher(code).find());
        boolean chained = code.indexOf(';') != code.length() - 1;
        if (!allowed || chained || FORBIDDEN.matcher(code).find() || DOLLAR_QUOTE.matcher(code).find()) {
            reject(lineNo, trimmed);
        }
    }

    private static void reject(long lineNo, String content) {
        String excerpt = content.length() > 120 ? content.substring(0, 120) + "…" : content;
        throw new IllegalArgumentException("Sauvegarde refusée : instruction non autorisée ligne "
                + lineNo + " (" + excerpt.replace('\n', ' ') + ")");
    }
}

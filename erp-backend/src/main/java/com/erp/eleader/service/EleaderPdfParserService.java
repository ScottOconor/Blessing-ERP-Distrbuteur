package com.erp.eleader.service;

import lombok.extern.slf4j.Slf4j;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.io.RandomAccessReadBuffer;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Parser de factures PDF eLeader.
 *
 * Format Brasseries (ex: DV-C3CC1011/04418/26) :
 *   Facture:DV-XXXXX/NNNNN/YY       ← colon obligatoire
 *   Datefacture: 2026-02-17 ...      ← "Datefacture" sans espace
 *   Client:NOM DU CLIENT             ← colon obligatoire
 *   Codeclient:CODE                  ← "Codeclient" sans espace
 *
 *   Produits :
 *   Code  Qte   PU      PT           ← header à ignorer
 *   CHC50C 2  C12  6 394  12 787    ← CODE QTY COND PU_parts PT_parts
 *                                       → qty = parts[1]
 *
 *   Consignation d'Emballages :
 *   Code  Qte   PT
 *   Consignation                     ← sous-section +
 *   VRACC12 21 C12  75 600          ← CODE QTY COND PT_parts → qty = parts[1]
 *   Déconsignation                   ← sous-section −
 *   VCBV65 21 C12  -75 600          ← idem, quantité négativée
 */
@Service
@Slf4j
public class EleaderPdfParserService {

    // ── Résultats ─────────────────────────────────────────────────────────────

    public static class ParsedEleaderInvoice {
        public String invoiceNumber;
        public LocalDate invoiceDate;
        public String clientName;
        public String clientCode;
        public String invoiceModel;
        public List<ParsedLine> productLines       = new ArrayList<>();
        public List<ParsedLine> consignmentLines   = new ArrayList<>();
        public List<ParsedLine> deconsignmentLines = new ArrayList<>();
    }

    public static class ParsedLine {
        public String productCode;
        public BigDecimal quantity;
        public ParsedLine(String code, BigDecimal qty) {
            this.productCode = code;
            this.quantity = qty;
        }
    }

    // ── Extraction texte ──────────────────────────────────────────────────────

    public String extractText(MultipartFile file) throws IOException {
        try (PDDocument doc = Loader.loadPDF(new RandomAccessReadBuffer(file.getInputStream()))) {
            PDFTextStripper stripper = new PDFTextStripper();
            stripper.setSortByPosition(true);
            return stripper.getText(doc);
        }
    }

    // ── Détection du modèle ───────────────────────────────────────────────────

    public String detectModel(String text) {
        String u = normalize(text);
        // Guinness : sections "EMBALLAGES" et "RETOURS" sans "CONSIGNATION D'EMBALLAGES"
        if (u.contains("EMBALLAGES") && u.contains("RETOURS") && !u.contains("CONSIGNATION D")) {
            return "GUINNESS";
        }
        // Brasseries : "CONSIGNATION D'EMBALLAGES" ou numéro DV-/BL-/FA-
        if (u.contains("CONSIGNATION D") || text.contains("DV-") || text.contains("BL-")) {
            return "BRASSERIES";
        }
        return "BRASSERIES";
    }

    public ParsedEleaderInvoice parse(String text, String forceModel) {
        String model = (forceModel != null && !forceModel.isBlank()) ? forceModel : detectModel(text);
        return "GUINNESS".equalsIgnoreCase(model) ? parseGuinness(text) : parseBrasseries(text);
    }

    // ── BRASSERIES ────────────────────────────────────────────────────────────

    private ParsedEleaderInvoice parseBrasseries(String rawText) {
        ParsedEleaderInvoice result = new ParsedEleaderInvoice();
        result.invoiceModel = "BRASSERIES";

        /*
         * Patterns header — colon OBLIGATOIRE pour éviter de matcher "Facture doit".
         * "Codeclient" peut être soudé (sans espace) ou séparé "Code client".
         * "Datefacture" peut être soudé ou "Date facture".
         */
        Pattern pFact   = Pattern.compile("(?i)facture\\s*:\\s*([A-Z0-9][A-Z0-9/\\-]+)");
        Pattern pDate   = Pattern.compile(
                "(?i)date\\s*facture\\s*:\\s*(\\d{4}-\\d{2}-\\d{2}|\\d{1,2}[/\\-.]\\d{1,2}[/\\-.]\\d{2,4})");
        Pattern pClient = Pattern.compile("(?i)^client\\s*:\\s*(.+)");
        Pattern pCode   = Pattern.compile("(?i)code\\s*client\\s*:\\s*([A-Z0-9]+)");

        // États : 0=aucun, 1=produits, 2=consignation, 3=déconsignation
        int  section             = 0;
        boolean inEmballagesBlock   = false;
        boolean productsProcessed   = false;
        boolean consignProcessed    = false;
        boolean deconsignProcessed  = false;

        for (String rawLine : rawText.split("\\r?\\n")) {
            String trimmed = rawLine.trim();
            if (trimmed.isEmpty()) continue;
            String upper = normalize(trimmed);

            // ── Extraction header (sur toutes les lignes, colon obligatoire) ──
            if (result.invoiceNumber == null) {
                Matcher m = pFact.matcher(trimmed);
                if (m.find()) {
                    String num = m.group(1).trim();
                    // Valider : doit contenir "/" (ex: DV-XXXX/04418/26) et faire > 4 chars
                    if (num.length() > 4 && num.contains("/")) {
                        result.invoiceNumber = num;
                    }
                }
            }
            if (result.invoiceDate == null) {
                Matcher m = pDate.matcher(trimmed);
                if (m.find()) result.invoiceDate = parseDate(m.group(1));
            }
            if (result.clientName == null) {
                Matcher m = pClient.matcher(trimmed);
                if (m.find()) {
                    String name = m.group(1).trim();
                    // Exclure les faux positifs ("doit", valeurs numériques, etc.)
                    if (name.length() > 2 && !name.equalsIgnoreCase("doit") && !name.matches("[0-9 ]+")) {
                        result.clientName = name;
                    }
                }
            }
            if (result.clientCode == null) {
                Matcher m = pCode.matcher(trimmed);
                if (m.find()) result.clientCode = m.group(1).trim();
            }

            // ── Transitions de section ──────────────────────────────────────
            if (upper.startsWith("PRODUITS")) {
                if (!productsProcessed) { section = 1; }
                continue;
            }
            if (upper.startsWith("CONSIGNATION D") && upper.contains("EMBALLAGE")) {
                inEmballagesBlock = true;
                section = 0;
                continue;
            }
            if (inEmballagesBlock) {
                // Sous-section "Consignation" (positif)
                if (isConsignationSubHeader(upper)) {
                    if (!consignProcessed) section = 2;
                    continue;
                }
                // Sous-section "Déconsignation" (négatif)
                if (isDeconsignationHeader(upper)) {
                    if (!deconsignProcessed) section = 3;
                    continue;
                }
            }
            // Fin de section à "TOTAL"
            if (upper.startsWith("TOTAL")) {
                if (section == 1) { productsProcessed  = true; section = 0; }
                if (section == 2) { consignProcessed   = true; section = 0; }
                if (section == 3) { deconsignProcessed = true; section = 0; }
                continue;
            }
            // Lignes de pied de facture → ignorer (frais calculés côté ERP)
            if (isBillingFooter(upper)) {
                section = 0;
                inEmballagesBlock = false;
                continue;
            }
            // En-têtes de colonnes → ignorer
            if (isColumnHeader(upper)) continue;

            // ── Collecte ────────────────────────────────────────────────────
            if (section == 1) {
                ParsedLine pl = parseLine(trimmed);
                if (pl != null) result.productLines.add(pl);
            } else if (section == 2) {
                ParsedLine pl = parseLine(trimmed);
                if (pl != null) result.consignmentLines.add(pl);
            } else if (section == 3) {
                ParsedLine pl = parseLine(trimmed);
                if (pl != null) result.deconsignmentLines.add(new ParsedLine(pl.productCode, pl.quantity.abs()));
            }
        }

        return result;
    }

    // ── GUINNESS ──────────────────────────────────────────────────────────────

    private ParsedEleaderInvoice parseGuinness(String rawText) {
        ParsedEleaderInvoice result = new ParsedEleaderInvoice();
        result.invoiceModel = "GUINNESS";

        // Guinness: "Facture: DV-W2D09016/14651/26 2026-02-23 15:43:45" — invoice num and date on same line
        Pattern pFact     = Pattern.compile("(?i)facture\\s*:\\s*([A-Z0-9][A-Z0-9/\\-]+)");
        Pattern pFactDate = Pattern.compile("(?i)facture\\s*:\\s*[A-Z0-9][A-Z0-9/\\-]+\\s+(\\d{4}-\\d{2}-\\d{2})");
        Pattern pDate     = Pattern.compile(
                "(?i)date\\s*facture\\s*:\\s*(\\d{4}-\\d{2}-\\d{2}|\\d{1,2}[/\\-.]\\d{1,2}[/\\-.]\\d{2,4})");
        Pattern pClient   = Pattern.compile("(?i)^client\\s*:\\s*(.+)");
        Pattern pCode     = Pattern.compile("(?i)code\\s*client\\s*:\\s*([A-Z0-9]+)");

        int section = 0;
        boolean productsProcessed   = false;
        boolean emballagesProcessed = false;
        boolean retoursProcessed    = false;

        for (String rawLine : rawText.split("\\r?\\n")) {
            String trimmed = rawLine.trim();
            if (trimmed.isEmpty()) continue;
            String upper = normalize(trimmed);

            if (result.invoiceNumber == null) {
                Matcher m = pFact.matcher(trimmed);
                if (m.find()) {
                    String num = m.group(1).trim();
                    if (num.length() > 4 && (num.contains("/") || num.contains("-"))) {
                        result.invoiceNumber = num;
                        // Extract date from same line (Guinness format)
                        if (result.invoiceDate == null) {
                            Matcher md = pFactDate.matcher(trimmed);
                            if (md.find()) result.invoiceDate = parseDate(md.group(1));
                        }
                    }
                }
            }
            if (result.invoiceDate == null) {
                Matcher m = pDate.matcher(trimmed);
                if (m.find()) result.invoiceDate = parseDate(m.group(1));
            }
            if (result.clientName == null) {
                Matcher m = pClient.matcher(trimmed);
                if (m.find()) {
                    String name = m.group(1).trim();
                    if (name.length() > 2 && !name.equalsIgnoreCase("doit")) result.clientName = name;
                }
            }
            if (result.clientCode == null) {
                Matcher m = pCode.matcher(trimmed);
                if (m.find()) result.clientCode = m.group(1).trim();
            }

            // Section transitions
            // "Commande" → produits commandés (section 1)
            if (upper.equals("COMMANDE") || upper.startsWith("COMMANDE ") || upper.startsWith("PRODUITS")) {
                if (!productsProcessed) section = 1;
                continue;
            }
            // "Emballages" → consignation d'emballages (section 2)
            if (upper.equals("EMBALLAGES") || upper.startsWith("EMBALLAGES ")) {
                if (!emballagesProcessed) section = 2;
                continue;
            }
            // "Retours" → déconsignation d'emballages (section 3)
            if (upper.equals("RETOURS") || upper.startsWith("RETOURS ")) {
                if (!retoursProcessed) section = 3;
                continue;
            }
            if (upper.startsWith("TOTAL")) {
                if (section == 1) { productsProcessed   = true; section = 0; }
                if (section == 2) { emballagesProcessed = true; section = 0; }
                if (section == 3) { retoursProcessed    = true; section = 0; }
                continue;
            }
            if (isBillingFooter(upper) || upper.startsWith("NOMBRE")) {
                section = 0;
                continue;
            }
            if (isColumnHeader(upper)) continue;

            if (section == 1) {
                ParsedLine pl = parseLineGuinness(trimmed);
                if (pl != null) result.productLines.add(pl);
            } else if (section == 2) {
                ParsedLine pl = parseLineGuinness(trimmed);
                if (pl != null) result.consignmentLines.add(pl);
            } else if (section == 3) {
                ParsedLine pl = parseLineGuinness(trimmed);
                if (pl != null) result.deconsignmentLines.add(new ParsedLine(pl.productCode, pl.quantity.abs()));
            }
        }

        if (result.productLines.isEmpty() && result.consignmentLines.isEmpty()) {
            parseGuinessFlexible(rawText.split("\\r?\\n"), result);
        }

        return result;
    }

    private void parseGuinessFlexible(String[] lines, ParsedEleaderInvoice result) {
        boolean past = false;
        for (String line : lines) {
            String trimmed = line.trim();
            if (trimmed.isEmpty()) continue;
            String upper = normalize(trimmed);
            if (upper.startsWith("CODE CLIENT") || upper.startsWith("CLIENT")) { past = true; continue; }
            if (!past) continue;
            if (upper.startsWith("NOMBRE") || upper.startsWith("NET") || upper.startsWith("TOTAL")) break;
            ParsedLine pl = parseLineGuinness(trimmed);
            if (pl != null) result.productLines.add(pl);
        }
    }

    // ── Parser de ligne produit ───────────────────────────────────────────────

    /**
     * Parse une ligne de produit ou d'emballage.
     *
     * Format attendu : CODE QTY [COND] [prix...]
     *   CHC50C 2 C12 6 394 12 787   → code=CHC50C, qty=2
     *   VRACC12 21 C12 75 600        → code=VRACC12, qty=21
     *   VCBV65 21 C12 -75 600       → code=VCBV65, qty=21 (abs)
     *
     * La QUANTITÉ est TOUJOURS le deuxième token (index 1).
     */
    private ParsedLine parseLine(String line) {
        if (line == null || line.isBlank()) return null;
        String[] parts = line.split("\\s+");
        if (parts.length < 2) return null;

        String code = parts[0].toUpperCase();
        if (!isProductCode(code)) return null;

        // Quantité = toujours parts[1]
        BigDecimal qty = tryParseQty(parts[1]);
        if (qty == null) return null;

        BigDecimal absQty = qty.abs();
        if (absQty.compareTo(BigDecimal.ZERO) == 0) return null;

        return new ParsedLine(code, absQty);
    }

    /** Variante Guinness : accepte les codes purement numériques (emballages 354113, 354111…) */
    private ParsedLine parseLineGuinness(String line) {
        if (line == null || line.isBlank()) return null;
        String[] parts = line.split("\\s+");
        if (parts.length < 2) return null;

        String code = parts[0].toUpperCase();
        if (!isGuinnessProductCode(code)) return null;

        BigDecimal qty = tryParseQty(parts[1]);
        if (qty == null) return null;

        BigDecimal absQty = qty.abs();
        if (absQty.compareTo(BigDecimal.ZERO) == 0) return null;

        return new ParsedLine(code, absQty);
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    /** Normalise : majuscules + suppression accents courants pour comparaisons */
    private String normalize(String s) {
        return s.toUpperCase()
                .replace("É", "E").replace("È", "E").replace("Ê", "E").replace("Ë", "E")
                .replace("À", "A").replace("Â", "A").replace("Ã", "A")
                .replace("Î", "I").replace("Ï", "I")
                .replace("Ô", "O").replace("Ö", "O")
                .replace("Ù", "U").replace("Û", "U").replace("Ü", "U")
                .replace("Ç", "C")
                .replace("’", "'").replace("‘", "'"); // apostrophes typographiques
    }

    private boolean isConsignationSubHeader(String normUpper) {
        // "CONSIGNATION" seul (pas "CONSIGNATION D'EMBALLAGES")
        return (normUpper.equals("CONSIGNATION") || normUpper.startsWith("CONSIGNATION "))
                && !normUpper.startsWith("CONSIGNATION D");
    }

    private boolean isDeconsignationHeader(String normUpper) {
        return normUpper.startsWith("DECONSIGNATION");
    }

    private boolean isColumnHeader(String normUpper) {
        return normUpper.startsWith("CODE") && (normUpper.contains("QTE") || normUpper.contains("PU"))
                || normUpper.equals("CODE QTE PT")
                || normUpper.startsWith("S/FAMILLE")
                // Guinness column header: "Art  Qte  PU    PT"
                || (normUpper.startsWith("ART") && normUpper.contains("QTE"));
    }

    private boolean isBillingFooter(String normUpper) {
        return normUpper.startsWith("SOLDE")
                || normUpper.startsWith("DEVISE")
                || normUpper.startsWith("LIQUIDE")
                || normUpper.startsWith("VALEUR")
                || normUpper.startsWith("TVA")
                || normUpper.startsWith("PSA")
                || normUpper.startsWith("FRAIS")
                || normUpper.startsWith("***")
                || normUpper.startsWith("NET A")     // "NET À PAYER"
                || normUpper.startsWith("MODE DE")
                || normUpper.startsWith("RISTOURNE")
                || normUpper.startsWith("MOBILE")
                || normUpper.startsWith("CUMUL")
                || normUpper.startsWith("SIGNATURE")
                || normUpper.startsWith("FACTURE IMP") // "Facture imprimée par"
                // Guinness-specific footer lines
                || normUpper.startsWith("NOMBRE DE COLIS")
                || normUpper.startsWith("TOTAL CONSIGNATION")
                || normUpper.startsWith("TOTAL DECONSIGNATION")
                || normUpper.startsWith("TOTAL ACHETE")
                || normUpper.startsWith("TOTAL FRAIS")
                || normUpper.startsWith("TOTAL LIQUIDE")
                || normUpper.startsWith("LIQUIDITES")
                || normUpper.startsWith("REBATE")
                || normUpper.startsWith("CHANGE")
                || normUpper.startsWith("CASSIER");
    }

    /**
     * Un code produit valide commence par une lettre, contient lettres+chiffres,
     * et n'est pas un pur nombre ni un code de conditionnement isolé.
     */
    private boolean isProductCode(String code) {
        if (code == null || code.length() < 3 || code.length() > 15) return false;
        if (!Character.isLetter(code.charAt(0))) return false;     // doit commencer par une lettre
        if (code.matches("[0-9]+")) return false;                   // pur nombre
        if (code.matches("[0-9]+[.,][0-9]+")) return false;         // décimal
        return code.matches("[A-Z][A-Z0-9]{2,14}");
    }

    /**
     * Code produit Guinness : alphanumériques commençant par une lettre (GUB65C, GUS50C)
     * OU codes d'emballage purement numériques 4-8 chiffres (354113, 354111, 354112).
     */
    private boolean isGuinnessProductCode(String code) {
        if (code == null || code.length() < 3 || code.length() > 15) return false;
        if (code.matches("[A-Z][A-Z0-9]{2,14}")) return true;
        if (code.matches("[0-9]{4,8}")) return true;
        return false;
    }

    private BigDecimal tryParseQty(String s) {
        if (s == null) return null;
        try {
            String cleaned = s.replace(",", ".").replace(" ", "").replace(" ", "");
            return new BigDecimal(cleaned);
        } catch (NumberFormatException e) {
            return null;
        }
    }

    private LocalDate parseDate(String s) {
        if (s == null || s.isBlank()) return null;
        // Format ISO : 2026-02-17 (éventuellement suivi d'une heure "18:08:47")
        if (s.length() >= 10 && s.charAt(4) == '-') {
            try {
                return LocalDate.parse(s.substring(0, 10), DateTimeFormatter.ISO_LOCAL_DATE);
            } catch (Exception ignored) {}
        }
        // Format FR : 17/02/2026 ou 17-02-2026 ou 17.02.2026
        String normalized = s.replace(".", "/").replace("-", "/");
        String[] parts = normalized.split("/");
        if (parts.length == 3) {
            try {
                if (parts[2].length() == 2) parts[2] = "20" + parts[2];
                String iso = parts[2]
                        + "-" + String.format("%02d", Integer.parseInt(parts[1].trim()))
                        + "-" + String.format("%02d", Integer.parseInt(parts[0].trim()));
                return LocalDate.parse(iso, DateTimeFormatter.ISO_LOCAL_DATE);
            } catch (Exception e) {
                log.warn("Date eLeader non parseable: {}", s);
            }
        }
        return null;
    }
}

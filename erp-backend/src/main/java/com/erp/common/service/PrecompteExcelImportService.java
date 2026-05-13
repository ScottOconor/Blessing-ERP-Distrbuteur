package com.erp.common.service;

import com.erp.accounting.entity.Partner;
import com.erp.accounting.repository.PartnerRepository;
import com.erp.common.entity.Precompte;
import com.erp.common.repository.PrecompteRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class PrecompteExcelImportService {

    private final PrecompteRepository precompteRepo;
    private final PartnerRepository partnerRepo;

    public ImportReport importExcel(MultipartFile file, Long companyId) throws IOException {
        if (file == null || file.isEmpty()) {
            return ImportReport.failure("Fichier vide");
        }

        Workbook wb = null;
        try {
            wb = new XSSFWorkbook(file.getInputStream());
            Sheet sheet = wb.getSheetAt(0);
            if (sheet == null) return ImportReport.failure("Feuille 1 introuvable");

            Map<String, Integer> headers = readHeaders(sheet);
            log.info("Colonnes détectées : {}", headers.keySet());

            Integer colPartner = findCol(headers,
                    "partner_id", "Partner_ID", "partnerId", "PartnerId",
                    "Partenaire", "partenaire",
                    "partner_id/name", "partner_name",
                    "Nom du partenaire", "Client / Fournisseur",
                    "ID partenaire", "id partenaire");
            Integer colType = findCol(headers,
                    "type_precompte", "typePrecompte", "type",
                    "Type de précompte", "Type de precompte",
                    "Type", "Nature");
            Integer colTaux = findCol(headers,
                    "taux_precompte", "tauxPrecompte",
                    "Taux (%)", "Taux(%)", "Taux", "taux",
                    "taux_precompte (%)", "Rate");
            Integer colCompanyId = findCol(headers,
                    "companyId", "company_id", "Société", "Societe");

            List<String> missing = new ArrayList<>();
            if (colPartner == null) missing.add("partenaire (partner_id / Partenaire)");
            if (colType    == null) missing.add("type (type_precompte / Type)");
            if (colTaux    == null) missing.add("taux (taux_precompte / Taux)");
            if (!missing.isEmpty()) {
                return ImportReport.failure("Colonnes introuvables : " + String.join(", ", missing)
                        + ". Colonnes lues : " + headers.keySet());
            }

            // ── Préchargement en mémoire (3 requêtes) ──────────────────────────
            List<Partner> allPartners = partnerRepo.findByCompanyId(companyId);
            Map<String, Partner> byName = allPartners.stream()
                    .collect(java.util.stream.Collectors.toMap(
                            p -> p.getName().toLowerCase().trim(), p -> p, (a, b) -> a));
            Map<String, Partner> byRef  = allPartners.stream()
                    .filter(p -> p.getRef() != null && !p.getRef().isBlank())
                    .collect(java.util.stream.Collectors.toMap(
                            p -> p.getRef().toLowerCase().trim(), p -> p, (a, b) -> a));
            Map<Long, Partner> byId = allPartners.stream()
                    .collect(java.util.stream.Collectors.toMap(Partner::getId, p -> p, (a, b) -> a));

            // Chercher par partner_id (sans filtrer par company_id) pour respecter
            // la contrainte unique (partner_id, type_precompte) même si company_id diffère
            List<Long> companyPartnerIds = allPartners.stream()
                    .map(com.erp.accounting.entity.Partner::getId)
                    .collect(java.util.stream.Collectors.toList());
            Map<String, Precompte> existingPrecomptes = companyPartnerIds.isEmpty()
                    ? new HashMap<>()
                    : precompteRepo.findByPartnerIdIn(companyPartnerIds)
                            .stream().collect(java.util.stream.Collectors.toMap(
                                    p -> p.getPartner().getId() + "_" + p.getTypePrecompte(),
                                    p -> p, (a, b) -> a));
            // ───────────────────────────────────────────────────────────────────

            ImportReport report = new ImportReport();
            // LinkedHashMap garantit l'ordre d'insertion et déduplique les lignes Excel
            // avec le même (partner_id, type_precompte) sans déclencher de doublon DB
            Map<String, Precompte> toSaveMap = new LinkedHashMap<>();
            // partnerId → taux à appliquer sur Partner.tauxPrecompte (priorité au type "sale")
            Map<Long, BigDecimal> partnerTauxUpdate = new HashMap<>();
            int last = sheet.getLastRowNum();

            for (int i = 1; i <= last; i++) {
                Row row = sheet.getRow(i);
                if (row == null) continue;

                String rawPartner = getString(row.getCell(colPartner));
                if (rawPartner.isBlank()) continue;
                if (rawPartner.contains(".") && !rawPartner.contains(" ")) {
                    log.debug("Ligne {} : ID externe Odoo ignoré '{}'", i + 1, rawPartner);
                    continue;
                }

                // Résolution du partenaire depuis la map mémoire
                Long effectiveCompanyId = resolveCompanyId(colCompanyId, row, companyId);
                Partner partner = resolvePartnerFromMap(rawPartner, byName, byRef, byId);
                if (partner == null) {
                    report.addError(i + 1, "Partenaire introuvable : \"" + rawPartner + "\"");
                    continue;
                }

                String rawType = getString(row.getCell(colType));
                String normalizedType = normalizeType(rawType);
                if (normalizedType == null) {
                    report.addError(i + 1, "Type invalide : \"" + rawType + "\"");
                    continue;
                }

                String rawTaux = getString(row.getCell(colTaux));
                BigDecimal taux = parseBigDecimal(rawTaux);
                if (taux == null) {
                    report.addError(i + 1, "Taux invalide : \"" + rawTaux + "\"");
                    continue;
                }

                String key = partner.getId() + "_" + normalizedType;
                // Priorité : 1) déjà en DB, 2) déjà vu dans ce batch, 3) nouveau
                Precompte entity = existingPrecomptes.containsKey(key)
                        ? existingPrecomptes.get(key)
                        : toSaveMap.getOrDefault(key, Precompte.builder().build());
                boolean isNew = entity.getId() == null && !toSaveMap.containsKey(key);
                entity.setPartner(partner);
                entity.setTypePrecompte(normalizedType);
                entity.setTauxPrecompte(taux);
                entity.setCompanyId(effectiveCompanyId);
                entity.setActive(true);
                toSaveMap.put(key, entity);

                // Mettre à jour Partner.tauxPrecompte : priorité au type "sale", sinon "purchase"
                if ("sale".equals(normalizedType) || !partnerTauxUpdate.containsKey(partner.getId())) {
                    partnerTauxUpdate.put(partner.getId(), taux);
                }

                if (isNew) report.incrementCreated();
                else       report.incrementUpdated();
            }

            // Sauvegarder les précomptes
            precompteRepo.saveAll(toSaveMap.values());

            // Mettre à jour Partner.tauxPrecompte sur chaque partenaire concerné
            List<Partner> partnersToUpdate = new ArrayList<>();
            for (Map.Entry<Long, BigDecimal> entry : partnerTauxUpdate.entrySet()) {
                Partner p = byId.get(entry.getKey());
                if (p != null) {
                    p.setTauxPrecompte(entry.getValue());
                    partnersToUpdate.add(p);
                }
            }
            if (!partnersToUpdate.isEmpty()) {
                partnerRepo.saveAll(partnersToUpdate);
                log.info("Précomptes liés à {} partenaire(s)", partnersToUpdate.size());
            }

            report.finish();
            return report;
        } finally {
            if (wb != null) wb.close();
        }
    }

    private Partner resolvePartnerFromMap(String raw, Map<String, Partner> byName,
                                          Map<String, Partner> byRef, Map<Long, Partner> byId) {
        String trimmed = raw.trim();
        // Résolution par ID numérique
        try {
            Long id = Long.parseLong(trimmed);
            return byId.get(id);
        } catch (NumberFormatException ignored) {}
        // Résolution par nom
        Partner p = byName.get(trimmed.toLowerCase());
        if (p != null) return p;
        // Résolution par référence
        return byRef.get(trimmed.toLowerCase());
    }

    // ─── Helpers ───────────────────────────────────────────────────────────────

    private Long resolveCompanyId(Integer colCompanyId, Row row, Long defaultCompanyId) {
        if (colCompanyId == null) return defaultCompanyId;
        String raw = getString(row.getCell(colCompanyId));
        if (raw.isBlank()) return defaultCompanyId;
        try { return Long.parseLong(raw.trim()); }
        catch (Exception ignored) { return defaultCompanyId; }
    }

    private String normalizeType(String raw) {
        if (raw == null) return null;
        String v = raw.trim().toLowerCase();
        if (v.equals("sale") || v.equals("vente") || v.equals("ventes") || v.equals("client")) return "sale";
        if (v.equals("purchase") || v.equals("achat") || v.equals("achats") || v.equals("fournisseur")) return "purchase";
        return null;
    }

    private Map<String, Integer> readHeaders(Sheet sheet) {
        Map<String, Integer> map = new LinkedHashMap<>();
        Row headerRow = sheet.getRow(0);
        if (headerRow == null) return map;
        for (Cell cell : headerRow) {
            String h = getString(cell);
            if (!h.isBlank()) {
                map.put(h, cell.getColumnIndex());
                map.put(h.toLowerCase(), cell.getColumnIndex());
            }
        }
        return map;
    }

    private Integer findCol(Map<String, Integer> headers, String... candidates) {
        for (String c : candidates) {
            Integer idx = headers.get(c);
            if (idx != null) return idx;
            idx = headers.get(c.toLowerCase());
            if (idx != null) return idx;
        }
        return null;
    }

    private String getString(Cell cell) {
        if (cell == null) return "";
        return switch (cell.getCellType()) {
            case STRING  -> cell.getStringCellValue().trim();
            case NUMERIC -> {
                double d = cell.getNumericCellValue();
                yield (d == Math.floor(d)) ? String.valueOf((long) d) : String.valueOf(d);
            }
            case BOOLEAN -> String.valueOf(cell.getBooleanCellValue());
            case FORMULA -> {
                try { yield cell.getStringCellValue().trim(); }
                catch (Exception e) {
                    double d = cell.getNumericCellValue();
                    yield (d == Math.floor(d)) ? String.valueOf((long) d) : String.valueOf(d);
                }
            }
            default -> "";
        };
    }

    private BigDecimal parseBigDecimal(String raw) {
        if (raw == null) return null;
        String v = raw.trim().replace("%", "").replace(",", ".").replace(" ", "");
        if (v.isBlank()) return null;
        try { return new BigDecimal(v); }
        catch (Exception e) { return null; }
    }

    // ─── ImportReport ──────────────────────────────────────────────────────────

    public static class ImportReport {
        private boolean success = true;
        private String message;
        private int created;
        private int updated;
        private final List<String> errors = new ArrayList<>();

        public static ImportReport failure(String msg) {
            ImportReport r = new ImportReport();
            r.success = false;
            r.message = msg;
            return r;
        }

        public void addError(int rowNumber, String msg) {
            errors.add("Ligne " + rowNumber + " : " + msg);
        }

        public void incrementCreated() { created++; }
        public void incrementUpdated() { updated++; }

        public void finish() {
            message = String.format("Import terminé : %d créé(s), %d mis à jour, %d erreur(s)",
                    created, updated, errors.size());
            if (!errors.isEmpty()) success = false;
        }

        public boolean isSuccess()       { return success; }
        public String getMessage()        { return message; }
        public int getProcessed()         { return created + updated; }
        public int getUpserted()          { return created + updated; }
        public int getCreated()           { return created; }
        public int getUpdated()           { return updated; }
        public List<String> getErrors()   { return errors; }

        public void setSuccess(boolean s)      { this.success = s; }
        public void setMessage(String m)       { this.message = m; }
        public void setProcessed(int p)        { /* compat */ }
        public void setUpserted(int u)         { /* compat */ }
        public void setErrors(List<String> e)  { errors.clear(); errors.addAll(e); }
    }
}

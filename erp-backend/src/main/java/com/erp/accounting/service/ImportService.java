package com.erp.accounting.service;

import com.erp.accounting.dto.ImportResult;
import com.erp.accounting.dto.JournalPreviewDTO;
import com.erp.accounting.entity.*;
import com.erp.accounting.repository.*;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.stock.entity.Warehouse;
import com.erp.stock.repository.WarehouseRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class ImportService {

    private final AccountAccountRepository accountRepo;
    private final AccountJournalRepository journalRepo;
    private final AnalyticAccountRepository analyticAccountRepo;
    private final PartnerRepository partnerRepo;
    private final CompanyRepository companyRepo;
    private final WarehouseRepository warehouseRepo;

    // =====================================================
    // PLAN COMPTABLE (account.account)
    // =====================================================

    public ImportResult importAccounts(MultipartFile file, Long companyId, boolean replace) throws IOException {
        Company company = getCompany(companyId);
        ImportResult result = ImportResult.builder().build();
        // On ne supprime plus les comptes existants : des écritures peuvent les référencer.
        // L'import fait toujours un upsert (mise à jour si le code existe, création sinon).

        Workbook wb = new XSSFWorkbook(file.getInputStream());
        try {
            Sheet sheet = wb.getSheetAt(0);
            Map<String, Integer> headers = readHeaders(sheet);

            log.info("Colonnes détectées dans le fichier : {}", headers.keySet());

            // Odoo 15 FR / EN : toutes les variantes connues
            Integer colCode = findCol(headers,
                    "code", "Code", "Code du compte", "account code",
                    "code_compte", "numéro", "Numero");

            Integer colName = findCol(headers,
                    "name", "Intitulé", "intitule", "Intitule",
                    "Libelle", "Libellé", "libellé", "libelle",
                    "Nom", "nom", "Nom du compte", "nom du compte",
                    "Account Name", "account name",
                    "Désignation", "designation");

            Integer colType = findCol(headers,
                    "account_type", "Type", "type",
                    "Type de compte", "type de compte",
                    "Account Type", "account type",
                    "Internal Type", "internal type",
                    "Type (vue)", "Nature");

            Integer colReconcile = findCol(headers,
                    "reconcile", "Reconcile",
                    "Réconciliation", "Reconciliation",
                    "Autoriser la réconciliation",
                    "autoriser la reconciliation",
                    "Autoriser le lettrage",
                    "autoriser le lettrage",
                    "Allow Reconciliation", "allow reconciliation",
                    "Réconciliation sur les pièces",
                    "Reconciliation sur les pieces");

            if (colCode == null || colName == null) {
                String detected = String.join(", ", headers.keySet().stream()
                        .filter(k -> !k.equals(k.toLowerCase()) || headers.keySet().stream().noneMatch(k2 -> k2.equals(k.toLowerCase()) && !k2.equals(k)))
                        .distinct().sorted().toList());
                result.addError("Colonnes 'code' et/ou 'name' introuvables. " +
                        "Colonnes détectées dans le fichier : [" + detected + "]. " +
                        "Colonnes attendues : 'Code' et 'Intitulé' (ou 'Libelle', 'Nom', 'name').");
                return result;
            }

            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row == null) continue;

                String code = getString(row, colCode).trim();
                // Odoo external ID format: "account.account_101" → extraire "101"
                if (code.contains(".") && !code.contains(" ") && !code.matches("\\d+\\.\\d+")) continue;
                // Sauter les lignes de titre ou vides
                if (code.isEmpty()) continue;
                // Nettoyer les codes qui contiennent "account.account_" ou similaire
                if (code.startsWith("__") || code.equalsIgnoreCase("false")) continue;

                String name = colName != null ? getString(row, colName).trim() : "";
                if (name.isEmpty() || name.equalsIgnoreCase("false")) {
                    result.addError("Ligne " + (i + 1) + " ignorée : nom manquant pour le code " + code);
                    result.setSkipped(result.getSkipped() + 1);
                    continue;
                }

                String rawType = (colType != null) ? getString(row, colType) : "";
                // Odoo stocke parfois le type sous forme "asset_receivable (Receivable)" → extraire la clé
                if (rawType.contains("(")) rawType = rawType.substring(0, rawType.indexOf("(")).trim();
                String[] mapped = mapOdooAccountType(rawType);
                String accountType = mapped[0];
                String internalType = mapped[1];

                // On force deprecated=false : les comptes Odoo marqués obsolètes doivent
                // rester visibles dans l'ERP (ils seraient filtrés sinon).
                boolean deprecated = false;
                boolean reconcile  = (colReconcile != null)  && parseBoolean(getString(row, colReconcile));

                Optional<AccountAccount> existing = accountRepo.findFirstByCodeAndCompanyId(code, companyId);
                if (existing.isPresent()) {
                    AccountAccount acc = existing.get();
                    acc.setName(name);
                    acc.setAccountType(accountType);
                    acc.setInternalType(internalType);
                    acc.setDeprecated(deprecated);
                    acc.setReconcile(reconcile);
                    accountRepo.save(acc);
                    result.setUpdated(result.getUpdated() + 1);
                } else {
                    AccountAccount acc = AccountAccount.builder()
                            .code(code).name(name)
                            .accountType(accountType).internalType(internalType)
                            .deprecated(deprecated).reconcile(reconcile)
                            .company(company).build();
                    accountRepo.save(acc);
                    result.setCreated(result.getCreated() + 1);
                }
            }
        } finally {
            wb.close();
        }

        result.setMessage(String.format("Import terminé : %d créés, %d mis à jour, %d ignorés, %d erreur(s)",
                result.getCreated(), result.getUpdated(), result.getSkipped(), result.getErrors().size()));
        log.info(result.getMessage());
        return result;
    }

    // =====================================================
    // COMPTES ANALYTIQUES
    // =====================================================

    public ImportResult importAnalyticAccounts(MultipartFile file, Long companyId) throws IOException {
        Company company = getCompany(companyId);
        ImportResult result = ImportResult.builder().build();
        Map<String, String> codeToParentCode = new LinkedHashMap<>();

        Workbook wb = new XSSFWorkbook(file.getInputStream());
        try {
            Sheet sheet = wb.getSheetAt(0);
            Map<String, Integer> headers = readHeaders(sheet);

            Integer colCode   = findCol(headers, "code", "Code");
            Integer colName   = findCol(headers, "name", "Intitulé", "Nom");
            Integer colDesc   = findCol(headers, "note", "description", "Description");
            Integer colParent = findCol(headers, "parent_id", "parent_id/code", "Parent", "Compte parent");

            if (colCode == null || colName == null) {
                result.addError("Colonnes obligatoires manquantes: 'code' et 'name'");
                return result;
            }

            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row == null) continue;

                String code = getString(row, colCode);
                if (code.isEmpty()) continue;

                String name = getString(row, colName);
                if (name.isEmpty()) {
                    result.addError("Ligne " + (i + 1) + " ignorée : nom manquant");
                    result.setSkipped(result.getSkipped() + 1);
                    continue;
                }

                String description = (colDesc != null) ? getString(row, colDesc) : "";
                String parentCode  = (colParent != null) ? extractCode(getString(row, colParent)) : "";
                codeToParentCode.put(code, parentCode);

                Optional<AnalyticAccount> existing = analyticAccountRepo.findFirstByCodeAndCompanyId(code, companyId);
                if (existing.isPresent()) {
                    AnalyticAccount acc = existing.get();
                    acc.setName(name);
                    if (!description.isEmpty()) acc.setDescription(description);
                    analyticAccountRepo.save(acc);
                    result.setUpdated(result.getUpdated() + 1);
                } else {
                    AnalyticAccount acc = AnalyticAccount.builder()
                            .code(code).name(name)
                            .description(description.isEmpty() ? null : description)
                            .active(true).company(company).build();
                    analyticAccountRepo.save(acc);
                    result.setCreated(result.getCreated() + 1);
                }
            }

            // Second pass: wire parent links
            for (Map.Entry<String, String> entry : codeToParentCode.entrySet()) {
                String childCode  = entry.getKey();
                String parentCode = entry.getValue();
                if (parentCode.isEmpty()) continue;
                final String fParentCode = parentCode;
                analyticAccountRepo.findFirstByCodeAndCompanyId(childCode, companyId).ifPresent(child -> {
                    analyticAccountRepo.findFirstByCodeAndCompanyId(fParentCode, companyId).ifPresent(parent -> {
                        child.setParent(parent);
                        analyticAccountRepo.save(child);
                    });
                });
            }
        } finally {
            wb.close();
        }

        result.setMessage(String.format("Import terminé : %d créés, %d mis à jour, %d ignorés, %d erreur(s)",
                result.getCreated(), result.getUpdated(), result.getSkipped(), result.getErrors().size()));
        log.info(result.getMessage());
        return result;
    }

    // =====================================================
    // CONTACTS / PARTENAIRES (res.partner)
    // =====================================================

    public ImportResult importPartners(MultipartFile file, Long companyId) throws IOException {
        Company company = getCompany(companyId);
        ImportResult result = ImportResult.builder().build();

        Workbook wb = new XSSFWorkbook(file.getInputStream());
        try {
            Sheet sheet = wb.getSheetAt(0);
            Map<String, Integer> headers = readHeaders(sheet);

            Integer colName    = findCol(headers, "name", "Nom");
            Integer colRef     = findCol(headers, "ref", "Référence", "Reference");
            Integer colPhone   = findCol(headers, "phone", "Téléphone", "Telephone");
            Integer colEmail   = findCol(headers, "email", "Email", "Courriel");
            Integer colStreet  = findCol(headers, "street", "Rue", "Adresse");
            Integer colIsComp  = findCol(headers, "is_company", "Entreprise", "Est une société");
            Integer colType    = findCol(headers, "company_type", "Type");

            if (colName == null) {
                result.addError("Colonne obligatoire manquante: 'name'");
                return result;
            }

            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row == null) continue;

                String name = getString(row, colName);
                if (name.isEmpty()) continue;

                String ref          = (colRef    != null) ? getString(row, colRef)    : "";
                String phone        = (colPhone  != null) ? getString(row, colPhone)  : "";
                String email        = (colEmail  != null) ? getString(row, colEmail)  : "";
                String address      = (colStreet != null) ? getString(row, colStreet) : "";
                String isCompanyStr = (colIsComp != null) ? getString(row, colIsComp) : "";
                String typeStr      = (colType   != null) ? getString(row, colType)   : "";
                String partnerType  = resolvePartnerType(isCompanyStr, typeStr);

                Optional<Partner> existing = ref.isEmpty()
                        ? partnerRepo.findFirstByNameAndCompanyId(name, companyId)
                        : partnerRepo.findFirstByRefAndCompanyId(ref, companyId);

                if (existing.isPresent()) {
                    Partner p = existing.get();
                    p.setName(name);
                    if (!phone.isEmpty())   p.setPhone(phone);
                    if (!email.isEmpty())   p.setEmail(email);
                    if (!address.isEmpty()) p.setAddress(address);
                    p.setType(partnerType);
                    partnerRepo.save(p);
                    result.setUpdated(result.getUpdated() + 1);
                } else {
                    Partner p = Partner.builder()
                            .name(name)
                            .ref(ref.isEmpty() ? null : ref)
                            .type(partnerType)
                            .phone(phone.isEmpty() ? null : phone)
                            .email(email.isEmpty() ? null : email)
                            .address(address.isEmpty() ? null : address)
                            .company(company).build();
                    partnerRepo.save(p);
                    result.setCreated(result.getCreated() + 1);
                }
            }
        } finally {
            wb.close();
        }

        result.setMessage(String.format("Import terminé : %d créés, %d mis à jour, %d ignorés, %d erreur(s)",
                result.getCreated(), result.getUpdated(), result.getSkipped(), result.getErrors().size()));
        log.info(result.getMessage());
        return result;
    }

    // =====================================================
    // JOURNAUX (account.journal) — nécessite le plan comptable
    // =====================================================

    @Transactional(readOnly = true)
    public List<JournalPreviewDTO> previewJournals(MultipartFile file, Long companyId) throws IOException {
        List<JournalPreviewDTO> rows = new ArrayList<>();

        Workbook wb = new XSSFWorkbook(file.getInputStream());
        try {
            Sheet sheet = wb.getSheetAt(0);
            Map<String, Integer> headers = readHeaders(sheet);

            Integer colName        = findCol(headers, "name", "Nom du journal", "Nom");
            Integer colCode        = findCol(headers, "code", "Abréviation", "Abreviation", "Code");
            Integer colType        = findCol(headers, "type", "Type");
            Integer colDefaultAcct = findCol(headers, "default_account_id", "default_account_id/code",
                                             "Compte par défaut", "Compte de contrepartie");

            if (colName == null || colCode == null) return rows;

            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row == null) continue;

                String code = getString(row, colCode);
                if (code.isEmpty()) continue;

                String name = getString(row, colName);
                if (name.isEmpty()) continue;

                String rawType = (colType != null) ? getString(row, colType) : "";
                String type    = mapOdooJournalType(rawType);

                String defaultAcctRaw  = (colDefaultAcct != null) ? getString(row, colDefaultAcct) : "";
                String defaultAcctCode = extractCode(defaultAcctRaw);
                boolean accountFound   = false;
                String warning         = null;

                if (!defaultAcctCode.isEmpty()) {
                    accountFound = accountRepo.findFirstByCodeAndCompanyId(defaultAcctCode, companyId).isPresent();
                    if (!accountFound) {
                        warning = "Compte '" + defaultAcctCode + "' introuvable dans le plan comptable";
                    }
                }

                boolean exists = journalRepo.findFirstByCodeAndCompanyId(code, companyId).isPresent();

                rows.add(JournalPreviewDTO.builder()
                        .code(code)
                        .name(name)
                        .type(type)
                        .defaultAccountCode(defaultAcctCode)
                        .accountFound(accountFound)
                        .action(exists ? "update" : "create")
                        .warning(warning)
                        .build());
            }
        } finally {
            wb.close();
        }
        return rows;
    }

    public ImportResult importJournals(MultipartFile file, Long companyId) throws IOException {
        Company company = getCompany(companyId);
        ImportResult result = ImportResult.builder().build();

        Workbook wb = new XSSFWorkbook(file.getInputStream());
        try {
            Sheet sheet = wb.getSheetAt(0);
            Map<String, Integer> headers = readHeaders(sheet);

            Integer colName        = findCol(headers, "name", "Nom du journal", "Nom");
            Integer colCode        = findCol(headers, "code", "Abréviation", "Abreviation", "Code");
            Integer colType        = findCol(headers, "type", "Type");
            Integer colDefaultAcct = findCol(headers, "default_account_id", "default_account_id/code",
                                             "Compte par défaut", "Compte de contrepartie");

            if (colName == null || colCode == null) {
                result.addError("Colonnes obligatoires manquantes: 'name' et 'code'");
                return result;
            }

            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row == null) continue;

                String code = getString(row, colCode);
                if (code.isEmpty()) continue;

                String name = getString(row, colName);
                if (name.isEmpty()) {
                    result.addError("Ligne " + (i + 1) + " ignorée : nom manquant pour le code " + code);
                    result.setSkipped(result.getSkipped() + 1);
                    continue;
                }

                String rawType = (colType != null) ? getString(row, colType) : "";
                String type    = mapOdooJournalType(rawType);

                String defaultAcctRaw  = (colDefaultAcct != null) ? getString(row, colDefaultAcct) : "";
                String defaultAcctCode = extractCode(defaultAcctRaw);
                AccountAccount defaultAcct = null;
                if (!defaultAcctCode.isEmpty()) {
                    defaultAcct = accountRepo.findFirstByCodeAndCompanyId(defaultAcctCode, companyId).orElse(null);
                    if (defaultAcct == null) {
                        result.addError("Ligne " + (i + 1) + " [" + code + "] : compte '"
                                + defaultAcctCode + "' introuvable");
                    }
                }

                Optional<AccountJournal> existing = journalRepo.findFirstByCodeAndCompanyId(code, companyId);
                if (existing.isPresent()) {
                    AccountJournal j = existing.get();
                    j.setName(name);
                    j.setType(type);
                    if (defaultAcct != null) {
                        j.setDefaultDebitAccount(defaultAcct);
                        j.setDefaultCreditAccount(defaultAcct);
                    }
                    journalRepo.save(j);
                    result.setUpdated(result.getUpdated() + 1);
                } else {
                    AccountJournal j = AccountJournal.builder()
                            .code(code).name(name).type(type)
                            .defaultDebitAccount(defaultAcct)
                            .defaultCreditAccount(defaultAcct)
                            .company(company).active(true).build();
                    journalRepo.save(j);
                    result.setCreated(result.getCreated() + 1);
                }
            }
        } finally {
            wb.close();
        }

        result.setMessage(String.format("Import terminé : %d créés, %d mis à jour, %d ignorés, %d erreur(s)",
                result.getCreated(), result.getUpdated(), result.getSkipped(), result.getErrors().size()));
        log.info(result.getMessage());
        return result;
    }

    // =====================================================
    // ENTREPÔTS (stock.warehouse)
    // =====================================================

    public ImportResult importWarehouses(MultipartFile file, Long companyId) throws IOException {
        ImportResult result = ImportResult.builder().build();

        Workbook wb = new XSSFWorkbook(file.getInputStream());
        try {
            Sheet sheet = wb.getSheetAt(0);
            Map<String, Integer> headers = readHeaders(sheet);

            Integer colName   = findCol(headers, "name", "Nom", "Nom de l'entrepôt", "Warehouse Name");
            Integer colCode   = findCol(headers, "code", "Code", "Code abrégé", "Short Name");
            Integer colActive = findCol(headers, "active", "Actif", "Active");

            if (colName == null || colCode == null) {
                result.addError("Colonnes obligatoires manquantes : 'name' et 'code'. Colonnes détectées : " + headers.keySet());
                return result;
            }

            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row == null) continue;

                String name = getString(row, colName).trim();
                String code = getString(row, colCode).trim().toUpperCase();

                if (name.isEmpty() || name.equalsIgnoreCase("false")) continue;
                if (code.isEmpty() || code.equalsIgnoreCase("false")) continue;
                if (code.length() > 10) code = code.substring(0, 10);

                String activeRaw = colActive != null ? getString(row, colActive) : "true";
                boolean active = activeRaw.isEmpty() || "true".equalsIgnoreCase(activeRaw) || "1".equals(activeRaw);

                Optional<Warehouse> existing = warehouseRepo.findFirstByCodeAndCompanyId(code, companyId);
                if (existing.isPresent()) {
                    Warehouse w = existing.get();
                    w.setName(name);
                    w.setActive(active);
                    warehouseRepo.save(w);
                    result.setUpdated(result.getUpdated() + 1);
                } else {
                    Warehouse w = Warehouse.builder()
                            .name(name)
                            .code(code)
                            .active(active)
                            .companyId(companyId)
                            .build();
                    warehouseRepo.save(w);
                    result.setCreated(result.getCreated() + 1);
                }
            }
        } finally {
            wb.close();
        }

        result.setMessage(String.format("Import terminé : %d créés, %d mis à jour, %d ignorés, %d erreur(s)",
                result.getCreated(), result.getUpdated(), result.getSkipped(), result.getErrors().size()));
        log.info(result.getMessage());
        return result;
    }

    // =====================================================
    // HELPERS
    // =====================================================

    private Company getCompany(Long companyId) {
        return companyRepo.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Société introuvable: " + companyId));
    }

    private Map<String, Integer> readHeaders(Sheet sheet) {
        Map<String, Integer> map = new LinkedHashMap<>();
        Row headerRow = sheet.getRow(0);
        if (headerRow == null) return map;
        for (Cell cell : headerRow) {
            String h = getCellString(cell).trim();
            if (!h.isEmpty()) {
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

    private String getString(Row row, int colIndex) {
        return getCellString(row.getCell(colIndex));
    }

    private String getCellString(Cell cell) {
        if (cell == null) return "";
        CellType ct = cell.getCellType();
        if (ct == CellType.STRING) {
            return cell.getStringCellValue().trim();
        }
        if (ct == CellType.NUMERIC) {
            double v = cell.getNumericCellValue();
            if (v == Math.floor(v)) return String.valueOf((long) v);
            return String.valueOf(v);
        }
        if (ct == CellType.BOOLEAN) {
            return String.valueOf(cell.getBooleanCellValue());
        }
        if (ct == CellType.FORMULA) {
            CellType resultType = cell.getCachedFormulaResultType();
            if (resultType == CellType.BOOLEAN) {
                return String.valueOf(cell.getBooleanCellValue());
            }
            if (resultType == CellType.NUMERIC) {
                double v = cell.getNumericCellValue();
                if (v == Math.floor(v)) return String.valueOf((long) v);
                return String.valueOf(v);
            }
            try {
                return cell.getStringCellValue().trim();
            } catch (Exception e) {
                return "";
            }
        }
        return "";
    }

    private boolean parseBoolean(String value) {
        return "true".equalsIgnoreCase(value) || "1".equals(value)
                || "oui".equalsIgnoreCase(value) || "yes".equalsIgnoreCase(value);
    }

    /**
     * Odoo exporte parfois "101 Capital social" ou "101" ou juste le nom.
     * On extrait le préfixe numérique comme code.
     */
    private String extractCode(String raw) {
        if (raw == null || raw.isEmpty()) return "";
        // ID externe Odoo : "account.account_5711" ou "l10n_cm.account_5711" → extraire la partie après "_"
        if (raw.contains(".") && !raw.contains(" ")) {
            int underscore = raw.lastIndexOf('_');
            if (underscore >= 0) {
                String afterUnderscore = raw.substring(underscore + 1);
                if (!afterUnderscore.isEmpty()) return afterUnderscore;
            }
            return "";
        }
        String[] parts = raw.split("\\s+", 2);
        if (parts[0].matches("[0-9]+[A-Za-z0-9]*")) return parts[0];
        return raw.trim();
    }

    /**
     * Mappe les valeurs account_type d'Odoo vers [accountType, internalType].
     */
    private String[] mapOdooAccountType(String raw) {
        if (raw == null) raw = "";
        String v = raw.trim().toLowerCase();

        if ("asset_receivable".equals(v) || "receivable".equals(v) || "recevable".equals(v)
                || "créances clients".equals(v))
            return new String[]{"asset", "receivable"};
        if ("asset_cash".equals(v) || "bank and cash".equals(v)
                || "liquidités".equals(v) || "banque et liquidités".equals(v)
                || "banque et liquidites".equals(v) || "trésorerie".equals(v))
            return new String[]{"asset", "liquidity"};
        if ("asset_current".equals(v) || "asset_prepayments".equals(v)
                || "asset_non_current".equals(v) || "asset_fixed".equals(v)
                || "current assets".equals(v) || "non-current assets".equals(v)
                || "fixed assets".equals(v) || "prepayments".equals(v)
                || "actif courant".equals(v) || "actif circulant".equals(v)
                || "actif non courant".equals(v) || "actif immobilise".equals(v)
                || "actif immobilisé".equals(v) || "immobilisations".equals(v)
                || "acomptes".equals(v))
            return new String[]{"asset", "other"};
        if ("liability_payable".equals(v) || "payable".equals(v) || "dettes fournisseurs".equals(v))
            return new String[]{"liability", "payable"};
        if ("liability_credit_card".equals(v) || "liability_current".equals(v)
                || "liability_non_current".equals(v) || "current liabilities".equals(v)
                || "non-current liabilities".equals(v) || "passif courant".equals(v)
                || "passif circulant".equals(v) || "passif non courant".equals(v)
                || "carte de crédit".equals(v))
            return new String[]{"liability", "other"};
        if ("equity".equals(v) || "equity_unaffected".equals(v)
                || "capitaux propres".equals(v) || "résultats non affectés".equals(v)
                || "benefices de l'annee en cours".equals(v)
                || "bénéfices de l'année en cours".equals(v))
            return new String[]{"equity", "other"};
        if ("income".equals(v) || "income_other".equals(v) || "other income".equals(v)
                || "produits".equals(v) || "revenus".equals(v) || "autres produits".equals(v))
            return new String[]{"income", "other"};
        if ("expense".equals(v) || "expense_depreciation".equals(v) || "expense_direct_cost".equals(v)
                || "expenses".equals(v) || "depreciation".equals(v) || "cost of revenue".equals(v)
                || "charges".equals(v) || "notes de frais".equals(v)
                || "amortissements".equals(v) || "coût des ventes".equals(v))
            return new String[]{"expense", "other"};
        // Comptes spéciaux / hors bilan → on les traite comme des comptes autres
        if ("comptes speciaux".equals(v) || "comptes spéciaux".equals(v)
                || "hors bilan".equals(v) || "off balance sheet".equals(v))
            return new String[]{"off_balance", "other"};

        return new String[]{"other", "other"};
    }

    /**
     * Mappe les types de journaux Odoo (anglais/français) vers nos valeurs internes.
     */
    private String mapOdooJournalType(String raw) {
        if (raw == null) raw = "";
        String v = raw.trim().toLowerCase();

        if ("sale".equals(v) || "vente".equals(v) || "ventes".equals(v)) return "sale";
        if ("purchase".equals(v) || "achat".equals(v) || "achats".equals(v)) return "purchase";
        if ("cash".equals(v) || "caisse".equals(v) || "espèces".equals(v) || "especes".equals(v)) return "cash";
        if ("bank".equals(v) || "banque".equals(v) || "banques".equals(v)) return "bank";
        return "general";
    }

    private String resolvePartnerType(String isCompanyStr, String typeStr) {
        if ("true".equalsIgnoreCase(isCompanyStr) || "1".equals(isCompanyStr)
                || "company".equalsIgnoreCase(typeStr) || "entreprise".equalsIgnoreCase(typeStr)) {
            return "company";
        }
        return "contact";
    }
}

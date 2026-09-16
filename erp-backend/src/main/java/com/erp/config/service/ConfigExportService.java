package com.erp.config.service;

import com.erp.accounting.entity.AccountAccount;
import com.erp.accounting.entity.AccountJournal;
import com.erp.accounting.entity.Partner;
import com.erp.accounting.repository.AccountAccountRepository;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.accounting.repository.PartnerRepository;
import com.erp.auth.entity.User;
import com.erp.auth.repository.UserRepository;
import com.erp.common.entity.Company;
import com.erp.common.entity.Enlevement;
import com.erp.common.entity.EnlevementClient;
import com.erp.common.repository.CompanyRepository;
import com.erp.common.repository.EnlevementClientRepository;
import com.erp.common.repository.EnlevementRepository;
import com.erp.config.entity.Role;
import com.erp.config.entity.RolePermission;
import com.erp.config.repository.RolePermissionRepository;
import com.erp.config.repository.RoleRepository;
import com.erp.sales.entity.PrixClientArticle;
import com.erp.sales.entity.Ristourne;
import com.erp.sales.repository.PrixClientArticleRepository;
import com.erp.sales.repository.RistourneRepository;
import com.erp.stock.entity.Product;
import com.erp.stock.entity.ProductCategory;
import com.erp.stock.entity.UnitOfMeasure;
import com.erp.stock.repository.ProductCategoryRepository;
import com.erp.stock.repository.ProductRepository;
import com.erp.stock.repository.UnitOfMeasureRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.*;
import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.zip.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class ConfigExportService {

    private final AccountAccountRepository   accountRepo;
    private final AccountJournalRepository   journalRepo;
    private final PartnerRepository          partnerRepo;
    private final ProductCategoryRepository  categoryRepo;
    private final UnitOfMeasureRepository    uomRepo;
    private final ProductRepository          productRepo;
    private final EnlevementRepository       enlevementRepo;
    private final EnlevementClientRepository enlevementClientRepo;
    private final RistourneRepository        ristourneRepo;
    private final PrixClientArticleRepository prixClientRepo;
    private final RoleRepository             roleRepo;
    private final RolePermissionRepository   rolePermissionRepo;
    private final UserRepository             userRepo;
    private final CompanyRepository          companyRepo;
    private final PasswordEncoder            passwordEncoder;

    private static final String APP_NAME       = "Blessing ERP Distributeurs";
    private static final String TEMP_PASSWORD  = "BlessingChange@2025!";

    // ================================================================
    // EXPORT
    // ================================================================

    @Transactional(readOnly = true)
    public byte[] exportConfigZip(Long companyId) throws IOException {
        ObjectMapper mapper = buildMapper();
        ByteArrayOutputStream baos = new ByteArrayOutputStream();

        try (ZipOutputStream zos = new ZipOutputStream(baos, StandardCharsets.UTF_8)) {

            // Manifest
            Map<String, Object> manifest = new LinkedHashMap<>();
            manifest.put("app", APP_NAME);
            manifest.put("type", "config");
            manifest.put("companyId", companyId);
            manifest.put("exportedAt", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
            manifest.put("version", "1.0");
            addEntry(zos, "manifest.json", mapper.writeValueAsBytes(manifest));

            // 1. Plan comptable (comptes OHADA)
            addEntry(zos, "account_accounts.json",
                    mapper.writeValueAsBytes(exportAccounts(companyId)));

            // 2. Journaux comptables
            addEntry(zos, "account_journals.json",
                    mapper.writeValueAsBytes(exportJournals(companyId)));

            // 3. Catégories produits (pas de dépendances)
            addEntry(zos, "product_categories.json",
                    mapper.writeValueAsBytes(exportCategories(companyId)));

            // 3bis. Unités de mesure (pas de dépendances)
            addEntry(zos, "uoms.json",
                    mapper.writeValueAsBytes(exportUoms(companyId)));

            // 2. Produits (dépend des catégories et des unités de mesure)
            addEntry(zos, "products.json",
                    mapper.writeValueAsBytes(exportProducts(companyId)));

            // 3. Partenaires / clients / fournisseurs
            addEntry(zos, "partners.json",
                    mapper.writeValueAsBytes(exportPartners(companyId)));

            // 4. Rôles
            addEntry(zos, "roles.json",
                    mapper.writeValueAsBytes(exportRoles()));

            // 5. Permissions par rôle
            addEntry(zos, "role_permissions.json",
                    mapper.writeValueAsBytes(exportRolePermissions()));

            // 6. Utilisateurs (sans mot de passe)
            addEntry(zos, "users.json",
                    mapper.writeValueAsBytes(exportUsers()));

            // 7. Frais d'enlèvement globaux
            addEntry(zos, "enlevements.json",
                    mapper.writeValueAsBytes(exportEnlevements(companyId)));

            // 8. Frais d'enlèvement par client
            addEntry(zos, "enlevements_clients.json",
                    mapper.writeValueAsBytes(exportEnlevementsClients(companyId)));

            // 9. Ristournes
            addEntry(zos, "ristournes.json",
                    mapper.writeValueAsBytes(exportRistournes(companyId)));

            // 10. Prix clients préférentiels
            addEntry(zos, "prix_clients.json",
                    mapper.writeValueAsBytes(exportPrixClients(companyId)));
        }
        return baos.toByteArray();
    }

    // ---- export helpers ----

    private List<Map<String, Object>> exportAccounts(Long companyId) {
        List<Map<String, Object>> list = new ArrayList<>();
        for (AccountAccount a : accountRepo.findByCompanyIdOrderByCode(companyId)) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("code", a.getCode());
            m.put("name", a.getName());
            m.put("accountType", a.getAccountType());
            m.put("internalType", a.getInternalType());
            m.put("reconcile", a.isReconcile());
            m.put("deprecated", a.isDeprecated());
            list.add(m);
        }
        return list;
    }

    private List<Map<String, Object>> exportJournals(Long companyId) {
        List<Map<String, Object>> list = new ArrayList<>();
        for (AccountJournal j : journalRepo.findByCompanyId(companyId)) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("code", j.getCode());
            m.put("name", j.getName());
            m.put("type", j.getType());
            m.put("active", j.isActive());
            m.put("defaultDebitAccountCode",
                    j.getDefaultDebitAccount() != null ? j.getDefaultDebitAccount().getCode() : null);
            m.put("defaultCreditAccountCode",
                    j.getDefaultCreditAccount() != null ? j.getDefaultCreditAccount().getCode() : null);
            list.add(m);
        }
        return list;
    }

    private List<Map<String, Object>> exportCategories(Long companyId) {
        List<Map<String, Object>> list = new ArrayList<>();
        for (ProductCategory c : categoryRepo.findByCompanyIdOrderByNameAsc(companyId)) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("name", c.getName());
            m.put("code", c.getCode());
            m.put("stockAccountCode", c.getStockAccountCode());
            m.put("stockInAccountCode", c.getStockInAccountCode());
            list.add(m);
        }
        return list;
    }

    private List<Map<String, Object>> exportUoms(Long companyId) {
        List<Map<String, Object>> list = new ArrayList<>();
        for (UnitOfMeasure u : uomRepo.findByCompanyIdOrderByNameAsc(companyId)) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("name", u.getName());
            m.put("code", u.getCode());
            list.add(m);
        }
        return list;
    }

    private List<Map<String, Object>> exportProducts(Long companyId) {
        Map<Long, String> catNames = new HashMap<>();
        categoryRepo.findByCompanyIdOrderByNameAsc(companyId)
                .forEach(c -> catNames.put(c.getId(), c.getName()));

        List<Map<String, Object>> list = new ArrayList<>();
        for (Product p : productRepo.findByCompanyIdOrderByNameAsc(companyId)) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("defaultCode", p.getDefaultCode());
            m.put("name", p.getName());
            m.put("categoryName", p.getCategoryId() != null ? catNames.get(p.getCategoryId()) : null);
            m.put("uomName", p.getUomName());
            m.put("standardPrice", p.getStandardPrice());
            m.put("salePrice", p.getSalePrice());
            m.put("type", p.getType());
            m.put("stockAccountCode", p.getStockAccountCode());
            m.put("description", p.getDescription());
            m.put("exemptTva", p.getExemptTva());
            m.put("active", p.isActive());
            list.add(m);
        }
        return list;
    }

    private List<Map<String, Object>> exportPartners(Long companyId) {
        List<Map<String, Object>> list = new ArrayList<>();
        for (Partner p : partnerRepo.findByCompanyIdAndActiveTrue(companyId)) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("ref", p.getRef());
            m.put("name", p.getName());
            m.put("type", p.getType());
            m.put("phone", p.getPhone());
            m.put("email", p.getEmail());
            m.put("address", p.getAddress());
            m.put("tauxRistourne", p.getTauxRistourne());
            m.put("tauxPrecompte", p.getTauxPrecompte());
            m.put("creditLimit", p.getCreditLimit());
            m.put("receivableAccountCode", p.getReceivableAccountCode());
            m.put("exemptTaxeGuinness", p.isExemptTaxeGuinness());
            m.put("active", p.isActive());
            list.add(m);
        }
        return list;
    }

    private List<Map<String, Object>> exportRoles() {
        List<Map<String, Object>> list = new ArrayList<>();
        for (Role r : roleRepo.findByActiveTrue()) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("code", r.getCode());
            m.put("label", r.getLabel());
            m.put("isSystem", r.isSystem());
            list.add(m);
        }
        return list;
    }

    private List<Map<String, Object>> exportRolePermissions() {
        List<Map<String, Object>> list = new ArrayList<>();
        for (Role r : roleRepo.findByActiveTrue()) {
            if (r.isSystem()) continue;
            for (RolePermission p : rolePermissionRepo.findByRole(r)) {
                Map<String, Object> m = new LinkedHashMap<>();
                m.put("roleCode", r.getCode());
                m.put("module", p.getModule());
                m.put("resource", p.getResource());
                m.put("action", p.getAction());
                list.add(m);
            }
        }
        return list;
    }

    private List<Map<String, Object>> exportUsers() {
        List<Map<String, Object>> list = new ArrayList<>();
        for (User u : userRepo.findByActiveTrue()) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("username", u.getUsername());
            m.put("email", u.getEmail());
            m.put("fullName", u.getFullName());
            m.put("roleCode", u.getRole() != null ? u.getRole().getCode() : null);
            m.put("active", u.isActive());
            m.put("mustChangePassword", u.isMustChangePassword());
            // mot de passe NON exporté pour la sécurité
            list.add(m);
        }
        return list;
    }

    private List<Map<String, Object>> exportEnlevements(Long companyId) {
        List<Map<String, Object>> list = new ArrayList<>();
        for (Enlevement e : enlevementRepo.findByCompanyIdAndActiveTrue(companyId)) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("categoryName", e.getCategory() != null ? e.getCategory().getName() : null);
            m.put("montantFixe", e.getMontantFixe());
            m.put("coutEnlevement", e.getCoutEnlevement());
            m.put("active", e.isActive());
            list.add(m);
        }
        return list;
    }

    private List<Map<String, Object>> exportEnlevementsClients(Long companyId) {
        List<Map<String, Object>> list = new ArrayList<>();
        for (Enlevement e : enlevementRepo.findByCompanyIdAndActiveTrue(companyId)) {
            for (EnlevementClient ec : enlevementClientRepo.findByEnlevementId(e.getId())) {
                Map<String, Object> m = new LinkedHashMap<>();
                m.put("categoryName", e.getCategory() != null ? e.getCategory().getName() : null);
                m.put("partnerRef", ec.getPartner() != null ? ec.getPartner().getRef() : null);
                m.put("partnerName", ec.getPartner() != null ? ec.getPartner().getName() : null);
                m.put("montant", ec.getMontant());
                m.put("supplementAccountCode", ec.getSupplementAccountCode());
                list.add(m);
            }
        }
        return list;
    }

    private List<Map<String, Object>> exportRistournes(Long companyId) {
        List<Map<String, Object>> list = new ArrayList<>();
        for (Ristourne r : ristourneRepo.findByCompanyId(companyId)) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("partnerRef", r.getPartner() != null ? r.getPartner().getRef() : null);
            m.put("partnerName", r.getPartner() != null ? r.getPartner().getName() : null);
            m.put("categoryName", r.getCategory() != null ? r.getCategory().getName() : null);
            m.put("montantFixe", r.getMontantFixe());
            m.put("typeRistourne", r.getTypeRistourne());
            m.put("active", r.isActive());
            list.add(m);
        }
        return list;
    }

    private List<Map<String, Object>> exportPrixClients(Long companyId) {
        Map<Long, String> productCodes = new HashMap<>();
        productRepo.findByCompanyIdOrderByNameAsc(companyId)
                .forEach(p -> productCodes.put(p.getId(), p.getDefaultCode() != null ? p.getDefaultCode() : p.getName()));

        Map<Long, Partner> partnersById = new HashMap<>();
        partnerRepo.findByCompanyId(companyId).forEach(p -> partnersById.put(p.getId(), p));

        List<Map<String, Object>> list = new ArrayList<>();
        for (PrixClientArticle px : prixClientRepo.findByCompanyId(companyId)) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("productCode", productCodes.get(px.getProductId()));
            Partner partner = partnersById.get(px.getClientId());
            m.put("partnerRef", partner != null ? partner.getRef() : null);
            m.put("partnerName", partner != null ? partner.getName() : null);
            m.put("prixClient", px.getPrixClient());
            list.add(m);
        }
        return list;
    }

    // ================================================================
    // IMPORT
    // ================================================================

    @Transactional
    public ImportResult importConfigZip(byte[] zipData, Long companyId) throws IOException {
        ObjectMapper mapper = buildMapper();
        ImportResult result = new ImportResult();

        Map<String, byte[]> files = new LinkedHashMap<>();
        try (ZipInputStream zis = new ZipInputStream(
                new ByteArrayInputStream(zipData), StandardCharsets.UTF_8)) {
            ZipEntry entry;
            while ((entry = zis.getNextEntry()) != null) {
                files.put(entry.getName(), zis.readAllBytes());
                zis.closeEntry();
            }
        }

        // Valider le manifest
        byte[] manifestBytes = files.get("manifest.json");
        if (manifestBytes == null) throw new IllegalArgumentException("Fichier manifest.json manquant dans le ZIP");
        Map<String, Object> manifest = mapper.readValue(manifestBytes, new TypeReference<>() {});
        boolean appNameOk = APP_NAME.equals(manifest.get("app")) || "K.I.R.A Distributeurs".equals(manifest.get("app"));
        if (!appNameOk || !"config".equals(manifest.get("type"))) {
            throw new IllegalArgumentException("Ce fichier n'est pas une sauvegarde de configuration " + APP_NAME + " valide");
        }

        Company company = companyRepo.findById(companyId)
                .orElseThrow(() -> new IllegalArgumentException("Société introuvable : " + companyId));

        TypeReference<List<Map<String, Object>>> listType = new TypeReference<>() {};

        // Ordre d'import respectant les dépendances
        if (files.containsKey("account_accounts.json"))
            result.accounts = importAccounts(mapper.readValue(files.get("account_accounts.json"), listType), company);

        if (files.containsKey("account_journals.json"))
            result.journals = importJournals(mapper.readValue(files.get("account_journals.json"), listType), company);

        if (files.containsKey("product_categories.json"))
            result.categories = importCategories(mapper.readValue(files.get("product_categories.json"), listType), companyId);

        if (files.containsKey("uoms.json"))
            result.uoms = importUoms(mapper.readValue(files.get("uoms.json"), listType), companyId);

        if (files.containsKey("products.json"))
            result.products = importProducts(mapper.readValue(files.get("products.json"), listType), companyId);

        if (files.containsKey("partners.json"))
            result.partners = importPartners(mapper.readValue(files.get("partners.json"), listType), company);

        if (files.containsKey("roles.json"))
            result.roles = importRoles(mapper.readValue(files.get("roles.json"), listType));

        if (files.containsKey("role_permissions.json"))
            result.permissions = importRolePermissions(mapper.readValue(files.get("role_permissions.json"), listType));

        if (files.containsKey("users.json"))
            result.users = importUsers(mapper.readValue(files.get("users.json"), listType));

        if (files.containsKey("enlevements.json"))
            result.enlevements = importEnlevements(mapper.readValue(files.get("enlevements.json"), listType), companyId);

        if (files.containsKey("enlevements_clients.json"))
            result.enlevementsClients = importEnlevementsClients(
                    mapper.readValue(files.get("enlevements_clients.json"), listType), companyId);

        if (files.containsKey("ristournes.json"))
            result.ristournes = importRistournes(mapper.readValue(files.get("ristournes.json"), listType), companyId);

        if (files.containsKey("prix_clients.json"))
            result.prixClients = importPrixClients(mapper.readValue(files.get("prix_clients.json"), listType), companyId);

        return result;
    }

    // ---- import helpers ----

    private int importAccounts(List<Map<String, Object>> rows, Company company) {
        int count = 0;
        for (Map<String, Object> row : rows) {
            String code = str(row, "code");
            String name = str(row, "name");
            if (code == null || name == null) continue;
            AccountAccount a = accountRepo.findByCodeAndCompanyId(code, company.getId()).orElse(null);
            if (a == null) a = AccountAccount.builder().code(code).company(company).build();
            a.setName(name);
            a.setAccountType(str(row, "accountType"));
            a.setInternalType(str(row, "internalType"));
            a.setReconcile(bool(row, "reconcile"));
            a.setDeprecated(bool(row, "deprecated"));
            accountRepo.save(a);
            count++;
        }
        return count;
    }

    private int importJournals(List<Map<String, Object>> rows, Company company) {
        int count = 0;
        Long companyId = company.getId();
        for (Map<String, Object> row : rows) {
            String code = str(row, "code");
            String name = str(row, "name");
            if (code == null || name == null) continue;
            AccountJournal j = journalRepo.findByCodeAndCompanyId(code, companyId).orElse(null);
            if (j == null) j = AccountJournal.builder().code(code).company(company).build();
            j.setName(name);
            j.setType(str(row, "type"));
            j.setActive(row.get("active") == null || bool(row, "active"));
            String debitCode  = str(row, "defaultDebitAccountCode");
            String creditCode = str(row, "defaultCreditAccountCode");
            if (debitCode  != null) accountRepo.findByCodeAndCompanyId(debitCode,  companyId).ifPresent(j::setDefaultDebitAccount);
            if (creditCode != null) accountRepo.findByCodeAndCompanyId(creditCode, companyId).ifPresent(j::setDefaultCreditAccount);
            journalRepo.save(j);
            count++;
        }
        return count;
    }

    private int importCategories(List<Map<String, Object>> rows, Long companyId) {
        int count = 0;
        for (Map<String, Object> row : rows) {
            String name = str(row, "name");
            if (name == null) continue;
            ProductCategory cat = categoryRepo.findByNameIgnoreCaseAndCompanyId(name, companyId)
                    .orElse(ProductCategory.builder().name(name).companyId(companyId).build());
            cat.setCode(str(row, "code"));
            cat.setStockAccountCode(str(row, "stockAccountCode"));
            cat.setStockInAccountCode(str(row, "stockInAccountCode"));
            categoryRepo.save(cat);
            count++;
        }
        return count;
    }

    private int importUoms(List<Map<String, Object>> rows, Long companyId) {
        int count = 0;
        for (Map<String, Object> row : rows) {
            String name = str(row, "name");
            if (name == null) continue;
            UnitOfMeasure u = uomRepo.findByNameIgnoreCaseAndCompanyId(name, companyId)
                    .orElse(UnitOfMeasure.builder().name(name).companyId(companyId).build());
            u.setCode(str(row, "code"));
            uomRepo.save(u);
            count++;
        }
        return count;
    }

    private int importProducts(List<Map<String, Object>> rows, Long companyId) {
        Map<String, Long> catIds = new HashMap<>();
        categoryRepo.findByCompanyIdOrderByNameAsc(companyId)
                .forEach(c -> catIds.put(c.getName().toLowerCase(), c.getId()));
        Map<String, Long> uomIds = new HashMap<>();
        uomRepo.findByCompanyIdOrderByNameAsc(companyId)
                .forEach(u -> uomIds.put(u.getName().toLowerCase(), u.getId()));

        int count = 0;
        for (Map<String, Object> row : rows) {
            String code = str(row, "defaultCode");
            String name = str(row, "name");
            if (name == null) continue;

            Product p = (code != null
                    ? productRepo.findFirstByDefaultCodeAndCompanyId(code, companyId).orElse(null)
                    : null);
            if (p == null) {
                p = Product.builder().companyId(companyId).build();
            }
            p.setDefaultCode(code);
            p.setName(name);
            String catName = str(row, "categoryName");
            if (catName != null) p.setCategoryId(catIds.get(catName.toLowerCase()));
            String uomName = str(row, "uomName");
            p.setUomName(uomName);
            p.setUnitOfMeasureId(uomName != null ? uomIds.get(uomName.toLowerCase()) : null);
            p.setStandardPrice(decimal(row, "standardPrice"));
            p.setSalePrice(decimal(row, "salePrice"));
            p.setType(str(row, "type") != null ? str(row, "type") : "product");
            p.setStockAccountCode(str(row, "stockAccountCode"));
            p.setDescription(str(row, "description"));
            p.setExemptTva(bool(row, "exemptTva"));
            p.setActive(row.get("active") == null || bool(row, "active"));
            productRepo.save(p);
            count++;
        }
        return count;
    }

    private int importPartners(List<Map<String, Object>> rows, Company company) {
        int count = 0;
        Long companyId = company.getId();
        for (Map<String, Object> row : rows) {
            String ref  = str(row, "ref");
            String name = str(row, "name");
            if (name == null) continue;

            Partner p = null;
            if (ref != null)
                p = partnerRepo.findFirstByRefAndCompanyId(ref, companyId).orElse(null);
            if (p == null)
                p = partnerRepo.findFirstByNameAndCompanyId(name, companyId).orElse(null);
            boolean isNew = (p == null);
            if (isNew)
                p = Partner.builder().company(company).build();

            p.setRef(ref);
            p.setName(name);
            p.setType(str(row, "type"));
            p.setPhone(str(row, "phone"));
            p.setEmail(str(row, "email"));
            p.setAddress(str(row, "address"));
            p.setTauxRistourne(decimal(row, "tauxRistourne"));
            p.setTauxPrecompte(decimal(row, "tauxPrecompte"));
            p.setCreditLimit(decimal(row, "creditLimit"));
            p.setReceivableAccountCode(str(row, "receivableAccountCode"));
            p.setExemptTaxeGuinness(bool(row, "exemptTaxeGuinness"));
            // Ne jamais désactiver un partenaire existant via l'import ;
            // les partenaires exportés sont toujours actifs.
            if (isNew) p.setActive(true);
            partnerRepo.save(p);
            count++;
        }
        return count;
    }

    private int importRoles(List<Map<String, Object>> rows) {
        int count = 0;
        for (Map<String, Object> row : rows) {
            String code  = str(row, "code");
            String label = str(row, "label");
            if (label == null) continue;
            if (Boolean.TRUE.equals(row.get("isSystem"))) continue; // ne jamais écraser les rôles système

            Role r = code != null
                    ? roleRepo.findByCode(code).orElse(Role.builder().code(code).build())
                    : Role.builder().build();
            r.setLabel(label);
            r.setSystem(false);
            r.setActive(true);
            roleRepo.save(r);
            count++;
        }
        return count;
    }

    private int importRolePermissions(List<Map<String, Object>> rows) {
        int count = 0;
        for (Map<String, Object> row : rows) {
            String roleCode = str(row, "roleCode");
            String module   = str(row, "module");
            String resource = str(row, "resource");
            String action   = str(row, "action");
            if (roleCode == null || module == null || action == null) continue;

            Role role = roleRepo.findByCode(roleCode).orElse(null);
            if (role == null) continue;

            boolean exists = rolePermissionRepo.findByRole(role).stream()
                    .anyMatch(p -> module.equals(p.getModule())
                            && Objects.equals(resource, p.getResource())
                            && action.equals(p.getAction()));
            if (!exists) {
                rolePermissionRepo.save(RolePermission.builder()
                        .role(role).module(module).resource(resource).action(action).build());
                count++;
            }
        }
        return count;
    }

    private int importUsers(List<Map<String, Object>> rows) {
        int count = 0;
        for (Map<String, Object> row : rows) {
            String username = str(row, "username");
            if (username == null) continue;

            // Ne jamais modifier un compte utilisateur existant lors d'un import de config :
            // cela évite de rétrograder des rôles ou de casser des accès en cours.
            boolean alreadyExists = userRepo.findByUsername(username).isPresent();
            if (alreadyExists) continue;

            User u = User.builder()
                    .username(username)
                    .password(passwordEncoder.encode(TEMP_PASSWORD))
                    .email(str(row, "email"))
                    .fullName(str(row, "fullName"))
                    .active(true)
                    .mustChangePassword(true)
                    .build();

            String roleCode = str(row, "roleCode");
            if (roleCode != null) {
                roleRepo.findByCode(roleCode).ifPresent(u::setRole);
            }
            userRepo.save(u);
            count++;
        }
        return count;
    }

    private int importEnlevements(List<Map<String, Object>> rows, Long companyId) {
        Map<String, ProductCategory> catLookup = buildCategoryLookup(companyId);
        int count = 0;
        for (Map<String, Object> row : rows) {
            String catName = str(row, "categoryName");
            if (catName == null) continue;

            ProductCategory cat = catLookup.get(catName.toLowerCase());
            if (cat == null) { log.warn("Config import: catégorie '{}' introuvable, enlèvement ignoré", catName); continue; }

            Enlevement e = enlevementRepo.findByCategoryIdAndCompanyId(cat.getId(), companyId).orElse(null);
            if (e == null) e = Enlevement.builder().category(cat).companyId(companyId).build();
            e.setMontantFixe(decimal(row, "montantFixe"));
            e.setCoutEnlevement(decimal(row, "coutEnlevement"));
            e.setActive(row.get("active") == null || bool(row, "active"));
            enlevementRepo.save(e);
            count++;
        }
        return count;
    }

    private int importEnlevementsClients(List<Map<String, Object>> rows, Long companyId) {
        Map<String, ProductCategory> catLookup = buildCategoryLookup(companyId);
        PartnerLookup partnerLookup = buildPartnerLookup(companyId);
        int count = 0;
        for (Map<String, Object> row : rows) {
            String catName = str(row, "categoryName");
            if (catName == null) continue;

            ProductCategory cat = catLookup.get(catName.toLowerCase());
            if (cat == null) continue;

            Enlevement enlevement = enlevementRepo.findByCategoryIdAndCompanyId(cat.getId(), companyId).orElse(null);
            if (enlevement == null) continue;

            Partner partner = resolvePartner(partnerLookup, str(row, "partnerRef"), str(row, "partnerName"));
            if (partner == null) continue;

            EnlevementClient ec = enlevementClientRepo
                    .findByEnlevementIdAndPartnerId(enlevement.getId(), partner.getId()).orElse(null);
            if (ec == null)
                ec = EnlevementClient.builder().enlevement(enlevement).partner(partner).build();
            ec.setMontant(decimal(row, "montant"));
            ec.setSupplementAccountCode(str(row, "supplementAccountCode"));
            enlevementClientRepo.save(ec);
            count++;
        }
        return count;
    }

    private int importRistournes(List<Map<String, Object>> rows, Long companyId) {
        Map<String, ProductCategory> catLookup = buildCategoryLookup(companyId);
        PartnerLookup partnerLookup = buildPartnerLookup(companyId);
        int count = 0;
        for (Map<String, Object> row : rows) {
            String catName = str(row, "categoryName");
            if (catName == null) continue;

            ProductCategory cat = catLookup.get(catName.toLowerCase());
            if (cat == null) continue;

            Partner partner = resolvePartner(partnerLookup, str(row, "partnerRef"), str(row, "partnerName"));
            if (partner == null) continue;

            Ristourne r = ristourneRepo
                    .findByPartnerIdAndCategoryIdAndCompanyId(partner.getId(), cat.getId(), companyId).orElse(null);
            if (r == null)
                r = Ristourne.builder().partner(partner).category(cat).companyId(companyId).build();
            r.setMontantFixe(decimal(row, "montantFixe"));
            r.setTypeRistourne(str(row, "typeRistourne"));
            r.setActive(row.get("active") == null || bool(row, "active"));
            ristourneRepo.save(r);
            count++;
        }
        return count;
    }

    private int importPrixClients(List<Map<String, Object>> rows, Long companyId) {
        Map<String, Long> productIdsByCode = new HashMap<>();
        Map<String, Long> productIdsByName = new HashMap<>();
        productRepo.findByCompanyIdOrderByNameAsc(companyId).forEach(p -> {
            if (p.getDefaultCode() != null) productIdsByCode.put(p.getDefaultCode(), p.getId());
            productIdsByName.put(p.getName().toLowerCase(), p.getId());
        });
        PartnerLookup partnerLookup = buildPartnerLookup(companyId);

        int count = 0;
        for (Map<String, Object> row : rows) {
            String productCode = str(row, "productCode");
            Long productId = productCode != null ? productIdsByCode.get(productCode) : null;
            if (productId == null && productCode != null)
                productId = productIdsByName.get(productCode.toLowerCase());
            if (productId == null) continue;

            Partner partner = resolvePartner(partnerLookup, str(row, "partnerRef"), str(row, "partnerName"));
            if (partner == null) continue;

            PrixClientArticle px = prixClientRepo
                    .findByProductIdAndClientIdAndCompanyId(productId, partner.getId(), companyId).orElse(null);
            if (px == null)
                px = PrixClientArticle.builder()
                        .productId(productId).clientId(partner.getId()).companyId(companyId).build();
            px.setPrixClient(decimal(row, "prixClient"));
            prixClientRepo.save(px);
            count++;
        }
        return count;
    }

    // ================================================================
    // HELPERS
    // ================================================================

    /** Lookup partenaire précalculé (par ref exacte, par nom exact — mêmes règles de résolution que
     *  findFirstByRefAndCompanyId/findFirstByNameAndCompanyId) pour éviter jusqu'à 2 requêtes PAR
     *  LIGNE dans importEnlevementsClients/importRistournes/importPrixClients : sur un import avec
     *  des centaines de lignes de tarifs/ristournes clients, ça ramenait des centaines de requêtes
     *  répétées pour le même ensemble, restreint, de partenaires de la société. */
    private static final class PartnerLookup {
        final Map<String, Partner> byRef = new HashMap<>();
        final Map<String, Partner> byName = new HashMap<>();
    }

    private PartnerLookup buildPartnerLookup(Long companyId) {
        PartnerLookup lookup = new PartnerLookup();
        for (Partner p : partnerRepo.findByCompanyId(companyId)) {
            if (p.getRef() != null) lookup.byRef.putIfAbsent(p.getRef(), p);
            lookup.byName.putIfAbsent(p.getName(), p);
        }
        return lookup;
    }

    private Partner resolvePartner(PartnerLookup lookup, String ref, String name) {
        if (ref != null) {
            Partner p = lookup.byRef.get(ref);
            if (p != null) return p;
        }
        if (name != null) return lookup.byName.get(name);
        return null;
    }

    /** Même préchargement pour les catégories (findByNameIgnoreCaseAndCompanyId appelé par ligne
     *  dans importEnlevements/importEnlevementsClients/importRistournes). */
    private Map<String, ProductCategory> buildCategoryLookup(Long companyId) {
        Map<String, ProductCategory> lookup = new HashMap<>();
        categoryRepo.findByCompanyIdOrderByNameAsc(companyId)
                .forEach(c -> lookup.putIfAbsent(c.getName().toLowerCase(), c));
        return lookup;
    }

    private String str(Map<String, Object> m, String key) {
        Object v = m.get(key);
        return v instanceof String s && !s.isBlank() ? s : null;
    }

    private BigDecimal decimal(Map<String, Object> m, String key) {
        Object v = m.get(key);
        if (v == null) return null;
        try { return new BigDecimal(v.toString()); } catch (NumberFormatException e) { return null; }
    }

    private boolean bool(Map<String, Object> m, String key) {
        Object v = m.get(key);
        if (v instanceof Boolean b) return b;
        return "true".equalsIgnoreCase(String.valueOf(v));
    }

    private void addEntry(ZipOutputStream zos, String name, byte[] data) throws IOException {
        zos.putNextEntry(new ZipEntry(name));
        zos.write(data);
        zos.closeEntry();
    }

    private ObjectMapper buildMapper() {
        return new ObjectMapper()
                .registerModule(new JavaTimeModule())
                .disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS)
                .enable(SerializationFeature.INDENT_OUTPUT);
    }

    // ================================================================
    // RESULT DTO
    // ================================================================

    public static class ImportResult {
        public int accounts        = 0;
        public int journals        = 0;
        public int categories      = 0;
        public int uoms            = 0;
        public int products        = 0;
        public int partners        = 0;
        public int roles           = 0;
        public int permissions     = 0;
        public int users           = 0;
        public int enlevements     = 0;
        public int enlevementsClients = 0;
        public int ristournes      = 0;
        public int prixClients     = 0;

        public String summary() {
            return String.format(
                "Comptes: %d | Journaux: %d | Catégories: %d | UDM: %d | Produits: %d | Partenaires: %d | " +
                "Rôles: %d | Permissions: %d | Utilisateurs: %d | Enlèvements: %d | " +
                "Enlèv. clients: %d | Ristournes: %d | Prix clients: %d",
                accounts, journals, categories, uoms, products, partners,
                roles, permissions, users, enlevements, enlevementsClients, ristournes, prixClients);
        }
    }
}

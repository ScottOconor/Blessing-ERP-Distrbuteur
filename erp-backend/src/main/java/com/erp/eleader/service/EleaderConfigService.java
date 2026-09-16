package com.erp.eleader.service;

import com.erp.accounting.entity.AccountJournal;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.common.ConsigneCodes;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.common.service.TenantGuard;
import com.erp.eleader.dto.EleaderConfigDTO;
import com.erp.eleader.dto.EleaderEmballageMappingDTO;
import com.erp.eleader.entity.EleaderConfig;
import com.erp.eleader.entity.EleaderEmballageMapping;
import com.erp.eleader.repository.EleaderConfigRepository;
import com.erp.eleader.repository.EleaderEmballageMappingRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class EleaderConfigService {

    private final EleaderConfigRepository configRepo;
    private final EleaderEmballageMappingRepository mappingRepo;
    private final AccountJournalRepository journalRepo;
    private final CompanyRepository companyRepo;
    private final TenantGuard tenantGuard;

    // ─────────────────────────────────────────────────────────────────────────

    /** Rechargement initial des codes consigne depuis toutes les configs en DB. */
    @EventListener(ApplicationReadyEvent.class)
    @Transactional(readOnly = true)
    public void onApplicationReady() {
        List<EleaderConfig> configs = configRepo.findAll();
        configs.forEach(cfg -> {
            Long companyId = cfg.getCompany() != null ? cfg.getCompany().getId() : null;
            if (companyId != null) {
                ConsigneCodes.refresh(companyId, buildExtraCodes(cfg));
            }
        });
        log.info("ConsigneCodes initialisés au démarrage pour {} sociétés", configs.size());
    }

    // ─────────────────────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public EleaderConfigDTO getConfig(Long companyId) {
        tenantGuard.check(companyId);
        return configRepo.findByCompanyId(companyId)
                .map(this::toDTO)
                .orElseGet(() -> EleaderConfigDTO.builder()
                        .companyId(companyId)
                        .psaProductCode("PRC01")
                        .fraisEnlevementCode("ELV01")
                        .autoConfirm(false)
                        .emballageMappings(List.of())
                        .extraConsigneCodes(List.of())
                        .build());
    }

    public EleaderConfigDTO saveConfig(EleaderConfigDTO dto) {
        tenantGuard.check(dto.getCompanyId());

        // ── Validation des doublons ──────────────────────────────────────────
        validateMappingDuplicates(dto.getEmballageMappings());
        validateConsigneCodes(dto.getExtraConsigneCodes());

        // ── Chargement / création de la config ──────────────────────────────
        Company company = companyRepo.findById(dto.getCompanyId())
                .orElseThrow(() -> new EntityNotFoundException("Société introuvable"));

        EleaderConfig config = configRepo.findByCompanyId(dto.getCompanyId())
                .orElseGet(() -> EleaderConfig.builder().company(company).build());

        if (dto.getJournalId() != null) {
            AccountJournal journal = journalRepo.findById(dto.getJournalId())
                    .orElseThrow(() -> new EntityNotFoundException("Journal introuvable : " + dto.getJournalId()));
            config.setJournal(journal);
        } else {
            config.setJournal(null);
        }

        config.setPsaProductCode(dto.getPsaProductCode() != null ? dto.getPsaProductCode().trim().toUpperCase() : "PRC01");
        config.setFraisEnlevementCode(dto.getFraisEnlevementCode() != null ? dto.getFraisEnlevementCode().trim().toUpperCase() : "ELV01");
        config.setAutoConfirm(dto.isAutoConfirm());

        // Extra consigne codes → CSV
        config.setExtraConsigneCodes(serializeConsigneCodes(dto.getExtraConsigneCodes()));

        // ── Emballage mappings ───────────────────────────────────────────────
        // Flush les suppressions (orphanRemoval) AVANT les insertions pour éviter
        // la violation de contrainte unique (config_id, eleader_code, invoice_model).
        config.getEmballageMappings().clear();
        configRepo.saveAndFlush(config);

        if (dto.getEmballageMappings() != null) {
            for (EleaderEmballageMappingDTO m : dto.getEmballageMappings()) {
                if (m.getEleaderCode() == null || m.getEleaderCode().isBlank()) continue;
                if (m.getErpProductCode() == null || m.getErpProductCode().isBlank()) continue;
                config.getEmballageMappings().add(EleaderEmballageMapping.builder()
                        .config(config)
                        .eleaderCode(m.getEleaderCode().trim().toUpperCase())
                        .erpProductCode(m.getErpProductCode().trim().toUpperCase())
                        .invoiceModel(m.getInvoiceModel() != null ? m.getInvoiceModel() : "ALL")
                        .build());
            }
        }

        EleaderConfig saved = configRepo.save(config);

        // ── Rechargement immédiat des codes consigne ─────────────────────────
        ConsigneCodes.refresh(dto.getCompanyId(), buildExtraCodes(saved));
        log.info("ConsigneCodes rechargés après sauvegarde config (companyId={})", dto.getCompanyId());

        return toDTO(saved);
    }

    public EleaderEmballageMappingDTO addMapping(Long companyId, EleaderEmballageMappingDTO dto) {
        tenantGuard.check(companyId);
        EleaderConfig config = configRepo.findByCompanyId(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Configuration eLeader introuvable — enregistrez d'abord la configuration."));

        // Vérifier doublon sur le code eLeader + modèle
        String newKey = dto.getEleaderCode().trim().toUpperCase() + "|" +
                (dto.getInvoiceModel() != null ? dto.getInvoiceModel().toUpperCase() : "ALL");
        boolean duplicate = config.getEmballageMappings().stream().anyMatch(m ->
                (m.getEleaderCode() + "|" + m.getInvoiceModel()).toUpperCase().equals(newKey));
        if (duplicate) {
            throw new IllegalArgumentException(
                    "Code eLeader '" + dto.getEleaderCode() + "' déjà mappé pour le modèle " + dto.getInvoiceModel());
        }

        EleaderEmballageMapping mapping = EleaderEmballageMapping.builder()
                .config(config)
                .eleaderCode(dto.getEleaderCode().trim().toUpperCase())
                .erpProductCode(dto.getErpProductCode().trim().toUpperCase())
                .invoiceModel(dto.getInvoiceModel() != null ? dto.getInvoiceModel() : "ALL")
                .build();

        config.getEmballageMappings().add(mapping);
        EleaderConfig saved = configRepo.save(config);
        ConsigneCodes.refresh(companyId, buildExtraCodes(saved));
        return toMappingDTO(mapping);
    }

    public void deleteMapping(Long mappingId) {
        EleaderEmballageMapping mapping = mappingRepo.findById(mappingId)
                .orElseThrow(() -> new EntityNotFoundException("Mapping introuvable : " + mappingId));
        EleaderConfig config = mapping.getConfig();
        Long companyId = config.getCompany() != null ? config.getCompany().getId() : null;
        tenantGuard.check(companyId);
        config.getEmballageMappings().removeIf(m -> m.getId() != null && m.getId().equals(mappingId));
        EleaderConfig saved = configRepo.save(config);
        ConsigneCodes.refresh(companyId, buildExtraCodes(saved));
    }

    /**
     * Résout le code produit ERP depuis un code eLeader en cherchant
     * uniquement dans les mappings configurés dans l'application.
     * Si aucun mapping n'est trouvé, retourne le code eLeader brut.
     */
    public String resolveErpCode(EleaderConfig config, String eleaderCode, String invoiceModel) {
        if (eleaderCode == null) return null;
        String code = eleaderCode.trim().toUpperCase();

        if (config != null && config.getEmballageMappings() != null) {
            for (EleaderEmballageMapping m : config.getEmballageMappings()) {
                if (m.getEleaderCode().equalsIgnoreCase(code)) {
                    String model = m.getInvoiceModel();
                    if ("ALL".equalsIgnoreCase(model) || model.equalsIgnoreCase(invoiceModel)) {
                        return m.getErpProductCode();
                    }
                }
            }
        }

        log.warn("Aucun mapping configuré pour le code eLeader '{}' (modèle: {}). Code brut utilisé.", code, invoiceModel);
        return code;
    }

    // ─── Helpers privés ───────────────────────────────────────────────────────

    /**
     * Construit le jeu de codes supplémentaires à passer à ConsigneCodes.refresh()
     * à partir d'une config : psaProductCode + fraisEnlevementCode + erpProductCodes des mappings + extraConsigneCodes.
     */
    private Set<String> buildExtraCodes(EleaderConfig config) {
        Set<String> extra = new HashSet<>();
        if (config.getEmballageMappings() != null) {
            config.getEmballageMappings().stream()
                    .map(EleaderEmballageMapping::getErpProductCode)
                    .filter(c -> c != null && !c.isBlank())
                    .forEach(c -> extra.add(c.trim().toUpperCase()));
        }
        if (config.getExtraConsigneCodes() != null && !config.getExtraConsigneCodes().isBlank()) {
            Arrays.stream(config.getExtraConsigneCodes().split(","))
                    .filter(c -> !c.isBlank())
                    .forEach(c -> extra.add(c.trim().toUpperCase()));
        }
        return extra;
    }

    /** Valide qu'il n'y a pas de doublon eleaderCode+invoiceModel dans la liste. */
    private void validateMappingDuplicates(List<EleaderEmballageMappingDTO> mappings) {
        if (mappings == null || mappings.isEmpty()) return;
        Set<String> seen = new LinkedHashSet<>();
        for (EleaderEmballageMappingDTO m : mappings) {
            if (m.getEleaderCode() == null || m.getEleaderCode().isBlank()) continue;
            String key = m.getEleaderCode().trim().toUpperCase() + "|" +
                    (m.getInvoiceModel() != null ? m.getInvoiceModel().toUpperCase() : "ALL");
            if (!seen.add(key)) {
                throw new IllegalArgumentException(
                        "Code eLeader en double : '" + m.getEleaderCode().trim().toUpperCase() +
                        "' (modèle " + m.getInvoiceModel() + "). Supprimez le doublon avant d'enregistrer.");
            }
        }
    }

    /** Valide qu'il n'y a pas de doublon dans les codes consigne supplémentaires. */
    private void validateConsigneCodes(List<String> codes) {
        if (codes == null || codes.isEmpty()) return;
        Set<String> seen = new LinkedHashSet<>();
        for (String c : codes) {
            if (c == null || c.isBlank()) continue;
            String up = c.trim().toUpperCase();
            if (!seen.add(up)) {
                throw new IllegalArgumentException(
                        "Code consigne en double : '" + up + "'. Supprimez le doublon avant d'enregistrer.");
            }
        }
    }

    /** Sérialise la liste de codes consigne en CSV pour la colonne TEXT. */
    private String serializeConsigneCodes(List<String> codes) {
        if (codes == null || codes.isEmpty()) return null;
        String csv = codes.stream()
                .filter(c -> c != null && !c.isBlank())
                .map(c -> c.trim().toUpperCase())
                .distinct()
                .sorted()
                .collect(Collectors.joining(","));
        return csv.isBlank() ? null : csv;
    }

    /** Désérialise le CSV de la colonne en liste. */
    private List<String> deserializeConsigneCodes(String csv) {
        if (csv == null || csv.isBlank()) return List.of();
        return Arrays.stream(csv.split(","))
                .filter(c -> !c.isBlank())
                .map(String::trim)
                .sorted()
                .collect(Collectors.toList());
    }

    // ─── Mappers ─────────────────────────────────────────────────────────────

    private EleaderConfigDTO toDTO(EleaderConfig c) {
        return EleaderConfigDTO.builder()
                .id(c.getId())
                .companyId(c.getCompany() != null ? c.getCompany().getId() : null)
                .journalId(c.getJournal() != null ? c.getJournal().getId() : null)
                .journalName(c.getJournal() != null ? c.getJournal().getName() : null)
                .psaProductCode(c.getPsaProductCode())
                .fraisEnlevementCode(c.getFraisEnlevementCode())
                .autoConfirm(c.isAutoConfirm())
                .emballageMappings(c.getEmballageMappings().stream().map(this::toMappingDTO).collect(Collectors.toList()))
                .extraConsigneCodes(deserializeConsigneCodes(c.getExtraConsigneCodes()))
                .build();
    }

    private EleaderEmballageMappingDTO toMappingDTO(EleaderEmballageMapping m) {
        return EleaderEmballageMappingDTO.builder()
                .id(m.getId())
                .eleaderCode(m.getEleaderCode())
                .erpProductCode(m.getErpProductCode())
                .invoiceModel(m.getInvoiceModel())
                .build();
    }
}

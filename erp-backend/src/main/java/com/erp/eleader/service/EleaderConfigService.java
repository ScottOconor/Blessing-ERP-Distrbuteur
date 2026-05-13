package com.erp.eleader.service;

import com.erp.accounting.entity.AccountJournal;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.eleader.dto.EleaderConfigDTO;
import com.erp.eleader.dto.EleaderEmballageMappingDTO;
import com.erp.eleader.entity.EleaderConfig;
import com.erp.eleader.entity.EleaderEmballageMapping;
import com.erp.eleader.repository.EleaderConfigRepository;
import com.erp.eleader.repository.EleaderEmballageMappingRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
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

    // ─────────────────────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public EleaderConfigDTO getConfig(Long companyId) {
        return configRepo.findByCompanyId(companyId)
                .map(this::toDTO)
                .orElseGet(() -> EleaderConfigDTO.builder()
                        .companyId(companyId)
                        .psaProductCode("PRC01")
                        .fraisEnlevementCode("ELV01")
                        .autoConfirm(false)
                        .emballageMappings(List.of())
                        .build());
    }

    public EleaderConfigDTO saveConfig(EleaderConfigDTO dto) {
        Company company = companyRepo.findById(dto.getCompanyId())
                .orElseThrow(() -> new EntityNotFoundException("Société introuvable"));

        EleaderConfig config = configRepo.findByCompanyId(dto.getCompanyId())
                .orElseGet(() -> EleaderConfig.builder().company(company).build());

        if (dto.getJournalId() != null) {
            AccountJournal journal = journalRepo.findById(dto.getJournalId())
                    .orElseThrow(() -> new EntityNotFoundException("Journal introuvable: " + dto.getJournalId()));
            config.setJournal(journal);
        } else {
            config.setJournal(null);
        }

        config.setPsaProductCode(dto.getPsaProductCode() != null ? dto.getPsaProductCode() : "PRC01");
        config.setFraisEnlevementCode(dto.getFraisEnlevementCode() != null ? dto.getFraisEnlevementCode() : "ELV01");
        config.setAutoConfirm(dto.isAutoConfirm());

        config.getEmballageMappings().clear();
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

        return toDTO(configRepo.save(config));
    }

    public EleaderEmballageMappingDTO addMapping(Long companyId, EleaderEmballageMappingDTO dto) {
        EleaderConfig config = configRepo.findByCompanyId(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Configuration eLeader introuvable — enregistrez d'abord la configuration."));

        EleaderEmballageMapping mapping = EleaderEmballageMapping.builder()
                .config(config)
                .eleaderCode(dto.getEleaderCode().trim().toUpperCase())
                .erpProductCode(dto.getErpProductCode().trim().toUpperCase())
                .invoiceModel(dto.getInvoiceModel() != null ? dto.getInvoiceModel() : "ALL")
                .build();

        config.getEmballageMappings().add(mapping);
        configRepo.save(config);
        return toMappingDTO(mapping);
    }

    public void deleteMapping(Long mappingId) {
        EleaderEmballageMapping mapping = mappingRepo.findById(mappingId)
                .orElseThrow(() -> new EntityNotFoundException("Mapping introuvable: " + mappingId));
        EleaderConfig config = mapping.getConfig();
        config.getEmballageMappings().removeIf(m -> m.getId() != null && m.getId().equals(mappingId));
        configRepo.save(config);
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

    // ─────────────────────────────────────────────────────────────────────────

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

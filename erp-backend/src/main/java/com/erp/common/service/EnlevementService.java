package com.erp.common.service;

import com.erp.accounting.entity.Partner;
import com.erp.accounting.repository.PartnerRepository;
import com.erp.common.dto.EnlevementDTO;
import com.erp.common.entity.Enlevement;
import com.erp.common.entity.EnlevementClient;
import com.erp.common.repository.EnlevementClientRepository;
import com.erp.common.repository.EnlevementRepository;
import com.erp.stock.entity.ProductCategory;
import com.erp.stock.repository.ProductCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class EnlevementService {

    private final EnlevementRepository enlevementRepo;
    private final EnlevementClientRepository enlevementClientRepo;
    private final ProductCategoryRepository categoryRepo;
    private final PartnerRepository partnerRepo;

    @Transactional(readOnly = true)
    public List<EnlevementDTO> getAll(Long companyId) {
        return enlevementRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    public EnlevementDTO save(EnlevementDTO dto) {
        ProductCategory cat = categoryRepo.findById(dto.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("Catégorie introuvable"));

        Enlevement entity = enlevementRepo.findByCategoryIdAndCompanyId(dto.getCategoryId(), dto.getCompanyId())
                .orElse(Enlevement.builder().build());
        entity.setCategory(cat);
        entity.setMontantFixe(dto.getMontantFixe());
        entity.setCoutEnlevement(dto.getCoutEnlevement());
        entity.setCompanyId(dto.getCompanyId());
        entity.setActive(true);
        Enlevement saved = enlevementRepo.save(entity);

        // Sync client tariffs
        if (dto.getClients() != null) {
            // Remove old ones not in new list
            List<Long> newPartnerIds = dto.getClients().stream()
                    .map(EnlevementDTO.EnlevementClientDTO::getPartnerId).collect(Collectors.toList());
            enlevementClientRepo.findByEnlevementId(saved.getId())
                    .stream()
                    .filter(ec -> !newPartnerIds.contains(ec.getPartner().getId()))
                    .forEach(enlevementClientRepo::delete);

            for (EnlevementDTO.EnlevementClientDTO clientDto : dto.getClients()) {
                Partner partner = partnerRepo.findById(clientDto.getPartnerId())
                        .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));
                EnlevementClient ec = enlevementClientRepo
                        .findByEnlevementIdAndPartnerId(saved.getId(), clientDto.getPartnerId())
                        .orElse(EnlevementClient.builder().build());
                ec.setEnlevement(saved);
                ec.setPartner(partner);
                ec.setMontant(clientDto.getMontant());
                ec.setSupplementAccountCode(clientDto.getSupplementAccountCode());
                enlevementClientRepo.save(ec);
            }
        }
        return toDTO(saved);
    }

    public void delete(Long id) {
        Enlevement e = enlevementRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Enlèvement introuvable"));
        e.setActive(false);
        enlevementRepo.save(e);
    }

    /**
     * Import bulk d'enlèvements depuis Excel.
     * Colonnes attendues : Catégorie d'article, Montant de l'enlèvement, Actif
     */
    public List<EnlevementDTO> importEnlevements(List<EnlevementImportRow> rows, Long companyId) {
        List<EnlevementDTO> result = new ArrayList<>();
        for (EnlevementImportRow row : rows) {
            try {
                java.util.Optional<ProductCategory> catOpt =
                        categoryRepo.findByNameIgnoreCaseAndCompanyId(row.getCategoryName(), companyId);
                if (catOpt.isEmpty()) continue;

                EnlevementDTO dto = EnlevementDTO.builder()
                        .categoryId(catOpt.get().getId())
                        .montantFixe(row.getMontantFixe() != null ? row.getMontantFixe() : java.math.BigDecimal.ZERO)
                        .coutEnlevement(row.getCoutEnlevement() != null ? row.getCoutEnlevement() : java.math.BigDecimal.ZERO)
                        .companyId(companyId)
                        .build();
                result.add(save(dto));
            } catch (Exception ignored) {}
        }
        return result;
    }

    @lombok.Data
    public static class EnlevementImportRow {
        private String categoryName;
        private java.math.BigDecimal montantFixe;
        private java.math.BigDecimal coutEnlevement;
        private Boolean active;
    }

    private EnlevementDTO toDTO(Enlevement e) {
        List<EnlevementDTO.EnlevementClientDTO> clients = enlevementClientRepo
                .findByEnlevementId(e.getId())
                .stream()
                .map(ec -> EnlevementDTO.EnlevementClientDTO.builder()
                        .id(ec.getId())
                        .partnerId(ec.getPartner().getId())
                        .partnerName(ec.getPartner().getName())
                        .montant(ec.getMontant())
                        .supplementAccountCode(ec.getSupplementAccountCode())
                        .build())
                .collect(Collectors.toList());
        return EnlevementDTO.builder()
                .id(e.getId())
                .categoryId(e.getCategory().getId())
                .categoryName(e.getCategory().getName())
                .montantFixe(e.getMontantFixe())
                .coutEnlevement(e.getCoutEnlevement())
                .companyId(e.getCompanyId())
                .active(e.isActive())
                .clients(clients)
                .build();
    }
}

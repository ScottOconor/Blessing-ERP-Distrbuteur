package com.erp.common.service;

import com.erp.accounting.entity.Partner;
import com.erp.accounting.repository.PartnerRepository;
import com.erp.common.dto.PrecompteDTO;
import com.erp.common.entity.Precompte;
import com.erp.common.repository.PrecompteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class PrecompteService {

    public static final String[] TAUX_ALLOWED = {"1", "2", "2.5", "5", "10"};

    private final PrecompteRepository precompteRepo;
    private final PartnerRepository partnerRepo;

    @Transactional(readOnly = true)
    public List<PrecompteDTO> getAll(Long companyId) {
        return precompteRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<PrecompteDTO> getByPartner(Long partnerId, Long companyId) {
        return precompteRepo.findByPartnerIdAndCompanyId(partnerId, companyId)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    public PrecompteDTO save(PrecompteDTO dto) {
        Partner partner = partnerRepo.findById(dto.getPartnerId())
                .orElseThrow(() -> new IllegalArgumentException("Partenaire introuvable"));
        Precompte entity = precompteRepo.findByPartnerIdAndTypePrecompteAndCompanyId(
                dto.getPartnerId(), dto.getTypePrecompte(), dto.getCompanyId())
                .orElse(Precompte.builder().build());
        entity.setPartner(partner);
        entity.setTypePrecompte(dto.getTypePrecompte());
        entity.setTauxPrecompte(dto.getTauxPrecompte());
        entity.setCompanyId(dto.getCompanyId());
        entity.setActive(true);
        return toDTO(precompteRepo.save(entity));
    }

    public void delete(Long id) {
        Precompte p = precompteRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Précompte introuvable"));
        p.setActive(false);
        precompteRepo.save(p);
    }

    private PrecompteDTO toDTO(Precompte p) {
        return PrecompteDTO.builder()
                .id(p.getId())
                .partnerId(p.getPartner().getId())
                .partnerName(p.getPartner().getName())
                .typePrecompte(p.getTypePrecompte())
                .tauxPrecompte(p.getTauxPrecompte())
                .companyId(p.getCompanyId())
                .active(p.isActive())
                .build();
    }
}

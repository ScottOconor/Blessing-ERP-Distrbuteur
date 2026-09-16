package com.erp.config.service;

import com.erp.config.dto.RemoteAgencyDTO;
import com.erp.config.entity.RemoteAgency;
import com.erp.config.repository.RemoteAgencyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class RemoteAgencyService {

    private final RemoteAgencyRepository repo;
    private final RestTemplate           restTemplate;

    @Transactional(readOnly = true)
    public List<RemoteAgencyDTO> getAll() {
        return repo.findByActiveTrueOrderByNameAsc().stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<RemoteAgencyDTO> getAllIncludingInactive() {
        return repo.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public RemoteAgencyDTO get(Long id) {
        return toDTO(repo.findById(id).orElseThrow(() -> new IllegalArgumentException("Agence distante introuvable")));
    }

    @Transactional
    public RemoteAgencyDTO create(RemoteAgencyDTO dto) {
        if (repo.existsByCode(dto.getCode()))
            throw new IllegalArgumentException("Code déjà utilisé : " + dto.getCode());
        return toDTO(repo.save(fromDTO(new RemoteAgency(), dto)));
    }

    @Transactional
    public RemoteAgencyDTO update(Long id, RemoteAgencyDTO dto) {
        RemoteAgency agency = repo.findById(id).orElseThrow(() -> new IllegalArgumentException("Agence distante introuvable"));
        if (repo.existsByCodeAndIdNot(dto.getCode(), id))
            throw new IllegalArgumentException("Code déjà utilisé : " + dto.getCode());
        return toDTO(repo.save(fromDTO(agency, dto)));
    }

    @Transactional
    public void toggle(Long id) {
        RemoteAgency a = repo.findById(id).orElseThrow();
        a.setActive(!a.isActive());
        repo.save(a);
    }

    @Transactional
    public void delete(Long id) {
        repo.deleteById(id);
    }

    /** Teste la connectivité vers l'agence distante via GET /api/inter-agency/health */
    public RemoteAgencyDTO ping(Long id) {
        RemoteAgency a = repo.findById(id).orElseThrow();
        RemoteAgencyDTO dto = toDTO(a);
        String url = a.getBaseUrl() + "/api/inter-agency/health";
        dto.setPingUrl(url);
        try {
            org.springframework.http.HttpHeaders headers = new org.springframework.http.HttpHeaders();
            if (a.getApiKey() != null && !a.getApiKey().isBlank())
                headers.set("X-Api-Key", a.getApiKey());
            var entity = new org.springframework.http.HttpEntity<Void>(headers);
            restTemplate.exchange(url, org.springframework.http.HttpMethod.GET, entity, String.class);
            dto.setReachable(true);
        } catch (Exception e) {
            log.warn("Agence distante {} ({}) injoignable : {}", a.getName(), url, e.getMessage());
            dto.setReachable(false);
            dto.setPingError(e.getMessage());
        }
        return dto;
    }

    // ── Helpers ──────────────────────────────────────────────────────────────

    private RemoteAgencyDTO toDTO(RemoteAgency a) {
        return RemoteAgencyDTO.builder()
                .id(a.getId()).name(a.getName()).code(a.getCode())
                .host(a.getHost()).port(a.getPort())
                .apiKey(a.getApiKey())
                .location(a.getLocation()).contactPerson(a.getContactPerson())
                .phone(a.getPhone()).email(a.getEmail()).notes(a.getNotes())
                .active(a.isActive()).baseUrl(a.getBaseUrl())
                .createdAt(a.getCreatedAt())
                .build();
    }

    private RemoteAgency fromDTO(RemoteAgency a, RemoteAgencyDTO dto) {
        a.setName(dto.getName());
        a.setCode(dto.getCode().toUpperCase().trim());
        a.setHost(dto.getHost() != null ? dto.getHost().trim() : null);
        a.setPort(dto.getPort());
        a.setApiKey(dto.getApiKey() != null ? dto.getApiKey().trim() : null);
        a.setLocation(dto.getLocation());
        a.setContactPerson(dto.getContactPerson());
        a.setPhone(dto.getPhone());
        a.setEmail(dto.getEmail());
        a.setNotes(dto.getNotes());
        a.setActive(dto.isActive());
        return a;
    }
}

package com.erp.config.controller;

import com.erp.config.dto.RemoteAgencyDTO;
import com.erp.config.service.RemoteAgencyService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/config/remote-agencies")
@RequiredArgsConstructor
public class RemoteAgencyController {

    private final RemoteAgencyService service;

    @GetMapping
    public List<RemoteAgencyDTO> getAll(@RequestParam(defaultValue = "false") boolean all) {
        return all ? service.getAllIncludingInactive() : service.getAll();
    }

    @GetMapping("/{id}")
    public RemoteAgencyDTO get(@PathVariable Long id) {
        return service.get(id);
    }

    @PostMapping
    public RemoteAgencyDTO create(@Valid @RequestBody RemoteAgencyDTO dto) {
        return service.create(dto);
    }

    @PutMapping("/{id}")
    public RemoteAgencyDTO update(@PathVariable Long id, @Valid @RequestBody RemoteAgencyDTO dto) {
        return service.update(id, dto);
    }

    @PostMapping("/{id}/toggle")
    public ResponseEntity<Void> toggle(@PathVariable Long id) {
        service.toggle(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    /** Teste la connectivité vers l'agence distante */
    @GetMapping("/{id}/ping")
    public RemoteAgencyDTO ping(@PathVariable Long id) {
        return service.ping(id);
    }
}

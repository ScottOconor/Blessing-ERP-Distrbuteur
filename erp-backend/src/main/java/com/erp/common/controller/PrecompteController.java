package com.erp.common.controller;

import com.erp.common.dto.PrecompteDTO;
import com.erp.common.service.PrecompteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/precomptes")
@RequiredArgsConstructor
public class PrecompteController {

    private final PrecompteService service;

    @GetMapping
    public ResponseEntity<List<PrecompteDTO>> getAll(@RequestParam Long companyId) {
        return ResponseEntity.ok(service.getAll(companyId));
    }

    @GetMapping("/partner/{partnerId}")
    public ResponseEntity<List<PrecompteDTO>> getByPartner(
            @PathVariable Long partnerId,
            @RequestParam Long companyId) {
        return ResponseEntity.ok(service.getByPartner(partnerId, companyId));
    }

    @PostMapping
    public ResponseEntity<PrecompteDTO> save(@RequestBody PrecompteDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}

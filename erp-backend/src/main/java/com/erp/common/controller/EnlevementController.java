package com.erp.common.controller;

import com.erp.common.dto.EnlevementDTO;
import com.erp.common.service.EnlevementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/enlevements")
@RequiredArgsConstructor
public class EnlevementController {

    private final EnlevementService service;

    @GetMapping
    public ResponseEntity<List<EnlevementDTO>> getAll(@RequestParam Long companyId) {
        return ResponseEntity.ok(service.getAll(companyId));
    }

    @PostMapping
    public ResponseEntity<EnlevementDTO> save(@RequestBody EnlevementDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/import")
    public ResponseEntity<List<EnlevementDTO>> importEnlevements(
            @RequestParam Long companyId,
            @RequestBody List<EnlevementService.EnlevementImportRow> rows) {
        return ResponseEntity.ok(service.importEnlevements(rows, companyId));
    }
}

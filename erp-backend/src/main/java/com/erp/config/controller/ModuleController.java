package com.erp.config.controller;

import com.erp.config.dto.ModuleStateDTO;
import com.erp.config.service.ModuleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/** Installation/désinstallation des modules métier (écran « Applications »). */
@RestController
@RequestMapping("/api/config/modules")
@RequiredArgsConstructor
public class ModuleController {

    private final ModuleService moduleService;

    @GetMapping
    public ResponseEntity<List<ModuleStateDTO>> getModules(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(moduleService.getModuleStates(companyId));
    }

    @PutMapping("/{code}")
    public ResponseEntity<ModuleStateDTO> setInstalled(@PathVariable String code,
                                                        @RequestParam("companyId") Long companyId,
                                                        @RequestParam("installed") boolean installed) {
        return ResponseEntity.ok(moduleService.setInstalled(companyId, code, installed));
    }
}

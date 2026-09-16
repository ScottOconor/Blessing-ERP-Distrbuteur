package com.erp.license.controller;

import com.erp.license.LicenseService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.Map;

/** Endpoints consommés par le frontend Angular pour savoir quel écran afficher. */
@RestController
@RequestMapping("/api/license")
@RequiredArgsConstructor
public class LicenseController {

    private final LicenseService licenseService;

    @Value("${sync.spoke.id:}")
    private String spokeId;

    @GetMapping("/self-status")
    public ResponseEntity<Map<String, Object>> selfStatus() {
        licenseService.refreshIfWaitingForActivation();
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("status", licenseService.getStatus().name());
        body.put("expiresAt", licenseService.getCachedExpiresAt());
        body.put("spokeId", spokeId);
        body.put("contactEmail", licenseService.getCachedContactEmail());
        body.put("contactPhone", licenseService.getCachedContactPhone());
        body.put("message", licenseService.getCachedMessage());
        return ResponseEntity.ok(body);
    }

    @PostMapping("/request-activation")
    public ResponseEntity<Map<String, Object>> requestActivation(@RequestBody Map<String, String> body) {
        licenseService.requestActivation(body.get("contactEmail"), body.get("contactPhone"));
        return selfStatus();
    }
}

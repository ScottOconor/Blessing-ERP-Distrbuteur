package com.erp.accounting.controller;

import com.erp.accounting.dto.AnalyticAccountDTO;
import com.erp.accounting.dto.AnalyticLineDTO;
import com.erp.accounting.service.AnalyticService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/analytic")
@RequiredArgsConstructor
public class AnalyticController {

    private final AnalyticService analyticService;

    // ===== COMPTES ANALYTIQUES =====

    @GetMapping("/accounts")
    public ResponseEntity<List<AnalyticAccountDTO>> getAccounts(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(analyticService.getAllAccounts(companyId));
    }

    @GetMapping("/accounts/tree")
    public ResponseEntity<List<AnalyticAccountDTO>> getAccountTree(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(analyticService.getAccountTree(companyId));
    }

    @PostMapping("/accounts")
    public ResponseEntity<AnalyticAccountDTO> createAccount(@RequestBody AnalyticAccountDTO dto) {
        return ResponseEntity.ok(analyticService.createAccount(dto));
    }

    @PutMapping("/accounts/{id}")
    public ResponseEntity<AnalyticAccountDTO> updateAccount(@PathVariable("id") Long id,
                                                             @RequestBody AnalyticAccountDTO dto) {
        return ResponseEntity.ok(analyticService.updateAccount(id, dto));
    }

    @DeleteMapping("/accounts/{id}")
    public ResponseEntity<Void> deleteAccount(@PathVariable("id") Long id) {
        analyticService.deleteAccount(id);
        return ResponseEntity.noContent().build();
    }

    // ===== LIGNES ANALYTIQUES =====

    @GetMapping("/lines")
    public ResponseEntity<StreamingResponseBody> getLines(
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "analyticAccountId", required = false) Long analyticAccountId,
            @RequestParam(name = "from", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(name = "to", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to) {
        StreamingResponseBody body = out -> analyticService.streamLines(companyId, analyticAccountId, from, to, out);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(body);
    }

    // ===== RECALCUL =====

    /**
     * Régénère toutes les lignes analytiques à partir des écritures validées.
     * À appeler une fois pour initialiser les données existantes.
     */
    @PostMapping("/recalculate")
    public ResponseEntity<java.util.Map<String, Object>> recalculate(@RequestParam("companyId") Long companyId) {
        int count = analyticService.recalculateAnalyticLines(companyId);
        return ResponseEntity.ok(java.util.Map.of(
            "success", true,
            "linesGenerated", count,
            "message", count + " ligne(s) analytique(s) générée(s)"
        ));
    }

    // ===== RAPPORT BALANCE ANALYTIQUE =====

    @GetMapping("/report/balance")
    public ResponseEntity<List<AnalyticService.AnalyticBalanceLine>> getBalance(
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "from", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(name = "to", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to) {
        return ResponseEntity.ok(analyticService.getAnalyticBalance(companyId, from, to));
    }
}

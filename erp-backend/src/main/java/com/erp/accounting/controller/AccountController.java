package com.erp.accounting.controller;

import com.erp.accounting.dto.*;
import com.erp.accounting.service.AccountingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/accounting")
@RequiredArgsConstructor
@Slf4j
public class AccountController {

    private final AccountingService accountingService;

    // ===================== ACCOUNTS =====================

    @GetMapping("/accounts")
    public ResponseEntity<List<AccountAccountDTO>> getAccounts(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(accountingService.getAllAccounts(companyId));
    }

    @PostMapping("/accounts")
    public ResponseEntity<AccountAccountDTO> createAccount(@Valid @RequestBody AccountAccountDTO dto) {
        return ResponseEntity.ok(accountingService.createAccount(dto));
    }

    @PutMapping("/accounts/{id}")
    public ResponseEntity<AccountAccountDTO> updateAccount(@PathVariable("id") Long id,
                                                            @Valid @RequestBody AccountAccountDTO dto) {
        return ResponseEntity.ok(accountingService.updateAccount(id, dto));
    }

    @DeleteMapping("/accounts/{id}")
    public ResponseEntity<Void> deleteAccount(@PathVariable("id") Long id) {
        accountingService.deleteAccount(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/accounts/{id}/toggle-deprecated")
    public ResponseEntity<AccountAccountDTO> toggleAccountDeprecated(@PathVariable("id") Long id) {
        return ResponseEntity.ok(accountingService.toggleAccountDeprecated(id));
    }

    // ===================== JOURNALS =====================

    @GetMapping("/journals")
    public ResponseEntity<List<AccountJournalDTO>> getJournals(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(accountingService.getAllJournals(companyId));
    }

    @PostMapping("/journals")
    public ResponseEntity<AccountJournalDTO> createJournal(@Valid @RequestBody AccountJournalDTO dto) {
        return ResponseEntity.ok(accountingService.createJournal(dto));
    }

    @PutMapping("/journals/{id}")
    public ResponseEntity<AccountJournalDTO> updateJournal(@PathVariable("id") Long id,
                                                            @Valid @RequestBody AccountJournalDTO dto) {
        return ResponseEntity.ok(accountingService.updateJournal(id, dto));
    }

    // ===================== MOVES =====================

    @GetMapping("/moves")
    public ResponseEntity<List<AccountMoveDTO>> getMoves(
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "journalId", required = false) Long journalId,
            @RequestParam(name = "from", required = false) LocalDate from,
            @RequestParam(name = "to", required = false) LocalDate to) {
        return ResponseEntity.ok(accountingService.getJournalEntries(companyId, journalId, from, to));
    }

    @GetMapping("/moves/{id}")
    public ResponseEntity<AccountMoveDTO> getMove(@PathVariable("id") Long id) {
        return ResponseEntity.ok(accountingService.getJournalEntry(id));
    }

    @PostMapping("/moves")
    public ResponseEntity<AccountMoveDTO> createMove(@Valid @RequestBody JournalEntryRequest request) {
        return ResponseEntity.ok(accountingService.createJournalEntry(request));
    }

    @PutMapping("/moves/{id}")
    public ResponseEntity<AccountMoveDTO> updateMove(@PathVariable("id") Long id,
                                                      @Valid @RequestBody JournalEntryRequest request) {
        return ResponseEntity.ok(accountingService.updateJournalEntry(id, request));
    }

    @PostMapping("/moves/{id}/post")
    public ResponseEntity<AccountMoveDTO> postMove(@PathVariable("id") Long id) {
        return ResponseEntity.ok(accountingService.postEntry(id));
    }

    @PostMapping("/moves/{id}/cancel")
    public ResponseEntity<AccountMoveDTO> cancelMove(@PathVariable("id") Long id) {
        return ResponseEntity.ok(accountingService.cancelEntry(id));
    }

    // ===================== PARTNERS =====================

    @GetMapping("/partners")
    public ResponseEntity<List<PartnerDTO>> getPartners(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(accountingService.getAllPartners(companyId));
    }

    @PostMapping("/partners")
    public ResponseEntity<PartnerDTO> createPartner(@Valid @RequestBody PartnerDTO dto) {
        return ResponseEntity.ok(accountingService.createPartner(dto));
    }
}

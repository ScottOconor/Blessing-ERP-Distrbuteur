package com.erp.accounting.controller;

import com.erp.accounting.dto.*;
import com.erp.accounting.service.AccountingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;
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

    @DeleteMapping("/journals/{id}")
    public ResponseEntity<Void> deleteJournal(@PathVariable("id") Long id) {
        try {
            accountingService.deleteJournal(id);
            return ResponseEntity.noContent().build();
        } catch (IllegalStateException e) {
            return ResponseEntity.status(409).build();
        }
    }

    // ===================== MOVES =====================

    @GetMapping("/moves")
    public ResponseEntity<StreamingResponseBody> getMoves(
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "journalId", required = false) Long journalId,
            @RequestParam(name = "dateFrom", required = false) LocalDate dateFrom,
            @RequestParam(name = "dateTo",   required = false) LocalDate dateTo,
            @RequestParam(name = "state",    required = false) String state,
            @RequestParam(name = "pageSize", required = false) Integer pageSize) {
        StreamingResponseBody body = out -> accountingService.streamJournalEntries(companyId, journalId, dateFrom, dateTo, state, pageSize, out);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(body);
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

    @PostMapping("/moves/{id}/reverse")
    public ResponseEntity<AccountMoveDTO> reverseMove(@PathVariable("id") Long id) {
        return ResponseEntity.ok(accountingService.reverseEntry(id));
    }

    @PostMapping("/moves/{id}/reset-to-draft")
    public ResponseEntity<AccountMoveDTO> resetMoveToDraft(@PathVariable("id") Long id) {
        return ResponseEntity.ok(accountingService.resetToDraft(id));
    }

    @GetMapping("/journals/{id}/account-balance")
    public ResponseEntity<java.util.Map<String, Object>> getJournalAccountBalance(
            @PathVariable("id") Long journalId,
            @RequestParam(required = false) Long excludeMoveId) {
        return ResponseEntity.ok(accountingService.getJournalAccountBalance(journalId, excludeMoveId));
    }

    @GetMapping("/journals/{id}/moves")
    public ResponseEntity<StreamingResponseBody> getMovesForJournal(
            @PathVariable("id") Long journalId,
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "dateFrom", required = false) LocalDate dateFrom,
            @RequestParam(name = "dateTo",   required = false) LocalDate dateTo) {
        StreamingResponseBody body = out -> accountingService.streamJournalEntries(companyId, journalId, dateFrom, dateTo, null, null, out);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(body);
    }

    // ===================== SOLDES JOURNALIERS =====================

    @GetMapping("/journals/{id}/daily-balances")
    public ResponseEntity<List<JournalDailyBalanceDTO>> getDailyBalances(@PathVariable("id") Long journalId) {
        return ResponseEntity.ok(accountingService.getDailyBalances(journalId));
    }

    @GetMapping("/journals/{id}/daily-balance")
    public ResponseEntity<JournalDailyBalanceDTO> getDailyBalance(
            @PathVariable("id") Long journalId,
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "date", required = false) LocalDate date) {
        LocalDate effectiveDate = date != null ? date : LocalDate.now();
        return ResponseEntity.ok(accountingService.getDailyBalance(journalId, effectiveDate));
    }

    @PostMapping("/journals/{id}/close-day")
    public ResponseEntity<JournalDailyBalanceDTO> closeDay(
            @PathVariable("id") Long journalId,
            @RequestParam("companyId") Long companyId,
            @RequestParam(name = "date", required = false) LocalDate date) {
        LocalDate effectiveDate = date != null ? date : LocalDate.now();
        return ResponseEntity.ok(accountingService.updateDailyBalance(journalId, companyId, effectiveDate));
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

    @PutMapping("/partners/{id}")
    public ResponseEntity<PartnerDTO> updatePartner(@PathVariable("id") Long id,
                                                     @RequestBody PartnerDTO dto) {
        return ResponseEntity.ok(accountingService.updatePartner(id, dto));
    }

    @DeleteMapping("/partners/{id}")
    public ResponseEntity<Void> deletePartner(@PathVariable("id") Long id) {
        accountingService.deletePartner(id);
        return ResponseEntity.noContent().build();
    }
}

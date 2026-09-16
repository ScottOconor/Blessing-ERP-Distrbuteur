package com.erp.accounting.service;

import com.erp.accounting.dto.FiscalClosureExecuteRequest;
import com.erp.accounting.dto.FiscalClosureExecuteResponse;
import com.erp.accounting.dto.FiscalClosurePreviewRequest;
import com.erp.accounting.dto.FiscalClosurePreviewResponse;
import com.erp.accounting.dto.JournalEntryRequest;
import com.erp.accounting.entity.AccountAccount;
import com.erp.accounting.entity.AccountJournal;
import com.erp.accounting.entity.AccountMove;
import com.erp.accounting.dto.AccountMoveDTO;
import com.erp.accounting.repository.AccountAccountRepository;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.accounting.repository.AccountMoveRepository;
import com.erp.audit.service.AuditService;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.common.service.TenantGuard;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Clôture d'exercice : (1) vérifie qu'aucune écriture non validée ne subsiste sur
 * la période, (2) calcule le résultat net réel à partir des comptes de classe
 * 6/7/8 (ReportService.getProfitLossAccountBalances), (3) à l'exécution, génère
 * une écriture BROUILLON (jamais auto-validée — l'utilisateur la valide lui-même
 * via le bouton habituel) qui solde chaque compte de gestion vers le résultat, et
 * verrouille la période (Company.lockDate).
 */
@Service
@RequiredArgsConstructor
@Transactional
public class FiscalClosureService {

    private static final String CLOSURE_JOURNAL_CODE = "OD";

    private final ReportService reportService;
    private final CompanyRepository companyRepo;
    private final AccountAccountRepository accountRepo;
    private final AccountJournalRepository journalRepo;
    private final AccountMoveRepository moveRepo;
    private final AccountingService accountingService;
    private final AuditService auditService;
    private final TenantGuard tenantGuard;

    @Transactional(readOnly = true)
    public FiscalClosurePreviewResponse preview(FiscalClosurePreviewRequest req) {
        // req.getCompanyId() vient du client — sans ce contrôle, n'importe quel utilisateur
        // authentifié pouvait déclencher une clôture d'exercice (écriture + verrouillage de
        // période) sur UNE AUTRE société en changeant simplement ce champ dans la requête.
        tenantGuard.check(req.getCompanyId());
        List<AccountMove> drafts = moveRepo.findByCompanyIdAndStateAndDateBetweenOrderByDateAscNameAsc(
                req.getCompanyId(), "draft", req.getDateFrom(), req.getDateTo());

        FiscalClosurePreviewResponse.FiscalClosurePreviewResponseBuilder resp = FiscalClosurePreviewResponse.builder()
                .dateFrom(req.getDateFrom()).dateTo(req.getDateTo());

        if (!drafts.isEmpty()) {
            List<FiscalClosurePreviewResponse.BlockingEntry> blockers = drafts.stream()
                    .map(m -> FiscalClosurePreviewResponse.BlockingEntry.builder()
                            .id(m.getId()).name(m.getName()).date(m.getDate())
                            .journalName(m.getJournal() != null ? m.getJournal().getName() : null)
                            .build())
                    .collect(Collectors.toList());
            return resp.blocked(true).blockers(blockers)
                    .netResult(BigDecimal.ZERO).accountBalances(List.of()).build();
        }

        Map<String, BigDecimal> balances = reportService.getProfitLossAccountBalances(
                req.getCompanyId(), req.getDateFrom(), req.getDateTo());

        BigDecimal netResult = BigDecimal.ZERO;
        List<FiscalClosurePreviewResponse.AccountBalanceLine> lines = new ArrayList<>();
        for (Map.Entry<String, BigDecimal> e : balances.entrySet()) {
            netResult = netResult.subtract(e.getValue());
            AccountAccount acc = accountRepo.findFirstByCodeAndCompanyId(e.getKey(), req.getCompanyId()).orElse(null);
            lines.add(FiscalClosurePreviewResponse.AccountBalanceLine.builder()
                    .accountCode(e.getKey())
                    .accountName(acc != null ? acc.getName() : null)
                    .balance(e.getValue())
                    .build());
        }

        return resp.blocked(false).blockers(List.of())
                .netResult(netResult).accountBalances(lines).build();
    }

    public FiscalClosureExecuteResponse execute(FiscalClosureExecuteRequest req) {
        tenantGuard.check(req.getCompanyId());
        List<AccountMove> drafts = moveRepo.findByCompanyIdAndStateAndDateBetweenOrderByDateAscNameAsc(
                req.getCompanyId(), "draft", req.getDateFrom(), req.getDateTo());
        if (!drafts.isEmpty()) {
            throw new IllegalStateException(
                "Impossible de clôturer : " + drafts.size() + " écriture(s) non validée(s) subsistent sur la période. "
                + "Validez ou annulez-les d'abord.");
        }

        Company company = companyRepo.findById(req.getCompanyId())
                .orElseThrow(() -> new EntityNotFoundException("Entreprise introuvable"));

        Map<String, BigDecimal> balances = reportService.getProfitLossAccountBalances(
                req.getCompanyId(), req.getDateFrom(), req.getDateTo());
        if (balances.isEmpty()) {
            throw new IllegalStateException("Aucun mouvement de gestion (classe 6/7/8) sur la période — rien à clôturer.");
        }

        AccountJournal journal = journalRepo.findFirstByCodeAndCompanyId(CLOSURE_JOURNAL_CODE, req.getCompanyId())
                .orElseThrow(() -> new EntityNotFoundException(
                    "Journal des Opérations Diverses (" + CLOSURE_JOURNAL_CODE + ") introuvable pour cette entreprise"));

        BigDecimal netResult = BigDecimal.ZERO;
        List<JournalEntryRequest.LineRequest> lines = new ArrayList<>();
        for (Map.Entry<String, BigDecimal> e : balances.entrySet()) {
            String code = e.getKey();
            BigDecimal balance = e.getValue();
            netResult = netResult.subtract(balance);

            AccountAccount account = accountRepo.findFirstByCodeAndCompanyId(code, req.getCompanyId())
                    .orElseThrow(() -> new EntityNotFoundException("Compte introuvable: " + code));

            boolean isDebitBalance = balance.compareTo(BigDecimal.ZERO) > 0;
            BigDecimal amount = balance.abs();
            lines.add(JournalEntryRequest.LineRequest.builder()
                    .accountId(account.getId())
                    .name("Clôture " + req.getDateFrom() + " → " + req.getDateTo() + " — " + account.getName())
                    // Solder un compte débiteur (charge) se fait au crédit, et inversement.
                    .debit(isDebitBalance ? BigDecimal.ZERO : amount)
                    .credit(isDebitBalance ? amount : BigDecimal.ZERO)
                    .build());
        }

        if (netResult.compareTo(BigDecimal.ZERO) != 0) {
            boolean benefice = netResult.compareTo(BigDecimal.ZERO) > 0;
            Long resultAccountId = benefice ? req.getResultAccountBeneficeId() : req.getResultAccountPerteId();
            AccountAccount resultAccount = accountRepo.findById(resultAccountId)
                    .orElseThrow(() -> new EntityNotFoundException("Compte de résultat introuvable: " + resultAccountId));
            // Le compte de résultat référencé doit appartenir à la même société que la clôture,
            // sinon l'écriture générée mélangerait des comptes de deux sociétés différentes.
            tenantGuard.check(resultAccount.getCompany() != null ? resultAccount.getCompany().getId() : null);
            BigDecimal amount = netResult.abs();
            lines.add(JournalEntryRequest.LineRequest.builder()
                    .accountId(resultAccount.getId())
                    .name("Résultat net de l'exercice (" + (benefice ? "bénéfice" : "perte") + ")")
                    .debit(benefice ? BigDecimal.ZERO : amount)
                    .credit(benefice ? amount : BigDecimal.ZERO)
                    .build());
        }

        JournalEntryRequest closureRequest = JournalEntryRequest.builder()
                .journalId(journal.getId())
                .date(req.getDateTo().plusDays(1))
                .ref("Clôture d'exercice " + req.getDateFrom() + " → " + req.getDateTo())
                .companyId(req.getCompanyId())
                .lines(lines)
                .build();

        // Créée en brouillon par createJournalEntry — l'utilisateur la valide lui-même.
        AccountMoveDTO created = accountingService.createJournalEntry(closureRequest);

        company.setLockDate(req.getDateTo());
        companyRepo.save(company);

        auditService.log("COMPANY", company.getId(), company.getName(),
                "FISCAL_YEAR_CLOSED",
                "Clôture d'exercice du " + req.getDateFrom() + " au " + req.getDateTo()
                + " — écriture " + created.getName() + " (brouillon), résultat net = " + netResult,
                company.getId());

        return FiscalClosureExecuteResponse.builder()
                .moveId(created.getId())
                .moveName(created.getName())
                .netResult(netResult)
                .lockDate(req.getDateTo())
                .build();
    }
}

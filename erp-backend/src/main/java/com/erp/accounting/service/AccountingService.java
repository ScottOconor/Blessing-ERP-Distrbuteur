package com.erp.accounting.service;

import com.erp.accounting.dto.*;
import com.erp.accounting.entity.*;
import com.erp.accounting.repository.*;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.audit.service.AuditService;
import com.erp.common.service.TenantGuard;
import com.erp.sync.service.SyncEventPublisher;
import com.erp.sync.entity.SyncEventType;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;

import jakarta.persistence.criteria.Fetch;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class AccountingService {

    private final AccountAccountRepository accountRepo;
    private final AccountJournalRepository journalRepo;
    private final AccountMoveRepository moveRepo;
    private final AccountMoveLineRepository moveLineRepo;
    private final PartnerRepository partnerRepo;
    private final CompanyRepository companyRepo;
    private final AnalyticAccountRepository analyticAccountRepo;
    private final AnalyticLineRepository analyticLineRepo;
    private final AnalyticDistributionItemRepository analyticDistributionItemRepo;
    private final JournalDailyBalanceRepository dailyBalanceRepo;
    private final SyncEventPublisher syncEventPublisher;
    private final AuditService auditService;
    private final FiscalLockGuard fiscalLockGuard;
    private final TenantGuard tenantGuard;

    // ===================== ACCOUNTS =====================

    @Transactional(readOnly = true)
    public List<AccountAccountDTO> getAllAccounts(Long companyId) {
        return accountRepo.findByCompanyIdOrderByCode(companyId)
                .stream()
                .map(this::toAccountDTO)
                .collect(Collectors.toList());
    }

    public AccountAccountDTO createAccount(AccountAccountDTO dto) {
        // dto.getCompanyId() vient du client — ne jamais lui faire confiance pour choisir sous
        // quelle société le compte est créé.
        Company company = companyRepo.findById(com.erp.auth.SecurityUtils.currentCompanyId())
                .orElseThrow(() -> new EntityNotFoundException("Company not found"));

        AccountAccount account = AccountAccount.builder()
                .code(dto.getCode())
                .name(dto.getName())
                .accountType(dto.getAccountType())
                .internalType(dto.getInternalType())
                .deprecated(dto.isDeprecated())
                .reconcile(dto.isReconcile())
                .company(company)
                .build();

        return toAccountDTO(accountRepo.save(account));
    }

    public AccountAccountDTO updateAccount(Long id, AccountAccountDTO dto) {
        AccountAccount account = accountRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Account not found: " + id));
        tenantGuard.check(account.getCompany() != null ? account.getCompany().getId() : null);

        boolean codeChanged = dto.getCode() != null && !dto.getCode().equals(account.getCode());
        if (codeChanged) {
            Company company = account.getCompany();
            LocalDate lockDate = company != null ? company.getLockDate() : null;
            if (lockDate != null && moveLineRepo.existsPostedByAccountIdUpToDate(id, lockDate)) {
                throw new IllegalStateException(
                    "Impossible de renuméroter ce compte : il porte des écritures validées dans "
                    + "une période clôturée (jusqu'au " + lockDate + ").");
            }
            auditService.log("ACCOUNT_ACCOUNT", account.getId(), account.getName(),
                    "CODE_CHANGED", "Code compte modifié : " + account.getCode() + " → " + dto.getCode(),
                    company != null ? company.getId() : null);
        }

        account.setCode(dto.getCode());
        account.setName(dto.getName());
        account.setAccountType(dto.getAccountType());
        account.setInternalType(dto.getInternalType());
        account.setDeprecated(dto.isDeprecated());
        account.setReconcile(dto.isReconcile());

        return toAccountDTO(accountRepo.save(account));
    }

    public void deleteAccount(Long id) {
        AccountAccount account = accountRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Account not found: " + id));
        tenantGuard.check(account.getCompany() != null ? account.getCompany().getId() : null);
        account.setDeprecated(true);
        accountRepo.save(account);
        auditService.log("ACCOUNT_ACCOUNT", id, account.getName(), "DEPRECATED", "Compte désactivé",
                account.getCompany() != null ? account.getCompany().getId() : null);
    }

    public AccountAccountDTO toggleAccountDeprecated(Long id) {
        AccountAccount account = accountRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Account not found: " + id));
        tenantGuard.check(account.getCompany() != null ? account.getCompany().getId() : null);
        account.setDeprecated(!account.isDeprecated());
        AccountAccountDTO updated = toAccountDTO(accountRepo.save(account));
        auditService.log("ACCOUNT_ACCOUNT", id, account.getName(),
                account.isDeprecated() ? "DEPRECATED" : "REACTIVATED",
                account.isDeprecated() ? "Compte désactivé" : "Compte réactivé",
                account.getCompany() != null ? account.getCompany().getId() : null);
        return updated;
    }

    // ===================== JOURNALS =====================

    @Transactional(readOnly = true)
    public List<AccountJournalDTO> getAllJournals(Long companyId) {
        return journalRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream()
                .map(this::toJournalDTO)
                .collect(Collectors.toList());
    }

    public AccountJournalDTO createJournal(AccountJournalDTO dto) {
        // dto.getCompanyId() vient du client — même correctif que createAccount.
        Company company = companyRepo.findById(com.erp.auth.SecurityUtils.currentCompanyId())
                .orElseThrow(() -> new EntityNotFoundException("Company not found"));

        AccountAccount debitAccount = dto.getDefaultDebitAccountId() != null
                ? accountRepo.findById(dto.getDefaultDebitAccountId()).orElse(null)
                : null;

        AccountAccount creditAccount = dto.getDefaultCreditAccountId() != null
                ? accountRepo.findById(dto.getDefaultCreditAccountId()).orElse(null)
                : null;

        AccountJournal journal = AccountJournal.builder()
                .code(dto.getCode())
                .name(dto.getName())
                .type(dto.getType())
                .defaultDebitAccount(debitAccount)
                .defaultCreditAccount(creditAccount)
                .company(company)
                .active(true)
                .build();

        return toJournalDTO(journalRepo.save(journal));
    }

    public AccountJournalDTO updateJournal(Long id, AccountJournalDTO dto) {
        AccountJournal journal = journalRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Journal not found: " + id));
        tenantGuard.check(journal.getCompany() != null ? journal.getCompany().getId() : null);

        journal.setCode(dto.getCode());
        journal.setName(dto.getName());
        journal.setType(dto.getType());
        journal.setActive(dto.isActive());

        if (dto.getDefaultDebitAccountId() != null) {
            accountRepo.findById(dto.getDefaultDebitAccountId())
                    .ifPresent(journal::setDefaultDebitAccount);
        }
        if (dto.getDefaultCreditAccountId() != null) {
            accountRepo.findById(dto.getDefaultCreditAccountId())
                    .ifPresent(journal::setDefaultCreditAccount);
        }

        AccountJournalDTO updated = toJournalDTO(journalRepo.save(journal));
        auditService.log("ACCOUNT_JOURNAL", id, journal.getName(),
                "UPDATED", "Journal modifié",
                journal.getCompany() != null ? journal.getCompany().getId() : null);
        return updated;
    }

    public void deleteJournal(Long id) {
        AccountJournal journal = journalRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Journal not found: " + id));
        tenantGuard.check(journal.getCompany() != null ? journal.getCompany().getId() : null);
        Long companyId = journal.getCompany() != null ? journal.getCompany().getId() : null;
        String journalName = journal.getName();
        try {
            journalRepo.delete(journal);
            journalRepo.flush();
        } catch (DataIntegrityViolationException e) {
            throw new IllegalStateException("Ce journal contient des écritures comptables et ne peut pas être supprimé.");
        }
        auditService.log("ACCOUNT_JOURNAL", id, journalName, "DELETED", "Journal supprimé", companyId);
    }

    // ===================== JOURNAL ENTRIES =====================

    public AccountMoveDTO createJournalEntry(JournalEntryRequest request) {
        // Verrou pessimiste : sérialise les créations concurrentes sur ce journal jusqu'au commit,
        // pour que generateMoveNumber() (lecture du max de séquence) ne puisse pas être lu par deux
        // transactions avant qu'aucune n'ait encore écrit — sinon même numéro de pièce généré deux fois.
        AccountJournal journal = journalRepo.findByIdForUpdate(request.getJournalId())
                .orElseThrow(() -> new EntityNotFoundException("Journal not found"));

        Company company = companyRepo.findById(request.getCompanyId())
                .orElseThrow(() -> new EntityNotFoundException("Company not found"));
        fiscalLockGuard.assertPeriodOpen(company, request.getDate());

        Partner partner = request.getPartnerId() != null
                ? partnerRepo.findById(request.getPartnerId()).orElse(null)
                : null;

        String moveNumber = generateMoveNumber(journal, request.getDate());

        AccountMove move = AccountMove.builder()
                .name(moveNumber)
                .date(request.getDate())
                .ref(request.getRef())
                .state("draft")
                .journal(journal)
                .company(company)
                .partner(partner)
                .build();

        List<AccountMoveLine> lines = request.getLines().stream()
                .map(lineReq -> {
                    AccountAccount account = accountRepo.findById(lineReq.getAccountId())
                            .orElseThrow(() -> new EntityNotFoundException("Account not found: " + lineReq.getAccountId()));

                    Partner lineParter = lineReq.getPartnerId() != null
                            ? partnerRepo.findById(lineReq.getPartnerId()).orElse(partner)
                            : partner;

                    AnalyticAccount analyticAccount = lineReq.getAnalyticAccountId() != null
                            ? analyticAccountRepo.findById(lineReq.getAnalyticAccountId()).orElse(null)
                            : null;

                    AccountMoveLine line = AccountMoveLine.builder()
                            .move(move)
                            .account(account)
                            .partner(lineParter)
                            .name(lineReq.getName())
                            .date(request.getDate())
                            .debit(lineReq.getDebit() != null ? lineReq.getDebit() : BigDecimal.ZERO)
                            .credit(lineReq.getCredit() != null ? lineReq.getCredit() : BigDecimal.ZERO)
                            .journal(journal)
                            .company(company)
                            .analyticAccount(analyticAccount)
                            .build();

                    if (lineReq.getAnalyticDistributions() != null && !lineReq.getAnalyticDistributions().isEmpty()) {
                        List<AnalyticDistributionItem> distributions = buildDistributions(lineReq.getAnalyticDistributions(), line);
                        line.setAnalyticDistributions(distributions);
                    }
                    return line;
                })
                .collect(Collectors.toList());

        move.setLines(lines);

        BigDecimal totalDebit = lines.stream()
                .map(l -> l.getDebit() != null ? l.getDebit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalCredit = lines.stream()
                .map(l -> l.getCredit() != null ? l.getCredit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        if (totalDebit.compareTo(totalCredit) != 0) {
            throw new IllegalStateException(
                "Pièce non équilibrée : débit=" + totalDebit + " crédit=" + totalCredit
                + " — le principe de la partie double est obligatoire pour tous les journaux.");
        }

        AccountMove saved = moveRepo.save(move);
        auditService.log("ACCOUNT_MOVE", saved.getId(), saved.getName(),
                "CREATED", "Pièce comptable créée", company.getId());
        return toMoveDTO(saved);
    }

    public AccountMoveDTO updateJournalEntry(Long id, JournalEntryRequest request) {
        AccountMove move = moveRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Entry not found: " + id));

        tenantGuard.check(move.getCompany() != null ? move.getCompany().getId() : null);
        if (!"draft".equals(move.getState())) {
            throw new IllegalStateException("Seules les écritures en brouillon peuvent être modifiées");
        }
        fiscalLockGuard.assertPeriodOpen(move.getCompany(), request.getDate());

        AccountJournal journal = journalRepo.findById(request.getJournalId())
                .orElseThrow(() -> new EntityNotFoundException("Journal not found"));

        Partner partner = request.getPartnerId() != null
                ? partnerRepo.findById(request.getPartnerId()).orElse(null)
                : null;

        move.setDate(request.getDate());
        move.setRef(request.getRef());
        move.setJournal(journal);
        move.setPartner(partner);

        move.getLines().clear();

        List<AccountMoveLine> newLines = request.getLines().stream()
                .map(lineReq -> {
                    AccountAccount account = accountRepo.findById(lineReq.getAccountId())
                            .orElseThrow(() -> new EntityNotFoundException("Account not found: " + lineReq.getAccountId()));

                    Partner lineParter = lineReq.getPartnerId() != null
                            ? partnerRepo.findById(lineReq.getPartnerId()).orElse(partner)
                            : partner;

                    AnalyticAccount analyticAccount = lineReq.getAnalyticAccountId() != null
                            ? analyticAccountRepo.findById(lineReq.getAnalyticAccountId()).orElse(null)
                            : null;

                    AccountMoveLine line = AccountMoveLine.builder()
                            .move(move)
                            .account(account)
                            .partner(lineParter)
                            .name(lineReq.getName())
                            .date(request.getDate())
                            .debit(lineReq.getDebit() != null ? lineReq.getDebit() : BigDecimal.ZERO)
                            .credit(lineReq.getCredit() != null ? lineReq.getCredit() : BigDecimal.ZERO)
                            .journal(journal)
                            .company(move.getCompany())
                            .analyticAccount(analyticAccount)
                            .build();

                    if (lineReq.getAnalyticDistributions() != null && !lineReq.getAnalyticDistributions().isEmpty()) {
                        List<AnalyticDistributionItem> distributions = buildDistributions(lineReq.getAnalyticDistributions(), line);
                        line.setAnalyticDistributions(distributions);
                    }
                    return line;
                })
                .collect(Collectors.toList());

        move.getLines().addAll(newLines);

        BigDecimal totalDebitUpd = newLines.stream()
                .map(l -> l.getDebit() != null ? l.getDebit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalCreditUpd = newLines.stream()
                .map(l -> l.getCredit() != null ? l.getCredit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        if (totalDebitUpd.compareTo(totalCreditUpd) != 0) {
            throw new IllegalStateException(
                "Pièce non équilibrée : débit=" + totalDebitUpd + " crédit=" + totalCreditUpd
                + " — le principe de la partie double est obligatoire pour tous les journaux.");
        }

        AccountMoveDTO updated = toMoveDTO(moveRepo.save(move));
        auditService.log("ACCOUNT_MOVE", id, move.getName(),
                "UPDATED", "Écriture brouillon modifiée",
                move.getCompany() != null ? move.getCompany().getId() : null);
        return updated;
    }

    public AccountMoveDTO postEntry(Long moveId) {
        AccountMove move = moveRepo.findById(moveId)
                .orElseThrow(() -> new EntityNotFoundException("Entry not found: " + moveId));

        tenantGuard.check(move.getCompany() != null ? move.getCompany().getId() : null);
        if (!"draft".equals(move.getState())) {
            throw new IllegalStateException("Only draft entries can be posted");
        }
        fiscalLockGuard.assertPeriodOpen(move.getCompany(), move.getDate());

        BigDecimal totalDebitPost = move.getLines().stream()
                .map(l -> l.getDebit() != null ? l.getDebit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalCreditPost = move.getLines().stream()
                .map(l -> l.getCredit() != null ? l.getCredit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        if (totalDebitPost.compareTo(totalCreditPost) != 0) {
            move.getLines().forEach(line -> log.error("Ligne : compte={} débit={} crédit={}",
                    line.getAccount().getCode(), line.getDebit(), line.getCredit()));
            throw new IllegalStateException(
                "Pièce non équilibrée : débit=" + totalDebitPost + " crédit=" + totalCreditPost
                + " — le principe de la partie double est obligatoire pour tous les journaux.");
        }

        moveRepo.updateState(move.getId(), "posted");
        AccountMove saved = moveRepo.findById(move.getId()).orElse(move);

        // Recharger les lignes avec toutes les données analytiques (évite les problèmes de lazy loading)
        List<AccountMoveLine> linesWithAnalytic = moveLineRepo.findByMoveIdWithAnalytic(saved.getId());

        for (AccountMoveLine line : linesWithAnalytic) {
            // Supprimer les éventuelles anciennes lignes analytiques
            analyticLineRepo.deleteByMoveLineId(line.getId());

            // Analytique disponible sur tous les comptes (charges, produits, bilans)
            if (line.getAccount() == null) continue;

            // Montant = débit si non nul, sinon crédit
            BigDecimal debit  = line.getDebit()  != null ? line.getDebit()  : BigDecimal.ZERO;
            BigDecimal credit = line.getCredit() != null ? line.getCredit() : BigDecimal.ZERO;
            BigDecimal chargeAmount = debit.compareTo(BigDecimal.ZERO) != 0 ? debit : credit;
            if (chargeAmount.compareTo(BigDecimal.ZERO) == 0) continue;

            List<AnalyticDistributionItem> distributions = line.getAnalyticDistributions();
            if (distributions != null && !distributions.isEmpty()) {
                // Cas : ventilation multiple — une AnalyticLine par distribution
                for (AnalyticDistributionItem dist : distributions) {
                    if (dist.getAnalyticAccount() == null) continue;
                    AnalyticLine al = AnalyticLine.builder()
                            .date(line.getDate())
                            .name(line.getName())
                            .amount(dist.getAmount())
                            .analyticAccount(dist.getAnalyticAccount())
                            .moveLine(line)
                            .generalAccount(line.getAccount())
                            .company(line.getCompany())
                            .build();
                    analyticLineRepo.save(al);
                }
            } else if (line.getAnalyticAccount() != null) {
                // Cas : compte analytique unique sans ventilation
                AnalyticLine al = AnalyticLine.builder()
                        .date(line.getDate())
                        .name(line.getName())
                        .amount(chargeAmount)
                        .analyticAccount(line.getAnalyticAccount())
                        .moveLine(line)
                        .generalAccount(line.getAccount())
                        .company(line.getCompany())
                        .build();
                analyticLineRepo.save(al);
            }
        }

        log.info("Lignes analytiques générées pour l'écriture {} : {} ligne(s)",
                saved.getName(), linesWithAnalytic.stream()
                        .filter(l -> l.getAnalyticAccount() != null ||
                                (l.getAnalyticDistributions() != null && !l.getAnalyticDistributions().isEmpty()))
                        .count());

        // Recharger l'écriture depuis la DB : clearAutomatically=true sur deleteByMoveLineId
        // vide le cache Hibernate, ce qui détache 'saved' et rend ses collections lazy inaccessibles.
        AccountMove reloaded = moveRepo.findById(moveId)
                .orElseThrow(() -> new EntityNotFoundException("Entry not found after post: " + moveId));

        // Mettre à jour le solde journalier du journal concerné
        updateDailyBalance(reloaded.getJournal().getId(), reloaded.getCompany().getId(), reloaded.getDate());

        // Traçabilité postedBy
        moveRepo.findById(moveId).ifPresent(m -> {
            m.setPostedBy(auditService.getCurrentUsername());
            m.setPostedAt(java.time.LocalDateTime.now());
            moveRepo.save(m);
        });

        // Si c'est une re-publication après remise en brouillon, logger le diff des modifications
        if (reloaded.getResetToDraftBy() != null && reloaded.getLinesSnapshot() != null) {
            String diffDetails = buildLinesDiff(reloaded.getLinesSnapshot(), reloaded.getLines());
            if (diffDetails != null) {
                auditService.log("ACCOUNT_MOVE", moveId, reloaded.getName(),
                        "LINES_MODIFIED", "Lignes modifiées après remise en brouillon",
                        diffDetails,
                        reloaded.getCompany() != null ? reloaded.getCompany().getId() : null);
            }
            // Effacer le snapshot — l'historique est dans l'audit
            moveRepo.findById(moveId).ifPresent(m -> { m.setLinesSnapshot(null); moveRepo.save(m); });
        }

        AccountMoveDTO moveResult = toMoveDTO(reloaded);
        syncEventPublisher.publish(SyncEventType.ACCOUNT_MOVE_POSTED, String.valueOf(moveId), moveResult);
        auditService.log("ACCOUNT_MOVE", moveId, reloaded.getName(),
                "POSTED", "Écriture re-validée après modification",
                reloaded.getCompany() != null ? reloaded.getCompany().getId() : null);
        return moveResult;
    }

    public AccountMoveDTO cancelEntry(Long moveId) {
        AccountMove move = moveRepo.findById(moveId)
                .orElseThrow(() -> new EntityNotFoundException("Entry not found: " + moveId));

        tenantGuard.check(move.getCompany() != null ? move.getCompany().getId() : null);
        if ("cancel".equals(move.getState())) {
            throw new IllegalStateException("Cette écriture est déjà annulée");
        }
        if ("posted".equals(move.getState())) {
            throw new IllegalStateException("Une écriture validée ne peut pas être annulée directement. Utilisez 'Extourner'.");
        }
        fiscalLockGuard.assertPeriodOpen(move.getCompany(), move.getDate());

        move.setState("cancel");
        move.setCancelledBy(auditService.getCurrentUsername());
        move.setCancelledAt(java.time.LocalDateTime.now());
        AccountMoveDTO cancelled = toMoveDTO(moveRepo.save(move));
        syncEventPublisher.publish(SyncEventType.ACCOUNT_MOVE_CANCELLED, String.valueOf(moveId), cancelled);
        auditService.log("ACCOUNT_MOVE", moveId, move.getName(),
                "CANCELLED", "Écriture annulée",
                move.getCompany() != null ? move.getCompany().getId() : null);
        return cancelled;
    }

    public AccountMoveDTO resetToDraft(Long moveId) {
        AccountMove move = moveRepo.findById(moveId)
                .orElseThrow(() -> new EntityNotFoundException("Écriture introuvable: " + moveId));
        tenantGuard.check(move.getCompany() != null ? move.getCompany().getId() : null);
        if (!"posted".equals(move.getState())) {
            throw new IllegalStateException("Seules les écritures validées peuvent être remises en brouillon");
        }
        if (move.getReversalId() != null) {
            throw new IllegalStateException("Une écriture déjà extournée ne peut pas être remise en brouillon");
        }
        fiscalLockGuard.assertPeriodOpen(move.getCompany(), move.getDate());
        // Snapshot des lignes AVANT modification (état validé)
        List<AccountMoveLine> currentLines = moveLineRepo.findByMoveIdWithAnalytic(move.getId());
        String snapshot = buildLinesSnapshot(currentLines);
        move.setLinesSnapshot(snapshot);

        move.setState("draft");
        move.setResetToDraftBy(auditService.getCurrentUsername());
        move.setResetToDraftAt(java.time.LocalDateTime.now());
        AccountMoveDTO result = toMoveDTO(moveRepo.save(move));

        auditService.log("ACCOUNT_MOVE", moveId, move.getName(),
                "RESET_TO_DRAFT", "Écriture remise en brouillon",
                buildSnapshotDetail(currentLines),
                move.getCompany() != null ? move.getCompany().getId() : null);
        return result;
    }

    /**
     * Crée une écriture extourne avec les lignes inversées, immédiatement validée.
     * L'écriture originale reste intacte mais est marquée comme déjà extournée.
     * Ni l'originale ni l'extourne ne peuvent être extournées à nouveau.
     */
    public AccountMoveDTO reverseEntry(Long moveId) {
        AccountMove move = moveRepo.findById(moveId)
                .orElseThrow(() -> new EntityNotFoundException("Entry not found: " + moveId));
        tenantGuard.check(move.getCompany() != null ? move.getCompany().getId() : null);

        if (!"posted".equals(move.getState())) {
            throw new IllegalStateException("Seules les écritures validées peuvent être extournées");
        }
        if (move.getReversalId() != null) {
            throw new IllegalStateException("Cette écriture a déjà été extournée (extourne n°" + move.getReversalId() + ")");
        }
        if (move.isReversal()) {
            throw new IllegalStateException("Une écriture d'extourne ne peut pas être extournée à son tour");
        }
        // Pas de contrôle de verrou fiscal ici sur la date de la pièce ORIGINALE : une extourne sert
        // justement souvent à corriger une pièce dont la période est désormais clôturée, en la
        // compensant dans la période courante. postEntry() ci-dessous applique le verrou sur la date
        // de L'EXTOURNE elle-même (aujourd'hui), qui est la seule qui compte pour cette nouvelle pièce.

        List<AccountMoveLine> lines = moveLineRepo.findByMoveIdWithAnalytic(move.getId());

        AccountMove reversal = AccountMove.builder()
                .name(generateReversalName(move))
                .date(LocalDate.now())
                .ref("Extourne de " + move.getName())
                .state("draft")
                .isReversal(true)
                .journal(move.getJournal())
                .company(move.getCompany())
                .partner(move.getPartner())
                .build();

        List<AccountMoveLine> reversalLines = lines.stream()
                .map(l -> AccountMoveLine.builder()
                        .move(reversal)
                        .account(l.getAccount())
                        .partner(l.getPartner())
                        .name("Extourne - " + (l.getName() != null ? l.getName() : ""))
                        .date(LocalDate.now())
                        .debit(l.getCredit() != null ? l.getCredit() : BigDecimal.ZERO)
                        .credit(l.getDebit() != null ? l.getDebit() : BigDecimal.ZERO)
                        .journal(move.getJournal())
                        .company(move.getCompany())
                        .analyticAccount(l.getAnalyticAccount())
                        .build())
                .collect(Collectors.toList());

        reversal.setLines(reversalLines);
        AccountMove savedReversal = moveRepo.save(reversal);

        // Reproduire la ventilation analytique (mêmes comptes/montants — seul le sens débit/crédit
        // change à l'extourne) sur les lignes nouvellement créées, avant validation.
        List<AccountMoveLine> savedReversalLines = savedReversal.getLines();
        for (int idx = 0; idx < lines.size(); idx++) {
            List<AnalyticDistributionItem> distributions = lines.get(idx).getAnalyticDistributions();
            if (distributions == null || distributions.isEmpty()) continue;
            AccountMoveLine reversalLine = savedReversalLines.get(idx);
            for (AnalyticDistributionItem dist : distributions) {
                analyticDistributionItemRepo.save(AnalyticDistributionItem.builder()
                        .moveLine(reversalLine)
                        .analyticAccount(dist.getAnalyticAccount())
                        .amount(dist.getAmount())
                        .build());
            }
        }

        // Valider via postEntry() : équilibre débit/crédit, verrou fiscal sur la date de l'extourne,
        // et génération des AnalyticLine officielles depuis la ventilation ci-dessus — même mécanisme
        // que pour toute autre pièce, plutôt qu'une pièce "posted" fabriquée à la main qui contournait
        // entièrement cette génération.
        postEntry(savedReversal.getId());
        savedReversal = moveRepo.findById(savedReversal.getId())
                .orElseThrow(() -> new EntityNotFoundException("Reversal entry not found"));

        // Marquer l'originale comme déjà extournée
        move.setReversalId(savedReversal.getId());
        move.setReversedBy(auditService.getCurrentUsername());
        move.setReversedAt(java.time.LocalDateTime.now());
        moveRepo.save(move);

        AccountMove reloaded = moveRepo.findById(savedReversal.getId())
                .orElseThrow(() -> new EntityNotFoundException("Reversal entry not found"));
        AccountMoveDTO reversed = toMoveDTO(reloaded);
        syncEventPublisher.publish(SyncEventType.ACCOUNT_MOVE_REVERSED, String.valueOf(savedReversal.getId()), reversed);
        auditService.log("ACCOUNT_MOVE", moveId, move.getName(),
                "REVERSED", "Écriture extournée → " + savedReversal.getName(),
                move.getCompany() != null ? move.getCompany().getId() : null);
        return reversed;
    }

    /**
     * Génère le nom de l'écriture extourne à partir de l'écriture originale.
     */
    private String generateReversalName(AccountMove original) {
        return "EXT-" + original.getName();
    }

    /**
     * Retourne le solde du compte principal lié à un journal.
     * Si excludeMoveId est fourni, les lignes de cette pièce sont exclues —
     * ce qui donne le solde AVANT cette pièce (= solde initial correct sur le reçu).
     */
    @Transactional(readOnly = true)
    public java.util.Map<String, Object> getJournalAccountBalance(Long journalId, Long excludeMoveId) {
        AccountJournal journal = journalRepo.findById(journalId)
                .orElseThrow(() -> new EntityNotFoundException("Journal not found: " + journalId));

        // Compte principal : priorité internalType='liquidity', sinon defaultDebitAccount
        AccountAccount account = null;
        if (journal.getDefaultDebitAccount() != null
                && "liquidity".equals(journal.getDefaultDebitAccount().getInternalType())) {
            account = journal.getDefaultDebitAccount();
        } else if (journal.getDefaultCreditAccount() != null
                && "liquidity".equals(journal.getDefaultCreditAccount().getInternalType())) {
            account = journal.getDefaultCreditAccount();
        } else {
            account = journal.getDefaultDebitAccount() != null
                    ? journal.getDefaultDebitAccount()
                    : journal.getDefaultCreditAccount();
        }

        java.util.Map<String, Object> result = new java.util.LinkedHashMap<>();
        result.put("journalId", journalId);
        result.put("journalCode", journal.getCode());

        if (account == null) {
            result.put("accountId", null);
            result.put("accountCode", null);
            result.put("accountName", null);
            result.put("balance", java.math.BigDecimal.ZERO);
            return result;
        }

        java.math.BigDecimal debit;
        java.math.BigDecimal credit;
        if (excludeMoveId != null) {
            debit  = moveLineRepo.sumDebitByAccountExcludingMove(account.getId(), excludeMoveId);
            credit = moveLineRepo.sumCreditByAccountExcludingMove(account.getId(), excludeMoveId);
        } else {
            debit  = moveLineRepo.sumDebitByAccount(account.getId());
            credit = moveLineRepo.sumCreditByAccount(account.getId());
        }
        java.math.BigDecimal balance = debit.subtract(credit);

        result.put("accountId",   account.getId());
        result.put("accountCode", account.getCode());
        result.put("accountName", account.getName());
        result.put("balance",     balance);
        return result;
    }

    @Transactional(readOnly = true)
    public List<AccountMoveDTO> getJournalEntries(Long companyId, Long journalId,
                                                   LocalDate dateFrom, LocalDate dateTo,
                                                   String state) {
        return getJournalEntries(companyId, journalId, dateFrom, dateTo, state, null);
    }

    /**
     * @param limit si renseigné (> 0), ne remonte que les <limit> écritures les plus récentes au
     *              lieu de tout l'historique correspondant aux filtres — utilisé par les écrans
     *              qui n'affichent qu'un aperçu (ex: tableau de bord) : sans cette limite, ces
     *              écrans déclenchaient un fetch complet de l'historique comptable (avec toutes
     *              ses lignes/comptes/partenaires) à chaque ouverture, ce qui a fini par saturer
     *              la mémoire/la connexion DB sur un client à gros volume de données.
     */
    /** Garde-fou : nombre max d'écritures remontées quand l'appelant ne fournit NI limite NI
     *  fenêtre de dates. Sans ça, un appel sans filtre (écran mal configuré côté frontend, futur
     *  appelant, requête manuelle...) déclenche un fetch de la totalité de l'historique comptable
     *  avec toutes ses lignes/comptes/partenaires — sur un client à gros volume de données, c'est
     *  précisément ce qui a fait tomber PostgreSQL à court de mémoire en pleine production
     *  (SQLSTATE 53200, incident du 2026-09-14). Une fenêtre de dates fournie par l'appelant reste
     *  seule maîtresse de la taille du résultat (elle est déjà, par construction, bornée dans le
     *  temps) ; ce plafond ne s'applique que quand rien ne borne la requête. */
    private static final int MAX_JOURNAL_ENTRIES_WITHOUT_FILTER = 2000;

    @Transactional(readOnly = true)
    public List<AccountMoveDTO> getJournalEntries(Long companyId, Long journalId,
                                                   LocalDate dateFrom, LocalDate dateTo,
                                                   String state, Integer limit) {
        Integer effectiveLimit = limit;
        if ((effectiveLimit == null || effectiveLimit <= 0) && dateFrom == null && dateTo == null) {
            effectiveLimit = MAX_JOURNAL_ENTRIES_WITHOUT_FILTER;
        }

        // Prédicats de filtre seuls (sans fetch de collection) — réutilisés tels quels pour la
        // requête d'ids limitée ci-dessous, et combinés aux fetch dans le spec final.
        Specification<AccountMove> filterSpec = (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(cb.equal(root.get("company").get("id"), companyId));
            if (journalId != null) predicates.add(cb.equal(root.get("journal").get("id"), journalId));
            if (dateFrom != null) predicates.add(cb.greaterThanOrEqualTo(root.get("date"), dateFrom));
            if (dateTo != null) predicates.add(cb.lessThanOrEqualTo(root.get("date"), dateTo));
            if (state != null && !state.isBlank()) predicates.add(cb.equal(root.get("state"), state));
            return cb.and(predicates.toArray(new Predicate[0]));
        };

        Sort sort = Sort.by(
            new Sort.Order(Sort.Direction.DESC, "date").nullsLast(),
            new Sort.Order(Sort.Direction.DESC, "name").nullsLast()
        );

        List<Long> restrictIds = null;
        if (effectiveLimit != null && effectiveLimit > 0) {
            // Requête légère (sans fetch de "lines") pour ne récupérer QUE les ids des <limit>
            // écritures les plus récentes. Appliquer directement une Pageable sur la requête qui
            // fetch la collection "lines" ne fonctionnerait pas : Hibernate ignore alors le LIMIT
            // SQL (HHH000104) et charge tout l'historique en mémoire avant de tronquer — aucun
            // gain réel sur la charge DB, exactement le problème qu'on cherche à éviter ici.
            restrictIds = moveRepo.findAll(filterSpec, PageRequest.of(0, effectiveLimit, sort))
                    .map(AccountMove::getId)
                    .getContent();
            if (restrictIds.isEmpty()) return List.of();
        }

        final List<Long> ids = restrictIds;
        // Sans ces fetch, chaque écriture retriggerait des requêtes séparées pour son
        // journal/société/partenaire et pour chaque ligne (compte, partenaire, journal, société,
        // compte analytique) — un simple écran "Écritures comptables" avec beaucoup de données
        // pouvait ainsi prendre plusieurs dizaines de secondes à charger (N+1, un seul niveau
        // "collection" fetché ici pour éviter le MultipleBagFetchException de Hibernate ; les
        // ventilations/lignes analytiques par ligne sont chargées en masse séparément ci-dessous).
        Specification<AccountMove> spec = (root, query, cb) -> {
            query.distinct(true);
            root.fetch("journal", JoinType.LEFT);
            root.fetch("company", JoinType.LEFT);
            root.fetch("partner", JoinType.LEFT);
            Fetch<AccountMove, AccountMoveLine> linesFetch = root.fetch("lines", JoinType.LEFT);
            linesFetch.fetch("account", JoinType.LEFT);
            linesFetch.fetch("partner", JoinType.LEFT);
            linesFetch.fetch("journal", JoinType.LEFT);
            linesFetch.fetch("company", JoinType.LEFT);
            linesFetch.fetch("analyticAccount", JoinType.LEFT);
            Predicate base = filterSpec.toPredicate(root, query, cb);
            return ids != null ? cb.and(base, root.get("id").in(ids)) : base;
        };

        List<AccountMove> moves = moveRepo.findAll(spec, sort);
        if (moves.isEmpty()) return List.of();

        List<Long> lineIds = moves.stream()
                .flatMap(m -> m.getLines().stream())
                .map(AccountMoveLine::getId)
                .collect(Collectors.toList());

        MoveListCache cache = new MoveListCache();
        if (!lineIds.isEmpty()) {
            cache.distributionsByLineId = batchedByLineIds(lineIds, analyticDistributionItemRepo::findByMoveLineIdIn).stream()
                    .collect(Collectors.groupingBy(d -> d.getMoveLine().getId()));
            cache.analyticLinesByLineId = batchedByLineIds(lineIds, analyticLineRepo::findByMoveLineIdIn).stream()
                    .collect(Collectors.groupingBy(l -> l.getMoveLine().getId()));
        }

        return moves.stream()
                .map(m -> toMoveDTO(m, cache))
                .collect(Collectors.toList());
    }

    /** PostgreSQL refuse toute requête préparée au-delà de 65 535 paramètres (SQLSTATE 08P01) —
     *  un `IN (:lineIds)` passé tel quel explose dès qu'un filtre par plage de dates large remonte
     *  suffisamment d'écritures (incident du 2026-09-16 : 95 437 paramètres sur un client à gros
     *  volume). On découpe en lots largement sous la limite plutôt que de plafonner le nombre
     *  d'écritures remontées, pour ne rien changer au résultat retourné à l'appelant. */
    private static final int SQL_IN_BATCH_SIZE = 10_000;

    private static <T> List<T> batchedByLineIds(List<Long> lineIds, java.util.function.Function<List<Long>, List<T>> fetcher) {
        if (lineIds.size() <= SQL_IN_BATCH_SIZE) return fetcher.apply(lineIds);
        List<T> result = new ArrayList<>();
        for (int i = 0; i < lineIds.size(); i += SQL_IN_BATCH_SIZE) {
            result.addAll(fetcher.apply(lineIds.subList(i, Math.min(i + SQL_IN_BATCH_SIZE, lineIds.size()))));
        }
        return result;
    }

    /** Cache mémoïsé le temps d'un seul appel liste (jamais partagé entre requêtes : AccountingService
     *  est un singleton, donc ce cache doit toujours rester local à une méthode, jamais un champ). */
    private static final class MoveListCache {
        Map<Long, List<AnalyticDistributionItem>> distributionsByLineId = Map.of();
        Map<Long, List<AnalyticLine>> analyticLinesByLineId = Map.of();
    }

    @Transactional(readOnly = true)
    public AccountMoveDTO getJournalEntry(Long id) {
        AccountMove move = moveRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Entry not found: " + id));
        tenantGuard.check(move.getCompany() != null ? move.getCompany().getId() : null);
        return toMoveDTO(move);
    }

    // ===================== PARTNERS =====================

    @Transactional(readOnly = true)
    public List<PartnerDTO> getAllPartners(Long companyId) {
        return partnerRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream()
                .map(this::toPartnerDTO)
                .collect(Collectors.toList());
    }

    public void deletePartner(Long id) {
        Partner partner = partnerRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Partner not found: " + id));
        tenantGuard.check(partner.getCompany() != null ? partner.getCompany().getId() : null);
        partner.setActive(false);
        partnerRepo.save(partner);
        auditService.log("PARTNER", id, partner.getName(), "DEACTIVATED", "Tiers désactivé",
                partner.getCompany() != null ? partner.getCompany().getId() : null);
    }

    public PartnerDTO createPartner(PartnerDTO dto) {
        // dto.getCompanyId() vient du client — même correctif que createAccount.
        Company company = companyRepo.findById(com.erp.auth.SecurityUtils.currentCompanyId())
                .orElseThrow(() -> new EntityNotFoundException("Company not found"));

        Partner partner = Partner.builder()
                .ref(dto.getRef())
                .name(dto.getName())
                .type(dto.getType())
                .phone(dto.getPhone())
                .email(dto.getEmail())
                .address(dto.getAddress())
                .company(company)
                .tauxPrecompte(dto.getTauxPrecompte())
                .tauxRistourne(dto.getTauxRistourne())
                .creditLimit(dto.getCreditLimit())
                .receivableAccountCode(dto.getReceivableAccountCode())
                .build();

        return toPartnerDTO(partnerRepo.save(partner));
    }

    public PartnerDTO updatePartner(Long id, PartnerDTO dto) {
        Partner partner = partnerRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Partner not found: " + id));
        tenantGuard.check(partner.getCompany() != null ? partner.getCompany().getId() : null);

        if (dto.getName() != null) partner.setName(dto.getName());
        if (dto.getRef() != null) partner.setRef(dto.getRef());
        if (dto.getType() != null) partner.setType(dto.getType());
        if (dto.getPhone() != null) partner.setPhone(dto.getPhone());
        if (dto.getEmail() != null) partner.setEmail(dto.getEmail());
        if (dto.getAddress() != null) partner.setAddress(dto.getAddress());
        partner.setTauxPrecompte(dto.getTauxPrecompte());
        partner.setTauxRistourne(dto.getTauxRistourne());
        partner.setCreditLimit(dto.getCreditLimit());
        if (dto.getReceivableAccountCode() != null) partner.setReceivableAccountCode(dto.getReceivableAccountCode());

        PartnerDTO updated = toPartnerDTO(partnerRepo.save(partner));
        auditService.log("PARTNER", id, partner.getName(), "UPDATED", "Tiers modifié",
                partner.getCompany() != null ? partner.getCompany().getId() : null);
        return updated;
    }

    // ===================== SEQUENCE GENERATION =====================

    private String generateMoveNumber(AccountJournal journal, LocalDate date) {
        int year = date.getYear();
        String prefix = journal.getCode().toUpperCase();
        Integer maxSeq = moveRepo.findMaxSequenceByJournalAndYear(journal.getId(), year);
        int nextSeq = (maxSeq != null ? maxSeq : 0) + 1;
        return String.format("%s-%d-%05d", prefix, year, nextSeq);
    }

    // ===================== SOLDES JOURNALIERS =====================

    /**
     * Recalcule et sauvegarde le solde journalier d'un journal pour une date donnée.
     *
     * Pour un journal de caisse ou de banque, seules les mouvements sur le compte de trésorerie
     * du journal (ex: 571, 521) sont pris en compte pour le solde.
     * Si on sommait toutes les lignes, débit et crédit s'annuleraient toujours (écriture équilibrée).
     */
    public JournalDailyBalanceDTO updateDailyBalance(Long journalId, Long companyId, LocalDate date) {
        AccountJournal journal = journalRepo.findById(journalId).orElse(null);

        Long primaryAccountId = resolvePrimaryAccountId(journal);

        List<AccountMoveLine> treasuryLines = primaryAccountId != null
                ? moveLineRepo.findLinesByJournalAccountAndDate(journalId, primaryAccountId, date)
                : moveLineRepo.findTreasuryLinesByJournalAndDate(journalId, date);

        BigDecimal openingBalance = resolveOpeningBalance(journalId, primaryAccountId, date);

        BigDecimal totalDebit = treasuryLines.stream()
                .map(l -> l.getDebit() != null ? l.getDebit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalCredit = treasuryLines.stream()
                .map(l -> l.getCredit() != null ? l.getCredit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal closingBalance = openingBalance.add(totalDebit).subtract(totalCredit);

        // Upsert
        JournalDailyBalance balance = dailyBalanceRepo
                .findByJournalIdAndDate(journalId, date)
                .orElse(JournalDailyBalance.builder()
                        .journalId(journalId)
                        .companyId(companyId)
                        .date(date)
                        .build());

        balance.setOpeningBalance(openingBalance);
        balance.setTotalDebit(totalDebit);
        balance.setTotalCredit(totalCredit);
        balance.setClosingBalance(closingBalance);
        JournalDailyBalance saved = dailyBalanceRepo.save(balance);
        return toBalanceDTO(saved, journal);
    }

    /** Retourne l'ID du compte principal d'un journal (defaultDebitAccount en priorité).
     *  Retourne null si le journal n'a pas de compte configuré. */
    private Long resolvePrimaryAccountId(AccountJournal journal) {
        if (journal == null) return null;
        if (journal.getDefaultDebitAccount() != null) return journal.getDefaultDebitAccount().getId();
        if (journal.getDefaultCreditAccount() != null) return journal.getDefaultCreditAccount().getId();
        return null;
    }

    /** Solde cumulatif de trésorerie du journal avant une date. Priorité au compte réellement
     *  configuré sur le journal (précis, scindé par compte) ; le repli par internalType='liquidity'
     *  ne sert QUE quand le journal n'a aucun compte configuré (primaryAccountId == null) — un solde
     *  par compte qui vaut exactement zéro est un résultat valide, pas une absence de donnée, et ne
     *  doit pas déclencher le repli moins précis (qui peut agréger plusieurs comptes de liquidité du
     *  même journal, cf. commentaire de CaisseService sur les jambes de virement inter-caisses). */
    private BigDecimal resolveOpeningBalance(Long journalId, Long primaryAccountId, LocalDate date) {
        if (primaryAccountId != null) {
            BigDecimal byAccount = moveLineRepo.sumBalanceByJournalAndAccountBeforeDate(journalId, primaryAccountId, date);
            return byAccount != null ? byAccount : BigDecimal.ZERO;
        }
        BigDecimal byType = moveLineRepo.sumTreasuryBalanceBeforeDate(journalId, date);
        return byType != null ? byType : BigDecimal.ZERO;
    }

    @Transactional(readOnly = true)
    public List<JournalDailyBalanceDTO> getDailyBalances(Long journalId) {
        AccountJournal journal = journalRepo.findById(journalId).orElse(null);

        Long primaryAccountId = resolvePrimaryAccountId(journal);
        List<AccountMoveLine> allLines = primaryAccountId != null
                ? moveLineRepo.findAllLinesByJournalAndAccount(journalId, primaryAccountId)
                : moveLineRepo.findAllTreasuryLinesByJournal(journalId);

        // Grouper par date (TreeMap = ordre chronologique)
        Map<LocalDate, List<AccountMoveLine>> byDate = new java.util.TreeMap<>();
        for (AccountMoveLine l : allLines) {
            byDate.computeIfAbsent(l.getDate(), d -> new ArrayList<>()).add(l);
        }

        BigDecimal running = BigDecimal.ZERO;
        List<JournalDailyBalanceDTO> result = new ArrayList<>();

        for (Map.Entry<LocalDate, List<AccountMoveLine>> entry : byDate.entrySet()) {
            LocalDate date = entry.getKey();
            BigDecimal opening = running;
            BigDecimal dr = entry.getValue().stream()
                    .map(l -> l.getDebit() != null ? l.getDebit() : BigDecimal.ZERO)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
            BigDecimal cr = entry.getValue().stream()
                    .map(l -> l.getCredit() != null ? l.getCredit() : BigDecimal.ZERO)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
            BigDecimal closing = opening.add(dr).subtract(cr);
            running = closing;

            result.add(JournalDailyBalanceDTO.builder()
                    .journalId(journalId)
                    .journalName(journal != null ? journal.getName() : null)
                    .journalCode(journal != null ? journal.getCode() : null)
                    .date(date)
                    .openingBalance(opening)
                    .totalDebit(dr)
                    .totalCredit(cr)
                    .closingBalance(closing)
                    .build());
        }

        // Plus récent en premier (comme attendu par le frontend)
        Collections.reverse(result);
        return result;
    }

    @Transactional(readOnly = true)
    public JournalDailyBalanceDTO getDailyBalance(Long journalId, LocalDate date) {
        AccountJournal journal = journalRepo.findById(journalId).orElse(null);
        // Si pas encore de solde enregistré, le calculer à la volée
        return dailyBalanceRepo.findByJournalIdAndDate(journalId, date)
                .map(b -> toBalanceDTO(b, journal))
                .orElseGet(() -> updateDailyBalance(journalId,
                        journal != null && journal.getCompany() != null ? journal.getCompany().getId() : null,
                        date));
    }

    private JournalDailyBalanceDTO toBalanceDTO(JournalDailyBalance b, AccountJournal journal) {
        return JournalDailyBalanceDTO.builder()
                .id(b.getId())
                .journalId(b.getJournalId())
                .journalName(journal != null ? journal.getName() : null)
                .journalCode(journal != null ? journal.getCode() : null)
                .companyId(b.getCompanyId())
                .date(b.getDate())
                .openingBalance(b.getOpeningBalance())
                .totalDebit(b.getTotalDebit())
                .totalCredit(b.getTotalCredit())
                .closingBalance(b.getClosingBalance())
                .build();
    }

    // ===================== MAPPING =====================

    public AccountAccountDTO toAccountDTO(AccountAccount account) {
        return AccountAccountDTO.builder()
                .id(account.getId())
                .code(account.getCode())
                .name(account.getName())
                .accountType(account.getAccountType())
                .internalType(account.getInternalType())
                .deprecated(account.isDeprecated())
                .reconcile(account.isReconcile())
                .companyId(account.getCompany() != null ? account.getCompany().getId() : null)
                .companyName(account.getCompany() != null ? account.getCompany().getName() : null)
                .build();
    }

    public AccountJournalDTO toJournalDTO(AccountJournal journal) {
        return AccountJournalDTO.builder()
                .id(journal.getId())
                .code(journal.getCode())
                .name(journal.getName())
                .type(journal.getType())
                .defaultDebitAccountId(journal.getDefaultDebitAccount() != null
                        ? journal.getDefaultDebitAccount().getId() : null)
                .defaultDebitAccountCode(journal.getDefaultDebitAccount() != null
                        ? journal.getDefaultDebitAccount().getCode() : null)
                .defaultCreditAccountId(journal.getDefaultCreditAccount() != null
                        ? journal.getDefaultCreditAccount().getId() : null)
                .defaultCreditAccountCode(journal.getDefaultCreditAccount() != null
                        ? journal.getDefaultCreditAccount().getCode() : null)
                .companyId(journal.getCompany() != null ? journal.getCompany().getId() : null)
                .active(journal.isActive())
                .build();
    }

    public AccountMoveDTO toMoveDTO(AccountMove move) {
        return toMoveDTO(move, null);
    }

    private AccountMoveDTO toMoveDTO(AccountMove move, MoveListCache cache) {
        List<AccountMoveLineDTO> lineDTOs = move.getLines() != null
                ? move.getLines().stream().map(l -> toMoveLineDTO(l, cache)).collect(Collectors.toList())
                : List.of();

        BigDecimal totalDebit = move.getLines() != null ? move.getLines().stream()
                .map(l -> l.getDebit() != null ? l.getDebit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add) : BigDecimal.ZERO;
        BigDecimal totalCredit = move.getLines() != null ? move.getLines().stream()
                .map(l -> l.getCredit() != null ? l.getCredit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add) : BigDecimal.ZERO;

        return AccountMoveDTO.builder()
                .id(move.getId())
                .name(move.getName())
                .date(move.getDate())
                .ref(move.getRef())
                .state(move.getState())
                .journalId(move.getJournal() != null ? move.getJournal().getId() : null)
                .journalName(move.getJournal() != null ? move.getJournal().getName() : null)
                .companyId(move.getCompany() != null ? move.getCompany().getId() : null)
                .partnerId(move.getPartner() != null ? move.getPartner().getId() : null)
                .partnerName(move.getPartner() != null ? move.getPartner().getName() : null)
                .lines(lineDTOs)
                .createdAt(move.getCreatedAt())
                .createdBy(move.getCreatedBy())
                .updatedBy(move.getUpdatedBy())
                .updatedAt(move.getUpdatedAt())
                .totalDebit(totalDebit)
                .totalCredit(totalCredit)
                .reversalId(move.getReversalId())
                .isReversal(move.isReversal())
                .postedBy(move.getPostedBy())
                .postedAt(move.getPostedAt())
                .resetToDraftBy(move.getResetToDraftBy())
                .resetToDraftAt(move.getResetToDraftAt())
                .build();
    }

    public AccountMoveLineDTO toMoveLineDTO(AccountMoveLine line) {
        return toMoveLineDTO(line, null);
    }

    private AccountMoveLineDTO toMoveLineDTO(AccountMoveLine line, MoveListCache cache) {
        List<AnalyticDistributionItem> distributions = cache != null
                ? cache.distributionsByLineId.getOrDefault(line.getId(), List.of())
                : line.getAnalyticDistributions();
        List<AnalyticDistributionItemDTO> distributionDTOs = distributions != null
                ? distributions.stream().map(d -> AnalyticDistributionItemDTO.builder()
                        .id(d.getId())
                        .analyticAccountId(d.getAnalyticAccount().getId())
                        .analyticAccountCode(d.getAnalyticAccount().getCode())
                        .analyticAccountName(d.getAnalyticAccount().getName())
                        .amount(d.getAmount())
                        .build()).collect(Collectors.toList())
                : List.of();

        List<AnalyticLine> analyticLines = cache != null
                ? cache.analyticLinesByLineId.getOrDefault(line.getId(), List.of())
                : line.getAnalyticLines();
        List<AnalyticLineDTO> analyticLineDTOs = analyticLines != null
                ? analyticLines.stream().map(al -> AnalyticLineDTO.builder()
                        .id(al.getId())
                        .date(al.getDate())
                        .name(al.getName())
                        .amount(al.getAmount())
                        .analyticAccountId(al.getAnalyticAccount().getId())
                        .analyticAccountCode(al.getAnalyticAccount().getCode())
                        .analyticAccountName(al.getAnalyticAccount().getName())
                        .moveLineId(line.getId())
                        .build()).collect(Collectors.toList())
                : List.of();

        return AccountMoveLineDTO.builder()
                .id(line.getId())
                .moveId(line.getMove() != null ? line.getMove().getId() : null)
                .accountId(line.getAccount() != null ? line.getAccount().getId() : null)
                .accountCode(line.getAccount() != null ? line.getAccount().getCode() : null)
                .accountName(line.getAccount() != null ? line.getAccount().getName() : null)
                .partnerId(line.getPartner() != null ? line.getPartner().getId() : null)
                .partnerName(line.getPartner() != null ? line.getPartner().getName() : null)
                .name(line.getName())
                .date(line.getDate())
                .debit(line.getDebit())
                .credit(line.getCredit())
                .journalId(line.getJournal() != null ? line.getJournal().getId() : null)
                .companyId(line.getCompany() != null ? line.getCompany().getId() : null)
                .analyticAccountId(line.getAnalyticAccount() != null ? line.getAnalyticAccount().getId() : null)
                .analyticAccountCode(line.getAnalyticAccount() != null ? line.getAnalyticAccount().getCode() : null)
                .analyticAccountName(line.getAnalyticAccount() != null ? line.getAnalyticAccount().getName() : null)
                .analyticDistributions(distributionDTOs)
                .analyticLines(analyticLineDTOs)
                .build();
    }

    private List<AnalyticDistributionItem> buildDistributions(
            List<JournalEntryRequest.AnalyticDistribution> dists, AccountMoveLine line) {
        return dists.stream()
                .filter(d -> d.getAnalyticAccountId() != null && d.getAmount() != null
                        && d.getAmount().compareTo(BigDecimal.ZERO) > 0)
                .map(d -> {
                    AnalyticAccount acc = analyticAccountRepo.findById(d.getAnalyticAccountId()).orElse(null);
                    if (acc == null) return null;
                    return AnalyticDistributionItem.builder()
                            .moveLine(line)
                            .analyticAccount(acc)
                            .amount(d.getAmount())
                            .build();
                })
                .filter(d -> d != null)
                .collect(Collectors.toList());
    }

    // ── Helpers snapshot/diff lignes (remise en brouillon) ───────────────────

    /**
     * Sérialise les lignes en snapshot JSON interne (pour calcul du diff lors du re-post).
     * Format : {"__t":"snap","lines":[{"c":"411000","n":"Clients","d":"150000.00","k":"0.00"},...]}
     */
    private String buildLinesSnapshot(List<AccountMoveLine> lines) {
        if (lines == null || lines.isEmpty()) return "{\"__t\":\"snap\",\"lines\":[]}";
        StringBuilder sb = new StringBuilder("{\"__t\":\"snap\",\"lines\":[");
        boolean first = true;
        for (AccountMoveLine l : lines) {
            if (!first) sb.append(",");
            String code = l.getAccount() != null ? l.getAccount().getCode() : "";
            String nom  = l.getAccount() != null ? l.getAccount().getName()  : "";
            String d    = l.getDebit()  != null ? l.getDebit().toPlainString()  : "0";
            String k    = l.getCredit() != null ? l.getCredit().toPlainString() : "0";
            sb.append("{\"c\":\"").append(esc(code))
              .append("\",\"n\":\"").append(esc(nom))
              .append("\",\"d\":\"").append(d)
              .append("\",\"k\":\"").append(k).append("\"}");
            first = false;
        }
        sb.append("]}");
        return sb.toString();
    }

    /**
     * Construit le détail d'audit pour RESET_TO_DRAFT : liste structurée des lignes
     * au moment de la remise en brouillon.
     * Format : {"type":"snapshot","lines":[{"c":"411000","n":"Clients","d":"150 000","k":"0"},...]}
     */
    private String buildSnapshotDetail(List<AccountMoveLine> lines) {
        StringBuilder sb = new StringBuilder("{\"type\":\"snapshot\",\"lines\":[");
        boolean first = true;
        for (AccountMoveLine l : lines) {
            if (!first) sb.append(",");
            String code = l.getAccount() != null ? l.getAccount().getCode() : "?";
            String nom  = l.getAccount() != null ? l.getAccount().getName()  : "";
            String dv   = fmtAmt(l.getDebit()  != null ? l.getDebit()  : BigDecimal.ZERO);
            String cv   = fmtAmt(l.getCredit() != null ? l.getCredit() : BigDecimal.ZERO);
            sb.append("{\"c\":\"").append(esc(code))
              .append("\",\"n\":\"").append(esc(nom))
              .append("\",\"d\":\"").append(dv)
              .append("\",\"k\":\"").append(cv).append("\"}");
            first = false;
        }
        sb.append("]}");
        return sb.toString();
    }

    /**
     * Compare snapshot interne et nouvelles lignes.
     * Retourne un JSON structuré {"type":"diff","lines":[...]} ou null si aucun changement.
     * Chaque ligne a : c (code), n (nom), d (débit après), k (crédit après),
     *                  st (added|removed|changed), od (ancien débit), ok (ancien crédit).
     */
    private String buildLinesDiff(String snapshot, List<AccountMoveLine> newLines) {
        if (snapshot == null) return null;

        // Extraire les lignes "avant" depuis le snapshot interne
        java.util.Map<String, String[]> before = new java.util.LinkedHashMap<>();
        String body = snapshot.replaceAll("^\\{[^\\[]*\"lines\":\\[", "").replaceAll("\\]\\}$", "");
        if (!body.isEmpty() && !body.equals(snapshot)) {
            for (String entry : body.split("\\},\\{")) {
                entry = entry.replace("{", "").replace("}", "");
                String code = extract(entry, "c");
                String d    = extract(entry, "d");
                String k    = extract(entry, "k");
                String nom  = extract(entry, "n");
                if (!code.isEmpty()) before.put(code, new String[]{d, k, nom});
            }
        }

        // Lignes "après"
        java.util.Map<String, String[]> after = new java.util.LinkedHashMap<>();
        if (newLines != null) {
            for (AccountMoveLine l : newLines) {
                String code = l.getAccount() != null ? l.getAccount().getCode() : "";
                if (code.isEmpty()) continue;
                String nom = l.getAccount() != null ? l.getAccount().getName() : "";
                String d   = l.getDebit()  != null ? l.getDebit().toPlainString()  : "0";
                String k   = l.getCredit() != null ? l.getCredit().toPlainString() : "0";
                after.put(code, new String[]{d, k, nom});
            }
        }

        StringBuilder sb = new StringBuilder("{\"type\":\"diff\",\"lines\":[");
        boolean first = true;

        // Supprimés ou modifiés
        for (java.util.Map.Entry<String, String[]> e : before.entrySet()) {
            String code = e.getKey();
            String[] bv = e.getValue();
            String nom  = bv.length > 2 ? bv[2] : "";
            if (!after.containsKey(code)) {
                // Supprimé
                if (!first) sb.append(",");
                sb.append("{\"c\":\"").append(esc(code))
                  .append("\",\"n\":\"").append(esc(nom))
                  .append("\",\"d\":\"").append(fmtAmt(parseBD(bv[0])))
                  .append("\",\"k\":\"").append(fmtAmt(parseBD(bv[1])))
                  .append("\",\"st\":\"removed\"}");
                first = false;
            } else {
                String[] av = after.get(code);
                BigDecimal bd = parseBD(bv[0]), bc = parseBD(bv[1]);
                BigDecimal ad = parseBD(av[0]), ac = parseBD(av[1]);
                boolean dChg = bd.compareTo(ad) != 0;
                boolean cChg = bc.compareTo(ac) != 0;
                if (dChg || cChg) {
                    // Modifié
                    if (!first) sb.append(",");
                    sb.append("{\"c\":\"").append(esc(code))
                      .append("\",\"n\":\"").append(esc(nom))
                      .append("\",\"d\":\"").append(fmtAmt(ad))
                      .append("\",\"k\":\"").append(fmtAmt(ac));
                    if (dChg) sb.append("\",\"od\":\"").append(fmtAmt(bd));
                    if (cChg) sb.append("\",\"ok\":\"").append(fmtAmt(bc));
                    sb.append("\",\"st\":\"changed\"}");
                    first = false;
                }
            }
        }
        // Ajoutés
        for (java.util.Map.Entry<String, String[]> e : after.entrySet()) {
            if (!before.containsKey(e.getKey())) {
                String[] av = e.getValue();
                String nom = av.length > 2 ? av[2] : "";
                if (!first) sb.append(",");
                sb.append("{\"c\":\"").append(esc(e.getKey()))
                  .append("\",\"n\":\"").append(esc(nom))
                  .append("\",\"d\":\"").append(fmtAmt(parseBD(av[0])))
                  .append("\",\"k\":\"").append(fmtAmt(parseBD(av[1])))
                  .append("\",\"st\":\"added\"}");
                first = false;
            }
        }

        sb.append("]}");
        if (first) return null;
        return sb.toString();
    }

    private String esc(String s) { return s == null ? "" : s.replace("\\", "\\\\").replace("\"", "\\\""); }

    private String fmtAmt(BigDecimal v) {
        if (v == null || v.compareTo(BigDecimal.ZERO) == 0) return "0";
        return v.stripTrailingZeros().toPlainString()
                .replaceAll("(\\d)(?=(\\d{3})+(?!\\d))", "$1 ");
    }

    private BigDecimal parseBD(String v) {
        if (v == null || v.isEmpty()) return BigDecimal.ZERO;
        try { return new BigDecimal(v); } catch (NumberFormatException e) { return BigDecimal.ZERO; }
    }

    /** Extrait la valeur d'un champ dans une string JSON fragmentée */
    private String extract(String fragment, String key) {
        String pattern = "\"" + key + "\":";
        int i = fragment.indexOf(pattern);
        if (i < 0) return "";
        String rest = fragment.substring(i + pattern.length()).trim();
        if (rest.startsWith("\"")) {
            int end = rest.indexOf("\"", 1);
            return end > 0 ? rest.substring(1, end) : "";
        } else {
            int end = rest.indexOf(",");
            return end > 0 ? rest.substring(0, end).trim() : rest.trim();
        }
    }

    public PartnerDTO toPartnerDTO(Partner partner) {
        return PartnerDTO.builder()
                .id(partner.getId())
                .ref(partner.getRef())
                .name(partner.getName())
                .type(partner.getType())
                .phone(partner.getPhone())
                .email(partner.getEmail())
                .address(partner.getAddress())
                .companyId(partner.getCompany() != null ? partner.getCompany().getId() : null)
                .companyName(partner.getCompany() != null ? partner.getCompany().getName() : null)
                .tauxRistourne(partner.getTauxRistourne())
                .tauxPrecompte(partner.getTauxPrecompte())
                .creditLimit(partner.getCreditLimit())
                .receivableAccountCode(partner.getReceivableAccountCode())
                .build();
    }
}

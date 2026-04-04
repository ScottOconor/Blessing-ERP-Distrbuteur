package com.erp.accounting.service;

import com.erp.accounting.dto.*;
import com.erp.accounting.entity.*;
import com.erp.accounting.repository.*;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
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

    // ===================== ACCOUNTS =====================

    @Transactional(readOnly = true)
    public List<AccountAccountDTO> getAllAccounts(Long companyId) {
        return accountRepo.findByCompanyIdAndDeprecatedFalseOrderByCode(companyId)
                .stream()
                .map(this::toAccountDTO)
                .collect(Collectors.toList());
    }

    public AccountAccountDTO createAccount(AccountAccountDTO dto) {
        Company company = companyRepo.findById(dto.getCompanyId())
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
        account.setDeprecated(true);
        accountRepo.save(account);
    }

    public AccountAccountDTO toggleAccountDeprecated(Long id) {
        AccountAccount account = accountRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Account not found: " + id));
        account.setDeprecated(!account.isDeprecated());
        return toAccountDTO(accountRepo.save(account));
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
        Company company = companyRepo.findById(dto.getCompanyId())
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

        return toJournalDTO(journalRepo.save(journal));
    }

    // ===================== JOURNAL ENTRIES =====================

    public AccountMoveDTO createJournalEntry(JournalEntryRequest request) {
        AccountJournal journal = journalRepo.findById(request.getJournalId())
                .orElseThrow(() -> new EntityNotFoundException("Journal not found"));

        Company company = companyRepo.findById(request.getCompanyId())
                .orElseThrow(() -> new EntityNotFoundException("Company not found"));

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

        // Validate balance before saving
        BigDecimal totalDebit = lines.stream()
                .map(l -> l.getDebit() != null ? l.getDebit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalCredit = lines.stream()
                .map(l -> l.getCredit() != null ? l.getCredit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        if (totalDebit.compareTo(totalCredit) != 0) {
            throw new IllegalStateException("Entry is unbalanced on creation: debit=" + totalDebit + " credit=" + totalCredit);
        }

        AccountMove saved = moveRepo.save(move);
        return toMoveDTO(saved);
    }

    public AccountMoveDTO updateJournalEntry(Long id, JournalEntryRequest request) {
        AccountMove move = moveRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Entry not found: " + id));

        if (!"draft".equals(move.getState())) {
            throw new IllegalStateException("Seules les écritures en brouillon peuvent être modifiées");
        }

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

        // Validate balance before saving
        BigDecimal totalDebit = newLines.stream()
                .map(l -> l.getDebit() != null ? l.getDebit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalCredit = newLines.stream()
                .map(l -> l.getCredit() != null ? l.getCredit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        if (totalDebit.compareTo(totalCredit) != 0) {
            throw new IllegalStateException("Entry is unbalanced on update: debit=" + totalDebit + " credit=" + totalCredit);
        }

        return toMoveDTO(moveRepo.save(move));
    }

    public AccountMoveDTO postEntry(Long moveId) {
        AccountMove move = moveRepo.findById(moveId)
                .orElseThrow(() -> new EntityNotFoundException("Entry not found: " + moveId));

        if (!"draft".equals(move.getState())) {
            throw new IllegalStateException("Only draft entries can be posted");
        }

        BigDecimal totalDebit = move.getLines().stream()
                .map(l -> l.getDebit() != null ? l.getDebit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal totalCredit = move.getLines().stream()
                .map(l -> l.getCredit() != null ? l.getCredit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        // Detailed logging for debugging
        if (totalDebit.compareTo(totalCredit) != 0) {
            StringBuilder details = new StringBuilder("Unbalanced lines: ");
            move.getLines().forEach(line -> details.append("(").append(line.getAccount().getCode())
                    .append(": debit=").append(line.getDebit()).append(", credit=").append(line.getCredit()).append(") "));
            log.error(details.toString());
            throw new IllegalStateException("Entry is unbalanced: debit=" + totalDebit + " credit=" + totalCredit + ". Check lines above.");
        }

        move.setState("posted");
        AccountMove saved = moveRepo.save(move);

        // Recharger les lignes avec toutes les données analytiques (évite les problèmes de lazy loading)
        List<AccountMoveLine> linesWithAnalytic = moveLineRepo.findByMoveIdWithAnalytic(saved.getId());

        for (AccountMoveLine line : linesWithAnalytic) {
            // Supprimer les éventuelles anciennes lignes analytiques
            analyticLineRepo.deleteByMoveLineId(line.getId());

            BigDecimal lineAmount = line.getDebit().subtract(line.getCredit());

            List<AnalyticDistributionItem> distributions = line.getAnalyticDistributions();
            if (distributions != null && !distributions.isEmpty()) {
                // Cas : ventilation multiple — une AnalyticLine par distribution
                for (AnalyticDistributionItem dist : distributions) {
                    if (dist.getAnalyticAccount() == null) continue;
                    AnalyticLine al = AnalyticLine.builder()
                            .date(line.getDate())
                            .name(line.getName())
                            .amount(lineAmount.signum() >= 0 ? dist.getAmount() : dist.getAmount().negate())
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
                        .amount(lineAmount)
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

        return toMoveDTO(saved);
    }

    public AccountMoveDTO cancelEntry(Long moveId) {
        AccountMove move = moveRepo.findById(moveId)
                .orElseThrow(() -> new EntityNotFoundException("Entry not found: " + moveId));

        if ("cancel".equals(move.getState())) {
            throw new IllegalStateException("Entry is already cancelled");
        }

        move.setState("cancel");
        return toMoveDTO(moveRepo.save(move));
    }

    @Transactional(readOnly = true)
    public List<AccountMoveDTO> getJournalEntries(Long companyId, Long journalId,
                                                   LocalDate from, LocalDate to) {
        return moveRepo.findByFilters(companyId, journalId, from, to)
                .stream()
                .map(this::toMoveDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public AccountMoveDTO getJournalEntry(Long id) {
        AccountMove move = moveRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Entry not found: " + id));
        return toMoveDTO(move);
    }

    // ===================== PARTNERS =====================

    @Transactional(readOnly = true)
    public List<PartnerDTO> getAllPartners(Long companyId) {
        return partnerRepo.findByCompanyId(companyId)
                .stream()
                .map(this::toPartnerDTO)
                .collect(Collectors.toList());
    }

    public PartnerDTO createPartner(PartnerDTO dto) {
        Company company = companyRepo.findById(dto.getCompanyId())
                .orElseThrow(() -> new EntityNotFoundException("Company not found"));

        Partner partner = Partner.builder()
                .ref(dto.getRef())
                .name(dto.getName())
                .type(dto.getType())
                .phone(dto.getPhone())
                .email(dto.getEmail())
                .address(dto.getAddress())
                .company(company)
                .build();

        return toPartnerDTO(partnerRepo.save(partner));
    }

    // ===================== SEQUENCE GENERATION =====================

    private String generateMoveNumber(AccountJournal journal, LocalDate date) {
        int year = date.getYear();
        String prefix = journal.getCode().toUpperCase();
        Integer maxSeq = moveRepo.findMaxSequenceByJournalAndYear(journal.getId(), year);
        int nextSeq = (maxSeq != null ? maxSeq : 0) + 1;
        return String.format("%s-%d-%05d", prefix, year, nextSeq);
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
        List<AccountMoveLineDTO> lineDTOs = move.getLines() != null
                ? move.getLines().stream().map(this::toMoveLineDTO).collect(Collectors.toList())
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
                .totalDebit(totalDebit)
                .totalCredit(totalCredit)
                .build();
    }

    public AccountMoveLineDTO toMoveLineDTO(AccountMoveLine line) {
        List<AnalyticDistributionItemDTO> distributionDTOs = line.getAnalyticDistributions() != null
                ? line.getAnalyticDistributions().stream().map(d -> AnalyticDistributionItemDTO.builder()
                        .id(d.getId())
                        .analyticAccountId(d.getAnalyticAccount().getId())
                        .analyticAccountCode(d.getAnalyticAccount().getCode())
                        .analyticAccountName(d.getAnalyticAccount().getName())
                        .amount(d.getAmount())
                        .build()).collect(Collectors.toList())
                : List.of();

        List<AnalyticLineDTO> analyticLineDTOs = line.getAnalyticLines() != null
                ? line.getAnalyticLines().stream().map(al -> AnalyticLineDTO.builder()
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

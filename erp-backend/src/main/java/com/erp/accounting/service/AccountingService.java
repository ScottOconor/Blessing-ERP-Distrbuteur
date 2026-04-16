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
    private final JournalDailyBalanceRepository dailyBalanceRepo;

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

        // Caisse/banque : pas d'obligation d'équilibre (contrepartie implicite du compte lié)
        boolean isCashOrBank = "cash".equals(journal.getType()) || "bank".equals(journal.getType());
        if (!isCashOrBank) {
            BigDecimal totalDebit = lines.stream()
                    .map(l -> l.getDebit() != null ? l.getDebit() : BigDecimal.ZERO)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
            BigDecimal totalCredit = lines.stream()
                    .map(l -> l.getCredit() != null ? l.getCredit() : BigDecimal.ZERO)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
            if (totalDebit.compareTo(totalCredit) != 0) {
                throw new IllegalStateException("Entry is unbalanced on creation: debit=" + totalDebit + " credit=" + totalCredit);
            }
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

        // Caisse/banque : pas d'obligation d'équilibre
        boolean isCashOrBankUpdate = "cash".equals(journal.getType()) || "bank".equals(journal.getType());
        if (!isCashOrBankUpdate) {
            BigDecimal totalDebit = newLines.stream()
                    .map(l -> l.getDebit() != null ? l.getDebit() : BigDecimal.ZERO)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
            BigDecimal totalCredit = newLines.stream()
                    .map(l -> l.getCredit() != null ? l.getCredit() : BigDecimal.ZERO)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
            if (totalDebit.compareTo(totalCredit) != 0) {
                throw new IllegalStateException("Entry is unbalanced on update: debit=" + totalDebit + " credit=" + totalCredit);
            }
        }

        return toMoveDTO(moveRepo.save(move));
    }

    public AccountMoveDTO postEntry(Long moveId) {
        AccountMove move = moveRepo.findById(moveId)
                .orElseThrow(() -> new EntityNotFoundException("Entry not found: " + moveId));

        if (!"draft".equals(move.getState())) {
            throw new IllegalStateException("Only draft entries can be posted");
        }

        // Caisse/banque : pas d'obligation d'équilibre à la validation
        boolean isCashOrBankPost = "cash".equals(move.getJournal().getType()) || "bank".equals(move.getJournal().getType());
        if (!isCashOrBankPost) {
            BigDecimal totalDebit = move.getLines().stream()
                    .map(l -> l.getDebit() != null ? l.getDebit() : BigDecimal.ZERO)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
            BigDecimal totalCredit = move.getLines().stream()
                    .map(l -> l.getCredit() != null ? l.getCredit() : BigDecimal.ZERO)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
            if (totalDebit.compareTo(totalCredit) != 0) {
                StringBuilder details = new StringBuilder("Unbalanced lines: ");
                move.getLines().forEach(line -> details.append("(").append(line.getAccount().getCode())
                        .append(": debit=").append(line.getDebit()).append(", credit=").append(line.getCredit()).append(") "));
                log.error(details.toString());
                throw new IllegalStateException("Entry is unbalanced: debit=" + totalDebit + " credit=" + totalCredit + ". Check lines above.");
            }
        }

        move.setState("posted");
        AccountMove saved = moveRepo.save(move);

        // Recharger les lignes avec toutes les données analytiques (évite les problèmes de lazy loading)
        List<AccountMoveLine> linesWithAnalytic = moveLineRepo.findByMoveIdWithAnalytic(saved.getId());

        for (AccountMoveLine line : linesWithAnalytic) {
            // Supprimer les éventuelles anciennes lignes analytiques
            analyticLineRepo.deleteByMoveLineId(line.getId());

            // L'analytique ne concerne que les comptes de charges (classe 6 en OHADA)
            String accountCode = line.getAccount() != null ? line.getAccount().getCode() : "";
            if (!accountCode.startsWith("6")) continue;

            // Montant de la charge = débit (une charge débite un compte de classe 6)
            BigDecimal chargeAmount = line.getDebit();
            if (chargeAmount == null || chargeAmount.compareTo(BigDecimal.ZERO) == 0) continue;

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

        return toMoveDTO(reloaded);
    }

    public AccountMoveDTO cancelEntry(Long moveId) {
        AccountMove move = moveRepo.findById(moveId)
                .orElseThrow(() -> new EntityNotFoundException("Entry not found: " + moveId));

        if ("cancel".equals(move.getState())) {
            throw new IllegalStateException("Cette écriture est déjà annulée");
        }
        if ("posted".equals(move.getState())) {
            throw new IllegalStateException("Une écriture validée ne peut pas être annulée directement. Utilisez 'Extourner'.");
        }

        move.setState("cancel");
        return toMoveDTO(moveRepo.save(move));
    }

    /**
     * Crée une écriture extourne avec les lignes inversées, immédiatement validée.
     * L'écriture originale reste intacte mais est marquée comme déjà extournée.
     * Ni l'originale ni l'extourne ne peuvent être extournées à nouveau.
     */
    public AccountMoveDTO reverseEntry(Long moveId) {
        AccountMove move = moveRepo.findById(moveId)
                .orElseThrow(() -> new EntityNotFoundException("Entry not found: " + moveId));

        if (!"posted".equals(move.getState())) {
            throw new IllegalStateException("Seules les écritures validées peuvent être extournées");
        }
        if (move.getReversalId() != null) {
            throw new IllegalStateException("Cette écriture a déjà été extournée (extourne n°" + move.getReversalId() + ")");
        }
        if (move.isReversal()) {
            throw new IllegalStateException("Une écriture d'extourne ne peut pas être extournée à son tour");
        }

        List<AccountMoveLine> lines = moveLineRepo.findByMoveIdWithAnalytic(move.getId());

        AccountMove reversal = AccountMove.builder()
                .name(generateReversalName(move))
                .date(LocalDate.now())
                .ref("Extourne de " + move.getName())
                .state("posted")
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
                        .build())
                .collect(Collectors.toList());

        reversal.setLines(reversalLines);
        AccountMove savedReversal = moveRepo.save(reversal);

        // Marquer l'originale comme déjà extournée
        move.setReversalId(savedReversal.getId());
        moveRepo.save(move);

        AccountMove reloaded = moveRepo.findById(savedReversal.getId())
                .orElseThrow(() -> new EntityNotFoundException("Reversal entry not found"));
        return toMoveDTO(reloaded);
    }

    /**
     * Génère le nom de l'écriture extourne à partir de l'écriture originale.
     */
    private String generateReversalName(AccountMove original) {
        return "EXT-" + original.getName();
    }

    /**
     * Retourne le solde actuel du compte principal lié à un journal.
     * Solde = total débit posté - total crédit posté sur ce compte.
     */
    @Transactional(readOnly = true)
    public java.util.Map<String, Object> getJournalAccountBalance(Long journalId) {
        AccountJournal journal = journalRepo.findById(journalId)
                .orElseThrow(() -> new EntityNotFoundException("Journal not found: " + journalId));

        // Compte principal : débit en priorité, sinon crédit
        AccountAccount account = journal.getDefaultDebitAccount() != null
                ? journal.getDefaultDebitAccount()
                : journal.getDefaultCreditAccount();

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

        java.math.BigDecimal debit  = moveLineRepo.sumDebitByAccount(account.getId());
        java.math.BigDecimal credit = moveLineRepo.sumCreditByAccount(account.getId());
        java.math.BigDecimal balance = debit.subtract(credit);

        result.put("accountId",   account.getId());
        result.put("accountCode", account.getCode());
        result.put("accountName", account.getName());
        result.put("balance",     balance);
        return result;
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
        return partnerRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream()
                .map(this::toPartnerDTO)
                .collect(Collectors.toList());
    }

    public void deletePartner(Long id) {
        Partner partner = partnerRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Partner not found: " + id));
        partner.setActive(false);
        partnerRepo.save(partner);
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

    // ===================== SOLDES JOURNALIERS =====================

    /**
     * Recalcule et sauvegarde le solde journalier d'un journal pour une date donnée.
     * Le solde d'ouverture = solde de clôture du jour précédent.
     * Le solde de clôture = ouverture + total_débit - total_crédit des écritures postées du jour.
     */
    public JournalDailyBalanceDTO updateDailyBalance(Long journalId, Long companyId, LocalDate date) {
        // Solde d'ouverture = clôture du dernier jour enregistré avant cette date
        List<JournalDailyBalance> previous = dailyBalanceRepo.findLatestBeforeDate(journalId, date);
        BigDecimal openingBalance = previous.isEmpty()
                ? BigDecimal.ZERO
                : previous.get(0).getClosingBalance();

        // Calculer les totaux débit/crédit des écritures postées du journal sur cette date
        List<AccountMoveLine> dayLines = moveLineRepo.findPostedLinesByJournalAndDate(journalId, date);
        BigDecimal totalDebit = dayLines.stream()
                .map(l -> l.getDebit() != null ? l.getDebit() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalCredit = dayLines.stream()
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

        AccountJournal journal = journalRepo.findById(journalId).orElse(null);
        return toBalanceDTO(saved, journal);
    }

    @Transactional(readOnly = true)
    public List<JournalDailyBalanceDTO> getDailyBalances(Long journalId) {
        AccountJournal journal = journalRepo.findById(journalId).orElse(null);
        return dailyBalanceRepo.findByJournalIdOrderByDateDesc(journalId)
                .stream().map(b -> toBalanceDTO(b, journal)).collect(Collectors.toList());
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
                .reversalId(move.getReversalId())
                .isReversal(move.isReversal())
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

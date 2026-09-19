package com.erp.accounting.service;

import com.erp.accounting.dto.AnalyticAccountDTO;
import com.erp.accounting.dto.AnalyticLineDTO;
import com.erp.accounting.entity.*;
import com.erp.accounting.repository.*;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.common.service.TenantGuard;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AnalyticService {

    private final AnalyticAccountRepository analyticAccountRepo;
    private final AnalyticLineRepository analyticLineRepo;
    private final com.erp.common.service.JsonArrayStreamer jsonArrayStreamer;
    private final CompanyRepository companyRepo;
    private final AccountMoveRepository moveRepo;
    private final AccountMoveLineRepository moveLineRepo;
    private final TenantGuard tenantGuard;

    // ===================== COMPTES ANALYTIQUES =====================

    @Transactional(readOnly = true)
    public List<AnalyticAccountDTO> getAllAccounts(Long companyId) {
        return analyticAccountRepo.findByCompanyIdAndActiveTrueOrderByCode(companyId)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    /**
     * Retourne l'arborescence des comptes analytiques (racines + enfants imbriqués)
     */
    @Transactional(readOnly = true)
    public List<AnalyticAccountDTO> getAccountTree(Long companyId) {
        List<AnalyticAccount> roots = analyticAccountRepo.findRootsByCompanyId(companyId);
        return roots.stream()
                .map(this::toDTOWithChildren)
                .collect(Collectors.toList());
    }

    public AnalyticAccountDTO createAccount(AnalyticAccountDTO dto) {
        // dto.getCompanyId() vient du client — ne jamais lui faire confiance pour choisir sous
        // quelle société le compte analytique est créé (même correctif que les autres services).
        Company company = companyRepo.findById(com.erp.auth.SecurityUtils.currentCompanyId())
                .orElseThrow(() -> new EntityNotFoundException("Company not found"));

        AnalyticAccount parent = null;
        if (dto.getParentId() != null) {
            parent = analyticAccountRepo.findById(dto.getParentId())
                    .orElseThrow(() -> new EntityNotFoundException("Parent account not found"));
        }

        AnalyticAccount account = AnalyticAccount.builder()
                .code(dto.getCode())
                .name(dto.getName())
                .description(dto.getDescription())
                .parent(parent)
                .company(company)
                .active(true)
                .build();

        return toDTO(analyticAccountRepo.save(account));
    }

    public AnalyticAccountDTO updateAccount(Long id, AnalyticAccountDTO dto) {
        AnalyticAccount account = analyticAccountRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Analytic account not found: " + id));
        tenantGuard.check(account.getCompany() != null ? account.getCompany().getId() : null);

        account.setCode(dto.getCode());
        account.setName(dto.getName());
        account.setDescription(dto.getDescription());
        account.setActive(dto.isActive());

        if (dto.getParentId() != null) {
            analyticAccountRepo.findById(dto.getParentId())
                    .ifPresent(account::setParent);
        } else {
            account.setParent(null);
        }

        return toDTO(analyticAccountRepo.save(account));
    }

    public void deleteAccount(Long id) {
        AnalyticAccount account = analyticAccountRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Analytic account not found: " + id));
        tenantGuard.check(account.getCompany() != null ? account.getCompany().getId() : null);
        account.setActive(false);
        analyticAccountRepo.save(account);
    }

    // ===================== LIGNES ANALYTIQUES =====================

    @Transactional(readOnly = true)
    public void streamLines(Long companyId, Long analyticAccountId, LocalDate from, LocalDate to, java.io.OutputStream out) throws java.io.IOException {
        List<Long> ids = analyticLineRepo.findByFilters(companyId, analyticAccountId, from, to).stream()
                .map(l -> l.getId()).collect(Collectors.toList());
        jsonArrayStreamer.streamByIds(out, ids, analyticLineRepo::findAllById, l -> l.getId(), this::toLineDTO);
    }

    @Transactional(readOnly = true)
    public List<AnalyticLineDTO> getLines(Long companyId, Long analyticAccountId, LocalDate from, LocalDate to) {
        return analyticLineRepo.findByFilters(companyId, analyticAccountId, from, to)
                .stream()
                .map(this::toLineDTO)
                .collect(Collectors.toList());
    }

    // ===================== RAPPORT ANALYTIQUE =====================

    /**
     * Balance analytique : pour chaque compte analytique, le total des mouvements.
     */
    @Transactional(readOnly = true)
    public List<AnalyticBalanceLine> getAnalyticBalance(Long companyId, LocalDate from, LocalDate to) {
        List<AnalyticLine> lines = analyticLineRepo.findByFilters(companyId, null, from, to);

        // Regrouper par compte analytique
        Map<Long, AnalyticBalanceLine> grouped = new LinkedHashMap<>();
        for (AnalyticLine line : lines) {
            Long accId = line.getAnalyticAccount().getId();
            grouped.computeIfAbsent(accId, k -> {
                AnalyticBalanceLine bl = new AnalyticBalanceLine();
                bl.analyticAccountId = accId;
                bl.analyticAccountCode = line.getAnalyticAccount().getCode();
                bl.analyticAccountName = line.getAnalyticAccount().getName();
                bl.parentId = line.getAnalyticAccount().getParent() != null
                        ? line.getAnalyticAccount().getParent().getId() : null;
                bl.parentName = line.getAnalyticAccount().getParent() != null
                        ? line.getAnalyticAccount().getParent().getName() : null;
                bl.totalDebit = BigDecimal.ZERO;
                bl.totalCredit = BigDecimal.ZERO;
                return bl;
            });

            AnalyticBalanceLine bl = grouped.get(accId);
            if (line.getAmount().compareTo(BigDecimal.ZERO) > 0) {
                bl.totalDebit = bl.totalDebit.add(line.getAmount());
            } else {
                bl.totalCredit = bl.totalCredit.add(line.getAmount().abs());
            }
        }

        return grouped.values().stream()
                .sorted((a, b) -> a.analyticAccountCode.compareTo(b.analyticAccountCode))
                .collect(Collectors.toList());
    }

    public static class AnalyticBalanceLine {
        public Long analyticAccountId;
        public String analyticAccountCode;
        public String analyticAccountName;
        public Long parentId;
        public String parentName;
        public BigDecimal totalDebit;
        public BigDecimal totalCredit;

        public BigDecimal getSolde() {
            return totalDebit.subtract(totalCredit);
        }
    }

    // ===================== RECALCUL =====================

    /**
     * Recalcule toutes les lignes analytiques pour les écritures validées d'une société.
     * Utile pour régénérer les données après migration ou correction.
     */
    public int recalculateAnalyticLines(Long companyId) {
        List<AccountMove> moves = moveRepo.findPostedWithAnalytic(companyId);
        int count = 0;

        for (AccountMove move : moves) {
            List<AccountMoveLine> lines = moveLineRepo.findByMoveIdWithAnalytic(move.getId());
            for (AccountMoveLine line : lines) {
                if (line.getAnalyticAccount() == null &&
                        (line.getAnalyticDistributions() == null || line.getAnalyticDistributions().isEmpty())) {
                    continue;
                }

                analyticLineRepo.deleteByMoveLineId(line.getId());
                BigDecimal lineAmount = line.getDebit().subtract(line.getCredit());

                List<AnalyticDistributionItem> distributions = line.getAnalyticDistributions();
                if (distributions != null && !distributions.isEmpty()) {
                    for (AnalyticDistributionItem dist : distributions) {
                        if (dist.getAnalyticAccount() == null) continue;
                        analyticLineRepo.save(AnalyticLine.builder()
                                .date(line.getDate())
                                .name(line.getName())
                                .amount(lineAmount.signum() >= 0 ? dist.getAmount() : dist.getAmount().negate())
                                .analyticAccount(dist.getAnalyticAccount())
                                .moveLine(line)
                                .generalAccount(line.getAccount())
                                .company(line.getCompany())
                                .build());
                        count++;
                    }
                } else if (line.getAnalyticAccount() != null) {
                    analyticLineRepo.save(AnalyticLine.builder()
                            .date(line.getDate())
                            .name(line.getName())
                            .amount(lineAmount)
                            .analyticAccount(line.getAnalyticAccount())
                            .moveLine(line)
                            .generalAccount(line.getAccount())
                            .company(line.getCompany())
                            .build());
                    count++;
                }
            }
        }

        log.info("Recalcul analytique société {} : {} lignes générées pour {} écritures", companyId, count, moves.size());
        return count;
    }

    // ===================== MAPPING =====================

    public AnalyticAccountDTO toDTO(AnalyticAccount account) {
        return AnalyticAccountDTO.builder()
                .id(account.getId())
                .code(account.getCode())
                .name(account.getName())
                .description(account.getDescription())
                .parentId(account.getParent() != null ? account.getParent().getId() : null)
                .parentName(account.getParent() != null ? account.getParent().getName() : null)
                .companyId(account.getCompany() != null ? account.getCompany().getId() : null)
                .active(account.isActive())
                .build();
    }

    private AnalyticAccountDTO toDTOWithChildren(AnalyticAccount account) {
        AnalyticAccountDTO dto = toDTO(account);
        if (account.getChildren() != null && !account.getChildren().isEmpty()) {
            dto.setChildren(account.getChildren().stream()
                    .filter(AnalyticAccount::isActive)
                    .map(this::toDTOWithChildren)
                    .collect(Collectors.toList()));
        }
        return dto;
    }

    public AnalyticLineDTO toLineDTO(AnalyticLine line) {
        return AnalyticLineDTO.builder()
                .id(line.getId())
                .date(line.getDate())
                .name(line.getName())
                .amount(line.getAmount())
                .analyticAccountId(line.getAnalyticAccount().getId())
                .analyticAccountCode(line.getAnalyticAccount().getCode())
                .analyticAccountName(line.getAnalyticAccount().getName())
                .moveLineId(line.getMoveLine() != null ? line.getMoveLine().getId() : null)
                .generalAccountId(line.getGeneralAccount() != null ? line.getGeneralAccount().getId() : null)
                .generalAccountCode(line.getGeneralAccount() != null ? line.getGeneralAccount().getCode() : null)
                .generalAccountName(line.getGeneralAccount() != null ? line.getGeneralAccount().getName() : null)
                .companyId(line.getCompany() != null ? line.getCompany().getId() : null)
                .build();
    }
}

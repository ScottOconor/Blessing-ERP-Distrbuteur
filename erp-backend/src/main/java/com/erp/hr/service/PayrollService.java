package com.erp.hr.service;

import com.erp.accounting.entity.AccountAccount;
import com.erp.accounting.entity.AccountJournal;
import com.erp.accounting.entity.AccountMove;
import com.erp.accounting.entity.AccountMoveLine;
import com.erp.accounting.repository.AccountAccountRepository;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.accounting.repository.AccountMoveRepository;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.common.service.TenantGuard;
import com.erp.hr.dto.LeaveBalanceSummary;
import com.erp.hr.dto.PayslipDTO;
import com.erp.hr.dto.PayslipRequest;
import com.erp.hr.dto.PayslipRunRequest;
import com.erp.hr.entity.*;
import com.erp.hr.repository.*;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.time.Year;
import java.util.*;

/** Calcul, persistance, validation comptable et lots des bulletins de paie. */
@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class PayrollService {

    private static final BigDecimal ZERO = BigDecimal.ZERO;

    private final PayslipRepository payslipRepo;
    private final PayslipLineRepository lineRepo;
    private final PayslipInputRepository inputRepo;
    private final PayslipWorkedDaysRepository workedDaysRepo;
    private final PayslipRunRepository runRepo;
    private final EmployeeRepository employeeRepo;
    private final DepartmentRepository departmentRepo;
    private final JobPositionRepository jobRepo;
    private final EmployeeContractRepository contractRepo;
    private final SalaryRuleRepository ruleRepo;
    private final SalaryRuleCategoryRepository categoryRepo;
    private final ProfessionalCategoryRepository professionalCategoryRepo;
    private final EchelonRepository echelonRepo;
    private final PayrollEngine engine;
    private final com.erp.hr.init.PayrollSeeder payrollSeeder;
    private final LeaveService leaveService;

    // Comptabilité
    private final CompanyRepository companyRepo;
    private final AccountJournalRepository journalRepo;
    private final AccountAccountRepository accountRepo;
    private final AccountMoveRepository moveRepo;
    private final com.erp.accounting.service.FiscalLockGuard fiscalLockGuard;
    private final com.erp.accounting.service.AccountingService accountingService;
    private final TenantGuard tenantGuard;

    // ─────────────── Lecture ───────────────

    @Transactional(readOnly = true)
    public List<Payslip> getPayslips(Long companyId) {
        return payslipRepo.findByCompanyIdOrderByPeriodToDescIdDesc(companyId);
    }

    @Transactional(readOnly = true)
    public PayslipDTO getPayslip(Long id) {
        Payslip p = payslipRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Bulletin introuvable: " + id));
        tenantGuard.check(p.getCompanyId());
        return toDTO(p);
    }

    private PayslipDTO toDTO(Payslip p) {
        String departmentName = null;
        String jobName = null;
        LocalDate hireDate = null;
        Employee emp = employeeRepo.findById(p.getEmployeeId()).orElse(null);
        if (emp != null) {
            hireDate = emp.getHireDate();
            if (emp.getDepartmentId() != null) {
                departmentName = departmentRepo.findById(emp.getDepartmentId()).map(Department::getName).orElse(null);
            }
            if (emp.getJobId() != null) {
                jobName = jobRepo.findById(emp.getJobId()).map(JobPosition::getName).orElse(null);
            }
        }
        String professionalCategoryName = null;
        String echelonName = null;
        EmployeeContract contract = contractRepo.findById(p.getContractId()).orElse(null);
        if (contract != null) {
            Long companyId = p.getCompanyId();
            if (contract.getProfessionalCategory() != null) {
                professionalCategoryName = professionalCategoryRepo.findByCompanyIdOrderBySequenceAscNameAsc(companyId).stream()
                        .filter(c -> c.getCode().equals(contract.getProfessionalCategory()))
                        .findFirst().map(ProfessionalCategory::getName).orElse(contract.getProfessionalCategory());
            }
            if (contract.getEchelonId() != null) {
                echelonName = echelonRepo.findById(contract.getEchelonId()).map(Echelon::getName).orElse(null);
            }
        }
        LocalDate asOf = p.getPeriodTo() != null ? p.getPeriodTo() : LocalDate.now();
        List<LeaveBalanceSummary> leaveBalances = leaveService.computeBalances(p.getCompanyId(), p.getEmployeeId(), asOf.getYear(), asOf);

        return PayslipDTO.builder()
                .payslip(p)
                .lines(lineRepo.findByPayslipIdOrderBySequenceAscIdAsc(p.getId()))
                .inputs(inputRepo.findByPayslipId(p.getId()))
                .workedDays(workedDaysRepo.findByPayslipId(p.getId()))
                .departmentName(departmentName)
                .jobName(jobName)
                .hireDate(hireDate)
                .professionalCategoryName(professionalCategoryName)
                .echelonName(echelonName)
                .leaveBalances(leaveBalances)
                .build();
    }

    // ─────────────── Calcul d'un bulletin ───────────────

    /** Crée (ou recalcule) un bulletin de paie pour un employé sur une période. */
    public PayslipDTO computePayslip(PayslipRequest req) {
        Employee emp = employeeRepo.findById(req.getEmployeeId())
                .orElseThrow(() -> new EntityNotFoundException("Employé introuvable: " + req.getEmployeeId()));
        tenantGuard.check(emp.getCompanyId());
        // La société du bulletin est TOUJOURS celle réelle de l'employé — req.getCompanyId()
        // (client) était auparavant préféré quand non-nul, permettant de générer un bulletin
        // rattaché à une société arbitraire.
        Long companyId = emp.getCompanyId();

        EmployeeContract contract = resolveContract(req, emp);

        Payslip slip = Payslip.builder()
                .employeeId(emp.getId())
                .employeeName((emp.getFirstName() == null ? "" : emp.getFirstName() + " ") + emp.getLastName())
                .employeeMatricule(emp.getMatricule())
                .contractId(contract.getId())
                .runId(req.getRunId())
                .periodFrom(req.getPeriodFrom())
                .periodTo(req.getPeriodTo())
                .journalId(req.getJournalId())
                .state("DRAFT")
                .companyId(companyId)
                .build();
        slip.setName(generatePayslipName(companyId));
        Payslip saved = payslipRepo.save(slip);

        // Éléments variables saisis
        List<PayslipInput> inputEntities = new ArrayList<>();
        Map<String, BigDecimal> inputMap = new HashMap<>();
        if (req.getInputs() != null) {
            for (PayslipRequest.InputDTO in : req.getInputs()) {
                if (in.getCode() == null || in.getCode().isBlank()) continue;
                BigDecimal amt = in.getAmount() != null ? in.getAmount() : ZERO;
                inputEntities.add(PayslipInput.builder()
                        .payslipId(saved.getId()).code(in.getCode().trim())
                        .name(in.getName()).amount(amt).companyId(companyId).build());
                inputMap.merge(in.getCode().trim(), amt, BigDecimal::add);
            }
            inputRepo.saveAll(inputEntities);
        }

        // Jours saisis (jours travaillés, absence, congé…)
        List<PayslipWorkedDays> workedDaysEntities = new ArrayList<>();
        Map<String, BigDecimal> workedDaysMap = new HashMap<>();
        if (req.getWorkedDays() != null) {
            for (PayslipRequest.WorkedDaysDTO wd : req.getWorkedDays()) {
                if (wd.getCode() == null || wd.getCode().isBlank()) continue;
                BigDecimal days = wd.getNumberOfDays() != null ? wd.getNumberOfDays() : ZERO;
                workedDaysEntities.add(PayslipWorkedDays.builder()
                        .payslipId(saved.getId()).code(wd.getCode().trim())
                        .name(wd.getName()).numberOfDays(days).companyId(companyId).build());
                workedDaysMap.merge(wd.getCode().trim(), days, BigDecimal::add);
            }
            workedDaysRepo.saveAll(workedDaysEntities);
        }

        recomputeLines(saved, contract, inputMap, workedDaysMap);
        return toDTO(saved);
    }

    /** Recalcule un bulletin brouillon existant. */
    public PayslipDTO recompute(Long payslipId) {
        Payslip slip = payslipRepo.findById(payslipId)
                .orElseThrow(() -> new EntityNotFoundException("Bulletin introuvable: " + payslipId));
        tenantGuard.check(slip.getCompanyId());
        if (!"DRAFT".equals(slip.getState())) {
            throw new IllegalStateException("Seul un bulletin brouillon peut être recalculé");
        }
        EmployeeContract contract = contractRepo.findById(slip.getContractId())
                .orElseThrow(() -> new EntityNotFoundException("Contrat introuvable"));
        Map<String, BigDecimal> inputMap = new HashMap<>();
        for (PayslipInput in : inputRepo.findByPayslipId(payslipId)) {
            inputMap.merge(in.getCode(), in.getAmount() != null ? in.getAmount() : ZERO, BigDecimal::add);
        }
        Map<String, BigDecimal> workedDaysMap = new HashMap<>();
        for (PayslipWorkedDays wd : workedDaysRepo.findByPayslipId(payslipId)) {
            workedDaysMap.merge(wd.getCode(), wd.getNumberOfDays() != null ? wd.getNumberOfDays() : ZERO, BigDecimal::add);
        }
        recomputeLines(slip, contract, inputMap, workedDaysMap);
        return toDTO(slip);
    }

    private void recomputeLines(Payslip slip, EmployeeContract contract, Map<String, BigDecimal> inputMap,
                                Map<String, BigDecimal> workedDaysMap) {
        Long companyId = slip.getCompanyId();
        payrollSeeder.seedIfEmpty(companyId);
        payrollSeeder.backfillBuiltinRates(companyId);
        List<SalaryRule> rules = ruleRepo.findByCompanyIdAndActiveTrueOrderBySequenceAscIdAsc(companyId);
        List<SalaryRuleCategory> categories = categoryRepo.findByCompanyIdOrderBySequenceAsc(companyId);

        // Congés déclarés chevauchant la période : injectés dans les jours saisis (en plus de la
        // saisie manuelle) pour être repris par une éventuelle règle salariale sur ce code — aucune
        // modification du moteur de calcul, on réutilise le mécanisme quantityWorkedDaysCode existant.
        if (slip.getPeriodFrom() != null && slip.getPeriodTo() != null) {
            leaveService.getLeaveWorkedDays(companyId, slip.getEmployeeId(), slip.getPeriodFrom(), slip.getPeriodTo())
                    .forEach((code, days) -> workedDaysMap.merge(code, days, BigDecimal::add));
        }

        BigDecimal prorationFactor = computeProrationFactor(contract, slip.getPeriodFrom(), slip.getPeriodTo());
        PayrollEngine.Result res = engine.compute(contract, rules, categories, inputMap, workedDaysMap, prorationFactor);

        lineRepo.deleteByPayslipId(slip.getId());
        for (PayslipLine l : res.lines) {
            l.setPayslipId(slip.getId());
            l.setCompanyId(companyId);
        }
        lineRepo.saveAll(res.lines);

        slip.setTotalBrut(res.category("GROSS"));
        slip.setTotalCotisationsSalariales(res.category("DED").negate());
        slip.setTotalNet(res.category("NET"));
        slip.setTotalChargesPatronales(res.category("COMP"));
        payslipRepo.save(slip);
    }

    /**
     * Fraction (0 à 1) du salaire de base à verser : 1 si le contrat couvre l'intégralité de la
     * période du bulletin, sinon le ratio jours-contrat-actif / jours-période (mois de proration
     * classique : embauche ou fin de contrat en cours de période).
     */
    private BigDecimal computeProrationFactor(EmployeeContract contract, LocalDate periodFrom, LocalDate periodTo) {
        if (periodFrom == null || periodTo == null || !periodTo.isAfter(periodFrom.minusDays(1))) return BigDecimal.ONE;

        LocalDate effectiveStart = contract.getDateStart() != null && contract.getDateStart().isAfter(periodFrom)
                ? contract.getDateStart() : periodFrom;
        LocalDate effectiveEnd = contract.getDateEnd() != null && contract.getDateEnd().isBefore(periodTo)
                ? contract.getDateEnd() : periodTo;

        long periodDays = ChronoUnit.DAYS.between(periodFrom, periodTo) + 1;
        if (periodDays <= 0) return BigDecimal.ONE;
        if (effectiveEnd.isBefore(effectiveStart)) return BigDecimal.ZERO; // contrat pas actif du tout sur la période

        long activeDays = ChronoUnit.DAYS.between(effectiveStart, effectiveEnd) + 1;
        if (activeDays >= periodDays) return BigDecimal.ONE;

        return BigDecimal.valueOf(activeDays)
                .divide(BigDecimal.valueOf(periodDays), 6, RoundingMode.HALF_UP);
    }

    private EmployeeContract resolveContract(PayslipRequest req, Employee emp) {
        if (req.getContractId() != null) {
            return contractRepo.findById(req.getContractId())
                    .orElseThrow(() -> new EntityNotFoundException("Contrat introuvable: " + req.getContractId()));
        }
        return contractRepo.findFirstByEmployeeIdAndStateOrderByDateStartDesc(emp.getId(), "RUNNING")
                .or(() -> contractRepo.findByEmployeeIdOrderByDateStartDesc(emp.getId()).stream().findFirst())
                .orElseThrow(() -> new IllegalStateException(
                        "Aucun contrat pour l'employé " + emp.getMatricule() + " — créez d'abord un contrat."));
    }

    // ─────────────── Cycle de vie ───────────────

    public PayslipDTO verify(Long id) {
        Payslip slip = payslipRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Bulletin introuvable"));
        tenantGuard.check(slip.getCompanyId());
        // Sans ce garde-fou, remettre en vérification un bulletin déjà comptabilisé (DONE)
        // permettait de le re-valider ensuite : generateAccountingMove() n'est pas idempotent et
        // postait une DEUXIÈME écriture pour la même paie, en écrasant silencieusement le pointeur
        // vers la première (désormais orpheline mais toujours postée) — double débit en comptabilité.
        if ("DONE".equals(slip.getState())) {
            throw new IllegalStateException("Un bulletin déjà comptabilisé ne peut pas être remis en vérification");
        }
        slip.setState("VERIFY");
        return toDTO(payslipRepo.save(slip));
    }

    public PayslipDTO setDraft(Long id) {
        Payslip slip = payslipRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Bulletin introuvable"));
        tenantGuard.check(slip.getCompanyId());
        if ("DONE".equals(slip.getState())) {
            throw new IllegalStateException("Un bulletin comptabilisé ne peut être remis en brouillon");
        }
        slip.setState("DRAFT");
        return toDTO(payslipRepo.save(slip));
    }

    public PayslipDTO cancel(Long id) {
        Payslip slip = payslipRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Bulletin introuvable"));
        tenantGuard.check(slip.getCompanyId());
        if ("CANCELLED".equals(slip.getState())) {
            throw new IllegalStateException("Ce bulletin est déjà annulé");
        }
        if ("DONE".equals(slip.getState())) {
            // Bulletin déjà comptabilisé : sans ces deux contrôles, l'annulation laissait
            // l'écriture postée en l'état (désynchronisation paie/comptabilité, l'AccountMove
            // reste "posted" alors que le bulletin lui-même passe à CANCELLED) et pouvait
            // contourner le verrou d'exercice que FiscalLockGuard applique partout ailleurs.
            fiscalLockGuard.assertPeriodOpen(slip.getCompanyId(),
                    slip.getPeriodTo() != null ? slip.getPeriodTo() : java.time.LocalDate.now());
            if (slip.getAccountMoveId() != null) {
                accountingService.reverseEntry(slip.getAccountMoveId());
            }
        }
        slip.setState("CANCELLED");
        return toDTO(payslipRepo.save(slip));
    }

    /** Valide le bulletin et génère l'écriture comptable de paie (si comptes configurés). */
    public PayslipDTO validate(Long id) {
        Payslip slip = payslipRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Bulletin introuvable"));
        tenantGuard.check(slip.getCompanyId());
        if ("DONE".equals(slip.getState())) throw new IllegalStateException("Bulletin déjà comptabilisé");
        fiscalLockGuard.assertPeriodOpen(slip.getCompanyId(),
                slip.getPeriodTo() != null ? slip.getPeriodTo() : java.time.LocalDate.now());

        List<PayslipLine> lines = lineRepo.findByPayslipIdOrderBySequenceAscIdAsc(slip.getId());
        generateAccountingMove(slip, lines);

        slip.setState("DONE");
        return toDTO(payslipRepo.save(slip));
    }

    private void generateAccountingMove(Payslip slip, List<PayslipLine> lines) {
        Long companyId = slip.getCompanyId();
        Company company = companyRepo.findById(companyId).orElse(null);
        if (company == null) return;

        AccountJournal journal = resolveJournal(slip.getJournalId(), companyId);
        if (journal == null) {
            log.warn("Aucun journal de paie — écriture ignorée pour {}", slip.getName());
            return;
        }

        // Si des comptes sont référencés mais absents du plan comptable, on valide le bulletin
        // SANS écriture (l'utilisateur importera/configurera le plan avant de comptabiliser).
        for (PayslipLine l : lines) {
            BigDecimal amount = l.getTotal() == null ? ZERO : l.getTotal().abs();
            if (amount.compareTo(ZERO) == 0) continue;
            if (codeSetButMissing(l.getAccountDebitCode(), companyId)
                    || codeSetButMissing(l.getAccountCreditCode(), companyId)) {
                log.warn("Comptes de paie absents du plan — bulletin {} validé sans écriture", slip.getName());
                return;
            }
        }

        List<AccountMoveLine> moveLines = new ArrayList<>();
        BigDecimal totalDebit = ZERO, totalCredit = ZERO;
        for (PayslipLine l : lines) {
            BigDecimal amount = l.getTotal() == null ? ZERO : l.getTotal().abs().setScale(0, RoundingMode.HALF_UP);
            if (amount.compareTo(ZERO) == 0) continue;

            AccountAccount debit = account(l.getAccountDebitCode(), companyId);
            AccountAccount credit = account(l.getAccountCreditCode(), companyId);
            if (debit != null) {
                moveLines.add(AccountMoveLine.builder()
                        .account(debit).name(l.getName()).date(slip.getPeriodTo())
                        .debit(amount).credit(ZERO).journal(journal).company(company).build());
                totalDebit = totalDebit.add(amount);
            }
            if (credit != null) {
                moveLines.add(AccountMoveLine.builder()
                        .account(credit).name(l.getName()).date(slip.getPeriodTo())
                        .debit(ZERO).credit(amount).journal(journal).company(company).build());
                totalCredit = totalCredit.add(amount);
            }
        }

        if (moveLines.isEmpty()) {
            log.info("Aucun compte configuré sur les règles — bulletin {} validé sans écriture", slip.getName());
            return;
        }
        if (totalDebit.compareTo(totalCredit) != 0) {
            throw new IllegalStateException(String.format(
                    "Écriture de paie déséquilibrée (%s : débit %s ≠ crédit %s). " +
                    "Vérifiez les comptes de débit/crédit des règles salariales.",
                    slip.getName(), totalDebit, totalCredit));
        }

        AccountMove move = AccountMove.builder()
                .name(slip.getName())
                .date(slip.getPeriodTo())
                .ref("Paie " + slip.getEmployeeName() + " - " + slip.getPeriodTo())
                .state("draft")
                .journal(journal)
                .company(company)
                .build();
        for (AccountMoveLine ml : moveLines) ml.setMove(move);
        move.setLines(moveLines);
        AccountMove saved = moveRepo.save(move);
        moveRepo.updateState(saved.getId(), "posted");
        slip.setAccountMoveId(saved.getId());
    }

    private AccountJournal resolveJournal(Long journalId, Long companyId) {
        if (journalId != null) {
            return journalRepo.findById(journalId).orElse(null);
        }
        return journalRepo.findByCompanyIdAndActiveTrue(companyId).stream()
                .filter(j -> "general".equals(j.getType()) || "misc".equals(j.getType()))
                .findFirst()
                .orElse(journalRepo.findByCompanyIdAndActiveTrue(companyId).stream().findFirst().orElse(null));
    }

    private AccountAccount account(String code, Long companyId) {
        if (code == null || code.isBlank()) return null;
        return accountRepo.findFirstByCodeAndCompanyId(code, companyId).orElse(null);
    }

    /** true si un code de compte est renseigné mais introuvable dans le plan. */
    private boolean codeSetButMissing(String code, Long companyId) {
        return code != null && !code.isBlank()
                && accountRepo.findFirstByCodeAndCompanyId(code, companyId).isEmpty();
    }

    // ─────────────── Lots de paie ───────────────

    @Transactional(readOnly = true)
    public List<PayslipRun> getRuns(Long companyId) {
        return runRepo.findByCompanyIdOrderByDateEndDescIdDesc(companyId);
    }

    /** Génère un lot : un bulletin par employé ciblé (ou tous les actifs avec contrat). */
    public PayslipRun generateRun(PayslipRunRequest req) {
        PayslipRun run = PayslipRun.builder()
                .name(req.getName() != null ? req.getName() : "Paie " + req.getDateEnd())
                .dateStart(req.getDateStart()).dateEnd(req.getDateEnd())
                .state("VERIFY").companyId(req.getCompanyId()).build();
        PayslipRun savedRun = runRepo.save(run);

        List<Long> targets = req.getEmployeeIds();
        if (targets == null || targets.isEmpty()) {
            targets = employeeRepo.findByCompanyIdAndStatusOrderByLastNameAsc(req.getCompanyId(), "ACTIF")
                    .stream().map(Employee::getId).toList();
        }

        for (Long empId : targets) {
            boolean hasContract = contractRepo.findFirstByEmployeeIdAndStateOrderByDateStartDesc(empId, "RUNNING").isPresent()
                    || !contractRepo.findByEmployeeIdOrderByDateStartDesc(empId).isEmpty();
            if (!hasContract) continue;
            PayslipRequest pr = PayslipRequest.builder()
                    .companyId(req.getCompanyId()).employeeId(empId)
                    .runId(savedRun.getId()).periodFrom(req.getDateStart()).periodTo(req.getDateEnd())
                    .journalId(req.getJournalId()).build();
            computePayslip(pr);
        }
        return savedRun;
    }

    @Transactional(readOnly = true)
    public List<PayslipDTO> getRunPayslips(Long runId) {
        return payslipRepo.findByRunId(runId).stream().map(this::toDTO).toList();
    }

    /** Valide (comptabilise) tous les bulletins d'un lot. */
    public PayslipRun validateRun(Long runId) {
        PayslipRun run = runRepo.findById(runId).orElseThrow(() -> new EntityNotFoundException("Lot introuvable"));
        for (Payslip slip : payslipRepo.findByRunId(runId)) {
            if (!"DONE".equals(slip.getState()) && !"CANCELLED".equals(slip.getState())) {
                validate(slip.getId());
            }
        }
        run.setState("DONE");
        return runRepo.save(run);
    }

    /**
     * Livre de paie d'un lot : tableau croisé employés × catégories salariales, avec totaux
     * généraux. Base de la déclaration CNPS mensuelle (DIPE).
     */
    @Transactional(readOnly = true)
    public com.erp.hr.dto.PayrollRegisterDTO getRunRegister(Long runId) {
        PayslipRun run = runRepo.findById(runId).orElseThrow(() -> new EntityNotFoundException("Lot introuvable: " + runId));
        List<SalaryRuleCategory> cats = categoryRepo.findByCompanyIdOrderBySequenceAsc(run.getCompanyId());
        List<String> codes = cats.stream().map(SalaryRuleCategory::getCode).toList();
        List<String> names = cats.stream().map(SalaryRuleCategory::getName).toList();

        Map<String, BigDecimal> grandTotals = new LinkedHashMap<>();
        for (String c : codes) grandTotals.put(c, ZERO);

        List<com.erp.hr.dto.PayrollRegisterDTO.RowDTO> rows = new ArrayList<>();
        for (Payslip slip : payslipRepo.findByRunId(runId)) {
            if ("CANCELLED".equals(slip.getState())) continue;
            Map<String, BigDecimal> amounts = new LinkedHashMap<>();
            for (String c : codes) amounts.put(c, ZERO);
            for (PayslipLine l : lineRepo.findByPayslipIdOrderBySequenceAscIdAsc(slip.getId())) {
                BigDecimal t = l.getTotal() != null ? l.getTotal() : ZERO;
                amounts.merge(l.getCategoryCode(), t, BigDecimal::add);
                grandTotals.merge(l.getCategoryCode(), t, BigDecimal::add);
            }
            rows.add(com.erp.hr.dto.PayrollRegisterDTO.RowDTO.builder()
                    .employeeId(slip.getEmployeeId())
                    .matricule(slip.getEmployeeMatricule())
                    .employeeName(slip.getEmployeeName())
                    .amounts(amounts)
                    .build());
        }

        return com.erp.hr.dto.PayrollRegisterDTO.builder()
                .runName(run.getName()).dateStart(run.getDateStart()).dateEnd(run.getDateEnd())
                .categoryCodes(codes).categoryNames(names).rows(rows).totals(grandTotals)
                .build();
    }

    private String generatePayslipName(Long companyId) {
        long next = payslipRepo.countByCompanyId(companyId) + 1;
        return String.format("BULL-%d-%05d", Year.now().getValue(), next);
    }
}

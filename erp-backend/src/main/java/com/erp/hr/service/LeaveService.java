package com.erp.hr.service;

import com.erp.common.service.TenantGuard;
import com.erp.hr.dto.LeaveBalanceSummary;
import com.erp.hr.entity.Employee;
import com.erp.hr.entity.LeaveBalance;
import com.erp.hr.entity.LeaveDeclaration;
import com.erp.hr.entity.LeaveType;
import com.erp.hr.init.LeaveTypeSeeder;
import com.erp.hr.repository.EmployeeRepository;
import com.erp.hr.repository.LeaveBalanceRepository;
import com.erp.hr.repository.LeaveDeclarationRepository;
import com.erp.hr.repository.LeaveTypeRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Gestion des congés : catalogue des types, déclarations (saisies directement par le RH — pas de
 * demande/validation par l'employé) et compteurs Dû/Pris/Reste affichés sur le bulletin.
 */
@Service
@RequiredArgsConstructor
@Transactional
public class LeaveService {

    private static final BigDecimal ZERO = BigDecimal.ZERO;

    private final LeaveTypeRepository typeRepo;
    private final LeaveDeclarationRepository declarationRepo;
    private final LeaveBalanceRepository balanceRepo;
    private final EmployeeRepository employeeRepo;
    private final LeaveTypeSeeder leaveTypeSeeder;
    private final TenantGuard tenantGuard;

    // ─────────────── Types de congés ───────────────

    public List<LeaveType> getLeaveTypes(Long companyId) {
        tenantGuard.check(companyId);
        leaveTypeSeeder.seedIfEmpty(companyId);
        return typeRepo.findByCompanyIdOrderByNameAsc(companyId);
    }

    public LeaveType saveLeaveType(LeaveType t) {
        if (t.getId() != null) {
            LeaveType existing = typeRepo.findById(t.getId())
                    .orElseThrow(() -> new EntityNotFoundException("Type de congé introuvable: " + t.getId()));
            tenantGuard.check(existing.getCompanyId());
            t.setCompanyId(existing.getCompanyId());
        } else {
            t.setCompanyId(com.erp.auth.SecurityUtils.currentCompanyId());
        }
        return typeRepo.save(t);
    }

    public void deleteLeaveType(Long id) {
        LeaveType t = typeRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Type de congé introuvable: " + id));
        tenantGuard.check(t.getCompanyId());
        typeRepo.deleteById(id);
    }

    // ─────────────── Déclarations ───────────────

    @Transactional(readOnly = true)
    public List<LeaveDeclaration> getDeclarations(Long companyId, Long employeeId) {
        tenantGuard.check(companyId);
        return employeeId != null
                ? declarationRepo.findByCompanyIdAndEmployeeIdOrderByDateFromDesc(companyId, employeeId)
                : declarationRepo.findByCompanyIdOrderByDateFromDesc(companyId);
    }

    public LeaveDeclaration saveDeclaration(LeaveDeclaration d) {
        Long companyId;
        if (d.getId() != null) {
            LeaveDeclaration existing = declarationRepo.findById(d.getId())
                    .orElseThrow(() -> new EntityNotFoundException("Déclaration introuvable: " + d.getId()));
            tenantGuard.check(existing.getCompanyId());
            companyId = existing.getCompanyId();
        } else {
            companyId = com.erp.auth.SecurityUtils.currentCompanyId();
        }
        d.setCompanyId(companyId);

        // Un employé ne peut pas être déclaré en congé sous deux motifs différents (ou deux fois
        // pour le même) sur des dates qui se chevauchent.
        boolean overlap = declarationRepo
                .findByCompanyIdAndEmployeeIdAndDateFromLessThanEqualAndDateEndGreaterThanEqual(
                        companyId, d.getEmployeeId(), d.getDateEnd(), d.getDateFrom())
                .stream()
                .anyMatch(existing -> !existing.getId().equals(d.getId()));
        if (overlap) {
            throw new IllegalStateException(
                "Cet employé a déjà une déclaration de congé sur une période qui chevauche celle-ci.");
        }
        return declarationRepo.save(d);
    }

    public void deleteDeclaration(Long id) {
        LeaveDeclaration d = declarationRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Déclaration introuvable: " + id));
        tenantGuard.check(d.getCompanyId());
        declarationRepo.deleteById(id);
    }

    // ─────────────── Compteurs (Dû / Pris / Reste) ───────────────

    /** Report de solde N-1 : mise à jour (création si absente) pour un employé/type/année. */
    public LeaveBalance saveCarryOver(Long companyId, Long employeeId, Long leaveTypeId, int year, BigDecimal carryOver) {
        tenantGuard.check(companyId);
        LeaveBalance b = balanceRepo.findByCompanyIdAndEmployeeIdAndLeaveTypeIdAndYear(companyId, employeeId, leaveTypeId, year)
                .orElse(LeaveBalance.builder().employeeId(employeeId).leaveTypeId(leaveTypeId).year(year).companyId(companyId).build());
        b.setCarryOver(carryOver == null ? ZERO : carryOver);
        return balanceRepo.save(b);
    }

    /** Compteurs de tous les types de congés actifs pour un employé, sur une année, calculés à la date du jour. */
    @Transactional(readOnly = true)
    public List<LeaveBalanceSummary> getBalances(Long companyId, Long employeeId, int year) {
        tenantGuard.check(companyId);
        return computeBalances(companyId, employeeId, year, LocalDate.now());
    }

    /** Variante utilisée par le calcul de paie : compteurs arrêtés à la fin de la période du bulletin. */
    @Transactional(readOnly = true)
    public List<LeaveBalanceSummary> computeBalances(Long companyId, Long employeeId, int year, LocalDate asOfDate) {
        leaveTypeSeeder.seedIfEmpty(companyId);
        Employee emp = employeeRepo.findById(employeeId).orElse(null);
        LocalDate hireDate = emp != null ? emp.getHireDate() : null;

        List<LeaveType> types = typeRepo.findByCompanyIdOrderByNameAsc(companyId);
        Map<Long, LeaveBalance> carryOvers = new HashMap<>();
        balanceRepo.findByCompanyIdAndEmployeeIdAndYear(companyId, employeeId, year)
                .forEach(b -> carryOvers.put(b.getLeaveTypeId(), b));

        return types.stream().filter(LeaveType::isActive).map(t -> {
            BigDecimal carryOver = carryOvers.containsKey(t.getId()) ? carryOvers.get(t.getId()).getCarryOver() : ZERO;
            BigDecimal accrued = accrued(t, year, asOfDate, hireDate);
            BigDecimal taken = taken(companyId, employeeId, t.getId(), year);
            // Borné à zéro pour l'affichage : un solde négatif signalerait une prise excédant les
            // droits acquis, ce que saveDeclaration ne permet pas de créer sans passer par un
            // report de solde (carryOver) explicite — computeBalances reste une lecture, jamais
            // une validation, donc ne doit pas afficher de négatif trompeur.
            BigDecimal remaining = carryOver.add(accrued).subtract(taken).max(ZERO);
            return LeaveBalanceSummary.builder()
                    .leaveTypeId(t.getId()).code(t.getCode()).name(t.getName()).year(year)
                    .carryOver(carryOver).accrued(accrued).taken(taken).remaining(remaining)
                    .build();
        }).toList();
    }

    /** Jours acquis sur l'année : acquisition mensuelle × mois échus depuis le 1er janvier (ou la date
     *  d'embauche si postérieure) jusqu'à la date de référence, chaque mois entamé comptant pour un mois acquis. */
    private BigDecimal accrued(LeaveType t, int year, LocalDate asOfDate, LocalDate hireDate) {
        LocalDate yearStart = LocalDate.of(year, 1, 1);
        LocalDate yearEnd = LocalDate.of(year, 12, 31);
        LocalDate start = (hireDate != null && hireDate.isAfter(yearStart)) ? hireDate : yearStart;
        LocalDate end = asOfDate.isAfter(yearEnd) ? yearEnd : asOfDate;
        if (end.isBefore(start)) return ZERO;
        int months = (end.getYear() * 12 + end.getMonthValue()) - (start.getYear() * 12 + start.getMonthValue()) + 1;
        return t.getMonthlyAccrualDays().multiply(BigDecimal.valueOf(months)).setScale(2, RoundingMode.HALF_UP);
    }

    /** Somme des jours déclarés pour ce type de congé, attribués à l'année (année de la date de début). */
    private BigDecimal taken(Long companyId, Long employeeId, Long leaveTypeId, int year) {
        LocalDate yearStart = LocalDate.of(year, 1, 1);
        LocalDate yearEnd = LocalDate.of(year, 12, 31);
        return declarationRepo.findByCompanyIdAndEmployeeIdAndLeaveTypeIdAndDateFromBetween(companyId, employeeId, leaveTypeId, yearStart, yearEnd)
                .stream().map(LeaveDeclaration::getNumberOfDays).reduce(ZERO, BigDecimal::add);
    }

    /**
     * Jours de congé déclarés pour un employé qui chevauchent une période de paie, agrégés par code
     * de {@link com.erp.hr.entity.WorkedDaysType} (via {@link LeaveType#getWorkedDaysTypeCode()}),
     * pour injection automatique dans le calcul du bulletin — réutilise sans modification le
     * mécanisme existant {@link com.erp.hr.entity.SalaryRule#getQuantityWorkedDaysCode()}.
     */
    @Transactional(readOnly = true)
    public Map<String, BigDecimal> getLeaveWorkedDays(Long companyId, Long employeeId, LocalDate periodFrom, LocalDate periodTo) {
        Map<String, BigDecimal> result = new HashMap<>();
        for (LeaveType t : typeRepo.findByCompanyIdOrderByNameAsc(companyId)) {
            if (t.getWorkedDaysTypeCode() == null || t.getWorkedDaysTypeCode().isBlank()) continue;
            BigDecimal days = declarationRepo.findByCompanyIdAndEmployeeIdAndLeaveTypeIdAndDateFromLessThanEqualAndDateEndGreaterThanEqual(
                            companyId, employeeId, t.getId(), periodTo, periodFrom)
                    .stream()
                    .map(d -> overlapDaysWithinPeriod(d, periodFrom, periodTo))
                    .reduce(ZERO, BigDecimal::add);
            if (days.compareTo(ZERO) > 0) {
                result.merge(t.getWorkedDaysTypeCode(), days, BigDecimal::add);
            }
        }
        return result;
    }

    /** Restreint numberOfDays à la fraction de la déclaration qui chevauche réellement
     *  [periodFrom, periodTo] — sans ça, une déclaration à cheval sur deux périodes de paie
     *  (ex. congé du 25 janvier au 3 février) serait comptée EN ENTIER dans le bulletin de janvier
     *  ET dans celui de février, doublant l'absence/le paiement associé sur le second bulletin. */
    private BigDecimal overlapDaysWithinPeriod(LeaveDeclaration d, LocalDate periodFrom, LocalDate periodTo) {
        BigDecimal numberOfDays = d.getNumberOfDays() != null ? d.getNumberOfDays() : ZERO;
        if (d.getDateFrom() == null || d.getDateEnd() == null || numberOfDays.compareTo(ZERO) == 0) return ZERO;
        LocalDate overlapStart = d.getDateFrom().isAfter(periodFrom) ? d.getDateFrom() : periodFrom;
        LocalDate overlapEnd = d.getDateEnd().isBefore(periodTo) ? d.getDateEnd() : periodTo;
        if (overlapEnd.isBefore(overlapStart)) return ZERO;
        long overlapSpan = java.time.temporal.ChronoUnit.DAYS.between(overlapStart, overlapEnd) + 1;
        long totalSpan = java.time.temporal.ChronoUnit.DAYS.between(d.getDateFrom(), d.getDateEnd()) + 1;
        if (totalSpan <= 0 || overlapSpan >= totalSpan) return numberOfDays;
        return numberOfDays.multiply(BigDecimal.valueOf(overlapSpan))
                .divide(BigDecimal.valueOf(totalSpan), 4, RoundingMode.HALF_UP);
    }
}

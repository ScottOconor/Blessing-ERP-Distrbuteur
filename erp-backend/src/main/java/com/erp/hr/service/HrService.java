package com.erp.hr.service;

import com.erp.audit.service.AuditService;
import com.erp.common.repository.CompanyRepository;
import com.erp.common.service.TenantGuard;
import com.erp.hr.entity.*;
import com.erp.hr.init.OrganisationSeeder;
import com.erp.hr.init.PayrollSeeder;
import com.erp.hr.init.ProfessionalCategorySeeder;
import com.erp.hr.repository.*;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/** Gestion des dossiers RH : employés, départements, postes, contrats, règles de salaire. */
@Service
@RequiredArgsConstructor
@Transactional
public class HrService {

    private final EmployeeRepository employeeRepo;
    private final DepartmentRepository departmentRepo;
    private final JobPositionRepository jobRepo;
    private final EmployeeContractRepository contractRepo;
    private final SalaryRuleRepository ruleRepo;
    private final SalaryRuleCategoryRepository categoryRepo;
    private final WorkedDaysTypeRepository workedDaysTypeRepo;
    private final PayslipInputTypeRepository inputTypeRepo;
    private final ProfessionalCategoryRepository professionalCategoryRepo;
    private final EchelonRepository echelonRepo;
    private final PayrollSeeder payrollSeeder;
    private final ProfessionalCategorySeeder professionalCategorySeeder;
    private final OrganisationSeeder organisationSeeder;
    private final TenantGuard tenantGuard;
    private final AuditService auditService;
    private final CompanyRepository companyRepo;

    // ─────────────── Employés ───────────────

    @Transactional(readOnly = true)
    public List<Employee> getEmployees(Long companyId) {
        return employeeRepo.findByCompanyIdOrderByLastNameAscFirstNameAsc(companyId);
    }

    @Transactional(readOnly = true)
    public Employee getEmployee(Long id) {
        Employee e = employeeRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Employé introuvable: " + id));
        tenantGuard.check(e.getCompanyId());
        return e;
    }

    public Employee createEmployee(Employee e) {
        if (e.getMatricule() == null || e.getMatricule().isBlank()) {
            e.setMatricule(generateMatricule(e.getCompanyId()));
        }
        if (e.getStatus() == null) e.setStatus("ACTIF");
        e.setActive(true);
        return employeeRepo.save(e);
    }

    public Employee updateEmployee(Long id, Employee dto) {
        Employee e = getEmployee(id);
        e.setLastName(dto.getLastName());
        e.setFirstName(dto.getFirstName());
        e.setGender(dto.getGender());
        e.setBirthDate(dto.getBirthDate());
        e.setBirthPlace(dto.getBirthPlace());
        e.setNationality(dto.getNationality());
        e.setCni(dto.getCni());
        e.setMaritalStatus(dto.getMaritalStatus());
        e.setChildrenCount(dto.getChildrenCount());
        e.setPhone(dto.getPhone());
        e.setEmail(dto.getEmail());
        e.setAddress(dto.getAddress());
        e.setDepartmentId(dto.getDepartmentId());
        e.setJobId(dto.getJobId());
        e.setManagerId(dto.getManagerId());
        e.setHireDate(dto.getHireDate());
        e.setDepartureDate(dto.getDepartureDate());
        e.setCnpsNumber(dto.getCnpsNumber());
        e.setNiu(dto.getNiu());
        e.setBankName(dto.getBankName());
        e.setBankAccount(dto.getBankAccount());
        if (dto.getPaymentMode() != null) e.setPaymentMode(dto.getPaymentMode());
        if (dto.getStatus() != null) e.setStatus(dto.getStatus());
        if (dto.getMatricule() != null && !dto.getMatricule().isBlank()) e.setMatricule(dto.getMatricule());
        e.setActive(dto.isActive());
        return employeeRepo.save(e);
    }

    public void deleteEmployee(Long id) {
        Employee e = getEmployee(id);
        e.setActive(false);
        e.setStatus("SORTI");
        employeeRepo.save(e);
        auditService.log("EMPLOYEE", id, e.getLastName() + " " + e.getFirstName(),
                "DELETED", "Employé supprimé (désactivé)", e.getCompanyId());
    }

    private String generateMatricule(Long companyId) {
        companyRepo.findByIdForUpdate(companyId);
        long next = employeeRepo.countByCompanyId(companyId) + 1;
        return String.format("EMP-%04d", next);
    }

    // ─────────────── Départements ───────────────

    public List<Department> getDepartments(Long companyId) {
        organisationSeeder.seedDepartmentsIfEmpty(companyId);
        return departmentRepo.findByCompanyIdOrderByNameAsc(companyId);
    }

    public Department saveDepartment(Department d) { return departmentRepo.save(d); }

    public void deleteDepartment(Long id) {
        Department d = departmentRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Département introuvable: " + id));
        tenantGuard.check(d.getCompanyId());
        departmentRepo.deleteById(id);
    }

    // ─────────────── Postes ───────────────

    public List<JobPosition> getJobs(Long companyId) {
        // Idempotent : garantit que les postes standards existent même si getJobs() est appelé
        // avant getDepartments() (les deux se chargent souvent en parallèle depuis l'écran).
        organisationSeeder.seedDepartmentsIfEmpty(companyId);
        return jobRepo.findByCompanyIdOrderByNameAsc(companyId);
    }

    public JobPosition saveJob(JobPosition j) { return jobRepo.save(j); }

    public void deleteJob(Long id) {
        JobPosition j = jobRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Poste introuvable: " + id));
        tenantGuard.check(j.getCompanyId());
        jobRepo.deleteById(id);
    }

    // ─────────────── Contrats ───────────────

    @Transactional(readOnly = true)
    public List<EmployeeContract> getContracts(Long companyId) {
        return contractRepo.findByCompanyIdOrderByDateStartDesc(companyId);
    }

    @Transactional(readOnly = true)
    public List<EmployeeContract> getEmployeeContracts(Long employeeId) {
        return contractRepo.findByEmployeeIdOrderByDateStartDesc(employeeId);
    }

    @Transactional(readOnly = true)
    public EmployeeContract getContract(Long id) {
        EmployeeContract c = contractRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Contrat introuvable: " + id));
        tenantGuard.check(c.getCompanyId());
        return c;
    }

    public EmployeeContract saveContract(EmployeeContract c) { return contractRepo.save(c); }

    public EmployeeContract setContractState(Long id, String state) {
        EmployeeContract c = getContract(id);
        c.setState(state);
        return contractRepo.save(c);
    }

    public void deleteContract(Long id) {
        getContract(id);
        contractRepo.deleteById(id);
    }

    // ─────────────── Règles de salaire ───────────────

    public List<SalaryRuleCategory> getCategories(Long companyId) {
        payrollSeeder.seedIfEmpty(companyId);
        return categoryRepo.findByCompanyIdOrderBySequenceAsc(companyId);
    }

    public List<SalaryRule> getRules(Long companyId) {
        payrollSeeder.seedIfEmpty(companyId);
        payrollSeeder.backfillBuiltinRates(companyId);
        return ruleRepo.findByCompanyIdOrderBySequenceAscIdAsc(companyId);
    }

    public SalaryRule saveRule(SalaryRule r) { return ruleRepo.save(r); }

    public void deleteRule(Long id) {
        SalaryRule r = ruleRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Règle introuvable: " + id));
        tenantGuard.check(r.getCompanyId());
        ruleRepo.deleteById(id);
    }

    // ─────────────── Types de jours travaillés ───────────────

    @Transactional(readOnly = true)
    public List<WorkedDaysType> getWorkedDaysTypes(Long companyId) {
        return workedDaysTypeRepo.findByCompanyIdOrderByNameAsc(companyId);
    }

    public WorkedDaysType saveWorkedDaysType(WorkedDaysType t) { return workedDaysTypeRepo.save(t); }

    public void deleteWorkedDaysType(Long id) {
        WorkedDaysType t = workedDaysTypeRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Type introuvable: " + id));
        tenantGuard.check(t.getCompanyId());
        workedDaysTypeRepo.deleteById(id);
    }

    // ─────────────── Types d'éléments variables ───────────────

    @Transactional(readOnly = true)
    public List<PayslipInputType> getInputTypes(Long companyId) {
        return inputTypeRepo.findByCompanyIdOrderByNameAsc(companyId);
    }

    public PayslipInputType saveInputType(PayslipInputType t) { return inputTypeRepo.save(t); }

    public void deleteInputType(Long id) {
        PayslipInputType t = inputTypeRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Type introuvable: " + id));
        tenantGuard.check(t.getCompanyId());
        inputTypeRepo.deleteById(id);
    }

    // ─────────────── Catégories professionnelles (grille salariale) ───────────────

    public List<ProfessionalCategory> getProfessionalCategories(Long companyId) {
        professionalCategorySeeder.seedIfEmpty(companyId);
        return professionalCategoryRepo.findByCompanyIdOrderBySequenceAscNameAsc(companyId);
    }

    public ProfessionalCategory saveProfessionalCategory(ProfessionalCategory c) { return professionalCategoryRepo.save(c); }

    public void deleteProfessionalCategory(Long id) {
        ProfessionalCategory c = professionalCategoryRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Catégorie introuvable: " + id));
        tenantGuard.check(c.getCompanyId());
        professionalCategoryRepo.deleteById(id);
    }

    // ─────────────── Échelons (grille salariale) ───────────────

    @Transactional(readOnly = true)
    public List<Echelon> getEchelons(Long companyId, Long professionalCategoryId) {
        if (professionalCategoryId != null) {
            return echelonRepo.findByCompanyIdAndProfessionalCategoryIdOrderBySequenceAscNameAsc(companyId, professionalCategoryId);
        }
        return echelonRepo.findByCompanyIdOrderBySequenceAscNameAsc(companyId);
    }

    public Echelon saveEchelon(Echelon e) { return echelonRepo.save(e); }

    public void deleteEchelon(Long id) {
        Echelon e = echelonRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Échelon introuvable: " + id));
        tenantGuard.check(e.getCompanyId());
        echelonRepo.deleteById(id);
    }
}

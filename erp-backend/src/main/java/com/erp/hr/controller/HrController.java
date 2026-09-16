package com.erp.hr.controller;

import com.erp.hr.entity.*;
import com.erp.hr.service.HrService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/** Données RH : employés, départements, postes, contrats, règles de salaire. */
@RestController
@RequestMapping("/api/hr")
@RequiredArgsConstructor
public class HrController {

    private final HrService hrService;

    // Employés
    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> getEmployees(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(hrService.getEmployees(companyId));
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Long id) {
        return ResponseEntity.ok(hrService.getEmployee(id));
    }

    @PostMapping("/employees")
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee e) {
        return ResponseEntity.ok(hrService.createEmployee(e));
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee e) {
        return ResponseEntity.ok(hrService.updateEmployee(id, e));
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id) {
        hrService.deleteEmployee(id);
        return ResponseEntity.noContent().build();
    }

    // Départements
    @GetMapping("/departments")
    public ResponseEntity<List<Department>> getDepartments(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(hrService.getDepartments(companyId));
    }

    @PostMapping("/departments")
    public ResponseEntity<Department> saveDepartment(@RequestBody Department d) {
        return ResponseEntity.ok(hrService.saveDepartment(d));
    }

    @DeleteMapping("/departments/{id}")
    public ResponseEntity<Void> deleteDepartment(@PathVariable Long id) {
        hrService.deleteDepartment(id);
        return ResponseEntity.noContent().build();
    }

    // Postes
    @GetMapping("/jobs")
    public ResponseEntity<List<JobPosition>> getJobs(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(hrService.getJobs(companyId));
    }

    @PostMapping("/jobs")
    public ResponseEntity<JobPosition> saveJob(@RequestBody JobPosition j) {
        return ResponseEntity.ok(hrService.saveJob(j));
    }

    @DeleteMapping("/jobs/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable Long id) {
        hrService.deleteJob(id);
        return ResponseEntity.noContent().build();
    }

    // Contrats
    @GetMapping("/contracts")
    public ResponseEntity<List<EmployeeContract>> getContracts(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(hrService.getContracts(companyId));
    }

    @GetMapping("/employees/{employeeId}/contracts")
    public ResponseEntity<List<EmployeeContract>> getEmployeeContracts(@PathVariable Long employeeId) {
        return ResponseEntity.ok(hrService.getEmployeeContracts(employeeId));
    }

    @PostMapping("/contracts")
    public ResponseEntity<EmployeeContract> saveContract(@RequestBody EmployeeContract c) {
        return ResponseEntity.ok(hrService.saveContract(c));
    }

    @PutMapping("/contracts/{id}")
    public ResponseEntity<EmployeeContract> updateContract(@PathVariable Long id, @RequestBody EmployeeContract c) {
        c.setId(id);
        return ResponseEntity.ok(hrService.saveContract(c));
    }

    @PostMapping("/contracts/{id}/state")
    public ResponseEntity<EmployeeContract> setContractState(@PathVariable Long id, @RequestParam String state) {
        return ResponseEntity.ok(hrService.setContractState(id, state));
    }

    @DeleteMapping("/contracts/{id}")
    public ResponseEntity<Void> deleteContract(@PathVariable Long id) {
        hrService.deleteContract(id);
        return ResponseEntity.noContent().build();
    }

    // Règles de salaire (configuration paie)
    @GetMapping("/salary-rule-categories")
    public ResponseEntity<List<SalaryRuleCategory>> getCategories(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(hrService.getCategories(companyId));
    }

    @GetMapping("/salary-rules")
    public ResponseEntity<List<SalaryRule>> getRules(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(hrService.getRules(companyId));
    }

    @PostMapping("/salary-rules")
    public ResponseEntity<SalaryRule> saveRule(@RequestBody SalaryRule r) {
        return ResponseEntity.ok(hrService.saveRule(r));
    }

    @PutMapping("/salary-rules/{id}")
    public ResponseEntity<SalaryRule> updateRule(@PathVariable Long id, @RequestBody SalaryRule r) {
        r.setId(id);
        return ResponseEntity.ok(hrService.saveRule(r));
    }

    @DeleteMapping("/salary-rules/{id}")
    public ResponseEntity<Void> deleteRule(@PathVariable Long id) {
        hrService.deleteRule(id);
        return ResponseEntity.noContent().build();
    }

    // Types de jours travaillés (configuration paie)
    @GetMapping("/worked-days-types")
    public ResponseEntity<List<WorkedDaysType>> getWorkedDaysTypes(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(hrService.getWorkedDaysTypes(companyId));
    }

    @PostMapping("/worked-days-types")
    public ResponseEntity<WorkedDaysType> saveWorkedDaysType(@RequestBody WorkedDaysType t) {
        return ResponseEntity.ok(hrService.saveWorkedDaysType(t));
    }

    @PutMapping("/worked-days-types/{id}")
    public ResponseEntity<WorkedDaysType> updateWorkedDaysType(@PathVariable Long id, @RequestBody WorkedDaysType t) {
        t.setId(id);
        return ResponseEntity.ok(hrService.saveWorkedDaysType(t));
    }

    @DeleteMapping("/worked-days-types/{id}")
    public ResponseEntity<Void> deleteWorkedDaysType(@PathVariable Long id) {
        hrService.deleteWorkedDaysType(id);
        return ResponseEntity.noContent().build();
    }

    // Types d'éléments variables (configuration paie)
    @GetMapping("/input-types")
    public ResponseEntity<List<PayslipInputType>> getInputTypes(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(hrService.getInputTypes(companyId));
    }

    @PostMapping("/input-types")
    public ResponseEntity<PayslipInputType> saveInputType(@RequestBody PayslipInputType t) {
        return ResponseEntity.ok(hrService.saveInputType(t));
    }

    @PutMapping("/input-types/{id}")
    public ResponseEntity<PayslipInputType> updateInputType(@PathVariable Long id, @RequestBody PayslipInputType t) {
        t.setId(id);
        return ResponseEntity.ok(hrService.saveInputType(t));
    }

    @DeleteMapping("/input-types/{id}")
    public ResponseEntity<Void> deleteInputType(@PathVariable Long id) {
        hrService.deleteInputType(id);
        return ResponseEntity.noContent().build();
    }

    // Catégories professionnelles (grille salariale)
    @GetMapping("/professional-categories")
    public ResponseEntity<List<ProfessionalCategory>> getProfessionalCategories(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(hrService.getProfessionalCategories(companyId));
    }

    @PostMapping("/professional-categories")
    public ResponseEntity<ProfessionalCategory> saveProfessionalCategory(@RequestBody ProfessionalCategory c) {
        return ResponseEntity.ok(hrService.saveProfessionalCategory(c));
    }

    @PutMapping("/professional-categories/{id}")
    public ResponseEntity<ProfessionalCategory> updateProfessionalCategory(@PathVariable Long id, @RequestBody ProfessionalCategory c) {
        c.setId(id);
        return ResponseEntity.ok(hrService.saveProfessionalCategory(c));
    }

    @DeleteMapping("/professional-categories/{id}")
    public ResponseEntity<Void> deleteProfessionalCategory(@PathVariable Long id) {
        hrService.deleteProfessionalCategory(id);
        return ResponseEntity.noContent().build();
    }

    // Échelons (grille salariale)
    @GetMapping("/echelons")
    public ResponseEntity<List<Echelon>> getEchelons(@RequestParam("companyId") Long companyId,
                                                       @RequestParam(value = "professionalCategoryId", required = false) Long professionalCategoryId) {
        return ResponseEntity.ok(hrService.getEchelons(companyId, professionalCategoryId));
    }

    @PostMapping("/echelons")
    public ResponseEntity<Echelon> saveEchelon(@RequestBody Echelon e) {
        return ResponseEntity.ok(hrService.saveEchelon(e));
    }

    @PutMapping("/echelons/{id}")
    public ResponseEntity<Echelon> updateEchelon(@PathVariable Long id, @RequestBody Echelon e) {
        e.setId(id);
        return ResponseEntity.ok(hrService.saveEchelon(e));
    }

    @DeleteMapping("/echelons/{id}")
    public ResponseEntity<Void> deleteEchelon(@PathVariable Long id) {
        hrService.deleteEchelon(id);
        return ResponseEntity.noContent().build();
    }
}

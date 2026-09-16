package com.erp.hr.controller;

import com.erp.hr.dto.LeaveBalanceSummary;
import com.erp.hr.entity.LeaveDeclaration;
import com.erp.hr.entity.LeaveType;
import com.erp.hr.service.LeaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.Year;
import java.util.List;

/** Congés : types, déclarations (saisies directement par le RH) et compteurs Dû/Pris/Reste. */
@RestController
@RequestMapping("/api/hr")
@RequiredArgsConstructor
public class LeaveController {

    private final LeaveService leaveService;

    // Types de congés
    @GetMapping("/leave-types")
    public ResponseEntity<List<LeaveType>> getLeaveTypes(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(leaveService.getLeaveTypes(companyId));
    }

    @PostMapping("/leave-types")
    public ResponseEntity<LeaveType> saveLeaveType(@RequestBody LeaveType t) {
        return ResponseEntity.ok(leaveService.saveLeaveType(t));
    }

    @PutMapping("/leave-types/{id}")
    public ResponseEntity<LeaveType> updateLeaveType(@PathVariable Long id, @RequestBody LeaveType t) {
        t.setId(id);
        return ResponseEntity.ok(leaveService.saveLeaveType(t));
    }

    @DeleteMapping("/leave-types/{id}")
    public ResponseEntity<Void> deleteLeaveType(@PathVariable Long id) {
        leaveService.deleteLeaveType(id);
        return ResponseEntity.noContent().build();
    }

    // Déclarations
    @GetMapping("/leave-declarations")
    public ResponseEntity<List<LeaveDeclaration>> getDeclarations(@RequestParam("companyId") Long companyId,
                                                                    @RequestParam(value = "employeeId", required = false) Long employeeId) {
        return ResponseEntity.ok(leaveService.getDeclarations(companyId, employeeId));
    }

    @PostMapping("/leave-declarations")
    public ResponseEntity<LeaveDeclaration> saveDeclaration(@RequestBody LeaveDeclaration d) {
        return ResponseEntity.ok(leaveService.saveDeclaration(d));
    }

    @DeleteMapping("/leave-declarations/{id}")
    public ResponseEntity<Void> deleteDeclaration(@PathVariable Long id) {
        leaveService.deleteDeclaration(id);
        return ResponseEntity.noContent().build();
    }

    // Compteurs
    @GetMapping("/leave-balances")
    public ResponseEntity<List<LeaveBalanceSummary>> getBalances(@RequestParam("companyId") Long companyId,
                                                                   @RequestParam("employeeId") Long employeeId,
                                                                   @RequestParam(value = "year", required = false) Integer year) {
        int y = year != null ? year : Year.now().getValue();
        return ResponseEntity.ok(leaveService.getBalances(companyId, employeeId, y));
    }

    @PostMapping("/leave-balances/carry-over")
    public ResponseEntity<Void> saveCarryOver(@RequestParam("companyId") Long companyId,
                                               @RequestParam("employeeId") Long employeeId,
                                               @RequestParam("leaveTypeId") Long leaveTypeId,
                                               @RequestParam("year") int year,
                                               @RequestParam("amount") BigDecimal amount) {
        leaveService.saveCarryOver(companyId, employeeId, leaveTypeId, year, amount);
        return ResponseEntity.noContent().build();
    }
}

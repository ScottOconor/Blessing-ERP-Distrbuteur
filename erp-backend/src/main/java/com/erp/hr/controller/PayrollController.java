package com.erp.hr.controller;

import com.erp.hr.dto.PayrollRegisterDTO;
import com.erp.hr.dto.PayslipDTO;
import com.erp.hr.dto.PayslipRequest;
import com.erp.hr.dto.PayslipRunRequest;
import com.erp.hr.entity.Payslip;
import com.erp.hr.entity.PayslipRun;
import com.erp.hr.service.PayrollService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/** Bulletins de paie et lots. */
@RestController
@RequestMapping("/api/hr/payroll")
@RequiredArgsConstructor
public class PayrollController {

    private final PayrollService payrollService;

    // Bulletins
    @GetMapping("/payslips")
    public ResponseEntity<List<Payslip>> getPayslips(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(payrollService.getPayslips(companyId));
    }

    @GetMapping("/payslips/{id}")
    public ResponseEntity<PayslipDTO> getPayslip(@PathVariable Long id) {
        return ResponseEntity.ok(payrollService.getPayslip(id));
    }

    @PostMapping("/payslips/compute")
    public ResponseEntity<PayslipDTO> compute(@RequestBody PayslipRequest req) {
        return ResponseEntity.ok(payrollService.computePayslip(req));
    }

    @PostMapping("/payslips/{id}/recompute")
    public ResponseEntity<PayslipDTO> recompute(@PathVariable Long id) {
        return ResponseEntity.ok(payrollService.recompute(id));
    }

    @PostMapping("/payslips/{id}/verify")
    public ResponseEntity<PayslipDTO> verify(@PathVariable Long id) {
        return ResponseEntity.ok(payrollService.verify(id));
    }

    @PostMapping("/payslips/{id}/validate")
    public ResponseEntity<PayslipDTO> validate(@PathVariable Long id) {
        return ResponseEntity.ok(payrollService.validate(id));
    }

    @PostMapping("/payslips/{id}/draft")
    public ResponseEntity<PayslipDTO> draft(@PathVariable Long id) {
        return ResponseEntity.ok(payrollService.setDraft(id));
    }

    @PostMapping("/payslips/{id}/cancel")
    public ResponseEntity<PayslipDTO> cancel(@PathVariable Long id) {
        return ResponseEntity.ok(payrollService.cancel(id));
    }

    // Lots
    @GetMapping("/runs")
    public ResponseEntity<List<PayslipRun>> getRuns(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(payrollService.getRuns(companyId));
    }

    @PostMapping("/runs/generate")
    public ResponseEntity<PayslipRun> generateRun(@RequestBody PayslipRunRequest req) {
        return ResponseEntity.ok(payrollService.generateRun(req));
    }

    @GetMapping("/runs/{id}/payslips")
    public ResponseEntity<List<PayslipDTO>> getRunPayslips(@PathVariable Long id) {
        return ResponseEntity.ok(payrollService.getRunPayslips(id));
    }

    @PostMapping("/runs/{id}/validate")
    public ResponseEntity<PayslipRun> validateRun(@PathVariable Long id) {
        return ResponseEntity.ok(payrollService.validateRun(id));
    }

    @GetMapping("/runs/{id}/register")
    public ResponseEntity<PayrollRegisterDTO> getRunRegister(@PathVariable Long id) {
        return ResponseEntity.ok(payrollService.getRunRegister(id));
    }
}

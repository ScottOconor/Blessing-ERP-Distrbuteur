package com.erp.accounting.controller;

import com.erp.accounting.dto.FiscalClosureExecuteRequest;
import com.erp.accounting.dto.FiscalClosureExecuteResponse;
import com.erp.accounting.dto.FiscalClosurePreviewRequest;
import com.erp.accounting.dto.FiscalClosurePreviewResponse;
import com.erp.accounting.service.FiscalClosureService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/accounting/fiscal-closure")
@RequiredArgsConstructor
public class FiscalClosureController {

    private final FiscalClosureService fiscalClosureService;

    @PostMapping("/preview")
    public ResponseEntity<FiscalClosurePreviewResponse> preview(@Valid @RequestBody FiscalClosurePreviewRequest request) {
        return ResponseEntity.ok(fiscalClosureService.preview(request));
    }

    @PostMapping("/execute")
    public ResponseEntity<FiscalClosureExecuteResponse> execute(@Valid @RequestBody FiscalClosureExecuteRequest request) {
        return ResponseEntity.ok(fiscalClosureService.execute(request));
    }
}

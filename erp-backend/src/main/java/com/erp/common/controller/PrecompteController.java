package com.erp.common.controller;

import com.erp.common.dto.PrecompteDTO;
import com.erp.common.service.PrecompteExcelImportService;
import com.erp.common.service.PrecompteService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/precomptes")
@RequiredArgsConstructor
@Slf4j
public class PrecompteController {

    private final PrecompteService service;
    private final PrecompteExcelImportService excelImportService;


    @GetMapping
    public ResponseEntity<List<PrecompteDTO>> getAll(@RequestParam Long companyId) {
        return ResponseEntity.ok(service.getAll(companyId));
    }

    @GetMapping("/partner/{partnerId}")
    public ResponseEntity<List<PrecompteDTO>> getByPartner(
            @PathVariable Long partnerId,
            @RequestParam Long companyId) {
        return ResponseEntity.ok(service.getByPartner(partnerId, companyId));
    }

    @PostMapping
    public ResponseEntity<PrecompteDTO> save(@RequestBody PrecompteDTO dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @GetMapping("/template")
    public ResponseEntity<byte[]> downloadTemplate() throws IOException {
        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = wb.createSheet("Precomptes");

            CellStyle headerStyle = wb.createCellStyle();
            Font headerFont = wb.createFont();
            headerFont.setBold(true);
            headerStyle.setFont(headerFont);
            headerStyle.setFillForegroundColor(IndexedColors.LIGHT_BLUE.getIndex());
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

            Row header = sheet.createRow(0);
            String[] cols = {"partner_id", "type_precompte", "taux_precompte"};
            for (int i = 0; i < cols.length; i++) {
                Cell cell = header.createCell(i);
                cell.setCellValue(cols[i]);
                cell.setCellStyle(headerStyle);
                sheet.setColumnWidth(i, 7000);
            }

            Object[][] examples = {
                    {"BRASSERIES DU CAMEROUN", "sale",     "2"},
                    {"GUINNESS CAMEROUN",      "purchase", "5"},
                    {"SABC",                   "sale",     "2.5"},
            };

            int rowIdx = 1;
            for (Object[] ex : examples) {
                Row row = sheet.createRow(rowIdx++);
                for (int c = 0; c < ex.length; c++) {
                    row.createCell(c).setCellValue(ex[c].toString());
                }
            }

            wb.write(out);
            byte[] bytes = out.toByteArray();

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"modele_precomptes.xlsx\"")
                    .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                    .contentLength(bytes.length)
                    .body(bytes);
        }
    }

    @PostMapping("/import")
    public ResponseEntity<PrecompteImportResultDTO> importExcel(
            @RequestParam MultipartFile file,
            @RequestParam Long companyId) throws IOException {
        PrecompteExcelImportService.ImportReport report = excelImportService.importExcel(file, companyId);

        PrecompteImportResultDTO dto = new PrecompteImportResultDTO();
        dto.setSuccess(report.isSuccess());
        dto.setMessage(report.getMessage());
        dto.setCreated(report.getCreated());
        dto.setUpdated(report.getUpdated());
        dto.setSkipped(0);
        dto.setProcessed(report.getProcessed());
        dto.setUpserted(report.getUpserted());
        dto.setErrors(report.getErrors());
        dto.setWarnings(report.getWarnings());

        return ResponseEntity.ok(dto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}


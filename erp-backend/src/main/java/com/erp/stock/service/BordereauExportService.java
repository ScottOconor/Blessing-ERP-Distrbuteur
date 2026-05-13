package com.erp.stock.service;

import com.erp.stock.dto.InventorySheetDTO;
import com.erp.stock.dto.ReceptionBordereauDTO;
import com.lowagie.text.Document;
import com.lowagie.text.Element;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.Rectangle;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.DataFormat;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.awt.Color;
import java.io.ByteArrayOutputStream;
import java.math.BigDecimal;
import java.time.format.DateTimeFormatter;

@Service
public class BordereauExportService {

    private static final DateTimeFormatter DATE_FMT     = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private static final DateTimeFormatter DATETIME_FMT = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");

    private static final Color PRIMARY  = new Color(111, 66, 193);
    private static final Color AVARIE   = new Color(220, 53,  69);
    private static final Color SUCCESS  = new Color(25,  135, 84);
    private static final Color ALT_BG   = new Color(248, 245, 255);
    private static final Color TOTAL_BG = new Color(240, 235, 255);
    private static final Color LABEL_FG = new Color(80,  80,  80);
    private static final Color CELL_FG  = new Color(50,  50,  50);
    private static final Color BORDER_C = new Color(220, 210, 240);

    // ======================== PDF ========================

    public byte[] generatePdf(ReceptionBordereauDTO dto) {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Document doc = new Document(PageSize.A4.rotate(), 30, 30, 40, 30);
            PdfWriter.getInstance(doc, out);
            doc.open();

            Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 14, PRIMARY);
            Font refFont   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 11, PRIMARY);
            Font hdrFont   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9,  Color.WHITE);
            Font cellFont  = FontFactory.getFont(FontFactory.HELVETICA,      9,  CELL_FG);
            Font labelFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9,  LABEL_FG);
            Font smallFont = FontFactory.getFont(FontFactory.HELVETICA,      8,  LABEL_FG);
            Font totalFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9,  new Color(31, 31, 31));
            Font recuFont  = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9,  SUCCESS);
            Font avarFont  = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9,  AVARIE);

            // Titre
            Paragraph title = new Paragraph("BORDEREAU DE RÉCEPTION", titleFont);
            title.setAlignment(Element.ALIGN_CENTER);
            title.setSpacingAfter(4);
            doc.add(title);

            Paragraph refLine = new Paragraph(dto.getPickingName() != null ? dto.getPickingName() : "", refFont);
            refLine.setAlignment(Element.ALIGN_CENTER);
            refLine.setSpacingAfter(14);
            doc.add(refLine);

            // Infos header
            PdfPTable infoTable = new PdfPTable(3);
            infoTable.setWidthPercentage(100);
            infoTable.setSpacingAfter(16);
            addInfoCell(infoTable, "Fournisseur",    dto.getSupplierName(), labelFont, cellFont);
            addInfoCell(infoTable, "Réf. facture",   dto.getInvoiceRef(),   labelFont, cellFont);
            addInfoCell(infoTable, "Date facture",
                dto.getInvoiceDate() != null ? dto.getInvoiceDate().format(DATE_FMT) : "—", labelFont, cellFont);
            addInfoCell(infoTable, "État",
                "done".equals(dto.getState()) ? "Validé" : "En attente", labelFont, cellFont);
            addInfoCell(infoTable, "Date validation",
                dto.getDateDone() != null ? dto.getDateDone().format(DATETIME_FMT) : "—", labelFont, cellFont);
            addInfoCell(infoTable, "", "", labelFont, cellFont);
            doc.add(infoTable);

            // Tableau lignes
            PdfPTable table = new PdfPTable(new float[]{2f, 5f, 2.5f, 2.5f, 2.5f, 2.5f});
            table.setWidthPercentage(100);

            for (String h : new String[]{"Code", "Désignation", "Prix unit.", "Qté commandée", "Qté reçue", "Qté avaries"}) {
                PdfPCell hc = new PdfPCell(new Phrase(h, hdrFont));
                hc.setBackgroundColor(PRIMARY);
                hc.setPadding(6);
                hc.setHorizontalAlignment(Element.ALIGN_CENTER);
                hc.setBorderColor(Color.WHITE);
                table.addCell(hc);
            }

            BigDecimal totalCmd = BigDecimal.ZERO, totalRecu = BigDecimal.ZERO, totalAvar = BigDecimal.ZERO;
            boolean alt = false;

            for (ReceptionBordereauDTO.LigneBordereau l : dto.getLignes()) {
                Color bg      = alt ? ALT_BG : Color.WHITE;
                BigDecimal cmd  = orZero(l.getQteCommandee());
                BigDecimal recu = orZero(l.getQteRecue());
                BigDecimal avar = orZero(l.getReste());
                totalCmd  = totalCmd.add(cmd);
                totalRecu = totalRecu.add(recu);
                totalAvar = totalAvar.add(avar);

                addTableCell(table, l.getProductCode()  != null ? l.getProductCode()  : "—", cellFont, bg, Element.ALIGN_LEFT);
                addTableCell(table, l.getProductName()  != null ? l.getProductName()  : "—", cellFont, bg, Element.ALIGN_LEFT);
                addTableCell(table, fmtNum(l.getPrixUnitaire()), cellFont, bg, Element.ALIGN_RIGHT);
                addTableCell(table, fmtNum(cmd),  cellFont, bg, Element.ALIGN_RIGHT);

                PdfPCell recuCell = styledCell(fmtNum(recu), recuFont, bg, Element.ALIGN_RIGHT);
                table.addCell(recuCell);

                PdfPCell avarCell = styledCell(fmtNum(avar),
                    avar.compareTo(BigDecimal.ZERO) > 0 ? avarFont : cellFont, bg, Element.ALIGN_RIGHT);
                table.addCell(avarCell);

                alt = !alt;
            }

            // Totaux
            addTableCell(table, "TOTAUX", totalFont, TOTAL_BG, Element.ALIGN_LEFT);
            addTableCell(table, "",        totalFont, TOTAL_BG, Element.ALIGN_LEFT);
            addTableCell(table, "",        totalFont, TOTAL_BG, Element.ALIGN_RIGHT);
            addTableCell(table, fmtNum(totalCmd),  totalFont,  TOTAL_BG, Element.ALIGN_RIGHT);
            table.addCell(styledCell(fmtNum(totalRecu), recuFont, TOTAL_BG, Element.ALIGN_RIGHT));
            table.addCell(styledCell(fmtNum(totalAvar),
                totalAvar.compareTo(BigDecimal.ZERO) > 0 ? avarFont : totalFont, TOTAL_BG, Element.ALIGN_RIGHT));
            doc.add(table);

            // Signatures
            doc.add(new Paragraph(" "));
            PdfPTable sigTable = new PdfPTable(3);
            sigTable.setWidthPercentage(100);
            sigTable.setSpacingBefore(24);
            for (String sig : new String[]{"Réceptionnaire", "Responsable stock", "Direction"}) {
                PdfPCell sc = new PdfPCell();
                sc.setPadding(8);
                sc.setMinimumHeight(60);
                sc.addElement(new Phrase(sig, smallFont));
                sc.addElement(new Phrase("\n\nSignature :", smallFont));
                sigTable.addCell(sc);
            }
            doc.add(sigTable);

            doc.close();
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erreur génération PDF bordereau", e);
        }
    }

    // ======================== FEUILLE DE COMPTAGE ========================

    public byte[] generateCountingSheetPdf(InventorySheetDTO dto) {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Document doc = new Document(PageSize.A4, 30, 30, 40, 30);
            PdfWriter.getInstance(doc, out);
            doc.open();

            Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 14, PRIMARY);
            Font subFont   = FontFactory.getFont(FontFactory.HELVETICA,      10, LABEL_FG);
            Font hdrFont   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9,  Color.WHITE);
            Font cellFont  = FontFactory.getFont(FontFactory.HELVETICA,      9,  CELL_FG);
            Font totalFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9,  new Color(31, 31, 31));

            Paragraph title = new Paragraph("FEUILLE DE COMPTAGE — INVENTAIRE PHYSIQUE", titleFont);
            title.setAlignment(Element.ALIGN_CENTER);
            title.setSpacingAfter(4);
            doc.add(title);

            String dateStr = dto.getDate() != null ? dto.getDate() : java.time.LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
            Paragraph dateLine = new Paragraph("Date : " + dateStr + (dto.getCompanyName() != null ? "     Société : " + dto.getCompanyName() : ""), subFont);
            dateLine.setAlignment(Element.ALIGN_CENTER);
            dateLine.setSpacingAfter(16);
            doc.add(dateLine);

            // Table: Emplacement | Code | Désignation | UdM | Qté système | Qté comptée (vide)
            PdfPTable table = new PdfPTable(new float[]{3f, 2f, 5f, 1.5f, 2f, 2.5f});
            table.setWidthPercentage(100);
            for (String h : new String[]{"Emplacement", "Code", "Désignation", "UdM", "Qté système", "Qté comptée"}) {
                PdfPCell hc = new PdfPCell(new Phrase(h, hdrFont));
                hc.setBackgroundColor(PRIMARY);
                hc.setPadding(6);
                hc.setHorizontalAlignment(Element.ALIGN_CENTER);
                hc.setBorderColor(Color.WHITE);
                table.addCell(hc);
            }

            boolean alt = false;
            int count = 0;
            if (dto.getLines() != null) {
                for (InventorySheetDTO.LineDTO l : dto.getLines()) {
                    Color bg = alt ? ALT_BG : Color.WHITE;
                    addTableCell(table, l.getLocationName() != null ? l.getLocationName() : "—", cellFont, bg, Element.ALIGN_LEFT);
                    addTableCell(table, l.getProductCode()  != null ? l.getProductCode()  : "—", cellFont, bg, Element.ALIGN_LEFT);
                    addTableCell(table, l.getProductName()  != null ? l.getProductName()  : "—", cellFont, bg, Element.ALIGN_LEFT);
                    addTableCell(table, l.getUomName()      != null ? l.getUomName()      : "—", cellFont, bg, Element.ALIGN_CENTER);
                    addTableCell(table, l.getSystemQty()    != null ? fmtQty(l.getSystemQty()) : "0",  cellFont, bg, Element.ALIGN_RIGHT);
                    // Qté comptée : cellule vide pour saisie manuelle
                    PdfPCell blank = new PdfPCell(new Phrase("", cellFont));
                    blank.setBackgroundColor(new Color(255, 255, 220));
                    blank.setPadding(5);
                    blank.setMinimumHeight(18);
                    table.addCell(blank);
                    alt = !alt;
                    count++;
                }
            }
            if (count == 0) {
                PdfPCell empty = new PdfPCell(new Phrase("Aucun article", cellFont));
                empty.setColspan(6);
                empty.setPadding(8);
                empty.setHorizontalAlignment(Element.ALIGN_CENTER);
                table.addCell(empty);
            }

            // Ligne total count
            PdfPCell totalLbl = new PdfPCell(new Phrase("TOTAL ARTICLES : " + count, totalFont));
            totalLbl.setColspan(6);
            totalLbl.setBackgroundColor(TOTAL_BG);
            totalLbl.setPadding(6);
            totalLbl.setHorizontalAlignment(Element.ALIGN_RIGHT);
            table.addCell(totalLbl);

            doc.add(table);

            // Instructions
            doc.add(new Paragraph(" "));
            Paragraph instr = new Paragraph("Instructions : Comptez physiquement chaque article et renseignez la colonne « Qté comptée ». Signalez tout écart à votre responsable.", subFont);
            instr.setSpacingBefore(8);
            doc.add(instr);

            // Signatures
            doc.add(new Paragraph(" "));
            PdfPTable sigTable = new PdfPTable(3);
            sigTable.setWidthPercentage(100);
            sigTable.setSpacingBefore(20);
            for (String sig : new String[]{"Compteur", "Responsable stock", "Direction"}) {
                PdfPCell sc = new PdfPCell();
                sc.setPadding(8);
                sc.setMinimumHeight(60);
                sc.addElement(new Phrase(sig, FontFactory.getFont(FontFactory.HELVETICA, 8, LABEL_FG)));
                sc.addElement(new Phrase("\n\nNom & Signature :", FontFactory.getFont(FontFactory.HELVETICA, 8, LABEL_FG)));
                sigTable.addCell(sc);
            }
            doc.add(sigTable);

            doc.close();
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erreur génération feuille de comptage", e);
        }
    }

    // ======================== FICHE D'INVENTAIRE ========================

    public byte[] generateInventoryReportPdf(InventorySheetDTO dto) {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Document doc = new Document(PageSize.A4, 30, 30, 40, 30);
            PdfWriter.getInstance(doc, out);
            doc.open();

            Font titleFont  = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 14, PRIMARY);
            Font subFont    = FontFactory.getFont(FontFactory.HELVETICA,      10, LABEL_FG);
            Font hdrFont    = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9,  Color.WHITE);
            Font cellFont   = FontFactory.getFont(FontFactory.HELVETICA,      9,  CELL_FG);
            Font totalFont  = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9,  new Color(31, 31, 31));
            Font posFont    = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9,  SUCCESS);
            Font negFont    = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9,  AVARIE);

            Paragraph title = new Paragraph("PROCÈS-VERBAL D'INVENTAIRE", titleFont);
            title.setAlignment(Element.ALIGN_CENTER);
            title.setSpacingAfter(4);
            doc.add(title);

            String dateStr = dto.getDate() != null ? dto.getDate() : java.time.LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
            Paragraph dateLine = new Paragraph("Date : " + dateStr + (dto.getCompanyName() != null ? "     Société : " + dto.getCompanyName() : ""), subFont);
            dateLine.setAlignment(Element.ALIGN_CENTER);
            dateLine.setSpacingAfter(16);
            doc.add(dateLine);

            // Table: Emplacement | Code | Désignation | UdM | Qté avant | Qté comptée | Écart | Valeur écart
            PdfPTable table = new PdfPTable(new float[]{2.5f, 1.8f, 4f, 1.2f, 2f, 2f, 1.8f, 2.5f});
            table.setWidthPercentage(100);
            for (String h : new String[]{"Emplacement", "Code", "Désignation", "UdM", "Qté avant", "Qté comptée", "Écart", "Valeur écart"}) {
                PdfPCell hc = new PdfPCell(new Phrase(h, hdrFont));
                hc.setBackgroundColor(PRIMARY);
                hc.setPadding(6);
                hc.setHorizontalAlignment(Element.ALIGN_CENTER);
                hc.setBorderColor(Color.WHITE);
                table.addCell(hc);
            }

            double totalValeur = 0;
            int countPos = 0, countNeg = 0;
            boolean alt = false;

            if (dto.getLines() != null) {
                for (InventorySheetDTO.LineDTO l : dto.getLines()) {
                    Color bg   = alt ? ALT_BG : Color.WHITE;
                    double diff = l.getDiff() != null ? l.getDiff() : 0;
                    double val  = l.getValueDiff() != null ? l.getValueDiff() : 0;
                    totalValeur += val;
                    if (diff > 0) countPos++; else if (diff < 0) countNeg++;

                    addTableCell(table, l.getLocationName() != null ? l.getLocationName() : "—", cellFont, bg, Element.ALIGN_LEFT);
                    addTableCell(table, l.getProductCode()  != null ? l.getProductCode()  : "—", cellFont, bg, Element.ALIGN_LEFT);
                    addTableCell(table, l.getProductName()  != null ? l.getProductName()  : "—", cellFont, bg, Element.ALIGN_LEFT);
                    addTableCell(table, l.getUomName()      != null ? l.getUomName()      : "—", cellFont, bg, Element.ALIGN_CENTER);
                    addTableCell(table, l.getSystemQty()    != null ? fmtQty(l.getSystemQty())  : "0", cellFont, bg, Element.ALIGN_RIGHT);
                    addTableCell(table, l.getCountedQty()   != null ? fmtQty(l.getCountedQty()) : "0", cellFont, bg, Element.ALIGN_RIGHT);

                    String diffStr = (diff > 0 ? "+" : "") + fmtQty(diff);
                    Font diffFont = diff > 0 ? posFont : (diff < 0 ? negFont : cellFont);
                    table.addCell(styledCell(diffStr, diffFont, bg, Element.ALIGN_RIGHT));

                    String valStr = (val > 0 ? "+" : "") + fmtNum2(val) + " FCFA";
                    Font valFont = val > 0 ? posFont : (val < 0 ? negFont : cellFont);
                    table.addCell(styledCell(valStr, valFont, bg, Element.ALIGN_RIGHT));

                    alt = !alt;
                }
            }

            // Ligne totaux
            String totalValStr = (totalValeur > 0 ? "+" : "") + fmtNum2(totalValeur) + " FCFA";
            Font tvFont = totalValeur > 0 ? posFont : (totalValeur < 0 ? negFont : totalFont);
            addTableCell(table, "TOTAUX", totalFont, TOTAL_BG, Element.ALIGN_LEFT);
            addTableCell(table, "",       totalFont, TOTAL_BG, Element.ALIGN_LEFT);
            addTableCell(table, "",       totalFont, TOTAL_BG, Element.ALIGN_LEFT);
            addTableCell(table, "",       totalFont, TOTAL_BG, Element.ALIGN_LEFT);
            addTableCell(table, "",       totalFont, TOTAL_BG, Element.ALIGN_RIGHT);
            addTableCell(table, "",       totalFont, TOTAL_BG, Element.ALIGN_RIGHT);
            table.addCell(styledCell(countPos + " ↑ / " + countNeg + " ↓", totalFont, TOTAL_BG, Element.ALIGN_CENTER));
            table.addCell(styledCell(totalValStr, tvFont, TOTAL_BG, Element.ALIGN_RIGHT));

            doc.add(table);

            // Signatures
            doc.add(new Paragraph(" "));
            PdfPTable sigTable = new PdfPTable(3);
            sigTable.setWidthPercentage(100);
            sigTable.setSpacingBefore(20);
            for (String sig : new String[]{"Responsable stock", "Comptable", "Direction"}) {
                PdfPCell sc = new PdfPCell();
                sc.setPadding(8);
                sc.setMinimumHeight(60);
                sc.addElement(new Phrase(sig, FontFactory.getFont(FontFactory.HELVETICA, 8, LABEL_FG)));
                sc.addElement(new Phrase("\n\nNom & Signature :", FontFactory.getFont(FontFactory.HELVETICA, 8, LABEL_FG)));
                sigTable.addCell(sc);
            }
            doc.add(sigTable);

            doc.close();
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erreur génération fiche d'inventaire", e);
        }
    }

    private String fmtQty(double v) {
        if (v == Math.floor(v)) return String.format("%.0f", v);
        return String.format("%.3f", v).replaceAll("0+$", "").replaceAll("\\.$", "");
    }

    private String fmtNum2(double v) {
        return String.format("%,.0f", v);
    }

    private void addInfoCell(PdfPTable t, String label, String value, Font lf, Font vf) {
        PdfPCell cell = new PdfPCell();
        cell.setBorder(Rectangle.BOX);
        cell.setBorderColor(BORDER_C);
        cell.setPadding(6);
        cell.addElement(new Phrase(label, lf));
        cell.addElement(new Phrase(value != null ? value : "—", vf));
        t.addCell(cell);
    }

    private void addTableCell(PdfPTable t, String text, Font f, Color bg, int align) {
        t.addCell(styledCell(text, f, bg, align));
    }

    private PdfPCell styledCell(String text, Font f, Color bg, int align) {
        PdfPCell cell = new PdfPCell(new Phrase(text, f));
        cell.setBackgroundColor(bg);
        cell.setPadding(5);
        cell.setHorizontalAlignment(align);
        return cell;
    }

    private BigDecimal orZero(BigDecimal v) { return v != null ? v : BigDecimal.ZERO; }

    private String fmtNum(BigDecimal v) {
        if (v == null) return "0";
        return String.format("%,.2f", v);
    }

    // ======================== EXCEL ========================

    public byte[] generateExcel(ReceptionBordereauDTO dto) {
        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = wb.createSheet("Bordereau réception");
            int[] colWidths = {3500, 9000, 4000, 4500, 4000, 4000};
            for (int i = 0; i < colWidths.length; i++) sheet.setColumnWidth(i, colWidths[i]);

            DataFormat df = wb.createDataFormat();
            String numFmt = "#,##0.00";

            CellStyle titleStyle = mkStyle(wb, true, 14, IndexedColors.VIOLET, null, HorizontalAlignment.CENTER, null);
            CellStyle hdrStyle   = mkStyle(wb, true,  9, IndexedColors.WHITE, IndexedColors.VIOLET, HorizontalAlignment.CENTER, df.getFormat(numFmt));
            CellStyle labelStyle = mkStyle(wb, true,  9, null, null, HorizontalAlignment.LEFT, null);
            CellStyle numStyle   = mkStyle(wb, false, 9, null, null, HorizontalAlignment.RIGHT, df.getFormat(numFmt));
            CellStyle recuStyle  = mkStyle(wb, true,  9, IndexedColors.GREEN,  null, HorizontalAlignment.RIGHT, df.getFormat(numFmt));
            CellStyle avarStyle  = mkStyle(wb, true,  9, IndexedColors.RED,    null, HorizontalAlignment.RIGHT, df.getFormat(numFmt));
            CellStyle totalStyle = mkStyle(wb, true,  9, null, IndexedColors.LIGHT_CORNFLOWER_BLUE, HorizontalAlignment.RIGHT, df.getFormat(numFmt));
            CellStyle altStyle   = mkStyle(wb, false, 9, null, IndexedColors.LAVENDER, HorizontalAlignment.LEFT, null);

            int row = 0;

            // Titre
            Row r0 = sheet.createRow(row++); r0.setHeightInPoints(20);
            setCellStr(r0, 0, "BORDEREAU DE RÉCEPTION", titleStyle);
            sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 5));

            Row r1 = sheet.createRow(row++);
            setCellStr(r1, 0, dto.getPickingName() != null ? dto.getPickingName() : "", titleStyle);
            sheet.addMergedRegion(new CellRangeAddress(1, 1, 0, 5));
            row++;

            addInfoRow(sheet, row++, "Fournisseur",    dto.getSupplierName(),  labelStyle);
            addInfoRow(sheet, row++, "Réf. facture",   dto.getInvoiceRef(),    labelStyle);
            addInfoRow(sheet, row++, "Date facture",
                dto.getInvoiceDate() != null ? dto.getInvoiceDate().format(DATE_FMT) : "—", labelStyle);
            addInfoRow(sheet, row++, "État",
                "done".equals(dto.getState()) ? "Validé" : "En attente", labelStyle);
            if (dto.getDateDone() != null)
                addInfoRow(sheet, row++, "Date validation", dto.getDateDone().format(DATETIME_FMT), labelStyle);
            row++;

            // En-têtes
            Row hRow = sheet.createRow(row++); hRow.setHeightInPoints(18);
            String[] cols = {"Code", "Désignation", "Prix unitaire", "Qté commandée", "Qté reçue", "Qté avaries"};
            for (int i = 0; i < cols.length; i++) setCellStr(hRow, i, cols[i], hdrStyle);

            // Données
            double totCmd = 0, totRecu = 0, totAvar = 0;
            boolean alt = false;
            for (ReceptionBordereauDTO.LigneBordereau l : dto.getLignes()) {
                Row dr = sheet.createRow(row++);
                double cmd  = l.getQteCommandee()  != null ? l.getQteCommandee().doubleValue()  : 0;
                double recu = l.getQteRecue()       != null ? l.getQteRecue().doubleValue()       : 0;
                double avar = l.getReste()           != null ? l.getReste().doubleValue()           : 0;
                double prix = l.getPrixUnitaire()    != null ? l.getPrixUnitaire().doubleValue()    : 0;
                totCmd += cmd; totRecu += recu; totAvar += avar;
                CellStyle base = alt ? altStyle : null;
                setCellStr(dr, 0, l.getProductCode() != null ? l.getProductCode() : "—", base);
                setCellStr(dr, 1, l.getProductName() != null ? l.getProductName() : "—", base);
                setCellNum(dr, 2, prix, numStyle);
                setCellNum(dr, 3, cmd,  numStyle);
                setCellNum(dr, 4, recu, recuStyle);
                setCellNum(dr, 5, avar, avar > 0 ? avarStyle : numStyle);
                alt = !alt;
            }

            // Totaux
            Row totRow = sheet.createRow(row);
            setCellStr(totRow, 0, "TOTAUX", totalStyle);
            setCellStr(totRow, 1, "", totalStyle);
            setCellStr(totRow, 2, "", totalStyle);
            setCellNum(totRow, 3, totCmd,  totalStyle);
            setCellNum(totRow, 4, totRecu, totalStyle);
            setCellNum(totRow, 5, totAvar, totalStyle);

            wb.write(out);
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erreur génération Excel bordereau", e);
        }
    }

    private CellStyle mkStyle(Workbook wb, boolean bold, int size,
                               IndexedColors fontColor, IndexedColors bgColor,
                               HorizontalAlignment align, Short dataFmt) {
        CellStyle s = wb.createCellStyle();
        org.apache.poi.ss.usermodel.Font f = wb.createFont();
        f.setBold(bold);
        f.setFontHeightInPoints((short) size);
        if (fontColor != null) f.setColor(fontColor.getIndex());
        s.setFont(f);
        if (bgColor != null) {
            s.setFillForegroundColor(bgColor.getIndex());
            s.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        }
        s.setAlignment(align);
        if (dataFmt != null) s.setDataFormat(dataFmt);
        s.setBorderBottom(BorderStyle.THIN);
        return s;
    }

    private void addInfoRow(Sheet sheet, int rowIdx, String label, String value, CellStyle lStyle) {
        Row r = sheet.createRow(rowIdx);
        setCellStr(r, 0, label + " :", lStyle);
        r.createCell(1).setCellValue(value != null ? value : "—");
    }

    private void setCellStr(Row r, int col, String val, CellStyle style) {
        Cell c = r.createCell(col);
        c.setCellValue(val);
        if (style != null) c.setCellStyle(style);
    }

    private void setCellNum(Row r, int col, double val, CellStyle style) {
        Cell c = r.createCell(col);
        c.setCellValue(val);
        if (style != null) c.setCellStyle(style);
    }
}

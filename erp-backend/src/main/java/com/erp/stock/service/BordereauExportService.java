package com.erp.stock.service;

import com.erp.stock.dto.InventorySheetDTO;
import com.erp.stock.dto.ReceptionBordereauDTO;
import com.erp.stock.dto.StockDetailedLocationDTO;
import com.erp.stock.dto.StockDetailedMoveDTO;
import com.erp.stock.dto.StockDetailedProductDTO;
import com.erp.stock.dto.StockMoveDTO;
import com.erp.stock.dto.StockQuantDTO;
import com.erp.stock.dto.StockReportLineDTO;
import com.erp.stock.dto.StockReportWarehouseDTO;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
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
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.time.format.DateTimeFormatter;

@Service
public class BordereauExportService {

    private static final DateTimeFormatter DATE_FMT     = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private static final DateTimeFormatter DATETIME_FMT = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");

    // ── Formatage numérique FCFA (espace milliers, virgule décimale) ──
    private static final DecimalFormatSymbols DFS;
    private static final DecimalFormat FMT_FCFA;   // entier : "1 500 000"
    private static final DecimalFormat FMT_QTE;    // 0 à 3 décimales : "150" ou "12,500"
    static {
        DFS = new DecimalFormatSymbols();
        DFS.setGroupingSeparator(' '); // espace insécable
        DFS.setDecimalSeparator(',');
        FMT_FCFA = new DecimalFormat("#,##0",     DFS);
        FMT_QTE  = new DecimalFormat("#,##0.###", DFS);
    }

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
            Document doc = new Document(PageSize.A4, 25, 25, 30, 25);
            PdfWriter.getInstance(doc, out);
            doc.open();

            Font coName  = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, PRIMARY);
            Font coInfo  = FontFactory.getFont(FontFactory.HELVETICA,       6, LABEL_FG);
            Font docTitF = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9, Color.WHITE);
            Font docSubF = FontFactory.getFont(FontFactory.HELVETICA,       7, new Color(200, 180, 240));
            Font hdrFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD,  6, Color.WHITE);
            Font cellFont= FontFactory.getFont(FontFactory.HELVETICA,       6, CELL_FG);
            Font boldFont= FontFactory.getFont(FontFactory.HELVETICA_BOLD,  6, CELL_FG);
            Font totalFont=FontFactory.getFont(FontFactory.HELVETICA_BOLD,  6, new Color(50, 30, 80));
            Font recuFont= FontFactory.getFont(FontFactory.HELVETICA_BOLD,  6, SUCCESS);
            Font avarFont= FontFactory.getFont(FontFactory.HELVETICA_BOLD,  6, AVARIE);

            // ── EN-TÊTE : société (gauche) | titre document (droite) ──
            PdfPTable header = new PdfPTable(new float[]{1.7f, 1f});
            header.setWidthPercentage(100);
            header.setSpacingAfter(12);

            PdfPCell coCell = new PdfPCell();
            coCell.setBorder(Rectangle.BOX); coCell.setBorderColor(BORDER_C);
            coCell.setBackgroundColor(new Color(250, 248, 255)); coCell.setPadding(10);
            coCell.addElement(new Phrase(dto.getCompanyName() != null ? dto.getCompanyName() : safe(dto.getWarehouseName()), coName));
            if (dto.getCompanySigle()    != null) coCell.addElement(new Phrase("  " + dto.getCompanySigle(), FontFactory.getFont(FontFactory.HELVETICA_BOLD, 7, PRIMARY)));
            if (dto.getCompanyAdresse()  != null) coCell.addElement(new Phrase("\n" + dto.getCompanyAdresse(), coInfo));
            if (dto.getCompanyTelephone()!= null) coCell.addElement(new Phrase("\nTél : " + dto.getCompanyTelephone(), coInfo));
            if (dto.getCompanyRccm()     != null) coCell.addElement(new Phrase("  |  RCCM : " + dto.getCompanyRccm(), coInfo));
            if (dto.getCompanyNif()      != null) coCell.addElement(new Phrase("  |  NIF : "  + dto.getCompanyNif(), coInfo));
            if (dto.getOperatorName()    != null) coCell.addElement(new Phrase("\nOpérateur : " + dto.getOperatorName(), coInfo));
            header.addCell(coCell);

            // Bloc titre
            PdfPCell titCell = new PdfPCell();
            titCell.setBackgroundColor(PRIMARY); titCell.setBorder(Rectangle.NO_BORDER);
            titCell.setPadding(10); titCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
            titCell.addElement(new Paragraph("BORDEREAU DE RÉCEPTION", docTitF));
            if (dto.getPickingName() != null) titCell.addElement(new Phrase("\n" + dto.getPickingName(), docSubF));
            String dateStr = dto.getInvoiceDate() != null ? dto.getInvoiceDate().format(DATE_FMT) : java.time.LocalDate.now().format(java.time.format.DateTimeFormatter.ofPattern("dd/MM/yyyy"));
            titCell.addElement(new Phrase("\nDate : " + dateStr, docSubF));
            String etat = "done".equals(dto.getState()) ? "✓ Validé" : "⏳ En attente";
            titCell.addElement(new Phrase("\nÉtat : " + etat, docSubF));
            header.addCell(titCell);
            doc.add(header);

            // ── INFO FOURNISSEUR / ENTREPOT ──
            PdfPTable infoTable = new PdfPTable(new float[]{1.2f, 1.2f, 1.2f, 1.2f});
            infoTable.setWidthPercentage(100); infoTable.setSpacingAfter(12);
            Font lf = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6, LABEL_FG);
            Font vf = FontFactory.getFont(FontFactory.HELVETICA, 6, CELL_FG);
            addInfoCell(infoTable, "Fournisseur / Source",      dto.getSupplierName(),    lf, vf);
            addInfoCell(infoTable, "Entrepôt destinataire",     safe(dto.getWarehouseName()), lf, vf);
            addInfoCell(infoTable, "Réf. facture",              dto.getInvoiceRef(),       lf, vf);
            addInfoCell(infoTable, "Date validation",
                dto.getDateDone() != null ? dto.getDateDone().format(DATETIME_FMT) : "—", lf, vf);
            doc.add(infoTable);

            // ── TABLEAU ARTICLES ──
            PdfPTable table = new PdfPTable(new float[]{2.5f, 6.5f, 2f, 2f, 2f});
            table.setWidthPercentage(100);
            Color HDR_BG = new Color(80, 50, 140);
            for (String h : new String[]{"Code", "Désignation", "Qté commandée", "Qté → Magasin", "Qté → Avaries"}) {
                PdfPCell hc = new PdfPCell(new Phrase(h, hdrFont));
                hc.setBackgroundColor(HDR_BG); hc.setPadding(5);
                hc.setHorizontalAlignment(Element.ALIGN_CENTER); hc.setBorderColor(Color.WHITE);
                table.addCell(hc);
            }

            BigDecimal totalCmd = BigDecimal.ZERO, totalRecu = BigDecimal.ZERO, totalAvar = BigDecimal.ZERO;
            boolean alt = false;
            for (ReceptionBordereauDTO.LigneBordereau l : dto.getLignes()) {
                Color bg    = alt ? ALT_BG : Color.WHITE;
                BigDecimal cmd  = orZero(l.getQteCommandee());
                BigDecimal recu = orZero(l.getQteRecue());
                BigDecimal avar = orZero(l.getReste());
                totalCmd = totalCmd.add(cmd); totalRecu = totalRecu.add(recu); totalAvar = totalAvar.add(avar);

                addTableCell(table, safe(l.getProductCode()), cellFont, bg, Element.ALIGN_LEFT);
                addTableCell(table, safe(l.getProductName()), boldFont, bg, Element.ALIGN_LEFT);
                addTableCell(table, fmtQty(cmd.doubleValue()),  cellFont, bg, Element.ALIGN_RIGHT);
                table.addCell(styledCell(fmtQty(recu.doubleValue()), recuFont, new Color(235,255,242), Element.ALIGN_RIGHT));
                table.addCell(styledCell(fmtQty(avar.doubleValue()),
                    avar.compareTo(BigDecimal.ZERO) > 0 ? avarFont : cellFont,
                    avar.compareTo(BigDecimal.ZERO) > 0 ? new Color(255,235,235) : bg, Element.ALIGN_RIGHT));
                alt = !alt;
            }
            // Totaux
            addTableCell(table, "TOTAUX", totalFont, TOTAL_BG, Element.ALIGN_LEFT);
            addTableCell(table, "", totalFont, TOTAL_BG, Element.ALIGN_LEFT);
            addTableCell(table, fmtQty(totalCmd.doubleValue()), totalFont, TOTAL_BG, Element.ALIGN_RIGHT);
            table.addCell(styledCell(fmtQty(totalRecu.doubleValue()), recuFont, TOTAL_BG, Element.ALIGN_RIGHT));
            table.addCell(styledCell(fmtQty(totalAvar.doubleValue()),
                totalAvar.compareTo(BigDecimal.ZERO) > 0 ? avarFont : totalFont, TOTAL_BG, Element.ALIGN_RIGHT));
            doc.add(table);

            // ── SIGNATURES ──
            doc.add(new Paragraph(" "));
            addSignatureBlock(doc, new String[]{"Réceptionnaire", "Responsable entrepôt", "Direction"});

            doc.close();
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erreur génération PDF bordereau", e);
        }
    }

    // ======================== BORDEREAU DE CASSE / AVARIE ========================

    public byte[] generateCassePdf(com.erp.stock.dto.CasseBordereauDTO dto) {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Document doc = new Document(PageSize.A4, 25, 25, 30, 25);
            PdfWriter.getInstance(doc, out);
            doc.open();

            Font coName  = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, PRIMARY);
            Font coInfo  = FontFactory.getFont(FontFactory.HELVETICA,       6, LABEL_FG);
            Font docTitF = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9, Color.WHITE);
            Font docSubF = FontFactory.getFont(FontFactory.HELVETICA,       7, new Color(255, 220, 220));
            Font hdrFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD,  6, Color.WHITE);
            Font cellFont= FontFactory.getFont(FontFactory.HELVETICA,       6, CELL_FG);
            Font boldFont= FontFactory.getFont(FontFactory.HELVETICA_BOLD,  6, CELL_FG);
            Font totalFont=FontFactory.getFont(FontFactory.HELVETICA_BOLD,  6, new Color(80, 20, 20));

            // ── EN-TÊTE : société (gauche) | titre document (droite, rouge = avarie) ──
            PdfPTable header = new PdfPTable(new float[]{1.7f, 1f});
            header.setWidthPercentage(100);
            header.setSpacingAfter(12);

            PdfPCell coCell = new PdfPCell();
            coCell.setBorder(Rectangle.BOX); coCell.setBorderColor(BORDER_C);
            coCell.setBackgroundColor(new Color(250, 248, 255)); coCell.setPadding(10);
            coCell.addElement(new Phrase(dto.getCompanyName() != null ? dto.getCompanyName() : safe(dto.getWarehouseName()), coName));
            if (dto.getCompanySigle()    != null) coCell.addElement(new Phrase("  " + dto.getCompanySigle(), FontFactory.getFont(FontFactory.HELVETICA_BOLD, 7, PRIMARY)));
            if (dto.getCompanyAdresse()  != null) coCell.addElement(new Phrase("\n" + dto.getCompanyAdresse(), coInfo));
            if (dto.getCompanyTelephone()!= null) coCell.addElement(new Phrase("\nTél : " + dto.getCompanyTelephone(), coInfo));
            if (dto.getCompanyRccm()     != null) coCell.addElement(new Phrase("  |  RCCM : " + dto.getCompanyRccm(), coInfo));
            if (dto.getCompanyNif()      != null) coCell.addElement(new Phrase("  |  NIF : "  + dto.getCompanyNif(), coInfo));
            if (dto.getOperatorName()    != null) coCell.addElement(new Phrase("\nConstaté par : " + dto.getOperatorName(), coInfo));
            header.addCell(coCell);

            PdfPCell titCell = new PdfPCell();
            titCell.setBackgroundColor(AVARIE); titCell.setBorder(Rectangle.NO_BORDER);
            titCell.setPadding(10); titCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
            titCell.addElement(new Paragraph("BORDEREAU DE CASSE / AVARIE", docTitF));
            if (dto.getName() != null) titCell.addElement(new Phrase("\n" + dto.getName(), docSubF));
            String dateStr = dto.getDate() != null ? dto.getDate().format(DATE_FMT) : java.time.LocalDate.now().format(DATE_FMT);
            titCell.addElement(new Phrase("\nDate : " + dateStr, docSubF));
            header.addCell(titCell);
            doc.add(header);

            // ── INFO ENTREPÔT / CLIENT / MOTIF ──
            PdfPTable infoTable = new PdfPTable(new float[]{1.2f, 1.2f, 1.6f});
            infoTable.setWidthPercentage(100); infoTable.setSpacingAfter(12);
            Font lf = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6, LABEL_FG);
            Font vf = FontFactory.getFont(FontFactory.HELVETICA, 6, CELL_FG);
            addInfoCell(infoTable, "Entrepôt", safe(dto.getWarehouseName()), lf, vf);
            addInfoCell(infoTable, "Client destinataire", dto.getPartnerName(), lf, vf);
            addInfoCell(infoTable, "Motif", dto.getNotes(), lf, vf);
            doc.add(infoTable);

            // ── TABLEAU ARTICLES ──
            PdfPTable table = new PdfPTable(new float[]{2.5f, 6.5f, 2.5f, 2.5f, 3f});
            table.setWidthPercentage(100);
            Color HDR_BG = AVARIE;
            for (String h : new String[]{"Code", "Désignation", "Quantité", "CMUP", "Montant"}) {
                PdfPCell hc = new PdfPCell(new Phrase(h, hdrFont));
                hc.setBackgroundColor(HDR_BG); hc.setPadding(5);
                hc.setHorizontalAlignment(Element.ALIGN_CENTER); hc.setBorderColor(Color.WHITE);
                table.addCell(hc);
            }

            BigDecimal totalQty = BigDecimal.ZERO, totalMontant = BigDecimal.ZERO;
            boolean alt = false;
            for (com.erp.stock.dto.CasseBordereauDTO.LigneCasse l : dto.getLignes()) {
                Color bg = alt ? ALT_BG : Color.WHITE;
                BigDecimal qty = orZero(l.getQuantite());
                BigDecimal montant = orZero(l.getMontant());
                totalQty = totalQty.add(qty); totalMontant = totalMontant.add(montant);

                addTableCell(table, safe(l.getProductCode()), cellFont, bg, Element.ALIGN_LEFT);
                addTableCell(table, safe(l.getProductName()), boldFont, bg, Element.ALIGN_LEFT);
                addTableCell(table, fmtQty(qty.doubleValue()), cellFont, bg, Element.ALIGN_RIGHT);
                addTableCell(table, fmtMontant(orZero(l.getUnitCost())), cellFont, bg, Element.ALIGN_RIGHT);
                addTableCell(table, fmtMontant(montant), boldFont, bg, Element.ALIGN_RIGHT);
                alt = !alt;
            }
            addTableCell(table, "TOTAUX", totalFont, TOTAL_BG, Element.ALIGN_LEFT);
            addTableCell(table, "", totalFont, TOTAL_BG, Element.ALIGN_LEFT);
            addTableCell(table, fmtQty(totalQty.doubleValue()), totalFont, TOTAL_BG, Element.ALIGN_RIGHT);
            addTableCell(table, "", totalFont, TOTAL_BG, Element.ALIGN_RIGHT);
            addTableCell(table, fmtMontant(totalMontant), totalFont, TOTAL_BG, Element.ALIGN_RIGHT);
            doc.add(table);

            doc.add(new Paragraph(" "));
            Font noteFont = FontFactory.getFont(FontFactory.HELVETICA, 6, LABEL_FG);
            doc.add(new Paragraph("Écriture comptable générée : Débit 659300 (charge exceptionnelle) / Crédit 603100 (variation de stocks).", noteFont));

            doc.add(new Paragraph(" "));
            addSignatureBlock(doc, new String[]{"Constaté par", "Responsable entrepôt", "Direction"});

            doc.close();
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erreur génération PDF bordereau de casse", e);
        }
    }

    // ======================== FEUILLE DE COMPTAGE ========================

    // ======================== EN-TÊTE SOCIÉTÉ ========================

    private void addCompanyHeader(Document doc, InventorySheetDTO dto, String docTitle) throws Exception {
        Font coName  = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, PRIMARY);
        Font coInfo  = FontFactory.getFont(FontFactory.HELVETICA,       6, LABEL_FG);
        Font docTitF = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9, Color.WHITE);
        Font docSubF = FontFactory.getFont(FontFactory.HELVETICA,       7, new Color(200, 180, 240));

        PdfPTable header = new PdfPTable(new float[]{1.6f, 1f});
        header.setWidthPercentage(100);
        header.setSpacingAfter(10);

        PdfPCell coCell = new PdfPCell();
        coCell.setBorder(Rectangle.BOX);
        coCell.setBorderColor(BORDER_C);
        coCell.setBackgroundColor(new Color(250, 248, 255));
        coCell.setPadding(8);
        coCell.addElement(new Phrase(dto.getCompanyName() != null ? dto.getCompanyName() : "—", coName));
        if (dto.getCompanySigle() != null && !dto.getCompanySigle().isEmpty())
            coCell.addElement(new Phrase(dto.getCompanySigle(), FontFactory.getFont(FontFactory.HELVETICA_BOLD, 7, PRIMARY)));
        if (dto.getCompanyAdresse() != null)
            coCell.addElement(new Phrase("\n" + dto.getCompanyAdresse(), coInfo));
        if (dto.getCompanyTelephone() != null)
            coCell.addElement(new Phrase("\nTél : " + dto.getCompanyTelephone(), coInfo));
        if (dto.getCompanyRccm() != null)
            coCell.addElement(new Phrase("  |  RCCM : " + dto.getCompanyRccm(), coInfo));
        if (dto.getCompanyNif() != null)
            coCell.addElement(new Phrase("  |  NIF : " + dto.getCompanyNif(), coInfo));
        header.addCell(coCell);

        // Bloc titre document
        PdfPCell titleCell = new PdfPCell();
        titleCell.setBackgroundColor(PRIMARY);
        titleCell.setBorder(Rectangle.NO_BORDER);
        titleCell.setPadding(8);
        titleCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
        titleCell.addElement(new Paragraph(docTitle, docTitF));

        String dateStr = dto.getDate() != null ? dto.getDate() : java.time.LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        titleCell.addElement(new Phrase("\nDate : " + dateStr, docSubF));
        if (dto.getWarehouseName() != null)
            titleCell.addElement(new Phrase("\nEntrepôt : " + dto.getWarehouseName(), docSubF));
        if (dto.getResponsableName() != null)
            titleCell.addElement(new Phrase("\nResponsable : " + dto.getResponsableName(), docSubF));
        header.addCell(titleCell);

        doc.add(header);
    }

    // ======================== FEUILLE DE COMPTAGE ========================

    public byte[] generateCountingSheetPdf(InventorySheetDTO dto) {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Document doc = new Document(PageSize.A4, 25, 25, 30, 25);
            PdfWriter.getInstance(doc, out);
            doc.open();

            Font hdrFont   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6,  Color.WHITE);
            Font cellFont  = FontFactory.getFont(FontFactory.HELVETICA,      6,  CELL_FG);
            Font totalFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6,  new Color(50, 30, 80));
            Font smallFont = FontFactory.getFont(FontFactory.HELVETICA,      6,  LABEL_FG);

            addCompanyHeader(doc, dto, "FEUILLE DE COMPTAGE\nINVENTAIRE PHYSIQUE");

            PdfPTable table = new PdfPTable(new float[]{2.8f, 1.8f, 4.8f, 1.2f, 2f, 2.5f});
            table.setWidthPercentage(100);
            Color HDR_BG = new Color(80, 50, 140);
            for (String h : new String[]{"Emplacement", "Code", "Désignation", "UdM", "Qté système", "Qté comptée"}) {
                PdfPCell hc = new PdfPCell(new Phrase(h, hdrFont));
                hc.setBackgroundColor(HDR_BG);
                hc.setPadding(5); hc.setHorizontalAlignment(Element.ALIGN_CENTER);
                hc.setBorderColor(Color.WHITE);
                table.addCell(hc);
            }

            boolean alt = false; int count = 0;
            Color BLANK_BG = new Color(255, 252, 220);
            if (dto.getLines() != null) {
                for (InventorySheetDTO.LineDTO l : dto.getLines()) {
                    Color bg = alt ? ALT_BG : Color.WHITE;
                    addTableCell(table, safe(l.getLocationName()), cellFont, bg, Element.ALIGN_LEFT);
                    addTableCell(table, safe(l.getProductCode()),  cellFont, bg, Element.ALIGN_LEFT);
                    addTableCell(table, safe(l.getProductName()),  cellFont, bg, Element.ALIGN_LEFT);
                    addTableCell(table, safe(l.getUomName()),      cellFont, bg, Element.ALIGN_CENTER);
                    addTableCell(table, l.getSystemQty() != null ? fmtQty(l.getSystemQty()) : "0", cellFont, bg, Element.ALIGN_RIGHT);
                    PdfPCell blank = new PdfPCell(new Phrase("", cellFont));
                    blank.setBackgroundColor(BLANK_BG);
                    blank.setBorderColor(new Color(200, 190, 100));
                    blank.setPadding(5); blank.setMinimumHeight(15);
                    table.addCell(blank);
                    alt = !alt; count++;
                }
            }
            if (count == 0) {
                PdfPCell e = new PdfPCell(new Phrase("Aucun article", cellFont));
                e.setColspan(6); e.setPadding(10); e.setHorizontalAlignment(Element.ALIGN_CENTER);
                table.addCell(e);
            }
            PdfPCell foot = new PdfPCell(new Phrase("TOTAL : " + count + " article(s)", totalFont));
            foot.setColspan(6); foot.setBackgroundColor(TOTAL_BG); foot.setPadding(6);
            foot.setHorizontalAlignment(Element.ALIGN_RIGHT); table.addCell(foot);
            doc.add(table);

            Paragraph instr = new Paragraph("Instructions : Comptez physiquement chaque article et renseignez la colonne « Qté comptée ». Signalez tout écart à votre responsable.", smallFont);
            instr.setSpacingBefore(8); doc.add(instr);

            // Signatures
            doc.add(new Paragraph(" "));
            addSignatureBlock(doc, new String[]{"Compteur", "Responsable entrepôt", "Direction"});

            doc.close();
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erreur génération feuille de comptage", e);
        }
    }

    // ======================== PV D'INVENTAIRE ========================

    public byte[] generateInventoryReportPdf(InventorySheetDTO dto) {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Document doc = new Document(PageSize.A4, 25, 25, 30, 25);
            PdfWriter.getInstance(doc, out);
            doc.open();

            Font hdrFont   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6, Color.WHITE);
            Font cellFont  = FontFactory.getFont(FontFactory.HELVETICA,      6, CELL_FG);
            Font boldFont  = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6, CELL_FG);
            Font totalFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6, new Color(50, 30, 80));
            Font posFont   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6, SUCCESS);
            Font negFont   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6, AVARIE);

            addCompanyHeader(doc, dto, "PROCÈS-VERBAL\nD'INVENTAIRE PHYSIQUE");

            // Tableau 6 colonnes
            PdfPTable table = new PdfPTable(new float[]{5.5f, 1.8f, 1.8f, 1.5f, 2.2f, 2.5f});
            table.setWidthPercentage(100);
            Color HDR_BG = new Color(80, 50, 140);
            for (String h : new String[]{"Désignation","Qté système","Qté comptée","Écart","CMUP","Valeur écart"}) {
                PdfPCell hc = new PdfPCell(new Phrase(h, hdrFont));
                hc.setBackgroundColor(HDR_BG); hc.setPadding(4);
                hc.setHorizontalAlignment(Element.ALIGN_CENTER);
                hc.setBorderColor(Color.WHITE);
                table.addCell(hc);
            }

            double totalValeur = 0, totalInitial = 0, totalFinal = 0;
            int countPos = 0, countNeg = 0;
            boolean alt = false;

            if (dto.getLines() != null) {
                for (InventorySheetDTO.LineDTO l : dto.getLines()) {
                    Color bg   = alt ? ALT_BG : Color.WHITE;
                    double diff = l.getDiff()      != null ? l.getDiff()      : 0;
                    double cost = l.getUnitCost()  != null ? l.getUnitCost()  : 0;
                    // Recalculer valeur diff côté backend pour garantir la cohérence
                    double val  = diff * cost;
                    if (l.getValueDiff() != null && l.getValueDiff() != 0) val = l.getValueDiff();
                    totalValeur += val;
                    double sysQty = l.getSystemQty()    != null ? l.getSystemQty()    : 0;
                    double cntQty = l.getCountedQty()   != null ? l.getCountedQty()   : 0;
                    totalInitial += sysQty * cost;
                    totalFinal   += cntQty * cost;
                    if (diff > 0) countPos++; else if (diff < 0) countNeg++;

                    addTableCell(table, safe(l.getProductName()),  cellFont, bg, Element.ALIGN_LEFT);
                    addTableCell(table, fmtQty(l.getSystemQty()  != null ? l.getSystemQty()  : 0), cellFont, bg, Element.ALIGN_RIGHT);
                    addTableCell(table, fmtQty(l.getCountedQty() != null ? l.getCountedQty() : 0), boldFont, bg, Element.ALIGN_RIGHT);

                    Font diffFont = diff > 0 ? posFont : (diff < 0 ? negFont : cellFont);
                    String diffStr = (diff > 0 ? "+" : "") + fmtQty(diff);
                    table.addCell(styledCell(diffStr, diffFont, diff != 0 ? (diff > 0 ? new Color(232,255,240) : new Color(255,232,232)) : bg, Element.ALIGN_RIGHT));

                    addTableCell(table, fmtNum2(cost), cellFont, bg, Element.ALIGN_RIGHT);

                    Font valFont = val > 0 ? posFont : (val < 0 ? negFont : cellFont);
                    String valStr = val == 0 ? "—" : (val > 0 ? "+" : "") + fmtNum2(val) + " F";
                    table.addCell(styledCell(valStr, valFont, val != 0 ? (val > 0 ? new Color(232,255,240) : new Color(255,232,232)) : bg, Element.ALIGN_RIGHT));

                    alt = !alt;
                }
            }

            // Totaux
            Font tvFont = totalValeur > 0 ? posFont : (totalValeur < 0 ? negFont : totalFont);
            PdfPCell[] totCells = {
                styledCell("TOTAUX", totalFont, TOTAL_BG, Element.ALIGN_LEFT),
                styledCell("", totalFont, TOTAL_BG, Element.ALIGN_RIGHT),
                styledCell("", totalFont, TOTAL_BG, Element.ALIGN_RIGHT),
                styledCell("+" + countPos + " / -" + countNeg, totalFont, TOTAL_BG, Element.ALIGN_CENTER),
                styledCell("", totalFont, TOTAL_BG, Element.ALIGN_RIGHT),
                styledCell((totalValeur > 0 ? "+" : "") + fmtNum2(totalValeur) + " F", tvFont, TOTAL_BG, Element.ALIGN_RIGHT)
            };
            for (PdfPCell c : totCells) table.addCell(c);
            doc.add(table);

            // Résumé écarts (ligne 1 : comptages)
            doc.add(new Paragraph(" "));
            Color summBg = new Color(245, 242, 255);
            Font summLbl = FontFactory.getFont(FontFactory.HELVETICA,      6, LABEL_FG);
            Font summVal = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 7, PRIMARY);

            PdfPTable summ1 = new PdfPTable(new float[]{1f, 1f, 1f});
            summ1.setWidthPercentage(60); summ1.setHorizontalAlignment(Element.ALIGN_RIGHT);
            summ1.setSpacingBefore(4);
            addSummCell(summ1, "Articles comptés",   String.valueOf(dto.getLines() != null ? dto.getLines().size() : 0), summLbl, summVal, summBg);
            addSummCell(summ1, "Excédents",  "+" + countPos, summLbl, posFont, summBg);
            addSummCell(summ1, "Manquants",  "-" + countNeg, summLbl, negFont, summBg);
            doc.add(summ1);

            // Résumé valeurs (ligne 2 : les 3 valeurs clés)
            Font valLbl  = FontFactory.getFont(FontFactory.HELVETICA,      6,  LABEL_FG);
            Font valInit = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 7,  new Color(50, 30, 80));
            Font valFin  = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 7,  SUCCESS);

            PdfPTable summ2 = new PdfPTable(new float[]{1f, 1f, 1f});
            summ2.setWidthPercentage(100); summ2.setSpacingBefore(6);
            addSummCell(summ2, "Valeur initiale du stock",  fmtNum2(totalInitial) + " FCFA", valLbl, valInit, summBg);
            addSummCell(summ2, "Valeur des écarts",         (totalValeur >= 0 ? "+" : "") + fmtNum2(totalValeur) + " FCFA", valLbl, tvFont, TOTAL_BG);
            addSummCell(summ2, "Valeur finale du stock",    fmtNum2(totalFinal)  + " FCFA", valLbl, valFin, new Color(232, 255, 240));
            doc.add(summ2);

            // Signatures
            doc.add(new Paragraph(" "));
            addSignatureBlock(doc, new String[]{"Responsable entrepôt", "Comptable", "Direction générale"});

            doc.close();
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erreur génération PV inventaire", e);
        }
    }

    private void addSignatureBlock(Document doc, String[] signataires) throws Exception {
        Font sigLbl = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 7, PRIMARY);
        Font sigSub = FontFactory.getFont(FontFactory.HELVETICA, 6, LABEL_FG);
        PdfPTable sigTable = new PdfPTable(signataires.length);
        sigTable.setWidthPercentage(100); sigTable.setSpacingBefore(14);
        for (String sig : signataires) {
            PdfPCell sc = new PdfPCell();
            sc.setBorder(Rectangle.BOX); sc.setBorderColor(BORDER_C);
            sc.setBackgroundColor(new Color(250, 248, 255));
            sc.setPadding(8); sc.setMinimumHeight(55);
            sc.addElement(new Phrase(sig, sigLbl));
            sc.addElement(new Phrase("\n\nNom : ___________________________", sigSub));
            sc.addElement(new Phrase("\nSignature :", sigSub));
            sigTable.addCell(sc);
        }
        doc.add(sigTable);
    }

    private void addSummCell(PdfPTable t, String label, String value, Font lf, Font vf, Color bg) {
        PdfPCell c = new PdfPCell();
        c.setBackgroundColor(bg); c.setBorderColor(BORDER_C);
        c.setPadding(6);
        c.addElement(new Phrase(label, lf));
        c.addElement(new Phrase("\n" + value, vf));
        t.addCell(c);
    }

    private String safe(String s) { return s != null ? s : "—"; }

    private String fmtQty(double v) {
        return FMT_QTE.format(v);
    }

    private String fmtNum2(double v) {
        return FMT_FCFA.format(Math.round(v));
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
        cell.setPadding(4);
        cell.setHorizontalAlignment(align);
        return cell;
    }

    private BigDecimal orZero(BigDecimal v) { return v != null ? v : BigDecimal.ZERO; }

    private String fmtMontant(BigDecimal v) {
        if (v == null) return "0";
        return FMT_FCFA.format(v.setScale(0, java.math.RoundingMode.HALF_UP));
    }

    // ======================== RAPPORT DE STOCK VALORISÉ ========================

    public byte[] generateStockReportPdf(List<StockQuantDTO> quants, InventorySheetDTO dto) {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Document doc = new Document(PageSize.A4, 20, 20, 30, 25);
            PdfWriter.getInstance(doc, out);
            doc.open();

            Font hdrFont   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6,  Color.WHITE);
            Font cellFont  = FontFactory.getFont(FontFactory.HELVETICA,      6,  CELL_FG);
            Font boldFont  = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6,  CELL_FG);
            Font totalFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6,  new Color(50, 30, 80));
            Font whFont    = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 7,  Color.WHITE);
            Font gtFont    = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6,  Color.WHITE);

            addCompanyHeader(doc, dto, "RAPPORT DE STOCK VALORISÉ\nÉTAT DU STOCK");

            // Regrouper par entrepôt (premier segment du chemin complet)
            Map<String, List<StockQuantDTO>> byWh = new LinkedHashMap<>();
            for (StockQuantDTO q : quants) {
                String loc = q.getLocationCompleteName() != null ? q.getLocationCompleteName()
                           : q.getLocationName() != null ? q.getLocationName() : "";
                String wh = loc.contains("/") ? loc.split("/")[0].trim() : loc.trim();
                if (wh.isEmpty()) wh = "Entrepôt";
                byWh.computeIfAbsent(wh, k -> new ArrayList<>()).add(q);
            }

            Color HDR_BG = new Color(80, 50, 140);
            float[] widths = {2.5f, 1.5f, 5f, 1f, 1.5f, 1.5f, 2f};
            PdfPTable table = new PdfPTable(widths);
            table.setWidthPercentage(100);
            table.setSpacingBefore(4);

            for (String h : new String[]{"Emplacement", "Code", "Désignation", "UdM", "Quantité", "CMUP", "Valeur (FCFA)"}) {
                PdfPCell hc = new PdfPCell(new Phrase(h, hdrFont));
                hc.setBackgroundColor(HDR_BG); hc.setPadding(4);
                hc.setHorizontalAlignment(Element.ALIGN_CENTER);
                hc.setBorderColor(Color.WHITE);
                table.addCell(hc);
            }

            double grandQty = 0, grandVal = 0;
            for (Map.Entry<String, List<StockQuantDTO>> entry : byWh.entrySet()) {
                String whLabel = "ENTREPÔT : " + entry.getKey().toUpperCase();
                String resp = dto.getWarehouseResponsables() != null ? dto.getWarehouseResponsables().get(entry.getKey()) : null;
                if (resp != null && !resp.isEmpty()) whLabel += "   —   Responsable : " + resp;
                PdfPCell whCell = new PdfPCell(new Phrase(whLabel, whFont));
                whCell.setColspan(7); whCell.setBackgroundColor(PRIMARY);
                whCell.setPadding(5); whCell.setBorderColor(Color.WHITE);
                table.addCell(whCell);

                double subtotalQty = 0, subtotalVal = 0;
                boolean alt = false;
                for (StockQuantDTO q : entry.getValue()) {
                    Color bg = alt ? ALT_BG : Color.WHITE;
                    String locName = q.getLocationCompleteName() != null ? q.getLocationCompleteName()
                                   : q.getLocationName() != null ? q.getLocationName() : "—";
                    double qty   = q.getQuantity()      != null ? q.getQuantity().doubleValue()      : 0;
                    double price = q.getStandardPrice() != null ? q.getStandardPrice().doubleValue() : 0;
                    double value = q.getTotalValue()    != null ? q.getTotalValue().doubleValue()    : qty * price;

                    addTableCell(table, safe(locName),          cellFont, bg, Element.ALIGN_LEFT);
                    addTableCell(table, safe(q.getProductCode()), cellFont, bg, Element.ALIGN_LEFT);
                    addTableCell(table, safe(q.getProductName()), boldFont, bg, Element.ALIGN_LEFT);
                    addTableCell(table, safe(q.getUomName()),     cellFont, bg, Element.ALIGN_CENTER);
                    addTableCell(table, fmtQty(qty),              cellFont, bg, Element.ALIGN_RIGHT);
                    addTableCell(table, price > 0 ? fmtNum2(price) : "—", cellFont, bg, Element.ALIGN_RIGHT);
                    addTableCell(table, fmtNum2(value),           cellFont, bg, Element.ALIGN_RIGHT);
                    subtotalQty += qty; subtotalVal += value; alt = !alt;
                }

                PdfPCell subLbl = new PdfPCell(new Phrase("Sous-total " + entry.getKey(), totalFont));
                subLbl.setColspan(4); subLbl.setBackgroundColor(TOTAL_BG);
                subLbl.setPadding(4); subLbl.setHorizontalAlignment(Element.ALIGN_RIGHT);
                table.addCell(subLbl);
                addTableCell(table, fmtQty(subtotalQty), totalFont, TOTAL_BG, Element.ALIGN_RIGHT);
                addTableCell(table, "",                   totalFont, TOTAL_BG, Element.ALIGN_RIGHT);
                addTableCell(table, fmtNum2(subtotalVal), totalFont, TOTAL_BG, Element.ALIGN_RIGHT);
                grandQty += subtotalQty; grandVal += subtotalVal;
            }

            PdfPCell gtLbl = new PdfPCell(new Phrase("TOTAL GÉNÉRAL DU STOCK", gtFont));
            gtLbl.setColspan(4); gtLbl.setBackgroundColor(HDR_BG);
            gtLbl.setPadding(5); gtLbl.setBorderColor(Color.WHITE);
            gtLbl.setHorizontalAlignment(Element.ALIGN_RIGHT);
            table.addCell(gtLbl);
            PdfPCell gtQ = styledCell(fmtQty(grandQty), gtFont, HDR_BG, Element.ALIGN_RIGHT);
            gtQ.setBorderColor(Color.WHITE); table.addCell(gtQ);
            PdfPCell gtE = styledCell("", gtFont, HDR_BG, Element.ALIGN_RIGHT);
            gtE.setBorderColor(Color.WHITE); table.addCell(gtE);
            PdfPCell gtV = styledCell(fmtNum2(grandVal) + " FCFA", gtFont, HDR_BG, Element.ALIGN_RIGHT);
            gtV.setBorderColor(Color.WHITE); table.addCell(gtV);

            doc.add(table);
            doc.close();
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erreur génération rapport de stock", e);
        }
    }

    // ======================== MOUVEMENTS DE STOCK ========================

    public byte[] generateStockMovementsPdf(List<StockMoveDTO> moves, InventorySheetDTO dto) {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Document doc = new Document(PageSize.A4.rotate(), 15, 15, 30, 25);
            PdfWriter.getInstance(doc, out);
            doc.open();

            Font hdrFont   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6, Color.WHITE);
            Font cellFont  = FontFactory.getFont(FontFactory.HELVETICA,      6, CELL_FG);
            Font boldFont  = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6, CELL_FG);
            Font totalFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6, new Color(50, 30, 80));

            addCompanyHeader(doc, dto, "MOUVEMENTS DE STOCK");

            Color HDR_BG = new Color(80, 50, 140);
            float[] widths = {1.4f, 2f, 2.5f, 4f, 2.5f, 2.5f, 1.5f, 2.2f};
            PdfPTable table = new PdfPTable(widths);
            table.setWidthPercentage(100); table.setSpacingBefore(4);

            for (String h : new String[]{"Date", "Référence", "Partenaire", "Article", "De", "Vers", "Quantité", "Valeur (FCFA)"}) {
                PdfPCell hc = new PdfPCell(new Phrase(h, hdrFont));
                hc.setBackgroundColor(HDR_BG); hc.setPadding(4);
                hc.setHorizontalAlignment(Element.ALIGN_CENTER);
                hc.setBorderColor(Color.WHITE);
                table.addCell(hc);
            }

            double totalVal = 0;
            boolean alt = false;
            java.time.format.DateTimeFormatter dtFmt = java.time.format.DateTimeFormatter.ofPattern("dd/MM/yyyy");

            for (StockMoveDTO m : moves) {
                Color bg = alt ? ALT_BG : Color.WHITE;
                String artLabel = (m.getProductCode() != null ? "[" + m.getProductCode() + "] " : "") + safe(m.getProductName());
                String dateStr  = m.getDateDone() != null ? m.getDateDone().format(dtFmt) : "—";
                double qty = m.getQtyDone()       != null ? m.getQtyDone().doubleValue()       : 0;
                double val = m.getSubtotalValue() != null ? m.getSubtotalValue().doubleValue() : 0;

                addTableCell(table, dateStr,                    cellFont, bg, Element.ALIGN_CENTER);
                addTableCell(table, safe(m.getPickingRef()),    cellFont, bg, Element.ALIGN_LEFT);
                addTableCell(table, safe(m.getPartnerName()),   cellFont, bg, Element.ALIGN_LEFT);
                addTableCell(table, artLabel,                   boldFont, bg, Element.ALIGN_LEFT);
                addTableCell(table, safe(m.getLocationName()),     cellFont, bg, Element.ALIGN_LEFT);
                addTableCell(table, safe(m.getLocationDestName()), cellFont, bg, Element.ALIGN_LEFT);
                addTableCell(table, fmtQty(qty) + " " + safe(m.getUomName()), cellFont, bg, Element.ALIGN_RIGHT);
                addTableCell(table, fmtNum2(val),              cellFont, bg, Element.ALIGN_RIGHT);
                totalVal += val; alt = !alt;
            }

            PdfPCell totLbl = new PdfPCell(new Phrase("TOTAL (" + moves.size() + " mouvement(s))", totalFont));
            totLbl.setColspan(6); totLbl.setBackgroundColor(TOTAL_BG);
            totLbl.setPadding(4); totLbl.setHorizontalAlignment(Element.ALIGN_RIGHT);
            table.addCell(totLbl);
            addTableCell(table, "",                  totalFont, TOTAL_BG, Element.ALIGN_RIGHT);
            addTableCell(table, fmtNum2(totalVal) + " FCFA", totalFont, TOTAL_BG, Element.ALIGN_RIGHT);

            doc.add(table);
            doc.close();
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erreur génération mouvements de stock", e);
        }
    }

    // ======================== RAPPORT ANALYTIQUE ========================

    public byte[] generateStockAnalyticsPdf(List<StockReportWarehouseDTO> warehouses, InventorySheetDTO dto) {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Document doc = new Document(PageSize.A4, 12, 12, 30, 25);
            PdfWriter.getInstance(doc, out);
            doc.open();

            Font hdrFont   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 7f, Color.WHITE);
            Font cellFont  = FontFactory.getFont(FontFactory.HELVETICA,      6.5f, CELL_FG);
            Font boldFont  = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6.5f, CELL_FG);
            Font totalFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 7f, new Color(50, 30, 80));
            Font whFont    = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 8f, Color.WHITE);
            Font inFont    = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6.5f, SUCCESS);
            Font outFont   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6.5f, AVARIE);

            addCompanyHeader(doc, dto, "RAPPORT DE STOCK ANALYTIQUE");

            Color HDR_BG = new Color(80, 50, 140);
            float[] widths = {1.8f, 1.6f, 1.6f, 1.6f, 1.6f, 1.6f, 2.2f, 2.2f, 2.2f, 2.2f};

            for (StockReportWarehouseDTO wh : warehouses) {
                // ── Titre entrepôt au-dessus du tableau ───────────────────────
                String whName = wh.getWarehouseName() != null ? wh.getWarehouseName() : "";
                PdfPTable whTitleTable = new PdfPTable(new float[]{1f});
                whTitleTable.setWidthPercentage(100);
                whTitleTable.setSpacingBefore(10);
                String whLabel = "ENTREPÔT : " + whName.toUpperCase();
                String resp = dto.getWarehouseResponsables() != null ? dto.getWarehouseResponsables().get(whName) : null;
                if (resp != null && !resp.isEmpty()) whLabel += "   —   Responsable : " + resp;
                PdfPCell whTitleCell = new PdfPCell(new Phrase(whLabel, whFont));
                whTitleCell.setBackgroundColor(PRIMARY);
                whTitleCell.setPadding(6);
                whTitleCell.setBorderColor(Color.WHITE);
                whTitleTable.addCell(whTitleCell);
                doc.add(whTitleTable);

                // ── Tableau de données ─────────────────────────────────────────
                PdfPTable table = new PdfPTable(widths);
                table.setWidthPercentage(100); table.setSpacingBefore(0);
                for (String h : new String[]{"Code","Stk init.","Entrées","Sorties","Stk final","Coût U.","Val.init.","Val.entr.","Val.sort.","Val.fin."}) {
                    PdfPCell hc = new PdfPCell(new Phrase(h, hdrFont));
                    hc.setBackgroundColor(HDR_BG); hc.setPadding(5);
                    hc.setHorizontalAlignment(Element.ALIGN_CENTER);
                    hc.setBorderColor(Color.WHITE);
                    table.addCell(hc);
                }

                boolean alt = false;
                if (wh.getLines() != null) {
                    for (StockReportLineDTO l : wh.getLines()) {
                        Color bg = alt ? ALT_BG : Color.WHITE;
                        double iQ = n(l.getInitialQty()), inQ = n(l.getInQty()), oQ = n(l.getOutQty()), fQ = n(l.getFinalQty());
                        double cu = n(l.getUnitCost()), iV = n(l.getInitialValue()), inV = n(l.getInValue()), oV = n(l.getOutValue()), fV = n(l.getFinalValue());

                        addTableCell(table, safe(l.getProductCode()),  cellFont, bg, Element.ALIGN_LEFT);
                        addTableCell(table, fmtQty(iQ),  cellFont, bg, Element.ALIGN_RIGHT);
                        table.addCell(styledCell(fmtQty(inQ),  inFont,  bg, Element.ALIGN_RIGHT));
                        table.addCell(styledCell(fmtQty(oQ),   outFont, bg, Element.ALIGN_RIGHT));
                        addTableCell(table, fmtQty(fQ), fQ < 0 ? outFont : boldFont, bg, Element.ALIGN_RIGHT);
                        addTableCell(table, fmtNum2(cu), cellFont, bg, Element.ALIGN_RIGHT);
                        addTableCell(table, fmtNum2(iV),  cellFont, bg, Element.ALIGN_RIGHT);
                        table.addCell(styledCell(fmtNum2(inV), inFont,  bg, Element.ALIGN_RIGHT));
                        table.addCell(styledCell(fmtNum2(oV),  outFont, bg, Element.ALIGN_RIGHT));
                        addTableCell(table, fmtNum2(fV), fV < 0 ? outFont : boldFont, bg, Element.ALIGN_RIGHT);
                        alt = !alt;
                    }
                }

                // Ligne total entrepôt
                PdfPCell tLbl = new PdfPCell(new Phrase("TOTAL " + whName.toUpperCase(), totalFont));
                tLbl.setColspan(1); tLbl.setBackgroundColor(TOTAL_BG);
                tLbl.setPadding(5); tLbl.setHorizontalAlignment(Element.ALIGN_RIGHT);
                table.addCell(tLbl);
                double tIQ = n(wh.getTotalInitialQty()), tInQ = n(wh.getTotalInQty()), tOQ = n(wh.getTotalOutQty()), tFQ = n(wh.getTotalFinalQty());
                double tIV = n(wh.getTotalInitialValue()), tInV = n(wh.getTotalInValue()), tOV = n(wh.getTotalOutValue()), tFV = n(wh.getTotalFinalValue());
                addTableCell(table, fmtQty(tIQ),  totalFont, TOTAL_BG, Element.ALIGN_RIGHT);
                table.addCell(styledCell(fmtQty(tInQ), totalFont, TOTAL_BG, Element.ALIGN_RIGHT));
                table.addCell(styledCell(fmtQty(tOQ),  totalFont, TOTAL_BG, Element.ALIGN_RIGHT));
                addTableCell(table, fmtQty(tFQ),  totalFont, TOTAL_BG, Element.ALIGN_RIGHT);
                addTableCell(table, "",            totalFont, TOTAL_BG, Element.ALIGN_RIGHT);
                addTableCell(table, fmtNum2(tIV),  totalFont, TOTAL_BG, Element.ALIGN_RIGHT);
                table.addCell(styledCell(fmtNum2(tInV), totalFont, TOTAL_BG, Element.ALIGN_RIGHT));
                table.addCell(styledCell(fmtNum2(tOV),  totalFont, TOTAL_BG, Element.ALIGN_RIGHT));
                addTableCell(table, fmtNum2(tFV),  totalFont, TOTAL_BG, Element.ALIGN_RIGHT);

                doc.add(table);
            }
            doc.close();
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erreur génération rapport analytique", e);
        }
    }

    // ======================== FICHE DÉTAILLÉE ========================

    public byte[] generateStockDetailedPdf(List<StockDetailedProductDTO> products, InventorySheetDTO dto) {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Document doc = new Document(PageSize.A4, 18, 18, 30, 25);
            PdfWriter.getInstance(doc, out);
            doc.open();

            Font hdrFont   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6,  Color.WHITE);
            Font cellFont  = FontFactory.getFont(FontFactory.HELVETICA,      6,  CELL_FG);
            Font boldFont  = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6,  CELL_FG);
            Font totalFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6,  new Color(50, 30, 80));
            Font prodFont  = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 7,  Color.WHITE);
            Font locFont   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6,  PRIMARY);
            Font inFont    = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6,  SUCCESS);
            Font outFont   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6,  AVARIE);
            Font balFont   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 6,  new Color(50, 30, 80));

            addCompanyHeader(doc, dto, "FICHE DE STOCK DÉTAILLÉE");

            Color HDR_BG  = new Color(80, 50, 140);
            Color BAL_BG  = new Color(240, 235, 255);
            float[] widths = {1.4f, 2f, 3f, 1.5f, 1.5f, 1.8f, 2.2f};

            for (StockDetailedProductDTO prod : products) {
                // En-tête produit
                PdfPTable prodTable = new PdfPTable(new float[]{1f});
                prodTable.setWidthPercentage(100); prodTable.setSpacingBefore(8);
                String prodLabel = (prod.getProductCode() != null ? "[" + prod.getProductCode() + "] " : "") + safe(prod.getProductName())
                        + "   —   Coût unitaire : " + fmtNum2(n(prod.getUnitCost())) + " FCFA";
                PdfPCell prodCell = new PdfPCell(new Phrase(prodLabel, prodFont));
                prodCell.setBackgroundColor(PRIMARY); prodCell.setPadding(6);
                prodCell.setBorderColor(Color.WHITE);
                prodTable.addCell(prodCell);
                doc.add(prodTable);

                if (prod.getLocations() == null) continue;

                for (StockDetailedLocationDTO loc : prod.getLocations()) {
                    // En-tête emplacement
                    PdfPTable locTable = new PdfPTable(new float[]{1f});
                    locTable.setWidthPercentage(100); locTable.setSpacingBefore(2);
                    PdfPCell locCell = new PdfPCell(new Phrase("  Emplacement : " + safe(loc.getLocationName()), locFont));
                    locCell.setBackgroundColor(ALT_BG); locCell.setPadding(4);
                    locCell.setBorderColor(BORDER_C);
                    locTable.addCell(locCell);
                    doc.add(locTable);

                    // Tableau mouvements
                    PdfPTable mvTable = new PdfPTable(widths);
                    mvTable.setWidthPercentage(100);

                    for (String h : new String[]{"Date", "Référence", "Partenaire", "Entrée (+)", "Sortie (−)", "Solde Qté", "Solde Valeur"}) {
                        PdfPCell hc = new PdfPCell(new Phrase(h, hdrFont));
                        hc.setBackgroundColor(HDR_BG); hc.setPadding(4);
                        hc.setHorizontalAlignment(Element.ALIGN_CENTER);
                        hc.setBorderColor(Color.WHITE);
                        mvTable.addCell(hc);
                    }

                    // Ligne solde initial
                    PdfPCell initLbl = new PdfPCell(new Phrase("Solde au " + safe(dto.getDate() != null ? dto.getDate().split(" → ")[0] : ""), balFont));
                    initLbl.setColspan(5); initLbl.setBackgroundColor(BAL_BG); initLbl.setPadding(4);
                    initLbl.setHorizontalAlignment(Element.ALIGN_RIGHT);
                    mvTable.addCell(initLbl);
                    addTableCell(mvTable, fmtQty(n(loc.getInitialQty())), balFont, BAL_BG, Element.ALIGN_RIGHT);
                    addTableCell(mvTable, fmtNum2(n(loc.getInitialValue())) + " F", balFont, BAL_BG, Element.ALIGN_RIGHT);

                    // Mouvements
                    boolean alt = false;
                    if (loc.getMovements() != null) {
                        for (StockDetailedMoveDTO mv : loc.getMovements()) {
                            Color bg = alt ? ALT_BG : Color.WHITE;
                            double qIn  = n(mv.getQtyIn());
                            double qOut = n(mv.getQtyOut());
                            double qBal = n(mv.getQtyBalance());
                            double vBal = n(mv.getValueBalance());

                            addTableCell(mvTable, safe(mv.getDate()),    cellFont, bg, Element.ALIGN_CENTER);
                            addTableCell(mvTable, safe(mv.getRef()),     cellFont, bg, Element.ALIGN_LEFT);
                            addTableCell(mvTable, safe(mv.getPartner()), cellFont, bg, Element.ALIGN_LEFT);
                            table_addInOut(mvTable, qIn  > 0 ? fmtQty(qIn)  : "", qIn  > 0 ? inFont  : cellFont, bg);
                            table_addInOut(mvTable, qOut > 0 ? fmtQty(qOut) : "", qOut > 0 ? outFont : cellFont, bg);
                            addTableCell(mvTable, fmtQty(qBal), qBal < 0 ? outFont : boldFont, bg, Element.ALIGN_RIGHT);
                            addTableCell(mvTable, fmtNum2(vBal) + " F", vBal < 0 ? outFont : boldFont, bg, Element.ALIGN_RIGHT);
                            alt = !alt;
                        }
                    }

                    // Ligne solde final
                    String dateTo = dto.getDate() != null && dto.getDate().contains("→")
                            ? dto.getDate().split("→")[1].trim() : "";
                    PdfPCell finLbl = new PdfPCell(new Phrase("Solde au " + dateTo, balFont));
                    finLbl.setColspan(5); finLbl.setBackgroundColor(TOTAL_BG); finLbl.setPadding(4);
                    finLbl.setHorizontalAlignment(Element.ALIGN_RIGHT);
                    mvTable.addCell(finLbl);
                    double fQ = n(loc.getFinalQty()); double fV = n(loc.getFinalValue());
                    addTableCell(mvTable, fmtQty(fQ), fQ < 0 ? outFont : balFont, TOTAL_BG, Element.ALIGN_RIGHT);
                    addTableCell(mvTable, fmtNum2(fV) + " F", fV < 0 ? outFont : balFont, TOTAL_BG, Element.ALIGN_RIGHT);

                    doc.add(mvTable);
                }
            }

            doc.close();
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erreur génération fiche détaillée", e);
        }
    }

    private void table_addInOut(PdfPTable t, String text, Font f, Color bg) {
        PdfPCell c = new PdfPCell(new Phrase(text, f));
        c.setBackgroundColor(bg); c.setPadding(4);
        c.setHorizontalAlignment(Element.ALIGN_RIGHT);
        t.addCell(c);
    }

    private double n(java.math.BigDecimal v) { return v != null ? v.doubleValue() : 0; }

    // ======================== EXCEL ========================

    public byte[] generateExcel(ReceptionBordereauDTO dto) {
        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = wb.createSheet("Bordereau réception");
            int[] colWidths = {3500, 9000, 4500, 4000, 4000};
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
            addInfoRow(sheet, row++, "Entrepôt destinataire", dto.getWarehouseName(), labelStyle);
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
            String[] cols = {"Code", "Désignation", "Qté commandée", "Qté → Magasin", "Qté → Avaries"};
            for (int i = 0; i < cols.length; i++) setCellStr(hRow, i, cols[i], hdrStyle);

            // Données
            double totCmd = 0, totRecu = 0, totAvar = 0;
            boolean alt = false;
            for (ReceptionBordereauDTO.LigneBordereau l : dto.getLignes()) {
                Row dr = sheet.createRow(row++);
                double cmd  = l.getQteCommandee()  != null ? l.getQteCommandee().doubleValue()  : 0;
                double recu = l.getQteRecue()       != null ? l.getQteRecue().doubleValue()       : 0;
                double avar = l.getReste()           != null ? l.getReste().doubleValue()           : 0;
                totCmd += cmd; totRecu += recu; totAvar += avar;
                CellStyle base = alt ? altStyle : null;
                setCellStr(dr, 0, l.getProductCode() != null ? l.getProductCode() : "—", base);
                setCellStr(dr, 1, l.getProductName() != null ? l.getProductName() : "—", base);
                setCellNum(dr, 2, cmd,  numStyle);
                setCellNum(dr, 3, recu, recuStyle);
                setCellNum(dr, 4, avar, avar > 0 ? avarStyle : numStyle);
                alt = !alt;
            }

            // Totaux
            Row totRow = sheet.createRow(row);
            setCellStr(totRow, 0, "TOTAUX", totalStyle);
            setCellStr(totRow, 1, "", totalStyle);
            setCellNum(totRow, 2, totCmd,  totalStyle);
            setCellNum(totRow, 3, totRecu, totalStyle);
            setCellNum(totRow, 4, totAvar, totalStyle);

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

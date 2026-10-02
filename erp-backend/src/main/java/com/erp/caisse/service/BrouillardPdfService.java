package com.erp.caisse.service;

import com.erp.caisse.dto.BrouillardDTO;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
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
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.awt.Color;
import java.io.ByteArrayOutputStream;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.time.format.DateTimeFormatter;

/** Export PDF du brouillard de caisse d'une journée (mêmes données que l'écran Brouillard). */
@Service
@RequiredArgsConstructor
public class BrouillardPdfService {

    private static final DateTimeFormatter DATE_FMT     = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private static final DateTimeFormatter DATETIME_FMT = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
    private static final DecimalFormat FMT_FCFA;
    static {
        DecimalFormatSymbols dfs = new DecimalFormatSymbols();
        dfs.setGroupingSeparator(' ');
        dfs.setDecimalSeparator(',');
        FMT_FCFA = new DecimalFormat("#,##0", dfs);
    }

    private static final Color PRIMARY  = new Color(1, 126, 132);
    private static final Color ALT_BG   = new Color(245, 250, 250);
    private static final Color TOTAL_BG = new Color(230, 243, 243);
    private static final Color BORDER_C = new Color(210, 225, 225);
    private static final Color CELL_FG  = new Color(40, 40, 40);
    private static final Color LABEL_FG = new Color(90, 90, 90);

    private final CompanyRepository companyRepo;

    public byte[] generatePdf(BrouillardDTO dto, Long companyId) {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Document doc = new Document(PageSize.A4, 25, 25, 30, 25);
            PdfWriter.getInstance(doc, out);
            doc.open();

            Font coName   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 11, PRIMARY);
            Font coInfo   = FontFactory.getFont(FontFactory.HELVETICA, 7, LABEL_FG);
            Font titleF   = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 11, Color.WHITE);
            Font subF     = FontFactory.getFont(FontFactory.HELVETICA, 8, Color.WHITE);
            Font hdrF     = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 7, Color.WHITE);
            Font cellF    = FontFactory.getFont(FontFactory.HELVETICA, 7, CELL_FG);
            Font boldF    = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 7, CELL_FG);
            Font sumLblF  = FontFactory.getFont(FontFactory.HELVETICA, 7, LABEL_FG);
            Font sumValF  = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, CELL_FG);

            // ── En-tête : société | titre ──
            Company company = companyId != null ? companyRepo.findById(companyId).orElse(null) : null;
            PdfPTable header = new PdfPTable(new float[]{1.6f, 1f});
            header.setWidthPercentage(100);
            header.setSpacingAfter(10);

            PdfPCell coCell = new PdfPCell();
            coCell.setBorder(Rectangle.BOX); coCell.setBorderColor(BORDER_C); coCell.setPadding(8);
            coCell.addElement(new Phrase(company != null && company.getName() != null ? company.getName() : "", coName));
            if (company != null && company.getAdresse() != null)   coCell.addElement(new Phrase(company.getAdresse(), coInfo));
            if (company != null && company.getTelephone() != null) coCell.addElement(new Phrase("Tél : " + company.getTelephone(), coInfo));
            header.addCell(coCell);

            PdfPCell titCell = new PdfPCell();
            titCell.setBackgroundColor(PRIMARY); titCell.setBorder(Rectangle.NO_BORDER); titCell.setPadding(8);
            titCell.addElement(new Paragraph("BROUILLARD DE CAISSE", titleF));
            titCell.addElement(new Phrase(safe(dto.getCaisseName()), subF));
            titCell.addElement(new Phrase("\nJournal : " + safe(dto.getJournalCode()) + " " + safe(dto.getJournalName()), subF));
            titCell.addElement(new Phrase("\nDate : " + (dto.getDateSession() != null ? dto.getDateSession().format(DATE_FMT) : ""), subF));
            String statut = "CLOTUREE".equalsIgnoreCase(dto.getStatus()) || dto.getDateCloture() != null
                    ? "Clôturée" + (dto.getDateCloture() != null ? " le " + dto.getDateCloture().format(DATETIME_FMT) : "")
                    : safe(dto.getStatus());
            titCell.addElement(new Phrase("\nStatut : " + statut, subF));
            header.addCell(titCell);
            doc.add(header);

            // ── Résumé ──
            PdfPTable sum = new PdfPTable(4);
            sum.setWidthPercentage(100);
            sum.setSpacingAfter(10);
            addSummary(sum, "Solde début", dto.getSoldeDebut(), sumLblF, sumValF);
            addSummary(sum, "Total entrées", dto.getTotalEntrees(), sumLblF, sumValF);
            addSummary(sum, "Total sorties", dto.getTotalSorties(), sumLblF, sumValF);
            addSummary(sum, "Solde fin", dto.getSoldeFin(), sumLblF, sumValF);
            doc.add(sum);

            // ── Lignes ──
            PdfPTable t = new PdfPTable(new float[]{0.9f, 1.1f, 2.6f, 1.6f, 1.6f, 1.1f, 1.1f});
            t.setWidthPercentage(100);
            t.setHeaderRows(1);
            for (String h : new String[]{"Date", "Réf.", "Libellé", "Tiers", "Compte", "Entrée", "Sortie"}) {
                PdfPCell c = new PdfPCell(new Phrase(h, hdrF));
                c.setBackgroundColor(PRIMARY); c.setBorderColor(PRIMARY); c.setPadding(4);
                c.setHorizontalAlignment("Entrée".equals(h) || "Sortie".equals(h) ? Element.ALIGN_RIGHT : Element.ALIGN_LEFT);
                t.addCell(c);
            }
            int i = 0;
            if (dto.getLines() != null) {
                for (BrouillardDTO.BrouillardLineDTO l : dto.getLines()) {
                    Color bg = (i++ % 2 == 1) ? ALT_BG : Color.WHITE;
                    t.addCell(cell(l.getDate() != null ? l.getDate().format(DATE_FMT) : "", cellF, bg, Element.ALIGN_LEFT));
                    t.addCell(cell(safe(l.getRef()), cellF, bg, Element.ALIGN_LEFT));
                    t.addCell(cell(safe(l.getLibelle()), cellF, bg, Element.ALIGN_LEFT));
                    t.addCell(cell(safe(l.getTiersName()), cellF, bg, Element.ALIGN_LEFT));
                    t.addCell(cell((safe(l.getCompteCode()) + " " + safe(l.getCompteName())).trim(), cellF, bg, Element.ALIGN_LEFT));
                    t.addCell(cell(amount(l.getDebit()), cellF, bg, Element.ALIGN_RIGHT));
                    t.addCell(cell(amount(l.getCredit()), cellF, bg, Element.ALIGN_RIGHT));
                }
            }
            if (i == 0) {
                PdfPCell empty = cell("Aucune opération sur cette journée", cellF, Color.WHITE, Element.ALIGN_CENTER);
                empty.setColspan(7);
                t.addCell(empty);
            }
            PdfPCell totLbl = cell("TOTAUX", boldF, TOTAL_BG, Element.ALIGN_RIGHT);
            totLbl.setColspan(5);
            t.addCell(totLbl);
            t.addCell(cell(amount(dto.getTotalEntrees()), boldF, TOTAL_BG, Element.ALIGN_RIGHT));
            t.addCell(cell(amount(dto.getTotalSorties()), boldF, TOTAL_BG, Element.ALIGN_RIGHT));
            doc.add(t);

            // ── Signatures ──
            PdfPTable sig = new PdfPTable(2);
            sig.setWidthPercentage(100);
            sig.setSpacingBefore(25);
            for (String s : new String[]{"Le caissier", "Le responsable"}) {
                PdfPCell c = new PdfPCell(new Phrase(s, boldF));
                c.setBorder(Rectangle.NO_BORDER); c.setFixedHeight(50);
                c.setHorizontalAlignment(Element.ALIGN_CENTER);
                sig.addCell(c);
            }
            doc.add(sig);

            doc.close();
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erreur génération PDF brouillard : " + e.getMessage(), e);
        }
    }

    private static void addSummary(PdfPTable t, String label, BigDecimal value, Font lblF, Font valF) {
        PdfPCell c = new PdfPCell();
        c.setBorderColor(BORDER_C); c.setPadding(6);
        c.addElement(new Phrase(label, lblF));
        c.addElement(new Phrase(amount(value) + " FCFA", valF));
        t.addCell(c);
    }

    private static PdfPCell cell(String text, Font f, Color bg, int align) {
        PdfPCell c = new PdfPCell(new Phrase(text, f));
        c.setBackgroundColor(bg); c.setBorderColor(BORDER_C); c.setPadding(3);
        c.setHorizontalAlignment(align);
        return c;
    }

    private static String amount(BigDecimal v) {
        return v == null || v.signum() == 0 ? "" : FMT_FCFA.format(v);
    }

    private static String safe(String s) { return s != null ? s : ""; }
}

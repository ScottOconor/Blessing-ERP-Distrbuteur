import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable, { RowInput, Styles, UserOptions } from 'jspdf-autotable';

// ─── Palette professionnelle (style Odoo / Blessing Reports) ─────────────────
const HDR_BG  : [number,number,number] = [242, 242, 242];  // #f2f2f2 — en-tête colonnes
const TOT_BG  : [number,number,number] = [233, 236, 239];  // #e9ecef — total général
const SUB_BG  : [number,number,number] = [248, 249, 250];  // #f8f9fa — sous-total
const SEC_BG  : [number,number,number] = [226, 232, 240];  // section
const ALT_BG  : [number,number,number] = [249, 249, 249];  // #f9f9f9 — alternance
const WHITE   : [number,number,number] = [255, 255, 255];
const BLACK   : [number,number,number] = [  0,   0,   0];
const DARK    : [number,number,number] = [ 33,  37,  41];  // #212529
const MUTED   : [number,number,number] = [108, 117, 125];  // #6c757d

// ─── Palette "état financier" (bilan / compte de résultat / balances) ────────
// Mêmes teintes que le design system de l'ERP (styles.scss), réutilisées par
// tous les rapports comptables "officiels" pour un rendu visuel cohérent.
const NAVY:        [number,number,number] = [15, 23, 42];    // --navbar-bg #0F172A
const PRIMARY:     [number,number,number] = [29, 78, 216];   // --primary #1D4ED8
const SLATE_BG:    [number,number,number] = [241, 245, 249]; // --bg-page #F1F5F9 (sous-totaux)
const ALT2:        [number,number,number] = [248, 250, 252]; // --bg-elevated #F8FAFC (zébrage)
const SUCCESS:     [number,number,number] = [22, 163, 74];   // --success #16A34A
const SUCCESS_BG:  [number,number,number] = [220, 252, 231]; // --success-bg #DCFCE7
const SUCCESS_DARK:[number,number,number] = [21, 87, 36];
const DANGER:      [number,number,number] = [220, 38, 38];   // --danger #DC2626
const DANGER_BG:   [number,number,number] = [254, 226, 226]; // --danger-bg #FEE2E2
const DANGER_DARK: [number,number,number] = [127, 29, 29];

// ─── Formatage ───────────────────────────────────────────────────────────────
// IMPORTANT : Intl.NumberFormat produit des espaces insécables Unicode (\u202f)
// que jsPDF ne peut pas rendre (apparaissent comme "/" ou "?").
// On utilise un formateur arithmétique ASCII pur.

function dateStr(d: string | Date): string {
  if (!d) return '';
  const dt = typeof d === 'string' ? new Date(d + 'T00:00:00') : d;
  const day = String(dt.getDate()).padStart(2, '0');
  const mon = String(dt.getMonth() + 1).padStart(2, '0');
  return day + '/' + mon + '/' + dt.getFullYear();
}

function fmtNum(v: any, decimals: number): string {
  const num = v != null ? Number(v) : 0;
  if (isNaN(num)) return decimals > 0 ? '0,' + '0'.repeat(decimals) : '0';
  const sign = num < 0 ? '-' : '';
  const fixed = Math.abs(num).toFixed(decimals);
  const parts = fixed.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return sign + (decimals > 0 ? parts[0] + ',' + parts[1] : parts[0]);
}

function fmt2(v: any): string { return fmtNum(v, 2); }
function fmt0(v: any): string { return fmtNum(v, 0); }
function n(v: any): number { return v != null ? Number(v) : 0; }

// ─── Cellules numériques ──────────────────────────────────────────────────────
function nc2(v: any): { content: string; styles: Partial<Styles> } {
  return { content: fmt2(v), styles: { halign: 'right' } };
}
function nc0(v: any): { content: string; styles: Partial<Styles> } {
  return { content: n(v) !== 0 ? fmt0(v) : '', styles: { halign: 'right' } };
}
function ncDash(v: any): { content: string; styles: Partial<Styles> } {
  return n(v) !== 0
    ? { content: fmt2(v), styles: { halign: 'right', textColor: DARK } }
    : { content: '—', styles: { halign: 'right', textColor: MUTED } };
}

// ─── En-tête de document  (format Odoo : société à gauche, date à droite) ────
function drawPageHeader(doc: jsPDF, title: string, subtitle: string, companyName?: string): number {
  const W = doc.internal.pageSize.width;
  const M = 10;
  let y = 12;

  // Société (gauche) + Imprimé le (droite)
  if (companyName) {
    doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.setTextColor(...DARK);
    doc.text(companyName.toUpperCase(), M, y);
  }
  const now = new Date();
  const nowStr =
    String(now.getDate()).padStart(2,'0') + '/' +
    String(now.getMonth()+1).padStart(2,'0') + '/' +
    now.getFullYear() + ' ' +
    String(now.getHours()).padStart(2,'0') + ':' +
    String(now.getMinutes()).padStart(2,'0') + ':' +
    String(now.getSeconds()).padStart(2,'0');
  doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...MUTED);
  doc.text('Imprimé le : ' + nowStr, W - M, y, { align: 'right' });
  y += 4;

  // Ligne séparatrice épaisse
  doc.setDrawColor(...BLACK); doc.setLineWidth(0.5);
  doc.line(M, y, W - M, y); y += 4;

  // Titre du rapport (gauche, gras, 12pt)
  doc.setFont('helvetica', 'bold'); doc.setFontSize(12); doc.setTextColor(...DARK);
  doc.text(title, M, y); y += 5;

  // Sous-titre = période (gauche, 8.5pt, gris)
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(...MUTED);
  doc.text(subtitle, M, y); y += 4;

  // Ligne séparatrice fine
  doc.setDrawColor(180, 180, 180); doc.setLineWidth(0.2);
  doc.line(M, y, W - M, y);
  return y + 3;
}

// ─── Pied de page ─────────────────────────────────────────────────────────────
function addFooter(doc: jsPDF, reportName: string): void {
  const pages = (doc as any).internal.pages.length - 1;
  const W = doc.internal.pageSize.width;
  const H = doc.internal.pageSize.height;
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p);
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.2);
    doc.line(10, H - 8, W - 10, H - 8);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(...MUTED);
    doc.text(reportName, 10, H - 4);
    doc.text(`Page ${p} / ${pages}`, W - 10, H - 4, { align: 'right' });
  }
}

// ─── Styles de base (proches du CSS Odoo : font-size 9px, padding 2px 4px) ────
const HEAD: Partial<Styles> = {
  fillColor: HDR_BG, textColor: DARK, fontStyle: 'bold',
  halign: 'center', fontSize: 9, valign: 'middle',
  cellPadding: { top: 2, right: 3, bottom: 2, left: 3 },
  lineColor: BLACK, lineWidth: 0.3
};
const BASE: Partial<Styles> = {
  fontSize: 9,
  cellPadding: { top: 1.2, right: 2.5, bottom: 1.2, left: 2.5 },
  textColor: DARK, lineColor: [200, 200, 200], lineWidth: 0.1
};
const TOT_PAD = { top: 2.5, right: 3, bottom: 2.5, left: 3 };
const ALT: Partial<Styles> = { fillColor: ALT_BG };

function baseOpts(startY: number, extraOpts: Partial<UserOptions> = {}): UserOptions {
  return {
    startY,
    headStyles: HEAD,
    styles: BASE,
    alternateRowStyles: ALT,
    margin: { left: 10, right: 10, bottom: 14 },
    tableLineWidth: 0.3,
    tableLineColor: BLACK,
    ...extraOpts
  };
}

// ─── Lignes spéciales ─────────────────────────────────────────────────────────
type Cell = string | { content: string; styles: Partial<Styles> };

function subRow(cells: Cell[]): RowInput {
  return cells.map(c => typeof c === 'string'
    ? { content: c, styles: { fillColor: SUB_BG, fontStyle: 'bold' as const, textColor: DARK, cellPadding: TOT_PAD } }
    : { ...c, styles: { fillColor: SUB_BG, fontStyle: 'bold' as const, halign: 'right' as const, textColor: DARK, cellPadding: TOT_PAD } }
  ) as RowInput;
}

function gtRow(cells: Cell[]): RowInput {
  return cells.map(c => typeof c === 'string'
    ? { content: c, styles: { fillColor: TOT_BG, fontStyle: 'bold' as const, textColor: BLACK, cellPadding: TOT_PAD } }
    : { ...c, styles: { fillColor: TOT_BG, fontStyle: 'bold' as const, halign: 'right' as const, textColor: BLACK, cellPadding: TOT_PAD } }
  ) as RowInput;
}

function secRow(label: string, colSpan: number): RowInput {
  return [{ content: label, colSpan, styles: { fillColor: SEC_BG, textColor: DARK, fontStyle: 'bold' as const, fontSize: 8.5 } }];
}

function lastY(doc: jsPDF): number {
  return (doc as any).lastAutoTable?.finalY ?? 35;
}


@Injectable({ providedIn: 'root' })
export class PdfExportService {

  // ─────────────────────────────────────────────────────────
  // BALANCE GÉNÉRALE 4 COLONNES  (portrait A4)
  // Même style "état financier" que le Bilan / Compte de Résultat : en-tête
  // compact centré, bandeau navy, sous-totaux ardoise, total général en
  // vert/rouge selon l'équilibre, badge d'équilibre en bas. Nombre de comptes
  // non borné (contrairement au bilan) : on calibre la police pour tenir sur
  // une page si possible, sinon on accepte une pagination naturelle plutôt
  // que de forcer une taille illisible.
  // ─────────────────────────────────────────────────────────
  exportBalance4(
    lines: any[], apiTotals: any,
    totalDebit: number, totalCredit: number,
    totalFinalDebit: number, totalFinalCredit: number,
    dateFrom: string, dateTo: string,
    companyName?: string
  ): void {
    const bD  = n(apiTotals?.bilanDebit),      bC  = n(apiTotals?.bilanCredit);
    const bFD = n(apiTotals?.bilanFinalDebit),  bFC = n(apiTotals?.bilanFinalCredit);
    const gD  = n(apiTotals?.gestionDebit),     gC  = n(apiTotals?.gestionCredit);
    const gFD = n(apiTotals?.gestionFinalDebit),gFC = n(apiTotals?.gestionFinalCredit);
    const equilibre = Math.abs((bD - bC) + (gD - gC)) <= 0.01;

    const build = (bodyFS: number): { doc: jsPDF; bottomGap: number } => {
      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const W = doc.internal.pageSize.width;
      const PAGE_H = doc.internal.pageSize.height;
      const M = 10;

      let y = 12;
      doc.setFont('times', 'bold'); doc.setFontSize(13); doc.setTextColor(...NAVY);
      doc.text('BALANCE GÉNÉRALE À 4 COLONNES', W / 2, y, { align: 'center' }); y += 4;
      if (companyName) {
        doc.setFont('times', 'bold'); doc.setFontSize(10.5); doc.setTextColor(...DARK);
        doc.text(companyName.toUpperCase(), W / 2, y, { align: 'center' }); y += 3.3;
      }
      doc.setFont('times', 'italic'); doc.setFontSize(8.5); doc.setTextColor(...MUTED);
      doc.text(`Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, W / 2, y, { align: 'center' });
      y += 3.5;
      doc.setDrawColor(...PRIMARY); doc.setLineWidth(0.8);
      doc.line(W / 2 - 14, y, W / 2 + 14, y); y += 2.5;
      doc.setDrawColor(200, 200, 200); doc.setLineWidth(0.15);
      doc.line(M, y, W - M, y); y += 3;

      const bodyPadV = Math.max(0.25, Math.min(1.2, bodyFS * 0.13));
      const headFS = bodyFS + 0.5;
      const headPadV = Math.max(0.35, Math.min(2, headFS * 0.2));

      const toRow = (l: any, i: number): RowInput => {
        const fill = i % 2 === 0 ? ALT2 : WHITE;
        const CS: Partial<Styles> = { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: fill };
        const dashCell = (v: any) => { const c = ncDash(v); return { ...c, styles: { ...CS, ...c.styles } }; };
        return [
          { content: l.accountCode || '', styles: { ...CS, halign: 'center' as const, fontStyle: 'bold' as const, textColor: NAVY } },
          { content: l.accountName || '', styles: { ...CS } },
          dashCell(l.debit), dashCell(l.credit), dashCell(l.finalDebit), dashCell(l.finalCredit),
        ];
      };

      const totRow = (label: string, vals: number[], fill: [number,number,number], textCol: [number,number,number] = DARK): RowInput => [
        { content: label, colSpan: 2, styles: { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: fill, fontStyle: 'bold' as const, textColor: textCol } },
        ...vals.map(v => ({ content: v > 0 ? fmt0(v) : '—', styles: { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: fill, fontStyle: 'bold' as const, halign: 'right' as const, textColor: v > 0 ? textCol : MUTED } }))
      ];

      const body: RowInput[] = lines.map(toRow);
      body.push(totRow('Totaux comptes de bilan',   [bD, bC, bFD, bFC], SLATE_BG));
      body.push(totRow('Totaux comptes de gestion', [gD, gC, gFD, gFC], SLATE_BG));
      body.push(totRow('TOTAUX DE LA BALANCE', [totalDebit, totalCredit, totalFinalDebit, totalFinalCredit],
        equilibre ? SUCCESS_BG : DANGER_BG, equilibre ? SUCCESS_DARK : DANGER_DARK));

      const H: Partial<Styles> = { ...HEAD, fontSize: headFS, cellPadding: headPadV, fillColor: SLATE_BG, textColor: NAVY };
      const AC: Partial<Styles> = { ...H, fillColor: NAVY, textColor: WHITE };

      autoTable(doc, {
        startY: y,
        head: [
          [
            { content: 'N°Compte',          rowSpan: 2, styles: { ...H, valign: 'middle' as const } },
            { content: 'Libellé du Compte', rowSpan: 2, styles: { ...H, halign: 'left' as const, valign: 'middle' as const } },
            { content: 'Mouvements Période', colSpan: 2, styles: { ...AC, halign: 'center' as const } },
            { content: 'Soldes Finaux',      colSpan: 2, styles: { ...AC, halign: 'center' as const } },
          ],
          [
            { content: 'Débit',     styles: { ...H, halign: 'right' as const } },
            { content: 'Crédit',    styles: { ...H, halign: 'right' as const } },
            { content: 'Débiteur',  styles: { ...H, halign: 'right' as const } },
            { content: 'Créditeur', styles: { ...H, halign: 'right' as const } },
          ]
        ],
        body,
        styles: { fontSize: bodyFS, cellPadding: bodyPadV, textColor: DARK, lineColor: [180, 180, 180], lineWidth: 0.1 },
        margin: { left: M, right: M, bottom: 14 },
        tableLineWidth: 0.3,
        tableLineColor: [148, 163, 184],
        columnStyles: {
          0: { cellWidth: 20, halign: 'center' as const },
          1: { cellWidth: 62 },
          2: { cellWidth: 27, halign: 'right' as const },
          3: { cellWidth: 27, halign: 'right' as const },
          4: { cellWidth: 27, halign: 'right' as const },
          5: { cellWidth: 27, halign: 'right' as const },
        }
      });

      const lastY = (doc as any).lastAutoTable?.finalY ?? y;
      const msg = equilibre
        ? `BALANCE ÉQUILIBRÉE   —   les mouvements nets de bilan et de gestion s'équilibrent`
        : `DÉSÉQUILIBRE DÉTECTÉ   —   les totaux nets de bilan et gestion ne s'équilibrent pas`;
      const statusCol = equilibre ? SUCCESS : DANGER;
      const statusDark = equilibre ? SUCCESS_DARK : DANGER_DARK;
      const msgFS = Math.max(7, bodyFS + 0.5);
      doc.setFont('helvetica', 'bold'); doc.setFontSize(msgFS);
      const dotR = 1.3, dotGap = 3, padX = 5, padY = 2.2;
      const textW = doc.getTextWidth(msg);
      const boxW = dotR * 2 + dotGap + textW + padX * 2;
      const boxH = msgFS * 0.3527 * 1.25 + padY * 2;
      const boxX = W / 2 - boxW / 2;
      const boxY = lastY + 5;
      doc.setFillColor(...(equilibre ? SUCCESS_BG : DANGER_BG));
      doc.setDrawColor(...statusCol);
      doc.setLineWidth(0.35);
      doc.roundedRect(boxX, boxY, boxW, boxH, 1.3, 1.3, 'FD');
      const midY = boxY + boxH / 2;
      doc.setFillColor(...statusCol);
      doc.circle(boxX + padX + dotR, midY, dotR, 'F');
      doc.setTextColor(...statusDark);
      doc.text(msg, boxX + padX + dotR * 2 + dotGap, midY + msgFS * 0.35 * 0.3527, { align: 'left' });

      addFooter(doc, 'Balance Générale 4 Colonnes');
      return { doc, bottomGap: PAGE_H - (boxY + boxH) };
    };

    const CANDIDATES = [9, 8.5, 8, 7.5, 7, 6.5, 6];
    const MIN_BOTTOM_GAP = 16;
    let result = build(CANDIDATES[CANDIDATES.length - 1]);
    for (const fs of CANDIDATES) {
      const r = build(fs);
      const pages = (r.doc as any).internal.pages.length - 1;
      result = r;
      if (pages <= 1 && r.bottomGap >= MIN_BOTTOM_GAP) break;
    }

    result.doc.save('Balance_4_Cols_' + new Date().toISOString().slice(0, 10) + '.pdf');
  }
  // ─────────────────────────────────────────────────────────
  // BALANCE GÉNÉRALE 6 COLONNES  (paysage — même style que le Bilan)
  // Solde Final = Solde Initial + Mouvements (cumulatif, volontairement
  // différent du module de référence sur ce point précis — décision
  // confirmée : la balance 6 colonnes existe justement pour vérifier
  // Final = Initial + Mouvements).
  // ─────────────────────────────────────────────────────────
  exportBalance6(
    lines: any[],
    bilanTotals: any, gestionTotals: any, grandTotals: any,
    dateFrom: string, dateTo: string,
    companyName?: string
  ): void {
    const bilanFinNet = n(bilanTotals?.finD) - n(bilanTotals?.finC);
    const gestionFinNet = n(gestionTotals?.finD) - n(gestionTotals?.finC);
    const equilibre = Math.abs(bilanFinNet + gestionFinNet) <= 0.01;

    const build = (bodyFS: number): { doc: jsPDF; bottomGap: number } => {
      const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      const W = doc.internal.pageSize.width;
      const PAGE_H = doc.internal.pageSize.height;
      const M = 10;

      let y = 12;
      doc.setFont('times', 'bold'); doc.setFontSize(13); doc.setTextColor(...NAVY);
      doc.text('BALANCE GÉNÉRALE À 6 COLONNES', W / 2, y, { align: 'center' }); y += 4;
      if (companyName) {
        doc.setFont('times', 'bold'); doc.setFontSize(10.5); doc.setTextColor(...DARK);
        doc.text(companyName.toUpperCase(), W / 2, y, { align: 'center' }); y += 3.3;
      }
      doc.setFont('times', 'italic'); doc.setFontSize(8.5); doc.setTextColor(...MUTED);
      doc.text(`Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, W / 2, y, { align: 'center' });
      y += 3.5;
      doc.setDrawColor(...PRIMARY); doc.setLineWidth(0.8);
      doc.line(W / 2 - 14, y, W / 2 + 14, y); y += 2.5;
      doc.setDrawColor(200, 200, 200); doc.setLineWidth(0.15);
      doc.line(M, y, W - M, y); y += 3;

      const bodyPadV = Math.max(0.25, Math.min(1.2, bodyFS * 0.13));
      const headFS = bodyFS + 0.5;
      const headPadV = Math.max(0.35, Math.min(2, headFS * 0.2));

      const toRow = (l: any, i: number): RowInput => {
        const fill = i % 2 === 0 ? ALT2 : WHITE;
        const CS: Partial<Styles> = { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: fill };
        const dashCell = (v: any) => { const c = ncDash(v); return { ...c, styles: { ...CS, ...c.styles } }; };
        return [
          { content: l.accountCode || '', styles: { ...CS, halign: 'center' as const, fontStyle: 'bold' as const, textColor: NAVY } },
          { content: l.accountName || '', styles: { ...CS } },
          dashCell(l.initialDebit), dashCell(l.initialCredit),
          dashCell(l.debit), dashCell(l.credit),
          dashCell(l.finalDebit), dashCell(l.finalCredit),
        ];
      };

      const totRow = (label: string, vals: number[], fill: [number,number,number], textCol: [number,number,number] = DARK): RowInput => [
        { content: label, colSpan: 2, styles: { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: fill, fontStyle: 'bold' as const, textColor: textCol } },
        ...vals.map(v => ({ content: v > 0 ? fmt0(v) : '—', styles: { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: fill, fontStyle: 'bold' as const, halign: 'right' as const, textColor: v > 0 ? textCol : MUTED } }))
      ];

      const body: RowInput[] = lines.map(toRow);
      body.push(totRow('Totaux comptes de bilan',
        [n(bilanTotals?.initD), n(bilanTotals?.initC), n(bilanTotals?.mvtD), n(bilanTotals?.mvtC), n(bilanTotals?.finD), n(bilanTotals?.finC)], SLATE_BG));
      body.push(totRow('Totaux comptes de gestion',
        [n(gestionTotals?.initD), n(gestionTotals?.initC), n(gestionTotals?.mvtD), n(gestionTotals?.mvtC), n(gestionTotals?.finD), n(gestionTotals?.finC)], SLATE_BG));
      body.push(totRow('TOTAUX DE LA BALANCE',
        [n(grandTotals?.initD), n(grandTotals?.initC), n(grandTotals?.mvtD), n(grandTotals?.mvtC), n(grandTotals?.finD), n(grandTotals?.finC)],
        equilibre ? SUCCESS_BG : DANGER_BG, equilibre ? SUCCESS_DARK : DANGER_DARK));

      const H: Partial<Styles> = { ...HEAD, fontSize: headFS, cellPadding: headPadV, fillColor: SLATE_BG, textColor: NAVY };
      const AC: Partial<Styles> = { ...H, fillColor: NAVY, textColor: WHITE };

      autoTable(doc, {
        startY: y,
        head: [
          [
            { content: 'N°Compte',          rowSpan: 2, styles: { ...H, valign: 'middle' as const } },
            { content: 'Libellé du Compte', rowSpan: 2, styles: { ...H, halign: 'left' as const, valign: 'middle' as const } },
            { content: 'Soldes Initiaux',       colSpan: 2, styles: { ...AC, halign: 'center' as const } },
            { content: 'Mouvements Période',    colSpan: 2, styles: { ...AC, halign: 'center' as const } },
            { content: 'Soldes Finaux',         colSpan: 2, styles: { ...AC, halign: 'center' as const } },
          ],
          [
            { content: 'Débit',     styles: { ...H, halign: 'right' as const } },
            { content: 'Crédit',    styles: { ...H, halign: 'right' as const } },
            { content: 'Débit',     styles: { ...H, halign: 'right' as const } },
            { content: 'Crédit',    styles: { ...H, halign: 'right' as const } },
            { content: 'Débiteur',  styles: { ...H, halign: 'right' as const } },
            { content: 'Créditeur', styles: { ...H, halign: 'right' as const } },
          ]
        ],
        body,
        styles: { fontSize: bodyFS, cellPadding: bodyPadV, textColor: DARK, lineColor: [180, 180, 180], lineWidth: 0.1 },
        margin: { left: M, right: M, bottom: 14 },
        tableLineWidth: 0.3,
        tableLineColor: [148, 163, 184],
        columnStyles: {
          0: { cellWidth: 18, halign: 'center' as const },
          1: { cellWidth: 95 },
          2: { cellWidth: 27, halign: 'right' as const }, 3: { cellWidth: 27, halign: 'right' as const },
          4: { cellWidth: 27, halign: 'right' as const }, 5: { cellWidth: 27, halign: 'right' as const },
          6: { cellWidth: 27, halign: 'right' as const }, 7: { cellWidth: 27, halign: 'right' as const },
        }
      });

      const lastY = (doc as any).lastAutoTable?.finalY ?? y;
      const msg = equilibre
        ? `BALANCE ÉQUILIBRÉE   —   les totaux nets de bilan et de gestion s'équilibrent`
        : `DÉSÉQUILIBRE DÉTECTÉ   —   les totaux nets de bilan et gestion ne s'équilibrent pas`;
      const statusCol = equilibre ? SUCCESS : DANGER;
      const statusDark = equilibre ? SUCCESS_DARK : DANGER_DARK;
      const msgFS = Math.max(7, bodyFS + 0.5);
      doc.setFont('helvetica', 'bold'); doc.setFontSize(msgFS);
      const dotR = 1.3, dotGap = 3, padX = 5, padY = 2.2;
      const textW = doc.getTextWidth(msg);
      const boxW = dotR * 2 + dotGap + textW + padX * 2;
      const boxH = msgFS * 0.3527 * 1.25 + padY * 2;
      const boxX = W / 2 - boxW / 2;
      const boxY = lastY + 5;
      doc.setFillColor(...(equilibre ? SUCCESS_BG : DANGER_BG));
      doc.setDrawColor(...statusCol);
      doc.setLineWidth(0.35);
      doc.roundedRect(boxX, boxY, boxW, boxH, 1.3, 1.3, 'FD');
      const midY = boxY + boxH / 2;
      doc.setFillColor(...statusCol);
      doc.circle(boxX + padX + dotR, midY, dotR, 'F');
      doc.setTextColor(...statusDark);
      doc.text(msg, boxX + padX + dotR * 2 + dotGap, midY + msgFS * 0.35 * 0.3527, { align: 'left' });

      addFooter(doc, 'Balance Générale 6 Colonnes');
      return { doc, bottomGap: PAGE_H - (boxY + boxH) };
    };

    const CANDIDATES = [9, 8.5, 8, 7.5, 7, 6.5, 6];
    const MIN_BOTTOM_GAP = 16;
    let result = build(CANDIDATES[CANDIDATES.length - 1]);
    for (const fs of CANDIDATES) {
      const r = build(fs);
      const pages = (r.doc as any).internal.pages.length - 1;
      result = r;
      if (pages <= 1 && r.bottomGap >= MIN_BOTTOM_GAP) break;
    }

    result.doc.save(`Balance_6_Cols_${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  // ─────────────────────────────────────────────────────────
  // GRAND LIVRE
  // ─────────────────────────────────────────────────────────
  exportGrandLivre(data: any[], dateFrom: string, dateTo: string, companyName?: string): void {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    let startY = drawPageHeader(doc, 'Grand Livre',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, companyName);

    for (const account of data) {
      autoTable(doc, {
        startY,
        body: [secRow(`${account.accountCode}  —  ${account.accountName}`, 7)],
        styles: { ...BASE, cellPadding: 3 },
        margin: { left: 10, right: 10, bottom: 14 },
        theme: 'plain',
        tableLineWidth: 0,
      });
      startY = lastY(doc);

      const body: RowInput[] = account.lines.map((line: any) => [
        line.date ? dateStr(line.date) : '',
        line.moveRef || '',
        { content: line.journalCode || '', styles: { halign: 'center' as const } },
        line.label || '',
        ncDash(line.debit), ncDash(line.credit), ncDash(line.balance)
      ]);
      body.push(subRow([
        `Total ${account.accountCode}`, '', '', '',
        nc2(account.totalDebit), nc2(account.totalCredit), nc2(account.finalBalance)
      ]));

      autoTable(doc, baseOpts(startY, {
        head: [['Date', 'N° Pièce', 'Journal', 'Libellé', 'Débit', 'Crédit', 'Solde']],
        body,
        columnStyles: {
          0: { cellWidth: 20 },
          1: { cellWidth: 26 },
          2: { cellWidth: 15, halign: 'center' as const },
          3: { cellWidth: 65 },
          4: { cellWidth: 22, halign: 'right' as const },
          5: { cellWidth: 22, halign: 'right' as const },
          6: { cellWidth: 22, halign: 'right' as const },
        }
      }));

      startY = lastY(doc) + 5;
      if (startY > 258) { doc.addPage(); startY = 18; }
    }

    addFooter(doc, 'Grand Livre');
    doc.save(`Grand_Livre_${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  // ─────────────────────────────────────────────────────────
  // BILAN OHADA
  // ─────────────────────────────────────────────────────────
exportBilan(
    actifRows: any[], passifRows: any[],
    totalActif: number, totalPassif: number,
    dateTo: string, companyName?: string
  ): void {
    // ── Mise en page "état financier" professionnel : en-tête centré compact,
    // bandeau ACTIF/PASSIF en marque (navy), sous-totaux en gris ardoise, seul
    // le TOTAL GÉNÉRAL reçoit le badge vert. ──────────────────────────────────
    // 12 colonnes : REF|Désignation|Cpte|BRUT|AMORT|NET|NET N-1 | REF|Désignation|Cpte|NET|N-1
    // L'actif compte un poste de plus que le passif (29 vs 28 réfs OHADA) : un
    // appariement ligne à ligne par index décalerait donc BZ_ACTIF et BZ_PASSIF
    // d'une ligne l'un par rapport à l'autre. On sort ces deux postes du reste
    // pour les recombiner explicitement sur une seule et même ligne finale,
    // en réutilisant leurs propres valeurs (pas de recalcul, pas de doublon).
    const empty = { ref: '', label: '', compte: '', brut: 0, amort: 0, net: 0, netPrev: 0, isHeader: false, isEmpty: true, isTotal: false, isGrandTotal: false };
    const actifBody  = actifRows.filter(r => r?.ref !== 'BZ_ACTIF');
    const passifBody = passifRows.filter(r => r?.ref !== 'BZ_PASSIF');
    const actifFinal  = actifRows.find(r => r?.ref === 'BZ_ACTIF')  ?? empty;
    const passifFinal = passifRows.find(r => r?.ref === 'BZ_PASSIF') ?? empty;
    const maxLen = Math.max(actifBody.length, passifBody.length);
    const balanced = Math.abs(n(totalActif) - n(totalPassif)) <= 1;

    // Construit le document complet pour une taille de police donnée. On rend
    // réellement le tableau puis on VÉRIFIE le nombre de pages ET la marge
    // restante en bas (plus fiable qu'une estimation de hauteur : les poids
    // gras, les libellés qui passent à la ligne, etc. faussent facilement un
    // calcul théorique). Retourne aussi le bas du tableau pour ce contrôle.
    const build = (bodyFS: number): { doc: jsPDF; bottomGap: number } => {
      const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      const W = doc.internal.pageSize.width;
      const PAGE_H = doc.internal.pageSize.height;
      const M = 10;

      // ── En-tête compact centré (mêmes proportions que le modèle de référence
      // blessing_repports : titre/société/période centrés en Times, peu de
      // marge) — laisse davantage de place verticale au tableau qu'un en-tête
      // ERP standard type lettre à en-tête. ────────────────────────────────────
      let y = 12;
      doc.setFont('times', 'bold'); doc.setFontSize(13); doc.setTextColor(...NAVY);
      doc.text(`BILAN AU ${dateStr(dateTo)} N`, W / 2, y, { align: 'center' }); y += 4;
      if (companyName) {
        doc.setFont('times', 'bold'); doc.setFontSize(10.5); doc.setTextColor(...DARK);
        doc.text(companyName.toUpperCase(), W / 2, y, { align: 'center' }); y += 3.3;
      }
      doc.setFont('times', 'italic'); doc.setFontSize(8.5); doc.setTextColor(...MUTED);
      doc.text(`Exercice du 01/01/${String(new Date(dateTo + 'T00:00:00').getFullYear())} au ${dateStr(dateTo)}  |  Durée (en mois) : 12`, W / 2, y, { align: 'center' });
      y += 3.5;
      // Filet d'accent (touche de marque) puis filet fin pleine largeur
      doc.setDrawColor(...PRIMARY); doc.setLineWidth(0.8);
      doc.line(W / 2 - 14, y, W / 2 + 14, y); y += 2.5;
      doc.setDrawColor(200, 200, 200); doc.setLineWidth(0.15);
      doc.line(M, y, W - M, y); y += 3;

      const bodyPadV = Math.max(0.25, Math.min(1.2, bodyFS * 0.13));
      const headFS = bodyFS + 0.5;
      const headPadV = Math.max(0.35, Math.min(2, headFS * 0.2));
      const headSmallFS = Math.max(5, headFS - 1);

      const CS: Partial<Styles> = { fontSize: bodyFS, cellPadding: { top: bodyPadV, right: 2, bottom: bodyPadV, left: 2 }, textColor: DARK, lineColor: [180, 180, 180], lineWidth: 0.1 };

      // Rendu par CÔTÉ (actif / passif indépendamment) : les deux colonnes ont
      // des structures différentes et ne s'alignent pas ligne à ligne — une
      // seule couleur de fond partagée colorait à tort le côté qui n'était
      // pas un total.
      const padLeft = (r: string, isT: boolean) =>
        (r && r.length >= 3 && !isT) ? 6 : (r && r.length === 2 && !isT ? 4 : 1);
      const refCell = (r: string, fill: [number,number,number], lc: [number,number,number], lw: number) =>
        ({ content: r || '', styles: { ...CS, fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: 'bold' as const, halign: 'center' as const, cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 } } });
      const lblCell = (lbl: string, r: string, isT: boolean, bold: boolean, fill: [number,number,number], lc: [number,number,number], lw: number) =>
        ({ content: lbl || '', styles: { ...CS, fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: bold ? 'bold' as const : 'normal' as const, halign: 'left' as const, cellPadding: { top: 1, right: 1, bottom: 1, left: (padLeft(r, isT) as number) } } });
      const cpteCell = (compte: string, fill: [number,number,number], lc: [number,number,number], lw: number) =>
        ({ content: compte || '', styles: { ...CS, fontSize: Math.max(5, bodyFS - 1.5), fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: 'normal' as const, halign: 'center' as const, textColor: MUTED } });
      const numCell = (v: any, bold: boolean, fill: [number,number,number], lc: [number,number,number], lw: number) =>
        (n(v) !== 0 || bold)
          ? { content: n(v) !== 0 ? fmt0(n(v)) : '', styles: { ...CS, fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: bold ? 'bold' as const : 'normal' as const, halign: 'right' as const, cellPadding: { top: 1, right: 2, bottom: 1, left: 1 } } }
          : { content: '', styles: { ...CS, fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: 'normal' as const, halign: 'right' as const } };
      const sideRow = (a: any, p: any, fillA: [number,number,number], fillP: [number,number,number], lineColA: [number,number,number], lineColP: [number,number,number], lineWA: number, lineWP: number, boldA: boolean, boldP: boolean): RowInput => [
        refCell(a.ref, fillA, lineColA, lineWA),
        lblCell(a.label, a.ref, boldA, boldA, fillA, lineColA, lineWA),
        cpteCell(a.compte, fillA, lineColA, lineWA),
        numCell(a.brut, boldA, fillA, lineColA, lineWA),
        numCell(a.amort, boldA, fillA, lineColA, lineWA),
        numCell(a.net, true, fillA, lineColA, lineWA),
        numCell(a.netPrev, false, fillA, lineColA, lineWA),
        refCell(p.ref, fillP, lineColP, lineWP),
        lblCell(p.label, p.ref, boldP, boldP, fillP, lineColP, lineWP),
        cpteCell(p.compte, fillP, lineColP, lineWP),
        numCell(p.net, true, fillP, lineColP, lineWP),
        numCell(p.netPrev, false, fillP, lineColP, lineWP),
      ];

      const body: RowInput[] = [];
      for (let i = 0; i < maxLen; i++) {
        const a: any = actifBody[i]  || empty;
        const p: any = passifBody[i] || empty;
        const isBoldA = !!a.isTotal || !!a.isGrandTotal, isBoldP = !!p.isTotal || !!p.isGrandTotal;
        const fillA = isBoldA ? SLATE_BG : (i % 2 === 0 ? ALT2 : WHITE);
        const fillP = isBoldP ? SLATE_BG : (i % 2 === 0 ? ALT2 : WHITE);
        body.push(sideRow(a, p, fillA, fillP, [180, 180, 180], [180, 180, 180], 0.1, 0.1, isBoldA, isBoldP));
      }
      // Ligne TOTAL GÉNÉRAL : BZ_ACTIF et BZ_PASSIF recombinés explicitement
      // sur une seule ligne (l'actif a un poste de plus que le passif, donc un
      // appariement par index les aurait décalés d'une ligne l'un par rapport
      // à l'autre) — chacun garde sa propre valeur, pas de recalcul.
      body.push(sideRow(actifFinal, passifFinal, SUCCESS_BG, SUCCESS_BG, SUCCESS, SUCCESS, 0.35, 0.35, true, true));

      const H: Partial<Styles> = { ...HEAD, fontSize: headFS, cellPadding: headPadV, fillColor: SLATE_BG, textColor: NAVY };
      const AC: Partial<Styles> = { ...H, fillColor: NAVY, textColor: WHITE };

      autoTable(doc, {
        startY: y,
        head: [
          [
            { content: 'ACTIF', colSpan: 7, styles: { ...AC, halign: 'center' as const, fontStyle: 'bold' as const, fontSize: headFS + 0.5 } },
            { content: 'PASSIF', colSpan: 5, styles: { ...AC, halign: 'center' as const, fontStyle: 'bold' as const, fontSize: headFS + 0.5 } },
          ],
          [
            { content: 'REF',          styles: { ...H } },
            { content: 'Désignation',  styles: { ...H, halign: 'left' as const } },
            { content: 'Cpte',         styles: { ...H, fontSize: headSmallFS } },
            { content: 'BRUT',         styles: { ...H, halign: 'right' as const } },
            { content: 'AMORT.',       styles: { ...H, halign: 'right' as const } },
            { content: 'NET',          styles: { ...H, halign: 'right' as const } },
            { content: 'NET N-1',      styles: { ...H, halign: 'right' as const, fontSize: headSmallFS } },
            { content: 'REF',          styles: { ...H } },
            { content: 'Désignation',  styles: { ...H, halign: 'left' as const } },
            { content: 'Cpte',         styles: { ...H, fontSize: headSmallFS } },
            { content: 'NET',          styles: { ...H, halign: 'right' as const } },
            { content: 'N-1',          styles: { ...H, halign: 'right' as const, fontSize: headSmallFS } },
          ]
        ],
        body,
        styles: { fontSize: bodyFS, cellPadding: bodyPadV, textColor: DARK, lineColor: [180, 180, 180], lineWidth: 0.1 },
        headStyles: { ...H },
        margin: { left: M, right: M, bottom: 14 },
        tableLineWidth: 0.3,
        tableLineColor: [148, 163, 184],
        columnStyles: {
          0: { cellWidth: 9,  halign: 'center' as const },
          1: { cellWidth: 57 },
          2: { cellWidth: 16, halign: 'center' as const },
          3: { cellWidth: 21, halign: 'right' as const },
          4: { cellWidth: 18, halign: 'right' as const },
          5: { cellWidth: 21, halign: 'right' as const },
          6: { cellWidth: 16, halign: 'right' as const },
          7: { cellWidth: 9,  halign: 'center' as const },
          8: { cellWidth: 57 },
          9: { cellWidth: 16, halign: 'center' as const },
          10: { cellWidth: 21, halign: 'right' as const },
          11: { cellWidth: 16, halign: 'right' as const },
        }
      });

      // ── Message d'équilibre — badge arrondi coloré avec un point de statut
      // dessiné en vectoriel (pas un glyphe ✓/⚠ : les polices intégrées de
      // jsPDF n'ont pas ce glyphe, il s'affichait comme "&" et sa largeur
      // mesurée ne correspondait pas à ce qui était réellement dessiné, d'où
      // le texte qui débordait du cadre). ───────────────────────────────────
      const lastY = (doc as any).lastAutoTable?.finalY ?? y;
      const msg = balanced
        ? `BILAN ÉQUILIBRÉ   —   TOTAL ACTIF = TOTAL PASSIF = ${fmt0(n(totalActif))} FCFA`
        : `BILAN DÉSÉQUILIBRÉ   —   DIFFÉRENCE = ${fmt0(Math.abs(n(totalActif) - n(totalPassif)))} FCFA`;
      const statusCol = balanced ? SUCCESS : DANGER;
      const statusDark = balanced ? SUCCESS_DARK : DANGER_DARK;
      const msgFS = Math.max(7.5, bodyFS + 1.5);
      doc.setFont('helvetica', 'bold'); doc.setFontSize(msgFS);
      const dotR = 1.4, dotGap = 3;
      const textW = doc.getTextWidth(msg);
      const padX = 6, padY = 2.6;
      const contentW = dotR * 2 + dotGap + textW;
      const boxW = contentW + padX * 2;
      const boxH = msgFS * 0.3527 * 1.25 + padY * 2;
      const boxX = W / 2 - boxW / 2;
      const boxY = lastY + 5;
      doc.setFillColor(...(balanced ? SUCCESS_BG : DANGER_BG));
      doc.setDrawColor(...statusCol);
      doc.setLineWidth(0.35);
      doc.roundedRect(boxX, boxY, boxW, boxH, 1.4, 1.4, 'FD');
      const midY = boxY + boxH / 2;
      doc.setFillColor(...statusCol);
      doc.circle(boxX + padX + dotR, midY, dotR, 'F');
      doc.setTextColor(...statusDark);
      doc.text(msg, boxX + padX + dotR * 2 + dotGap, midY + msgFS * 0.35 * 0.3527, { align: 'left' });

      addFooter(doc, 'Bilan OHADA');
      return { doc, bottomGap: PAGE_H - (boxY + boxH) };
    };

    // Essaie des polices de plus en plus petites jusqu'à trouver la plus grande
    // qui tienne sur une seule page ET laisse au moins ~22mm sous le tableau
    // (message d'équilibre + pied de page correctement aérés, pas collés au bas).
    const CANDIDATES = [9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5, 4];
    const MIN_BOTTOM_GAP = 22;
    let result = build(CANDIDATES[CANDIDATES.length - 1]);
    for (const fs of CANDIDATES) {
      const r = build(fs);
      const pages = (r.doc as any).internal.pages.length - 1;
      result = r;
      if (pages <= 1 && r.bottomGap >= MIN_BOTTOM_GAP) break;
    }

    result.doc.save(`Bilan_OHADA_${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  // ─────────────────────────────────────────────────────────
  // COMPTE DE RÉSULTAT  (SYSCOHADA Révisé — codes TA→XI)
  // ─────────────────────────────────────────────────────────
  // Même système visuel que le Bilan OHADA (exportBilan ci-dessus) : en-tête
  // compact centré, bandeau d'en-têtes en marque (navy), sous-totaux en gris
  // ardoise, résultat final en vert/rouge selon bénéfice/perte, et calibrage
  // dynamique de la police pour garantir UNE SEULE page quel que soit le
  // nombre de rubriques (~40 lignes).
  exportCompteResultat(lines: any[], dateFrom: string, dateTo: string, companyName?: string): void {
    // Comptes SYSCOHADA exacts (nouveaux codes TA→XI) — alignés sur le module de
    // référence blessing_repports (Odoo) : plusieurs rubriques couvrent plusieurs
    // comptes, pas un seul (ex. TB = 702+703+704).
    const COMPTES: Record<string, string> = {
      'TA': '701',        'RA': '601',     'RB': '6031',        'XA': '',
      'TB': '702-704',    'TC': '705-706', 'TD': '707',         'XB': '',
      'TE': '73',         'TF': '72',      'TG': '71',    'TH': '75',   'TI': '781',
      'RC': '602',        'RD': '6032',    'RE': '604-605-608', 'RF': '6033',
      'RG': '61',         'RH': '62-63',   'RI': '64',          'RJ': '65',   'XC': '',
      'RK': '66',         'XD': '',
      'TJ': '791-798',    'RL': '681',     'XE': '',
      'TK': '77',         'TL': '797',     'TM': '787',         'RM': '67',   'RN': '697',  'XF': '',
      'XG': '',
      'TN': '82',         'TO': '84-86-88','RO': '81',          'RP': '83-85', 'XH': '',
      'RS': '89',         'XI': '',
    };

    const GREEN: [number,number,number] = [21, 128, 61];
    const RED_C: [number,number,number] = [185, 28, 28];

    const xiLine = lines.find(l => l.code === 'XI');
    const resultatPositif = n(xiLine?.current ?? 0) >= 0;

    const build = (bodyFS: number): { doc: jsPDF; bottomGap: number } => {
      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const W = doc.internal.pageSize.width;
      const PAGE_H = doc.internal.pageSize.height;
      const M = 10;

      let y = 12;
      doc.setFont('times', 'bold'); doc.setFontSize(13); doc.setTextColor(...NAVY);
      doc.text('COMPTE DE RÉSULTAT', W / 2, y, { align: 'center' }); y += 4;
      doc.setFont('times', 'italic'); doc.setFontSize(9); doc.setTextColor(...MUTED);
      doc.text('SYSCOHADA Révisé', W / 2, y, { align: 'center' }); y += 3.3;
      if (companyName) {
        doc.setFont('times', 'bold'); doc.setFontSize(10.5); doc.setTextColor(...DARK);
        doc.text(companyName.toUpperCase(), W / 2, y, { align: 'center' }); y += 3.3;
      }
      doc.setFont('times', 'italic'); doc.setFontSize(8.5); doc.setTextColor(...MUTED);
      doc.text(`Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, W / 2, y, { align: 'center' });
      y += 3.5;
      doc.setDrawColor(...PRIMARY); doc.setLineWidth(0.8);
      doc.line(W / 2 - 14, y, W / 2 + 14, y); y += 2.5;
      doc.setDrawColor(200, 200, 200); doc.setLineWidth(0.15);
      doc.line(M, y, W - M, y); y += 3;

      const bodyPadV = Math.max(0.25, Math.min(1.2, bodyFS * 0.13));
      const headFS = bodyFS + 0.5;
      const headPadV = Math.max(0.35, Math.min(2, headFS * 0.2));

      const CS: Partial<Styles> = { fontSize: bodyFS, cellPadding: bodyPadV };

      const body: RowInput[] = lines.map((l, i) => {
        const isFinal = l.code === 'XI';
        const isTot   = !!l.isTotal && !isFinal;
        const fill: [number,number,number] = isFinal ? (resultatPositif ? SUCCESS_BG : DANGER_BG)
          : isTot ? SLATE_BG : (i % 2 === 0 ? ALT2 : WHITE);
        const fs      = (isTot || isFinal) ? 'bold' as const : 'normal' as const;
        const lc: [number,number,number] = isFinal ? (resultatPositif ? SUCCESS : DANGER) : [180, 180, 180];
        const lw = isFinal ? 0.35 : 0.1;
        const compte  = COMPTES[l.code] ?? '';
        const sign    = l.sign || '';
        const signColor: [number,number,number] = sign === '+' ? GREEN : sign === '-' ? RED_C : MUTED;
        const amountN  = n(l.current);
        const amountN1 = n(l.previous ?? l.prev ?? 0);

        return [
          { content: l.code || '',  styles: { ...CS, fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: fs, halign: 'center' as const, textColor: DARK } },
          { content: l.label || '', styles: { ...CS, fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: fs, textColor: DARK } },
          { content: compte,        styles: { ...CS, fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: 'normal' as const, halign: 'center' as const, textColor: MUTED, fontSize: Math.max(5.5, bodyFS - 1) } },
          { content: sign,          styles: { ...CS, fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: 'bold' as const, halign: 'center' as const, textColor: signColor } },
          amountN > 0 || (isTot || isFinal)
            ? { content: fmt0(amountN), styles: { ...CS, fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: fs, halign: 'right' as const, textColor: DARK, overflow: 'hidden' as const } }
            : { content: '—',           styles: { ...CS, fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: fs, halign: 'right' as const, textColor: MUTED, overflow: 'hidden' as const } },
          amountN1 > 0
            ? { content: fmt0(amountN1), styles: { ...CS, fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: 'normal' as const, halign: 'right' as const, textColor: MUTED, overflow: 'hidden' as const } }
            : { content: '—',            styles: { ...CS, fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: 'normal' as const, halign: 'right' as const, textColor: [200,200,200] as [number,number,number], overflow: 'hidden' as const } },
        ];
      });

      const H: Partial<Styles> = { ...HEAD, fontSize: headFS, cellPadding: headPadV, fillColor: NAVY, textColor: WHITE };

      autoTable(doc, {
        startY: y,
        head: [[
          { content: 'REF',     styles: { ...H } },
          { content: 'LIBELLÉ', styles: { ...H, halign: 'left' as const } },
          { content: 'CPT',     styles: { ...H, fontSize: Math.max(5.5, headFS - 1) } },
          { content: 'SGN',     styles: { ...H } },
          { content: 'NET N',   styles: { ...H, halign: 'right' as const } },
          { content: 'NET N-1', styles: { ...H, halign: 'right' as const } },
        ]],
        body,
        styles: { fontSize: bodyFS, cellPadding: bodyPadV, textColor: DARK, lineColor: [180, 180, 180], lineWidth: 0.1 },
        headStyles: { ...H },
        margin: { left: M, right: M, bottom: 14 },
        tableLineWidth: 0.3,
        tableLineColor: [148, 163, 184],
        columnStyles: {
          0: { cellWidth: 12,  halign: 'center' as const },
          1: { cellWidth: 86 },
          2: { cellWidth: 12,  halign: 'center' as const },
          3: { cellWidth: 14,  halign: 'center' as const },
          4: { cellWidth: 33,  halign: 'right'  as const },
          5: { cellWidth: 33,  halign: 'right'  as const },
        }
      });

      const lastY = (doc as any).lastAutoTable?.finalY ?? y;
      addFooter(doc, 'Compte de Résultat SYSCOHADA Révisé');
      return { doc, bottomGap: PAGE_H - lastY };
    };

    // Essaie des polices de plus en plus petites jusqu'à trouver la plus grande
    // qui tienne sur une seule page ET laisse assez de marge sous le tableau.
    const CANDIDATES = [9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5, 4];
    const MIN_BOTTOM_GAP = 16;
    let result = build(CANDIDATES[CANDIDATES.length - 1]);
    for (const fs of CANDIDATES) {
      const r = build(fs);
      const pages = (r.doc as any).internal.pages.length - 1;
      result = r;
      if (pages <= 1 && r.bottomGap >= MIN_BOTTOM_GAP) break;
    }

    result.doc.save(`Compte_de_Resultat_${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  // ─────────────────────────────────────────────────────────
  // BALANCE DES TIERS 4 COLONNES  (portrait, groupes Clients/Fournisseurs)
  // Même style "état financier" que le Bilan / Compte de Résultat. Pas de
  // notion d'équilibre ici (clients et fournisseurs n'ont aucune raison de
  // se compenser) — pas de badge, juste un rendu propre par groupe.
  // ─────────────────────────────────────────────────────────
  exportPartnerBalance4(lines: any[], dateFrom: string, dateTo: string, companyName?: string): void {
    const customers = lines.filter((l: any) => l.type === 'customer');
    const suppliers  = lines.filter((l: any) => l.type === 'supplier');
    const groups = [
      { label: 'CLIENTS',       data: customers },
      { label: 'FOURNISSEURS',  data: suppliers },
    ];

    const build = (bodyFS: number): jsPDF => {
      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const W = doc.internal.pageSize.width;
      const PAGE_H = doc.internal.pageSize.height;
      const M = 10;

      let y = 12;
      doc.setFont('times', 'bold'); doc.setFontSize(13); doc.setTextColor(...NAVY);
      doc.text('BALANCE DES TIERS À 4 COLONNES', W / 2, y, { align: 'center' }); y += 4;
      if (companyName) {
        doc.setFont('times', 'bold'); doc.setFontSize(10.5); doc.setTextColor(...DARK);
        doc.text(companyName.toUpperCase(), W / 2, y, { align: 'center' }); y += 3.3;
      }
      doc.setFont('times', 'italic'); doc.setFontSize(8.5); doc.setTextColor(...MUTED);
      doc.text(`Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, W / 2, y, { align: 'center' });
      y += 3.5;
      doc.setDrawColor(...PRIMARY); doc.setLineWidth(0.8);
      doc.line(W / 2 - 14, y, W / 2 + 14, y); y += 2.5;
      doc.setDrawColor(200, 200, 200); doc.setLineWidth(0.15);
      doc.line(M, y, W - M, y); y += 5;

      const bodyPadV = Math.max(0.25, Math.min(1.2, bodyFS * 0.13));
      const headFS = bodyFS + 0.5;
      const headPadV = Math.max(0.35, Math.min(2, headFS * 0.2));
      const H: Partial<Styles> = { ...HEAD, fontSize: headFS, cellPadding: headPadV, fillColor: SLATE_BG, textColor: NAVY };
      const AC: Partial<Styles> = { ...H, fillColor: NAVY, textColor: WHITE };

      const toRow = (l: any, i: number): RowInput => {
        const fill = i % 2 === 0 ? ALT2 : WHITE;
        const CS: Partial<Styles> = { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: fill };
        const dashCell = (v: any) => { const c = ncDash(v); return { ...c, styles: { ...CS, ...c.styles } }; };
        return [
          { content: l.accountNumber || '', styles: { ...CS, halign: 'center' as const, fontStyle: 'bold' as const, textColor: NAVY } },
          { content: l.partnerName || '', styles: { ...CS } },
          dashCell(l.debit), dashCell(l.credit), dashCell(l.finalDebit), dashCell(l.finalCredit),
        ];
      };

      for (const grp of groups) {
        if (grp.data.length === 0) continue;
        if (y > PAGE_H - 40) { doc.addPage(); y = 15; }

        // Bandeau de titre de groupe (même traitement que ACTIF/PASSIF au bilan)
        doc.setFillColor(...NAVY);
        doc.rect(M, y, W - 2 * M, 6, 'F');
        doc.setFont('helvetica', 'bold'); doc.setFontSize(9.5); doc.setTextColor(...WHITE);
        doc.text(grp.label, M + 3, y + 4.2);
        y += 6;

        const gD  = grp.data.reduce((s: number, l: any) => s + n(l.debit), 0);
        const gC  = grp.data.reduce((s: number, l: any) => s + n(l.credit), 0);
        const gFD = grp.data.reduce((s: number, l: any) => s + n(l.finalDebit), 0);
        const gFC = grp.data.reduce((s: number, l: any) => s + n(l.finalCredit), 0);

        const body: RowInput[] = grp.data.map(toRow);
        body.push([
          { content: 'Total ' + grp.label, colSpan: 2, styles: { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: SLATE_BG, fontStyle: 'bold' as const, textColor: NAVY } },
          ...[gD, gC, gFD, gFC].map(v => ({ content: v > 0 ? fmt0(v) : '—', styles: { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: SLATE_BG, fontStyle: 'bold' as const, halign: 'right' as const, textColor: v > 0 ? NAVY : MUTED } }))
        ]);

        autoTable(doc, {
          startY: y,
          head: [
            [
              { content: 'N° Compte',    rowSpan: 2, styles: { ...H, valign: 'middle' as const } },
              { content: 'Nom du Tiers', rowSpan: 2, styles: { ...H, halign: 'left' as const, valign: 'middle' as const } },
              { content: 'Mouvements Période', colSpan: 2, styles: { ...AC, halign: 'center' as const } },
              { content: 'Soldes Finaux',      colSpan: 2, styles: { ...AC, halign: 'center' as const } },
            ],
            [
              { content: 'Débit',     styles: { ...H, halign: 'right' as const } },
              { content: 'Crédit',    styles: { ...H, halign: 'right' as const } },
              { content: 'Débiteur',  styles: { ...H, halign: 'right' as const } },
              { content: 'Créditeur', styles: { ...H, halign: 'right' as const } },
            ]
          ],
          body,
          styles: { fontSize: bodyFS, cellPadding: bodyPadV, textColor: DARK, lineColor: [180, 180, 180], lineWidth: 0.1 },
          margin: { left: M, right: M, bottom: 14 },
          tableLineWidth: 0.3,
          tableLineColor: [148, 163, 184],
          columnStyles: {
            0: { cellWidth: 20, halign: 'center' as const },
            1: { cellWidth: 62 },
            2: { cellWidth: 27, halign: 'right' as const },
            3: { cellWidth: 27, halign: 'right' as const },
            4: { cellWidth: 27, halign: 'right' as const },
            5: { cellWidth: 27, halign: 'right' as const },
          }
        });
        y = ((doc as any).lastAutoTable?.finalY ?? y) + 7;
      }

      addFooter(doc, 'Balance des Tiers 4 Colonnes');
      return doc;
    };

    const CANDIDATES = [9, 8.5, 8, 7.5, 7, 6.5, 6];
    let finalDoc = build(CANDIDATES[CANDIDATES.length - 1]);
    for (const fs of CANDIDATES) {
      finalDoc = build(fs);
      if ((finalDoc as any).internal.pages.length - 1 <= 1) break;
    }

    finalDoc.save('Balance_Tiers_4_Cols_' + new Date().toISOString().slice(0, 10) + '.pdf');
  }

  // ─────────────────────────────────────────────────────────
  // BALANCE DES TIERS 6 COLONNES  (paysage, groupes Clients/Fournisseurs)
  // Même style que la version 4 colonnes ci-dessus.
  // ─────────────────────────────────────────────────────────
  exportPartnerBalance6(lines: any[], dateFrom: string, dateTo: string, companyName?: string): void {
    const customers = lines.filter((l: any) => l.type === 'customer');
    const suppliers  = lines.filter((l: any) => l.type === 'supplier');
    const groups = [
      { label: 'CLIENTS',       data: customers },
      { label: 'FOURNISSEURS',  data: suppliers },
    ];

    const build = (bodyFS: number): jsPDF => {
      const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      const W = doc.internal.pageSize.width;
      const PAGE_H = doc.internal.pageSize.height;
      const M = 10;

      let y = 12;
      doc.setFont('times', 'bold'); doc.setFontSize(13); doc.setTextColor(...NAVY);
      doc.text('BALANCE DES TIERS À 6 COLONNES', W / 2, y, { align: 'center' }); y += 4;
      if (companyName) {
        doc.setFont('times', 'bold'); doc.setFontSize(10.5); doc.setTextColor(...DARK);
        doc.text(companyName.toUpperCase(), W / 2, y, { align: 'center' }); y += 3.3;
      }
      doc.setFont('times', 'italic'); doc.setFontSize(8.5); doc.setTextColor(...MUTED);
      doc.text(`Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, W / 2, y, { align: 'center' });
      y += 3.5;
      doc.setDrawColor(...PRIMARY); doc.setLineWidth(0.8);
      doc.line(W / 2 - 14, y, W / 2 + 14, y); y += 2.5;
      doc.setDrawColor(200, 200, 200); doc.setLineWidth(0.15);
      doc.line(M, y, W - M, y); y += 5;

      const bodyPadV = Math.max(0.25, Math.min(1.2, bodyFS * 0.13));
      const headFS = bodyFS + 0.5;
      const headPadV = Math.max(0.35, Math.min(2, headFS * 0.2));
      const H: Partial<Styles> = { ...HEAD, fontSize: headFS, cellPadding: headPadV, fillColor: SLATE_BG, textColor: NAVY };
      const AC: Partial<Styles> = { ...H, fillColor: NAVY, textColor: WHITE };

      const toRow = (l: any, i: number): RowInput => {
        const fill = i % 2 === 0 ? ALT2 : WHITE;
        const CS: Partial<Styles> = { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: fill };
        const dashCell = (v: any) => { const c = ncDash(v); return { ...c, styles: { ...CS, ...c.styles } }; };
        return [
          { content: l.accountNumber || '', styles: { ...CS, halign: 'center' as const, fontStyle: 'bold' as const, textColor: NAVY } },
          { content: l.partnerName || '', styles: { ...CS } },
          dashCell(l.initialDebit), dashCell(l.initialCredit),
          dashCell(l.debit), dashCell(l.credit),
          dashCell(l.finalDebit), dashCell(l.finalCredit),
        ];
      };

      for (const grp of groups) {
        if (grp.data.length === 0) continue;
        if (y > PAGE_H - 40) { doc.addPage(); y = 15; }

        doc.setFillColor(...NAVY);
        doc.rect(M, y, W - 2 * M, 6, 'F');
        doc.setFont('helvetica', 'bold'); doc.setFontSize(9.5); doc.setTextColor(...WHITE);
        doc.text(grp.label, M + 3, y + 4.2);
        y += 6;

        const sum = (key: string) => grp.data.reduce((s: number, l: any) => s + n(l[key]), 0);
        const totals = [sum('initialDebit'), sum('initialCredit'), sum('debit'), sum('credit'), sum('finalDebit'), sum('finalCredit')];

        const body: RowInput[] = grp.data.map(toRow);
        body.push([
          { content: 'Total ' + grp.label, colSpan: 2, styles: { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: SLATE_BG, fontStyle: 'bold' as const, textColor: NAVY } },
          ...totals.map(v => ({ content: v > 0 ? fmt0(v) : '—', styles: { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: SLATE_BG, fontStyle: 'bold' as const, halign: 'right' as const, textColor: v > 0 ? NAVY : MUTED } }))
        ]);

        autoTable(doc, {
          startY: y,
          head: [
            [
              { content: 'N° Compte',    rowSpan: 2, styles: { ...H, valign: 'middle' as const } },
              { content: 'Nom du Tiers', rowSpan: 2, styles: { ...H, halign: 'left' as const, valign: 'middle' as const } },
              { content: 'Solde Initial',      colSpan: 2, styles: { ...AC, halign: 'center' as const } },
              { content: 'Mouvements Période', colSpan: 2, styles: { ...AC, halign: 'center' as const } },
              { content: 'Solde Final',        colSpan: 2, styles: { ...AC, halign: 'center' as const } },
            ],
            [
              { content: 'Débiteur',  styles: { ...H, halign: 'right' as const } },
              { content: 'Créditeur', styles: { ...H, halign: 'right' as const } },
              { content: 'Débit',     styles: { ...H, halign: 'right' as const } },
              { content: 'Crédit',    styles: { ...H, halign: 'right' as const } },
              { content: 'Débiteur',  styles: { ...H, halign: 'right' as const } },
              { content: 'Créditeur', styles: { ...H, halign: 'right' as const } },
            ]
          ],
          body,
          styles: { fontSize: bodyFS, cellPadding: bodyPadV, textColor: DARK, lineColor: [180, 180, 180], lineWidth: 0.1 },
          margin: { left: M, right: M, bottom: 14 },
          tableLineWidth: 0.3,
          tableLineColor: [148, 163, 184],
          columnStyles: {
            0: { cellWidth: 18, halign: 'center' as const },
            1: { cellWidth: 95 },
            2: { cellWidth: 27, halign: 'right' as const }, 3: { cellWidth: 27, halign: 'right' as const },
            4: { cellWidth: 27, halign: 'right' as const }, 5: { cellWidth: 27, halign: 'right' as const },
            6: { cellWidth: 27, halign: 'right' as const }, 7: { cellWidth: 27, halign: 'right' as const },
          }
        });
        y = ((doc as any).lastAutoTable?.finalY ?? y) + 7;
      }

      addFooter(doc, 'Balance des Tiers 6 Colonnes');
      return doc;
    };

    const CANDIDATES = [9, 8.5, 8, 7.5, 7, 6.5, 6];
    let finalDoc = build(CANDIDATES[CANDIDATES.length - 1]);
    for (const fs of CANDIDATES) {
      finalDoc = build(fs);
      if ((finalDoc as any).internal.pages.length - 1 <= 1) break;
    }

    finalDoc.save('Balance_Tiers_6_Cols_' + new Date().toISOString().slice(0, 10) + '.pdf');
  }

  // ─────────────────────────────────────────────────────────
  // ÉTAT COMMERCIAL
  // ─────────────────────────────────────────────────────────
  exportEtatCommercial(data: any, companyName?: string): void {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const startY = drawPageHeader(doc, 'État Commercial — Statistiques de Ventes',
      `Période du ${dateStr(data.dateFrom)} au ${dateStr(data.dateTo)} — ${data.totalInvoices} facture(s)`,
      companyName);

    const body: RowInput[] = [];
    for (const client of data.clients) {
      body.push(secRow(
        `CLIENT : ${client.clientName}${client.clientRef ? '  [' + client.clientRef + ']' : ''}`, 5));
      for (const line of client.lines) {
        body.push([
          line.productCode || '',
          line.productName,
          nc2(line.qty), nc2(line.caHT), nc2(line.caTTC)
        ]);
      }
      body.push(subRow([`Sous-total ${client.clientName}`, '', nc2(client.totalQty), nc2(client.totalHT), nc2(client.totalTTC)]));
    }
    body.push(gtRow(['TOTAL GÉNÉRAL', '', nc2(data.grandTotalQty), nc2(data.grandTotalHT), nc2(data.grandTotalTTC)]));

    autoTable(doc, baseOpts(startY, {
      head: [['Code', 'Désignation', 'Quantité', 'CA HT', 'CA TTC']],
      body,
      columnStyles: {
        0: { cellWidth: 28 },
        1: { cellWidth: 90 },
        2: { cellWidth: 24, halign: 'right' as const },
        3: { cellWidth: 28, halign: 'right' as const },
        4: { cellWidth: 28, halign: 'right' as const },
      }
    }));

    addFooter(doc, 'État Commercial — Statistiques de Ventes');
    doc.save(`Etat_Commercial_${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  // ─────────────────────────────────────────────────────────
  // RAPPORT COMMERCIAL CONSOLIDÉ
  // ─────────────────────────────────────────────────────────
  exportRapportConsolide(data: any, companyName?: string): void {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const startY = drawPageHeader(doc, 'Rapport Commercial Consolidé',
      `Période du ${dateStr(data.dateFrom)} au ${dateStr(data.dateTo)} — ${data.totalInvoices} facture(s)`,
      companyName);

    const body: RowInput[] = [];
    for (const client of data.clients) {
      body.push(secRow(
        `CLIENT : ${client.clientName}${client.clientRef ? '  [' + client.clientRef + ']' : ''}`, 8));
      for (const line of client.lines) {
        const htBrut = n(line.caHT) + n(line.remise);
        const taux = htBrut > 0 ? Math.round((n(line.remise) / htBrut) * 10000) / 100 : 0;
        body.push([
          line.productCode || '', line.productName,
          nc2(line.qty), nc2(line.prixVente),
          nc2(line.caHT), nc2(line.caTTC),
          nc2(line.remise),
          { content: `${taux} %`, styles: { halign: 'right' as const } }
        ]);
      }
      body.push(subRow([
        `Sous-total ${client.clientName}`, '',
        nc2(client.totalQty), '',
        nc2(client.totalHT), nc2(client.totalTTC),
        nc2(client.totalRemise), ''
      ]));
    }
    body.push(gtRow([
      'TOTAL GÉNÉRAL', '', nc2(data.grandTotalQty), '',
      nc2(data.grandTotalHT), nc2(data.grandTotalTTC),
      nc2(data.grandTotalRemise), ''
    ]));

    autoTable(doc, baseOpts(startY, {
      head: [['Code', 'Désignation', 'Qté', 'Prix Moy.', 'CA HT', 'CA TTC', 'Remise', '% Rem.']],
      body,
      columnStyles: {
        0: { cellWidth: 22 }, 1: { cellWidth: 66 },
        2: { cellWidth: 20, halign: 'right' as const }, 3: { cellWidth: 24, halign: 'right' as const },
        4: { cellWidth: 28, halign: 'right' as const }, 5: { cellWidth: 28, halign: 'right' as const },
        6: { cellWidth: 24, halign: 'right' as const }, 7: { cellWidth: 20, halign: 'right' as const },
      }
    }));

    addFooter(doc, 'Rapport Commercial Consolidé');
    doc.save(`Rapport_Consolide_${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  // ─────────────────────────────────────────────────────────
  // RAPPORT DE STOCK VALORISÉ
  // ─────────────────────────────────────────────────────────
  exportStockReport(
    groups: {
      warehouseName: string;
      rows: { code: string; name: string; uom: string; price: number; qty: number; value: number }[];
      subtotalQty: number;
      subtotalValue: number;
    }[],
    companyName?: string
  ): void {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const startY = drawPageHeader(
      doc, 'Rapport de Stock Valorisé',
      `État au ${new Date().toLocaleDateString('fr-FR')}`,
      companyName
    );

    const body: RowInput[] = [];
    let grandQty = 0;
    let grandVal = 0;

    for (const grp of groups) {
      body.push(secRow(`ENTREPÔT : ${grp.warehouseName.toUpperCase()}`, 6));
      for (const r of grp.rows) {
        body.push([
          { content: r.code, styles: { halign: 'center' as const, font: 'courier' } },
          r.name,
          { content: r.uom, styles: { halign: 'center' as const } },
          { content: r.price > 0 ? fmt0(r.price) : '', styles: { halign: 'right' as const } },
          { content: r.qty > 0 ? fmt2(r.qty) : '0,00', styles: { halign: 'right' as const } },
          { content: fmt0(r.value), styles: { halign: 'right' as const } },
        ]);
      }
      body.push(subRow([
        '', `Sous-total ${grp.warehouseName}`, '', '',
        { content: fmt2(grp.subtotalQty), styles: { halign: 'right' } },
        { content: fmt0(grp.subtotalValue), styles: { halign: 'right' } },
      ]));
      grandQty += grp.subtotalQty;
      grandVal += grp.subtotalValue;
    }

    body.push(gtRow([
      '', 'TOTAL GÉNÉRAL DU STOCK', '', '',
      { content: fmt2(grandQty), styles: { halign: 'right' } },
      { content: fmt0(grandVal), styles: { halign: 'right' } },
    ]));

    autoTable(doc, baseOpts(startY, {
      head: [['Référence', 'Désignation', 'UDM', 'P.U. (CMUP)', 'Quantité', 'Valeur (FCFA)']],
      body,
columnStyles: {
        0: { cellWidth: 26, halign: 'center' as const },
        1: { cellWidth: 105 },
        2: { cellWidth: 16, halign: 'center' as const },
        3: { cellWidth: 30, halign: 'right' as const },
        4: { cellWidth: 30, halign: 'right' as const },
        5: { cellWidth: 38, halign: 'right' as const },
      }
    }));

    addFooter(doc, 'Rapport de Stock Valorisé');
    doc.save(`Rapport_Stock_${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  exportStockMovements(
    movements: { productCode?: string; productName?: string; locationName?: string; locationDestName?: string; qtyDone?: number; priceUnit?: number; subtotalValue?: number; dateDone?: string; pickingRef?: string; partnerName?: string }[],
    companyName?: string
  ): void {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const startY = drawPageHeader(doc, 'Mouvements de Stock', `Export au ${new Date().toLocaleDateString('fr-FR')}`, companyName);

    const body: RowInput[] = movements.map((m, i) => {
      const artLabel = (m.productCode ? `[${m.productCode}] ` : '') + (m.productName || '');
      return [
        { content: m.dateDone || '—', styles: { halign: 'center' as const } },
        m.pickingRef || '—',
        m.partnerName || '—',
        artLabel,
        m.locationName || '—',
        m.locationDestName || '—',
        { content: m.qtyDone != null ? fmt2(m.qtyDone) : '', styles: { halign: 'right' as const } },
        { content: m.subtotalValue != null ? fmt0(m.subtotalValue) : '', styles: { halign: 'right' as const } },
      ];
    });
    const totalVal = movements.reduce((s, m) => s + n(m.subtotalValue), 0);
    body.push(gtRow(['', '', '', '', '', 'TOTAL', '', { content: fmt0(totalVal), styles: { halign: 'right' } }]));

    autoTable(doc, baseOpts(startY, {
      head: [['Date', 'Référence', 'Partenaire', 'Article', 'De', 'Vers', 'Quantité', 'Valeur (FCFA)']],
      body,
      columnStyles: {
        0: { cellWidth: 22, halign: 'center' as const },
        1: { cellWidth: 28 },
        2: { cellWidth: 32 },
        3: { cellWidth: 60 },
        4: { cellWidth: 32 },
        5: { cellWidth: 32 },
        6: { cellWidth: 22, halign: 'right' as const },
        7: { cellWidth: 30, halign: 'right' as const },
      }
    }));

    addFooter(doc, 'Mouvements de Stock');
    doc.save(`Mouvements_Stock_${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  exportStockAnalysis(
    data: { warehouseName: string; lines: { productCode?: string; productName: string; uomName?: string; initialQty: number; inQty: number; outQty: number; finalQty: number; unitCost: number; initialValue: number; inValue: number; outValue: number; finalValue: number }[]; totalInitialQty: number; totalInQty: number; totalOutQty: number; totalFinalQty: number; totalInitialValue: number; totalInValue: number; totalOutValue: number; totalFinalValue: number }[],
    dateFrom: string, dateTo: string, companyName?: string
  ): void {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const startY = drawPageHeader(doc, 'Rapport de Stock Analytique', `Période : ${dateFrom} → ${dateTo}`, companyName);

    const body: RowInput[] = [];
    for (const wh of data) {
      body.push(secRow(`ENTREPÔT : ${wh.warehouseName.toUpperCase()}`, 11));
      for (const l of wh.lines) {
        const art = (l.productCode ? `[${l.productCode}] ` : '') + l.productName;
        body.push([
          art, l.uomName || '',
          nc2(l.initialQty), nc2(l.inQty), nc2(l.outQty), nc2(l.finalQty),
          nc0(l.unitCost), nc0(l.initialValue), nc0(l.inValue), nc0(l.outValue), nc0(l.finalValue),
        ]);
      }
      body.push(subRow([
        `Total ${wh.warehouseName}`, '',
        nc2(wh.totalInitialQty), nc2(wh.totalInQty), nc2(wh.totalOutQty), nc2(wh.totalFinalQty), '',
        nc0(wh.totalInitialValue), nc0(wh.totalInValue), nc0(wh.totalOutValue), nc0(wh.totalFinalValue),
      ]));
    }

    autoTable(doc, baseOpts(startY, {
      head: [['Article', 'UDM', 'Stock init.', 'Entrées', 'Sorties', 'Stock final', 'Coût U.', 'Val. init.', 'Val. entrées', 'Val. sorties', 'Val. finale']],
      body,
      columnStyles: {
        0: { cellWidth: 60 }, 1: { cellWidth: 10 },
        2: { cellWidth: 18, halign: 'right' as const }, 3: { cellWidth: 18, halign: 'right' as const },
        4: { cellWidth: 18, halign: 'right' as const }, 5: { cellWidth: 18, halign: 'right' as const },
        6: { cellWidth: 18, halign: 'right' as const }, 7: { cellWidth: 22, halign: 'right' as const },
        8: { cellWidth: 22, halign: 'right' as const }, 9: { cellWidth: 22, halign: 'right' as const },
        10: { cellWidth: 22, halign: 'right' as const },
      }
    }));

    addFooter(doc, 'Rapport Analytique de Stock');
    doc.save(`Rapport_Analytique_Stock_${new Date().toISOString().slice(0, 10)}.pdf`);
  }
}

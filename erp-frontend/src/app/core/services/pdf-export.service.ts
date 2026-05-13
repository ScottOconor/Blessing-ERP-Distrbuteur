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

// ─── Formatage ───────────────────────────────────────────────────────────────
function dateStr(d: string | Date): string {
  if (!d) return '';
  const dt = typeof d === 'string' ? new Date(d) : d;
  return dt.toLocaleDateString('fr-FR');
}
function fmt2(v: any): string {
  return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    .format(v != null ? Number(v) : 0)
    .replace(/ | /g, ' ');
}
function fmt0(v: any): string {
  return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    .format(v != null ? Number(v) : 0)
    .replace(/ | /g, ' ');
}
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

// ─── En-tête de document ──────────────────────────────────────────────────────
// Retourne la coordonnée Y de départ pour le tableau
function drawPageHeader(doc: jsPDF, title: string, subtitle: string, companyName?: string): number {
  const W = doc.internal.pageSize.width;
  let y = 10;

  if (companyName) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...MUTED);
    doc.text(companyName.toUpperCase(), W - 10, y, { align: 'right' });
    y += 6;
  }

  doc.setFont('times', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...DARK);
  doc.text(title.toUpperCase(), W / 2, y, { align: 'center' });
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...MUTED);
  doc.text(subtitle, W / 2, y, { align: 'center' });
  y += 5;

  doc.setFontSize(7.5);
  doc.text(`Imprimé le : ${new Date().toLocaleString('fr-FR')}`, W / 2, y, { align: 'center' });
  y += 4;

  doc.setDrawColor(...BLACK);
  doc.setLineWidth(0.4);
  doc.line(10, y, W - 10, y);

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

// ─── Styles de base ───────────────────────────────────────────────────────────
const HEAD: Partial<Styles> = {
  fillColor: HDR_BG, textColor: DARK, fontStyle: 'bold',
  halign: 'center', fontSize: 8.5, valign: 'middle', cellPadding: 3,
  lineColor: BLACK, lineWidth: 0.3
};
const BASE: Partial<Styles> = {
  fontSize: 8.5, cellPadding: 2.5, textColor: DARK,
  lineColor: [180, 180, 180], lineWidth: 0.15
};
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
    ? { content: c, styles: { fillColor: SUB_BG, fontStyle: 'bold' as const, textColor: DARK } }
    : { ...c, styles: { fillColor: SUB_BG, fontStyle: 'bold' as const, halign: 'right' as const, textColor: DARK } }
  ) as RowInput;
}

function gtRow(cells: Cell[]): RowInput {
  return cells.map(c => typeof c === 'string'
    ? { content: c, styles: { fillColor: TOT_BG, fontStyle: 'bold' as const, textColor: BLACK } }
    : { ...c, styles: { fillColor: TOT_BG, fontStyle: 'bold' as const, halign: 'right' as const, textColor: BLACK } }
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
  // BALANCE GÉNÉRALE 4 COLONNES
  // ─────────────────────────────────────────────────────────
  exportBalance4(
    lines: any[], apiTotals: any,
    totalDebit: number, totalCredit: number,
    totalFinalDebit: number, totalFinalCredit: number,
    dateFrom: string, dateTo: string,
    companyName?: string
  ): void {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const startY = drawPageHeader(doc, 'Balance Générale à 4 Colonnes',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, companyName);

    const bilanLines   = lines.filter((l: any) => l.accountCode?.[0] >= '1' && l.accountCode?.[0] <= '5');
    const gestionLines = lines.filter((l: any) => l.accountCode?.[0] >= '6' && l.accountCode?.[0] <= '8');

    const toRow = (l: any): RowInput => [
      { content: l.accountCode || '', styles: { halign: 'center' as const, font: 'courier', fontStyle: 'bold' as const } },
      l.accountName || '',
      ncDash(l.debit), ncDash(l.credit), ncDash(l.finalDebit), ncDash(l.finalCredit)
    ];

    const body: RowInput[] = [];
    if (bilanLines.length > 0) {
      body.push(secRow('COMPTES DE BILAN  —  Classes 1 à 5', 6));
      bilanLines.forEach((l: any) => body.push(toRow(l)));
      body.push(subRow(['Sous-totaux Bilan', '', nc2(apiTotals?.bilanDebit), nc2(apiTotals?.bilanCredit), nc2(apiTotals?.bilanFinalDebit), nc2(apiTotals?.bilanFinalCredit)]));
    }
    if (gestionLines.length > 0) {
      body.push(secRow('COMPTES DE GESTION  —  Classes 6 à 8', 6));
      gestionLines.forEach((l: any) => body.push(toRow(l)));
      body.push(subRow(['Sous-totaux Gestion', '', nc2(apiTotals?.gestionDebit), nc2(apiTotals?.gestionCredit), nc2(apiTotals?.gestionFinalDebit), nc2(apiTotals?.gestionFinalCredit)]));
    }
    body.push(gtRow(['TOTAUX DE LA BALANCE', '', nc2(totalDebit), nc2(totalCredit), nc2(totalFinalDebit), nc2(totalFinalCredit)]));

    autoTable(doc, baseOpts(startY, {
      head: [['N°Compte', 'Libellé du Compte', 'Débit Mvt', 'Crédit Mvt', 'Solde Débiteur', 'Solde Créditeur']],
      body,
      columnStyles: {
        0: { cellWidth: 24, halign: 'center' as const },
        1: { cellWidth: 92 },
        2: { cellWidth: 36, halign: 'right' as const },
        3: { cellWidth: 36, halign: 'right' as const },
        4: { cellWidth: 36, halign: 'right' as const },
        5: { cellWidth: 36, halign: 'right' as const },
      }
    }));

    addFooter(doc, 'Balance Générale 4 Colonnes');
    doc.save(`Balance_4_Cols_${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  // ─────────────────────────────────────────────────────────
  // BALANCE GÉNÉRALE 6 COLONNES
  // ─────────────────────────────────────────────────────────
  exportBalance6(
    lines: any[],
    bilanTotals: any, gestionTotals: any, grandTotals: any,
    dateFrom: string, dateTo: string,
    companyName?: string
  ): void {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const startY = drawPageHeader(doc, 'Balance Générale à 6 Colonnes',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, companyName);

    const bilanLines   = lines.filter((l: any) => l.accountCode?.[0] >= '1' && l.accountCode?.[0] <= '5');
    const gestionLines = lines.filter((l: any) => l.accountCode?.[0] >= '6' && l.accountCode?.[0] <= '8');

    const toRow = (l: any): RowInput => [
      { content: l.accountCode || '', styles: { halign: 'center' as const, font: 'courier', fontStyle: 'bold' as const } },
      l.accountName || '',
      ncDash(l.initialDebit), ncDash(l.initialCredit),
      ncDash(l.debit), ncDash(l.credit),
      ncDash(l.finalDebit), ncDash(l.finalCredit)
    ];

    const subTotRow = (label: string, t: any): RowInput =>
      subRow([label, '', nc2(t?.initD), nc2(t?.initC), nc2(t?.mvtD), nc2(t?.mvtC), nc2(t?.finD), nc2(t?.finC)]);

    const body: RowInput[] = [];
    if (bilanLines.length > 0) {
      body.push(secRow('COMPTES DE BILAN  —  Classes 1 à 5', 8));
      bilanLines.forEach((l: any) => body.push(toRow(l)));
      body.push(subTotRow('Sous-totaux Bilan', bilanTotals));
    }
    if (gestionLines.length > 0) {
      body.push(secRow('COMPTES DE GESTION  —  Classes 6 à 8', 8));
      gestionLines.forEach((l: any) => body.push(toRow(l)));
      body.push(subTotRow('Sous-totaux Gestion', gestionTotals));
    }
    body.push(gtRow(['TOTAUX DE LA BALANCE', '',
      nc2(grandTotals?.initD), nc2(grandTotals?.initC),
      nc2(grandTotals?.mvtD),  nc2(grandTotals?.mvtC),
      nc2(grandTotals?.finD),  nc2(grandTotals?.finC)
    ]));

    autoTable(doc, baseOpts(startY, {
      head: [
        [
          { content: 'N°Compte',          rowSpan: 2, styles: { ...HEAD, valign: 'middle' as const } },
          { content: 'Libellé du Compte', rowSpan: 2, styles: { ...HEAD, halign: 'left'   as const, valign: 'middle' as const } },
          { content: 'Soldes Initiaux',       colSpan: 2, styles: { ...HEAD, halign: 'center' as const } },
          { content: 'Mouvements de Période', colSpan: 2, styles: { ...HEAD, halign: 'center' as const } },
          { content: 'Soldes Finaux',         colSpan: 2, styles: { ...HEAD, halign: 'center' as const } },
        ],
        [
          { content: 'Débit',     styles: { ...HEAD } },
          { content: 'Crédit',    styles: { ...HEAD } },
          { content: 'Débit',     styles: { ...HEAD } },
          { content: 'Crédit',    styles: { ...HEAD } },
          { content: 'Débiteur',  styles: { ...HEAD } },
          { content: 'Créditeur', styles: { ...HEAD } },
        ]
      ],
      body,
      columnStyles: {
        0: { cellWidth: 22, halign: 'center' as const },
        1: { cellWidth: 66 },
        2: { cellWidth: 27, halign: 'right' as const }, 3: { cellWidth: 27, halign: 'right' as const },
        4: { cellWidth: 27, halign: 'right' as const }, 5: { cellWidth: 27, halign: 'right' as const },
        6: { cellWidth: 27, halign: 'right' as const }, 7: { cellWidth: 27, halign: 'right' as const },
      }
    }));

    addFooter(doc, 'Balance Générale 6 Colonnes');
    doc.save(`Balance_6_Cols_${new Date().toISOString().slice(0, 10)}.pdf`);
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
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const startY = drawPageHeader(
      doc, `BILAN — Exercice clos le ${dateStr(dateTo)}`,
      'SYSCOHADA Révisé  |  Durée (en mois) : 12', companyName);

    const empty = { ref: '', label: '', brut: 0, amort: 0, net: 0, netPrev: 0, isHeader: false, isEmpty: true, isTotal: false };
    const maxLen = Math.max(actifRows.length, passifRows.length);
    const body: RowInput[] = [];

    const CS: Partial<Styles> = { fontSize: 7.5, cellPadding: 1.5 };

    for (let i = 0; i < maxLen; i++) {
      const a = actifRows[i]  || empty;
      const p = passifRows[i] || empty;
      const isHdr = a.isHeader || p.isHeader;
      const isTot = a.isTotal  || p.isTotal;
      const fill  = isHdr ? SEC_BG : isTot ? TOT_BG : (i % 2 === 0 ? WHITE : ALT_BG);
      const fs    = (isHdr || isTot) ? 'bold' as const : 'normal' as const;

      const cell = (v: any) =>
        ({ content: String(v ?? ''), styles: { ...CS, fillColor: fill, fontStyle: fs, textColor: DARK } });
      const numCell = (v: any) =>
        n(v) !== 0
          ? { content: fmt0(n(v)), styles: { ...CS, fillColor: fill, fontStyle: fs, halign: 'right' as const, textColor: DARK } }
          : { content: '—',       styles: { ...CS, fillColor: fill, fontStyle: fs, halign: 'right' as const, textColor: MUTED } };

      body.push([
        cell(a.isHeader || a.isEmpty ? '' : a.ref),
        cell(a.label),
        numCell(a.isHeader || a.isEmpty ? 0 : a.brut),
        numCell(a.isHeader || a.isEmpty ? 0 : a.amort),
        numCell(a.isHeader || a.isEmpty ? 0 : a.net),
        numCell(a.isHeader || a.isEmpty ? 0 : a.netPrev),
        cell(p.isHeader || p.isEmpty ? '' : p.ref),
        cell(p.label),
        numCell(p.isHeader || p.isEmpty ? 0 : p.net),
        numCell(p.isHeader || p.isEmpty ? 0 : p.netPrev),
      ]);
    }

    body.push(gtRow([
      'BZ', 'TOTAL GÉNÉRAL ACTIF', '', '',
      { content: fmt0(totalActif), styles: { halign: 'right' } },
      '',
      'BZ', 'TOTAL GÉNÉRAL PASSIF',
      { content: fmt0(totalPassif), styles: { halign: 'right' } },
      '',
    ]));

    const H: Partial<Styles> = { ...HEAD, fontSize: 7.5, cellPadding: 2 };

    autoTable(doc, {
      startY,
      head: [
        [
          { content: 'A C T I F', colSpan: 6, styles: { ...H, halign: 'center' as const, fillColor: [226, 232, 240] as [number,number,number] } },
          { content: 'P A S S I F', colSpan: 4, styles: { ...H, halign: 'center' as const, fillColor: [226, 232, 240] as [number,number,number] } },
        ],
        [
          { content: 'REF',          styles: { ...H } },
          { content: 'Désignation',  styles: { ...H, halign: 'left' as const } },
          { content: 'Brut N',       styles: { ...H, halign: 'right' as const } },
          { content: 'Amort/Prov',   styles: { ...H, halign: 'right' as const } },
          { content: 'Net N',        styles: { ...H, halign: 'right' as const } },
          { content: 'Net N-1',      styles: { ...H, halign: 'right' as const } },
          { content: 'REF',          styles: { ...H } },
          { content: 'Désignation',  styles: { ...H, halign: 'left' as const } },
          { content: 'Net N',        styles: { ...H, halign: 'right' as const } },
          { content: 'Net N-1',      styles: { ...H, halign: 'right' as const } },
        ]
      ],
      body,
      styles: { fontSize: 7.5, cellPadding: 1.5, textColor: DARK, lineColor: [180, 180, 180], lineWidth: 0.1 },
      headStyles: { ...HEAD, fontSize: 7.5, cellPadding: 2 },
      margin: { left: 10, right: 10, bottom: 14 },
      tableLineWidth: 0.3,
      tableLineColor: BLACK,
      columnStyles: {
        0: { cellWidth: 10, halign: 'center' as const },
        1: { cellWidth: 62 },
        2: { cellWidth: 20, halign: 'right' as const },
        3: { cellWidth: 19, halign: 'right' as const },
        4: { cellWidth: 19, halign: 'right' as const },
        5: { cellWidth: 19, halign: 'right' as const },
        6: { cellWidth: 10, halign: 'center' as const },
        7: { cellWidth: 62 },
        8: { cellWidth: 19, halign: 'right' as const },
        9: { cellWidth: 19, halign: 'right' as const },
      }
    });

    addFooter(doc, 'Bilan OHADA — SYSCOHADA Révisé');
    doc.save(`Bilan_OHADA_${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  // ─────────────────────────────────────────────────────────
  // COMPTE DE RÉSULTAT
  // ─────────────────────────────────────────────────────────
  exportCompteResultat(lines: any[], dateFrom: string, dateTo: string, companyName?: string): void {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const startY = drawPageHeader(doc, 'COMPTE DE RÉSULTAT',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, companyName);

    // Numéros de comptes SYSCOHADA par code rubrique
    const COMPTES: Record<string, string> = {
      'TA': '701',           'RA': '601',          'RB': '6031',         'XA': '',
      'TB': '702, 705-708',  'TC': '73',            'TD': '72',            'XB': '',
      'TE': '602, 6032-33',  'TF': '605',           'TG': '61',
      'TH': '62, 63',        'TI': '64',            'TJ': '65',            'TK': '66',
      'XC': '',              'XD': '',
      'TL': '781',           'TM': '791',           'TN': '681',           'TO': '691',  'XI': '',
      'TP': '77, 786, 796',  'TQ': '671-673',       'XJ': '',              'XK': '',
      'TR': '82, 84-88',     'TS': '81, 83-87',     'XL': '',
      'TT': '87',            'TU': '891',            'XM': '',
    };

    const CS: Partial<Styles> = { fontSize: 7.5, cellPadding: 1.5 };
    const H: Partial<Styles> = { ...HEAD, fontSize: 7.5, cellPadding: 2 };

    const body: RowInput[] = lines.map((l, i) => {
      const isTot = !!l.isTotal;
      const fill  = isTot ? TOT_BG : (i % 2 === 0 ? WHITE : ALT_BG);
      const fs    = isTot ? 'bold' as const : 'normal' as const;
      const compte = COMPTES[l.code] ?? '';
      return [
        { content: l.code || '', styles: { ...CS, fillColor: fill, fontStyle: fs, halign: 'center' as const, textColor: DARK } },
        { content: l.label || '', styles: { ...CS, fillColor: fill, fontStyle: fs, textColor: DARK } },
        { content: compte, styles: { ...CS, fillColor: fill, fontStyle: 'normal' as const, halign: 'center' as const, textColor: MUTED } },
        n(l.current) !== 0 || isTot
          ? { content: fmt0(l.current), styles: { ...CS, fillColor: fill, fontStyle: fs, halign: 'right' as const, textColor: DARK } }
          : { content: '—',            styles: { ...CS, fillColor: fill, fontStyle: fs, halign: 'right' as const, textColor: MUTED } },
        { content: n(l.prev) !== 0 ? fmt0(l.prev) : '', styles: { ...CS, fillColor: fill, fontStyle: fs, halign: 'right' as const, textColor: MUTED } },
      ];
    });

    autoTable(doc, {
      startY,
      head: [[
        { content: 'REF',     styles: { ...H } },
        { content: 'LIBELLÉ', styles: { ...H, halign: 'left' as const } },
        { content: 'COMPTE',  styles: { ...H } },
        { content: 'NET N',   styles: { ...H, halign: 'right' as const } },
        { content: 'NET N-1', styles: { ...H, halign: 'right' as const } },
      ]],
      body,
      styles: { fontSize: 7.5, cellPadding: 1.5, textColor: DARK, lineColor: [180, 180, 180], lineWidth: 0.1 },
      headStyles: { ...HEAD, fontSize: 7.5, cellPadding: 2 },
      margin: { left: 10, right: 10, bottom: 14 },
      tableLineWidth: 0.3,
      tableLineColor: BLACK,
      columnStyles: {
        0: { cellWidth: 12,  halign: 'center' as const },
        1: { cellWidth: 97 },
        2: { cellWidth: 28,  halign: 'center' as const },
        3: { cellWidth: 27,  halign: 'right' as const },
        4: { cellWidth: 26,  halign: 'right' as const },
      }
    });

    addFooter(doc, 'Compte de Résultat SYSCOHADA');
    doc.save(`Compte_de_Resultat_${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  // ─────────────────────────────────────────────────────────
  // BALANCE DES TIERS 4 COLONNES
  // ─────────────────────────────────────────────────────────
  exportPartnerBalance4(lines: any[], dateFrom: string, dateTo: string, companyName?: string): void {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const startY = drawPageHeader(doc, 'Balance des Tiers à 4 Colonnes',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, companyName);

    const body: RowInput[] = lines.map(l => [
      l.partnerRef || '',
      l.partnerName,
      { content: l.accountNumber || '', styles: { halign: 'center' as const, font: 'courier' } },
      ncDash(l.debit), ncDash(l.credit), ncDash(l.finalDebit), ncDash(l.finalCredit),
      { content: l.type === 'customer' ? 'Client' : 'Fournisseur',
        styles: { halign: 'center' as const } }
    ]);

    const totD  = lines.reduce((s: number, l: any) => s + n(l.debit), 0);
    const totC  = lines.reduce((s: number, l: any) => s + n(l.credit), 0);
    const totFD = lines.reduce((s: number, l: any) => s + n(l.finalDebit), 0);
    const totFC = lines.reduce((s: number, l: any) => s + n(l.finalCredit), 0);
    body.push(gtRow(['TOTAL', '', '', nc2(totD), nc2(totC), nc2(totFD), nc2(totFC), '']));

    autoTable(doc, baseOpts(startY, {
      head: [['Réf.', 'Tiers', 'N° Compte', 'Débit', 'Crédit', 'Solde Débiteur', 'Solde Créditeur', 'Type']],
      body,
      columnStyles: {
        0: { cellWidth: 20 }, 1: { cellWidth: 68 },
        2: { cellWidth: 26, halign: 'center' as const },
        3: { cellWidth: 28, halign: 'right' as const }, 4: { cellWidth: 28, halign: 'right' as const },
        5: { cellWidth: 32, halign: 'right' as const }, 6: { cellWidth: 32, halign: 'right' as const },
        7: { cellWidth: 22, halign: 'center' as const },
      }
    }));

    addFooter(doc, 'Balance des Tiers 4 Colonnes');
    doc.save(`Balance_Tiers_4_Cols_${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  // ─────────────────────────────────────────────────────────
  // BALANCE DES TIERS 6 COLONNES
  // ─────────────────────────────────────────────────────────
  exportPartnerBalance6(lines: any[], dateFrom: string, dateTo: string, companyName?: string): void {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const startY = drawPageHeader(doc, 'Balance des Tiers à 6 Colonnes',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, companyName);

    const body: RowInput[] = lines.map(l => [
      l.partnerRef || '', l.partnerName,
      { content: l.accountNumber || '', styles: { halign: 'center' as const, font: 'courier' } },
      ncDash(l.initialDebit), ncDash(l.initialCredit),
      ncDash(l.debit), ncDash(l.credit),
      ncDash(l.finalDebit), ncDash(l.finalCredit),
      { content: l.type === 'customer' ? 'Client' : 'Fournisseur',
        styles: { halign: 'center' as const } }
    ]);

    const sum = (key: string) => lines.reduce((s: number, l: any) => s + n(l[key]), 0);
    body.push(gtRow(['TOTAL', '', '',
      nc2(sum('initialDebit')), nc2(sum('initialCredit')),
      nc2(sum('debit')),        nc2(sum('credit')),
      nc2(sum('finalDebit')),   nc2(sum('finalCredit')), '']));

    autoTable(doc, baseOpts(startY, {
      head: [['Réf.', 'Tiers', 'N° Cpt', 'Init. D.', 'Init. C.', 'Mvt. D.', 'Mvt. C.', 'Sol. D.', 'Sol. C.', 'Type']],
      body,
      columnStyles: {
        0: { cellWidth: 18 }, 1: { cellWidth: 50 },
        2: { cellWidth: 20, halign: 'center' as const },
        3: { cellWidth: 23, halign: 'right' as const }, 4: { cellWidth: 23, halign: 'right' as const },
        5: { cellWidth: 23, halign: 'right' as const }, 6: { cellWidth: 23, halign: 'right' as const },
        7: { cellWidth: 23, halign: 'right' as const }, 8: { cellWidth: 23, halign: 'right' as const },
        9: { cellWidth: 18, halign: 'center' as const },
      }
    }));

    addFooter(doc, 'Balance des Tiers 6 Colonnes');
    doc.save(`Balance_Tiers_6_Cols_${new Date().toISOString().slice(0, 10)}.pdf`);
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
          nc2(line.qty), nc2(line.montantHT), nc2(line.montantTTC)
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
        const htBrut = n(line.montantHT) + n(line.remise);
        const taux = htBrut > 0 ? Math.round((n(line.remise) / htBrut) * 10000) / 100 : 0;
        body.push([
          line.productCode || '', line.productName,
          nc2(line.qty), nc2(line.prixMoyen),
          nc2(line.montantHT), nc2(line.montantTTC),
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
        0: { cellWidth: 28, halign: 'center' as const },
        1: { cellWidth: 110 },
        2: { cellWidth: 18, halign: 'center' as const },
        3: { cellWidth: 32, halign: 'right' as const },
        4: { cellWidth: 32, halign: 'right' as const },
        5: { cellWidth: 40, halign: 'right' as const },
      }
    }));

    addFooter(doc, 'Rapport de Stock Valorisé');
    doc.save(`Rapport_Stock_${new Date().toISOString().slice(0, 10)}.pdf`);
  }
}

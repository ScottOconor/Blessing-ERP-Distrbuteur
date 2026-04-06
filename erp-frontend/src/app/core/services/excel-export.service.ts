import { Injectable } from '@angular/core';
import * as ExcelJS from 'exceljs';

// ─── Palette ──────────────────────────────────────────────────────────────
const C = {
  PURPLE:    'FF714B67',
  WHITE:     'FFFFFFFF',
  GREY:      'FFE9ECEF',
  LIGHT_PUR: 'FFF0EFF4',
  GREEN:     'FFE8F5E8',
  FAFAFA:    'FFFAFAFA',
  BORDER:    'FFCCCCCC',
  BOR_PUR:   'FF714B67',
  BOR_BLK:   'FF000000',
  MUTED:     'FF777777',
  DARK:      'FF333333',
};

// ─── Style helpers ────────────────────────────────────────────────────────
function fill(argb: string): ExcelJS.Fill {
  return { type: 'pattern', pattern: 'solid', fgColor: { argb } };
}
function b(argb = C.BORDER, s: ExcelJS.BorderStyle = 'thin'): ExcelJS.Border {
  return { style: s, color: { argb } };
}
function borders(argb = C.BORDER, s: ExcelJS.BorderStyle = 'thin'): Partial<ExcelJS.Borders> {
  const bd = b(argb, s);
  return { top: bd, left: bd, bottom: bd, right: bd };
}

type S = Partial<ExcelJS.Style>;

const TITLE: S = {
  font: { bold: true, size: 13, color: { argb: C.PURPLE } },
  alignment: { horizontal: 'center', vertical: 'middle' }
};
const SUBTITLE: S = {
  font: { italic: true, size: 9, color: { argb: C.MUTED } },
  alignment: { horizontal: 'center', vertical: 'middle' }
};
const COL_HDR: S = {
  fill: fill(C.PURPLE),
  font: { bold: true, color: { argb: C.WHITE }, size: 9 },
  alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  border: borders(C.BOR_BLK) as ExcelJS.Borders
};
const DATA: S = {
  font: { size: 9, color: { argb: C.DARK } },
  border: borders() as ExcelJS.Borders
};
const DATA_ALT: S = {
  fill: fill(C.FAFAFA),
  font: { size: 9, color: { argb: C.DARK } },
  border: borders() as ExcelJS.Borders
};
const SEC_HDR: S = {
  fill: fill(C.GREY),
  font: { bold: true, size: 9, color: { argb: C.PURPLE } },
  border: borders() as ExcelJS.Borders
};
const SUBTOTAL: S = {
  fill: fill(C.LIGHT_PUR),
  font: { bold: true, size: 9 },
  border: { top: b(C.BOR_PUR), left: b(), bottom: b(), right: b() }
};
const GRAND_TOTAL: S = {
  fill: fill(C.GREEN),
  font: { bold: true, size: 10 },
  border: { top: b(C.BOR_BLK, 'medium'), left: b(), bottom: b(C.BOR_BLK, 'medium'), right: b() }
};
const NUM_FMT = '#,##0.00';

function applyS(cell: ExcelJS.Cell, ...styles: S[]) {
  for (const s of styles) {
    if (s.fill)      cell.fill = s.fill as ExcelJS.Fill;
    if (s.font)      cell.font = { ...cell.font, ...s.font } as ExcelJS.Font;
    if (s.alignment) cell.alignment = { ...cell.alignment, ...s.alignment };
    if (s.border)    cell.border = s.border as ExcelJS.Borders;
    if (s.numFmt)    cell.numFmt = s.numFmt;
  }
}

function numStyle(cell: ExcelJS.Cell) {
  cell.alignment = { horizontal: 'right' };
  cell.numFmt = NUM_FMT;
}

function styledRow(ws: ExcelJS.Worksheet, values: any[], base: S, numCols: number,
                   numericFrom = 0, numericTo = 0, altFill = false): ExcelJS.Row {
  const row = ws.addRow(values);
  const s = altFill ? { ...base } : base;
  for (let c = 1; c <= numCols; c++) {
    applyS(row.getCell(c), s);
  }
  for (let c = numericFrom; c <= numericTo; c++) {
    numStyle(row.getCell(c));
  }
  row.commit();
  return row;
}

function titleBlock(ws: ExcelJS.Worksheet, title: string, subtitle: string, numCols: number) {
  const addMerged = (text: string, style: S, height = 18) => {
    const row = ws.addRow([text]);
    ws.mergeCells(row.number, 1, row.number, numCols);
    row.height = height;
    applyS(row.getCell(1), style);
    row.commit();
  };
  addMerged(title, TITLE, 26);
  addMerged(subtitle, SUBTITLE);
  addMerged(`Imprimé le ${new Date().toLocaleString('fr-FR')}`, SUBTITLE);
  ws.addRow([]).commit();
}

function hdrRow(ws: ExcelJS.Worksheet, headers: string[], numCols: number): ExcelJS.Row {
  const row = ws.addRow(headers);
  row.height = 30;
  for (let c = 1; c <= numCols; c++) applyS(row.getCell(c), COL_HDR);
  row.commit();
  return row;
}

function n(v: any): number { return v != null ? Number(v) : 0; }

function dateStr(d: string | Date): string {
  if (!d) return '';
  const dt = typeof d === 'string' ? new Date(d) : d;
  return dt.toLocaleDateString('fr-FR');
}

@Injectable({ providedIn: 'root' })
export class ExcelExportService {

  // ─────────────────────────────────────────────────────────
  // BALANCE GÉNÉRALE 4 COLONNES
  // ─────────────────────────────────────────────────────────
  async exportBalance4(
    lines: any[], apiTotals: any,
    totalDebit: number, totalCredit: number,
    totalFinalDebit: number, totalFinalCredit: number,
    dateFrom: string, dateTo: string
  ): Promise<void> {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Rapport');
    const NC = 6;

    ws.columns = [
      { width: 14 }, { width: 44 }, { width: 18 }, { width: 18 }, { width: 18 }, { width: 18 }
    ];

    titleBlock(ws, 'BALANCE GÉNÉRALE À 4 COLONNES',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, NC);

    hdrRow(ws, ['N°Compte', 'Libellé du Compte', 'Débit Mvt', 'Crédit Mvt', 'Solde Débiteur', 'Solde Créditeur'], NC);

    lines.forEach((l, i) => {
      const row = styledRow(ws,
        [l.accountCode, l.accountName, n(l.debit), n(l.credit), n(l.finalDebit), n(l.finalCredit)],
        i % 2 === 0 ? DATA : DATA_ALT, NC, 3, 6);
      row.getCell(1).alignment = { horizontal: 'center' };
    });

    ws.addRow([]).commit();

    const addSub = (label: string, d: number, c: number, fd: number, fc: number) => {
      styledRow(ws, [label, '', d, c, fd, fc], SUBTOTAL, NC, 3, 6);
    };
    addSub('Totaux comptes de bilan',
      n(apiTotals?.bilanDebit), n(apiTotals?.bilanCredit),
      n(apiTotals?.bilanFinalDebit), n(apiTotals?.bilanFinalCredit));
    addSub('Totaux comptes de gestion',
      n(apiTotals?.gestionDebit), n(apiTotals?.gestionCredit),
      n(apiTotals?.gestionFinalDebit), n(apiTotals?.gestionFinalCredit));

    const gt = styledRow(ws, ['TOTAUX DE LA BALANCE', '', totalDebit, totalCredit, totalFinalDebit, totalFinalCredit],
      GRAND_TOTAL, NC, 3, 6);
    gt.height = 18;

    await this.download(wb, 'Balance_4_Cols');
  }

  // ─────────────────────────────────────────────────────────
  // BALANCE GÉNÉRALE 6 COLONNES
  // ─────────────────────────────────────────────────────────
  async exportBalance6(
    lines: any[],
    bilanTotals: any, gestionTotals: any, grandTotals: any,
    dateFrom: string, dateTo: string
  ): Promise<void> {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Rapport');
    const NC = 8;

    ws.columns = [
      { width: 14 }, { width: 38 }, { width: 16 }, { width: 16 },
      { width: 16 }, { width: 16 }, { width: 16 }, { width: 16 }
    ];

    titleBlock(ws, 'BALANCE GÉNÉRALE À 6 COLONNES',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, NC);

    hdrRow(ws, ['N°Compte', 'Libellé', 'Init. Débit', 'Init. Crédit', 'Mvt. Débit', 'Mvt. Crédit', 'Solde Débiteur', 'Solde Créditeur'], NC);

    lines.forEach((l, i) => {
      styledRow(ws,
        [l.accountCode, l.accountName,
         n(l.initialDebit), n(l.initialCredit), n(l.debit), n(l.credit), n(l.finalDebit), n(l.finalCredit)],
        i % 2 === 0 ? DATA : DATA_ALT, NC, 3, 8);
    });

    ws.addRow([]).commit();

    const addSub = (label: string, t: any) => {
      styledRow(ws, [label, '', n(t.initD), n(t.initC), n(t.mvtD), n(t.mvtC), n(t.finD), n(t.finC)],
        SUBTOTAL, NC, 3, 8);
    };
    addSub('Totaux bilan', bilanTotals);
    addSub('Totaux gestion', gestionTotals);

    const gt = styledRow(ws,
      ['TOTAUX DE LA BALANCE', '', n(grandTotals.initD), n(grandTotals.initC),
       n(grandTotals.mvtD), n(grandTotals.mvtC), n(grandTotals.finD), n(grandTotals.finC)],
      GRAND_TOTAL, NC, 3, 8);
    gt.height = 18;

    await this.download(wb, 'Balance_6_Cols');
  }

  // ─────────────────────────────────────────────────────────
  // GRAND LIVRE
  // ─────────────────────────────────────────────────────────
  async exportGrandLivre(data: any[], dateFrom: string, dateTo: string): Promise<void> {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Rapport');
    const NC = 7;

    ws.columns = [
      { width: 13 }, { width: 18 }, { width: 11 }, { width: 42 }, { width: 16 }, { width: 16 }, { width: 16 }
    ];

    titleBlock(ws, 'GRAND LIVRE', `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, NC);

    for (const account of data) {
      // Account header
      const acHdr = ws.addRow([`${account.accountCode} — ${account.accountName}`]);
      ws.mergeCells(acHdr.number, 1, acHdr.number, NC);
      acHdr.height = 20;
      applyS(acHdr.getCell(1), SEC_HDR);
      acHdr.commit();

      hdrRow(ws, ['Date', 'N° Pièce', 'Journal', 'Libellé', 'Débit', 'Crédit', 'Solde'], NC);

      account.lines.forEach((line: any, i: number) => {
        styledRow(ws,
          [line.date ? dateStr(line.date) : '', line.moveRef || '', line.journalCode || '',
           line.label || '', n(line.debit), n(line.credit), n(line.balance)],
          i % 2 === 0 ? DATA : DATA_ALT, NC, 5, 7);
      });

      styledRow(ws,
        [`Total ${account.accountCode}`, '', '', '',
         n(account.totalDebit), n(account.totalCredit), n(account.finalBalance)],
        SUBTOTAL, NC, 5, 7);

      ws.addRow([]).commit();
    }

    await this.download(wb, 'Grand_Livre');
  }

  // ─────────────────────────────────────────────────────────
  // BILAN OHADA
  // ─────────────────────────────────────────────────────────
  async exportBilan(
    actifRows: any[], passifRows: any[],
    totalActif: number, totalPassif: number, dateTo: string
  ): Promise<void> {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Rapport');
    const NC = 8;

    ws.columns = [
      { width: 7 }, { width: 32 }, { width: 16 }, { width: 14 }, { width: 14 },
      { width: 7 }, { width: 32 }, { width: 14 }
    ];

    titleBlock(ws, `BILAN AU ${dateStr(dateTo)} — SYSCOHADA RÉVISÉ`,
      'ACTIF / PASSIF', NC);

    hdrRow(ws, ['REF', 'ACTIF', 'BRUT', 'AMORT.', 'NET N', 'REF', 'PASSIF', 'NET N'], NC);

    const maxLen = Math.max(actifRows.length, passifRows.length);
    const empty = { ref: '', label: '', brut: 0, amort: 0, net: 0, isHeader: false, isEmpty: true };

    for (let i = 0; i < maxLen; i++) {
      const a = actifRows[i] || empty;
      const p = passifRows[i] || empty;
      const isHdr = a.isHeader || p.isHeader;
      const isTot = a.isTotal || p.isTotal;

      const rowBase = isHdr ? SEC_HDR : isTot ? SUBTOTAL : (i % 2 === 0 ? DATA : DATA_ALT);

      const row = ws.addRow([
        a.isHeader || a.isEmpty ? '' : a.ref,
        a.label,
        a.isHeader || a.isEmpty ? '' : (n(a.brut) || ''),
        a.isHeader || a.isEmpty ? '' : (n(a.amort) || ''),
        a.isHeader || a.isEmpty ? '' : (n(a.net) || ''),
        p.isHeader || p.isEmpty ? '' : p.ref,
        p.label,
        p.isHeader || p.isEmpty ? '' : (n(p.net) || ''),
      ]);

      for (let c = 1; c <= NC; c++) applyS(row.getCell(c), rowBase);
      if (!isHdr) {
        for (const c of [3, 4, 5, 8]) {
          if (typeof row.getCell(c).value === 'number') numStyle(row.getCell(c));
        }
      }
      // Passif separator
      applyS(row.getCell(6), { border: { ...row.getCell(6).border, left: b(C.BOR_PUR, 'medium') } });
      row.commit();
    }

    ws.addRow([]).commit();

    const gt = ws.addRow(['BZ — TOTAL ACTIF', '', '', '', totalActif, 'BZ — TOTAL PASSIF', '', totalPassif]);
    for (let c = 1; c <= NC; c++) applyS(gt.getCell(c), GRAND_TOTAL);
    numStyle(gt.getCell(5));
    numStyle(gt.getCell(8));
    gt.height = 18;
    gt.commit();

    await this.download(wb, 'Bilan_OHADA');
  }

  // ─────────────────────────────────────────────────────────
  // COMPTE DE RÉSULTAT
  // ─────────────────────────────────────────────────────────
  async exportCompteResultat(lines: any[], dateFrom: string, dateTo: string): Promise<void> {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Rapport');
    const NC = 3;

    ws.columns = [{ width: 9 }, { width: 58 }, { width: 22 }];

    titleBlock(ws, 'COMPTE DE RÉSULTAT — SYSCOHADA RÉVISÉ',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, NC);

    hdrRow(ws, ['REF', 'LIBELLÉ', 'NET N'], NC);

    lines.forEach((l, i) => {
      const base = l.isSectionHeader ? SEC_HDR : l.isTotal ? SUBTOTAL : (i % 2 === 0 ? DATA : DATA_ALT);
      styledRow(ws, [l.code, l.label, n(l.current)], base, NC, 3, 3);
    });

    // Résultat net (last total)
    const lastTotal = [...lines].reverse().find(l => l.isTotal);
    if (lastTotal) {
      ws.addRow([]).commit();
      const gt = styledRow(ws, ['', 'RÉSULTAT NET', n(lastTotal.current)], GRAND_TOTAL, NC, 3, 3);
      gt.height = 18;
    }

    await this.download(wb, 'Compte_de_Resultat');
  }

  // ─────────────────────────────────────────────────────────
  // BALANCE DES TIERS 4 COLONNES
  // ─────────────────────────────────────────────────────────
  async exportPartnerBalance4(lines: any[], dateFrom: string, dateTo: string): Promise<void> {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Rapport');
    const NC = 8;

    ws.columns = [
      { width: 12 }, { width: 38 }, { width: 14 }, { width: 16 },
      { width: 16 }, { width: 16 }, { width: 16 }, { width: 13 }
    ];

    titleBlock(ws, 'BALANCE DES TIERS À 4 COLONNES',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, NC);

    hdrRow(ws, ['Réf.', 'Tiers', 'N° Compte', 'Débit', 'Crédit', 'Solde Débiteur', 'Solde Créditeur', 'Type'], NC);

    lines.forEach((l, i) => {
      styledRow(ws,
        [l.partnerRef, l.partnerName, l.accountNumber,
         n(l.debit), n(l.credit), n(l.finalDebit), n(l.finalCredit),
         l.type === 'customer' ? 'Client' : 'Fournisseur'],
        i % 2 === 0 ? DATA : DATA_ALT, NC, 4, 7);
    });

    ws.addRow([]).commit();

    const totD  = lines.reduce((s: number, l: any) => s + n(l.debit), 0);
    const totC  = lines.reduce((s: number, l: any) => s + n(l.credit), 0);
    const totFD = lines.reduce((s: number, l: any) => s + n(l.finalDebit), 0);
    const totFC = lines.reduce((s: number, l: any) => s + n(l.finalCredit), 0);

    const gt = styledRow(ws, ['TOTAL', '', '', totD, totC, totFD, totFC, ''], GRAND_TOTAL, NC, 4, 7);
    gt.height = 18;

    await this.download(wb, 'Balance_Tiers_4_Cols');
  }

  // ─────────────────────────────────────────────────────────
  // BALANCE DES TIERS 6 COLONNES
  // ─────────────────────────────────────────────────────────
  async exportPartnerBalance6(lines: any[], dateFrom: string, dateTo: string): Promise<void> {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Rapport');
    const NC = 10;

    ws.columns = [
      { width: 12 }, { width: 34 }, { width: 14 }, { width: 14 }, { width: 14 },
      { width: 14 }, { width: 14 }, { width: 14 }, { width: 14 }, { width: 13 }
    ];

    titleBlock(ws, 'BALANCE DES TIERS À 6 COLONNES',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, NC);

    hdrRow(ws, ['Réf.', 'Tiers', 'N° Compte',
      'Init. Débit', 'Init. Crédit', 'Mvt. Débit', 'Mvt. Crédit',
      'Solde Déb.', 'Solde Cré.', 'Type'], NC);

    lines.forEach((l, i) => {
      styledRow(ws,
        [l.partnerRef, l.partnerName, l.accountNumber,
         n(l.initialDebit), n(l.initialCredit), n(l.debit), n(l.credit),
         n(l.finalDebit), n(l.finalCredit),
         l.type === 'customer' ? 'Client' : 'Fournisseur'],
        i % 2 === 0 ? DATA : DATA_ALT, NC, 4, 9);
    });

    ws.addRow([]).commit();

    const gt = styledRow(ws,
      ['TOTAL', '', '',
       lines.reduce((s: number, l: any) => s + n(l.initialDebit), 0),
       lines.reduce((s: number, l: any) => s + n(l.initialCredit), 0),
       lines.reduce((s: number, l: any) => s + n(l.debit), 0),
       lines.reduce((s: number, l: any) => s + n(l.credit), 0),
       lines.reduce((s: number, l: any) => s + n(l.finalDebit), 0),
       lines.reduce((s: number, l: any) => s + n(l.finalCredit), 0), ''],
      GRAND_TOTAL, NC, 4, 9);
    gt.height = 18;

    await this.download(wb, 'Balance_Tiers_6_Cols');
  }

  // ─────────────────────────────────────────────────────────
  // ÉTAT COMMERCIAL
  // ─────────────────────────────────────────────────────────
  async exportEtatCommercial(data: any): Promise<void> {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Rapport');
    const NC = 5;

    ws.columns = [
      { width: 16 }, { width: 48 }, { width: 14 }, { width: 18 }, { width: 18 }
    ];

    titleBlock(ws, 'ÉTAT COMMERCIAL — STATISTIQUES DE VENTES',
      `Période du ${dateStr(data.dateFrom)} au ${dateStr(data.dateTo)}`, NC);

    hdrRow(ws, ['Code', 'Désignation', 'Quantité', 'CA HT', 'CA TTC'], NC);

    for (const client of data.clients) {
      // Client header
      const chdr = ws.addRow([`CLIENT : ${client.clientName}${client.clientRef ? ' [' + client.clientRef + ']' : ''}`,
        '', '', '', '']);
      ws.mergeCells(chdr.number, 1, chdr.number, NC);
      applyS(chdr.getCell(1), SEC_HDR);
      chdr.commit();

      client.lines.forEach((line: any, i: number) => {
        styledRow(ws,
          [line.productCode || '', line.productName, n(line.qty), n(line.montantHT), n(line.montantTTC)],
          i % 2 === 0 ? DATA : DATA_ALT, NC, 3, 5);
      });

      styledRow(ws,
        [`Sous-total ${client.clientName}`, '', n(client.totalQty), n(client.totalHT), n(client.totalTTC)],
        SUBTOTAL, NC, 3, 5);

      ws.addRow([]).commit();
    }

    const gt = styledRow(ws,
      ['TOTAL GÉNÉRAL', '', n(data.grandTotalQty), n(data.grandTotalHT), n(data.grandTotalTTC)],
      GRAND_TOTAL, NC, 3, 5);
    gt.height = 18;

    await this.download(wb, 'Etat_Commercial');
  }

  // ─────────────────────────────────────────────────────────
  // RAPPORT COMMERCIAL CONSOLIDÉ
  // ─────────────────────────────────────────────────────────
  async exportRapportConsolide(data: any): Promise<void> {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Rapport');
    const NC = 8;

    ws.columns = [
      { width: 15 }, { width: 40 }, { width: 12 }, { width: 14 },
      { width: 16 }, { width: 16 }, { width: 14 }, { width: 11 }
    ];

    titleBlock(ws, 'RAPPORT COMMERCIAL CONSOLIDÉ',
      `Période du ${dateStr(data.dateFrom)} au ${dateStr(data.dateTo)}`, NC);

    hdrRow(ws, ['Code', 'Désignation', 'Quantité', 'Prix Moy.', 'CA HT', 'CA TTC', 'Remise', '% Remise'], NC);

    for (const client of data.clients) {
      const chdr = ws.addRow([`CLIENT : ${client.clientName}${client.clientRef ? ' [' + client.clientRef + ']' : ''}`,
        '', '', '', '', '', '', '']);
      ws.mergeCells(chdr.number, 1, chdr.number, NC);
      applyS(chdr.getCell(1), SEC_HDR);
      chdr.commit();

      client.lines.forEach((line: any, i: number) => {
        const htBrut = n(line.montantHT) + n(line.remise);
        const taux = htBrut > 0 ? Math.round((n(line.remise) / htBrut) * 10000) / 100 : 0;
        styledRow(ws,
          [line.productCode || '', line.productName, n(line.qty), n(line.prixMoyen),
           n(line.montantHT), n(line.montantTTC), n(line.remise), taux],
          i % 2 === 0 ? DATA : DATA_ALT, NC, 3, 8);
      });

      styledRow(ws,
        [`Sous-total ${client.clientName}`, '', n(client.totalQty), '',
         n(client.totalHT), n(client.totalTTC), n(client.totalRemise), ''],
        SUBTOTAL, NC, 3, 7);

      ws.addRow([]).commit();
    }

    const gt = styledRow(ws,
      ['TOTAL GÉNÉRAL', '', n(data.grandTotalQty), '',
       n(data.grandTotalHT), n(data.grandTotalTTC), n(data.grandTotalRemise), ''],
      GRAND_TOTAL, NC, 3, 7);
    gt.height = 18;

    await this.download(wb, 'Rapport_Consolide');
  }

  // ─────────────────────────────────────────────────────────
  // HELPER
  // ─────────────────────────────────────────────────────────
  private async download(wb: ExcelJS.Workbook, filename: string): Promise<void> {
    const buffer = await wb.xlsx.writeBuffer();
    const blob = new Blob([buffer as ArrayBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}_${new Date().toISOString().slice(0, 10)}.xlsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

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
          [line.productCode || '', line.productName, n(line.qty), n(line.caHT), n(line.caTTC)],
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
        const htBrut = n(line.caHT) + n(line.remise);
        const taux = htBrut > 0 ? Math.round((n(line.remise) / htBrut) * 10000) / 100 : 0;
        styledRow(ws,
          [line.productCode || '', line.productName, n(line.qty), n(line.prixVente),
           n(line.caHT), n(line.caTTC), n(line.remise), taux],
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
  // LIVRE DE CAISSE / BANQUE (CASHBOOK)
  // ─────────────────────────────────────────────────────────
  async exportCashbook(
    journals: any[],
    companyName: string,
    dateFrom: string,
    dateTo: string
  ): Promise<void> {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Livre de Caisse');
    const NC = 7;

    ws.columns = [
      { width: 13 }, // Date
      { width: 22 }, // N° Pièce
      { width: 10 }, // Code journal
      { width: 46 }, // Libellé / Tiers
      { width: 18 }, // Entrées (Débit)
      { width: 18 }, // Sorties (Crédit)
      { width: 20 }, // Solde courant
    ];

    const title = companyName
      ? `${companyName.toUpperCase()} — LIVRE DE CAISSE / BANQUE`
      : 'LIVRE DE CAISSE / BANQUE';
    const subtitle = `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`;
    titleBlock(ws, title, subtitle, NC);

    const CASH_CLR = 'FF166534'; // dark green
    const BANK_CLR = 'FF1D4ED8'; // dark blue

    const OPENING: S = {
      fill: fill('FFECFDF5'),
      font: { italic: true, size: 9, color: { argb: 'FF166534' } },
      border: borders() as ExcelJS.Borders
    };

    let grandTotalDebit  = 0;
    let grandTotalCredit = 0;
    let grandClosing     = 0;

    for (const j of journals) {
      const isCash  = j.journalType === 'cash';
      const jColor  = isCash ? CASH_CLR : BANK_CLR;
      const jLabel  = isCash ? 'CAISSE' : 'BANQUE';

      // En-tête journal — ligne fusionnée colorée
      const jHdrRow = ws.addRow([
        `${j.journalCode} — ${j.journalName} (${jLabel})`,
        '', '', '',
        n(j.totalDebit), n(j.totalCredit), n(j.closingBalance)
      ]);
      ws.mergeCells(jHdrRow.number, 1, jHdrRow.number, 4);
      jHdrRow.height = 20;
      for (let c = 1; c <= NC; c++) {
        const cell = jHdrRow.getCell(c);
        cell.fill  = fill(jColor);
        cell.font  = { bold: true, color: { argb: C.WHITE }, size: 10 };
        cell.border = borders(C.BOR_BLK) as ExcelJS.Borders;
        if (c >= 5) { cell.numFmt = NUM_FMT; cell.alignment = { horizontal: 'right', vertical: 'middle' }; }
        else        { cell.alignment = { vertical: 'middle' }; }
      }
      jHdrRow.commit();

      // Ligne solde d'ouverture
      const openRow = ws.addRow([
        '', '', '', "Solde d'ouverture",
        n(j.openingBalance) >= 0 ? n(j.openingBalance) : null,
        n(j.openingBalance) <  0 ? -n(j.openingBalance) : null,
        n(j.openingBalance)
      ]);
      openRow.height = 14;
      for (let c = 1; c <= NC; c++) {
        applyS(openRow.getCell(c), OPENING);
        if (c >= 5) { openRow.getCell(c).numFmt = NUM_FMT; openRow.getCell(c).alignment = { horizontal: 'right' }; }
      }
      openRow.commit();

      // En-tête colonnes
      hdrRow(ws, ['Date', 'N° Pièce', 'Journal', 'Libellé / Tiers', 'Entrées (Débit)', 'Sorties (Crédit)', 'Solde'], NC);

      // Lignes
      let alt = false;
      for (const l of j.lines) {
        const row = styledRow(ws,
          [
            dateStr(l.date),
            l.pieceName || l.ref || '',
            j.journalCode,
            l.libelle + (l.partner ? ' — ' + l.partner : ''),
            n(l.debit)  > 0 ? n(l.debit)  : null,
            n(l.credit) > 0 ? n(l.credit) : null,
            n(l.balance)
          ],
          alt ? DATA_ALT : DATA, NC, 5, 7
        );
        row.height = 13;
        // Colorer le solde
        const balCell = row.getCell(7);
        balCell.font = { size: 9, bold: true, color: { argb: n(l.balance) >= 0 ? 'FF15803D' : 'FFB91C1C' } };
        row.commit();
        alt = !alt;
      }

      // Ligne total journal
      const totRow = styledRow(ws,
        [`TOTAL ${j.journalCode}`, '', '', '', n(j.totalDebit), n(j.totalCredit), n(j.closingBalance)],
        SUBTOTAL, NC, 5, 7
      );
      ws.mergeCells(totRow.number, 1, totRow.number, 4);
      totRow.height = 16;
      const clotCell = totRow.getCell(7);
      clotCell.font = { bold: true, size: 9, color: { argb: n(j.closingBalance) >= 0 ? 'FF15803D' : 'FFB91C1C' } };
      totRow.commit();

      ws.addRow([]).commit(); // ligne vide entre journaux

      grandTotalDebit  += n(j.totalDebit);
      grandTotalCredit += n(j.totalCredit);
      grandClosing     += n(j.closingBalance);
    }

    // Grand total
    const gtRow = styledRow(ws,
      [`TOTAL TRÉSORERIE (${journals.length} journal(aux))`, '', '', '',
       grandTotalDebit, grandTotalCredit, grandClosing],
      GRAND_TOTAL, NC, 5, 7
    );
    ws.mergeCells(gtRow.number, 1, gtRow.number, 4);
    gtRow.height = 18;
    const gtBal = gtRow.getCell(7);
    gtBal.font = { bold: true, size: 10, color: { argb: grandClosing >= 0 ? 'FF15803D' : 'FFB91C1C' } };
    gtRow.commit();

    const from = dateFrom.replace(/-/g, '');
    const to   = dateTo.replace(/-/g, '');
    await this.download(wb, `LivreCaisse_${from}_${to}`);
  }

  // ── Rapport de stock valorisé ────────────────────────────────────────────
  async exportStockReport(
    groups: { warehouseName: string; rows: { code: string; name: string; uom: string; price: number; qty: number; value: number }[]; subtotalQty: number; subtotalValue: number }[],
    companyName?: string
  ): Promise<void> {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Rapport Stock');
    const numCols = 6;

    titleBlock(ws, 'Rapport de Stock Valorisé', `État au ${new Date().toLocaleDateString('fr-FR')} ${companyName ? '— ' + companyName : ''}`, numCols);
    hdrRow(ws, ['Référence', 'Désignation', 'UDM', 'P.U. (CMUP)', 'Quantité', 'Valeur (FCFA)'], numCols);
    ws.getColumn(1).width = 16; ws.getColumn(2).width = 40; ws.getColumn(3).width = 10;
    ws.getColumn(4).width = 18; ws.getColumn(5).width = 14; ws.getColumn(6).width = 20;

    let grandQty = 0; let grandVal = 0;
    for (const grp of groups) {
      const secRow = ws.addRow(['ENTREPÔT : ' + grp.warehouseName.toUpperCase(), '', '', '', '', '']);
      ws.mergeCells(secRow.number, 1, secRow.number, numCols);
      applyS(secRow.getCell(1), SEC_HDR);
      secRow.height = 16;

      let rowIdx = 0;
      for (const r of grp.rows) {
        const dr = ws.addRow([r.code, r.name, r.uom, n(r.price) || '', n(r.qty), n(r.value)]);
        const s = rowIdx % 2 === 0 ? DATA : DATA_ALT;
        for (let c = 1; c <= numCols; c++) applyS(dr.getCell(c), s);
        [4, 5, 6].forEach(c => { numStyle(dr.getCell(c)); dr.getCell(c).numFmt = '#,##0'; });
        rowIdx++;
      }
      const subR = ws.addRow(['', `Sous-total ${grp.warehouseName}`, '', '', n(grp.subtotalQty), n(grp.subtotalValue)]);
      applyS(subR.getCell(1), SEC_HDR); applyS(subR.getCell(2), { ...SEC_HDR, alignment: { horizontal: 'left' } });
      [3,4,5,6].forEach(c => { applyS(subR.getCell(c), SEC_HDR); subR.getCell(c).numFmt = '#,##0'; numStyle(subR.getCell(c)); });
      grandQty += grp.subtotalQty; grandVal += grp.subtotalValue;
    }
    const gtR = ws.addRow(['', 'TOTAL GÉNÉRAL DU STOCK', '', '', n(grandQty), n(grandVal)]);
    const GT: S = { fill: fill(C.PURPLE), font: { bold: true, size: 10, color: { argb: C.WHITE } }, border: borders(C.BOR_BLK) as ExcelJS.Borders };
    for (let c = 1; c <= numCols; c++) { applyS(gtR.getCell(c), GT); gtR.getCell(c).numFmt = '#,##0'; }
    gtR.height = 18;

    await this.download(wb, 'Rapport_Stock');
  }

  // ── Mouvements de stock ────────────────────────────────────────────────────
  async exportStockMovements(
    movements: { productCode?: string; productName?: string; locationName?: string; locationDestName?: string; qtyDone?: number; priceUnit?: number; subtotalValue?: number; dateDone?: string; pickingRef?: string; partnerName?: string }[],
    companyName?: string
  ): Promise<void> {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Mouvements');
    const numCols = 8;

    titleBlock(ws, 'Mouvements de Stock', `Export au ${new Date().toLocaleDateString('fr-FR')} ${companyName ? '— ' + companyName : ''}`, numCols);
    hdrRow(ws, ['Date', 'Référence', 'Partenaire', 'Article', 'De', 'Vers', 'Quantité', 'Valeur (FCFA)'], numCols);
    ws.getColumn(1).width = 13; ws.getColumn(2).width = 18; ws.getColumn(3).width = 22;
    ws.getColumn(4).width = 36; ws.getColumn(5).width = 22; ws.getColumn(6).width = 22;
    ws.getColumn(7).width = 12; ws.getColumn(8).width = 18;

    movements.forEach((m, i) => {
      const artLabel = (m.productCode ? '[' + m.productCode + '] ' : '') + (m.productName || '');
      const dr = ws.addRow([m.dateDone || '—', m.pickingRef || '—', m.partnerName || '—', artLabel, m.locationName || '—', m.locationDestName || '—', n(m.qtyDone), n(m.subtotalValue)]);
      const s = i % 2 === 0 ? DATA : DATA_ALT;
      for (let c = 1; c <= numCols; c++) applyS(dr.getCell(c), s);
      [7, 8].forEach(c => { numStyle(dr.getCell(c)); dr.getCell(c).numFmt = '#,##0'; });
    });
    const totalVal = movements.reduce((s, m) => s + n(m.subtotalValue), 0);
    const totR = ws.addRow(['', '', '', '', '', 'TOTAL', '', n(totalVal)]);
    const GT: S = { fill: fill(C.PURPLE), font: { bold: true, size: 10, color: { argb: C.WHITE } }, border: borders(C.BOR_BLK) as ExcelJS.Borders };
    for (let c = 1; c <= numCols; c++) { applyS(totR.getCell(c), GT); totR.getCell(c).numFmt = '#,##0'; }
    totR.height = 16;

    await this.download(wb, 'Mouvements_Stock');
  }

  // ── Rapport analytique de stock ────────────────────────────────────────────
  async exportStockAnalysis(
    data: { warehouseName: string; lines: { productCode?: string; productName: string; uomName?: string; initialQty: number; inQty: number; outQty: number; finalQty: number; unitCost: number; initialValue: number; inValue: number; outValue: number; finalValue: number }[]; totalInitialQty: number; totalInQty: number; totalOutQty: number; totalFinalQty: number; totalInitialValue: number; totalInValue: number; totalOutValue: number; totalFinalValue: number }[],
    dateFrom: string, dateTo: string, companyName?: string
  ): Promise<void> {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Rapport Analytique');
    const numCols = 11;

    titleBlock(ws, 'Rapport de Stock Analytique', `Période : ${dateFrom} → ${dateTo} ${companyName ? '— ' + companyName : ''}`, numCols);
    hdrRow(ws, ['Article', 'UDM', 'Stock init.', 'Entrées (+)', 'Sorties (−)', 'Stock final', 'Coût U.', 'Val. initiale', 'Val. entrées', 'Val. sorties', 'Val. finale'], numCols);
    ws.getColumn(1).width = 38; ws.getColumn(2).width = 8; [3,4,5,6,7,8,9,10,11].forEach(c => { ws.getColumn(c).width = 16; });

    for (const wh of data) {
      const secR = ws.addRow([wh.warehouseName.toUpperCase(), '', '', '', '', '', '', '', '', '', '']);
      ws.mergeCells(secR.number, 1, secR.number, numCols);
      applyS(secR.getCell(1), SEC_HDR); secR.height = 16;

      wh.lines.forEach((l, i) => {
        const artLabel = (l.productCode ? '[' + l.productCode + '] ' : '') + l.productName;
        const dr = ws.addRow([artLabel, l.uomName || '', n(l.initialQty), n(l.inQty), n(l.outQty), n(l.finalQty), n(l.unitCost), n(l.initialValue), n(l.inValue), n(l.outValue), n(l.finalValue)]);
        const s = i % 2 === 0 ? DATA : DATA_ALT;
        for (let c = 1; c <= numCols; c++) applyS(dr.getCell(c), s);
        [3,4,5,6,7,8,9,10,11].forEach(c => { numStyle(dr.getCell(c)); dr.getCell(c).numFmt = '#,##0'; });
      });
      const subR = ws.addRow([`TOTAL ${wh.warehouseName}`, '', n(wh.totalInitialQty), n(wh.totalInQty), n(wh.totalOutQty), n(wh.totalFinalQty), '', n(wh.totalInitialValue), n(wh.totalInValue), n(wh.totalOutValue), n(wh.totalFinalValue)]);
      const GT: S = { fill: fill(C.PURPLE), font: { bold: true, size: 9, color: { argb: C.WHITE } }, border: borders(C.BOR_BLK) as ExcelJS.Borders };
      for (let c = 1; c <= numCols; c++) { applyS(subR.getCell(c), GT); subR.getCell(c).numFmt = '#,##0'; }
      subR.height = 16;
    }

    await this.download(wb, 'Rapport_Analytique_Stock');
  }

  // ── Fiche de stock détaillée ───────────────────────────────────────────────
  async exportStockDetailed(
    products: { productCode?: string; productName: string; unitCost: number; locations: { locationName: string; initialQty: number; initialValue: number; movements: { date: string; ref: string; partner: string; qtyIn?: number; qtyOut?: number; qtyBalance: number; valueBalance: number }[]; finalQty: number; finalValue: number }[] }[],
    dateFrom: string, dateTo: string, companyName?: string
  ): Promise<void> {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Fiche Détaillée');
    const numCols = 7;

    titleBlock(ws, 'Fiche de Stock Détaillée', `Période : ${dateFrom} → ${dateTo} ${companyName ? '— ' + companyName : ''}`, numCols);
    ws.getColumn(1).width = 14; ws.getColumn(2).width = 20; ws.getColumn(3).width = 26;
    ws.getColumn(4).width = 14; ws.getColumn(5).width = 14; ws.getColumn(6).width = 14; ws.getColumn(7).width = 18;

    const PROD_HDR: S = { fill: fill(C.PURPLE), font: { bold: true, size: 10, color: { argb: C.WHITE } }, border: borders(C.BOR_BLK) as ExcelJS.Borders };
    const LOC_HDR: S  = { fill: fill(C.LIGHT_PUR), font: { bold: true, size: 9, color: { argb: C.BOR_PUR } }, border: borders() as ExcelJS.Borders };
    const BAL_ROW: S  = { fill: fill(C.GREY), font: { bold: true, size: 9, color: { argb: C.PURPLE } }, border: borders() as ExcelJS.Borders };
    const IN_S: S     = { font: { bold: true, size: 9, color: { argb: 'FF198754' } }, border: borders() as ExcelJS.Borders };
    const OUT_S: S    = { font: { bold: true, size: 9, color: { argb: 'FFDC3545' } }, border: borders() as ExcelJS.Borders };

    for (const prod of products) {
      const prodLabel = (prod.productCode ? '[' + prod.productCode + '] ' : '') + prod.productName
                      + '   —   Coût : ' + n(prod.unitCost).toLocaleString('fr-FR') + ' FCFA';
      const pr = ws.addRow([prodLabel, '', '', '', '', '', '']);
      ws.mergeCells(pr.number, 1, pr.number, numCols);
      applyS(pr.getCell(1), PROD_HDR);
      pr.height = 18;

      for (const loc of prod.locations ?? []) {
        const lr = ws.addRow(['  ' + loc.locationName, '', '', '', '', '', '']);
        ws.mergeCells(lr.number, 1, lr.number, numCols);
        applyS(lr.getCell(1), LOC_HDR);

        hdrRow(ws, ['Date', 'Référence', 'Partenaire', 'Entrée (+)', 'Sortie (−)', 'Solde Qté', 'Solde Valeur'], numCols);

        // Solde initial
        const initR = ws.addRow([`Solde au ${dateFrom}`, '', '', '', '', n(loc.initialQty), n(loc.initialValue)]);
        ws.mergeCells(initR.number, 1, initR.number, 5);
        for (let c = 1; c <= numCols; c++) applyS(initR.getCell(c), BAL_ROW);
        [6, 7].forEach(c => { initR.getCell(c).numFmt = '#,##0'; numStyle(initR.getCell(c)); });

        let rowIdx = 0;
        for (const mv of loc.movements ?? []) {
          const dr = ws.addRow([mv.date, mv.ref, mv.partner,
            n(mv.qtyIn) > 0 ? n(mv.qtyIn) : '',
            n(mv.qtyOut) > 0 ? n(mv.qtyOut) : '',
            n(mv.qtyBalance), n(mv.valueBalance)]);
          const s = rowIdx % 2 === 0 ? DATA : DATA_ALT;
          for (let c = 1; c <= numCols; c++) applyS(dr.getCell(c), s);
          if (n(mv.qtyIn) > 0)  applyS(dr.getCell(4), IN_S);
          if (n(mv.qtyOut) > 0) applyS(dr.getCell(5), OUT_S);
          [4,5,6,7].forEach(c => { dr.getCell(c).numFmt = '#,##0'; numStyle(dr.getCell(c)); });
          rowIdx++;
        }

        // Solde final
        const fQ = n(loc.finalQty); const fV = n(loc.finalValue);
        const finR = ws.addRow([`Solde au ${dateTo}`, '', '', '', '', fQ, fV]);
        ws.mergeCells(finR.number, 1, finR.number, 5);
        for (let c = 1; c <= numCols; c++) applyS(finR.getCell(c), BAL_ROW);
        const finQStyle = fQ < 0 ? { ...BAL_ROW, font: { bold: true, size: 9, color: { argb: 'FFDC3545' } } } : BAL_ROW;
        applyS(finR.getCell(6), finQStyle as S);
        [6, 7].forEach(c => { finR.getCell(c).numFmt = '#,##0'; numStyle(finR.getCell(c)); });
      }

      ws.addRow([]);
    }

    await this.download(wb, 'Fiche_Detaillee_Stock');
  }

  // ── Trous & Casses ──────────────────────────────────────────────────────
  async exportStockLosses(
    losses: { name?: string; date: string; warehouseName?: string; partnerName?: string; totalValue?: number;
      lines: { productCode?: string; description?: string; quantity: number; unitCost?: number; montantTotal?: number }[] }[],
    dateFrom: string, dateTo: string, companyName?: string
  ): Promise<void> {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Trous & Casses');
    const NC = 5;

    ws.columns = [{ width: 14 }, { width: 42 }, { width: 12 }, { width: 16 }, { width: 18 }];

    titleBlock(ws, 'TROUS & CASSES',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)} ${companyName ? '— ' + companyName : ''}`, NC);
    hdrRow(ws, ['Code', 'Article', 'Quantité', 'CMUP', 'Montant'], NC);

    let grandTotal = 0;
    for (const loss of losses) {
      const label = `${loss.name || ''} — ${dateStr(loss.date)} — ${loss.warehouseName || ''}`
        + (loss.partnerName ? ' — ' + loss.partnerName : '');
      const hdr = ws.addRow([label, '', '', '', n(loss.totalValue)]);
      ws.mergeCells(hdr.number, 1, hdr.number, 4);
      applyS(hdr.getCell(1), SEC_HDR);
      applyS(hdr.getCell(5), SEC_HDR);
      hdr.getCell(5).numFmt = NUM_FMT;
      numStyle(hdr.getCell(5));
      hdr.height = 18;
      hdr.commit();

      (loss.lines || []).forEach((l, i) => {
        styledRow(ws,
          [l.productCode || '', l.description || '', n(l.quantity), n(l.unitCost), n(l.montantTotal)],
          i % 2 === 0 ? DATA : DATA_ALT, NC, 3, 5);
      });
      ws.addRow([]).commit();
      grandTotal += n(loss.totalValue);
    }

    const gt = styledRow(ws, ['TOTAL GÉNÉRAL', '', '', '', grandTotal], GRAND_TOTAL, NC, 5, 5);
    gt.height = 18;

    await this.download(wb, 'Trous_Casses');
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

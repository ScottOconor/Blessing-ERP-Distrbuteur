import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable, { RowInput, Styles, UserOptions } from 'jspdf-autotable';

// ─── Palette ─────────────────────────────────────────────────────────────────
const PURPLE  : [number,number,number] = [113, 75, 103];
const WHITE   : [number,number,number] = [255, 255, 255];
const GREY    : [number,number,number] = [233, 236, 239];
const LIGHT_P : [number,number,number] = [240, 239, 244];
const GREEN   : [number,number,number] = [232, 245, 232];
const FAFAFA  : [number,number,number] = [250, 250, 250];
const DARK    : [number,number,number] = [ 51,  51,  51];
const BLACK   : [number,number,number] = [  0,   0,   0];

// ─── Formatage ───────────────────────────────────────────────────────────────
function dateStr(d: string | Date): string {
  if (!d) return '';
  const dt = typeof d === 'string' ? new Date(d) : d;
  return dt.toLocaleDateString('fr-FR');
}
function fmt2(v: any): string {
  return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    .format(v != null ? Number(v) : 0);
}
function fmt0(v: any): string {
  return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    .format(v != null ? Number(v) : 0);
}
function n(v: any): number { return v != null ? Number(v) : 0; }

// ─── Cellule numérique ───────────────────────────────────────────────────────
function nc2(v: any): { content: string; styles: Partial<Styles> } {
  return { content: fmt2(v), styles: { halign: 'right', font: 'courier' } };
}
function nc0(v: any): { content: string; styles: Partial<Styles> } {
  return { content: n(v) !== 0 ? fmt0(v) : '', styles: { halign: 'right', font: 'courier' } };
}

// ─── En-tête de page (bandeau violet + sous-titre) ───────────────────────────
function drawPageHeader(doc: jsPDF, title: string, subtitle: string): void {
  const W = doc.internal.pageSize.width;
  // Bandeau violet
  doc.setFillColor(...PURPLE);
  doc.rect(0, 0, W, 16, 'F');
  // Titre blanc centré
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...WHITE);
  doc.text(title.toUpperCase(), W / 2, 10.5, { align: 'center' });
  // Sous-titre + date
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text(subtitle, W / 2, 21, { align: 'center' });
  doc.text(`Imprimé le ${new Date().toLocaleString('fr-FR')}`, W / 2, 26, { align: 'center' });
  // Ligne séparatrice violette
  doc.setDrawColor(...PURPLE);
  doc.setLineWidth(0.4);
  doc.line(10, 29, W - 10, 29);
}

// ─── Pied de page ─────────────────────────────────────────────────────────────
function addFooter(doc: jsPDF, reportName: string): void {
  const pages = (doc as any).internal.pages.length - 1;
  const W = doc.internal.pageSize.width;
  const H = doc.internal.pageSize.height;
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p);
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.2);
    doc.line(10, H - 8, W - 10, H - 8);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(130, 130, 130);
    doc.text(reportName, 10, H - 4);
    doc.text(`Page ${p} / ${pages}`, W - 10, H - 4, { align: 'right' });
  }
}

// ─── Options autoTable de base ────────────────────────────────────────────────
const HEAD: Partial<Styles> = {
  fillColor: PURPLE, textColor: WHITE, fontStyle: 'bold',
  halign: 'center', fontSize: 8, valign: 'middle', cellPadding: 2.5
};
const BASE: Partial<Styles> = { fontSize: 8, cellPadding: 2, textColor: DARK };
const ALT : Partial<Styles> = { fillColor: FAFAFA };

function baseOpts(startY: number, extraOpts: Partial<UserOptions> = {}): UserOptions {
  return {
    startY,
    headStyles: HEAD,
    styles: { ...BASE, lineWidth: 0.15, lineColor: [210, 210, 210] },
    alternateRowStyles: ALT,
    margin: { left: 10, right: 10, bottom: 14 },
    tableLineWidth: 0.3,
    tableLineColor: PURPLE,
    ...extraOpts
  };
}

// ─── Ligne sous-total ─────────────────────────────────────────────────────────
type Cell = string | { content: string; styles: Partial<Styles> };
function subRow(cells: Cell[]): RowInput {
  return cells.map(c => typeof c === 'string'
    ? { content: c, styles: { fillColor: LIGHT_P, fontStyle: 'bold' as const, textColor: DARK } }
    : { ...c, styles: { fillColor: LIGHT_P, fontStyle: 'bold' as const, halign: 'right' as const, font: 'courier', textColor: DARK } }
  ) as RowInput;
}

// ─── Ligne grand total ────────────────────────────────────────────────────────
function gtRow(cells: Cell[]): RowInput {
  return cells.map(c => typeof c === 'string'
    ? { content: c, styles: { fillColor: GREEN, fontStyle: 'bold' as const, textColor: BLACK } }
    : { ...c, styles: { fillColor: GREEN, fontStyle: 'bold' as const, halign: 'right' as const, font: 'courier', textColor: BLACK } }
  ) as RowInput;
}

// ─── Ligne en-tête de section ─────────────────────────────────────────────────
function secRow(label: string, colSpan: number): RowInput {
  return [{ content: label, colSpan, styles: { fillColor: GREY, textColor: PURPLE, fontStyle: 'bold' as const, fontSize: 8.5 } }];
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
    dateFrom: string, dateTo: string
  ): void {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    drawPageHeader(doc, 'Balance Générale à 4 Colonnes',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`);

    const body: RowInput[] = lines.map(l => [
      { content: l.accountCode, styles: { halign: 'center' as const, font: 'courier', fontStyle: 'bold' as const } },
      l.accountName,
      nc2(l.debit), nc2(l.credit), nc2(l.finalDebit), nc2(l.finalCredit)
    ]);
    body.push(subRow(['Totaux comptes de bilan', '', nc2(apiTotals?.bilanDebit), nc2(apiTotals?.bilanCredit), nc2(apiTotals?.bilanFinalDebit), nc2(apiTotals?.bilanFinalCredit)]));
    body.push(subRow(['Totaux comptes de gestion', '', nc2(apiTotals?.gestionDebit), nc2(apiTotals?.gestionCredit), nc2(apiTotals?.gestionFinalDebit), nc2(apiTotals?.gestionFinalCredit)]));
    body.push(gtRow(['TOTAUX DE LA BALANCE', '', nc2(totalDebit), nc2(totalCredit), nc2(totalFinalDebit), nc2(totalFinalCredit)]));

    autoTable(doc, baseOpts(33, {
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
    dateFrom: string, dateTo: string
  ): void {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    drawPageHeader(doc, 'Balance Générale à 6 Colonnes',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`);

    const body: RowInput[] = lines.map(l => [
      { content: l.accountCode, styles: { halign: 'center' as const, font: 'courier', fontStyle: 'bold' as const } },
      l.accountName,
      nc2(l.initialDebit), nc2(l.initialCredit),
      nc2(l.debit), nc2(l.credit),
      nc2(l.finalDebit), nc2(l.finalCredit)
    ]);
    const totRow = (label: string, t: any, fn: (c: Cell[]) => RowInput) =>
      fn([label, '', nc2(t.initD), nc2(t.initC), nc2(t.mvtD), nc2(t.mvtC), nc2(t.finD), nc2(t.finC)]);
    body.push(totRow('Totaux bilan', bilanTotals, subRow));
    body.push(totRow('Totaux gestion', gestionTotals, subRow));
    body.push(totRow('TOTAUX DE LA BALANCE', grandTotals, gtRow));

    autoTable(doc, baseOpts(33, {
      head: [['N°Compte', 'Libellé', 'Init. Débit', 'Init. Crédit', 'Mvt. Débit', 'Mvt. Crédit', 'Solde Déb.', 'Solde Cré.']],
      body,
      columnStyles: {
        0: { cellWidth: 22, halign: 'center' as const },
        1: { cellWidth: 64 },
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
  exportGrandLivre(data: any[], dateFrom: string, dateTo: string): void {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    drawPageHeader(doc, 'Grand Livre',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`);

    let startY = 33;

    for (const account of data) {
      // En-tête de compte
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
        nc2(line.debit), nc2(line.credit), nc2(line.balance)
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
  // BILAN OHADA  — nombres entiers (sans décimales)
  // ─────────────────────────────────────────────────────────
  exportBilan(
    actifRows: any[], passifRows: any[],
    totalActif: number, totalPassif: number, dateTo: string
  ): void {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    drawPageHeader(doc, `Bilan au ${dateStr(dateTo)} — SYSCOHADA Révisé`, 'ACTIF  /  PASSIF');

    const empty = { ref: '', label: '', brut: 0, amort: 0, net: 0, isHeader: false, isEmpty: true, isTotal: false };
    const maxLen = Math.max(actifRows.length, passifRows.length);
    const body: RowInput[] = [];

    for (let i = 0; i < maxLen; i++) {
      const a = actifRows[i] || empty;
      const p = passifRows[i] || empty;
      const isHdr = a.isHeader || p.isHeader;
      const isTot = a.isTotal  || p.isTotal;
      const fill  = isHdr ? GREY : isTot ? LIGHT_P : (i % 2 === 0 ? WHITE : FAFAFA);
      const fs    = (isHdr || isTot) ? 'bold' as const : 'normal' as const;

      const cell  = (v: any): { content: string; styles: Partial<Styles> } =>
        ({ content: String(v ?? ''), styles: { fillColor: fill, fontStyle: fs, textColor: DARK } });
      const numBilan = (v: any) =>
        ({ content: n(v) !== 0 ? fmt0(n(v)) : '', styles: { fillColor: fill, fontStyle: fs, halign: 'right' as const, font: 'courier', textColor: DARK } });
      const labelCell = (v: any, isH: boolean) =>
        ({ content: String(v ?? ''), styles: { fillColor: fill, fontStyle: fs, textColor: isH ? PURPLE : DARK } });

      body.push([
        cell(a.isHeader || a.isEmpty ? '' : a.ref),
        labelCell(a.label, a.isHeader),
        numBilan(a.isHeader || a.isEmpty ? 0 : a.brut),
        numBilan(a.isHeader || a.isEmpty ? 0 : a.amort),
        numBilan(a.isHeader || a.isEmpty ? 0 : a.net),
        cell(p.isHeader || p.isEmpty ? '' : p.ref),
        labelCell(p.label, p.isHeader),
        numBilan(p.isHeader || p.isEmpty ? 0 : p.net),
      ]);
    }

    body.push(gtRow([
      'BZ — TOTAL ACTIF', '', '', '',
      { content: fmt0(totalActif), styles: { halign: 'right', font: 'courier' } },
      'BZ — TOTAL PASSIF', '',
      { content: fmt0(totalPassif), styles: { halign: 'right', font: 'courier' } }
    ]));

    autoTable(doc, baseOpts(33, {
      head: [['REF', 'ACTIF', 'BRUT', 'AMORT.', 'NET N', 'REF', 'PASSIF', 'NET N']],
      body,
      columnStyles: {
        0: { cellWidth: 13, halign: 'center' as const },
        1: { cellWidth: 58 },
        2: { cellWidth: 26, halign: 'right' as const },
        3: { cellWidth: 24, halign: 'right' as const },
        4: { cellWidth: 24, halign: 'right' as const },
        5: { cellWidth: 13, halign: 'center' as const },
        6: { cellWidth: 58 },
        7: { cellWidth: 26, halign: 'right' as const },
      }
    }));

    addFooter(doc, 'Bilan OHADA — SYSCOHADA Révisé');
    doc.save(`Bilan_OHADA_${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  // ─────────────────────────────────────────────────────────
  // COMPTE DE RÉSULTAT — nombres entiers
  // ─────────────────────────────────────────────────────────
  exportCompteResultat(lines: any[], dateFrom: string, dateTo: string): void {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    drawPageHeader(doc, 'Compte de Résultat — SYSCOHADA Révisé',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`);

    const body: RowInput[] = lines.map((l, i) => {
      const isHdr = !!l.isSectionHeader;
      const isTot = !!l.isTotal;
      const fill  = isHdr ? GREY : isTot ? LIGHT_P : (i % 2 === 0 ? WHITE : FAFAFA);
      const fs    = (isHdr || isTot) ? 'bold' as const : 'normal' as const;
      return [
        { content: l.code || '', styles: { fillColor: fill, fontStyle: fs, halign: 'center' as const, textColor: isHdr ? PURPLE : DARK } },
        { content: l.label || '', styles: { fillColor: fill, fontStyle: fs, textColor: isHdr ? PURPLE : DARK } },
        { content: (n(l.current) !== 0 || isTot) ? fmt0(l.current) : '',
          styles: { fillColor: fill, fontStyle: fs, halign: 'right' as const, font: 'courier', textColor: DARK } }
      ];
    });

    const lastTotal = [...lines].reverse().find(l => l.isTotal);
    if (lastTotal) {
      body.push(gtRow(['', 'RÉSULTAT NET DE L\'EXERCICE',
        { content: fmt0(lastTotal.current), styles: { halign: 'right', font: 'courier' } }]));
    }

    autoTable(doc, baseOpts(33, {
      head: [['REF', 'LIBELLÉ', 'NET N']],
      body,
      columnStyles: {
        0: { cellWidth: 18, halign: 'center' as const },
        1: { cellWidth: 133 },
        2: { cellWidth: 38, halign: 'right' as const },
      }
    }));

    addFooter(doc, 'Compte de Résultat SYSCOHADA');
    doc.save(`Compte_de_Resultat_${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  // ─────────────────────────────────────────────────────────
  // BALANCE DES TIERS 4 COLONNES
  // ─────────────────────────────────────────────────────────
  exportPartnerBalance4(lines: any[], dateFrom: string, dateTo: string): void {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    drawPageHeader(doc, 'Balance des Tiers à 4 Colonnes',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`);

    const body: RowInput[] = lines.map(l => [
      l.partnerRef || '',
      l.partnerName,
      { content: l.accountNumber || '', styles: { halign: 'center' as const, font: 'courier' } },
      nc2(l.debit), nc2(l.credit), nc2(l.finalDebit), nc2(l.finalCredit),
      { content: l.type === 'customer' ? 'Client' : 'Fournisseur',
        styles: { halign: 'center' as const, textColor: l.type === 'customer' ? [0, 100, 0] : [140, 60, 0] } }
    ]);

    const totD  = lines.reduce((s: number, l: any) => s + n(l.debit), 0);
    const totC  = lines.reduce((s: number, l: any) => s + n(l.credit), 0);
    const totFD = lines.reduce((s: number, l: any) => s + n(l.finalDebit), 0);
    const totFC = lines.reduce((s: number, l: any) => s + n(l.finalCredit), 0);
    body.push(gtRow(['TOTAL', '', '', nc2(totD), nc2(totC), nc2(totFD), nc2(totFC), '']));

    autoTable(doc, baseOpts(33, {
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
  exportPartnerBalance6(lines: any[], dateFrom: string, dateTo: string): void {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    drawPageHeader(doc, 'Balance des Tiers à 6 Colonnes',
      `Période du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`);

    const body: RowInput[] = lines.map(l => [
      l.partnerRef || '', l.partnerName,
      { content: l.accountNumber || '', styles: { halign: 'center' as const, font: 'courier' } },
      nc2(l.initialDebit), nc2(l.initialCredit),
      nc2(l.debit), nc2(l.credit),
      nc2(l.finalDebit), nc2(l.finalCredit),
      { content: l.type === 'customer' ? 'Client' : 'Fournisseur',
        styles: { halign: 'center' as const } }
    ]);

    const sum = (key: string) => lines.reduce((s: number, l: any) => s + n(l[key]), 0);
    body.push(gtRow(['TOTAL', '', '',
      nc2(sum('initialDebit')), nc2(sum('initialCredit')),
      nc2(sum('debit')),        nc2(sum('credit')),
      nc2(sum('finalDebit')),   nc2(sum('finalCredit')), '']));

    autoTable(doc, baseOpts(33, {
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
  exportEtatCommercial(data: any): void {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    drawPageHeader(doc, 'État Commercial — Statistiques de Ventes',
      `Période du ${dateStr(data.dateFrom)} au ${dateStr(data.dateTo)} — ${data.totalInvoices} facture(s)`);

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

    autoTable(doc, baseOpts(33, {
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
  exportRapportConsolide(data: any): void {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    drawPageHeader(doc, 'Rapport Commercial Consolidé',
      `Période du ${dateStr(data.dateFrom)} au ${dateStr(data.dateTo)} — ${data.totalInvoices} facture(s)`);

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

    autoTable(doc, baseOpts(33, {
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
}

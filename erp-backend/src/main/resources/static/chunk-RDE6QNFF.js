import {
  require_exceljs_min
} from "./chunk-V5EAPQSQ.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-NJUNWWEJ.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/core/services/excel-export.service.ts
var ExcelJS = __toESM(require_exceljs_min());
var C = {
  PURPLE: "FF714B67",
  WHITE: "FFFFFFFF",
  GREY: "FFE9ECEF",
  LIGHT_PUR: "FFF0EFF4",
  GREEN: "FFE8F5E8",
  FAFAFA: "FFFAFAFA",
  BORDER: "FFCCCCCC",
  BOR_PUR: "FF714B67",
  BOR_BLK: "FF000000",
  MUTED: "FF777777",
  DARK: "FF333333"
};
function fill(argb) {
  return { type: "pattern", pattern: "solid", fgColor: { argb } };
}
function b(argb = C.BORDER, s = "thin") {
  return { style: s, color: { argb } };
}
function borders(argb = C.BORDER, s = "thin") {
  const bd = b(argb, s);
  return { top: bd, left: bd, bottom: bd, right: bd };
}
var TITLE = {
  font: { bold: true, size: 13, color: { argb: C.PURPLE } },
  alignment: { horizontal: "center", vertical: "middle" }
};
var SUBTITLE = {
  font: { italic: true, size: 9, color: { argb: C.MUTED } },
  alignment: { horizontal: "center", vertical: "middle" }
};
var COL_HDR = {
  fill: fill(C.PURPLE),
  font: { bold: true, color: { argb: C.WHITE }, size: 9 },
  alignment: { horizontal: "center", vertical: "middle", wrapText: true },
  border: borders(C.BOR_BLK)
};
var DATA = {
  font: { size: 9, color: { argb: C.DARK } },
  border: borders()
};
var DATA_ALT = {
  fill: fill(C.FAFAFA),
  font: { size: 9, color: { argb: C.DARK } },
  border: borders()
};
var SEC_HDR = {
  fill: fill(C.GREY),
  font: { bold: true, size: 9, color: { argb: C.PURPLE } },
  border: borders()
};
var SUBTOTAL = {
  fill: fill(C.LIGHT_PUR),
  font: { bold: true, size: 9 },
  border: { top: b(C.BOR_PUR), left: b(), bottom: b(), right: b() }
};
var GRAND_TOTAL = {
  fill: fill(C.GREEN),
  font: { bold: true, size: 10 },
  border: { top: b(C.BOR_BLK, "medium"), left: b(), bottom: b(C.BOR_BLK, "medium"), right: b() }
};
var NUM_FMT = "#,##0.00";
function applyS(cell, ...styles) {
  for (const s of styles) {
    if (s.fill)
      cell.fill = s.fill;
    if (s.font)
      cell.font = __spreadValues(__spreadValues({}, cell.font), s.font);
    if (s.alignment)
      cell.alignment = __spreadValues(__spreadValues({}, cell.alignment), s.alignment);
    if (s.border)
      cell.border = s.border;
    if (s.numFmt)
      cell.numFmt = s.numFmt;
  }
}
function numStyle(cell) {
  cell.alignment = { horizontal: "right" };
  cell.numFmt = NUM_FMT;
}
function styledRow(ws, values, base, numCols, numericFrom = 0, numericTo = 0, altFill = false) {
  const row = ws.addRow(values);
  const s = altFill ? __spreadValues({}, base) : base;
  for (let c = 1; c <= numCols; c++) {
    applyS(row.getCell(c), s);
  }
  for (let c = numericFrom; c <= numericTo; c++) {
    numStyle(row.getCell(c));
  }
  row.commit();
  return row;
}
function titleBlock(ws, title, subtitle, numCols) {
  const addMerged = (text, style, height = 18) => {
    const row = ws.addRow([text]);
    ws.mergeCells(row.number, 1, row.number, numCols);
    row.height = height;
    applyS(row.getCell(1), style);
    row.commit();
  };
  addMerged(title, TITLE, 26);
  addMerged(subtitle, SUBTITLE);
  addMerged(`Imprim\xE9 le ${(/* @__PURE__ */ new Date()).toLocaleString("fr-FR")}`, SUBTITLE);
  ws.addRow([]).commit();
}
function hdrRow(ws, headers, numCols) {
  const row = ws.addRow(headers);
  row.height = 30;
  for (let c = 1; c <= numCols; c++)
    applyS(row.getCell(c), COL_HDR);
  row.commit();
  return row;
}
function n(v) {
  return v != null ? Number(v) : 0;
}
function dateStr(d) {
  if (!d)
    return "";
  const dt = typeof d === "string" ? new Date(d) : d;
  return dt.toLocaleDateString("fr-FR");
}
var ExcelExportService = class _ExcelExportService {
  // ─────────────────────────────────────────────────────────
  // BALANCE GÉNÉRALE 4 COLONNES
  // ─────────────────────────────────────────────────────────
  exportBalance4(lines, apiTotals, totalDebit, totalCredit, totalFinalDebit, totalFinalCredit, dateFrom, dateTo) {
    return __async(this, null, function* () {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Rapport");
      const NC = 6;
      ws.columns = [
        { width: 14 },
        { width: 44 },
        { width: 18 },
        { width: 18 },
        { width: 18 },
        { width: 18 }
      ];
      titleBlock(ws, "BALANCE G\xC9N\xC9RALE \xC0 4 COLONNES", `P\xE9riode du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, NC);
      hdrRow(ws, ["N\xB0Compte", "Libell\xE9 du Compte", "D\xE9bit Mvt", "Cr\xE9dit Mvt", "Solde D\xE9biteur", "Solde Cr\xE9diteur"], NC);
      lines.forEach((l, i) => {
        const row = styledRow(ws, [l.accountCode, l.accountName, n(l.debit), n(l.credit), n(l.finalDebit), n(l.finalCredit)], i % 2 === 0 ? DATA : DATA_ALT, NC, 3, 6);
        row.getCell(1).alignment = { horizontal: "center" };
      });
      ws.addRow([]).commit();
      const addSub = (label, d, c, fd, fc) => {
        styledRow(ws, [label, "", d, c, fd, fc], SUBTOTAL, NC, 3, 6);
      };
      addSub("Totaux comptes de bilan", n(apiTotals?.bilanDebit), n(apiTotals?.bilanCredit), n(apiTotals?.bilanFinalDebit), n(apiTotals?.bilanFinalCredit));
      addSub("Totaux comptes de gestion", n(apiTotals?.gestionDebit), n(apiTotals?.gestionCredit), n(apiTotals?.gestionFinalDebit), n(apiTotals?.gestionFinalCredit));
      const gt = styledRow(ws, ["TOTAUX DE LA BALANCE", "", totalDebit, totalCredit, totalFinalDebit, totalFinalCredit], GRAND_TOTAL, NC, 3, 6);
      gt.height = 18;
      yield this.download(wb, "Balance_4_Cols");
    });
  }
  // ─────────────────────────────────────────────────────────
  // BALANCE GÉNÉRALE 6 COLONNES
  // ─────────────────────────────────────────────────────────
  exportBalance6(lines, bilanTotals, gestionTotals, grandTotals, dateFrom, dateTo) {
    return __async(this, null, function* () {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Rapport");
      const NC = 8;
      ws.columns = [
        { width: 14 },
        { width: 38 },
        { width: 16 },
        { width: 16 },
        { width: 16 },
        { width: 16 },
        { width: 16 },
        { width: 16 }
      ];
      titleBlock(ws, "BALANCE G\xC9N\xC9RALE \xC0 6 COLONNES", `P\xE9riode du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, NC);
      hdrRow(ws, ["N\xB0Compte", "Libell\xE9", "Init. D\xE9bit", "Init. Cr\xE9dit", "Mvt. D\xE9bit", "Mvt. Cr\xE9dit", "Solde D\xE9biteur", "Solde Cr\xE9diteur"], NC);
      lines.forEach((l, i) => {
        styledRow(ws, [
          l.accountCode,
          l.accountName,
          n(l.initialDebit),
          n(l.initialCredit),
          n(l.debit),
          n(l.credit),
          n(l.finalDebit),
          n(l.finalCredit)
        ], i % 2 === 0 ? DATA : DATA_ALT, NC, 3, 8);
      });
      ws.addRow([]).commit();
      const addSub = (label, t) => {
        styledRow(ws, [label, "", n(t.initD), n(t.initC), n(t.mvtD), n(t.mvtC), n(t.finD), n(t.finC)], SUBTOTAL, NC, 3, 8);
      };
      addSub("Totaux bilan", bilanTotals);
      addSub("Totaux gestion", gestionTotals);
      const gt = styledRow(ws, [
        "TOTAUX DE LA BALANCE",
        "",
        n(grandTotals.initD),
        n(grandTotals.initC),
        n(grandTotals.mvtD),
        n(grandTotals.mvtC),
        n(grandTotals.finD),
        n(grandTotals.finC)
      ], GRAND_TOTAL, NC, 3, 8);
      gt.height = 18;
      yield this.download(wb, "Balance_6_Cols");
    });
  }
  // ─────────────────────────────────────────────────────────
  // GRAND LIVRE
  // ─────────────────────────────────────────────────────────
  exportGrandLivre(data, dateFrom, dateTo) {
    return __async(this, null, function* () {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Rapport");
      const NC = 7;
      ws.columns = [
        { width: 13 },
        { width: 18 },
        { width: 11 },
        { width: 42 },
        { width: 16 },
        { width: 16 },
        { width: 16 }
      ];
      titleBlock(ws, "GRAND LIVRE", `P\xE9riode du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, NC);
      for (const account of data) {
        const acHdr = ws.addRow([`${account.accountCode} \u2014 ${account.accountName}`]);
        ws.mergeCells(acHdr.number, 1, acHdr.number, NC);
        acHdr.height = 20;
        applyS(acHdr.getCell(1), SEC_HDR);
        acHdr.commit();
        hdrRow(ws, ["Date", "N\xB0 Pi\xE8ce", "Journal", "Libell\xE9", "D\xE9bit", "Cr\xE9dit", "Solde"], NC);
        account.lines.forEach((line, i) => {
          styledRow(ws, [
            line.date ? dateStr(line.date) : "",
            line.moveRef || "",
            line.journalCode || "",
            line.label || "",
            n(line.debit),
            n(line.credit),
            n(line.balance)
          ], i % 2 === 0 ? DATA : DATA_ALT, NC, 5, 7);
        });
        styledRow(ws, [
          `Total ${account.accountCode}`,
          "",
          "",
          "",
          n(account.totalDebit),
          n(account.totalCredit),
          n(account.finalBalance)
        ], SUBTOTAL, NC, 5, 7);
        ws.addRow([]).commit();
      }
      yield this.download(wb, "Grand_Livre");
    });
  }
  // ─────────────────────────────────────────────────────────
  // BILAN OHADA
  // ─────────────────────────────────────────────────────────
  exportBilan(actifRows, passifRows, totalActif, totalPassif, dateTo) {
    return __async(this, null, function* () {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Rapport");
      const NC = 8;
      ws.columns = [
        { width: 7 },
        { width: 32 },
        { width: 16 },
        { width: 14 },
        { width: 14 },
        { width: 7 },
        { width: 32 },
        { width: 14 }
      ];
      titleBlock(ws, `BILAN AU ${dateStr(dateTo)} \u2014 SYSCOHADA R\xC9VIS\xC9`, "ACTIF / PASSIF", NC);
      hdrRow(ws, ["REF", "ACTIF", "BRUT", "AMORT.", "NET N", "REF", "PASSIF", "NET N"], NC);
      const maxLen = Math.max(actifRows.length, passifRows.length);
      const empty = { ref: "", label: "", brut: 0, amort: 0, net: 0, isHeader: false, isEmpty: true };
      for (let i = 0; i < maxLen; i++) {
        const a = actifRows[i] || empty;
        const p = passifRows[i] || empty;
        const isHdr = a.isHeader || p.isHeader;
        const isTot = a.isTotal || p.isTotal;
        const rowBase = isHdr ? SEC_HDR : isTot ? SUBTOTAL : i % 2 === 0 ? DATA : DATA_ALT;
        const row = ws.addRow([
          a.isHeader || a.isEmpty ? "" : a.ref,
          a.label,
          a.isHeader || a.isEmpty ? "" : n(a.brut) || "",
          a.isHeader || a.isEmpty ? "" : n(a.amort) || "",
          a.isHeader || a.isEmpty ? "" : n(a.net) || "",
          p.isHeader || p.isEmpty ? "" : p.ref,
          p.label,
          p.isHeader || p.isEmpty ? "" : n(p.net) || ""
        ]);
        for (let c = 1; c <= NC; c++)
          applyS(row.getCell(c), rowBase);
        if (!isHdr) {
          for (const c of [3, 4, 5, 8]) {
            if (typeof row.getCell(c).value === "number")
              numStyle(row.getCell(c));
          }
        }
        applyS(row.getCell(6), { border: __spreadProps(__spreadValues({}, row.getCell(6).border), { left: b(C.BOR_PUR, "medium") }) });
        row.commit();
      }
      ws.addRow([]).commit();
      const gt = ws.addRow(["BZ \u2014 TOTAL ACTIF", "", "", "", totalActif, "BZ \u2014 TOTAL PASSIF", "", totalPassif]);
      for (let c = 1; c <= NC; c++)
        applyS(gt.getCell(c), GRAND_TOTAL);
      numStyle(gt.getCell(5));
      numStyle(gt.getCell(8));
      gt.height = 18;
      gt.commit();
      yield this.download(wb, "Bilan_OHADA");
    });
  }
  // ─────────────────────────────────────────────────────────
  // COMPTE DE RÉSULTAT
  // ─────────────────────────────────────────────────────────
  exportCompteResultat(lines, dateFrom, dateTo) {
    return __async(this, null, function* () {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Rapport");
      const NC = 3;
      ws.columns = [{ width: 9 }, { width: 58 }, { width: 22 }];
      titleBlock(ws, "COMPTE DE R\xC9SULTAT \u2014 SYSCOHADA R\xC9VIS\xC9", `P\xE9riode du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, NC);
      hdrRow(ws, ["REF", "LIBELL\xC9", "NET N"], NC);
      lines.forEach((l, i) => {
        const base = l.isSectionHeader ? SEC_HDR : l.isTotal ? SUBTOTAL : i % 2 === 0 ? DATA : DATA_ALT;
        styledRow(ws, [l.code, l.label, n(l.current)], base, NC, 3, 3);
      });
      const lastTotal = [...lines].reverse().find((l) => l.isTotal);
      if (lastTotal) {
        ws.addRow([]).commit();
        const gt = styledRow(ws, ["", "R\xC9SULTAT NET", n(lastTotal.current)], GRAND_TOTAL, NC, 3, 3);
        gt.height = 18;
      }
      yield this.download(wb, "Compte_de_Resultat");
    });
  }
  // ─────────────────────────────────────────────────────────
  // BALANCE DES TIERS 4 COLONNES
  // ─────────────────────────────────────────────────────────
  exportPartnerBalance4(lines, dateFrom, dateTo) {
    return __async(this, null, function* () {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Rapport");
      const NC = 8;
      ws.columns = [
        { width: 12 },
        { width: 38 },
        { width: 14 },
        { width: 16 },
        { width: 16 },
        { width: 16 },
        { width: 16 },
        { width: 13 }
      ];
      titleBlock(ws, "BALANCE DES TIERS \xC0 4 COLONNES", `P\xE9riode du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, NC);
      hdrRow(ws, ["R\xE9f.", "Tiers", "N\xB0 Compte", "D\xE9bit", "Cr\xE9dit", "Solde D\xE9biteur", "Solde Cr\xE9diteur", "Type"], NC);
      lines.forEach((l, i) => {
        styledRow(ws, [
          l.partnerRef,
          l.partnerName,
          l.accountNumber,
          n(l.debit),
          n(l.credit),
          n(l.finalDebit),
          n(l.finalCredit),
          l.type === "customer" ? "Client" : "Fournisseur"
        ], i % 2 === 0 ? DATA : DATA_ALT, NC, 4, 7);
      });
      ws.addRow([]).commit();
      const totD = lines.reduce((s, l) => s + n(l.debit), 0);
      const totC = lines.reduce((s, l) => s + n(l.credit), 0);
      const totFD = lines.reduce((s, l) => s + n(l.finalDebit), 0);
      const totFC = lines.reduce((s, l) => s + n(l.finalCredit), 0);
      const gt = styledRow(ws, ["TOTAL", "", "", totD, totC, totFD, totFC, ""], GRAND_TOTAL, NC, 4, 7);
      gt.height = 18;
      yield this.download(wb, "Balance_Tiers_4_Cols");
    });
  }
  // ─────────────────────────────────────────────────────────
  // BALANCE DES TIERS 6 COLONNES
  // ─────────────────────────────────────────────────────────
  exportPartnerBalance6(lines, dateFrom, dateTo) {
    return __async(this, null, function* () {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Rapport");
      const NC = 10;
      ws.columns = [
        { width: 12 },
        { width: 34 },
        { width: 14 },
        { width: 14 },
        { width: 14 },
        { width: 14 },
        { width: 14 },
        { width: 14 },
        { width: 14 },
        { width: 13 }
      ];
      titleBlock(ws, "BALANCE DES TIERS \xC0 6 COLONNES", `P\xE9riode du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, NC);
      hdrRow(ws, [
        "R\xE9f.",
        "Tiers",
        "N\xB0 Compte",
        "Init. D\xE9bit",
        "Init. Cr\xE9dit",
        "Mvt. D\xE9bit",
        "Mvt. Cr\xE9dit",
        "Solde D\xE9b.",
        "Solde Cr\xE9.",
        "Type"
      ], NC);
      lines.forEach((l, i) => {
        styledRow(ws, [
          l.partnerRef,
          l.partnerName,
          l.accountNumber,
          n(l.initialDebit),
          n(l.initialCredit),
          n(l.debit),
          n(l.credit),
          n(l.finalDebit),
          n(l.finalCredit),
          l.type === "customer" ? "Client" : "Fournisseur"
        ], i % 2 === 0 ? DATA : DATA_ALT, NC, 4, 9);
      });
      ws.addRow([]).commit();
      const gt = styledRow(ws, [
        "TOTAL",
        "",
        "",
        lines.reduce((s, l) => s + n(l.initialDebit), 0),
        lines.reduce((s, l) => s + n(l.initialCredit), 0),
        lines.reduce((s, l) => s + n(l.debit), 0),
        lines.reduce((s, l) => s + n(l.credit), 0),
        lines.reduce((s, l) => s + n(l.finalDebit), 0),
        lines.reduce((s, l) => s + n(l.finalCredit), 0),
        ""
      ], GRAND_TOTAL, NC, 4, 9);
      gt.height = 18;
      yield this.download(wb, "Balance_Tiers_6_Cols");
    });
  }
  // ─────────────────────────────────────────────────────────
  // ÉTAT COMMERCIAL
  // ─────────────────────────────────────────────────────────
  exportEtatCommercial(data) {
    return __async(this, null, function* () {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Rapport");
      const NC = 5;
      ws.columns = [
        { width: 16 },
        { width: 48 },
        { width: 14 },
        { width: 18 },
        { width: 18 }
      ];
      titleBlock(ws, "\xC9TAT COMMERCIAL \u2014 STATISTIQUES DE VENTES", `P\xE9riode du ${dateStr(data.dateFrom)} au ${dateStr(data.dateTo)}`, NC);
      hdrRow(ws, ["Code", "D\xE9signation", "Quantit\xE9", "CA HT", "CA TTC"], NC);
      for (const client of data.clients) {
        const chdr = ws.addRow([
          `CLIENT : ${client.clientName}${client.clientRef ? " [" + client.clientRef + "]" : ""}`,
          "",
          "",
          "",
          ""
        ]);
        ws.mergeCells(chdr.number, 1, chdr.number, NC);
        applyS(chdr.getCell(1), SEC_HDR);
        chdr.commit();
        client.lines.forEach((line, i) => {
          styledRow(ws, [line.productCode || "", line.productName, n(line.qty), n(line.caHT), n(line.caTTC)], i % 2 === 0 ? DATA : DATA_ALT, NC, 3, 5);
        });
        styledRow(ws, [`Sous-total ${client.clientName}`, "", n(client.totalQty), n(client.totalHT), n(client.totalTTC)], SUBTOTAL, NC, 3, 5);
        ws.addRow([]).commit();
      }
      const gt = styledRow(ws, ["TOTAL G\xC9N\xC9RAL", "", n(data.grandTotalQty), n(data.grandTotalHT), n(data.grandTotalTTC)], GRAND_TOTAL, NC, 3, 5);
      gt.height = 18;
      yield this.download(wb, "Etat_Commercial");
    });
  }
  // ─────────────────────────────────────────────────────────
  // RAPPORT COMMERCIAL CONSOLIDÉ
  // ─────────────────────────────────────────────────────────
  exportRapportConsolide(data) {
    return __async(this, null, function* () {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Rapport");
      const NC = 8;
      ws.columns = [
        { width: 15 },
        { width: 40 },
        { width: 12 },
        { width: 14 },
        { width: 16 },
        { width: 16 },
        { width: 14 },
        { width: 11 }
      ];
      titleBlock(ws, "RAPPORT COMMERCIAL CONSOLID\xC9", `P\xE9riode du ${dateStr(data.dateFrom)} au ${dateStr(data.dateTo)}`, NC);
      hdrRow(ws, ["Code", "D\xE9signation", "Quantit\xE9", "Prix Moy.", "CA HT", "CA TTC", "Remise", "% Remise"], NC);
      for (const client of data.clients) {
        const chdr = ws.addRow([
          `CLIENT : ${client.clientName}${client.clientRef ? " [" + client.clientRef + "]" : ""}`,
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]);
        ws.mergeCells(chdr.number, 1, chdr.number, NC);
        applyS(chdr.getCell(1), SEC_HDR);
        chdr.commit();
        client.lines.forEach((line, i) => {
          const htBrut = n(line.caHT) + n(line.remise);
          const taux = htBrut > 0 ? Math.round(n(line.remise) / htBrut * 1e4) / 100 : 0;
          styledRow(ws, [
            line.productCode || "",
            line.productName,
            n(line.qty),
            n(line.prixVente),
            n(line.caHT),
            n(line.caTTC),
            n(line.remise),
            taux
          ], i % 2 === 0 ? DATA : DATA_ALT, NC, 3, 8);
        });
        styledRow(ws, [
          `Sous-total ${client.clientName}`,
          "",
          n(client.totalQty),
          "",
          n(client.totalHT),
          n(client.totalTTC),
          n(client.totalRemise),
          ""
        ], SUBTOTAL, NC, 3, 7);
        ws.addRow([]).commit();
      }
      const gt = styledRow(ws, [
        "TOTAL G\xC9N\xC9RAL",
        "",
        n(data.grandTotalQty),
        "",
        n(data.grandTotalHT),
        n(data.grandTotalTTC),
        n(data.grandTotalRemise),
        ""
      ], GRAND_TOTAL, NC, 3, 7);
      gt.height = 18;
      yield this.download(wb, "Rapport_Consolide");
    });
  }
  // ─────────────────────────────────────────────────────────
  // LIVRE DE CAISSE / BANQUE (CASHBOOK)
  // ─────────────────────────────────────────────────────────
  exportCashbook(journals, companyName, dateFrom, dateTo) {
    return __async(this, null, function* () {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Livre de Caisse");
      const NC = 7;
      ws.columns = [
        { width: 13 },
        // Date
        { width: 22 },
        // N° Pièce
        { width: 10 },
        // Code journal
        { width: 46 },
        // Libellé / Tiers
        { width: 18 },
        // Entrées (Débit)
        { width: 18 },
        // Sorties (Crédit)
        { width: 20 }
        // Solde courant
      ];
      const title = companyName ? `${companyName.toUpperCase()} \u2014 LIVRE DE CAISSE / BANQUE` : "LIVRE DE CAISSE / BANQUE";
      const subtitle = `P\xE9riode du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`;
      titleBlock(ws, title, subtitle, NC);
      const CASH_CLR = "FF166534";
      const BANK_CLR = "FF1D4ED8";
      const OPENING = {
        fill: fill("FFECFDF5"),
        font: { italic: true, size: 9, color: { argb: "FF166534" } },
        border: borders()
      };
      let grandTotalDebit = 0;
      let grandTotalCredit = 0;
      let grandClosing = 0;
      for (const j of journals) {
        const isCash = j.journalType === "cash";
        const jColor = isCash ? CASH_CLR : BANK_CLR;
        const jLabel = isCash ? "CAISSE" : "BANQUE";
        const jHdrRow = ws.addRow([
          `${j.journalCode} \u2014 ${j.journalName} (${jLabel})`,
          "",
          "",
          "",
          n(j.totalDebit),
          n(j.totalCredit),
          n(j.closingBalance)
        ]);
        ws.mergeCells(jHdrRow.number, 1, jHdrRow.number, 4);
        jHdrRow.height = 20;
        for (let c = 1; c <= NC; c++) {
          const cell = jHdrRow.getCell(c);
          cell.fill = fill(jColor);
          cell.font = { bold: true, color: { argb: C.WHITE }, size: 10 };
          cell.border = borders(C.BOR_BLK);
          if (c >= 5) {
            cell.numFmt = NUM_FMT;
            cell.alignment = { horizontal: "right", vertical: "middle" };
          } else {
            cell.alignment = { vertical: "middle" };
          }
        }
        jHdrRow.commit();
        const openRow = ws.addRow([
          "",
          "",
          "",
          "Solde d'ouverture",
          n(j.openingBalance) >= 0 ? n(j.openingBalance) : null,
          n(j.openingBalance) < 0 ? -n(j.openingBalance) : null,
          n(j.openingBalance)
        ]);
        openRow.height = 14;
        for (let c = 1; c <= NC; c++) {
          applyS(openRow.getCell(c), OPENING);
          if (c >= 5) {
            openRow.getCell(c).numFmt = NUM_FMT;
            openRow.getCell(c).alignment = { horizontal: "right" };
          }
        }
        openRow.commit();
        hdrRow(ws, ["Date", "N\xB0 Pi\xE8ce", "Journal", "Libell\xE9 / Tiers", "Entr\xE9es (D\xE9bit)", "Sorties (Cr\xE9dit)", "Solde"], NC);
        let alt = false;
        for (const l of j.lines) {
          const row = styledRow(ws, [
            dateStr(l.date),
            l.pieceName || l.ref || "",
            j.journalCode,
            l.libelle + (l.partner ? " \u2014 " + l.partner : ""),
            n(l.debit) > 0 ? n(l.debit) : null,
            n(l.credit) > 0 ? n(l.credit) : null,
            n(l.balance)
          ], alt ? DATA_ALT : DATA, NC, 5, 7);
          row.height = 13;
          const balCell = row.getCell(7);
          balCell.font = { size: 9, bold: true, color: { argb: n(l.balance) >= 0 ? "FF15803D" : "FFB91C1C" } };
          row.commit();
          alt = !alt;
        }
        const totRow = styledRow(ws, [`TOTAL ${j.journalCode}`, "", "", "", n(j.totalDebit), n(j.totalCredit), n(j.closingBalance)], SUBTOTAL, NC, 5, 7);
        ws.mergeCells(totRow.number, 1, totRow.number, 4);
        totRow.height = 16;
        const clotCell = totRow.getCell(7);
        clotCell.font = { bold: true, size: 9, color: { argb: n(j.closingBalance) >= 0 ? "FF15803D" : "FFB91C1C" } };
        totRow.commit();
        ws.addRow([]).commit();
        grandTotalDebit += n(j.totalDebit);
        grandTotalCredit += n(j.totalCredit);
        grandClosing += n(j.closingBalance);
      }
      const gtRow = styledRow(ws, [
        `TOTAL TR\xC9SORERIE (${journals.length} journal(aux))`,
        "",
        "",
        "",
        grandTotalDebit,
        grandTotalCredit,
        grandClosing
      ], GRAND_TOTAL, NC, 5, 7);
      ws.mergeCells(gtRow.number, 1, gtRow.number, 4);
      gtRow.height = 18;
      const gtBal = gtRow.getCell(7);
      gtBal.font = { bold: true, size: 10, color: { argb: grandClosing >= 0 ? "FF15803D" : "FFB91C1C" } };
      gtRow.commit();
      const from = dateFrom.replace(/-/g, "");
      const to = dateTo.replace(/-/g, "");
      yield this.download(wb, `LivreCaisse_${from}_${to}`);
    });
  }
  // ── Rapport de stock valorisé ────────────────────────────────────────────
  exportStockReport(groups, companyName) {
    return __async(this, null, function* () {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Rapport Stock");
      const numCols = 6;
      titleBlock(ws, "Rapport de Stock Valoris\xE9", `\xC9tat au ${(/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR")} ${companyName ? "\u2014 " + companyName : ""}`, numCols);
      hdrRow(ws, ["R\xE9f\xE9rence", "D\xE9signation", "UDM", "P.U. (CMUP)", "Quantit\xE9", "Valeur (FCFA)"], numCols);
      ws.getColumn(1).width = 16;
      ws.getColumn(2).width = 40;
      ws.getColumn(3).width = 10;
      ws.getColumn(4).width = 18;
      ws.getColumn(5).width = 14;
      ws.getColumn(6).width = 20;
      let grandQty = 0;
      let grandVal = 0;
      for (const grp of groups) {
        const secRow = ws.addRow(["ENTREP\xD4T : " + grp.warehouseName.toUpperCase(), "", "", "", "", ""]);
        ws.mergeCells(secRow.number, 1, secRow.number, numCols);
        applyS(secRow.getCell(1), SEC_HDR);
        secRow.height = 16;
        let rowIdx = 0;
        for (const r of grp.rows) {
          const dr = ws.addRow([r.code, r.name, r.uom, n(r.price) || "", n(r.qty), n(r.value)]);
          const s = rowIdx % 2 === 0 ? DATA : DATA_ALT;
          for (let c = 1; c <= numCols; c++)
            applyS(dr.getCell(c), s);
          [4, 5, 6].forEach((c) => {
            numStyle(dr.getCell(c));
            dr.getCell(c).numFmt = "#,##0";
          });
          rowIdx++;
        }
        const subR = ws.addRow(["", `Sous-total ${grp.warehouseName}`, "", "", n(grp.subtotalQty), n(grp.subtotalValue)]);
        applyS(subR.getCell(1), SEC_HDR);
        applyS(subR.getCell(2), __spreadProps(__spreadValues({}, SEC_HDR), { alignment: { horizontal: "left" } }));
        [3, 4, 5, 6].forEach((c) => {
          applyS(subR.getCell(c), SEC_HDR);
          subR.getCell(c).numFmt = "#,##0";
          numStyle(subR.getCell(c));
        });
        grandQty += grp.subtotalQty;
        grandVal += grp.subtotalValue;
      }
      const gtR = ws.addRow(["", "TOTAL G\xC9N\xC9RAL DU STOCK", "", "", n(grandQty), n(grandVal)]);
      const GT = { fill: fill(C.PURPLE), font: { bold: true, size: 10, color: { argb: C.WHITE } }, border: borders(C.BOR_BLK) };
      for (let c = 1; c <= numCols; c++) {
        applyS(gtR.getCell(c), GT);
        gtR.getCell(c).numFmt = "#,##0";
      }
      gtR.height = 18;
      yield this.download(wb, "Rapport_Stock");
    });
  }
  // ── Mouvements de stock ────────────────────────────────────────────────────
  exportStockMovements(movements, companyName) {
    return __async(this, null, function* () {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Mouvements");
      const numCols = 8;
      titleBlock(ws, "Mouvements de Stock", `Export au ${(/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR")} ${companyName ? "\u2014 " + companyName : ""}`, numCols);
      hdrRow(ws, ["Date", "R\xE9f\xE9rence", "Partenaire", "Article", "De", "Vers", "Quantit\xE9", "Valeur (FCFA)"], numCols);
      ws.getColumn(1).width = 13;
      ws.getColumn(2).width = 18;
      ws.getColumn(3).width = 22;
      ws.getColumn(4).width = 36;
      ws.getColumn(5).width = 22;
      ws.getColumn(6).width = 22;
      ws.getColumn(7).width = 12;
      ws.getColumn(8).width = 18;
      movements.forEach((m, i) => {
        const artLabel = (m.productCode ? "[" + m.productCode + "] " : "") + (m.productName || "");
        const dr = ws.addRow([m.dateDone || "\u2014", m.pickingRef || "\u2014", m.partnerName || "\u2014", artLabel, m.locationName || "\u2014", m.locationDestName || "\u2014", n(m.qtyDone), n(m.subtotalValue)]);
        const s = i % 2 === 0 ? DATA : DATA_ALT;
        for (let c = 1; c <= numCols; c++)
          applyS(dr.getCell(c), s);
        [7, 8].forEach((c) => {
          numStyle(dr.getCell(c));
          dr.getCell(c).numFmt = "#,##0";
        });
      });
      const totalVal = movements.reduce((s, m) => s + n(m.subtotalValue), 0);
      const totR = ws.addRow(["", "", "", "", "", "TOTAL", "", n(totalVal)]);
      const GT = { fill: fill(C.PURPLE), font: { bold: true, size: 10, color: { argb: C.WHITE } }, border: borders(C.BOR_BLK) };
      for (let c = 1; c <= numCols; c++) {
        applyS(totR.getCell(c), GT);
        totR.getCell(c).numFmt = "#,##0";
      }
      totR.height = 16;
      yield this.download(wb, "Mouvements_Stock");
    });
  }
  // ── Rapport analytique de stock ────────────────────────────────────────────
  exportStockAnalysis(data, dateFrom, dateTo, companyName) {
    return __async(this, null, function* () {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Rapport Analytique");
      const numCols = 11;
      titleBlock(ws, "Rapport de Stock Analytique", `P\xE9riode : ${dateFrom} \u2192 ${dateTo} ${companyName ? "\u2014 " + companyName : ""}`, numCols);
      hdrRow(ws, ["Article", "UDM", "Stock init.", "Entr\xE9es (+)", "Sorties (\u2212)", "Stock final", "Co\xFBt U.", "Val. initiale", "Val. entr\xE9es", "Val. sorties", "Val. finale"], numCols);
      ws.getColumn(1).width = 38;
      ws.getColumn(2).width = 8;
      [3, 4, 5, 6, 7, 8, 9, 10, 11].forEach((c) => {
        ws.getColumn(c).width = 16;
      });
      for (const wh of data) {
        const secR = ws.addRow([wh.warehouseName.toUpperCase(), "", "", "", "", "", "", "", "", "", ""]);
        ws.mergeCells(secR.number, 1, secR.number, numCols);
        applyS(secR.getCell(1), SEC_HDR);
        secR.height = 16;
        wh.lines.forEach((l, i) => {
          const artLabel = (l.productCode ? "[" + l.productCode + "] " : "") + l.productName;
          const dr = ws.addRow([artLabel, l.uomName || "", n(l.initialQty), n(l.inQty), n(l.outQty), n(l.finalQty), n(l.unitCost), n(l.initialValue), n(l.inValue), n(l.outValue), n(l.finalValue)]);
          const s = i % 2 === 0 ? DATA : DATA_ALT;
          for (let c = 1; c <= numCols; c++)
            applyS(dr.getCell(c), s);
          [3, 4, 5, 6, 7, 8, 9, 10, 11].forEach((c) => {
            numStyle(dr.getCell(c));
            dr.getCell(c).numFmt = "#,##0";
          });
        });
        const subR = ws.addRow([`TOTAL ${wh.warehouseName}`, "", n(wh.totalInitialQty), n(wh.totalInQty), n(wh.totalOutQty), n(wh.totalFinalQty), "", n(wh.totalInitialValue), n(wh.totalInValue), n(wh.totalOutValue), n(wh.totalFinalValue)]);
        const GT = { fill: fill(C.PURPLE), font: { bold: true, size: 9, color: { argb: C.WHITE } }, border: borders(C.BOR_BLK) };
        for (let c = 1; c <= numCols; c++) {
          applyS(subR.getCell(c), GT);
          subR.getCell(c).numFmt = "#,##0";
        }
        subR.height = 16;
      }
      yield this.download(wb, "Rapport_Analytique_Stock");
    });
  }
  // ── Fiche de stock détaillée ───────────────────────────────────────────────
  exportStockDetailed(products, dateFrom, dateTo, companyName) {
    return __async(this, null, function* () {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Fiche D\xE9taill\xE9e");
      const numCols = 7;
      titleBlock(ws, "Fiche de Stock D\xE9taill\xE9e", `P\xE9riode : ${dateFrom} \u2192 ${dateTo} ${companyName ? "\u2014 " + companyName : ""}`, numCols);
      ws.getColumn(1).width = 14;
      ws.getColumn(2).width = 20;
      ws.getColumn(3).width = 26;
      ws.getColumn(4).width = 14;
      ws.getColumn(5).width = 14;
      ws.getColumn(6).width = 14;
      ws.getColumn(7).width = 18;
      const PROD_HDR = { fill: fill(C.PURPLE), font: { bold: true, size: 10, color: { argb: C.WHITE } }, border: borders(C.BOR_BLK) };
      const LOC_HDR = { fill: fill(C.LIGHT_PUR), font: { bold: true, size: 9, color: { argb: C.BOR_PUR } }, border: borders() };
      const BAL_ROW = { fill: fill(C.GREY), font: { bold: true, size: 9, color: { argb: C.PURPLE } }, border: borders() };
      const IN_S = { font: { bold: true, size: 9, color: { argb: "FF198754" } }, border: borders() };
      const OUT_S = { font: { bold: true, size: 9, color: { argb: "FFDC3545" } }, border: borders() };
      for (const prod of products) {
        const prodLabel = (prod.productCode ? "[" + prod.productCode + "] " : "") + prod.productName + "   \u2014   Co\xFBt : " + n(prod.unitCost).toLocaleString("fr-FR") + " FCFA";
        const pr = ws.addRow([prodLabel, "", "", "", "", "", ""]);
        ws.mergeCells(pr.number, 1, pr.number, numCols);
        applyS(pr.getCell(1), PROD_HDR);
        pr.height = 18;
        for (const loc of prod.locations ?? []) {
          const lr = ws.addRow(["  " + loc.locationName, "", "", "", "", "", ""]);
          ws.mergeCells(lr.number, 1, lr.number, numCols);
          applyS(lr.getCell(1), LOC_HDR);
          hdrRow(ws, ["Date", "R\xE9f\xE9rence", "Partenaire", "Entr\xE9e (+)", "Sortie (\u2212)", "Solde Qt\xE9", "Solde Valeur"], numCols);
          const initR = ws.addRow([`Solde au ${dateFrom}`, "", "", "", "", n(loc.initialQty), n(loc.initialValue)]);
          ws.mergeCells(initR.number, 1, initR.number, 5);
          for (let c = 1; c <= numCols; c++)
            applyS(initR.getCell(c), BAL_ROW);
          [6, 7].forEach((c) => {
            initR.getCell(c).numFmt = "#,##0";
            numStyle(initR.getCell(c));
          });
          let rowIdx = 0;
          for (const mv of loc.movements ?? []) {
            const dr = ws.addRow([
              mv.date,
              mv.ref,
              mv.partner,
              n(mv.qtyIn) > 0 ? n(mv.qtyIn) : "",
              n(mv.qtyOut) > 0 ? n(mv.qtyOut) : "",
              n(mv.qtyBalance),
              n(mv.valueBalance)
            ]);
            const s = rowIdx % 2 === 0 ? DATA : DATA_ALT;
            for (let c = 1; c <= numCols; c++)
              applyS(dr.getCell(c), s);
            if (n(mv.qtyIn) > 0)
              applyS(dr.getCell(4), IN_S);
            if (n(mv.qtyOut) > 0)
              applyS(dr.getCell(5), OUT_S);
            [4, 5, 6, 7].forEach((c) => {
              dr.getCell(c).numFmt = "#,##0";
              numStyle(dr.getCell(c));
            });
            rowIdx++;
          }
          const fQ = n(loc.finalQty);
          const fV = n(loc.finalValue);
          const finR = ws.addRow([`Solde au ${dateTo}`, "", "", "", "", fQ, fV]);
          ws.mergeCells(finR.number, 1, finR.number, 5);
          for (let c = 1; c <= numCols; c++)
            applyS(finR.getCell(c), BAL_ROW);
          const finQStyle = fQ < 0 ? __spreadProps(__spreadValues({}, BAL_ROW), { font: { bold: true, size: 9, color: { argb: "FFDC3545" } } }) : BAL_ROW;
          applyS(finR.getCell(6), finQStyle);
          [6, 7].forEach((c) => {
            finR.getCell(c).numFmt = "#,##0";
            numStyle(finR.getCell(c));
          });
        }
        ws.addRow([]);
      }
      yield this.download(wb, "Fiche_Detaillee_Stock");
    });
  }
  // ── Trous & Casses ──────────────────────────────────────────────────────
  exportStockLosses(losses, dateFrom, dateTo, companyName) {
    return __async(this, null, function* () {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("Trous & Casses");
      const NC = 5;
      ws.columns = [{ width: 14 }, { width: 42 }, { width: 12 }, { width: 16 }, { width: 18 }];
      titleBlock(ws, "TROUS & CASSES", `P\xE9riode du ${dateStr(dateFrom)} au ${dateStr(dateTo)} ${companyName ? "\u2014 " + companyName : ""}`, NC);
      hdrRow(ws, ["Code", "Article", "Quantit\xE9", "CMUP", "Montant"], NC);
      let grandTotal = 0;
      for (const loss of losses) {
        const label = `${loss.name || ""} \u2014 ${dateStr(loss.date)} \u2014 ${loss.warehouseName || ""}` + (loss.partnerName ? " \u2014 " + loss.partnerName : "");
        const hdr = ws.addRow([label, "", "", "", n(loss.totalValue)]);
        ws.mergeCells(hdr.number, 1, hdr.number, 4);
        applyS(hdr.getCell(1), SEC_HDR);
        applyS(hdr.getCell(5), SEC_HDR);
        hdr.getCell(5).numFmt = NUM_FMT;
        numStyle(hdr.getCell(5));
        hdr.height = 18;
        hdr.commit();
        (loss.lines || []).forEach((l, i) => {
          styledRow(ws, [l.productCode || "", l.description || "", n(l.quantity), n(l.unitCost), n(l.montantTotal)], i % 2 === 0 ? DATA : DATA_ALT, NC, 3, 5);
        });
        ws.addRow([]).commit();
        grandTotal += n(loss.totalValue);
      }
      const gt = styledRow(ws, ["TOTAL G\xC9N\xC9RAL", "", "", "", grandTotal], GRAND_TOTAL, NC, 5, 5);
      gt.height = 18;
      yield this.download(wb, "Trous_Casses");
    });
  }
  // ─────────────────────────────────────────────────────────
  // HELPER
  // ─────────────────────────────────────────────────────────
  download(wb, filename) {
    return __async(this, null, function* () {
      const buffer = yield wb.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${filename}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }
  static {
    this.\u0275fac = function ExcelExportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExcelExportService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExcelExportService, factory: _ExcelExportService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExcelExportService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ExcelExportService
};
//# sourceMappingURL=chunk-RDE6QNFF.js.map

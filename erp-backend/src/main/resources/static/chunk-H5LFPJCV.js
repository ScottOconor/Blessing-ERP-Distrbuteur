import {
  E,
  autoTable
} from "./chunk-AJFTTPVD.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-NJUNWWEJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/core/services/pdf-export.service.ts
var HDR_BG = [242, 242, 242];
var TOT_BG = [233, 236, 239];
var SUB_BG = [248, 249, 250];
var SEC_BG = [226, 232, 240];
var ALT_BG = [249, 249, 249];
var WHITE = [255, 255, 255];
var BLACK = [0, 0, 0];
var DARK = [33, 37, 41];
var MUTED = [108, 117, 125];
var NAVY = [15, 23, 42];
var PRIMARY = [29, 78, 216];
var SLATE_BG = [241, 245, 249];
var ALT2 = [248, 250, 252];
var SUCCESS = [22, 163, 74];
var SUCCESS_BG = [220, 252, 231];
var SUCCESS_DARK = [21, 87, 36];
var DANGER = [220, 38, 38];
var DANGER_BG = [254, 226, 226];
var DANGER_DARK = [127, 29, 29];
function dateStr(d) {
  if (!d)
    return "";
  const dt = typeof d === "string" ? /* @__PURE__ */ new Date(d + "T00:00:00") : d;
  const day = String(dt.getDate()).padStart(2, "0");
  const mon = String(dt.getMonth() + 1).padStart(2, "0");
  return day + "/" + mon + "/" + dt.getFullYear();
}
function fmtNum(v, decimals) {
  const num = v != null ? Number(v) : 0;
  if (isNaN(num))
    return decimals > 0 ? "0," + "0".repeat(decimals) : "0";
  const sign = num < 0 ? "-" : "";
  const fixed = Math.abs(num).toFixed(decimals);
  const parts = fixed.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return sign + (decimals > 0 ? parts[0] + "," + parts[1] : parts[0]);
}
function fmt2(v) {
  return fmtNum(v, 2);
}
function fmt0(v) {
  return fmtNum(v, 0);
}
function n(v) {
  return v != null ? Number(v) : 0;
}
function nc2(v) {
  return { content: fmt2(v), styles: { halign: "right" } };
}
function nc0(v) {
  return { content: n(v) !== 0 ? fmt0(v) : "", styles: { halign: "right" } };
}
function ncDash(v) {
  return n(v) !== 0 ? { content: fmt2(v), styles: { halign: "right", textColor: DARK } } : { content: "\u2014", styles: { halign: "right", textColor: MUTED } };
}
function drawPageHeader(doc, title, subtitle, companyName) {
  const W = doc.internal.pageSize.width;
  const M = 10;
  let y = 12;
  if (companyName) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...DARK);
    doc.text(companyName.toUpperCase(), M, y);
  }
  const now = /* @__PURE__ */ new Date();
  const nowStr = String(now.getDate()).padStart(2, "0") + "/" + String(now.getMonth() + 1).padStart(2, "0") + "/" + now.getFullYear() + " " + String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0") + ":" + String(now.getSeconds()).padStart(2, "0");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(...MUTED);
  doc.text("Imprim\xE9 le : " + nowStr, W - M, y, { align: "right" });
  y += 4;
  doc.setDrawColor(...BLACK);
  doc.setLineWidth(0.5);
  doc.line(M, y, W - M, y);
  y += 4;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(...DARK);
  doc.text(title, M, y);
  y += 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...MUTED);
  doc.text(subtitle, M, y);
  y += 4;
  doc.setDrawColor(180, 180, 180);
  doc.setLineWidth(0.2);
  doc.line(M, y, W - M, y);
  return y + 3;
}
function addFooter(doc, reportName) {
  const pages = doc.internal.pages.length - 1;
  const W = doc.internal.pageSize.width;
  const H = doc.internal.pageSize.height;
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p);
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.2);
    doc.line(10, H - 8, W - 10, H - 8);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(...MUTED);
    doc.text(reportName, 10, H - 4);
    doc.text(`Page ${p} / ${pages}`, W - 10, H - 4, { align: "right" });
  }
}
var HEAD = {
  fillColor: HDR_BG,
  textColor: DARK,
  fontStyle: "bold",
  halign: "center",
  fontSize: 9,
  valign: "middle",
  cellPadding: { top: 2, right: 3, bottom: 2, left: 3 },
  lineColor: BLACK,
  lineWidth: 0.3
};
var BASE = {
  fontSize: 9,
  cellPadding: { top: 1.2, right: 2.5, bottom: 1.2, left: 2.5 },
  textColor: DARK,
  lineColor: [200, 200, 200],
  lineWidth: 0.1
};
var TOT_PAD = { top: 2.5, right: 3, bottom: 2.5, left: 3 };
var ALT = { fillColor: ALT_BG };
function baseOpts(startY, extraOpts = {}) {
  return __spreadValues({
    startY,
    headStyles: HEAD,
    styles: BASE,
    alternateRowStyles: ALT,
    margin: { left: 10, right: 10, bottom: 14 },
    tableLineWidth: 0.3,
    tableLineColor: BLACK
  }, extraOpts);
}
function subRow(cells) {
  return cells.map((c) => typeof c === "string" ? { content: c, styles: { fillColor: SUB_BG, fontStyle: "bold", textColor: DARK, cellPadding: TOT_PAD } } : __spreadProps(__spreadValues({}, c), { styles: { fillColor: SUB_BG, fontStyle: "bold", halign: "right", textColor: DARK, cellPadding: TOT_PAD } }));
}
function gtRow(cells) {
  return cells.map((c) => typeof c === "string" ? { content: c, styles: { fillColor: TOT_BG, fontStyle: "bold", textColor: BLACK, cellPadding: TOT_PAD } } : __spreadProps(__spreadValues({}, c), { styles: { fillColor: TOT_BG, fontStyle: "bold", halign: "right", textColor: BLACK, cellPadding: TOT_PAD } }));
}
function secRow(label, colSpan) {
  return [{ content: label, colSpan, styles: { fillColor: SEC_BG, textColor: DARK, fontStyle: "bold", fontSize: 8.5 } }];
}
function lastY(doc) {
  return doc.lastAutoTable?.finalY ?? 35;
}
var PdfExportService = class _PdfExportService {
  // ─────────────────────────────────────────────────────────
  // BALANCE GÉNÉRALE 4 COLONNES  (portrait A4)
  // Même style "état financier" que le Bilan / Compte de Résultat : en-tête
  // compact centré, bandeau navy, sous-totaux ardoise, total général en
  // vert/rouge selon l'équilibre, badge d'équilibre en bas. Nombre de comptes
  // non borné (contrairement au bilan) : on calibre la police pour tenir sur
  // une page si possible, sinon on accepte une pagination naturelle plutôt
  // que de forcer une taille illisible.
  // ─────────────────────────────────────────────────────────
  exportBalance4(lines, apiTotals, totalDebit, totalCredit, totalFinalDebit, totalFinalCredit, dateFrom, dateTo, companyName) {
    const bD = n(apiTotals?.bilanDebit), bC = n(apiTotals?.bilanCredit);
    const bFD = n(apiTotals?.bilanFinalDebit), bFC = n(apiTotals?.bilanFinalCredit);
    const gD = n(apiTotals?.gestionDebit), gC = n(apiTotals?.gestionCredit);
    const gFD = n(apiTotals?.gestionFinalDebit), gFC = n(apiTotals?.gestionFinalCredit);
    const equilibre = Math.abs(bD - bC + (gD - gC)) <= 0.01;
    const build = (bodyFS) => {
      const doc = new E({ orientation: "portrait", unit: "mm", format: "a4" });
      const W = doc.internal.pageSize.width;
      const PAGE_H = doc.internal.pageSize.height;
      const M = 10;
      let y = 12;
      doc.setFont("times", "bold");
      doc.setFontSize(13);
      doc.setTextColor(...NAVY);
      doc.text("BALANCE G\xC9N\xC9RALE \xC0 4 COLONNES", W / 2, y, { align: "center" });
      y += 4;
      if (companyName) {
        doc.setFont("times", "bold");
        doc.setFontSize(10.5);
        doc.setTextColor(...DARK);
        doc.text(companyName.toUpperCase(), W / 2, y, { align: "center" });
        y += 3.3;
      }
      doc.setFont("times", "italic");
      doc.setFontSize(8.5);
      doc.setTextColor(...MUTED);
      doc.text(`P\xE9riode du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, W / 2, y, { align: "center" });
      y += 3.5;
      doc.setDrawColor(...PRIMARY);
      doc.setLineWidth(0.8);
      doc.line(W / 2 - 14, y, W / 2 + 14, y);
      y += 2.5;
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.15);
      doc.line(M, y, W - M, y);
      y += 3;
      const bodyPadV = Math.max(0.25, Math.min(1.2, bodyFS * 0.13));
      const headFS = bodyFS + 0.5;
      const headPadV = Math.max(0.35, Math.min(2, headFS * 0.2));
      const toRow = (l, i) => {
        const fill = i % 2 === 0 ? ALT2 : WHITE;
        const CS = { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: fill };
        const dashCell = (v) => {
          const c = ncDash(v);
          return __spreadProps(__spreadValues({}, c), { styles: __spreadValues(__spreadValues({}, CS), c.styles) });
        };
        return [
          { content: l.accountCode || "", styles: __spreadProps(__spreadValues({}, CS), { halign: "center", fontStyle: "bold", textColor: NAVY }) },
          { content: l.accountName || "", styles: __spreadValues({}, CS) },
          dashCell(l.debit),
          dashCell(l.credit),
          dashCell(l.finalDebit),
          dashCell(l.finalCredit)
        ];
      };
      const totRow = (label, vals, fill, textCol = DARK) => [
        { content: label, colSpan: 2, styles: { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: fill, fontStyle: "bold", textColor: textCol } },
        ...vals.map((v) => ({ content: v > 0 ? fmt0(v) : "\u2014", styles: { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: fill, fontStyle: "bold", halign: "right", textColor: v > 0 ? textCol : MUTED } }))
      ];
      const body = lines.map(toRow);
      body.push(totRow("Totaux comptes de bilan", [bD, bC, bFD, bFC], SLATE_BG));
      body.push(totRow("Totaux comptes de gestion", [gD, gC, gFD, gFC], SLATE_BG));
      body.push(totRow("TOTAUX DE LA BALANCE", [totalDebit, totalCredit, totalFinalDebit, totalFinalCredit], equilibre ? SUCCESS_BG : DANGER_BG, equilibre ? SUCCESS_DARK : DANGER_DARK));
      const H = __spreadProps(__spreadValues({}, HEAD), { fontSize: headFS, cellPadding: headPadV, fillColor: SLATE_BG, textColor: NAVY });
      const AC = __spreadProps(__spreadValues({}, H), { fillColor: NAVY, textColor: WHITE });
      autoTable(doc, {
        startY: y,
        head: [
          [
            { content: "N\xB0Compte", rowSpan: 2, styles: __spreadProps(__spreadValues({}, H), { valign: "middle" }) },
            { content: "Libell\xE9 du Compte", rowSpan: 2, styles: __spreadProps(__spreadValues({}, H), { halign: "left", valign: "middle" }) },
            { content: "Mouvements P\xE9riode", colSpan: 2, styles: __spreadProps(__spreadValues({}, AC), { halign: "center" }) },
            { content: "Soldes Finaux", colSpan: 2, styles: __spreadProps(__spreadValues({}, AC), { halign: "center" }) }
          ],
          [
            { content: "D\xE9bit", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
            { content: "Cr\xE9dit", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
            { content: "D\xE9biteur", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
            { content: "Cr\xE9diteur", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) }
          ]
        ],
        body,
        styles: { fontSize: bodyFS, cellPadding: bodyPadV, textColor: DARK, lineColor: [180, 180, 180], lineWidth: 0.1 },
        margin: { left: M, right: M, bottom: 14 },
        tableLineWidth: 0.3,
        tableLineColor: [148, 163, 184],
        columnStyles: {
          0: { cellWidth: 20, halign: "center" },
          1: { cellWidth: 62 },
          2: { cellWidth: 27, halign: "right" },
          3: { cellWidth: 27, halign: "right" },
          4: { cellWidth: 27, halign: "right" },
          5: { cellWidth: 27, halign: "right" }
        }
      });
      const lastY2 = doc.lastAutoTable?.finalY ?? y;
      const msg = equilibre ? `BALANCE \xC9QUILIBR\xC9E   \u2014   les mouvements nets de bilan et de gestion s'\xE9quilibrent` : `D\xC9S\xC9QUILIBRE D\xC9TECT\xC9   \u2014   les totaux nets de bilan et gestion ne s'\xE9quilibrent pas`;
      const statusCol = equilibre ? SUCCESS : DANGER;
      const statusDark = equilibre ? SUCCESS_DARK : DANGER_DARK;
      const msgFS = Math.max(7, bodyFS + 0.5);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(msgFS);
      const dotR = 1.3, dotGap = 3, padX = 5, padY = 2.2;
      const textW = doc.getTextWidth(msg);
      const boxW = dotR * 2 + dotGap + textW + padX * 2;
      const boxH = msgFS * 0.3527 * 1.25 + padY * 2;
      const boxX = W / 2 - boxW / 2;
      const boxY = lastY2 + 5;
      doc.setFillColor(...equilibre ? SUCCESS_BG : DANGER_BG);
      doc.setDrawColor(...statusCol);
      doc.setLineWidth(0.35);
      doc.roundedRect(boxX, boxY, boxW, boxH, 1.3, 1.3, "FD");
      const midY = boxY + boxH / 2;
      doc.setFillColor(...statusCol);
      doc.circle(boxX + padX + dotR, midY, dotR, "F");
      doc.setTextColor(...statusDark);
      doc.text(msg, boxX + padX + dotR * 2 + dotGap, midY + msgFS * 0.35 * 0.3527, { align: "left" });
      addFooter(doc, "Balance G\xE9n\xE9rale 4 Colonnes");
      return { doc, bottomGap: PAGE_H - (boxY + boxH) };
    };
    const CANDIDATES = [9, 8.5, 8, 7.5, 7, 6.5, 6];
    const MIN_BOTTOM_GAP = 16;
    let result = build(CANDIDATES[CANDIDATES.length - 1]);
    for (const fs of CANDIDATES) {
      const r = build(fs);
      const pages = r.doc.internal.pages.length - 1;
      result = r;
      if (pages <= 1 && r.bottomGap >= MIN_BOTTOM_GAP)
        break;
    }
    result.doc.save("Balance_4_Cols_" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) + ".pdf");
  }
  // ─────────────────────────────────────────────────────────
  // BALANCE GÉNÉRALE 6 COLONNES  (paysage — même style que le Bilan)
  // Solde Final = Solde Initial + Mouvements (cumulatif, volontairement
  // différent du module de référence sur ce point précis — décision
  // confirmée : la balance 6 colonnes existe justement pour vérifier
  // Final = Initial + Mouvements).
  // ─────────────────────────────────────────────────────────
  exportBalance6(lines, bilanTotals, gestionTotals, grandTotals, dateFrom, dateTo, companyName) {
    const bilanFinNet = n(bilanTotals?.finD) - n(bilanTotals?.finC);
    const gestionFinNet = n(gestionTotals?.finD) - n(gestionTotals?.finC);
    const equilibre = Math.abs(bilanFinNet + gestionFinNet) <= 0.01;
    const build = (bodyFS) => {
      const doc = new E({ orientation: "landscape", unit: "mm", format: "a4" });
      const W = doc.internal.pageSize.width;
      const PAGE_H = doc.internal.pageSize.height;
      const M = 10;
      let y = 12;
      doc.setFont("times", "bold");
      doc.setFontSize(13);
      doc.setTextColor(...NAVY);
      doc.text("BALANCE G\xC9N\xC9RALE \xC0 6 COLONNES", W / 2, y, { align: "center" });
      y += 4;
      if (companyName) {
        doc.setFont("times", "bold");
        doc.setFontSize(10.5);
        doc.setTextColor(...DARK);
        doc.text(companyName.toUpperCase(), W / 2, y, { align: "center" });
        y += 3.3;
      }
      doc.setFont("times", "italic");
      doc.setFontSize(8.5);
      doc.setTextColor(...MUTED);
      doc.text(`P\xE9riode du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, W / 2, y, { align: "center" });
      y += 3.5;
      doc.setDrawColor(...PRIMARY);
      doc.setLineWidth(0.8);
      doc.line(W / 2 - 14, y, W / 2 + 14, y);
      y += 2.5;
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.15);
      doc.line(M, y, W - M, y);
      y += 3;
      const bodyPadV = Math.max(0.25, Math.min(1.2, bodyFS * 0.13));
      const headFS = bodyFS + 0.5;
      const headPadV = Math.max(0.35, Math.min(2, headFS * 0.2));
      const toRow = (l, i) => {
        const fill = i % 2 === 0 ? ALT2 : WHITE;
        const CS = { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: fill };
        const dashCell = (v) => {
          const c = ncDash(v);
          return __spreadProps(__spreadValues({}, c), { styles: __spreadValues(__spreadValues({}, CS), c.styles) });
        };
        return [
          { content: l.accountCode || "", styles: __spreadProps(__spreadValues({}, CS), { halign: "center", fontStyle: "bold", textColor: NAVY }) },
          { content: l.accountName || "", styles: __spreadValues({}, CS) },
          dashCell(l.initialDebit),
          dashCell(l.initialCredit),
          dashCell(l.debit),
          dashCell(l.credit),
          dashCell(l.finalDebit),
          dashCell(l.finalCredit)
        ];
      };
      const totRow = (label, vals, fill, textCol = DARK) => [
        { content: label, colSpan: 2, styles: { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: fill, fontStyle: "bold", textColor: textCol } },
        ...vals.map((v) => ({ content: v > 0 ? fmt0(v) : "\u2014", styles: { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: fill, fontStyle: "bold", halign: "right", textColor: v > 0 ? textCol : MUTED } }))
      ];
      const body = lines.map(toRow);
      body.push(totRow("Totaux comptes de bilan", [n(bilanTotals?.initD), n(bilanTotals?.initC), n(bilanTotals?.mvtD), n(bilanTotals?.mvtC), n(bilanTotals?.finD), n(bilanTotals?.finC)], SLATE_BG));
      body.push(totRow("Totaux comptes de gestion", [n(gestionTotals?.initD), n(gestionTotals?.initC), n(gestionTotals?.mvtD), n(gestionTotals?.mvtC), n(gestionTotals?.finD), n(gestionTotals?.finC)], SLATE_BG));
      body.push(totRow("TOTAUX DE LA BALANCE", [n(grandTotals?.initD), n(grandTotals?.initC), n(grandTotals?.mvtD), n(grandTotals?.mvtC), n(grandTotals?.finD), n(grandTotals?.finC)], equilibre ? SUCCESS_BG : DANGER_BG, equilibre ? SUCCESS_DARK : DANGER_DARK));
      const H = __spreadProps(__spreadValues({}, HEAD), { fontSize: headFS, cellPadding: headPadV, fillColor: SLATE_BG, textColor: NAVY });
      const AC = __spreadProps(__spreadValues({}, H), { fillColor: NAVY, textColor: WHITE });
      autoTable(doc, {
        startY: y,
        head: [
          [
            { content: "N\xB0Compte", rowSpan: 2, styles: __spreadProps(__spreadValues({}, H), { valign: "middle" }) },
            { content: "Libell\xE9 du Compte", rowSpan: 2, styles: __spreadProps(__spreadValues({}, H), { halign: "left", valign: "middle" }) },
            { content: "Soldes Initiaux", colSpan: 2, styles: __spreadProps(__spreadValues({}, AC), { halign: "center" }) },
            { content: "Mouvements P\xE9riode", colSpan: 2, styles: __spreadProps(__spreadValues({}, AC), { halign: "center" }) },
            { content: "Soldes Finaux", colSpan: 2, styles: __spreadProps(__spreadValues({}, AC), { halign: "center" }) }
          ],
          [
            { content: "D\xE9bit", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
            { content: "Cr\xE9dit", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
            { content: "D\xE9bit", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
            { content: "Cr\xE9dit", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
            { content: "D\xE9biteur", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
            { content: "Cr\xE9diteur", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) }
          ]
        ],
        body,
        styles: { fontSize: bodyFS, cellPadding: bodyPadV, textColor: DARK, lineColor: [180, 180, 180], lineWidth: 0.1 },
        margin: { left: M, right: M, bottom: 14 },
        tableLineWidth: 0.3,
        tableLineColor: [148, 163, 184],
        columnStyles: {
          0: { cellWidth: 18, halign: "center" },
          1: { cellWidth: 95 },
          2: { cellWidth: 27, halign: "right" },
          3: { cellWidth: 27, halign: "right" },
          4: { cellWidth: 27, halign: "right" },
          5: { cellWidth: 27, halign: "right" },
          6: { cellWidth: 27, halign: "right" },
          7: { cellWidth: 27, halign: "right" }
        }
      });
      const lastY2 = doc.lastAutoTable?.finalY ?? y;
      const msg = equilibre ? `BALANCE \xC9QUILIBR\xC9E   \u2014   les totaux nets de bilan et de gestion s'\xE9quilibrent` : `D\xC9S\xC9QUILIBRE D\xC9TECT\xC9   \u2014   les totaux nets de bilan et gestion ne s'\xE9quilibrent pas`;
      const statusCol = equilibre ? SUCCESS : DANGER;
      const statusDark = equilibre ? SUCCESS_DARK : DANGER_DARK;
      const msgFS = Math.max(7, bodyFS + 0.5);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(msgFS);
      const dotR = 1.3, dotGap = 3, padX = 5, padY = 2.2;
      const textW = doc.getTextWidth(msg);
      const boxW = dotR * 2 + dotGap + textW + padX * 2;
      const boxH = msgFS * 0.3527 * 1.25 + padY * 2;
      const boxX = W / 2 - boxW / 2;
      const boxY = lastY2 + 5;
      doc.setFillColor(...equilibre ? SUCCESS_BG : DANGER_BG);
      doc.setDrawColor(...statusCol);
      doc.setLineWidth(0.35);
      doc.roundedRect(boxX, boxY, boxW, boxH, 1.3, 1.3, "FD");
      const midY = boxY + boxH / 2;
      doc.setFillColor(...statusCol);
      doc.circle(boxX + padX + dotR, midY, dotR, "F");
      doc.setTextColor(...statusDark);
      doc.text(msg, boxX + padX + dotR * 2 + dotGap, midY + msgFS * 0.35 * 0.3527, { align: "left" });
      addFooter(doc, "Balance G\xE9n\xE9rale 6 Colonnes");
      return { doc, bottomGap: PAGE_H - (boxY + boxH) };
    };
    const CANDIDATES = [9, 8.5, 8, 7.5, 7, 6.5, 6];
    const MIN_BOTTOM_GAP = 16;
    let result = build(CANDIDATES[CANDIDATES.length - 1]);
    for (const fs of CANDIDATES) {
      const r = build(fs);
      const pages = r.doc.internal.pages.length - 1;
      result = r;
      if (pages <= 1 && r.bottomGap >= MIN_BOTTOM_GAP)
        break;
    }
    result.doc.save(`Balance_6_Cols_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`);
  }
  // ─────────────────────────────────────────────────────────
  // GRAND LIVRE
  // ─────────────────────────────────────────────────────────
  exportGrandLivre(data, dateFrom, dateTo, companyName) {
    const doc = new E({ orientation: "portrait", unit: "mm", format: "a4" });
    let startY = drawPageHeader(doc, "Grand Livre", `P\xE9riode du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, companyName);
    for (const account of data) {
      autoTable(doc, {
        startY,
        body: [secRow(`${account.accountCode}  \u2014  ${account.accountName}`, 7)],
        styles: __spreadProps(__spreadValues({}, BASE), { cellPadding: 3 }),
        margin: { left: 10, right: 10, bottom: 14 },
        theme: "plain",
        tableLineWidth: 0
      });
      startY = lastY(doc);
      const body = account.lines.map((line) => [
        line.date ? dateStr(line.date) : "",
        line.moveRef || "",
        { content: line.journalCode || "", styles: { halign: "center" } },
        line.label || "",
        ncDash(line.debit),
        ncDash(line.credit),
        ncDash(line.balance)
      ]);
      body.push(subRow([
        `Total ${account.accountCode}`,
        "",
        "",
        "",
        nc2(account.totalDebit),
        nc2(account.totalCredit),
        nc2(account.finalBalance)
      ]));
      autoTable(doc, baseOpts(startY, {
        head: [["Date", "N\xB0 Pi\xE8ce", "Journal", "Libell\xE9", "D\xE9bit", "Cr\xE9dit", "Solde"]],
        body,
        columnStyles: {
          0: { cellWidth: 20 },
          1: { cellWidth: 26 },
          2: { cellWidth: 15, halign: "center" },
          3: { cellWidth: 65 },
          4: { cellWidth: 22, halign: "right" },
          5: { cellWidth: 22, halign: "right" },
          6: { cellWidth: 22, halign: "right" }
        }
      }));
      startY = lastY(doc) + 5;
      if (startY > 258) {
        doc.addPage();
        startY = 18;
      }
    }
    addFooter(doc, "Grand Livre");
    doc.save(`Grand_Livre_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`);
  }
  // ─────────────────────────────────────────────────────────
  // BILAN OHADA
  // ─────────────────────────────────────────────────────────
  exportBilan(actifRows, passifRows, totalActif, totalPassif, dateTo, companyName) {
    const empty = { ref: "", label: "", compte: "", brut: 0, amort: 0, net: 0, netPrev: 0, isHeader: false, isEmpty: true, isTotal: false, isGrandTotal: false };
    const actifBody = actifRows.filter((r) => r?.ref !== "BZ_ACTIF");
    const passifBody = passifRows.filter((r) => r?.ref !== "BZ_PASSIF");
    const actifFinal = actifRows.find((r) => r?.ref === "BZ_ACTIF") ?? empty;
    const passifFinal = passifRows.find((r) => r?.ref === "BZ_PASSIF") ?? empty;
    const maxLen = Math.max(actifBody.length, passifBody.length);
    const balanced = Math.abs(n(totalActif) - n(totalPassif)) <= 1;
    const build = (bodyFS) => {
      const doc = new E({ orientation: "landscape", unit: "mm", format: "a4" });
      const W = doc.internal.pageSize.width;
      const PAGE_H = doc.internal.pageSize.height;
      const M = 10;
      let y = 12;
      doc.setFont("times", "bold");
      doc.setFontSize(13);
      doc.setTextColor(...NAVY);
      doc.text(`BILAN AU ${dateStr(dateTo)} N`, W / 2, y, { align: "center" });
      y += 4;
      if (companyName) {
        doc.setFont("times", "bold");
        doc.setFontSize(10.5);
        doc.setTextColor(...DARK);
        doc.text(companyName.toUpperCase(), W / 2, y, { align: "center" });
        y += 3.3;
      }
      doc.setFont("times", "italic");
      doc.setFontSize(8.5);
      doc.setTextColor(...MUTED);
      doc.text(`Exercice du 01/01/${String((/* @__PURE__ */ new Date(dateTo + "T00:00:00")).getFullYear())} au ${dateStr(dateTo)}  |  Dur\xE9e (en mois) : 12`, W / 2, y, { align: "center" });
      y += 3.5;
      doc.setDrawColor(...PRIMARY);
      doc.setLineWidth(0.8);
      doc.line(W / 2 - 14, y, W / 2 + 14, y);
      y += 2.5;
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.15);
      doc.line(M, y, W - M, y);
      y += 3;
      const bodyPadV = Math.max(0.25, Math.min(1.2, bodyFS * 0.13));
      const headFS = bodyFS + 0.5;
      const headPadV = Math.max(0.35, Math.min(2, headFS * 0.2));
      const headSmallFS = Math.max(5, headFS - 1);
      const CS = { fontSize: bodyFS, cellPadding: { top: bodyPadV, right: 2, bottom: bodyPadV, left: 2 }, textColor: DARK, lineColor: [180, 180, 180], lineWidth: 0.1 };
      const padLeft = (r, isT) => r && r.length >= 3 && !isT ? 6 : r && r.length === 2 && !isT ? 4 : 1;
      const refCell = (r, fill, lc, lw) => ({ content: r || "", styles: __spreadProps(__spreadValues({}, CS), { fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: "bold", halign: "center", cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 } }) });
      const lblCell = (lbl, r, isT, bold, fill, lc, lw) => ({ content: lbl || "", styles: __spreadProps(__spreadValues({}, CS), { fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: bold ? "bold" : "normal", halign: "left", cellPadding: { top: 1, right: 1, bottom: 1, left: padLeft(r, isT) } }) });
      const cpteCell = (compte, fill, lc, lw) => ({ content: compte || "", styles: __spreadProps(__spreadValues({}, CS), { fontSize: Math.max(5, bodyFS - 1.5), fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: "normal", halign: "center", textColor: MUTED }) });
      const numCell = (v, bold, fill, lc, lw) => n(v) !== 0 || bold ? { content: n(v) !== 0 ? fmt0(n(v)) : "", styles: __spreadProps(__spreadValues({}, CS), { fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: bold ? "bold" : "normal", halign: "right", cellPadding: { top: 1, right: 2, bottom: 1, left: 1 } }) } : { content: "", styles: __spreadProps(__spreadValues({}, CS), { fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: "normal", halign: "right" }) };
      const sideRow = (a, p, fillA, fillP, lineColA, lineColP, lineWA, lineWP, boldA, boldP) => [
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
        numCell(p.netPrev, false, fillP, lineColP, lineWP)
      ];
      const body = [];
      for (let i = 0; i < maxLen; i++) {
        const a = actifBody[i] || empty;
        const p = passifBody[i] || empty;
        const isBoldA = !!a.isTotal || !!a.isGrandTotal, isBoldP = !!p.isTotal || !!p.isGrandTotal;
        const fillA = isBoldA ? SLATE_BG : i % 2 === 0 ? ALT2 : WHITE;
        const fillP = isBoldP ? SLATE_BG : i % 2 === 0 ? ALT2 : WHITE;
        body.push(sideRow(a, p, fillA, fillP, [180, 180, 180], [180, 180, 180], 0.1, 0.1, isBoldA, isBoldP));
      }
      body.push(sideRow(actifFinal, passifFinal, SUCCESS_BG, SUCCESS_BG, SUCCESS, SUCCESS, 0.35, 0.35, true, true));
      const H = __spreadProps(__spreadValues({}, HEAD), { fontSize: headFS, cellPadding: headPadV, fillColor: SLATE_BG, textColor: NAVY });
      const AC = __spreadProps(__spreadValues({}, H), { fillColor: NAVY, textColor: WHITE });
      autoTable(doc, {
        startY: y,
        head: [
          [
            { content: "ACTIF", colSpan: 7, styles: __spreadProps(__spreadValues({}, AC), { halign: "center", fontStyle: "bold", fontSize: headFS + 0.5 }) },
            { content: "PASSIF", colSpan: 5, styles: __spreadProps(__spreadValues({}, AC), { halign: "center", fontStyle: "bold", fontSize: headFS + 0.5 }) }
          ],
          [
            { content: "REF", styles: __spreadValues({}, H) },
            { content: "D\xE9signation", styles: __spreadProps(__spreadValues({}, H), { halign: "left" }) },
            { content: "Cpte", styles: __spreadProps(__spreadValues({}, H), { fontSize: headSmallFS }) },
            { content: "BRUT", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
            { content: "AMORT.", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
            { content: "NET", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
            { content: "NET N-1", styles: __spreadProps(__spreadValues({}, H), { halign: "right", fontSize: headSmallFS }) },
            { content: "REF", styles: __spreadValues({}, H) },
            { content: "D\xE9signation", styles: __spreadProps(__spreadValues({}, H), { halign: "left" }) },
            { content: "Cpte", styles: __spreadProps(__spreadValues({}, H), { fontSize: headSmallFS }) },
            { content: "NET", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
            { content: "N-1", styles: __spreadProps(__spreadValues({}, H), { halign: "right", fontSize: headSmallFS }) }
          ]
        ],
        body,
        styles: { fontSize: bodyFS, cellPadding: bodyPadV, textColor: DARK, lineColor: [180, 180, 180], lineWidth: 0.1 },
        headStyles: __spreadValues({}, H),
        margin: { left: M, right: M, bottom: 14 },
        tableLineWidth: 0.3,
        tableLineColor: [148, 163, 184],
        columnStyles: {
          0: { cellWidth: 9, halign: "center" },
          1: { cellWidth: 57 },
          2: { cellWidth: 16, halign: "center" },
          3: { cellWidth: 21, halign: "right" },
          4: { cellWidth: 18, halign: "right" },
          5: { cellWidth: 21, halign: "right" },
          6: { cellWidth: 16, halign: "right" },
          7: { cellWidth: 9, halign: "center" },
          8: { cellWidth: 57 },
          9: { cellWidth: 16, halign: "center" },
          10: { cellWidth: 21, halign: "right" },
          11: { cellWidth: 16, halign: "right" }
        }
      });
      const lastY2 = doc.lastAutoTable?.finalY ?? y;
      const msg = balanced ? `BILAN \xC9QUILIBR\xC9   \u2014   TOTAL ACTIF = TOTAL PASSIF = ${fmt0(n(totalActif))} FCFA` : `BILAN D\xC9S\xC9QUILIBR\xC9   \u2014   DIFF\xC9RENCE = ${fmt0(Math.abs(n(totalActif) - n(totalPassif)))} FCFA`;
      const statusCol = balanced ? SUCCESS : DANGER;
      const statusDark = balanced ? SUCCESS_DARK : DANGER_DARK;
      const msgFS = Math.max(7.5, bodyFS + 1.5);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(msgFS);
      const dotR = 1.4, dotGap = 3;
      const textW = doc.getTextWidth(msg);
      const padX = 6, padY = 2.6;
      const contentW = dotR * 2 + dotGap + textW;
      const boxW = contentW + padX * 2;
      const boxH = msgFS * 0.3527 * 1.25 + padY * 2;
      const boxX = W / 2 - boxW / 2;
      const boxY = lastY2 + 5;
      doc.setFillColor(...balanced ? SUCCESS_BG : DANGER_BG);
      doc.setDrawColor(...statusCol);
      doc.setLineWidth(0.35);
      doc.roundedRect(boxX, boxY, boxW, boxH, 1.4, 1.4, "FD");
      const midY = boxY + boxH / 2;
      doc.setFillColor(...statusCol);
      doc.circle(boxX + padX + dotR, midY, dotR, "F");
      doc.setTextColor(...statusDark);
      doc.text(msg, boxX + padX + dotR * 2 + dotGap, midY + msgFS * 0.35 * 0.3527, { align: "left" });
      addFooter(doc, "Bilan OHADA");
      return { doc, bottomGap: PAGE_H - (boxY + boxH) };
    };
    const CANDIDATES = [9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5, 4];
    const MIN_BOTTOM_GAP = 22;
    let result = build(CANDIDATES[CANDIDATES.length - 1]);
    for (const fs of CANDIDATES) {
      const r = build(fs);
      const pages = r.doc.internal.pages.length - 1;
      result = r;
      if (pages <= 1 && r.bottomGap >= MIN_BOTTOM_GAP)
        break;
    }
    result.doc.save(`Bilan_OHADA_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`);
  }
  // ─────────────────────────────────────────────────────────
  // COMPTE DE RÉSULTAT  (SYSCOHADA Révisé — codes TA→XI)
  // ─────────────────────────────────────────────────────────
  // Même système visuel que le Bilan OHADA (exportBilan ci-dessus) : en-tête
  // compact centré, bandeau d'en-têtes en marque (navy), sous-totaux en gris
  // ardoise, résultat final en vert/rouge selon bénéfice/perte, et calibrage
  // dynamique de la police pour garantir UNE SEULE page quel que soit le
  // nombre de rubriques (~40 lignes).
  exportCompteResultat(lines, dateFrom, dateTo, companyName) {
    const COMPTES = {
      "TA": "701",
      "RA": "601",
      "RB": "6031",
      "XA": "",
      "TB": "702-704",
      "TC": "705-706",
      "TD": "707",
      "XB": "",
      "TE": "73",
      "TF": "72",
      "TG": "71",
      "TH": "75",
      "TI": "781",
      "RC": "602",
      "RD": "6032",
      "RE": "604-605-608",
      "RF": "6033",
      "RG": "61",
      "RH": "62-63",
      "RI": "64",
      "RJ": "65",
      "XC": "",
      "RK": "66",
      "XD": "",
      "TJ": "791-798",
      "RL": "681",
      "XE": "",
      "TK": "77",
      "TL": "797",
      "TM": "787",
      "RM": "67",
      "RN": "697",
      "XF": "",
      "XG": "",
      "TN": "82",
      "TO": "84-86-88",
      "RO": "81",
      "RP": "83-85",
      "XH": "",
      "RS": "89",
      "XI": ""
    };
    const GREEN = [21, 128, 61];
    const RED_C = [185, 28, 28];
    const xiLine = lines.find((l) => l.code === "XI");
    const resultatPositif = n(xiLine?.current ?? 0) >= 0;
    const build = (bodyFS) => {
      const doc = new E({ orientation: "portrait", unit: "mm", format: "a4" });
      const W = doc.internal.pageSize.width;
      const PAGE_H = doc.internal.pageSize.height;
      const M = 10;
      let y = 12;
      doc.setFont("times", "bold");
      doc.setFontSize(13);
      doc.setTextColor(...NAVY);
      doc.text("COMPTE DE R\xC9SULTAT", W / 2, y, { align: "center" });
      y += 4;
      doc.setFont("times", "italic");
      doc.setFontSize(9);
      doc.setTextColor(...MUTED);
      doc.text("SYSCOHADA R\xE9vis\xE9", W / 2, y, { align: "center" });
      y += 3.3;
      if (companyName) {
        doc.setFont("times", "bold");
        doc.setFontSize(10.5);
        doc.setTextColor(...DARK);
        doc.text(companyName.toUpperCase(), W / 2, y, { align: "center" });
        y += 3.3;
      }
      doc.setFont("times", "italic");
      doc.setFontSize(8.5);
      doc.setTextColor(...MUTED);
      doc.text(`P\xE9riode du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, W / 2, y, { align: "center" });
      y += 3.5;
      doc.setDrawColor(...PRIMARY);
      doc.setLineWidth(0.8);
      doc.line(W / 2 - 14, y, W / 2 + 14, y);
      y += 2.5;
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.15);
      doc.line(M, y, W - M, y);
      y += 3;
      const bodyPadV = Math.max(0.25, Math.min(1.2, bodyFS * 0.13));
      const headFS = bodyFS + 0.5;
      const headPadV = Math.max(0.35, Math.min(2, headFS * 0.2));
      const CS = { fontSize: bodyFS, cellPadding: bodyPadV };
      const body = lines.map((l, i) => {
        const isFinal = l.code === "XI";
        const isTot = !!l.isTotal && !isFinal;
        const fill = isFinal ? resultatPositif ? SUCCESS_BG : DANGER_BG : isTot ? SLATE_BG : i % 2 === 0 ? ALT2 : WHITE;
        const fs = isTot || isFinal ? "bold" : "normal";
        const lc = isFinal ? resultatPositif ? SUCCESS : DANGER : [180, 180, 180];
        const lw = isFinal ? 0.35 : 0.1;
        const compte = COMPTES[l.code] ?? "";
        const sign = l.sign || "";
        const signColor = sign === "+" ? GREEN : sign === "-" ? RED_C : MUTED;
        const amountN = n(l.current);
        const amountN1 = n(l.previous ?? l.prev ?? 0);
        return [
          { content: l.code || "", styles: __spreadProps(__spreadValues({}, CS), { fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: fs, halign: "center", textColor: DARK }) },
          { content: l.label || "", styles: __spreadProps(__spreadValues({}, CS), { fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: fs, textColor: DARK }) },
          { content: compte, styles: __spreadProps(__spreadValues({}, CS), { fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: "normal", halign: "center", textColor: MUTED, fontSize: Math.max(5.5, bodyFS - 1) }) },
          { content: sign, styles: __spreadProps(__spreadValues({}, CS), { fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: "bold", halign: "center", textColor: signColor }) },
          amountN > 0 || (isTot || isFinal) ? { content: fmt0(amountN), styles: __spreadProps(__spreadValues({}, CS), { fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: fs, halign: "right", textColor: DARK, overflow: "hidden" }) } : { content: "\u2014", styles: __spreadProps(__spreadValues({}, CS), { fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: fs, halign: "right", textColor: MUTED, overflow: "hidden" }) },
          amountN1 > 0 ? { content: fmt0(amountN1), styles: __spreadProps(__spreadValues({}, CS), { fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: "normal", halign: "right", textColor: MUTED, overflow: "hidden" }) } : { content: "\u2014", styles: __spreadProps(__spreadValues({}, CS), { fillColor: fill, lineColor: lc, lineWidth: lw, fontStyle: "normal", halign: "right", textColor: [200, 200, 200], overflow: "hidden" }) }
        ];
      });
      const H = __spreadProps(__spreadValues({}, HEAD), { fontSize: headFS, cellPadding: headPadV, fillColor: NAVY, textColor: WHITE });
      autoTable(doc, {
        startY: y,
        head: [[
          { content: "REF", styles: __spreadValues({}, H) },
          { content: "LIBELL\xC9", styles: __spreadProps(__spreadValues({}, H), { halign: "left" }) },
          { content: "CPT", styles: __spreadProps(__spreadValues({}, H), { fontSize: Math.max(5.5, headFS - 1) }) },
          { content: "SGN", styles: __spreadValues({}, H) },
          { content: "NET N", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
          { content: "NET N-1", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) }
        ]],
        body,
        styles: { fontSize: bodyFS, cellPadding: bodyPadV, textColor: DARK, lineColor: [180, 180, 180], lineWidth: 0.1 },
        headStyles: __spreadValues({}, H),
        margin: { left: M, right: M, bottom: 14 },
        tableLineWidth: 0.3,
        tableLineColor: [148, 163, 184],
        columnStyles: {
          0: { cellWidth: 12, halign: "center" },
          1: { cellWidth: 86 },
          2: { cellWidth: 12, halign: "center" },
          3: { cellWidth: 14, halign: "center" },
          4: { cellWidth: 33, halign: "right" },
          5: { cellWidth: 33, halign: "right" }
        }
      });
      const lastY2 = doc.lastAutoTable?.finalY ?? y;
      addFooter(doc, "Compte de R\xE9sultat SYSCOHADA R\xE9vis\xE9");
      return { doc, bottomGap: PAGE_H - lastY2 };
    };
    const CANDIDATES = [9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5, 4];
    const MIN_BOTTOM_GAP = 16;
    let result = build(CANDIDATES[CANDIDATES.length - 1]);
    for (const fs of CANDIDATES) {
      const r = build(fs);
      const pages = r.doc.internal.pages.length - 1;
      result = r;
      if (pages <= 1 && r.bottomGap >= MIN_BOTTOM_GAP)
        break;
    }
    result.doc.save(`Compte_de_Resultat_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`);
  }
  // ─────────────────────────────────────────────────────────
  // BALANCE DES TIERS 4 COLONNES  (portrait, groupes Clients/Fournisseurs)
  // Même style "état financier" que le Bilan / Compte de Résultat. Pas de
  // notion d'équilibre ici (clients et fournisseurs n'ont aucune raison de
  // se compenser) — pas de badge, juste un rendu propre par groupe.
  // ─────────────────────────────────────────────────────────
  exportPartnerBalance4(lines, dateFrom, dateTo, companyName) {
    const customers = lines.filter((l) => l.type === "customer");
    const suppliers = lines.filter((l) => l.type === "supplier");
    const groups = [
      { label: "CLIENTS", data: customers },
      { label: "FOURNISSEURS", data: suppliers }
    ];
    const build = (bodyFS) => {
      const doc = new E({ orientation: "portrait", unit: "mm", format: "a4" });
      const W = doc.internal.pageSize.width;
      const PAGE_H = doc.internal.pageSize.height;
      const M = 10;
      let y = 12;
      doc.setFont("times", "bold");
      doc.setFontSize(13);
      doc.setTextColor(...NAVY);
      doc.text("BALANCE DES TIERS \xC0 4 COLONNES", W / 2, y, { align: "center" });
      y += 4;
      if (companyName) {
        doc.setFont("times", "bold");
        doc.setFontSize(10.5);
        doc.setTextColor(...DARK);
        doc.text(companyName.toUpperCase(), W / 2, y, { align: "center" });
        y += 3.3;
      }
      doc.setFont("times", "italic");
      doc.setFontSize(8.5);
      doc.setTextColor(...MUTED);
      doc.text(`P\xE9riode du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, W / 2, y, { align: "center" });
      y += 3.5;
      doc.setDrawColor(...PRIMARY);
      doc.setLineWidth(0.8);
      doc.line(W / 2 - 14, y, W / 2 + 14, y);
      y += 2.5;
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.15);
      doc.line(M, y, W - M, y);
      y += 5;
      const bodyPadV = Math.max(0.25, Math.min(1.2, bodyFS * 0.13));
      const headFS = bodyFS + 0.5;
      const headPadV = Math.max(0.35, Math.min(2, headFS * 0.2));
      const H = __spreadProps(__spreadValues({}, HEAD), { fontSize: headFS, cellPadding: headPadV, fillColor: SLATE_BG, textColor: NAVY });
      const AC = __spreadProps(__spreadValues({}, H), { fillColor: NAVY, textColor: WHITE });
      const toRow = (l, i) => {
        const fill = i % 2 === 0 ? ALT2 : WHITE;
        const CS = { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: fill };
        const dashCell = (v) => {
          const c = ncDash(v);
          return __spreadProps(__spreadValues({}, c), { styles: __spreadValues(__spreadValues({}, CS), c.styles) });
        };
        return [
          { content: l.accountNumber || "", styles: __spreadProps(__spreadValues({}, CS), { halign: "center", fontStyle: "bold", textColor: NAVY }) },
          { content: l.partnerName || "", styles: __spreadValues({}, CS) },
          dashCell(l.debit),
          dashCell(l.credit),
          dashCell(l.finalDebit),
          dashCell(l.finalCredit)
        ];
      };
      for (const grp of groups) {
        if (grp.data.length === 0)
          continue;
        if (y > PAGE_H - 40) {
          doc.addPage();
          y = 15;
        }
        doc.setFillColor(...NAVY);
        doc.rect(M, y, W - 2 * M, 6, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.5);
        doc.setTextColor(...WHITE);
        doc.text(grp.label, M + 3, y + 4.2);
        y += 6;
        const gD = grp.data.reduce((s, l) => s + n(l.debit), 0);
        const gC = grp.data.reduce((s, l) => s + n(l.credit), 0);
        const gFD = grp.data.reduce((s, l) => s + n(l.finalDebit), 0);
        const gFC = grp.data.reduce((s, l) => s + n(l.finalCredit), 0);
        const body = grp.data.map(toRow);
        body.push([
          { content: "Total " + grp.label, colSpan: 2, styles: { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: SLATE_BG, fontStyle: "bold", textColor: NAVY } },
          ...[gD, gC, gFD, gFC].map((v) => ({ content: v > 0 ? fmt0(v) : "\u2014", styles: { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: SLATE_BG, fontStyle: "bold", halign: "right", textColor: v > 0 ? NAVY : MUTED } }))
        ]);
        autoTable(doc, {
          startY: y,
          head: [
            [
              { content: "N\xB0 Compte", rowSpan: 2, styles: __spreadProps(__spreadValues({}, H), { valign: "middle" }) },
              { content: "Nom du Tiers", rowSpan: 2, styles: __spreadProps(__spreadValues({}, H), { halign: "left", valign: "middle" }) },
              { content: "Mouvements P\xE9riode", colSpan: 2, styles: __spreadProps(__spreadValues({}, AC), { halign: "center" }) },
              { content: "Soldes Finaux", colSpan: 2, styles: __spreadProps(__spreadValues({}, AC), { halign: "center" }) }
            ],
            [
              { content: "D\xE9bit", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
              { content: "Cr\xE9dit", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
              { content: "D\xE9biteur", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
              { content: "Cr\xE9diteur", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) }
            ]
          ],
          body,
          styles: { fontSize: bodyFS, cellPadding: bodyPadV, textColor: DARK, lineColor: [180, 180, 180], lineWidth: 0.1 },
          margin: { left: M, right: M, bottom: 14 },
          tableLineWidth: 0.3,
          tableLineColor: [148, 163, 184],
          columnStyles: {
            0: { cellWidth: 20, halign: "center" },
            1: { cellWidth: 62 },
            2: { cellWidth: 27, halign: "right" },
            3: { cellWidth: 27, halign: "right" },
            4: { cellWidth: 27, halign: "right" },
            5: { cellWidth: 27, halign: "right" }
          }
        });
        y = (doc.lastAutoTable?.finalY ?? y) + 7;
      }
      addFooter(doc, "Balance des Tiers 4 Colonnes");
      return doc;
    };
    const CANDIDATES = [9, 8.5, 8, 7.5, 7, 6.5, 6];
    let finalDoc = build(CANDIDATES[CANDIDATES.length - 1]);
    for (const fs of CANDIDATES) {
      finalDoc = build(fs);
      if (finalDoc.internal.pages.length - 1 <= 1)
        break;
    }
    finalDoc.save("Balance_Tiers_4_Cols_" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) + ".pdf");
  }
  // ─────────────────────────────────────────────────────────
  // BALANCE DES TIERS 6 COLONNES  (paysage, groupes Clients/Fournisseurs)
  // Même style que la version 4 colonnes ci-dessus.
  // ─────────────────────────────────────────────────────────
  exportPartnerBalance6(lines, dateFrom, dateTo, companyName) {
    const customers = lines.filter((l) => l.type === "customer");
    const suppliers = lines.filter((l) => l.type === "supplier");
    const groups = [
      { label: "CLIENTS", data: customers },
      { label: "FOURNISSEURS", data: suppliers }
    ];
    const build = (bodyFS) => {
      const doc = new E({ orientation: "landscape", unit: "mm", format: "a4" });
      const W = doc.internal.pageSize.width;
      const PAGE_H = doc.internal.pageSize.height;
      const M = 10;
      let y = 12;
      doc.setFont("times", "bold");
      doc.setFontSize(13);
      doc.setTextColor(...NAVY);
      doc.text("BALANCE DES TIERS \xC0 6 COLONNES", W / 2, y, { align: "center" });
      y += 4;
      if (companyName) {
        doc.setFont("times", "bold");
        doc.setFontSize(10.5);
        doc.setTextColor(...DARK);
        doc.text(companyName.toUpperCase(), W / 2, y, { align: "center" });
        y += 3.3;
      }
      doc.setFont("times", "italic");
      doc.setFontSize(8.5);
      doc.setTextColor(...MUTED);
      doc.text(`P\xE9riode du ${dateStr(dateFrom)} au ${dateStr(dateTo)}`, W / 2, y, { align: "center" });
      y += 3.5;
      doc.setDrawColor(...PRIMARY);
      doc.setLineWidth(0.8);
      doc.line(W / 2 - 14, y, W / 2 + 14, y);
      y += 2.5;
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.15);
      doc.line(M, y, W - M, y);
      y += 5;
      const bodyPadV = Math.max(0.25, Math.min(1.2, bodyFS * 0.13));
      const headFS = bodyFS + 0.5;
      const headPadV = Math.max(0.35, Math.min(2, headFS * 0.2));
      const H = __spreadProps(__spreadValues({}, HEAD), { fontSize: headFS, cellPadding: headPadV, fillColor: SLATE_BG, textColor: NAVY });
      const AC = __spreadProps(__spreadValues({}, H), { fillColor: NAVY, textColor: WHITE });
      const toRow = (l, i) => {
        const fill = i % 2 === 0 ? ALT2 : WHITE;
        const CS = { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: fill };
        const dashCell = (v) => {
          const c = ncDash(v);
          return __spreadProps(__spreadValues({}, c), { styles: __spreadValues(__spreadValues({}, CS), c.styles) });
        };
        return [
          { content: l.accountNumber || "", styles: __spreadProps(__spreadValues({}, CS), { halign: "center", fontStyle: "bold", textColor: NAVY }) },
          { content: l.partnerName || "", styles: __spreadValues({}, CS) },
          dashCell(l.initialDebit),
          dashCell(l.initialCredit),
          dashCell(l.debit),
          dashCell(l.credit),
          dashCell(l.finalDebit),
          dashCell(l.finalCredit)
        ];
      };
      for (const grp of groups) {
        if (grp.data.length === 0)
          continue;
        if (y > PAGE_H - 40) {
          doc.addPage();
          y = 15;
        }
        doc.setFillColor(...NAVY);
        doc.rect(M, y, W - 2 * M, 6, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.5);
        doc.setTextColor(...WHITE);
        doc.text(grp.label, M + 3, y + 4.2);
        y += 6;
        const sum = (key) => grp.data.reduce((s, l) => s + n(l[key]), 0);
        const totals = [sum("initialDebit"), sum("initialCredit"), sum("debit"), sum("credit"), sum("finalDebit"), sum("finalCredit")];
        const body = grp.data.map(toRow);
        body.push([
          { content: "Total " + grp.label, colSpan: 2, styles: { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: SLATE_BG, fontStyle: "bold", textColor: NAVY } },
          ...totals.map((v) => ({ content: v > 0 ? fmt0(v) : "\u2014", styles: { fontSize: bodyFS, cellPadding: bodyPadV, fillColor: SLATE_BG, fontStyle: "bold", halign: "right", textColor: v > 0 ? NAVY : MUTED } }))
        ]);
        autoTable(doc, {
          startY: y,
          head: [
            [
              { content: "N\xB0 Compte", rowSpan: 2, styles: __spreadProps(__spreadValues({}, H), { valign: "middle" }) },
              { content: "Nom du Tiers", rowSpan: 2, styles: __spreadProps(__spreadValues({}, H), { halign: "left", valign: "middle" }) },
              { content: "Solde Initial", colSpan: 2, styles: __spreadProps(__spreadValues({}, AC), { halign: "center" }) },
              { content: "Mouvements P\xE9riode", colSpan: 2, styles: __spreadProps(__spreadValues({}, AC), { halign: "center" }) },
              { content: "Solde Final", colSpan: 2, styles: __spreadProps(__spreadValues({}, AC), { halign: "center" }) }
            ],
            [
              { content: "D\xE9biteur", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
              { content: "Cr\xE9diteur", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
              { content: "D\xE9bit", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
              { content: "Cr\xE9dit", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
              { content: "D\xE9biteur", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) },
              { content: "Cr\xE9diteur", styles: __spreadProps(__spreadValues({}, H), { halign: "right" }) }
            ]
          ],
          body,
          styles: { fontSize: bodyFS, cellPadding: bodyPadV, textColor: DARK, lineColor: [180, 180, 180], lineWidth: 0.1 },
          margin: { left: M, right: M, bottom: 14 },
          tableLineWidth: 0.3,
          tableLineColor: [148, 163, 184],
          columnStyles: {
            0: { cellWidth: 18, halign: "center" },
            1: { cellWidth: 95 },
            2: { cellWidth: 27, halign: "right" },
            3: { cellWidth: 27, halign: "right" },
            4: { cellWidth: 27, halign: "right" },
            5: { cellWidth: 27, halign: "right" },
            6: { cellWidth: 27, halign: "right" },
            7: { cellWidth: 27, halign: "right" }
          }
        });
        y = (doc.lastAutoTable?.finalY ?? y) + 7;
      }
      addFooter(doc, "Balance des Tiers 6 Colonnes");
      return doc;
    };
    const CANDIDATES = [9, 8.5, 8, 7.5, 7, 6.5, 6];
    let finalDoc = build(CANDIDATES[CANDIDATES.length - 1]);
    for (const fs of CANDIDATES) {
      finalDoc = build(fs);
      if (finalDoc.internal.pages.length - 1 <= 1)
        break;
    }
    finalDoc.save("Balance_Tiers_6_Cols_" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) + ".pdf");
  }
  // ─────────────────────────────────────────────────────────
  // ÉTAT COMMERCIAL
  // ─────────────────────────────────────────────────────────
  exportEtatCommercial(data, companyName) {
    const doc = new E({ orientation: "portrait", unit: "mm", format: "a4" });
    const startY = drawPageHeader(doc, "\xC9tat Commercial \u2014 Statistiques de Ventes", `P\xE9riode du ${dateStr(data.dateFrom)} au ${dateStr(data.dateTo)} \u2014 ${data.totalInvoices} facture(s)`, companyName);
    const body = [];
    for (const client of data.clients) {
      body.push(secRow(`CLIENT : ${client.clientName}${client.clientRef ? "  [" + client.clientRef + "]" : ""}`, 5));
      for (const line of client.lines) {
        body.push([
          line.productCode || "",
          line.productName,
          nc2(line.qty),
          nc2(line.caHT),
          nc2(line.caTTC)
        ]);
      }
      body.push(subRow([`Sous-total ${client.clientName}`, "", nc2(client.totalQty), nc2(client.totalHT), nc2(client.totalTTC)]));
    }
    body.push(gtRow(["TOTAL G\xC9N\xC9RAL", "", nc2(data.grandTotalQty), nc2(data.grandTotalHT), nc2(data.grandTotalTTC)]));
    autoTable(doc, baseOpts(startY, {
      head: [["Code", "D\xE9signation", "Quantit\xE9", "CA HT", "CA TTC"]],
      body,
      columnStyles: {
        0: { cellWidth: 28 },
        1: { cellWidth: 90 },
        2: { cellWidth: 24, halign: "right" },
        3: { cellWidth: 28, halign: "right" },
        4: { cellWidth: 28, halign: "right" }
      }
    }));
    addFooter(doc, "\xC9tat Commercial \u2014 Statistiques de Ventes");
    doc.save(`Etat_Commercial_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`);
  }
  // ─────────────────────────────────────────────────────────
  // RAPPORT COMMERCIAL CONSOLIDÉ
  // ─────────────────────────────────────────────────────────
  exportRapportConsolide(data, companyName) {
    const doc = new E({ orientation: "landscape", unit: "mm", format: "a4" });
    const startY = drawPageHeader(doc, "Rapport Commercial Consolid\xE9", `P\xE9riode du ${dateStr(data.dateFrom)} au ${dateStr(data.dateTo)} \u2014 ${data.totalInvoices} facture(s)`, companyName);
    const body = [];
    for (const client of data.clients) {
      body.push(secRow(`CLIENT : ${client.clientName}${client.clientRef ? "  [" + client.clientRef + "]" : ""}`, 8));
      for (const line of client.lines) {
        const htBrut = n(line.caHT) + n(line.remise);
        const taux = htBrut > 0 ? Math.round(n(line.remise) / htBrut * 1e4) / 100 : 0;
        body.push([
          line.productCode || "",
          line.productName,
          nc2(line.qty),
          nc2(line.prixVente),
          nc2(line.caHT),
          nc2(line.caTTC),
          nc2(line.remise),
          { content: `${taux} %`, styles: { halign: "right" } }
        ]);
      }
      body.push(subRow([
        `Sous-total ${client.clientName}`,
        "",
        nc2(client.totalQty),
        "",
        nc2(client.totalHT),
        nc2(client.totalTTC),
        nc2(client.totalRemise),
        ""
      ]));
    }
    body.push(gtRow([
      "TOTAL G\xC9N\xC9RAL",
      "",
      nc2(data.grandTotalQty),
      "",
      nc2(data.grandTotalHT),
      nc2(data.grandTotalTTC),
      nc2(data.grandTotalRemise),
      ""
    ]));
    autoTable(doc, baseOpts(startY, {
      head: [["Code", "D\xE9signation", "Qt\xE9", "Prix Moy.", "CA HT", "CA TTC", "Remise", "% Rem."]],
      body,
      columnStyles: {
        0: { cellWidth: 22 },
        1: { cellWidth: 66 },
        2: { cellWidth: 20, halign: "right" },
        3: { cellWidth: 24, halign: "right" },
        4: { cellWidth: 28, halign: "right" },
        5: { cellWidth: 28, halign: "right" },
        6: { cellWidth: 24, halign: "right" },
        7: { cellWidth: 20, halign: "right" }
      }
    }));
    addFooter(doc, "Rapport Commercial Consolid\xE9");
    doc.save(`Rapport_Consolide_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`);
  }
  // ─────────────────────────────────────────────────────────
  // RAPPORT DE STOCK VALORISÉ
  // ─────────────────────────────────────────────────────────
  exportStockReport(groups, companyName) {
    const doc = new E({ orientation: "landscape", unit: "mm", format: "a4" });
    const startY = drawPageHeader(doc, "Rapport de Stock Valoris\xE9", `\xC9tat au ${(/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR")}`, companyName);
    const body = [];
    let grandQty = 0;
    let grandVal = 0;
    for (const grp of groups) {
      body.push(secRow(`ENTREP\xD4T : ${grp.warehouseName.toUpperCase()}`, 6));
      for (const r of grp.rows) {
        body.push([
          { content: r.code, styles: { halign: "center", font: "courier" } },
          r.name,
          { content: r.uom, styles: { halign: "center" } },
          { content: r.price > 0 ? fmt0(r.price) : "", styles: { halign: "right" } },
          { content: r.qty > 0 ? fmt2(r.qty) : "0,00", styles: { halign: "right" } },
          { content: fmt0(r.value), styles: { halign: "right" } }
        ]);
      }
      body.push(subRow([
        "",
        `Sous-total ${grp.warehouseName}`,
        "",
        "",
        { content: fmt2(grp.subtotalQty), styles: { halign: "right" } },
        { content: fmt0(grp.subtotalValue), styles: { halign: "right" } }
      ]));
      grandQty += grp.subtotalQty;
      grandVal += grp.subtotalValue;
    }
    body.push(gtRow([
      "",
      "TOTAL G\xC9N\xC9RAL DU STOCK",
      "",
      "",
      { content: fmt2(grandQty), styles: { halign: "right" } },
      { content: fmt0(grandVal), styles: { halign: "right" } }
    ]));
    autoTable(doc, baseOpts(startY, {
      head: [["R\xE9f\xE9rence", "D\xE9signation", "UDM", "P.U. (CMUP)", "Quantit\xE9", "Valeur (FCFA)"]],
      body,
      columnStyles: {
        0: { cellWidth: 26, halign: "center" },
        1: { cellWidth: 105 },
        2: { cellWidth: 16, halign: "center" },
        3: { cellWidth: 30, halign: "right" },
        4: { cellWidth: 30, halign: "right" },
        5: { cellWidth: 38, halign: "right" }
      }
    }));
    addFooter(doc, "Rapport de Stock Valoris\xE9");
    doc.save(`Rapport_Stock_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`);
  }
  exportStockMovements(movements, companyName) {
    const doc = new E({ orientation: "landscape", unit: "mm", format: "a4" });
    const startY = drawPageHeader(doc, "Mouvements de Stock", `Export au ${(/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR")}`, companyName);
    const body = movements.map((m, i) => {
      const artLabel = (m.productCode ? `[${m.productCode}] ` : "") + (m.productName || "");
      return [
        { content: m.dateDone || "\u2014", styles: { halign: "center" } },
        m.pickingRef || "\u2014",
        m.partnerName || "\u2014",
        artLabel,
        m.locationName || "\u2014",
        m.locationDestName || "\u2014",
        { content: m.qtyDone != null ? fmt2(m.qtyDone) : "", styles: { halign: "right" } },
        { content: m.subtotalValue != null ? fmt0(m.subtotalValue) : "", styles: { halign: "right" } }
      ];
    });
    const totalVal = movements.reduce((s, m) => s + n(m.subtotalValue), 0);
    body.push(gtRow(["", "", "", "", "", "TOTAL", "", { content: fmt0(totalVal), styles: { halign: "right" } }]));
    autoTable(doc, baseOpts(startY, {
      head: [["Date", "R\xE9f\xE9rence", "Partenaire", "Article", "De", "Vers", "Quantit\xE9", "Valeur (FCFA)"]],
      body,
      columnStyles: {
        0: { cellWidth: 22, halign: "center" },
        1: { cellWidth: 28 },
        2: { cellWidth: 32 },
        3: { cellWidth: 60 },
        4: { cellWidth: 32 },
        5: { cellWidth: 32 },
        6: { cellWidth: 22, halign: "right" },
        7: { cellWidth: 30, halign: "right" }
      }
    }));
    addFooter(doc, "Mouvements de Stock");
    doc.save(`Mouvements_Stock_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`);
  }
  exportStockAnalysis(data, dateFrom, dateTo, companyName) {
    const doc = new E({ orientation: "landscape", unit: "mm", format: "a4" });
    const startY = drawPageHeader(doc, "Rapport de Stock Analytique", `P\xE9riode : ${dateFrom} \u2192 ${dateTo}`, companyName);
    const body = [];
    for (const wh of data) {
      body.push(secRow(`ENTREP\xD4T : ${wh.warehouseName.toUpperCase()}`, 11));
      for (const l of wh.lines) {
        const art = (l.productCode ? `[${l.productCode}] ` : "") + l.productName;
        body.push([
          art,
          l.uomName || "",
          nc2(l.initialQty),
          nc2(l.inQty),
          nc2(l.outQty),
          nc2(l.finalQty),
          nc0(l.unitCost),
          nc0(l.initialValue),
          nc0(l.inValue),
          nc0(l.outValue),
          nc0(l.finalValue)
        ]);
      }
      body.push(subRow([
        `Total ${wh.warehouseName}`,
        "",
        nc2(wh.totalInitialQty),
        nc2(wh.totalInQty),
        nc2(wh.totalOutQty),
        nc2(wh.totalFinalQty),
        "",
        nc0(wh.totalInitialValue),
        nc0(wh.totalInValue),
        nc0(wh.totalOutValue),
        nc0(wh.totalFinalValue)
      ]));
    }
    autoTable(doc, baseOpts(startY, {
      head: [["Article", "UDM", "Stock init.", "Entr\xE9es", "Sorties", "Stock final", "Co\xFBt U.", "Val. init.", "Val. entr\xE9es", "Val. sorties", "Val. finale"]],
      body,
      columnStyles: {
        0: { cellWidth: 60 },
        1: { cellWidth: 10 },
        2: { cellWidth: 18, halign: "right" },
        3: { cellWidth: 18, halign: "right" },
        4: { cellWidth: 18, halign: "right" },
        5: { cellWidth: 18, halign: "right" },
        6: { cellWidth: 18, halign: "right" },
        7: { cellWidth: 22, halign: "right" },
        8: { cellWidth: 22, halign: "right" },
        9: { cellWidth: 22, halign: "right" },
        10: { cellWidth: 22, halign: "right" }
      }
    }));
    addFooter(doc, "Rapport Analytique de Stock");
    doc.save(`Rapport_Analytique_Stock_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`);
  }
  static {
    this.\u0275fac = function PdfExportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PdfExportService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PdfExportService, factory: _PdfExportService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfExportService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PdfExportService
};
//# sourceMappingURL=chunk-H5LFPJCV.js.map

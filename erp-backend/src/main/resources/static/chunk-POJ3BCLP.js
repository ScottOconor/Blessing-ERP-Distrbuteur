import {
  HrService
} from "./chunk-TCOWJUCH.js";
import {
  CompanyService
} from "./chunk-K42XCUBR.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-4W3TIS2I.js";
import {
  CommonModule,
  Component,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/hr/components/payroll-register/payroll-register.component.ts
var _forTrack0 = ($index, $item) => $item.employeeId;
function PayrollRegisterComponent_div_0_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.catName(c_r3));
  }
}
function PayrollRegisterComponent_div_0_For_29_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fmt(row_r5.amounts[c_r4]));
  }
}
function PayrollRegisterComponent_div_0_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, PayrollRegisterComponent_div_0_For_29_For_6_Template, 2, 1, "td", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const r_r6 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.matricule);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.employeeName);
    \u0275\u0275advance();
    \u0275\u0275repeater(r_r6.categoryCodes);
  }
}
function PayrollRegisterComponent_div_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 14);
    \u0275\u0275text(2, "Aucun bulletin dans ce lot.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r6 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", r_r6.categoryCodes.length + 2);
  }
}
function PayrollRegisterComponent_div_0_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const r_r6 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fmt(r_r6.totals[c_r7]));
  }
}
function PayrollRegisterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
    \u0275\u0275listener("click", function PayrollRegisterComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Retour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "h1", 6)(8, "span", 4);
    \u0275\u0275text(9, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 7);
    \u0275\u0275listener("click", function PayrollRegisterComponent_div_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275elementStart(12, "span", 4);
    \u0275\u0275text(13, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Imprimer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 8);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 9)(18, "table", 10)(19, "thead")(20, "tr")(21, "th");
    \u0275\u0275text(22, "Matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(25, PayrollRegisterComponent_div_0_For_26_Template, 2, 1, "th", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275repeaterCreate(28, PayrollRegisterComponent_div_0_For_29_Template, 7, 2, "tr", null, _forTrack0);
    \u0275\u0275conditionalCreate(30, PayrollRegisterComponent_div_0_Conditional_30_Template, 3, 1, "tr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "tfoot")(32, "tr", 12)(33, "td", 13);
    \u0275\u0275text(34, "TOTAL G\xC9N\xC9RAL");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(35, PayrollRegisterComponent_div_0_For_36_Template, 2, 1, "td", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const r_r6 = ctx.ngIf;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" Livre de paie \u2014 ", r_r6.runName);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("P\xE9riode : ", r_r6.dateStart, " \u2192 ", r_r6.dateEnd, " \u2014 base de la d\xE9claration CNPS mensuelle (DIPE).");
    \u0275\u0275advance(9);
    \u0275\u0275repeater(r_r6.categoryCodes);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(r_r6.rows);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r6.rows.length === 0 ? 30 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(r_r6.categoryCodes);
  }
}
var PayrollRegisterComponent = class _PayrollRegisterComponent {
  constructor(hr, route, router, companyService) {
    this.hr = hr;
    this.route = route;
    this.router = router;
    this.companyService = companyService;
  }
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.hr.getRunRegister(id).subscribe((r) => this.reg = r);
  }
  catName(code) {
    const i = this.reg?.categoryCodes.indexOf(code) ?? -1;
    return i >= 0 ? this.reg.categoryNames[i] : code;
  }
  fmt(n) {
    return new Intl.NumberFormat("fr-FR").format(Math.round(n || 0));
  }
  back() {
    this.router.navigate(["/hr/runs"]);
  }
  h(s) {
    if (s == null)
      return "";
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  fmtDate(d) {
    if (!d)
      return "";
    try {
      return new Date(d).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
    } catch (e) {
      return d;
    }
  }
  print() {
    if (!this.reg)
      return;
    const r = this.reg;
    const company = this.companyService.getCached();
    const logo = this.companyService.getCachedLogoDataUrl();
    const logoHtml = logo ? `<img src="${logo}" class="co-logo" alt="logo">` : "";
    const rowsHtml = r.rows.map((row) => `
      <tr>
        <td>${this.h(row.matricule)}</td>
        <td class="desc">${this.h(row.employeeName)}</td>
        ${r.categoryCodes.map((c) => `<td class="r">${this.fmt(row.amounts[c])}</td>`).join("")}
      </tr>`).join("");
    const totalsHtml = r.categoryCodes.map((c) => `<td class="r">${this.fmt(r.totals[c])}</td>`).join("");
    const headHtml = r.categoryCodes.map((c) => `<th class="r">${this.h(this.catName(c))}</th>`).join("");
    const printDate = (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
    const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<title>Livre de paie ${this.h(r.runName)}</title>
<style>
* { box-sizing: border-box; margin:0; padding:0; }
body { font-family: Arial, sans-serif; font-size: 9pt; color:#111; background:white; }
.doc { padding: 10mm 12mm; }
.header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom: 2px solid #222; padding-bottom: 3mm; margin-bottom: 6mm; }
.co-logo { max-height: 42px; max-width: 110px; object-fit:contain; display:block; margin-bottom:3px; }
.co-name { font-size: 11.5pt; font-weight:700; color:#017E84; }
.co-info { font-size: 7.5pt; color:#444; }
.title-block { text-align:right; }
.doc-type { font-size: 14pt; font-weight:800; letter-spacing:1px; color:#222; }
.doc-sub { font-size: 9pt; font-weight:600; color:#017E84; margin-top:2px; }
.doc-period { font-size: 8pt; color:#555; margin-top:1px; }
.note { font-size: 7.5pt; color:#777; font-style:italic; margin-bottom: 4mm; }
table { width:100%; border-collapse: collapse; font-size: 8pt; }
thead tr { background:#017E84; color:white; }
th, td { padding: 4px 6px; border-bottom: 1px solid #e0e0e0; }
th { text-align:right; font-weight:600; font-size:7.5pt; }
th:first-child, th:nth-child(2), td:first-child, td:nth-child(2) { text-align:left; }
.desc { max-width: 140px; }
tbody tr:nth-child(even) { background:#f7fafa; }
tfoot td { font-weight:700; background:#e8f5f5; color:#017E84; border-top: 2px solid #017E84; }
.footer-note { font-size: 7pt; color:#999; text-align:center; margin-top: 6mm; border-top: 1px solid #eee; padding-top: 2mm; }
@page { size: A4 landscape; margin: 10mm; }
@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
</style></head><body>
<div class="doc">
  <div class="header">
    <div>
      ${logoHtml}
      <div class="co-name">${this.h(company?.name)}</div>
      ${company?.adresse ? `<div class="co-info">${this.h(company.adresse)}</div>` : ""}
      ${company?.rccm ? `<div class="co-info">RCCM : ${this.h(company.rccm)}</div>` : ""}
      ${company?.nif ? `<div class="co-info">NIF : ${this.h(company.nif)}</div>` : ""}
    </div>
    <div class="title-block">
      <div class="doc-type">LIVRE DE PAIE</div>
      <div class="doc-sub">${this.h(r.runName)}</div>
      <div class="doc-period">P\xE9riode du ${this.fmtDate(r.dateStart)} au ${this.fmtDate(r.dateEnd)}</div>
    </div>
  </div>
  <div class="note">Base de la d\xE9claration CNPS mensuelle (DIPE) \u2014 Date d'impression : ${printDate}</div>
  <table>
    <thead><tr><th>Matricule</th><th>Employ\xE9</th>${headHtml}</tr></thead>
    <tbody>${rowsHtml}</tbody>
    <tfoot><tr><td colspan="2">TOTAL G\xC9N\xC9RAL</td>${totalsHtml}</tr></tfoot>
  </table>
  <div class="footer-note">Document confidentiel \xB7 ${this.h(company?.name)}</div>
</div>
</body></html>`;
    const w = window.open("", "_blank", "width=1200,height=800");
    if (!w)
      return;
    w.document.write(html);
    w.document.close();
    w.focus();
    setTimeout(() => {
      w.print();
      w.onafterprint = () => w.close();
    }, 500);
  }
  static {
    this.\u0275fac = function PayrollRegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PayrollRegisterComponent)(\u0275\u0275directiveInject(HrService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CompanyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PayrollRegisterComponent, selectors: [["app-hr-payroll-register"]], decls: 1, vars: 1, consts: [["class", "hp", 4, "ngIf"], [1, "hp"], [1, "hp-head"], [1, "b", "b-sec", 3, "click"], [1, "material-icons"], [2, "display", "flex", "align-items", "center", "gap", "14px"], [2, "font-size", "1.1rem"], [1, "b", "b-primary", 3, "click"], [1, "muted", 2, "margin-bottom", "12px"], [1, "tbl-wrap"], [1, "tbl", "reg"], [1, "ta-r"], [1, "tot-row"], ["colspan", "2"], [1, "muted", 2, "padding", "16px"]], template: function PayrollRegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PayrollRegisterComponent_div_0_Template, 37, 4, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.reg);
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.hp[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #7C3AED;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.b-primary[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.b-danger[_ngcontent-%COMP%] {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.ta-r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.clk[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.mdl-f[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.fg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in[_ngcontent-%COMP%] {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in[_ngcontent-%COMP%]:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in[_ngcontent-%COMP%]:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fg-2[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */", "\n.reg[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\ntfoot[_ngcontent-%COMP%]   .tot-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 700;\n  background: var(--bg-elevated);\n  border-top: 2px solid var(--border);\n  color: var(--text-primary);\n}\n/*# sourceMappingURL=payroll-register.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PayrollRegisterComponent, [{
    type: Component,
    args: [{ selector: "app-hr-payroll-register", standalone: true, imports: [CommonModule], template: `
    <div class="hp" *ngIf="reg as r">
      <div class="hp-head">
        <button class="b b-sec" (click)="back()"><span class="material-icons">arrow_back</span> Retour</button>
        <div style="display:flex;align-items:center;gap:14px">
          <h1 style="font-size:1.1rem"><span class="material-icons">menu_book</span> Livre de paie \u2014 {{ r.runName }}</h1>
          <button class="b b-primary" (click)="print()"><span class="material-icons">print</span> Imprimer</button>
        </div>
      </div>
      <div class="muted" style="margin-bottom:12px">P\xE9riode : {{ r.dateStart }} \u2192 {{ r.dateEnd }} \u2014 base de la d\xE9claration CNPS mensuelle (DIPE).</div>

      <div class="tbl-wrap">
        <table class="tbl reg">
          <thead>
            <tr>
              <th>Matricule</th><th>Employ\xE9</th>
              @for (c of r.categoryCodes; track c) { <th class="ta-r">{{ catName(c) }}</th> }
            </tr>
          </thead>
          <tbody>
            @for (row of r.rows; track row.employeeId) {
              <tr>
                <td>{{ row.matricule }}</td>
                <td>{{ row.employeeName }}</td>
                @for (c of r.categoryCodes; track c) { <td class="ta-r">{{ fmt(row.amounts[c]) }}</td> }
              </tr>
            }
            @if (r.rows.length === 0) { <tr><td [attr.colspan]="r.categoryCodes.length + 2" class="muted" style="padding:16px">Aucun bulletin dans ce lot.</td></tr> }
          </tbody>
          <tfoot>
            <tr class="tot-row">
              <td colspan="2">TOTAL G\xC9N\xC9RAL</td>
              @for (c of r.categoryCodes; track c) { <td class="ta-r">{{ fmt(r.totals[c]) }}</td> }
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  `, styles: ["/* src/app/modules/hr/components/hr-shared.scss */\n:host {\n  display: block;\n}\n.hp {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head h1 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head h1 .material-icons {\n  color: #7C3AED;\n}\n.muted {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b .material-icons {\n  font-size: 18px;\n}\n.b-primary {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec:hover {\n  background: var(--navbar-hover);\n}\n.b-danger {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl th {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl td {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl tbody tr:hover {\n  background: var(--bg-elevated);\n}\n.ta-r {\n  text-align: right;\n}\n.clk {\n  cursor: pointer;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b {\n  padding: 20px;\n}\n.mdl-f {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2 {\n  grid-column: span 2;\n}\n.fg label {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n  .fg-2 {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */\n", "/* angular:styles/component:scss;ccf11a89dafff96cec3bf95ee7e9019d3e3625c2b3ac67a82412e3e2d43dccbb;/home/automate/Documents/Projets 1.1/Projets/Blessing ERP Distrbuteur/erp-frontend/src/app/modules/hr/components/payroll-register/payroll-register.component.ts */\n.reg {\n  font-size: 0.82rem;\n}\ntfoot .tot-row td {\n  font-weight: 700;\n  background: var(--bg-elevated);\n  border-top: 2px solid var(--border);\n  color: var(--text-primary);\n}\n/*# sourceMappingURL=payroll-register.component.css.map */\n"] }]
  }], () => [{ type: HrService }, { type: ActivatedRoute }, { type: Router }, { type: CompanyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PayrollRegisterComponent, { className: "PayrollRegisterComponent", filePath: "app/modules/hr/components/payroll-register/payroll-register.component.ts", lineNumber: 56 });
})();
export {
  PayrollRegisterComponent
};
//# sourceMappingURL=chunk-POJ3BCLP.js.map

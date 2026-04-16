import {
  ReportService
} from "./chunk-NAOYGS5K.js";
import {
  ExcelExportService,
  PdfExportService
} from "./chunk-MTQHHWC2.js";
import "./chunk-7YWLATDR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-FU5PLMG6.js";
import {
  AccountingService
} from "./chunk-TG7BJABV.js";
import {
  AuthService
} from "./chunk-MBNWDFD7.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/accounting/components/grand-livre/grand-livre.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.accountCode;
function GrandLivreComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "button", 20);
    \u0275\u0275listener("click", function GrandLivreComponent_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportPdf());
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Exporter PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function GrandLivreComponent_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportExcel());
    });
    \u0275\u0275elementStart(6, "span", 4);
    \u0275\u0275text(7, "table_view");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Exporter Excel ");
    \u0275\u0275elementEnd()();
  }
}
function GrandLivreComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r5 = ctx.$implicit;
    \u0275\u0275property("value", acc_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", acc_r5.code, " - ", acc_r5.name);
  }
}
function GrandLivreComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
}
function GrandLivreComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.errorMsg, " ");
  }
}
function GrandLivreComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h2");
    \u0275\u0275text(2, "Grand Livre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("P\xE9riode du ", \u0275\u0275pipeBind2(5, 2, ctx_r2.dateFrom, "dd/MM/yyyy"), " au ", \u0275\u0275pipeBind2(6, 5, ctx_r2.dateTo, "dd/MM/yyyy"));
  }
}
function GrandLivreComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275elementEnd();
  }
}
function GrandLivreComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 4);
    \u0275\u0275text(2, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune \xE9criture trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Aucun mouvement pour la p\xE9riode et les comptes s\xE9lectionn\xE9s.");
    \u0275\u0275elementEnd()();
  }
}
function GrandLivreComponent_Conditional_33_For_2_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 26);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 26);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 26);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 11, line_r6.date, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(line_r6.moveRef);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r6.journalCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r6.debit > 0 ? \u0275\u0275pipeBind2(13, 14, line_r6.debit, "1.2-2") : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r6.credit > 0 ? \u0275\u0275pipeBind2(16, 17, line_r6.credit, "1.2-2") : "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("amount-debit", line_r6.balance >= 0)("amount-credit", line_r6.balance < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 20, line_r6.balance, "1.2-2"), " ");
  }
}
function GrandLivreComponent_Conditional_33_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "table", 25)(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "N\xB0 Pi\xE8ce");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 26);
    \u0275\u0275text(19, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 26);
    \u0275\u0275text(21, "Cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 26);
    \u0275\u0275text(23, "Solde");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275repeaterCreate(25, GrandLivreComponent_Conditional_33_For_2_For_26_Template, 20, 23, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "tfoot")(28, "tr")(29, "td", 27);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const account_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", account_r7.accountCode, " - ", account_r7.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Solde final: ", \u0275\u0275pipeBind2(6, 7, account_r7.finalBalance, "1.2-2"));
    \u0275\u0275advance(20);
    \u0275\u0275repeater(account_r7.lines);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Total ", account_r7.accountCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 10, account_r7.totalDebit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 13, account_r7.totalCredit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 16, account_r7.finalBalance, "1.2-2"));
  }
}
function GrandLivreComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, GrandLivreComponent_Conditional_33_For_2_Template, 40, 19, "div", 23, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.data);
  }
}
var GrandLivreComponent = class _GrandLivreComponent {
  constructor(reportService, accountingService, authService, excelExport, pdfExport) {
    this.reportService = reportService;
    this.accountingService = accountingService;
    this.authService = authService;
    this.excelExport = excelExport;
    this.pdfExport = pdfExport;
    this.accounts = [];
    this.selectedAccountIds = [];
    this.data = [];
    this.loading = false;
    this.generated = false;
    this.errorMsg = "";
    this.today = /* @__PURE__ */ new Date();
    this.dateFrom = "";
    this.dateTo = "";
  }
  ngOnInit() {
    const now = /* @__PURE__ */ new Date();
    this.dateTo = now.toISOString().split("T")[0];
    this.dateFrom = new Date(now.getFullYear(), 0, 1).toISOString().split("T")[0];
    this.accountingService.getAccounts(this.authService.getCompanyId()).subscribe({
      next: (a) => this.accounts = a.filter((x) => !x.deprecated),
      error: () => {
      }
    });
  }
  generate() {
    if (!this.dateFrom || !this.dateTo) {
      this.errorMsg = "S\xE9lectionnez la p\xE9riode";
      return;
    }
    this.loading = true;
    this.generated = false;
    this.errorMsg = "";
    this.reportService.getGrandLivre({
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      companyId: this.authService.getCompanyId(),
      accountIds: this.selectedAccountIds.length > 0 ? this.selectedAccountIds : void 0
    }).subscribe({
      next: (res) => {
        const raw = res.accounts || res || {};
        this.data = Object.values(raw).map((a) => ({
          accountCode: a.accountCode,
          accountName: a.accountName,
          totalDebit: a.totalDebit,
          totalCredit: a.totalCredit,
          finalBalance: a.finalBalance,
          lines: (a.lines || []).map((l) => ({
            date: l.date,
            moveRef: l.pieceName || l.ref || "",
            journalCode: l.journal || "",
            label: l.libelle || l.name || "",
            partner: l.partner || "",
            debit: l.debit,
            credit: l.credit,
            balance: l.balance
          }))
        }));
        this.loading = false;
        this.generated = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || "Erreur lors de la g\xE9n\xE9ration";
      }
    });
  }
  print() {
    window.print();
  }
  exportPdf() {
    this.pdfExport.exportGrandLivre(this.data, this.dateFrom, this.dateTo);
  }
  exportExcel() {
    this.excelExport.exportGrandLivre(this.data, this.dateFrom, this.dateTo);
  }
  onAccountChange(selectedOptions) {
    this.selectedAccountIds = Array.from(selectedOptions).map((o) => +o.value);
  }
  toggleAccount(id) {
    const idx = this.selectedAccountIds.indexOf(id);
    if (idx >= 0)
      this.selectedAccountIds.splice(idx, 1);
    else
      this.selectedAccountIds.push(id);
  }
  isSelected(id) {
    return this.selectedAccountIds.includes(id);
  }
  static {
    this.\u0275fac = function GrandLivreComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GrandLivreComponent)(\u0275\u0275directiveInject(ReportService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ExcelExportService), \u0275\u0275directiveInject(PdfExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GrandLivreComponent, selectors: [["app-grand-livre"]], decls: 34, vars: 8, consts: [["accountSelect", ""], [1, "page-container"], [1, "page-header", "no-print"], [1, "page-title"], [1, "material-icons"], [1, "page-actions", 2, "display", "flex", "gap", "8px"], [1, "filters-bar", "no-print"], [1, "filter-group"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "filter-group", 2, "flex", "1"], ["multiple", "", 1, "form-control", 2, "height", "80px", 3, "change"], [3, "value"], [1, "filter-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner-sm-btn"], [1, "alert-error", "mb-3", "no-print"], [1, "gl-print-header"], [2, "text-align", "center", "padding", "60px"], [1, "empty-state"], [1, "grand-livre-content"], [1, "btn", "btn-outline", 3, "click"], [1, "gl-period"], [1, "spinner"], [1, "grand-livre-account"], [1, "account-header-gl"], [1, "table-erp", 2, "border-radius", "0"], [1, "text-right"], ["colspan", "4", 2, "text-align", "left"]], template: function GrandLivreComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3)(3, "span", 4);
        \u0275\u0275text(4, "menu_book");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Grand Livre ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, GrandLivreComponent_Conditional_6_Template, 9, 0, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "label");
        \u0275\u0275text(10, "Du *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function GrandLivreComponent_Template_input_ngModelChange_11_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 7)(13, "label");
        \u0275\u0275text(14, "Au *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function GrandLivreComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 9)(17, "label");
        \u0275\u0275text(18, "Comptes (optionnel, Ctrl+clic)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "select", 10, 0);
        \u0275\u0275listener("change", function GrandLivreComponent_Template_select_change_19_listener() {
          \u0275\u0275restoreView(_r1);
          const accountSelect_r4 = \u0275\u0275reference(20);
          return \u0275\u0275resetView(ctx.onAccountChange(accountSelect_r4.selectedOptions));
        });
        \u0275\u0275repeaterCreate(21, GrandLivreComponent_For_22_Template, 2, 3, "option", 11, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 12)(24, "button", 13);
        \u0275\u0275listener("click", function GrandLivreComponent_Template_button_click_24_listener() {
          return ctx.generate();
        });
        \u0275\u0275conditionalCreate(25, GrandLivreComponent_Conditional_25_Template, 1, 0, "span", 14);
        \u0275\u0275elementStart(26, "span", 4);
        \u0275\u0275text(27, "play_arrow");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, " G\xE9n\xE9rer ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(29, GrandLivreComponent_Conditional_29_Template, 4, 1, "div", 15);
        \u0275\u0275conditionalCreate(30, GrandLivreComponent_Conditional_30_Template, 7, 8, "div", 16);
        \u0275\u0275conditionalCreate(31, GrandLivreComponent_Conditional_31_Template, 2, 0, "div", 17)(32, GrandLivreComponent_Conditional_32_Template, 7, 0, "div", 18)(33, GrandLivreComponent_Conditional_33_Template, 3, 0, "div", 19);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.generated ? 6 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.accounts);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 25 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.errorMsg ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.generated ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 31 : ctx.generated && ctx.data.length === 0 ? 32 : ctx.generated ? 33 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ["\n.grand-livre-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.account-header-gl[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #714B67,\n      #8e6285);\n  color: white;\n  padding: 10px 16px;\n  font-weight: 600;\n  font-size: 13px;\n  border-radius: 6px 6px 0 0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #721c24;\n  font-size: 13px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.spinner-sm-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.gl-print-header[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.gl-print-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.gl-print-header[_ngcontent-%COMP%]   .gl-period[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #444;\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .gl-print-header[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .grand-livre-content[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .account-header-gl[_ngcontent-%COMP%] {\n    background: #714B67 !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n    border-radius: 0;\n    font-size: 11px;\n    padding: 5px 10px;\n  }\n}\n/*# sourceMappingURL=grand-livre.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GrandLivreComponent, [{
    type: Component,
    args: [{ selector: "app-grand-livre", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header no-print">
    <h1 class="page-title">
      <span class="material-icons">menu_book</span>
      Grand Livre
    </h1>
    @if (generated) {
      <div class="page-actions" style="display:flex;gap:8px">
        <button class="btn btn-outline" (click)="exportPdf()">
          <span class="material-icons">picture_as_pdf</span>
          Exporter PDF
        </button>
        <button class="btn btn-outline" (click)="exportExcel()">
          <span class="material-icons">table_view</span>
          Exporter Excel
        </button>
      </div>
    }
  </div>

  <!-- FILTERS -->
  <div class="filters-bar no-print">
    <div class="filter-group">
      <label>Du *</label>
      <input type="date" class="form-control" [(ngModel)]="dateFrom">
    </div>
    <div class="filter-group">
      <label>Au *</label>
      <input type="date" class="form-control" [(ngModel)]="dateTo">
    </div>
    <div class="filter-group" style="flex:1">
      <label>Comptes (optionnel, Ctrl+clic)</label>
      <select class="form-control" multiple style="height:80px" #accountSelect
(change)="onAccountChange(accountSelect.selectedOptions)"
        >
        @for (acc of accounts; track acc.id) {
          <option [value]="acc.id">{{ acc.code }} - {{ acc.name }}</option>
        }
      </select>
    </div>
    <div class="filter-actions">
      <button class="btn btn-primary" (click)="generate()" [disabled]="loading">
        @if (loading) { <span class="spinner-sm-btn"></span> }
        <span class="material-icons">play_arrow</span>
        G\xE9n\xE9rer
      </button>
    </div>
  </div>

  @if (errorMsg) {
    <div class="alert-error mb-3 no-print">
      <span class="material-icons">error_outline</span>{{ errorMsg }}
    </div>
  }

  <!-- PRINT HEADER -->
  @if (generated) {
    <div class="gl-print-header">
      <h2>Grand Livre</h2>
      <div class="gl-period">P\xE9riode du {{ dateFrom | date:'dd/MM/yyyy' }} au {{ dateTo | date:'dd/MM/yyyy' }}</div>
    </div>
  }

  <!-- RESULTS -->
  @if (loading) {
    <div style="text-align:center;padding:60px"><div class="spinner"></div></div>
  } @else if (generated && data.length === 0) {
    <div class="empty-state">
      <span class="material-icons">menu_book</span>
      <h3>Aucune \xE9criture trouv\xE9e</h3>
      <p>Aucun mouvement pour la p\xE9riode et les comptes s\xE9lectionn\xE9s.</p>
    </div>
  } @else if (generated) {
    <div class="grand-livre-content">
      @for (account of data; track account.accountCode) {
        <div class="grand-livre-account">
          <div class="account-header-gl">
            <span>{{ account.accountCode }} - {{ account.accountName }}</span>
            <span>Solde final: {{ account.finalBalance | number:'1.2-2' }}</span>
          </div>
          <table class="table-erp" style="border-radius:0">
            <thead>
              <tr>
                <th>Date</th>
                <th>N\xB0 Pi\xE8ce</th>
                <th>Journal</th>
                <th>Libell\xE9</th>
                <th class="text-right">D\xE9bit</th>
                <th class="text-right">Cr\xE9dit</th>
                <th class="text-right">Solde</th>
              </tr>
            </thead>
            <tbody>
              @for (line of account.lines; track $index) {
                <tr>
                  <td>{{ line.date | date:'dd/MM/yyyy' }}</td>
                  <td><strong>{{ line.moveRef }}</strong></td>
                  <td>{{ line.journalCode }}</td>
                  <td>{{ line.label }}</td>
                  <td class="text-right">{{ line.debit > 0 ? (line.debit | number:'1.2-2') : '' }}</td>
                  <td class="text-right">{{ line.credit > 0 ? (line.credit | number:'1.2-2') : '' }}</td>
                  <td class="text-right" [class.amount-debit]="line.balance >= 0" [class.amount-credit]="line.balance < 0">
                    {{ line.balance | number:'1.2-2' }}
                  </td>
                </tr>
              }
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4" style="text-align:left">Total {{ account.accountCode }}</td>
                <td>{{ account.totalDebit | number:'1.2-2' }}</td>
                <td>{{ account.totalCredit | number:'1.2-2' }}</td>
                <td>{{ account.finalBalance | number:'1.2-2' }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      }
    </div>
  }
</div>
`, styles: ["/* src/app/modules/accounting/components/grand-livre/grand-livre.component.scss */\n.grand-livre-content {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.account-header-gl {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #714B67,\n      #8e6285);\n  color: white;\n  padding: 10px 16px;\n  font-weight: 600;\n  font-size: 13px;\n  border-radius: 6px 6px 0 0;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #721c24;\n  font-size: 13px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.spinner-sm-btn {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.gl-print-header {\n  display: none;\n  text-align: center;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.gl-print-header h2 {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.gl-print-header .gl-period {\n  font-size: 12px;\n  font-weight: 600;\n  color: #444;\n}\n@media print {\n  .no-print {\n    display: none !important;\n  }\n  .gl-print-header {\n    display: block !important;\n  }\n  .grand-livre-content {\n    gap: 12px;\n  }\n  .account-header-gl {\n    background: #714B67 !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n    border-radius: 0;\n    font-size: 11px;\n    padding: 5px 10px;\n  }\n}\n/*# sourceMappingURL=grand-livre.component.css.map */\n"] }]
  }], () => [{ type: ReportService }, { type: AccountingService }, { type: AuthService }, { type: ExcelExportService }, { type: PdfExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GrandLivreComponent, { className: "GrandLivreComponent", filePath: "src/app/modules/accounting/components/grand-livre/grand-livre.component.ts", lineNumber: 19 });
})();
export {
  GrandLivreComponent
};
//# sourceMappingURL=chunk-VMSKX6PO.js.map

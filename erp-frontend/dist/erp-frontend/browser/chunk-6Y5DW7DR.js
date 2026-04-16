import {
  AnalyticService
} from "./chunk-EFGTYIKV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-FU5PLMG6.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/accounting/components/analytic/analytic-report.component.ts
var _forTrack0 = ($index, $item) => $item.analyticAccountId;
function AnalyticReportComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementEnd();
  }
}
function AnalyticReportComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 24);
    \u0275\u0275text(2, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucun mouvement analytique sur la p\xE9riode s\xE9lectionn\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function AnalyticReportComponent_Conditional_45_For_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
    \u0275\u0275elementStart(1, "span", 37);
    \u0275\u0275text(2, "subdirectory_arrow_right");
    \u0275\u0275elementEnd();
  }
}
function AnalyticReportComponent_Conditional_45_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, AnalyticReportComponent_Conditional_45_For_17_Conditional_2_Template, 3, 0);
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 33);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 34);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 35);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r1 = ctx.$implicit;
    \u0275\u0275classProp("row-child", line_r1.parentId);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(line_r1.parentId ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", !line_r1.parentId ? "#714B67" : "#333");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r1.analyticAccountCode);
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-weight", !line_r1.parentId ? "600" : "400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r1.analyticAccountName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r1.parentName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 15, line_r1.totalDebit, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 18, line_r1.totalCredit, "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", line_r1.solde >= 0 ? "#2e7d32" : "#c62828");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 21, line_r1.solde, "1.2-2"), " ");
  }
}
function AnalyticReportComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 22)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Compte analytique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 25);
    \u0275\u0275text(10, "Total D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 25);
    \u0275\u0275text(12, "Total Cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 25);
    \u0275\u0275text(14, "Solde");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, AnalyticReportComponent_Conditional_45_For_17_Template, 19, 24, "tr", 26, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "tfoot")(19, "tr", 27)(20, "td", 28);
    \u0275\u0275text(21, "TOTAUX");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 29);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 30);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td", 31);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.lines);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 5, ctx_r1.totalDebit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 8, ctx_r1.totalCredit, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.totalSolde >= 0 ? "#2e7d32" : "#c62828");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 11, ctx_r1.totalSolde, "1.2-2"), " ");
  }
}
var AnalyticReportComponent = class _AnalyticReportComponent {
  constructor(analyticService, authService) {
    this.analyticService = analyticService;
    this.authService = authService;
    this.lines = [];
    this.loading = false;
    this.companyId = 1;
    this.filters = { from: "", to: "" };
    this.recalculating = false;
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    const now = /* @__PURE__ */ new Date();
    this.filters.from = `${now.getFullYear()}-01-01`;
    this.filters.to = now.toISOString().split("T")[0];
    this.load();
  }
  load() {
    this.loading = true;
    this.analyticService.getBalance(this.companyId, this.filters.from || void 0, this.filters.to || void 0).subscribe({
      next: (lines) => {
        this.lines = lines;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  recalculate() {
    this.recalculating = true;
    this.analyticService.recalculate(this.companyId).subscribe({
      next: () => {
        this.recalculating = false;
        this.load();
      },
      error: () => {
        this.recalculating = false;
      }
    });
  }
  get totalDebit() {
    return this.lines.reduce((s, l) => s + (l.totalDebit || 0), 0);
  }
  get totalCredit() {
    return this.lines.reduce((s, l) => s + (l.totalCredit || 0), 0);
  }
  get totalSolde() {
    return this.totalDebit - this.totalCredit;
  }
  print() {
    window.print();
  }
  static {
    this.\u0275fac = function AnalyticReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnalyticReportComponent)(\u0275\u0275directiveInject(AnalyticService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticReportComponent, selectors: [["app-analytic-report"]], decls: 46, vars: 14, consts: [[1, "page-container"], [1, "page-header", "no-print"], [1, "page-title"], [1, "material-icons"], [1, "page-subtitle"], [2, "display", "flex", "gap", "8px"], ["title", "R\xE9g\xE9n\xE9rer les lignes analytiques depuis les \xE9critures valid\xE9es", 1, "btn", "btn-outline", 3, "click", "disabled"], [1, "btn", "btn-outline", 3, "click"], [1, "card", "mb-3", "no-print"], [1, "card-body"], [1, "form-row", "cols-3"], [1, "form-group"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", 2, "display", "flex", "align-items", "flex-end"], [1, "btn", "btn-primary", 2, "width", "100%", 3, "click"], [1, "card"], [1, "card-header"], [2, "font-size", "14px"], [1, "material-icons", 2, "font-size", "18px", "color", "#714B67"], [1, "card-body", 2, "padding", "0", "overflow-x", "auto"], [2, "text-align", "center", "padding", "40px"], [2, "text-align", "center", "padding", "40px", "color", "#aaa"], [1, "data-table"], [1, "spinner"], [1, "material-icons", 2, "font-size", "40px", "display", "block", "margin-bottom", "8px"], [2, "text-align", "right"], [3, "row-child"], [1, "totals-row"], ["colspan", "3", 2, "font-weight", "700", "text-align", "right"], [2, "text-align", "right", "font-weight", "700", "color", "#2e7d32"], [2, "text-align", "right", "font-weight", "700", "color", "#c62828"], [2, "text-align", "right", "font-weight", "700"], [1, "text-muted"], [2, "text-align", "right", "color", "#2e7d32", "font-weight", "500"], [2, "text-align", "right", "color", "#c62828", "font-weight", "500"], [2, "text-align", "right", "font-weight", "600"], [2, "display", "inline-block", "width", "16px"], [1, "material-icons", 2, "font-size", "12px", "color", "#aaa", "vertical-align", "middle"]], template: function AnalyticReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2)(4, "span", 3);
        \u0275\u0275text(5, "bar_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Balance Analytique ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Synth\xE8se des charges et produits par compte analytique");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
        \u0275\u0275listener("click", function AnalyticReportComponent_Template_button_click_10_listener() {
          return ctx.recalculate();
        });
        \u0275\u0275elementStart(11, "span", 3);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 7);
        \u0275\u0275listener("click", function AnalyticReportComponent_Template_button_click_14_listener() {
          return ctx.print();
        });
        \u0275\u0275elementStart(15, "span", 3);
        \u0275\u0275text(16, "print");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " Imprimer ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 8)(19, "div", 9)(20, "div", 10)(21, "div", 11)(22, "label");
        \u0275\u0275text(23, "Du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function AnalyticReportComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.from, $event) || (ctx.filters.from = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 11)(26, "label");
        \u0275\u0275text(27, "Au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function AnalyticReportComponent_Template_input_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.to, $event) || (ctx.filters.to = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 13)(30, "button", 14);
        \u0275\u0275listener("click", function AnalyticReportComponent_Template_button_click_30_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(31, "span", 3);
        \u0275\u0275text(32, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, " Actualiser ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(34, "div", 15)(35, "div", 16)(36, "h3", 17)(37, "span", 18);
        \u0275\u0275text(38, "analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "date");
        \u0275\u0275pipe(41, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 19);
        \u0275\u0275conditionalCreate(43, AnalyticReportComponent_Conditional_43_Template, 2, 0, "div", 20)(44, AnalyticReportComponent_Conditional_44_Template, 4, 0, "div", 21)(45, AnalyticReportComponent_Conditional_45_Template, 31, 14, "table", 22);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("disabled", ctx.recalculating);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.recalculating ? "hourglass_empty" : "refresh");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.recalculating ? "Recalcul..." : "Recalculer", " ");
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.from);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.to);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate2(" Balance analytique \u2014 P\xE9riode : ", \u0275\u0275pipeBind2(40, 8, ctx.filters.from, "dd/MM/yyyy"), " au ", \u0275\u0275pipeBind2(41, 11, ctx.filters.to, "dd/MM/yyyy"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading ? 43 : ctx.lines.length === 0 ? 44 : 45);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ["\n.row-child[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n.totals-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  border-top: 2px solid #714B67;\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=analytic-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticReportComponent, [{
    type: Component,
    args: [{ selector: "app-analytic-report", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <div class="page-header no-print">
    <div>
      <h1 class="page-title">
        <span class="material-icons">bar_chart</span>
        Balance Analytique
      </h1>
      <p class="page-subtitle">Synth\xE8se des charges et produits par compte analytique</p>
    </div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-outline" (click)="recalculate()" [disabled]="recalculating" title="R\xE9g\xE9n\xE9rer les lignes analytiques depuis les \xE9critures valid\xE9es">
        <span class="material-icons">{{ recalculating ? 'hourglass_empty' : 'refresh' }}</span>
        {{ recalculating ? 'Recalcul...' : 'Recalculer' }}
      </button>
      <button class="btn btn-outline" (click)="print()">
        <span class="material-icons">print</span>
        Imprimer
      </button>
    </div>
  </div>

  <!-- FILTRES -->
  <div class="card mb-3 no-print">
    <div class="card-body">
      <div class="form-row cols-3">
        <div class="form-group">
          <label>Du</label>
          <input type="date" class="form-control" [(ngModel)]="filters.from">
        </div>
        <div class="form-group">
          <label>Au</label>
          <input type="date" class="form-control" [(ngModel)]="filters.to">
        </div>
        <div class="form-group" style="display:flex;align-items:flex-end">
          <button class="btn btn-primary" (click)="load()" style="width:100%">
            <span class="material-icons">search</span>
            Actualiser
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- RAPPORT -->
  <div class="card">
    <div class="card-header">
      <h3 style="font-size:14px">
        <span class="material-icons" style="font-size:18px;color:#714B67">analytics</span>
        Balance analytique \u2014 P\xE9riode : {{ filters.from | date:'dd/MM/yyyy' }} au {{ filters.to | date:'dd/MM/yyyy' }}
      </h3>
    </div>
    <div class="card-body" style="padding:0;overflow-x:auto">
      @if (loading) {
        <div style="text-align:center;padding:40px"><div class="spinner"></div></div>
      } @else if (lines.length === 0) {
        <div style="text-align:center;padding:40px;color:#aaa">
          <span class="material-icons" style="font-size:40px;display:block;margin-bottom:8px">bar_chart</span>
          Aucun mouvement analytique sur la p\xE9riode s\xE9lectionn\xE9e
        </div>
      } @else {
        <table class="data-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Compte analytique</th>
              <th>Parent</th>
              <th style="text-align:right">Total D\xE9bit</th>
              <th style="text-align:right">Total Cr\xE9dit</th>
              <th style="text-align:right">Solde</th>
            </tr>
          </thead>
          <tbody>
            @for (line of lines; track line.analyticAccountId) {
              <tr [class.row-child]="line.parentId">
                <td>
                  @if (line.parentId) {
                    <span style="display:inline-block;width:16px"></span>
                    <span class="material-icons" style="font-size:12px;color:#aaa;vertical-align:middle">subdirectory_arrow_right</span>
                  }
                  <strong [style.color]="!line.parentId ? '#714B67' : '#333'">{{ line.analyticAccountCode }}</strong>
                </td>
                <td [style.fontWeight]="!line.parentId ? '600' : '400'">{{ line.analyticAccountName }}</td>
                <td><span class="text-muted">{{ line.parentName || '\u2014' }}</span></td>
                <td style="text-align:right;color:#2e7d32;font-weight:500">
                  {{ line.totalDebit | number:'1.2-2' }}
                </td>
                <td style="text-align:right;color:#c62828;font-weight:500">
                  {{ line.totalCredit | number:'1.2-2' }}
                </td>
                <td style="text-align:right;font-weight:600"
                  [style.color]="line.solde >= 0 ? '#2e7d32' : '#c62828'">
                  {{ line.solde | number:'1.2-2' }}
                </td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr class="totals-row">
              <td colspan="3" style="font-weight:700;text-align:right">TOTAUX</td>
              <td style="text-align:right;font-weight:700;color:#2e7d32">{{ totalDebit | number:'1.2-2' }}</td>
              <td style="text-align:right;font-weight:700;color:#c62828">{{ totalCredit | number:'1.2-2' }}</td>
              <td style="text-align:right;font-weight:700" [style.color]="totalSolde >= 0 ? '#2e7d32' : '#c62828'">
                {{ totalSolde | number:'1.2-2' }}
              </td>
            </tr>
          </tfoot>
        </table>
      }
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/accounting/components/analytic/analytic-report.component.scss */\n.row-child {\n  background: #fafafa;\n}\n.totals-row td {\n  background: #f0f0f0;\n  border-top: 2px solid #714B67;\n}\n@media print {\n  .no-print {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=analytic-report.component.css.map */\n"] }]
  }], () => [{ type: AnalyticService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticReportComponent, { className: "AnalyticReportComponent", filePath: "src/app/modules/accounting/components/analytic/analytic-report.component.ts", lineNumber: 14 });
})();
export {
  AnalyticReportComponent
};
//# sourceMappingURL=chunk-6Y5DW7DR.js.map

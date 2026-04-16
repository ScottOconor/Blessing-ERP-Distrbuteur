import {
  AnalyticService
} from "./chunk-EFGTYIKV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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

// src/app/modules/accounting/components/analytic/analytic-lines.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AnalyticLinesComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", a_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", a_r1.code, " \u2014 ", a_r1.name);
  }
}
function AnalyticLinesComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementEnd();
  }
}
function AnalyticLinesComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 24);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune ligne analytique sur la p\xE9riode ");
    \u0275\u0275elementEnd();
  }
}
function AnalyticLinesComponent_Conditional_45_For_17_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r2.generalAccountCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", line_r2.generalAccountName);
  }
}
function AnalyticLinesComponent_Conditional_45_For_17_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AnalyticLinesComponent_Conditional_45_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "strong", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275conditionalCreate(10, AnalyticLinesComponent_Conditional_45_For_17_Conditional_10_Template, 4, 2)(11, AnalyticLinesComponent_Conditional_45_For_17_Conditional_11_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 33);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 34);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, line_r2.date, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(line_r2.analyticAccountCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u2014 ", line_r2.analyticAccountName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(line_r2.generalAccountCode ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r2.name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getAmountDebit(line_r2) > 0 ? \u0275\u0275pipeBind2(16, 10, ctx_r2.getAmountDebit(line_r2), "1.2-2") : "", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getAmountCredit(line_r2) > 0 ? \u0275\u0275pipeBind2(19, 13, ctx_r2.getAmountCredit(line_r2), "1.2-2") : "", " ");
  }
}
function AnalyticLinesComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 22)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Compte analytique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Compte g\xE9n\xE9ral");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 25);
    \u0275\u0275text(12, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 25);
    \u0275\u0275text(14, "Cr\xE9dit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, AnalyticLinesComponent_Conditional_45_For_17_Template, 20, 16, "tr", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "tfoot")(19, "tr", 26)(20, "td", 27);
    \u0275\u0275text(21, "TOTAUX");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 28);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 29);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "tr", 26)(29, "td", 27);
    \u0275\u0275text(30, "SOLDE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 30);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.lines);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 5, ctx_r2.totalDebit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 8, ctx_r2.totalCredit, "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("color", ctx_r2.totalSolde >= 0 ? "#2e7d32" : "#c62828");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(33, 11, ctx_r2.totalSolde, "1.2-2"), " ");
  }
}
var AnalyticLinesComponent = class _AnalyticLinesComponent {
  constructor(analyticService, authService) {
    this.analyticService = analyticService;
    this.authService = authService;
    this.lines = [];
    this.analyticAccounts = [];
    this.loading = false;
    this.companyId = 1;
    this.filters = {
      analyticAccountId: null,
      from: "",
      to: ""
    };
    this.recalculating = false;
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    const now = /* @__PURE__ */ new Date();
    this.filters.from = `${now.getFullYear()}-01-01`;
    this.filters.to = now.toISOString().split("T")[0];
    this.analyticService.getAccounts(this.companyId).subscribe({
      next: (a) => this.analyticAccounts = a,
      error: () => {
      }
    });
    this.load();
  }
  load() {
    this.loading = true;
    this.analyticService.getLines(this.companyId, {
      analyticAccountId: this.filters.analyticAccountId || void 0,
      from: this.filters.from || void 0,
      to: this.filters.to || void 0
    }).subscribe({
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
      next: (res) => {
        this.recalculating = false;
        this.load();
      },
      error: () => {
        this.recalculating = false;
      }
    });
  }
  get totalDebit() {
    return this.lines.filter((l) => l.amount > 0).reduce((s, l) => s + l.amount, 0);
  }
  get totalCredit() {
    return this.lines.filter((l) => l.amount < 0).reduce((s, l) => s + Math.abs(l.amount), 0);
  }
  get totalSolde() {
    return this.lines.reduce((s, l) => s + l.amount, 0);
  }
  getAmountDebit(line) {
    return line.amount > 0 ? line.amount : 0;
  }
  getAmountCredit(line) {
    return line.amount < 0 ? Math.abs(line.amount) : 0;
  }
  static {
    this.\u0275fac = function AnalyticLinesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnalyticLinesComponent)(\u0275\u0275directiveInject(AnalyticService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticLinesComponent, selectors: [["app-analytic-lines"]], decls: 46, vars: 8, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "page-subtitle"], [1, "card", "mb-3"], [1, "card-body"], [1, "form-row", "cols-4"], [1, "form-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", 2, "display", "flex", "align-items", "flex-end", "gap", "6px"], [1, "btn", "btn-primary", 2, "flex", "1", 3, "click"], ["title", "R\xE9g\xE9n\xE9rer les lignes depuis les \xE9critures valid\xE9es", 1, "btn", "btn-outline", 3, "click", "disabled"], [1, "card"], [1, "card-header"], [2, "font-size", "14px"], [1, "material-icons", 2, "font-size", "18px", "color", "#714B67"], [1, "card-body", 2, "padding", "0", "overflow-x", "auto"], [2, "text-align", "center", "padding", "40px"], [2, "text-align", "center", "padding", "40px", "color", "#aaa"], [1, "data-table"], [1, "spinner"], [1, "material-icons", 2, "font-size", "40px", "display", "block", "margin-bottom", "8px"], [2, "text-align", "right"], [1, "totals-row"], ["colspan", "4", 2, "font-weight", "700"], [2, "text-align", "right", "font-weight", "700", "color", "#2e7d32"], [2, "text-align", "right", "font-weight", "700", "color", "#c62828"], ["colspan", "2", 2, "text-align", "right", "font-weight", "700"], [2, "color", "#714B67"], [1, "text-muted"], [2, "text-align", "right", "color", "#2e7d32", "font-weight", "500"], [2, "text-align", "right", "color", "#c62828", "font-weight", "500"], [2, "font-family", "monospace", "font-size", "12px"]], template: function AnalyticLinesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2)(4, "span", 3);
        \u0275\u0275text(5, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Grand Livre Analytique ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "D\xE9tail des mouvements analytiques par compte");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "label");
        \u0275\u0275text(14, "Compte analytique");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function AnalyticLinesComponent_Template_select_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.analyticAccountId, $event) || (ctx.filters.analyticAccountId = $event);
          return $event;
        });
        \u0275\u0275elementStart(16, "option", 10);
        \u0275\u0275text(17, "\u2014 Tous \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(18, AnalyticLinesComponent_For_19_Template, 2, 3, "option", 10, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 8)(21, "label");
        \u0275\u0275text(22, "Du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function AnalyticLinesComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.from, $event) || (ctx.filters.from = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 8)(25, "label");
        \u0275\u0275text(26, "Au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function AnalyticLinesComponent_Template_input_ngModelChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filters.to, $event) || (ctx.filters.to = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 12)(29, "button", 13);
        \u0275\u0275listener("click", function AnalyticLinesComponent_Template_button_click_29_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(30, "span", 3);
        \u0275\u0275text(31, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, " Rechercher ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 14);
        \u0275\u0275listener("click", function AnalyticLinesComponent_Template_button_click_33_listener() {
          return ctx.recalculate();
        });
        \u0275\u0275elementStart(34, "span", 3);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(36, "div", 15)(37, "div", 16)(38, "h3", 17)(39, "span", 18);
        \u0275\u0275text(40, "table_rows");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 19);
        \u0275\u0275conditionalCreate(43, AnalyticLinesComponent_Conditional_43_Template, 2, 0, "div", 20)(44, AnalyticLinesComponent_Conditional_44_Template, 4, 0, "div", 21)(45, AnalyticLinesComponent_Conditional_45_Template, 34, 14, "table", 22);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.analyticAccountId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.analyticAccounts);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.from);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.to);
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.recalculating);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.recalculating ? "hourglass_empty" : "refresh");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" Lignes analytiques (", ctx.lines.length, ") ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 43 : ctx.lines.length === 0 ? 44 : 45);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ["\n.totals-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  border-top: 2px solid #e0e0e0;\n}\n/*# sourceMappingURL=analytic-lines.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticLinesComponent, [{
    type: Component,
    args: [{ selector: "app-analytic-lines", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">

  <div class="page-header">
    <div>
      <h1 class="page-title">
        <span class="material-icons">receipt_long</span>
        Grand Livre Analytique
      </h1>
      <p class="page-subtitle">D\xE9tail des mouvements analytiques par compte</p>
    </div>
  </div>

  <!-- FILTRES -->
  <div class="card mb-3">
    <div class="card-body">
      <div class="form-row cols-4">
        <div class="form-group">
          <label>Compte analytique</label>
          <select class="form-control" [(ngModel)]="filters.analyticAccountId">
            <option [ngValue]="null">\u2014 Tous \u2014</option>
            @for (a of analyticAccounts; track a.id) {
              <option [ngValue]="a.id">{{ a.code }} \u2014 {{ a.name }}</option>
            }
          </select>
        </div>
        <div class="form-group">
          <label>Du</label>
          <input type="date" class="form-control" [(ngModel)]="filters.from">
        </div>
        <div class="form-group">
          <label>Au</label>
          <input type="date" class="form-control" [(ngModel)]="filters.to">
        </div>
        <div class="form-group" style="display:flex;align-items:flex-end;gap:6px">
          <button class="btn btn-primary" (click)="load()" style="flex:1">
            <span class="material-icons">search</span>
            Rechercher
          </button>
          <button class="btn btn-outline" (click)="recalculate()" [disabled]="recalculating" title="R\xE9g\xE9n\xE9rer les lignes depuis les \xE9critures valid\xE9es">
            <span class="material-icons">{{ recalculating ? 'hourglass_empty' : 'refresh' }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- R\xC9SULTATS -->
  <div class="card">
    <div class="card-header">
      <h3 style="font-size:14px">
        <span class="material-icons" style="font-size:18px;color:#714B67">table_rows</span>
        Lignes analytiques ({{ lines.length }})
      </h3>
    </div>
    <div class="card-body" style="padding:0;overflow-x:auto">
      @if (loading) {
        <div style="text-align:center;padding:40px"><div class="spinner"></div></div>
      } @else if (lines.length === 0) {
        <div style="text-align:center;padding:40px;color:#aaa">
          <span class="material-icons" style="font-size:40px;display:block;margin-bottom:8px">receipt_long</span>
          Aucune ligne analytique sur la p\xE9riode
        </div>
      } @else {
        <table class="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Compte analytique</th>
              <th>Compte g\xE9n\xE9ral</th>
              <th>Libell\xE9</th>
              <th style="text-align:right">D\xE9bit</th>
              <th style="text-align:right">Cr\xE9dit</th>
            </tr>
          </thead>
          <tbody>
            @for (line of lines; track line.id) {
              <tr>
                <td>{{ line.date | date:'dd/MM/yyyy' }}</td>
                <td>
                  <strong style="color:#714B67">{{ line.analyticAccountCode }}</strong>
                  <span class="text-muted"> \u2014 {{ line.analyticAccountName }}</span>
                </td>
                <td>
                  @if (line.generalAccountCode) {
                    <span style="font-family:monospace;font-size:12px">{{ line.generalAccountCode }}</span>
                    <span class="text-muted"> {{ line.generalAccountName }}</span>
                  } @else {
                    <span class="text-muted">\u2014</span>
                  }
                </td>
                <td>{{ line.name || '\u2014' }}</td>
                <td style="text-align:right;color:#2e7d32;font-weight:500">
                  {{ getAmountDebit(line) > 0 ? (getAmountDebit(line) | number:'1.2-2') : '' }}
                </td>
                <td style="text-align:right;color:#c62828;font-weight:500">
                  {{ getAmountCredit(line) > 0 ? (getAmountCredit(line) | number:'1.2-2') : '' }}
                </td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr class="totals-row">
              <td colspan="4" style="font-weight:700">TOTAUX</td>
              <td style="text-align:right;font-weight:700;color:#2e7d32">{{ totalDebit | number:'1.2-2' }}</td>
              <td style="text-align:right;font-weight:700;color:#c62828">{{ totalCredit | number:'1.2-2' }}</td>
            </tr>
            <tr class="totals-row">
              <td colspan="4" style="font-weight:700">SOLDE</td>
              <td colspan="2" style="text-align:right;font-weight:700"
                [style.color]="totalSolde >= 0 ? '#2e7d32' : '#c62828'">
                {{ totalSolde | number:'1.2-2' }}
              </td>
            </tr>
          </tfoot>
        </table>
      }
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/accounting/components/analytic/analytic-lines.component.scss */\n.totals-row td {\n  background: #f5f5f5;\n  border-top: 2px solid #e0e0e0;\n}\n/*# sourceMappingURL=analytic-lines.component.css.map */\n"] }]
  }], () => [{ type: AnalyticService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticLinesComponent, { className: "AnalyticLinesComponent", filePath: "src/app/modules/accounting/components/analytic/analytic-lines.component.ts", lineNumber: 14 });
})();
export {
  AnalyticLinesComponent
};
//# sourceMappingURL=chunk-HSLCSMGI.js.map

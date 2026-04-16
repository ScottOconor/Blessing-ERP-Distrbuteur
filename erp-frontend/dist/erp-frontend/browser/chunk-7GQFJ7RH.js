import {
  StockService
} from "./chunk-YEOTRJFB.js";
import {
  Router
} from "./chunk-K3VCSIQL.js";
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
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/stock/components/transferts/transfert-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TransfertListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "span", 11);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275domElementEnd()();
  }
}
function TransfertListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "span", 4);
    \u0275\u0275text(2, "compare_arrows");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Aucun transfert. Cr\xE9ez un transfert pour d\xE9placer des articles entre d\xE9p\xF4ts.");
    \u0275\u0275domElementEnd()();
  }
}
function TransfertListComponent_Conditional_20_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 14);
    \u0275\u0275domListener("click", function TransfertListComponent_Conditional_20_For_22_Template_tr_click_0_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.router.navigate(["/stock/transferts", p_r2.id]));
    });
    \u0275\u0275domElementStart(1, "td", 15);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 16);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 16);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td", 17);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td", 17);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "td", 17);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "td")(16, "span", 18);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "td", 19);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "td")(22, "span", 20);
    \u0275\u0275text(23, "chevron_right");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.locationName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.locationDestName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.origin || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 9, p_r2.scheduledDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.dateDone ? \u0275\u0275pipeBind2(14, 12, p_r2.dateDone, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-state", p_r2.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.stateLabel(p_r2.state || ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 15, p_r2.totalValue, "1.0-0"));
  }
}
function TransfertListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 10)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "De");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th");
    \u0275\u0275text(8, "Vers");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th");
    \u0275\u0275text(10, "Origine");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th");
    \u0275\u0275text(12, "Date planifi\xE9e");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "th");
    \u0275\u0275text(14, "Date faite");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "th");
    \u0275\u0275text(16, "Statut");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "th", 12);
    \u0275\u0275text(18, "Valeur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(19, "th");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, TransfertListComponent_Conditional_20_For_22_Template, 24, 18, "tr", 13, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r2.pickings);
  }
}
var TransfertListComponent = class _TransfertListComponent {
  constructor(stockService, authService, router) {
    this.stockService = stockService;
    this.authService = authService;
    this.router = router;
    this.pickings = [];
    this.loading = false;
  }
  ngOnInit() {
    this.loading = true;
    this.stockService.getTransferts(this.authService.getCompanyId()).subscribe({
      next: (p) => {
        this.pickings = p;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  stateLabel(s) {
    return { draft: "Brouillon", confirmed: "Confirm\xE9", done: "Effectu\xE9", cancelled: "Annul\xE9" }[s] || s;
  }
  static {
    this.\u0275fac = function TransfertListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TransfertListComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransfertListComponent, selectors: [["app-transfert-list"]], decls: 21, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "badge-count"], [1, "btn-primary", 3, "click"], [1, "info-tip"], [1, "card"], [1, "empty"], [1, "data-table"], [1, "material-icons", "spin"], [1, "text-right"], [1, "clickable"], [1, "clickable", 3, "click"], [1, "font-mono", "font-bold", "text-purple"], [1, "text-muted", "small"], [1, "text-muted"], [1, "state-badge"], [1, "text-right", "font-mono"], [1, "material-icons", "chevron"]], template: function TransfertListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
        \u0275\u0275text(5, "compare_arrows");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(6, " Transferts inter-d\xE9p\xF4ts");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(7, "span", 5);
        \u0275\u0275text(8);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(9, "button", 6);
        \u0275\u0275domListener("click", function TransfertListComponent_Template_button_click_9_listener() {
          return ctx.router.navigate(["/stock/transferts/new"]);
        });
        \u0275\u0275domElementStart(10, "span", 4);
        \u0275\u0275text(11, "add");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(12, " Nouveau transfert ");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(13, "div", 7)(14, "span", 4);
        \u0275\u0275text(15, "info");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(16, " Les transferts inter-d\xE9p\xF4ts permettent de d\xE9placer du stock entre emplacements ou entrep\xF4ts. La valorisation (CMUP) est conserv\xE9e et une \xE9criture comptable Dr/Cr est g\xE9n\xE9r\xE9e automatiquement \xE0 la validation. ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(17, "div", 8);
        \u0275\u0275conditionalCreate(18, TransfertListComponent_Conditional_18_Template, 5, 0, "div", 9)(19, TransfertListComponent_Conditional_19_Template, 5, 0, "div", 9)(20, TransfertListComponent_Conditional_20_Template, 23, 0, "table", 10);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.pickings.length);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.loading ? 18 : ctx.pickings.length === 0 ? 19 : 20);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #6f42c1;\n}\n.page-header[_ngcontent-%COMP%]   .badge-count[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  color: #6c757d;\n  font-size: 12px;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.info-tip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #f3e5f5;\n  border-radius: 6px;\n  margin-bottom: 14px;\n  font-size: 12px;\n  color: #6f42c1;\n  border: 1px solid #e1bee7;\n}\n.info-tip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #5a32a3;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  color: #6c757d;\n  gap: 10px;\n}\n.empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  max-width: 360px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.data-table[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8f0ff;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.text-purple[_ngcontent-%COMP%] {\n  color: #6f42c1;\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chevron[_ngcontent-%COMP%] {\n  color: #dee2e6;\n  font-size: 18px !important;\n}\n.state-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.state-badge[data-state=draft][_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.state-badge[data-state=done][_ngcontent-%COMP%] {\n  background: #ede7f6;\n  color: #4527a0;\n}\n.state-badge[data-state=cancelled][_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n/*# sourceMappingURL=transfert-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransfertListComponent, [{
    type: Component,
    args: [{ selector: "app-transfert-list", standalone: true, imports: [CommonModule], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title"><span class="material-icons">compare_arrows</span> Transferts inter-d\xE9p\xF4ts</h1>
      <span class="badge-count">{{ pickings.length }}</span>
    </div>
    <button class="btn-primary" (click)="router.navigate(['/stock/transferts/new'])">
      <span class="material-icons">add</span> Nouveau transfert
    </button>
  </div>

  <div class="info-tip">
    <span class="material-icons">info</span>
    Les transferts inter-d\xE9p\xF4ts permettent de d\xE9placer du stock entre emplacements ou entrep\xF4ts. La valorisation (CMUP) est conserv\xE9e et une \xE9criture comptable Dr/Cr est g\xE9n\xE9r\xE9e automatiquement \xE0 la validation.
  </div>

  <div class="card">
    @if (loading) {
      <div class="empty"><span class="material-icons spin">refresh</span><p>Chargement...</p></div>
    } @else if (pickings.length === 0) {
      <div class="empty">
        <span class="material-icons">compare_arrows</span>
        <p>Aucun transfert. Cr\xE9ez un transfert pour d\xE9placer des articles entre d\xE9p\xF4ts.</p>
      </div>
    } @else {
      <table class="data-table">
        <thead>
          <tr>
            <th>R\xE9f\xE9rence</th><th>De</th><th>Vers</th><th>Origine</th>
            <th>Date planifi\xE9e</th><th>Date faite</th><th>Statut</th>
            <th class="text-right">Valeur</th><th></th>
          </tr>
        </thead>
        <tbody>
          @for (p of pickings; track p.id) {
            <tr (click)="router.navigate(['/stock/transferts', p.id])" class="clickable">
              <td class="font-mono font-bold text-purple">{{ p.name }}</td>
              <td class="text-muted small">{{ p.locationName }}</td>
              <td class="text-muted small">{{ p.locationDestName }}</td>
              <td class="text-muted">{{ p.origin || '\u2014' }}</td>
              <td class="text-muted">{{ p.scheduledDate | date:'dd/MM/yyyy' }}</td>
              <td class="text-muted">{{ p.dateDone ? (p.dateDone | date:'dd/MM/yyyy') : '\u2014' }}</td>
              <td><span class="state-badge" [attr.data-state]="p.state">{{ stateLabel(p.state || '') }}</span></td>
              <td class="text-right font-mono">{{ p.totalValue | number:'1.0-0' }}</td>
              <td><span class="material-icons chevron">chevron_right</span></td>
            </tr>
          }
        </tbody>
      </table>
    }
  </div>
</div>
`, styles: ['/* src/app/modules/stock/components/transferts/transfert-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: #6f42c1;\n}\n.page-header .badge-count {\n  background: #e9ecef;\n  color: #6c757d;\n  font-size: 12px;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.info-tip {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #f3e5f5;\n  border-radius: 6px;\n  margin-bottom: 14px;\n  font-size: 12px;\n  color: #6f42c1;\n  border: 1px solid #e1bee7;\n}\n.info-tip .material-icons {\n  font-size: 16px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover {\n  background: #5a32a3;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  color: #6c757d;\n  gap: 10px;\n}\n.empty .material-icons {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.empty p {\n  margin: 0;\n  text-align: center;\n  max-width: 360px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 10px 12px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.data-table td {\n  padding: 10px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.data-table tr.clickable {\n  cursor: pointer;\n}\n.data-table tr.clickable:hover td {\n  background: #f8f0ff;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: #adb5bd;\n}\n.text-purple {\n  color: #6f42c1;\n}\n.small {\n  font-size: 12px;\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chevron {\n  color: #dee2e6;\n  font-size: 18px !important;\n}\n.state-badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.state-badge[data-state=draft] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.state-badge[data-state=done] {\n  background: #ede7f6;\n  color: #4527a0;\n}\n.state-badge[data-state=cancelled] {\n  background: #fde8e8;\n  color: #721c24;\n}\n/*# sourceMappingURL=transfert-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransfertListComponent, { className: "TransfertListComponent", filePath: "src/app/modules/stock/components/transferts/transfert-list.component.ts", lineNumber: 14 });
})();
export {
  TransfertListComponent
};
//# sourceMappingURL=chunk-7GQFJ7RH.js.map

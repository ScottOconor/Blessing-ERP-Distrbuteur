import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  FormsModule
} from "./chunk-NRXD6HPP.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/stock/components/picking-types/picking-type-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PickingTypeListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6)(1, "span", 8);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275domElementEnd();
  }
}
function PickingTypeListComponent_Conditional_11_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 10);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td")(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "td", 12);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td", 13);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td", 13);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "td", 14);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(t_r1.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCodeLabel(t_r1.code));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.warehouseName || ctx_r1.getWarehouseName(t_r1.warehouseId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.defaultLocationSrcName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.defaultLocationDestName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.sequencePrefix || "\u2014");
  }
}
function PickingTypeListComponent_Conditional_11_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 15);
    \u0275\u0275text(2, " Aucun type d'op\xE9ration \u2014 cr\xE9ez un entrep\xF4t pour en g\xE9n\xE9rer automatiquement ");
    \u0275\u0275domElementEnd()();
  }
}
function PickingTypeListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7)(1, "table", 9)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "th");
    \u0275\u0275text(7, "Code");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th");
    \u0275\u0275text(9, "Entrep\xF4t");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th");
    \u0275\u0275text(11, "Emplacement source");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "th");
    \u0275\u0275text(13, "Emplacement dest.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "th");
    \u0275\u0275text(15, "Pr\xE9fixe s\xE9quence");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, PickingTypeListComponent_Conditional_11_For_18_Template, 14, 8, "tr", null, _forTrack0);
    \u0275\u0275conditionalCreate(19, PickingTypeListComponent_Conditional_11_Conditional_19_Template, 3, 0, "tr");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.pickingTypes);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.pickingTypes.length === 0 ? 19 : -1);
  }
}
var PickingTypeListComponent = class _PickingTypeListComponent {
  constructor(stockService, authService) {
    this.stockService = stockService;
    this.authService = authService;
    this.pickingTypes = [];
    this.warehouses = [];
    this.loading = false;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    this.stockService.getPickingTypes(cid).subscribe({
      next: (d) => {
        this.pickingTypes = d;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    this.stockService.getWarehouses(cid).subscribe({ next: (w) => this.warehouses = w });
  }
  getCodeLabel(code) {
    const labels = {
      incoming: "R\xE9ception",
      outgoing: "Livraison",
      internal: "Transfert interne",
      adjust: "Ajustement"
    };
    return labels[code] || code;
  }
  getWarehouseName(id) {
    if (!id)
      return "\u2014";
    return this.warehouses.find((w) => w.id === id)?.name || "\u2014";
  }
  static {
    this.\u0275fac = function PickingTypeListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickingTypeListComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PickingTypeListComponent, selectors: [["app-picking-type-list"]], decls: 12, vars: 1, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-secondary", 3, "click"], [1, "material-icons"], [1, "loading-state"], [1, "card"], [1, "material-icons", "spin"], [1, "cfg-table"], [1, "fw-500"], [1, "code-badge"], [1, "text-muted"], [1, "text-muted", "small"], [1, "mono", "text-muted", "small"], ["colspan", "6", 1, "empty-state"]], template: function PickingTypeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Types d'op\xE9rations");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "p", 3);
        \u0275\u0275text(6, "Configur\xE9s automatiquement lors de la cr\xE9ation d'un entrep\xF4t");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(7, "button", 4);
        \u0275\u0275domListener("click", function PickingTypeListComponent_Template_button_click_7_listener() {
          return ctx.load();
        });
        \u0275\u0275domElementStart(8, "span", 5);
        \u0275\u0275text(9, "refresh");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275conditionalCreate(10, PickingTypeListComponent_Conditional_10_Template, 4, 0, "div", 6)(11, PickingTypeListComponent_Conditional_11_Template, 20, 1, "div", 7);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.loading ? 10 : 11);
      }
    }, dependencies: [CommonModule, FormsModule], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-family: "Roboto", sans-serif;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.cfg-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.cfg-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.cfg-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.cfg-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.cfg-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.fw-500[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.code-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.code-badge.incoming[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.code-badge.outgoing[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.code-badge.internal[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.code-badge.adjust[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n/*# sourceMappingURL=picking-type-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickingTypeListComponent, [{
    type: Component,
    args: [{ selector: "app-picking-type-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div>
      <h1 class="page-title">Types d'op\xE9rations</h1>
      <p class="page-subtitle">Configur\xE9s automatiquement lors de la cr\xE9ation d'un entrep\xF4t</p>
    </div>
    <button class="btn-secondary" (click)="load()"><span class="material-icons">refresh</span></button>
  </div>

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else {
    <div class="card">
      <table class="cfg-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Code</th>
            <th>Entrep\xF4t</th>
            <th>Emplacement source</th>
            <th>Emplacement dest.</th>
            <th>Pr\xE9fixe s\xE9quence</th>
          </tr>
        </thead>
        <tbody>
          @for (t of pickingTypes; track t.id) {
            <tr>
              <td class="fw-500">{{ t.name }}</td>
              <td><span class="code-badge" [class]="t.code">{{ getCodeLabel(t.code) }}</span></td>
              <td class="text-muted">{{ t.warehouseName || getWarehouseName(t.warehouseId) }}</td>
              <td class="text-muted small">{{ t.defaultLocationSrcName || '\u2014' }}</td>
              <td class="text-muted small">{{ t.defaultLocationDestName || '\u2014' }}</td>
              <td class="mono text-muted small">{{ t.sequencePrefix || '\u2014' }}</td>
            </tr>
          }
          @if (pickingTypes.length === 0) {
            <tr>
              <td colspan="6" class="empty-state">
                Aucun type d'op\xE9ration \u2014 cr\xE9ez un entrep\xF4t pour en g\xE9n\xE9rer automatiquement
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }
</div>
`, styles: ['/* src/app/modules/stock/components/picking-types/picking-type-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-family: "Roboto", sans-serif;\n}\n.btn-secondary:hover {\n  background: var(--bg-hover);\n}\n.btn-secondary .material-icons {\n  font-size: 17px;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.cfg-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.cfg-table th {\n  padding: 9px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.cfg-table td {\n  padding: 9px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.cfg-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.cfg-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.fw-500 {\n  font-weight: 500;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.small {\n  font-size: 12px;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n}\n.code-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.code-badge.incoming {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.code-badge.outgoing {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.code-badge.internal {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.code-badge.adjust {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n/*# sourceMappingURL=picking-type-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PickingTypeListComponent, { className: "PickingTypeListComponent", filePath: "app/modules/stock/components/picking-types/picking-type-list.component.ts", lineNumber: 14 });
})();
export {
  PickingTypeListComponent
};
//# sourceMappingURL=chunk-LVCPFPBH.js.map

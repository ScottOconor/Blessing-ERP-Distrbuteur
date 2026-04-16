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

// src/app/modules/stock/components/livraisons/livraison-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function LivraisonListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "span", 10);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275domElementEnd()();
  }
}
function LivraisonListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "span", 4);
    \u0275\u0275text(2, "local_shipping");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Aucune livraison");
    \u0275\u0275domElementEnd()();
  }
}
function LivraisonListComponent_Conditional_16_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 13);
    \u0275\u0275domListener("click", function LivraisonListComponent_Conditional_16_For_20_Template_tr_click_0_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.router.navigate(["/stock/livraisons", p_r2.id]));
    });
    \u0275\u0275domElementStart(1, "td", 14);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 15);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td", 15);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td", 15);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "td")(14, "span", 16);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "td", 17);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "td")(20, "span", 18);
    \u0275\u0275text(21, "chevron_right");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.partnerName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.origin || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 8, p_r2.scheduledDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.dateDone ? \u0275\u0275pipeBind2(12, 11, p_r2.dateDone, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-state", p_r2.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.stateLabel(p_r2.state || ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 14, p_r2.totalValue, "1.0-0"));
  }
}
function LivraisonListComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 9)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Client");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th");
    \u0275\u0275text(8, "Origine");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th");
    \u0275\u0275text(10, "Date planifi\xE9e");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th");
    \u0275\u0275text(12, "Date faite");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "th");
    \u0275\u0275text(14, "Statut");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "th", 11);
    \u0275\u0275text(16, "Valeur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(17, "th");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, LivraisonListComponent_Conditional_16_For_20_Template, 22, 17, "tr", 12, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r2.pickings);
  }
}
var LivraisonListComponent = class _LivraisonListComponent {
  constructor(stockService, authService, router) {
    this.stockService = stockService;
    this.authService = authService;
    this.router = router;
    this.pickings = [];
    this.loading = false;
  }
  ngOnInit() {
    this.loading = true;
    this.stockService.getLivraisons(this.authService.getCompanyId()).subscribe({
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
    return { draft: "Brouillon", confirmed: "Confirm\xE9", done: "Livr\xE9", cancelled: "Annul\xE9" }[s] || s;
  }
  static {
    this.\u0275fac = function LivraisonListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LivraisonListComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LivraisonListComponent, selectors: [["app-livraison-list"]], decls: 17, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "badge-count"], [1, "btn-primary", 3, "click"], [1, "card"], [1, "empty"], [1, "data-table"], [1, "material-icons", "spin"], [1, "text-right"], [1, "clickable"], [1, "clickable", 3, "click"], [1, "font-mono", "font-bold", "text-teal"], [1, "text-muted"], [1, "state-badge"], [1, "text-right", "font-mono"], [1, "material-icons", "chevron"]], template: function LivraisonListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
        \u0275\u0275text(5, "local_shipping");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(6, " Livraisons");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(7, "span", 5);
        \u0275\u0275text(8);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(9, "button", 6);
        \u0275\u0275domListener("click", function LivraisonListComponent_Template_button_click_9_listener() {
          return ctx.router.navigate(["/stock/livraisons/new"]);
        });
        \u0275\u0275domElementStart(10, "span", 4);
        \u0275\u0275text(11, "add");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(12, " Nouvelle livraison ");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(13, "div", 7);
        \u0275\u0275conditionalCreate(14, LivraisonListComponent_Conditional_14_Template, 5, 0, "div", 8)(15, LivraisonListComponent_Conditional_15_Template, 5, 0, "div", 8)(16, LivraisonListComponent_Conditional_16_Template, 21, 0, "table", 9);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.pickings.length);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.loading ? 14 : ctx.pickings.length === 0 ? 15 : 16);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #017E84;\n}\n.page-header[_ngcontent-%COMP%]   .badge-count[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  color: #6c757d;\n  font-size: 12px;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #015f64;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  color: #6c757d;\n  gap: 10px;\n}\n.empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.data-table[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f0fafa;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.text-teal[_ngcontent-%COMP%] {\n  color: #017E84;\n}\n.chevron[_ngcontent-%COMP%] {\n  color: #dee2e6;\n  font-size: 18px !important;\n}\n.state-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.state-badge[data-state=draft][_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.state-badge[data-state=done][_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.state-badge[data-state=cancelled][_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n/*# sourceMappingURL=livraison-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LivraisonListComponent, [{
    type: Component,
    args: [{ selector: "app-livraison-list", standalone: true, imports: [CommonModule], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title"><span class="material-icons">local_shipping</span> Livraisons</h1>
      <span class="badge-count">{{ pickings.length }}</span>
    </div>
    <button class="btn-primary" (click)="router.navigate(['/stock/livraisons/new'])">
      <span class="material-icons">add</span> Nouvelle livraison
    </button>
  </div>
  <div class="card">
    @if (loading) {
      <div class="empty"><span class="material-icons spin">refresh</span><p>Chargement...</p></div>
    } @else if (pickings.length === 0) {
      <div class="empty"><span class="material-icons">local_shipping</span><p>Aucune livraison</p></div>
    } @else {
      <table class="data-table">
        <thead>
          <tr>
            <th>R\xE9f\xE9rence</th><th>Client</th><th>Origine</th>
            <th>Date planifi\xE9e</th><th>Date faite</th><th>Statut</th>
            <th class="text-right">Valeur</th><th></th>
          </tr>
        </thead>
        <tbody>
          @for (p of pickings; track p.id) {
            <tr (click)="router.navigate(['/stock/livraisons', p.id])" class="clickable">
              <td class="font-mono font-bold text-teal">{{ p.name }}</td>
              <td>{{ p.partnerName || '\u2014' }}</td>
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
`, styles: ['/* src/app/modules/stock/components/livraisons/livraison-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: #017E84;\n}\n.page-header .badge-count {\n  background: #e9ecef;\n  color: #6c757d;\n  font-size: 12px;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover {\n  background: #015f64;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  color: #6c757d;\n  gap: 10px;\n}\n.empty .material-icons {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.empty p {\n  margin: 0;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.data-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.data-table tr.clickable {\n  cursor: pointer;\n}\n.data-table tr.clickable:hover td {\n  background: #f0fafa;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: #adb5bd;\n}\n.text-teal {\n  color: #017E84;\n}\n.chevron {\n  color: #dee2e6;\n  font-size: 18px !important;\n}\n.state-badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.state-badge[data-state=draft] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.state-badge[data-state=done] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.state-badge[data-state=cancelled] {\n  background: #fde8e8;\n  color: #721c24;\n}\n/*# sourceMappingURL=livraison-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LivraisonListComponent, { className: "LivraisonListComponent", filePath: "src/app/modules/stock/components/livraisons/livraison-list.component.ts", lineNumber: 14 });
})();
export {
  LivraisonListComponent
};
//# sourceMappingURL=chunk-42KSCCJY.js.map

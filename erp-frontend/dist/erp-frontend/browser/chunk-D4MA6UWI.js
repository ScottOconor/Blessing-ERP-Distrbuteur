import {
  SalesService
} from "./chunk-C6CRDXMM.js";
import {
  ExcelExportService,
  PdfExportService
} from "./chunk-MTQHHWC2.js";
import "./chunk-7YWLATDR.js";
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

// src/app/modules/sales/components/reports/etat-commercial/etat-commercial.component.ts
var _forTrack0 = ($index, $item) => $item.clientName;
function EtatCommercialComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 14);
    \u0275\u0275listener("click", function EtatCommercialComponent_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportPdf());
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Exporter PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function EtatCommercialComponent_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportExcel());
    });
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "table_view");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Exporter Excel ");
    \u0275\u0275elementEnd()();
  }
}
function EtatCommercialComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 11);
  }
}
function EtatCommercialComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.errorMsg, " ");
  }
}
function EtatCommercialComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
}
function EtatCommercialComponent_Conditional_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 3);
    \u0275\u0275text(2, "table_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune donn\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Aucune vente enregistr\xE9e pour cette p\xE9riode.");
    \u0275\u0275elementEnd()();
  }
}
function EtatCommercialComponent_Conditional_25_Conditional_11_For_16_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("[", client_r3.clientRef, "]");
  }
}
function EtatCommercialComponent_Conditional_25_Conditional_11_For_16_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 34)(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 30);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 30);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 30);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r4.productCode || "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r4.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, line_r4.qty, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 8, line_r4.montantHT, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 11, line_r4.montantTTC, "1.2-2"));
  }
}
function EtatCommercialComponent_Conditional_25_Conditional_11_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 31)(1, "td", 32)(2, "span", 3);
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, EtatCommercialComponent_Conditional_25_Conditional_11_For_16_Conditional_5_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, EtatCommercialComponent_Conditional_25_Conditional_11_For_16_For_7_Template, 14, 14, "tr", 34, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(8, "tr", 35)(9, "td", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 30);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 30);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 30);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const client_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", client_r3.clientName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(client_r3.clientRef ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(client_r3.lines);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Sous-total ", client_r3.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 6, client_r3.totalQty, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 9, client_r3.totalHT, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 12, client_r3.totalTTC, "1.2-2"));
  }
}
function EtatCommercialComponent_Conditional_25_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "table", 21)(2, "thead")(3, "tr", 22)(4, "th", 23);
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 24);
    \u0275\u0275text(7, "D\xE9signation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 25);
    \u0275\u0275text(9, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 26);
    \u0275\u0275text(11, "CA HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 27);
    \u0275\u0275text(13, "CA TTC");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, EtatCommercialComponent_Conditional_25_Conditional_11_For_16_Template, 20, 15, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "tfoot")(18, "tr", 28)(19, "td", 29);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 30);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 30);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 30);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.data.clients);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("TOTAL G\xC9N\xC9RAL \u2014 ", ctx_r1.data.totalInvoices, " facture(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 4, ctx_r1.data.grandTotalQty, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 7, ctx_r1.data.grandTotalHT, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 10, ctx_r1.data.grandTotalTTC, "1.2-2"));
  }
}
function EtatCommercialComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h2");
    \u0275\u0275text(2, "\xC9TAT COMMERCIAL \u2014 STATISTIQUES DE VENTES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, EtatCommercialComponent_Conditional_25_Conditional_10_Template, 7, 0, "div", 19)(11, EtatCommercialComponent_Conditional_25_Conditional_11_Template, 30, 13, "div", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("P\xE9riode du ", \u0275\u0275pipeBind2(5, 5, ctx_r1.dateFrom, "dd/MM/yyyy"), " au ", \u0275\u0275pipeBind2(6, 8, ctx_r1.dateTo, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.data.totalInvoices, " facture(s) \xA0|\xA0 Imprim\xE9 le ", \u0275\u0275pipeBind2(9, 11, ctx_r1.today, "dd/MM/yyyy HH:mm"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.data.clients.length === 0 ? 10 : 11);
  }
}
var EtatCommercialComponent = class _EtatCommercialComponent {
  constructor(salesService, authService, excelExport, pdfExport) {
    this.salesService = salesService;
    this.authService = authService;
    this.excelExport = excelExport;
    this.pdfExport = pdfExport;
    this.dateFrom = "";
    this.dateTo = "";
    this.loading = false;
    this.generated = false;
    this.errorMsg = "";
    this.today = /* @__PURE__ */ new Date();
    this.data = null;
  }
  ngOnInit() {
    const now = /* @__PURE__ */ new Date();
    this.dateTo = now.toISOString().split("T")[0];
    this.dateFrom = new Date(now.getFullYear(), 0, 1).toISOString().split("T")[0];
  }
  generate() {
    if (!this.dateFrom || !this.dateTo) {
      this.errorMsg = "S\xE9lectionnez la p\xE9riode";
      return;
    }
    this.loading = true;
    this.generated = false;
    this.errorMsg = "";
    this.salesService.getEtatCommercial({
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      companyId: this.authService.getCompanyId()
    }).subscribe({
      next: (res) => {
        this.data = res;
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
    if (this.data) {
      this.pdfExport.exportEtatCommercial(this.data);
    }
  }
  exportExcel() {
    if (this.data) {
      this.excelExport.exportEtatCommercial(this.data);
    }
  }
  static {
    this.\u0275fac = function EtatCommercialComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EtatCommercialComponent)(\u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ExcelExportService), \u0275\u0275directiveInject(PdfExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EtatCommercialComponent, selectors: [["app-etat-commercial"]], decls: 26, vars: 7, consts: [[1, "page-container", "report-container"], [1, "page-header", "no-print"], [1, "page-title"], [1, "material-icons"], [2, "display", "flex", "gap", "8px"], [1, "report-header", "no-print"], [1, "filters-bar", 2, "margin-bottom", "0"], [1, "filter-group"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "filter-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner-sm"], [1, "alert-error", "mb-3", "no-print"], [1, "no-print", 2, "text-align", "center", "padding", "60px"], [1, "btn", "btn-outline", 3, "click"], [1, "spinner"], [1, "srpt-print-header"], [1, "srpt-period"], [1, "srpt-meta"], [1, "empty-state", "no-print"], [1, "srpt-table-wrap"], [1, "srpt-table"], [1, "srpt-thead"], [2, "width", "12%"], [2, "width", "44%"], [1, "text-right", 2, "width", "11%"], [1, "text-right", 2, "width", "16%"], [1, "text-right", 2, "width", "17%"], [1, "srpt-grand-total"], ["colspan", "2"], [1, "text-right", "mono"], [1, "srpt-client-header"], ["colspan", "5"], [1, "srpt-ref"], [1, "srpt-line"], [1, "srpt-client-subtotal"], [1, "mono"]], template: function EtatCommercialComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "table_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " \xC9tat Commercial \u2014 Statistiques de Ventes ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, EtatCommercialComponent_Conditional_6_Template, 9, 0, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "label");
        \u0275\u0275text(11, "P\xE9riode du *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EtatCommercialComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 7)(14, "label");
        \u0275\u0275text(15, "Au *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function EtatCommercialComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 9)(18, "button", 10);
        \u0275\u0275listener("click", function EtatCommercialComponent_Template_button_click_18_listener() {
          return ctx.generate();
        });
        \u0275\u0275conditionalCreate(19, EtatCommercialComponent_Conditional_19_Template, 1, 0, "span", 11);
        \u0275\u0275elementStart(20, "span", 3);
        \u0275\u0275text(21, "play_arrow");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " G\xE9n\xE9rer ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(23, EtatCommercialComponent_Conditional_23_Template, 4, 1, "div", 12);
        \u0275\u0275conditionalCreate(24, EtatCommercialComponent_Conditional_24_Template, 2, 0, "div", 13)(25, EtatCommercialComponent_Conditional_25_Template, 12, 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.generated ? 6 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 19 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.errorMsg ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 24 : ctx.generated && ctx.data ? 25 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['\n.mono[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #721c24;\n  font-size: 13px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.srpt-print-header[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n  margin-bottom: 14px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.srpt-print-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.srpt-print-header[_ngcontent-%COMP%]   .srpt-period[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #444;\n  margin-bottom: 2px;\n}\n.srpt-print-header[_ngcontent-%COMP%]   .srpt-meta[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #777;\n}\n.srpt-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.srpt-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n  font-size: 12px;\n  border: 1px solid #dee2e6;\n}\n.srpt-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.srpt-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid #dee2e6;\n  vertical-align: middle;\n}\n.srpt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .srpt-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #017E84;\n  color: white;\n  font-weight: 600;\n  font-size: 11px;\n  text-align: left;\n}\n.srpt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .srpt-thead[_ngcontent-%COMP%]   th.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.srpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .srpt-client-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: #e8f4f4 !important;\n  font-weight: 700;\n  color: #017E84;\n  font-size: 12px;\n  border-top: 2px solid #017E84;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.srpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .srpt-client-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  vertical-align: middle;\n}\n.srpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .srpt-client-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .srpt-ref[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 11px;\n  color: #6c757d;\n}\n.srpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.srpt-client-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n.srpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .srpt-line[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fafafa;\n}\n.srpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .srpt-line[_ngcontent-%COMP%]:hover {\n  background-color: #f0fbfb;\n}\n.srpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .srpt-line[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #212529;\n}\n.srpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .srpt-line[_ngcontent-%COMP%]   td.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.srpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .srpt-client-subtotal[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: #e0f7fa !important;\n  font-weight: 600;\n  border-top: 1px solid #00acc1;\n  font-size: 11px;\n  color: #006064;\n}\n.srpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .srpt-client-subtotal[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.srpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .srpt-client-subtotal[_ngcontent-%COMP%]   td.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.srpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .srpt-grand-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: #017E84 !important;\n  color: white !important;\n  font-weight: 700;\n  border-top: 2px solid #015f64;\n  font-size: 12px;\n}\n.srpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .srpt-grand-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.srpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .srpt-grand-total[_ngcontent-%COMP%]   td.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .srpt-print-header[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .srpt-table[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n  .srpt-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .srpt-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 3px 5px;\n  }\n  .srpt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .srpt-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #017E84 !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .srpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .srpt-client-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background-color: #e8f4f4 !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n    border-top: 2px solid #017E84 !important;\n  }\n  .srpt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .srpt-client-subtotal[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background-color: #e0f7fa !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .srpt-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .srpt-grand-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background-color: #017E84 !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n/*# sourceMappingURL=etat-commercial.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EtatCommercialComponent, [{
    type: Component,
    args: [{ selector: "app-etat-commercial", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container report-container">

  <!-- ===== HEADER ===== -->
  <div class="page-header no-print">
    <h1 class="page-title">
      <span class="material-icons">table_chart</span>
      \xC9tat Commercial \u2014 Statistiques de Ventes
    </h1>
    @if (generated) {
      <div style="display:flex;gap:8px">
        <button class="btn btn-outline" (click)="exportPdf()">
          <span class="material-icons">picture_as_pdf</span> Exporter PDF
        </button>
        <button class="btn btn-outline" (click)="exportExcel()">
          <span class="material-icons">table_view</span> Exporter Excel
        </button>
      </div>
    }
  </div>

  <!-- ===== FILTRES ===== -->
  <div class="report-header no-print">
    <div class="filters-bar" style="margin-bottom:0">
      <div class="filter-group">
        <label>P\xE9riode du *</label>
        <input type="date" class="form-control" [(ngModel)]="dateFrom">
      </div>
      <div class="filter-group">
        <label>Au *</label>
        <input type="date" class="form-control" [(ngModel)]="dateTo">
      </div>
      <div class="filter-actions">
        <button class="btn btn-primary" (click)="generate()" [disabled]="loading">
          @if (loading) { <span class="spinner-sm"></span> }
          <span class="material-icons">play_arrow</span> G\xE9n\xE9rer
        </button>
      </div>
    </div>
  </div>

  @if (errorMsg) {
    <div class="alert-error mb-3 no-print">
      <span class="material-icons">error_outline</span>{{ errorMsg }}
    </div>
  }

  @if (loading) {
    <div class="no-print" style="text-align:center;padding:60px"><div class="spinner"></div></div>
  } @else if (generated && data) {

    <!-- ===== EN-T\xCATE IMPRESSION ===== -->
    <div class="srpt-print-header">
      <h2>\xC9TAT COMMERCIAL \u2014 STATISTIQUES DE VENTES</h2>
      <div class="srpt-period">P\xE9riode du {{ dateFrom | date:'dd/MM/yyyy' }} au {{ dateTo | date:'dd/MM/yyyy' }}</div>
      <div class="srpt-meta">
        {{ data.totalInvoices }} facture(s) &nbsp;|&nbsp;
        Imprim\xE9 le {{ today | date:'dd/MM/yyyy HH:mm' }}
      </div>
    </div>

    @if (data.clients.length === 0) {
      <div class="empty-state no-print">
        <span class="material-icons">table_chart</span>
        <h3>Aucune donn\xE9e</h3>
        <p>Aucune vente enregistr\xE9e pour cette p\xE9riode.</p>
      </div>
    } @else {
      <div class="srpt-table-wrap">
        <table class="srpt-table">
          <thead>
            <tr class="srpt-thead">
              <th style="width:12%">Code</th>
              <th style="width:44%">D\xE9signation</th>
              <th class="text-right" style="width:11%">Quantit\xE9</th>
              <th class="text-right" style="width:16%">CA HT</th>
              <th class="text-right" style="width:17%">CA TTC</th>
            </tr>
          </thead>
          <tbody>
            @for (client of data.clients; track client.clientName) {
              <!-- CLIENT HEADER -->
              <tr class="srpt-client-header">
                <td colspan="5">
                  <span class="material-icons">person</span>
                  {{ client.clientName }}
                  @if (client.clientRef) { <span class="srpt-ref">[{{ client.clientRef }}]</span> }
                </td>
              </tr>

              <!-- PRODUCT LINES -->
              @for (line of client.lines; track $index) {
                <tr class="srpt-line">
                  <td class="mono">{{ line.productCode || '' }}</td>
                  <td>{{ line.productName }}</td>
                  <td class="text-right mono">{{ line.qty | number:'1.2-2' }}</td>
                  <td class="text-right mono">{{ line.montantHT | number:'1.2-2' }}</td>
                  <td class="text-right mono">{{ line.montantTTC | number:'1.2-2' }}</td>
                </tr>
              }

              <!-- CLIENT SUBTOTAL -->
              <tr class="srpt-client-subtotal">
                <td colspan="2">Sous-total {{ client.clientName }}</td>
                <td class="text-right mono">{{ client.totalQty | number:'1.2-2' }}</td>
                <td class="text-right mono">{{ client.totalHT | number:'1.2-2' }}</td>
                <td class="text-right mono">{{ client.totalTTC | number:'1.2-2' }}</td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr class="srpt-grand-total">
              <td colspan="2">TOTAL G\xC9N\xC9RAL \u2014 {{ data.totalInvoices }} facture(s)</td>
              <td class="text-right mono">{{ data.grandTotalQty | number:'1.2-2' }}</td>
              <td class="text-right mono">{{ data.grandTotalHT | number:'1.2-2' }}</td>
              <td class="text-right mono">{{ data.grandTotalTTC | number:'1.2-2' }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    }
  }
</div>
`, styles: ['/* src/app/modules/sales/components/reports/etat-commercial/etat-commercial.component.scss */\n.mono {\n  font-family: "Courier New", monospace;\n}\n.text-right {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.text-center {\n  text-align: center;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #721c24;\n  font-size: 13px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.spinner-sm {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.srpt-print-header {\n  display: none;\n  text-align: center;\n  margin-bottom: 14px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.srpt-print-header h2 {\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.srpt-print-header .srpt-period {\n  font-size: 12px;\n  font-weight: 600;\n  color: #444;\n  margin-bottom: 2px;\n}\n.srpt-print-header .srpt-meta {\n  font-size: 10px;\n  color: #777;\n}\n.srpt-table-wrap {\n  overflow-x: auto;\n}\n.srpt-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n  font-size: 12px;\n  border: 1px solid #dee2e6;\n}\n.srpt-table th,\n.srpt-table td {\n  padding: 6px 10px;\n  border: 1px solid #dee2e6;\n  vertical-align: middle;\n}\n.srpt-table thead .srpt-thead th {\n  background-color: #017E84;\n  color: white;\n  font-weight: 600;\n  font-size: 11px;\n  text-align: left;\n}\n.srpt-table thead .srpt-thead th.text-right {\n  text-align: right;\n}\n.srpt-table tbody .srpt-client-header td {\n  background-color: #e8f4f4 !important;\n  font-weight: 700;\n  color: #017E84;\n  font-size: 12px;\n  border-top: 2px solid #017E84;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.srpt-table tbody .srpt-client-header td .material-icons {\n  font-size: 16px;\n  vertical-align: middle;\n}\n.srpt-table tbody .srpt-client-header td .srpt-ref {\n  font-weight: 400;\n  font-size: 11px;\n  color: #6c757d;\n}\n.srpt-table tbody tr.srpt-client-header td {\n  display: table-cell;\n}\n.srpt-table tbody .srpt-line:nth-child(even) {\n  background-color: #fafafa;\n}\n.srpt-table tbody .srpt-line:hover {\n  background-color: #f0fbfb;\n}\n.srpt-table tbody .srpt-line td {\n  color: #212529;\n}\n.srpt-table tbody .srpt-line td.text-right {\n  text-align: right;\n}\n.srpt-table tbody .srpt-client-subtotal td {\n  background-color: #e0f7fa !important;\n  font-weight: 600;\n  border-top: 1px solid #00acc1;\n  font-size: 11px;\n  color: #006064;\n}\n.srpt-table tbody .srpt-client-subtotal td:first-child {\n  text-align: left;\n}\n.srpt-table tbody .srpt-client-subtotal td.text-right {\n  text-align: right;\n}\n.srpt-table tfoot .srpt-grand-total td {\n  background-color: #017E84 !important;\n  color: white !important;\n  font-weight: 700;\n  border-top: 2px solid #015f64;\n  font-size: 12px;\n}\n.srpt-table tfoot .srpt-grand-total td:first-child {\n  text-align: left;\n}\n.srpt-table tfoot .srpt-grand-total td.text-right {\n  text-align: right;\n}\n@media print {\n  .no-print {\n    display: none !important;\n  }\n  .srpt-print-header {\n    display: block !important;\n  }\n  .srpt-table {\n    font-size: 8px;\n  }\n  .srpt-table th,\n  .srpt-table td {\n    padding: 3px 5px;\n  }\n  .srpt-table thead .srpt-thead th {\n    background-color: #017E84 !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .srpt-table tbody .srpt-client-header td {\n    background-color: #e8f4f4 !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n    border-top: 2px solid #017E84 !important;\n  }\n  .srpt-table tbody .srpt-client-subtotal td {\n    background-color: #e0f7fa !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .srpt-table tfoot .srpt-grand-total td {\n    background-color: #017E84 !important;\n    color: white !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n/*# sourceMappingURL=etat-commercial.component.css.map */\n'] }]
  }], () => [{ type: SalesService }, { type: AuthService }, { type: ExcelExportService }, { type: PdfExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EtatCommercialComponent, { className: "EtatCommercialComponent", filePath: "src/app/modules/sales/components/reports/etat-commercial/etat-commercial.component.ts", lineNumber: 16 });
})();
export {
  EtatCommercialComponent
};
//# sourceMappingURL=chunk-D4MA6UWI.js.map

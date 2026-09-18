import {
  RemiseService
} from "./chunk-RVH7W7CX.js";
import {
  PurchaseService
} from "./chunk-T7PR2AZC.js";
import {
  RistourneService
} from "./chunk-SAK5MSBQ.js";
import {
  StockService
} from "./chunk-VJTDSZQK.js";
import {
  SalesService
} from "./chunk-PDYKRBTO.js";
import {
  require_exceljs_min
} from "./chunk-V5EAPQSQ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-NRXD6HPP.js";
import {
  AccountingService
} from "./chunk-PGZXUWCB.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import {
  __async,
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/core/utils/excel-export.util.ts
var ExcelJS = __toESM(require_exceljs_min());
function exportRowsToExcel(sheetName, headers, rows, fileName) {
  return __async(this, null, function* () {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet(sheetName);
    const PRIMARY = "FF2563EB", WHITE = "FFFFFFFF";
    const hRow = ws.addRow(headers);
    hRow.eachCell((c) => {
      c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: PRIMARY } };
      c.font = { bold: true, color: { argb: WHITE }, size: 10 };
      c.alignment = { horizontal: "center", vertical: "middle" };
      c.border = { top: { style: "thin" }, bottom: { style: "thin" }, left: { style: "thin" }, right: { style: "thin" } };
    });
    hRow.height = 20;
    for (const row of rows) {
      ws.addRow(row.map((v) => v ?? "")).eachCell((c) => {
        c.font = { size: 9 };
        c.border = { bottom: { style: "hair", color: { argb: "FFCCCCCC" } } };
      });
    }
    ws.columns.forEach((col) => {
      col.width = 20;
    });
    const buf = yield wb.xlsx.writeBuffer();
    const blob = new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  });
}

// src/app/modules/config/components/export/export.component.ts
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.id;
function ExportComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMsg);
  }
}
function ExportComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 3);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg);
  }
}
function ExportComponent_For_11_For_7_Conditional_7_Conditional_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", j_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r5.code, " - ", j_r5.name);
  }
}
function ExportComponent_For_11_For_7_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "label");
    \u0275\u0275text(2, "Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ExportComponent_For_11_For_7_Conditional_7_Conditional_1_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const item_r4 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(item_r4.journalId, $event) || (item_r4.journalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 19);
    \u0275\u0275text(5, "\u2014 Tous les journaux \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, ExportComponent_For_11_For_7_Conditional_7_Conditional_1_For_7_Template, 2, 3, "option", 19, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", item_r4.journalId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.journals);
  }
}
function ExportComponent_For_11_For_7_Conditional_7_Conditional_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7.name);
  }
}
function ExportComponent_For_11_For_7_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ExportComponent_For_11_For_7_Conditional_7_Conditional_2_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const item_r4 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(item_r4.partnerId, $event) || (item_r4.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, ExportComponent_For_11_For_7_Conditional_7_Conditional_2_For_7_Template, 2, 2, "option", 19, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.partnerKind === "supplier" ? "Fournisseur" : "Client");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", item_r4.partnerId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 ", item_r4.partnerKind === "supplier" ? "Tous les fournisseurs" : "Tous les clients", " \u2014");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.partnerOptions(item_r4));
  }
}
function ExportComponent_For_11_For_7_Conditional_7_Conditional_3_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r9 = ctx.$implicit;
    \u0275\u0275property("ngValue", w_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r9.name);
  }
}
function ExportComponent_For_11_For_7_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "label");
    \u0275\u0275text(2, "Entrep\xF4t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ExportComponent_For_11_For_7_Conditional_7_Conditional_3_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const item_r4 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(item_r4.warehouseId, $event) || (item_r4.warehouseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 19);
    \u0275\u0275text(5, "\u2014 Tous les entrep\xF4ts \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, ExportComponent_For_11_For_7_Conditional_7_Conditional_3_For_7_Template, 2, 2, "option", 19, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", item_r4.warehouseId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.warehouses);
  }
}
function ExportComponent_For_11_For_7_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "label");
    \u0275\u0275text(2, "Du");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function ExportComponent_For_11_For_7_Conditional_7_Conditional_4_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const item_r4 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(item_r4.dateFrom, $event) || (item_r4.dateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 17)(5, "label");
    \u0275\u0275text(6, "Au");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function ExportComponent_For_11_For_7_Conditional_7_Conditional_4_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r10);
      const item_r4 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(item_r4.dateTo, $event) || (item_r4.dateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", item_r4.dateFrom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", item_r4.dateTo);
  }
}
function ExportComponent_For_11_For_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, ExportComponent_For_11_For_7_Conditional_7_Conditional_1_Template, 8, 2, "div", 17);
    \u0275\u0275conditionalCreate(2, ExportComponent_For_11_For_7_Conditional_7_Conditional_2_Template, 8, 4, "div", 17);
    \u0275\u0275conditionalCreate(3, ExportComponent_For_11_For_7_Conditional_7_Conditional_3_Template, 8, 2, "div", 17);
    \u0275\u0275conditionalCreate(4, ExportComponent_For_11_For_7_Conditional_7_Conditional_4_Template, 8, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.hasJournalFilter ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.hasPartnerFilter ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.hasWarehouseFilter ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.hasDateFilter ? 4 : -1);
  }
}
function ExportComponent_For_11_For_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Export en cours\u2026 ");
  }
}
function ExportComponent_For_11_For_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "file_download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Exporter ");
  }
}
function ExportComponent_For_11_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(7, ExportComponent_For_11_For_7_Conditional_7_Template, 5, 4, "div", 15);
    \u0275\u0275elementStart(8, "button", 16);
    \u0275\u0275listener("click", function ExportComponent_For_11_For_7_Template_button_click_8_listener() {
      const item_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.runExport(item_r4.id));
    });
    \u0275\u0275conditionalCreate(9, ExportComponent_For_11_For_7_Conditional_9_Template, 3, 0)(10, ExportComponent_For_11_For_7_Conditional_10_Template, 3, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.hasJournalFilter || item_r4.hasDateFilter || item_r4.hasPartnerFilter || item_r4.hasWarehouseFilter ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", item_r4.exporting);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.exporting ? 9 : 10);
  }
}
function ExportComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275repeaterCreate(6, ExportComponent_For_11_For_7_Template, 11, 5, "div", 10, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", section_r11.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r11.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", section_r11.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(section_r11.items);
  }
}
var ExportComponent = class _ExportComponent {
  constructor(authService, accountingService, stockService, salesService, ristourneService, purchaseService, remiseService) {
    this.authService = authService;
    this.accountingService = accountingService;
    this.stockService = stockService;
    this.salesService = salesService;
    this.ristourneService = ristourneService;
    this.purchaseService = purchaseService;
    this.remiseService = remiseService;
    this.sections = [];
    this.journals = [];
    this.warehouses = [];
    this.clients = [];
    this.suppliers = [];
    this.errorMsg = "";
    this.successMsg = "";
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    this.accountingService.getJournals(this.companyId).subscribe((j) => this.journals = j);
    this.stockService.getWarehouses(this.companyId).subscribe((w) => {
      this.warehouses = w.filter((x) => x.active !== false);
    });
    this.salesService.getClients(this.companyId).subscribe((c) => this.clients = c);
    this.accountingService.getPartners(this.companyId).subscribe((p) => {
      this.suppliers = p.filter((x) => x.type === "supplier" || x.type === "both");
    });
    this.sections = this.buildSections();
  }
  defaultDateFrom() {
    return new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1).toISOString().split("T")[0];
  }
  defaultDateTo() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  makeItem(partial) {
    const hasDateFilter = partial.hasDateFilter ?? false;
    return {
      id: partial.id,
      label: partial.label,
      description: partial.description,
      hasDateFilter,
      hasJournalFilter: partial.hasJournalFilter ?? false,
      hasPartnerFilter: partial.hasPartnerFilter ?? false,
      partnerKind: partial.partnerKind ?? null,
      hasWarehouseFilter: partial.hasWarehouseFilter ?? false,
      dateFrom: hasDateFilter ? this.defaultDateFrom() : "",
      dateTo: hasDateFilter ? this.defaultDateTo() : "",
      journalId: null,
      partnerId: null,
      warehouseId: null,
      exporting: false
    };
  }
  buildSections() {
    return [
      {
        title: "Comptabilit\xE9",
        icon: "account_balance",
        color: "#2563EB",
        items: [
          this.makeItem({ id: "pieces", label: "Pi\xE8ces comptables", description: "\xC9critures comptables, filtrables par journal et p\xE9riode.", hasDateFilter: true, hasJournalFilter: true }),
          this.makeItem({ id: "journaux", label: "Journaux", description: "Liste des journaux comptables configur\xE9s." }),
          this.makeItem({ id: "plan-comptable", label: "Plan comptable", description: "Tous les comptes du plan comptable OHADA." }),
          this.makeItem({ id: "partenaires", label: "Clients & Fournisseurs", description: "Tous les tiers (clients, fournisseurs)." })
        ]
      },
      {
        title: "Stock",
        icon: "inventory_2",
        color: "#F97316",
        items: [
          this.makeItem({ id: "articles", label: "Articles", description: "Catalogue complet : r\xE9f\xE9rences, prix, stock, TVA." }),
          this.makeItem({ id: "mouvements", label: "Mouvements de stock", description: "Tous les mouvements de produits, filtrables par p\xE9riode.", hasDateFilter: true }),
          this.makeItem({ id: "transferts", label: "Transferts inter-d\xE9p\xF4ts", description: "Transferts entre entrep\xF4ts, filtrables par p\xE9riode.", hasDateFilter: true }),
          this.makeItem({ id: "expeditions", label: "Exp\xE9ditions inter-agences", description: "Exp\xE9ditions vers d'autres agences, filtrables par p\xE9riode.", hasDateFilter: true })
        ]
      },
      {
        title: "Ventes",
        icon: "point_of_sale",
        color: "#06B6D4",
        items: [
          this.makeItem({ id: "commandes-ventes", label: "Bons de commande", description: "Commandes clients, filtrables par p\xE9riode, client et entrep\xF4t.", hasDateFilter: true, hasPartnerFilter: true, partnerKind: "client", hasWarehouseFilter: true }),
          this.makeItem({ id: "factures-ventes", label: "Factures", description: "Factures de vente, filtrables par p\xE9riode, client et entrep\xF4t.", hasDateFilter: true, hasPartnerFilter: true, partnerKind: "client", hasWarehouseFilter: true }),
          this.makeItem({ id: "avoirs-ventes", label: "Avoirs", description: "Avoirs clients, filtrables par p\xE9riode, client et entrep\xF4t.", hasDateFilter: true, hasPartnerFilter: true, partnerKind: "client", hasWarehouseFilter: true }),
          this.makeItem({ id: "remises-clients", label: "Tarifs n\xE9goci\xE9s clients", description: "Tarifs n\xE9goci\xE9s par client, avec le rabais calcul\xE9 par article.", hasPartnerFilter: true, partnerKind: "client" }),
          this.makeItem({ id: "ristournes-config", label: "Ristournes \u2014 Configuration", description: "Taux de ristourne configur\xE9s par client et cat\xE9gorie.", hasPartnerFilter: true, partnerKind: "client" }),
          this.makeItem({ id: "ristournes-paiements", label: "Ristournes \u2014 R\xE8glements", description: "R\xE8glements de ristournes, filtrables par p\xE9riode et client.", hasDateFilter: true, hasPartnerFilter: true, partnerKind: "client" })
        ]
      },
      {
        title: "Achats",
        icon: "local_shipping",
        color: "#10B981",
        items: [
          this.makeItem({ id: "commandes-achats", label: "Bons de commande", description: "Commandes fournisseurs, filtrables par p\xE9riode et fournisseur.", hasDateFilter: true, hasPartnerFilter: true, partnerKind: "supplier" }),
          this.makeItem({ id: "factures-achats", label: "Factures", description: "Factures d'achat, filtrables par p\xE9riode, fournisseur et entrep\xF4t.", hasDateFilter: true, hasPartnerFilter: true, partnerKind: "supplier", hasWarehouseFilter: true }),
          this.makeItem({ id: "avoirs-achats", label: "Avoirs", description: "Avoirs fournisseurs, filtrables par p\xE9riode, fournisseur et entrep\xF4t.", hasDateFilter: true, hasPartnerFilter: true, partnerKind: "supplier", hasWarehouseFilter: true }),
          this.makeItem({ id: "remises-fournisseurs", label: "Tarifs n\xE9goci\xE9s fournisseurs", description: "Tarifs n\xE9goci\xE9s par fournisseur, avec l'\xE9cart calcul\xE9 par article.", hasPartnerFilter: true, partnerKind: "supplier" }),
          this.makeItem({ id: "remises-config", label: "Remises \u2014 Configuration", description: "Taux de remise configur\xE9s par fournisseur et cat\xE9gorie.", hasPartnerFilter: true, partnerKind: "supplier" }),
          this.makeItem({ id: "remises-paiements", label: "Remises \u2014 R\xE8glements", description: "R\xE8glements de remises, filtrables par p\xE9riode et fournisseur.", hasDateFilter: true, hasPartnerFilter: true, partnerKind: "supplier" })
        ]
      }
    ];
  }
  findItem(id) {
    for (const s of this.sections) {
      const it = s.items.find((i) => i.id === id);
      if (it)
        return it;
    }
    throw new Error("Export inconnu : " + id);
  }
  /** Filtre une liste par date (inclusive) via un accesseur, si from/to sont renseignés. */
  filterByDate(rows, dateOf, from, to) {
    if (!from && !to)
      return rows;
    return rows.filter((r) => {
      const d = dateOf(r);
      if (!d)
        return true;
      if (from && d < from)
        return false;
      if (to && d > to)
        return false;
      return true;
    });
  }
  runExport(id) {
    return __async(this, null, function* () {
      const item = this.findItem(id);
      item.exporting = true;
      this.errorMsg = "";
      try {
        switch (id) {
          case "pieces":
            yield this.exportPieces(item);
            break;
          case "journaux":
            yield this.exportJournaux();
            break;
          case "plan-comptable":
            yield this.exportPlanComptable();
            break;
          case "partenaires":
            yield this.exportPartenaires();
            break;
          case "articles":
            yield this.exportArticles();
            break;
          case "mouvements":
            yield this.exportMouvements(item);
            break;
          case "transferts":
            yield this.exportTransferts(item);
            break;
          case "expeditions":
            yield this.exportExpeditions(item);
            break;
          case "commandes-ventes":
            yield this.exportCommandesVentes(item);
            break;
          case "factures-ventes":
            yield this.exportFacturesVentes(item);
            break;
          case "avoirs-ventes":
            yield this.exportAvoirsVentes(item);
            break;
          case "remises-clients":
            yield this.exportRemisesClients(item);
            break;
          case "ristournes-config":
            yield this.exportRistournesConfig(item);
            break;
          case "ristournes-paiements":
            yield this.exportRistournesPaiements(item);
            break;
          case "commandes-achats":
            yield this.exportCommandesAchats(item);
            break;
          case "factures-achats":
            yield this.exportFacturesAchats(item);
            break;
          case "avoirs-achats":
            yield this.exportAvoirsAchats(item);
            break;
          case "remises-fournisseurs":
            yield this.exportRemisesFournisseurs(item);
            break;
          case "remises-config":
            yield this.exportRemisesConfig(item);
            break;
          case "remises-paiements":
            yield this.exportRemisesPaiements(item);
            break;
        }
        this.showSuccess(`Export "${item.label}" termin\xE9`);
      } catch (e) {
        this.errorMsg = e?.error?.message || e?.message || "Erreur lors de l'export";
        setTimeout(() => this.errorMsg = "", 5e3);
      } finally {
        item.exporting = false;
      }
    });
  }
  toPromise(obs) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => obs.subscribe({ next: resolve, error: reject }));
    });
  }
  // ── Comptabilité ─────────────────────────────────────────────────────────
  exportPieces(item) {
    return __async(this, null, function* () {
      const moves = yield this.toPromise(this.accountingService.getMoves(this.companyId, {
        journalId: item.journalId || void 0,
        dateFrom: item.dateFrom || void 0,
        dateTo: item.dateTo || void 0
      }));
      const rows = moves.map((m) => [
        m.name || "",
        m.date,
        m.journalName || "",
        m.ref || "",
        m.partnerName || "",
        this.stateLabel(m.state),
        m.totalDebit ?? 0,
        m.totalCredit ?? 0
      ]);
      yield exportRowsToExcel("Pi\xE8ces comptables", ["Num\xE9ro", "Date", "Journal", "R\xE9f\xE9rence", "Tiers", "\xC9tat", "Total d\xE9bit", "Total cr\xE9dit"], rows, this.fileName("pieces-comptables", item));
    });
  }
  exportJournaux() {
    return __async(this, null, function* () {
      const rows = this.journals.length ? this.journals : yield this.toPromise(this.accountingService.getJournals(this.companyId));
      const mapped = rows.map((j) => [j.code, j.name, j.type, j.defaultDebitAccountCode || "", j.defaultCreditAccountCode || "", j.active ? "Oui" : "Non"]);
      yield exportRowsToExcel("Journaux", ["Code", "Nom", "Type", "Compte d\xE9bit", "Compte cr\xE9dit", "Actif"], mapped, this.fileName("journaux"));
    });
  }
  exportPlanComptable() {
    return __async(this, null, function* () {
      const accounts = yield this.toPromise(this.accountingService.getAccounts(this.companyId));
      const rows = accounts.map((a) => [a.code, a.name, a.accountType, a.internalType, a.reconcile ? "Oui" : "Non", a.deprecated ? "Oui" : "Non"]);
      yield exportRowsToExcel("Plan comptable", ["Code", "Nom", "Type de compte", "Type interne", "Lettrable", "D\xE9pr\xE9ci\xE9"], rows, this.fileName("plan-comptable"));
    });
  }
  exportPartenaires() {
    return __async(this, null, function* () {
      const partners = yield this.toPromise(this.accountingService.getPartners(this.companyId));
      const rows = partners.map((p) => [p.ref || "", p.name, this.partnerTypeLabel(p.type), p.phone || "", p.email || "", p.address || ""]);
      yield exportRowsToExcel("Clients & Fournisseurs", ["R\xE9f\xE9rence", "Nom", "Type", "T\xE9l\xE9phone", "Email", "Adresse"], rows, this.fileName("clients-fournisseurs"));
    });
  }
  // ── Stock ────────────────────────────────────────────────────────────────
  exportArticles() {
    return __async(this, null, function* () {
      const products = yield this.toPromise(this.stockService.getProducts(this.companyId));
      const rows = products.map((p) => [
        p.defaultCode || "",
        p.name,
        p.categoryName || "",
        this.productTypeLabel(p.type),
        p.uomName || "",
        p.standardPrice ?? 0,
        p.salePrice ?? 0,
        p.qtyOnHand ?? 0,
        p.exemptTva ? "Oui" : "Non",
        p.exemptTvaAchat ? "Oui" : "Non",
        p.active ? "Oui" : "Non"
      ]);
      yield exportRowsToExcel("Articles", ["R\xE9f\xE9rence", "Nom", "Cat\xE9gorie", "Type", "Unit\xE9", "Prix revient", "Prix vente", "Stock", "Exempt\xE9 TVA vente", "Exempt\xE9 TVA achat", "Actif"], rows, this.fileName("articles"));
    });
  }
  exportMouvements(item) {
    return __async(this, null, function* () {
      const moves = yield this.toPromise(this.stockService.getMovements(this.companyId, {
        dateFrom: item.dateFrom || void 0,
        dateTo: item.dateTo || void 0
      }));
      const rows = moves.map((m) => [
        m.pickingRef || "",
        m.dateDone || "",
        m.productCode || "",
        m.productName || "",
        m.categoryName || "",
        this.moveDirectionLabel(m.moveDirection),
        m.qtyDone ?? m.qtyDemanded ?? 0,
        m.uomName || "",
        m.locationName || "",
        m.locationDestName || "",
        this.stateLabel(m.state),
        m.partnerName || ""
      ]);
      yield exportRowsToExcel("Mouvements de stock", ["Pi\xE8ce", "Date", "R\xE9f\xE9rence", "Article", "Cat\xE9gorie", "Sens", "Quantit\xE9", "Unit\xE9", "Emplacement source", "Emplacement dest.", "\xC9tat", "Tiers"], rows, this.fileName("mouvements-stock", item));
    });
  }
  exportTransferts(item) {
    return __async(this, null, function* () {
      const all = yield this.toPromise(this.stockService.getTransferts(this.companyId));
      const rows = this.filterByDate(all, (p) => p.dateDone || p.scheduledDate, item.dateFrom, item.dateTo).map((p) => [p.name || "", p.scheduledDate || "", p.dateDone || "", p.sourceWarehouseName || "", p.destWarehouseName || "", this.stateLabel(p.state), p.origin || ""]);
      yield exportRowsToExcel("Transferts inter-d\xE9p\xF4ts", ["R\xE9f\xE9rence", "Date pr\xE9vue", "Date r\xE9alis\xE9e", "Entrep\xF4t source", "Entrep\xF4t destination", "\xC9tat", "Origine"], rows, this.fileName("transferts", item));
    });
  }
  exportExpeditions(item) {
    return __async(this, null, function* () {
      const all = yield this.toPromise(this.stockService.getInterCompanyExpeditions(this.companyId));
      const rows = this.filterByDate(all, (p) => p.dateDone || p.scheduledDate, item.dateFrom, item.dateTo).map((p) => [p.name || "", p.scheduledDate || "", p.dateDone || "", p.agencyName || "", p.remoteAgencyName || "", this.stateLabel(p.state), p.origin || ""]);
      yield exportRowsToExcel("Exp\xE9ditions inter-agences", ["R\xE9f\xE9rence", "Date pr\xE9vue", "Date r\xE9alis\xE9e", "Agence source", "Agence destination", "\xC9tat", "Origine"], rows, this.fileName("expeditions", item));
    });
  }
  // ── Ventes ───────────────────────────────────────────────────────────────
  exportCommandesVentes(item) {
    return __async(this, null, function* () {
      let orders = this.filterByDate(yield this.toPromise(this.salesService.getOrders(this.companyId)), (o) => o.date, item.dateFrom, item.dateTo);
      if (item.partnerId)
        orders = orders.filter((o) => o.partnerId === item.partnerId);
      if (item.warehouseId)
        orders = orders.filter((o) => o.warehouseId === item.warehouseId);
      const rows = orders.map((o) => [o.name || "", o.date, o.partnerName || "", this.stateLabel(o.state), o.warehouseName || "", o.journalName || "", o.totalHT ?? 0, o.totalTVA ?? 0, o.totalTTC ?? 0]);
      yield exportRowsToExcel("Bons de commande ventes", ["Num\xE9ro", "Date", "Client", "\xC9tat", "Entrep\xF4t", "Journal", "Total HT", "Total TVA", "Total TTC"], rows, this.fileName("commandes-ventes", item));
    });
  }
  exportFacturesVentes(item) {
    return __async(this, null, function* () {
      let invoices = this.filterByDate(yield this.toPromise(this.salesService.getInvoices(this.companyId)), (i) => i.date, item.dateFrom, item.dateTo);
      if (item.partnerId)
        invoices = invoices.filter((i) => i.partnerId === item.partnerId);
      if (item.warehouseId)
        invoices = invoices.filter((i) => i.warehouseId === item.warehouseId);
      const rows = invoices.map((i) => [i.name || "", i.date, i.partnerName || "", this.stateLabel(i.state), i.warehouseName || "", i.totalHT ?? 0, i.totalTVA ?? 0, i.totalTTC ?? 0, i.montantPaye ?? 0, i.montantDu ?? 0]);
      yield exportRowsToExcel("Factures ventes", ["Num\xE9ro", "Date", "Client", "\xC9tat", "Entrep\xF4t", "Total HT", "Total TVA", "Total TTC", "Pay\xE9", "D\xFB"], rows, this.fileName("factures-ventes", item));
    });
  }
  exportAvoirsVentes(item) {
    return __async(this, null, function* () {
      let avoirs = this.filterByDate(yield this.toPromise(this.salesService.getAvoirs(this.companyId)), (i) => i.date, item.dateFrom, item.dateTo);
      if (item.partnerId)
        avoirs = avoirs.filter((i) => i.partnerId === item.partnerId);
      if (item.warehouseId)
        avoirs = avoirs.filter((i) => i.warehouseId === item.warehouseId);
      const rows = avoirs.map((i) => [i.name || "", i.date, i.partnerName || "", this.stateLabel(i.state), i.warehouseName || "", i.totalHT ?? 0, i.totalTVA ?? 0, i.totalTTC ?? 0]);
      yield exportRowsToExcel("Avoirs ventes", ["Num\xE9ro", "Date", "Client", "\xC9tat", "Entrep\xF4t", "Total HT", "Total TVA", "Total TTC"], rows, this.fileName("avoirs-ventes", item));
    });
  }
  exportRemisesClients(item) {
    return __async(this, null, function* () {
      const targets = item.partnerId ? this.clients.filter((c) => c.id === item.partnerId) : this.clients;
      const calls = targets.filter((c) => c.id != null).map((c) => this.salesService.getPrixClientByClient(c.id, this.companyId));
      const results = calls.length ? yield this.toPromise(forkJoin(calls)) : [];
      const rows = results.flat().map((p) => [p.clientName || "", p.productCode || "", p.productName || "", p.salePriceStandard ?? 0, p.prixClient ?? 0, p.rabaisUnitaire ?? 0]);
      yield exportRowsToExcel("Remises clients", ["Client", "Code article", "Article", "Prix standard", "Prix n\xE9goci\xE9", "Rabais unitaire"], rows, this.fileName("remises-clients", item));
    });
  }
  exportRistournesConfig(item) {
    return __async(this, null, function* () {
      let rows = item.partnerId ? yield this.toPromise(this.ristourneService.getByPartner(item.partnerId, this.companyId)) : yield this.toPromise(this.ristourneService.getAll(this.companyId));
      const mapped = rows.map((r) => [r.partnerName || "", r.categoryName || "", r.typeRistourne || "", r.montantFixe ?? 0, r.montantTTCUnitaire ?? 0, r.active === false ? "Non" : "Oui"]);
      yield exportRowsToExcel("Ristournes - Configuration", ["Client", "Cat\xE9gorie", "Type", "Montant fixe", "Montant TTC unitaire", "Actif"], mapped, this.fileName("ristournes-config", item));
    });
  }
  exportRistournesPaiements(item) {
    return __async(this, null, function* () {
      let paiements = item.dateFrom && item.dateTo ? yield this.toPromise(this.ristourneService.getRapport(this.companyId, item.dateFrom, item.dateTo)) : yield this.toPromise(this.ristourneService.getAllPaiements(this.companyId));
      if (item.partnerId)
        paiements = paiements.filter((p) => p.partnerId === item.partnerId);
      const rows = paiements.map((p) => [p.name || "", p.date || "", p.partnerName || "", this.stateLabel(p.state), p.typeRistourne || "", p.totalAmount ?? 0, p.generatedInvoiceName || p.invoiceName || ""]);
      yield exportRowsToExcel("Ristournes - R\xE8glements", ["R\xE9f\xE9rence", "Date", "Client", "\xC9tat", "Type", "Montant total", "Facture g\xE9n\xE9r\xE9e"], rows, this.fileName("ristournes-paiements", item));
    });
  }
  // ── Achats ───────────────────────────────────────────────────────────────
  exportCommandesAchats(item) {
    return __async(this, null, function* () {
      let orders = this.filterByDate(yield this.toPromise(this.purchaseService.getOrders(this.companyId)), (o) => o.date, item.dateFrom, item.dateTo);
      if (item.partnerId)
        orders = orders.filter((o) => o.partnerId === item.partnerId);
      const rows = orders.map((o) => [o.name || "", o.date, o.partnerName || "", this.stateLabel(o.state), o.receptionWarehouseName || "", o.totalHT ?? 0, o.totalTVA ?? 0, o.totalTTC ?? 0]);
      yield exportRowsToExcel("Bons de commande achats", ["Num\xE9ro", "Date", "Fournisseur", "\xC9tat", "Entrep\xF4t", "Total HT", "Total TVA", "Total TTC"], rows, this.fileName("commandes-achats", item));
    });
  }
  exportFacturesAchats(item) {
    return __async(this, null, function* () {
      let invoices = this.filterByDate(yield this.toPromise(this.purchaseService.getInvoices(this.companyId)), (i) => i.date, item.dateFrom, item.dateTo);
      if (item.partnerId)
        invoices = invoices.filter((i) => i.partnerId === item.partnerId);
      if (item.warehouseId)
        invoices = invoices.filter((i) => i.warehouseId === item.warehouseId);
      const rows = invoices.map((i) => [i.name || "", i.date, i.partnerName || "", this.stateLabel(i.state), i.warehouseName || "", i.totalHT ?? 0, i.totalTVA ?? 0, i.totalTTC ?? 0, i.montantPaye ?? 0, i.montantDu ?? 0]);
      yield exportRowsToExcel("Factures achats", ["Num\xE9ro", "Date", "Fournisseur", "\xC9tat", "Entrep\xF4t", "Total HT", "Total TVA", "Total TTC", "Pay\xE9", "D\xFB"], rows, this.fileName("factures-achats", item));
    });
  }
  exportAvoirsAchats(item) {
    return __async(this, null, function* () {
      let avoirs = this.filterByDate(yield this.toPromise(this.purchaseService.getAvoirs(this.companyId)), (i) => i.date, item.dateFrom, item.dateTo);
      if (item.partnerId)
        avoirs = avoirs.filter((i) => i.partnerId === item.partnerId);
      if (item.warehouseId)
        avoirs = avoirs.filter((i) => i.warehouseId === item.warehouseId);
      const rows = avoirs.map((i) => [i.name || "", i.date, i.partnerName || "", this.stateLabel(i.state), i.warehouseName || "", i.totalHT ?? 0, i.totalTVA ?? 0, i.totalTTC ?? 0]);
      yield exportRowsToExcel("Avoirs achats", ["Num\xE9ro", "Date", "Fournisseur", "\xC9tat", "Entrep\xF4t", "Total HT", "Total TVA", "Total TTC"], rows, this.fileName("avoirs-achats", item));
    });
  }
  exportRemisesFournisseurs(item) {
    return __async(this, null, function* () {
      const targets = item.partnerId ? this.suppliers.filter((s) => s.id === item.partnerId) : this.suppliers;
      const calls = targets.filter((s) => s.id != null).map((s) => this.purchaseService.getPrixFournisseurByFournisseur(s.id, this.companyId));
      const results = calls.length ? yield this.toPromise(forkJoin(calls)) : [];
      const rows = results.flat().map((p) => [p.fournisseurName || "", p.productCode || "", p.productName || "", p.standardPrice ?? 0, p.prixFournisseur ?? 0, p.ecartUnitaire ?? 0]);
      yield exportRowsToExcel("Remises fournisseurs", ["Fournisseur", "Code article", "Article", "Prix standard", "Prix n\xE9goci\xE9", "\xC9cart unitaire"], rows, this.fileName("remises-fournisseurs", item));
    });
  }
  exportRemisesConfig(item) {
    return __async(this, null, function* () {
      const rows = item.partnerId ? yield this.toPromise(this.remiseService.getByPartner(item.partnerId, this.companyId)) : yield this.toPromise(this.remiseService.getAll(this.companyId));
      const mapped = rows.map((r) => [r.partnerName || "", r.categoryName || "", r.typeRemise || "", r.montantFixe ?? 0, r.montantTTCUnitaire ?? 0, r.active === false ? "Non" : "Oui"]);
      yield exportRowsToExcel("Remises - Configuration", ["Fournisseur", "Cat\xE9gorie", "Type", "Montant fixe", "Montant TTC unitaire", "Actif"], mapped, this.fileName("remises-config", item));
    });
  }
  exportRemisesPaiements(item) {
    return __async(this, null, function* () {
      let paiements = item.dateFrom && item.dateTo ? yield this.toPromise(this.remiseService.getRapport(this.companyId, item.dateFrom, item.dateTo)) : yield this.toPromise(this.remiseService.getAllPaiements(this.companyId));
      if (item.partnerId)
        paiements = paiements.filter((p) => p.partnerId === item.partnerId);
      const rows = paiements.map((p) => [p.name || "", p.date || "", p.partnerName || "", this.stateLabel(p.state), p.typeRemise || "", p.totalAmount ?? 0, p.generatedInvoiceName || p.invoiceName || ""]);
      yield exportRowsToExcel("Remises - R\xE8glements", ["R\xE9f\xE9rence", "Date", "Fournisseur", "\xC9tat", "Type", "Montant total", "Facture g\xE9n\xE9r\xE9e"], rows, this.fileName("remises-paiements", item));
    });
  }
  // ── Helpers ──────────────────────────────────────────────────────────────
  partnerOptions(item) {
    if (item.partnerKind === "client")
      return this.clients.filter((c) => c.id != null).map((c) => ({ id: c.id, name: c.name }));
    if (item.partnerKind === "supplier")
      return this.suppliers.filter((s) => s.id != null).map((s) => ({ id: s.id, name: s.name }));
    return [];
  }
  fileName(prefix, item) {
    if (item?.hasDateFilter && (item.dateFrom || item.dateTo)) {
      return `${prefix}_${item.dateFrom || "debut"}_${item.dateTo || "fin"}.xlsx`;
    }
    return `${prefix}_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.xlsx`;
  }
  stateLabel(s) {
    return {
      draft: "Brouillon",
      confirmed: "Confirm\xE9",
      invoiced: "Factur\xE9",
      posted: "Valid\xE9e",
      paid: "Pay\xE9e",
      cancelled: "Annul\xE9",
      received: "Re\xE7u",
      extournee: "Extourn\xE9e",
      done: "Termin\xE9",
      assigned: "Disponible",
      waiting: "En attente"
    }[s || ""] || s || "";
  }
  moveDirectionLabel(d) {
    return { incoming: "Entr\xE9e", outgoing: "Sortie", internal: "Interne" }[d || ""] || d || "";
  }
  partnerTypeLabel(t) {
    return { customer: "Client", supplier: "Fournisseur", both: "Client & Fournisseur" }[t] || t;
  }
  productTypeLabel(t) {
    return { product: "Stockable", service: "Service", consu: "Consommable" }[t] || t;
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 3e3);
  }
  static {
    this.\u0275fac = function ExportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExportComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(RistourneService), \u0275\u0275directiveInject(PurchaseService), \u0275\u0275directiveInject(RemiseService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExportComponent, selectors: [["app-export"]], decls: 12, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "page-sub"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "export-section"], [1, "section-title"], [1, "export-grid"], [1, "export-card"], [1, "export-card-head"], [1, "export-card-info"], [1, "export-card-label"], [1, "export-card-desc"], [1, "export-filters"], [1, "btn-export", 3, "click", "disabled"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "material-icons", "spin"]], template: function ExportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "file_download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Exportation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, "Exportez les donn\xE9es de chaque module vers Excel.");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(8, ExportComponent_Conditional_8_Template, 4, 1, "div", 5);
        \u0275\u0275conditionalCreate(9, ExportComponent_Conditional_9_Template, 4, 1, "div", 6);
        \u0275\u0275repeaterCreate(10, ExportComponent_For_11_Template, 8, 4, "div", 7, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.successMsg ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.sections);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 22px;\n}\n.page-header[_ngcontent-%COMP%]   .page-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 13px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.export-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 12px;\n}\n.section-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.export-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 14px;\n}\n.export-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.export-card-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.export-card-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n  line-height: 1.4;\n}\n.export-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 4px;\n  border-top: 1px solid var(--border-light);\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  width: 68px;\n  flex: none;\n}\n.filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 6px 8px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 12px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.btn-export[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 9px 14px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-export[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-export[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-export[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=export.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExportComponent, [{
    type: Component,
    args: [{ selector: "app-export", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <h1 class="page-title"><span class="material-icons">file_download</span> Exportation</h1>
    <p class="page-sub">Exportez les donn\xE9es de chaque module vers Excel.</p>
  </div>

  @if (successMsg) { <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div> }
  @if (errorMsg)   { <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }}</div> }

  @for (section of sections; track section.title) {
    <div class="export-section">
      <div class="section-title" [style.color]="section.color">
        <span class="material-icons">{{ section.icon }}</span> {{ section.title }}
      </div>
      <div class="export-grid">
        @for (item of section.items; track item.id) {
          <div class="export-card">
            <div class="export-card-head">
              <div class="export-card-info">
                <div class="export-card-label">{{ item.label }}</div>
                <div class="export-card-desc">{{ item.description }}</div>
              </div>
            </div>

            @if (item.hasJournalFilter || item.hasDateFilter || item.hasPartnerFilter || item.hasWarehouseFilter) {
              <div class="export-filters">
                @if (item.hasJournalFilter) {
                  <div class="filter-group">
                    <label>Journal</label>
                    <select [(ngModel)]="item.journalId" class="form-control">
                      <option [ngValue]="null">\u2014 Tous les journaux \u2014</option>
                      @for (j of journals; track j.id) { <option [ngValue]="j.id">{{ j.code }} - {{ j.name }}</option> }
                    </select>
                  </div>
                }
                @if (item.hasPartnerFilter) {
                  <div class="filter-group">
                    <label>{{ item.partnerKind === 'supplier' ? 'Fournisseur' : 'Client' }}</label>
                    <select [(ngModel)]="item.partnerId" class="form-control">
                      <option [ngValue]="null">\u2014 {{ item.partnerKind === 'supplier' ? 'Tous les fournisseurs' : 'Tous les clients' }} \u2014</option>
                      @for (p of partnerOptions(item); track p.id) { <option [ngValue]="p.id">{{ p.name }}</option> }
                    </select>
                  </div>
                }
                @if (item.hasWarehouseFilter) {
                  <div class="filter-group">
                    <label>Entrep\xF4t</label>
                    <select [(ngModel)]="item.warehouseId" class="form-control">
                      <option [ngValue]="null">\u2014 Tous les entrep\xF4ts \u2014</option>
                      @for (w of warehouses; track w.id) { <option [ngValue]="w.id">{{ w.name }}</option> }
                    </select>
                  </div>
                }
                @if (item.hasDateFilter) {
                  <div class="filter-group">
                    <label>Du</label>
                    <input type="date" [(ngModel)]="item.dateFrom" class="form-control" />
                  </div>
                  <div class="filter-group">
                    <label>Au</label>
                    <input type="date" [(ngModel)]="item.dateTo" class="form-control" />
                  </div>
                }
              </div>
            }

            <button class="btn-export" [disabled]="item.exporting" (click)="runExport(item.id)">
              @if (item.exporting) {
                <span class="material-icons spin">refresh</span> Export en cours\u2026
              } @else {
                <span class="material-icons">file_download</span> Exporter
              }
            </button>
          </div>
        }
      </div>
    </div>
  }
</div>
`, styles: ['/* src/app/modules/config/components/export/export.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.page-header {\n  margin-bottom: 20px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header .page-title .material-icons {\n  color: var(--primary);\n  font-size: 22px;\n}\n.page-header .page-sub {\n  margin: 0;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 13px;\n}\n.alert .material-icons {\n  font-size: 16px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.export-section {\n  margin-bottom: 28px;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 12px;\n}\n.section-title .material-icons {\n  font-size: 18px;\n}\n.export-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 14px;\n}\n.export-card {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.export-card-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.export-card-desc {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n  line-height: 1.4;\n}\n.export-filters {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 4px;\n  border-top: 1px solid var(--border-light);\n}\n.filter-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filter-group label {\n  font-size: 11px;\n  color: var(--text-muted);\n  width: 68px;\n  flex: none;\n}\n.filter-group .form-control {\n  flex: 1;\n  padding: 6px 8px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 12px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.filter-group .form-control:focus {\n  border-color: var(--primary);\n}\n.btn-export {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 9px 14px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-export .material-icons {\n  font-size: 17px;\n}\n.btn-export:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-export:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=export.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: AccountingService }, { type: StockService }, { type: SalesService }, { type: RistourneService }, { type: PurchaseService }, { type: RemiseService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExportComponent, { className: "ExportComponent", filePath: "app/modules/config/components/export/export.component.ts", lineNumber: 46 });
})();
export {
  ExportComponent
};
//# sourceMappingURL=chunk-H4HEB2SJ.js.map

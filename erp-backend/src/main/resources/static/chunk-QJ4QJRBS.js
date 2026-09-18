import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  downloadExcelTemplate,
  parseExcelFile
} from "./chunk-RZFOQ7J2.js";
import "./chunk-ZJANBOXO.js";
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
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  ViewChild,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NJUNWWEJ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/stock/components/locations/location-list.component.ts
var _c0 = ["importInput"];
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function LocationListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 7);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMsg);
  }
}
function LocationListComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    \u0275\u0275property("value", o_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r3.label);
  }
}
function LocationListComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 18);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function LocationListComponent_Conditional_29_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 24)(11, "button", 25);
    \u0275\u0275listener("click", function LocationListComponent_Conditional_29_For_15_Template_button_click_11_listener() {
      const l_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(l_r5));
    });
    \u0275\u0275elementStart(12, "span", 7);
    \u0275\u0275text(13, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 26);
    \u0275\u0275listener("click", function LocationListComponent_Conditional_29_For_15_Template_button_click_14_listener() {
      const l_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteLocation(l_r5));
    });
    \u0275\u0275elementStart(15, "span", 7);
    \u0275\u0275text(16, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const l_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r5.completeName || l_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(l_r5.usage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getUsageLabel(l_r5.usage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r5.warehouseName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", l_r5.active)("inactive", !l_r5.active);
  }
}
function LocationListComponent_Conditional_29_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2, "Aucun emplacement");
    \u0275\u0275elementEnd()();
  }
}
function LocationListComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "table", 19)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Entrep\xF4t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, LocationListComponent_Conditional_29_For_15_Template, 17, 9, "tr", null, _forTrack1);
    \u0275\u0275conditionalCreate(16, LocationListComponent_Conditional_29_Conditional_16_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.filtered);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.filtered.length === 0 ? 16 : -1);
  }
}
function LocationListComponent_Conditional_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 40);
    \u0275\u0275elementStart(2, "p", 41);
    \u0275\u0275text(3, "Importation en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.importRows.length, " ligne(s) en cours de traitement");
  }
}
function LocationListComponent_Conditional_30_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 37)(1, "td", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 46);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const \u0275$index_167_r8 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_167_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7["Nom*"] || row_r7["Nom"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7["Type (internal/view/supplier/customer/inventory/transit)"] || "internal");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7["Emplacement Parent (nom)"] || "\u2014");
  }
}
function LocationListComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function LocationListComponent_Conditional_30_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275conditionalCreate(2, LocationListComponent_Conditional_30_Conditional_2_Template, 6, 1, "div", 30);
    \u0275\u0275elementStart(3, "div", 31)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 32);
    \u0275\u0275listener("click", function LocationListComponent_Conditional_30_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 33)(10, "table", 34)(11, "thead")(12, "tr", 35)(13, "th", 36);
    \u0275\u0275text(14, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 36);
    \u0275\u0275text(16, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 36);
    \u0275\u0275text(18, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 36);
    \u0275\u0275text(20, "Parent");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, LocationListComponent_Conditional_30_For_23_Template, 9, 4, "tr", 37, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 38)(25, "button", 39);
    \u0275\u0275listener("click", function LocationListComponent_Conditional_30_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275text(26, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 9);
    \u0275\u0275listener("click", function LocationListComponent_Conditional_30_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmImport());
    });
    \u0275\u0275elementStart(28, "span", 7);
    \u0275\u0275text(29, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.importLoading ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Aper\xE7u import emplacements (", ctx_r1.importRows.length, " ligne(s))");
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.importRows);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Confirmer (", ctx_r1.importRows.length, " emplacements) ");
  }
}
function LocationListComponent_Conditional_31_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 7);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg);
  }
}
function LocationListComponent_Conditional_31_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r10 = ctx.$implicit;
    \u0275\u0275property("value", o_r10.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r10.label);
  }
}
function LocationListComponent_Conditional_31_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r11 = ctx.$implicit;
    \u0275\u0275property("value", w_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r11.name);
  }
}
function LocationListComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function LocationListComponent_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 47)(2, "div", 31)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 32);
    \u0275\u0275listener("click", function LocationListComponent_Conditional_31_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementStart(6, "span", 7);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 48);
    \u0275\u0275conditionalCreate(9, LocationListComponent_Conditional_31_Conditional_9_Template, 4, 1, "div", 49);
    \u0275\u0275elementStart(10, "div", 50)(11, "div", 51)(12, "label");
    \u0275\u0275text(13, "Nom ");
    \u0275\u0275elementStart(14, "span", 52);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function LocationListComponent_Conditional_31_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 54)(18, "label");
    \u0275\u0275text(19, "Type d'emplacement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 55);
    \u0275\u0275twoWayListener("ngModelChange", function LocationListComponent_Conditional_31_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.usage, $event) || (ctx_r1.form.usage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(21, LocationListComponent_Conditional_31_For_22_Template, 2, 2, "option", 14, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 54)(24, "label");
    \u0275\u0275text(25, "Entrep\xF4t parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 55);
    \u0275\u0275twoWayListener("ngModelChange", function LocationListComponent_Conditional_31_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.warehouseId, $event) || (ctx_r1.form.warehouseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 56);
    \u0275\u0275text(28, "\u2014 Aucun \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(29, LocationListComponent_Conditional_31_For_30_Template, 2, 2, "option", 14, _forTrack1);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 57)(32, "button", 39);
    \u0275\u0275listener("click", function LocationListComponent_Conditional_31_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275text(33, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 58);
    \u0275\u0275listener("click", function LocationListComponent_Conditional_31_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(35, "span", 7);
    \u0275\u0275text(36, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.editingId ? "Modifier" : "Nouvel", " emplacement");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.errorMsg ? 9 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.usage);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.usageOptions);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.warehouseId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.warehouses);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Sauvegarde..." : "Sauvegarder", " ");
  }
}
var LOC_HEADERS = ["Nom*", "Type (internal/view/supplier/customer/inventory/transit)", "Emplacement Parent (nom)"];
var LOC_SAMPLE = ["Stockage Zone A", "internal", "WH/Stock"];
var LocationListComponent = class _LocationListComponent {
  constructor(stockService, authService) {
    this.stockService = stockService;
    this.authService = authService;
    this.locations = [];
    this.warehouses = [];
    this.filtered = [];
    this.loading = false;
    this.saving = false;
    this.showModal = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.editingId = null;
    this.filterUsage = "";
    this.form = this.empty();
    this.usageOptions = [
      { value: "internal", label: "Interne" },
      { value: "view", label: "Vue (conteneur)" },
      { value: "supplier", label: "Fournisseur (virtuel)" },
      { value: "customer", label: "Client (virtuel)" },
      { value: "inventory", label: "Perte inventaire" },
      { value: "transit", label: "Transit" }
    ];
    this.showImportModal = false;
    this.importRows = [];
    this.importLoading = false;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    forkJoin({
      locations: this.stockService.getLocations(cid),
      warehouses: this.stockService.getWarehouses(cid)
    }).subscribe({
      next: ({ locations, warehouses }) => {
        this.locations = locations;
        this.warehouses = warehouses;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    this.filtered = this.filterUsage ? this.locations.filter((l) => l.usage === this.filterUsage) : [...this.locations];
  }
  getUsageLabel(usage) {
    return this.usageOptions.find((o) => o.value === usage)?.label || usage;
  }
  openNew() {
    this.editingId = null;
    this.form = this.empty();
    this.errorMsg = "";
    this.showModal = true;
  }
  openEdit(l) {
    this.editingId = l.id;
    this.form = __spreadValues({}, l);
    this.errorMsg = "";
    this.showModal = true;
  }
  save() {
    if (!this.form.name) {
      this.errorMsg = "Le nom est obligatoire";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const dto = __spreadProps(__spreadValues({}, this.form), { companyId: this.authService.getCompanyId() });
    const obs = this.editingId ? this.stockService.updateLocation(this.editingId, dto) : this.stockService.createLocation(dto);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.showModal = false;
        this.showSuccess(this.editingId ? "Emplacement mis \xE0 jour" : "Emplacement cr\xE9\xE9");
        this.load();
      },
      error: (e) => {
        this.saving = false;
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  deleteLocation(l) {
    if (!confirm(`Supprimer l'emplacement "${l.name}" ?`))
      return;
    this.stockService.deleteLocation(l.id).subscribe({
      next: () => {
        this.showSuccess("Emplacement supprim\xE9");
        this.load();
      },
      error: (e) => this.showSuccess("Erreur : " + (e.error?.message || "Impossible de supprimer"))
    });
  }
  empty() {
    return { name: "", usage: "internal", active: true };
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 3e3);
  }
  // === Import Excel ===
  downloadTemplate() {
    downloadExcelTemplate(LOC_HEADERS, LOC_SAMPLE, "modele_emplacements.xlsx");
  }
  triggerImport() {
    this.importInput.nativeElement.value = "";
    this.importInput.nativeElement.click();
  }
  onImportFileChange(event) {
    return __async(this, null, function* () {
      const file = event.target.files?.[0];
      if (!file)
        return;
      this.importLoading = true;
      try {
        const rows = yield parseExcelFile(file);
        this.importRows = rows.filter((r) => r["Nom*"] || r["Nom"]);
        if (this.importRows.length === 0) {
          this.showSuccess('Aucune ligne valide (colonne "Nom*" requise)');
          this.importLoading = false;
          return;
        }
        this.showImportModal = true;
      } catch (e) {
        this.showSuccess("Erreur : " + e.message);
      }
      this.importLoading = false;
    });
  }
  closeImportModal() {
    this.showImportModal = false;
    this.importRows = [];
  }
  getParentId(parentName) {
    if (!parentName)
      return void 0;
    return this.locations.find((l) => (l.completeName || l.name)?.toLowerCase() === parentName.toLowerCase())?.id;
  }
  confirmImport() {
    return __async(this, null, function* () {
      this.importLoading = true;
      const cid = this.authService.getCompanyId();
      let done = 0, errors = 0;
      const validUsages = ["internal", "view", "supplier", "customer", "inventory", "transit"];
      for (const row of this.importRows) {
        const usageVal = String(row["Type (internal/view/supplier/customer/inventory/transit)"] || "internal").trim();
        const dto = {
          name: String(row["Nom*"] || row["Nom"] || "").trim(),
          usage: validUsages.includes(usageVal) ? usageVal : "internal",
          parentId: this.getParentId(String(row["Emplacement Parent (nom)"] || "")),
          active: true,
          companyId: cid
        };
        try {
          yield this.stockService.createLocation(dto).toPromise();
          done++;
        } catch (e) {
          errors++;
        }
      }
      this.importLoading = false;
      this.closeImportModal();
      this.load();
      this.showSuccess(`Import termin\xE9 : ${done} cr\xE9\xE9(s), ${errors} erreur(s)`);
    });
  }
  static {
    this.\u0275fac = function LocationListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LocationListComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LocationListComponent, selectors: [["app-location-list"]], viewQuery: function LocationListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.importInput = _t.first);
      }
    }, decls: 32, vars: 8, consts: [["importInput", ""], [1, "page-container"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change"], [1, "page-header"], [1, "page-title"], [2, "display", "flex", "gap", "8px", "align-items", "center"], [1, "btn-outline", 3, "click"], [1, "material-icons"], [1, "btn-import", 3, "click", "disabled"], [1, "btn-primary", 3, "click"], [1, "alert", "alert-success"], [1, "toolbar"], [1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "count-info"], [1, "loading-state"], [1, "card"], [1, "material-icons", "spin"], [1, "cfg-table"], [1, "fw-500"], [1, "usage-badge"], [1, "text-muted", "small"], [1, "status-dot"], [2, "display", "flex", "gap", "4px"], [1, "btn-icon", 3, "click"], ["title", "Supprimer", 1, "btn-icon", "btn-icon-danger", 3, "click"], ["colspan", "5", 1, "empty-state"], [1, "modal-backdrop", 3, "click"], [1, "modal", 2, "max-width", "650px", "position", "relative"], [2, "position", "absolute", "inset", "0", "background", "rgba(255,255,255,0.9)", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "z-index", "10", "border-radius", "inherit"], [1, "modal-header"], [1, "btn-close", 3, "click"], [2, "overflow-x", "auto", "max-height", "400px"], [2, "width", "100%", "border-collapse", "collapse", "font-size", "13px"], [2, "background", "#f4f6f8"], [2, "padding", "8px", "border-bottom", "2px solid #e2e8ef", "text-align", "left"], [2, "border-bottom", "1px solid #f0f0f0"], [2, "display", "flex", "justify-content", "flex-end", "gap", "10px", "padding", "16px", "border-top", "1px solid #f0f0f0"], [1, "btn-secondary", 3, "click"], [1, "spinner"], [2, "margin-top", "14px", "color", "#017E84", "font-weight", "600"], [2, "font-size", "12px", "color", "#6c757d", "margin-top", "4px"], [2, "padding", "7px 8px", "color", "#adb5bd"], [2, "padding", "7px 8px", "font-weight", "600"], [2, "padding", "7px 8px"], [2, "padding", "7px 8px", "color", "#6c757d"], [1, "modal"], [1, "modal-body"], [1, "alert", "alert-danger"], [1, "form-grid"], [1, "form-group", "form-full"], [1, "req"], ["type", "text", "placeholder", "Ex: D\xE9p\xF4t principal", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "modal-footer"], [1, "btn-primary", 3, "click", "disabled"]], template: function LocationListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
        \u0275\u0275listener("change", function LocationListComponent_Template_input_change_1_listener($event) {
          return ctx.onImportFileChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "h1", 4);
        \u0275\u0275text(5, "Emplacements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "button", 6);
        \u0275\u0275listener("click", function LocationListComponent_Template_button_click_7_listener() {
          return ctx.downloadTemplate();
        });
        \u0275\u0275elementStart(8, "span", 7);
        \u0275\u0275text(9, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Mod\xE8le Excel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 8);
        \u0275\u0275listener("click", function LocationListComponent_Template_button_click_11_listener() {
          return ctx.triggerImport();
        });
        \u0275\u0275elementStart(12, "span", 7);
        \u0275\u0275text(13, "upload_file");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 9);
        \u0275\u0275listener("click", function LocationListComponent_Template_button_click_15_listener() {
          return ctx.openNew();
        });
        \u0275\u0275elementStart(16, "span", 7);
        \u0275\u0275text(17, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " Nouvel emplacement");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(19, LocationListComponent_Conditional_19_Template, 4, 1, "div", 10);
        \u0275\u0275elementStart(20, "div", 11)(21, "select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function LocationListComponent_Template_select_ngModelChange_21_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.filterUsage, $event) || (ctx.filterUsage = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function LocationListComponent_Template_select_ngModelChange_21_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(22, "option", 13);
        \u0275\u0275text(23, "Tous les types");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(24, LocationListComponent_For_25_Template, 2, 2, "option", 14, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 15);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(28, LocationListComponent_Conditional_28_Template, 4, 0, "div", 16)(29, LocationListComponent_Conditional_29_Template, 17, 1, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(30, LocationListComponent_Conditional_30_Template, 31, 3);
        \u0275\u0275conditionalCreate(31, LocationListComponent_Conditional_31_Template, 38, 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("disabled", ctx.importLoading);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.importLoading ? "Lecture..." : "Importer Excel", " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.successMsg ? 19 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterUsage);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.usageOptions);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", ctx.filtered.length, " emplacement(s)");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 28 : 29);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showImportModal ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 31 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 13px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled, \n.btn-outline[_ngcontent-%COMP%]:disabled, \n.btn-import[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--text-muted);\n  color: var(--text-primary);\n}\n.btn-import[_ngcontent-%COMP%] {\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 6px;\n  margin-bottom: 14px;\n  font-size: 13px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: var(--bg-surface);\n}\n.count-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.cfg-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.cfg-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.cfg-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.cfg-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.cfg-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.fw-500[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.usage-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.usage-badge.internal[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.usage-badge.view[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.usage-badge.supplier[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.usage-badge.customer[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.usage-badge.inventory[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.usage-badge.transit[_ngcontent-%COMP%] {\n  background: rgba(109, 40, 217, 0.1);\n  color: rgba(139, 92, 246, 0.9);\n}\n.status-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.status-dot.active[_ngcontent-%COMP%] {\n  background: #28a745;\n}\n.status-dot.inactive[_ngcontent-%COMP%] {\n  background: #dc3545;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.btn-icon.btn-icon-danger[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: var(--bg-surface);\n  border-radius: 10px;\n  width: 520px;\n  max-width: calc(100vw - 32px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  z-index: 1001;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n}\n.btn-close[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  border-radius: 4px;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #f0f0f0;\n  background: var(--bg-hover);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n/*# sourceMappingURL=location-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationListComponent, [{
    type: Component,
    args: [{ selector: "app-location-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <!-- Input file cach\xE9 -->
  <input #importInput type="file" accept=".xlsx,.xls" style="display:none" (change)="onImportFileChange($event)" />

  <div class="page-header">
    <h1 class="page-title">Emplacements</h1>
    <div style="display:flex;gap:8px;align-items:center">
      <button class="btn-outline" (click)="downloadTemplate()"><span class="material-icons">download</span> Mod\xE8le Excel</button>
      <button class="btn-import" (click)="triggerImport()" [disabled]="importLoading">
        <span class="material-icons">upload_file</span> {{ importLoading ? 'Lecture...' : 'Importer Excel' }}
      </button>
      <button class="btn-primary" (click)="openNew()"><span class="material-icons">add</span> Nouvel emplacement</button>
    </div>
  </div>

  @if (successMsg) { <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div> }

  <div class="toolbar">
    <select [(ngModel)]="filterUsage" (ngModelChange)="applyFilter()" class="filter-select">
      <option value="">Tous les types</option>
      @for (o of usageOptions; track o.value) { <option [value]="o.value">{{ o.label }}</option> }
    </select>
    <span class="count-info">{{ filtered.length }} emplacement(s)</span>
  </div>

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else {
    <div class="card">
      <table class="cfg-table">
        <thead>
          <tr>
            <th>Nom complet</th>
            <th>Type</th>
            <th>Entrep\xF4t</th>
            <th>Actif</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @for (l of filtered; track l.id) {
            <tr>
              <td class="fw-500">{{ l.completeName || l.name }}</td>
              <td><span class="usage-badge" [class]="l.usage">{{ getUsageLabel(l.usage) }}</span></td>
              <td class="text-muted small">{{ l.warehouseName || '\u2014' }}</td>
              <td>
                <span class="status-dot" [class.active]="l.active" [class.inactive]="!l.active"></span>
              </td>
              <td style="display:flex;gap:4px">
                <button class="btn-icon" (click)="openEdit(l)"><span class="material-icons">edit</span></button>
                <button class="btn-icon btn-icon-danger" (click)="deleteLocation(l)" title="Supprimer"><span class="material-icons">delete</span></button>
              </td>
            </tr>
          }
          @if (filtered.length === 0) {
            <tr><td colspan="5" class="empty-state">Aucun emplacement</td></tr>
          }
        </tbody>
      </table>
    </div>
  }
</div>

<!-- Modal Import Emplacements -->
@if (showImportModal) {
  <div class="modal-backdrop" (click)="closeImportModal()"></div>
  <div class="modal" style="max-width:650px;position:relative">
    @if (importLoading) {
      <div style="position:absolute;inset:0;background:rgba(255,255,255,0.9);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;border-radius:inherit">
        <div class="spinner"></div>
        <p style="margin-top:14px;color:#017E84;font-weight:600">Importation en cours\u2026</p>
        <p style="font-size:12px;color:#6c757d;margin-top:4px">{{ importRows.length }} ligne(s) en cours de traitement</p>
      </div>
    }
    <div class="modal-header">
      <h2>Aper\xE7u import emplacements ({{ importRows.length }} ligne(s))</h2>
      <button class="btn-close" (click)="closeImportModal()"><span class="material-icons">close</span></button>
    </div>
    <div style="overflow-x:auto;max-height:400px">
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead><tr style="background:#f4f6f8">
          <th style="padding:8px;border-bottom:2px solid #e2e8ef;text-align:left">#</th>
          <th style="padding:8px;border-bottom:2px solid #e2e8ef;text-align:left">Nom</th>
          <th style="padding:8px;border-bottom:2px solid #e2e8ef;text-align:left">Type</th>
          <th style="padding:8px;border-bottom:2px solid #e2e8ef;text-align:left">Parent</th>
        </tr></thead>
        <tbody>
          @for (row of importRows; track $index; let i = $index) {
            <tr style="border-bottom:1px solid #f0f0f0">
              <td style="padding:7px 8px;color:#adb5bd">{{ i+1 }}</td>
              <td style="padding:7px 8px;font-weight:600">{{ row['Nom*'] || row['Nom'] }}</td>
              <td style="padding:7px 8px">{{ row['Type (internal/view/supplier/customer/inventory/transit)'] || 'internal' }}</td>
              <td style="padding:7px 8px;color:#6c757d">{{ row['Emplacement Parent (nom)'] || '\u2014' }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
    <div style="display:flex;justify-content:flex-end;gap:10px;padding:16px;border-top:1px solid #f0f0f0">
      <button class="btn-secondary" (click)="closeImportModal()">Annuler</button>
      <button class="btn-primary" (click)="confirmImport()">
        <span class="material-icons">check_circle</span> Confirmer ({{ importRows.length }} emplacements)
      </button>
    </div>
  </div>
}

@if (showModal) {
  <div class="modal-backdrop" (click)="showModal = false"></div>
  <div class="modal">
    <div class="modal-header">
      <h2>{{ editingId ? 'Modifier' : 'Nouvel' }} emplacement</h2>
      <button class="btn-close" (click)="showModal = false"><span class="material-icons">close</span></button>
    </div>
    <div class="modal-body">
      @if (errorMsg) { <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }}</div> }
      <div class="form-grid">
        <div class="form-group form-full">
          <label>Nom <span class="req">*</span></label>
          <input type="text" [(ngModel)]="form.name" class="form-control" placeholder="Ex: D\xE9p\xF4t principal" />
        </div>
        <div class="form-group">
          <label>Type d'emplacement</label>
          <select [(ngModel)]="form.usage" class="form-control">
            @for (o of usageOptions; track o.value) { <option [value]="o.value">{{ o.label }}</option> }
          </select>
        </div>
        <div class="form-group">
          <label>Entrep\xF4t parent</label>
          <select [(ngModel)]="form.warehouseId" class="form-control">
            <option [ngValue]="undefined">\u2014 Aucun \u2014</option>
            @for (w of warehouses; track w.id) { <option [value]="w.id">{{ w.name }}</option> }
          </select>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" (click)="showModal = false">Annuler</button>
      <button class="btn-primary" (click)="save()" [disabled]="saving">
        <span class="material-icons">save</span> {{ saving ? 'Sauvegarde...' : 'Sauvegarder' }}
      </button>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/stock/components/locations/location-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary,\n.btn-outline,\n.btn-import {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 13px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons,\n.btn-outline .material-icons,\n.btn-import .material-icons {\n  font-size: 16px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled,\n.btn-outline:disabled,\n.btn-import:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--primary);\n  color: white;\n  border: none;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-outline {\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-outline:hover {\n  border-color: var(--text-muted);\n  color: var(--text-primary);\n}\n.btn-import {\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n}\n.btn-import:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 6px;\n  margin-bottom: 14px;\n  font-size: 13px;\n}\n.alert .material-icons {\n  font-size: 17px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.filter-select {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: var(--bg-surface);\n}\n.count-info {\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.cfg-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.cfg-table th {\n  padding: 9px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.cfg-table td {\n  padding: 9px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.cfg-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.cfg-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.fw-500 {\n  font-weight: 500;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.small {\n  font-size: 12px;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n}\n.usage-badge {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.usage-badge.internal {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.usage-badge.view {\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.usage-badge.supplier {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.usage-badge.customer {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.usage-badge.inventory {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.usage-badge.transit {\n  background: rgba(109, 40, 217, 0.1);\n  color: rgba(139, 92, 246, 0.9);\n}\n.status-dot {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.status-dot.active {\n  background: #28a745;\n}\n.status-dot.inactive {\n  background: #dc3545;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.btn-icon {\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon .material-icons {\n  font-size: 16px;\n}\n.btn-icon:hover {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.btn-icon.btn-icon-danger:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.req {\n  color: var(--danger);\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: var(--bg-surface);\n  border-radius: 10px;\n  width: 520px;\n  max-width: calc(100vw - 32px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  z-index: 1001;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header h2 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n}\n.btn-close {\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  border-radius: 4px;\n}\n.btn-close:hover {\n  background: var(--bg-hover);\n}\n.modal-body {\n  padding: 18px 20px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #f0f0f0;\n  background: var(--bg-hover);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-control {\n  padding: 8px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: var(--primary);\n}\n/*# sourceMappingURL=location-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }], { importInput: [{
    type: ViewChild,
    args: ["importInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LocationListComponent, { className: "LocationListComponent", filePath: "app/modules/stock/components/locations/location-list.component.ts", lineNumber: 19 });
})();
export {
  LocationListComponent
};
//# sourceMappingURL=chunk-QJ4QJRBS.js.map

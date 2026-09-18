import {
  EleaderService
} from "./chunk-N3CNQQZB.js";
import {
  Router
} from "./chunk-4W3TIS2I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NRXD6HPP.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/sales/components/eleader/eleader-journal/eleader-journal.component.ts
function EleaderJournalComponent_button_21_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.countByStatus(f_r2.value), " ");
  }
}
function EleaderJournalComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function EleaderJournalComponent_button_21_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.statusFilter = f_r2.value;
      return \u0275\u0275resetView(ctx_r2.applyFilters());
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, EleaderJournalComponent_button_21_span_2_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.statusFilter === f_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r2.value !== "all");
  }
}
function EleaderJournalComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement des journaux\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function EleaderJournalComponent_div_23_table_1_tr_21_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 37);
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const log_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", log_r5.salesOrderName, " ");
  }
}
function EleaderJournalComponent_div_23_table_1_tr_21_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function EleaderJournalComponent_div_23_table_1_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 24);
    \u0275\u0275listener("click", function EleaderJournalComponent_div_23_table_1_tr_21_Template_tr_click_0_listener() {
      const log_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openDetail(log_r5));
    });
    \u0275\u0275elementStart(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 29);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 30);
    \u0275\u0275listener("click", function EleaderJournalComponent_div_23_table_1_tr_21_Template_td_click_12_listener($event) {
      const log_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(log_r5.salesOrderName && ctx_r2.goToOrder(log_r5.salesOrderName));
    });
    \u0275\u0275template(13, EleaderJournalComponent_div_23_table_1_tr_21_span_13_Template, 4, 1, "span", 31)(14, EleaderJournalComponent_div_23_table_1_tr_21_span_14_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 33);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 34);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "button", 35);
    \u0275\u0275listener("click", function EleaderJournalComponent_div_23_table_1_tr_21_Template_button_click_22_listener($event) {
      const log_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.openDetail(log_r5));
    });
    \u0275\u0275elementStart(23, "span", 6);
    \u0275\u0275text(24, "info");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const log_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("row-error", log_r5.status === "error");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r5.reference);
    \u0275\u0275advance();
    \u0275\u0275property("title", log_r5.filename);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r5.filename);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.modelBadge(log_r5.invoiceModel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", log_r5.invoiceModel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r5.eleaderReference || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r5.clientName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", log_r5.salesOrderName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !log_r5.salesOrderName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.statusClass(log_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabel(log_r5.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 14, log_r5.importDate, "dd/MM/yyyy HH:mm"));
  }
}
function EleaderJournalComponent_div_23_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table")(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Fichier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Mod\xE8le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "N\xB0 Facture eLeader");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "BC cr\xE9\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Date d'import");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, EleaderJournalComponent_div_23_table_1_tr_21_Template, 25, 17, "tr", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r2.filtered);
  }
}
function EleaderJournalComponent_div_23_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 6);
    \u0275\u0275text(2, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun import enregistr\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 39);
    \u0275\u0275listener("click", function EleaderJournalComponent_div_23_ng_template_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToImport());
    });
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Importer un PDF eLeader ");
    \u0275\u0275elementEnd()();
  }
}
function EleaderJournalComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, EleaderJournalComponent_div_23_table_1_Template, 22, 1, "table", 22)(2, EleaderJournalComponent_div_23_ng_template_2_Template, 9, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const empty_r7 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filtered.length > 0)("ngIfElse", empty_r7);
  }
}
function EleaderJournalComponent_div_24_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "p", 57)(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Message ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-error", ctx_r2.selectedLog.status === "error");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedLog.status === "error" ? "error" : "info");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedLog.message);
  }
}
function EleaderJournalComponent_div_24_div_46_pre_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedLog.rawText);
  }
}
function EleaderJournalComponent_div_24_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60);
    \u0275\u0275listener("click", function EleaderJournalComponent_div_24_div_46_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showRawText = !ctx_r2.showRawText);
    });
    \u0275\u0275elementStart(2, "span", 6);
    \u0275\u0275text(3, "text_snippet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Texte extrait du PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 61);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, EleaderJournalComponent_div_24_div_46_pre_8_Template, 2, 1, "pre", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.showRawText ? "expand_less" : "expand_more");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showRawText);
  }
}
function EleaderJournalComponent_div_24_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "button", 7);
    \u0275\u0275listener("click", function EleaderJournalComponent_div_24_div_47_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToOrder(ctx_r2.selectedLog.salesOrderName));
    });
    \u0275\u0275elementStart(2, "span", 6);
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Voir le bon de commande ");
    \u0275\u0275elementEnd()();
  }
}
function EleaderJournalComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function EleaderJournalComponent_div_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedLog = null);
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275listener("click", function EleaderJournalComponent_div_24_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 42)(3, "div", 43)(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 45);
    \u0275\u0275listener("click", function EleaderJournalComponent_div_24_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedLog = null);
    });
    \u0275\u0275elementStart(9, "span", 6);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 46)(12, "div", 47)(13, "div", 48)(14, "span", 49);
    \u0275\u0275text(15, "Fichier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 50);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 48)(19, "span", 49);
    \u0275\u0275text(20, "Mod\xE8le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 50)(22, "span", 27);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 48)(25, "span", 49);
    \u0275\u0275text(26, "N\xB0 eLeader");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 51);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 48)(30, "span", 49);
    \u0275\u0275text(31, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 50);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 48)(35, "span", 49);
    \u0275\u0275text(36, "Bon de commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 52);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 48)(40, "span", 49);
    \u0275\u0275text(41, "Date d'import");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 50);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(45, EleaderJournalComponent_div_24_div_45_Template, 7, 4, "div", 53)(46, EleaderJournalComponent_div_24_div_46_Template, 9, 2, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, EleaderJournalComponent_div_24_div_47_Template, 5, 0, "div", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedLog.reference);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.statusClass(ctx_r2.selectedLog.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabel(ctx_r2.selectedLog.status), " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.selectedLog.filename);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r2.modelBadge(ctx_r2.selectedLog.invoiceModel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedLog.invoiceModel, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedLog.eleaderReference || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedLog.clientName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedLog.salesOrderName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 13, ctx_r2.selectedLog.importDate, "dd/MM/yyyy \xE0 HH:mm:ss"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.selectedLog.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedLog.rawText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedLog.salesOrderName);
  }
}
var EleaderJournalComponent = class _EleaderJournalComponent {
  constructor(eleaderService, authService, router) {
    this.eleaderService = eleaderService;
    this.authService = authService;
    this.router = router;
    this.logs = [];
    this.filtered = [];
    this.loading = false;
    this.searchText = "";
    this.statusFilter = "all";
    this.selectedLog = null;
    this.showRawText = false;
    this.STATUS_FILTERS = [
      { value: "all", label: "Tous" },
      { value: "success", label: "Succ\xE8s" },
      { value: "error", label: "Erreur" },
      { value: "warning", label: "Avertissement" }
    ];
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.eleaderService.getLogs(this.authService.getCompanyId()).subscribe({
      next: (logs) => {
        this.logs = logs;
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilters() {
    let list = [...this.logs];
    if (this.statusFilter !== "all") {
      list = list.filter((l) => l.status === this.statusFilter);
    }
    if (this.searchText.trim()) {
      const q = this.searchText.trim().toLowerCase();
      list = list.filter((l) => l.reference?.toLowerCase().includes(q) || l.eleaderReference?.toLowerCase().includes(q) || l.clientName?.toLowerCase().includes(q) || l.filename?.toLowerCase().includes(q) || l.salesOrderName?.toLowerCase().includes(q));
    }
    this.filtered = list;
  }
  openDetail(log) {
    this.selectedLog = log;
    this.showRawText = false;
  }
  goToOrder(name) {
    this.router.navigate(["/sales/orders"]);
  }
  goToImport() {
    this.router.navigate(["/sales/eleader/import"]);
  }
  statusClass(s) {
    return {
      success: "badge-success",
      error: "badge-error",
      warning: "badge-warning",
      parsing: "badge-info",
      creating: "badge-info"
    }[s] ?? "badge-neutral";
  }
  statusLabel(s) {
    return {
      success: "Succ\xE8s",
      error: "Erreur",
      warning: "Avertissement",
      parsing: "Analyse\u2026",
      creating: "Cr\xE9ation\u2026"
    }[s] ?? s;
  }
  countByStatus(status) {
    return this.logs.filter((l) => l.status === status).length;
  }
  modelBadge(m) {
    return m === "GUINNESS" ? "badge-guinness" : "badge-brasseries";
  }
  static {
    this.\u0275fac = function EleaderJournalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EleaderJournalComponent)(\u0275\u0275directiveInject(EleaderService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EleaderJournalComponent, selectors: [["app-eleader-journal"]], decls: 25, vars: 7, consts: [["empty", ""], [1, "journal-page"], [1, "page-header"], [1, "subtitle"], [1, "header-actions"], ["title", "Rafra\xEEchir", 1, "btn-refresh", 3, "click"], [1, "material-icons"], [1, "btn-primary", 3, "click"], [1, "filters-bar"], [1, "search-box"], ["placeholder", "R\xE9f\xE9rence, facture eLeader, client, fichier, BC\u2026", 3, "ngModelChange", "ngModel"], [1, "status-tabs"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "loading-state", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "detail-overlay", 3, "click", 4, "ngIf"], [1, "tab-btn", 3, "click"], ["class", "count", 4, "ngIf"], [1, "count"], [1, "loading-state"], [1, "material-icons", "spin"], [1, "table-card"], [4, "ngIf", "ngIfElse"], ["class", "clickable", 3, "row-error", "click", 4, "ngFor", "ngForOf"], [1, "clickable", 3, "click"], [1, "mono", "ref"], [1, "filename", 3, "title"], [1, "model-badge", 3, "ngClass"], [1, "mono"], [1, "partner"], [1, "mono", "fw", 3, "click"], ["class", "order-link", 4, "ngIf"], [4, "ngIf"], [1, "badge", 3, "ngClass"], [1, "date"], [1, "btn-detail", 3, "click"], [1, "order-link"], [1, "material-icons", "tiny"], [1, "empty-state"], [1, "btn-primary", "small", 3, "click"], [1, "detail-overlay", 3, "click"], [1, "detail-panel", 3, "click"], [1, "detail-header"], [1, "detail-title"], [1, "badge", "ml-8", 3, "ngClass"], [1, "btn-icon", 3, "click"], [1, "detail-body"], [1, "detail-grid"], [1, "detail-row"], [1, "detail-lbl"], [1, "detail-val"], [1, "detail-val", "mono"], [1, "detail-val", "mono", "fw"], ["class", "detail-message", 3, "is-error", 4, "ngIf"], ["class", "raw-text-section", 4, "ngIf"], ["class", "detail-footer", 4, "ngIf"], [1, "detail-message"], [1, "msg-label"], [1, "msg-text"], [1, "raw-text-section"], [1, "raw-text-header", 3, "click"], [1, "material-icons", "toggle-icon"], ["class", "raw-text", 4, "ngIf"], [1, "raw-text"], [1, "detail-footer"]], template: function EleaderJournalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2");
        \u0275\u0275text(4, "Journaux d'importation eLeader");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Historique complet de tous les imports PDF eLeader");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function EleaderJournalComponent_Template_button_click_8_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(9, "span", 6);
        \u0275\u0275text(10, "refresh");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "button", 7);
        \u0275\u0275listener("click", function EleaderJournalComponent_Template_button_click_11_listener() {
          return ctx.goToImport();
        });
        \u0275\u0275elementStart(12, "span", 6);
        \u0275\u0275text(13, "upload_file");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " Nouvel import ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "span", 6);
        \u0275\u0275text(18, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EleaderJournalComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function EleaderJournalComponent_Template_input_ngModelChange_19_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 11);
        \u0275\u0275template(21, EleaderJournalComponent_button_21_Template, 3, 4, "button", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(22, EleaderJournalComponent_div_22_Template, 4, 0, "div", 13)(23, EleaderJournalComponent_div_23_Template, 4, 2, "div", 14)(24, EleaderJournalComponent_div_24_Template, 48, 16, "div", 15);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275classProp("spin", ctx.loading);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.STATUS_FILTERS);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedLog);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['\n.journal-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin: 0 0 4px;\n  color: var(--text-primary);\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 260px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 0 12px;\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 18px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 9px 0;\n  font-size: 0.875rem;\n  width: 100%;\n  background: transparent;\n  color: var(--text-primary);\n}\n.status-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  cursor: pointer;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: #fff;\n  font-weight: 700;\n}\n.tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--bg-elevated);\n}\n.tab-btn[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.08);\n  border-radius: 99px;\n  padding: 0 6px;\n  font-size: 0.72rem;\n}\n.btn-refresh[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background: var(--bg-surface);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-refresh[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n.btn-refresh[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.table-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\nth[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  padding: 10px 14px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-muted);\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid var(--border);\n}\ntd[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\ntr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.clickable[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.row-error[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n}\n.row-error[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--danger-bg) !important;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.82rem;\n}\n.fw[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.ref[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 600;\n}\n.filename[_ngcontent-%COMP%] {\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--text-secondary);\n  font-size: 0.82rem;\n}\n.partner[_ngcontent-%COMP%] {\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 500;\n}\n.date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.order-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  color: var(--primary);\n  font-weight: 700;\n  cursor: pointer;\n}\n.order-link[_ngcontent-%COMP%]   .material-icons.tiny[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.order-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.badge-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: #16a34a;\n}\n.badge-error[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge-warning[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-info[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--primary);\n}\n.badge-neutral[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.ml-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.model-badge[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 99px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.badge-brasseries[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-guinness[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.btn-detail[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  padding: 4px 6px;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.btn-detail[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-detail[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary.small[_ngcontent-%COMP%], \n.btn-secondary.small[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  font-size: 0.82rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 56px 24px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 1rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-muted);\n  padding: 56px;\n  justify-content: center;\n}\n.detail-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 900;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.detail-panel[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  width: 480px;\n  max-width: 95vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -4px 0 30px rgba(0, 0, 0, 0.15);\n}\n.detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-elevated);\n}\n.detail-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 8px;\n  color: var(--text-muted);\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n}\n.detail-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--border-light);\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-lbl[_ngcontent-%COMP%] {\n  min-width: 130px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.detail-val[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-primary);\n}\n.detail-message[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 14px;\n}\n.detail-message.is-error[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  border-color: #fecaca;\n}\n.msg-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  margin: 0 0 10px;\n}\n.msg-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.is-error[_ngcontent-%COMP%]   .msg-label[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.is-error[_ngcontent-%COMP%]   .msg-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.msg-text[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  white-space: pre-wrap;\n  word-break: break-word;\n  margin: 0;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.raw-text-section[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.raw-text-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: var(--bg-elevated);\n  cursor: pointer;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.raw-text-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--primary);\n}\n.raw-text-header[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--text-muted);\n}\n.raw-text-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.raw-text[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 0.75rem;\n  line-height: 1.55;\n  color: var(--text-primary);\n  white-space: pre;\n  overflow-x: auto;\n  overflow-y: auto;\n  max-height: 400px;\n  margin: 0;\n  padding: 14px 16px;\n  background: var(--bg-surface);\n  border-top: 1px solid var(--border-light);\n}\n.detail-footer[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-top: 1px solid var(--border-light);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=eleader-journal.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EleaderJournalComponent, [{
    type: Component,
    args: [{ selector: "app-eleader-journal", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="journal-page">
  <div class="page-header">
    <div>
      <h2>Journaux d'importation eLeader</h2>
      <p class="subtitle">Historique complet de tous les imports PDF eLeader</p>
    </div>
    <div class="header-actions">
      <button class="btn-refresh" (click)="load()" title="Rafra\xEEchir">
        <span class="material-icons" [class.spin]="loading">refresh</span>
      </button>
      <button class="btn-primary" (click)="goToImport()">
        <span class="material-icons">upload_file</span>
        Nouvel import
      </button>
    </div>
  </div>

  <!-- Filtres -->
  <div class="filters-bar">
    <div class="search-box">
      <span class="material-icons">search</span>
      <input [(ngModel)]="searchText" (ngModelChange)="applyFilters()"
             placeholder="R\xE9f\xE9rence, facture eLeader, client, fichier, BC\u2026" />
    </div>
    <div class="status-tabs">
      <button *ngFor="let f of STATUS_FILTERS"
              class="tab-btn" [class.active]="statusFilter === f.value"
              (click)="statusFilter = f.value; applyFilters()">
        {{ f.label }}
        <span class="count" *ngIf="f.value !== 'all'">
          {{ countByStatus(f.value) }}
        </span>
      </button>
    </div>
  </div>

  <!-- Loading -->
  <div class="loading-state" *ngIf="loading">
    <span class="material-icons spin">refresh</span> Chargement des journaux\u2026
  </div>

  <!-- Tableau principal -->
  <div class="table-card" *ngIf="!loading">
    <table *ngIf="filtered.length > 0; else empty">
      <thead>
        <tr>
          <th>R\xE9f\xE9rence</th>
          <th>Fichier</th>
          <th>Mod\xE8le</th>
          <th>N\xB0 Facture eLeader</th>
          <th>Client</th>
          <th>BC cr\xE9\xE9</th>
          <th>Statut</th>
          <th>Date d'import</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let log of filtered" [class.row-error]="log.status === 'error'"
            (click)="openDetail(log)" class="clickable">
          <td class="mono ref">{{ log.reference }}</td>
          <td class="filename" [title]="log.filename">{{ log.filename }}</td>
          <td>
            <span class="model-badge" [ngClass]="modelBadge(log.invoiceModel)">
              {{ log.invoiceModel }}
            </span>
          </td>
          <td class="mono">{{ log.eleaderReference || '\u2014' }}</td>
          <td class="partner">{{ log.clientName || '\u2014' }}</td>
          <td class="mono fw" (click)="$event.stopPropagation(); log.salesOrderName && goToOrder(log.salesOrderName)">
            <span class="order-link" *ngIf="log.salesOrderName">
              {{ log.salesOrderName }}
              <span class="material-icons tiny">open_in_new</span>
            </span>
            <span *ngIf="!log.salesOrderName">\u2014</span>
          </td>
          <td>
            <span class="badge" [ngClass]="statusClass(log.status)">
              {{ statusLabel(log.status) }}
            </span>
          </td>
          <td class="date">{{ log.importDate | date:'dd/MM/yyyy HH:mm' }}</td>
          <td>
            <button class="btn-detail" (click)="$event.stopPropagation(); openDetail(log)">
              <span class="material-icons">info</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <ng-template #empty>
      <div class="empty-state">
        <span class="material-icons">history</span>
        <p>Aucun import enregistr\xE9.</p>
        <button class="btn-primary small" (click)="goToImport()">
          <span class="material-icons">upload_file</span> Importer un PDF eLeader
        </button>
      </div>
    </ng-template>
  </div>

  <!-- Panneau de d\xE9tail -->
  <div class="detail-overlay" *ngIf="selectedLog" (click)="selectedLog = null">
    <div class="detail-panel" (click)="$event.stopPropagation()">
      <div class="detail-header">
        <div class="detail-title">
          <span class="mono">{{ selectedLog.reference }}</span>
          <span class="badge ml-8" [ngClass]="statusClass(selectedLog.status)">
            {{ statusLabel(selectedLog.status) }}
          </span>
        </div>
        <button class="btn-icon" (click)="selectedLog = null">
          <span class="material-icons">close</span>
        </button>
      </div>

      <div class="detail-body">
        <div class="detail-grid">
          <div class="detail-row">
            <span class="detail-lbl">Fichier</span>
            <span class="detail-val">{{ selectedLog.filename }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-lbl">Mod\xE8le</span>
            <span class="detail-val">
              <span class="model-badge" [ngClass]="modelBadge(selectedLog.invoiceModel)">
                {{ selectedLog.invoiceModel }}
              </span>
            </span>
          </div>
          <div class="detail-row">
            <span class="detail-lbl">N\xB0 eLeader</span>
            <span class="detail-val mono">{{ selectedLog.eleaderReference || '\u2014' }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-lbl">Client</span>
            <span class="detail-val">{{ selectedLog.clientName || '\u2014' }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-lbl">Bon de commande</span>
            <span class="detail-val mono fw">{{ selectedLog.salesOrderName || '\u2014' }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-lbl">Date d'import</span>
            <span class="detail-val">{{ selectedLog.importDate | date:'dd/MM/yyyy \xE0 HH:mm:ss' }}</span>
          </div>
        </div>

        <div class="detail-message" *ngIf="selectedLog.message"
             [class.is-error]="selectedLog.status === 'error'">
          <p class="msg-label">
            <span class="material-icons">{{ selectedLog.status === 'error' ? 'error' : 'info' }}</span>
            Message
          </p>
          <pre class="msg-text">{{ selectedLog.message }}</pre>
        </div>

        <!-- Texte brut extrait -->
        <div class="raw-text-section" *ngIf="selectedLog.rawText">
          <div class="raw-text-header" (click)="showRawText = !showRawText">
            <span class="material-icons">text_snippet</span>
            <span>Texte extrait du PDF</span>
            <span class="material-icons toggle-icon">{{ showRawText ? 'expand_less' : 'expand_more' }}</span>
          </div>
          <pre class="raw-text" *ngIf="showRawText">{{ selectedLog.rawText }}</pre>
        </div>
      </div>

      <div class="detail-footer" *ngIf="selectedLog.salesOrderName">
        <button class="btn-primary" (click)="goToOrder(selectedLog.salesOrderName!)">
          <span class="material-icons">open_in_new</span>
          Voir le bon de commande
        </button>
      </div>
    </div>
  </div>
</div>
`, styles: ['/* src/app/modules/sales/components/eleader/eleader-journal/eleader-journal.component.scss */\n.journal-page {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header h2 {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin: 0 0 4px;\n  color: var(--text-primary);\n}\n.page-header .subtitle {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.filters-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 260px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 0 12px;\n}\n.search-box .material-icons {\n  color: var(--text-muted);\n  font-size: 18px;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  padding: 9px 0;\n  font-size: 0.875rem;\n  width: 100%;\n  background: transparent;\n  color: var(--text-primary);\n}\n.status-tabs {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n.tab-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  cursor: pointer;\n}\n.tab-btn.active {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: #fff;\n  font-weight: 700;\n}\n.tab-btn:hover:not(.active) {\n  background: var(--bg-elevated);\n}\n.tab-btn .count {\n  background: rgba(0, 0, 0, 0.08);\n  border-radius: 99px;\n  padding: 0 6px;\n  font-size: 0.72rem;\n}\n.btn-refresh {\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background: var(--bg-surface);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-refresh .material-icons {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n.btn-refresh:hover {\n  background: var(--bg-elevated);\n}\n.table-card {\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\nth {\n  background: var(--bg-elevated);\n  padding: 10px 14px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-muted);\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid var(--border);\n}\ntd {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\ntr:last-child td {\n  border-bottom: none;\n}\n.clickable {\n  cursor: pointer;\n}\n.clickable:hover td {\n  background: var(--bg-elevated);\n}\n.row-error td {\n  background: var(--danger-bg);\n}\n.row-error:hover td {\n  background: var(--danger-bg) !important;\n}\n.mono {\n  font-family: monospace;\n  font-size: 0.82rem;\n}\n.fw {\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.ref {\n  color: var(--primary);\n  font-weight: 600;\n}\n.filename {\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--text-secondary);\n  font-size: 0.82rem;\n}\n.partner {\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 500;\n}\n.date {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.order-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  color: var(--primary);\n  font-weight: 700;\n  cursor: pointer;\n}\n.order-link .material-icons.tiny {\n  font-size: 13px;\n}\n.order-link:hover {\n  text-decoration: underline;\n}\n.badge {\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.badge-success {\n  background: var(--success-bg);\n  color: #16a34a;\n}\n.badge-error {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge-warning {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-info {\n  background: var(--info-bg);\n  color: var(--primary);\n}\n.badge-neutral {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.ml-8 {\n  margin-left: 8px;\n}\n.model-badge {\n  padding: 2px 8px;\n  border-radius: 99px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.badge-brasseries {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-guinness {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.btn-detail {\n  background: transparent;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  padding: 4px 6px;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.btn-detail .material-icons {\n  font-size: 16px;\n}\n.btn-detail:hover {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n}\n.btn-primary,\n.btn-secondary {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 16px;\n}\n.btn-primary.small,\n.btn-secondary.small {\n  padding: 7px 14px;\n  font-size: 0.82rem;\n}\n.btn-primary {\n  background: var(--primary);\n  color: #fff;\n}\n.btn-primary:hover {\n  background: var(--primary-dark);\n}\n.btn-secondary {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.empty-state {\n  text-align: center;\n  padding: 56px 24px;\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 12px;\n}\n.empty-state p {\n  margin: 0 0 16px;\n  font-size: 1rem;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-muted);\n  padding: 56px;\n  justify-content: center;\n}\n.detail-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 900;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.detail-panel {\n  background: var(--bg-surface);\n  width: 480px;\n  max-width: 95vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -4px 0 30px rgba(0, 0, 0, 0.15);\n}\n.detail-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-elevated);\n}\n.detail-title {\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.btn-icon {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 8px;\n  color: var(--text-muted);\n}\n.btn-icon .material-icons {\n  font-size: 20px;\n}\n.btn-icon:hover {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n}\n.detail-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n.detail-grid {\n  margin-bottom: 20px;\n}\n.detail-row {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--border-light);\n}\n.detail-row:last-child {\n  border-bottom: none;\n}\n.detail-lbl {\n  min-width: 130px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.detail-val {\n  font-size: 0.875rem;\n  color: var(--text-primary);\n}\n.detail-message {\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 14px;\n}\n.detail-message.is-error {\n  background: var(--danger-bg);\n  border-color: #fecaca;\n}\n.msg-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  margin: 0 0 10px;\n}\n.msg-label .material-icons {\n  font-size: 16px;\n}\n.is-error .msg-label {\n  color: var(--danger);\n}\n.is-error .msg-label .material-icons {\n  color: var(--danger);\n}\n.msg-text {\n  font-family: monospace;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  white-space: pre-wrap;\n  word-break: break-word;\n  margin: 0;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.raw-text-section {\n  margin-top: 12px;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.raw-text-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: var(--bg-elevated);\n  cursor: pointer;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.raw-text-header .material-icons {\n  font-size: 16px;\n  color: var(--primary);\n}\n.raw-text-header .toggle-icon {\n  margin-left: auto;\n  color: var(--text-muted);\n}\n.raw-text-header:hover {\n  background: var(--bg-elevated);\n}\n.raw-text {\n  font-family: "Courier New", monospace;\n  font-size: 0.75rem;\n  line-height: 1.55;\n  color: var(--text-primary);\n  white-space: pre;\n  overflow-x: auto;\n  overflow-y: auto;\n  max-height: 400px;\n  margin: 0;\n  padding: 14px 16px;\n  background: var(--bg-surface);\n  border-top: 1px solid var(--border-light);\n}\n.detail-footer {\n  padding: 16px 20px;\n  border-top: 1px solid var(--border-light);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin {\n  animation: spin 0.8s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=eleader-journal.component.css.map */\n'] }]
  }], () => [{ type: EleaderService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EleaderJournalComponent, { className: "EleaderJournalComponent", filePath: "app/modules/sales/components/eleader/eleader-journal/eleader-journal.component.ts", lineNumber: 15 });
})();
export {
  EleaderJournalComponent
};
//# sourceMappingURL=chunk-LQHQSJ5T.js.map

import {
  EleaderService
} from "./chunk-N3CNQQZB.js";
import {
  Router,
  RouterLink
} from "./chunk-4W3TIS2I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor
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
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/sales/components/eleader/eleader-import/eleader-import.component.ts
var _c0 = ["fileInput"];
function EleaderImportComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 6);
    \u0275\u0275text(2, "book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Journal utilis\xE9 : ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 15);
    \u0275\u0275text(7, "Modifier");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.journalName);
  }
}
function EleaderImportComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 6);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "a", 15);
    \u0275\u0275text(5, "Configurer maintenant");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.configWarning, " ");
  }
}
function EleaderImportComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 18);
    \u0275\u0275text(4, "Glissez-d\xE9posez votre PDF eLeader ici");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 19);
    \u0275\u0275text(6, "ou cliquez pour s\xE9lectionner un fichier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 20);
    \u0275\u0275text(8, "Formats accept\xE9s : PDF \u2014 Factures Brasseries ou Guinness");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function EleaderImportComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275text(2, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 23);
    \u0275\u0275listener("click", function EleaderImportComponent_ng_container_17_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.clearFile());
    });
    \u0275\u0275elementStart(8, "span", 6);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Changer de fichier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedFile.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (ctx_r1.selectedFile.size / 1024).toFixed(1), " Ko");
  }
}
function EleaderImportComponent_div_18_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "upload");
    \u0275\u0275elementEnd();
  }
}
function EleaderImportComponent_div_18_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
  }
}
function EleaderImportComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "label", 26);
    \u0275\u0275text(3, "Mod\xE8le de facture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27)(5, "label", 28)(6, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function EleaderImportComponent_div_18_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.invoiceModel, $event) || (ctx_r1.invoiceModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 6);
    \u0275\u0275text(8, "auto_awesome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "D\xE9tection automatique");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "label", 28)(12, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function EleaderImportComponent_div_18_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.invoiceModel, $event) || (ctx_r1.invoiceModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 6);
    \u0275\u0275text(14, "sports_bar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Brasseries");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "label", 28)(18, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function EleaderImportComponent_div_18_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.invoiceModel, $event) || (ctx_r1.invoiceModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 6);
    \u0275\u0275text(20, "local_bar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "Guinness");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "button", 32);
    \u0275\u0275listener("click", function EleaderImportComponent_div_18_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.import());
    });
    \u0275\u0275template(24, EleaderImportComponent_div_18_span_24_Template, 2, 0, "span", 33)(25, EleaderImportComponent_div_18_span_25_Template, 2, 0, "span", 34);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("selected", ctx_r1.invoiceModel === "AUTO");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.invoiceModel);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("selected", ctx_r1.invoiceModel === "BRASSERIES");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.invoiceModel);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("selected", ctx_r1.invoiceModel === "GUINNESS");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.invoiceModel);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.importing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.importing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importing);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.importing ? "Import en cours\u2026" : "Importer la facture", " ");
  }
}
function EleaderImportComponent_ng_container_19_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 45)(2, "span", 6);
    \u0275\u0275text(3, "receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 45)(6, "span", 6);
    \u0275\u0275text(7, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 45)(10, "span", 6);
    \u0275\u0275text(11, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Facture eLeader : ", ctx_r1.result.eleaderReference, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Client : ", ctx_r1.result.clientName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" BC : ", ctx_r1.result.salesOrderName, " ");
  }
}
function EleaderImportComponent_ng_container_19_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "span", 6);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.result.warning, " ");
  }
}
function EleaderImportComponent_ng_container_19_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "button", 48);
    \u0275\u0275listener("click", function EleaderImportComponent_ng_container_19_div_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToOrder());
    });
    \u0275\u0275elementStart(2, "span", 6);
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Voir les bons de commande ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 49);
    \u0275\u0275listener("click", function EleaderImportComponent_ng_container_19_div_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFile());
    });
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Nouvel import ");
    \u0275\u0275elementEnd()();
  }
}
function EleaderImportComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 36)(2, "div", 37)(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 38)(6, "p", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 40);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, EleaderImportComponent_ng_container_19_div_10_Template, 13, 3, "div", 41)(11, EleaderImportComponent_ng_container_19_div_11_Template, 4, 1, "div", 42)(12, EleaderImportComponent_ng_container_19_div_12_Template, 9, 0, "div", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("success", ctx_r1.result.success)("error", !ctx_r1.result.success);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.result.success ? "check_circle" : "error");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.result.success ? "Import r\xE9ussi !" : "Import \xE9chou\xE9");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.result.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.result.success);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.result.warning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.result.success);
  }
}
function EleaderImportComponent_div_20_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 35);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function EleaderImportComponent_div_20_div_4_table_1_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 59);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 57);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 57);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 60);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const log_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r7.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r7.filename);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r7.invoiceModel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r7.eleaderReference || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r7.clientName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r7.salesOrderName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.statusClass(log_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(log_r7.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 9, log_r7.importDate, "dd/MM/yyyy HH:mm"));
  }
}
function EleaderImportComponent_div_20_div_4_table_1_Template(rf, ctx) {
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
    \u0275\u0275text(10, "Facture eLeader");
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
    \u0275\u0275text(18, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, EleaderImportComponent_div_20_div_4_table_1_tr_20_Template, 20, 12, "tr", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r1.logs);
  }
}
function EleaderImportComponent_div_20_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 6);
    \u0275\u0275text(2, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun import enregistr\xE9.");
    \u0275\u0275elementEnd()();
  }
}
function EleaderImportComponent_div_20_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275template(1, EleaderImportComponent_div_20_div_4_table_1_Template, 21, 1, "table", 55)(2, EleaderImportComponent_div_20_div_4_ng_template_2_Template, 5, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noLogs_r8 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.logs.length > 0)("ngIfElse", noLogs_r8);
  }
}
function EleaderImportComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "h3");
    \u0275\u0275text(2, "Historique des imports eLeader");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EleaderImportComponent_div_20_div_3_Template, 4, 0, "div", 51)(4, EleaderImportComponent_div_20_div_4_Template, 4, 2, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.loadingLogs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingLogs);
  }
}
var EleaderImportComponent = class _EleaderImportComponent {
  constructor(eleaderService, authService, router) {
    this.eleaderService = eleaderService;
    this.authService = authService;
    this.router = router;
    this.selectedFile = null;
    this.invoiceModel = "AUTO";
    this.importing = false;
    this.result = null;
    this.errorMsg = "";
    this.journalName = null;
    this.journalId = null;
    this.configWarning = null;
    this.logs = [];
    this.loadingLogs = false;
    this.showLogs = false;
    this.isDragOver = false;
  }
  ngOnInit() {
    const companyId = this.authService.getCompanyId();
    this.eleaderService.getConfig(companyId).subscribe({
      next: (cfg) => {
        if (cfg.journalId) {
          this.journalId = cfg.journalId;
          this.journalName = cfg.journalName || "Journal configur\xE9";
        } else {
          this.configWarning = "Aucun journal configur\xE9. Les imports seront bloqu\xE9s. Allez dans Configuration eLeader pour d\xE9finir le journal.";
        }
      },
      error: () => {
      }
    });
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
      this.result = null;
      this.errorMsg = "";
    }
  }
  onDragOver(event) {
    event.preventDefault();
    this.isDragOver = true;
  }
  onDragLeave() {
    this.isDragOver = false;
  }
  onDrop(event) {
    event.preventDefault();
    this.isDragOver = false;
    const file = event.dataTransfer?.files[0];
    if (file && file.type === "application/pdf") {
      this.selectedFile = file;
      this.result = null;
      this.errorMsg = "";
    } else {
      this.errorMsg = "Seuls les fichiers PDF sont accept\xE9s.";
    }
  }
  clearFile() {
    this.selectedFile = null;
    this.result = null;
    this.errorMsg = "";
    if (this.fileInput)
      this.fileInput.nativeElement.value = "";
  }
  import() {
    if (!this.selectedFile)
      return;
    const companyId = this.authService.getCompanyId();
    const model = this.invoiceModel === "AUTO" ? void 0 : this.invoiceModel;
    this.importing = true;
    this.result = null;
    this.errorMsg = "";
    this.eleaderService.importPdf(this.selectedFile, companyId, model).subscribe({
      next: (res) => {
        this.result = res;
        this.importing = false;
        if (this.showLogs)
          this.loadLogs();
      },
      error: (err) => {
        this.result = err?.error || { success: false, message: "Erreur serveur." };
        this.importing = false;
      }
    });
  }
  goToOrder() {
    this.router.navigate(["/sales/orders"]);
  }
  toggleLogs() {
    this.showLogs = !this.showLogs;
    if (this.showLogs && this.logs.length === 0)
      this.loadLogs();
  }
  loadLogs() {
    this.loadingLogs = true;
    this.eleaderService.getLogs(this.authService.getCompanyId()).subscribe({
      next: (logs) => {
        this.logs = logs;
        this.loadingLogs = false;
      },
      error: () => {
        this.loadingLogs = false;
      }
    });
  }
  statusClass(status) {
    const map = {
      success: "badge-success",
      error: "badge-error",
      warning: "badge-warning",
      parsing: "badge-info",
      creating: "badge-info"
    };
    return map[status] ?? "badge-neutral";
  }
  statusLabel(status) {
    const map = {
      success: "Succ\xE8s",
      error: "Erreur",
      warning: "Avertissement",
      parsing: "Analyse\u2026",
      creating: "Cr\xE9ation\u2026"
    };
    return map[status] ?? status;
  }
  static {
    this.\u0275fac = function EleaderImportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EleaderImportComponent)(\u0275\u0275directiveInject(EleaderService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EleaderImportComponent, selectors: [["app-eleader-import"]], viewQuery: function EleaderImportComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      }
    }, decls: 21, vars: 11, consts: [["fileInput", ""], ["noLogs", ""], [1, "import-page"], [1, "page-header"], [1, "subtitle"], [1, "btn-logs", 3, "click"], [1, "material-icons"], ["class", "journal-banner", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], [1, "drop-zone", 3, "dragover", "dragleave", "drop", "click"], ["type", "file", "accept", ".pdf", "hidden", "", 3, "change"], [4, "ngIf"], ["class", "options-card", 4, "ngIf"], ["class", "logs-section", 4, "ngIf"], [1, "journal-banner"], ["routerLink", "/sales/eleader/config", 1, "link-config"], [1, "alert", "alert-warning"], [1, "material-icons", "drop-icon"], [1, "drop-title"], [1, "drop-sub"], [1, "drop-hint"], [1, "material-icons", "drop-icon", "ready"], [1, "drop-title", "file-name"], [1, "btn-clear", 3, "click"], [1, "options-card"], [1, "option-group"], [1, "option-label"], [1, "radio-group"], [1, "radio-option"], ["type", "radio", "value", "AUTO", 3, "ngModelChange", "ngModel"], ["type", "radio", "value", "BRASSERIES", 3, "ngModelChange", "ngModel"], ["type", "radio", "value", "GUINNESS", 3, "ngModelChange", "ngModel"], [1, "btn-import", 3, "click", "disabled"], ["class", "material-icons", 4, "ngIf"], ["class", "material-icons spin", 4, "ngIf"], [1, "material-icons", "spin"], [1, "result-card"], [1, "result-icon"], [1, "result-body"], [1, "result-title"], [1, "result-msg"], ["class", "result-details", 4, "ngIf"], ["class", "result-warning", 4, "ngIf"], ["class", "result-actions", 4, "ngIf"], [1, "result-details"], [1, "detail-chip"], [1, "result-warning"], [1, "result-actions"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", "small", 3, "click"], [1, "logs-section"], ["class", "loading-state", 4, "ngIf"], ["class", "logs-table", 4, "ngIf"], [1, "loading-state"], [1, "logs-table"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [1, "mono"], [1, "filename"], [1, "model-badge"], [1, "badge", 3, "ngClass"], [1, "empty-state"]], template: function EleaderImportComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h2");
        \u0275\u0275text(4, "Import eLeader");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Importer une facture PDF eLeader et cr\xE9er un bon de commande");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function EleaderImportComponent_Template_button_click_7_listener() {
          return ctx.toggleLogs();
        });
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Historique des imports ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, EleaderImportComponent_div_11_Template, 8, 1, "div", 7)(12, EleaderImportComponent_div_12_Template, 6, 1, "div", 8);
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275listener("dragover", function EleaderImportComponent_Template_div_dragover_13_listener($event) {
          return ctx.onDragOver($event);
        })("dragleave", function EleaderImportComponent_Template_div_dragleave_13_listener() {
          return ctx.onDragLeave();
        })("drop", function EleaderImportComponent_Template_div_drop_13_listener($event) {
          return ctx.onDrop($event);
        })("click", function EleaderImportComponent_Template_div_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          const fileInput_r3 = \u0275\u0275reference(15);
          return \u0275\u0275resetView(!ctx.selectedFile && fileInput_r3.click());
        });
        \u0275\u0275elementStart(14, "input", 10, 0);
        \u0275\u0275listener("change", function EleaderImportComponent_Template_input_change_14_listener($event) {
          return ctx.onFileSelected($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, EleaderImportComponent_ng_container_16_Template, 9, 0, "ng-container", 11)(17, EleaderImportComponent_ng_container_17_Template, 11, 2, "ng-container", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, EleaderImportComponent_div_18_Template, 27, 13, "div", 12)(19, EleaderImportComponent_ng_container_19_Template, 13, 10, "ng-container", 11)(20, EleaderImportComponent_div_20_Template, 5, 2, "div", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.journalName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.configWarning);
        \u0275\u0275advance();
        \u0275\u0275classProp("drag-over", ctx.isDragOver)("has-file", !!ctx.selectedFile);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.selectedFile);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedFile);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedFile);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.result);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showLogs);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, RouterLink, DatePipe], styles: ["\n.import-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 860px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin: 0 0 4px;\n  color: var(--text-primary);\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  margin: 0;\n}\n.btn-logs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-logs[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-logs[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.journal-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--primary-subtle);\n  border: 1px solid var(--primary-subtle);\n  border-radius: 10px;\n  font-size: 0.9rem;\n  color: var(--primary);\n  margin-bottom: 16px;\n}\n.journal-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--primary);\n}\n.journal-banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin: 0 4px;\n}\n.alert-warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: var(--warning-bg);\n  border: 1px solid var(--warning-bg);\n  border-radius: 10px;\n  font-size: 0.9rem;\n  color: var(--warning);\n  margin-bottom: 16px;\n}\n.alert-warning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #d97706;\n}\n.link-config[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--primary);\n  text-decoration: underline;\n  cursor: pointer;\n}\n.link-config[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.drop-zone[_ngcontent-%COMP%] {\n  border: 2px dashed var(--border);\n  border-radius: 16px;\n  padding: 48px 32px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: var(--bg-elevated);\n}\n.drop-zone[_ngcontent-%COMP%]:hover, \n.drop-zone.drag-over[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-subtle);\n}\n.drop-zone.has-file[_ngcontent-%COMP%] {\n  border-color: var(--success);\n  background: var(--success-bg);\n  cursor: default;\n}\n.drop-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  display: block;\n}\n.drop-icon.ready[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.drop-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 6px;\n}\n.drop-title.file-name[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.drop-sub[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  margin: 0 0 4px;\n}\n.drop-hint[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n  margin: 8px 0 0;\n}\n.btn-clear[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  cursor: pointer;\n  margin-top: 12px;\n}\n.btn-clear[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: #fca5a5;\n}\n.options-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 20px;\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.option-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 10px;\n}\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.radio-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border: 2px solid var(--border);\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.radio-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.radio-option[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n.radio-option[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  background: var(--primary-subtle);\n}\n.radio-option.selected[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.radio-option.selected[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.btn-import[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 28px;\n  background: var(--primary);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-import[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.result-card[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n}\n.result-card.success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  border: 1px solid var(--success-bg);\n}\n.result-card.error[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n}\n.result-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.success[_ngcontent-%COMP%]   .result-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.error[_ngcontent-%COMP%]   .result-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.result-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.result-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  margin: 0 0 4px;\n}\n.success[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.error[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.result-msg[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n  margin: 0 0 12px;\n}\n.result-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.detail-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--success-bg);\n  border-radius: 99px;\n  font-size: 0.8rem;\n  color: var(--success);\n}\n.detail-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.result-warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  background: var(--warning-bg);\n  border: 1px solid var(--warning-bg);\n  border-radius: 8px;\n  font-size: 0.85rem;\n  color: var(--warning);\n  margin-bottom: 12px;\n}\n.result-warning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #d97706;\n}\n.result-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary.small[_ngcontent-%COMP%], \n.btn-secondary.small[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  font-size: 0.85rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.logs-section[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.logs-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0 0 12px;\n  color: var(--text-primary);\n}\n.logs-table[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.logs-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.82rem;\n}\n.logs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  padding: 9px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  font-size: 0.72rem;\n  letter-spacing: 0.04em;\n}\n.logs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-top: 1px solid var(--border-light);\n  color: var(--text-secondary);\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.8rem;\n}\n.filename[_ngcontent-%COMP%] {\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.model-badge[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 99px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  text-transform: uppercase;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: #16a34a;\n}\n.badge-error[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge-warning[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-info[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--primary);\n}\n.badge-neutral[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-muted);\n  padding: 24px;\n  justify-content: center;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=eleader-import.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EleaderImportComponent, [{
    type: Component,
    args: [{ selector: "app-eleader-import", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="import-page">
  <div class="page-header">
    <div>
      <h2>Import eLeader</h2>
      <p class="subtitle">Importer une facture PDF eLeader et cr\xE9er un bon de commande</p>
    </div>
    <button class="btn-logs" (click)="toggleLogs()">
      <span class="material-icons">history</span>
      Historique des imports
    </button>
  </div>

  <!-- Bandeau journal -->
  <div class="journal-banner" *ngIf="journalName">
    <span class="material-icons">book</span>
    Journal utilis\xE9 : <strong>{{ journalName }}</strong>
    <a class="link-config" routerLink="/sales/eleader/config">Modifier</a>
  </div>

  <!-- Warning pas de journal -->
  <div class="alert alert-warning" *ngIf="configWarning">
    <span class="material-icons">warning</span>
    {{ configWarning }}
    <a class="link-config" routerLink="/sales/eleader/config">Configurer maintenant</a>
  </div>

  <!-- Zone de d\xE9p\xF4t -->
  <div class="drop-zone"
       [class.drag-over]="isDragOver"
       [class.has-file]="!!selectedFile"
       (dragover)="onDragOver($event)"
       (dragleave)="onDragLeave()"
       (drop)="onDrop($event)"
       (click)="!selectedFile && fileInput.click()">
    <input #fileInput type="file" accept=".pdf" (change)="onFileSelected($event)" hidden />

    <ng-container *ngIf="!selectedFile">
      <span class="material-icons drop-icon">picture_as_pdf</span>
      <p class="drop-title">Glissez-d\xE9posez votre PDF eLeader ici</p>
      <p class="drop-sub">ou cliquez pour s\xE9lectionner un fichier</p>
      <p class="drop-hint">Formats accept\xE9s : PDF \u2014 Factures Brasseries ou Guinness</p>
    </ng-container>

    <ng-container *ngIf="selectedFile">
      <span class="material-icons drop-icon ready">picture_as_pdf</span>
      <p class="drop-title file-name">{{ selectedFile.name }}</p>
      <p class="drop-sub">{{ (selectedFile.size / 1024).toFixed(1) }} Ko</p>
      <button class="btn-clear" (click)="$event.stopPropagation(); clearFile()">
        <span class="material-icons">close</span> Changer de fichier
      </button>
    </ng-container>
  </div>

  <!-- Options d'import -->
  <div class="options-card" *ngIf="selectedFile">
    <div class="option-group">
      <label class="option-label">Mod\xE8le de facture</label>
      <div class="radio-group">
        <label class="radio-option" [class.selected]="invoiceModel === 'AUTO'">
          <input type="radio" [(ngModel)]="invoiceModel" value="AUTO" />
          <span class="material-icons">auto_awesome</span>
          <span>D\xE9tection automatique</span>
        </label>
        <label class="radio-option" [class.selected]="invoiceModel === 'BRASSERIES'">
          <input type="radio" [(ngModel)]="invoiceModel" value="BRASSERIES" />
          <span class="material-icons">sports_bar</span>
          <span>Brasseries</span>
        </label>
        <label class="radio-option" [class.selected]="invoiceModel === 'GUINNESS'">
          <input type="radio" [(ngModel)]="invoiceModel" value="GUINNESS" />
          <span class="material-icons">local_bar</span>
          <span>Guinness</span>
        </label>
      </div>
    </div>

    <button class="btn-import" (click)="import()" [disabled]="importing">
      <span class="material-icons" *ngIf="!importing">upload</span>
      <span class="material-icons spin" *ngIf="importing">refresh</span>
      {{ importing ? 'Import en cours\u2026' : 'Importer la facture' }}
    </button>
  </div>

  <!-- R\xE9sultat -->
  <ng-container *ngIf="result">
    <div class="result-card" [class.success]="result.success" [class.error]="!result.success">
      <div class="result-icon">
        <span class="material-icons">{{ result.success ? 'check_circle' : 'error' }}</span>
      </div>
      <div class="result-body">
        <p class="result-title">{{ result.success ? 'Import r\xE9ussi !' : 'Import \xE9chou\xE9' }}</p>
        <p class="result-msg">{{ result.message }}</p>
        <div class="result-details" *ngIf="result.success">
          <span class="detail-chip">
            <span class="material-icons">receipt</span>
            Facture eLeader : {{ result.eleaderReference }}
          </span>
          <span class="detail-chip">
            <span class="material-icons">person</span>
            Client : {{ result.clientName }}
          </span>
          <span class="detail-chip">
            <span class="material-icons">assignment</span>
            BC : {{ result.salesOrderName }}
          </span>
        </div>
        <div class="result-warning" *ngIf="result.warning">
          <span class="material-icons">warning</span>
          {{ result.warning }}
        </div>
        <div class="result-actions" *ngIf="result.success">
          <button class="btn-secondary" (click)="goToOrder()">
            <span class="material-icons">open_in_new</span>
            Voir les bons de commande
          </button>
          <button class="btn-primary small" (click)="clearFile()">
            <span class="material-icons">add</span>
            Nouvel import
          </button>
        </div>
      </div>
    </div>
  </ng-container>

  <!-- Historique -->
  <div class="logs-section" *ngIf="showLogs">
    <h3>Historique des imports eLeader</h3>
    <div *ngIf="loadingLogs" class="loading-state">
      <span class="material-icons spin">refresh</span> Chargement\u2026
    </div>
    <div class="logs-table" *ngIf="!loadingLogs">
      <table *ngIf="logs.length > 0; else noLogs">
        <thead>
          <tr>
            <th>R\xE9f\xE9rence</th>
            <th>Fichier</th>
            <th>Mod\xE8le</th>
            <th>Facture eLeader</th>
            <th>Client</th>
            <th>BC cr\xE9\xE9</th>
            <th>Statut</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let log of logs">
            <td class="mono">{{ log.reference }}</td>
            <td class="filename">{{ log.filename }}</td>
            <td><span class="model-badge">{{ log.invoiceModel }}</span></td>
            <td class="mono">{{ log.eleaderReference || '\u2014' }}</td>
            <td>{{ log.clientName || '\u2014' }}</td>
            <td class="mono">{{ log.salesOrderName || '\u2014' }}</td>
            <td><span class="badge" [ngClass]="statusClass(log.status)">{{ statusLabel(log.status) }}</span></td>
            <td>{{ log.importDate | date:'dd/MM/yyyy HH:mm' }}</td>
          </tr>
        </tbody>
      </table>
      <ng-template #noLogs>
        <div class="empty-state">
          <span class="material-icons">history</span>
          <p>Aucun import enregistr\xE9.</p>
        </div>
      </ng-template>
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/sales/components/eleader/eleader-import/eleader-import.component.scss */\n.import-page {\n  padding: 24px;\n  max-width: 860px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.page-header h2 {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin: 0 0 4px;\n  color: var(--text-primary);\n}\n.page-header .subtitle {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  margin: 0;\n}\n.btn-logs {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-logs .material-icons {\n  font-size: 18px;\n}\n.btn-logs:hover {\n  background: var(--bg-elevated);\n}\n.journal-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--primary-subtle);\n  border: 1px solid var(--primary-subtle);\n  border-radius: 10px;\n  font-size: 0.9rem;\n  color: var(--primary);\n  margin-bottom: 16px;\n}\n.journal-banner .material-icons {\n  font-size: 18px;\n  color: var(--primary);\n}\n.journal-banner strong {\n  margin: 0 4px;\n}\n.alert-warning {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: var(--warning-bg);\n  border: 1px solid var(--warning-bg);\n  border-radius: 10px;\n  font-size: 0.9rem;\n  color: var(--warning);\n  margin-bottom: 16px;\n}\n.alert-warning .material-icons {\n  font-size: 18px;\n  color: #d97706;\n}\n.link-config {\n  margin-left: auto;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--primary);\n  text-decoration: underline;\n  cursor: pointer;\n}\n.link-config:hover {\n  color: var(--primary);\n}\n.drop-zone {\n  border: 2px dashed var(--border);\n  border-radius: 16px;\n  padding: 48px 32px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: var(--bg-elevated);\n}\n.drop-zone:hover,\n.drop-zone.drag-over {\n  border-color: var(--primary);\n  background: var(--primary-subtle);\n}\n.drop-zone.has-file {\n  border-color: var(--success);\n  background: var(--success-bg);\n  cursor: default;\n}\n.drop-icon {\n  font-size: 48px;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  display: block;\n}\n.drop-icon.ready {\n  color: var(--success);\n}\n.drop-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 6px;\n}\n.drop-title.file-name {\n  color: var(--success);\n}\n.drop-sub {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  margin: 0 0 4px;\n}\n.drop-hint {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n  margin: 8px 0 0;\n}\n.btn-clear {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  cursor: pointer;\n  margin-top: 12px;\n}\n.btn-clear .material-icons {\n  font-size: 16px;\n}\n.btn-clear:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: #fca5a5;\n}\n.options-card {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 20px;\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.option-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 10px;\n}\n.radio-group {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border: 2px solid var(--border);\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.radio-option input[type=radio] {\n  display: none;\n}\n.radio-option .material-icons {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n.radio-option:hover {\n  border-color: var(--primary);\n  background: var(--primary-subtle);\n}\n.radio-option.selected {\n  border-color: var(--primary);\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.radio-option.selected .material-icons {\n  color: var(--primary);\n}\n.btn-import {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 28px;\n  background: var(--primary);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-import .material-icons {\n  font-size: 20px;\n}\n.btn-import:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-import:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.result-card {\n  margin-top: 20px;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n}\n.result-card.success {\n  background: var(--success-bg);\n  border: 1px solid var(--success-bg);\n}\n.result-card.error {\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n}\n.result-icon .material-icons {\n  font-size: 32px;\n}\n.success .result-icon .material-icons {\n  color: #16a34a;\n}\n.error .result-icon .material-icons {\n  color: var(--danger);\n}\n.result-body {\n  flex: 1;\n}\n.result-title {\n  font-size: 1.05rem;\n  font-weight: 700;\n  margin: 0 0 4px;\n}\n.success .result-title {\n  color: var(--success);\n}\n.error .result-title {\n  color: var(--danger);\n}\n.result-msg {\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n  margin: 0 0 12px;\n}\n.result-details {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.detail-chip {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--success-bg);\n  border-radius: 99px;\n  font-size: 0.8rem;\n  color: var(--success);\n}\n.detail-chip .material-icons {\n  font-size: 14px;\n}\n.result-warning {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  background: var(--warning-bg);\n  border: 1px solid var(--warning-bg);\n  border-radius: 8px;\n  font-size: 0.85rem;\n  color: var(--warning);\n  margin-bottom: 12px;\n}\n.result-warning .material-icons {\n  font-size: 16px;\n  color: #d97706;\n}\n.result-actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn-primary,\n.btn-secondary {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 16px;\n}\n.btn-primary.small,\n.btn-secondary.small {\n  padding: 6px 14px;\n  font-size: 0.85rem;\n}\n.btn-primary {\n  background: var(--primary);\n  color: #fff;\n}\n.btn-primary:hover {\n  background: var(--primary-dark);\n}\n.btn-secondary {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover {\n  background: var(--bg-elevated);\n}\n.logs-section {\n  margin-top: 28px;\n}\n.logs-section h3 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0 0 12px;\n  color: var(--text-primary);\n}\n.logs-table {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.logs-table table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.82rem;\n}\n.logs-table th {\n  background: var(--bg-elevated);\n  padding: 9px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  font-size: 0.72rem;\n  letter-spacing: 0.04em;\n}\n.logs-table td {\n  padding: 8px 12px;\n  border-top: 1px solid var(--border-light);\n  color: var(--text-secondary);\n}\n.mono {\n  font-family: monospace;\n  font-size: 0.8rem;\n}\n.filename {\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.model-badge {\n  padding: 2px 8px;\n  border-radius: 99px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  text-transform: uppercase;\n}\n.badge {\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge-success {\n  background: var(--success-bg);\n  color: #16a34a;\n}\n.badge-error {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge-warning {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-info {\n  background: var(--info-bg);\n  color: var(--primary);\n}\n.badge-neutral {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.empty-state {\n  text-align: center;\n  padding: 32px;\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 0.9rem;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-muted);\n  padding: 24px;\n  justify-content: center;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin {\n  animation: spin 0.8s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=eleader-import.component.css.map */\n"] }]
  }], () => [{ type: EleaderService }, { type: AuthService }, { type: Router }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EleaderImportComponent, { className: "EleaderImportComponent", filePath: "app/modules/sales/components/eleader/eleader-import/eleader-import.component.ts", lineNumber: 15 });
})();
export {
  EleaderImportComponent
};
//# sourceMappingURL=chunk-6PGNHUOQ.js.map

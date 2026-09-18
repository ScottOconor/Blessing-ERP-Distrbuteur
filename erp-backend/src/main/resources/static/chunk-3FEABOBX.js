import {
  CommonModule,
  Component,
  HttpClient,
  HttpParams,
  Injectable,
  JsonPipe,
  environment,
  interval,
  setClassMetadata,
  startWith,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/sync/services/sync.service.ts
var SyncService = class _SyncService {
  constructor(http) {
    this.http = http;
    this.base = `${environment.apiUrl}/api/sync`;
  }
  getSummary() {
    return this.http.get(`${this.base}/summary`);
  }
  getEvents(module, status, page = 0, size = 30) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (module)
      params = params.set("module", module);
    if (status)
      params = params.set("status", status);
    return this.http.get(`${this.base}/events`, { params });
  }
  retryAll() {
    return this.http.post(`${this.base}/retry`, {});
  }
  /** Supprime définitivement les événements en échec — contrairement à retryAll(), ces
   *  opérations ne remonteront plus jamais au Hub. */
  clearFailed() {
    return this.http.delete(`${this.base}/failed`);
  }
  retryOne(id) {
    return this.http.post(`${this.base}/retry/${id}`, {});
  }
  getEvent(id) {
    return this.http.get(`${this.base}/events/${id}`);
  }
  forceDispatch() {
    return this.http.post(`${this.base}/dispatch`, {});
  }
  forceSnapshot() {
    return this.http.post(`${this.base}/snapshot/force`, {});
  }
  testHub() {
    return this.http.get(`${this.base}/test-hub`);
  }
  getProgress() {
    return this.http.get(`${this.base}/progress`);
  }
  static {
    this.\u0275fac = function SyncService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SyncService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SyncService, factory: _SyncService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SyncService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/modules/sync/components/dashboard/sync-dashboard.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function SyncDashboardComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 18)(1, "button", 32);
    \u0275\u0275domListener("click", function SyncDashboardComponent_Conditional_54_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retryAll());
    });
    \u0275\u0275domElementStart(2, "span", 3);
    \u0275\u0275text(3, "replay");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 33);
    \u0275\u0275domListener("click", function SyncDashboardComponent_Conditional_54_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFailed());
    });
    \u0275\u0275domElementStart(6, "span", 3);
    \u0275\u0275text(7, "delete_sweep");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.retrying);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.retrying ? "..." : "R\xE9essayer tout", " ");
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.clearingFailed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.clearingFailed ? "..." : "Vider les \xE9checs", " ");
  }
}
function SyncDashboardComponent_Conditional_64_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 40)(1, "span", 3);
    \u0275\u0275text(2, "error");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.progress.failed, " \xE9chou\xE9s ");
  }
}
function SyncDashboardComponent_Conditional_64_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 41)(1, "span", 3);
    \u0275\u0275text(2, "bolt");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Dernier batch : ", ctx_r1.progress.lastBatchSent, "/", ctx_r1.progress.lastBatchSize, " ");
  }
}
function SyncDashboardComponent_Conditional_64_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 42)(1, "span", 3);
    \u0275\u0275text(2, "access_time");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Dernier envoi : ", ctx_r1.fmtDate(ctx_r1.progress.lastDispatchAt), " ");
  }
}
function SyncDashboardComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 20)(1, "div", 34)(2, "div", 35)(3, "span", 3);
    \u0275\u0275text(4, "sync");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "strong");
    \u0275\u0275text(6, "Progression globale");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 36);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 37)(10, "span", 38)(11, "span", 3);
    \u0275\u0275text(12, "check_circle");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "span", 39)(15, "span", 3);
    \u0275\u0275text(16, "schedule");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(18, SyncDashboardComponent_Conditional_64_Conditional_18_Template, 4, 1, "span", 40);
    \u0275\u0275conditionalCreate(19, SyncDashboardComponent_Conditional_64_Conditional_19_Template, 4, 2, "span", 41);
    \u0275\u0275conditionalCreate(20, SyncDashboardComponent_Conditional_64_Conditional_20_Template, 4, 1, "span", 42);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(21, "div", 43);
    \u0275\u0275domElement(22, "div", 44);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.progress.progressPct, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.progress.sent, " envoy\xE9s ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.progress.pending, " en attente ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.progress.failed > 0 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.progress.lastBatchSize > 0 ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.progress.lastDispatchAt ? 20 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.progress.progressPct, "%");
    \u0275\u0275classProp("bar-full", ctx_r1.progress.progressPct === 100)("bar-warn", ctx_r1.progress.failed > 0);
  }
}
function SyncDashboardComponent_Conditional_65_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.hubTest.latencyMs, " ms");
  }
}
function SyncDashboardComponent_Conditional_65_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.hubTest.message);
  }
}
function SyncDashboardComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 45)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 46)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 47);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 48);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(10, SyncDashboardComponent_Conditional_65_Conditional_10_Template, 2, 1, "span", 49);
    \u0275\u0275conditionalCreate(11, SyncDashboardComponent_Conditional_65_Conditional_11_Template, 2, 1, "span", 50);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "button", 51);
    \u0275\u0275domListener("click", function SyncDashboardComponent_Conditional_65_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hubTest = null);
    });
    \u0275\u0275domElementStart(13, "span", 3);
    \u0275\u0275text(14, "close");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hub-ok", ctx_r1.hubTest.reachable)("hub-fail", !ctx_r1.hubTest.reachable);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hubTest.reachable ? "check_circle" : "cancel");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.hubTest.reachable ? "Broker RabbitMQ accessible" : "Broker RabbitMQ injoignable");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hubTest.hubUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Exchange : ", ctx_r1.hubTest.exchange, " \xB7 Queue : ", ctx_r1.hubTest.queue);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hubTest.reachable && ctx_r1.hubTest.latencyMs !== null ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hubTest.reachable ? 11 : -1);
  }
}
function SyncDashboardComponent_Conditional_66_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 58);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tab_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.moduleStats(tab_r5.id).pending, " en attente");
  }
}
function SyncDashboardComponent_Conditional_66_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tab_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.moduleStats(tab_r5.id).failed, " \xE9chou\xE9(s)");
  }
}
function SyncDashboardComponent_Conditional_66_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 60)(1, "span", 61);
    \u0275\u0275text(2, "check");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tab_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" OK \u2014 ", ctx_r1.moduleStats(tab_r5.id).sent, " envoy\xE9(s) ");
  }
}
function SyncDashboardComponent_Conditional_66_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 53);
    \u0275\u0275domListener("click", function SyncDashboardComponent_Conditional_66_For_2_Template_div_click_0_listener() {
      const tab_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectTab(tab_r5.id));
    });
    \u0275\u0275domElementStart(1, "div", 54)(2, "span", 55);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 56);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 57);
    \u0275\u0275conditionalCreate(7, SyncDashboardComponent_Conditional_66_For_2_Conditional_7_Template, 2, 1, "span", 58);
    \u0275\u0275conditionalCreate(8, SyncDashboardComponent_Conditional_66_For_2_Conditional_8_Template, 2, 1, "span", 59);
    \u0275\u0275conditionalCreate(9, SyncDashboardComponent_Conditional_66_For_2_Conditional_9_Template, 4, 1, "span", 60);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === tab_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tab_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.moduleStats(tab_r5.id).pending > 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.moduleStats(tab_r5.id).failed > 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.moduleStats(tab_r5.id).pending === 0 && ctx_r1.moduleStats(tab_r5.id).failed === 0 ? 9 : -1);
  }
}
function SyncDashboardComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, SyncDashboardComponent_Conditional_66_For_2_Template, 10, 7, "div", 52, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.tabs);
  }
}
function SyncDashboardComponent_For_71_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.moduleStats(tab_r7.id).pending);
  }
}
function SyncDashboardComponent_For_71_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.moduleStats(tab_r7.id).failed);
  }
}
function SyncDashboardComponent_For_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 62);
    \u0275\u0275domListener("click", function SyncDashboardComponent_For_71_Template_button_click_0_listener() {
      const tab_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectTab(tab_r7.id));
    });
    \u0275\u0275domElementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, SyncDashboardComponent_For_71_Conditional_4_Template, 2, 1, "span", 63);
    \u0275\u0275conditionalCreate(5, SyncDashboardComponent_For_71_Conditional_5_Template, 2, 1, "span", 64);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.activeTab === tab_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r7.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r7.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.moduleStats(tab_r7.id).pending > 0 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.moduleStats(tab_r7.id).failed > 0 ? 5 : -1);
  }
}
function SyncDashboardComponent_For_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 65);
    \u0275\u0275domListener("click", function SyncDashboardComponent_For_74_Template_button_click_0_listener() {
      const f_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectStatus(f_r9.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const f_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap("filter-btn filter-btn-" + f_r9.cls);
    \u0275\u0275classProp("active", ctx_r1.activeStatus === f_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r9.label, " ");
  }
}
function SyncDashboardComponent_Conditional_97_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 66)(1, "td", 67);
    \u0275\u0275domElement(2, "div", 68);
    \u0275\u0275domElementEnd()();
  }
}
function SyncDashboardComponent_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SyncDashboardComponent_Conditional_97_For_1_Template, 3, 0, "tr", 66, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function SyncDashboardComponent_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 69)(2, "span", 3);
    \u0275\u0275text(3, "inbox");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(4, " Aucune op\xE9ration trouv\xE9e ");
    \u0275\u0275domElementEnd()();
  }
}
function SyncDashboardComponent_Conditional_99_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ev_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275interpolate1("mod-chip mod-", ev_r11.eventModule));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ev_r11.eventModule);
  }
}
function SyncDashboardComponent_Conditional_99_For_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 86);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ev_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("high", ev_r11.retryCount >= 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ev_r11.retryCount);
  }
}
function SyncDashboardComponent_Conditional_99_For_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 81);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275domElementEnd();
  }
}
function SyncDashboardComponent_Conditional_99_For_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 83);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ev_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275domProperty("title", ev_r11.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ev_r11.errorMessage.length > 40 ? ev_r11.errorMessage.slice(0, 40) + "\u2026" : ev_r11.errorMessage, " ");
  }
}
function SyncDashboardComponent_Conditional_99_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 81);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275domElementEnd();
  }
}
function SyncDashboardComponent_Conditional_99_For_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 87);
    \u0275\u0275domListener("click", function SyncDashboardComponent_Conditional_99_For_1_Conditional_23_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ev_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.retryOne(ev_r11, $event));
    });
    \u0275\u0275domElementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ev_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("disabled", ctx_r1.retryingId === ev_r11.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.retryingId === ev_r11.id ? "hourglass_empty" : "replay");
  }
}
function SyncDashboardComponent_Conditional_99_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 71);
    \u0275\u0275domListener("click", function SyncDashboardComponent_Conditional_99_For_1_Template_tr_click_0_listener() {
      const ev_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetail(ev_r11));
    });
    \u0275\u0275domElementStart(1, "td", 72);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 73);
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, SyncDashboardComponent_Conditional_99_For_1_Conditional_5_Template, 2, 4, "span", 74);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "td", 75)(7, "span", 76);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "td")(10, "span", 77);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "td", 78);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "td", 78);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "td", 79);
    \u0275\u0275conditionalCreate(17, SyncDashboardComponent_Conditional_99_For_1_Conditional_17_Template, 2, 3, "span", 80)(18, SyncDashboardComponent_Conditional_99_For_1_Conditional_18_Template, 2, 0, "span", 81);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "td", 82);
    \u0275\u0275conditionalCreate(20, SyncDashboardComponent_Conditional_99_For_1_Conditional_20_Template, 2, 2, "span", 83)(21, SyncDashboardComponent_Conditional_99_For_1_Conditional_21_Template, 2, 0, "span", 81);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "td", 84);
    \u0275\u0275conditionalCreate(23, SyncDashboardComponent_Conditional_99_For_1_Conditional_23_Template, 3, 2, "button", 85);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ev_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row-failed", ev_r11.status === "FAILED")("row-selected", (ctx_r1.detailEvent == null ? null : ctx_r1.detailEvent.id) === ev_r11.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ev_r11.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ev_r11.eventLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab === "TOUS" ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ev_r11.entityId);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statusClass(ev_r11.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(ev_r11.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(ev_r11.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(ev_r11.lastAttemptAt));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ev_r11.retryCount > 0 ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ev_r11.errorMessage ? 20 : 21);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ev_r11.status === "FAILED" ? 23 : -1);
  }
}
function SyncDashboardComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SyncDashboardComponent_Conditional_99_For_1_Template, 24, 16, "tr", 70, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.events);
  }
}
function SyncDashboardComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 31)(1, "button", 88);
    \u0275\u0275domListener("click", function SyncDashboardComponent_Conditional_100_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275domElementStart(2, "span", 3);
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "span", 89);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "button", 88);
    \u0275\u0275domListener("click", function SyncDashboardComponent_Conditional_100_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275domElementStart(7, "span", 3);
    \u0275\u0275text(8, "chevron_right");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.currentPage === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3("Page ", ctx_r1.currentPage + 1, " / ", ctx_r1.totalPages, " (", ctx_r1.totalEvents, " entr\xE9es)");
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.currentPage + 1 >= ctx_r1.totalPages);
  }
}
function SyncDashboardComponent_Conditional_101_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 101)(1, "dt");
    \u0275\u0275text(2, "Derni\xE8re tentative");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(ctx_r1.detailEvent.lastAttemptAt));
  }
}
function SyncDashboardComponent_Conditional_101_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 101)(1, "dt");
    \u0275\u0275text(2, "Tentatives");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "dd")(4, "span", 86);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("high", ctx_r1.detailEvent.retryCount >= 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailEvent.retryCount, " / 5 ");
  }
}
function SyncDashboardComponent_Conditional_101_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 98)(1, "h3", 107)(2, "span", 3);
    \u0275\u0275text(3, "error");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(4, " Erreur d'envoi ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 108);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.detailEvent.errorMessage);
  }
}
function SyncDashboardComponent_Conditional_101_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 104)(1, "button", 8);
    \u0275\u0275domListener("click", function SyncDashboardComponent_Conditional_101_Conditional_52_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.retryOne(ctx_r1.detailEvent, $event);
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275domElementStart(2, "span", 3);
    \u0275\u0275text(3, "replay");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(4, " R\xE9essayer cet envoi ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.retryingId === ctx_r1.detailEvent.id);
  }
}
function SyncDashboardComponent_Conditional_101_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 105)(1, "span", 109);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Chargement... ");
    \u0275\u0275domElementEnd();
  }
}
function SyncDashboardComponent_Conditional_101_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 81);
    \u0275\u0275text(1, "Aucune donn\xE9e disponible.");
    \u0275\u0275domElementEnd();
  }
}
function SyncDashboardComponent_Conditional_101_Conditional_60_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 115);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const key_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.payloadValue(key_r16)));
  }
}
function SyncDashboardComponent_Conditional_101_Conditional_60_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const key_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.payloadValue(key_r16) ?? "\u2014", " ");
  }
}
function SyncDashboardComponent_Conditional_101_Conditional_60_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 111)(1, "span", 113);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 114);
    \u0275\u0275conditionalCreate(4, SyncDashboardComponent_Conditional_101_Conditional_60_For_2_Conditional_4_Template, 3, 3, "span", 115)(5, SyncDashboardComponent_Conditional_101_Conditional_60_For_2_Conditional_5_Template, 1, 1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const key_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(key_r16);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isObject(ctx_r1.payloadValue(key_r16)) ? 4 : 5);
  }
}
function SyncDashboardComponent_Conditional_101_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 110);
    \u0275\u0275repeaterCreate(1, SyncDashboardComponent_Conditional_101_Conditional_60_For_2_Template, 6, 2, "div", 111, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "details", 112)(4, "summary");
    \u0275\u0275text(5, "Voir JSON brut");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "pre", 106);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.payloadKeys());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatPayload());
  }
}
function SyncDashboardComponent_Conditional_101_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "pre", 106);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatPayload());
  }
}
function SyncDashboardComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 90);
    \u0275\u0275domListener("click", function SyncDashboardComponent_Conditional_101_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(1, "aside", 91)(2, "div", 92)(3, "div", 93)(4, "span", 77);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 94);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "h2", 95);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "button", 96);
    \u0275\u0275domListener("click", function SyncDashboardComponent_Conditional_101_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275domElementStart(11, "span", 3);
    \u0275\u0275text(12, "close");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(13, "div", 97)(14, "section", 98)(15, "h3", 99)(16, "span", 3);
    \u0275\u0275text(17, "info");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(18, " Informations ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "dl", 100)(20, "div", 101)(21, "dt");
    \u0275\u0275text(22, "ID \xE9v\xE9nement");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "dd")(24, "span", 102);
    \u0275\u0275text(25);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(26, "div", 101)(27, "dt");
    \u0275\u0275text(28, "Spoke");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(29, "dd")(30, "span", 102);
    \u0275\u0275text(31);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(32, "div", 101)(33, "dt");
    \u0275\u0275text(34, "R\xE9f. entit\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "dd")(36, "span", 102);
    \u0275\u0275text(37);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(38, "div", 101)(39, "dt");
    \u0275\u0275text(40, "Type technique");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(41, "dd")(42, "span", 103);
    \u0275\u0275text(43);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(44, "div", 101)(45, "dt");
    \u0275\u0275text(46, "Date de cr\xE9ation");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "dd");
    \u0275\u0275text(48);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(49, SyncDashboardComponent_Conditional_101_Conditional_49_Template, 5, 1, "div", 101);
    \u0275\u0275conditionalCreate(50, SyncDashboardComponent_Conditional_101_Conditional_50_Template, 6, 3, "div", 101);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(51, SyncDashboardComponent_Conditional_101_Conditional_51_Template, 7, 1, "section", 98);
    \u0275\u0275conditionalCreate(52, SyncDashboardComponent_Conditional_101_Conditional_52_Template, 5, 1, "div", 104);
    \u0275\u0275domElementStart(53, "section", 98)(54, "h3", 99)(55, "span", 3);
    \u0275\u0275text(56, "data_object");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(57, " Donn\xE9es transmises au Hub ");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(58, SyncDashboardComponent_Conditional_101_Conditional_58_Template, 4, 0, "div", 105)(59, SyncDashboardComponent_Conditional_101_Conditional_59_Template, 2, 0, "p", 81)(60, SyncDashboardComponent_Conditional_101_Conditional_60_Template, 8, 1)(61, SyncDashboardComponent_Conditional_101_Conditional_61_Template, 2, 1, "pre", 106);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.statusClass(ctx_r1.detailEvent.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(ctx_r1.detailEvent.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.detailEvent.eventModule);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.detailEvent.eventLabel);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r1.detailEvent.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.detailEvent.spokeId);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.detailEvent.entityId);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.detailEvent.eventType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(ctx_r1.detailEvent.createdAt));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.detailEvent.lastAttemptAt ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.detailEvent.retryCount > 0 ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.detailEvent.errorMessage ? 51 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.detailEvent.status === "FAILED" ? 52 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.detailLoading ? 58 : !ctx_r1.detailPayload ? 59 : ctx_r1.isObject(ctx_r1.detailPayload) && !ctx_r1.isArray(ctx_r1.detailPayload) ? 60 : 61);
  }
}
var SyncDashboardComponent = class _SyncDashboardComponent {
  constructor(syncService) {
    this.syncService = syncService;
    this.loading = false;
    this.dispatching = false;
    this.retrying = false;
    this.snapshotting = false;
    this.clearingFailed = false;
    this.testingHub = false;
    this.hubTest = null;
    this.summary = null;
    this.progress = null;
    this.events = [];
    this.totalEvents = 0;
    this.currentPage = 0;
    this.pageSize = 30;
    this.activeTab = "TOUS";
    this.activeStatus = "";
    this.retryingId = null;
    this.detailEvent = null;
    this.detailLoading = false;
    this.detailPayload = null;
    this.tabs = [
      { id: "TOUS", label: "Tout", icon: "all_inbox" },
      { id: "VENTES", label: "Ventes", icon: "point_of_sale" },
      { id: "ACHATS", label: "Achats", icon: "shopping_cart" },
      { id: "COMPTABILITE", label: "Comptabilit\xE9", icon: "account_balance" },
      { id: "STOCK", label: "Stock", icon: "inventory_2" },
      { id: "CAISSES", label: "Caisses", icon: "savings" },
      { id: "REFERENTIELS", label: "R\xE9f\xE9rentiels", icon: "sync_alt" }
    ];
    this.statusFilters = [
      { value: "", label: "Tous", cls: "" },
      { value: "PENDING", label: "En attente", cls: "pending" },
      { value: "SENT", label: "Envoy\xE9s", cls: "sent" },
      { value: "FAILED", label: "\xC9chou\xE9s", cls: "failed" }
    ];
  }
  ngOnInit() {
    this.loadAll();
    this.loadProgress();
    this.autoRefresh$ = interval(3e4).pipe(startWith(0), switchMap(() => this.syncService.getSummary())).subscribe((s) => {
      this.summary = s;
      this.loadProgress();
    });
  }
  ngOnDestroy() {
    this.autoRefresh$?.unsubscribe();
  }
  loadAll() {
    this.loading = true;
    this.syncService.getSummary().subscribe({
      next: (s) => {
        this.summary = s;
        this.loadEvents();
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  loadProgress() {
    this.syncService.getProgress().subscribe({
      next: (p) => this.progress = p,
      error: () => {
      }
    });
  }
  loadEvents(page = 0) {
    this.currentPage = page;
    const st = this.activeStatus || void 0;
    const mod = this.activeTab === "TOUS" ? void 0 : this.activeTab;
    this.syncService.getEvents(mod, st, page, this.pageSize).subscribe({
      next: (res) => {
        this.events = res.content;
        this.totalEvents = res.totalElements;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  selectTab(tab) {
    this.activeTab = tab;
    this.activeStatus = "";
    this.loadEvents(0);
  }
  selectStatus(s) {
    this.activeStatus = s;
    this.loadEvents(0);
  }
  testHub() {
    this.testingHub = true;
    this.syncService.testHub().subscribe({
      next: (res) => {
        this.hubTest = res;
        this.testingHub = false;
      },
      error: () => {
        this.testingHub = false;
      }
    });
  }
  forceSnapshot() {
    this.snapshotting = true;
    this.syncService.forceSnapshot().subscribe({
      next: () => {
        this.snapshotting = false;
        setTimeout(() => this.loadAll(), 800);
      },
      error: () => {
        this.snapshotting = false;
      }
    });
  }
  forceDispatch() {
    this.dispatching = true;
    this.syncService.forceDispatch().subscribe({
      next: () => {
        this.dispatching = false;
        setTimeout(() => this.loadAll(), 500);
      },
      error: () => {
        this.dispatching = false;
      }
    });
  }
  retryAll() {
    this.retrying = true;
    this.syncService.retryAll().subscribe({
      next: () => {
        this.retrying = false;
        this.loadAll();
      },
      error: () => {
        this.retrying = false;
      }
    });
  }
  /** Suppression définitive — contrairement à retryAll(), ces opérations ne remonteront plus
   *  jamais au Hub. Confirmée explicitement car irréversible. */
  clearFailed() {
    const count = this.summary?.failed ?? 0;
    if (count === 0)
      return;
    const ok = window.confirm(`Supprimer d\xE9finitivement les ${count} \xE9v\xE9nement(s) en \xE9chec ?

Ces op\xE9rations ne seront jamais renvoy\xE9es au Hub. \xC0 utiliser uniquement apr\xE8s avoir r\xE9solu la cause des \xE9checs et accept\xE9 de perdre ces donn\xE9es c\xF4t\xE9 Hub.`);
    if (!ok)
      return;
    this.clearingFailed = true;
    this.syncService.clearFailed().subscribe({
      next: () => {
        this.clearingFailed = false;
        this.loadAll();
      },
      error: () => {
        this.clearingFailed = false;
      }
    });
  }
  retryOne(event, $event) {
    $event.stopPropagation();
    this.retryingId = event.id;
    this.syncService.retryOne(event.id).subscribe({
      next: () => {
        this.retryingId = null;
        this.loadEvents(this.currentPage);
      },
      error: () => {
        this.retryingId = null;
      }
    });
  }
  openDetail(event) {
    this.detailLoading = true;
    this.detailEvent = event;
    this.detailPayload = null;
    this.syncService.getEvent(event.id).subscribe({
      next: (full) => {
        this.detailEvent = full;
        try {
          this.detailPayload = full.payload ? JSON.parse(full.payload) : null;
        } catch (e) {
          this.detailPayload = full.payload;
        }
        this.detailLoading = false;
      },
      error: () => {
        this.detailLoading = false;
      }
    });
  }
  closeDetail() {
    this.detailEvent = null;
    this.detailPayload = null;
  }
  formatPayload() {
    if (!this.detailPayload)
      return "";
    return JSON.stringify(this.detailPayload, null, 2);
  }
  payloadKeys() {
    if (!this.detailPayload || typeof this.detailPayload !== "object")
      return [];
    return Object.keys(this.detailPayload);
  }
  payloadValue(key) {
    return this.detailPayload?.[key];
  }
  isObject(v) {
    return v !== null && typeof v === "object";
  }
  isArray(v) {
    return Array.isArray(v);
  }
  prevPage() {
    if (this.currentPage > 0)
      this.loadEvents(this.currentPage - 1);
  }
  nextPage() {
    if ((this.currentPage + 1) * this.pageSize < this.totalEvents)
      this.loadEvents(this.currentPage + 1);
  }
  get totalPages() {
    return Math.ceil(this.totalEvents / this.pageSize);
  }
  moduleStats(mod) {
    if (mod === "TOUS") {
      return {
        pending: this.summary?.pending ?? 0,
        sent: this.summary?.sent ?? 0,
        failed: this.summary?.failed ?? 0
      };
    }
    return this.summary?.byModule?.[mod] ?? { pending: 0, sent: 0, failed: 0 };
  }
  statusClass(s) {
    return { PENDING: "badge-pending", SENT: "badge-sent", FAILED: "badge-failed" }[s] ?? "";
  }
  statusLabel(s) {
    return { PENDING: "En attente", SENT: "Envoy\xE9", FAILED: "\xC9chou\xE9" }[s] ?? s;
  }
  fmtDate(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }
  static {
    this.\u0275fac = function SyncDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SyncDashboardComponent)(\u0275\u0275directiveInject(SyncService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SyncDashboardComponent, selectors: [["app-sync-dashboard"]], decls: 102, vars: 28, consts: [[1, "sync-dash"], [1, "dash-header"], [1, "dash-title"], [1, "material-icons"], [1, "dash-sub"], [1, "header-actions"], [1, "btn-action", "btn-hub-test", 3, "click", "disabled"], ["title", "Envoie l'\xE9tat complet du syst\xE8me au Hub, sans limite d'historique (factures, avoirs, bons de commande...) \u2014 \xE0 utiliser pour rattraper des documents rest\xE9s bloqu\xE9s", 1, "btn-action", "btn-snapshot", 3, "click", "disabled"], [1, "btn-action", "btn-dispatch", 3, "click", "disabled"], [1, "btn-action", "btn-refresh", 3, "click", "disabled"], [1, "kpi-row"], [1, "kpi", "kpi-pending"], [1, "kpi-icon"], [1, "kpi-body"], [1, "kpi-val"], [1, "kpi-lbl"], [1, "kpi", "kpi-sent"], [1, "kpi", "kpi-failed"], [1, "kpi-failed-actions"], [1, "kpi", "kpi-total"], [1, "progress-band"], [1, "hub-test-result", 3, "hub-ok", "hub-fail"], [1, "module-stats-row"], [1, "events-section"], [1, "events-toolbar"], [1, "tabs"], [1, "tab-btn", 3, "active"], [1, "status-filters"], [1, "filter-btn", 3, "active", "class"], [1, "table-wrap"], [1, "events-table"], [1, "pagination"], [1, "btn-retry-all", 3, "click", "disabled"], ["title", "Supprime d\xE9finitivement ces \xE9v\xE9nements \u2014 ils ne remonteront plus jamais au Hub", 1, "btn-clear-failed", 3, "click", "disabled"], [1, "progress-meta"], [1, "progress-label"], [1, "progress-pct"], [1, "progress-detail"], [1, "pd-chip", "pd-sent"], [1, "pd-chip", "pd-pending"], [1, "pd-chip", "pd-failed"], [1, "pd-chip", "pd-batch"], [1, "pd-chip", "pd-time"], [1, "progress-bar-wrap"], [1, "progress-bar"], [1, "hub-test-result"], [1, "hub-test-body"], [1, "hub-test-url"], [1, "hub-test-url", 2, "opacity", "0.6"], [1, "hub-test-latency"], [1, "hub-test-error"], ["title", "Fermer", 1, "btn-icon", 3, "click"], [1, "module-card", 3, "active"], [1, "module-card", 3, "click"], [1, "mc-header"], [1, "material-icons", "mc-icon"], [1, "mc-label"], [1, "mc-badges"], [1, "mc-badge", "b-pending"], [1, "mc-badge", "b-failed"], [1, "mc-badge", "b-ok"], [1, "material-icons", 2, "font-size", "12px"], [1, "tab-btn", 3, "click"], [1, "tab-badge", "b-pending"], [1, "tab-badge", "b-failed"], [1, "filter-btn", 3, "click"], [1, "skel-row"], ["colspan", "9"], [1, "skel-line"], ["colspan", "9", 1, "empty-row"], [1, "event-row", "clickable-row", 3, "row-failed", "row-selected"], [1, "event-row", "clickable-row", 3, "click"], [1, "cell-id"], [1, "cell-label"], [3, "class"], [1, "cell-ref"], [1, "ref-chip"], [1, "badge"], [1, "cell-date"], [1, "cell-retries"], [1, "retry-count", 3, "high"], [1, "text-muted"], [1, "cell-error"], [1, "error-msg", 3, "title"], [1, "cell-action"], [1, "btn-retry-one", 3, "disabled"], [1, "retry-count"], [1, "btn-retry-one", 3, "click", "disabled"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"], [1, "detail-overlay", 3, "click"], [1, "detail-drawer"], [1, "detail-header"], [1, "detail-title-row"], [1, "detail-module-chip"], [1, "detail-event-label"], [1, "btn-close-detail", 3, "click"], [1, "detail-body"], [1, "detail-section"], [1, "section-title"], [1, "detail-dl"], [1, "dl-row"], [1, "mono-chip"], [1, "mono-chip", "small"], [1, "detail-actions"], [1, "payload-loading"], [1, "payload-raw"], [1, "section-title", "error-title"], [1, "error-block"], [1, "material-icons", "spinning"], [1, "payload-kv"], [1, "kv-row"], [1, "raw-json-details"], [1, "kv-key"], [1, "kv-val"], [1, "kv-nested"]], template: function SyncDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2)(4, "span", 3);
        \u0275\u0275text(5, "hub");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(6, " Synchronisation Hub ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(7, "p", 4);
        \u0275\u0275text(8, "Suivi de l'envoi des op\xE9rations de ce spoke vers le Hub central");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(9, "div", 5)(10, "button", 6);
        \u0275\u0275domListener("click", function SyncDashboardComponent_Template_button_click_10_listener() {
          return ctx.testHub();
        });
        \u0275\u0275domElementStart(11, "span", 3);
        \u0275\u0275text(12, "wifi_tethering");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(13);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(14, "button", 7);
        \u0275\u0275domListener("click", function SyncDashboardComponent_Template_button_click_14_listener() {
          return ctx.forceSnapshot();
        });
        \u0275\u0275domElementStart(15, "span", 3);
        \u0275\u0275text(16, "cloud_upload");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(17);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(18, "button", 8);
        \u0275\u0275domListener("click", function SyncDashboardComponent_Template_button_click_18_listener() {
          return ctx.forceDispatch();
        });
        \u0275\u0275domElementStart(19, "span", 3);
        \u0275\u0275text(20, "send");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(21);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(22, "button", 9);
        \u0275\u0275domListener("click", function SyncDashboardComponent_Template_button_click_22_listener() {
          return ctx.loadAll();
        });
        \u0275\u0275domElementStart(23, "span", 3);
        \u0275\u0275text(24, "refresh");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(25, " Rafra\xEEchir ");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(26, "div", 10)(27, "div", 11)(28, "div", 12)(29, "span", 3);
        \u0275\u0275text(30, "schedule");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(31, "div", 13)(32, "span", 14);
        \u0275\u0275text(33);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(34, "span", 15);
        \u0275\u0275text(35, "En attente d'envoi");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(36, "div", 16)(37, "div", 12)(38, "span", 3);
        \u0275\u0275text(39, "check_circle");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(40, "div", 13)(41, "span", 14);
        \u0275\u0275text(42);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(43, "span", 15);
        \u0275\u0275text(44, "Envoy\xE9s au Hub");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(45, "div", 17)(46, "div", 12)(47, "span", 3);
        \u0275\u0275text(48, "error");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(49, "div", 13)(50, "span", 14);
        \u0275\u0275text(51);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(52, "span", 15);
        \u0275\u0275text(53, "\xC9checs d'envoi");
        \u0275\u0275domElementEnd()();
        \u0275\u0275conditionalCreate(54, SyncDashboardComponent_Conditional_54_Template, 9, 4, "div", 18);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(55, "div", 19)(56, "div", 12)(57, "span", 3);
        \u0275\u0275text(58, "swap_horiz");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(59, "div", 13)(60, "span", 14);
        \u0275\u0275text(61);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(62, "span", 15);
        \u0275\u0275text(63, "Total op\xE9rations");
        \u0275\u0275domElementEnd()()()();
        \u0275\u0275conditionalCreate(64, SyncDashboardComponent_Conditional_64_Template, 23, 12, "div", 20);
        \u0275\u0275conditionalCreate(65, SyncDashboardComponent_Conditional_65_Template, 15, 11, "div", 21);
        \u0275\u0275conditionalCreate(66, SyncDashboardComponent_Conditional_66_Template, 3, 0, "div", 22);
        \u0275\u0275domElementStart(67, "div", 23)(68, "div", 24)(69, "div", 25);
        \u0275\u0275repeaterCreate(70, SyncDashboardComponent_For_71_Template, 6, 6, "button", 26, _forTrack0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(72, "div", 27);
        \u0275\u0275repeaterCreate(73, SyncDashboardComponent_For_74_Template, 2, 5, "button", 28, _forTrack1);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(75, "div", 29)(76, "table", 30)(77, "thead")(78, "tr")(79, "th");
        \u0275\u0275text(80, "#");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(81, "th");
        \u0275\u0275text(82, "Op\xE9ration");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(83, "th");
        \u0275\u0275text(84, "R\xE9f. entit\xE9");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(85, "th");
        \u0275\u0275text(86, "Statut");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(87, "th");
        \u0275\u0275text(88, "Date op\xE9ration");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(89, "th");
        \u0275\u0275text(90, "Derni\xE8re tentative");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(91, "th");
        \u0275\u0275text(92, "Tentatives");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(93, "th");
        \u0275\u0275text(94, "Erreur");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(95, "th");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(96, "tbody");
        \u0275\u0275conditionalCreate(97, SyncDashboardComponent_Conditional_97_Template, 2, 1)(98, SyncDashboardComponent_Conditional_98_Template, 5, 0, "tr")(99, SyncDashboardComponent_Conditional_99_Template, 2, 0);
        \u0275\u0275domElementEnd()()();
        \u0275\u0275conditionalCreate(100, SyncDashboardComponent_Conditional_100_Template, 9, 5, "div", 31);
        \u0275\u0275domElementEnd()();
        \u0275\u0275conditionalCreate(101, SyncDashboardComponent_Conditional_101_Template, 62, 15);
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275domProperty("disabled", ctx.testingHub);
        \u0275\u0275advance();
        \u0275\u0275classProp("spinning", ctx.testingHub);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.testingHub ? "Test..." : "Tester Hub", " ");
        \u0275\u0275advance();
        \u0275\u0275domProperty("disabled", ctx.snapshotting);
        \u0275\u0275advance();
        \u0275\u0275classProp("spinning", ctx.snapshotting);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.snapshotting ? "Snapshot..." : "Envoyer snapshot", " ");
        \u0275\u0275advance();
        \u0275\u0275domProperty("disabled", ctx.dispatching);
        \u0275\u0275advance();
        \u0275\u0275classProp("spinning", ctx.dispatching);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.dispatching ? "Envoi..." : "Forcer envoi", " ");
        \u0275\u0275advance();
        \u0275\u0275domProperty("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275classProp("spinning", ctx.loading);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate((ctx.summary == null ? null : ctx.summary.pending) ?? "\u2014");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate((ctx.summary == null ? null : ctx.summary.sent) ?? "\u2014");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("kpi-failed-alert", ((ctx.summary == null ? null : ctx.summary.failed) ?? 0) > 0);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate((ctx.summary == null ? null : ctx.summary.failed) ?? "\u2014");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(((ctx.summary == null ? null : ctx.summary.failed) ?? 0) > 0 ? 54 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate((ctx.summary == null ? null : ctx.summary.total) ?? "\u2014");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.progress ? 64 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hubTest ? 65 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.summary ? 66 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.statusFilters);
        \u0275\u0275advance(24);
        \u0275\u0275conditional(ctx.loading ? 97 : ctx.events.length === 0 ? 98 : 99);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.totalPages > 1 ? 100 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.detailEvent ? 101 : -1);
      }
    }, dependencies: [CommonModule, JsonPipe], styles: ['@charset "UTF-8";\n\n\n.sync-dash[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.dash-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 28px;\n}\n.dash-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.dash-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #7C3AED;\n  font-size: 26px;\n}\n.dash-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.btn-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: 0.15s;\n}\n.btn-action[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-snapshot[_ngcontent-%COMP%] {\n  background: #0891B2;\n  color: white;\n}\n.btn-snapshot[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0E7490;\n}\n.btn-dispatch[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  color: white;\n}\n.btn-dispatch[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #6D28D9;\n}\n.btn-refresh[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  color: var(--text-primary);\n}\n.btn-refresh[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.kpi[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  position: relative;\n}\n.kpi[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.kpi[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  display: block;\n}\n.kpi[_ngcontent-%COMP%]   .kpi-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  display: block;\n}\n.kpi-pending[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n}\n.kpi-pending[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.kpi-sent[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n}\n.kpi-sent[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.kpi-failed[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n}\n.kpi-failed[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.kpi-total[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  background: #EDE9FE;\n}\n.kpi-total[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #7C3AED;\n}\n.kpi-failed-alert[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n  background: var(--danger-bg);\n}\n.kpi-failed-alert[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.kpi-failed-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-retry-all[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 6px;\n  background: var(--danger);\n  color: white;\n  border: none;\n  cursor: pointer;\n  font-size: 12px;\n  transition: 0.15s;\n}\n.btn-retry-all[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-retry-all[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-retry-all[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-clear-failed[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 6px;\n  background: transparent;\n  color: var(--danger);\n  border: 1px solid var(--danger);\n  cursor: pointer;\n  font-size: 12px;\n  transition: 0.15s;\n}\n.btn-clear-failed[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-clear-failed[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--danger);\n  color: white;\n}\n.btn-clear-failed[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.module-stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.module-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 2px solid var(--border);\n  border-radius: 10px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: 0.15s;\n}\n.module-card[_ngcontent-%COMP%]:hover {\n  border-color: #7C3AED;\n}\n.module-card.active[_ngcontent-%COMP%] {\n  border-color: #7C3AED;\n  background: #F5F3FF;\n}\n.module-card[_ngcontent-%COMP%]   .mc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.module-card[_ngcontent-%COMP%]   .mc-header[_ngcontent-%COMP%]   .mc-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #7C3AED;\n}\n.module-card[_ngcontent-%COMP%]   .mc-header[_ngcontent-%COMP%]   .mc-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.module-card[_ngcontent-%COMP%]   .mc-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.mc-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.mc-badge.b-pending[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.mc-badge.b-failed[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.mc-badge.b-ok[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.events-section[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.events-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-page);\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  font-size: 13px;\n  color: var(--text-secondary);\n  transition: 0.15s;\n}\n.tab-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: #EDE9FE;\n  color: #7C3AED;\n  border-color: #C4B5FD;\n  font-weight: 600;\n}\n.tab-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 1px 6px;\n  border-radius: 10px;\n  font-weight: 700;\n}\n.tab-badge.b-pending[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.tab-badge.b-failed[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.status-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  border: 1px solid var(--border);\n  background: transparent;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: 0.15s;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n}\n.filter-btn.filter-btn-pending.active[_ngcontent-%COMP%] {\n  background: var(--warning);\n  border-color: var(--warning);\n}\n.filter-btn.filter-btn-sent.active[_ngcontent-%COMP%] {\n  background: var(--success);\n  border-color: var(--success);\n}\n.filter-btn.filter-btn-failed.active[_ngcontent-%COMP%] {\n  background: var(--danger);\n  border-color: var(--danger);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.events-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.events-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11.5px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--text-muted);\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.events-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light, var(--border));\n  color: var(--text-primary);\n}\n.events-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.1s;\n}\n.events-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.events-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-failed[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.04);\n}\n.events-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.cell-id[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 12px;\n  width: 50px;\n}\n.cell-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.cell-date[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 12px;\n  white-space: nowrap;\n}\n.cell-retries[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.cell-action[_ngcontent-%COMP%] {\n  width: 48px;\n  text-align: center;\n}\n.cell-error[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.cell-ref[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.ref-chip[_ngcontent-%COMP%] {\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  border-radius: 5px;\n  padding: 2px 8px;\n  font-size: 12px;\n  font-family: monospace;\n  color: var(--text-secondary);\n}\n.retry-count[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-radius: 12px;\n  padding: 1px 7px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.retry-count.high[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-size: 12px;\n  cursor: help;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11.5px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge-pending[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-sent[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-failed[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.btn-retry-one[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid transparent;\n  border-radius: 6px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: 0.15s;\n}\n.btn-retry-one[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-retry-one[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--danger);\n  color: white;\n}\n.btn-retry-one[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.skel-row[_ngcontent-%COMP%]   .skel-line[_ngcontent-%COMP%] {\n  height: 20px;\n  background: var(--border);\n  border-radius: 4px;\n  animation: _ngcontent-%COMP%_pulse 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 0 !important;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.empty-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 40px;\n  margin-bottom: 10px;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border-top: 1px solid var(--border);\n}\n.page-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: 0.15s;\n}\n.page-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #EDE9FE;\n  color: #7C3AED;\n  border-color: #C4B5FD;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.row-selected[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.06) !important;\n}\n.detail-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 200;\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease;\n}\n.detail-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50px;\n  right: 0;\n  bottom: 0;\n  width: 520px;\n  max-width: 90vw;\n  background: var(--bg-surface);\n  border-left: 1px solid var(--border);\n  z-index: 201;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.18);\n  animation: _ngcontent-%COMP%_slideIn 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.detail-header[_ngcontent-%COMP%] {\n  padding: 18px 20px 14px;\n  border-bottom: 1px solid var(--border);\n  position: relative;\n}\n.detail-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.detail-module-chip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  background: #EDE9FE;\n  color: #7C3AED;\n  padding: 2px 9px;\n  border-radius: 12px;\n  letter-spacing: 0.5px;\n}\n.detail-event-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  padding-right: 32px;\n}\n.btn-close-detail[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  right: 16px;\n  background: var(--bg-hover);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: 0.12s;\n}\n.btn-close-detail[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-close-detail[_ngcontent-%COMP%]:hover {\n  background: var(--border);\n  color: var(--text-primary);\n}\n.detail-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 0 24px;\n}\n.detail-section[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.detail-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--text-muted);\n  margin: 0 0 14px;\n}\n.section-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.error-title[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.detail-dl[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.dl-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  align-items: baseline;\n  gap: 8px;\n  padding: 6px 0;\n  border-bottom: 1px solid var(--border-light, rgba(0, 0, 0, 0.05));\n}\n.dl-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.dl-row[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.dl-row[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-primary);\n  margin: 0;\n}\n.mono-chip[_ngcontent-%COMP%] {\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  padding: 2px 8px;\n  font-size: 12px;\n  font-family: monospace;\n  color: var(--text-secondary);\n}\n.mono-chip.small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.error-block[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-radius: 8px;\n  padding: 12px 14px;\n  font-size: 13px;\n  font-family: monospace;\n  white-space: pre-wrap;\n  word-break: break-all;\n  border: 1px solid rgba(220, 38, 38, 0.2);\n}\n.detail-actions[_ngcontent-%COMP%] {\n  padding: 0 20px 18px;\n}\n.payload-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.payload-loading[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.payload-kv[_ngcontent-%COMP%] {\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n.kv-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  gap: 10px;\n  padding: 7px 12px;\n  border-bottom: 1px solid var(--border-light, rgba(0, 0, 0, 0.05));\n  font-size: 13px;\n}\n.kv-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.kv-row[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(0, 0, 0, 0.02);\n}\n.kv-key[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n  color: #7C3AED;\n  font-weight: 600;\n  word-break: break-all;\n}\n.kv-val[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  word-break: break-all;\n}\n.kv-nested[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 11px;\n  color: var(--text-secondary);\n  white-space: pre-wrap;\n}\n.raw-json-details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--text-muted);\n  -webkit-user-select: none;\n  user-select: none;\n}\n.raw-json-details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]:hover {\n  color: #7C3AED;\n}\n.payload-raw[_ngcontent-%COMP%] {\n  background: #1e1e2e;\n  color: #cdd6f4;\n  border-radius: 8px;\n  padding: 14px 16px;\n  font-size: 12px;\n  font-family:\n    "Fira Code",\n    "Courier New",\n    monospace;\n  overflow-x: auto;\n  white-space: pre;\n  margin-top: 8px;\n  line-height: 1.6;\n  border: 1px solid var(--border);\n  max-height: 400px;\n  overflow-y: auto;\n}\n.btn-hub-test[_ngcontent-%COMP%] {\n  background: #059669;\n  color: white;\n}\n.btn-hub-test[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #047857;\n}\n.progress-band[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 14px 18px;\n  margin-bottom: 20px;\n}\n.progress-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.progress-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.progress-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #7C3AED;\n}\n.progress-pct[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 20px;\n  font-weight: 700;\n  color: #7C3AED;\n}\n.progress-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pd-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.pd-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.pd-sent[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #065F46;\n}\n.pd-pending[_ngcontent-%COMP%] {\n  background: #FFF7ED;\n  color: #92400E;\n}\n.pd-failed[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #7F1D1D;\n}\n.pd-batch[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #1E40AF;\n}\n.pd-time[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.progress-bar-wrap[_ngcontent-%COMP%] {\n  height: 8px;\n  background: var(--bg-hover);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #7C3AED;\n  border-radius: 6px;\n  transition: width 0.5s ease;\n}\n.progress-bar.bar-full[_ngcontent-%COMP%] {\n  background: #10B981;\n}\n.progress-bar.bar-warn[_ngcontent-%COMP%] {\n  background: #F59E0B;\n}\n.hub-test-result[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-size: 13px;\n}\n.hub-test-result[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.hub-test-result.hub-ok[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  border: 1px solid #6EE7B7;\n  color: #065F46;\n}\n.hub-test-result.hub-ok[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #10B981;\n}\n.hub-test-result.hub-fail[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  border: 1px solid #FCA5A5;\n  color: #7F1D1D;\n}\n.hub-test-result.hub-fail[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #EF4444;\n}\n.hub-test-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.hub-test-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.hub-test-url[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n  opacity: 0.8;\n}\n.hub-test-latency[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #059669;\n}\n.hub-test-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  word-break: break-word;\n}\n.dark[_nghost-%COMP%]   .module-card.active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .module-card.active[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.15);\n}\n.dark[_nghost-%COMP%]   .tab-btn.active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .tab-btn.active[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.2);\n}\n.dark[_nghost-%COMP%]   .kv-row[_ngcontent-%COMP%]:nth-child(even), .dark   [_nghost-%COMP%]   .kv-row[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(255, 255, 255, 0.03);\n}\n.dark[_nghost-%COMP%]   .dl-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .dl-row[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.06);\n}\n.mod-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  vertical-align: middle;\n  opacity: 0.85;\n}\n.mod-chip.mod-VENTES[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #4338CA;\n}\n.mod-chip.mod-ACHATS[_ngcontent-%COMP%] {\n  background: #FFF7ED;\n  color: #C2410C;\n}\n.mod-chip.mod-COMPTABILITE[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #15803D;\n}\n.mod-chip.mod-STOCK[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #1D4ED8;\n}\n.mod-chip.mod-CAISSES[_ngcontent-%COMP%] {\n  background: #FDF4FF;\n  color: #7E22CE;\n}\n.mod-chip.mod-REFERENTIELS[_ngcontent-%COMP%] {\n  background: #F0F9FF;\n  color: #0369A1;\n}\n/*# sourceMappingURL=sync-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SyncDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-sync-dashboard", standalone: true, imports: [CommonModule, JsonPipe], template: `<div class="sync-dash">

  <!-- \u2500\u2500 HEADER \u2500\u2500 -->
  <div class="dash-header">
    <div>
      <h1 class="dash-title">
        <span class="material-icons">hub</span>
        Synchronisation Hub
      </h1>
      <p class="dash-sub">Suivi de l'envoi des op\xE9rations de ce spoke vers le Hub central</p>
    </div>
    <div class="header-actions">
      <button class="btn-action btn-hub-test" (click)="testHub()" [disabled]="testingHub">
        <span class="material-icons" [class.spinning]="testingHub">wifi_tethering</span>
        {{ testingHub ? 'Test...' : 'Tester Hub' }}
      </button>
      <button class="btn-action btn-snapshot" (click)="forceSnapshot()" [disabled]="snapshotting"
              title="Envoie l'\xE9tat complet du syst\xE8me au Hub, sans limite d'historique (factures, avoirs, bons de commande...) \u2014 \xE0 utiliser pour rattraper des documents rest\xE9s bloqu\xE9s">
        <span class="material-icons" [class.spinning]="snapshotting">cloud_upload</span>
        {{ snapshotting ? 'Snapshot...' : 'Envoyer snapshot' }}
      </button>
      <button class="btn-action btn-dispatch" (click)="forceDispatch()" [disabled]="dispatching">
        <span class="material-icons" [class.spinning]="dispatching">send</span>
        {{ dispatching ? 'Envoi...' : 'Forcer envoi' }}
      </button>
      <button class="btn-action btn-refresh" (click)="loadAll()" [disabled]="loading">
        <span class="material-icons" [class.spinning]="loading">refresh</span>
        Rafra\xEEchir
      </button>
    </div>
  </div>

  <!-- \u2500\u2500 KPI GLOBAUX \u2500\u2500 -->
  <div class="kpi-row">
    <div class="kpi kpi-pending">
      <div class="kpi-icon"><span class="material-icons">schedule</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ summary?.pending ?? '\u2014' }}</span>
        <span class="kpi-lbl">En attente d'envoi</span>
      </div>
    </div>
    <div class="kpi kpi-sent">
      <div class="kpi-icon"><span class="material-icons">check_circle</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ summary?.sent ?? '\u2014' }}</span>
        <span class="kpi-lbl">Envoy\xE9s au Hub</span>
      </div>
    </div>
    <div class="kpi kpi-failed" [class.kpi-failed-alert]="(summary?.failed ?? 0) > 0">
      <div class="kpi-icon"><span class="material-icons">error</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ summary?.failed ?? '\u2014' }}</span>
        <span class="kpi-lbl">\xC9checs d'envoi</span>
      </div>
      @if ((summary?.failed ?? 0) > 0) {
        <div class="kpi-failed-actions">
          <button class="btn-retry-all" (click)="retryAll()" [disabled]="retrying">
            <span class="material-icons">replay</span>
            {{ retrying ? '...' : 'R\xE9essayer tout' }}
          </button>
          <button class="btn-clear-failed" (click)="clearFailed()" [disabled]="clearingFailed"
                  title="Supprime d\xE9finitivement ces \xE9v\xE9nements \u2014 ils ne remonteront plus jamais au Hub">
            <span class="material-icons">delete_sweep</span>
            {{ clearingFailed ? '...' : 'Vider les \xE9checs' }}
          </button>
        </div>
      }
    </div>
    <div class="kpi kpi-total">
      <div class="kpi-icon"><span class="material-icons">swap_horiz</span></div>
      <div class="kpi-body">
        <span class="kpi-val">{{ summary?.total ?? '\u2014' }}</span>
        <span class="kpi-lbl">Total op\xE9rations</span>
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 BARRE DE PROGRESSION EN TEMPS R\xC9EL \u2500\u2500 -->
  @if (progress) {
    <div class="progress-band">
      <div class="progress-meta">
        <div class="progress-label">
          <span class="material-icons">sync</span>
          <strong>Progression globale</strong>
          <span class="progress-pct">{{ progress.progressPct }}%</span>
        </div>
        <div class="progress-detail">
          <span class="pd-chip pd-sent">
            <span class="material-icons">check_circle</span>
            {{ progress.sent }} envoy\xE9s
          </span>
          <span class="pd-chip pd-pending">
            <span class="material-icons">schedule</span>
            {{ progress.pending }} en attente
          </span>
          @if (progress.failed > 0) {
            <span class="pd-chip pd-failed">
              <span class="material-icons">error</span>
              {{ progress.failed }} \xE9chou\xE9s
            </span>
          }
          @if (progress.lastBatchSize > 0) {
            <span class="pd-chip pd-batch">
              <span class="material-icons">bolt</span>
              Dernier batch : {{ progress.lastBatchSent }}/{{ progress.lastBatchSize }}
            </span>
          }
          @if (progress.lastDispatchAt) {
            <span class="pd-chip pd-time">
              <span class="material-icons">access_time</span>
              Dernier envoi : {{ fmtDate(progress.lastDispatchAt) }}
            </span>
          }
        </div>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar"
             [style.width.%]="progress.progressPct"
             [class.bar-full]="progress.progressPct === 100"
             [class.bar-warn]="progress.failed > 0">
        </div>
      </div>
    </div>
  }

  <!-- \u2500\u2500 R\xC9SULTAT TEST HUB \u2500\u2500 -->
  @if (hubTest) {
    <div class="hub-test-result" [class.hub-ok]="hubTest.reachable" [class.hub-fail]="!hubTest.reachable">
      <span class="material-icons">{{ hubTest.reachable ? 'check_circle' : 'cancel' }}</span>
      <div class="hub-test-body">
        <strong>{{ hubTest.reachable ? 'Broker RabbitMQ accessible' : 'Broker RabbitMQ injoignable' }}</strong>
        <span class="hub-test-url">{{ hubTest.hubUrl }}</span>
        <span class="hub-test-url" style="opacity:0.6">Exchange : {{ hubTest.exchange }} \xB7 Queue : {{ hubTest.queue }}</span>
        @if (hubTest.reachable && hubTest.latencyMs !== null) {
          <span class="hub-test-latency">{{ hubTest.latencyMs }} ms</span>
        }
        @if (!hubTest.reachable) {
          <span class="hub-test-error">{{ hubTest.message }}</span>
        }
      </div>
      <button class="btn-icon" (click)="hubTest = null" title="Fermer"><span class="material-icons">close</span></button>
    </div>
  }

  <!-- \u2500\u2500 MINI STATS PAR MODULE \u2500\u2500 -->
  @if (summary) {
    <div class="module-stats-row">
      @for (tab of tabs; track tab.id) {
        <div class="module-card" [class.active]="activeTab === tab.id" (click)="selectTab(tab.id)">
          <div class="mc-header">
            <span class="material-icons mc-icon">{{ tab.icon }}</span>
            <span class="mc-label">{{ tab.label }}</span>
          </div>
          <div class="mc-badges">
            @if (moduleStats(tab.id).pending > 0) {
              <span class="mc-badge b-pending">{{ moduleStats(tab.id).pending }} en attente</span>
            }
            @if (moduleStats(tab.id).failed > 0) {
              <span class="mc-badge b-failed">{{ moduleStats(tab.id).failed }} \xE9chou\xE9(s)</span>
            }
            @if (moduleStats(tab.id).pending === 0 && moduleStats(tab.id).failed === 0) {
              <span class="mc-badge b-ok">
                <span class="material-icons" style="font-size:12px">check</span>
                OK \u2014 {{ moduleStats(tab.id).sent }} envoy\xE9(s)
              </span>
            }
          </div>
        </div>
      }
    </div>
  }

  <!-- \u2500\u2500 TABLE \xC9V\xC9NEMENTS \u2500\u2500 -->
  <div class="events-section">

    <!-- Onglets modules -->
    <div class="events-toolbar">
      <div class="tabs">
        @for (tab of tabs; track tab.id) {
          <button class="tab-btn" [class.active]="activeTab === tab.id" (click)="selectTab(tab.id)">
            <span class="material-icons">{{ tab.icon }}</span>
            {{ tab.label }}
            @if (moduleStats(tab.id).pending > 0) {
              <span class="tab-badge b-pending">{{ moduleStats(tab.id).pending }}</span>
            }
            @if (moduleStats(tab.id).failed > 0) {
              <span class="tab-badge b-failed">{{ moduleStats(tab.id).failed }}</span>
            }
          </button>
        }
      </div>

      <!-- Filtres statut -->
      <div class="status-filters">
        @for (f of statusFilters; track f.value) {
          <button class="filter-btn" [class.active]="activeStatus === f.value"
                  [class]="'filter-btn filter-btn-' + f.cls" (click)="selectStatus(f.value)">
            {{ f.label }}
          </button>
        }
      </div>
    </div>

    <!-- Table -->
    <div class="table-wrap">
      <table class="events-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Op\xE9ration</th>
            <th>R\xE9f. entit\xE9</th>
            <th>Statut</th>
            <th>Date op\xE9ration</th>
            <th>Derni\xE8re tentative</th>
            <th>Tentatives</th>
            <th>Erreur</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @if (loading) {
            @for (i of [1,2,3,4,5]; track i) {
              <tr class="skel-row">
                <td colspan="9"><div class="skel-line"></div></td>
              </tr>
            }
          } @else if (events.length === 0) {
            <tr>
              <td colspan="9" class="empty-row">
                <span class="material-icons">inbox</span>
                Aucune op\xE9ration trouv\xE9e
              </td>
            </tr>
          } @else {
            @for (ev of events; track ev.id) {
              <tr class="event-row clickable-row"
                  [class.row-failed]="ev.status === 'FAILED'"
                  [class.row-selected]="detailEvent?.id === ev.id"
                  (click)="openDetail(ev)">
                <td class="cell-id">{{ ev.id }}</td>
                <td class="cell-label">
                  {{ ev.eventLabel }}
                  @if (activeTab === 'TOUS') {
                    <span class="mod-chip mod-{{ ev.eventModule }}">{{ ev.eventModule }}</span>
                  }
                </td>
                <td class="cell-ref">
                  <span class="ref-chip">{{ ev.entityId }}</span>
                </td>
                <td>
                  <span class="badge" [class]="statusClass(ev.status)">
                    {{ statusLabel(ev.status) }}
                  </span>
                </td>
                <td class="cell-date">{{ fmtDate(ev.createdAt) }}</td>
                <td class="cell-date">{{ fmtDate(ev.lastAttemptAt) }}</td>
                <td class="cell-retries">
                  @if (ev.retryCount > 0) {
                    <span class="retry-count" [class.high]="ev.retryCount >= 3">{{ ev.retryCount }}</span>
                  } @else {
                    <span class="text-muted">\u2014</span>
                  }
                </td>
                <td class="cell-error">
                  @if (ev.errorMessage) {
                    <span class="error-msg" [title]="ev.errorMessage">
                      {{ ev.errorMessage.length > 40 ? ev.errorMessage.slice(0, 40) + '\u2026' : ev.errorMessage }}
                    </span>
                  } @else {
                    <span class="text-muted">\u2014</span>
                  }
                </td>
                <td class="cell-action">
                  @if (ev.status === 'FAILED') {
                    <button class="btn-retry-one" (click)="retryOne(ev, $event)"
                            [disabled]="retryingId === ev.id">
                      <span class="material-icons">{{ retryingId === ev.id ? 'hourglass_empty' : 'replay' }}</span>
                    </button>
                  }
                </td>
              </tr>
            }
          }
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    @if (totalPages > 1) {
      <div class="pagination">
        <button class="page-btn" (click)="prevPage()" [disabled]="currentPage === 0">
          <span class="material-icons">chevron_left</span>
        </button>
        <span class="page-info">Page {{ currentPage + 1 }} / {{ totalPages }} ({{ totalEvents }} entr\xE9es)</span>
        <button class="page-btn" (click)="nextPage()" [disabled]="currentPage + 1 >= totalPages">
          <span class="material-icons">chevron_right</span>
        </button>
      </div>
    }
  </div>

</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     PANNEAU DE D\xC9TAIL (DRAWER LAT\xC9RAL)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (detailEvent) {
  <!-- Overlay -->
  <div class="detail-overlay" (click)="closeDetail()"></div>

  <!-- Drawer -->
  <aside class="detail-drawer">

    <!-- En-t\xEAte drawer -->
    <div class="detail-header">
      <div class="detail-title-row">
        <span class="badge" [class]="statusClass(detailEvent.status)">
          {{ statusLabel(detailEvent.status) }}
        </span>
        <span class="detail-module-chip">{{ detailEvent.eventModule }}</span>
      </div>
      <h2 class="detail-event-label">{{ detailEvent.eventLabel }}</h2>
      <button class="btn-close-detail" (click)="closeDetail()">
        <span class="material-icons">close</span>
      </button>
    </div>

    <div class="detail-body">

      <!-- M\xE9tadonn\xE9es -->
      <section class="detail-section">
        <h3 class="section-title">
          <span class="material-icons">info</span>
          Informations
        </h3>
        <dl class="detail-dl">
          <div class="dl-row">
            <dt>ID \xE9v\xE9nement</dt>
            <dd><span class="mono-chip">{{ detailEvent.id }}</span></dd>
          </div>
          <div class="dl-row">
            <dt>Spoke</dt>
            <dd><span class="mono-chip">{{ detailEvent.spokeId }}</span></dd>
          </div>
          <div class="dl-row">
            <dt>R\xE9f. entit\xE9</dt>
            <dd><span class="mono-chip">{{ detailEvent.entityId }}</span></dd>
          </div>
          <div class="dl-row">
            <dt>Type technique</dt>
            <dd><span class="mono-chip small">{{ detailEvent.eventType }}</span></dd>
          </div>
          <div class="dl-row">
            <dt>Date de cr\xE9ation</dt>
            <dd>{{ fmtDate(detailEvent.createdAt) }}</dd>
          </div>
          @if (detailEvent.lastAttemptAt) {
            <div class="dl-row">
              <dt>Derni\xE8re tentative</dt>
              <dd>{{ fmtDate(detailEvent.lastAttemptAt) }}</dd>
            </div>
          }
          @if (detailEvent.retryCount > 0) {
            <div class="dl-row">
              <dt>Tentatives</dt>
              <dd>
                <span class="retry-count" [class.high]="detailEvent.retryCount >= 3">
                  {{ detailEvent.retryCount }} / 5
                </span>
              </dd>
            </div>
          }
        </dl>
      </section>

      <!-- Message d'erreur -->
      @if (detailEvent.errorMessage) {
        <section class="detail-section">
          <h3 class="section-title error-title">
            <span class="material-icons">error</span>
            Erreur d'envoi
          </h3>
          <div class="error-block">{{ detailEvent.errorMessage }}</div>
        </section>
      }

      <!-- Action retry -->
      @if (detailEvent.status === 'FAILED') {
        <div class="detail-actions">
          <button class="btn-action btn-dispatch"
                  (click)="retryOne(detailEvent, $event); closeDetail()"
                  [disabled]="retryingId === detailEvent.id">
            <span class="material-icons">replay</span>
            R\xE9essayer cet envoi
          </button>
        </div>
      }

      <!-- Payload -->
      <section class="detail-section">
        <h3 class="section-title">
          <span class="material-icons">data_object</span>
          Donn\xE9es transmises au Hub
        </h3>

        @if (detailLoading) {
          <div class="payload-loading">
            <span class="material-icons spinning">refresh</span>
            Chargement...
          </div>
        } @else if (!detailPayload) {
          <p class="text-muted">Aucune donn\xE9e disponible.</p>
        } @else if (isObject(detailPayload) && !isArray(detailPayload)) {
          <!-- Vue structur\xE9e cl\xE9/valeur -->
          <div class="payload-kv">
            @for (key of payloadKeys(); track key) {
              <div class="kv-row">
                <span class="kv-key">{{ key }}</span>
                <span class="kv-val">
                  @if (isObject(payloadValue(key))) {
                    <span class="kv-nested">{{ payloadValue(key) | json }}</span>
                  } @else {
                    {{ payloadValue(key) ?? '\u2014' }}
                  }
                </span>
              </div>
            }
          </div>
          <!-- JSON brut d\xE9pliable -->
          <details class="raw-json-details">
            <summary>Voir JSON brut</summary>
            <pre class="payload-raw">{{ formatPayload() }}</pre>
          </details>
        } @else {
          <pre class="payload-raw">{{ formatPayload() }}</pre>
        }
      </section>

    </div>
  </aside>
}
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/sync/components/dashboard/sync-dashboard.component.scss */\n.sync-dash {\n  padding: 28px 32px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.dash-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 28px;\n}\n.dash-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.dash-title .material-icons {\n  color: #7C3AED;\n  font-size: 26px;\n}\n.dash-sub {\n  margin: 4px 0 0;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.header-actions {\n  display: flex;\n  gap: 10px;\n}\n.btn-action {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: 0.15s;\n}\n.btn-action .material-icons {\n  font-size: 17px;\n}\n.btn-action:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-snapshot {\n  background: #0891B2;\n  color: white;\n}\n.btn-snapshot:hover:not(:disabled) {\n  background: #0E7490;\n}\n.btn-dispatch {\n  background: #7C3AED;\n  color: white;\n}\n.btn-dispatch:hover:not(:disabled) {\n  background: #6D28D9;\n}\n.btn-refresh {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  color: var(--text-primary);\n}\n.btn-refresh:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.kpi {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  position: relative;\n}\n.kpi .kpi-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi .kpi-icon .material-icons {\n  font-size: 22px;\n}\n.kpi .kpi-val {\n  font-size: 28px;\n  font-weight: 700;\n  display: block;\n}\n.kpi .kpi-lbl {\n  font-size: 12px;\n  color: var(--text-muted);\n  display: block;\n}\n.kpi-pending .kpi-icon {\n  background: var(--warning-bg);\n}\n.kpi-pending .kpi-icon .material-icons {\n  color: var(--warning);\n}\n.kpi-sent .kpi-icon {\n  background: var(--success-bg);\n}\n.kpi-sent .kpi-icon .material-icons {\n  color: var(--success);\n}\n.kpi-failed .kpi-icon {\n  background: var(--danger-bg);\n}\n.kpi-failed .kpi-icon .material-icons {\n  color: var(--danger);\n}\n.kpi-total .kpi-icon {\n  background: #EDE9FE;\n}\n.kpi-total .kpi-icon .material-icons {\n  color: #7C3AED;\n}\n.kpi-failed-alert {\n  border-color: var(--danger);\n  background: var(--danger-bg);\n}\n.kpi-failed-alert .kpi-val {\n  color: var(--danger);\n}\n.kpi-failed-actions {\n  position: absolute;\n  right: 12px;\n  bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-retry-all {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 6px;\n  background: var(--danger);\n  color: white;\n  border: none;\n  cursor: pointer;\n  font-size: 12px;\n  transition: 0.15s;\n}\n.btn-retry-all .material-icons {\n  font-size: 14px;\n}\n.btn-retry-all:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-retry-all:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-clear-failed {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 6px;\n  background: transparent;\n  color: var(--danger);\n  border: 1px solid var(--danger);\n  cursor: pointer;\n  font-size: 12px;\n  transition: 0.15s;\n}\n.btn-clear-failed .material-icons {\n  font-size: 14px;\n}\n.btn-clear-failed:hover:not(:disabled) {\n  background: var(--danger);\n  color: white;\n}\n.btn-clear-failed:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.module-stats-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.module-card {\n  background: var(--bg-surface);\n  border: 2px solid var(--border);\n  border-radius: 10px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: 0.15s;\n}\n.module-card:hover {\n  border-color: #7C3AED;\n}\n.module-card.active {\n  border-color: #7C3AED;\n  background: #F5F3FF;\n}\n.module-card .mc-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.module-card .mc-header .mc-icon {\n  font-size: 20px;\n  color: #7C3AED;\n}\n.module-card .mc-header .mc-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.module-card .mc-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.mc-badge {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.mc-badge.b-pending {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.mc-badge.b-failed {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.mc-badge.b-ok {\n  background: var(--success-bg);\n  color: var(--success);\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.events-section {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.events-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-page);\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.tabs {\n  display: flex;\n  gap: 4px;\n}\n.tab-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  font-size: 13px;\n  color: var(--text-secondary);\n  transition: 0.15s;\n}\n.tab-btn .material-icons {\n  font-size: 16px;\n}\n.tab-btn:hover {\n  background: var(--bg-hover);\n}\n.tab-btn.active {\n  background: #EDE9FE;\n  color: #7C3AED;\n  border-color: #C4B5FD;\n  font-weight: 600;\n}\n.tab-badge {\n  font-size: 10px;\n  padding: 1px 6px;\n  border-radius: 10px;\n  font-weight: 700;\n}\n.tab-badge.b-pending {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.tab-badge.b-failed {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.status-filters {\n  display: flex;\n  gap: 6px;\n}\n.filter-btn {\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  border: 1px solid var(--border);\n  background: transparent;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: 0.15s;\n}\n.filter-btn:hover {\n  background: var(--bg-hover);\n}\n.filter-btn.active {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n}\n.filter-btn.filter-btn-pending.active {\n  background: var(--warning);\n  border-color: var(--warning);\n}\n.filter-btn.filter-btn-sent.active {\n  background: var(--success);\n  border-color: var(--success);\n}\n.filter-btn.filter-btn-failed.active {\n  background: var(--danger);\n  border-color: var(--danger);\n}\n.table-wrap {\n  overflow-x: auto;\n}\n.events-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.events-table th {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11.5px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--text-muted);\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.events-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light, var(--border));\n  color: var(--text-primary);\n}\n.events-table tbody tr {\n  transition: background 0.1s;\n}\n.events-table tbody tr:hover {\n  background: var(--bg-hover);\n}\n.events-table tbody tr.row-failed {\n  background: rgba(220, 38, 38, 0.04);\n}\n.events-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.cell-id {\n  color: var(--text-muted);\n  font-size: 12px;\n  width: 50px;\n}\n.cell-label {\n  font-weight: 500;\n}\n.cell-date {\n  color: var(--text-secondary);\n  font-size: 12px;\n  white-space: nowrap;\n}\n.cell-retries {\n  text-align: center;\n}\n.cell-action {\n  width: 48px;\n  text-align: center;\n}\n.cell-error {\n  max-width: 200px;\n}\n.cell-ref {\n  white-space: nowrap;\n}\n.ref-chip {\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  border-radius: 5px;\n  padding: 2px 8px;\n  font-size: 12px;\n  font-family: monospace;\n  color: var(--text-secondary);\n}\n.retry-count {\n  display: inline-block;\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-radius: 12px;\n  padding: 1px 7px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.retry-count.high {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.error-msg {\n  color: var(--danger);\n  font-size: 12px;\n  cursor: help;\n}\n.text-muted {\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11.5px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge-pending {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-sent {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-failed {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.btn-retry-one {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid transparent;\n  border-radius: 6px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: 0.15s;\n}\n.btn-retry-one .material-icons {\n  font-size: 16px;\n}\n.btn-retry-one:hover:not(:disabled) {\n  background: var(--danger);\n  color: white;\n}\n.btn-retry-one:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.skel-row .skel-line {\n  height: 20px;\n  background: var(--border);\n  border-radius: 4px;\n  animation: pulse 1.4s ease-in-out infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.empty-row {\n  text-align: center;\n  padding: 48px 0 !important;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.empty-row .material-icons {\n  display: block;\n  font-size: 40px;\n  margin-bottom: 10px;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border-top: 1px solid var(--border);\n}\n.page-btn {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: 0.15s;\n}\n.page-btn .material-icons {\n  font-size: 18px;\n}\n.page-btn:hover:not(:disabled) {\n  background: #EDE9FE;\n  color: #7C3AED;\n  border-color: #C4B5FD;\n}\n.page-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.page-info {\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.spinning {\n  animation: spin 0.9s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.clickable-row {\n  cursor: pointer;\n}\n.row-selected td {\n  background: rgba(124, 58, 237, 0.06) !important;\n}\n.detail-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 200;\n  animation: fadeIn 0.15s ease;\n}\n.detail-drawer {\n  position: fixed;\n  top: 50px;\n  right: 0;\n  bottom: 0;\n  width: 520px;\n  max-width: 90vw;\n  background: var(--bg-surface);\n  border-left: 1px solid var(--border);\n  z-index: 201;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.18);\n  animation: slideIn 0.2s ease;\n}\n@keyframes slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.detail-header {\n  padding: 18px 20px 14px;\n  border-bottom: 1px solid var(--border);\n  position: relative;\n}\n.detail-title-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.detail-module-chip {\n  font-size: 11px;\n  font-weight: 700;\n  background: #EDE9FE;\n  color: #7C3AED;\n  padding: 2px 9px;\n  border-radius: 12px;\n  letter-spacing: 0.5px;\n}\n.detail-event-label {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  padding-right: 32px;\n}\n.btn-close-detail {\n  position: absolute;\n  top: 14px;\n  right: 16px;\n  background: var(--bg-hover);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: 0.12s;\n}\n.btn-close-detail .material-icons {\n  font-size: 18px;\n}\n.btn-close-detail:hover {\n  background: var(--border);\n  color: var(--text-primary);\n}\n.detail-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 0 24px;\n}\n.detail-section {\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.detail-section:last-child {\n  border-bottom: none;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--text-muted);\n  margin: 0 0 14px;\n}\n.section-title .material-icons {\n  font-size: 16px;\n}\n.error-title {\n  color: var(--danger);\n}\n.detail-dl {\n  margin: 0;\n}\n.dl-row {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  align-items: baseline;\n  gap: 8px;\n  padding: 6px 0;\n  border-bottom: 1px solid var(--border-light, rgba(0, 0, 0, 0.05));\n}\n.dl-row:last-child {\n  border-bottom: none;\n}\n.dl-row dt {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.dl-row dd {\n  font-size: 13px;\n  color: var(--text-primary);\n  margin: 0;\n}\n.mono-chip {\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  padding: 2px 8px;\n  font-size: 12px;\n  font-family: monospace;\n  color: var(--text-secondary);\n}\n.mono-chip.small {\n  font-size: 11px;\n}\n.error-block {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-radius: 8px;\n  padding: 12px 14px;\n  font-size: 13px;\n  font-family: monospace;\n  white-space: pre-wrap;\n  word-break: break-all;\n  border: 1px solid rgba(220, 38, 38, 0.2);\n}\n.detail-actions {\n  padding: 0 20px 18px;\n}\n.payload-loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.payload-loading .material-icons {\n  font-size: 18px;\n}\n.payload-kv {\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n.kv-row {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  gap: 10px;\n  padding: 7px 12px;\n  border-bottom: 1px solid var(--border-light, rgba(0, 0, 0, 0.05));\n  font-size: 13px;\n}\n.kv-row:last-child {\n  border-bottom: none;\n}\n.kv-row:nth-child(even) {\n  background: rgba(0, 0, 0, 0.02);\n}\n.kv-key {\n  font-family: monospace;\n  font-size: 12px;\n  color: #7C3AED;\n  font-weight: 600;\n  word-break: break-all;\n}\n.kv-val {\n  color: var(--text-primary);\n  word-break: break-all;\n}\n.kv-nested {\n  font-family: monospace;\n  font-size: 11px;\n  color: var(--text-secondary);\n  white-space: pre-wrap;\n}\n.raw-json-details summary {\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--text-muted);\n  -webkit-user-select: none;\n  user-select: none;\n}\n.raw-json-details summary:hover {\n  color: #7C3AED;\n}\n.payload-raw {\n  background: #1e1e2e;\n  color: #cdd6f4;\n  border-radius: 8px;\n  padding: 14px 16px;\n  font-size: 12px;\n  font-family:\n    "Fira Code",\n    "Courier New",\n    monospace;\n  overflow-x: auto;\n  white-space: pre;\n  margin-top: 8px;\n  line-height: 1.6;\n  border: 1px solid var(--border);\n  max-height: 400px;\n  overflow-y: auto;\n}\n.btn-hub-test {\n  background: #059669;\n  color: white;\n}\n.btn-hub-test:hover:not(:disabled) {\n  background: #047857;\n}\n.progress-band {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 14px 18px;\n  margin-bottom: 20px;\n}\n.progress-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.progress-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.progress-label .material-icons {\n  font-size: 17px;\n  color: #7C3AED;\n}\n.progress-pct {\n  margin-left: auto;\n  font-size: 20px;\n  font-weight: 700;\n  color: #7C3AED;\n}\n.progress-detail {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pd-chip {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.pd-chip .material-icons {\n  font-size: 13px;\n}\n.pd-sent {\n  background: #ECFDF5;\n  color: #065F46;\n}\n.pd-pending {\n  background: #FFF7ED;\n  color: #92400E;\n}\n.pd-failed {\n  background: #FEF2F2;\n  color: #7F1D1D;\n}\n.pd-batch {\n  background: #EFF6FF;\n  color: #1E40AF;\n}\n.pd-time {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.progress-bar-wrap {\n  height: 8px;\n  background: var(--bg-hover);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.progress-bar {\n  height: 100%;\n  background: #7C3AED;\n  border-radius: 6px;\n  transition: width 0.5s ease;\n}\n.progress-bar.bar-full {\n  background: #10B981;\n}\n.progress-bar.bar-warn {\n  background: #F59E0B;\n}\n.hub-test-result {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-size: 13px;\n}\n.hub-test-result .material-icons {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.hub-test-result.hub-ok {\n  background: #ECFDF5;\n  border: 1px solid #6EE7B7;\n  color: #065F46;\n}\n.hub-test-result.hub-ok .material-icons {\n  color: #10B981;\n}\n.hub-test-result.hub-fail {\n  background: #FEF2F2;\n  border: 1px solid #FCA5A5;\n  color: #7F1D1D;\n}\n.hub-test-result.hub-fail .material-icons {\n  color: #EF4444;\n}\n.hub-test-body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.hub-test-body strong {\n  font-weight: 600;\n}\n.hub-test-url {\n  font-family: monospace;\n  font-size: 12px;\n  opacity: 0.8;\n}\n.hub-test-latency {\n  font-size: 12px;\n  font-weight: 600;\n  color: #059669;\n}\n.hub-test-error {\n  font-size: 12px;\n  word-break: break-word;\n}\n:host-context(.dark) .module-card.active {\n  background: rgba(124, 58, 237, 0.15);\n}\n:host-context(.dark) .tab-btn.active {\n  background: rgba(124, 58, 237, 0.2);\n}\n:host-context(.dark) .kv-row:nth-child(even) {\n  background: rgba(255, 255, 255, 0.03);\n}\n:host-context(.dark) .dl-row {\n  border-color: rgba(255, 255, 255, 0.06);\n}\n.mod-chip {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  vertical-align: middle;\n  opacity: 0.85;\n}\n.mod-chip.mod-VENTES {\n  background: #EEF2FF;\n  color: #4338CA;\n}\n.mod-chip.mod-ACHATS {\n  background: #FFF7ED;\n  color: #C2410C;\n}\n.mod-chip.mod-COMPTABILITE {\n  background: #F0FDF4;\n  color: #15803D;\n}\n.mod-chip.mod-STOCK {\n  background: #EFF6FF;\n  color: #1D4ED8;\n}\n.mod-chip.mod-CAISSES {\n  background: #FDF4FF;\n  color: #7E22CE;\n}\n.mod-chip.mod-REFERENTIELS {\n  background: #F0F9FF;\n  color: #0369A1;\n}\n/*# sourceMappingURL=sync-dashboard.component.css.map */\n'] }]
  }], () => [{ type: SyncService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SyncDashboardComponent, { className: "SyncDashboardComponent", filePath: "app/modules/sync/components/dashboard/sync-dashboard.component.ts", lineNumber: 16 });
})();
export {
  SyncDashboardComponent
};
//# sourceMappingURL=chunk-3FEABOBX.js.map

import {
  AuditService
} from "./chunk-G4ORCRQ7.js";
import {
  CommonModule,
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵnextContext,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NJUNWWEJ.js";

// src/app/shared/components/audit-trail/audit-trail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.c;
var _forTrack2 = ($index, $item) => $item.key;
function AuditTrailComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("zero", ctx_r0.entries.length === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.entries.length, " action", ctx_r0.entries.length > 1 ? "s" : "", " ");
  }
}
function AuditTrailComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "span", 12);
    \u0275\u0275text(2, "sync");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Chargement des actions\u2026 ");
    \u0275\u0275domElementEnd();
  }
}
function AuditTrailComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10)(1, "span", 13);
    \u0275\u0275text(2, "history_toggle_off");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Aucune action enregistr\xE9e pour ce document. ");
    \u0275\u0275domElementEnd();
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const entry_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", entry_r2.performedBy, ")");
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 24)(1, "span", 13);
    \u0275\u0275text(2, "table_rows");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " \xC9tat de l'\xE9criture avant modification ");
    \u0275\u0275domElementEnd();
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 25)(1, "span", 13);
    \u0275\u0275text(2, "compare_arrows");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Modifications apport\xE9es \xE0 l'\xE9criture ");
    \u0275\u0275domElementEnd();
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "th", 28);
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_For_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span", 35);
    \u0275\u0275text(3, "\u2192");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const line_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.isZero(line_r3.od) ? "\u2014" : line_r3.od);
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_For_17_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span", 35);
    \u0275\u0275text(3, "\u2192");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const line_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.isZero(line_r3.ok) ? "\u2014" : line_r3.ok);
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_For_17_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 36);
    \u0275\u0275text(1, "Ajout\xE9");
    \u0275\u0275domElementEnd();
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_For_17_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 37);
    \u0275\u0275text(1, "Supprim\xE9");
    \u0275\u0275domElementEnd();
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_For_17_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 38);
    \u0275\u0275text(1, "Modifi\xE9");
    \u0275\u0275domElementEnd();
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_For_17_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td", 33);
    \u0275\u0275conditionalCreate(1, AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_For_17_Conditional_11_Conditional_1_Template, 2, 0, "span", 36);
    \u0275\u0275conditionalCreate(2, AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_For_17_Conditional_11_Conditional_2_Template, 2, 0, "span", 37);
    \u0275\u0275conditionalCreate(3, AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_For_17_Conditional_11_Conditional_3_Template, 2, 0, "span", 38);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const line_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r3.st === "added" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r3.st === "removed" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r3.st === "changed" ? 3 : -1);
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 31);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 32);
    \u0275\u0275conditionalCreate(6, AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_For_17_Conditional_6_Template, 4, 1);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td", 32);
    \u0275\u0275conditionalCreate(9, AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_For_17_Conditional_9_Template, 4, 1);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(11, AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_For_17_Conditional_11_Template, 4, 3, "td", 33);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const line_r3 = ctx.$implicit;
    const entry_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(line_r3.st ? "aul-" + line_r3.st : "aul-normal");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r3.c);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r3.n || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(line_r3.st === "changed" && line_r3.od !== void 0 && line_r3.od !== line_r3.d ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isZero(line_r3.d) ? "\u2014" : line_r3.d, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(line_r3.st === "changed" && line_r3.ok !== void 0 && line_r3.ok !== line_r3.k ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isZero(line_r3.k) ? "\u2014" : line_r3.k, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r2.action === "LINES_MODIFIED" ? 11 : -1);
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 23);
    \u0275\u0275conditionalCreate(1, AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_Conditional_1_Template, 4, 0, "div", 24);
    \u0275\u0275conditionalCreate(2, AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_Conditional_2_Template, 4, 0, "div", 25);
    \u0275\u0275domElementStart(3, "table", 26)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Compte");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th");
    \u0275\u0275text(9, "Libell\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th", 27);
    \u0275\u0275text(11, "D\xE9bit");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "th", 27);
    \u0275\u0275text(13, "Cr\xE9dit");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(14, AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_Conditional_14_Template, 1, 0, "th", 28);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_For_17_Template, 12, 9, "tr", 29, _forTrack1);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const entry_r2 = \u0275\u0275nextContext().$implicit;
    const lines_r4 = \u0275\u0275readContextLet(19);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r2.action === "RESET_TO_DRAFT" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r2.action === "LINES_MODIFIED" ? 2 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(entry_r2.action === "LINES_MODIFIED" ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(lines_r4);
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_21_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 40)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const chip_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(chip_r5.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(chip_r5.val);
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 39);
    \u0275\u0275repeaterCreate(1, AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_21_Conditional_1_For_2_Template, 5, 2, "span", 40, _forTrack2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const chips_r6 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275repeater(chips_r6);
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275conditionalCreate(1, AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_21_Conditional_1_Template, 3, 0, "div", 39);
  }
  if (rf & 2) {
    const entry_r2 = \u0275\u0275nextContext().$implicit;
    const chips_r7 = \u0275\u0275storeLet(\u0275\u0275nextContext(3).parseChips(entry_r2.details));
    \u0275\u0275advance();
    \u0275\u0275conditional(chips_r7.length ? 1 : -1);
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 14)(1, "div", 15)(2, "div", 16)(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(5, "div", 17)(6, "div", 18)(7, "span", 19);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "span", 20)(10, "span", 13);
    \u0275\u0275text(11, "schedule");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "div", 21)(14, "span", 13);
    \u0275\u0275text(15, "person");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(18, AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_18_Template, 2, 1, "span", 22);
    \u0275\u0275domElementEnd();
    \u0275\u0275declareLet(19);
    \u0275\u0275conditionalCreate(20, AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_20_Template, 18, 3, "div", 23)(21, AuditTrailComponent_Conditional_10_Conditional_3_For_2_Conditional_21_Template, 2, 2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.actionClass(entry_r2.action));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.actionIcon(entry_r2.action));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r2.actionLabel);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.fmtDate(entry_r2.performedAt), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(entry_r2.performedByFullname || entry_r2.performedBy);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r2.performedByFullname && entry_r2.performedByFullname !== entry_r2.performedBy ? 18 : -1);
    \u0275\u0275advance();
    const lines_r8 = \u0275\u0275storeLet(ctx_r0.parseLines(entry_r2.details));
    \u0275\u0275advance();
    \u0275\u0275conditional(lines_r8 && lines_r8.length ? 20 : 21);
  }
}
function AuditTrailComponent_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ol", 11);
    \u0275\u0275repeaterCreate(1, AuditTrailComponent_Conditional_10_Conditional_3_For_2_Template, 22, 9, "li", 14, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.entries);
  }
}
function AuditTrailComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, AuditTrailComponent_Conditional_10_Conditional_1_Template, 4, 0, "div", 9)(2, AuditTrailComponent_Conditional_10_Conditional_2_Template, 4, 0, "div", 10)(3, AuditTrailComponent_Conditional_10_Conditional_3_Template, 3, 0, "ol", 11);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loading ? 1 : ctx_r0.entries.length === 0 ? 2 : 3);
  }
}
var AuditTrailComponent = class _AuditTrailComponent {
  constructor(auditService) {
    this.auditService = auditService;
    this.entries = [];
    this.loading = false;
    this.expanded = true;
  }
  ngOnChanges(changes) {
    if (this.entityType && this.entityId) {
      this.load();
    }
  }
  load() {
    if (!this.entityType || !this.entityId)
      return;
    this.loading = true;
    this.auditService.forEntity(this.entityType, this.entityId).subscribe({
      next: (entries) => {
        this.entries = entries;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  toggle() {
    this.expanded = !this.expanded;
  }
  actionIcon(action) {
    const map = {
      CREATED: "add_circle",
      CONFIRMED: "check_circle",
      CANCELLED: "cancel",
      PAID: "payments",
      PAYMENT_ADDED: "payments",
      PAYMENT_REVERSED: "money_off",
      VALIDATED: "verified",
      POSTED: "publish",
      REVERSED: "undo",
      AVOIR_CREATED: "receipt_long",
      CREDIT_APPLIED: "balance",
      RECONCILED: "link",
      UNRECONCILED: "link_off",
      CLOTURE: "lock",
      ENTREE: "add",
      SORTIE: "remove",
      RESET_TO_DRAFT: "lock_open",
      LINES_MODIFIED: "edit_note",
      RECEIVED: "inventory_2",
      SESSION_OPENED: "login",
      ADJUSTMENT_CREATED: "tune",
      STATUS_CHANGED: "swap_horiz",
      COMMENT_ADDED: "comment",
      UPDATED: "edit"
    };
    return map[action] ?? "history";
  }
  actionClass(action) {
    if (["CREATED"].includes(action))
      return "ac-create";
    if (["CONFIRMED", "VALIDATED", "POSTED", "RECEIVED"].includes(action))
      return "ac-confirm";
    if (["CANCELLED", "PAYMENT_REVERSED", "UNRECONCILED"].includes(action))
      return "ac-cancel";
    if (["PAID", "PAYMENT_ADDED"].includes(action))
      return "ac-paid";
    if (["REVERSED", "AVOIR_CREATED"].includes(action))
      return "ac-reverse";
    if (["CREDIT_APPLIED", "RECONCILED"].includes(action))
      return "ac-reconcile";
    if (["CLOTURE"].includes(action))
      return "ac-lock";
    if (["RESET_TO_DRAFT"].includes(action))
      return "ac-reset";
    if (["LINES_MODIFIED", "ADJUSTMENT_CREATED", "STATUS_CHANGED", "UPDATED"].includes(action))
      return "ac-modified";
    if (["SESSION_OPENED"].includes(action))
      return "ac-create";
    return "ac-default";
  }
  fmtDate(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  /** Format structuré {"type":"snapshot"|"diff","lines":[...]} → AuditLine[] */
  parseLines(raw) {
    if (!raw)
      return null;
    try {
      const p = JSON.parse(raw);
      if (p && (p.type === "snapshot" || p.type === "diff") && Array.isArray(p.lines)) {
        return p.lines;
      }
      return null;
    } catch (e) {
      return null;
    }
  }
  /** Ancien format plat {"code":"label | D: x"} → paires clé/valeur (rétrocompatibilité) */
  parseChips(raw) {
    if (!raw)
      return [];
    try {
      const p = JSON.parse(raw);
      if (!p || typeof p !== "object" || Array.isArray(p) || p.lines || p.__t)
        return [];
      return Object.entries(p).filter(([, v]) => v != null && v !== "").map(([key, val]) => ({ key, val: String(val) }));
    } catch (e) {
      return [];
    }
  }
  isZero(v) {
    return !v || v === "0";
  }
  static {
    this.\u0275fac = function AuditTrailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuditTrailComponent)(\u0275\u0275directiveInject(AuditService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditTrailComponent, selectors: [["app-audit-trail"]], inputs: { entityType: "entityType", entityId: "entityId" }, features: [\u0275\u0275NgOnChangesFeature], decls: 11, vars: 4, consts: [[1, "audit-trail"], ["type", "button", 1, "audit-header", 3, "click"], [1, "audit-title-group"], [1, "material-icons", "audit-title-icon"], [1, "audit-title-text"], [1, "audit-count", 3, "zero"], [1, "material-icons", "audit-chevron"], [1, "audit-body"], [1, "audit-count"], [1, "audit-state-row"], [1, "audit-state-row", "muted"], [1, "audit-timeline"], [1, "material-icons", "spin"], [1, "material-icons"], [1, "audit-item"], [1, "ai-dot-wrap"], [1, "ai-icon"], [1, "ai-card"], [1, "ai-card-header"], [1, "ai-label"], [1, "ai-date"], [1, "ai-operator"], [1, "ai-username"], [1, "aul-wrap"], [1, "aul-caption"], [1, "aul-caption", "mod"], [1, "aul-table"], [1, "num"], [1, "stat-th"], [3, "class"], [1, "aul-code"], [1, "aul-name"], [1, "aul-num"], [1, "aul-stat-cell"], [1, "aul-old"], [1, "aul-arr"], [1, "aul-badge", "aul-added"], [1, "aul-badge", "aul-removed"], [1, "aul-badge", "aul-changed"], [1, "ai-details"], [1, "det-chip"], [1, "det-key"], [1, "det-val"]], template: function AuditTrailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "section", 0)(1, "button", 1);
        \u0275\u0275domListener("click", function AuditTrailComponent_Template_button_click_1_listener() {
          return ctx.toggle();
        });
        \u0275\u0275domElementStart(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "manage_search");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "span", 4);
        \u0275\u0275text(6, "Actions r\xE9alis\xE9es");
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(7, AuditTrailComponent_Conditional_7_Template, 2, 4, "span", 5);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(8, "span", 6);
        \u0275\u0275text(9, " expand_less ");
        \u0275\u0275domElementEnd()();
        \u0275\u0275conditionalCreate(10, AuditTrailComponent_Conditional_10_Template, 4, 1, "div", 7);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(!ctx.loading ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("rotated", !ctx.expanded);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.expanded ? 10 : -1);
      }
    }, dependencies: [CommonModule], styles: ['@charset "UTF-8";\n\n\n.audit-trail[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md, 10px);\n  overflow: hidden;\n  background: var(--bg-surface);\n}\n.audit-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 14px 18px;\n  background: var(--bg-surface);\n  border: none;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border);\n  transition: background 0.15s;\n}\n.audit-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.audit-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.audit-title-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #7C3AED;\n}\n.audit-title-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.audit-count[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  color: white;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 9px;\n  border-radius: 20px;\n}\n.audit-count.zero[_ngcontent-%COMP%] {\n  background: var(--text-muted);\n}\n.audit-chevron[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.audit-chevron.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.audit-body[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n}\n.audit-state-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 0;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.audit-state-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--text-muted);\n}\n.audit-state-row.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.audit-timeline[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.audit-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--border-light, rgba(0, 0, 0, 0.06));\n}\n.audit-item[_ngcontent-%COMP%]:first-child {\n  padding-top: 4px;\n}\n.audit-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 4px;\n}\n.ai-dot-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n}\n.ai-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ai-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.ac-create[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ac-confirm[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.ac-cancel[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.ac-paid[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #16A34A;\n}\n.ac-reverse[_ngcontent-%COMP%] {\n  background: #FFF7ED;\n  color: #D97706;\n}\n.ac-reconcile[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #4F46E5;\n}\n.ac-lock[_ngcontent-%COMP%] {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.ac-reset[_ngcontent-%COMP%] {\n  background: #FFF3CD;\n  color: #856404;\n}\n.ac-modified[_ngcontent-%COMP%] {\n  background: #FFF0E6;\n  color: #C05621;\n}\n.ac-default[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.ai-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ai-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 4px;\n}\n.ai-label[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.ai-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  margin-left: auto;\n  font-size: 11.5px;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.ai-date[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ai-operator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12.5px;\n  color: var(--text-secondary);\n}\n.ai-operator[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.ai-operator[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.ai-username[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 11.5px;\n}\n.ai-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 8px;\n}\n.det-chip[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n  padding: 2px 9px;\n  border-radius: 12px;\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  font-size: 11.5px;\n}\n.det-key[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  text-transform: capitalize;\n}\n.det-val[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.aul-wrap[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.aul-caption[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--text-muted);\n  margin-bottom: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.aul-caption[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.aul-caption.mod[_ngcontent-%COMP%] {\n  color: #C05621;\n}\n.aul-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.aul-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.aul-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.aul-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.aul-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th.stat-th[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.aul-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-light, rgba(0, 0, 0, 0.06));\n}\n.aul-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  color: var(--text-primary);\n  vertical-align: middle;\n}\n.aul-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.aul-normal[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.aul-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.aul-added[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.07);\n}\n.aul-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.aul-added[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #065F46;\n}\n.aul-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.aul-added[_ngcontent-%COMP%]   .aul-code[_ngcontent-%COMP%] {\n  color: #065F46 !important;\n}\n.aul-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.aul-removed[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.07);\n}\n.aul-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.aul-removed[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #991B1B;\n}\n.aul-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.aul-removed[_ngcontent-%COMP%]   .aul-code[_ngcontent-%COMP%] {\n  color: #991B1B !important;\n}\n.aul-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.aul-removed[_ngcontent-%COMP%]   .aul-num[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  opacity: 0.8;\n}\n.aul-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.aul-changed[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.06);\n}\n.aul-code[_ngcontent-%COMP%] {\n  font-family:\n    "JetBrains Mono",\n    "Roboto Mono",\n    monospace;\n  font-size: 11.5px;\n  font-weight: 700;\n  color: var(--text-secondary) !important;\n  white-space: nowrap;\n}\n.aul-name[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.aul-num[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n  font-variant-numeric: tabular-nums;\n}\n.aul-old[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  text-decoration: line-through;\n  margin-right: 3px;\n  font-size: 11px;\n}\n.aul-arr[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin: 0 3px;\n  font-size: 11px;\n}\n.aul-stat-cell[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.aul-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n}\n.aul-badge.aul-added[_ngcontent-%COMP%] {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.aul-badge.aul-removed[_ngcontent-%COMP%] {\n  background: #FEE2E2;\n  color: #991B1B;\n}\n.aul-badge.aul-changed[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #92400E;\n}\n.dark[_nghost-%COMP%]   .ac-create[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ac-create[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n}\n.dark[_nghost-%COMP%]   .ac-confirm[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ac-confirm[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.12);\n}\n.dark[_nghost-%COMP%]   .ac-cancel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ac-cancel[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.12);\n}\n.dark[_nghost-%COMP%]   .ac-paid[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ac-paid[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n}\n.dark[_nghost-%COMP%]   .ac-reverse[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ac-reverse[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.12);\n}\n.dark[_nghost-%COMP%]   .ac-reconcile[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ac-reconcile[_ngcontent-%COMP%] {\n  background: rgba(79, 70, 229, 0.12);\n}\n.dark[_nghost-%COMP%]   .ac-lock[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ac-lock[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n}\n.dark[_nghost-%COMP%]   .ac-reset[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ac-reset[_ngcontent-%COMP%] {\n  background: rgba(133, 100, 4, 0.15);\n}\n.dark[_nghost-%COMP%]   .ac-modified[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ac-modified[_ngcontent-%COMP%] {\n  background: rgba(192, 86, 33, 0.15);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=audit-trail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditTrailComponent, [{
    type: Component,
    args: [{ selector: "app-audit-trail", standalone: true, imports: [CommonModule], template: `<section class="audit-trail">

  <!-- \u2550\u2550 En-t\xEAte de section \u2550\u2550 -->
  <button class="audit-header" (click)="toggle()" type="button">
    <div class="audit-title-group">
      <span class="material-icons audit-title-icon">manage_search</span>
      <span class="audit-title-text">Actions r\xE9alis\xE9es</span>
      @if (!loading) {
        <span class="audit-count" [class.zero]="entries.length === 0">
          {{ entries.length }} action{{ entries.length > 1 ? 's' : '' }}
        </span>
      }
    </div>
    <span class="material-icons audit-chevron" [class.rotated]="!expanded">
      expand_less
    </span>
  </button>

  <!-- \u2550\u2550 Corps \u2550\u2550 -->
  @if (expanded) {
    <div class="audit-body">

      @if (loading) {
        <div class="audit-state-row">
          <span class="material-icons spin">sync</span>
          Chargement des actions\u2026
        </div>
      } @else if (entries.length === 0) {
        <div class="audit-state-row muted">
          <span class="material-icons">history_toggle_off</span>
          Aucune action enregistr\xE9e pour ce document.
        </div>
      } @else {
        <ol class="audit-timeline">
          @for (entry of entries; track entry.id) {
            <li class="audit-item">

              <div class="ai-dot-wrap">
                <div class="ai-icon" [class]="actionClass(entry.action)">
                  <span class="material-icons">{{ actionIcon(entry.action) }}</span>
                </div>
              </div>

              <div class="ai-card">
                <div class="ai-card-header">
                  <span class="ai-label">{{ entry.actionLabel }}</span>
                  <span class="ai-date">
                    <span class="material-icons">schedule</span>
                    {{ fmtDate(entry.performedAt) }}
                  </span>
                </div>
                <div class="ai-operator">
                  <span class="material-icons">person</span>
                  <strong>{{ entry.performedByFullname || entry.performedBy }}</strong>
                  @if (entry.performedByFullname && entry.performedByFullname !== entry.performedBy) {
                    <span class="ai-username">({{ entry.performedBy }})</span>
                  }
                </div>

                <!-- \u2500\u2500 Tableau structur\xE9 (nouveau format) \u2500\u2500 -->
                @let lines = parseLines(entry.details);
                @if (lines && lines.length) {
                  <div class="aul-wrap">
                    @if (entry.action === 'RESET_TO_DRAFT') {
                      <div class="aul-caption">
                        <span class="material-icons">table_rows</span>
                        \xC9tat de l'\xE9criture avant modification
                      </div>
                    }
                    @if (entry.action === 'LINES_MODIFIED') {
                      <div class="aul-caption mod">
                        <span class="material-icons">compare_arrows</span>
                        Modifications apport\xE9es \xE0 l'\xE9criture
                      </div>
                    }
                    <table class="aul-table">
                      <thead>
                        <tr>
                          <th>Compte</th>
                          <th>Libell\xE9</th>
                          <th class="num">D\xE9bit</th>
                          <th class="num">Cr\xE9dit</th>
                          @if (entry.action === 'LINES_MODIFIED') {
                            <th class="stat-th"></th>
                          }
                        </tr>
                      </thead>
                      <tbody>
                        @for (line of lines; track line.c) {
                          <tr [class]="line.st ? 'aul-' + line.st : 'aul-normal'">
                            <td class="aul-code">{{ line.c }}</td>
                            <td class="aul-name">{{ line.n || '\u2014' }}</td>
                            <td class="aul-num">
                              @if (line.st === 'changed' && line.od !== undefined && line.od !== line.d) {
                                <span class="aul-old">{{ isZero(line.od) ? '\u2014' : line.od }}</span>
                                <span class="aul-arr">\u2192</span>
                              }
                              {{ isZero(line.d) ? '\u2014' : line.d }}
                            </td>
                            <td class="aul-num">
                              @if (line.st === 'changed' && line.ok !== undefined && line.ok !== line.k) {
                                <span class="aul-old">{{ isZero(line.ok) ? '\u2014' : line.ok }}</span>
                                <span class="aul-arr">\u2192</span>
                              }
                              {{ isZero(line.k) ? '\u2014' : line.k }}
                            </td>
                            @if (entry.action === 'LINES_MODIFIED') {
                              <td class="aul-stat-cell">
                                @if (line.st === 'added') {
                                  <span class="aul-badge aul-added">Ajout\xE9</span>
                                }
                                @if (line.st === 'removed') {
                                  <span class="aul-badge aul-removed">Supprim\xE9</span>
                                }
                                @if (line.st === 'changed') {
                                  <span class="aul-badge aul-changed">Modifi\xE9</span>
                                }
                              </td>
                            }
                          </tr>
                        }
                      </tbody>
                    </table>
                  </div>
                }

                <!-- \u2500\u2500 Chips (ancien format \u2013 r\xE9trocompatibilit\xE9) \u2500\u2500 -->
                @else {
                  @let chips = parseChips(entry.details);
                  @if (chips.length) {
                    <div class="ai-details">
                      @for (chip of chips; track chip.key) {
                        <span class="det-chip">
                          <span class="det-key">{{ chip.key }}</span>
                          <span class="det-val">{{ chip.val }}</span>
                        </span>
                      }
                    </div>
                  }
                }

              </div>

            </li>
          }
        </ol>
      }

    </div>
  }

</section>
`, styles: ['@charset "UTF-8";\n\n/* src/app/shared/components/audit-trail/audit-trail.component.scss */\n.audit-trail {\n  margin-top: 20px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md, 10px);\n  overflow: hidden;\n  background: var(--bg-surface);\n}\n.audit-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 14px 18px;\n  background: var(--bg-surface);\n  border: none;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border);\n  transition: background 0.15s;\n}\n.audit-header:hover {\n  background: var(--bg-hover);\n}\n.audit-title-group {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.audit-title-icon {\n  font-size: 20px;\n  color: #7C3AED;\n}\n.audit-title-text {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.audit-count {\n  background: #7C3AED;\n  color: white;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 9px;\n  border-radius: 20px;\n}\n.audit-count.zero {\n  background: var(--text-muted);\n}\n.audit-chevron {\n  font-size: 20px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.audit-chevron.rotated {\n  transform: rotate(180deg);\n}\n.audit-body {\n  padding: 16px 20px;\n}\n.audit-state-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 0;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.audit-state-row .material-icons {\n  font-size: 20px;\n  color: var(--text-muted);\n}\n.audit-state-row.muted {\n  color: var(--text-muted);\n}\n.audit-timeline {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.audit-item {\n  display: flex;\n  gap: 16px;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--border-light, rgba(0, 0, 0, 0.06));\n}\n.audit-item:first-child {\n  padding-top: 4px;\n}\n.audit-item:last-child {\n  border-bottom: none;\n  padding-bottom: 4px;\n}\n.ai-dot-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n}\n.ai-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ai-icon .material-icons {\n  font-size: 18px;\n}\n.ac-create {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ac-confirm {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.ac-cancel {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.ac-paid {\n  background: #F0FDF4;\n  color: #16A34A;\n}\n.ac-reverse {\n  background: #FFF7ED;\n  color: #D97706;\n}\n.ac-reconcile {\n  background: #EEF2FF;\n  color: #4F46E5;\n}\n.ac-lock {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.ac-reset {\n  background: #FFF3CD;\n  color: #856404;\n}\n.ac-modified {\n  background: #FFF0E6;\n  color: #C05621;\n}\n.ac-default {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.ai-card {\n  flex: 1;\n  min-width: 0;\n}\n.ai-card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 4px;\n}\n.ai-label {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.ai-date {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  margin-left: auto;\n  font-size: 11.5px;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.ai-date .material-icons {\n  font-size: 13px;\n}\n.ai-operator {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12.5px;\n  color: var(--text-secondary);\n}\n.ai-operator .material-icons {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.ai-operator strong {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.ai-username {\n  color: var(--text-muted);\n  font-size: 11.5px;\n}\n.ai-details {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 8px;\n}\n.det-chip {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n  padding: 2px 9px;\n  border-radius: 12px;\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  font-size: 11.5px;\n}\n.det-key {\n  color: var(--text-muted);\n  text-transform: capitalize;\n}\n.det-val {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.aul-wrap {\n  margin-top: 10px;\n}\n.aul-caption {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--text-muted);\n  margin-bottom: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.aul-caption .material-icons {\n  font-size: 14px;\n}\n.aul-caption.mod {\n  color: #C05621;\n}\n.aul-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.aul-table thead tr {\n  background: var(--bg-hover);\n}\n.aul-table thead tr th {\n  padding: 5px 10px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.aul-table thead tr th.num {\n  text-align: right;\n}\n.aul-table thead tr th.stat-th {\n  width: 80px;\n}\n.aul-table tbody tr {\n  border-top: 1px solid var(--border-light, rgba(0, 0, 0, 0.06));\n}\n.aul-table tbody tr td {\n  padding: 6px 10px;\n  color: var(--text-primary);\n  vertical-align: middle;\n}\n.aul-table tbody tr.aul-normal {\n  background: transparent;\n}\n.aul-table tbody tr.aul-added {\n  background: rgba(16, 185, 129, 0.07);\n}\n.aul-table tbody tr.aul-added td {\n  color: #065F46;\n}\n.aul-table tbody tr.aul-added .aul-code {\n  color: #065F46 !important;\n}\n.aul-table tbody tr.aul-removed {\n  background: rgba(239, 68, 68, 0.07);\n}\n.aul-table tbody tr.aul-removed td {\n  color: #991B1B;\n}\n.aul-table tbody tr.aul-removed .aul-code {\n  color: #991B1B !important;\n}\n.aul-table tbody tr.aul-removed .aul-num {\n  text-decoration: line-through;\n  opacity: 0.8;\n}\n.aul-table tbody tr.aul-changed {\n  background: rgba(245, 158, 11, 0.06);\n}\n.aul-code {\n  font-family:\n    "JetBrains Mono",\n    "Roboto Mono",\n    monospace;\n  font-size: 11.5px;\n  font-weight: 700;\n  color: var(--text-secondary) !important;\n  white-space: nowrap;\n}\n.aul-name {\n  color: var(--text-primary);\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.aul-num {\n  text-align: right;\n  white-space: nowrap;\n  font-variant-numeric: tabular-nums;\n}\n.aul-old {\n  color: var(--text-muted);\n  text-decoration: line-through;\n  margin-right: 3px;\n  font-size: 11px;\n}\n.aul-arr {\n  color: var(--text-muted);\n  margin: 0 3px;\n  font-size: 11px;\n}\n.aul-stat-cell {\n  text-align: right;\n  white-space: nowrap;\n}\n.aul-badge {\n  display: inline-block;\n  padding: 1px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n}\n.aul-badge.aul-added {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.aul-badge.aul-removed {\n  background: #FEE2E2;\n  color: #991B1B;\n}\n.aul-badge.aul-changed {\n  background: #FEF3C7;\n  color: #92400E;\n}\n:host-context(.dark) .ac-create {\n  background: rgba(16, 185, 129, 0.12);\n}\n:host-context(.dark) .ac-confirm {\n  background: rgba(37, 99, 235, 0.12);\n}\n:host-context(.dark) .ac-cancel {\n  background: rgba(220, 38, 38, 0.12);\n}\n:host-context(.dark) .ac-paid {\n  background: rgba(22, 163, 74, 0.12);\n}\n:host-context(.dark) .ac-reverse {\n  background: rgba(217, 119, 6, 0.12);\n}\n:host-context(.dark) .ac-reconcile {\n  background: rgba(79, 70, 229, 0.12);\n}\n:host-context(.dark) .ac-lock {\n  background: rgba(124, 58, 237, 0.12);\n}\n:host-context(.dark) .ac-reset {\n  background: rgba(133, 100, 4, 0.15);\n}\n:host-context(.dark) .ac-modified {\n  background: rgba(192, 86, 33, 0.15);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin {\n  animation: spin 0.9s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=audit-trail.component.css.map */\n'] }]
  }], () => [{ type: AuditService }], { entityType: [{
    type: Input
  }], entityId: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditTrailComponent, { className: "AuditTrailComponent", filePath: "app/shared/components/audit-trail/audit-trail.component.ts", lineNumber: 22 });
})();

export {
  AuditTrailComponent
};
//# sourceMappingURL=chunk-Z3T7EMK6.js.map

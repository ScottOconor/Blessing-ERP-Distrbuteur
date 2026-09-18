import {
  numberToFrenchWords
} from "./chunk-RZUFXCPA.js";
import {
  HrService
} from "./chunk-TCOWJUCH.js";
import {
  CompanyService
} from "./chunk-K42XCUBR.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-4W3TIS2I.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/hr/components/payslip-detail/payslip-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.leaveTypeId;
function PayslipDetailComponent_div_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function PayslipDetailComponent_div_0_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.recompute());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Recalculer");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.busy);
  }
}
function PayslipDetailComponent_div_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function PayslipDetailComponent_div_0_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.act("verify"));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "fact_check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Marquer calcul\xE9");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.busy);
  }
}
function PayslipDetailComponent_div_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function PayslipDetailComponent_div_0_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.act("validate"));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Valider & comptabiliser");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.busy);
  }
}
function PayslipDetailComponent_div_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function PayslipDetailComponent_div_0_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.act("draft"));
    });
    \u0275\u0275text(1, "Brouillon");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.busy);
  }
}
function PayslipDetailComponent_div_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function PayslipDetailComponent_div_0_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.act("cancel"));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.busy);
  }
}
function PayslipDetailComponent_div_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.msg);
  }
}
function PayslipDetailComponent_div_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.err);
  }
}
function PayslipDetailComponent_div_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r8 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", d_r8.jobName, "", d_r8.jobName && d_r8.departmentName ? " \u2014 " : "", "", d_r8.departmentName);
  }
}
function PayslipDetailComponent_div_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r8 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", d_r8.professionalCategoryName, "", d_r8.professionalCategoryName && d_r8.echelonName ? " \u2014 \xC9chelon " : "", "", d_r8.echelonName);
  }
}
function PayslipDetailComponent_div_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r8 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Embauch\xE9(e) le ", ctx_r1.fmtDate(d_r8.hireDate));
  }
}
function PayslipDetailComponent_div_0_For_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 20);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 20);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("cat-gross", l_r9.categoryCode === "GROSS")("cat-net", l_r9.categoryCode === "NET");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r9.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r9.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((l_r9.rate ?? 0) !== 0 ? ctx_r1.fmtRate(l_r9.rate) + " %" : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((l_r9.quantity ?? 1) !== 1 ? ctx_r1.fmt(l_r9.quantity) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((l_r9.quantity ?? 1) !== 1 ? ctx_r1.fmt(l_r9.amount) : "\u2014");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", (l_r9.total || 0) < 0 ? "#b91c1c" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fmt(l_r9.total));
  }
}
function PayslipDetailComponent_div_0_Conditional_76_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(b_r10.carryOver));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(b_r10.accrued));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(b_r10.taken));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(b_r10.remaining));
  }
}
function PayslipDetailComponent_div_0_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 31);
    \u0275\u0275text(2, "Compteurs de cong\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "table", 32)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 20);
    \u0275\u0275text(9, "Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 20);
    \u0275\u0275text(11, "Acquis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 20);
    \u0275\u0275text(13, "Pris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 20);
    \u0275\u0275text(15, "Reste");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, PayslipDetailComponent_div_0_Conditional_76_For_18_Template, 11, 5, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r8 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(17);
    \u0275\u0275repeater(d_r8.leaveBalances);
  }
}
function PayslipDetailComponent_div_0_Conditional_77_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const wd_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(wd_r11.name || wd_r11.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.fmt(wd_r11.numberOfDays), " j");
  }
}
function PayslipDetailComponent_div_0_Conditional_77_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 31);
    \u0275\u0275text(2, "Jours saisis");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PayslipDetailComponent_div_0_Conditional_77_Conditional_1_For_4_Template, 5, 2, "div", 35, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r8 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275repeater(d_r8.workedDays);
  }
}
function PayslipDetailComponent_div_0_Conditional_77_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const inp_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inp_r12.name || inp_r12.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.fmt(inp_r12.amount), " F");
  }
}
function PayslipDetailComponent_div_0_Conditional_77_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 31);
    \u0275\u0275text(2, "\xC9l\xE9ments variables saisis");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PayslipDetailComponent_div_0_Conditional_77_Conditional_2_For_4_Template, 5, 2, "div", 35, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r8 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275repeater(d_r8.inputs);
  }
}
function PayslipDetailComponent_div_0_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275conditionalCreate(1, PayslipDetailComponent_div_0_Conditional_77_Conditional_1_Template, 5, 0, "div", 34);
    \u0275\u0275conditionalCreate(2, PayslipDetailComponent_div_0_Conditional_77_Conditional_2_Template, 5, 0, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r8 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r8.workedDays.length > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r8.inputs.length > 0 ? 2 : -1);
  }
}
function PayslipDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "button", 3);
    \u0275\u0275listener("click", function PayslipDetailComponent_div_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Retour");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "button", 3);
    \u0275\u0275listener("click", function PayslipDetailComponent_div_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275elementStart(9, "span", 4);
    \u0275\u0275text(10, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Imprimer");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, PayslipDetailComponent_div_0_Conditional_12_Template, 4, 1, "button", 6);
    \u0275\u0275conditionalCreate(13, PayslipDetailComponent_div_0_Conditional_13_Template, 4, 1, "button", 7);
    \u0275\u0275conditionalCreate(14, PayslipDetailComponent_div_0_Conditional_14_Template, 4, 1, "button", 8);
    \u0275\u0275conditionalCreate(15, PayslipDetailComponent_div_0_Conditional_15_Template, 2, 1, "button", 6);
    \u0275\u0275conditionalCreate(16, PayslipDetailComponent_div_0_Conditional_16_Template, 4, 1, "button", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, PayslipDetailComponent_div_0_Conditional_17_Template, 2, 1, "div", 10);
    \u0275\u0275conditionalCreate(18, PayslipDetailComponent_div_0_Conditional_18_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "div")(22, "div", 14);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 15);
    \u0275\u0275text(25);
    \u0275\u0275elementStart(26, "span", 16);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, PayslipDetailComponent_div_0_Conditional_28_Template, 2, 3, "div", 17);
    \u0275\u0275conditionalCreate(29, PayslipDetailComponent_div_0_Conditional_29_Template, 2, 3, "div", 17);
    \u0275\u0275conditionalCreate(30, PayslipDetailComponent_div_0_Conditional_30_Template, 2, 1, "div", 17);
    \u0275\u0275elementStart(31, "div", 17);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "span", 18);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "table", 19)(36, "thead")(37, "tr")(38, "th");
    \u0275\u0275text(39, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th");
    \u0275\u0275text(41, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 20);
    \u0275\u0275text(45, "Taux");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 20);
    \u0275\u0275text(47, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 20);
    \u0275\u0275text(49, "Montant unitaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th", 20);
    \u0275\u0275text(51, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "tbody");
    \u0275\u0275repeaterCreate(53, PayslipDetailComponent_div_0_For_54_Template, 15, 13, "tr", 21, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 22)(56, "div")(57, "span");
    \u0275\u0275text(58, "Salaire brut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "strong");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div")(62, "span");
    \u0275\u0275text(63, "Retenues salariales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "strong");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 23)(67, "span");
    \u0275\u0275text(68, "Net \xE0 payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "strong");
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 24)(72, "span");
    \u0275\u0275text(73, "Charges patronales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "strong");
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(76, PayslipDetailComponent_div_0_Conditional_76_Template, 19, 0, "div", 25);
    \u0275\u0275conditionalCreate(77, PayslipDetailComponent_div_0_Conditional_77_Template, 3, 2, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r8 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r1.isDraft ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isDraft ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canValidate && d_r8.payslip.state !== "DONE" && d_r8.payslip.state !== "CANCELLED" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r8.payslip.state !== "DRAFT" && d_r8.payslip.state !== "DONE" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r8.payslip.state !== "CANCELLED" && d_r8.payslip.state !== "DONE" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.msg ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.err ? 18 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r8.payslip.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", d_r8.payslip.employeeName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", d_r8.payslip.employeeMatricule, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r8.jobName || d_r8.departmentName ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r8.professionalCategoryName || d_r8.echelonName ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r8.hireDate ? 30 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("P\xE9riode : ", d_r8.payslip.periodFrom, " \u2192 ", d_r8.payslip.periodTo);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.badge(d_r8.payslip.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(d_r8.payslip.state));
    \u0275\u0275advance(19);
    \u0275\u0275repeater(d_r8.lines);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.fmt(d_r8.payslip.totalBrut));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.fmt(d_r8.payslip.totalCotisationsSalariales));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.fmt(d_r8.payslip.totalNet));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.fmt(d_r8.payslip.totalChargesPatronales));
    \u0275\u0275advance();
    \u0275\u0275conditional(((d_r8.leaveBalances == null ? null : d_r8.leaveBalances.length) ?? 0) > 0 ? 76 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r8.workedDays.length > 0 || d_r8.inputs.length > 0 ? 77 : -1);
  }
}
var PayslipDetailComponent = class _PayslipDetailComponent {
  constructor(hr, auth, route, router, companyService) {
    this.hr = hr;
    this.auth = auth;
    this.route = route;
    this.router = router;
    this.companyService = companyService;
    this.busy = false;
    this.err = "";
    this.msg = "";
    this.canValidate = false;
  }
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");
    this.canValidate = this.auth.hasPermission("RH", "BULLETINS", "VALIDATE") || this.auth.isPrivileged();
    this.load();
  }
  get isDraft() {
    return this.dto?.payslip.state === "DRAFT";
  }
  load() {
    this.hr.getPayslip(this.id).subscribe((d) => this.dto = d);
  }
  fmt(n) {
    return new Intl.NumberFormat("fr-FR").format(Math.round(n || 0));
  }
  fmtRate(n) {
    return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 2 }).format(n || 0);
  }
  stateLabel(s) {
    return s === "DONE" ? "Comptabilis\xE9" : s === "VERIFY" ? "Calcul\xE9" : s === "CANCELLED" ? "Annul\xE9" : "Brouillon";
  }
  badge(s) {
    return s === "DONE" ? "done" : s === "VERIFY" ? "info" : s === "CANCELLED" ? "warn" : "";
  }
  back() {
    this.router.navigate(["/hr/payslips"]);
  }
  h(s) {
    if (s == null)
      return "";
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  fmtDate(d) {
    if (!d)
      return "";
    try {
      return new Date(d).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
    } catch (e) {
      return d;
    }
  }
  print() {
    if (!this.dto)
      return;
    const d = this.dto;
    const company = this.companyService.getCached();
    const logo = this.companyService.getCachedLogoDataUrl();
    const lines = d.lines.filter((l) => l.categoryCode !== "COMP" && l.code !== "NET");
    const rowsHtml = lines.map((l) => {
      const total = l.total ?? 0;
      const qty = l.quantity ?? 1;
      const rate = l.rate ?? 0;
      const base = rate !== 0 ? `${this.fmtRate(rate)} %` : qty !== 1 ? `${this.fmt(qty)} \xD7 ${this.fmt(l.amount)}` : "";
      const gain = total > 0 ? this.fmt(total) : "";
      const retenue = total < 0 ? this.fmt(Math.abs(total)) : "";
      return `<tr>
        <td>${this.h(l.code)}</td>
        <td class="desc">${this.h(l.name)}</td>
        <td class="r base">${base}</td>
        <td class="r gain">${gain}</td>
        <td class="r ret">${retenue}</td>
      </tr>`;
    }).join("");
    const leaves = d.leaveBalances ?? [];
    const leavesHtml = leaves.length > 0 ? `
      <table class="leaves-tbl">
        <thead><tr><th>Compteurs de cong\xE9s</th><th class="r">Report</th><th class="r">Acquis</th><th class="r">Pris</th><th class="r">Reste</th></tr></thead>
        <tbody>
          ${leaves.map((b) => `<tr>
            <td>${this.h(b.name)}</td>
            <td class="r">${this.fmtRate(b.carryOver)}</td>
            <td class="r">${this.fmtRate(b.accrued)}</td>
            <td class="r">${this.fmtRate(b.taken)}</td>
            <td class="r" style="font-weight:700">${this.fmtRate(b.remaining)}</td>
          </tr>`).join("")}
        </tbody>
      </table>` : "";
    const extrasHtml = d.workedDays.length > 0 || d.inputs.length > 0 ? `
      <div class="extras">
        ${d.workedDays.length > 0 ? `
          <div class="extra-col">
            <div class="extra-h">Jours saisis</div>
            ${d.workedDays.map((wd) => `<div class="extra-r"><span>${this.h(wd.name || wd.code)}</span><span>${this.fmt(wd.numberOfDays)} j</span></div>`).join("")}
          </div>` : ""}
        ${d.inputs.length > 0 ? `
          <div class="extra-col">
            <div class="extra-h">\xC9l\xE9ments variables</div>
            ${d.inputs.map((inp) => `<div class="extra-r"><span>${this.h(inp.name || inp.code)}</span><span>${this.fmt(inp.amount)} F</span></div>`).join("")}
          </div>` : ""}
      </div>` : "";
    const co = {
      name: company?.name || "",
      sigle: company?.sigle || "",
      rccm: company?.rccm || "",
      nif: company?.nif || "",
      adresse: company?.adresse || "",
      tel: company?.telephone || "",
      email: company?.email || ""
    };
    const logoHtml = logo ? `<img src="${logo}" class="co-logo" alt="logo">` : "";
    const netAPayer = d.payslip.totalNet ?? 0;
    const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<title>Bulletin ${this.h(d.payslip.name)}</title>
<style>
* { box-sizing:border-box; margin:0; padding:0; }
body { font-family: Arial, sans-serif; font-size: 9.5pt; color: #111; background: white; }
.doc { padding: 14mm 14mm 10mm; max-width: 190mm; margin: 0 auto; }
.header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom: 2px solid #222; padding-bottom: 4mm; margin-bottom: 8mm; }
.co-logo { max-height: 48px; max-width: 120px; object-fit: contain; display:block; margin-bottom: 4px; }
.co-name { font-size: 13pt; font-weight: 700; color: #017E84; }
.co-sigle { font-size: 9pt; font-weight: 500; color: #017E84; }
.co-info { font-size: 8pt; color: #444; margin-top: 1px; }
.co-lbl { font-weight: 600; color: #222; }
.title-block { text-align:right; }
.doc-type { font-size: 16pt; font-weight: 800; letter-spacing: 1px; color: #222; }
.doc-ref { font-size: 10pt; font-weight: 600; color: #017E84; margin-top: 2px; }
.doc-state { font-size: 8pt; color: #777; margin-top: 2px; text-transform: uppercase; letter-spacing: .5px; }
.meta { display:flex; justify-content:space-between; margin-bottom: 6mm; background:#f7fafa; border:1px solid #dde; border-radius: 4px; padding: 6px 10px; }
.meta-label { font-size: 7pt; font-weight: 700; text-transform: uppercase; color: #888; margin-bottom: 2px; }
.meta-value { font-size: 11pt; font-weight: 700; }
.meta-sub { font-size: 8pt; color: #555; margin-top: 1px; }
.meta-dates { text-align:right; }
.meta-row { display:flex; justify-content:space-between; gap: 12px; font-size: 8.5pt; margin-bottom: 1px; }
.ml { color: #888; font-size: 7.5pt; }
table.lines { width:100%; border-collapse: collapse; margin-bottom: 5mm; font-size: 8.7pt; }
table.lines thead tr { background:#017E84; color:white; }
table.lines thead th { padding: 4px 6px; text-align:left; font-weight:600; font-size:7.5pt; }
table.lines tbody tr:nth-child(even) { background: #f7fafa; }
table.lines tbody td { padding: 3px 6px; border-bottom: 1px solid #e8e8e8; }
.desc { max-width: 160px; }
.r { text-align:right; }
.base { color: #888; font-size: 8pt; }
.gain { color: #1a7a3a; font-weight: 600; }
.ret { color: #c0392b; font-weight: 600; }
.net-table { width:100%; border-collapse: collapse; margin-bottom: 5mm; }
.net-row td { background:#017E84; color:white; font-weight:800; font-size:11pt; padding: 5px 8px; border-radius: 2px; }
.leaves-tbl { width:100%; border-collapse: collapse; margin-bottom: 5mm; font-size: 8pt; }
.leaves-tbl thead tr { background:#f0f4f4; }
.leaves-tbl thead th { padding: 3px 6px; text-align:left; font-weight:700; color:#017E84; font-size: 7.3pt; text-transform:uppercase; }
.leaves-tbl tbody td { padding: 3px 6px; border-bottom: 1px solid #eee; }
.extras { display:flex; gap: 16px; margin-bottom: 6mm; }
.extra-col { flex:1; border: 1px solid #e0e0e0; border-radius: 4px; padding: 6px 10px; }
.extra-h { font-size: 7.5pt; font-weight:700; color:#017E84; text-transform:uppercase; margin-bottom: 3px; }
.extra-r { display:flex; justify-content:space-between; font-size: 8pt; padding: 2px 0; border-bottom: 1px solid #eee; }
.lettres { font-size: 8.5pt; font-style: italic; border-top: 1px solid #ccc; padding-top: 3mm; margin-bottom: 10mm; }
.signatures { display:flex; justify-content:space-between; gap: 10mm; margin-top: 6mm; }
.sig { flex:1; text-align:center; }
.sig-lbl { font-size: 8pt; font-weight:700; margin-bottom: 10mm; }
.sig-area { height: 16mm; border: 1px solid #aaa; border-radius: 2px; }
.footer-note { font-size: 7pt; color:#aaa; text-align:center; margin-top: 8mm; border-top: 1px solid #eee; padding-top: 2mm; }
@page { margin: 0; size: A4 portrait; }
@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
</style></head><body>
<div class="doc">
  <div class="header">
    <div class="company">
      ${logoHtml}
      <div class="co-name">${this.h(co.name)}${co.sigle ? ` <span class="co-sigle">(${this.h(co.sigle)})</span>` : ""}</div>
      ${co.adresse ? `<div class="co-info">${this.h(co.adresse)}</div>` : ""}
      ${co.rccm ? `<div class="co-info"><span class="co-lbl">RCCM :</span> ${this.h(co.rccm)}</div>` : ""}
      ${co.nif ? `<div class="co-info"><span class="co-lbl">NIF :</span> ${this.h(co.nif)}</div>` : ""}
      ${co.tel ? `<div class="co-info"><span class="co-lbl">T\xE9l :</span> ${this.h(co.tel)}</div>` : ""}
    </div>
    <div class="title-block">
      <div class="doc-type">BULLETIN DE PAIE</div>
      <div class="doc-ref">${this.h(d.payslip.name)}</div>
      <div class="doc-state">${this.h(this.stateLabel(d.payslip.state))}</div>
    </div>
  </div>

  <div class="meta">
    <div>
      <div class="meta-label">Employ\xE9</div>
      <div class="meta-value">${this.h(d.payslip.employeeName)}</div>
      <div class="meta-sub">Matricule : ${this.h(d.payslip.employeeMatricule)}</div>
      ${d.jobName || d.departmentName ? `<div class="meta-sub">${this.h(d.jobName)}${d.jobName && d.departmentName ? " \u2014 " : ""}${this.h(d.departmentName)}</div>` : ""}
      ${d.professionalCategoryName || d.echelonName ? `<div class="meta-sub">${this.h(d.professionalCategoryName)}${d.professionalCategoryName && d.echelonName ? " \u2014 \xC9chelon " : ""}${this.h(d.echelonName)}</div>` : ""}
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">P\xE9riode</span><span>Du ${this.fmtDate(d.payslip.periodFrom)} au ${this.fmtDate(d.payslip.periodTo)}</span></div>
      ${d.hireDate ? `<div class="meta-row"><span class="ml">Embauch\xE9(e) le</span><span>${this.fmtDate(d.hireDate)}</span></div>` : ""}
      <div class="meta-row"><span class="ml">Date d'\xE9mission</span><span>${this.fmtDate((/* @__PURE__ */ new Date()).toISOString())}</span></div>
    </div>
  </div>

  <table class="lines">
    <thead><tr><th>Code</th><th class="desc">D\xE9signation</th><th class="r">Base</th><th class="r">Gains (FCFA)</th><th class="r">Retenues (FCFA)</th></tr></thead>
    <tbody>${rowsHtml}</tbody>
  </table>

  <table class="net-table">
    <tr class="net-row"><td>NET \xC0 PAYER</td><td class="r">${this.fmt(netAPayer)} FCFA</td></tr>
  </table>

  ${leavesHtml}

  ${extrasHtml}

  <div class="lettres">Arr\xEAt\xE9 \xE0 la somme de : <strong>${numberToFrenchWords(Math.round(netAPayer))} Francs CFA</strong></div>

  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Signature de l'employ\xE9</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Signature de l'employeur</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">Document confidentiel \xB7 ${this.h(co.name)}</div>
</div>
</body></html>`;
    const w = window.open("", "_blank", "width=1000,height=1100");
    if (!w)
      return;
    w.document.write(html);
    w.document.close();
    w.focus();
    setTimeout(() => {
      w.print();
      w.onafterprint = () => w.close();
    }, 500);
  }
  recompute() {
    this.run(this.hr.recompute(this.id), "Bulletin recalcul\xE9");
  }
  act(a) {
    const map = {
      verify: this.hr.verifyPayslip(this.id),
      validate: this.hr.validatePayslip(this.id),
      draft: this.hr.draftPayslip(this.id),
      cancel: this.hr.cancelPayslip(this.id)
    };
    const okmsg = { verify: "Bulletin marqu\xE9 calcul\xE9", validate: "Bulletin valid\xE9 et comptabilis\xE9", draft: "Remis en brouillon", cancel: "Bulletin annul\xE9" };
    this.run(map[a], okmsg[a]);
  }
  run(obs, okmsg) {
    this.busy = true;
    this.err = "";
    this.msg = "";
    obs.subscribe({
      next: (d) => {
        this.busy = false;
        this.dto = d;
        this.msg = okmsg;
      },
      error: (e) => {
        this.busy = false;
        this.err = e.error?.message || "Erreur";
      }
    });
  }
  static {
    this.\u0275fac = function PayslipDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PayslipDetailComponent)(\u0275\u0275directiveInject(HrService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CompanyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PayslipDetailComponent, selectors: [["app-hr-payslip-detail"]], decls: 1, vars: 1, consts: [["class", "hp", 4, "ngIf"], [1, "hp"], [1, "hp-head"], [1, "b", "b-sec", 3, "click"], [1, "material-icons"], [2, "display", "flex", "gap", "8px", "flex-wrap", "wrap"], [1, "b", "b-sec", 3, "disabled"], [1, "b", "b-warn", 3, "disabled"], [1, "b", "b-ok", 3, "disabled"], [1, "b", "b-danger", 3, "disabled"], [1, "alert", 2, "background", "#ecfdf5", "color", "#065f46"], [1, "alert"], [1, "card"], [1, "pcard-head"], [1, "pref"], [1, "pemp"], [1, "mat"], [1, "pper"], [1, "badge"], [1, "tbl"], [1, "ta-r"], [3, "cat-gross", "cat-net"], [1, "totals"], [1, "net"], [1, "pat"], [1, "leaves"], [1, "extras"], [1, "b", "b-sec", 3, "click", "disabled"], [1, "b", "b-warn", 3, "click", "disabled"], [1, "b", "b-ok", 3, "click", "disabled"], [1, "b", "b-danger", 3, "click", "disabled"], [1, "extra-title"], [1, "tbl", "leaves-tbl"], [1, "ta-r", 2, "font-weight", "700"], [1, "extra-block"], [1, "extra-row"]], template: function PayslipDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PayslipDetailComponent_div_0_Template, 78, 24, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.dto);
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.hp[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #7C3AED;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.b-primary[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.b-danger[_ngcontent-%COMP%] {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.ta-r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.clk[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.mdl-f[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.fg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in[_ngcontent-%COMP%] {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in[_ngcontent-%COMP%]:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in[_ngcontent-%COMP%]:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fg-2[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */", "\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n.pcard-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.pref[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.pemp[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n.mat[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.pper[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  margin-top: 2px;\n}\n.tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 20px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n}\n.tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.ta-r[_ngcontent-%COMP%] {\n  text-align: right;\n}\ntr.cat-gross[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.08);\n  font-weight: 700;\n}\ntr.cat-net[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.08);\n  font-weight: 700;\n}\n.totals[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n.totals[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 12px;\n  border-radius: var(--radius-md);\n  background: var(--bg-elevated);\n}\n.totals[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n}\n.totals[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.totals[_ngcontent-%COMP%]   .net[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n}\n.totals[_ngcontent-%COMP%]   .pat[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.1);\n}\n@media (max-width: 700px) {\n  .totals[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.leaves[_ngcontent-%COMP%] {\n  padding: 0 20px 18px;\n}\n.leaves-tbl[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n.leaves-tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.leaves-tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n}\n.extras[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  padding: 0 20px 18px;\n}\n.extra-title[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  margin-bottom: 6px;\n}\n.extra-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 0.85rem;\n  color: var(--text-primary);\n}\n@media (max-width: 700px) {\n  .extras[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=payslip-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PayslipDetailComponent, [{
    type: Component,
    args: [{ selector: "app-hr-payslip-detail", standalone: true, imports: [CommonModule], template: `
    <div class="hp" *ngIf="dto as d">
      <div class="hp-head">
        <div>
          <button class="b b-sec" (click)="back()"><span class="material-icons">arrow_back</span> Retour</button>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="b b-sec" (click)="print()"><span class="material-icons">print</span> Imprimer</button>
          @if (isDraft) { <button class="b b-sec" (click)="recompute()" [disabled]="busy"><span class="material-icons">refresh</span> Recalculer</button> }
          @if (isDraft) { <button class="b b-warn" (click)="act('verify')" [disabled]="busy"><span class="material-icons">fact_check</span> Marquer calcul\xE9</button> }
          @if (canValidate && d.payslip.state !== 'DONE' && d.payslip.state !== 'CANCELLED') { <button class="b b-ok" (click)="act('validate')" [disabled]="busy"><span class="material-icons">check_circle</span> Valider & comptabiliser</button> }
          @if (d.payslip.state !== 'DRAFT' && d.payslip.state !== 'DONE') { <button class="b b-sec" (click)="act('draft')" [disabled]="busy">Brouillon</button> }
          @if (d.payslip.state !== 'CANCELLED' && d.payslip.state !== 'DONE') { <button class="b b-danger" (click)="act('cancel')" [disabled]="busy"><span class="material-icons">block</span> Annuler</button> }
        </div>
      </div>

      @if (msg) { <div class="alert" style="background:#ecfdf5;color:#065f46">{{ msg }}</div> }
      @if (err) { <div class="alert">{{ err }}</div> }

      <div class="card">
        <div class="pcard-head">
          <div>
            <div class="pref">{{ d.payslip.name }}</div>
            <div class="pemp">{{ d.payslip.employeeName }} <span class="mat">({{ d.payslip.employeeMatricule }})</span></div>
            @if (d.jobName || d.departmentName) {
              <div class="pper">{{ d.jobName }}{{ d.jobName && d.departmentName ? ' \u2014 ' : '' }}{{ d.departmentName }}</div>
            }
            @if (d.professionalCategoryName || d.echelonName) {
              <div class="pper">{{ d.professionalCategoryName }}{{ d.professionalCategoryName && d.echelonName ? ' \u2014 \xC9chelon ' : '' }}{{ d.echelonName }}</div>
            }
            @if (d.hireDate) { <div class="pper">Embauch\xE9(e) le {{ fmtDate(d.hireDate) }}</div> }
            <div class="pper">P\xE9riode : {{ d.payslip.periodFrom }} \u2192 {{ d.payslip.periodTo }}</div>
          </div>
          <span class="badge" [class]="badge(d.payslip.state)">{{ stateLabel(d.payslip.state) }}</span>
        </div>

        <table class="tbl">
          <thead><tr><th>Code</th><th>Libell\xE9</th><th>Cat\xE9gorie</th><th class="ta-r">Taux</th><th class="ta-r">Quantit\xE9</th><th class="ta-r">Montant unitaire</th><th class="ta-r">Total</th></tr></thead>
          <tbody>
            @for (l of d.lines; track l.id) {
              <tr [class.cat-gross]="l.categoryCode==='GROSS'" [class.cat-net]="l.categoryCode==='NET'">
                <td>{{ l.code }}</td>
                <td>{{ l.name }}</td>
                <td>{{ l.categoryName }}</td>
                <td class="ta-r">{{ (l.rate ?? 0) !== 0 ? fmtRate(l.rate) + ' %' : '\u2014' }}</td>
                <td class="ta-r">{{ (l.quantity ?? 1) !== 1 ? fmt(l.quantity) : '\u2014' }}</td>
                <td class="ta-r">{{ (l.quantity ?? 1) !== 1 ? fmt(l.amount) : '\u2014' }}</td>
                <td class="ta-r" [style.color]="(l.total||0) < 0 ? '#b91c1c' : ''">{{ fmt(l.total) }}</td>
              </tr>
            }
          </tbody>
        </table>

        <div class="totals">
          <div><span>Salaire brut</span><strong>{{ fmt(d.payslip.totalBrut) }}</strong></div>
          <div><span>Retenues salariales</span><strong>{{ fmt(d.payslip.totalCotisationsSalariales) }}</strong></div>
          <div class="net"><span>Net \xE0 payer</span><strong>{{ fmt(d.payslip.totalNet) }}</strong></div>
          <div class="pat"><span>Charges patronales</span><strong>{{ fmt(d.payslip.totalChargesPatronales) }}</strong></div>
        </div>

        @if ((d.leaveBalances?.length ?? 0) > 0) {
          <div class="leaves">
            <div class="extra-title">Compteurs de cong\xE9s</div>
            <table class="tbl leaves-tbl">
              <thead><tr><th>Type</th><th class="ta-r">Report</th><th class="ta-r">Acquis</th><th class="ta-r">Pris</th><th class="ta-r">Reste</th></tr></thead>
              <tbody>
                @for (b of d.leaveBalances; track b.leaveTypeId) {
                  <tr>
                    <td>{{ b.name }}</td>
                    <td class="ta-r">{{ fmt(b.carryOver) }}</td>
                    <td class="ta-r">{{ fmt(b.accrued) }}</td>
                    <td class="ta-r">{{ fmt(b.taken) }}</td>
                    <td class="ta-r" style="font-weight:700">{{ fmt(b.remaining) }}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }

        @if (d.workedDays.length > 0 || d.inputs.length > 0) {
          <div class="extras">
            @if (d.workedDays.length > 0) {
              <div class="extra-block">
                <div class="extra-title">Jours saisis</div>
                @for (wd of d.workedDays; track wd.id) {
                  <div class="extra-row"><span>{{ wd.name || wd.code }}</span><strong>{{ fmt(wd.numberOfDays) }} j</strong></div>
                }
              </div>
            }
            @if (d.inputs.length > 0) {
              <div class="extra-block">
                <div class="extra-title">\xC9l\xE9ments variables saisis</div>
                @for (inp of d.inputs; track inp.id) {
                  <div class="extra-row"><span>{{ inp.name || inp.code }}</span><strong>{{ fmt(inp.amount) }} F</strong></div>
                }
              </div>
            }
          </div>
        }
      </div>
    </div>
  `, styles: ["/* src/app/modules/hr/components/hr-shared.scss */\n:host {\n  display: block;\n}\n.hp {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head h1 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head h1 .material-icons {\n  color: #7C3AED;\n}\n.muted {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b .material-icons {\n  font-size: 18px;\n}\n.b-primary {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec:hover {\n  background: var(--navbar-hover);\n}\n.b-danger {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl th {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl td {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl tbody tr:hover {\n  background: var(--bg-elevated);\n}\n.ta-r {\n  text-align: right;\n}\n.clk {\n  cursor: pointer;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b {\n  padding: 20px;\n}\n.mdl-f {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2 {\n  grid-column: span 2;\n}\n.fg label {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n  .fg-2 {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */\n", "/* angular:styles/component:scss;9a5e5a12a8a9053c89a7e106dd078c2cf83c172be8587369120712906fb2f1d4;/home/automate/Documents/Projets 1.1/Projets/Blessing ERP Distrbuteur/erp-frontend/src/app/modules/hr/components/payslip-detail/payslip-detail.component.ts */\n.card {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n.pcard-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.pref {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.pemp {\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n.mat {\n  color: var(--text-muted);\n}\n.pper {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  margin-top: 2px;\n}\n.tbl {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl th {\n  text-align: left;\n  padding: 10px 20px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n}\n.tbl td {\n  padding: 9px 20px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.ta-r {\n  text-align: right;\n}\ntr.cat-gross {\n  background: rgba(124, 58, 237, 0.08);\n  font-weight: 700;\n}\ntr.cat-net {\n  background: rgba(22, 163, 74, 0.08);\n  font-weight: 700;\n}\n.totals {\n  padding: 16px 20px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n.totals > div {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 12px;\n  border-radius: var(--radius-md);\n  background: var(--bg-elevated);\n}\n.totals span {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n}\n.totals strong {\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.totals .net {\n  background: rgba(124, 58, 237, 0.12);\n}\n.totals .pat {\n  background: rgba(217, 119, 6, 0.1);\n}\n@media (max-width: 700px) {\n  .totals {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.leaves {\n  padding: 0 20px 18px;\n}\n.leaves-tbl {\n  font-size: 0.82rem;\n}\n.leaves-tbl th,\n.leaves-tbl td {\n  padding: 6px 10px;\n}\n.extras {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  padding: 0 20px 18px;\n}\n.extra-title {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  margin-bottom: 6px;\n}\n.extra-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 0.85rem;\n  color: var(--text-primary);\n}\n@media (max-width: 700px) {\n  .extras {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=payslip-detail.component.css.map */\n"] }]
  }], () => [{ type: HrService }, { type: AuthService }, { type: ActivatedRoute }, { type: Router }, { type: CompanyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PayslipDetailComponent, { className: "PayslipDetailComponent", filePath: "app/modules/hr/components/payslip-detail/payslip-detail.component.ts", lineNumber: 143 });
})();
export {
  PayslipDetailComponent
};
//# sourceMappingURL=chunk-47RU73VA.js.map

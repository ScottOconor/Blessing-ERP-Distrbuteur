import {
  HelpdeskService
} from "./chunk-AHKEZOPG.js";
import {
  AuditTrailComponent
} from "./chunk-Z3T7EMK6.js";
import "./chunk-G4ORCRQ7.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-4W3TIS2I.js";
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
  DatePipe,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/helpdesk/components/ticket-detail/ticket-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TicketDetailComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.ticket.title);
  }
}
function TicketDetailComponent_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function TicketDetailComponent_Conditional_5_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editing = !ctx_r0.editing);
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r0.editing ? "Annuler" : "Modifier");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.editing ? "close" : "edit");
  }
}
function TicketDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, TicketDetailComponent_Conditional_5_Conditional_3_Template, 2, 1, "h1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275conditionalCreate(5, TicketDetailComponent_Conditional_5_Conditional_5_Template, 3, 2, "button", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.ticket.ticketNumber);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.editing ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.ticket.status !== "FERME" ? 5 : -1);
  }
}
function TicketDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 3);
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
function TicketDetailComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 3);
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
function TicketDetailComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 13);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function TicketDetailComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "label");
    \u0275\u0275text(2, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function TicketDetailComponent_Conditional_9_Conditional_2_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.ticket.title, $event) || (ctx_r0.ticket.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ticket.title);
  }
}
function TicketDetailComponent_Conditional_9_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function TicketDetailComponent_Conditional_9_Conditional_12_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.ticket.priority, $event) || (ctx_r0.ticket.priority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 35);
    \u0275\u0275text(2, "Basse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 36);
    \u0275\u0275text(4, "Moyenne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 37);
    \u0275\u0275text(6, "Haute");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 38);
    \u0275\u0275text(8, "Critique");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ticket.priority);
  }
}
function TicketDetailComponent_Conditional_9_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-prio-", ctx_r0.ticket.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.priorityLabel(ctx_r0.ticket.priority));
  }
}
function TicketDetailComponent_Conditional_9_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function TicketDetailComponent_Conditional_9_Conditional_17_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.ticket.category, $event) || (ctx_r0.ticket.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 39);
    \u0275\u0275text(2, "Incident");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 40);
    \u0275\u0275text(4, "Demande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 41);
    \u0275\u0275text(6, "Question");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ticket.category);
  }
}
function TicketDetailComponent_Conditional_9_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-cat-", ctx_r0.ticket.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.categoryLabel(ctx_r0.ticket.category));
  }
}
function TicketDetailComponent_Conditional_9_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 18);
    \u0275\u0275text(2, "R\xE9solu le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r0.ticket.resolvedAt, "dd/MM/yyyy HH:mm"));
  }
}
function TicketDetailComponent_Conditional_9_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 42);
    \u0275\u0275twoWayListener("ngModelChange", function TicketDetailComponent_Conditional_9_Conditional_39_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.ticket.description, $event) || (ctx_r0.ticket.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ticket.description);
  }
}
function TicketDetailComponent_Conditional_9_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.ticket.description || "Aucune description.");
  }
}
function TicketDetailComponent_Conditional_9_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "button", 43);
    \u0275\u0275listener("click", function TicketDetailComponent_Conditional_9_Conditional_41_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editing = false);
    });
    \u0275\u0275text(2, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 44);
    \u0275\u0275listener("click", function TicketDetailComponent_Conditional_9_Conditional_41_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.saving ? "hourglass_empty" : "save");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Sauvegarde..." : "Enregistrer", " ");
  }
}
function TicketDetailComponent_Conditional_9_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, "Aucun commentaire pour l'instant.");
    \u0275\u0275elementEnd();
  }
}
function TicketDetailComponent_Conditional_9_Conditional_48_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "Support Hub");
    \u0275\u0275elementEnd();
  }
}
function TicketDetailComponent_Conditional_9_Conditional_48_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "Note interne");
    \u0275\u0275elementEnd();
  }
}
function TicketDetailComponent_Conditional_9_Conditional_48_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "span", 48)(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TicketDetailComponent_Conditional_9_Conditional_48_For_2_Conditional_6_Template, 2, 0, "span", 49);
    \u0275\u0275conditionalCreate(7, TicketDetailComponent_Conditional_9_Conditional_48_For_2_Conditional_7_Template, 2, 0, "span", 50);
    \u0275\u0275elementStart(8, "span", 51);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 52);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275classProp("comment-internal", c_r8.internal)("comment-from-hub", c_r8.fromHub);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r8.fromHub ? "support_agent" : "person");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", c_r8.authorUsername, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r8.fromHub ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r8.internal ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 10, c_r8.createdAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r8.content);
  }
}
function TicketDetailComponent_Conditional_9_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275repeaterCreate(1, TicketDetailComponent_Conditional_9_Conditional_48_For_2_Template, 13, 13, "div", 45, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.ticket.comments);
  }
}
function TicketDetailComponent_Conditional_9_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 3);
    \u0275\u0275text(2, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " En attente de prise en charge par le support \u2014 vous pouvez d\xE9j\xE0 \xE9crire, le support vous r\xE9pondra d\xE8s que possible. ");
    \u0275\u0275elementEnd();
  }
}
function TicketDetailComponent_Conditional_9_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "textarea", 53);
    \u0275\u0275twoWayListener("ngModelChange", function TicketDetailComponent_Conditional_9_Conditional_50_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.newComment, $event) || (ctx_r0.newComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 54)(3, "button", 55);
    \u0275\u0275listener("click", function TicketDetailComponent_Conditional_9_Conditional_50_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.sendComment());
    });
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newComment);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.sendingComment || !ctx_r0.newComment.trim());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.sendingComment ? "Envoi..." : "Envoyer", " ");
  }
}
function TicketDetailComponent_Conditional_9_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1, "Ticket cl\xF4tur\xE9 \u2014 discussion ferm\xE9e.");
    \u0275\u0275elementEnd();
  }
}
function TicketDetailComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 14);
    \u0275\u0275conditionalCreate(2, TicketDetailComponent_Conditional_9_Conditional_2_Template, 4, 1, "div", 15);
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17)(5, "span", 18);
    \u0275\u0275text(6, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 17)(10, "span", 18);
    \u0275\u0275text(11, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, TicketDetailComponent_Conditional_9_Conditional_12_Template, 9, 1, "select", 19)(13, TicketDetailComponent_Conditional_9_Conditional_13_Template, 2, 4, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17)(15, "span", 18);
    \u0275\u0275text(16, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, TicketDetailComponent_Conditional_9_Conditional_17_Template, 7, 1, "select", 19)(18, TicketDetailComponent_Conditional_9_Conditional_18_Template, 2, 4, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 17)(20, "span", 18);
    \u0275\u0275text(21, "Cr\xE9\xE9 par");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 17)(25, "span", 18);
    \u0275\u0275text(26, "Pris en charge par");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 17)(30, "span", 18);
    \u0275\u0275text(31, "Cr\xE9\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(35, TicketDetailComponent_Conditional_9_Conditional_35_Template, 6, 4, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 21)(37, "span", 18);
    \u0275\u0275text(38, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(39, TicketDetailComponent_Conditional_9_Conditional_39_Template, 1, 1, "textarea", 22)(40, TicketDetailComponent_Conditional_9_Conditional_40_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(41, TicketDetailComponent_Conditional_9_Conditional_41_Template, 7, 3, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 25)(43, "h3", 26)(44, "span", 3);
    \u0275\u0275text(45, "forum");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(47, TicketDetailComponent_Conditional_9_Conditional_47_Template, 2, 0, "p", 27)(48, TicketDetailComponent_Conditional_9_Conditional_48_Template, 3, 0, "div", 28);
    \u0275\u0275conditionalCreate(49, TicketDetailComponent_Conditional_9_Conditional_49_Template, 4, 0, "div", 29);
    \u0275\u0275conditionalCreate(50, TicketDetailComponent_Conditional_9_Conditional_50_Template, 7, 3, "div", 30)(51, TicketDetailComponent_Conditional_9_Conditional_51_Template, 2, 0, "p", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "app-audit-trail", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.editing ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-status-", ctx_r0.ticket.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statusLabel(ctx_r0.ticket.status));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.editing ? 12 : 13);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.editing ? 17 : 18);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.ticket.createdByUsername);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.ticket.assignedToUsername || "En attente du support");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 18, ctx_r0.ticket.createdAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.ticket.resolvedAt ? 35 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.editing ? 39 : 40);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.editing ? 41 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Commentaires (", (ctx_r0.ticket.comments == null ? null : ctx_r0.ticket.comments.length) || 0, ") ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(ctx_r0.ticket.comments == null ? null : ctx_r0.ticket.comments.length) ? 47 : 48);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.ticket.status === "OUVERT" ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.ticket.status !== "FERME" ? 50 : 51);
    \u0275\u0275advance(2);
    \u0275\u0275property("entityId", ctx_r0.ticket.id ?? null);
  }
}
var TicketDetailComponent = class _TicketDetailComponent {
  constructor(helpdeskService, authService, route, router) {
    this.helpdeskService = helpdeskService;
    this.authService = authService;
    this.route = route;
    this.router = router;
    this.ticket = null;
    this.loading = true;
    this.saving = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.newComment = "";
    this.newCommentInternal = false;
    this.sendingComment = false;
    this.editing = false;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id)
      this.load(+id);
  }
  load(id) {
    this.loading = true;
    this.helpdeskService.getTicket(id).subscribe({
      next: (t) => {
        this.ticket = t;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  save() {
    if (!this.ticket?.id)
      return;
    this.saving = true;
    this.helpdeskService.updateTicket(this.ticket.id, {
      title: this.ticket.title,
      description: this.ticket.description,
      priority: this.ticket.priority,
      category: this.ticket.category
    }).subscribe({
      next: (t) => {
        this.ticket = __spreadProps(__spreadValues({}, t), { comments: this.ticket?.comments });
        this.saving = false;
        this.editing = false;
        this.showSuccess("Ticket mis \xE0 jour");
      },
      error: (e) => {
        this.saving = false;
        this.errorMsg = e.error?.message || "Erreur de sauvegarde";
      }
    });
  }
  sendComment() {
    if (!this.ticket?.id || !this.newComment.trim())
      return;
    this.sendingComment = true;
    const comment = {
      content: this.newComment,
      authorUsername: this.authService.getSession()?.username ?? "",
      internal: this.newCommentInternal
    };
    this.helpdeskService.addComment(this.ticket.id, comment).subscribe({
      next: (c) => {
        this.ticket.comments = [...this.ticket.comments || [], c];
        this.newComment = "";
        this.newCommentInternal = false;
        this.sendingComment = false;
      },
      error: () => {
        this.sendingComment = false;
      }
    });
  }
  statusLabel(s) {
    const m = { OUVERT: "Ouvert", EN_COURS: "En cours", RESOLU: "R\xE9solu", FERME: "Ferm\xE9" };
    return m[s ?? ""] ?? s ?? "";
  }
  priorityLabel(p) {
    const m = { BASSE: "Basse", MOYENNE: "Moyenne", HAUTE: "Haute", CRITIQUE: "Critique" };
    return m[p ?? ""] ?? p ?? "";
  }
  categoryLabel(c) {
    const m = { INCIDENT: "Incident", DEMANDE: "Demande", QUESTION: "Question" };
    return m[c ?? ""] ?? c ?? "";
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 3500);
  }
  static {
    this.\u0275fac = function TicketDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TicketDetailComponent)(\u0275\u0275directiveInject(HelpdeskService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketDetailComponent, selectors: [["app-ticket-detail"]], decls: 10, vars: 4, consts: [[1, "page-container"], [1, "detail-header"], ["title", "Retour", 1, "btn-icon", 3, "click"], [1, "material-icons"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "loading"], [1, "ticket-body"], [1, "title-wrap"], [1, "ticket-num", "mono"], [1, "action-bar"], [1, "btn-icon", 3, "title"], [1, "btn-icon", 3, "click", "title"], [1, "material-icons", "spin"], [1, "card", "ticket-card"], [1, "form-group"], [1, "meta-grid"], [1, "meta-item"], [1, "meta-label"], [1, "form-control-sm", 3, "ngModel"], [3, "class"], [1, "desc-section"], ["rows", "5", 1, "form-control", 3, "ngModel"], [1, "desc-text"], [1, "edit-actions"], [1, "card", "comments-card"], [1, "comments-title"], [1, "no-comments"], [1, "comments-list"], [1, "comment-waiting"], [1, "comment-form"], [1, "comment-closed"], ["entityType", "TICKET", 3, "entityId"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control-sm", 3, "ngModelChange", "ngModel"], ["value", "BASSE"], ["value", "MOYENNE"], ["value", "HAUTE"], ["value", "CRITIQUE"], ["value", "INCIDENT"], ["value", "DEMANDE"], ["value", "QUESTION"], ["rows", "5", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], [1, "comment", 3, "comment-internal", "comment-from-hub"], [1, "comment"], [1, "comment-header"], [1, "comment-author"], [1, "badge-hub"], [1, "badge-internal"], [1, "comment-date"], [1, "comment-body"], ["rows", "3", "placeholder", "R\xE9pondre ou apporter des pr\xE9cisions\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "comment-form-footer"], [1, "btn-primary", "btn-sm", 3, "click", "disabled"]], template: function TicketDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function TicketDetailComponent_Template_button_click_2_listener() {
          return ctx.router.navigate(["/helpdesk/tickets"]);
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(5, TicketDetailComponent_Conditional_5_Template, 6, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, TicketDetailComponent_Conditional_6_Template, 4, 1, "div", 4);
        \u0275\u0275conditionalCreate(7, TicketDetailComponent_Conditional_7_Template, 4, 1, "div", 5);
        \u0275\u0275conditionalCreate(8, TicketDetailComponent_Conditional_8_Template, 4, 0, "div", 6)(9, TicketDetailComponent_Conditional_9_Template, 53, 21, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.ticket ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 8 : ctx.ticket ? 9 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AuditTrailComponent, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #0891b2;\n}\n.page-header[_ngcontent-%COMP%]   .page-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 16px;\n  font-size: 13.5px;\n  border: 1px solid transparent;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.alert.alert-warning[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.alert.alert-info[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: rgba(3, 105, 161, 0.2);\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.3;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-primary.btn-sm[_ngcontent-%COMP%], \n.btn-secondary.btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.btn-primary.btn-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary.btn-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0891b2;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0e7490;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.btn-danger-icon[_ngcontent-%COMP%] {\n  color: var(--danger);\n  border-color: var(--danger);\n}\n.btn-icon.btn-danger-icon[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-sizing: border-box;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0891b2;\n  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.form-control-sm[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-size: 12px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.form-control-sm[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0891b2;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 13px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 13px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n  color: var(--text-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.1s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 32px;\n  cursor: default;\n}\n.data-table[_ngcontent-%COMP%]   .col-title[_ngcontent-%COMP%] {\n  max-width: 280px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n  width: 540px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-xl);\n}\n.modal.modal-lg[_ngcontent-%COMP%] {\n  width: 640px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 17px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15.5px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border-light);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  background: var(--bg-elevated);\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 12px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge-status-OUVERT[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-status-EN_COURS[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-status-RESOLU[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-status-FERME[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.badge-prio-BASSE[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-prio-MOYENNE[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-prio-HAUTE[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-prio-CRITIQUE[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  font-weight: 700;\n}\n.badge-cat-INCIDENT[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge-cat-DEMANDE[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-cat-QUESTION[_ngcontent-%COMP%] {\n  background: rgba(109, 40, 217, 0.1);\n  color: #7C3AED;\n}\n.info-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--info-bg);\n  color: var(--info);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n}\n.info-note[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ticket-num[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n  padding: 2px 8px;\n  border-radius: var(--radius-sm);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.action-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n  flex-wrap: wrap;\n}\n.btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n}\n.btn-action[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-action.btn-take[_ngcontent-%COMP%] {\n  background: var(--info);\n  color: white;\n}\n.btn-action.btn-take[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.btn-action.btn-resolve[_ngcontent-%COMP%] {\n  background: var(--success);\n  color: white;\n}\n.btn-action.btn-resolve[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.btn-action.btn-close[_ngcontent-%COMP%] {\n  background: var(--text-muted);\n  color: white;\n}\n.btn-action.btn-close[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.btn-action.btn-reopen[_ngcontent-%COMP%] {\n  background: var(--warning);\n  color: white;\n}\n.btn-action.btn-reopen[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.ticket-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.ticket-card[_ngcontent-%COMP%] {\n  padding: 22px;\n}\n.meta-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.meta-label[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.desc-section[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.desc-section[_ngcontent-%COMP%]   .meta-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n}\n.desc-section[_ngcontent-%COMP%]   .desc-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n  white-space: pre-wrap;\n  line-height: 1.65;\n}\n.edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border-light);\n}\n.comments-card[_ngcontent-%COMP%] {\n  padding: 22px;\n}\n.comments-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 16px;\n}\n.comments-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #0891b2;\n}\n.no-comments[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0 0 16px;\n}\n.comments-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.comment[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border-radius: var(--radius-sm);\n  padding: 12px 14px;\n  border-left: 3px solid var(--border);\n}\n.comment.comment-internal[_ngcontent-%COMP%] {\n  border-left-color: var(--warning);\n  background: var(--warning-bg);\n}\n.comment.comment-from-hub[_ngcontent-%COMP%] {\n  border-left-color: var(--info);\n  background: var(--info-bg);\n}\n.comment-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 6px;\n}\n.comment-header[_ngcontent-%COMP%]   .comment-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.comment-header[_ngcontent-%COMP%]   .comment-author[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.comment-header[_ngcontent-%COMP%]   .comment-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-left: auto;\n}\n.badge-internal[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 10px;\n  text-transform: uppercase;\n}\n.badge-hub[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 10px;\n  text-transform: uppercase;\n}\n.comment-body[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-primary);\n  white-space: pre-wrap;\n  line-height: 1.5;\n}\n.comment-waiting[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 14px;\n  border-radius: 8px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  font-size: 13px;\n  line-height: 1.5;\n  margin-top: 4px;\n}\n.comment-waiting[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.comment-closed[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-top: 12px;\n  font-style: italic;\n}\n.comment-form[_ngcontent-%COMP%]   .comment-form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 8px;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=ticket-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TicketDetailComponent, [{
    type: Component,
    args: [{ selector: "app-ticket-detail", standalone: true, imports: [CommonModule, FormsModule, AuditTrailComponent], template: `<div class="page-container">

  <!-- En-t\xEAte avec actions -->
  <div class="detail-header">
    <button class="btn-icon" (click)="router.navigate(['/helpdesk/tickets'])" title="Retour">
      <span class="material-icons">arrow_back</span>
    </button>

    @if (ticket) {
      <div class="title-wrap">
        <span class="ticket-num mono">{{ ticket.ticketNumber }}</span>
        @if (!editing) { <h1>{{ ticket.title }}</h1> }
      </div>
      <div class="action-bar">
        @if (ticket.status !== 'FERME') {
          <button class="btn-icon" (click)="editing = !editing" [title]="editing ? 'Annuler' : 'Modifier'">
            <span class="material-icons">{{ editing ? 'close' : 'edit' }}</span>
          </button>
        }
      </div>
    }
  </div>

  @if (successMsg) {
    <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div>
  }
  @if (errorMsg) {
    <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }}</div>
  }

  @if (loading) {
    <div class="loading"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else if (ticket) {
    <div class="ticket-body">

      <!-- Fiche ticket -->
      <div class="card ticket-card">
        @if (editing) {
          <div class="form-group">
            <label>Titre</label>
            <input type="text" [(ngModel)]="ticket.title" class="form-control" />
          </div>
        }

        <div class="meta-grid">
          <div class="meta-item">
            <span class="meta-label">Statut</span>
            <span class="badge badge-status-{{ ticket.status }}">{{ statusLabel(ticket.status) }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Priorit\xE9</span>
            @if (editing) {
              <select [(ngModel)]="ticket.priority" class="form-control-sm">
                <option value="BASSE">Basse</option>
                <option value="MOYENNE">Moyenne</option>
                <option value="HAUTE">Haute</option>
                <option value="CRITIQUE">Critique</option>
              </select>
            } @else {
              <span class="badge badge-prio-{{ ticket.priority }}">{{ priorityLabel(ticket.priority) }}</span>
            }
          </div>
          <div class="meta-item">
            <span class="meta-label">Cat\xE9gorie</span>
            @if (editing) {
              <select [(ngModel)]="ticket.category" class="form-control-sm">
                <option value="INCIDENT">Incident</option>
                <option value="DEMANDE">Demande</option>
                <option value="QUESTION">Question</option>
              </select>
            } @else {
              <span class="badge badge-cat-{{ ticket.category }}">{{ categoryLabel(ticket.category) }}</span>
            }
          </div>
          <div class="meta-item">
            <span class="meta-label">Cr\xE9\xE9 par</span>
            <span>{{ ticket.createdByUsername }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Pris en charge par</span>
            <span>{{ ticket.assignedToUsername || 'En attente du support' }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Cr\xE9\xE9 le</span>
            <span>{{ ticket.createdAt | date:'dd/MM/yyyy HH:mm' }}</span>
          </div>
          @if (ticket.resolvedAt) {
            <div class="meta-item">
              <span class="meta-label">R\xE9solu le</span>
              <span>{{ ticket.resolvedAt | date:'dd/MM/yyyy HH:mm' }}</span>
            </div>
          }
        </div>

        <div class="desc-section">
          <span class="meta-label">Description</span>
          @if (editing) {
            <textarea [(ngModel)]="ticket.description" class="form-control" rows="5"></textarea>
          } @else {
            <div class="desc-text">{{ ticket.description || 'Aucune description.' }}</div>
          }
        </div>

        @if (editing) {
          <div class="edit-actions">
            <button class="btn-secondary" (click)="editing = false">Annuler</button>
            <button class="btn-primary" (click)="save()" [disabled]="saving">
              <span class="material-icons">{{ saving ? 'hourglass_empty' : 'save' }}</span>
              {{ saving ? 'Sauvegarde...' : 'Enregistrer' }}
            </button>
          </div>
        }
      </div>

      <!-- Thread commentaires -->
      <div class="card comments-card">
        <h3 class="comments-title">
          <span class="material-icons">forum</span>
          Commentaires ({{ ticket.comments?.length || 0 }})
        </h3>

        @if (!ticket.comments?.length) {
          <p class="no-comments">Aucun commentaire pour l'instant.</p>
        } @else {
          <div class="comments-list">
            @for (c of ticket.comments; track c.id) {
              <div class="comment" [class.comment-internal]="c.internal" [class.comment-from-hub]="c.fromHub">
                <div class="comment-header">
                  <span class="comment-author">
                    <span class="material-icons">{{ c.fromHub ? 'support_agent' : 'person' }}</span>{{ c.authorUsername }}
                  </span>
                  @if (c.fromHub) {
                    <span class="badge-hub">Support Hub</span>
                  }
                  @if (c.internal) {
                    <span class="badge-internal">Note interne</span>
                  }
                  <span class="comment-date">{{ c.createdAt | date:'dd/MM/yyyy HH:mm' }}</span>
                </div>
                <div class="comment-body">{{ c.content }}</div>
              </div>
            }
          </div>
        }

        @if (ticket.status === 'OUVERT') {
          <div class="comment-waiting">
            <span class="material-icons">hourglass_empty</span>
            En attente de prise en charge par le support \u2014 vous pouvez d\xE9j\xE0 \xE9crire, le support vous r\xE9pondra d\xE8s que possible.
          </div>
        }
        @if (ticket.status !== 'FERME') {
          <div class="comment-form">
            <textarea
              [(ngModel)]="newComment"
              class="form-control"
              rows="3"
              placeholder="R\xE9pondre ou apporter des pr\xE9cisions\u2026"></textarea>
            <div class="comment-form-footer">
              <button class="btn-primary btn-sm" (click)="sendComment()"
                      [disabled]="sendingComment || !newComment.trim()">
                <span class="material-icons">send</span>
                {{ sendingComment ? 'Envoi...' : 'Envoyer' }}
              </button>
            </div>
          </div>
        } @else {
          <p class="comment-closed">Ticket cl\xF4tur\xE9 \u2014 discussion ferm\xE9e.</p>
        }
      </div>

      <app-audit-trail entityType="TICKET" [entityId]="ticket.id ?? null"></app-audit-trail>

    </div>
  }
</div>
`, styles: ['/* src/app/modules/helpdesk/components/ticket-detail/ticket-detail.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header .page-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header .page-title .material-icons {\n  font-size: 24px;\n  color: #0891b2;\n}\n.page-header .page-sub {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 16px;\n  font-size: 13.5px;\n  border: 1px solid transparent;\n}\n.alert .material-icons {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.alert.alert-success {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.alert.alert-warning {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.alert.alert-info {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: rgba(3, 105, 161, 0.2);\n}\n.loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.3;\n}\n.empty-state p {\n  font-size: 15px;\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  border: none;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-primary.btn-sm,\n.btn-secondary.btn-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.btn-primary.btn-sm .material-icons,\n.btn-secondary.btn-sm .material-icons {\n  font-size: 14px;\n}\n.btn-primary {\n  background: #0891b2;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #0e7490;\n}\n.btn-secondary {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon .material-icons {\n  font-size: 16px;\n}\n.btn-icon:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.btn-danger-icon {\n  color: var(--danger);\n  border-color: var(--danger);\n}\n.btn-icon.btn-danger-icon:hover {\n  background: var(--danger-bg);\n}\n.form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-sizing: border-box;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.form-control:focus {\n  outline: none;\n  border-color: #0891b2;\n  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);\n}\n.form-control::placeholder {\n  color: var(--text-muted);\n}\n.form-control-sm {\n  padding: 5px 8px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-size: 12px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.form-control-sm:focus {\n  outline: none;\n  border-color: #0891b2;\n}\ntextarea.form-control {\n  resize: vertical;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group label {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group .req {\n  color: var(--danger);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.toggle-label input {\n  cursor: pointer;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 9px 13px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.data-table td {\n  padding: 11px 13px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n  color: var(--text-primary);\n}\n.data-table tbody tr {\n  transition: background 0.1s;\n}\n.data-table tbody tr.clickable {\n  cursor: pointer;\n}\n.data-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table .empty-row {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 32px;\n  cursor: default;\n}\n.data-table .col-title {\n  max-width: 280px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n  width: 540px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-xl);\n}\n.modal.modal-lg {\n  width: 640px;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 17px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header h3 {\n  font-size: 15.5px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border-light);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  background: var(--bg-elevated);\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 12px;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge-status-OUVERT {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-status-EN_COURS {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-status-RESOLU {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-status-FERME {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.badge-prio-BASSE {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-prio-MOYENNE {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-prio-HAUTE {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-prio-CRITIQUE {\n  background: var(--danger-bg);\n  color: var(--danger);\n  font-weight: 700;\n}\n.badge-cat-INCIDENT {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge-cat-DEMANDE {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-cat-QUESTION {\n  background: rgba(109, 40, 217, 0.1);\n  color: #7C3AED;\n}\n.info-note {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--info-bg);\n  color: var(--info);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n}\n.info-note .material-icons {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.detail-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.title-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.title-wrap h1 {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ticket-num {\n  background: var(--info-bg);\n  color: var(--info);\n  padding: 2px 8px;\n  border-radius: var(--radius-sm);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.action-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n  flex-wrap: wrap;\n}\n.btn-action {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n}\n.btn-action .material-icons {\n  font-size: 16px;\n}\n.btn-action.btn-take {\n  background: var(--info);\n  color: white;\n}\n.btn-action.btn-take:hover {\n  opacity: 0.88;\n}\n.btn-action.btn-resolve {\n  background: var(--success);\n  color: white;\n}\n.btn-action.btn-resolve:hover {\n  opacity: 0.88;\n}\n.btn-action.btn-close {\n  background: var(--text-muted);\n  color: white;\n}\n.btn-action.btn-close:hover {\n  opacity: 0.88;\n}\n.btn-action.btn-reopen {\n  background: var(--warning);\n  color: white;\n}\n.btn-action.btn-reopen:hover {\n  opacity: 0.88;\n}\n.ticket-body {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.ticket-card {\n  padding: 22px;\n}\n.meta-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.meta-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.meta-label {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.desc-section {\n  margin-top: 12px;\n}\n.desc-section .meta-label {\n  display: block;\n  margin-bottom: 6px;\n}\n.desc-section .desc-text {\n  font-size: 14px;\n  color: var(--text-primary);\n  white-space: pre-wrap;\n  line-height: 1.65;\n}\n.edit-actions {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border-light);\n}\n.comments-card {\n  padding: 22px;\n}\n.comments-title {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 16px;\n}\n.comments-title .material-icons {\n  font-size: 18px;\n  color: #0891b2;\n}\n.no-comments {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0 0 16px;\n}\n.comments-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.comment {\n  background: var(--bg-elevated);\n  border-radius: var(--radius-sm);\n  padding: 12px 14px;\n  border-left: 3px solid var(--border);\n}\n.comment.comment-internal {\n  border-left-color: var(--warning);\n  background: var(--warning-bg);\n}\n.comment.comment-from-hub {\n  border-left-color: var(--info);\n  background: var(--info-bg);\n}\n.comment-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 6px;\n}\n.comment-header .comment-author {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.comment-header .comment-author .material-icons {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.comment-header .comment-date {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-left: auto;\n}\n.badge-internal {\n  background: var(--warning-bg);\n  color: var(--warning);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 10px;\n  text-transform: uppercase;\n}\n.badge-hub {\n  background: var(--info-bg);\n  color: var(--info);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 10px;\n  text-transform: uppercase;\n}\n.comment-body {\n  font-size: 13px;\n  color: var(--text-primary);\n  white-space: pre-wrap;\n  line-height: 1.5;\n}\n.comment-waiting {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 14px;\n  border-radius: 8px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  font-size: 13px;\n  line-height: 1.5;\n  margin-top: 4px;\n}\n.comment-waiting .material-icons {\n  font-size: 18px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.comment-closed {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-top: 12px;\n  font-style: italic;\n}\n.comment-form .comment-form-footer {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 8px;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=ticket-detail.component.css.map */\n'] }]
  }], () => [{ type: HelpdeskService }, { type: AuthService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketDetailComponent, { className: "TicketDetailComponent", filePath: "app/modules/helpdesk/components/ticket-detail/ticket-detail.component.ts", lineNumber: 16 });
})();
export {
  TicketDetailComponent
};
//# sourceMappingURL=chunk-BSKXJYUC.js.map

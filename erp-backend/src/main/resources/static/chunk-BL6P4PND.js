import {
  ConfigService,
  SYSTEM_ROLE_CODES
} from "./chunk-Y6UTENYI.js";
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/config/components/users/users.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function UsersComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 3);
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
function UsersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 3);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function UsersComponent_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.errorMsg = "");
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
  }
}
function UsersComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 13);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_17_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 16);
    \u0275\u0275text(2, "Aucun utilisateur");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_Conditional_17_For_16_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "MDP");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_17_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 17)(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 22);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 23);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, UsersComponent_Conditional_17_For_16_Conditional_18_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 25)(20, "button", 26);
    \u0275\u0275listener("click", function UsersComponent_Conditional_17_For_16_Template_button_click_20_listener() {
      const u_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(u_r4));
    });
    \u0275\u0275elementStart(21, "span", 3);
    \u0275\u0275text(22, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 27);
    \u0275\u0275listener("click", function UsersComponent_Conditional_17_For_16_Template_button_click_23_listener() {
      const u_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggle(u_r4));
    });
    \u0275\u0275elementStart(24, "span", 3);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("inactive-row", !u_r4.active);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((u_r4.fullName || u_r4.username).slice(0, 2).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r4.fullName || u_r4.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("@", u_r4.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("role-" + (u_r4.roleCode || "custom"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r4.roleLabel || ctx_r0.roleLabel(u_r4.roleCode), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", u_r4.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r4.active ? "Actif" : "Inactif");
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r4.mustChangePassword ? 18 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("btn-danger-icon", u_r4.active);
    \u0275\u0275property("title", u_r4.active ? "D\xE9sactiver" : "Activer");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.active ? "person_off" : "person");
  }
}
function UsersComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275conditionalCreate(14, UsersComponent_Conditional_17_Conditional_14_Template, 3, 0, "tr");
    \u0275\u0275repeaterCreate(15, UsersComponent_Conditional_17_For_16_Template, 26, 17, "tr", 15, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r0.users.length === 0 ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.users);
  }
}
function UsersComponent_Conditional_18_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "label");
    \u0275\u0275text(2, "Nom d'utilisateur ");
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_18_Conditional_9_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.form.username, $event) || (ctx_r0.form.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.username);
  }
}
function UsersComponent_Conditional_18_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    \u0275\u0275property("value", r_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", r_r7.label, " ", r_r7.isSystem ? "(syst\xE8me)" : "(custom)", " ");
  }
}
function UsersComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function UsersComponent_Conditional_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275listener("click", function UsersComponent_Conditional_18_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 30)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function UsersComponent_Conditional_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 32);
    \u0275\u0275conditionalCreate(9, UsersComponent_Conditional_18_Conditional_9_Template, 6, 1, "div", 33);
    \u0275\u0275elementStart(10, "div", 33)(11, "label");
    \u0275\u0275text(12, "Nom complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_18_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.fullName, $event) || (ctx_r0.form.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 33)(15, "label");
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_18_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.email, $event) || (ctx_r0.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 33)(19, "label");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_18_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.password, $event) || (ctx_r0.form.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 33)(23, "label");
    \u0275\u0275text(24, "R\xF4le ");
    \u0275\u0275elementStart(25, "span", 37);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_18_Template_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.roleId, $event) || (ctx_r0.form.roleId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(28, "option", 39);
    \u0275\u0275text(29, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(30, UsersComponent_Conditional_18_For_31_Template, 2, 3, "option", 40, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 41)(33, "button", 42);
    \u0275\u0275listener("click", function UsersComponent_Conditional_18_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275text(34, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 6);
    \u0275\u0275listener("click", function UsersComponent_Conditional_18_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(36, "span", 3);
    \u0275\u0275text(37, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Enregistrer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editingUser ? "Modifier l'utilisateur" : "Nouvel utilisateur");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r0.editingUser ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.editingUser ? "Nouveau mot de passe (laisser vide = inchang\xE9)" : "Mot de passe *");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.password);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.roleId);
    \u0275\u0275advance();
    \u0275\u0275property("value", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.roles);
  }
}
var UsersComponent = class _UsersComponent {
  constructor(configService, authService) {
    this.configService = configService;
    this.authService = authService;
    this.users = [];
    this.roles = [];
    this.loading = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.showModal = false;
    this.editingUser = null;
    this.form = {};
    this.SYSTEM_ROLE_CODES = SYSTEM_ROLE_CODES;
  }
  ngOnInit() {
    this.loadRoles();
    this.loadUsers();
  }
  loadUsers() {
    this.loading = true;
    this.configService.getAllUsers().subscribe({
      next: (u) => {
        this.users = u;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  loadRoles() {
    this.configService.getAllRoles().subscribe({
      next: (r) => this.roles = r
    });
  }
  openCreate() {
    this.editingUser = null;
    this.form = {};
    this.showModal = true;
  }
  openEdit(u) {
    this.editingUser = u;
    this.form = {
      fullName: u.fullName,
      email: u.email,
      roleId: u.roleId
    };
    this.showModal = true;
  }
  save() {
    if (!this.form.roleId) {
      this.errorMsg = "S\xE9lectionnez un r\xF4le";
      return;
    }
    if (!this.editingUser && !this.form.password) {
      this.errorMsg = "Le mot de passe est requis";
      return;
    }
    if (!this.editingUser && !this.form.username) {
      this.errorMsg = "Le nom d'utilisateur est requis";
      return;
    }
    const obs = this.editingUser?.id ? this.configService.updateUser(this.editingUser.id, this.form) : this.configService.createUser(this.form);
    obs.subscribe({
      next: () => {
        this.showModal = false;
        this.showSuccess(this.editingUser ? "Utilisateur modifi\xE9" : "Utilisateur cr\xE9\xE9");
        this.loadUsers();
      },
      error: (e) => {
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  toggle(u) {
    if (!confirm(`${u.active ? "D\xE9sactiver" : "Activer"} l'utilisateur ${u.username} ?`))
      return;
    this.configService.toggleUserActive(u.id).subscribe({
      next: () => {
        this.showSuccess("Statut mis \xE0 jour");
        this.loadUsers();
      },
      error: () => {
        this.errorMsg = "Erreur";
      }
    });
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 3e3);
  }
  roleLabel(code) {
    const map = {
      SUPER_ADMIN: "Super Admin",
      ADMIN: "Admin"
    };
    return code ? map[code] ?? code : "Custom";
  }
  static {
    this.\u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsersComponent)(\u0275\u0275directiveInject(ConfigService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-config-users"]], decls: 19, vars: 4, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "page-sub"], [1, "header-actions"], [1, "btn-primary", 3, "click"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "loading"], [1, "card"], [1, "modal-backdrop"], [3, "click"], [1, "material-icons", "spin"], [1, "data-table"], [3, "inactive-row"], ["colspan", "5", 1, "empty-row"], [1, "user-cell"], [1, "user-avatar"], [1, "user-name"], [1, "user-login"], [1, "text-muted"], [1, "role-badge"], [1, "status-badge"], ["title", "Doit changer son mot de passe", 1, "badge-warn"], [1, "actions-cell"], ["title", "Modifier", 1, "btn-icon", 3, "click"], [1, "btn-icon", 3, "click", "title"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "autocomplete", "new-password", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "req"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "value"], [3, "value"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], ["type", "text", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2)(4, "span", 3);
        \u0275\u0275text(5, "manage_accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Utilisateurs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Cr\xE9ez et g\xE9rez les comptes utilisateurs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
        \u0275\u0275listener("click", function UsersComponent_Template_button_click_10_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275elementStart(11, "span", 3);
        \u0275\u0275text(12, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Nouvel utilisateur ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(14, UsersComponent_Conditional_14_Template, 4, 1, "div", 7);
        \u0275\u0275conditionalCreate(15, UsersComponent_Conditional_15_Template, 6, 1, "div", 8);
        \u0275\u0275conditionalCreate(16, UsersComponent_Conditional_16_Template, 4, 0, "div", 9)(17, UsersComponent_Conditional_17_Template, 17, 1, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(18, UsersComponent_Conditional_18_Template, 39, 8, "div", 11);
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275conditional(ctx.successMsg ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 16 : 17);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showModal ? 18 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--primary);\n}\n.page-header[_ngcontent-%COMP%]   .page-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 16px;\n  font-size: 13.5px;\n  border: 1px solid transparent;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  opacity: 0.6;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.alert.alert-warning[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.alert.alert-info[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: rgba(3, 105, 161, 0.2);\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.3;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-primary.btn-sm[_ngcontent-%COMP%], \n.btn-secondary.btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.btn-primary.btn-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary.btn-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.btn-danger-icon[_ngcontent-%COMP%] {\n  color: var(--danger);\n  border-color: var(--danger);\n}\n.btn-icon.btn-danger-icon[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-sizing: border-box;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 13px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 13px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n  color: var(--text-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.1s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 32px;\n}\n.data-table[_ngcontent-%COMP%]   .inactive-row[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.text-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n}\n.select-group[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 180px;\n}\n.badge-active[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-active.inactive[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.badge-code[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-size: 11px;\n  font-family: monospace;\n  border: 1px solid var(--border);\n}\n.badge-system[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-custom[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-warn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  background: var(--warning-bg);\n  color: var(--warning);\n  margin-left: 4px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: transparent;\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.role-badge.role-SUPER_ADMIN[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: transparent;\n}\n.role-badge.role-ADMIN[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: transparent;\n}\n.role-badge.role-SUPER_AUDITEUR[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: transparent;\n}\n.role-badge.role-AUDITEUR[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: transparent;\n}\n.role-badge.role-CONTROLEUR[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: transparent;\n}\n.groups-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.group-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.group-card.expanded[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n}\n.group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  cursor: pointer;\n  transition: var(--ease);\n}\n.group-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.group-header[_ngcontent-%COMP%]   .group-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.group-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.group-header[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: var(--primary);\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.group-header[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n}\n.group-header[_ngcontent-%COMP%]   .group-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.group-header[_ngcontent-%COMP%]   .group-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 2px;\n}\n.group-header[_ngcontent-%COMP%]   .company-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.group-header[_ngcontent-%COMP%]   .group-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.companies-body[_ngcontent-%COMP%] {\n  padding: 0 18px 18px;\n  border-top: 1px solid var(--border-light);\n}\n.companies-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 12px;\n}\n.companies-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.companies-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.companies-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.companies-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.company-name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.company-name-cell[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.no-company[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  padding: 16px 0;\n  font-size: 13px;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: var(--primary);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.user-login[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.roles-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.role-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.role-card.system-role[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--info);\n}\n.role-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.role-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.role-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.role-info[_ngcontent-%COMP%]   .role-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.role-info[_ngcontent-%COMP%]   .role-code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-family: monospace;\n}\n.role-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: flex-end;\n}\n.system-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.perm-summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.perm-chip[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border-radius: 10px;\n  font-size: 11px;\n  border: 1px solid var(--border);\n}\n.role-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n  margin-top: 4px;\n}\n.perm-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.perm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.perm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.perm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 13px;\n  border: 1px solid var(--border);\n  font-size: 13px;\n}\n.perm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.perm-table[_ngcontent-%COMP%]   .mod-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  color: var(--primary);\n}\n.perm-table[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.perm-table[_ngcontent-%COMP%]   .col-resource[_ngcontent-%COMP%] {\n  min-width: 180px;\n  text-align: left;\n}\n.perm-table[_ngcontent-%COMP%]   .col-action[_ngcontent-%COMP%] {\n  min-width: 72px;\n  text-align: center;\n}\n.perm-table[_ngcontent-%COMP%]   .col-all[_ngcontent-%COMP%] {\n  min-width: 56px;\n  text-align: center;\n}\n.perm-table[_ngcontent-%COMP%]   .module-header-row[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.perm-table[_ngcontent-%COMP%]   .module-header-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--border);\n}\n.perm-table[_ngcontent-%COMP%]   .module-header-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--primary);\n  padding: 10px 13px;\n}\n.perm-table[_ngcontent-%COMP%]   .module-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--primary);\n  flex-shrink: 0;\n}\n.perm-table[_ngcontent-%COMP%]   .module-action-cell[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.perm-table[_ngcontent-%COMP%]   .partial-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1px 6px;\n  border-radius: 8px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  font-size: 10px;\n  font-weight: 600;\n}\n.perm-table[_ngcontent-%COMP%]   .resource-row[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n}\n.perm-table[_ngcontent-%COMP%]   .resource-row[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.perm-table[_ngcontent-%COMP%]   .res-cell[_ngcontent-%COMP%] {\n  padding-left: 24px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.perm-table[_ngcontent-%COMP%]   .res-indent[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-right: 4px;\n  font-size: 12px;\n}\n.perm-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n}\n.perm-section-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.modal-perm[_ngcontent-%COMP%] {\n  width: 860px;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 13px;\n  background: var(--info-bg);\n  color: var(--info);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n}\n.info-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n  width: 480px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-xl);\n}\n.modal.modal-lg[_ngcontent-%COMP%] {\n  width: 640px;\n}\n.modal.modal-xl[_ngcontent-%COMP%] {\n  width: 780px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 17px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15.5px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border-light);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  background: var(--bg-elevated);\n}\n/*# sourceMappingURL=users.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-config-users", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div>
      <h1 class="page-title"><span class="material-icons">manage_accounts</span> Utilisateurs</h1>
      <p class="page-sub">Cr\xE9ez et g\xE9rez les comptes utilisateurs</p>
    </div>
    <div class="header-actions">
      <button class="btn-primary" (click)="openCreate()">
        <span class="material-icons">person_add</span> Nouvel utilisateur
      </button>
    </div>
  </div>

  @if (successMsg) { <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div> }
  @if (errorMsg)   { <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }} <button (click)="errorMsg=''">\xD7</button></div> }

  @if (loading) {
    <div class="loading"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else {
    <div class="card">
      <table class="data-table">
        <thead>
          <tr>
            <th>Utilisateur</th>
            <th>Email</th>
            <th>R\xF4le</th>
            <th>Statut</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @if (users.length === 0) {
            <tr><td colspan="5" class="empty-row">Aucun utilisateur</td></tr>
          }
          @for (u of users; track u.id) {
            <tr [class.inactive-row]="!u.active">
              <td>
                <div class="user-cell">
                  <div class="user-avatar">{{ (u.fullName || u.username).slice(0,2).toUpperCase() }}</div>
                  <div>
                    <div class="user-name">{{ u.fullName || u.username }}</div>
                    <div class="user-login">&#64;{{ u.username }}</div>
                  </div>
                </div>
              </td>
              <td class="text-muted">{{ u.email || '\u2014' }}</td>
              <td>
                <span class="role-badge" [class]="'role-' + (u.roleCode || 'custom')">
                  {{ u.roleLabel || roleLabel(u.roleCode) }}
                </span>
              </td>
              <td>
                <span class="status-badge" [class.active]="u.active">{{ u.active ? 'Actif' : 'Inactif' }}</span>
                @if (u.mustChangePassword) {
                  <span class="badge-warn" title="Doit changer son mot de passe">MDP</span>
                }
              </td>
              <td class="actions-cell">
                <button class="btn-icon" (click)="openEdit(u)" title="Modifier"><span class="material-icons">edit</span></button>
                <button class="btn-icon" [class.btn-danger-icon]="u.active" (click)="toggle(u)"
                        [title]="u.active ? 'D\xE9sactiver' : 'Activer'">
                  <span class="material-icons">{{ u.active ? 'person_off' : 'person' }}</span>
                </button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }
</div>

@if (showModal) {
  <div class="modal-backdrop" (click)="showModal=false">
    <div class="modal" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>{{ editingUser ? 'Modifier l\\'utilisateur' : 'Nouvel utilisateur' }}</h3>
        <button class="btn-icon" (click)="showModal=false"><span class="material-icons">close</span></button>
      </div>
      <div class="modal-body">
        @if (!editingUser) {
          <div class="form-group">
            <label>Nom d'utilisateur <span class="req">*</span></label>
            <input type="text" [(ngModel)]="form.username" class="form-control" autocomplete="off" />
          </div>
        }
        <div class="form-group">
          <label>Nom complet</label>
          <input type="text" [(ngModel)]="form.fullName" class="form-control" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" [(ngModel)]="form.email" class="form-control" />
        </div>
        <div class="form-group">
          <label>{{ editingUser ? 'Nouveau mot de passe (laisser vide = inchang\xE9)' : 'Mot de passe *' }}</label>
          <input type="password" [(ngModel)]="form.password" class="form-control" autocomplete="new-password" />
        </div>
        <div class="form-group">
          <label>R\xF4le <span class="req">*</span></label>
          <select [(ngModel)]="form.roleId" class="form-control">
            <option [value]="undefined" disabled>\u2014 S\xE9lectionner \u2014</option>
            @for (r of roles; track r.id) {
              <option [value]="r.id">
                {{ r.label }} {{ r.isSystem ? '(syst\xE8me)' : '(custom)' }}
              </option>
            }
          </select>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="showModal=false">Annuler</button>
        <button class="btn-primary" (click)="save()">
          <span class="material-icons">save</span> Enregistrer
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/config/components/users/users.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header .page-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header .page-title .material-icons {\n  font-size: 24px;\n  color: var(--primary);\n}\n.page-header .page-sub {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 16px;\n  font-size: 13.5px;\n  border: 1px solid transparent;\n}\n.alert .material-icons {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.alert button {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  opacity: 0.6;\n}\n.alert.alert-success {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.alert.alert-warning {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.alert.alert-info {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: rgba(3, 105, 161, 0.2);\n}\n.loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.3;\n}\n.empty-state p {\n  font-size: 15px;\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  border: none;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-primary.btn-sm,\n.btn-secondary.btn-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.btn-primary.btn-sm .material-icons,\n.btn-secondary.btn-sm .material-icons {\n  font-size: 14px;\n}\n.btn-primary {\n  background: var(--primary);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-secondary {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon .material-icons {\n  font-size: 16px;\n}\n.btn-icon:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.btn-danger-icon {\n  color: var(--danger);\n  border-color: var(--danger);\n}\n.btn-icon.btn-danger-icon:hover {\n  background: var(--danger-bg);\n}\n.form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-sizing: border-box;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.form-control:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.form-control::placeholder {\n  color: var(--text-muted);\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group label {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group .req {\n  color: var(--danger);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.toggle-label input {\n  cursor: pointer;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 9px 13px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.data-table td {\n  padding: 11px 13px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n  color: var(--text-primary);\n}\n.data-table tbody tr {\n  transition: background 0.1s;\n}\n.data-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table .empty-row {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 32px;\n}\n.data-table .inactive-row {\n  opacity: 0.5;\n}\n.actions-cell {\n  display: flex;\n  gap: 6px;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.text-mono {\n  font-family: monospace;\n  font-size: 12px;\n}\n.select-group {\n  width: auto;\n  min-width: 180px;\n}\n.badge-active {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-active.inactive {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.badge-code {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-size: 11px;\n  font-family: monospace;\n  border: 1px solid var(--border);\n}\n.badge-system {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-custom {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-warn {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  background: var(--warning-bg);\n  color: var(--warning);\n  margin-left: 4px;\n}\n.status-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.status-badge.active {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: transparent;\n}\n.role-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.role-badge.role-SUPER_ADMIN {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: transparent;\n}\n.role-badge.role-ADMIN {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: transparent;\n}\n.role-badge.role-SUPER_AUDITEUR {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: transparent;\n}\n.role-badge.role-AUDITEUR {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: transparent;\n}\n.role-badge.role-CONTROLEUR {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: transparent;\n}\n.groups-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.group-card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.group-card.expanded {\n  border-color: var(--primary);\n}\n.group-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  cursor: pointer;\n  transition: var(--ease);\n}\n.group-header:hover {\n  background: var(--bg-hover);\n}\n.group-header .group-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.group-header .expand-icon {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.group-header .group-icon {\n  width: 36px;\n  height: 36px;\n  background: var(--primary);\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.group-header .group-icon .material-icons {\n  color: white;\n  font-size: 18px;\n}\n.group-header .group-name {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.group-header .group-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 2px;\n}\n.group-header .company-count {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.group-header .group-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.companies-body {\n  padding: 0 18px 18px;\n  border-top: 1px solid var(--border-light);\n}\n.companies-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 12px;\n}\n.companies-table th {\n  padding: 8px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.companies-table td {\n  padding: 10px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.companies-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.companies-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.company-name-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.company-name-cell .material-icons {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.no-company {\n  color: var(--text-muted);\n  padding: 16px 0;\n  font-size: 13px;\n}\n.user-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-avatar {\n  width: 34px;\n  height: 34px;\n  background: var(--primary);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.user-login {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.roles-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.role-card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.role-card.system-role {\n  border-left: 3px solid var(--info);\n}\n.role-card-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.role-icon {\n  font-size: 24px;\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.role-info {\n  flex: 1;\n}\n.role-info .role-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.role-info .role-code {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-family: monospace;\n}\n.role-badges {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: flex-end;\n}\n.system-note {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.perm-summary {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.perm-chip {\n  padding: 2px 8px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border-radius: 10px;\n  font-size: 11px;\n  border: 1px solid var(--border);\n}\n.role-card-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n  margin-top: 4px;\n}\n.perm-table-wrap {\n  overflow-x: auto;\n}\n.perm-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.perm-table th,\n.perm-table td {\n  padding: 8px 13px;\n  border: 1px solid var(--border);\n  font-size: 13px;\n}\n.perm-table th {\n  background: var(--bg-elevated);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.perm-table .mod-cell {\n  font-weight: 600;\n  font-size: 13px;\n  color: var(--primary);\n}\n.perm-table .text-center {\n  text-align: center;\n}\n.perm-table .col-resource {\n  min-width: 180px;\n  text-align: left;\n}\n.perm-table .col-action {\n  min-width: 72px;\n  text-align: center;\n}\n.perm-table .col-all {\n  min-width: 56px;\n  text-align: center;\n}\n.perm-table .module-header-row {\n  background: var(--bg-elevated);\n}\n.perm-table .module-header-row td {\n  border-top: 2px solid var(--border);\n}\n.perm-table .module-header-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--primary);\n  padding: 10px 13px;\n}\n.perm-table .module-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--primary);\n  flex-shrink: 0;\n}\n.perm-table .module-action-cell {\n  background: var(--bg-elevated);\n}\n.perm-table .partial-badge {\n  display: inline-block;\n  padding: 1px 6px;\n  border-radius: 8px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  font-size: 10px;\n  font-weight: 600;\n}\n.perm-table .resource-row {\n  background: var(--bg-surface);\n}\n.perm-table .resource-row:hover {\n  background: var(--bg-hover);\n}\n.perm-table .res-cell {\n  padding-left: 24px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.perm-table .res-indent {\n  color: var(--text-muted);\n  margin-right: 4px;\n  font-size: 12px;\n}\n.perm-section-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n}\n.perm-section-title .material-icons {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.modal-perm {\n  width: 860px;\n}\n.info-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 13px;\n  background: var(--info-bg);\n  color: var(--info);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n}\n.info-banner .material-icons {\n  font-size: 16px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n  width: 480px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-xl);\n}\n.modal.modal-lg {\n  width: 640px;\n}\n.modal.modal-xl {\n  width: 780px;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 17px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header h3 {\n  font-size: 15.5px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border-light);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  background: var(--bg-elevated);\n}\n/*# sourceMappingURL=users.component.css.map */\n'] }]
  }], () => [{ type: ConfigService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "app/modules/config/components/users/users.component.ts", lineNumber: 14 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-BL6P4PND.js.map

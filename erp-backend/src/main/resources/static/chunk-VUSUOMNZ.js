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
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/hr/components/contract-detail/contract-detail.component.ts
function ContractDetailComponent_div_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", ctx_r1.jobName, "", ctx_r1.jobName && ctx_r1.departmentName ? " \u2014 " : "", "", ctx_r1.departmentName);
  }
}
function ContractDetailComponent_div_0_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span");
    \u0275\u0275text(2, "Indemnit\xE9 transport");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.fmt(c_r3.primeTransport), " FCFA");
  }
}
function ContractDetailComponent_div_0_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span");
    \u0275\u0275text(2, "Indemnit\xE9 logement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.fmt(c_r3.primeLogement), " FCFA");
  }
}
function ContractDetailComponent_div_0_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span");
    \u0275\u0275text(2, "Ind. repr\xE9sentation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.fmt(c_r3.primeRepresentation), " FCFA");
  }
}
function ContractDetailComponent_div_0_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span");
    \u0275\u0275text(2, "Prime de fonction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.fmt(c_r3.primeFonction), " FCFA");
  }
}
function ContractDetailComponent_div_0_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span");
    \u0275\u0275text(2, "Prime d'anciennet\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.fmt(c_r3.primeAnciennete), " FCFA");
  }
}
function ContractDetailComponent_div_0_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span");
    \u0275\u0275text(2, "Autres primes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.fmt(c_r3.autresPrimes), " FCFA");
  }
}
function ContractDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
    \u0275\u0275listener("click", function ContractDetailComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Retour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 3);
    \u0275\u0275listener("click", function ContractDetailComponent_div_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275elementStart(7, "span", 4);
    \u0275\u0275text(8, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Imprimer le contrat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "div")(13, "div", 7);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 8);
    \u0275\u0275text(16);
    \u0275\u0275elementStart(17, "span", 9);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, ContractDetailComponent_div_0_Conditional_19_Template, 2, 3, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 11);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 12)(23, "div", 13)(24, "div", 14);
    \u0275\u0275text(25, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 15)(27, "span");
    \u0275\u0275text(28, "Nom complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 15)(32, "span");
    \u0275\u0275text(33, "Matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "strong");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 15)(37, "span");
    \u0275\u0275text(38, "N\xE9(e) le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 15)(42, "span");
    \u0275\u0275text(43, "Nationalit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "strong");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 15)(47, "span");
    \u0275\u0275text(48, "CNI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "strong");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 15)(52, "span");
    \u0275\u0275text(53, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "strong");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 13)(57, "div", 14);
    \u0275\u0275text(58, "Contrat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 15)(60, "span");
    \u0275\u0275text(61, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "strong");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 15)(65, "span");
    \u0275\u0275text(66, "Poste");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "strong");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 15)(70, "span");
    \u0275\u0275text(71, "D\xE9partement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "strong");
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 15)(75, "span");
    \u0275\u0275text(76, "Cat\xE9gorie professionnelle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "strong");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 15)(80, "span");
    \u0275\u0275text(81, "\xC9chelon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "strong");
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 15)(85, "span");
    \u0275\u0275text(86, "Date de d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "strong");
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 15)(90, "span");
    \u0275\u0275text(91, "Date de fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "strong");
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(94, "div", 16)(95, "div", 14);
    \u0275\u0275text(96, "R\xE9mun\xE9ration mensuelle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 15)(98, "span");
    \u0275\u0275text(99, "Salaire de base");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "strong");
    \u0275\u0275text(101);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(102, ContractDetailComponent_div_0_Conditional_102_Template, 5, 1, "div", 15);
    \u0275\u0275conditionalCreate(103, ContractDetailComponent_div_0_Conditional_103_Template, 5, 1, "div", 15);
    \u0275\u0275conditionalCreate(104, ContractDetailComponent_div_0_Conditional_104_Template, 5, 1, "div", 15);
    \u0275\u0275conditionalCreate(105, ContractDetailComponent_div_0_Conditional_105_Template, 5, 1, "div", 15);
    \u0275\u0275conditionalCreate(106, ContractDetailComponent_div_0_Conditional_106_Template, 5, 1, "div", 15);
    \u0275\u0275conditionalCreate(107, ContractDetailComponent_div_0_Conditional_107_Template, 5, 1, "div", 15);
    \u0275\u0275elementStart(108, "div", 17)(109, "span");
    \u0275\u0275text(110, "Brut estim\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "strong");
    \u0275\u0275text(112);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(c_r3.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.employee == null ? null : ctx_r1.employee.lastName, " ", ctx_r1.employee == null ? null : ctx_r1.employee.firstName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r1.employee == null ? null : ctx_r1.employee.matricule, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.jobName || ctx_r1.departmentName ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("ok", c_r3.state === "RUNNING")("done", c_r3.state === "CLOSED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(c_r3.state));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", ctx_r1.employee == null ? null : ctx_r1.employee.lastName, " ", ctx_r1.employee == null ? null : ctx_r1.employee.firstName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.employee == null ? null : ctx_r1.employee.matricule) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.fmtDate(ctx_r1.employee == null ? null : ctx_r1.employee.birthDate), "", (ctx_r1.employee == null ? null : ctx_r1.employee.birthPlace) ? " \xE0 " + (ctx_r1.employee == null ? null : ctx_r1.employee.birthPlace) : "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.employee == null ? null : ctx_r1.employee.nationality) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.employee == null ? null : ctx_r1.employee.cni) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.employee == null ? null : ctx_r1.employee.address) || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(c_r3.type));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.jobName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.departmentName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.categoryName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.echelonName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(c_r3.dateStart));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r3.type === "CDI" ? "Ind\xE9termin\xE9e" : ctx_r1.fmtDate(c_r3.dateEnd));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.fmt(c_r3.wage), " FCFA");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.primeTransport ? 102 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.primeLogement ? 103 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.primeRepresentation ? 104 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.primeFonction ? 105 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.primeAnciennete ? 106 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.autresPrimes ? 107 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.fmt(ctx_r1.brut(c_r3)), " FCFA");
  }
}
var ContractDetailComponent = class _ContractDetailComponent {
  constructor(hr, auth, route, router, companyService) {
    this.hr = hr;
    this.auth = auth;
    this.route = route;
    this.router = router;
    this.companyService = companyService;
    this.departmentName = "";
    this.jobName = "";
    this.categoryName = "";
    this.echelonName = "";
  }
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");
    const companyId = this.auth.getCompanyId();
    forkJoin({
      contracts: this.hr.getContracts(companyId),
      employees: this.hr.getEmployees(companyId),
      departments: this.hr.getDepartments(companyId),
      jobs: this.hr.getJobs(companyId),
      categories: this.hr.getProfessionalCategories(companyId),
      echelons: this.hr.getEchelons(companyId)
    }).subscribe(({ contracts, employees, departments, jobs, categories, echelons }) => {
      this.contract = contracts.find((c) => c.id === this.id);
      if (!this.contract)
        return;
      this.employee = employees.find((e) => e.id === this.contract.employeeId);
      const dept = this.employee?.departmentId ? departments.find((d) => d.id === this.employee.departmentId) : void 0;
      const job = this.employee?.jobId ? jobs.find((j) => j.id === this.employee.jobId) : void 0;
      const cat = this.contract.professionalCategory ? categories.find((c) => c.code === this.contract.professionalCategory) : void 0;
      const ech = this.contract.echelonId ? echelons.find((e) => e.id === this.contract.echelonId) : void 0;
      this.departmentName = dept?.name || "";
      this.jobName = job?.name || "";
      this.categoryName = cat ? `${cat.code} \u2014 ${cat.name}` : this.contract.professionalCategory || "";
      this.echelonName = ech ? `${ech.code} \u2014 ${ech.name}` : "";
    });
  }
  back() {
    this.router.navigate(["/hr/contracts"]);
  }
  fmt(n) {
    return new Intl.NumberFormat("fr-FR").format(Math.round(n || 0));
  }
  brut(c) {
    return (+c.wage || 0) + (+c.primeTransport || 0) + (+c.primeLogement || 0) + (+c.primeRepresentation || 0) + (+c.primeFonction || 0) + (+c.primeAnciennete || 0) + (+c.autresPrimes || 0);
  }
  stateLabel(s) {
    return s === "RUNNING" ? "En cours" : s === "CLOSED" ? "Termin\xE9" : s === "CANCELLED" ? "Annul\xE9" : "Brouillon";
  }
  typeLabel(t) {
    return { CDI: "Contrat \xE0 Dur\xE9e Ind\xE9termin\xE9e (CDI)", CDD: "Contrat \xE0 Dur\xE9e D\xE9termin\xE9e (CDD)", STAGE: "Contrat de Stage", INTERIM: "Contrat d'Int\xE9rim" }[t || ""] || (t || "");
  }
  fmtDate(d) {
    if (!d)
      return "\u2014";
    try {
      return new Date(d).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
    } catch (e) {
      return d;
    }
  }
  h(s) {
    if (s == null)
      return "";
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  print() {
    if (!this.contract || !this.employee)
      return;
    const c = this.contract;
    const e = this.employee;
    const company = this.companyService.getCached();
    const logo = this.companyService.getCachedLogoDataUrl();
    const co = {
      name: company?.name || "",
      sigle: company?.sigle || "",
      rccm: company?.rccm || "",
      nif: company?.nif || "",
      adresse: company?.adresse || "",
      tel: company?.telephone || ""
    };
    const logoHtml = logo ? `<img src="${logo}" class="co-logo" alt="logo">` : "";
    const isCDI = c.type === "CDI";
    const civilite = e.gender === "F" ? "Madame" : "Monsieur";
    const neNee = e.gender === "F" ? "n\xE9e" : "n\xE9";
    const brutTotal = this.brut(c);
    const dureeArticle = isCDI ? `Le pr\xE9sent contrat est conclu pour une dur\xE9e ind\xE9termin\xE9e \xE0 compter du <strong>${this.fmtDate(c.dateStart)}</strong>. Il pourra y \xEAtre mis fin par l'une ou l'autre des parties, dans le respect des dispositions l\xE9gales et r\xE9glementaires en vigueur, notamment en mati\xE8re de pr\xE9avis.` : `Le pr\xE9sent contrat est conclu pour une dur\xE9e d\xE9termin\xE9e, \xE0 compter du <strong>${this.fmtDate(c.dateStart)}</strong> jusqu'au <strong>${this.fmtDate(c.dateEnd)}</strong>. Il prendra fin de plein droit \xE0 cette date, sans qu'il soit besoin d'un pr\xE9avis.`;
    const indemnitesRows = [
      ["Indemnit\xE9 de transport", c.primeTransport],
      ["Indemnit\xE9 de logement", c.primeLogement],
      ["Indemnit\xE9 de repr\xE9sentation", c.primeRepresentation],
      ["Prime de fonction", c.primeFonction],
      ["Prime d'anciennet\xE9", c.primeAnciennete],
      ["Autres primes", c.autresPrimes]
    ].filter(([, v]) => v > 0).map(([label, v]) => `<div class="rem-row"><span>${label}</span><span>${this.fmt(v)} FCFA</span></div>`).join("");
    const typeShort = { CDI: "CDI", CDD: "CDD", STAGE: "STAGE", INTERIM: "INT\xC9RIM" }[c.type || ""] || (c.type || "");
    const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<title>Contrat de travail</title>
<style>
* { box-sizing:border-box; margin:0; padding:0; }
body { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10pt; color: #1a1a1a; background: white; line-height: 1.55; }
.doc { max-width: 200mm; margin: 0 auto; }
.header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom: 2.5px solid #017E84; padding-bottom: 5mm; margin-bottom: 7mm; }
.co-logo { max-height: 46px; max-width: 120px; object-fit: contain; display:block; margin-bottom: 5px; }
.co-name { font-size: 12.5pt; font-weight: 700; color: #111; }
.co-sigle { font-size: 9pt; font-weight: 500; color: #666; }
.co-info { font-size: 8pt; color: #555; margin-top: 1px; }
.co-lbl { font-weight: 600; color: #222; }
.title-block { text-align:right; padding-top: 2px; }
.doc-type { font-size: 15pt; font-weight: 800; letter-spacing: .3px; color: #111; }
.doc-badge { display:inline-block; margin-top: 4px; padding: 2px 10px; border-radius: 20px; background:#017E84; color:white; font-size: 8.5pt; font-weight: 700; letter-spacing: .5px; }
.doc-ref { font-size: 8pt; color: #888; margin-top: 5px; }
.section-lead { font-size: 9pt; color:#666; margin-bottom: 3mm; }
.parties-grid { display:flex; gap: 6mm; margin-bottom: 7mm; }
.party-card { flex:1; border:1px solid #e0e0e0; border-radius: 5px; overflow:hidden; page-break-inside: avoid; }
.party-head { background:#017E84; color:white; font-size: 8pt; font-weight:700; letter-spacing:.5px; text-transform:uppercase; padding: 4px 10px; }
.party-body { padding: 8px 10px; font-size: 9pt; }
.party-name { font-weight: 700; font-size: 9.8pt; color:#111; margin-bottom: 3px; }
.party-row { display:flex; justify-content:space-between; gap:8px; padding: 2px 0; border-bottom: 1px dotted #eee; }
.party-row span:first-child { color:#888; font-size: 8.3pt; }
.party-row span:last-child { text-align:right; font-weight: 500; }
h2.article { font-size: 10pt; font-weight: 700; color: #017E84; margin: 5.5mm 0 2mm; padding-bottom: 1.5mm; border-bottom: 1px solid #e5e5e5; page-break-after: avoid; }
p { text-align: justify; margin-bottom: 2mm; font-size: 9.6pt; page-break-inside: avoid; }
.rem-block { margin: 2mm 0 3mm; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden; page-break-inside: avoid; }
.rem-row { display:flex; justify-content:space-between; font-size: 9.3pt; padding: 4px 10px; border-bottom: 1px solid #f0f0f0; }
.rem-row:nth-child(even) { background: #fafcfc; }
.rem-total { display:flex; justify-content:space-between; font-weight: 800; font-size: 10.3pt; padding: 6px 10px; background:#017E84; color:white; }
.lettres { font-size: 8.8pt; font-style: italic; color:#444; margin: 2mm 0 4mm; }
.closing { display:flex; justify-content:space-between; margin-top: 8mm; font-size: 9.3pt; }
.signatures { display:flex; justify-content:space-between; gap: 10mm; margin-top: 8mm; page-break-inside: avoid; }
.sig { flex:1; text-align:center; }
.sig-lbl { font-size: 8.8pt; font-weight:700; margin-bottom: 13mm; }
.sig-area { height: 15mm; border: 1px solid #ccc; border-radius: 3px; background: #fdfdfd; }
.footer-note { font-size: 7pt; color:#aaa; text-align:center; margin-top: 8mm; border-top: 1px solid #eee; padding-top: 2mm; }
@page { margin: 15mm 17mm; size: A4 portrait; }
@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
@media screen { .doc { padding: 15mm 17mm; } }
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
      <div class="doc-type">CONTRAT DE TRAVAIL</div>
      <div class="doc-badge">${this.h(typeShort)}</div>
      <div class="doc-ref">Matricule : ${this.h(e.matricule)}</div>
    </div>
  </div>

  <div class="section-lead">Entre les soussign\xE9s, il a \xE9t\xE9 convenu et arr\xEAt\xE9 ce qui suit :</div>

  <div class="parties-grid">
    <div class="party-card">
      <div class="party-head">L'Employeur</div>
      <div class="party-body">
        <div class="party-name">${this.h(co.name)}</div>
        ${co.rccm ? `<div class="party-row"><span>RCCM</span><span>${this.h(co.rccm)}</span></div>` : ""}
        ${co.nif ? `<div class="party-row"><span>NIF</span><span>${this.h(co.nif)}</span></div>` : ""}
        ${co.adresse ? `<div class="party-row"><span>Si\xE8ge social</span><span>${this.h(co.adresse)}</span></div>` : ""}
      </div>
    </div>
    <div class="party-card">
      <div class="party-head">L'Employ\xE9(e)</div>
      <div class="party-body">
        <div class="party-name">${civilite} ${this.h(e.lastName)} ${this.h(e.firstName)}</div>
        <div class="party-row"><span>N\xE9(e) le</span><span>${this.fmtDate(e.birthDate)}${e.birthPlace ? ` \xE0 ${this.h(e.birthPlace)}` : ""}</span></div>
        <div class="party-row"><span>Nationalit\xE9</span><span>${this.h(e.nationality) || "\u2014"}</span></div>
        <div class="party-row"><span>CNI n\xB0</span><span>${this.h(e.cni) || "\u2014"}</span></div>
        <div class="party-row"><span>Domicile</span><span>${this.h(e.address) || "\u2014"}</span></div>
      </div>
    </div>
  </div>

  <h2 class="article">Article 1 \u2014 Engagement</h2>
  <p>L'Employeur engage l'Employ\xE9(e) en qualit\xE9 de <strong>${this.h(this.jobName) || "\u2014"}</strong>${this.departmentName ? `, au sein du d\xE9partement ${this.h(this.departmentName)}` : ""}, relevant de la cat\xE9gorie professionnelle <strong>${this.h(this.categoryName) || "\u2014"}</strong>${this.echelonName ? `, \xE9chelon <strong>${this.h(this.echelonName)}</strong>` : ""} de la grille cat\xE9gorielle en vigueur.</p>

  <h2 class="article">Article 2 \u2014 Dur\xE9e du contrat</h2>
  <p>${dureeArticle}</p>

  <h2 class="article">Article 3 \u2014 R\xE9mun\xE9ration</h2>
  <p>En contrepartie de son travail, l'Employ\xE9(e) percevra une r\xE9mun\xE9ration mensuelle brute compos\xE9e comme suit :</p>
  <div class="rem-block">
    <div class="rem-row"><span>Salaire de base</span><span>${this.fmt(c.wage)} FCFA</span></div>
    ${indemnitesRows}
    <div class="rem-total"><span>SALAIRE BRUT MENSUEL ESTIM\xC9</span><span>${this.fmt(brutTotal)} FCFA</span></div>
  </div>
  <div class="lettres">Soit la somme de : <strong>${numberToFrenchWords(Math.round(brutTotal))} Francs CFA</strong>, sous r\xE9serve des retenues l\xE9gales et conventionnelles (CNPS, IRPP, CFC, etc.).</div>

  <h2 class="article">Article 4 \u2014 Lieu de travail et horaires</h2>
  <p>L'Employ\xE9(e) exercera ses fonctions au lieu d'implantation de l'Employeur, ou en tout autre lieu que les n\xE9cessit\xE9s du service pourraient exiger. Les horaires de travail sont ceux en vigueur au sein de l'entreprise, conform\xE9ment \xE0 la l\xE9gislation du travail applicable en R\xE9publique du Cameroun.</p>

  <h2 class="article">Article 5 \u2014 Obligations des parties</h2>
  <p>L'Employ\xE9(e) s'engage \xE0 ex\xE9cuter son travail avec diligence, loyaut\xE9 et discr\xE9tion, et \xE0 se conformer au r\xE8glement int\xE9rieur de l'entreprise. L'Employeur s'engage \xE0 fournir \xE0 l'Employ\xE9(e) les moyens n\xE9cessaires \xE0 l'ex\xE9cution de sa mission et \xE0 lui verser la r\xE9mun\xE9ration convenue aux \xE9ch\xE9ances pr\xE9vues.</p>

  <h2 class="article">Article 6 \u2014 R\xE9siliation</h2>
  <p>Le pr\xE9sent contrat pourra \xEAtre r\xE9sili\xE9 dans les conditions pr\xE9vues par le Code du travail camerounais et les conventions collectives applicables, notamment en cas de faute grave, de d\xE9mission, ou d'arriv\xE9e du terme pour les contrats \xE0 dur\xE9e d\xE9termin\xE9e.</p>

  <div class="closing">
    <span>Fait \xE0 ${this.h(co.adresse ? co.adresse.split(",")[0] : "____________________")}, le ${this.fmtDate((/* @__PURE__ */ new Date()).toISOString())}</span>
    <span>En deux (2) exemplaires originaux</span>
  </div>

  <div class="signatures">
    <div class="sig"><div class="sig-lbl">L'Employeur</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">L'Employ\xE9(e)</div><div class="sig-area"></div></div>
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
  static {
    this.\u0275fac = function ContractDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContractDetailComponent)(\u0275\u0275directiveInject(HrService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CompanyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContractDetailComponent, selectors: [["app-hr-contract-detail"]], decls: 1, vars: 1, consts: [["class", "hp", 4, "ngIf"], [1, "hp"], [1, "hp-head"], [1, "b", "b-sec", 3, "click"], [1, "material-icons"], [1, "card"], [1, "pcard-head"], [1, "pref"], [1, "pemp"], [1, "mat"], [1, "pper"], [1, "badge"], [1, "grid2"], [1, "blk"], [1, "blk-title"], [1, "row"], [1, "blk", 2, "margin-top", "14px"], [1, "row", "net"]], template: function ContractDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ContractDetailComponent_div_0_Template, 113, 33, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.contract);
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.hp[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #7C3AED;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.b-primary[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.b-danger[_ngcontent-%COMP%] {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.ta-r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.clk[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.mdl-f[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.fg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in[_ngcontent-%COMP%] {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in[_ngcontent-%COMP%]:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in[_ngcontent-%COMP%]:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fg-2[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */", "\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  padding-bottom: 16px;\n}\n.pcard-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.pref[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.pemp[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n.mat[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.pper[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  margin-top: 2px;\n}\n.grid2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  padding: 16px 20px 0;\n}\n@media (max-width: 700px) {\n  .grid2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.blk[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\n.blk-title[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 5px 0;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 0.88rem;\n  color: var(--text-primary);\n}\n.row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.row.net[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.1);\n  padding: 8px 10px;\n  border-radius: var(--radius-md);\n  border-bottom: none;\n  margin-top: 6px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=contract-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContractDetailComponent, [{
    type: Component,
    args: [{ selector: "app-hr-contract-detail", standalone: true, imports: [CommonModule], template: `
    <div class="hp" *ngIf="contract as c">
      <div class="hp-head">
        <button class="b b-sec" (click)="back()"><span class="material-icons">arrow_back</span> Retour</button>
        <button class="b b-sec" (click)="print()"><span class="material-icons">print</span> Imprimer le contrat</button>
      </div>

      <div class="card">
        <div class="pcard-head">
          <div>
            <div class="pref">{{ typeLabel(c.type) }}</div>
            <div class="pemp">{{ employee?.lastName }} {{ employee?.firstName }} <span class="mat">({{ employee?.matricule }})</span></div>
            @if (jobName || departmentName) {
              <div class="pper">{{ jobName }}{{ jobName && departmentName ? ' \u2014 ' : '' }}{{ departmentName }}</div>
            }
          </div>
          <span class="badge" [class.ok]="c.state==='RUNNING'" [class.done]="c.state==='CLOSED'">{{ stateLabel(c.state) }}</span>
        </div>

        <div class="grid2">
          <div class="blk">
            <div class="blk-title">Employ\xE9</div>
            <div class="row"><span>Nom complet</span><strong>{{ employee?.lastName }} {{ employee?.firstName }}</strong></div>
            <div class="row"><span>Matricule</span><strong>{{ employee?.matricule || '\u2014' }}</strong></div>
            <div class="row"><span>N\xE9(e) le</span><strong>{{ fmtDate(employee?.birthDate) }}{{ employee?.birthPlace ? ' \xE0 ' + employee?.birthPlace : '' }}</strong></div>
            <div class="row"><span>Nationalit\xE9</span><strong>{{ employee?.nationality || '\u2014' }}</strong></div>
            <div class="row"><span>CNI</span><strong>{{ employee?.cni || '\u2014' }}</strong></div>
            <div class="row"><span>Adresse</span><strong>{{ employee?.address || '\u2014' }}</strong></div>
          </div>
          <div class="blk">
            <div class="blk-title">Contrat</div>
            <div class="row"><span>Type</span><strong>{{ typeLabel(c.type) }}</strong></div>
            <div class="row"><span>Poste</span><strong>{{ jobName || '\u2014' }}</strong></div>
            <div class="row"><span>D\xE9partement</span><strong>{{ departmentName || '\u2014' }}</strong></div>
            <div class="row"><span>Cat\xE9gorie professionnelle</span><strong>{{ categoryName || '\u2014' }}</strong></div>
            <div class="row"><span>\xC9chelon</span><strong>{{ echelonName || '\u2014' }}</strong></div>
            <div class="row"><span>Date de d\xE9but</span><strong>{{ fmtDate(c.dateStart) }}</strong></div>
            <div class="row"><span>Date de fin</span><strong>{{ c.type === 'CDI' ? 'Ind\xE9termin\xE9e' : fmtDate(c.dateEnd) }}</strong></div>
          </div>
        </div>

        <div class="blk" style="margin-top:14px">
          <div class="blk-title">R\xE9mun\xE9ration mensuelle</div>
          <div class="row"><span>Salaire de base</span><strong>{{ fmt(c.wage) }} FCFA</strong></div>
          @if (c.primeTransport) { <div class="row"><span>Indemnit\xE9 transport</span><strong>{{ fmt(c.primeTransport) }} FCFA</strong></div> }
          @if (c.primeLogement) { <div class="row"><span>Indemnit\xE9 logement</span><strong>{{ fmt(c.primeLogement) }} FCFA</strong></div> }
          @if (c.primeRepresentation) { <div class="row"><span>Ind. repr\xE9sentation</span><strong>{{ fmt(c.primeRepresentation) }} FCFA</strong></div> }
          @if (c.primeFonction) { <div class="row"><span>Prime de fonction</span><strong>{{ fmt(c.primeFonction) }} FCFA</strong></div> }
          @if (c.primeAnciennete) { <div class="row"><span>Prime d'anciennet\xE9</span><strong>{{ fmt(c.primeAnciennete) }} FCFA</strong></div> }
          @if (c.autresPrimes) { <div class="row"><span>Autres primes</span><strong>{{ fmt(c.autresPrimes) }} FCFA</strong></div> }
          <div class="row net"><span>Brut estim\xE9</span><strong>{{ fmt(brut(c)) }} FCFA</strong></div>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/modules/hr/components/hr-shared.scss */\n:host {\n  display: block;\n}\n.hp {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head h1 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head h1 .material-icons {\n  color: #7C3AED;\n}\n.muted {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b .material-icons {\n  font-size: 18px;\n}\n.b-primary {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec:hover {\n  background: var(--navbar-hover);\n}\n.b-danger {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl th {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl td {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl tbody tr:hover {\n  background: var(--bg-elevated);\n}\n.ta-r {\n  text-align: right;\n}\n.clk {\n  cursor: pointer;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b {\n  padding: 20px;\n}\n.mdl-f {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2 {\n  grid-column: span 2;\n}\n.fg label {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n  .fg-2 {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */\n", "/* angular:styles/component:scss;dd62fc28280137a21b450ac2e4bf12f38bab128fafc5445d0bdf433651731975;/home/automate/Documents/Projets 1.1/Projets/Blessing ERP Distrbuteur/erp-frontend/src/app/modules/hr/components/contract-detail/contract-detail.component.ts */\n.card {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  padding-bottom: 16px;\n}\n.pcard-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.pref {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.pemp {\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n.mat {\n  color: var(--text-muted);\n}\n.pper {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  margin-top: 2px;\n}\n.grid2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  padding: 16px 20px 0;\n}\n@media (max-width: 700px) {\n  .grid2 {\n    grid-template-columns: 1fr;\n  }\n}\n.blk {\n  padding: 0 20px;\n}\n.blk-title {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n.row {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 5px 0;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 0.88rem;\n  color: var(--text-primary);\n}\n.row span {\n  color: var(--text-muted);\n}\n.row.net {\n  background: rgba(124, 58, 237, 0.1);\n  padding: 8px 10px;\n  border-radius: var(--radius-md);\n  border-bottom: none;\n  margin-top: 6px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=contract-detail.component.css.map */\n"] }]
  }], () => [{ type: HrService }, { type: AuthService }, { type: ActivatedRoute }, { type: Router }, { type: CompanyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContractDetailComponent, { className: "ContractDetailComponent", filePath: "app/modules/hr/components/contract-detail/contract-detail.component.ts", lineNumber: 85 });
})();
export {
  ContractDetailComponent
};
//# sourceMappingURL=chunk-VUSUOMNZ.js.map

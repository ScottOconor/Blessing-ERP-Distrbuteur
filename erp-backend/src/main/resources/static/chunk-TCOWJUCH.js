import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/modules/hr/services/hr.service.ts
var HrService = class _HrService {
  constructor(http) {
    this.http = http;
    this.base = `${environment.apiUrl}/api/hr`;
    this.payroll = `${this.base}/payroll`;
  }
  cp(companyId) {
    return new HttpParams().set("companyId", companyId);
  }
  // Employés
  getEmployees(companyId) {
    return this.http.get(`${this.base}/employees`, { params: this.cp(companyId) });
  }
  getEmployee(id) {
    return this.http.get(`${this.base}/employees/${id}`);
  }
  createEmployee(e) {
    return this.http.post(`${this.base}/employees`, e);
  }
  updateEmployee(id, e) {
    return this.http.put(`${this.base}/employees/${id}`, e);
  }
  deleteEmployee(id) {
    return this.http.delete(`${this.base}/employees/${id}`);
  }
  // Départements & postes
  getDepartments(companyId) {
    return this.http.get(`${this.base}/departments`, { params: this.cp(companyId) });
  }
  saveDepartment(d) {
    return this.http.post(`${this.base}/departments`, d);
  }
  deleteDepartment(id) {
    return this.http.delete(`${this.base}/departments/${id}`);
  }
  getJobs(companyId) {
    return this.http.get(`${this.base}/jobs`, { params: this.cp(companyId) });
  }
  saveJob(j) {
    return this.http.post(`${this.base}/jobs`, j);
  }
  deleteJob(id) {
    return this.http.delete(`${this.base}/jobs/${id}`);
  }
  // Catégories professionnelles (grille salariale)
  getProfessionalCategories(companyId) {
    return this.http.get(`${this.base}/professional-categories`, { params: this.cp(companyId) });
  }
  saveProfessionalCategory(c) {
    return this.http.post(`${this.base}/professional-categories`, c);
  }
  updateProfessionalCategory(id, c) {
    return this.http.put(`${this.base}/professional-categories/${id}`, c);
  }
  deleteProfessionalCategory(id) {
    return this.http.delete(`${this.base}/professional-categories/${id}`);
  }
  // Échelons (grille salariale)
  getEchelons(companyId, professionalCategoryId) {
    let params = this.cp(companyId);
    if (professionalCategoryId != null)
      params = params.set("professionalCategoryId", professionalCategoryId);
    return this.http.get(`${this.base}/echelons`, { params });
  }
  saveEchelon(e) {
    return this.http.post(`${this.base}/echelons`, e);
  }
  updateEchelon(id, e) {
    return this.http.put(`${this.base}/echelons/${id}`, e);
  }
  deleteEchelon(id) {
    return this.http.delete(`${this.base}/echelons/${id}`);
  }
  // Contrats
  getContracts(companyId) {
    return this.http.get(`${this.base}/contracts`, { params: this.cp(companyId) });
  }
  getEmployeeContracts(employeeId) {
    return this.http.get(`${this.base}/employees/${employeeId}/contracts`);
  }
  saveContract(c) {
    return this.http.post(`${this.base}/contracts`, c);
  }
  updateContract(id, c) {
    return this.http.put(`${this.base}/contracts/${id}`, c);
  }
  setContractState(id, state) {
    return this.http.post(`${this.base}/contracts/${id}/state?state=${state}`, {});
  }
  deleteContract(id) {
    return this.http.delete(`${this.base}/contracts/${id}`);
  }
  // Config paie
  getCategories(companyId) {
    return this.http.get(`${this.base}/salary-rule-categories`, { params: this.cp(companyId) });
  }
  getRules(companyId) {
    return this.http.get(`${this.base}/salary-rules`, { params: this.cp(companyId) });
  }
  saveRule(r) {
    return this.http.post(`${this.base}/salary-rules`, r);
  }
  updateRule(id, r) {
    return this.http.put(`${this.base}/salary-rules/${id}`, r);
  }
  deleteRule(id) {
    return this.http.delete(`${this.base}/salary-rules/${id}`);
  }
  // Types de jours travaillés
  getWorkedDaysTypes(companyId) {
    return this.http.get(`${this.base}/worked-days-types`, { params: this.cp(companyId) });
  }
  saveWorkedDaysType(t) {
    return this.http.post(`${this.base}/worked-days-types`, t);
  }
  updateWorkedDaysType(id, t) {
    return this.http.put(`${this.base}/worked-days-types/${id}`, t);
  }
  deleteWorkedDaysType(id) {
    return this.http.delete(`${this.base}/worked-days-types/${id}`);
  }
  // Types d'éléments variables
  getInputTypes(companyId) {
    return this.http.get(`${this.base}/input-types`, { params: this.cp(companyId) });
  }
  saveInputType(t) {
    return this.http.post(`${this.base}/input-types`, t);
  }
  updateInputType(id, t) {
    return this.http.put(`${this.base}/input-types/${id}`, t);
  }
  deleteInputType(id) {
    return this.http.delete(`${this.base}/input-types/${id}`);
  }
  // Congés
  getLeaveTypes(companyId) {
    return this.http.get(`${this.base}/leave-types`, { params: this.cp(companyId) });
  }
  saveLeaveType(t) {
    return this.http.post(`${this.base}/leave-types`, t);
  }
  updateLeaveType(id, t) {
    return this.http.put(`${this.base}/leave-types/${id}`, t);
  }
  deleteLeaveType(id) {
    return this.http.delete(`${this.base}/leave-types/${id}`);
  }
  getLeaveDeclarations(companyId, employeeId) {
    let params = this.cp(companyId);
    if (employeeId != null)
      params = params.set("employeeId", employeeId);
    return this.http.get(`${this.base}/leave-declarations`, { params });
  }
  saveLeaveDeclaration(d) {
    return this.http.post(`${this.base}/leave-declarations`, d);
  }
  deleteLeaveDeclaration(id) {
    return this.http.delete(`${this.base}/leave-declarations/${id}`);
  }
  getLeaveBalances(companyId, employeeId, year) {
    let params = this.cp(companyId).set("employeeId", employeeId);
    if (year != null)
      params = params.set("year", year);
    return this.http.get(`${this.base}/leave-balances`, { params });
  }
  saveLeaveCarryOver(companyId, employeeId, leaveTypeId, year, amount) {
    const params = this.cp(companyId).set("employeeId", employeeId).set("leaveTypeId", leaveTypeId).set("year", year).set("amount", amount);
    return this.http.post(`${this.base}/leave-balances/carry-over`, {}, { params });
  }
  // Bulletins
  getPayslips(companyId) {
    return this.http.get(`${this.payroll}/payslips`, { params: this.cp(companyId) });
  }
  getPayslip(id) {
    return this.http.get(`${this.payroll}/payslips/${id}`);
  }
  compute(req) {
    return this.http.post(`${this.payroll}/payslips/compute`, req);
  }
  recompute(id) {
    return this.http.post(`${this.payroll}/payslips/${id}/recompute`, {});
  }
  verifyPayslip(id) {
    return this.http.post(`${this.payroll}/payslips/${id}/verify`, {});
  }
  validatePayslip(id) {
    return this.http.post(`${this.payroll}/payslips/${id}/validate`, {});
  }
  draftPayslip(id) {
    return this.http.post(`${this.payroll}/payslips/${id}/draft`, {});
  }
  cancelPayslip(id) {
    return this.http.post(`${this.payroll}/payslips/${id}/cancel`, {});
  }
  // Lots
  getRuns(companyId) {
    return this.http.get(`${this.payroll}/runs`, { params: this.cp(companyId) });
  }
  generateRun(req) {
    return this.http.post(`${this.payroll}/runs/generate`, req);
  }
  getRunPayslips(id) {
    return this.http.get(`${this.payroll}/runs/${id}/payslips`);
  }
  validateRun(id) {
    return this.http.post(`${this.payroll}/runs/${id}/validate`, {});
  }
  getRunRegister(id) {
    return this.http.get(`${this.payroll}/runs/${id}/register`);
  }
  static {
    this.\u0275fac = function HrService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HrService, factory: _HrService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  HrService
};
//# sourceMappingURL=chunk-TCOWJUCH.js.map

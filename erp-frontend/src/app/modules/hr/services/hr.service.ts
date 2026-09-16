import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface Employee {
  id?: number;
  matricule?: string;
  lastName: string;
  firstName?: string;
  gender?: string;
  birthDate?: string;
  birthPlace?: string;
  nationality?: string;
  cni?: string;
  maritalStatus?: string;
  childrenCount?: number;
  phone?: string;
  email?: string;
  address?: string;
  departmentId?: number;
  jobId?: number;
  managerId?: number;
  hireDate?: string;
  departureDate?: string;
  cnpsNumber?: string;
  niu?: string;
  bankName?: string;
  bankAccount?: string;
  paymentMode?: string;
  status?: string;
  active?: boolean;
  companyId: number;
}

export interface Department { id?: number; name: string; code?: string; parentId?: number; managerId?: number; active?: boolean; companyId: number; }
export interface JobPosition { id?: number; name: string; departmentId?: number; category?: string; description?: string; active?: boolean; companyId: number; }
export interface ProfessionalCategory { id?: number; name: string; code: string; sequence?: number; active?: boolean; companyId: number; }
export interface Echelon { id?: number; name: string; code: string; professionalCategoryId: number; baseWage?: number; sequence?: number; active?: boolean; companyId: number; }

export interface EmployeeContract {
  id?: number;
  employeeId: number;
  reference?: string;
  type?: string;
  dateStart?: string;
  dateEnd?: string;
  wage?: number;
  primeTransport?: number;
  primeLogement?: number;
  primeRepresentation?: number;
  primeFonction?: number;
  primeAnciennete?: number;
  autresPrimes?: number;
  professionalCategory?: string;
  echelonId?: number;
  state?: string;
  notes?: string;
  companyId: number;
}

export interface SalaryRuleCategory { id?: number; name: string; code: string; sequence?: number; companyId: number; }
export interface SalaryRule {
  id?: number; name: string; code: string; sequence?: number; categoryCode: string;
  computeType?: string; amountFix?: number; amountPercentage?: number; baseCode?: string; builtinCode?: string;
  deduction?: boolean; hideIfZero?: boolean; accountDebitCode?: string; accountCreditCode?: string; active?: boolean;
  /** Code d'un WorkedDaysType : si renseigné, le montant de la règle est multiplié par le nombre de jours saisi sur le bulletin pour ce code. */
  quantityWorkedDaysCode?: string;
  /** Plafond de cotisation (ex: plafond CNPS) — utilisé par les formules intégrées CNPS_EMP/CNPS_PAT. */
  ceilingAmount?: number;
  /** Barème par tranches "plafond:taux,..." (IRPP, en %) ou "plafond:montant,..." (RAV) — formules intégrées IRPP/RAV uniquement. */
  bracketsConfig?: string;
  companyId: number;
}

export interface WorkedDaysType { id?: number; name: string; code: string; active?: boolean; companyId: number; }
export interface PayslipInputType { id?: number; name: string; code: string; active?: boolean; companyId: number; }

export interface Payslip {
  id?: number; name?: string; employeeId: number; employeeName?: string; employeeMatricule?: string;
  contractId?: number; runId?: number; periodFrom?: string; periodTo?: string; state?: string;
  totalBrut?: number; totalCotisationsSalariales?: number; totalNet?: number; totalChargesPatronales?: number;
  journalId?: number; accountMoveId?: number; companyId: number;
}
export interface PayslipLine {
  id?: number; payslipId?: number; code: string; name: string; categoryCode?: string; categoryName?: string;
  sequence?: number; quantity?: number; rate?: number; amount?: number; total?: number;
}
export interface PayslipInput { id?: number; payslipId?: number; code: string; name?: string; amount?: number; }
export interface PayslipWorkedDays { id?: number; payslipId?: number; code: string; name?: string; numberOfDays?: number; }
export interface LeaveType {
  id?: number; name: string; code: string; paid?: boolean; monthlyAccrualDays?: number;
  workedDaysTypeCode?: string; active?: boolean; companyId: number;
}
export interface LeaveDeclaration {
  id?: number; employeeId: number; leaveTypeId: number; dateFrom: string; dateEnd: string;
  numberOfDays: number; notes?: string; companyId: number;
}
export interface LeaveBalanceSummary {
  leaveTypeId: number; code: string; name: string; year: number;
  carryOver: number; accrued: number; taken: number; remaining: number;
}

export interface PayslipDTO {
  payslip: Payslip; lines: PayslipLine[]; inputs: PayslipInput[]; workedDays: PayslipWorkedDays[];
  departmentName?: string; jobName?: string;
  hireDate?: string; professionalCategoryName?: string; echelonName?: string;
  leaveBalances?: LeaveBalanceSummary[];
}

export interface PayslipRun { id?: number; name: string; dateStart?: string; dateEnd?: string; state?: string; companyId: number; }

export interface PayrollRegister {
  runName: string; dateStart: string; dateEnd: string;
  categoryCodes: string[]; categoryNames: string[];
  rows: { employeeId: number; matricule: string; employeeName: string; amounts: Record<string, number> }[];
  totals: Record<string, number>;
}

@Injectable({ providedIn: 'root' })
export class HrService {
  private base = `${environment.apiUrl}/api/hr`;
  private payroll = `${this.base}/payroll`;

  constructor(private http: HttpClient) {}

  private cp(companyId: number) { return new HttpParams().set('companyId', companyId); }

  // Employés
  getEmployees(companyId: number): Observable<Employee[]> { return this.http.get<Employee[]>(`${this.base}/employees`, { params: this.cp(companyId) }); }
  getEmployee(id: number): Observable<Employee> { return this.http.get<Employee>(`${this.base}/employees/${id}`); }
  createEmployee(e: Employee): Observable<Employee> { return this.http.post<Employee>(`${this.base}/employees`, e); }
  updateEmployee(id: number, e: Employee): Observable<Employee> { return this.http.put<Employee>(`${this.base}/employees/${id}`, e); }
  deleteEmployee(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/employees/${id}`); }

  // Départements & postes
  getDepartments(companyId: number): Observable<Department[]> { return this.http.get<Department[]>(`${this.base}/departments`, { params: this.cp(companyId) }); }
  saveDepartment(d: Department): Observable<Department> { return this.http.post<Department>(`${this.base}/departments`, d); }
  deleteDepartment(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/departments/${id}`); }
  getJobs(companyId: number): Observable<JobPosition[]> { return this.http.get<JobPosition[]>(`${this.base}/jobs`, { params: this.cp(companyId) }); }
  saveJob(j: JobPosition): Observable<JobPosition> { return this.http.post<JobPosition>(`${this.base}/jobs`, j); }
  deleteJob(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/jobs/${id}`); }

  // Catégories professionnelles (grille salariale)
  getProfessionalCategories(companyId: number): Observable<ProfessionalCategory[]> { return this.http.get<ProfessionalCategory[]>(`${this.base}/professional-categories`, { params: this.cp(companyId) }); }
  saveProfessionalCategory(c: ProfessionalCategory): Observable<ProfessionalCategory> { return this.http.post<ProfessionalCategory>(`${this.base}/professional-categories`, c); }
  updateProfessionalCategory(id: number, c: ProfessionalCategory): Observable<ProfessionalCategory> { return this.http.put<ProfessionalCategory>(`${this.base}/professional-categories/${id}`, c); }
  deleteProfessionalCategory(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/professional-categories/${id}`); }

  // Échelons (grille salariale)
  getEchelons(companyId: number, professionalCategoryId?: number): Observable<Echelon[]> {
    let params = this.cp(companyId);
    if (professionalCategoryId != null) params = params.set('professionalCategoryId', professionalCategoryId);
    return this.http.get<Echelon[]>(`${this.base}/echelons`, { params });
  }
  saveEchelon(e: Echelon): Observable<Echelon> { return this.http.post<Echelon>(`${this.base}/echelons`, e); }
  updateEchelon(id: number, e: Echelon): Observable<Echelon> { return this.http.put<Echelon>(`${this.base}/echelons/${id}`, e); }
  deleteEchelon(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/echelons/${id}`); }

  // Contrats
  getContracts(companyId: number): Observable<EmployeeContract[]> { return this.http.get<EmployeeContract[]>(`${this.base}/contracts`, { params: this.cp(companyId) }); }
  getEmployeeContracts(employeeId: number): Observable<EmployeeContract[]> { return this.http.get<EmployeeContract[]>(`${this.base}/employees/${employeeId}/contracts`); }
  saveContract(c: EmployeeContract): Observable<EmployeeContract> { return this.http.post<EmployeeContract>(`${this.base}/contracts`, c); }
  updateContract(id: number, c: EmployeeContract): Observable<EmployeeContract> { return this.http.put<EmployeeContract>(`${this.base}/contracts/${id}`, c); }
  setContractState(id: number, state: string): Observable<EmployeeContract> { return this.http.post<EmployeeContract>(`${this.base}/contracts/${id}/state?state=${state}`, {}); }
  deleteContract(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/contracts/${id}`); }

  // Config paie
  getCategories(companyId: number): Observable<SalaryRuleCategory[]> { return this.http.get<SalaryRuleCategory[]>(`${this.base}/salary-rule-categories`, { params: this.cp(companyId) }); }
  getRules(companyId: number): Observable<SalaryRule[]> { return this.http.get<SalaryRule[]>(`${this.base}/salary-rules`, { params: this.cp(companyId) }); }
  saveRule(r: SalaryRule): Observable<SalaryRule> { return this.http.post<SalaryRule>(`${this.base}/salary-rules`, r); }
  updateRule(id: number, r: SalaryRule): Observable<SalaryRule> { return this.http.put<SalaryRule>(`${this.base}/salary-rules/${id}`, r); }
  deleteRule(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/salary-rules/${id}`); }

  // Types de jours travaillés
  getWorkedDaysTypes(companyId: number): Observable<WorkedDaysType[]> { return this.http.get<WorkedDaysType[]>(`${this.base}/worked-days-types`, { params: this.cp(companyId) }); }
  saveWorkedDaysType(t: WorkedDaysType): Observable<WorkedDaysType> { return this.http.post<WorkedDaysType>(`${this.base}/worked-days-types`, t); }
  updateWorkedDaysType(id: number, t: WorkedDaysType): Observable<WorkedDaysType> { return this.http.put<WorkedDaysType>(`${this.base}/worked-days-types/${id}`, t); }
  deleteWorkedDaysType(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/worked-days-types/${id}`); }

  // Types d'éléments variables
  getInputTypes(companyId: number): Observable<PayslipInputType[]> { return this.http.get<PayslipInputType[]>(`${this.base}/input-types`, { params: this.cp(companyId) }); }
  saveInputType(t: PayslipInputType): Observable<PayslipInputType> { return this.http.post<PayslipInputType>(`${this.base}/input-types`, t); }
  updateInputType(id: number, t: PayslipInputType): Observable<PayslipInputType> { return this.http.put<PayslipInputType>(`${this.base}/input-types/${id}`, t); }
  deleteInputType(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/input-types/${id}`); }

  // Congés
  getLeaveTypes(companyId: number): Observable<LeaveType[]> { return this.http.get<LeaveType[]>(`${this.base}/leave-types`, { params: this.cp(companyId) }); }
  saveLeaveType(t: LeaveType): Observable<LeaveType> { return this.http.post<LeaveType>(`${this.base}/leave-types`, t); }
  updateLeaveType(id: number, t: LeaveType): Observable<LeaveType> { return this.http.put<LeaveType>(`${this.base}/leave-types/${id}`, t); }
  deleteLeaveType(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/leave-types/${id}`); }

  getLeaveDeclarations(companyId: number, employeeId?: number): Observable<LeaveDeclaration[]> {
    let params = this.cp(companyId);
    if (employeeId != null) params = params.set('employeeId', employeeId);
    return this.http.get<LeaveDeclaration[]>(`${this.base}/leave-declarations`, { params });
  }
  saveLeaveDeclaration(d: LeaveDeclaration): Observable<LeaveDeclaration> { return this.http.post<LeaveDeclaration>(`${this.base}/leave-declarations`, d); }
  deleteLeaveDeclaration(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/leave-declarations/${id}`); }

  getLeaveBalances(companyId: number, employeeId: number, year?: number): Observable<LeaveBalanceSummary[]> {
    let params = this.cp(companyId).set('employeeId', employeeId);
    if (year != null) params = params.set('year', year);
    return this.http.get<LeaveBalanceSummary[]>(`${this.base}/leave-balances`, { params });
  }
  saveLeaveCarryOver(companyId: number, employeeId: number, leaveTypeId: number, year: number, amount: number): Observable<void> {
    const params = this.cp(companyId).set('employeeId', employeeId).set('leaveTypeId', leaveTypeId).set('year', year).set('amount', amount);
    return this.http.post<void>(`${this.base}/leave-balances/carry-over`, {}, { params });
  }

  // Bulletins
  getPayslips(companyId: number): Observable<Payslip[]> { return this.http.get<Payslip[]>(`${this.payroll}/payslips`, { params: this.cp(companyId) }); }
  getPayslip(id: number): Observable<PayslipDTO> { return this.http.get<PayslipDTO>(`${this.payroll}/payslips/${id}`); }
  compute(req: any): Observable<PayslipDTO> { return this.http.post<PayslipDTO>(`${this.payroll}/payslips/compute`, req); }
  recompute(id: number): Observable<PayslipDTO> { return this.http.post<PayslipDTO>(`${this.payroll}/payslips/${id}/recompute`, {}); }
  verifyPayslip(id: number): Observable<PayslipDTO> { return this.http.post<PayslipDTO>(`${this.payroll}/payslips/${id}/verify`, {}); }
  validatePayslip(id: number): Observable<PayslipDTO> { return this.http.post<PayslipDTO>(`${this.payroll}/payslips/${id}/validate`, {}); }
  draftPayslip(id: number): Observable<PayslipDTO> { return this.http.post<PayslipDTO>(`${this.payroll}/payslips/${id}/draft`, {}); }
  cancelPayslip(id: number): Observable<PayslipDTO> { return this.http.post<PayslipDTO>(`${this.payroll}/payslips/${id}/cancel`, {}); }

  // Lots
  getRuns(companyId: number): Observable<PayslipRun[]> { return this.http.get<PayslipRun[]>(`${this.payroll}/runs`, { params: this.cp(companyId) }); }
  generateRun(req: any): Observable<PayslipRun> { return this.http.post<PayslipRun>(`${this.payroll}/runs/generate`, req); }
  getRunPayslips(id: number): Observable<PayslipDTO[]> { return this.http.get<PayslipDTO[]>(`${this.payroll}/runs/${id}/payslips`); }
  validateRun(id: number): Observable<PayslipRun> { return this.http.post<PayslipRun>(`${this.payroll}/runs/${id}/validate`, {}); }
  getRunRegister(id: number): Observable<PayrollRegister> { return this.http.get<PayrollRegister>(`${this.payroll}/runs/${id}/register`); }
}

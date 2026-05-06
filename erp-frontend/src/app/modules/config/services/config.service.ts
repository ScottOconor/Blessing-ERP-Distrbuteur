import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CompanyGroup {
  id?: number;
  name: string;
  code: string;
  description?: string;
  active: boolean;
  companies?: CompanyInfo[];
}

export interface CompanyInfo {
  id?: number;
  name: string;
  sigle?: string;
  rccm?: string;
  nif?: string;
  adresse?: string;
  telephone?: string;
  email?: string;
  logoUrl?: string;
  groupId?: number;
  groupName?: string;
  active: boolean;
}

export interface RoleInfo {
  id?: number;
  code?: string;
  label: string;
  isSystem: boolean;
  active: boolean;
  groupId?: number;
  permissions?: Permission[];
}

export interface Permission {
  module: string;
  action: string;
}

export interface UserInfo {
  id?: number;
  username: string;
  email?: string;
  fullName?: string;
  roleId?: number;
  roleCode?: string;
  roleLabel?: string;
  groupId?: number;
  groupName?: string;
  companyId?: number;
  companyName?: string;
  active: boolean;
  mustChangePassword?: boolean;
}

export interface CreateUserRequest {
  username: string;
  email?: string;
  fullName?: string;
  password: string;
  roleId: number;
  groupId?: number;
  companyId?: number;
}

export const MODULES = ['VENTES', 'ACHATS', 'STOCK', 'COMPTABILITE', 'CONFIG'];
export const ACTIONS = ['VIEW', 'CREATE', 'EDIT', 'DELETE', 'IMPORT', 'EXPORT'];
export const SYSTEM_ROLE_CODES = ['SUPER_ADMIN', 'ADMIN', 'SUPER_AUDITEUR', 'AUDITEUR', 'CONTROLEUR'];

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private api = `http://${window.location.hostname}:8085/api/config`;

  constructor(private http: HttpClient) {}

  // Groups
  getGroups(): Observable<CompanyGroup[]> {
    return this.http.get<CompanyGroup[]>(`${this.api}/groups`);
  }
  createGroup(g: CompanyGroup): Observable<CompanyGroup> {
    return this.http.post<CompanyGroup>(`${this.api}/groups`, g);
  }
  updateGroup(id: number, g: CompanyGroup): Observable<CompanyGroup> {
    return this.http.put<CompanyGroup>(`${this.api}/groups/${id}`, g);
  }

  // Companies
  getCompaniesByGroup(groupId: number): Observable<CompanyInfo[]> {
    return this.http.get<CompanyInfo[]>(`${this.api}/groups/${groupId}/companies`);
  }
  createCompany(c: CompanyInfo): Observable<CompanyInfo> {
    return this.http.post<CompanyInfo>(`${this.api}/companies`, c);
  }
  updateCompany(id: number, c: CompanyInfo): Observable<CompanyInfo> {
    return this.http.put<CompanyInfo>(`${this.api}/companies/${id}`, c);
  }

  // Roles
  getSystemRoles(): Observable<RoleInfo[]> {
    return this.http.get<RoleInfo[]>(`${this.api}/roles/system`);
  }
  getRolesForGroup(groupId: number): Observable<RoleInfo[]> {
    return this.http.get<RoleInfo[]>(`${this.api}/groups/${groupId}/roles`);
  }
  createCustomRole(groupId: number, r: RoleInfo): Observable<RoleInfo> {
    return this.http.post<RoleInfo>(`${this.api}/groups/${groupId}/roles`, r);
  }
  updateCustomRole(roleId: number, r: RoleInfo): Observable<RoleInfo> {
    return this.http.put<RoleInfo>(`${this.api}/roles/${roleId}`, r);
  }
  deleteCustomRole(roleId: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/roles/${roleId}`);
  }

  // Users
  getUsersByGroup(groupId: number): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(`${this.api}/groups/${groupId}/users`);
  }
  getUsersByCompany(companyId: number): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(`${this.api}/companies/${companyId}/users`);
  }
  createUser(req: CreateUserRequest): Observable<UserInfo> {
    return this.http.post<UserInfo>(`${this.api}/users`, req);
  }
  updateUser(id: number, req: Partial<CreateUserRequest>): Observable<UserInfo> {
    return this.http.put<UserInfo>(`${this.api}/users/${id}`, req);
  }
  toggleUserActive(id: number): Observable<void> {
    return this.http.post<void>(`${this.api}/users/${id}/toggle-active`, {});
  }
}

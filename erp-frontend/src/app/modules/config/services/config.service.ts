import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  logoContentType?: string;
  appName?: string;
  hasAppLogo?: boolean;
  active: boolean;
  /** Mois de début de l'exercice fiscal (1 = janvier ... 12 = décembre) */
  fiscalYearStartMonth?: number;
}

export interface RoleInfo {
  id?: number;
  code?: string;
  label: string;
  isSystem: boolean;
  active: boolean;
  permissions?: Permission[];
}

export interface Permission {
  module: string;
  resource: string;
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
  active: boolean;
  mustChangePassword?: boolean;
}

export interface CreateUserRequest {
  username: string;
  email?: string;
  fullName?: string;
  password: string;
  roleId: number;
}

export interface RemoteAgency {
  id?: number;
  name: string;
  code: string;
  host: string;
  port: number;
  apiKey?: string;
  location?: string;
  contactPerson?: string;
  phone?: string;
  email?: string;
  notes?: string;
  active: boolean;
  baseUrl?: string;
  createdAt?: string;
  reachable?: boolean;
  pingUrl?: string;
  pingError?: string;
}

export const MODULES = [
  'VENTES', 'ACHATS', 'STOCK', 'COMPTABILITE', 'CAISSE',
  'RH',
  'HELPDESK', 'CONFIG'
];
export const ACTIONS = ['VIEW', 'CREATE', 'EDIT', 'DELETE'];
// Actions supplémentaires spécifiques à certaines ressources : la colonne est affichée pour tous
// mais la case n'est cochable que sur les ressources listées (clé = `${MODULE}_${RESOURCE}`).
export const OPTIONAL_ACTIONS = ['CANCEL', 'VALIDATE'];
export const OPTIONAL_ACTION_RESOURCES: Record<string, string[]> = {
  // annuler une facture (vente ou achat) ; sans ce droit → extourne obligatoire
  CANCEL: ['VENTES_FACTURES', 'ACHATS_FACTURES'],
  // valider/comptabiliser les bulletins de paie
  VALIDATE: ['RH_BULLETINS']
};
export const SYSTEM_ROLE_CODES = ['SUPER_ADMIN', 'ADMIN'];

export const RESOURCES: Record<string, string[]> = {
  VENTES:       ['COMMANDES', 'FACTURES', 'AVOIRS', 'CLIENTS', 'PAIEMENTS', 'RISTOURNES', 'PRECOMPTES'],
  ACHATS:       ['COMMANDES', 'FACTURES', 'AVOIRS', 'PAIEMENTS', 'REMISES', 'ENLEVEMENTS'],
  STOCK:        ['PRODUITS', 'MOUVEMENTS', 'INVENTAIRE', 'CASSES'],
  COMPTABILITE: ['JOURNAUX', 'ECRITURES', 'RAPPORTS'],
  CAISSE:       ['CAISSES'],
  RH:           ['EMPLOYES', 'CONTRATS', 'BULLETINS', 'CONFIG_PAIE', 'CONGES'],
  HELPDESK:     ['TICKETS'],
  CONFIG:       ['UTILISATEURS', 'ROLES', 'ENTREPRISES', 'AUDIT', 'MODULES']
};

export const MODULE_LABELS: Record<string, string> = {
  VENTES: 'Ventes', ACHATS: 'Achats', STOCK: 'Stock',
  COMPTABILITE: 'Comptabilité', CAISSE: 'Caisse', RH: 'Ressources Humaines',
  HELPDESK: 'Helpdesk', CONFIG: 'Configuration'
};

export const RESOURCE_LABELS: Record<string, string> = {
  COMMANDES: 'Commandes', FACTURES: 'Factures', AVOIRS: 'Avoirs',
  CLIENTS: 'Clients', PAIEMENTS: 'Paiements', RISTOURNES: 'Ristournes',
  REMISES: 'Remises fournisseurs', ENLEVEMENTS: 'Enlèvements',
  PRODUITS: 'Produits', MOUVEMENTS: 'Mouvements de stock', INVENTAIRE: 'Inventaire', CASSES: 'Trous & Casses',
  JOURNAUX: 'Journaux', ECRITURES: 'Écritures comptables', RAPPORTS: 'Rapports', PRECOMPTES: 'Précomptes',
  CAISSES: 'Caisses', TICKETS: 'Tickets support',
  EMPLOYES: 'Employés', CONTRATS: 'Contrats', BULLETINS: 'Bulletins de paie', CONFIG_PAIE: 'Configuration paie', CONGES: 'Congés',
  UTILISATEURS: 'Utilisateurs', ROLES: 'Rôles', ENTREPRISES: 'Entreprises', AUDIT: "Journal d'audit",
  MODULES: 'Applications (installer/désinstaller)'
};

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private api = `${environment.apiUrl}/api/config`;

  constructor(private http: HttpClient) {}

  // ── Entreprises ──────────────────────────────────────────────────
  getAllCompanies(): Observable<CompanyInfo[]> {
    return this.http.get<CompanyInfo[]>(`${this.api}/companies`);
  }
  getCompany(id: number): Observable<CompanyInfo> {
    return this.http.get<CompanyInfo>(`${this.api}/companies/${id}`);
  }
  createCompany(c: CompanyInfo): Observable<CompanyInfo> {
    return this.http.post<CompanyInfo>(`${this.api}/companies`, c);
  }
  updateCompany(id: number, c: CompanyInfo): Observable<CompanyInfo> {
    return this.http.put<CompanyInfo>(`${this.api}/companies/${id}`, c);
  }

  // ── Rôles ────────────────────────────────────────────────────────
  getAllRoles(): Observable<RoleInfo[]> {
    return this.http.get<RoleInfo[]>(`${this.api}/roles`);
  }
  getSystemRoles(): Observable<RoleInfo[]> {
    return this.http.get<RoleInfo[]>(`${this.api}/roles/system`);
  }
  createRole(r: RoleInfo): Observable<RoleInfo> {
    return this.http.post<RoleInfo>(`${this.api}/roles`, r);
  }
  updateRole(roleId: number, r: RoleInfo): Observable<RoleInfo> {
    return this.http.put<RoleInfo>(`${this.api}/roles/${roleId}`, r);
  }
  deleteRole(roleId: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/roles/${roleId}`);
  }

  // ── Utilisateurs ─────────────────────────────────────────────────
  getAllUsers(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(`${this.api}/users`);
  }
  getUser(id: number): Observable<UserInfo> {
    return this.http.get<UserInfo>(`${this.api}/users/${id}`);
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

  // ── Clé API inter-agences ─────────────────────────────────────────
  getInterAgencyKey(): Observable<{ apiKey: string }> {
    return this.http.get<{ apiKey: string }>(`${this.api}/inter-agency-key`);
  }
  regenerateInterAgencyKey(): Observable<{ apiKey: string }> {
    return this.http.post<{ apiKey: string }>(`${this.api}/inter-agency-key/regenerate`, {});
  }

  // ── URL du Hub (licensing, helpdesk) ───────────────────────────────
  getHubUrl(): Observable<{ hubUrl: string }> {
    return this.http.get<{ hubUrl: string }>(`${this.api}/hub-url`);
  }
  setHubUrl(hubUrl: string): Observable<{ hubUrl: string }> {
    return this.http.put<{ hubUrl: string }>(`${this.api}/hub-url`, { hubUrl });
  }

  // ── Agences distantes ─────────────────────────────────────────────
  getRemoteAgencies(all = false): Observable<RemoteAgency[]> {
    return this.http.get<RemoteAgency[]>(`${this.api}/remote-agencies`, { params: { all: String(all) } });
  }
  getRemoteAgency(id: number): Observable<RemoteAgency> {
    return this.http.get<RemoteAgency>(`${this.api}/remote-agencies/${id}`);
  }
  createRemoteAgency(a: RemoteAgency): Observable<RemoteAgency> {
    return this.http.post<RemoteAgency>(`${this.api}/remote-agencies`, a);
  }
  updateRemoteAgency(id: number, a: RemoteAgency): Observable<RemoteAgency> {
    return this.http.put<RemoteAgency>(`${this.api}/remote-agencies/${id}`, a);
  }
  toggleRemoteAgency(id: number): Observable<void> {
    return this.http.post<void>(`${this.api}/remote-agencies/${id}/toggle`, {});
  }
  deleteRemoteAgency(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/remote-agencies/${id}`);
  }
  pingRemoteAgency(id: number): Observable<RemoteAgency> {
    return this.http.get<RemoteAgency>(`${this.api}/remote-agencies/${id}/ping`);
  }
}

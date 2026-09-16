import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap, of, catchError } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ModuleState {
  code: string;
  installed: boolean;
}

export interface BusinessModuleMeta {
  code: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  route: string;
}

/**
 * Métadonnées d'affichage des modules métier installables/désinstallables — source unique
 * partagée par l'écran d'accueil et l'écran de gestion des applications (extra-apps).
 */
export const BUSINESS_MODULES: BusinessModuleMeta[] = [
  { code: 'COMPTABILITE', name: 'Comptabilité', description: 'Journaux, pièces comptables, rapports financiers', icon: 'calculate', color: '#2563EB', route: '/accounting' },
  { code: 'VENTES', name: 'Ventes', description: 'Bons de commande, factures clients, suivi commercial', icon: 'point_of_sale', color: '#06B6D4', route: '/sales' },
  { code: 'ACHATS', name: 'Achats', description: 'Commandes fournisseurs, réceptions et mise à jour du stock', icon: 'local_shipping', color: '#10B981', route: '/purchases' },
  { code: 'STOCK', name: 'Stock', description: 'Articles, entrepôts, réceptions, livraisons, transferts', icon: 'inventory_2', color: '#F97316', route: '/stock' },
  { code: 'CAISSE', name: 'Caisses', description: 'Gestion des caisses, entrées & sorties, brouillard journalier', icon: 'point_of_sale', color: '#16A34A', route: '/caisses' },
  { code: 'RH', name: 'Ressources Humaines', description: 'Employés, contrats, paie (CNPS, IRPP, bulletins) et déclarations', icon: 'badge', color: '#7C3AED', route: '/hr' },
  { code: 'HELPDESK', name: 'Helpdesk', description: 'Tickets d\'incidents, support utilisateurs, suivi des demandes', icon: 'support_agent', color: '#0891b2', route: '/helpdesk' },
];

/**
 * État d'installation des modules métier (Ventes, Achats, Stock, Comptabilité, Caisse, RH,
 * Helpdesk) pour la société active. Mis en cache en mémoire après le premier chargement pour
 * un accès synchrone immédiat (écran d'accueil, garde de route).
 */
@Injectable({ providedIn: 'root' })
export class ModuleService {
  private api = `${environment.apiUrl}/api/config/modules`;
  private cache: ModuleState[] | null = null;

  constructor(private http: HttpClient) {}

  getModules(companyId: number): Observable<ModuleState[]> {
    return this.http.get<ModuleState[]>(this.api, { params: new HttpParams().set('companyId', companyId) })
      .pipe(tap(list => this.cache = list));
  }

  setInstalled(companyId: number, code: string, installed: boolean): Observable<ModuleState> {
    return this.http.put<ModuleState>(`${this.api}/${code}`, null, {
      params: new HttpParams().set('companyId', companyId).set('installed', installed)
    }).pipe(tap(updated => {
      if (this.cache) {
        const existing = this.cache.find(m => m.code === updated.code);
        if (existing) existing.installed = updated.installed;
        else this.cache.push(updated);
      }
    }));
  }

  /** Charge (si pas déjà en cache) et renvoie le cache — pour la garde de route. */
  ensureLoaded(companyId: number): Observable<ModuleState[]> {
    if (this.cache) return of(this.cache);
    return this.getModules(companyId).pipe(catchError(() => of([])));
  }

  /** Lecture synchrone du cache — true par défaut si pas encore chargé (fail-open). */
  isInstalledCached(code: string): boolean {
    if (!this.cache) return true;
    const found = this.cache.find(m => m.code === code);
    return found ? found.installed : true;
  }
}

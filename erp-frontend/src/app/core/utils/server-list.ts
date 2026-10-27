import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

/**
 * Listes paginées côté serveur (ListQueryService côté backend) : une page de lignes, avec le nombre
 * total et les totaux de TOUTES les lignes filtrées. Paramètres reconnus : page, size, state,
 * dateFrom, dateTo, journalId, warehouseId, pointVenteId, partnerId, search, groupBy + groupKey,
 * et les filtres propres à chaque liste.
 */
export interface ListPage<T> {
  content: T[];
  totalElements: number;
  page: number;
  size: number;
  totals: Record<string, number>;
}

export interface ListGroup {
  key: string;
  label: string;
  count: number;
  totals: Record<string, number>;
}

export type ListQuery = Record<string, string | number | boolean | null | undefined>;

/** Taille de page par défaut des écrans de liste. */
export const PAGE_SIZE = 50;

/** Paramètres HTTP d'une requête de liste : valeurs vides, nulles et « all » omises. */
export function listParams(query: ListQuery): HttpParams {
  let params = new HttpParams();
  for (const [k, v] of Object.entries(query)) {
    if (v === null || v === undefined || v === '' || v === 'all') continue;
    params = params.set(k, String(v));
  }
  return params;
}

export function getListPage<T>(http: HttpClient, url: string, query: ListQuery): Observable<ListPage<T>> {
  return http.get<ListPage<T>>(url, { params: listParams(query) });
}

export function getListGroups(http: HttpClient, url: string, query: ListQuery): Observable<ListGroup[]> {
  return http.get<ListGroup[]>(url, { params: listParams(query) });
}

/** Toutes les lignes d'une liste filtrée, page par page (exports Excel). */
export async function fetchAllPages<T>(fetchPage: (page: number, size: number) => Observable<ListPage<T>>): Promise<T[]> {
  const size = 500;
  const rows: T[] = [];
  for (let page = 0; ; page++) {
    const r = await firstValueFrom(fetchPage(page, size));
    rows.push(...r.content);
    if ((page + 1) * size >= r.totalElements || r.content.length === 0) return rows;
  }
}

/**
 * État d'une liste regroupée : groupes calculés par le serveur, lignes d'un groupe chargées à son
 * ouverture puis par tranches (« Afficher plus »).
 */
export class GroupedList<T> {
  groups: ListGroup[] = [];
  private readonly items = new Map<string, { rows: T[]; total: number; page: number; loading: boolean }>();
  private readonly expanded = new Set<string>();

  constructor(private readonly fetchPage: (groupKey: string, page: number) => Observable<ListPage<T>>) {}

  reset(groups: ListGroup[] = []): void {
    this.groups = groups;
    this.items.clear();
    this.expanded.clear();
  }

  isExpanded(key: string): boolean { return this.expanded.has(key); }

  toggle(key: string): void {
    if (this.expanded.has(key)) { this.expanded.delete(key); return; }
    this.expanded.add(key);
    if (!this.items.has(key)) this.loadMore(key);
  }

  rows(key: string): T[] { return this.items.get(key)?.rows ?? []; }

  hasMore(key: string): boolean {
    const e = this.items.get(key);
    return !!e && !e.loading && e.rows.length < e.total;
  }

  loadMore(key: string): void {
    const e = this.items.get(key) ?? { rows: [], total: 0, page: -1, loading: false };
    if (e.loading) return;
    e.loading = true;
    this.items.set(key, e);
    this.fetchPage(key, e.page + 1).subscribe({
      next: r => { e.rows = [...e.rows, ...r.content]; e.total = r.totalElements; e.page = r.page; e.loading = false; },
      error: () => { e.loading = false; }
    });
  }

  /** Somme d'un total sur tous les groupes (ligne de totaux du tableau). */
  sum(key: string): number { return this.groups.reduce((s, g) => s + (Number(g.totals?.[key]) || 0), 0); }

  get count(): number { return this.groups.reduce((s, g) => s + g.count, 0); }
}

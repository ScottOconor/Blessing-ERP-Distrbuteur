import * as XLSX from 'xlsx';

/** Génère et télécharge un fichier Excel modèle */
export function downloadExcelTemplate(headers: string[], sampleRow: (string | number)[], fileName: string): void {
  const ws = XLSX.utils.aoa_to_sheet([headers, sampleRow]);
  // Largeur des colonnes
  ws['!cols'] = headers.map(() => ({ wch: 22 }));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Modèle');
  XLSX.writeFile(wb, fileName);
}

/** Parse un fichier Excel et retourne un tableau d'objets { [header]: value } */
export function parseExcelFile(file: File): Promise<Record<string, any>[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target!.result as ArrayBuffer);
        const wb = XLSX.read(data, { type: 'array' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json<Record<string, any>>(ws, { defval: '' });
        resolve(rows);
      } catch (err) {
        reject(new Error('Impossible de lire le fichier Excel. Assurez-vous qu\'il s\'agit d\'un fichier .xlsx ou .xls valide.'));
      }
    };
    reader.onerror = () => reject(new Error('Erreur lors de la lecture du fichier.'));
    reader.readAsArrayBuffer(file);
  });
}

// ── Export / réimport pour mise à jour ──────────────────────────────────────
// Principe commun à tous les écrans : on exporte les lignes sélectionnées avec les MÊMES
// colonnes que le modèle d'import, plus une colonne "ID". Le fichier modifié se réimporte
// tel quel : une ligne dont l'ID (ou la clé métier : référence, code, nom...) correspond à
// un enregistrement existant le met à jour au lieu de créer un doublon.

/** Colonne technique ajoutée en tête des exports (identifiant interne, ne pas modifier). */
export const ID_HEADER = 'ID';

/** Exporte des lignes vers un fichier Excel daté (baseName_AAAA-MM-JJ.xlsx). */
export function exportRowsToExcel(headers: string[], rows: unknown[][], baseName: string): void {
  const data = rows.map(r => r.map(v => (v === null || v === undefined ? '' : v)));
  const ws = XLSX.utils.aoa_to_sheet([headers, ...data]);
  ws['!cols'] = headers.map(h => ({ wch: Math.max(12, Math.min(40, h.length + 4)) }));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Export');
  const stamp = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(wb, `${baseName}_${stamp}.xlsx`);
}

/** ID interne lu dans la colonne "ID" d'une ligne importée (undefined si absent/invalide). */
export function rowId(row: Record<string, any>): number | undefined {
  const raw = row[ID_HEADER] ?? row['id'] ?? row['Id'];
  if (raw === undefined || raw === null || String(raw).trim() === '') return undefined;
  const n = Number(String(raw).trim());
  return Number.isInteger(n) && n > 0 ? n : undefined;
}

/** Comparaison texte insensible à la casse, aux accents et aux espaces superflus. */
export function sameText(a: unknown, b: unknown): boolean {
  const norm = (v: unknown) => String(v ?? '').trim().toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ');
  const na = norm(a);
  return na !== '' && na === norm(b);
}

/** "Oui"/"Non" pour l'export des booléens. */
export function yesNo(v: boolean | undefined | null): string {
  return v ? 'Oui' : 'Non';
}

/** Sélection de lignes par case à cocher, utilisée pour choisir ce qu'on exporte. */
export class RowSelection<T> {
  private readonly ids = new Set<unknown>();

  constructor(private readonly key: (item: T) => unknown = (item: any) => item.id) {}

  get count(): number { return this.ids.size; }

  isSelected(item: T): boolean { return this.ids.has(this.key(item)); }

  toggle(item: T): void {
    const k = this.key(item);
    if (this.ids.has(k)) this.ids.delete(k); else this.ids.add(k);
  }

  allSelected(items: T[]): boolean {
    return items.length > 0 && items.every(i => this.ids.has(this.key(i)));
  }

  someSelected(items: T[]): boolean {
    return !this.allSelected(items) && items.some(i => this.ids.has(this.key(i)));
  }

  toggleAll(items: T[]): void {
    if (this.allSelected(items)) items.forEach(i => this.ids.delete(this.key(i)));
    else items.forEach(i => this.ids.add(this.key(i)));
  }

  clear(): void { this.ids.clear(); }

  /** Lignes à exporter : la sélection (prise dans `all`) si elle existe, sinon les lignes affichées. */
  rowsToExport(all: T[], displayed: T[]): T[] {
    return this.count > 0 ? all.filter(i => this.ids.has(this.key(i))) : displayed;
  }
}

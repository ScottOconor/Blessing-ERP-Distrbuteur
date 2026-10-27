import * as ExcelJS from 'exceljs';

// Lecture et écriture des fichiers Excel par exceljs. La bibliothèque xlsx (SheetJS 0.18.5, dernière
// version publiée sur npm) n'est plus utilisée : elle porte deux avis de sécurité sur la lecture de
// fichiers piégés (GHSA-4r6h-8v6p-xvw6, GHSA-5pgg-2g8v-p4x9) corrigés seulement hors npm.
// Conséquence : l'ancien format binaire .xls (Excel 97-2003) n'est plus lu ; il faut l'enregistrer en .xlsx.

const XLSX_MIME = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

/** Écrit un classeur d'une feuille (en-têtes + lignes) et le télécharge. */
async function writeSheet(sheetName: string, rows: unknown[][], widths: number[], fileName: string): Promise<void> {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet(sheetName);
  rows.forEach(r => ws.addRow(r));
  widths.forEach((w, i) => { ws.getColumn(i + 1).width = w; });
  const buf = await wb.xlsx.writeBuffer();
  const url = URL.createObjectURL(new Blob([buf], { type: XLSX_MIME }));
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
}

/** Génère et télécharge un fichier Excel modèle */
export function downloadExcelTemplate(headers: string[], sampleRow: (string | number)[], fileName: string): Promise<void> {
  return writeSheet('Modèle', [headers, sampleRow], headers.map(() => 22), fileName);
}

/** Exporte des objets (une colonne par clé) vers un fichier Excel. */
export function exportObjectsToExcel(data: Record<string, unknown>[], sheetName: string, widths: number[], fileName: string): Promise<void> {
  const headers = data.length ? Object.keys(data[0]) : [];
  return writeSheet(sheetName, [headers, ...data.map(d => headers.map(h => d[h] ?? ''))], widths, fileName);
}

/** Date Excel (nombre de jours depuis le 30/12/1899), comme la lecture précédente la renvoyait. */
function excelSerial(d: Date): number {
  return (d.getTime() - Date.UTC(1899, 11, 30)) / 86400000;
}

/** Valeur brute d'une cellule : formules → résultat, texte enrichi / lien → texte, date → date Excel. */
function cellValue(v: ExcelJS.CellValue): any {
  if (v === null || v === undefined) return '';
  if (v instanceof Date) return excelSerial(v);
  if (typeof v !== 'object') return v;
  const o = v as any;
  if ('result' in o || 'formula' in o || 'sharedFormula' in o) return cellValue(o.result);
  if (Array.isArray(o.richText)) return o.richText.map((t: any) => t.text).join('');
  if ('text' in o) return typeof o.text === 'object' ? cellValue(o.text) : o.text;
  if ('error' in o) return o.error;
  return String(v);
}

/** Lit la première feuille : une ligne d'en-têtes puis un objet { [en-tête]: valeur } par ligne non vide. */
export async function parseExcelBuffer(data: ArrayBuffer): Promise<Record<string, any>[]> {
  const head = new Uint8Array(data.slice(0, 4));
  if (head[0] === 0xd0 && head[1] === 0xcf && head[2] === 0x11 && head[3] === 0xe0) {
    throw new Error('Format .xls (Excel 97-2003) non pris en charge : enregistrez le fichier au format .xlsx puis réimportez-le.');
  }
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.load(data);
  const ws = wb.worksheets[0];
  if (!ws) return [];

  // En-têtes : cellule absente → __EMPTY, __EMPTY_1… ; doublon → Nom_1, Nom_2… (mêmes noms qu'auparavant)
  const headerRow = ws.getRow(1);
  const width = Math.max(headerRow.cellCount, ws.columnCount);
  const used = new Map<string, number>();
  const headers: string[] = [];
  for (let c = 1; c <= width; c++) {
    const raw = headerRow.getCell(c).value;
    const h0 = raw === null || raw === undefined ? '__EMPTY' : String(cellValue(raw));
    const n = used.get(h0) ?? 0;
    used.set(h0, n + 1);
    headers.push(n === 0 ? h0 : `${h0}_${n}`);
  }

  const rows: Record<string, any>[] = [];
  for (let r = 2; r <= ws.rowCount; r++) {
    const row = ws.getRow(r);
    const obj: Record<string, any> = {};
    let empty = true;
    headers.forEach((h, i) => {
      const v = cellValue(row.getCell(i + 1).value);
      if (v !== '') empty = false;
      obj[h] = v;
    });
    if (!empty) rows.push(obj);
  }
  return rows;
}

/** Parse un fichier Excel et retourne un tableau d'objets { [header]: value } */
export function parseExcelFile(file: File): Promise<Record<string, any>[]> {
  return file.arrayBuffer()
    .catch(() => { throw new Error('Erreur lors de la lecture du fichier.'); })
    .then(data => parseExcelBuffer(data).catch((err: Error) => {
      throw new Error(err.message.startsWith('Format .xls') ? err.message
        : 'Impossible de lire le fichier Excel. Assurez-vous qu\'il s\'agit d\'un fichier .xlsx valide.');
    }));
}

// ── Export / réimport pour mise à jour ──────────────────────────────────────
// Principe commun à tous les écrans : on exporte les lignes sélectionnées avec les MÊMES
// colonnes que le modèle d'import, plus une colonne "ID". Le fichier modifié se réimporte
// tel quel : une ligne dont l'ID (ou la clé métier : référence, code, nom...) correspond à
// un enregistrement existant le met à jour au lieu de créer un doublon.

/** Colonne technique ajoutée en tête des exports (identifiant interne, ne pas modifier). */
export const ID_HEADER = 'ID';

/** Exporte des lignes vers un fichier Excel daté (baseName_AAAA-MM-JJ.xlsx). */
export function exportRowsToExcel(headers: string[], rows: unknown[][], baseName: string): Promise<void> {
  const data = rows.map(r => r.map(v => (v === null || v === undefined ? '' : v)));
  const stamp = new Date().toISOString().slice(0, 10);
  return writeSheet('Export', [headers, ...data],
    headers.map(h => Math.max(12, Math.min(40, h.length + 4))), `${baseName}_${stamp}.xlsx`);
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

import { normText } from './excel-import.util';

// Lecture du fichier d'import des frais d'enlèvement avec leurs suppléments clients.
// Une ligne par client : la catégorie, le client et son supplément suffisent. La catégorie peut
// être répétée ou laissée vide sous la première ligne, et les montants de base sont facultatifs.

export const ENL_CLIENT_HEADER = 'Client (référence ou nom)';
export const ENL_SUPPLEMENT_HEADER = 'Supplément client TTC';

const CATEGORY_KEYS = ["Catégorie d'article", 'Catégorie'];
const MONTANT_KEYS = ["Montant de l'enlèvement", "Montant de l'enlevement"];
const COUT_KEYS = ['Cout enlevement', 'Coût enlèvement'];

// Les sous-champs "Clients spécifiques/…" d'un export Odoo ne sont volontairement pas reconnus :
// leur montant est un tarif complet, alors qu'ici il s'ajoute au tarif de base.
const CLIENT_COLUMN = /^client( |$)|^ref(erence)?\.? client/;
const SUPPLEMENT_COLUMN = /^(supplement|frais|montant)( ttc)?( specifique)? client/;
/** Référence interne Odoo : n'indique ni le client ni le montant. */
const ODOO_REF = /^enlevement\.client,\d+$/;

/** Ce dont la lecture a besoin d'un client : mêmes champs que SalesClient. */
export interface EnlImportPartner { id?: number; ref?: string; name: string; }

export interface EnlImportClient { partnerId: number; partnerName: string; montant: number; }

export interface EnlImportGroup {
  categoryName: string;
  /** undefined : colonne absente ou cellule vide, la valeur actuelle est conservée. */
  montantFixe?: number;
  coutEnlevement?: number;
  clients: EnlImportClient[];
}

export interface EnlImportPlan {
  groups: EnlImportGroup[];
  /** Lignes écartées, avec leur raison, à montrer avant de confirmer l'import. */
  issues: string[];
  /** Lignes ne portant qu'une référence Odoo, inexploitable. */
  odooRefs: number;
}

/** Montant Excel : nombre, ou texte du type "1 200,50". null si vide ou illisible. */
export function parseImportAmount(v: unknown): number | null {
  if (typeof v === 'number') return Number.isFinite(v) ? v : null;
  const s = String(v ?? '').replace(/[\s  ]/g, '').replace(',', '.');
  if (s === '') return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

function indexBy(partners: EnlImportPartner[], key: (p: EnlImportPartner) => unknown): Map<string, EnlImportPartner[]> {
  const index = new Map<string, EnlImportPartner[]>();
  for (const p of partners) {
    const k = normText(key(p));
    if (k) index.set(k, [...(index.get(k) ?? []), p]);
  }
  return index;
}

/** Montant de la colonne ; undefined si la colonne est absente ou la cellule vide. */
function columnAmount(row: Record<string, any>, keys: string[]): number | undefined {
  const key = keys.find(k => k in row);
  return key ? (parseImportAmount(row[key]) ?? undefined) : undefined;
}

/** Regroupe les lignes par catégorie et rattache chaque ligne client à sa fiche. */
export function buildEnlevementImportPlan(rows: Record<string, any>[], partners: EnlImportPartner[]): EnlImportPlan {
  const headers = Object.keys(rows[0] ?? {});
  const supplementKey = headers.find(h => SUPPLEMENT_COLUMN.test(normText(h)));
  const clientKey = headers.find(h => h !== supplementKey && CLIENT_COLUMN.test(normText(h)));

  const byRef = indexBy(partners, p => p.ref);
  const byName = indexBy(partners, p => p.name);
  const groups = new Map<string, EnlImportGroup>();
  const issues: string[] = [];
  let odooRefs = 0;
  let current: EnlImportGroup | undefined;

  for (const row of rows) {
    const catKey = CATEGORY_KEYS.find(k => row[k] !== undefined && String(row[k]).trim() !== '');
    if (catKey) {
      const categoryName = String(row[catKey]).trim();
      const montantFixe = columnAmount(row, MONTANT_KEYS);
      const coutEnlevement = columnAmount(row, COUT_KEYS);
      const known = groups.get(normText(categoryName));
      if (known) {
        const differs = (a?: number, b?: number) => a !== undefined && b !== undefined && a !== b;
        if (differs(known.montantFixe, montantFixe) || differs(known.coutEnlevement, coutEnlevement)) {
          issues.push(`${categoryName} : montants différents selon les lignes, ceux de la première ligne sont retenus.`);
        }
        known.montantFixe ??= montantFixe;
        known.coutEnlevement ??= coutEnlevement;
        current = known;
      } else {
        current = { categoryName, montantFixe, coutEnlevement, clients: [] };
        groups.set(normText(categoryName), current);
      }
    }

    const label = clientKey ? String(row[clientKey] ?? '').trim() : '';
    if (!label) {
      if (Object.values(row).some(v => ODOO_REF.test(String(v).trim()))) odooRefs++;
      continue;
    }
    if (!current) {
      issues.push(`${label} : aucune catégorie au-dessus de cette ligne.`);
      continue;
    }

    const found = byRef.get(normText(label)) ?? byName.get(normText(label)) ?? [];
    if (found.length === 0) { issues.push(`${current.categoryName} : client « ${label} » introuvable.`); continue; }
    if (found.length > 1) { issues.push(`${current.categoryName} : plusieurs clients « ${label} », utilisez la référence.`); continue; }
    const partner = found[0];

    const montant = supplementKey ? parseImportAmount(row[supplementKey]) : null;
    if (montant === null || montant < 0) {
      issues.push(`${current.categoryName} : supplément manquant ou invalide pour « ${label} ».`);
      continue;
    }

    const twin = current.clients.find(c => c.partnerId === partner.id);
    if (twin) {
      if (twin.montant !== montant) issues.push(`${current.categoryName} : « ${label} » figure avec deux suppléments, le premier est retenu.`);
      continue;
    }
    current.clients.push({ partnerId: partner.id!, partnerName: partner.name, montant });
  }

  return { groups: [...groups.values()], issues, odooRefs };
}

import { CONSIGNE_CODES } from './consigne-codes';

export interface PackageTotals { colis: number; pet: number; casier: number; }

/** Totaux d'un bordereau, mêmes règles que les factures : colis hors consignes, PET par catégorie,
 *  casiers par unité. Sert à l'affichage pendant la saisie, avant l'enregistrement. */
export function computePackageTotals(
  lines: { productId: number | null; qty: number }[],
  products: { id?: number; defaultCode?: string; categoryName?: string; uomName?: string }[]
): PackageTotals {
  const totals: PackageTotals = { colis: 0, pet: 0, casier: 0 };
  for (const line of lines) {
    const product = products.find(p => p.id === Number(line.productId));
    if (!product || CONSIGNE_CODES.has((product.defaultCode || '').trim().toUpperCase())) continue;
    const qty = Number(line.qty) || 0;
    totals.colis += qty;
    if (product.categoryName?.trim().toUpperCase().startsWith('PET')) totals.pet += qty;
    if (product.uomName?.toLowerCase().includes('casier')) totals.casier += qty;
  }
  return totals;
}

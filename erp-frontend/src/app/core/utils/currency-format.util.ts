/**
 * Formate un montant en FCFA avec un vrai espace comme séparateur de milliers.
 *
 * Intl.NumberFormat('fr-FR') insère U+202F (espace fine insécable) comme séparateur de groupe,
 * un caractère quasi invisible dans de nombreuses polices/navigateurs — un montant comme 150000
 * s'affiche alors "150000" au lieu de "150 000", illisible. On reformate donc avec une espace
 * normale (U+0020) pour un rendu fiable partout.
 */
export function formatFCFA(v: number | null | undefined, withSuffix = true): string {
  const amount = v ?? 0;
  const formatted = new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount).replace(/[  ]/g, ' ');
  return withSuffix ? `${formatted} FCFA` : formatted;
}

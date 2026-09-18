// src/app/core/utils/currency-format.util.ts
function formatFCFA(v, withSuffix = true) {
  const amount = v ?? 0;
  const formatted = new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount).replace(/[  ]/g, " ");
  return withSuffix ? `${formatted} FCFA` : formatted;
}

export {
  formatFCFA
};
//# sourceMappingURL=chunk-TKYALNMA.js.map

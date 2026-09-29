/**
 * Type de compte au format relu par l'import du plan comptable
 * (ImportService.mapOdooAccountType côté serveur) — utilisé par les exports.
 */
export function accountImportType(accountType?: string, internalType?: string): string {
  switch (accountType) {
    case 'asset':
      return internalType === 'receivable' ? 'asset_receivable'
        : internalType === 'liquidity' ? 'asset_cash' : 'asset_current';
    case 'liability':
      return internalType === 'payable' ? 'liability_payable' : 'liability_current';
    case 'equity':      return 'equity';
    case 'income':      return 'income';
    case 'expense':     return 'expense';
    case 'off_balance': return 'hors bilan';
    default:            return 'other';
  }
}

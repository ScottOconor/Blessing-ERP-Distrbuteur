export interface ReportRequest {
  dateFrom: string;
  dateTo: string;
  companyId: number;
  journalIds?: number[];
  displayAccount?: string; // 'all' | 'movement'
  resultSelection?: string; // 'customer' | 'supplier' | 'customer_supplier'
  accountIds?: number[];
  periodType?: string;          // 'monthly' | 'quarterly' | 'yearly' | 'custom'
  includeUnposted?: boolean;    // inclure les écritures non validées
  comparisonEnabled?: boolean;  // comparaison N-1
  mode?: string;                // 'mensuel' | 'annuel' (compte de résultat)
}

export interface BalanceLine4Cols {
  accountCode: string;
  accountName: string;
  debit: number;
  credit: number;
  finalDebit: number;
  finalCredit: number;
}

export interface BalanceLine6Cols extends BalanceLine4Cols {
  initialDebit: number;
  initialCredit: number;
}

export interface PartnerBalanceLine {
  partnerRef: string;
  accountNumber: string;
  partnerName: string;
  initialDebit: number;
  initialCredit: number;
  debit: number;
  credit: number;
  finalDebit: number;
  finalCredit: number;
  type: string;
}

export interface GrandLivreLine {
  date: string;
  moveRef: string;
  journalCode: string;
  label: string;
  debit: number;
  credit: number;
  balance: number;
}

export interface GrandLivreAccount {
  accountCode: string;
  accountName: string;
  lines: GrandLivreLine[];
  totalDebit: number;
  totalCredit: number;
  finalBalance: number;
}

export interface BilanLine {
  code: string;
  label: string;
  brut?: number;
  amort?: number;
  net: number;
  netPrevious?: number;
  isTotal?: boolean;
  isSectionHeader?: boolean;
}

export interface CompteResultatLine {
  code: string;
  label: string;
  sign?: string;
  current: number;
  previous?: number;
  isTotal?: boolean;
  isSectionHeader?: boolean;
}

export interface AccountMoveLine {
  id?: number;
  accountId: number;
  accountCode?: string;
  accountName?: string;
  partnerId?: number;
  partnerName?: string;
  name: string;
  debit: number;
  credit: number;
  analyticAccountId?: number | null;
  analyticAccountCode?: string;
  analyticAccountName?: string;
}

export interface AccountMove {
  id?: number;
  name?: string;
  date: string;
  ref?: string;
  state?: string; // draft/posted/cancel
  journalId: number;
  journalName?: string;
  partnerId?: number;
  partnerName?: string;
  lines: AccountMoveLine[];
  companyId: number;
  totalDebit?: number;
  totalCredit?: number;
  /** ID de l'extourne générée — non null = déjà extournée, bouton désactivé */
  reversalId?: number;
  /** Vrai si cette écriture est elle-même une extourne — ne peut pas être extournée */
  isReversal?: boolean;
  createdAt?: string;
  createdBy?: string;
  updatedBy?: string;
  updatedAt?: string;
  // Traçabilité validation
  postedBy?: string;
  postedAt?: string;
  // Traçabilité remise en brouillon
  resetToDraftBy?: string;
  resetToDraftAt?: string;
}

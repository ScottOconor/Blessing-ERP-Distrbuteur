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
}

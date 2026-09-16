export interface AccountAccount {
  id?: number;
  code: string;
  name: string;
  accountType: string;
  internalType: string;
  deprecated: boolean;
  reconcile: boolean;
  companyId: number;
}

export interface AccountJournal {
  id?: number;
  code: string;
  name: string;
  type: string; // sale/purchase/cash/bank/general
  defaultDebitAccountId?: number;
  defaultDebitAccountCode?: string;
  defaultDebitAccountName?: string;
  defaultCreditAccountId?: number;
  defaultCreditAccountCode?: string;
  defaultCreditAccountName?: string;
  companyId: number;
  active: boolean;
}

export interface Partner {
  id?: number;
  ref?: string;
  name: string;
  type: string;
  phone?: string;
  email?: string;
  address?: string;
  companyId: number;
  receivableAccountCode?: string;
}

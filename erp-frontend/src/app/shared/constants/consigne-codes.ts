/**
 * Codes produits consigne (emballages consignés) — identiques au module Odoo blessing_consulting.
 * Source unique : avant cette constante, 5 fichiers dupliquaient chacun leur propre liste, et
 * sales/orders/order-form.component.ts avait dérivé (19 codes au lieu de 38) — une commande vente
 * avec un emballage manquant n'était pas traitée en consigne à la saisie alors que la facture
 * générée à partir de la même commande la traitait bien comme consigne.
 */
export const CONSIGNE_NAMES: Record<string, string> = {
  CB12:   'CASIER BOUTEILLE 12',
  CB24:   'CASIER BOUTEILLE 24',
  CB12M:  'CASIER BOUTEILLE 12 (METAL)',
  CB24M:  'CASIER BOUTEILLE 24 (METAL)',
  CV12:   'CASIER VERRE 12',
  CV24:   'CASIER VERRE 24',
  CBG12:  'CASIER BOUTEILLE GUINNESS 12',
  CBG15:  'CASIER BOUTEILLE GUINNESS 15',
  CBG24:  'CASIER BOUTEILLE GUINNESS 24',
  CVG12:  'CASIER VERRE GUINNESS 12',
  CVG15:  'CASIER VERRE GUINNESS 15',
  CVG24:  'CASIER VERRE GUINNESS 24',
  VIP12:  'VIP 12',
  VIP24:  'VIP 24',
  VCP12:  'VCP 12',
  VCP24:  'VCP 24',
  VIPG12: 'VIP GUINNESS 12',
  VIPG15: 'VIP GUINNESS 15',
  VIPG24: 'VIP GUINNESS 24',
  EGUI12: 'EMBALLAGE GUINNESS 12',
  EGUI15: 'EMBALLAGE GUINNESS 15',
  EGUI24: 'EMBALLAGE GUINNESS 24',
  PP:     'PALETTE PLASTIQUE',
  PB:     'PALETTE BOIS',
  TT:     'TONNELET',
  BPM:    'BOUTEILLE PET METAL',
  BGM:    'BOUTEILLE GUINNESS METAL',
  CAIMET: 'CAISSE METALLIQUE',
  CONS001: 'CONSIGNE DIVERSE',
  INPN33: 'EMBALLAGE INPN 33',
  EMB1:   'EMBALLAGE 1',
  EMB2:   'EMBALLAGE 2',
  EMB3:   'EMBALLAGE 3',
  EMB4:   'EMBALLAGE 4',
  EMB5:   'EMBALLAGE 5',
  CAISMB: 'CAISSE METAL BOUTEILLE',
  'PALT-V': 'PALETTE VERRE',
  PALTPL: 'PALETTE PLASTIQUE (PL)',
  PRC01:  'PORTE-CASIER 01',
  ELV01:  'ELEVATEUR 01',
};

export const CONSIGNE_CODES: Set<string> = new Set(Object.keys(CONSIGNE_NAMES));

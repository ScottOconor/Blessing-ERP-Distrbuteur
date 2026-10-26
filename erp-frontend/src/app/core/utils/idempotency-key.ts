import { HttpHeaders } from '@angular/common/http';

/**
 * Clé d'idempotence d'une opération financière (paiement, opération de caisse) : créée une fois
 * par saisie et renvoyée telle quelle si la demande doit être répétée (erreur réseau, délai
 * dépassé) — le serveur reconnaît alors la répétition et ne crée pas une seconde opération.
 * getRandomValues plutôt que randomUUID : ce dernier n'existe qu'en HTTPS ou sur localhost, or
 * l'ERP est souvent ouvert en http:// sur le réseau local.
 */
export function newIdempotencyKey(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
}

export function idempotencyHeaders(key?: string | null): { headers?: HttpHeaders } {
  return key ? { headers: new HttpHeaders({ 'Idempotency-Key': key }) } : {};
}

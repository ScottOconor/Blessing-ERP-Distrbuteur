/**
 * Motif lisible d'une erreur HTTP, jamais un simple « Erreur » : le message du serveur s'il y en a
 * un, sinon une explication selon le statut (serveur injoignable, accès refusé, délai dépassé…),
 * et au pire le code HTTP pour pouvoir chercher la cause.
 */
export function httpErrorMessage(e: any): string {
  const body = e?.error;
  if (body && typeof body === 'object') {
    if (typeof body.message === 'string' && body.message) {
      const details = body.errors && typeof body.errors === 'object'
        ? Object.entries(body.errors).map(([k, v]) => `${k} : ${v}`).join(', ')
        : '';
      return details ? `${body.message} (${details})` : body.message;
    }
    if (typeof body.error === 'string' && body.error) {
      return body.required ? `${body.error} (droit requis : ${body.required})` : body.error;
    }
  }
  if (typeof body === 'string' && body.trim() && !body.trim().startsWith('<')) {
    return body.trim().slice(0, 300);
  }
  const status = e?.status;
  switch (status) {
    case 0:   return 'Serveur injoignable : vérifiez que l\'application est démarrée et la connexion réseau.';
    case 401: return 'Session expirée : reconnectez-vous.';
    case 403: return 'Accès refusé.';
    case 404: return 'Élément introuvable (supprimé entre-temps ?).';
    case 413: return 'Données trop volumineuses (photo trop lourde ?).';
    case 502: case 503: case 504:
      return 'Le serveur ne répond pas ou a mis trop de temps à répondre. Réessayez dans un instant.';
  }
  return status ? `Erreur du serveur (HTTP ${status}${e?.statusText ? ' ' + e.statusText : ''}).` : 'Erreur inconnue.';
}

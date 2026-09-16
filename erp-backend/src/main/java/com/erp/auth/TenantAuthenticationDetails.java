package com.erp.auth;

/** Attaché à l'Authentication par JwtAuthFilter pour porter le companyId du JWT
 *  jusqu'au SecurityContext, lu ensuite via SecurityUtils.currentCompanyId(). */
public record TenantAuthenticationDetails(Long companyId, String remoteAddress) {
}

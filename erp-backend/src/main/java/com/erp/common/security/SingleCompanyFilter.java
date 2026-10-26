package com.erp.common.security;

import com.erp.common.service.SingleCompany;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletRequestWrapper;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Remplace le paramètre de requête companyId de tout appel /api/** par la société unique de
 * l'installation (voir SingleCompany). Les listes (factures, clients, écritures, stocks...) se
 * filtrent sur ce paramètre : sans ce filtre, un utilisateur pouvait lire les données d'une autre
 * société simplement en changeant companyId dans l'URL. Le corps JSON est traité de la même façon
 * par SingleCompanyBodyAdvice.
 */
@Component
@RequiredArgsConstructor
public class SingleCompanyFilter extends OncePerRequestFilter {

    static final String PARAM = "companyId";

    private final SingleCompany singleCompany;

    @Override
    protected boolean shouldNotFilter(@NonNull HttpServletRequest request) {
        return !request.getRequestURI().startsWith("/api/") || request.getParameter(PARAM) == null;
    }

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain chain) throws ServletException, IOException {
        Long companyId = singleCompany.getId();
        if (companyId == null) {
            chain.doFilter(request, response);
            return;
        }
        chain.doFilter(new CompanyParamRequest(request, String.valueOf(companyId)), response);
    }

    private static final class CompanyParamRequest extends HttpServletRequestWrapper {
        private final String companyId;

        CompanyParamRequest(HttpServletRequest request, String companyId) {
            super(request);
            this.companyId = companyId;
        }

        @Override
        public String getParameter(String name) {
            return PARAM.equals(name) ? companyId : super.getParameter(name);
        }

        @Override
        public String[] getParameterValues(String name) {
            return PARAM.equals(name) ? new String[]{companyId} : super.getParameterValues(name);
        }

        @Override
        public Map<String, String[]> getParameterMap() {
            Map<String, String[]> params = new HashMap<>(super.getParameterMap());
            params.put(PARAM, new String[]{companyId});
            return params;
        }
    }
}

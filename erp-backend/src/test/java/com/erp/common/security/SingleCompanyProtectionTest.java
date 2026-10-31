package com.erp.common.security;

import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.common.service.SingleCompany;
import jakarta.servlet.http.HttpServletRequest;
import lombok.Data;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.when;

/** Le client ne choisit jamais la société : paramètre d'URL et corps JSON sont remplacés. */
@ExtendWith(MockitoExtension.class)
class SingleCompanyProtectionTest {

    @Data
    static class Dto {
        private Long companyId;
    }

    @Mock private CompanyRepository companyRepository;
    private SingleCompany singleCompany;

    private Company company(long id) {
        Company c = new Company();
        c.setId(id);
        return c;
    }

    @BeforeEach
    void setUp() {
        singleCompany = new SingleCompany(companyRepository);
        lenient().when(companyRepository.findFirstByOrderByIdAsc()).thenReturn(Optional.of(company(1L)));
    }

    private Object afterRead(Object body) {
        return new SingleCompanyBodyAdvice(singleCompany).afterBodyRead(body, null, null, Object.class, null);
    }

    @Test
    void parametreDUrlRemplace() throws Exception {
        MockHttpServletRequest request = new MockHttpServletRequest("GET", "/api/stock/categories");
        request.setParameter("companyId", "2");
        HttpServletRequest[] seen = new HttpServletRequest[1];

        new SingleCompanyFilter(singleCompany).doFilter(request, new MockHttpServletResponse(),
                (req, res) -> seen[0] = (HttpServletRequest) req);

        assertThat(seen[0].getParameter("companyId")).isEqualTo("1");
        assertThat(seen[0].getParameterMap().get("companyId")).containsExactly("1");
    }

    @Test
    void corpsObjetEtListeRemplaces() {
        Dto dto = new Dto();
        dto.setCompanyId(2L);
        Dto inList = new Dto();
        inList.setCompanyId(2L);

        afterRead(dto);
        afterRead(new ArrayList<>(List.of(inList)));

        assertThat(dto.getCompanyId()).isEqualTo(1L);
        assertThat(inList.getCompanyId()).isEqualTo(1L);
    }

    @Test
    void corpsMapRemplaceSansAjouterLaCle() {
        Map<String, Object> withCompany = new HashMap<>(Map.of("companyId", "2"));
        Map<String, Object> withoutCompany = new HashMap<>(Map.of("mode", "x"));

        afterRead(withCompany);
        afterRead(withoutCompany);

        assertThat(withCompany.get("companyId")).isEqualTo(1L);
        assertThat(withoutCompany).doesNotContainKey("companyId");
    }

    @Test
    void identifiantReluApresUneRestauration() {
        assertThat(singleCompany.getId()).isEqualTo(1L);

        when(companyRepository.findFirstByOrderByIdAsc()).thenReturn(Optional.of(company(7L)));

        assertThat(singleCompany.getId()).isEqualTo(7L);
    }
}

package com.erp.config.permission;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider;
import org.springframework.core.annotation.AnnotatedElementUtils;
import org.springframework.core.type.filter.AnnotationTypeFilter;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Refus par défaut (PermissionFilter) : chaque route /api doit avoir une règle dans
 * PermissionService, être déclarée ouverte à tout utilisateur connecté, ou être réservée aux
 * administrateurs par @PreAuthorize. Sinon elle serait refusée à tous les autres utilisateurs —
 * ce test signale l'oubli dès le build plutôt qu'en production.
 */
class PermissionCoverageTest {

    private final PermissionService service = new PermissionService();

    @Test
    void chaqueRouteApiEstCouverte() throws Exception {
        ClassPathScanningCandidateComponentProvider scanner = new ClassPathScanningCandidateComponentProvider(false);
        scanner.addIncludeFilter(new AnnotationTypeFilter(RestController.class));

        List<String> uncovered = new ArrayList<>();
        int checked = 0;
        for (BeanDefinition bd : scanner.findCandidateComponents("com.erp")) {
            Class<?> controller = Class.forName(bd.getBeanClassName());
            RequestMapping base = AnnotatedElementUtils.findMergedAnnotation(controller, RequestMapping.class);
            String[] prefixes = base != null && base.path().length > 0 ? base.path() : new String[]{""};

            for (Method method : controller.getDeclaredMethods()) {
                RequestMapping mapping = AnnotatedElementUtils.findMergedAnnotation(method, RequestMapping.class);
                if (mapping == null) continue;
                PreAuthorize pre = method.getAnnotation(PreAuthorize.class);
                boolean adminOnly = pre != null && pre.value().contains("ADMIN") && !pre.value().contains("PERM_");
                String[] paths = mapping.path().length > 0 ? mapping.path() : new String[]{""};

                for (String prefix : prefixes) {
                    for (String path : paths) {
                        String uri = (prefix + path).replaceAll("\\{[^}]+}", "1");
                        if (!uri.startsWith("/api/") || isBypassed(uri)) continue;
                        for (RequestMethod verb : mapping.method()) {
                            checked++;
                            boolean covered = adminOnly
                                    || PermissionFilter.isOpenToAuthenticated(verb.name(), uri)
                                    || service.findRule(verb.name(), uri) != null;
                            if (!covered) uncovered.add(verb + " " + uri + " (" + controller.getSimpleName() + ")");
                        }
                    }
                }
            }
        }
        assertThat(checked).as("routes analysées").isGreaterThan(300);
        assertThat(uncovered).as("routes sans règle de permission").isEmpty();
    }

    @Test
    void routesOuvertesATousLesConnectesLimiteesAuStrictNecessaire() {
        assertThat(PermissionFilter.isOpenToAuthenticated("GET", "/api/config/companies/1")).isTrue();
        assertThat(PermissionFilter.isOpenToAuthenticated("PUT", "/api/config/companies/1")).isFalse();
        assertThat(PermissionFilter.isOpenToAuthenticated("GET", "/api/config/companies")).isFalse();
        assertThat(PermissionFilter.isOpenToAuthenticated("POST", "/api/config/companies/1/logo")).isFalse();
        assertThat(PermissionFilter.isOpenToAuthenticated("GET", "/api/backup/download")).isFalse();
    }

    private static boolean isBypassed(String uri) {
        return PermissionFilter.isBypassed(uri);
    }
}

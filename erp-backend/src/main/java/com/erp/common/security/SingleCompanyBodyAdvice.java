package com.erp.common.security;

import com.erp.common.service.SingleCompany;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.PropertyAccessorFactory;
import org.springframework.core.MethodParameter;
import org.springframework.http.HttpInputMessage;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.RequestBodyAdviceAdapter;

import java.lang.reflect.Type;
import java.util.Collection;

/**
 * Pendant de SingleCompanyFilter pour les corps JSON : tout objet reçu (ou chaque élément d'une
 * liste reçue) qui porte une propriété companyId la voit remplacée par la société unique de
 * l'installation, avant d'atteindre le contrôleur. Une création (client, facture, article...)
 * ne peut donc plus viser une autre société que celle de l'installation.
 */
@ControllerAdvice
@RequiredArgsConstructor
public class SingleCompanyBodyAdvice extends RequestBodyAdviceAdapter {

    private final SingleCompany singleCompany;

    @Override
    public boolean supports(@NonNull MethodParameter methodParameter, @NonNull Type targetType,
                            @NonNull Class<? extends HttpMessageConverter<?>> converterType) {
        return true;
    }

    @Override
    @NonNull
    public Object afterBodyRead(@NonNull Object body, @NonNull HttpInputMessage inputMessage,
                                @NonNull MethodParameter parameter, @NonNull Type targetType,
                                @NonNull Class<? extends HttpMessageConverter<?>> converterType) {
        Long companyId = singleCompany.getId();
        if (companyId == null) return body;
        if (body instanceof Collection<?> items) {
            items.forEach(item -> forceCompany(item, companyId));
        } else {
            forceCompany(body, companyId);
        }
        return body;
    }

    private static void forceCompany(Object target, Long companyId) {
        if (target == null) return;
        BeanWrapper bean = PropertyAccessorFactory.forBeanPropertyAccess(target);
        if (bean.isWritableProperty(SingleCompanyFilter.PARAM)
                && Long.class.equals(bean.getPropertyType(SingleCompanyFilter.PARAM))) {
            bean.setPropertyValue(SingleCompanyFilter.PARAM, companyId);
        }
    }
}

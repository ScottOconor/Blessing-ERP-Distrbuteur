package com.erp.common.service;

import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * Une installation ne gère qu'UNE société. Son identifiant est résolu ici, côté serveur, et
 * remplace tout companyId fourni par le client (SingleCompanyFilter, SingleCompanyBodyAdvice) :
 * le navigateur ne peut plus choisir la société dont il lit ou modifie les données.
 */
@Component
@RequiredArgsConstructor
public class SingleCompany {

    private final CompanyRepository companyRepository;

    // L'identifiant ne change jamais une fois la société créée : inutile de le relire à chaque requête.
    private volatile Long cachedId;

    /** Identifiant de la société unique, ou null si elle n'existe pas encore (premier démarrage). */
    public Long getId() {
        Long id = cachedId;
        if (id == null) {
            id = companyRepository.findFirstByOrderByIdAsc().map(Company::getId).orElse(null);
            cachedId = id;
        }
        return id;
    }

    public boolean exists() {
        return getId() != null;
    }
}

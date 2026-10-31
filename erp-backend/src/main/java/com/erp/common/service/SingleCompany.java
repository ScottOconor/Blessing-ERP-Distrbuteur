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

    /** Identifiant de la société unique, ou null si elle n'existe pas encore (premier démarrage).
     *  Relu à chaque appel : une restauration de sauvegarde peut le changer, et une valeur gardée
     *  en mémoire obligerait à redémarrer. */
    public Long getId() {
        return companyRepository.findFirstByOrderByIdAsc().map(Company::getId).orElse(null);
    }

    public boolean exists() {
        return getId() != null;
    }
}

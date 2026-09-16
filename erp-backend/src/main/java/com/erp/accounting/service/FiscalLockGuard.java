package com.erp.accounting.service;

import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

/**
 * Point d'entrée unique pour vérifier qu'une écriture n'est pas datée dans une
 * période déjà clôturée. Doit être appelé explicitement au début de toute
 * méthode qui crée, modifie, valide, extourne ou remet en brouillon une pièce
 * comptable — voir FiscalClosureService pour la clôture elle-même, qui est la
 * seule à positionner Company.lockDate.
 */
@Component
@RequiredArgsConstructor
public class FiscalLockGuard {

    private final CompanyRepository companyRepository;

    public void assertPeriodOpen(Company company, LocalDate date) {
        if (company == null || date == null) return;
        LocalDate lockDate = company.getLockDate();
        if (lockDate != null && !date.isAfter(lockDate)) {
            throw new IllegalStateException(
                "Période clôturée jusqu'au " + lockDate
                + " : impossible de créer, modifier ou valider une écriture datée du " + date + ".");
        }
    }

    public void assertPeriodOpen(Long companyId, LocalDate date) {
        if (companyId == null || date == null) return;
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Company not found: " + companyId));
        assertPeriodOpen(company, date);
    }
}

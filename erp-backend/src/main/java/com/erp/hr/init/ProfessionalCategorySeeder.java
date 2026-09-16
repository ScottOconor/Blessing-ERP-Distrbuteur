package com.erp.hr.init;

import com.erp.hr.entity.ProfessionalCategory;
import com.erp.hr.repository.ProfessionalCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Initialise, pour une société, la grille catégorielle standard camerounaise (Convention
 * Collective Interprofessionnelle — 12 catégories, du manœuvre au cadre de direction).
 * Idempotent et modifiable ensuite dans Organisation : chaque secteur/convention collective
 * (commerce, transport, bâtiment…) peut affiner ou renommer ces catégories.
 *
 * {@code synchronized} pour la même raison que {@link PayrollSeeder} : éviter les doublons si
 * deux requêtes concurrentes déclenchent le seeding avant que l'une des deux ait rien inséré.
 */
@Component
@RequiredArgsConstructor
public class ProfessionalCategorySeeder {

    private final ProfessionalCategoryRepository repo;

    public synchronized void seedIfEmpty(Long companyId) {
        if (repo.findByCompanyIdOrderBySequenceAscNameAsc(companyId).size() > 0) return;

        List<ProfessionalCategory> cats = new ArrayList<>();
        cats.add(cat("1", "Catégorie 1 - Manœuvre ordinaire", 10, companyId));
        cats.add(cat("2", "Catégorie 2 - Manœuvre spécialisé", 20, companyId));
        cats.add(cat("3", "Catégorie 3 - Ouvrier spécialisé", 30, companyId));
        cats.add(cat("4", "Catégorie 4 - Ouvrier qualifié", 40, companyId));
        cats.add(cat("5", "Catégorie 5 - Ouvrier hautement qualifié / Employé qualifié", 50, companyId));
        cats.add(cat("6", "Catégorie 6 - Employé hautement qualifié / Agent de maîtrise", 60, companyId));
        cats.add(cat("7", "Catégorie 7 - Agent de maîtrise principal / Technicien", 70, companyId));
        cats.add(cat("8", "Catégorie 8 - Technicien supérieur", 80, companyId));
        cats.add(cat("9", "Catégorie 9 - Agent de maîtrise supérieur / Cadre débutant", 90, companyId));
        cats.add(cat("10", "Catégorie 10 - Cadre", 100, companyId));
        cats.add(cat("11", "Catégorie 11 - Cadre supérieur", 110, companyId));
        cats.add(cat("12", "Catégorie 12 - Cadre de direction", 120, companyId));

        repo.saveAll(cats);
    }

    private ProfessionalCategory cat(String code, String name, int seq, Long companyId) {
        return ProfessionalCategory.builder()
                .code(code).name(name).sequence(seq).active(true).companyId(companyId).build();
    }
}

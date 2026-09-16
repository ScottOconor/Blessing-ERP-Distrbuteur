package com.erp.hr.init;

import com.erp.hr.entity.Department;
import com.erp.hr.entity.JobPosition;
import com.erp.hr.repository.DepartmentRepository;
import com.erp.hr.repository.JobPositionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * Initialise, pour une société, un jeu standard de départements et de postes adapté à une
 * entreprise de distribution/commerce (Direction, RH, Comptabilité, Commercial, Achats,
 * Logistique). Idempotent et librement modifiable ensuite dans Organisation — c'est un point de
 * départ, pas une nomenclature imposée.
 *
 * La catégorie professionnelle des postes n'est volontairement PAS pré-assignée (impact salarial
 * direct) : à choisir par l'utilisateur selon sa propre grille/convention collective.
 *
 * {@code synchronized} pour la même raison que {@link PayrollSeeder} : éviter les doublons en cas
 * d'appels concurrents avant qu'aucun n'ait rien inséré.
 */
@Component
@RequiredArgsConstructor
public class OrganisationSeeder {

    private final DepartmentRepository departmentRepo;
    private final JobPositionRepository jobRepo;

    public synchronized void seedDepartmentsIfEmpty(Long companyId) {
        if (!departmentRepo.findByCompanyIdOrderByNameAsc(companyId).isEmpty()) return;

        Department direction   = departmentRepo.save(dept("Direction Générale", "DG", companyId));
        Department rh          = departmentRepo.save(dept("Ressources Humaines", "RH", companyId));
        Department compta      = departmentRepo.save(dept("Comptabilité et Finances", "CPTA", companyId));
        Department commercial  = departmentRepo.save(dept("Commercial et Ventes", "COM", companyId));
        Department achats      = departmentRepo.save(dept("Achats", "ACH", companyId));
        Department logistique  = departmentRepo.save(dept("Logistique et Stock", "LOG", companyId));
        Department it          = departmentRepo.save(dept("Informatique", "IT", companyId));

        // Postes de base, rattachés au département correspondant (créés seulement si aucun poste n'existe déjà).
        seedJobsIfEmpty(companyId, direction, rh, compta, commercial, achats, logistique, it);
    }

    private void seedJobsIfEmpty(Long companyId, Department direction, Department rh, Department compta,
                                  Department commercial, Department achats, Department logistique, Department it) {
        if (!jobRepo.findByCompanyIdOrderByNameAsc(companyId).isEmpty()) return;

        jobRepo.save(job("Directeur Général", direction, companyId));
        jobRepo.save(job("Responsable RH", rh, companyId));
        jobRepo.save(job("Chef Comptable", compta, companyId));
        jobRepo.save(job("Comptable", compta, companyId));
        jobRepo.save(job("Agent de Saisie", compta, companyId));
        jobRepo.save(job("Chef des Ventes", commercial, companyId));
        jobRepo.save(job("Commercial / Représentant", commercial, companyId));
        jobRepo.save(job("Acheteur", achats, companyId));
        jobRepo.save(job("Responsable Logistique", logistique, companyId));
        jobRepo.save(job("Magasinier", logistique, companyId));
        jobRepo.save(job("Chauffeur-Livreur", logistique, companyId));
        jobRepo.save(job("Responsable Informatique", it, companyId));
        jobRepo.save(job("Développeur", it, companyId));
    }

    private Department dept(String name, String code, Long companyId) {
        return Department.builder().name(name).code(code).active(true).companyId(companyId).build();
    }

    private JobPosition job(String name, Department department, Long companyId) {
        return JobPosition.builder().name(name).departmentId(department.getId()).active(true).companyId(companyId).build();
    }
}

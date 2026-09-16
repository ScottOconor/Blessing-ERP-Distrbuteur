package com.erp.hr.repository;

import com.erp.hr.entity.LeaveDeclaration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface LeaveDeclarationRepository extends JpaRepository<LeaveDeclaration, Long> {
    List<LeaveDeclaration> findByCompanyIdOrderByDateFromDesc(Long companyId);
    List<LeaveDeclaration> findByCompanyIdAndEmployeeIdOrderByDateFromDesc(Long companyId, Long employeeId);

    /** Déclarations d'un employé pour un type de congé, dont la date de début tombe dans l'année
     *  donnée (attribution simplifiée : une déclaration compte pour l'année de son premier jour). */
    List<LeaveDeclaration> findByCompanyIdAndEmployeeIdAndLeaveTypeIdAndDateFromBetween(
            Long companyId, Long employeeId, Long leaveTypeId, LocalDate yearStart, LocalDate yearEnd);

    /** Déclarations d'un employé pour un type de congé qui chevauchent une période donnée
     *  (utilisé pour injecter automatiquement les jours de congé dans le calcul d'un bulletin). */
    List<LeaveDeclaration> findByCompanyIdAndEmployeeIdAndLeaveTypeIdAndDateFromLessThanEqualAndDateEndGreaterThanEqual(
            Long companyId, Long employeeId, Long leaveTypeId, LocalDate periodTo, LocalDate periodFrom);

    /** Toutes les déclarations (tous types confondus) d'un employé qui chevauchent une période
     *  donnée — un employé ne peut pas être en congé sous deux motifs différents en même temps.
     *  Utilisé pour détecter les chevauchements avant sauvegarde d'une déclaration. */
    List<LeaveDeclaration> findByCompanyIdAndEmployeeIdAndDateFromLessThanEqualAndDateEndGreaterThanEqual(
            Long companyId, Long employeeId, LocalDate dateEnd, LocalDate dateFrom);
}

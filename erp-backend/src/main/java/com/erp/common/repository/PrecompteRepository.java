package com.erp.common.repository;

import com.erp.common.entity.Precompte;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PrecompteRepository extends JpaRepository<Precompte, Long> {

    List<Precompte> findByCompanyIdAndActiveTrue(Long companyId);

    List<Precompte> findByCompanyId(Long companyId);

    @org.springframework.data.jpa.repository.Query(
            "SELECT p FROM Precompte p JOIN FETCH p.partner WHERE p.partner.id IN :partnerIds")
    List<Precompte> findByPartnerIdIn(
            @org.springframework.data.repository.query.Param("partnerIds") java.util.Collection<Long> partnerIds);

    /** Utilisé uniquement par PrecompteService.save() pour retrouver (et réactiver) une ligne
     *  existante, active ou non — ne pas utiliser pour résoudre le taux applicable à une vente/
     *  un achat, un précompte désactivé (soft delete) resterait sinon appliqué indéfiniment. */
    Optional<Precompte> findByPartnerIdAndTypePrecompteAndCompanyId(
            Long partnerId, String typePrecompte, Long companyId);

    /** Résolution du taux RÉELLEMENT applicable — exclut les précomptes désactivés (soft delete). */
    Optional<Precompte> findByPartnerIdAndTypePrecompteAndCompanyIdAndActiveTrue(
            Long partnerId, String typePrecompte, Long companyId);

    List<Precompte> findByPartnerIdAndCompanyId(Long partnerId, Long companyId);
}

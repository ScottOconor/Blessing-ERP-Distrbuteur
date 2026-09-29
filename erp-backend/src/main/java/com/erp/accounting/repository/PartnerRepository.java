package com.erp.accounting.repository;

import com.erp.accounting.entity.Partner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PartnerRepository extends JpaRepository<Partner, Long> {

    List<Partner> findByCompanyId(Long companyId);
    List<Partner> findByCompanyIdAndActiveTrue(Long companyId);

    /** Snapshot incrémental (SnapshotService) : ne renvoie que les clients/fournisseurs modifiés
     *  depuis le dernier snapshot réussi, au lieu de la liste entière à chaque passage horaire. */
    List<Partner> findByCompanyIdAndActiveTrueAndUpdatedAtGreaterThanEqual(Long companyId, java.time.LocalDateTime modifiedSince);

    /** Total réel de clients pour le dashboard (nbClients) — indépendant du filtrage incrémental
     *  de la liste "partners" du snapshot, qui ne contient que les partenaires modifiés récemment
     *  et sous-compterait sinon largement ce total sur un snapshot horaire. */
    long countByCompanyIdAndActiveTrueAndTypeIn(Long companyId, List<String> types);
    List<Partner> findByCompanyIdAndTypeAndActiveTrue(Long companyId, String type);
    java.util.Optional<Partner> findByNameIgnoreCaseAndCompanyId(String name, Long companyId);

    List<Partner> findByCompanyIdAndType(Long companyId, String type);

    java.util.Optional<Partner> findFirstByRefAndCompanyId(String ref, Long companyId);
    java.util.Optional<Partner> findFirstByRefIgnoreCaseAndCompanyId(String ref, Long companyId);
    java.util.Optional<Partner> findFirstByNameIgnoreCaseAndCompanyId(String name, Long companyId);

    @Query(value = """
        SELECT CASE WHEN
            EXISTS (SELECT 1 FROM sales_orders WHERE partner_id = :partnerId AND company_id = :companyId)
            OR EXISTS (SELECT 1 FROM sales_invoices WHERE partner_id = :partnerId AND company_id = :companyId)
            OR EXISTS (SELECT 1 FROM purchase_orders WHERE partner_id = :partnerId AND company_id = :companyId)
            OR EXISTS (SELECT 1 FROM purchase_invoices WHERE partner_id = :partnerId AND company_id = :companyId)
            OR EXISTS (SELECT 1 FROM account_move_lines WHERE partner_id = :partnerId AND company_id = :companyId)
            OR EXISTS (SELECT 1 FROM stock_pickings WHERE partner_id = :partnerId AND company_id = :companyId)
            OR EXISTS (SELECT 1 FROM stock_losses WHERE partner_id = :partnerId AND company_id = :companyId)
        THEN true ELSE false END
        """, nativeQuery = true)
    boolean hasOperationalReferences(@Param("partnerId") Long partnerId, @Param("companyId") Long companyId);
    java.util.Optional<Partner> findFirstByNameAndCompanyId(String name, Long companyId);
    /** @deprecated */ @Deprecated java.util.Optional<Partner> findByRefAndCompanyId(String ref, Long companyId);
    /** @deprecated */ @Deprecated java.util.Optional<Partner> findByNameAndCompanyId(String name, Long companyId);

    List<Partner> findByNameContainingIgnoreCaseAndCompanyId(String name, Long companyId);
}

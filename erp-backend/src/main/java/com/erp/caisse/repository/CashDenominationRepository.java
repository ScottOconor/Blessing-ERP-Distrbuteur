package com.erp.caisse.repository;

import com.erp.caisse.entity.CashDenomination;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CashDenominationRepository extends JpaRepository<CashDenomination, Long> {
    List<CashDenomination> findByCompanyIdAndActiveTrueOrderByValeurDesc(Long companyId);
    List<CashDenomination> findByCompanyIdOrderByValeurDesc(Long companyId);
}

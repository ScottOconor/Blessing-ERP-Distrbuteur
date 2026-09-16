package com.erp.hr.init;

import com.erp.hr.entity.LeaveType;
import com.erp.hr.repository.LeaveTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;

/**
 * Initialise, pour une société, les 3 types de congés courants (Congés Payés, RTT, Repos
 * Compensateur), à l'image du modèle de bulletin Sage utilisé comme référence. Idempotent et
 * modifiable/complétable ensuite dans Configuration paie.
 *
 * {@code synchronized} pour la même raison que {@link PayrollSeeder}.
 */
@Component
@RequiredArgsConstructor
public class LeaveTypeSeeder {

    private final LeaveTypeRepository repo;

    public synchronized void seedIfEmpty(Long companyId) {
        if (repo.countByCompanyId(companyId) > 0) return;

        List<LeaveType> types = List.of(
                LeaveType.builder().name("Congés Payés").code("CP").paid(true)
                        .monthlyAccrualDays(new BigDecimal("1.5")).active(true).companyId(companyId).build(),
                LeaveType.builder().name("RTT").code("RTT").paid(true)
                        .monthlyAccrualDays(BigDecimal.ZERO).active(true).companyId(companyId).build(),
                LeaveType.builder().name("Repos Compensateur").code("REPOS_COMP").paid(true)
                        .monthlyAccrualDays(BigDecimal.ZERO).active(true).companyId(companyId).build()
        );
        repo.saveAll(types);
    }
}

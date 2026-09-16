package com.erp.hr.service;

import com.erp.auth.TenantAuthenticationDetails;
import com.erp.common.service.TenantGuard;
import com.erp.hr.entity.LeaveDeclaration;
import com.erp.hr.init.LeaveTypeSeeder;
import com.erp.hr.repository.*;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThatCode;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

/**
 * Correctif de cette session : un employé ne peut plus avoir deux déclarations de congé qui se
 * chevauchent dans le temps (tous types confondus), là où saveDeclaration se contentait
 * auparavant d'un save() sans aucune vérification.
 */
@ExtendWith(MockitoExtension.class)
class LeaveServiceOverlapTest {

    @Mock private LeaveTypeRepository typeRepo;
    @Mock private LeaveDeclarationRepository declarationRepo;
    @Mock private LeaveBalanceRepository balanceRepo;
    @Mock private EmployeeRepository employeeRepo;
    @Mock private LeaveTypeSeeder leaveTypeSeeder;
    @Mock private TenantGuard tenantGuard;

    @InjectMocks
    private LeaveService leaveService;

    @AfterEach
    void clearContext() {
        SecurityContextHolder.clearContext();
    }

    /** saveDeclaration résout companyId via SecurityUtils.currentCompanyId() pour une NOUVELLE
     *  déclaration (id null) — il faut donc un contexte de sécurité actif, comme en production. */
    private void authenticateAs(Long companyId) {
        Authentication auth = new UsernamePasswordAuthenticationToken("user", null, java.util.List.of());
        ((UsernamePasswordAuthenticationToken) auth).setDetails(new TenantAuthenticationDetails(companyId, "127.0.0.1"));
        SecurityContextHolder.getContext().setAuthentication(auth);
    }

    private LeaveDeclaration declaration(Long id, LocalDate from, LocalDate to) {
        return LeaveDeclaration.builder().id(id).employeeId(10L).leaveTypeId(1L)
                .dateFrom(from).dateEnd(to).numberOfDays(new BigDecimal("5"))
                .companyId(1L).build();
    }

    @Test
    void rejectsANewDeclarationThatOverlapsAnExistingOne() {
        authenticateAs(1L);
        LeaveDeclaration newDecl = declaration(null, LocalDate.of(2026, 3, 10), LocalDate.of(2026, 3, 15));
        LeaveDeclaration existing = declaration(99L, LocalDate.of(2026, 3, 12), LocalDate.of(2026, 3, 20));

        when(declarationRepo.findByCompanyIdAndEmployeeIdAndDateFromLessThanEqualAndDateEndGreaterThanEqual(
                eq(1L), eq(10L), eq(newDecl.getDateEnd()), eq(newDecl.getDateFrom())))
                .thenReturn(List.of(existing));

        assertThatThrownBy(() -> leaveService.saveDeclaration(newDecl))
                .isInstanceOf(IllegalStateException.class);
    }

    @Test
    void allowsANewDeclarationWithNoOverlap() {
        authenticateAs(1L);
        LeaveDeclaration newDecl = declaration(null, LocalDate.of(2026, 4, 1), LocalDate.of(2026, 4, 5));

        when(declarationRepo.findByCompanyIdAndEmployeeIdAndDateFromLessThanEqualAndDateEndGreaterThanEqual(
                any(), any(), any(), any()))
                .thenReturn(List.of());
        when(declarationRepo.save(newDecl)).thenReturn(newDecl);

        assertThatCode(() -> leaveService.saveDeclaration(newDecl)).doesNotThrowAnyException();
    }

    @Test
    void updatingADeclarationDoesNotFlagItselfAsAnOverlap() {
        LeaveDeclaration self = declaration(5L, LocalDate.of(2026, 5, 1), LocalDate.of(2026, 5, 10));

        // saveDeclaration recharge l'existant par id pour vérifier le tenant (TenantGuard, mocké
        // ici en no-op) avant d'appliquer les modifications — companyId vient de cet existant.
        when(declarationRepo.findById(5L)).thenReturn(Optional.of(self));
        // findBy... returns the declaration itself among the "overlapping" candidates, since it
        // overlaps its own unchanged date range — must be excluded by id, not treated as a conflict.
        when(declarationRepo.findByCompanyIdAndEmployeeIdAndDateFromLessThanEqualAndDateEndGreaterThanEqual(
                eq(1L), eq(10L), eq(self.getDateEnd()), eq(self.getDateFrom())))
                .thenReturn(List.of(self));
        when(declarationRepo.save(self)).thenReturn(self);

        assertThatCode(() -> leaveService.saveDeclaration(self)).doesNotThrowAnyException();
    }
}

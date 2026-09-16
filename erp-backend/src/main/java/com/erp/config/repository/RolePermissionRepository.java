package com.erp.config.repository;

import com.erp.config.entity.Role;
import com.erp.config.entity.RolePermission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RolePermissionRepository extends JpaRepository<RolePermission, Long> {
    List<RolePermission> findByRole(Role role);

    @Modifying
    @Query("DELETE FROM RolePermission p WHERE p.role = :role")
    void deleteByRole(@Param("role") Role role);
}

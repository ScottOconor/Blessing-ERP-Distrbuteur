package com.erp.config.repository;

import com.erp.config.entity.Role;
import com.erp.config.entity.RolePermission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RolePermissionRepository extends JpaRepository<RolePermission, Long> {
    List<RolePermission> findByRole(Role role);
    void deleteByRole(Role role);
}

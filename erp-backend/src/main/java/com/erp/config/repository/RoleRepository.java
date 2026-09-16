package com.erp.config.repository;

import com.erp.config.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByCode(String code);
    boolean existsByCode(String code);
    List<Role> findByActiveTrue();
    List<Role> findByIsSystemTrue();
}

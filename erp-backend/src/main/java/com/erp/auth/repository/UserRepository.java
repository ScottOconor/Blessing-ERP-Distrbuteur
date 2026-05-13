package com.erp.auth.repository;

import com.erp.auth.entity.User;
import com.erp.common.entity.Company;
import com.erp.config.entity.CompanyGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    @Query("SELECT u FROM User u LEFT JOIN FETCH u.company LEFT JOIN FETCH u.group LEFT JOIN FETCH u.role WHERE u.username = :username")
    Optional<User> findByUsernameWithDetails(@Param("username") String username);

    Optional<User> findByEmail(String email);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);

    List<User> findByGroup(CompanyGroup group);
    List<User> findByCompany(Company company);

    @Query("SELECT DISTINCT u FROM User u JOIN FETCH u.role LEFT JOIN FETCH u.group LEFT JOIN FETCH u.company c WHERE u.group.id = :groupId OR (c IS NOT NULL AND c.group.id = :groupId)")
    List<User> findAllByGroupId(@Param("groupId") Long groupId);

    @Query("SELECT u FROM User u JOIN FETCH u.role LEFT JOIN FETCH u.company WHERE u.company.id = :companyId")
    List<User> findAllByCompanyId(@Param("companyId") Long companyId);
}

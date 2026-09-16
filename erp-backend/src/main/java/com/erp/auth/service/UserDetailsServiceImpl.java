package com.erp.auth.service;

import com.erp.auth.entity.User;
import com.erp.auth.repository.UserRepository;
import com.erp.config.DataSeeder;
import com.erp.config.entity.RolePermission;
import com.erp.config.repository.RolePermissionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository           userRepository;
    private final RolePermissionRepository rolePermissionRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Utilisateur introuvable : " + username));

        String roleCode = user.getRole() != null ? user.getRole().getCode() : "CUSTOM";

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + roleCode));

        // SUPER_ADMIN and ADMIN bypass all checks — no need to load individual permissions
        boolean isPrivileged = DataSeeder.SUPER_ADMIN.equals(roleCode) || DataSeeder.ADMIN.equals(roleCode);
        if (!isPrivileged && user.getRole() != null) {
            List<RolePermission> perms = rolePermissionRepository.findByRole(user.getRole());
            for (RolePermission perm : perms) {
                String authority = "PERM_" + perm.getModule() + "_" + perm.getResource() + "_" + perm.getAction();
                authorities.add(new SimpleGrantedAuthority(authority));
            }
        }

        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getUsername())
                .password(user.getPassword())
                .authorities(authorities)
                .disabled(!user.isActive())
                .build();
    }

    public User findUserEntity(String username) {
        return userRepository.findByUsernameWithDetails(username)
                .orElseThrow(() -> new UsernameNotFoundException("Utilisateur introuvable : " + username));
    }
}

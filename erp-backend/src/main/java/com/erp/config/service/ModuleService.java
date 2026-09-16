package com.erp.config.service;

import com.erp.common.service.TenantGuard;
import com.erp.config.dto.ModuleStateDTO;
import com.erp.config.entity.ModuleInstall;
import com.erp.config.repository.ModuleInstallRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Installation/désinstallation des modules métier par société. CONFIG et Hub&Spoke (sync) ne
 * sont volontairement pas gérés ici : ce sont des zones système toujours disponibles, pas des
 * modules métier optionnels.
 */
@Service
@RequiredArgsConstructor
@Transactional
public class ModuleService {

    /** Modules métier togglables — doit rester cohérent avec les cartes de l'écran d'accueil. */
    public static final List<String> MODULE_CODES = List.of(
            "VENTES", "ACHATS", "STOCK", "COMPTABILITE", "CAISSE", "RH", "HELPDESK"
    );

    private final ModuleInstallRepository repo;
    private final TenantGuard tenantGuard;

    @Transactional(readOnly = true)
    public List<ModuleStateDTO> getModuleStates(Long companyId) {
        // GET est en self-service-bypass des permissions (tout utilisateur authentifié peut lire
        // l'état des modules de SA société) — mais ça ne dispense pas de vérifier que companyId
        // est bien la société de l'appelant, sans quoi n'importe quel utilisateur pourrait sonder
        // l'état des modules d'une autre société en changeant simplement ce paramètre.
        tenantGuard.check(companyId);
        List<ModuleInstall> overrides = repo.findByCompanyId(companyId);
        return MODULE_CODES.stream()
                .map(code -> {
                    boolean installed = overrides.stream()
                            .filter(o -> o.getModuleCode().equals(code))
                            .findFirst()
                            .map(ModuleInstall::isInstalled)
                            .orElse(true); // pas de ligne = installé par défaut
                    return ModuleStateDTO.builder().code(code).installed(installed).build();
                })
                .toList();
    }

    public ModuleStateDTO setInstalled(Long companyId, String moduleCode, boolean installed) {
        tenantGuard.check(companyId);
        if (!MODULE_CODES.contains(moduleCode)) {
            throw new IllegalArgumentException("Module inconnu : " + moduleCode);
        }
        ModuleInstall override = repo.findByCompanyIdAndModuleCode(companyId, moduleCode)
                .orElseGet(() -> ModuleInstall.builder().companyId(companyId).moduleCode(moduleCode).build());
        override.setInstalled(installed);
        repo.save(override);
        return ModuleStateDTO.builder().code(moduleCode).installed(installed).build();
    }
}

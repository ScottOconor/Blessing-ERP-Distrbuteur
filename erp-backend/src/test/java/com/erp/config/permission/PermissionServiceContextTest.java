package com.erp.config.permission;

import org.junit.jupiter.api.Test;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Arrays;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Écrans Ventes / Achats : un vendeur avec seulement Commandes/Factures doit pouvoir lire ce que
 * ses bons et factures chargent dans d'autres modules (articles, journaux, partenaires…), sans
 * jamais obtenir de suppression ni de lecture hors de cette liste.
 */
class PermissionServiceContextTest {

    private final PermissionService service = new PermissionService();

    private static Authentication user(String... perms) {
        return new UsernamePasswordAuthenticationToken("u", null,
                Arrays.stream(perms).map(SimpleGrantedAuthority::new).toList());
    }

    private boolean allowed(Authentication auth, String method, String uri, String context) {
        PermissionRule rule = service.findRule(method, uri);
        assertThat(rule).as(method + " " + uri).isNotNull();
        return service.hasPermission(auth, rule) || service.hasContextEquivalent(auth, rule, uri, context);
    }

    @Test
    void vendeurLitCeQueChargentSesBonsEtFactures() {
        Authentication vendeur = user("PERM_VENTES_COMMANDES_VIEW", "PERM_VENTES_FACTURES_VIEW",
                "PERM_VENTES_COMMANDES_CREATE");
        for (String uri : new String[]{"/api/stock/products", "/api/stock/warehouses", "/api/stock/categories",
                "/api/accounting/journals", "/api/accounting/partners", "/api/enlevements",
                "/api/sales/clients", "/api/sales/sellers", "/api/sales/partners/5/balance",
                "/api/sales/client-prices/product"}) {
            assertThat(allowed(vendeur, "GET", uri, "VENTES")).as(uri).isTrue();
        }
        assertThat(allowed(vendeur, "POST", "/api/sales/clients", "VENTES")).isTrue();
    }

    @Test
    void jamaisDeSuppressionNiHorsContexte() {
        Authentication vendeur = user("PERM_VENTES_COMMANDES_VIEW", "PERM_VENTES_COMMANDES_EDIT");
        assertThat(allowed(vendeur, "DELETE", "/api/accounting/partners/3", "VENTES")).isFalse();
        assertThat(allowed(vendeur, "GET", "/api/stock/pickings", "VENTES")).isFalse();
        // Depuis le module Stock (pas de contexte Ventes), le droit Stock reste exigé
        assertThat(allowed(vendeur, "GET", "/api/stock/products", null)).isFalse();
    }

    @Test
    void droitArticlesSuffitPourEcranArticles() {
        // Rôle « Stock › Produits » sans suppression ni Mouvements : l'écran Articles charge
        // articles, catégories, unités de mesure et entrepôts d'un bloc.
        Authentication magasinier = user("PERM_STOCK_PRODUITS_VIEW", "PERM_STOCK_PRODUITS_CREATE",
                "PERM_STOCK_PRODUITS_EDIT");
        for (String uri : new String[]{"/api/stock/products", "/api/stock/categories",
                "/api/stock/units-of-measure", "/api/stock/warehouses", "/api/stock/products/7/photo"}) {
            assertThat(allowed(magasinier, "GET", uri, null)).as(uri).isTrue();
        }
        assertThat(allowed(magasinier, "PUT", "/api/stock/units-of-measure/2", null)).isTrue();
        assertThat(allowed(magasinier, "DELETE", "/api/stock/products/7", null)).isFalse();
        assertThat(allowed(magasinier, "DELETE", "/api/stock/units-of-measure/2", null)).isFalse();
    }

    @Test
    void ecranDunModuleLitSesListesDeReference() {
        // Inventaire seul : l'écran Ajustements lit articles, emplacements, stocks, entrepôts
        Authentication inventaire = user("PERM_STOCK_INVENTAIRE_VIEW", "PERM_STOCK_INVENTAIRE_CREATE");
        for (String uri : new String[]{"/api/stock/products", "/api/stock/locations", "/api/stock/quants",
                "/api/stock/warehouses", "/api/stock/categories"}) {
            assertThat(allowed(inventaire, "GET", uri, "STOCK")).as(uri).isTrue();
        }
        // Articles seuls : l'écran Articles lit les comptes comptables et les clients
        Authentication articles = user("PERM_STOCK_PRODUITS_VIEW");
        assertThat(allowed(articles, "GET", "/api/accounting/accounts", "STOCK")).isTrue();
        assertThat(allowed(articles, "GET", "/api/sales/clients", "STOCK")).isTrue();
        // Paie : comptes comptables pour la configuration
        assertThat(allowed(user("PERM_RH_CONFIG_PAIE_VIEW"), "GET", "/api/accounting/accounts", "RH")).isTrue();
    }

    @Test
    void listesDeReferenceEnLectureSeule() {
        Authentication inventaire = user("PERM_STOCK_INVENTAIRE_VIEW");
        assertThat(allowed(inventaire, "POST", "/api/stock/products", "STOCK")).isFalse();
        assertThat(allowed(inventaire, "DELETE", "/api/stock/locations/4", "STOCK")).isFalse();
        // Ni écritures, ni agences distantes (clés API), ni module sans aucun droit
        assertThat(allowed(inventaire, "GET", "/api/accounting/moves", "STOCK")).isFalse();
        assertThat(allowed(inventaire, "GET", "/api/config/remote-agencies/1", "STOCK")).isFalse();
        assertThat(allowed(inventaire, "GET", "/api/stock/products", "COMPTABILITE")).isFalse();
    }

    @Test
    void acheteurLitCoutsEnlevementEtFournisseurs() {
        Authentication acheteur = user("PERM_ACHATS_COMMANDES_VIEW", "PERM_ACHATS_COMMANDES_CREATE");
        assertThat(allowed(acheteur, "GET", "/api/enlevements/invoice/12/costs", "ACHATS")).isTrue();
        assertThat(allowed(acheteur, "GET", "/api/accounting/partners", "ACHATS")).isTrue();
        assertThat(allowed(acheteur, "POST", "/api/accounting/partners", "ACHATS")).isTrue();
        // Les données de vente (hors listes de référence) restent réservées aux droits Ventes
        assertThat(allowed(acheteur, "GET", "/api/sales/invoices", "ACHATS")).isFalse();
    }
}

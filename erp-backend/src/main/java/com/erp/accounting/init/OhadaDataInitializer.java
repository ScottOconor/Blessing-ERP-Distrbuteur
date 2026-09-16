package com.erp.accounting.init;

import com.erp.accounting.entity.AccountAccount;
import com.erp.accounting.entity.AccountJournal;
import com.erp.accounting.repository.AccountAccountRepository;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.stock.entity.StockLocation;
import com.erp.stock.entity.StockPickingType;
import com.erp.stock.entity.Warehouse;
import com.erp.stock.repository.StockLocationRepository;
import com.erp.stock.repository.StockPickingTypeRepository;
import com.erp.stock.repository.WarehouseRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Component
@Order(2)
@RequiredArgsConstructor
@Slf4j
public class OhadaDataInitializer implements CommandLineRunner {

    private final CompanyRepository companyRepository;
    private final AccountAccountRepository accountRepository;
    private final AccountJournalRepository journalRepository;
    private final WarehouseRepository warehouseRepository;
    private final StockLocationRepository stockLocationRepository;
    private final StockPickingTypeRepository pickingTypeRepository;

    @Override
    @Transactional
    public void run(String... args) {
        Company company = initDefaultCompany();
        initializeCompany(company);
    }

    /** Initialise les journaux et les entrepôts pour une entreprise.
     *  Le plan comptable n'est PAS auto-créé : l'utilisateur importe son propre plan. */
    @Transactional
    public void initializeCompany(Company company) {
        initDefaultJournals(company);
        initDefaultWarehouses(company);
    }

    private Company initDefaultCompany() {
        if (companyRepository.count() > 0) {
            return companyRepository.findAll().get(0);
        }
        Company c = companyRepository.save(Company.builder()
                .name("Ma Société").sigle("MS")
                .adresse("Yaoundé, Cameroun").telephone("+237 000 000 000")
                .email("contact@masociete.cm").build());
        log.info("Default company created: {}", c.getName());
        return c;
    }

    /** Public entry-point called after a plan comptable replace-import to restore missing group accounts. */
    @Transactional
    public void reseedMissingGroupAccounts(Company company) {
        initChartOfAccounts(company);
        ensureEssentialAccounts(company);
        initDefaultJournals(company);
    }

    private void initChartOfAccounts(Company company) {
        log.info("Checking OHADA group accounts for company {}…", company.getId());

        Set<String> reconcileAccounts = Set.of(
            "401", "4011", "4012", "404", "408", "409",
            "411", "4111", "4112", "414", "416", "418", "419",
            "431", "432", "433"
        );

        List<AccountAccount> accounts = new ArrayList<>();

        // ===== CLASSE 1 - COMPTES DE CAPITAUX =====
        accounts.add(build("10",   "Capital",                                    "equity",    "other",    false, company));
        accounts.add(build("101",  "Capital social",                              "equity",    "other",    false, company));
        accounts.add(build("1011", "Capital souscrit non appelé",                 "equity",    "other",    false, company));
        accounts.add(build("1012", "Capital souscrit appelé non versé",           "equity",    "other",    false, company));
        accounts.add(build("1013", "Capital souscrit appelé versé",               "equity",    "other",    false, company));
        accounts.add(build("104",  "Primes liées au capital",                     "equity",    "other",    false, company));
        accounts.add(build("105",  "Écarts de réévaluation",                      "equity",    "other",    false, company));
        accounts.add(build("106",  "Réserves",                                    "equity",    "other",    false, company));
        accounts.add(build("1061", "Réserve légale",                              "equity",    "other",    false, company));
        accounts.add(build("1062", "Réserves statutaires",                        "equity",    "other",    false, company));
        accounts.add(build("1063", "Réserves réglementées",                       "equity",    "other",    false, company));
        accounts.add(build("1068", "Autres réserves",                             "equity",    "other",    false, company));
        accounts.add(build("109",  "Actionnaires capital souscrit non appelé",    "equity",    "other",    false, company));
        accounts.add(build("11",   "Report à nouveau",                            "equity",    "other",    false, company));
        accounts.add(build("111",  "Report à nouveau créditeur",                  "equity",    "other",    false, company));
        accounts.add(build("119",  "Report à nouveau débiteur",                   "equity",    "other",    false, company));
        accounts.add(build("12",   "Résultat net de l'exercice",                  "equity",    "other",    false, company));
        accounts.add(build("121",  "Bénéfice ou excédent net",                    "equity",    "other",    false, company));
        accounts.add(build("129",  "Perte nette de l'exercice",                   "equity",    "other",    false, company));
        accounts.add(build("13",   "Subventions d'investissement",                "equity",    "other",    false, company));
        accounts.add(build("14",   "Provisions réglementées",                     "equity",    "other",    false, company));
        accounts.add(build("15",   "Provisions pour risques et charges",          "liability", "other",    false, company));
        accounts.add(build("151",  "Provisions pour risques",                     "liability", "other",    false, company));
        accounts.add(build("152",  "Provisions pour charges",                     "liability", "other",    false, company));
        accounts.add(build("16",   "Emprunts et dettes assimilées",               "liability", "other",    false, company));
        accounts.add(build("161",  "Emprunts obligataires",                       "liability", "other",    false, company));
        accounts.add(build("162",  "Emprunts et dettes auprès des étab. de crédit","liability","other",    false, company));
        accounts.add(build("163",  "Emprunts et dettes financières divers",       "liability", "other",    false, company));
        accounts.add(build("164",  "Avances conditionnées",                       "liability", "other",    false, company));
        accounts.add(build("165",  "Dépôts et cautionnements reçus",              "liability", "other",    false, company));
        accounts.add(build("17",   "Dettes de crédit-bail et contrats assimilés", "liability", "other",    false, company));
        accounts.add(build("18",   "Dettes liées à des participations",           "liability", "other",    false, company));
        accounts.add(build("19",   "Provisions pour risques et charges à LT",    "liability", "other",    false, company));

        // ===== CLASSE 2 - COMPTES D'ACTIF IMMOBILISÉ =====
        accounts.add(build("20",   "Charges immobilisées",                        "asset",     "other",    false, company));
        accounts.add(build("201",  "Frais d'établissement",                       "asset",     "other",    false, company));
        accounts.add(build("202",  "Frais de développement",                      "asset",     "other",    false, company));
        accounts.add(build("203",  "Frais de recherche et de développement",      "asset",     "other",    false, company));
        accounts.add(build("204",  "Brevets, licences, marques",                  "asset",     "other",    false, company));
        accounts.add(build("205",  "Fonds commercial",                            "asset",     "other",    false, company));
        accounts.add(build("206",  "Logiciels",                                   "asset",     "other",    false, company));
        accounts.add(build("208",  "Autres immobilisations incorporelles",        "asset",     "other",    false, company));
        accounts.add(build("21",   "Immobilisations corporelles",                 "asset",     "other",    false, company));
        accounts.add(build("211",  "Terrains",                                    "asset",     "other",    false, company));
        accounts.add(build("212",  "Agencements et aménagements de terrains",     "asset",     "other",    false, company));
        accounts.add(build("213",  "Bâtiments",                                   "asset",     "other",    false, company));
        accounts.add(build("2131", "Bâtiments industriels",                       "asset",     "other",    false, company));
        accounts.add(build("2132", "Bâtiments commerciaux",                       "asset",     "other",    false, company));
        accounts.add(build("214",  "Installations techniques, matériel et outillage industriels", "asset", "other", false, company));
        accounts.add(build("215",  "Matériel de transport",                       "asset",     "other",    false, company));
        accounts.add(build("218",  "Autres immobilisations corporelles",          "asset",     "other",    false, company));
        accounts.add(build("22",   "Terrains (bail emphytéotique)",               "asset",     "other",    false, company));
        accounts.add(build("23",   "Immobilisations en cours",                    "asset",     "other",    false, company));
        accounts.add(build("231",  "Immobilisations corporelles en cours",        "asset",     "other",    false, company));
        accounts.add(build("232",  "Immobilisations incorporelles en cours",      "asset",     "other",    false, company));
        accounts.add(build("24",   "Titres de participation",                     "asset",     "other",    false, company));
        accounts.add(build("241",  "Titres de participation (groupe)",            "asset",     "other",    false, company));
        accounts.add(build("245",  "Autres titres de participation",              "asset",     "other",    false, company));
        accounts.add(build("25",   "Autres immobilisations financières",          "asset",     "other",    false, company));
        accounts.add(build("251",  "Prêts et créances à long terme",              "asset",     "other",    false, company));
        accounts.add(build("26",   "Dépôts et cautionnements versés",             "asset",     "other",    false, company));
        accounts.add(build("28",   "Amortissements des immobilisations",          "asset",     "other",    false, company));
        accounts.add(build("281",  "Amortissements des immobilisations incorporelles", "asset","other",    false, company));
        accounts.add(build("282",  "Amortissements des charges immobilisées",     "asset",     "other",    false, company));
        accounts.add(build("283",  "Amortissements des immobilisations corporelles","asset",   "other",    false, company));
        accounts.add(build("29",   "Provisions pour dépréciation des immobilisations","asset", "other",   false, company));

        // ===== CLASSE 3 - COMPTES DE STOCKS =====
        accounts.add(build("30",   "Achats stockés - matières et fournitures",    "asset",     "other",    false, company));
        accounts.add(build("31",   "Matières premières et fournitures liées",     "asset",     "other",    false, company));
        accounts.add(build("32",   "Autres approvisionnements",                   "asset",     "other",    false, company));
        accounts.add(build("33",   "En-cours de production de biens",             "asset",     "other",    false, company));
        accounts.add(build("34",   "En-cours de production de services",          "asset",     "other",    false, company));
        accounts.add(build("35",   "Stocks de produits",                          "asset",     "other",    false, company));
        accounts.add(build("351",  "Produits intermédiaires",                     "asset",     "other",    false, company));
        accounts.add(build("355",  "Produits finis",                              "asset",     "other",    false, company));
        accounts.add(build("36",   "Produits résiduels",                          "asset",     "other",    false, company));
        accounts.add(build("37",   "Stocks en cours de route",                    "asset",     "other",    false, company));
        accounts.add(build("38",   "Stocks chez les tiers",                       "asset",     "other",    false, company));
        accounts.add(build("39",   "Provisions pour dépréciation des stocks",     "asset",     "other",    false, company));

        // ===== CLASSE 4 - COMPTES DE TIERS =====
        accounts.add(build("40",   "Fournisseurs et comptes rattachés",           "liability", "payable",  false, company));
        accounts.add(buildR("401",  "Fournisseurs",                               "liability", "payable",  company));
        accounts.add(buildR("4011", "Fournisseurs - achats de biens et prestations","liability","payable", company));
        accounts.add(buildR("4012", "Fournisseurs - effets à payer",              "liability", "payable",  company));
        accounts.add(buildR("404",  "Fournisseurs d'immobilisations",             "liability", "payable",  company));
        accounts.add(buildR("408",  "Fournisseurs - factures non parvenues",      "liability", "payable",  company));
        accounts.add(build("409",   "Fournisseurs débiteurs",                     "asset",     "other",    false, company));
        accounts.add(build("41",    "Clients et comptes rattachés",               "asset",     "receivable",false, company));
        accounts.add(buildR("411",  "Clients",                                    "asset",     "receivable",company));
        accounts.add(buildR("4111", "Clients - ventes de biens et prestations",   "asset",     "receivable",company));
        accounts.add(buildR("4112", "Clients - effets à recevoir",                "asset",     "receivable",company));
        accounts.add(build("414",   "Clients - avances et acomptes reçus",        "liability", "other",    false, company));
        accounts.add(buildR("416",  "Clients douteux ou litigieux",               "asset",     "receivable",company));
        accounts.add(build("418",   "Clients - produits non encore facturés",     "asset",     "receivable",false, company));
        accounts.add(build("419",   "Clients créditeurs",                         "liability", "other",    false, company));
        accounts.add(build("42",    "Personnel",                                  "liability", "other",    false, company));
        accounts.add(build("421",   "Personnel - avances et acomptes",            "asset",     "other",    false, company));
        accounts.add(build("422",   "Personnel - rémunérations dues",             "liability", "other",    false, company));
        accounts.add(build("423",   "Personnel - indemnités et avantages divers", "liability", "other",    false, company));
        accounts.add(build("424",   "Personnel - oeuvres sociales",               "liability", "other",    false, company));
        accounts.add(build("425",   "Personnel - oppositions",                    "liability", "other",    false, company));
        accounts.add(build("43",    "Organismes sociaux",                         "liability", "other",    false, company));
        accounts.add(buildR("431",  "Sécurité sociale",                           "liability", "other",    company));
        accounts.add(buildR("432",  "Caisses de retraite",                        "liability", "other",    company));
        accounts.add(buildR("433",  "Mutuelles",                                  "liability", "other",    company));
        accounts.add(build("44",    "État et collectivités publiques",            "liability", "other",    false, company));
        accounts.add(build("441",   "État - impôts sur les bénéfices",            "liability", "other",    false, company));
        accounts.add(build("442",   "État - autres impôts et taxes",              "liability", "other",    false, company));
        accounts.add(build("443",   "État - TVA facturée",                        "liability", "other",    false, company));
        accounts.add(build("444",   "État - TVA due",                             "liability", "other",    false, company));
        accounts.add(build("445",   "État - TVA déductible",                      "asset",     "other",    false, company));
        accounts.add(build("446",   "État - autres taxes sur le chiffre d'affaires","liability","other",   false, company));
        accounts.add(build("447",   "État - impôts retenus à la source",          "liability", "other",    false, company));
        accounts.add(build("448",   "État - charges à payer et produits à recevoir","liability","other",   false, company));
        accounts.add(build("45",    "Organismes internationaux",                  "other",     "other",    false, company));
        accounts.add(build("46",    "Débiteurs divers et créditeurs divers",      "other",     "other",    false, company));
        accounts.add(build("462",   "Créances sur cessions d'immobilisations",    "asset",     "other",    false, company));
        accounts.add(build("464",   "Dettes sur acquisitions de valeurs mobilières","liability","other",   false, company));
        accounts.add(build("465",   "Débiteurs divers",                           "asset",     "other",    false, company));
        accounts.add(build("466",   "Créditeurs divers",                          "liability", "other",    false, company));
        accounts.add(build("47",    "Comptes transitoires",                       "other",     "other",    false, company));
        accounts.add(build("471",   "Comptes d'attente débiteurs",                "asset",     "other",    false, company));
        accounts.add(build("472",   "Comptes d'attente créditeurs",               "liability", "other",    false, company));
        accounts.add(build("48",    "Créances et dettes hors activités ordinaires","other",    "other",    false, company));
        accounts.add(build("481",   "Créances HAO",                               "asset",     "other",    false, company));
        accounts.add(build("482",   "Dettes HAO",                                 "liability", "other",    false, company));
        accounts.add(build("49",    "Provisions pour dépréciation comptes de tiers","asset",   "other",    false, company));
        accounts.add(build("491",   "Provisions pour dépréciation comptes clients","asset",    "other",    false, company));
        accounts.add(build("499",   "Provisions pour dépréciation comptes débiteurs divers","asset","other",false, company));

        // ===== CLASSE 5 - COMPTES DE TRÉSORERIE =====
        accounts.add(build("50",    "Valeurs mobilières de placement",            "asset",     "liquidity", false, company));
        accounts.add(build("51",    "Valeurs à l'encaissement",                   "asset",     "liquidity", false, company));
        accounts.add(build("52",    "Banques",                                    "asset",     "liquidity", false, company));
        accounts.add(build("521",   "Banques locales",                            "asset",     "liquidity", false, company));
        accounts.add(build("522",   "Banques à l'étranger",                       "asset",     "liquidity", false, company));
        accounts.add(build("53",    "Établissements financiers et assimilés",     "asset",     "liquidity", false, company));
        accounts.add(build("54",    "Instruments de trésorerie",                  "asset",     "liquidity", false, company));
        accounts.add(build("55",    "Virements internes",                         "asset",     "liquidity", false, company));
        accounts.add(build("56",    "Banques, crédits de décaissement",           "liability", "liquidity", false, company));
        accounts.add(build("57",    "Caisse",                                     "asset",     "liquidity", false, company));
        accounts.add(build("571",   "Caisse siège social",                        "asset",     "liquidity", false, company));
        accounts.add(build("572",   "Caisse succursale",                          "asset",     "liquidity", false, company));
        accounts.add(build("58",    "Régies d'avances et accréditifs",            "asset",     "liquidity", false, company));
        accounts.add(build("59",    "Provisions pour dépréciation comptes de trésorerie","asset","other",  false, company));

        // ===== CLASSE 6 - COMPTES DE CHARGES =====
        accounts.add(build("60",    "Achats et variations de stocks",             "expense",   "other",    false, company));
        accounts.add(build("601",   "Achats de marchandises",                     "expense",   "other",    false, company));
        accounts.add(build("601901","Rabais, Remises et Ristournes obtenus des fournisseurs","expense","other",false, company));
        accounts.add(build("602",   "Achats de matières premières et fournitures liées","expense","other", false, company));
        accounts.add(build("603",   "Variations de stocks de biens achetés",      "expense",   "other",    false, company));
        accounts.add(build("6031",  "Variation de stocks de marchandises",        "expense",   "other",    false, company));
        accounts.add(build("6032",  "Variation de stocks de matières premières",  "expense",   "other",    false, company));
        accounts.add(build("6033",  "Variation de stocks d'autres approvisionnements","expense","other",   false, company));
        accounts.add(build("604",   "Variation de stocks de services en cours",   "expense",   "other",    false, company));
        accounts.add(build("605",   "Autres achats",                              "expense",   "other",    false, company));
        accounts.add(build("61",    "Transports",                                 "expense",   "other",    false, company));
        accounts.add(build("611",   "Transports sur achats",                      "expense",   "other",    false, company));
        accounts.add(build("612",   "Transports sur ventes",                      "expense",   "other",    false, company));
        accounts.add(build("613",   "Transports pour le compte de tiers",         "expense",   "other",    false, company));
        accounts.add(build("614",   "Transports du personnel",                    "expense",   "other",    false, company));
        accounts.add(build("618",   "Autres charges de transport",                "expense",   "other",    false, company));
        accounts.add(build("62",    "Services extérieurs A",                      "expense",   "other",    false, company));
        accounts.add(build("621",   "Sous-traitance générale",                    "expense",   "other",    false, company));
        accounts.add(build("622",   "Locations et charges locatives",             "expense",   "other",    false, company));
        accounts.add(build("623",   "Redevances de crédit-bail",                  "expense",   "other",    false, company));
        accounts.add(build("624",   "Entretien, réparations, maintenance",        "expense",   "other",    false, company));
        accounts.add(build("625",   "Primes d'assurances",                        "expense",   "other",    false, company));
        accounts.add(build("626",   "Études, recherches et documentation",        "expense",   "other",    false, company));
        accounts.add(build("627",   "Publicité, publications, relations publiques","expense",  "other",    false, company));
        accounts.add(build("628",   "Frais de télécommunications",                "expense",   "other",    false, company));
        accounts.add(build("63",    "Services extérieurs B",                      "expense",   "other",    false, company));
        accounts.add(build("631",   "Frais bancaires",                            "expense",   "other",    false, company));
        accounts.add(build("632",   "Rémunérations d'intermédiaires et honoraires","expense",  "other",    false, company));
        accounts.add(build("633",   "Frais de formation du personnel",            "expense",   "other",    false, company));
        accounts.add(build("634",   "Redevances pour brevets, licences",          "expense",   "other",    false, company));
        accounts.add(build("635",   "Cotisations",                                "expense",   "other",    false, company));
        accounts.add(build("636",   "Pertes de change",                           "expense",   "other",    false, company));
        accounts.add(build("637",   "Charges de missions et réceptions",          "expense",   "other",    false, company));
        accounts.add(build("638",   "Autres charges de services extérieurs B",    "expense",   "other",    false, company));
        accounts.add(build("64",    "Impôts et taxes",                            "expense",   "other",    false, company));
        accounts.add(build("641",   "Impôts et taxes directs",                    "expense",   "other",    false, company));
        accounts.add(build("642",   "Taxes sur le chiffre d'affaires",            "expense",   "other",    false, company));
        accounts.add(build("645",   "Impôts et taxes sur salaires",               "expense",   "other",    false, company));
        accounts.add(build("646",   "Droits d'enregistrement et de timbre",       "expense",   "other",    false, company));
        accounts.add(build("65",    "Autres charges",                             "expense",   "other",    false, company));
        accounts.add(build("651",   "Pertes sur créances clients",                "expense",   "other",    false, company));
        accounts.add(build("652",   "Charges diverses",                           "expense",   "other",    false, company));
        accounts.add(build("657",   "Charges de gestion courante",                "expense",   "other",    false, company));
        accounts.add(build("66",    "Charges de personnel",                       "expense",   "other",    false, company));
        accounts.add(build("661",   "Appointements et salaires",                  "expense",   "other",    false, company));
        accounts.add(build("662",   "Commissions et courtages",                   "expense",   "other",    false, company));
        accounts.add(build("663",   "Indemnités forfaitaires",                    "expense",   "other",    false, company));
        accounts.add(build("664",   "Charges sociales",                           "expense",   "other",    false, company));
        accounts.add(build("665",   "Charges de retraite",                        "expense",   "other",    false, company));
        accounts.add(build("666",   "Autres charges sociales",                    "expense",   "other",    false, company));
        accounts.add(build("67",    "Frais financiers et charges assimilées",     "expense",   "other",    false, company));
        accounts.add(build("671",   "Intérêts des emprunts",                      "expense",   "other",    false, company));
        accounts.add(build("672",   "Intérêts des dettes",                        "expense",   "other",    false, company));
        accounts.add(build("673",   "Escomptes accordés",                         "expense",   "other",    false, company));
        accounts.add(build("674",   "Pertes sur créances liées à des participations","expense","other",    false, company));
        accounts.add(build("68",    "Dotations aux amortissements",               "expense",   "other",    false, company));
        accounts.add(build("681",   "Dotations aux amortissements d'exploitation","expense",   "other",    false, company));
        accounts.add(build("691",   "Dotations aux provisions d'exploitation",    "expense",   "other",    false, company));
        accounts.add(build("69",    "Impôts sur le résultat",                     "expense",   "other",    false, company));
        accounts.add(build("891",   "Impôts sur le résultat (charge)",            "expense",   "other",    false, company));

        // ===== CLASSE 7 - COMPTES DE PRODUITS =====
        accounts.add(build("70",    "Ventes",                                     "income",    "other",    false, company));
        accounts.add(build("701",   "Ventes de marchandises",                     "income",    "other",    false, company));
        accounts.add(build("701901","Rabais, remises, ristournes accordées sur articles", "expense", "other", false, company));
        accounts.add(build("702",   "Ventes de produits fabriqués",               "income",    "other",    false, company));
        accounts.add(build("703",   "Ventes de produits résiduels",               "income",    "other",    false, company));
        accounts.add(build("705",   "Travaux facturés",                           "income",    "other",    false, company));
        accounts.add(build("706",   "Services vendus",                            "income",    "other",    false, company));
        accounts.add(build("707",   "Produits accessoires",                       "income",    "other",    false, company));
        accounts.add(build("708",   "Produits des activités annexes",             "income",    "other",    false, company));
        accounts.add(build("71",    "Subventions d'exploitation",                 "income",    "other",    false, company));
        accounts.add(build("72",    "Production immobilisée",                     "income",    "other",    false, company));
        accounts.add(build("73",    "Variations de stocks de biens et services produits","income","other", false, company));
        accounts.add(build("75",    "Autres produits",                            "income",    "other",    false, company));
        accounts.add(build("751",   "Produits de gestion courante",               "income",    "other",    false, company));
        accounts.add(build("752",   "Produits divers",                            "income",    "other",    false, company));
        accounts.add(build("77",    "Revenus financiers et assimilés",            "income",    "other",    false, company));
        accounts.add(build("771",   "Intérêts de prêts",                          "income",    "other",    false, company));
        accounts.add(build("772",   "Revenus des valeurs mobilières",             "income",    "other",    false, company));
        accounts.add(build("773",   "Escomptes obtenus",                          "income",    "other",    false, company));
        accounts.add(build("774",   "Revenus de créances",                        "income",    "other",    false, company));
        accounts.add(build("776",   "Gains de change",                            "income",    "other",    false, company));
        accounts.add(build("778",   "Autres revenus financiers",                  "income",    "other",    false, company));
        accounts.add(build("781",   "Reprises d'exploitation",                    "income",    "other",    false, company));
        accounts.add(build("786",   "Reprises financières",                       "income",    "other",    false, company));
        accounts.add(build("791",   "Transferts de charges d'exploitation",       "income",    "other",    false, company));
        accounts.add(build("796",   "Transferts de charges financières",          "income",    "other",    false, company));

        // ===== CLASSE 8 - COMPTES HAO =====
        accounts.add(build("81",    "Valeurs comptables des cessions d'immobilisations","expense","other", false, company));
        accounts.add(build("82",    "Produits des cessions d'immobilisations",    "income",    "other",    false, company));
        accounts.add(build("83",    "Charges hors activités ordinaires",          "expense",   "other",    false, company));
        accounts.add(build("84",    "Produits hors activités ordinaires",         "income",    "other",    false, company));
        accounts.add(build("85",    "Dotations HAO",                              "expense",   "other",    false, company));
        accounts.add(build("86",    "Reprises HAO",                               "income",    "other",    false, company));
        accounts.add(build("87",    "Participation des travailleurs",             "expense",   "other",    false, company));
        accounts.add(build("88",    "Subventions d'équilibre",                    "income",    "other",    false, company));
        accounts.add(build("89",    "Impôts sur le résultat (HAO)",               "expense",   "other",    false, company));

        for (AccountAccount acc : accounts) {
            if (reconcileAccounts.contains(acc.getCode())) {
                acc.setReconcile(true);
            }
        }

        long cid = company.getId();
        List<AccountAccount> toCreate = accounts.stream()
                .filter(a -> accountRepository.findFirstByCodeAndCompanyId(a.getCode(), cid).isEmpty())
                .collect(java.util.stream.Collectors.toList());
        if (!toCreate.isEmpty()) {
            accountRepository.saveAll(toCreate);
            log.info("OHADA chart of accounts: {}/{} accounts created/restored", toCreate.size(), accounts.size());
        } else {
            log.info("OHADA chart of accounts: all group accounts already present ({})", accounts.size());
        }
    }

    /**
     * Ensures accounts required by the ERP accounting engine exist.
     * Runs as an upsert on every startup — safe even if accounts are already present.
     * The user can override names/types via the plan comptable Excel import.
     */
    private void ensureEssentialAccounts(Company company) {
        Long cid = company.getId();

        // Comptes de trésorerie — internalType='liquidity' est critique pour le calcul des soldes journaliers.
        // Ces upserts corrigent les anciens enregistrements qui n'avaient pas ce champ renseigné.
        upsertAccount(cid, "571",   "Caisse siège social",      "asset",     "liquidity", false, company);
        upsertAccount(cid, "572",   "Caisse succursale",         "asset",     "liquidity", false, company);
        upsertAccount(cid, "521",   "Banques locales",           "asset",     "liquidity", false, company);
        upsertAccount(cid, "522",   "Banques à l'étranger",      "asset",     "liquidity", false, company);

        // Comptes métier spécifiques
        upsertAccount(cid, "419800", "Ristournes à accorder - brasserie", "liability", "other", false, company);
        upsertAccount(cid, "419801", "Ristournes à accorder - guinness",  "liability", "other", false, company);

        log.info("Essential accounts ensured for company {}", cid);
    }

    private void upsertAccount(Long companyId, String code, String name,
                               String accountType, String internalType,
                               boolean reconcile, Company company) {
        accountRepository.findFirstByCodeAndCompanyId(code, companyId).ifPresentOrElse(
            acc -> {
                boolean changed = false;
                if (!name.equals(acc.getName()))                              { acc.setName(name);                    changed = true; }
                if (accountType  != null && !accountType.equals(acc.getAccountType()))   { acc.setAccountType(accountType);     changed = true; }
                if (internalType != null && !internalType.equals(acc.getInternalType())) { acc.setInternalType(internalType);   changed = true; }
                if (changed) accountRepository.save(acc);
            },
            () -> accountRepository.save(AccountAccount.builder()
                    .code(code).name(name)
                    .accountType(accountType).internalType(internalType)
                    .reconcile(reconcile).deprecated(false)
                    .company(company).build())
        );
    }

    private void initDefaultJournals(Company company) {
        AccountAccount sales701  = accountRepository.findFirstByCodeAndCompanyId("701", company.getId()).orElse(null);
        AccountAccount client411 = accountRepository.findFirstByCodeAndCompanyId("411", company.getId()).orElse(null);
        AccountAccount fourn401  = accountRepository.findFirstByCodeAndCompanyId("401", company.getId()).orElse(null);
        // Pour la caisse/banque : chercher n'importe quel compte de liquidité (57x / 52x)
        AccountAccount caisse571 = accountRepository.findFirstByCodeAndCompanyId("571", company.getId())
                .or(() -> accountRepository.findFirstByInternalTypeAndCompanyIdOrderByCode("liquidity", company.getId()))
                .orElse(null);
        AccountAccount banque521 = accountRepository.findFirstByCodeAndCompanyId("521", company.getId())
                .or(() -> accountRepository.findFirstByCodeAndCompanyId("522", company.getId()))
                .orElse(null);

        List<AccountJournal> existing = journalRepository.findByCompanyIdAndActiveTrue(company.getId());
        if (!existing.isEmpty()) {
            // Repair: mettre à jour les comptes par défaut null sur les journaux cash/bank
            // créés avant l'import du plan comptable (ou dont le compte était introuvable à l'import).
            boolean repaired = false;
            // Pour la réparation automatique : seulement si UN SEUL compte de liquidité existe.
            // Si plusieurs (5711, 5712...), on ne peut pas deviner lequel appartient à quel journal
            // → l'utilisateur doit réimporter les journaux après les comptes.
            List<AccountAccount> allLiquid = accountRepository.findByInternalTypeAndCompanyIdOrderByCode("liquidity", company.getId());
            AccountAccount singleCashAcct = (allLiquid.size() == 1) ? allLiquid.get(0)
                    : accountRepository.findFirstByCodeAndCompanyId("571", company.getId()).orElse(null);

            List<AccountAccount> bankCodes = accountRepository.findByCodeStartingWithAndCompanyId("52", company.getId());
            AccountAccount singleBankAcct = (bankCodes.size() == 1) ? bankCodes.get(0)
                    : accountRepository.findFirstByCodeAndCompanyId("521", company.getId())
                        .or(() -> accountRepository.findFirstByCodeAndCompanyId("522", company.getId()))
                        .orElse(null);

            for (AccountJournal j : existing) {
                if ("cash".equals(j.getType())
                        && (j.getDefaultDebitAccount() == null || j.getDefaultCreditAccount() == null)) {
                    if (singleCashAcct != null) {
                        j.setDefaultDebitAccount(singleCashAcct);
                        j.setDefaultCreditAccount(singleCashAcct);
                        journalRepository.save(j);
                        repaired = true;
                        log.info("Repaired cash journal [{}] → {} for company {}",
                                j.getCode(), singleCashAcct.getCode(), company.getId());
                    } else {
                        log.warn("Cash journal [{}] has no default account and multiple liquidity accounts exist — reimport journals after accounts.", j.getCode());
                    }
                } else if ("bank".equals(j.getType())
                        && (j.getDefaultDebitAccount() == null || j.getDefaultCreditAccount() == null)) {
                    if (singleBankAcct != null) {
                        j.setDefaultDebitAccount(singleBankAcct);
                        j.setDefaultCreditAccount(singleBankAcct);
                        journalRepository.save(j);
                        repaired = true;
                        log.info("Repaired bank journal [{}] → {} for company {}",
                                j.getCode(), singleBankAcct.getCode(), company.getId());
                    } else {
                        log.warn("Bank journal [{}] has no default account and multiple bank accounts exist — reimport journals after accounts.", j.getCode());
                    }
                }
            }
            if (!repaired) {
                log.info("Default journals already exist and are healthy, skipping.");
            }
            return;
        }

        List<AccountJournal> journals = new ArrayList<>();

        journals.add(AccountJournal.builder()
                .code("VNT").name("Journal des Ventes").type("sale")
                .defaultDebitAccount(client411).defaultCreditAccount(sales701)
                .company(company).active(true).build());

        journals.add(AccountJournal.builder()
                .code("ACH").name("Journal des Achats").type("purchase")
                .defaultDebitAccount(fourn401).defaultCreditAccount(fourn401)
                .company(company).active(true).build());

        journals.add(AccountJournal.builder()
                .code("CAI").name("Journal de Caisse").type("cash")
                .defaultDebitAccount(caisse571).defaultCreditAccount(caisse571)
                .company(company).active(true).build());

        journals.add(AccountJournal.builder()
                .code("BNQ").name("Journal de Banque").type("bank")
                .defaultDebitAccount(banque521).defaultCreditAccount(banque521)
                .company(company).active(true).build());

        journals.add(AccountJournal.builder()
                .code("OD").name("Journal des Opérations Diverses").type("general")
                .defaultDebitAccount(null).defaultCreditAccount(null)
                .company(company).active(true).build());

        journalRepository.saveAll(journals);
        log.info("Default journals initialized: {} journals created", journals.size());
    }

    private void initDefaultWarehouses(Company company) {
        if (!warehouseRepository.findByCompanyIdAndActiveTrue(company.getId()).isEmpty()) {
            log.info("Warehouses already initialized, skipping.");
            return;
        }

        log.info("Initializing default warehouses...");

        // --- Emplacements système ---
        StockLocation supplierLoc = stockLocationRepository.save(StockLocation.builder()
                .name("Fournisseurs").usage("supplier").companyId(null).active(true).build());
        StockLocation customerLoc = stockLocationRepository.save(StockLocation.builder()
                .name("Clients").usage("customer").companyId(null).active(true).build());

        // --- Dépôt Achat (entrepôt de transit des achats) ---
        StockLocation daStock = stockLocationRepository.save(StockLocation.builder()
                .name("DA/Stock").usage("internal").companyId(company.getId()).active(true).build());
        Warehouse depotAchat = warehouseRepository.save(Warehouse.builder()
                .name("Dépôt Achat").code("DA")
                .stockLocationId(daStock.getId())
                .companyId(company.getId()).active(true).build());
        daStock.setWarehouseId(depotAchat.getId());
        stockLocationRepository.save(daStock);

        // --- Avaries (entrepôt des reliquats) ---
        StockLocation avStock = stockLocationRepository.save(StockLocation.builder()
                .name("AV/Stock").usage("internal").companyId(company.getId()).active(true).build());
        Warehouse avaries = warehouseRepository.save(Warehouse.builder()
                .name("Avaries").code("AV")
                .stockLocationId(avStock.getId())
                .companyId(company.getId()).active(true).build());
        avStock.setWarehouseId(avaries.getId());
        stockLocationRepository.save(avStock);

        // --- Magasin Principal ---
        StockLocation mainStock = stockLocationRepository.save(StockLocation.builder()
                .name("MP/Stock").usage("internal").companyId(company.getId()).active(true)
                .build());
        Warehouse magasin = warehouseRepository.save(Warehouse.builder()
                .name("Magasin Principal").code("MP")
                .stockLocationId(mainStock.getId())
                .depotAchatWarehouseId(depotAchat.getId())
                .avarWarehouseId(avaries.getId())
                .companyId(company.getId()).active(true).build());
        mainStock.setWarehouseId(magasin.getId());
        stockLocationRepository.save(mainStock);

        // --- Picking types du Magasin Principal ---
        // incoming : Fournisseurs → Dépôt Achat stock
        pickingTypeRepository.save(StockPickingType.builder()
                .name("Réceptions").code("incoming").warehouseId(magasin.getId())
                .defaultLocationSrcId(supplierLoc.getId())
                .defaultLocationDestId(daStock.getId())
                .sequencePrefix("MP/IN")
                .companyId(company.getId()).build());

        // outgoing : Magasin Principal stock → Clients
        pickingTypeRepository.save(StockPickingType.builder()
                .name("Livraisons").code("outgoing").warehouseId(magasin.getId())
                .defaultLocationSrcId(mainStock.getId())
                .defaultLocationDestId(customerLoc.getId())
                .sequencePrefix("MP/OUT")
                .companyId(company.getId()).build());

        // internal : Magasin Principal stock → Magasin Principal stock (transferts)
        pickingTypeRepository.save(StockPickingType.builder()
                .name("Transferts internes").code("internal").warehouseId(magasin.getId())
                .defaultLocationSrcId(mainStock.getId())
                .defaultLocationDestId(mainStock.getId())
                .sequencePrefix("MP/INT")
                .companyId(company.getId()).build());

        log.info("Default warehouses initialized: Dépôt Achat, Avaries, Magasin Principal");
    }

    // ===== BUILDER HELPERS =====

    private AccountAccount build(String code, String name, String accountType,
                                  String internalType, boolean reconcile, Company company) {
        return AccountAccount.builder()
                .code(code)
                .name(name)
                .accountType(accountType)
                .internalType(internalType)
                .deprecated(false)
                .reconcile(reconcile)
                .company(company)
                .build();
    }

    /** Build with reconcile=true */
    private AccountAccount buildR(String code, String name, String accountType,
                                   String internalType, Company company) {
        return build(code, name, accountType, internalType, true, company);
    }
}

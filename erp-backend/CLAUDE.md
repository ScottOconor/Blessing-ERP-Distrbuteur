# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Build: `./mvnw clean package` (produces `target/blessing-erp.jar`)
- Run dev server: `./mvnw spring-boot:run` (listens on port 8085, needs a local PostgreSQL at `erp_base`)
- Compile only: `./mvnw compile`
- No test suite exists in this repo (`src/test/` is absent) — there is nothing to run with `./mvnw test`.

## Architecture

This is a Spring Boot 3.2 / Java 17 monolith for **Blessing ERP Distributeurs**, an OHADA-compliant ERP for beverage distributors. It also serves a pre-built Angular SPA directly from `src/main/resources/static` (`SpaController` forwards all non-`/api`, non-`/actuator` routes to `index.html`). The Angular source itself lives in the sibling `erp-frontend` project, not in this repo — never hand-edit files under `resources/static`, they're build output.

### Package-by-feature layout

Code is organized under `com.erp.<module>`, each module following `controller/dto/entity/repository/service`: `accounting`, `sales`, `purchases`, `stock`, `hr`, `caisse`, `config`, `common`, `sync`, `auth`, `license`, `helpdesk`, `eleader`, `audit`. Cross-module orchestration usually goes through the service layer (e.g. `RemiseService`/`RistourneService` calling into `PurchaseService`/`SalesService` to post the settlement as a real invoice).

### Multi-tenancy

`Company` is the tenant boundary. Nearly every entity, repository query, and service method is scoped by `companyId` — when adding a new entity or query, follow this pattern rather than introducing a different scoping mechanism.

### Security filter chain

Defined in `SecurityConfig`, filters run in this order: `InterAgencyApiKeyFilter` → `JwtAuthFilter` → `PermissionFilter` → `LicenseEnforcementFilter`. Auth is stateless JWT (`JwtService`, secret auto-generated and persisted on first boot). RBAC is enforced by `PermissionFilter` against a static allow-list in `PermissionService.RULES` mapping HTTP method + URL pattern to `MODULE.RESOURCE.ACTION` triples — this table is the authoritative permission taxonomy for the whole app.

### OHADA accounting core

`OhadaDataInitializer` seeds the OHADA chart of accounts per company on creation. `AccountingService` posts/cancels/reverses journal entries (guarded by `FiscalLockGuard` for closed periods, logged via `AuditService`). `ReportService` produces OHADA financial statements (bilan, compte de résultat, balances 4/6-col, grand livre) — this reporting logic is the one area explicitly being brought to parity with a reference Odoo module (see `../TODO.md`).

### Hub & Spoke sync (`com.erp.sync`)

This instance is a **spoke** (one distributor agency). Domain writes are queued as `OutboxEvent` rows (transactional outbox pattern); `SyncDispatcherScheduler` publishes them to a central Hub over RabbitMQ every 30s, and `SnapshotScheduler`/`SnapshotService` push a full hourly snapshot. This is separate from **inter-agency** access: `RemoteAgency` + `InterAgencyErpController` + `InterAgencyApiKeyFilter` let one distributor instance query another's data directly over HTTP with an API key, bypassing the Hub.

### Licensing (`com.erp.license`)

On-prem license file signed by the Hub's RSA key, tied to a hardware fingerprint via OSHI (`FingerprintService`, `BuildIdentityService`) and the Maven-generated build timestamp/hostname (see `pom.xml`'s `build-helper-maven-plugin` executions). Enforced per-request by `LicenseEnforcementFilter`; `LicenseService` periodically rechecks against the Hub and never overwrites an already-fetched Hub public key.

### Domain patterns worth knowing before touching pricing/settlements

- **Rabais vs Remise vs Ristourne**: on sales invoices, `prixUnitaire` is the normal price and the net/TTC amount already has the rabais baked in (account 701901). On purchases, `prixUnitaire` is the net price and the supplier catalogue price is reconstructed (account 601901). `Remise` (purchases) and `Ristourne` (sales) are near-identical settlement patterns — config entity + payment entity + payment-line entity + a service with `generateFromInvoice`/`generateByPeriod`/`generateFacture` — implemented independently in both modules; treat changes to one as a signal to check the other.
- **Precompte / Enlevement**: both implement a "per-partner override of a company-wide default" pattern (client-specific tariff/tax rate replacing the default).
- **Caisse (cash register)**: balances are filtered by account only, not account+journal — an inter-caisse transfer files both legs under the initiating caisse's journal, so filtering by journal would hide the counterpart leg (see comment in `CaisseService`).

### Seeding

Company-scoped, idempotent `CommandLineRunner`/`ApplicationRunner` classes seed reference data on startup: `OhadaDataInitializer`, `WarehouseDataInitializer`, `DataSeeder`, `OrganisationSeeder`, `PayrollSeeder`, `LeaveTypeSeeder`, `ProfessionalCategorySeeder`.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

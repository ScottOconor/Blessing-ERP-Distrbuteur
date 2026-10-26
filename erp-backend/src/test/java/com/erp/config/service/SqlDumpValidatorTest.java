package com.erp.config.service;

import org.junit.jupiter.api.Test;

import java.io.BufferedReader;
import java.io.StringReader;

import static org.assertj.core.api.Assertions.assertThatCode;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

/**
 * Restauration : un dump tel que pg_dump le produit passe ; tout ce qui sortirait du schéma de
 * l'ERP (commande système, accès fichiers, code procédural, instructions enchaînées) est refusé.
 */
class SqlDumpValidatorTest {

    private static final String VALID_DUMP = """
            \\restrict AbC123
            --
            -- PostgreSQL database dump
            --
            SET statement_timeout = 0;
            SELECT pg_catalog.set_config('search_path', '', false);
            ALTER TABLE IF EXISTS ONLY public.partners DROP CONSTRAINT IF EXISTS partners_pkey;
            DROP TABLE IF EXISTS public.partners;
            CREATE TABLE public.partners (
                id bigint NOT NULL,
                name character varying(255) DEFAULT 'a;b'::character varying,
                notes text
            );
            CREATE SEQUENCE public.partners_id_seq
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            ALTER SEQUENCE public.partners_id_seq OWNED BY public.partners.id;
            COPY public.partners (id, name, notes) FROM stdin;
            1\tClient ; DROP TABLE x\t\\N
            2\t\\\\! rm -rf /\tCOPY y TO PROGRAM 'id'
            \\.
            SELECT pg_catalog.setval('public.partners_id_seq', 2, true);
            SELECT pg_catalog.lo_unlink(oid) FROM pg_catalog.pg_largeobject_metadata WHERE oid = '16401';
            SELECT pg_catalog.lo_create('16401');
            BEGIN;
            SELECT pg_catalog.lo_open('16401', 131072);
            SELECT pg_catalog.lowrite(0, '\\x255044462d');
            SELECT pg_catalog.lo_close(0);
            COMMIT;
            CREATE UNIQUE INDEX ux_partner ON public.partners USING btree (name);
            \\unrestrict AbC123
            """;

    private static void validate(String sql) throws Exception {
        SqlDumpValidator.validate(new BufferedReader(new StringReader(sql)));
    }

    @Test
    void dumpPgDumpAccepte() {
        assertThatCode(() -> validate(VALID_DUMP)).doesNotThrowAnyException();
    }

    @Test
    void metaCommandePsqlRefusee() {
        assertThatThrownBy(() -> validate(VALID_DUMP + "\\! id\n"))
                .isInstanceOf(IllegalArgumentException.class);
        assertThatThrownBy(() -> validate("\\copy public.partners to '/tmp/x'\n"))
                .isInstanceOf(IllegalArgumentException.class);
    }

    @Test
    void accesSystemeRefuse() {
        for (String sql : new String[]{
                "COPY public.partners (id) TO PROGRAM 'id';\n",
                "COPY public.partners (id) FROM '/etc/passwd';\n",
                "SELECT pg_read_file('/etc/passwd');\n",
                "ALTER SYSTEM SET archive_command = 'x';\n",
                "CREATE TABLE t AS SELECT pg_catalog.pg_ls_dir('.');\n",
        }) {
            assertThatThrownBy(() -> validate(sql)).as(sql).isInstanceOf(IllegalArgumentException.class);
        }
    }

    @Test
    void codeProceduralEtInstructionsEnchaineesRefuses() {
        for (String sql : new String[]{
                "DO $$ BEGIN PERFORM 1; END $$;\n",
                "CREATE FUNCTION f() RETURNS int LANGUAGE sql AS 'select 1';\n",
                "SET x = 1; DROP TABLE public.partners;\n",
                "CREATE TABLE public.t (\n    id int\n); GRANT ALL ON public.t TO PUBLIC;\n",
                "DELETE FROM public.partners;\n",
        }) {
            assertThatThrownBy(() -> validate(sql)).as(sql).isInstanceOf(IllegalArgumentException.class);
        }
    }

    @Test
    void blocCopyNonTermineRefuse() {
        assertThatThrownBy(() -> validate("COPY public.partners (id) FROM stdin;\n1\n"))
                .isInstanceOf(IllegalArgumentException.class);
    }
}

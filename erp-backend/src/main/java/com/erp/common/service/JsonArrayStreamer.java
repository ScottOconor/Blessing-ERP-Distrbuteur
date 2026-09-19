package com.erp.common.service;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

/**
 * Écrit une liste volumineuse en JSON au fil de l'eau : les entités sont rechargées par lots
 * (findAllById), converties en DTO, écrites dans le flux HTTP, puis détachées du contexte de
 * persistance avant le lot suivant. La mémoire est donc bornée par la taille d'un lot et non par
 * celle de la liste — contrairement à `repo.findAll().stream().map(dto).toList()`, qui retient
 * toutes les entités ET tous les DTO avant la sérialisation (OutOfMemoryError sur un client à gros
 * volume, cf. erp.log.txt du 2026-09-19). À appeler depuis une méthode @Transactional(readOnly).
 */
@Component
@RequiredArgsConstructor
public class JsonArrayStreamer {

    public static final int DEFAULT_CHUNK_SIZE = 200;

    private final ObjectMapper objectMapper;
    private final EntityManager em;

    /**
     * @param ids      ids déjà triés dans l'ordre de sortie voulu
     * @param reload   recharge les entités d'un lot d'ids (ex. repo::findAllById), ordre indifférent
     * @param idOf     extrait l'id d'une entité (pour restituer l'ordre de {@code ids})
     * @param toDto    conversion entité -> objet sérialisable
     */
    public <E, T> void streamByIds(OutputStream out, List<Long> ids, Function<List<Long>, List<E>> reload,
                                   Function<E, Long> idOf, Function<E, T> toDto) throws IOException {
        // Libère les entités éventuellement déjà chargées pour obtenir les ids : seuls les ids sont conservés.
        em.clear();
        try (JsonGenerator gen = objectMapper.getFactory().createGenerator(out)) {
            gen.writeStartArray();
            for (int i = 0; i < ids.size(); i += DEFAULT_CHUNK_SIZE) {
                List<Long> chunk = ids.subList(i, Math.min(i + DEFAULT_CHUNK_SIZE, ids.size()));
                Map<Long, E> byId = new HashMap<>();
                for (E e : reload.apply(chunk)) byId.putIfAbsent(idOf.apply(e), e);
                for (Long id : chunk) {
                    E e = byId.get(id);
                    if (e != null) objectMapper.writeValue(gen, toDto.apply(e));
                }
                gen.flush();
                em.clear();
            }
            gen.writeEndArray();
        }
    }
}

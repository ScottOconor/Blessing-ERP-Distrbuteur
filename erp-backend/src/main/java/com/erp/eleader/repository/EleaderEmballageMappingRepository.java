package com.erp.eleader.repository;

import com.erp.eleader.entity.EleaderEmballageMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EleaderEmballageMappingRepository extends JpaRepository<EleaderEmballageMapping, Long> {
    List<EleaderEmballageMapping> findByConfigId(Long configId);
}

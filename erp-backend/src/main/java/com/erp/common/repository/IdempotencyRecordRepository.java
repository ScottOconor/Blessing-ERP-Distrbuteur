package com.erp.common.repository;

import com.erp.common.entity.IdempotencyRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;

public interface IdempotencyRecordRepository extends JpaRepository<IdempotencyRecord, String> {

    @Modifying
    @Query("DELETE FROM IdempotencyRecord r WHERE r.createdAt < :before")
    int deleteOlderThan(@Param("before") LocalDateTime before);
}

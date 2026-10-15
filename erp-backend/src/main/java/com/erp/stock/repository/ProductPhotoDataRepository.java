package com.erp.stock.repository;

import com.erp.stock.entity.ProductPhotoData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductPhotoDataRepository extends JpaRepository<ProductPhotoData, Long> {
}

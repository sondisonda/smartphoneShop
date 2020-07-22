package com.smartphoneShop.backend.repository;

import com.smartphoneShop.backend.dao.entity.Smartphone;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SmartphoneRepository extends JpaRepository<Smartphone, Integer> {

}

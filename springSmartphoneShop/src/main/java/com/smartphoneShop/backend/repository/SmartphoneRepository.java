package com.smartphoneShop.backend.repository;

import com.smartphoneShop.backend.dao.entity.Smartphones;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SmartphoneRepository extends JpaRepository<Smartphones, Integer> {

}

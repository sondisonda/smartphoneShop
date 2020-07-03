package com.smartphoneShop.backend.repository;

import com.smartphoneShop.backend.dao.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SmartphonesRepository extends JpaRepository<Users, Integer> {

}

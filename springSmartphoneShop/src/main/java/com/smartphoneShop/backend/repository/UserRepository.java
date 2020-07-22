package com.smartphoneShop.backend.repository;

import com.smartphoneShop.backend.dao.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

}

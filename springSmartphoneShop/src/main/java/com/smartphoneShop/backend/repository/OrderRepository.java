package com.smartphoneShop.backend.repository;

import com.smartphoneShop.backend.dao.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrderRepository extends JpaRepository<Order, Integer> {

}

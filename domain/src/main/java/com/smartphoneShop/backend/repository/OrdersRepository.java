package com.smartphoneShop.backend.repository;

import com.smartphoneShop.backend.dao.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrdersRepository extends JpaRepository<Orders, Integer> {

}

package com.smartphoneShop.backend.service;

import com.smartphoneShop.backend.dao.entity.Order;

import java.util.List;

public interface OrderService {

    List<Order> getAllOrders();

    Order addOrder(Order order);

    Order updateOrder(Order order) throws Exception;

}

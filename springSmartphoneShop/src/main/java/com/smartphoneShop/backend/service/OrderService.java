package com.smartphoneShop.backend.service;

import com.smartphoneShop.backend.dao.entity.Orders;

import java.util.List;

public interface OrderService {

    List<Orders> getAllOrders();

    Orders addOrder(Orders orders);

    Orders updateOrder(Orders orders) throws Exception;

}

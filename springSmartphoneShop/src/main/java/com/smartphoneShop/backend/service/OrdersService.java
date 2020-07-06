package com.smartphoneShop.backend.service;

import com.smartphoneShop.backend.dao.entity.Orders;
import java.util.List;

public interface OrdersService {

    List<Orders> getAllOrders();

    Orders addOrder(Orders order);
    
}

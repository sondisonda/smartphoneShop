package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.entity.Orders;
import com.smartphoneShop.backend.repository.OrdersRepository;
import com.smartphoneShop.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

//    Analogicznie co było kiedyś, nie musisz :) zmienna na final ;)
    @Autowired
    private  OrdersRepository ordersRepository;

    public OrderServiceImpl(OrdersRepository ordersRepository) {
        this.ordersRepository = ordersRepository;
    }

    @Override
    public List<Orders> getAllOrders() {
        return this.ordersRepository.findAll();
    }

    @Override
    public Orders addOrder(Orders order) {
        return ordersRepository.save(order);
    }

}

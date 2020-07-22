package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.entity.Orders;
import com.smartphoneShop.backend.repository.OrderRepository;
import com.smartphoneShop.backend.service.OrderService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {


    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public List<Orders> getAllOrders() {
        return this.orderRepository.findAll();
    }

    @Override
    public Orders addOrder(Orders orders) {
        return orderRepository.save(orders);
    }

    @Override
    public Orders updateOrder(Orders orders) throws Exception {
        return orderRepository.save(orders);
    }

}

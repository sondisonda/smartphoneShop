package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.entity.Order;
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
    public List<Order> getAllOrders() {
        return this.orderRepository.findAll();
    }

    @Override
    public Order addOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order updateOrder(Order order) throws Exception {
        return orderRepository.save(order);
    }

}

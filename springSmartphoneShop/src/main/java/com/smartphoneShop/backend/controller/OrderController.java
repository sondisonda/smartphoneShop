package com.smartphoneShop.backend.controller;


import com.smartphoneShop.backend.dao.entity.Order;
import com.smartphoneShop.backend.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
// Może się da globalnie ustawić?
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("api/orders")
public class OrderController {
    private final OrderService orderService;


    public OrderController(OrderService ordersService){
        this.orderService = ordersService;
    }

    @GetMapping()
    public List<Order> getAllOrders(){
        return orderService.getAllOrders();
    }

    @PostMapping("/add")
    public Order addOrder(@RequestBody Order order){
        return orderService.addOrder(order);
    }

    @PutMapping
    public Order updateOrder(@RequestBody Order order) throws Exception{
        return orderService.updateOrder(order);
    }

}

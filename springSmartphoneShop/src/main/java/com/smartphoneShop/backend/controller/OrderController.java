package com.smartphoneShop.backend.controller;


import com.smartphoneShop.backend.dao.entity.Orders;
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

    @GetMapping
    public List<Orders> getAllOrders(){
        return orderService.getAllOrders();
    }

    @PostMapping
    public Orders addOrder(@RequestBody Orders orders){
        return orderService.addOrder(orders);
    }

    @PutMapping
    public Orders updateOrder(@RequestBody Orders orders) throws Exception{
        return orderService.updateOrder(orders);
    }

}

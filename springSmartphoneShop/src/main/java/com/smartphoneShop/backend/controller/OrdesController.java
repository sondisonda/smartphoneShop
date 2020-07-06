package com.smartphoneShop.backend.controller;


import com.smartphoneShop.backend.dao.entity.Orders;
import com.smartphoneShop.backend.service.OrdersService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/orders")
public class OrdesController {

    OrdersService ordersService;


    public OrdesController(OrdersService ordersService){
        this.ordersService = ordersService;
    }

    @GetMapping()
    public List<Orders> getAllOrders(){
        return ordersService.getAllOrders();
    }

    @PostMapping
    public Orders addOrder(@RequestBody Orders order){
        return ordersService.addOrder(order);
    }

}

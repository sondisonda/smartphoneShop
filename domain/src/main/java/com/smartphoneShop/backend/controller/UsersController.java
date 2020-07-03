package com.smartphoneShop.backend.controller;

import com.smartphoneShop.backend.dao.entity.Users;
import com.smartphoneShop.backend.service.UsersService;
import org.springframework.web.bind.annotation.*;
import java.util.List;



@RestController
@RequestMapping("api/users")

public class UsersController {

    UsersService usersService;

    public UsersController(UsersService usersService){
        this.usersService = usersService;
    }

    @GetMapping()
    public List<Users> getAll(){
        return usersService.getAllUsers();
    }

    @PostMapping
    public Users addUser(@RequestBody Users user){
        return usersService.createUser(user);
    }

    @PutMapping
    public Users updateUser(@RequestBody Users user){
        return usersService.updateUser(user);
    }

}

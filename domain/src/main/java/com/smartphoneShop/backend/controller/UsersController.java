package com.smartphoneShop.backend.controller;

import com.smartphoneShop.backend.dao.entity.Users;
import com.smartphoneShop.backend.service.UsersService;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/users")
public class UsersController {



    UsersService usersService;


    public UsersController(UsersService usersService){
        this.usersService = usersService;
    }

    @GetMapping()
    public Iterable<Users> getAll(){
        return usersService.getAllUsers();
    }

    @PostMapping
    public Users addUsers(@RequestBody Users user){
        return usersService.createUser(user);
    }

    @PutMapping
    public Users updateUsers(@RequestBody Users user){
        return usersService.updateUsers(user);
    }

}

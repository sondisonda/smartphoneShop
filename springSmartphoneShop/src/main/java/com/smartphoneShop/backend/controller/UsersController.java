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

    @GetMapping("/byId")
    public Users getById(@RequestParam Integer index) throws Exception{
        return usersService.findById(index);
    }

    @PostMapping
    public Users addUser(@RequestBody Users user){
        return usersService.addUser(user);
    }

    @PutMapping
    public Users updateUser(@RequestBody Users user){
        return usersService.updateUser(user);
    }

    @DeleteMapping
    public void deleteUsers(@RequestParam int index){
        usersService.deleteById(index);
    }

}

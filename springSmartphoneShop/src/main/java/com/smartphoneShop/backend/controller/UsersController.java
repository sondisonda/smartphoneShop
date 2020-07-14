package com.smartphoneShop.backend.controller;

import com.smartphoneShop.backend.dao.entity.Users;
import com.smartphoneShop.backend.service.UserService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

//Formatowanie
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/users")

public class UsersController {

    private final UserService userService;

    public UsersController(UserService usersService){
        this.userService = usersService;
    }

    @GetMapping("/getall")
    public List<Users> getAll(){
        return userService.getAllUsers();
    }

    //    Id w path
    @GetMapping("/get/{id}")
    public Users getById(@PathVariable long id) throws Exception{
        return userService.findById(id);
    }

    @PostMapping
    public Users addUser(@RequestBody Users user){
        return userService.addUser(user);
    }

    //    Id w path
    @PutMapping
    public Users updateUser(@RequestBody Users user){
        return userService.updateUser(user);
    }

//    Id w path
    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable long id){
        userService.deleteById(id);
    }

}


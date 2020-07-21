package com.smartphoneShop.backend.controller;

import com.smartphoneShop.backend.dao.entity.Users;
import com.smartphoneShop.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

//Formatowanie!
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/users")

public class UsersController {

    private final UserService userService;

    public UsersController(UserService usersService){
        this.userService = usersService;
    }

    @GetMapping
    public List<Users> getAll(){
        return userService.getAllUsers();
    }


    @PostMapping("/add")
    public Users addUser(@RequestBody Users user){
        return userService.addUser(user);
    }


    @GetMapping("/get/{id}")
    public Users getById(@PathVariable int id) throws Exception{
        return userService.findById(id);
    }

    @PutMapping("/update/{id}")
    public void updateUser(@PathVariable int id, @RequestBody Users user) throws Exception {
        Users userData =userService.findById(id);

        userService.updateUser(user);
    }


    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id")int id){
        userService.deleteById(id);
    }

}


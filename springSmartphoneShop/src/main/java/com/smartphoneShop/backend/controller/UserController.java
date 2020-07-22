package com.smartphoneShop.backend.controller;

import com.smartphoneShop.backend.dao.entity.User;
import com.smartphoneShop.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//Formatowanie!
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/users")

public class UserController {

    private final UserService userService;

    public UserController(UserService usersService){
        this.userService = usersService;
    }

    @GetMapping
    public List<User> getAll(){
        return userService.getAllUsers();
    }


    @PostMapping("/add")
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }


    @GetMapping("/get/{id}")
    public User getById(@PathVariable int id) throws Exception{
        return userService.findById(id);
    }

    @PutMapping("/update/{id}")
    public void updateUser(@PathVariable int id, @RequestBody User user) throws Exception {
        User userData =userService.findById(id);

        userService.updateUser(user);
    }


    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id")int id){
        userService.deleteById(id);
    }

}


package com.smartphoneShop.backend.controller;

import com.smartphoneShop.backend.dao.body.LoginBody;
import com.smartphoneShop.backend.dao.entity.Users;
import com.smartphoneShop.backend.exception.RecordNotFoundException;
import com.smartphoneShop.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/users")

public class UserController {

    private final UserService userService;

    public UserController(UserService usersService) {
        this.userService = usersService;
    }

    @GetMapping
    public List<Users> getAll() {
        return userService.getAllUsers();
    }


    @PostMapping
    public Users addUser(@RequestBody Users users) {
        return userService.addUser(users);
    }

    @GetMapping("/get/{id}")
    public Users getById(@PathVariable int id) throws RecordNotFoundException {
        return userService.findById(id);
    }

    @PutMapping("/update/{id}")
    public void updateUser(@PathVariable int id, @RequestBody Users users) throws RecordNotFoundException {
        Users usersData = userService.findById(id);

        userService.updateUser(users);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") int id) {
        userService.deleteById(id);
    }

    @PostMapping("/login")
    public Users loginUser(@RequestBody LoginBody loginBody) throws RecordNotFoundException {
        return userService.loginUser(loginBody);
    }
}


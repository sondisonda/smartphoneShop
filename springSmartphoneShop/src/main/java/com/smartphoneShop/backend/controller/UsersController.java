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

    @GetMapping()
    public List<Users> getAll(){
        return userService.getAllUsers();
    }

    //    Id w path
    @GetMapping("/byId")
    public Users getById(@RequestParam Integer index) throws Exception{
        return userService.findById(index);
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
    @DeleteMapping
    public void deleteUsers(@RequestParam int index){
        userService.deleteById(index);
    }

}

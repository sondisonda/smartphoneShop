package com.smartphoneShop.backend.controller;

import com.smartphoneShop.backend.dao.entity.Users;
import com.smartphoneShop.backend.service.UsersService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

//Formatowanie
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/users")

public class UsersController {
// private final ?
    UsersService usersService;

    public UsersController(UsersService usersService){
        this.usersService = usersService;
    }

    @GetMapping()
    public List<Users> getAll(){
        return usersService.getAllUsers();
    }

    //    Id w path
    @GetMapping("/byId")
    public Users getById(@RequestParam Integer index) throws Exception{
        return usersService.findById(index);
    }

    @PostMapping
    public Users addUser(@RequestBody Users user){
        return usersService.addUser(user);
    }

    //    Id w path
    @PutMapping
    public Users updateUser(@RequestBody Users user){
        return usersService.updateUser(user);
    }

//    Id w path
    @DeleteMapping
    public void deleteUsers(@RequestParam int index){
        usersService.deleteById(index);
    }

}

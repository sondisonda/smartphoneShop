package com.smartphoneShop.backend.controller;

import com.smartphoneShop.backend.dao.entity.Users;
import com.smartphoneShop.backend.service.UsersService;
import org.springframework.web.bind.annotation.*;


/*
* Proponuje "/api/users"
* Ułatwi ci to późniejszą autoryzcje
 */
@RestController
@RequestMapping("/users")
public class UsersController {


// Czemu service jest jest wstrzykiwany ?
//    @Autowired lub przez kontruktor
    UsersService usersService;


    public UsersController(UsersService usersService){
        this.usersService = usersService;
    }

    @GetMapping()
//    List
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

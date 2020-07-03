package com.smartphoneShop.backend.controller;

import com.smartphoneShop.backend.dao.entity.Users;
import com.smartphoneShop.backend.service.UsersService;
import org.springframework.web.bind.annotation.*;

<<<<<<< HEAD

/*
* Proponuje "/api/users"
* Ułatwi ci to późniejszą autoryzcje
 */
@RestController
@RequestMapping("/users")
=======
import java.util.List;


@RestController
@RequestMapping("api/users")
>>>>>>> d81b6d3... Code review things
public class UsersController {


// Czemu service jest jest wstrzykiwany ?
//    @Autowired lub przez kontruktor
    UsersService usersService;


    public UsersController(UsersService usersService){
        this.usersService = usersService;
    }

<<<<<<< HEAD
    @GetMapping()
//    List
    public Iterable<Users> getAll(){
=======

    @GetMapping()
//    List
    public List<Users> getAll(){
>>>>>>> d81b6d3... Code review things
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

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

    @GetMapping("/getall")
    public List<Users> getAll(){
        return userService.getAllUsers();
    }


    @PostMapping
    public Users addUser(@RequestBody Users user){
        return userService.addUser(user);
    }


    @GetMapping("/get/{id}")
    public Users getById(@PathVariable long id) throws Exception{
        return userService.findById(id);
    }

//    Co to ma robić? wyszukujesz i nic z tym nie robisz
//    Bardziej precyzyjny błąd niż exception
    @PutMapping("/update/{id}")
    public void updateUser(@PathVariable long id, @RequestBody Users user) throws Exception {
        Users userData =userService.findById(id);

        userService.updateUser(user);
    }



    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable long id){
        userService.deleteById(id);
    }

}


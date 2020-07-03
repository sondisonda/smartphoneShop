package com.smartphoneShop.backend.service;
<<<<<<< HEAD
import com.smartphoneShop.backend.dao.entity.Users;
import java.util.List;

// Formatowanie ogarnij żeby nie było dziwny przerw domysle masz w Intelu pod Ctrl + Alt + L
public interface UsersService {

    List<Users> getAllUsers();
    Users createUser(Users user);


    void deleteUser(int id);

    Users updateUsers(Users user);
=======

import com.smartphoneShop.backend.dao.entity.Users;

import java.util.List;

public interface UsersService {

    List<Users> getAllUsers();

    public Users createUser(Users user);

    void deleteUser(int id);

    Users updateUser(Users user);
>>>>>>> d81b6d3... Code review things
}

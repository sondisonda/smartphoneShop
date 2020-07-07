package com.smartphoneShop.backend.service;

import com.smartphoneShop.backend.dao.entity.Users;

import java.util.List;

// Formatowanie ogarnij żeby nie było dziwny przerw domysle masz w Intelu pod Ctrl + Alt + L
public interface UsersService {

    List<Users> getAllUsers();

    void deleteById(int id);

    Users updateUser(Users user);

    public Users findById(Integer id) throws Exception;

    public Users addUser(Users user);
}




package com.smartphoneShop.backend.service;

import com.smartphoneShop.backend.dao.entity.Users;

import java.util.List;

public interface UserService {

    List<Users> getAllUsers();

    void deleteById(int id);

    void updateUser(Users users);

    Users findById(int id) throws Exception;

    Users addUser(Users users);
}




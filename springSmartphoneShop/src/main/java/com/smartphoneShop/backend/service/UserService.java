package com.smartphoneShop.backend.service;

import com.smartphoneShop.backend.dao.entity.Users;

import java.util.List;

public interface UserService {

    List<Users> getAllUsers();

    void deleteById(long id);

    Users updateUser(Users user);

    Users findById(long id) throws Exception;

    public Users addUser(Users user);
}




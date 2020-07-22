package com.smartphoneShop.backend.service;

import com.smartphoneShop.backend.dao.entity.User;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();

    void deleteById(int id);

    void updateUser(User user);

    User findById(int id) throws Exception;

    User addUser(User user);
}




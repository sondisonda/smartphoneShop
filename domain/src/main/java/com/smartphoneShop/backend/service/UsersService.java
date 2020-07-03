package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.entity.Users;

import java.util.List;

public interface UsersService {

    List<Users> getAllUsers();
    void createUser(Users user);
    void updateUser(Users user, long id);
    void deleteUser(long id);

}

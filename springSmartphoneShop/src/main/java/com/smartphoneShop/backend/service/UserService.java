package com.smartphoneShop.backend.service;

import com.smartphoneShop.backend.dao.body.LoginBody;
import com.smartphoneShop.backend.dao.entity.Users;
import com.smartphoneShop.backend.exception.RecordNotFoundException;

import java.util.List;

public interface UserService {

    List<Users> getAllUsers();

    void deleteById(int id);

    void updateUser(Users users);

    Users findById(int id) throws RecordNotFoundException;

    Users addUser(Users users);

    Users loginUser(LoginBody loginBody) throws RecordNotFoundException;
}




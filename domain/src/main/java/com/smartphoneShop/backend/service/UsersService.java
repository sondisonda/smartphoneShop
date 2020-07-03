package com.smartphoneShop.backend.service;
import com.smartphoneShop.backend.dao.entity.Users;
import java.util.List;

public interface UsersService {

    List<Users> getAllUsers();
    Users createUser(Users user);


    void deleteUser(int id);

    Users updateUsers(Users user);
}

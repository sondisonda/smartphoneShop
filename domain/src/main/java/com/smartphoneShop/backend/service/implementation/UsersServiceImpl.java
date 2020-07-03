package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.entity.Users;
import com.smartphoneShop.backend.repository.UsersRepository;
import com.smartphoneShop.backend.service.UsersService;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UsersServiceImpl implements UsersService {

    private UsersRepository usersRepository;

    public UsersServiceImpl(UsersRepository userRepository) {
        this.usersRepository = userRepository;
    }

    @Override
    public List<Users> getAllUsers() {
        return this.usersRepository.findAll();
    }


    @Override
    public Users createUser(Users user) {
        this.usersRepository.save(user);
        return user;
    }

    @Override
    public Users updateUsers(Users user) {
        return usersRepository.save(user);
    }


    @Override
    public void deleteUser(int id) {
        this.usersRepository.deleteById(id);
    }
}

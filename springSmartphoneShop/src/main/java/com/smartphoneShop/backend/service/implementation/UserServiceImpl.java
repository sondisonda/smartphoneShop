package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.entity.Users;
import com.smartphoneShop.backend.repository.UsersRepository;
import com.smartphoneShop.backend.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

// Formatowanie!
@Service
public class UserServiceImpl implements UserService {



    private final UsersRepository usersRepository;

    public UserServiceImpl(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }


    @Override
    public List<Users> getAllUsers() {
        return this.usersRepository.findAll();
    }

//     może coś bardziej precyzyjnego niz exception
    @Override
    public Users findById(long id) throws Exception {
        return usersRepository.findById((int) id).orElseThrow(Exception::new);
    }

    @Override
    public Users updateUser(Users user) {
//        In line!!
//
        usersRepository.save(user);
        return user;
    }


    @Override
    public void deleteById(long id) {
        this.usersRepository.deleteById((int) id);
    }

    @Override
    public Users addUser(Users user) {

        //        In line!!
        usersRepository.save(user);
        return user;
    }



}

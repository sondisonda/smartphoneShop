package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.entity.Users;
import com.smartphoneShop.backend.repository.UserRepository;
import com.smartphoneShop.backend.service.UserService;
import org.springframework.stereotype.Service;
import java.util.List;

// Formatowanie!
@Service
public class UserServiceImpl implements UserService {



    private final UserRepository usersRepository;

    public UserServiceImpl(UserRepository usersRepository) {
        this.usersRepository = usersRepository;
    }


    @Override
    public List<Users> getAllUsers() {
        return this.usersRepository.findAll();
    }

//     może coś bardziej precyzyjnego niz exception
    @Override
    public Users findById(int id) throws Exception {
        return usersRepository.findById((int) id).orElseThrow(Exception::new);
    }

    @Override
    public void updateUser(Users users) {usersRepository.save(users); }


    @Override
    public void deleteById(int id) {
        this.usersRepository.deleteById( id);
    }

    @Override
    public Users addUser(Users users) { usersRepository.save(users);return users;  }



}

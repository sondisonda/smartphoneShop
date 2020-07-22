package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.entity.User;
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
    public List<User> getAllUsers() {
        return this.usersRepository.findAll();
    }

//     może coś bardziej precyzyjnego niz exception
    @Override
    public User findById(int id) throws Exception {
        return usersRepository.findById((int) id).orElseThrow(Exception::new);
    }

    @Override
    public void updateUser(User user) {usersRepository.save(user); }


    @Override
    public void deleteById(int id) {
        this.usersRepository.deleteById( id);
    }

    @Override
    public User addUser(User user) { usersRepository.save(user);return user;  }



}

package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.entity.Users;
import com.smartphoneShop.backend.exception.RecordNotFoundException;
import com.smartphoneShop.backend.repository.UserRepository;
import com.smartphoneShop.backend.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

// Formatowanie!
@Service
public class UserServiceImpl implements UserService {


    private final UserRepository usersRepository;

    private final String message = "User";

    public UserServiceImpl(UserRepository usersRepository) {
        this.usersRepository = usersRepository;
    }


    @Override
    public List<Users> getAllUsers() {
        return this.usersRepository.findAll();
    }

    //     może coś bardziej precyzyjnego niz exception
    @Override
    public Users findById(int id) throws RecordNotFoundException {
        try {
            return usersRepository.findById((int) id).orElseThrow(() -> new RecordNotFoundException(message));

        } catch (Exception e) {
            throw new RecordNotFoundException(message);
        }

    }

    @Override
    public void updateUser(Users users) {
        usersRepository.save(users);
    }


    @Override
    public void deleteById(int id) {
        this.usersRepository.deleteById(id);
    }

    @Override
    public Users addUser(Users users) {
        usersRepository.save(users);
        return users;
    }

    @Override
    public Users loginUser(String userName, String password) throws RecordNotFoundException {
        try {
            for (Users users : usersRepository.findAll()) {
                if (users.getUserName() == userName && users.getPassword() == password) {
                    return usersRepository.findById(users.getId()).orElseThrow(() -> new RecordNotFoundException(message));
                }
            }

        } catch (Exception e) {
            throw new RecordNotFoundException(message);
        }
        return null;
    }


}

package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.body.LoginBody;
import com.smartphoneShop.backend.dao.entity.Users;
import com.smartphoneShop.backend.exception.RecordNotFoundException;
import com.smartphoneShop.backend.repository.UserRepository;
import com.smartphoneShop.backend.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

// Formatowanie!!
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

    @Override
    public Users findById(int id) throws RecordNotFoundException {
        try {
            return usersRepository.findById((int) id).orElseThrow(() -> new RecordNotFoundException(message));

//            No ale tu też jest exception xD
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
        return usersRepository.save(users);
    }

    public Users loginUser(LoginBody loginBody) throws RecordNotFoundException{
        Users foundUser = null;
        try {
            for(Users user: usersRepository.findAll()) {
                if (user.getUserName().equals(loginBody.getUserName()) && user.getPassword().equals(loginBody.getPassword())) {
                    foundUser = usersRepository.findById(user.getId()).orElseThrow(() -> new RecordNotFoundException(message));
                }
            }

//        trochę ogólny exception
        } catch (Exception e) {
            throw new RecordNotFoundException(message);
        }
        return foundUser;
    }



}

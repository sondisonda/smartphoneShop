package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.entity.Users;
import com.smartphoneShop.backend.repository.UsersRepository;
import com.smartphoneShop.backend.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// Formatowanie
@Service
public class UsersServiceImpl implements UsersService {


    //     powtarzasz to w kontruktorze, privat final. Poczytaj o wstrzykiwaniu zależności
    @Autowired
    private UsersRepository usersRepository;

    public UsersServiceImpl(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }


    @Override
    public List<Users> getAllUsers() {
        return this.usersRepository.findAll();
    }

    @Override
    public Users findById(Integer id) throws Exception{
        return usersRepository.findById(id).orElseThrow(Exception::new);
    }

    @Override
    public Users updateUser(Users user) {
        return usersRepository.save(user);
    }


    @Override
    public void deleteById(int id) {
        this.usersRepository.deleteById(id);
    }

    @Override
    public Users addUser(Users user) {
        usersRepository.save(user);
        return user;
    }
}

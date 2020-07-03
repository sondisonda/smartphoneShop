package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.entity.Users;
import com.smartphoneShop.backend.repository.UsersRepository;
import com.smartphoneShop.backend.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UsersServiceImpl implements UsersService {

<<<<<<< HEAD
//    Możesz dodać final tutal ;)
    private UsersRepository usersRepository;
=======
    private final UsersRepository usersRepository;
>>>>>>> d81b6d3... Code review things

    public UsersServiceImpl(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }


    @Override
    public List<Users> getAllUsers() {
        return this.usersRepository.findAll();
    }


<<<<<<< HEAD
//    Hmm czyli jak coś pójdzie nie tak to i tak dostaniesz usera zwrotnie ?
//    Metoda save sama zwarca obiekt ;)
    @Override
    public Users createUser(Users user) {
        this.usersRepository.save(user);
        return user;
    }

//    To nie zawsze zadziała, zależy on kontrukcji requestów z GUI. Przegoogluj to
    @Override
    public Users updateUsers(Users user) {
=======
    @Override
    public Users createUser(Users user) {
        this.usersRepository.save(user);
        return user;
    }

    //    To nie zawsze zadziała, zależy on kontrukcji requestów z GUI. Przegoogluj to
    @Override
    public Users updateUser(Users user) {
>>>>>>> d81b6d3... Code review things
        return usersRepository.save(user);
    }


    @Override
    public void deleteUser(int id) {
        this.usersRepository.deleteById(id);
    }
}

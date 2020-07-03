package com.smartphoneShop.backend.dao.entity;

import javax.persistence.*;
import java.io.Serializable;

import com.sun.istack.NotNull;
import lombok.Data;

@Entity(name = "Users")
@Data
// User* - to jest jeden user
public class Users implements Serializable {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    @NotNull
    private String userName;

    @NotNull
    private String password;

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

}

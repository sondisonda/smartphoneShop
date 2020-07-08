package com.smartphoneShop.backend.dao.entity;

import javax.persistence.*;
import java.io.Serializable;

import com.sun.istack.NotNull;
import lombok.Data;

// Formatowanie
@Entity(name = "User")
@Data

public class Users implements Serializable {

    Users() {
    }

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

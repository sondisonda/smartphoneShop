package com.smartphoneShop.backend.dao.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

import com.smartphoneShop.backend.dao.enums.RoleType;
import com.sun.istack.NotNull;
import lombok.Data;

@Entity
@Table(name = "users")
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

    @Enumerated(value = EnumType.STRING)
    private RoleType roleType;

    @OneToMany
    private List<Orders> orders;


}

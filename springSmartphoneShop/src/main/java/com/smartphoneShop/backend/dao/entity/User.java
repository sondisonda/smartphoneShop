package com.smartphoneShop.backend.dao.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

import com.smartphoneShop.backend.dao.enums.RoleType;
import com.sun.istack.NotNull;
import lombok.Data;

@Entity(name = "USER")
@Data

public class User implements Serializable {

    User() {
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
    private List<Order> order;


}

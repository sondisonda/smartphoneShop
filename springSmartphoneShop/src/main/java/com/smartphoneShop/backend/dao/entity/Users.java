package com.smartphoneShop.backend.dao.entity;

import javax.persistence.*;
import java.io.Serializable;

import com.smartphoneShop.backend.dao.enums.RoleType;
import com.sun.istack.NotNull;
import lombok.Data;

@Entity(name = "Person")
@Data

public class Users implements Serializable {

    Users() {
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private long id;

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
}

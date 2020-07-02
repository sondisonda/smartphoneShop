package com.smartphoneShop.domain.entity;

import javax.persistence.*;
import java.io.Serializable;

import com.sun.istack.NotNull;
import lombok.Data;

@Entity(name = "Users")
@Data
public class UsersEntity implements Serializable {

    @Id
    private int id;

    @NotNull
    private String username;

    @NotNull
    private String password;

    @NotNull
    private String name;

    @NotNull
    private String lastname;

}

package com.smartphoneShop.backend.dao.dto;


import com.sun.istack.NotNull;
import lombok.Data;

@Data
public class UsersDto {

    private long id;
    private String userName;
    private String password;
    private String firstName;
    private String lastName;
    private int role;
}

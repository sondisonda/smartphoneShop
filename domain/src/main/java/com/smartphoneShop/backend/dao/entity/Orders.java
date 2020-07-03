package com.smartphoneShop.domain.dao.entity;

import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.security.Timestamp;

//@Entity(name = "Orders")
@Data
public class Orders {


    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    @NotNull
    private int user_id;

    @NotNull
    private Timestamp date;

    @NotNull
    private int value;

    @NotNull
    private int status; //tmp enum
}

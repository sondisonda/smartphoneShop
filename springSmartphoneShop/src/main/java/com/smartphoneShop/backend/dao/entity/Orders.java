package com.smartphoneShop.backend.dao.entity;

import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity(name = "Order")
@Data
public class Orders {


    Orders() {
    }


    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    //    tu chyba miała być relacja ?
    @NotNull
    private int user_id;


    @NotNull
    private Date date;

    @NotNull
    private int value;

    // @NotNull
    // private int status; //tmp enum Dokładnie ENUM
}

package com.smartphoneShop.backend.dao.entity;

import com.sun.istack.NotNull;
import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;


@Entity(name = "Basket")
@Data
public class Orders {


    Orders(){
    }


    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    @NotNull
    private int user_id;


    @NotNull
    private Date date;

    @NotNull
    private int value;

   // @NotNull
   // private int status; //tmp enum Dokładnie ENUM
}

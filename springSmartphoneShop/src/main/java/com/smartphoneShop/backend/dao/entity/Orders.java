package com.smartphoneShop.backend.dao.entity;

import com.smartphoneShop.backend.dao.enums.Status;
import com.sun.istack.NotNull;
import lombok.Data;
import javax.persistence.*;
import java.util.Date;

@Entity(name = "Basket")
@Data
public class Orders {


    Orders() {
    }


    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private long id;

    //    tu chyba miała być relacja ?
    @NotNull
    private int user_id;


    @NotNull
    private Date date;

    @NotNull
    private int value;

    @Enumerated(value = EnumType.STRING)
    private Status status;// @NotNull

}

package com.smartphoneShop.backend.dao.entity;

import com.smartphoneShop.backend.dao.enums.Status;
import com.sun.istack.NotNull;
import lombok.Data;
import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity(name = "ORDER")
@Data
public class Order {


    Order() {
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    @NotNull
    private Date date;

    @NotNull
    private int value;

    @Enumerated(value = EnumType.STRING)
    private Status status;// @NotNull

    @ManyToOne
    private User user;

    @ManyToMany
    private List<Smartphone> smartphone;

}

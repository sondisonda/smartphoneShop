package com.smartphoneShop.backend.dao.entity;


import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

//Formatowanie!
@Entity(name = "SMARTPHONE")

@Data
public class Smartphone {


    Smartphone() {
    }


    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    @NotNull
    private String brand;

    @NotNull
    private String model;

    @NotNull
    private int prize;

    @NotNull
    private int stock;


    @ManyToMany
    private List<Order> order;
}

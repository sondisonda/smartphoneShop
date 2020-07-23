package com.smartphoneShop.backend.dao.entity;


import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

//Formatowanie!!!
@Entity
@Table(name = "smartphones")
@Data
public class Smartphones {


    Smartphones() {
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
    private List<Orders> orders;
}

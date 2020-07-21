package com.smartphoneShop.backend.dao.entity;


import com.sun.istack.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//Formatowanie!
@Entity(name = "Smartphone")

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
}

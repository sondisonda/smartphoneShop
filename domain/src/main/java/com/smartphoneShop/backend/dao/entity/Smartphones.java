package com.smartphoneShop.domain.dao.entity;


import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//@Entity(name = "Smartphones")
@Data
public class Smartphones {

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

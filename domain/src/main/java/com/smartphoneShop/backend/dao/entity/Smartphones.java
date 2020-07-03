package com.smartphoneShop.backend.dao.entity;


import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

<<<<<<< HEAD
@Entity(name = "Smartphones")
=======
@Entity(name = "Smartphone")
>>>>>>> d81b6d3... Code review things
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

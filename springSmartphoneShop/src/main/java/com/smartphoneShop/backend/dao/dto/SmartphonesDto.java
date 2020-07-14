package com.smartphoneShop.backend.dao.dto;

import com.sun.istack.NotNull;
import lombok.Data;

@Data
public class SmartphonesDto {

    private long id;
    private String brand;
    private String model;
    private int prize;
    private int stock;
}

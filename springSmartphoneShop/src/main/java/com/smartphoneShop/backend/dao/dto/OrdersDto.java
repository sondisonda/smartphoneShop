package com.smartphoneShop.backend.dao.dto;

import lombok.Data;
import java.security.Timestamp;

@Data
public class OrdersDto {

    private long id;
    private long userId;
    private Timestamp date;
    private int value;
    private int status; //tmp enum!!

}

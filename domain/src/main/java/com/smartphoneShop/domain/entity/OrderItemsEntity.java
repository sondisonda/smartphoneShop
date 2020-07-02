package com.smartphoneShop.domain.entity;

import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.Entity;

@Entity(name = "OrderItems")
@Data
public class OrderItemsEntity {

    @NotNull
    private int order_id;

    @NotNull
    private int prduct_id;

    @NotNull
    private int quanity;

}

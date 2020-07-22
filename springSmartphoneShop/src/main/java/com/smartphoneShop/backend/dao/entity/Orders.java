package com.smartphoneShop.backend.dao.entity;

import com.smartphoneShop.backend.dao.enums.Status;
import com.sun.istack.NotNull;
import lombok.Data;
import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "orders")
@Data
public class Orders {


    Orders() {
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
    private Users users;

    @ManyToMany
    private List<Smartphones> smartphones;




    public void addSmartphone(Smartphones smartphone) {
        this.smartphones.add(smartphone);
    }

    public void removeSmartphone(Smartphones smartphone) {
        this.smartphones.remove(smartphone);
    }
}

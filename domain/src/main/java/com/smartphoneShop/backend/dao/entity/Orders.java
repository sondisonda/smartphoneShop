package com.smartphoneShop.backend.dao.entity;

import com.sun.istack.NotNull;
import lombok.Data;
<<<<<<< HEAD
=======
import sun.util.calendar.BaseCalendar;
import sun.util.calendar.LocalGregorianCalendar;
>>>>>>> d81b6d3... Code review things

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.security.Timestamp;
<<<<<<< HEAD

@Entity(name = "Orders")
@Data
// Liczba pojedyńcza Order
=======
import java.util.Date;

@Entity(name = "Order")
@Data
>>>>>>> d81b6d3... Code review things
public class Orders {


    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    @NotNull
    private int user_id;

//   Może DATE ?
    @NotNull
<<<<<<< HEAD
    private Timestamp date;
=======
    private Date date;
>>>>>>> d81b6d3... Code review things

    @NotNull
    private int value;

    @NotNull
    private int status; //tmp enum Dokładnie ENUM
}

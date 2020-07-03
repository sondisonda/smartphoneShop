package com.smartphoneShop.backend.service;

import com.smartphoneShop.backend.dao.entity.Smartphones;

import java.util.List;

<<<<<<< HEAD


// Formatowanie
// Liczba pojedyńcza Smartphone
public interface SmartphonesService {

    List<Smartphones> getAllSmartphones();
    void addSmartphone(Smartphones smartphone);
    void editSmartphone(Smartphones smartphone, int id);
    void deleteSmartphone(int id);
=======
public interface SmartphonesService {

    List<Smartphones> getAllSmartphones();

    void addSmartphone(Smartphones smartphone);

    void editSmartphone(Smartphones smartphone, int id);

    void deleteSmartphone(int id);

>>>>>>> d81b6d3... Code review things
    void sellSmartphone(int id);

}

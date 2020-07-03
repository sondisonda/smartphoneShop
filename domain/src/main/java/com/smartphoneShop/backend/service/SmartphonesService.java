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

    Smartphones addSmartphone(Smartphones smartphone);

    Smartphones editSmartphone(Smartphones smartphone);

    void deleteSmartphone(int id);

<<<<<<< HEAD
>>>>>>> d81b6d3... Code review things
    void sellSmartphone(int id);

=======
>>>>>>> d8256a4... Ended services
}

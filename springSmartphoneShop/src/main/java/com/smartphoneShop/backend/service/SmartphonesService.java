package com.smartphoneShop.backend.service;

import com.smartphoneShop.backend.dao.entity.Smartphones;

import java.util.List;



// Formatowanie
// Liczba pojedyńcza Smartphone
public interface SmartphonesService {

    List<Smartphones> getAllSmartphones();

    Smartphones addSmartphone(Smartphones smartphone);

    Smartphones editSmartphone(Smartphones smartphone);

    void deleteSmartphone(int id);

}

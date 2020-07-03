package com.smartphoneShop.backend.service;

import com.smartphoneShop.backend.dao.entity.Smartphones;

import java.util.List;




public interface SmartphonesService {

    List<Smartphones> getAllSmartphones();
    void addSmartphone(Smartphones smartphone);
    void editSmartphone(Smartphones smartphone, int id);
    void deleteSmartphone(int id);
    void sellSmartphone(int id);

}

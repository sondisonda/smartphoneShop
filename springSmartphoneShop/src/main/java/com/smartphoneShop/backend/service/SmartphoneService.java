package com.smartphoneShop.backend.service;

import com.smartphoneShop.backend.dao.entity.Smartphones;

import java.util.List;


public interface SmartphoneService {

    List<Smartphones> getAllSmartphones();

    Smartphones addSmartphone(Smartphones smartphone);

    Smartphones editSmartphone(Smartphones smartphone);

    void deleteSmartphone(long id);

}

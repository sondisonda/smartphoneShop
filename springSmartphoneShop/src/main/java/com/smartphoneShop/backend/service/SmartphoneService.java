package com.smartphoneShop.backend.service;

import com.smartphoneShop.backend.dao.entity.Smartphones;
import com.smartphoneShop.backend.exception.RecordNotFoundException;

import java.util.List;


public interface SmartphoneService {

    List<Smartphones> getAllSmartphones();

    Smartphones saveSmartphone(Smartphones smartphones);

    Smartphones updateSmartphone(Smartphones smartphones);

    void deleteSmartphone(int id) throws RecordNotFoundException;

}

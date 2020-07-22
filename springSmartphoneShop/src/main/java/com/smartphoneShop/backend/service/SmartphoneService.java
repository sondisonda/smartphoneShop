package com.smartphoneShop.backend.service;

import com.smartphoneShop.backend.dao.entity.Smartphone;
import com.smartphoneShop.backend.exception.RecordNotFoundException;

import java.util.List;


public interface SmartphoneService {

    List<Smartphone> getAllSmartphones();

    Smartphone saveSmartphone(Smartphone smartphone);

    Smartphone updateSmartphone(Smartphone smartphone) throws Exception;

    void deleteSmartphone(int id) throws RecordNotFoundException;

}

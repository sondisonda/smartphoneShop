package com.smartphoneShop.backend.service;

import com.smartphoneShop.backend.dao.entity.Smartphones;

import java.util.List;
import java.util.Optional;


public interface SmartphoneService {

    List<Smartphones> getAllSmartphones();

    Smartphones saveSmartphone(Smartphones smartphone);

    Smartphones updateSmartphone(Smartphones smartphone) throws Exception;

    void deleteById(long id);

}

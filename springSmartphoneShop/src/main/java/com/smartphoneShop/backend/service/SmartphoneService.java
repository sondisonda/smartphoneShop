package com.smartphoneShop.backend.service;

import com.smartphoneShop.backend.dao.entity.Smartphones;

import java.util.List;
import java.util.Optional;


public interface SmartphoneService {

    List<Smartphones> getAllSmartphones();

    Smartphones saveSmartphone(Smartphones smartphone);

    void updateSmartphone(Smartphones smartphone, long id) throws Exception;

    void deleteSmartphone(long id);

    Optional<Smartphones> findById(long id);
}

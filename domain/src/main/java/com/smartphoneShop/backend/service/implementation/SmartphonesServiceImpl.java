package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.entity.Smartphones;
import com.smartphoneShop.backend.repository.SmartphonesRepository;
import com.smartphoneShop.backend.service.SmartphonesService;

import java.util.List;

public class SmartphonesServiceImpl implements SmartphonesService {

    private SmartphonesRepository smartphonesRepository;

    public SmartphonesServiceImpl(SmartphonesRepository smartphonesRepository) {
        this.smartphonesRepository = smartphonesRepository;
    }


    @Override
    public List<Smartphones> getAllSmartphones() {
        return this.smartphonesRepository.findAll();
    }

    @Override
    public Smartphones addSmartphone(Smartphones smartphone) {
        return smartphonesRepository.save(smartphone);
    }

    @Override
    public Smartphones editSmartphone(Smartphones smartphone) {
        return smartphonesRepository.save(smartphone);
    }

    @Override
    public void deleteSmartphone(int id) {
        this.smartphonesRepository.deleteById(id);
    }

}

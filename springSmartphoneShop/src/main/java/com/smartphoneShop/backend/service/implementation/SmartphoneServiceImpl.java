package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.entity.Smartphones;
import com.smartphoneShop.backend.repository.SmartphonesRepository;
import com.smartphoneShop.backend.service.SmartphoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
//
@Service
public class SmartphoneServiceImpl implements SmartphoneService {


    private final SmartphonesRepository smartphonesRepository;

    public SmartphoneServiceImpl(SmartphonesRepository smartphonesRepository) {
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
    public void deleteSmartphone(long id) {
        this.smartphonesRepository.deleteById((int) id);
    }

}

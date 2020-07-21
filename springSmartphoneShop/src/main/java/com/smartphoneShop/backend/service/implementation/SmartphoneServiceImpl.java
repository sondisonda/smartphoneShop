package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.entity.Smartphones;
import com.smartphoneShop.backend.exception.RecordNotFoundException;
import com.smartphoneShop.backend.repository.SmartphonesRepository;
import com.smartphoneShop.backend.service.SmartphoneService;
import org.springframework.stereotype.Service;
import java.util.List;

import java.util.List;
import java.util.Optional;

@Service
public class SmartphoneServiceImpl implements SmartphoneService {


    private final SmartphonesRepository smartphonesRepository;
    private final String message = "Smartphones";

    public SmartphoneServiceImpl(SmartphonesRepository smartphonesRepository) {
        this.smartphonesRepository = smartphonesRepository;
    }


    @Override
    public List<Smartphones> getAllSmartphones() {
        return this.smartphonesRepository.findAll();
    }

    @Override
    public Smartphones saveSmartphone(Smartphones smartphone) {
        return smartphonesRepository.save(smartphone);
    }

    @Override
    public Smartphones updateSmartphone(Smartphones smartphone) throws Exception {
        return smartphonesRepository.save(smartphone);
    }

    @Override
    public void deleteSmartphone(int id) throws RecordNotFoundException{

        try {
            smartphonesRepository.deleteById( id);
        }
        catch(Exception e){
            throw new RecordNotFoundException(message);
        }
    }


}

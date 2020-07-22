package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.entity.Smartphone;
import com.smartphoneShop.backend.exception.RecordNotFoundException;
import com.smartphoneShop.backend.repository.SmartphoneRepository;
import com.smartphoneShop.backend.service.SmartphoneService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SmartphoneServiceImpl implements SmartphoneService {


    private final SmartphoneRepository smartphoneRepository;
    private final String message = "Smartphones";

    public SmartphoneServiceImpl(SmartphoneRepository smartphoneRepository) {
        this.smartphoneRepository = smartphoneRepository;
    }


    @Override
    public List<Smartphone> getAllSmartphones() {
        return this.smartphoneRepository.findAll();
    }

    @Override
    public Smartphone saveSmartphone(Smartphone smartphone) {
        return smartphoneRepository.save(smartphone);
    }

    @Override
    public Smartphone updateSmartphone(Smartphone smartphone) throws Exception {
        return smartphoneRepository.save(smartphone);
    }

    @Override
    public void deleteSmartphone(int id) throws RecordNotFoundException{

        try {
            smartphoneRepository.deleteById( id);
        }
        catch(Exception e){
            throw new RecordNotFoundException(message);
        }
    }


}

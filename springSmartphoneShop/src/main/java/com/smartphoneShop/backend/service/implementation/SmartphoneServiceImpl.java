package com.smartphoneShop.backend.service.implementation;

import com.smartphoneShop.backend.dao.entity.Smartphones;
import com.smartphoneShop.backend.repository.SmartphonesRepository;
import com.smartphoneShop.backend.service.SmartphoneService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public Smartphones saveSmartphone(Smartphones smartphone) {
        return smartphonesRepository.save(smartphone);
    }

    @Override
    public void deleteSmartphone(long id) {
        this.smartphonesRepository.deleteById((int) id);
    }

    @Override
    public Optional<Smartphones> findById(long id) {
        return Optional.empty();
    }

    @Override
    public void updateSmartphone(Smartphones smartphone, long id) throws Exception {
        Smartphones smartphoneFromData = this.smartphonesRepository.findById(Math.toIntExact(id))
                .orElseThrow(Exception::new);
        smartphoneFromData.setId(id);
        smartphoneFromData.setBrand(smartphone.getBrand());
        smartphoneFromData.setModel(smartphone.getModel());
        smartphoneFromData.setPrize(smartphone.getPrize());
        smartphoneFromData.setStock(smartphone.getStock());
        this.smartphonesRepository.save(smartphoneFromData);
    }



}

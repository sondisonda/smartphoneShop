package com.smartphoneShop.backend.controller;


import com.smartphoneShop.backend.dao.entity.Smartphone;
import com.smartphoneShop.backend.service.SmartphoneService;
import com.smartphoneShop.backend.exception.RecordNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/smartphones")
public class SmartphoneController {

    private final SmartphoneService smartphoneService;


    public SmartphoneController(SmartphoneService smartphonesService){
        this.smartphoneService = smartphonesService;
    }

    @GetMapping
    public List<Smartphone> getAllSmartphones(){
        return smartphoneService.getAllSmartphones();
    }

    @PostMapping("/add")
    public Smartphone addSmartphone(@RequestBody Smartphone smartphone){
        return smartphoneService.saveSmartphone(smartphone);
    }


    @PutMapping
    public Smartphone updateSmartphone(@RequestBody Smartphone smartphone) throws Exception{
        return smartphoneService.updateSmartphone(smartphone);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteSmartphone(@PathVariable int id) throws RecordNotFoundException {
        this.smartphoneService.deleteSmartphone(id);
    }

      
}

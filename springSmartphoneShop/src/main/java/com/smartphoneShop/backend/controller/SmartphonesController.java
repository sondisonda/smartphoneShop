package com.smartphoneShop.backend.controller;


import com.smartphoneShop.backend.dao.entity.Smartphones;
import com.smartphoneShop.backend.service.SmartphoneService;
import com.smartphoneShop.backend.exception.RecordNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/smartphones")
public class SmartphonesController {

    private final SmartphoneService smartphoneService;


    public SmartphonesController(SmartphoneService smartphonesService){
        this.smartphoneService = smartphonesService;
    }

    @GetMapping
    public List<Smartphones> getAllSmartphones(){
        return smartphoneService.getAllSmartphones();
    }

    @PostMapping("/add")
    public Smartphones addSmartphone(@RequestBody Smartphones smartphone){
        return smartphoneService.saveSmartphone(smartphone);
    }


    @PutMapping
    public Smartphones updateSmartphone(@RequestBody Smartphones smartphone) throws Exception{
        return smartphoneService.updateSmartphone(smartphone);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteSmartphone(@PathVariable int id) throws RecordNotFoundException {
        this.smartphoneService.deleteSmartphone(id);
    }

      
}

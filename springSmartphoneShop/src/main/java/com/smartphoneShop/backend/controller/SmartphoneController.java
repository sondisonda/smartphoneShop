package com.smartphoneShop.backend.controller;


import com.smartphoneShop.backend.dao.entity.Smartphones;
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


    public SmartphoneController(SmartphoneService smartphonesService) {
        this.smartphoneService = smartphonesService;
    }

    @GetMapping
    public List<Smartphones> getAllSmartphones() {
        return smartphoneService.getAllSmartphones();
    }

    @PostMapping
    public Smartphones addSmartphone(@RequestBody Smartphones smartphones) {
        return smartphoneService.saveSmartphone(smartphones);
    }

    @PutMapping
    public Smartphones updateSmartphone(@RequestBody Smartphones smartphones) {
        return smartphoneService.updateSmartphone(smartphones);
    }

    @DeleteMapping("/{id}")
    public void deleteSmartphone(@PathVariable int id) throws RecordNotFoundException {
        this.smartphoneService.deleteSmartphone(id);
    }


}

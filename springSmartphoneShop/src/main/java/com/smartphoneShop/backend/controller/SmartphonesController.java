package com.smartphoneShop.backend.controller;


import com.smartphoneShop.backend.dao.entity.Smartphones;
import com.smartphoneShop.backend.service.SmartphoneService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/smartphones")
public class SmartphonesController {

    private final SmartphoneService smartphoneService;


    public SmartphonesController(SmartphoneService smartphonesService){
        this.smartphoneService = smartphonesService;
    }

    @GetMapping("/getall")
    public List<Smartphones> getAllSmartphones(){
        return smartphoneService.getAllSmartphones();
    }

    @PostMapping("/add")
    public Smartphones addSmartphone(@RequestBody Smartphones smartphone){
        return smartphoneService.addSmartphone(smartphone);
    }
// id w path
    @PutMapping
    public Smartphones editSmartphone(@RequestBody Smartphones smartphone){
        return smartphoneService.editSmartphone(smartphone);
    }



}

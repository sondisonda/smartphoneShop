package com.smartphoneShop.backend.controller;


import com.smartphoneShop.backend.dao.entity.Smartphones;
import com.smartphoneShop.backend.service.SmartphonesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/smartphones")
public class SmartphonesController {

    SmartphonesService smartphonesService;


    public SmartphonesController(SmartphonesService smartphonesService){
        this.smartphonesService = smartphonesService;
    }

    @GetMapping()
    public List<Smartphones> getAllSmartphones(){
        return smartphonesService.getAllSmartphones();
    }

    @PostMapping
    public Smartphones addSmartphone(@RequestBody Smartphones smartphone){
        return smartphonesService.addSmartphone(smartphone);
    }

    @PutMapping
    public Smartphones editSmartphone(@RequestBody Smartphones smartphone){
        return smartphonesService.editSmartphone(smartphone);
    }



}
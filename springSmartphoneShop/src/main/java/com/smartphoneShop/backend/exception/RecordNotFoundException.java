package com.smartphoneShop.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class RecordNotFoundException extends Throwable {
    public RecordNotFoundException(String message){
        super(message+" has no record with given ID");
        httpStatus(message);

    }
//    RepsonseEntity zwraca coś ;)
    public ResponseEntity httpStatus(String message){
        return new ResponseEntity<>(message+" has no record with given ID", HttpStatus.BAD_REQUEST);
    }
}
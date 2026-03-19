package com.example.nokia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.nokia.entity.Shift;
import com.example.nokia.service.ShiftService;

@RestController
@CrossOrigin
@RequestMapping("/api/shifts")
public class ShiftController {

    @Autowired
    private ShiftService service;

    // GET ALL
    @GetMapping
    public List<Shift> getShifts(){
        return service.getAllShifts();
    }

    // ADD
    @PostMapping
    public Shift addShift(@RequestBody Shift shift){
        return service.addShift(shift);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String deleteShift(@PathVariable int id){
        service.deleteShift(id);
        return "Deleted";
    }

    // UPDATE
    @PutMapping("/{id}")
    public Shift updateShift(@PathVariable int id, @RequestBody Shift shift){
        return service.updateShift(id, shift);
    }
}
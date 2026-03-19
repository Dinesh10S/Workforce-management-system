package com.example.nokia.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.nokia.entity.Shift;
import com.example.nokia.repository.ShiftRepository;

@Service
public class ShiftService {

    @Autowired
    private ShiftRepository repo;

    // get all
    public List<Shift> getAllShifts(){
        return repo.findAll();
    }

    // add
    public Shift addShift(Shift shift){
        return repo.save(shift);
    }

    // delete
    public void deleteShift(int id){
        repo.deleteById(id);
    }

    // update
    public Shift updateShift(int id, Shift newShift){

        Shift s = repo.findById(id).orElse(null);

        if(s != null){
            s.setEmpId(newShift.getEmpId());
            s.setShift(newShift.getShift());
            s.setDate(newShift.getDate());

            return repo.save(s);
        }

        return null;
    }
}
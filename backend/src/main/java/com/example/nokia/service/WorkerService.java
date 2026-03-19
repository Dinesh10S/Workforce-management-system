package com.example.nokia.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.nokia.entity.Worker;
import com.example.nokia.repository.WorkerRepository;

@Service
public class WorkerService {

    @Autowired
    private WorkerRepository repo;

    // Get all
    public List<Worker> getAllWorkers(){
        return repo.findAll();
    }

    // Add
    public Worker addWorker(Worker worker){
        return repo.save(worker);
    }

    // Delete
    public void deleteWorker(int id){
        repo.deleteById(id);
    }

    // Update
    public Worker updateWorker(int id, Worker newWorker){

        Worker w = repo.findById(id).orElse(null);

        if(w != null){
            w.setName(newWorker.getName());
            w.setDepartment(newWorker.getDepartment());
            w.setPhone(newWorker.getPhone());
            w.setEmpId(newWorker.getEmpId());

            return repo.save(w);
        }

        return null;
    }
}
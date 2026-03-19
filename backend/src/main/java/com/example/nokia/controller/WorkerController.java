package com.example.nokia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.nokia.entity.Worker;
import com.example.nokia.service.WorkerService;

@RestController
@CrossOrigin
@RequestMapping("/api/workers")
public class WorkerController {

    @Autowired
    private WorkerService service;

    // GET ALL
    @GetMapping
    public List<Worker> getWorkers(){
        return service.getAllWorkers();
    }

    // ADD
    @PostMapping
    public Worker addWorker(@RequestBody Worker worker){
        return service.addWorker(worker);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String deleteWorker(@PathVariable int id){
        service.deleteWorker(id);
        return "Deleted";
    }

    // UPDATE
    @PutMapping("/{id}")
    public Worker updateWorker(@PathVariable int id, @RequestBody Worker worker){
        return service.updateWorker(id, worker);
    }
}
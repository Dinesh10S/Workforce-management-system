package com.example.nokia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.nokia.service.AttendanceService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    @PostMapping("/attendance")
    public Map<String,String> markAttendance(@RequestBody Map<String,String> request){

        String userId = request.get("userId");

        attendanceService.markAttendance(userId);

        Map<String,String> response = new HashMap<>();
        response.put("status","success");

        return response;
    }
}
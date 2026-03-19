package com.example.nokia.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.nokia.entity.Attendance;
import com.example.nokia.repository.AttendanceRepository;

import java.time.LocalDate;

@Service
public class AttendanceService {

    @Autowired
    private AttendanceRepository attendanceRepository;

    public Attendance markAttendance(String userId){

        Attendance attendance = new Attendance();

        attendance.setUserId(userId);
        attendance.setDate(LocalDate.now());
        attendance.setStatus("PRESENT");

        return attendanceRepository.save(attendance);
    }
}
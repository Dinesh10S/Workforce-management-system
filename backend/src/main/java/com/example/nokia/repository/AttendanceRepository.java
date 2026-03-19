package com.example.nokia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.nokia.entity.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance,Integer> {

}
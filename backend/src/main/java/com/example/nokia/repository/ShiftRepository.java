package com.example.nokia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.nokia.entity.Shift;

public interface ShiftRepository extends JpaRepository<Shift, Integer> {
}
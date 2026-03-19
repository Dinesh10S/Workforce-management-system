package com.example.nokia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.nokia.entity.Worker;

public interface WorkerRepository extends JpaRepository<Worker, Integer> {
}
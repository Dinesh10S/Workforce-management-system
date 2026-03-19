package com.example.nokia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.nokia.entity.User;

public interface UserRepository extends JpaRepository<User,Integer> {

    User findByUserId(String userId);

}
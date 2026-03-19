package com.example.nokia.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.nokia.entity.User;
import com.example.nokia.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User login(String userId, String password){

        User user = userRepository.findByUserId(userId);

        if(user != null && user.getPassword().equals(password)){
            return user;
        }

        return null;
    }
}
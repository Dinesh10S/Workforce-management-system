package com.example.nokia.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.nokia.entity.User;
import com.example.nokia.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public Map<String,Object> login(@RequestBody Map<String,String> request){

        String userId = request.get("userId");
        String password = request.get("password");

        Map<String,Object> response = new HashMap<>();

        User user = userService.login(userId,password);

        if(user != null){
            response.put("status","success");
            response.put("role",user.getRole());
        }else{
            response.put("status","error");
        }

        return response;
    }
}
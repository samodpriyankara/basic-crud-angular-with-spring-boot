package com.crud1.crud1.controller;

import com.crud1.crud1.Entity.User;
import com.crud1.crud1.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")

public class UserController {
    @Autowired
    private UserRepo userRepo;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        userRepo.save(user);
        return "Hi " + user.getName() + " your Registration process successfully completed";
    }

    @GetMapping("/getAllUsers")
    public List<User> findAllUsers() {
        return userRepo.findAll();
    }

    @GetMapping("/findUser/{email}")
    public List<User> findUser(@PathVariable String email) {
        return userRepo.findByEmail(email);
    }

    @DeleteMapping("/cancel/{id}")
    public List<User> cancelRegistration(@PathVariable int id) {
        userRepo.deleteById(id);
        return userRepo.findAll();
    }

}

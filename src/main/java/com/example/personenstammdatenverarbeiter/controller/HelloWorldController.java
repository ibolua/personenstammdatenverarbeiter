package com.example.personenstammdatenverarbeiter.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping("/hallo")
    public String hallo() {
        return "Hello World!";
    }

    @GetMapping("/")
    public String homepage() {
        return "Die Hauptseite!";
    }

}

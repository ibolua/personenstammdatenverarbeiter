package com.example.personenstammdatenverarbeiter.person;

import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PersonController {
    Logger logger = LoggerFactory.getLogger(PersonController.class);

    private final PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @PostMapping("/person")
    public ResponseEntity<Person> personPost(@RequestBody Person person) {
        Person savedPerson = personService.savePerson(person);
        return ResponseEntity.ok(savedPerson);
    }

    @DeleteMapping("person/{id}")
    public ResponseEntity<Integer> deletePerson(@PathVariable Long id) {
        personService.deletePersonWithId(id);
        return ResponseEntity.ok(200);
    }

    @GetMapping("person/{id}")
    public ResponseEntity<Optional<Person>> getPersonById(@PathVariable Long id) {
        Optional<Person> foundPerson = personService.findPerson(id);
        return ResponseEntity.ok(foundPerson);
    }

}

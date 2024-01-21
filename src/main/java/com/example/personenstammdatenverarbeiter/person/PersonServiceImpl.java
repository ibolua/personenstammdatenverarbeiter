package com.example.personenstammdatenverarbeiter.person;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.example.personenstammdatenverarbeiter.Address;

@Service
public class PersonServiceImpl implements PersonService {
    Logger logger = LoggerFactory.getLogger(PersonServiceImpl.class);

    private final PersonRepository personRepository;

    public PersonServiceImpl(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    public Person savePerson(Person person) {
        for (Address address : person.getAddresses()) {
            address.setPerson(person);
        }
        return personRepository.save(person);
    }

    @Override
    public Optional<Person> findPerson(long id) {
        return personRepository.findById(id);
    }

    @Override
    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }

    @Override
    public void deletePersonWithId(long id) {
        personRepository.deleteById(id);
    }

    @Override
    public Person updatePersonWithId(long id, Person newPersonData) {
        Optional<Person> personOptional = personRepository.findById(id);
        if (personOptional.isPresent()) {
            Person person = personOptional.get();
            person.setSalutation(newPersonData.getSalutation());
            person.setEmail(newPersonData.getEmail());
            person.setBirthday(newPersonData.getBirthday());
            person.setAddresses(newPersonData.getAddresses());
            return personRepository.save(person);
        } else {
            throw new RuntimeException("Person with ID " + id + " not found");
        }
    }

}

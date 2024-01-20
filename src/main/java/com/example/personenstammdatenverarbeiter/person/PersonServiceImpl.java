package com.example.personenstammdatenverarbeiter.person;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class PersonServiceImpl implements PersonService {
    Logger logger = LoggerFactory.getLogger(PersonServiceImpl.class);

    private final PersonRepository personRepository;

    public PersonServiceImpl(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    public Person savePerson(Person person) {
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

    // @Override
    // public List<Person> getAllPersons() {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'getAllPersons'");
    // }

    // @Override
    // public void updatePersonWithId(long id) {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'updatePersonWithId'");
    // }

    // @Override
    // public Optional<Person> searchPersonWithId(Long id) {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'searchPersonWithId'");
    // }

    // @Override
    // public String allAdressesFromPerson(long id) {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'allAdressesFromPerson'");
    // }

    // @Override
    // public String deleteAdressesFromPerson(long id) {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'deleteAdressesFromPerson'");
    // }

}

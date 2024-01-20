package com.example.personenstammdatenverarbeiter.person;

import java.util.List;
import java.util.Optional;

// import java.util.List;
// import java.util.Optional;

public interface PersonService {
    public Person savePerson(Person person);

    public Optional<Person> findPerson(long id);

    public void deletePersonWithId(long id);

    public List<Person> getAllPersons();

    // public void updatePersonWithId(long id);

    // public Optional<Person> searchPersonWithId(Long id);

    // public String allAdressesFromPerson(long id);

    // public String deleteAdressesFromPerson(long id);

}

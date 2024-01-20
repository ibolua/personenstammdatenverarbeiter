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

    public Person updatePersonWithId(long id, Person person);

    // public String allAdressesFromPerson(long id);

    // public String deleteAdressesFromPerson(long id);

}

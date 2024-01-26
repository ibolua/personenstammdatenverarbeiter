package com.example.personenstammdatenverarbeiter.address;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import java.util.List;

import com.example.personenstammdatenverarbeiter.person.Person;
import com.example.personenstammdatenverarbeiter.person.PersonRepository;

import jakarta.transaction.Transactional;

@Service
public class AddressServiceImpl implements AddressService {

    private final PersonRepository personRepository;

    public AddressServiceImpl(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Transactional
    public Address addAddressToPerson(long personId, Address address) {
        Person person = personRepository.findById(personId).orElseThrow();
        address.setPerson(person);
        person.getAddresses().add(address);
        personRepository.save(person);
        return address;
    }

    @Transactional
    public List<Address> getAllAddressesForPerson(long personId) {
        Person person = personRepository.findById(personId).orElseThrow();
        return new ArrayList<>(person.getAddresses());
    }

    @Transactional
    public void deleteAddressFromPerson(long personId, long addressId) {
        Person person = personRepository.findById(personId).orElseThrow();
        person.getAddresses().removeIf(address -> address.getId() == addressId);
        personRepository.save(person);
    }

}

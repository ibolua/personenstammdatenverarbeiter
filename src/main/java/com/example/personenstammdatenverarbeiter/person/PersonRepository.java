package com.example.personenstammdatenverarbeiter.person;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> {

    void deleteById(Long id);

}

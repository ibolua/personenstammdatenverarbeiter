import React, { useEffect, useState } from "react";
import axios from "axios";
import Person from "./Person";
import Navbar from "./StatusBar";

function PersonList() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    async function fetchPersons() {
      console.log(`http://localhost:9090/api/person/all`);
      const response = await axios.get(`/api/person/all`);

      if (response.status === 200) {
        const fetchedPerson = response.data;
        console.log(fetchedPerson);
        setPersons([...fetchedPerson]);
      } else {
        console.log("not success");
      }
    }

    fetchPersons();
  }, []);

  const person = {
    salutation: "MALE",
    firstname: "John",
    lastname: "Stone",
    email: "abc@email.com",
    birthday: "1995-05-05",
    addresses: [
      {
        label: "PRIVATE",
        streetname: "Musterstraße",
        houseNumber: "1",
        postcode: "12345",
        location: "Musterstadt",
      },
      {
        label: "BUSINESS",
        streetname: "Geschäftsstraße",
        houseNumber: "2",
        postcode: "67890",
        location: "Business City",
      },
    ],
  };

  const createPerson = async () => {
    try {
      const response = await axios({
        method: "post",
        url: `api/person`,
        headers: {},
        data: person,
      });
      if (response.status === 200) {
        setPersons((person) => [...persons, response.data]);
      }
    } catch (error) {
      console.error("Failed too create a Person", error);
    }
  };

  const deletePerson = async (id) => {
    try {
      const response = await axios.delete(`/api/person/${id}`);
      if (response.status === 200) {
        setPersons(persons.filter((person) => person.id !== id));
      }
    } catch (error) {
      console.error("Failed too delete Person", error);
    }
  };

  const editPerson = async () => {};

  return (
    <div>
      <Navbar />
      {persons.map((person) => (
        <div key={person.id}>
          <Person
            person={person}
            onDelete={deletePerson}
            onEdit={editPerson}
            onCreate={createPerson}
          />
        </div>
      ))}
    </div>
  );
}

export default PersonList;

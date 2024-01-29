import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "../store";

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

function PersonAdd() {
  const persons = useStore((state) => state.persons);
  const setPersons = useStore((state) => state.setPersons);

  const createPerson = async () => {
    try {
      const response = await axios({
        method: "post",
        url: `api/person`,
        headers: {},
        data: person,
      });
      if (response.status === 200) {
        setPersons([...persons, response.data]);
      }
    } catch (error) {
      console.error("Failed too create a Person", error);
    }
  };

  return (
    <>
      <div>feld 1</div>
      <div>feld 2 usw.</div>
      <button onClick={() => createPerson()}>Save Person</button>
    </>
  );
}

export default PersonAdd;

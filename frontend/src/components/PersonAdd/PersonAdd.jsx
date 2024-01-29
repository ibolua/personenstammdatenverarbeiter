import React from "react";
import axios from "axios";
import { useStore } from "../../store";
import Salutation from "./Salutation";
import Firstname from "./Firstname";
import Lastname from "./Lastname";
import Email from "./Email";
import Birthday from "./Birthday";
import AddressList from "./Address/AddressList";

const person = {
  salutation: "DIVERSE",
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
      streetname: "Musterstraße",
      houseNumber: "1",
      postcode: "12345",
      location: "Musterstadt",
    },
    {
      label: "DELIVERY_ADDRESS",
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

  const handleSubmit = async () => {
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
      <form onSubmit={handleSubmit}>
        <Salutation></Salutation>
        <Firstname></Firstname>
        <Lastname></Lastname>
        <Email></Email>
        <Birthday></Birthday>
        <AddressList></AddressList>
      </form>

      <button onClick={() => handleSubmit()}>Save Person</button>
    </>
  );
}

export default PersonAdd;

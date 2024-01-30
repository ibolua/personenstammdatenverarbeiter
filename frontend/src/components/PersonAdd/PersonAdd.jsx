import React from "react";
import axios from "axios";
import Salutation from "./Salutation";
import Firstname from "./Firstname";
import Lastname from "./Lastname";
import Email from "./Email";
import Birthday from "./Birthday";
import AddressList from "./Address/AddressList";
import { usePersonForm } from "./PersonFormContext";

function PersonAdd() {
  const { personData, setPersonData, errors, validateForm } = usePersonForm();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("personData: ", personData);

    if (!validateForm()) {
      console.error("Validierungsfehler: ", errors);
      return;
    }

    try {
      const response = await axios.post(`api/person`, personData);
      if (response.status === 200) {
        setPersonData([...personData, response.data]);
      }
    } catch (error) {
      console.error("Failed too create a Person", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Salutation />
        <Firstname />
        <Lastname />
        <Email />
        <Birthday />
        <AddressList />
        <button onClick={(e) => handleSubmit(e)}>Save Person</button>
      </form>
    </>
  );
}

export default PersonAdd;

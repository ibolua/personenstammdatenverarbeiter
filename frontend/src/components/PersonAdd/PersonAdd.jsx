import React, { useState } from "react";
import axios from "axios";
import { useStore } from "../../store";
import Salutation from "./Salutation";
import Firstname from "./Firstname";
import Lastname from "./Lastname";
import Email from "./Email";
import Birthday from "./Birthday";
import AddressList from "./Address/AddressList";

function PersonAdd() {
  const persons = useStore((state) => state.persons);
  const setPersons = useStore((state) => state.setPersons);

  const [personData, setPersonData] = useState({
    salutation: "",
    firstname: "",
    lastname: "",
    email: "",
    birthday: "",
    addresses: [{ label: "", streetname: "", houseNumber: "", postcode: "", location: "" }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("personData: ", personData);
    return;
    try {
      const response = await axios.post(`api/person`, personData);
      if (response.status === 200) {
        setPersons([...persons, response.data]);
      }
    } catch (error) {
      console.error("Failed too create a Person", error);
    }
  };

  const handlePersonInputChange = (name, value) => {
    setPersonData({ ...personData, [name]: value });
  };

  const handleAddressChange = (index, name, value) => {
    const updatedAddresses = personData.addresses.map((address, idx) =>
      idx === index ? { ...address, [name]: value } : address
    );
    setPersonData({ ...personData, addresses: updatedAddresses });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Salutation onChange={(value) => handlePersonInputChange("salutation", value)}></Salutation>
        <Firstname onChange={(value) => handlePersonInputChange("firstname", value)}></Firstname>
        <Lastname onChange={(value) => handlePersonInputChange("lastname", value)}></Lastname>
        <Email onChange={(value) => handlePersonInputChange("email", value)}></Email>
        <Birthday onChange={(value) => handlePersonInputChange("birthday", value)}></Birthday>
        <AddressList onAddressChange={handleAddressChange} />
        <button onClick={(e) => handleSubmit(e)}>Save Person</button>
      </form>
    </>
  );
}

export default PersonAdd;

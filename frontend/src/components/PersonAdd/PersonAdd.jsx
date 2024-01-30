import React, { useState } from "react";
import axios from "axios";
import { useStore } from "../../store";
import Salutation from "./Salutation";
import Firstname from "./Firstname";
import Lastname from "./Lastname";
import Email from "./Email";
import Birthday from "./Birthday";
import AddressList from "./Address/AddressList";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const NAME_REGEX = /^[a-z ,.'-]+$/i;
const EARLIEST_BIRTHDAY_DATE = "1900-01-01";

function PersonAdd() {
  const persons = useStore((state) => state.persons);
  const setPersons = useStore((state) => state.setPersons);
  const [errors, setErrors] = useState({});

  const [personData, setPersonData] = useState({
    salutation: "",
    firstname: "",
    lastname: "",
    email: "",
    birthday: "",
    addresses: [{ label: "", streetname: "", houseNumber: "", postcode: "", location: "" }],
  });

  const isValidBirthday = (birthday) => {
    const date = new Date(birthday);
    const today = new Date();
    const earliestDate = new Date(EARLIEST_BIRTHDAY_DATE);
    return date <= today && date >= earliestDate;
  };

  const validate = () => {
    let tempErrors = {};
    if (!personData.salutation.trim()) tempErrors.salutation = "Pflichtfeld";
    if (!personData.firstname.trim()) tempErrors.firstname = "Pflichtfeld";
    else if (!NAME_REGEX.test(personData.firstname)) {
      tempErrors.firstname = "Ungültiger Vorname";
    }
    if (!personData.lastname.trim()) tempErrors.lastname = "Pflichtfeld";
    else if (!NAME_REGEX.test(personData.lastname)) {
      tempErrors.lastname = "Ungültiger Nachname";
    }
    if (!personData.email.trim()) tempErrors.email = "Pflichtfeld";
    else if (!EMAIL_REGEX.test(personData.email)) {
      tempErrors.email = "Nicht gültige Email";
    }
    if (!personData.birthday.trim()) tempErrors.birthday = "Pflichtfeld";
    else if (!isValidBirthday(personData.birthday)) {
      tempErrors.birthday = "Nicht gültiger Geburtstag";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("personData: ", personData);

    if (!validate()) {
      console.error("Validierungsfehler: ", errors);
      return;
    }

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
    <form onSubmit={handleSubmit}>
      <Salutation
        onChange={(value) => handlePersonInputChange("salutation", value)}
        error={errors.salutation}></Salutation>
      <Firstname
        onChange={(value) => handlePersonInputChange("firstname", value)}
        error={errors.firstname}></Firstname>
      <Lastname
        onChange={(value) => handlePersonInputChange("lastname", value)}
        error={errors.lastname}></Lastname>
      <Email
        onChange={(value) => handlePersonInputChange("email", value)}
        error={errors.email}></Email>
      <Birthday
        onChange={(value) => handlePersonInputChange("birthday", value)}
        error={errors.birthday}></Birthday>
      <AddressList onAddressChange={handleAddressChange} />
      <button onClick={(e) => handleSubmit(e)}>Save Person</button>
    </form>
  );
}

export default PersonAdd;

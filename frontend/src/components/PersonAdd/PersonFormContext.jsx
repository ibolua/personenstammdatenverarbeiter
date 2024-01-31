import React, { createContext, useContext, useState } from "react";

const PersonFormContext = createContext();

export const usePersonForm = () => useContext(PersonFormContext);

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const NAME_REGEX = /^[a-z ,.'-]+$/i;
const EARLIEST_BIRTHDAY_DATE = "1900-01-01";
const POSTCODE_REGEX = /^[\d]{5}$/i;

export const PersonFormProvider = ({ children }) => {
  const emptyAddressFields = {
    label: "",
    streetname: "",
    houseNumber: "",
    postcode: "",
    location: "",
  };

  const [personData, setPersonData] = useState({
    salutation: "",
    firstname: "",
    lastname: "",
    email: "",
    birthday: "",
    addresses: [{ label: "", streetname: "", houseNumber: "", postcode: "", location: "" }],
  });

  const [errors, setErrors] = useState({});

  const handlePersonInputChange = (name, value) => {
    setPersonData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddressChange = (index, name, value) => {
    const updatedAddresses = personData.addresses.map((address, idx) =>
      idx === index ? { ...address, [name]: value } : address
    );
    setPersonData({ ...personData, addresses: updatedAddresses });
  };

  const isValidBirthday = (birthday) => {
    const date = new Date(birthday);
    const today = new Date();
    const earliestDate = new Date(EARLIEST_BIRTHDAY_DATE);
    return date <= today && date >= earliestDate;
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!personData.salutation.trim()) {
      tempErrors.salutation = "Pflichtfeld";
    }
    if (!personData.firstname.trim()) {
      tempErrors.firstname = "Pflichtfeld";
    } else if (!NAME_REGEX.test(personData.firstname)) {
      tempErrors.firstname = "Ungültiger Vorname";
    }
    if (!personData.lastname.trim()) {
      tempErrors.lastname = "Pflichtfeld";
    } else if (!NAME_REGEX.test(personData.lastname)) {
      tempErrors.lastname = "Ungültiger Nachname";
    }
    if (!personData.email.trim()) {
      tempErrors.email = "Pflichtfeld";
    } else if (!EMAIL_REGEX.test(personData.email)) {
      tempErrors.email = "Nicht gültige Email";
    }
    if (!personData.birthday.trim()) {
      tempErrors.birthday = "Pflichtfeld";
    } else if (!isValidBirthday(personData.birthday)) {
      tempErrors.birthday = "Nicht gültiger Geburtstag";
    }

    const addressErrors = personData.addresses.map((address) => {
      let addressError = {};
      if (!address.label.trim()) {
        addressError.label = "Pflichtfeld";
      }
      if (!address.streetname.trim()) {
        addressError.streetname = "Pflichtfeld";
      }
      if (!address.houseNumber.trim()) {
        addressError.houseNumber = "Pflichtfeld";
      }
      if (!address.postcode.trim()) {
        addressError.postcode = "Pflichtfeld";
      } else if (!POSTCODE_REGEX.test(address.postcode)) {
        addressError.postcode = "PLZ nicht gültig";
      }
      if (!address.location.trim()) {
        addressError.location = "Pflichtfeld";
      }
      return addressError;
    });

    if (addressErrors.some((error) => Object.keys(error).length > 0)) {
      tempErrors.addresses = addressErrors;
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return (
    <PersonFormContext.Provider
      value={{
        personData,
        setPersonData,
        emptyAddressFields,
        errors,
        setErrors,
        handlePersonInputChange,
        handleAddressChange,
        validateForm,
      }}>
      {children}
    </PersonFormContext.Provider>
  );
};

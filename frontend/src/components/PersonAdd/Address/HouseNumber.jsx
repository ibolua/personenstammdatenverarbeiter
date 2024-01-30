import React from "react";
import { usePersonForm } from "../PersonFormContext";

function HouseNumber({ index }) {
  const { personData, handleAddressChange, errors } = usePersonForm();

  const handleChange = (e) => {
    handleAddressChange(index, "houseNumber", e.target.value);
  };

  const error =
    errors.addresses && errors.addresses[index] ? errors.addresses[index].houseNumber : null;

  return (
    <>
      <label htmlFor="houseNumber">Hausnummer</label>
      <input
        type="text"
        id={`houseNumber-${index}`}
        name="houseNumber"
        value={personData.addresses[index].houseNumber}
        onChange={handleChange}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
}

export default HouseNumber;

import React from "react";
import { usePersonForm } from "../PersonFormContext";

function Location({ index }) {
  const { personData, handleAddressChange, errors } = usePersonForm();

  const handleChange = (e) => {
    handleAddressChange(index, "location", e.target.value);
  };

  const error =
    errors.addresses && errors.addresses[index] ? errors.addresses[index].location : null;

  return (
    <>
      <label htmlFor="location">Ort</label>
      <input
        type="text"
        id={`location-${index}`}
        name="location"
        value={personData.addresses[index].location}
        onChange={handleChange}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
}

export default Location;

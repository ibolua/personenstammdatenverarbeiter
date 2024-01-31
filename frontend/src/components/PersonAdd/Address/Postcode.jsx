import React from "react";
import { usePersonForm } from "../PersonFormContext";

function Postcode({ index }) {
  const { personData, handleAddressChange, errors } = usePersonForm();

  const handleChange = (e) => {
    handleAddressChange(index, "postcode", e.target.value);
  };

  const error =
    errors.addresses && errors.addresses[index] ? errors.addresses[index].postcode : null;

  return (
    <>
      <label htmlFor="postcode">PLZ</label>
      <input
        type="text"
        id={`postcode-${index}`}
        name="postcode"
        value={personData.addresses[index].postcode}
        onChange={handleChange}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
}

export default Postcode;

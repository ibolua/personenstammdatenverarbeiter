import React from "react";
import { usePersonForm } from "../PersonFormContext";

function Streetname({ index }) {
  const { personData, handleAddressChange, errors } = usePersonForm();

  const handleChange = (e) => {
    handleAddressChange(index, "streetname", e.target.value);
  };

  const error =
    errors.addresses && errors.addresses[index] ? errors.addresses[index].streetname : null;

  return (
    <>
      <label htmlFor="streetname">Straße</label>
      <input
        type="text"
        id={`streetname-${index}`}
        name="streetname"
        value={personData.addresses[index].streetname}
        onChange={handleChange}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
}

export default Streetname;

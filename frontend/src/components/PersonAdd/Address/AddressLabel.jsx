import React from "react";
import addressLabelOptions from "../../../options/addressLabelOptions";
import { usePersonForm } from "../PersonFormContext";

function AddressLabel({ index }) {
  const { personData, handleAddressChange, errors } = usePersonForm();

  const handleChange = (e) => {
    handleAddressChange(index, "label", e.target.value);
  };

  const error = errors.addresses && errors.addresses[index] ? errors.addresses[index].label : null;

  return (
    <>
      <label htmlFor="label">Label</label>
      <select
        id={`label-${index}`}
        name="label"
        value={personData.addresses[index].label}
        onChange={handleChange}>
        <option value="" disabled>
          Bitte auswählen
        </option>
        {Object.entries(addressLabelOptions).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
}

export default AddressLabel;

import React from "react";
import addressLabelOptions from "../../../options/addressLabelOptions";

function AddressLabel({ onChange }) {
  return (
    <>
      <label htmlFor="label">Label</label>
      <select defaultValue="" onChange={(e) => onChange("label", e.target.value)}>
        <option value="" disabled>
          Bitte auswählen...
        </option>
        {Object.entries(addressLabelOptions).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
}

export default AddressLabel;

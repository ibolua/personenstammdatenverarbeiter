import React, { useState } from "react";
import addressLabelOptions from "../../../options/addressLabelOptions";

function AddressLabel() {
  const [selectedAddressLabel, setSelectedAddressLabel] = useState("option1");

  const handleDropdownChange = (event) => {
    setSelectedAddressLabel(event.target.value);
  };
  return (
    <>
      <label htmlFor="label">Label</label>
      <select value={selectedAddressLabel} onChange={handleDropdownChange}>
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

import React, { useState } from "react";
import salutationOptions from "../../options/salutationOptions";

function Salutation() {
  const [selectedSalutation, setSelectedSalutation] = useState("option1");

  const handleDropdownChange = (event) => {
    setSelectedSalutation(event.target.value);
  };
  return (
    <>
      <label htmlFor="salutation">Anrede</label>
      <select value={selectedSalutation} onChange={handleDropdownChange}>
        {Object.entries(salutationOptions).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
}

export default Salutation;

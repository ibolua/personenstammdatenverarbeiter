import React from "react";
import salutationOptions from "../../options/salutationOptions";
import { usePersonForm } from "./PersonFormContext";

function Salutation() {
  const { personData, setPersonData, errors } = usePersonForm();

  const handleChange = (e) => {
    setPersonData({ ...personData, salutation: e.target.value });
  };
  return (
    <>
      <label htmlFor="salutation">Anrede</label>
      <select value={personData.salutation || ""} onChange={handleChange}>
        <option value="" disabled>
          Bitte auswählen
        </option>
        {Object.entries(salutationOptions).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {errors.salutation && <div style={{ color: "red" }}>{errors.salutation}</div>}
    </>
  );
}

export default Salutation;

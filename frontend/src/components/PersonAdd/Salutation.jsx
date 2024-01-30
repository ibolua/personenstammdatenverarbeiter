import React from "react";
import salutationOptions from "../../options/salutationOptions";

function Salutation({ onChange, error }) {
  return (
    <>
      <label htmlFor="salutation">Anrede</label>
      <select defaultValue="" onChange={(e) => onChange(e.target.value)}>
        <option value="" disabled>
          Bitte auswählen
        </option>
        {Object.entries(salutationOptions).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
}

export default Salutation;

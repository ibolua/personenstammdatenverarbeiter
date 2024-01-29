import React from "react";

function HouseNumber({ onChange }) {
  return (
    <>
      <label htmlFor="houseNumber">Hausnummer</label>
      <input
        type="text"
        id="houseNumber"
        name="houseNumber"
        onChange={(e) => onChange("houseNumber", e.target.value)}
      />
    </>
  );
}

export default HouseNumber;

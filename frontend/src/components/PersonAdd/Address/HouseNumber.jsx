import React, { useState } from "react";

function HouseNumber() {
  const [houseNumber, setHouseNumber] = useState("");

  const handleChange = (event) => {
    setHouseNumber(event.target.value);
  };
  return (
    <>
      <label htmlFor="houseNumber">Hausnummer</label>
      <input
        type="text"
        id="houseNumber"
        name="houseNumber"
        value={houseNumber}
        onChange={handleChange}
      />
    </>
  );
}

export default HouseNumber;

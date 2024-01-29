import React, { useState } from "react";

function Location() {
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <>
      <label htmlFor="location">Ort</label>
      <input type="text" id="location" name="location" value={location} onChange={handleChange} />
    </>
  );
}

export default Location;

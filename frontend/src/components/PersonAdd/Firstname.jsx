import React, { useState } from "react";

function Firstname() {
  const [firstname, setFirstname] = useState("");

  const handleChange = (event) => {
    setFirstname(event.target.value);
  };
  return (
    <>
      <label htmlFor="firstname">Vorname</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={firstname}
        onChange={handleChange}
      />
    </>
  );
}

export default Firstname;

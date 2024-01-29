import React, { useState } from "react";

function Lastname() {
  const [lastname, setLastname] = useState("");

  const handleChange = (event) => {
    setLastname(event.target.value);
  };
  return (
    <>
      <label htmlFor="lastname">Nachname</label>
      <input type="text" id="lastname" name="lastname" value={lastname} onChange={handleChange} />
    </>
  );
}

export default Lastname;

import React from "react";

function Lastname({ onChange }) {
  return (
    <>
      <label htmlFor="lastname">Nachname</label>
      <input type="text" id="lastname" name="lastname" onChange={(e) => onChange(e.target.value)} />
    </>
  );
}

export default Lastname;

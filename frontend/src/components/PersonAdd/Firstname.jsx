import React from "react";

function Firstname({ onChange }) {
  return (
    <>
      <label htmlFor="firstname">Vorname</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

export default Firstname;
